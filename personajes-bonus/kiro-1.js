/* Kiro · flota y titila — personaje bonus listo para el juego.
   Uso:  <script src="personajes-bonus/kiro-1.js"></script>
         BONUS.montar('kiro-1', document.querySelector('.hoyo'));
   Se dibuja igual que en la galería: trae su propio CSS y se inyecta una sola vez. */
(function(){
  var ID  = "kiro-1";
  var CSS = "@keyframes bn_ghostFloat{0%,100%{transform:translateY(0)}50%{transform:translateY(-6px)}}@keyframes bn_ghostFlicker{0%,32%,60%,100%{opacity:.92}38%,44%{opacity:.4}48%{opacity:.8}52%{opacity:.5}56%{opacity:.92}}@keyframes bn_blinkReal{0%,38%,40.4%,72%,74.4%,77%,79.4%,100%{transform:scaleY(1)}39.2%,73.2%,78.2%{transform:scaleY(.08)}}.bonus-kiro-1 .p-body{animation:bn_ghostFloat 3s ease-in-out infinite,bn_ghostFlicker 5s infinite}.bonus-kiro-1 .critter-eye{animation:bn_blinkReal 5s infinite}";
  var SVG = "<svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 100 100\" width=\"100%\" height=\"100%\"><g class=\"p-body\" style=\"transform-origin:50px 55px\"><path d=\"M50 10 C27 10 22 33 22 50 C22 57 13 60 11 67 C9 72 16 74 22 70 L25 68 C25 79 31 85 37 80 C41 77 45 85 50 82 C55 85 59 77 63 80 C69 85 77 79 77 68 L77 50 C77 33 73 10 50 10 Z\" fill=\"#ffffff\" stroke=\"#c8b2ea\" stroke-width=\"2.6\"/><path d=\"M55 12 C71 15 77 33 77 50 L77 68 C77 74 74 78 70 80 C73 76 73 70 73 63 L73 48 C73 32 66 15 55 12 Z\" fill=\"#f2eafb\"/><ellipse cx=\"41\" cy=\"56\" rx=\"3.6\" ry=\"2.6\" fill=\"#e0c2f7\" opacity=\"0.7\"/><ellipse cx=\"71\" cy=\"56\" rx=\"3.6\" ry=\"2.6\" fill=\"#e0c2f7\" opacity=\"0.7\"/><g class=\"p-eyes\"><g class=\"p-eye-l\" style=\"transform-origin:47px 44px\"><ellipse class=\"critter-eye\" cx=\"47\" cy=\"44\" rx=\"4.4\" ry=\"7.4\" fill=\"#221a30\" style=\"transform-origin:47px 44px\"/></g><g class=\"p-eye-r\" style=\"transform-origin:65px 44px\"><ellipse class=\"critter-eye\" cx=\"65\" cy=\"44\" rx=\"4.4\" ry=\"7.4\" fill=\"#221a30\" style=\"transform-origin:65px 44px\"/></g></g></g></svg>";
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
