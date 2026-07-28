// Personajes finales para Topos y Erizos — SVGs con partes animables (bigotes, lengua, bocas alternativas, ojos mareados, mandíbula zombie, mosca, destellos)
// Reemplaza los SVG generados en script.js: usa window.TOPOS_SVG.topo, .erizo, .casco, .balde, .disfraz, .tenedor, .zombie, .corazon, .martillo
(function () {
  var MOLE_G = '<defs><radialGradient id="moleGrad" cx="50%" cy="40%" r="50%"><stop offset="0%" stop-color="#ba8258"/><stop offset="100%" stop-color="#734222"/></radialGradient></defs>';

  function moleBase(brows, extra) {
    var browL = brows === 'angry'
      ? '<path d="M31 40 Q41 33 49 41" stroke="#2b1408" stroke-width="5" stroke-linecap="round" fill="none"/>'
      : '<path d="M31 38 Q39 33 46 37" stroke="#2b1408" stroke-width="4" stroke-linecap="round" fill="none"/>';
    var browR = brows === 'angry'
      ? '<path d="M69 40 Q59 33 51 41" stroke="#2b1408" stroke-width="5" stroke-linecap="round" fill="none"/>'
      : '<path d="M69 38 Q61 33 54 37" stroke="#2b1408" stroke-width="4" stroke-linecap="round" fill="none"/>';
    return '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100" width="100%" height="100%">' + MOLE_G +
      '<g class="p-body" style="transform-origin:50px 92px">' +
      '<g class="p-ear-l" style="transform-origin:25px 39px"><circle cx="21" cy="31" r="9" fill="#734222" stroke="#4a2711" stroke-width="2.5"/><circle cx="21" cy="31" r="4.5" fill="#ffa8a8"/></g>' +
      '<g class="p-ear-r" style="transform-origin:75px 39px"><circle cx="79" cy="31" r="9" fill="#734222" stroke="#4a2711" stroke-width="2.5"/><circle cx="79" cy="31" r="4.5" fill="#ffa8a8"/></g>' +
      '<g class="p-paw-l" style="transform-origin:20px 76px"><path d="M12 75 C8 60 22 55 25 65 C28 75 18 80 12 75 Z" fill="#ffbda8" stroke="#4a2711" stroke-width="2.5"/></g>' +
      '<g class="p-paw-r" style="transform-origin:80px 76px"><path d="M88 75 C92 60 78 55 75 65 C72 75 82 80 88 75 Z" fill="#ffbda8" stroke="#4a2711" stroke-width="2.5"/></g>' +
      '<path d="M22 85 C22 25 78 25 78 85 C78 95 22 95 22 85 Z" fill="url(#moleGrad)" stroke="#4a2711" stroke-width="3"/>' +
      '<g class="p-hair" style="transform-origin:50px 23px"><path d="M42 22 L36 17 L40 24" stroke="#4a2711" stroke-width="2" stroke-linecap="round" fill="none"/><path d="M58 22 L64 17 L60 24" stroke="#4a2711" stroke-width="2" stroke-linecap="round" fill="none"/><path d="M50 20 L50 14" stroke="#4a2711" stroke-width="2" stroke-linecap="round" fill="none"/></g>' +
      '<g class="p-bump" opacity="0" style="transform-origin:47px 30px"><ellipse cx="47" cy="24" rx="7.5" ry="6.5" fill="#ffb4a2" stroke="#4a2711" stroke-width="2.5"/><ellipse cx="47" cy="22.5" rx="3" ry="2.4" fill="#e57c73"/></g>' +
      '<g class="p-brow-l" style="transform-origin:38px 37px">' + browL + '</g>' +
      '<g class="p-brow-r" style="transform-origin:62px 37px">' + browR + '</g>' +
      '<g class="p-eyes"><circle class="critter-eye" cx="36" cy="46" r="4.5" fill="#2b1408" style="transform-origin:36px 46px"/><circle class="critter-eye" cx="34.5" cy="44.5" r="1.5" fill="#fff" style="transform-origin:36px 46px"/><circle class="critter-eye" cx="64" cy="46" r="4.5" fill="#2b1408" style="transform-origin:64px 46px"/><circle class="critter-eye" cx="62.5" cy="44.5" r="1.5" fill="#fff" style="transform-origin:64px 46px"/></g>' +
      '<g class="p-dizzy" opacity="0"><path d="M36 46 m-4.2 0 a4.2 4.2 0 1 0 8.4 0 a2.5 2.5 0 1 1 -5 0 a1.2 1.2 0 1 0 2.4 0" fill="none" stroke="#2b1408" stroke-width="1.6" stroke-linecap="round"/><path d="M64 46 m-4.2 0 a4.2 4.2 0 1 0 8.4 0 a2.5 2.5 0 1 1 -5 0 a1.2 1.2 0 1 0 2.4 0" fill="none" stroke="#2b1408" stroke-width="1.6" stroke-linecap="round"/></g>' +
      '<g class="p-snout" style="transform-origin:50px 56px"><ellipse cx="50" cy="56" rx="14" ry="10" fill="#ffb4a2" stroke="#4a2711" stroke-width="2.5"/><ellipse class="critter-nose-tip" cx="50" cy="52" rx="5" ry="3.5" fill="#e57c73" style="transform-origin:50px 52px"/>' +
        '<g class="p-whisk-l" style="transform-origin:40px 57px"><path d="M39 55 Q31 52 26 53 M39 58 Q30 58 25 60" stroke="#4a2711" stroke-width="1.3" fill="none" stroke-linecap="round" opacity="0.75"/></g>' +
        '<g class="p-whisk-r" style="transform-origin:60px 57px"><path d="M61 55 Q69 52 74 53 M61 58 Q70 58 75 60" stroke="#4a2711" stroke-width="1.3" fill="none" stroke-linecap="round" opacity="0.75"/></g>' +
        '<g class="p-mouth"><path d="M44 60 Q50 65 56 60" stroke="#4a2711" stroke-width="2.5" fill="none"/><rect x="47.5" y="60.5" width="5" height="4.5" fill="#fff" stroke="#4a2711" stroke-width="1.2" rx="0.5"/></g>' +
        '<g class="p-mouth-big" opacity="0"><path d="M43 60 Q50 70 57 60 Q50 63.5 43 60 Z" fill="#6b2f1b" stroke="#4a2711" stroke-width="1.5"/><rect x="47.5" y="60.5" width="5" height="3.5" fill="#fff" stroke="#4a2711" stroke-width="1" rx="0.5"/></g>' +
        '<g class="p-tongue" style="transform-origin:50px 62px;transform:scaleY(0)"><path d="M46 62 C45 71 55 71 54 62 Q50 64 46 62 Z" fill="#ff8fa0" stroke="#b8434f" stroke-width="1.3"/><path d="M50 63 L50 68" stroke="#b8434f" stroke-width="1"/></g>' +
      '</g>' +
      '<g class="p-peek" opacity="0"><ellipse cx="35" cy="9" rx="7" ry="5" fill="#ffbda8" stroke="#4a2711" stroke-width="2.5"/><path d="M31.5 5.5 L31.5 11 M35 4.5 L35 11.5 M38.5 5.5 L38.5 11" stroke="#4a2711" stroke-width="1.2" stroke-linecap="round" fill="none"/><ellipse cx="65" cy="9" rx="7" ry="5" fill="#ffbda8" stroke="#4a2711" stroke-width="2.5"/><path d="M61.5 5.5 L61.5 11 M65 4.5 L65 11.5 M68.5 5.5 L68.5 11" stroke="#4a2711" stroke-width="1.2" stroke-linecap="round" fill="none"/></g>' +
      (extra || '') + '</g></svg>';
  }

  var HELMET = '<g class="helmet-group" style="transform-origin:50px 36px"><path d="M15 36 C15 9 85 9 85 36 C85 39 15 39 15 36 Z" fill="#ffffff" stroke="#4a2711" stroke-width="3"/><path d="M8 36 L92 36 C94 36 94 39 92 39 L8 39 C6 39 6 36 8 36 Z" fill="#ffffff" stroke="#4a2711" stroke-width="2.5"/><path d="M50 14 C44 14 44 36 50 36 C56 36 56 14 50 14 Z" fill="#eaeaea" stroke="#4a2711" stroke-width="1.5"/><rect x="46" y="26" width="8" height="8" rx="1.5" fill="#ffbe1a" stroke="#4a2711" stroke-width="1.5"/></g>';

  var BUCKET = '<g class="bucket-group" style="transform-origin:50px 36px"><path d="M12 36 C10 18 90 18 88 36" fill="none" stroke="#90caf9" stroke-width="3.5" stroke-linecap="round"/><path d="M22 36 L30 10 L70 10 L78 36 Z" fill="#2980b9" stroke="#1c3d52" stroke-width="3"/><path d="M17 36 L83 36 C86 36 86 40 83 40 L17 40 C14 40 14 36 17 36 Z" fill="#3498db" stroke="#1c3d52" stroke-width="2.5"/></g>';

  var FORK = '<g class="fork-group"><g class="fork-sway-inner" style="transform-origin:21px 50px"><rect x="18" y="32" width="6" height="38" rx="2" fill="#3498db" stroke="#1c3d52" stroke-width="2"/><path d="M14 32 L28 32 L26 22 L16 22 Z" fill="#3498db" stroke="#1c3d52" stroke-width="2"/><rect x="16" y="12" width="2" height="12" fill="#3498db" stroke="#1c3d52" stroke-width="1.5"/><rect x="20" y="10" width="2" height="14" fill="#3498db" stroke="#1c3d52" stroke-width="1.5"/><rect x="24" y="12" width="2" height="12" fill="#3498db" stroke="#1c3d52" stroke-width="1.5"/><circle cx="21" cy="50" r="7" fill="#ffbda8" stroke="#4a2711" stroke-width="2"/><polygon class="fork-sparkle" points="12,18 15,25 22,22 17,29 23,34 15,32 12,39" fill="#00ffff" opacity="0.85"/></g></g>';

  var ERIZO = '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100" width="100%" height="100%"><defs><radialGradient id="erizoFace" cx="50%" cy="50%" r="50%"><stop offset="0%" stop-color="#fff0e0"/><stop offset="100%" stop-color="#ffdcb8"/></radialGradient><radialGradient id="erizoSpikes" cx="50%" cy="50%" r="50%"><stop offset="0%" stop-color="#805d3f"/><stop offset="100%" stop-color="#4d321d"/></radialGradient></defs>' +
    '<g class="p-body" style="transform-origin:50px 90px">' +
    '<g class="p-spikes" style="transform-origin:50px 55px"><path d="M 12,80 L 5,70 L 15,62 L 8,50 L 20,44 L 14,30 L 28,24 L 26,12 L 40,10 L 46,2 L 54,2 L 60,10 L 74,12 L 72,24 L 86,30 L 80,44 L 92,50 L 85,62 L 95,70 L 88,80 Z" fill="url(#erizoSpikes)" stroke="#301e10" stroke-width="2.5"/><path d="M 20,75 L 16,65 L 24,58 L 18,48 L 28,40 L 24,32 L 36,28 L 36,18 L 48,18 L 52,18 L 64,18 L 64,28 L 76,32 L 72,40 L 82,48 L 76,58 L 84,65 L 80,75 Z" fill="#3d2514" opacity="0.8"/></g>' +
    '<circle cx="22" cy="80" r="6" fill="#ffbda8" stroke="#301e10" stroke-width="2"/><circle cx="78" cy="80" r="6" fill="#ffbda8" stroke="#301e10" stroke-width="2"/>' +
    '<path d="M25 85 C25 35 75 35 75 85 C75 92 25 92 25 85 Z" fill="url(#erizoFace)" stroke="#301e10" stroke-width="2.5"/>' +
    '<g class="p-fear-l" style="transform-origin:28px 46px"><circle class="erizo-ear" cx="28" cy="46" r="6" fill="#ffdcb8" stroke="#301e10" stroke-width="2" style="transform-origin:28px 46px"/><circle class="erizo-ear" cx="28" cy="46" r="3" fill="#ffa8a8" style="transform-origin:28px 46px"/></g>' +
    '<g class="p-fear-r" style="transform-origin:72px 46px"><circle class="erizo-ear" cx="72" cy="46" r="6" fill="#ffdcb8" stroke="#301e10" stroke-width="2" style="transform-origin:72px 46px"/><circle class="erizo-ear" cx="72" cy="46" r="3" fill="#ffa8a8" style="transform-origin:72px 46px"/></g>' +
    '<g class="p-eyes"><circle class="critter-eye" cx="40" cy="58" r="4.2" fill="#2d1d1d" style="transform-origin:40px 58px"/><circle class="critter-eye" cx="38.5" cy="56.5" r="1.5" fill="#fff" style="transform-origin:40px 58px"/><circle class="critter-eye" cx="60" cy="58" r="4.2" fill="#2d1d1d" style="transform-origin:60px 58px"/><circle class="critter-eye" cx="58.5" cy="56.5" r="1.5" fill="#fff" style="transform-origin:60px 58px"/></g>' +
    '<g class="p-happy" opacity="0"><path d="M35.5 58.5 Q40 53.5 44.5 58.5" stroke="#2d1d1d" stroke-width="2.6" fill="none" stroke-linecap="round"/><path d="M55.5 58.5 Q60 53.5 64.5 58.5" stroke="#2d1d1d" stroke-width="2.6" fill="none" stroke-linecap="round"/></g>' +
    '<circle cx="34" cy="66" r="4" fill="#ff7675" opacity="0.55"/><circle cx="66" cy="66" r="4" fill="#ff7675" opacity="0.55"/>' +
    '<g class="p-snout" style="transform-origin:50px 66px"><ellipse class="erizo-nose" cx="50" cy="65" rx="5" ry="4" fill="#301e10" style="transform-origin:50px 65px"/><circle cx="49" cy="63.5" r="1" fill="#fff"/>' +
      '<g class="p-whisk-l" style="transform-origin:44px 64px"><path d="M44 63 Q37 61 33 62 M44 66 Q36 66 32 68" stroke="#301e10" stroke-width="1.2" fill="none" stroke-linecap="round" opacity="0.7"/></g>' +
      '<g class="p-whisk-r" style="transform-origin:56px 64px"><path d="M56 63 Q63 61 67 62 M56 66 Q64 66 68 68" stroke="#301e10" stroke-width="1.2" fill="none" stroke-linecap="round" opacity="0.7"/></g>' +
      '<g class="p-mouth"><path d="M47 70 Q50 73 53 70" stroke="#301e10" stroke-width="2" fill="none" stroke-linecap="round"/></g>' +
      '<g class="p-mouth-big" opacity="0"><path d="M45 69 Q50 76 55 69 Q50 71.5 45 69 Z" fill="#6b2f1b" stroke="#301e10" stroke-width="1.3"/></g>' +
      '<g class="p-tongue" style="transform-origin:50px 71px;transform:scaleY(0)"><path d="M47.5 71 C47 78 53 78 52.5 71 Q50 72.5 47.5 71 Z" fill="#ff8fa0" stroke="#b8434f" stroke-width="1.1"/></g>' +
    '</g>' +
    '</g></svg>';

  var DISFRAZ = '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100" width="100%" height="100%"><defs><radialGradient id="erizoFace" cx="50%" cy="50%" r="50%"><stop offset="0%" stop-color="#fff0e0"/><stop offset="100%" stop-color="#ffdcb8"/></radialGradient><radialGradient id="erizoSpikes" cx="50%" cy="50%" r="50%"><stop offset="0%" stop-color="#805d3f"/><stop offset="100%" stop-color="#4d321d"/></radialGradient><radialGradient id="moleGrad" cx="50%" cy="40%" r="50%"><stop offset="0%" stop-color="#ba8258"/><stop offset="100%" stop-color="#734222"/></radialGradient></defs>' +
    '<g class="p-body" style="transform-origin:50px 90px">' +
    '<g class="p-spikes" style="transform-origin:50px 55px"><path d="M 12,80 L 5,70 L 15,62 L 8,50 L 20,44 L 14,30 L 28,24 L 26,12 L 40,10 L 46,2 L 54,2 L 60,10 L 74,12 L 72,24 L 86,30 L 80,44 L 92,50 L 85,62 L 95,70 L 88,80 Z" fill="url(#erizoSpikes)" stroke="#301e10" stroke-width="2.5"/><path d="M 20,75 L 16,65 L 24,58 L 18,48 L 28,40 L 24,32 L 36,28 L 36,18 L 48,18 L 52,18 L 64,18 L 64,28 L 76,32 L 72,40 L 82,48 L 76,58 L 84,65 L 80,75 Z" fill="#3d2514" opacity="0.8"/></g>' +
    '<circle cx="22" cy="80" r="6" fill="#ffbda8" stroke="#301e10" stroke-width="2"/><circle cx="78" cy="80" r="6" fill="#ffbda8" stroke="#301e10" stroke-width="2"/>' +
    '<path d="M25 85 C25 35 75 35 75 85 C75 92 25 92 25 85 Z" fill="url(#erizoFace)" stroke="#301e10" stroke-width="2.5"/>' +
    '<g class="p-fear-l" style="transform-origin:18px 38px"><circle class="erizo-ear" cx="18" cy="38" r="10" fill="#734222" stroke="#2b1408" stroke-width="2.5" style="transform-origin:18px 38px"/><circle class="erizo-ear" cx="18" cy="38" r="6" fill="#ffa8a8" stroke="#2b1408" stroke-width="1.5" style="transform-origin:18px 38px"/></g>' +
    '<g class="p-fear-r" style="transform-origin:82px 38px"><circle class="erizo-ear" cx="82" cy="38" r="10" fill="#734222" stroke="#2b1408" stroke-width="2.5" style="transform-origin:82px 38px"/><circle class="erizo-ear" cx="82" cy="38" r="6" fill="#ffa8a8" stroke="#2b1408" stroke-width="1.5" style="transform-origin:82px 38px"/></g>' +
    '<ellipse cx="50" cy="56" rx="20" ry="17" fill="url(#moleGrad)" stroke="#301e10" stroke-width="2"/>' +
    '<g class="p-eyes"><circle class="critter-eye" cx="40" cy="54" r="4.2" fill="#2d1d1d" style="transform-origin:40px 54px"/><circle class="critter-eye" cx="38.5" cy="52.5" r="1.5" fill="#fff" style="transform-origin:40px 54px"/><circle class="critter-eye" cx="60" cy="54" r="4.2" fill="#2d1d1d" style="transform-origin:60px 54px"/><circle class="critter-eye" cx="58.5" cy="52.5" r="1.5" fill="#fff" style="transform-origin:60px 54px"/></g>' +
    '<circle cx="34" cy="62" r="3.5" fill="#ff7675" opacity="0.6"/><circle cx="66" cy="62" r="3.5" fill="#ff7675" opacity="0.6"/>' +
    '<g class="p-zipper" style="transform-origin:50px 73px"><line x1="50" y1="73" x2="50" y2="88" stroke="#301e10" stroke-width="2" stroke-dasharray="2,2"/><polygon points="50,73 53,79 47,79" fill="#ffd700" stroke="#301e10" stroke-width="1.2"/><circle cx="50" cy="81" r="2" fill="#ffd700" stroke="#301e10" stroke-width="0.8"/></g>' +
    '<g class="p-snout" style="transform-origin:50px 61px"><ellipse cx="50" cy="61" rx="7.5" ry="5.5" fill="#ffbda8" stroke="#4a2711" stroke-width="1.8"/><ellipse class="critter-nose-tip" cx="50" cy="58" rx="2.5" ry="1.8" fill="#e57c73" style="transform-origin:50px 58px"/></g>' +
    '<g class="p-brow-l" style="transform-origin:38px 44px"><path d="M32 45 Q39 40 45 44" stroke="#2b1408" stroke-width="2.5" stroke-linecap="round" fill="none"/></g>' +
    '<g class="p-brow-r" style="transform-origin:62px 44px"><path d="M68 45 Q61 40 55 44" stroke="#2b1408" stroke-width="2.5" stroke-linecap="round" fill="none"/></g>' +
    '<g class="p-mouth"><path d="M46 64 Q50 67 54 64" stroke="#4a2711" stroke-width="1.8" fill="none"/><rect x="48.5" y="64.5" width="3" height="3" fill="#fff" stroke="#4a2711" stroke-width="1" rx="0.3"/></g>' +
    '<g class="p-mouth-o" opacity="0"><circle cx="50" cy="65.5" r="2.4" fill="#5a2b1a" stroke="#301e10" stroke-width="1"/></g>' +
    '<g class="p-note-1" opacity="0" style="transform-origin:63px 42px"><text x="60" y="45" font-size="11" font-weight="bold" fill="#5a3212">♪</text></g>' +
    '<g class="p-note-2" opacity="0" style="transform-origin:70px 34px"><text x="67" y="37" font-size="9" font-weight="bold" fill="#5a3212">♫</text></g>' +
    '</g></svg>';

  var ZOMBIE = '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100" width="100%" height="100%"><defs><radialGradient id="zombieGrad" cx="50%" cy="40%" r="50%"><stop offset="0%" stop-color="#9ea7aa"/><stop offset="100%" stop-color="#546e7a"/></radialGradient></defs>' +
    '<g class="zombie-group" style="transform-origin:50px 85px">' +
    '<circle cx="20" cy="30" r="10" fill="#546e7a" stroke="#29434e" stroke-width="2.5"/><circle cx="20" cy="30" r="5" fill="#cfd8dc"/><circle cx="80" cy="30" r="10" fill="#546e7a" stroke="#29434e" stroke-width="2.5"/><circle cx="80" cy="30" r="5" fill="#cfd8dc"/>' +
    '<g class="p-paw-l" style="transform-origin:20px 76px"><path d="M12 75 C8 60 22 55 25 65 C28 75 18 80 12 75 Z" fill="#eceff1" stroke="#29434e" stroke-width="2.5"/></g>' +
    '<g class="p-paw-r" style="transform-origin:80px 76px"><path d="M88 75 C92 60 78 55 75 65 C72 75 82 80 88 75 Z" fill="#eceff1" stroke="#29434e" stroke-width="2.5"/></g>' +
    '<path d="M22 85 C22 25 78 25 78 85 C78 95 22 95 22 85 Z" fill="url(#zombieGrad)" stroke="#29434e" stroke-width="3"/>' +
    '<g class="p-eyes"><path d="M32 42 L42 50 M42 42 L32 50" stroke="#111" stroke-width="4.5" stroke-linecap="round"/><path d="M58 42 L68 50 M68 42 L58 50" stroke="#111" stroke-width="4.5" stroke-linecap="round"/></g>' +
    '<g class="p-snout" style="transform-origin:50px 56px"><ellipse cx="50" cy="56" rx="14" ry="10" fill="#cfd8dc" stroke="#29434e" stroke-width="2.5"/><ellipse cx="50" cy="52" rx="5" ry="3.5" fill="#90a4ae"/><path d="M44 60 Q50 63 56 60" stroke="#29434e" stroke-width="2.5" fill="none"/>' +
      '<g class="p-jaw" style="transform-origin:50px 60px;transform:scaleY(0.15)"><path d="M43.5 60 Q50 70 56.5 60 Q50 63.5 43.5 60 Z" fill="#263238" stroke="#29434e" stroke-width="1.5"/><rect x="46.5" y="61" width="2.6" height="2.8" fill="#eceff1" rx="0.4"/></g>' +
    '</g>' +
    '<path d="M48 28 L54 36 M51 32 L46 34 M54 30 L49 32" stroke="#222" stroke-width="2" stroke-linecap="round"/><path d="M26 62 L32 72 M27 68 L32 66" stroke="#222" stroke-width="2" stroke-linecap="round"/>' +
    '<g class="p-fly" opacity="0" style="transform:translate(30px,26px)"><circle cx="0" cy="0" r="2.4" fill="#1b1b1b"/><ellipse cx="-2.4" cy="-2.2" rx="2.4" ry="1.2" fill="#e3f2fd" opacity="0.9"/><ellipse cx="2.4" cy="-2.2" rx="2.4" ry="1.2" fill="#e3f2fd" opacity="0.9"/></g>' +
    '</g></svg>';

  var BUBBLE_G = '<defs><radialGradient id="bubbleGrad" cx="35%" cy="30%" r="60%"><stop offset="0%" stop-color="#ffffff" stop-opacity="0.85"/><stop offset="35%" stop-color="#e3f2fd" stop-opacity="0.5"/><stop offset="75%" stop-color="#90caf9" stop-opacity="0.25"/><stop offset="95%" stop-color="#42a5f5" stop-opacity="0.45"/><stop offset="100%" stop-color="#1e88e5" stop-opacity="0.75"/></radialGradient></defs>';

  var SPARKS = '<g class="p-spark-1" opacity="0" style="transform-origin:71px 33px"><path d="M71 27 L72.4 31.6 L77 33 L72.4 34.4 L71 39 L69.6 34.4 L65 33 L69.6 31.6 Z" fill="#fff"/></g><g class="p-spark-2" opacity="0" style="transform-origin:28px 66px"><path d="M28 62 L29 65 L32 66 L29 67 L28 70 L27 67 L24 66 L27 65 Z" fill="#fff"/></g>';

  var CORAZON = '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100" width="100%" height="100%">' + BUBBLE_G +
    '<g class="p-body" style="transform-origin:50px 50px"><g class="p-cargo" style="transform-origin:50px 47px"><path d="M50 65 C40 55 32 46 32 37 C32 29 38 23 46 23 C50 23 54 26 56 30 C58 26 62 23 66 23 C74 23 80 29 80 37 C80 46 72 55 62 65 L56 71 Z" fill="#ff3838" stroke="#990000" stroke-width="2"/></g><circle cx="50" cy="50" r="41" fill="url(#bubbleGrad)" stroke="#64b5f6" stroke-width="2"/><g class="p-shine" style="transform-origin:50px 50px"><ellipse cx="32" cy="22" rx="11" ry="5.5" fill="#ffffff" opacity="0.6" transform="rotate(-30, 32, 22)"/></g>' + SPARKS + '</g></svg>';

  var MARTILLO = '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100" width="100%" height="100%">' + BUBBLE_G +
    '<g class="p-body" style="transform-origin:50px 50px"><g class="p-cargo" style="transform-origin:50px 50px"><g transform="translate(18, 18) scale(0.64)"><rect x="42" y="30" width="16" height="60" rx="6" fill="#e67e22" stroke="#5a3212" stroke-width="4"/><path d="M10 20 L90 20 L90 50 L10 50 Z" fill="#e74c3c" stroke="#5a3212" stroke-width="5"/><path d="M10 20 L10 50" stroke="#962d22" stroke-width="5"/><path d="M90 20 L90 50" stroke="#962d22" stroke-width="5"/><polygon points="50,26 52,31 58,32 54,36 55,42 50,39 45,42 46,36" fill="#f1c40f"/></g></g><circle cx="50" cy="50" r="41" fill="url(#bubbleGrad)" stroke="#64b5f6" stroke-width="2"/><g class="p-shine" style="transform-origin:50px 50px"><ellipse cx="32" cy="22" rx="11" ry="5.5" fill="#ffffff" opacity="0.6" transform="rotate(-30, 32, 22)"/></g>' + SPARKS + '</g></svg>';

  window.TOPOS_SVG = {
    topo: moleBase('normal'),
    casco: moleBase('normal', HELMET),
    balde: moleBase('normal', BUCKET),
    tenedor: moleBase('angry', FORK),
    erizo: ERIZO,
    disfraz: DISFRAZ,
    zombie: ZOMBIE,
    corazon: CORAZON,
    martillo: MARTILLO
  };
})();
