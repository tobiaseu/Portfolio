/* Lettore di disegni · MVP cartone
   Misure della base in millimetri, origine in alto a sinistra.
   Le usano sia l'app (index.html) sia il modello da stampare (modello.html):
   se cambi una misura qui, ristampa il modello. */
var LAYOUT = {
  version: 1,
  board: { w: 660, h: 460 },

  /* Marker ArUco (dizionario ARUCO_MIP_36h12), lato del quadrato nero = size */
  markers: [
    { id: 0, x: 40,  y: 40,  size: 50, name: 'in alto a sinistra' },
    { id: 1, x: 620, y: 40,  size: 50, name: 'in alto a destra' },
    { id: 2, x: 620, y: 420, size: 50, name: 'in basso a destra' },
    { id: 3, x: 40,  y: 420, size: 50, name: 'in basso a sinistra' }
  ],

  /* Foglio A3 senza strisce (386 x 265) appoggiato nelle squadrette d'angolo */
  sheet: { x: 195, y: 15, w: 386, h: 265 },
  /* Area suonata, uguale alle schede guida: 10 mm dal bordo sinistro, 34 dall'alto */
  read: { x: 205, y: 49, w: 366, h: 222 },

  /* Matrice percussioni 4 x 16, colonne allineate al foglio */
  matrix: { x: 205, y: 285, w: 366, h: 88, rows: 4, cols: 16 },
  drums: [
    { key: 'hat',   name: 'Charleston', short: 'CH' },
    { key: 'clap',  name: 'Battimani',  short: 'BM' },
    { key: 'snare', name: 'Rullante',   short: 'RU' },
    { key: 'kick',  name: 'Cassa',      short: 'CA' }
  ],

  /* Strumenti per colore: dall'alto in basso come i mute accanto al foglio */
  instruments: [
    { key: 'flute',  name: 'Flauto',   color: '#16975A', label: 'verde' },
    { key: 'violin', name: 'Violino',  color: '#E8B90C', label: 'giallo' },
    { key: 'piano',  name: 'Piano',    color: '#1D4ED8', label: 'blu' },
    { key: 'guitar', name: 'Chitarra', color: '#E0322A', label: 'rosso' },
    { key: 'bass',   name: 'Basso',    color: '#111111', label: 'nero' }
  ],
  muteColor: { x: 176, r: 11, y: [80, 122, 164, 206, 248] },
  muteDrum:  { x: 176, r: 9 },            /* y = centro di ogni riga della matrice */

  /* Comandi: gruppo SUONO sopra, gruppo TEMPO in basso a sinistra */
  knobs: {
    transpose: { x: 45,  y: 150, r: 24, dot: 16, name: 'Trasporta' },
    scale:     { x: 125, y: 150, r: 24, dot: 16, name: 'Scala' },
    speed:     { x: 125, y: 250, r: 24, dot: 16, name: 'Velocità' }
  },
  pads: {
    play: { x: 45,  y: 250, r: 22, name: 'PLAY / STOP' },
    mode: { x: 45,  y: 325, r: 15, name: 'GIRO / UNA VOLTA' },
    rec:  { x: 125, y: 325, r: 15, name: 'REC' }
  },
  panel: { x: 10, y: 70, w: 185, h: 308 },

  /* Scale della manopola, 5 scatti da -120° a +120° */
  scales: [
    { name: 'Sole',       color: '#F2A900', steps: [0, 2, 4, 7, 9] },
    { name: 'Luna',       color: '#5B5BD6', steps: [0, 3, 5, 7, 10] },
    { name: 'Arcobaleno', color: '#E0322A', steps: [0, 2, 4, 5, 7, 9, 11] },
    { name: 'Pioggia',    color: '#2A8FBF', steps: [0, 2, 3, 5, 7, 8, 10] },
    { name: 'Libero',     color: '#777777', steps: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11] }
  ],
  scaleAngles: [-120, -60, 0, 60, 120],
  transposeRange: 6,        /* -6..+6 semitoni su 13 scatti da -135° a +135° */
  speedRange: [50, 160]     /* battiti al minuto, da -135° a +135° */
};
LAYOUT.matrix.rowY = function (i) { return LAYOUT.matrix.y + (i + 0.5) * LAYOUT.matrix.h / LAYOUT.matrix.rows; };
LAYOUT.matrix.colX = function (j) { return LAYOUT.matrix.x + (j + 0.5) * LAYOUT.matrix.w / LAYOUT.matrix.cols; };
