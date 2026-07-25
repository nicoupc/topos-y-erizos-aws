import * as cdk from 'aws-cdk-lib';
import { Construct } from 'constructs';
import * as dynamodb from 'aws-cdk-lib/aws-dynamodb';
import * as lambda from 'aws-cdk-lib/aws-lambda';
import * as logs from 'aws-cdk-lib/aws-logs';
import * as apigwv2 from 'aws-cdk-lib/aws-apigatewayv2';
import { HttpLambdaIntegration } from 'aws-cdk-lib/aws-apigatewayv2-integrations';
import * as cloudwatch from 'aws-cdk-lib/aws-cloudwatch';
import * as cwactions from 'aws-cdk-lib/aws-cloudwatch-actions';
import * as sns from 'aws-cdk-lib/aws-sns';
import * as path from 'path';

/**
 * LeaderboardStack: el backend del ranking de "Topos y Erizos".
 *
 * Flujo de un puntaje:
 *   juego -> API Gateway (HTTP API) -> Lambda (valida/sanea/escritura condicional) -> DynamoDB
 *
 * La Lambda es el UNICO que puede escribir la tabla (permiso minimo por IAM),
 * asi desaparece el bin publico de escritura abierta y el XSS via nombres.
 */
export class LeaderboardStack extends cdk.Stack {
  constructor(scope: Construct, id: string, props?: cdk.StackProps) {
    super(scope, id, props);

    // --- DynamoDB: tabla de puntajes (clave = playerId) ---
    const table = new dynamodb.Table(this, 'ScoresTable', {
      partitionKey: { name: 'id', type: dynamodb.AttributeType.STRING },
      billingMode: dynamodb.BillingMode.PAY_PER_REQUEST, // sin capacidad fija -> amigable con free-tier
      encryption: dynamodb.TableEncryption.AWS_MANAGED, // cifrado en reposo
      removalPolicy: cdk.RemovalPolicy.DESTROY, // hackathon: se limpia con `cdk destroy`
    });

    // --- Log group de la Lambda con retencion explicita (no "para siempre") ---
    const logGroup = new logs.LogGroup(this, 'HandlerLogs', {
      retention: logs.RetentionDays.ONE_WEEK,
      removalPolicy: cdk.RemovalPolicy.DESTROY,
    });

    // --- Lambda: el guardian (valida, sanea, escribe) ---
    const handler = new lambda.Function(this, 'LeaderboardHandler', {
      runtime: lambda.Runtime.NODEJS_22_X,
      handler: 'index.handler',
      code: lambda.Code.fromAsset(path.join(__dirname, '..', 'lambda')),
      timeout: cdk.Duration.seconds(10),
      memorySize: 256,
      environment: {
        TABLE_NAME: table.tableName, // nombre autogenerado, pasado por env
        MAX_SCORE: '1000000', // tope anti-cheat basico del lado servidor
      },
      logGroup,
    });

    // Permiso minimo: la Lambda solo puede leer/escribir ESTA tabla.
    table.grantReadWriteData(handler);

    // --- API Gateway HTTP API ---
    const integration = new HttpLambdaIntegration('LeaderboardIntegration', handler);

    const httpApi = new apigwv2.HttpApi(this, 'LeaderboardApi', {
      description: 'API del ranking de Topos y Erizos',
      corsPreflight: {
        // TODO(Fase 3): restringir al origen final del juego cuando definamos el hosting.
        allowOrigins: ['*'],
        allowMethods: [apigwv2.CorsHttpMethod.GET, apigwv2.CorsHttpMethod.POST],
        allowHeaders: ['Content-Type'],
      },
    });

    httpApi.addRoutes({
      path: '/scores',
      methods: [apigwv2.HttpMethod.GET],
      integration,
    });
    httpApi.addRoutes({
      path: '/scores',
      methods: [apigwv2.HttpMethod.POST],
      integration,
    });

    // Rate limiting GRATIS: throttling en el stage por defecto del HTTP API.
    const cfnStage = httpApi.defaultStage!.node.defaultChild as apigwv2.CfnStage;
    cfnStage.defaultRouteSettings = {
      throttlingBurstLimit: 20,
      throttlingRateLimit: 10,
    };

    // --- Observabilidad: alarmas sobre la salud de la Lambda ---
    // Excelencia Operativa (Well-Architected): si el API falla o se lentifica,
    // la alarma cambia de estado y publica un aviso en un topic SNS.
    const alarmTopic = new sns.Topic(this, 'AlarmTopic', {
      displayName: 'Alertas del ranking de Topos y Erizos',
    });

    const errorsAlarm = handler
      .metricErrors({ period: cdk.Duration.minutes(5) })
      .createAlarm(this, 'HandlerErrorsAlarm', {
        threshold: 1,
        evaluationPeriods: 1,
        comparisonOperator:
          cloudwatch.ComparisonOperator.GREATER_THAN_OR_EQUAL_TO_THRESHOLD,
        treatMissingData: cloudwatch.TreatMissingData.NOT_BREACHING,
        alarmDescription: 'La Lambda del ranking registro uno o mas errores',
      });
    errorsAlarm.addAlarmAction(new cwactions.SnsAction(alarmTopic));

    const latencyAlarm = handler
      .metricDuration({ period: cdk.Duration.minutes(5), statistic: 'p99' })
      .createAlarm(this, 'HandlerLatencyAlarm', {
        threshold: 3000, // ms
        evaluationPeriods: 3,
        comparisonOperator: cloudwatch.ComparisonOperator.GREATER_THAN_THRESHOLD,
        treatMissingData: cloudwatch.TreatMissingData.NOT_BREACHING,
        alarmDescription: 'Latencia p99 de la Lambda del ranking alta (>3s)',
      });
    latencyAlarm.addAlarmAction(new cwactions.SnsAction(alarmTopic));

    // --- Outputs ---
    new cdk.CfnOutput(this, 'ApiUrl', {
      value: httpApi.apiEndpoint,
      description: 'Base URL del API del ranking',
    });

    new cdk.CfnOutput(this, 'AlarmTopicArn', {
      value: alarmTopic.topicArn,
      description: 'SNS topic de alarmas (suscribi tu email para recibir avisos)',
    });
  }
}
