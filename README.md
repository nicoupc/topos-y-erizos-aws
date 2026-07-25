# 🕹️ Topos y Erizos — ¡Aplástalos!

Juego arcade para navegador con **ranking global en tiempo real**, funcionando sobre
una arquitectura *serverless* en AWS.

### ▶️ Jugar ahora: **https://main.d1y0mobw6pwc7h.amplifyapp.com**

---

## 🎮 De qué se trata

Aplastá topos y esquivá erizos a lo largo de **10 fases** que se van poniendo más
difíciles. Cada partida termina con tu puntaje compitiendo en un ranking mundial.

- **Criaturas con truco propio:** topos con casco (aguantan más golpes), disfrazados,
  zombies, y erizos que **no** hay que golpear.
- **Combos y power-ups** para multiplicar el puntaje.
- **Hordas** al cierre de cada fase.
- **Ranking global** y perfil con nombre y avatar.
- Todo el arte y el sonido se **generan por código** (SVG + Web Audio): el juego no
  usa ni una imagen ni un archivo de audio.

---

## ⚙️ Cómo funciona

```
   Jugador (navegador)
          │  envía su puntaje
          ▼
   API Gateway  ──▶  Lambda  ──▶  DynamoDB
                       │
              valida, limpia y decide
              si es un nuevo récord
```

El juego se sirve desde **AWS Amplify**. Cuando alguien termina una partida, su puntaje
viaja a una función **Lambda**, que es la única autorizada a escribir en la base de
datos: ahí se validan los datos y se guarda el récord en **DynamoDB**.

| Servicio | Para qué se usa |
|---|---|
| **Amplify Hosting** | Publica el juego con HTTPS |
| **API Gateway** | Recibe las peticiones y limita el tráfico abusivo |
| **Lambda** | Valida los datos y protege el ranking |
| **DynamoDB** | Guarda los puntajes |
| **CloudWatch + SNS** | Avisa si algo falla o se pone lento |
| **AWS CDK** | Define toda la infraestructura como código |

---

## ✨ Decisiones destacadas

- **El servidor no confía en el navegador.** Los nombres se limpian y los puntajes se
  validan del lado del servidor, así que no se pueden inyectar datos maliciosos ni
  inventar puntajes desde el cliente.
- **Infraestructura como código.** Toda la nube está definida con AWS CDK, así que se
  puede recrear desde cero con un comando. La plantilla se valida automáticamente con
  `cfn-lint` y `cfn-guard` (sin errores ni alertas de seguridad).
- **Monitoreo activo.** Alarmas de CloudWatch avisan por errores o latencia alta.
- **Costo cero.** Toda la solución corre dentro de la capa gratuita de AWS.

---

## 🚀 Cómo desplegarlo

Necesitás Node.js 20+ y una cuenta de AWS configurada (`aws configure`).

```bash
cd infra
npm install
npx cdk deploy
```

Al terminar, copiá la URL que aparece en el output (`ApiUrl`) dentro de `script.js`, y
publicá `index.html`, `style.css` y `script.js` en Amplify Hosting.

Para correr las pruebas de la infraestructura: `npm test`

---

Desarrollado con **Kiro** · Licencia MIT
