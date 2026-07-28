/* Peccy · rebota feliz — personaje bonus listo para el juego.
   Uso:  <script src="personajes-bonus/peccy-3.js"></script>
         BONUS.montar('peccy-3', document.querySelector('.hoyo'));
   Se dibuja igual que en la galería: trae su propio CSS y se inyecta una sola vez. */
(function(){
  var ID  = "peccy-3";
  var CSS = "@keyframes bn_pcBounce{0%,100%{transform:translateY(0) scale(1)}30%{transform:translateY(-9px) scale(.97,1.05)}55%{transform:translateY(0) scale(1.05,.95)}75%{transform:translateY(-3px) scale(1)}}@keyframes bn_hideMid{0%,40%,84%,100%{opacity:1}50%,78%{opacity:0}}@keyframes bn_showMid{0%,40%,84%,100%{opacity:0}50%,78%{opacity:1}}.bonus-peccy-3 .p-body{animation:bn_pcBounce 2.6s ease-in-out infinite}.bonus-peccy-3 .p-eye-l,.bonus-peccy-3 .p-eye-r{animation:bn_hideMid 3s infinite}.bonus-peccy-3 .p-happy-l,.bonus-peccy-3 .p-happy-r{animation:bn_showMid 3s infinite}";
  var SVG = "<svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 100 100\" width=\"100%\" height=\"100%\"><defs><radialGradient id=\"pcG-peccy-3\" cx=\"50%\" cy=\"32%\" r=\"64%\"><stop offset=\"0%\" stop-color=\"#ffb340\"/><stop offset=\"100%\" stop-color=\"#f2870a\"/></radialGradient></defs><g class=\"p-body\" style=\"transform-origin:50px 92px\"><g class=\"p-paw-l\" style=\"transform-origin:24px 66px\"><path d=\"M24 58 C9 54 8 78 24 72 Z\" fill=\"#ef8f1c\" stroke=\"#4a2711\" stroke-width=\"3\"/></g><g class=\"p-paw-r\" style=\"transform-origin:76px 66px\"><path d=\"M76 58 C91 54 92 78 76 72 Z\" fill=\"#ef8f1c\" stroke=\"#4a2711\" stroke-width=\"3\"/></g><path d=\"M22 38 C22 15 78 15 78 38 L78 70 C78 89 66 94 50 94 C34 94 22 89 22 70 Z\" fill=\"url(#pcG-peccy-3)\" stroke=\"#4a2711\" stroke-width=\"3.2\"/><g class=\"p-eyes\"><g class=\"p-eye-l\" style=\"transform-origin:40px 41px\"><ellipse cx=\"40\" cy=\"41\" rx=\"10.5\" ry=\"12.5\" fill=\"#fff\" stroke=\"#4a2711\" stroke-width=\"3\"/><circle class=\"critter-eye\" cx=\"42\" cy=\"37\" r=\"5.6\" fill=\"#1c1206\" style=\"transform-origin:42px 37px\"/><circle cx=\"44.2\" cy=\"34.8\" r=\"1.9\" fill=\"#fff\"/></g><g class=\"p-eye-r\" style=\"transform-origin:60px 41px\"><ellipse cx=\"60\" cy=\"41\" rx=\"10.5\" ry=\"12.5\" fill=\"#fff\" stroke=\"#4a2711\" stroke-width=\"3\"/><circle class=\"critter-eye\" cx=\"62\" cy=\"37\" r=\"5.6\" fill=\"#1c1206\" style=\"transform-origin:62px 37px\"/><circle cx=\"64.2\" cy=\"34.8\" r=\"1.9\" fill=\"#fff\"/></g><path class=\"p-happy-l\" opacity=\"0\" d=\"M32 41 Q40 33 48 41\" fill=\"none\" stroke=\"#1c1206\" stroke-width=\"3.6\" stroke-linecap=\"round\"/><path class=\"p-happy-r\" opacity=\"0\" d=\"M52 41 Q60 33 68 41\" fill=\"none\" stroke=\"#1c1206\" stroke-width=\"3.6\" stroke-linecap=\"round\"/></g><g class=\"p-mouth\"><path d=\"M34 60 Q50 79 71 55\" fill=\"none\" stroke=\"#1c1206\" stroke-width=\"4.6\" stroke-linecap=\"round\"/><path d=\"M71 55 L63.5 55.8 M71 55 L68.4 62.6\" fill=\"none\" stroke=\"#1c1206\" stroke-width=\"4.6\" stroke-linecap=\"round\"/></g></g></svg>";
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
