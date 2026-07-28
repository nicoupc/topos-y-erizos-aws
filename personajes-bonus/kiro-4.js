/* Kiro · con estelita — personaje bonus listo para el juego.
   Uso:  <script src="personajes-bonus/kiro-4.js"></script>
         BONUS.montar('kiro-4', document.querySelector('.hoyo'));
   Se dibuja igual que en la galería: trae su propio CSS y se inyecta una sola vez. */
(function(){
  var ID  = "kiro-4";
  var CSS = "@keyframes bn_kiroDrift{0%,100%{transform:translate(0,0)}25%{transform:translate(7px,-6px)}50%{transform:translate(0,-9px)}75%{transform:translate(-7px,-5px)}}@keyframes bn_sparkTwinkle{0%,70%,100%{opacity:0;transform:scale(.5)}80%{opacity:1;transform:scale(1.2)}90%{opacity:.4;transform:scale(.8)}}@keyframes bn_blinkReal{0%,38%,40.4%,72%,74.4%,77%,79.4%,100%{transform:scaleY(1)}39.2%,73.2%,78.2%{transform:scaleY(.08)}}.bonus-kiro-4 .p-body{animation:bn_kiroDrift 4.2s ease-in-out infinite}.bonus-kiro-4 .k-spark1{animation:bn_sparkTwinkle 2.1s infinite}.bonus-kiro-4 .k-spark2{animation:bn_sparkTwinkle 2.9s .7s infinite}.bonus-kiro-4 .critter-eye{animation:bn_blinkReal 4.8s infinite}";
  var SVG = "<svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 100 100\" width=\"100%\" height=\"100%\"><g class=\"p-body\" style=\"transform-origin:50px 55px\"><path d=\"M50 10 C27 10 22 33 22 50 C22 57 13 60 11 67 C9 72 16 74 22 70 L25 68 C25 79 31 85 37 80 C41 77 45 85 50 82 C55 85 59 77 63 80 C69 85 77 79 77 68 L77 50 C77 33 73 10 50 10 Z\" fill=\"#ffffff\" stroke=\"#c8b2ea\" stroke-width=\"2.6\"/><path d=\"M55 12 C71 15 77 33 77 50 L77 68 C77 74 74 78 70 80 C73 76 73 70 73 63 L73 48 C73 32 66 15 55 12 Z\" fill=\"#f2eafb\"/><ellipse cx=\"41\" cy=\"56\" rx=\"3.6\" ry=\"2.6\" fill=\"#e0c2f7\" opacity=\"0.7\"/><ellipse cx=\"71\" cy=\"56\" rx=\"3.6\" ry=\"2.6\" fill=\"#e0c2f7\" opacity=\"0.7\"/><g class=\"p-eyes\"><g class=\"p-eye-l\" style=\"transform-origin:47px 44px\"><ellipse class=\"critter-eye\" cx=\"47\" cy=\"44\" rx=\"4.4\" ry=\"7.4\" fill=\"#221a30\" style=\"transform-origin:47px 44px\"/></g><g class=\"p-eye-r\" style=\"transform-origin:65px 44px\"><ellipse class=\"critter-eye\" cx=\"65\" cy=\"44\" rx=\"4.4\" ry=\"7.4\" fill=\"#221a30\" style=\"transform-origin:65px 44px\"/></g></g><g class=\"k-spark1\" style=\"transform-origin:18px 30px\"><path d=\"M18 24 L19.4 28.6 L24 30 L19.4 31.4 L18 36 L16.6 31.4 L12 30 L16.6 28.6 Z\" fill=\"#ffe08a\"/></g><g class=\"k-spark2\" style=\"transform-origin:84px 64px\"><path d=\"M84 59 L85.1 62.6 L88.7 63.7 L85.1 64.8 L84 68.4 L82.9 64.8 L79.3 63.7 L82.9 62.6 Z\" fill=\"#ffe08a\"/></g></g></svg>";
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
