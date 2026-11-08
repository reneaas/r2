# Trigonometriske funksjoner: Oppgaver



:::::::::::::::{exercise} Oppgave 1
::::::::{quiz-2}


:::::::{quiz-question}
Hva er **amplituden** til grafen nedenfor?

:::{plot}
nocache:
width: 60%
fontsize: 24
let: A = 3
let: d = -1
let: T = 4
let: omega = 2 * pi / T
let: x0 = 2
let: phi = - omega * x0
function: A * sin(omega * x + phi) + d
ymin: -5
ymax: 5
:::

::::::{quiz-answer}
---
correct:
---

$$
A = 3
$$
::::::


::::::{quiz-answer}
$$
A = -1
$$
::::::


::::::{quiz-answer}
$$
A = 4
$$
::::::


::::::{quiz-answer}
$$
A = 2
$$
::::::


:::::::

:::::::{quiz-question}
Hva er **likevektslinja** til grafen nedenfor? 

:::{plot}
nocache:
width: 60%
fontsize: 24
let: A = 3
let: d = -1
let: T = 4
let: omega = 2 * pi / T
let: x0 = 2
let: phi = - omega * x0
function: A * sin(omega * x + phi) + d
ymin: -5
ymax: 5
:::


::::::{quiz-answer}
---
correct:
---
$$
d = -1
$$
::::::


::::::{quiz-answer}
$$
d = 3
$$
::::::


::::::{quiz-answer}
$$
d = 4
$$
::::::


::::::{quiz-answer}
$$
d = -2
$$
::::::



:::::::


:::::::{quiz-question}
Hva er perioden til grafen nedenfor?

:::{plot}
nocache:
fontsize: 24
width: 60%
let: A = 2
let: d = 1
let: T = 2
let: omega = 2 * pi / T
let: x0 = 1
let: phi = - omega * x0
function: A * cos(omega * x + phi) + d
ymin: -3
ymax: 6
:::


::::::{quiz-answer}
$$
T = 3
$$
::::::


::::::{quiz-answer}
---
correct:
---
$$
T = 2
$$
::::::


::::::{quiz-answer}
$$
T = 1
$$
::::::

::::::{quiz-answer}
$$
T = \pi
$$
::::::


:::::::


:::::::{quiz-question}
Hva er perioden til grafen nedenfor?

:::{plot}
nocache:
fontsize: 24
width: 60%
let: A = 3
let: d = 2
let: T = 3
let: omega = 2 * pi / T
let: x0 = 1
let: phi = - omega * x0
function: A * sin(omega * x + phi) + d
ymin: -3
ymax: 6
:::


::::::{quiz-answer}
---
correct:
---
$$
T = 3
$$
::::::


::::::{quiz-answer}
$$
T = 2
$$
::::::


::::::{quiz-answer}
$$
T = 1
$$
::::::

::::::{quiz-answer}
$$
T = \pi
$$
::::::


:::::::

::::::::

:::::::::::::::



---



:::::::::::::::{exercise} Oppgave 2

:::{plot}
nocache:
width: 380px
align: right
fontsize: 24
let: A = 5
let: d = -1
let: T = 4
let: omega = 2 * pi / T
let: x0 = 2
let: phi = - omega * x0
function: A * cos(omega * x + phi) + d, f
ymin: -8
ymax: 8
:::


Grafen til en trigonometrisk funksjon $f$ er vist i figuren til høyre.


:::::::::::::{part} a
Bestem amplituden til $f$.


:::::{answer}
$$
A = 5
$$


::::{solution}
Vi har at $y_\mathrm{topp} = 4$ og $y_\mathrm{bunn} = -6$ som gir at 

$$
A = \dfrac{y_\mathrm{topp} - y_\mathrm{bunn}}{2} = \dfrac{4 - (-6)}{2} = 5
$$


::::

:::::


:::::::::::::


:::::::::::::{part} b
Finn likevektslinja til $f$.


