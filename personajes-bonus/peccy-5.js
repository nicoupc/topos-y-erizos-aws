/* Peccy · guiño canchero — personaje bonus listo para el juego.
   Uso:  <script src="personajes-bonus/peccy-5.js"></script>
         BONUS.montar('peccy-5', document.querySelector('.hoyo'));
   Se dibuja igual que en la galería: trae su propio CSS y se inyecta una sola vez. */
(function(){
  var ID  = "peccy-5";
  var CSS = "@keyframes bn_bob{0%,100%{transform:translateY(0)}50%{transform:translateY(-7px)}}@keyframes bn_winkHide{0%,20%,42%,100%{opacity:1}27%,35%{opacity:0}}@keyframes bn_winkShow{0%,20%,42%,100%{opacity:0}27%,35%{opacity:1}}@keyframes bn_pcWave{0%,55%,100%{transform:rotate(0)}62%{transform:rotate(-34deg) translateY(-3px)}70%{transform:rotate(-8deg)}78%{transform:rotate(-34deg) translateY(-3px)}86%{transform:rotate(0)}}.bonus-peccy-5 .p-body{animation:bn_bob 3.4s ease-in-out infinite}.bonus-peccy-5 .p-eye-r{animation:bn_winkHide 3.2s infinite}.bonus-peccy-5 .p-happy-r{animation:bn_winkShow 3.2s infinite}.bonus-peccy-5 .p-paw-r{animation:bn_pcWave 3.2s infinite}";
  var SVG = "<svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 100 100\" width=\"100%\" height=\"100%\"><defs><radialGradient id=\"pcG-peccy-5\" cx=\"50%\" cy=\"32%\" r=\"64%\"><stop offset=\"0%\" stop-color=\"#ffb340\"/><stop offset=\"100%\" stop-color=\"#f2870a\"/></radialGradient></defs><g class=\"p-body\" style=\"transform-origin:50px 92px\"><g class=\"p-paw-l\" style=\"transform-origin:24px 66px\"><path d=\"M24 58 C9 54 8 78 24 72 Z\" fill=\"#ef8f1c\" stroke=\"#4a2711\" stroke-width=\"3\"/></g><g class=\"p-paw-r\" style=\"transform-origin:76px 66px\"><path d=\"M76 58 C91 54 92 78 76 72 Z\" fill=\"#ef8f1c\" stroke=\"#4a2711\" stroke-width=\"3\"/></g><path d=\"M22 38 C22 15 78 15 78 38 L78 70 C78 89 66 94 50 94 C34 94 22 89 22 70 Z\" fill=\"url(#pcG-peccy-5)\" stroke=\"#4a2711\" stroke-width=\"3.2\"/><g class=\"p-eyes\"><g class=\"p-eye-l\" style=\"transform-origin:40px 41px\"><ellipse cx=\"40\" cy=\"41\" rx=\"10.5\" ry=\"12.5\" fill=\"#fff\" stroke=\"#4a2711\" stroke-width=\"3\"/><circle class=\"critter-eye\" cx=\"42\" cy=\"37\" r=\"5.6\" fill=\"#1c1206\" style=\"transform-origin:42px 37px\"/><circle cx=\"44.2\" cy=\"34.8\" r=\"1.9\" fill=\"#fff\"/></g><g class=\"p-eye-r\" style=\"transform-origin:60px 41px\"><ellipse cx=\"60\" cy=\"41\" rx=\"10.5\" ry=\"12.5\" fill=\"#fff\" stroke=\"#4a2711\" stroke-width=\"3\"/><circle class=\"critter-eye\" cx=\"62\" cy=\"37\" r=\"5.6\" fill=\"#1c1206\" style=\"transform-origin:62px 37px\"/><circle cx=\"64.2\" cy=\"34.8\" r=\"1.9\" fill=\"#fff\"/></g><path class=\"p-happy-l\" opacity=\"0\" d=\"M32 41 Q40 33 48 41\" fill=\"none\" stroke=\"#1c1206\" stroke-width=\"3.6\" stroke-linecap=\"round\"/><path class=\"p-happy-r\" opacity=\"0\" d=\"M52 41 Q60 33 68 41\" fill=\"none\" stroke=\"#1c1206\" stroke-width=\"3.6\" stroke-linecap=\"round\"/></g><g class=\"p-mouth\"><path d=\"M34 60 Q50 79 71 55\" fill=\"none\" stroke=\"#1c1206\" stroke-width=\"4.6\" stroke-linecap=\"round\"/><path d=\"M71 55 L63.5 55.8 M71 55 L68.4 62.6\" fill=\"none\" stroke=\"#1c1206\" stroke-width=\"4.6\" stroke-linecap=\"round\"/></g></g></svg>";
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
