# Scaletta knob per Blender

Animazione dello schermo: `knob-screen-oled-2240.mp4`, oppure la sequenza PNG in `knob-screen-oled-png-2240.zip`. Durata 28,5 s, 30 fps, 855 frame, 2240 × 2240.

Imposta Blender a **30 fps**, frame start 1 e frame end 855. Il frame di Blender è uguale a tempo × 30 + 1.

| Tempo | Frame | Azione sulla knob | Cosa succede sullo schermo |
|---|---|---|---|
| 0,0 s | 1 | — | Spento |
| 1,0 s | 31 | — | Logo Hive (avvio) |
| 3,3 s | 100 | — | Folle N |
| **5,0 s** | **151** | **PRESS** | Selezione modalità |
| **6,6 s** | **199** | **ROTATE CW, 1 scatto (0,5 s)** | N → A |
| **8,4 s** | **253** | **PRESS** | Conferma A, percorso Field H |
| **10,4 s** | **313** | **ROTATE CW, 1 scatto (0,5 s)** | Field H → Field M |
| **12,0 s** | **361** | **ROTATE CCW, 1 scatto (0,5 s)** | Field M → Field H |
| **13,8 s** | **415** | **PRESS** | Field H selezionato, Ready |
| **15,6 s** | **469** | **PRESS** | Avvio guida autonoma |
| 16,6 s | 499 | — | Guida autonoma, 39 % |
| **19,0 → 21,0 s** | **571 → 631** | **HOLD 2 s** (resta premuta) | Anello bianco, poi Impostazioni |
| **22,6 s** | **679** | **PRESS** | Modifica velocità |
| **24,2 s** | **727** | **ROTATE CW, scatto 1 (0,3 s)** | 6.0 → 6.1 |
| **24,65 s** | **740** | **ROTATE CW, scatto 2** | 6.2 |
| **25,1 s** | **754** | **ROTATE CW, scatto 3** | 6.3 |
| **25,55 s** | **767** | **ROTATE CW, scatto 4** | 6.4 |
| **26,0 s** | **781** | **ROTATE CW, scatto 5** | 6.5 |
| **27,0 s** | **811** | **PRESS** | Conferma 6.5 km/h |
| 27,4 s | 823 | — | Ritorno alla guida autonoma |
| 27,9 → 28,5 s | 838 → 855 | — | Dissolvenza (loop) |

## Come animare in Blender

- **Press:** spostamento della ghiera verso il basso di 0,6–0,8 mm.
  - Si abbassa in 4 frame e risale in 5 frame, partendo dal frame indicato.
  - Per l'HOLD resta giù dal frame 571 al frame 631.
- **Rotate, 1 scatto:**
  - Selezione modalità e percorsi: 20° in 15 frame (0,5 s).
  - Velocità: 6° in 9 frame (0,3 s).
- **Curva "calamita":** nel Graph Editor usa interpolazione Bézier con maniglie piatte all'inizio e alla fine, cioè Auto Clamped. Così hai attrito in partenza e all'arrivo, e il movimento è veloce a metà.
  - Per lo scatto finale aggiungi 1° di overshoot 3 frame dopo e torna indietro in altri 4 frame.
- **Rotazione del display:** lo schermo resta fermo, ruota solo la ghiera in gomma.

Per controllare la sincronia, apri `knob-screen-oled.html?cues=1` nel browser: in basso a sinistra vedi il tempo e l'azione da fare.

## Keyframe esatti (30 fps)

- **PRESS**: posizione Z della ghiera. Keyframe: inizio = 0, +4 frame = −0,7 mm, +9 frame = 0.
- **ROTATE modalità/percorso**: rotazione Z di 20°. Keyframe: inizio = 0°, +15 frame = 20°, +18 = 21°, +22 = 20°.
- **ROTATE velocità**: rotazione Z di 6°. Keyframe: inizio = 0°, +9 frame = 6°, +11 = 6,5°, +14 = 6°.

La rotazione è cumulativa: ogni scatto parte dall'angolo raggiunto con quello precedente.

| Frame | Azione | Keyframe |
|---|---|---|
| 151 | PRESS | 151 · 155 · 160 |
| 199 | ROTATE CW +20° | 199 · 214 · 217 · 221 |
| 253 | PRESS | 253 · 257 · 262 |
| 313 | ROTATE CW +20° | 313 · 328 · 331 · 335 |
| 361 | ROTATE CCW −20° | 361 · 376 · 379 · 383 |
| 415 | PRESS | 415 · 419 · 424 |
| 469 | PRESS | 469 · 473 · 478 |
| 571 | HOLD | 571 · 575 (giù) · 631 (giù) · 635 (su) |
| 679 | PRESS | 679 · 683 · 688 |
| 727 | ROTATE CW +6° | 727 · 736 · 738 · 741 |
| 740 | ROTATE CW +6° | 740 · 749 · 751 · 754 |
| 754 | ROTATE CW +6° | 754 · 763 · 765 · 768 |
| 767 | ROTATE CW +6° | 767 · 776 · 778 · 781 |
| 781 | ROTATE CW +6° | 781 · 790 · 792 · 795 |
| 811 | PRESS | 811 · 815 · 820 |

**Curve nel Graph Editor:** seleziona tutto, premi T e scegli Bézier, poi premi V e scegli Auto Clamped.

**Nota:** nei 5 scatti di velocità l'assestamento di uno scatto si sovrappone di 1 frame all'inizio del successivo. Se Blender crea un keyframe doppio, tieni quello che inizia lo scatto nuovo.
