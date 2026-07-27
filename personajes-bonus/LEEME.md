# Personajes bonus — archivos listos para el juego

Doce archivos, **uno por personaje**: `personajes-bonus/<id>.js`. Cada archivo lleva dentro su dibujo (SVG) **y su animación** (los `@keyframes` y reglas que usa), así que se ve exactamente igual que en la galería sin tocar tu `style.css`.

| Archivo | Personaje | Premio sugerido |
|---|---|---|
| `peccy-3.js` | Peccy · rebota feliz | +1 VIDA |
| `peccy-5.js` | Peccy · guiño canchero | x2 COMBO |
| `kiro-1.js` | Kiro · flota y titila | 🕒 LENTO |
| `kiro-3.js` | Kiro · se teletransporta | ❄ CONGELA |
| `kiro-4.js` | Kiro · con estelita | x2 PUNTOS |
| `kiro-5.js` | Kiro · espía del hoyo | 👀 REVELA |
| `cody3-1.js` | Cody · sonrisa pícara | +1 VIDA |
| `cody3-3.js` | Cody · saluda con garra | 🔥 RACHA |
| `cody3-4.js` | Cody · risa de crack | x2 PUNTOS |
| `s32-1.js` | Balde S3 · saluda con guante | +1 VIDA |
| `s32-3.js` | Balde S3 · tamborilero | ⭐ +50 |
| `s32-4.js` | Balde S3 · orgullo AWS | +1 VIDA |

## Cómo usarlos

1. Carga sólo los que vayas a usar:

```html
<script src="personajes-bonus/kiro-5.js"></script>
<script src="personajes-bonus/cody3-1.js"></script>
```

2. Móntalos en el hoyo desde `script.js`:

```js
const elemento = BONUS.montar('kiro-5', hoyo);   // lo crea y lo mete al contenedor
// o BONUS.crear('kiro-5') si prefieres insertarlo tú
```

3. Copia estas dos reglas a tu `style.css` (posicionan al personaje dentro del hoyo, igual que en la galería):

```css
.hoyo{position:relative;overflow:hidden}          /* el recorte del hoyo */
.bonus{position:absolute;bottom:0;left:0;width:100%;height:116px;
       transform:translateY(-4%);filter:drop-shadow(0 4px 5px rgba(0,0,0,.25));pointer-events:none}
.bonus svg{width:100%;height:100%;display:block}
```

El `overflow:hidden` importa para `kiro-5`: asoma desde abajo y se vuelve a esconder.

## Notas

- El CSS de cada personaje se inyecta una sola vez, al primer uso, y sus `@keyframes` van con prefijo `bn_` para no chocar con los de tus topos.
- La clase que se aplica al contenedor es `bonus bonus-<id>` (por ejemplo `bonus bonus-kiro-5`).
- Para **pausar** (por ejemplo al perder o al abrir un menú) añade una clase al contenedor y esta regla, porque la animación vive en las piezas de adentro, no en el contenedor:

```css
.bonus-pausado *{animation-play-state:paused !important}
```

```js
elemento.classList.toggle('bonus-pausado', juegoEnPausa);
```
- Lienzo de 100×100: el personaje se estira al tamaño del contenedor. Los `116px` de altura del bloque de arriba son sólo la medida de referencia de la galería; cámbiala y el personaje escala solo.
- `index.html` de esta carpeta monta los doce sobre el escenario del juego para comparar.