:::::{answer}
$$
d = -1
$$

::::{solution}
Vi har at $y_\mathrm{topp} = 4$ og $y_\mathrm{bunn} = -6$ som gir at 

$$
d = \dfrac{y_\mathrm{topp} + y_\mathrm{bunn}}{2} = \dfrac{4 + (-6)}{2} = -1
$$
::::
:::::


:::::::::::::


:::::::::::::{part} c
Finn perioden til $f$.


:::::{answer}
$$
T = 4
$$

::::{solution}
To nabo-toppunkter på grafen til $f$ er $(-2, 4)$ og $(2, 4)$ som betyr at perioden er 

$$
T = 2 - (-2) = 4
$$
::::
:::::

:::::::::::::


:::::::::::::{part} d
Finn vinkelfrekvensen til $f$.

:::::{answer}
$$
\omega = \dfrac{\pi}{2}
$$

::::{solution}
Vinkelfrekvensen er gitt ved

$$
\omega = \dfrac{2 \pi}{T} = \dfrac{2 \pi}{4} = \dfrac{\pi}{2}
$$

::::
:::::

:::::::::::::


:::::::::::::{part} e
Bestem et mulig funksjonsuttrykk på formen

$$
f(x) = A \cos (\omega x - \varphi) + d
$$


:::::{answer}
$$
f(x) = 5\cos \left(\dfrac{\pi}{2} x - \pi\right) - 1
$$

::::{solution}
Vi har at $\varphi / \omega$ gir oss $x$-koordinaten til det første toppunktet når $x \geq 0$. Dette er i $x = 2$ som gir 

$$
\dfrac{\varphi}{\omega} = 2 \limplies \varphi = 2\omega = 2\cdot\dfrac{\pi}{2} = \pi
$$

Dermed er 

$$
f(x) = A\cos (\omega x - \varphi) + d = 5\cos \left(\dfrac{\pi}{2} x - \pi\right) - 1
$$
::::
:::::

:::::::::::::


:::::::::::::{part} f
Bestem et mulig funksjonsuttrykk på formen

$$
f(x) = A\sin (\omega x - \varphi) + d
$$


:::::{answer}
$$
f(x) = 5\sin \left(\dfrac{\pi}{2} x - \dfrac{\pi}{2}\right) - 1
$$

::::{solution}
For en generell sinusfunksjon, så er faseforskyvningen $\varphi / \omega$ lik $x$-koordinaten til der grafen skjærer likevektslinja så på vei opp *første* gang når $x \geq 0$. Dette skjer når $x = 1$ som gir

$$
\dfrac{\varphi}{\omega} = 1 \limplies \varphi = \omega = \dfrac{\pi}{2}
$$

Altså er 

$$
f(x) = A\sin (\omega x - \varphi) + d = 5\sin \left(\dfrac{\pi}{2} x - \dfrac{\pi}{2}\right) - 1
$$
::::
:::::


:::::::::::::


:::::::::::::::



---



:::::::::::::::{exercise} Oppgave 3
:::::::::::::{part} a
:::{plot}
nocache:
width: 380px
align: right
fontsize: 24
let: A = 3
let: d = -1
let: T = 4
let: omega = 2 * pi / T
let: x0 = 1
let: phi = - omega * x0
function: A * cos(omega * x + phi) + d, f
ymin: -6
ymax: 6
:::

Funksjonen $f$ er vist i figuren til høyre.

Bestem et mulig uttrykk for $f(x)$.


:::::::::::::


:::::::::::::{part} b
:::{plot}
nocache:
width: 380px
align: right
fontsize: 24
let: A = 1
let: d = 3
let: T = pi
let: omega = 2 * pi / T
let: x0 = pi/4
let: phi = - omega * x0
function: A * cos(omega * x + phi) + d, g
ymin: 0
ymax: 6
xtick-format: pi
xmin: 0
xmax: 2*pi
xstep: pi/4
:::

