/* Balde S3 · saluda con guante — personaje bonus listo para el juego.
   Uso:  <script src="personajes-bonus/s32-1.js"></script>
         BONUS.montar('s32-1', document.querySelector('.hoyo'));
   Se dibuja igual que en la galería: trae su propio CSS y se inyecta una sola vez. */
(function(){
  var ID  = "s32-1";
  var CSS = "@keyframes bn_bob{0%,100%{transform:translateY(0)}50%{transform:translateY(-7px)}}@keyframes bn_bkGloveWave{0%,52%,100%{transform:rotate(0)}60%{transform:rotate(-40deg) translateY(-4px)}68%{transform:rotate(-12deg)}76%{transform:rotate(-40deg) translateY(-4px)}84%{transform:rotate(0)}}@keyframes bn_blinkReal{0%,38%,40.4%,72%,74.4%,77%,79.4%,100%{transform:scaleY(1)}39.2%,73.2%,78.2%{transform:scaleY(.08)}}.bonus-s32-1 .p-body{animation:bn_bob 3.2s ease-in-out infinite}.bonus-s32-1 .p-paw-r{animation:bn_bkGloveWave 4.4s infinite}.bonus-s32-1 .critter-eye{animation:bn_blinkReal 4.4s infinite}";
  var SVG = "<svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 100 100\" width=\"100%\" height=\"100%\"><defs><linearGradient id=\"bk2G-s32-1\" x1=\"0%\" y1=\"0%\" x2=\"100%\" y2=\"0%\"><stop offset=\"0%\" stop-color=\"#6faf34\"/><stop offset=\"26%\" stop-color=\"#8fcc46\"/><stop offset=\"72%\" stop-color=\"#84c440\"/><stop offset=\"100%\" stop-color=\"#639f2c\"/></linearGradient></defs><g class=\"p-body\" style=\"transform-origin:50px 92px\"><g class=\"p-paw-l\" style=\"transform-origin:26px 66px\"><path d=\"M24.6 59.6 C14 55.6 4 59.4 3 66.6 C2 73.6 8.4 78.6 15 78.4 C20 78.2 24.6 75.6 26.6 71.6 Z\" fill=\"#f2913d\" stroke=\"#22323c\" stroke-width=\"2.6\" stroke-linejoin=\"round\"/><path d=\"M11 59.6 Q9.6 66.6 12.6 73.6 M17.6 58.4 Q17 66 19.6 73.2\" fill=\"none\" stroke=\"#c96f1c\" stroke-width=\"1.6\" stroke-linecap=\"round\"/></g><g class=\"p-paw-r\" style=\"transform-origin:74px 66px\"><path d=\"M75.4 59.6 C86 55.6 96 59.4 97 66.6 C98 73.6 91.6 78.6 85 78.4 C80 78.2 75.4 75.6 73.4 71.6 Z\" fill=\"#f2913d\" stroke=\"#22323c\" stroke-width=\"2.6\" stroke-linejoin=\"round\"/><path d=\"M89 59.6 Q90.4 66.6 87.4 73.6 M82.4 58.4 Q83 66 80.4 73.2\" fill=\"none\" stroke=\"#c96f1c\" stroke-width=\"1.6\" stroke-linecap=\"round\"/></g><path d=\"M27.4 63 Q50 69.6 72.6 63 L70.6 87 Q50 93 29.4 87 Z\" fill=\"#2b3440\" stroke=\"#22323c\" stroke-width=\"2.8\" stroke-linejoin=\"round\"/><path d=\"M26 60 Q50 67.4 74 60 L73 64.6 Q50 71.6 27 64.6 Z\" fill=\"#f2913d\" stroke=\"#22323c\" stroke-width=\"2.2\"/><text x=\"45.4\" y=\"80.6\" font-size=\"12\" font-weight=\"900\" fill=\"#fff\" text-anchor=\"middle\" font-family=\"Fredoka, sans-serif\">I</text><path d=\"M57.4 74.4 C55.4 71.4 50.6 72.4 50.6 76 C50.6 79.6 57.4 83.4 57.4 83.4 C57.4 83.4 64.2 79.6 64.2 76 C64.2 72.4 59.4 71.4 57.4 74.4 Z\" fill=\"#f2913d\"/><text x=\"50\" y=\"91.4\" font-size=\"10.6\" font-weight=\"900\" fill=\"#fff\" text-anchor=\"middle\" font-family=\"Fredoka, sans-serif\" letter-spacing=\"0.4\">AWS</text><g class=\"p-inner\"><path d=\"M18.6 26.4 L21.6 56 Q22.6 62.4 29.4 64 Q50 67.4 70.6 64 Q77.4 62.4 78.4 56 L81.4 26.4 Z\" fill=\"url(#bk2G-s32-1)\" stroke=\"#22323c\" stroke-width=\"3\"/><rect x=\"72.6\" y=\"34\" width=\"5.8\" height=\"9.6\" rx=\"2.3\" fill=\"#7fb63f\" stroke=\"#22323c\" stroke-width=\"2\"/><ellipse cx=\"50\" cy=\"26\" rx=\"31.4\" ry=\"8\" fill=\"#a5da5c\" stroke=\"#22323c\" stroke-width=\"3\"/><ellipse cx=\"50\" cy=\"26.6\" rx=\"24\" ry=\"4.7\" fill=\"#4f7d26\"/><g class=\"p-eyes\"><g class=\"p-eye-l\" style=\"transform-origin:37.4px 43.4px\"><ellipse cx=\"37.4\" cy=\"42.8\" rx=\"8.3\" ry=\"9.1\" fill=\"#f7f0d8\" stroke=\"#22323c\" stroke-width=\"2.3\"/><circle class=\"critter-eye\" cx=\"38.6\" cy=\"44\" r=\"5.1\" fill=\"#1b2a20\" style=\"transform-origin:38.6px 44px\"/><circle cx=\"40.6\" cy=\"42\" r=\"1.9\" fill=\"#fff\"/></g><g class=\"p-eye-r\" style=\"transform-origin:62.6px 43.4px\"><ellipse cx=\"62.6\" cy=\"42.8\" rx=\"8.3\" ry=\"9.1\" fill=\"#f7f0d8\" stroke=\"#22323c\" stroke-width=\"2.3\"/><circle class=\"critter-eye\" cx=\"63.8\" cy=\"44\" r=\"5.1\" fill=\"#1b2a20\" style=\"transform-origin:63.8px 44px\"/><circle cx=\"65.8\" cy=\"42\" r=\"1.9\" fill=\"#fff\"/></g><path class=\"p-happy-l\" opacity=\"0\" d=\"M30.6 44.6 Q37.4 37.4 44.2 44.6\" fill=\"none\" stroke=\"#1b2a20\" stroke-width=\"3\" stroke-linecap=\"round\"/><path class=\"p-happy-r\" opacity=\"0\" d=\"M55.8 44.6 Q62.6 37.4 69.4 44.6\" fill=\"none\" stroke=\"#1b2a20\" stroke-width=\"3\" stroke-linecap=\"round\"/></g><g class=\"p-mouth\"><path d=\"M40.4 54.2 Q50.4 63.2 61.4 53.2\" fill=\"none\" stroke=\"#1b2a20\" stroke-width=\"3\" stroke-linecap=\"round\"/><path d=\"M40.4 54.2 Q38.6 50.4 41.2 48.2\" fill=\"none\" stroke=\"#1b2a20\" stroke-width=\"2.8\" stroke-linecap=\"round\"/></g></g></g></svg>";
  var B = window.BONUS = window.BONUS || {};
  B.piezas = B.piezas || {};
  B.piezas[ID] = { clase: 'bonus-' + ID, svg: SVG, css: CSS };
  B.estilo = B.estilo || function (id) {
    var p = B.piezas[id]; if (!p || document.getElementById('bonus-css-' + id)) return;
    var s = document.createElement('style'); s.id = 'bonus-css-' + id; s.textContent = p.css;
    document.head.appendChild(s);
  };
  B.crear = B.crear || function (id) {
    var p = B.piezas[id]; if (!p) return null;
    B.estilo(id);
    var d = document.createElement('div');
    d.className = 'bonus ' + p.clase;
    d.innerHTML = p.svg;
    return d;
  };
  B.montar = B.montar || function (id, contenedor) {
    var d = B.crear(id); if (d && contenedor) contenedor.appendChild(d); return d;
  };
})();
