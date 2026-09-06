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

:::::::::::::


:::::::::::::{part} b
Finn likevektslinja til $f$.


:::::::::::::


:::::::::::::{part} c
Finn perioden til $f$.

:::::::::::::


:::::::::::::{part} d
Finn vinkelfrekvensen til $f$.

:::::::::::::


:::::::::::::{part} e
Finn en fasevinkel for $f$.


:::::::::::::


:::::::::::::{part} f
Bestem et mulig funksjonsuttrykk på formen

$$
f(x) = A \cos (\omega x - \varphi) + d
$$
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

Bestem et mulig funksjonsuttrykk på formen

$$
f(x) = A \cos (\omega x - \varphi) + d
$$


:::::::::::::


:::::::::::::{part} b
:::{plot}
nocache:
width: 380px
align: right
fontsize: 24
let: A = 1
let: d = 3
let: T = 2
let: omega = 2 * pi / T
let: x0 = 2
let: phi = - omega * x0
function: A * cos(omega * x + phi) + d, g
ymin: 0
ymax: 6
:::

Funksjonen $g$ er vist i figuren til høyre.

Bestem et mulig funksjonsuttrykk på formen

$$
g(x) = A \cos (\omega x - \varphi) + d
$$
:::::::::::::



:::::::::::::{part} c
:::{plot}
nocache:
width: 380px
align: right
fontsize: 24
let: A = 5
let: d = -1
let: T = 1
let: omega = 2 * pi / T
let: x0 = 1/2
let: phi = - omega * x0
function: A * cos(omega * x + phi) + d, h
ymin: -7
ymax: 7
xmin: -4
xmax: 4
:::

Funksjonen $h$ er vist i figuren til høyre.

Bestem et mulig funksjonsuttrykk på formen

$$
h(x) = A \cos (\omega x - \varphi) + d
$$
:::::::::::::


:::::::::::::{part} d
:::{plot}
nocache:
width: 380px
align: right
fontsize: 24
let: A = 3
let: d = 1
let: T = 1/2
let: omega = 2 * pi / T
let: x0 = 3/2
let: phi = - omega * x0
function: A * cos(omega * x + phi) + d, p
ymin: -4
ymax: 7
xmin: -2
xmax: 2
:::

Funksjonen $p$ er vist i figuren til høyre.

Bestem et mulig funksjonsuttrykk på formen

$$
p(x) = A \cos (\omega x - \varphi) + d
$$
:::::::::::::


:::::::::::::::


---


:::::::::::::::{exercise} Oppgave 4


:::::::::::::{part} a
:::{plot}
nocache:
width: 380px
align: right
fontsize: 24
let: A = 1
let: d = 2
let: T = 2
let: omega = 2 * pi / T
let: x0 = 1/2
let: phi = - omega * x0
function: A * sin(omega * x + phi) + d, f
ymin: 0
ymax: 5
:::

Funksjonen $f$ er vist i figuren til høyre.

Bestem et mulig funksjonsuttrykk på formen

$$
f(x) = A \sin (\omega x - \varphi) + d
$$
:::::::::::::


:::::::::::::{part} b
:::{plot}
nocache:
width: 380px
align: right
fontsize: 24
let: A = 3
let: d = 1
let: T = 3
let: omega = 2 * pi / T
let: x0 = 1/4
let: phi = - omega * x0
function: A * sin(omega * x + phi) + d, g
:::



En trigonometrisk funksjon $g$ er vist i figuren til høyre.

Bestem et funksjonsuttrykk på formen

$$
g(x) = A \sin (\omega x - \varphi) + d
$$


:::::{answer}
$$
g(x) = 3 \sin \left(\frac{2 \pi}{3} x - \frac{\pi}{6}\right) + 1
$$

::::{solution}
Vi kan først merke oss at 

$$
\begin{align*}
y_\mathrm{topp} &= 4 \\
\\
y_\mathrm{bunn} &= -2 \\
\end{align*}
$$

Da er amplituden gir ved 

$$
A = \frac{y_\mathrm{topp} - y_\mathrm{bunn}}{2} = \frac{4 - (-2)}{2} = 3
$$

Likevektslinja er gitt ved

$$
d = \frac{y_\mathrm{topp} + y_\mathrm{bunn}}{2} = \frac{4 + (-2)}{2} = 1
$$

Perioden $T$ finner ved å se på den horisontale avstanden mellom to toppunkter som vi kan se er $T = 3$ siden grafen har et toppunkt både i $T = 1$ og $T = 4$. Vinkelfrekvensen er da 

$$
\omega = \frac{2 \pi}{T} = \frac{2 \pi}{3}
$$

Nå må vi bestemme fasevinkelen $\varphi$. Vi har nå at 

$$
g(x) = 3 \sin \left(\frac{2 \pi}{3} x + \varphi\right) + 1
$$

For å finne fasevinkelen trenger vi ett punkt på grafen til $g$. Vi velger punktet $(1, 4)$ som gir oss likningen

$$
g(1) = 4 \liff 3 \sin \left(\frac{2 \pi}{3} + \varphi\right) + 1 = 4
$$

Vi setter $u = \frac{2 \pi}{3} + \varphi$ og får da den enkleste likningen som:

$$
\sin u = 1 \liff u = \frac{\pi}{2}
$$

Så setter vi tilbake definisjonen av $u$: 

$$
\frac{2 \pi}{3} + \varphi = \frac{\pi}{2}
$$

som gir

$$
\varphi = \frac{\pi}{2} - \frac{2 \pi}{3} = - \frac{\pi}{6}
$$

Altså er et mulig funksjonsuttrykk for $g$ gitt ved

$$
g(x) = 3 \sin \left(\frac{2 \pi}{3} x - \frac{\pi}{6}\right) + 1
$$

::::
:::::


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

Finn et mulig funksjonsuttrykk på formen

$$
h(x) = A \sin (\omega x - \varphi) + d
$$


:::{hint} Hint: Hvordan lese av perioden?
Når vi ikke kan tydelig lese av toppunktet eller bunnpunktet til grafen, kan vi for eksempel se etter der grafen til $f$ skjærer likevektslinja på vei opp. Den horisontale avstanden mellom to slike punkter er lik perioden $T$.

:::

:::::::::::::



:::::::::::::{part} d
:::{plot}
nocache:
width: 380px
align: right
fontsize: 24
let: A = 4
let: d = -2
let: T = 4
let: omega = 2 * pi / T
let: x0 = 1
let: phi = - omega * x0
function: A * sin(omega * x + phi) + d, p
ymin: -8
ymax: 6
:::

Funksjonen $p$ er vist i figuren til høyre.

Finn et mulig funksjonsuttrykk på formen

$$
p(x) = A \sin (\omega x - \varphi) + d
$$

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