Funksjonen $g$ er vist i figuren til høyre.

Bestem et mulig uttrykk for $g(x)$.
:::::::::::::



:::::::::::::{part} c
:::{plot}
nocache:
width: 380px
align: right
fontsize: 24
let: A = 1
let: d = 2
let: T = 2
let: omega = 2 * pi / T
let: x0 = 1
let: phi = - omega * x0
function: A * sin(omega * x + phi) + d, h
ymin: 0
ymax: 5
:::

Funksjonen $h$ er vist i figuren til høyre.

Bestem et mulig uttrykk for $h(x)$.



:::::::::::::


:::::::::::::{part} d
:::{plot}
nocache:
width: 380px
align: right
fontsize: 24
let: A = 3
let: d = 1
let: T = pi/2
let: omega = 2 * pi / T
let: x0 = 0
let: phi = - omega * x0
function: A * cos(omega * x + phi) + d, p
ymin: -4
ymax: 7
xtick-format: pi
xmin: -2 * pi
xmax: 2 * pi
xstep: pi
:::

Funksjonen $p$ er vist i figuren til høyre.

Bestem et mulig uttrykk for $p(x)$.
:::::::::::::


:::::::::::::::




---



:::::::::::::::{exercise} Oppgave 4
Funksjonen $f$ er gitt ved 

