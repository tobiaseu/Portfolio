/* Disegni SVG della base (in mm, coordinate della base). Servono a:
   - modello.html  -> pezzi da stampare 1:1
   - index.html    -> base finta per la demo senza camera
   Richiede layout.js, vendor/cv.js e vendor/aruco.js. */
var BOARD = (function () {
  var L = LAYOUT;
  var dict = null;
  function f(n) { return Math.round(n * 100) / 100; }
  function rad(a) { return a * Math.PI / 180; }
  /* angolo 0 = ore 12, positivo in senso orario */
  function polar(cx, cy, r, a) { return [cx + r * Math.sin(rad(a)), cy - r * Math.cos(rad(a))]; }

  function marker(id, cx, cy, size, quiet) {
    if (!dict) dict = new AR.Dictionary('ARUCO_MIP_36h12');
    var code = dict.codeList[id], cell = size / 8, x0 = cx - size / 2, y0 = cy - size / 2, s = '';
    var q = quiet == null ? cell : quiet;
    s += '<rect x="' + f(x0 - q) + '" y="' + f(y0 - q) + '" width="' + f(size + 2 * q) + '" height="' + f(size + 2 * q) + '" fill="#fff"/>';
    s += '<rect x="' + f(x0) + '" y="' + f(y0) + '" width="' + f(size) + '" height="' + f(size) + '" fill="#000"/>';
    for (var y = 0; y < 6; y++) for (var x = 0; x < 6; x++)
      if (code[y * 6 + x] == '1')
        s += '<rect x="' + f(x0 + (x + 1) * cell) + '" y="' + f(y0 + (y + 1) * cell) + '" width="' + f(cell + .05) + '" height="' + f(cell + .05) + '" fill="#fff"/>';
    return s;
  }

  function text(x, y, t, size, opts) {
    opts = opts || {};
    return '<text x="' + f(x) + '" y="' + f(y) + '" font-size="' + size + '" font-family="Helvetica,Arial,sans-serif" font-weight="' + (opts.w || 600) +
      '" text-anchor="' + (opts.a || 'middle') + '" fill="' + (opts.c || '#111') + '"' + (opts.ls ? ' letter-spacing="' + opts.ls + '"' : '') + '>' + t + '</text>';
  }

  function pad(p, ring, ringW) {
    return '<circle cx="' + p.x + '" cy="' + p.y + '" r="' + f(p.r - ringW / 2) + '" fill="#fff" stroke="' + ring + '" stroke-width="' + ringW + '"/>';
  }

  function knobBase(k, kind) {
    var s = '<circle cx="' + k.x + '" cy="' + k.y + '" r="' + (k.r + .8) + '" fill="none" stroke="#999" stroke-width=".3" stroke-dasharray="1.2 1"/>';
    s += '<path d="M' + (k.x - 2) + ' ' + k.y + 'h4M' + k.x + ' ' + (k.y - 2) + 'v4" stroke="#999" stroke-width=".3"/>';
    if (kind == 'transpose') {
      for (var i = 0; i <= 12; i++) {
        var a = -135 + i * 22.5, zero = i == 6;
        var p1 = polar(k.x, k.y, k.r + 2.5, a), p2 = polar(k.x, k.y, k.r + (zero ? 9 : 5.5), a);
        s += '<line x1="' + f(p1[0]) + '" y1="' + f(p1[1]) + '" x2="' + f(p2[0]) + '" y2="' + f(p2[1]) + '" stroke="#111" stroke-width="' + (zero ? 1.2 : .6) + '" stroke-linecap="round"/>';
      }
      var pm = polar(k.x, k.y, k.r + 9, -135), pp = polar(k.x, k.y, k.r + 9, 135);
      s += text(pm[0] - 2, pm[1] + 3, '−', 6) + text(pp[0] + 2, pp[1] + 3, '+', 6);
    } else if (kind == 'scale') {
      L.scaleAngles.forEach(function (a, i) {
        var p = polar(k.x, k.y, k.r + 6.5, a);
        s += '<circle cx="' + f(p[0]) + '" cy="' + f(p[1]) + '" r="3.4" fill="' + L.scales[i].color + '"/>';
      });
    } else if (kind == 'speed') {
      for (var j = 0; j <= 18; j++) {
        var b = -135 + j * 15, len = 2.5 + j * .35;
        var q1 = polar(k.x, k.y, k.r + 2.5, b), q2 = polar(k.x, k.y, k.r + 2.5 + len, b);
        s += '<line x1="' + f(q1[0]) + '" y1="' + f(q1[1]) + '" x2="' + f(q2[0]) + '" y2="' + f(q2[1]) + '" stroke="#111" stroke-width=".7" stroke-linecap="round"/>';
      }
    }
    return s;
  }

  /* Pannello comandi + mute, coordinate della base */
  function panel(opts) {
    opts = opts || {};
    var P = L.panel, s = '';
    if (opts.cut) s += '<rect x="' + P.x + '" y="' + P.y + '" width="' + P.w + '" height="' + P.h + '" fill="#fff" stroke="#aaa" stroke-width=".3" stroke-dasharray="2 1.5"/>';
    s += text(85, 106, 'SUONO', 4.2, { ls: .8 });
    s += knobBase(L.knobs.transpose, 'transpose') + text(L.knobs.transpose.x, 190, 'trasporta', 3.2, { w: 500 });
    s += knobBase(L.knobs.scale, 'scale') + text(L.knobs.scale.x, 190, 'scala', 3.2, { w: 500 });
    s += '<line x1="18" x2="150" y1="203" y2="203" stroke="#111" stroke-width=".4"/>';
    s += text(85, 212, 'TEMPO', 4.2, { ls: .8 });
    s += knobBase(L.knobs.speed, 'speed') + text(L.knobs.speed.x, 290, 'veloce', 3.2, { w: 500 });
    var pl = L.pads.play, md = L.pads.mode, rc = L.pads.rec;
    s += pad(pl, '#111', 3) + text(pl.x, 283, 'PLAY · STOP', 3.2);
    s += pad(md, '#111', 2.2) + text(md.x, 350, 'GIRO · 1 VOLTA', 3);
    s += pad(rc, '#E0322A', 2.6) + text(rc.x, 350, 'REC', 3.2, { c: '#E0322A' });
    /* mute colori */
    L.instruments.forEach(function (ins, i) {
      s += pad({ x: L.muteColor.x, y: L.muteColor.y[i], r: L.muteColor.r }, ins.color, 3.2);
    });
    s += text(L.muteColor.x, 66 + 0, 'muto', 2.8, { w: 500 });
    /* mute percussioni */
    L.drums.forEach(function (d, i) {
      var y = L.matrix.rowY(i);
      s += pad({ x: L.muteDrum.x, y: y, r: L.muteDrum.r }, '#111', 1.6);
      s += text(L.muteDrum.x - L.muteDrum.r - 2.5, y + 1.2, d.short, 3, { a: 'end' });
    });
    return s;
  }

  function matrix(opts) {
    opts = opts || {};
    var M = L.matrix, cw = M.w / M.cols, rh = M.h / M.rows, s = '';
    s += '<rect x="' + M.x + '" y="' + M.y + '" width="' + M.w + '" height="' + M.h + '" fill="#fff" stroke="#111" stroke-width=".6"/>';
    for (var j = 1; j < M.cols; j++)
      s += '<line x1="' + f(M.x + j * cw) + '" x2="' + f(M.x + j * cw) + '" y1="' + M.y + '" y2="' + (M.y + M.h) + '" stroke="' + (j % 4 ? '#c4c4c4' : '#111') + '" stroke-width="' + (j % 4 ? .3 : .5) + '"/>';
    for (var i = 1; i < M.rows; i++)
      s += '<line x1="' + M.x + '" x2="' + (M.x + M.w) + '" y1="' + f(M.y + i * rh) + '" y2="' + f(M.y + i * rh) + '" stroke="#c4c4c4" stroke-width=".3"/>';
    if (opts.numbers) for (var k = 0; k < M.cols; k++)
      s += text(M.x + (k + .5) * cw, M.y + M.h + 5, String(k + 1), 2.8, { w: k % 4 ? 400 : 700, c: k % 4 ? '#777' : '#111' });
    return s;
  }

  function disc(cx, cy, r, dotR, dotDist, angle, label) {
    var p = polar(cx, cy, dotDist, angle || 0), s = '';
    s += '<circle cx="' + cx + '" cy="' + cy + '" r="' + r + '" fill="#fff" stroke="#111" stroke-width=".4"/>';
    s += '<circle cx="' + f(p[0]) + '" cy="' + f(p[1]) + '" r="' + dotR + '" fill="#000"/>';
    s += '<circle cx="' + cx + '" cy="' + cy + '" r="1.2" fill="none" stroke="#999" stroke-width=".3"/>';
    if (label) s += text(cx, cy + r * .55, label, 2.6, { w: 500, c: '#999' });
    return s;
  }

  function sheetSlot() {
    var S = L.sheet, s = '', g = 12;
    s += '<rect x="' + S.x + '" y="' + S.y + '" width="' + S.w + '" height="' + S.h + '" fill="none" stroke="#bbb" stroke-width=".4" stroke-dasharray="3 2"/>';
    /* squadrette d'angolo */
    [[S.x, S.y, 1, 1], [S.x + S.w, S.y, -1, 1], [S.x, S.y + S.h, 1, -1], [S.x + S.w, S.y + S.h, -1, -1]].forEach(function (c) {
      s += '<path d="M' + (c[0] - 3 * c[2]) + ' ' + (c[1] + g * c[3]) + 'V' + (c[1] - 3 * c[3]) + 'H' + (c[0] + g * c[2]) + '" fill="none" stroke="#8a6d3b" stroke-width="3"/>';
    });
    return s;
  }

  /* Disegni della demo, in coordinate della base */
  var DEMO_RH = L.read.h / 36;
  function demoY(wi) { return L.read.y + L.read.h - (wi + .5) * DEMO_RH; }
  function demoX(step) { return L.read.x + step * L.read.w / 16; }
  function stroke(pts, color, w) {
    return '<path d="M' + pts.map(function (p) { return f(p[0]) + ' ' + f(p[1]); }).join('L') + '" stroke="' + color + '" stroke-width="' + (w || 4) + '" stroke-linecap="round" stroke-linejoin="round" fill="none"/>';
  }
  function dot(x, y, c, r) { return '<circle cx="' + f(x) + '" cy="' + f(y) + '" r="' + (r || 3.2) + '" fill="' + c + '"/>'; }
  function demoDrawing() {
    var C = {}; L.instruments.forEach(function (i) { C[i.key] = i.color; });
    var s = '<rect x="' + L.sheet.x + '" y="' + L.sheet.y + '" width="' + L.sheet.w + '" height="' + L.sheet.h + '" fill="#fbfbf7"/>';
    /* righe guida del Do, grigio chiaro: la camera deve ignorarle */
    for (var o = 0; o < 6; o++) { var yc = demoY(o * 7); s += '<line x1="' + L.read.x + '" x2="' + (L.read.x + L.read.w) + '" y1="' + f(yc) + '" y2="' + f(yc) + '" stroke="#d6d6d6" stroke-width=".3"/>'; }
    /* basso: Do La Fa Sol */
    [[0, 0], [4, 5], [8, 3], [12, 4]].forEach(function (b) { s += stroke([[demoX(b[0]) + 3, demoY(b[1])], [demoX(b[0] + 3) + 18, demoY(b[1])]], C.bass, 4.5); });
    /* piano: Fra Martino a puntini (Do Re Mi Do) */
    [14, 15, 16, 14, 14, 15, 16, 14, 16, 17, 18, 18, 16, 17, 18, 18].forEach(function (w, k) { s += dot(demoX(k) + 11, demoY(w), C.piano, 3.4); });
    /* violino: linea lunga che sale */
    s += stroke([[demoX(0) + 4, demoY(23)], [demoX(4), demoY(23)], [demoX(6), demoY(25)], [demoX(8) - 4, demoY(25)]], C.violin, 4);
    /* chitarra: accenti a zig-zag */
    [2, 6, 10, 14].forEach(function (k) { s += stroke([[demoX(k) + 4, demoY(10)], [demoX(k) + 10, demoY(12)], [demoX(k) + 16, demoY(10)]], C.guitar, 3.2); });
    /* flauto: brillantini in alto */
    [[9, 30], [11, 32], [13, 31], [15, 33]].forEach(function (p) { s += dot(demoX(p[0]) + 11, demoY(p[1]), C.flute, 3.2); });
    return s;
  }
  var DEMO_BEAT = [
    [0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 1, 1],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 1, 0, 0, 0, 1, 0, 0, 0, 1, 0, 0, 0, 1, 0],
    [1, 0, 0, 0, 1, 0, 0, 0, 1, 0, 0, 1, 1, 0, 0, 0]
  ];
  var TOKEN = ['#E8B90C', '#16975A', '#1D4ED8', '#E0322A'];
  function demoTokens() {
    var s = '';
    DEMO_BEAT.forEach(function (row, i) { row.forEach(function (on, j) { if (on) s += dot(L.matrix.colX(j), L.matrix.rowY(i), TOKEN[i], 8.5); }); });
    return s;
  }

  /* Base completa: usata dalla demo e dalla pianta */
  function full(opts) {
    opts = opts || {};
    var s = '<rect x="0" y="0" width="' + L.board.w + '" height="' + L.board.h + '" fill="' + (opts.bg || '#fff') + '"/>';
    L.markers.forEach(function (m) { s += marker(m.id, m.x, m.y, m.size, 4); });
    s += panel({});
    s += matrix({});
    s += sheetSlot();
    if (opts.demo) {
      s += demoDrawing() + demoTokens();
      var k = L.knobs;
      s += disc(k.transpose.x, k.transpose.y, k.r || k.transpose.r, 5, k.transpose.dot, 0);
      s += disc(k.scale.x, k.scale.y, k.scale.r, 5, k.scale.dot, 0);
      s += disc(k.speed.x, k.speed.y, k.speed.r, 5, k.speed.dot, opts.speedAngle == null ? -20 : opts.speedAngle);
    }
    return s;
  }

  function svg(content, x, y, w, h, extra) {
    return '<svg xmlns="http://www.w3.org/2000/svg" viewBox="' + x + ' ' + y + ' ' + w + ' ' + h + '" ' + (extra || '') + '>' + content + '</svg>';
  }

  return { marker: marker, panel: panel, matrix: matrix, disc: disc, sheetSlot: sheetSlot, full: full, svg: svg, text: text, polar: polar };
})();
