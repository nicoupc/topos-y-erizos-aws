import * as cdk from 'aws-cdk-lib';
import { Template } from 'aws-cdk-lib/assertions';
import { LeaderboardStack } from '../lib/leaderboard-stack';

test('crea tabla DynamoDB, Lambda Node 22 e HTTP API con rutas /scores', () => {
  const app = new cdk.App();
  const stack = new LeaderboardStack(app, 'TestStack');
  const template = Template.fromStack(stack);

  // Una tabla DynamoDB con cifrado en reposo y pago por uso
  template.resourceCountIs('AWS::DynamoDB::Table', 1);
  template.hasResourceProperties('AWS::DynamoDB::Table', {
    BillingMode: 'PAY_PER_REQUEST',
  });

  // Una Lambda en Node 22
  template.hasResourceProperties('AWS::Lambda::Function', {
    Runtime: 'nodejs22.x',
  });

  // Un HTTP API y dos rutas (GET y POST /scores)
  template.resourceCountIs('AWS::ApiGatewayV2::Api', 1);
  template.resourceCountIs('AWS::ApiGatewayV2::Route', 2);

  // Observabilidad: 2 alarmas de CloudWatch + 1 topic SNS
  template.resourceCountIs('AWS::CloudWatch::Alarm', 2);
  template.resourceCountIs('AWS::SNS::Topic', 1);
});