$$
f(x) = 2 \cos\left(\dfrac{\pi}{2}x - \dfrac{\pi}{4}\right) + 1 \qder D_f = [0, 8\rangle
$$



:::::::::::::{part} a
Bestem amplituden, likevektslinja, perioden og faseforskyvningen til grafen til $f$.


:::::::::::::



:::::::::::::{part} b
Bestem nullpunktene til grafen til $f$.


:::::::::::::


:::::::::::::{part} c
Bestem koordinatene til $f$ sine topp- og bunnpunkter.


:::::::::::::


:::::::::::::{part} d
Tegn en skisse av grafen til $f$. 

> En **skisse** skal inneholde sentrale egenskaper som riktig amplitude, periode, faseforskyvning, nullpunkter og ekstremalpunkter.
:::::::::::::



:::::::::::::::


---



:::::::::::::::{exercise} Oppgave 5
Funksjonen $f$ er gitt ved

$$
f(x) = 3 \sin \left(2\pi x - \dfrac{\pi}{2}\right) + 1
$$

Hvilken graf nedenfor viser grafen til $f$?

::::{multi-plot2}
---
rows: 2
cols: 2
fontsize: 24
---

:::{plot}
width: 100%
let: A = 3
let: omega = 2 * pi
let: phi = - pi / 2
let: d = 1
function: A * sin(omega * x + phi) + d
text: 5, 5, "A", center-center, bbox
:::

:::{plot}
width: 100%
let: A = 3
let: omega = 2 * pi
let: phi = - pi / 2
let: d = -1
function: A * sin(omega * x + phi) + d
text: 5, 5, "B", center-center, bbox
:::

:::{plot}
width: 100%
let: A = 3
let: omega = 2 * pi
let: phi = + pi / 2
let: d = 1
function: A * sin(omega * x + phi) + d
text: 5, 5, "C", center-center, bbox
:::


:::{plot}
width: 100%
let: A = 1
let: omega = 2 * pi
let: phi = - pi / 2
let: d = 3
function: A * sin(omega * x + phi) + d
text: 5, 5, "D", center-center, bbox
:::

::::


:::::::::::::::


---



:::::::::::::::{exercise} Oppgave 6
Funksjonen $f$ er gitt ved 

$$
f(x) = 2 \cos \left(\pi x + \frac{\pi}{2}\right) - 2
$$

Hvilken graf nedenfor vises grafen til $f$?


::::{multi-plot2}
---
rows: 2
cols: 2
fontsize: 24
---

:::{plot}
width: 100%
let: A = 2
let: omega = pi
let: phi = - pi / 2
let: d = -2
function: A * cos(omega * x + phi) + d
text: 5, 5, "A", center-center, bbox
:::

:::{plot}
width: 100%
let: A = 2
let: omega = pi
let: phi = pi / 2
let: d = -2
function: A * cos(omega * x + phi) + d
text: 5, 5, "B", center-center, bbox
:::


:::{plot}
width: 100%
let: A = 2
let: omega = 2*pi
let: phi = - pi / 2
let: d = -2
function: A * cos(omega * x + phi) + d
text: 5, 5, "C", center-center, bbox
:::

:::{plot}
width: 100%
let: A = 2
let: omega = pi
let: phi = pi / 2
let: d = 2
function: A * cos(omega * x + phi) + d
text: 5, 5, "D", center-center, bbox
:::

::::




:::::::::::::::


---


:::::::::::::::{exercise} Oppgave 7
:::::::::::::{part} a
Funksjonen $f$ er gitt ved 

$$
f(x) = 2 \cos \left(\pi x + \frac{\pi}{2}\right) - 2
$$

Skriv om funksjonsuttrykket til formen 

$$
f(x) = A \sin (\omega x - \varphi) + d
$$


:::::::::::::


:::::::::::::{part} b
Funksjonen $g$ er gitt ved

$$
g(x) = 3 \sin \left(\frac{\pi}{2} x - \frac{\pi}{3}\right) + 1
$$

Skriv om funksjonsuttrykket til formen 

$$
g(x) = A \cos (\omega x - \varphi) + d
$$


:::::::::::::



:::::::::::::{part} c
Funksjonen $h$ er gitt ved

$$
h(x) = 2\sqrt{3} \cos \left(2x - \frac{\pi}{3}\right) - 3
$$

Skriv om funksjonsuttrykket til formen 

$$
h(x) = A \sin (\omega x - \varphi) + d
$$

:::::::::::::


:::::::::::::{part} d
Funksjonen $p$ er gitt ved

$$
p(x) = 3 \sin \left(\frac{2\pi}{3} x - \frac{\pi}{6}\right) + 1
$$

Skriv om funksjonsuttrykket til formen 

$$
p(x) = A \cos (\omega x - \varphi) + d
$$
:::::::::::::


:::::::::::::::


---


:::::::::::::::{exercise} Oppgave 8
Funksjonen $f$ er gitt ved

$$
f(x) = 2 \sin \left(\frac{\pi}{4} x - \frac{\pi}{2}\right) + 1 \qder D_f = [-10, 10].
$$


:::::::::::::{part} a
Finn perioden til grafen til $f$.


:::::::::::::


:::::::::::::{part} b
Finn faseforskyvningen til grafen til $f$.

:::::::::::::

:::::::::::::{part} c
Finn nullpunktene til $f$.


:::::::::::::


:::::::::::::{part} d
Finn koordinatene til topp- og bunnpunktene til $f$.

:::::::::::::


:::::::::::::::



---



:::::::::::::::{exercise} Oppgave 9
Funksjonen $f$ er gitt ved

$$
f(x) = \sqrt{3} \cos (2x) + 3 \sin (2x) \qder D_f = \langle 0, 2\pi \rangle
$$


:::::::::::::{part} a
Bestem $A$, $\omega$ og $\varphi$ slik at likningen nedenfor er en identitet:

$$
\sqrt{3} \cos (2x) + 3 \sin (2x) = A \cos (\omega x - \varphi)
$$


:::::{answer}
$$
A = 2 \sqrt{3} \and \omega = 2 \and \varphi = \dfrac{\pi}{3}
$$
:::::


:::::::::::::



:::::::::::::{part} b
Løs likningen

$$
f(x) = 3
$$



:::::{answer}
$$
x \in \left\{\dfrac{\pi}{12}, \dfrac{\pi}{4}, \dfrac{13\pi}{12}, \dfrac{5\pi}{4}\right\}
$$
:::::


:::::::::::::


:::::::::::::::