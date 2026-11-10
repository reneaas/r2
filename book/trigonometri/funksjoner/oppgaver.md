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


:::::{answer}
$$
f(x) = 3 \sin\left(\dfrac{\pi}{2}x\right) - 1 \qeller f(x) = 3 \cos\left(\dfrac{\pi}{2}x - \dfrac{\pi}{2}\right) - 1
$$


::::{solution}
Vi har at $y_\mathrm{topp} = 2$ og $y_\mathrm{bunn} = -4$ som gir amplituden

$$
A = \dfrac{y_\mathrm{topp} - y_\mathrm{bunn}}{2} = \dfrac{2 - (-4)}{2} = 3
$$

og likevektslinja


$$
d = \dfrac{y_\mathrm{topp} + y_\mathrm{bunn}}{2} = \dfrac{2 - 4}{2} = -1
$$

Avstanden mellom to toppunkter er $\Delta x = 5 - 1 = 4$ som betyr at perioden er $T = 4$. Da er vinkelfrekvensen

$$
\omega = \dfrac{2\pi}{T} = \dfrac{2\pi}{4} = \dfrac{\pi}{2}
$$

Vi velger her en generell sinusfunksjon siden grafen skjærer likevektslinja si på vei opp i $x = 0$ som betyr at $\varphi = 0$. Da har vi at 

$$
f(x) = 3 \sin\left(\dfrac{\pi}{2}x\right) - 1
$$

::::
:::::


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


:::::{answer}
$$
g(x) = \cos\left(2x - \dfrac{\pi}{2}\right) + 3 \qeller g(x) = \sin(2x) + 3
$$

::::{solution}
Vi har at $y_\mathrm{topp} = 4$ og $y_\mathrm{bunn} = 2$. Da blir amplituden

$$
A = \dfrac{y_\mathrm{topp} - y_\mathrm{bunn}}{2} = \dfrac{4 - 2}{2} = 1
$$

og likevektslinja blir

$$
d = \dfrac{y_\mathrm{topp} + y_\mathrm{bunn}}{2} = \dfrac{4 + 2}{2} = 3
$$

Avstanden mellom to toppunkter gir perioden:

$$
T = \dfrac{5\pi}{4} - \dfrac{\pi}{4} = \pi
$$

Da blir vinkelfrekvensen

$$
\omega = \dfrac{2\pi}{T} = \dfrac{2\pi}{\pi} = 2
$$

Vi velger å bruke en generell cosinusfunksjon her siden vi kan lese av faseforskyvningen ved å bruke det første toppunkt i $x = \frac{\pi}{4}$. Da har vi at 

$$
\dfrac{\varphi}{\omega} = \dfrac{\pi}{4} \limplies \varphi = \omega \cdot \dfrac{\pi}{4} = 2 \cdot \dfrac{\pi}{4} = \dfrac{\pi}{2}
$$

Dermed er 

$$
g(x) = A\cos(\omega x - \varphi) + d = \cos\left(2x - \dfrac{\pi}{2}\right) + 3
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

Bestem et mulig uttrykk for $h(x)$.



:::::{answer}
$$
h(x) = \sin(\pi x - \pi) + 2
$$

::::{solution}
Siden vi ikke kan lese av koordinatene til toppunktene til $h$, så velger vi å bruke en generell sinusfunksjon 

$$
h(x) = A\sin(\omega x - \varphi) + d
$$

Vi kan lese av fra grafen at likevektslinja er $d = 2$ og amplituden er $A = 1$. 

Perioden $T$ kan vi lese av ved å finne avstanden mellom to punkter der grafen skjærer likevektslinja si på vei oppover. Dette skjer i både $x = 1$ og $x = 3$ som betyr at perioden er $T = 2$.
Vinkelfrekvensen er da 

$$
\omega = \dfrac{2\pi}{T} = \dfrac{2\pi}{2} = \pi
$$

Faseforskyvningen er lik avstanden fram til første skjæring mellom grafen og likevektslinja når den er på vei opp som skjer i $x = 1$. Dermed er 

$$
\dfrac{\varphi}{\omega} = 1 \limplies \varphi = \omega = \pi
$$

Ergo er 

$$
h(x) = A\sin(\omega x - \varphi) + d = \sin(\pi x - \pi) + 2
$$

::::
:::::


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


:::::{answer}
$$
p(x) = 3 \cos(4x) + 1
$$

::::{solution}
Her kan lese av koordinatene til toppunkter, men ikke skjæring mellom likevektslinja og grafen, så da velger vi en generell cosinusfunksjon 

$$
p(x) = A \cos(\omega x - \varphi) + d
$$

Vi har at $y_\mathrm{topp} = 4$ og $y_\mathrm{bunn} = -2$ som gir at amplituden er 

$$
A = \dfrac{y_\mathrm{topp} - y_\mathrm{bunn}}{2} = \dfrac{4 - (-2)}{2} = 3
$$

og likvektslinje 

$$
d = \dfrac{y_\mathrm{topp} + y_\mathrm{bunn}}{2} = \dfrac{4 - 2}{2} = 1
$$

Fra $x = 0$ til $x = \pi$ går grafen gjennom to full perioder som betyr at 

$$
2T = \pi \liff T = \dfrac{\pi}{2}
$$

som gir at vinkelfrekvensen er 

$$
\omega = \dfrac{2\pi}{T} = \dfrac{2\pi}{\pi/2} = 4
$$


Siden det første toppunktet er i $x = 0$, så er $\varphi = 0$. Dermed får vi 

$$
p(x) = 3 \cos(4x) + 1
$$


::::
:::::


:::::::::::::


:::::::::::::::




---



:::::::::::::::{exercise} Oppgave 4
Funksjonen $f$ er gitt ved 

$$
f(x) = 2 \cos\left(\dfrac{\pi}{6}x - \dfrac{\pi}{3}\right) + 1 \qder D_f = [-8, 8].
$$



:::::::::::::{part} a
Bestem amplituden, likevektslinja, perioden og faseforskyvningen til grafen til $f$.


:::::{answer}

* Amplitude: $A = 2$
* Likevektslinje: $d = 1$
* Periode: $T = 12$
* Faseforskyvning: $\dfrac{\varphi}{\omega} = 2$

::::{solution}
Funksjonsuttrykket er på formen

$$
f(x) = A\cos(\omega x - \varphi) + d
$$

der 

$$
A = 2 \and \omega = \dfrac{\pi}{6} \and \varphi = \dfrac{\pi}{3} \and d = 1
$$

Amplituden og likevektslinja leser vi rett av. For å finne perioden $T$ bruker vi at 

$$
\omega = \dfrac{2\pi}{T} \liff T = \dfrac{2\pi}{\omega} = \dfrac{2\pi}{\pi/6} = 12
$$

Faseforskyvningen er 

$$
\dfrac{\varphi}{\omega} = \dfrac{\pi/3}{\pi/6} = 2
$$

Altså har vi at 

* Amplitude: $A = 2$
* Likevektslinje: $d = 1$
* Periode: $T = 12$
* Faseforskyvning: $\dfrac{\varphi}{\omega} = 2$



::::
:::::

:::::::::::::



:::::::::::::{part} b
Bestem nullpunktene til grafen til $f$.



:::::{answer}
$$
x \in \{-6, -2, 6\}
$$

::::{solution}
Vi finner nullpunktene til $f$ ved å løse $f(x) = 0$. Da får vi 

$$
f(x) = 0
$$

$$
2 \cos\left(\dfrac{\pi}{6}x - \dfrac{\pi}{3}\right) + 1 = 0
$$

som gir 

$$
\cos u = -\dfrac{1}{2} \qder u = \dfrac{\pi}{6}x - \dfrac{\pi}{3}
$$

De generelle løsningene for $u$ er da 

$$
u = \pm \dfrac{2\pi}{3} + 2\pi k \qfor k \in \mathbb{Z}
$$

Så setter vi tilbake $u = \dfrac{\pi}{6}x - \dfrac{\pi}{3}$:

$$
\dfrac{\pi}{6}x - \dfrac{\pi}{3} = \pm \dfrac{2\pi}{3} + 2\pi k \qfor k \in \mathbb{Z}
$$

Løser vi for $x$ får vi 

$$
\dfrac{\pi}{6}x = \dfrac{\pi}{3} \pm \dfrac{2\pi}{3} + 2\pi k
$$

$$
x = 2 \pm 4 + 12 k \qfor k \in \mathbb{Z}
$$

Som vi kan skrive om mer konkret til 

$$
x = -2 + 12k \or x = 6 + 12k
$$

Løsningene må ligge i definisjonsmengden $D_f = [-8, 8]$. Den første løsningen gir bare

$$
x = -2 
$$

og den andre løsningen gir

$$
x = -6 \or x = 6
$$

Altså er nullpunktene til $f$ gitt ved 

$$
x \in \{-6, -2, 6\}
$$





::::
:::::


:::::::::::::


:::::::::::::{part} c
Bestem koordinatene til $f$ sine topp- og bunnpunkter.


:::::{answer}
* Toppunkter: $\{(2, 3)\}$
* Bunnpunkter: $\{(-4, -1), (8, -1)\}$

::::{solution}
Vi finner ett av toppunktene til $f$. Da vil alle andre toppunkter ligge en full periode $T = 12$ unna. Faseforskyvningen gir oss $x$-koordinaten til et slikt toppunkt 

$$
x = \dfrac{\varphi}{\omega} = 2
$$

Ingen andre toppunkter vil ligge innenfor intervallet siden å legge til eller trekke fra hele perioder tar oss utenfor definisjonsmengden, så da er $(2, 3)$ det eneste toppunktet på grafen. 

Vi finner ett bunnpunkt ved å gå en halv periode $T/2$ fra et toppunkt. Dermed er $x$-koordinaten til ett bunnpunkt gitt ved 

$$
x = 2 + \dfrac{T}{2} = 2 + 6 = 8
$$

For å finne de andre bunnpunktene går vi en full periode: 

$$
x = 8 - 12 = -4
$$

Ingen andre bunnpunkter vil ligge innenfor definisjonsmengden. Dermed har vi

* Toppunkter: $\{(2, 3)\}$
* Bunnpunkter: $\{(-4, -1), (8, -1)\}$
::::
:::::


:::::::::::::


:::::::::::::{part} d
Tegn en skisse av grafen til $f$. 

> En **skisse** skal inneholde sentrale egenskaper ved funksjonen som gjør at den er entydig. 


:::::{answer}

:::{plot}
width: 60%
ticks: off
function: 2*cos(pi/6*x - pi/3) + 1, [-8, 8], f, blue
function-endpoints: true
xmin: -10
xmax: 10
ymin: -2
ymax: 4
point: (-4, -1)
text: -4, -1, "$(-4, -1)$", bottom-center
point: (8, -1)
text: 8, -1, "$(8, -1)$", bottom-right
point: (2, 3)
text: 2, 3, "$(2, 3)$", top-center
xstep: 2
hline: 1
text: 10, 1, "$d = 1$", center-right
line-segment: (2, 1), (2, 3), solid, red
text: 2, 2, "$A = 2$", center-right
point: (-6, 0)
text: -6, 0, "$(-6, 0)$", bottom-left
point: (-2, 0)
text: -2, 0, "$(-2, 0)$", bottom-right
point: (6, 0)
text: 6, 0, "$(6, 0)$", top-right
:::

:::::


:::::::::::::



:::::::::::::::




---


:::::::::::::::{exercise} Oppgave 5
Funksjonen $g$ er gitt ved

$$
g(x) = 4 \sin\left(\dfrac{\pi}{12}x - \dfrac{\pi}{3}\right) - 2 \qder D_g = [0, 24\rangle
$$


:::::::::::::{part} a
Finn amplituden, perioden, likevektslinja og faseforskyvningen til grafen til $g$.



:::::{answer}
* Amplitude $A = 4$
* Likevektslinje $d = -2$
* Periode $T = 24$
* Faseforskyvning $\dfrac{\varphi}{\omega} = 4$

::::{solution}
Fra funksjonsuttrykket kan vi umiddelbart lese av at 

* Amplitude $A = 4$
* Likevektslinje $d = -2$
* Vinkelfrekvens $\omega = \dfrac{\pi}{12}$
* Fasevinkel $\varphi = \dfrac{\pi}{3}$

Vi finner perioden $T$ ved 

$$
\omega = \dfrac{2\pi}{T} \limplies T = \dfrac{2\pi}{\omega} = \dfrac{2\pi}{\pi/12} = 24
$$

og faseforskyvningen er 

$$
\dfrac{\varphi}{\omega} \dfrac{\pi/3}{\pi/12} = 4
$$


::::
:::::


:::::::::::::



:::::::::::::{part} b
Finn nullpunktene til $g$.



:::::{answer}

$$
x \in \{6, 14\}
$$

::::{solution}
Nullpunktene er gitt ved løsningen av 

$$
g(x) = 0
$$

$$
4 \sin\left(\dfrac{\pi}{12}x - \dfrac{\pi}{3}\right) - 2 = 0
$$

$$
\sin\left(\dfrac{\pi}{12}x - \dfrac{\pi}{3}\right) = \dfrac{1}{2}
$$

Vi setter $u = \dfrac{\pi}{12}x - \dfrac{\pi}{3}$. Da får vi

$$
\sin u = \dfrac{1}{2}
$$

som har de generelle løsningene 

$$
u = \dfrac{\pi}{6} + 2\pi k \or u = \pi - \dfrac{\pi}{6} + 2\pi k = \dfrac{5\pi}{6} + 2\pi k
$$

Vi setter tilbake $u = \dfrac{\pi}{12}x - \dfrac{\pi}{3}$ og løser for $x$. Den første av de to løsningene gir da 

$$
\dfrac{\pi}{12}x - \dfrac{\pi}{3} = \dfrac{\pi}{6} + 2\pi k
$$

$$
\pi x - 4\pi = 2\pi + 24\pi k
$$

$$
\pi x = 6 \pi + 24\pi k
$$

$$
x = 6 + 24k
$$

For den andre likningen får vi

$$
\dfrac{\pi}{12}x - \dfrac{\pi}{3} = \dfrac{5\pi}{6} + 2\pi k
$$

$$
\pi x - 4\pi = 10\pi + 24\pi k
$$

$$
\pi x = 14\pi + 24\pi k
$$

$$
x = 14 + 24k
$$

Altså er nullpunktene til $g$ generelt sett gitt ved 

$$
x = 6 + 24k \or x = 14 + 24k
$$

Nullpunktene må ligge i definisjonsmengden $D_g = [0, 24\rangle$. Dette gir oss kun

$$
x \in \{6, 14\}
$$

siden perioden på $T = 24$ for hver løsning vil ta oss utenfor definisjonsmengden fra de to spesielle løsningene $x = 6$ og $x = 14$.

::::
:::::


:::::::::::::


:::::::::::::{part} c
Finn koordinatene til topp- og bunnpunktene til $g$.


:::::{answer}

* Toppunkt i $(10, 2)$
* Bunnpunkt i $(22, -6)$


::::{solution}
For å finne toppunktene til $g$, så løser vi likningen $\sin u = 1$ der $u = \dfrac{\pi}{12}x - \dfrac{\pi}{3}$:

$$
\sin u = 1 \liff u = \dfrac{\pi}{2} + 2\pi k
$$

Vi setter tilbake definisjonen av $u$ og løser for $x$:

$$
\dfrac{\pi}{12}x - \dfrac{\pi}{3} = \dfrac{\pi}{2} + 2\pi k
$$

$$
\pi x - 4\pi = 6\pi + 24\pi k
$$

$$
\pi x = 10\pi + 24\pi k
$$

$$
x = 10 + 24k
$$

Her vil bare $x = 10$ ligge innenfor definisjonsmengden. Maksverdien til $g(x)$ vil være $y_\mathrm{topp} = A + d = 4 - 2 = 2$. Dermed er grafens eneste toppunkt $(10, 2)$.

Det nærmeste bunnpunktet ligger en halv periode unna toppunktet som gir oss 

$$
x = 10 + \dfrac{T}{2} = 10 + \dfrac{24}{2} = 10 + 12 = 22
$$

Siden perioden er $T = 24$, vil det å legge til eller trekke fra en periode på denne løsningen ta oss utenfor definisjonsmengden, så det finnes ikke flere bunnpunkter. Vi har at $y$-koordinaten til bunnpunktet er 

$$
y_\mathrm{bunn} = d - A = -2 - 4 = -6
$$

Dermed grafens eneste bunnpunkt $(22, -6)$. 

Så oppsummert:

* Toppunkt i $(10, 2)$
* Bunnpunkt i $(22, -6)$


::::
:::::

:::::::::::::


:::::::::::::{part} d
Tegn en skisse av grafen til $g$.


:::::{answer}

:::{plot}
width: 60%
nocache:
function: 4 * sin(pi/12 * x - pi / 3) - 2, [0, 24), g, blue
function-endpoints: true
xmin: -2
xmax: 26
xstep: 2
ymin: -8
ymax: 4
ticks: off
hline: -2
text: 26, -2, "$d = -2$", center-right
point: (10, 2)
text: 10, 2, "$(10, 2)$", top-right
point: (22, -6)
text: 22, -6, "$(22, -6)$", bottom-left
point: (14, 0)
text: 14, 0, "$(14, 0)$", top-right
point: (6, 0)
text: 6, 0, "$(6, 0)$", top-left
line-segment: (22, -6), (22, -2), red, solid
text: 22, -4, "$A = 4$", center-right
:::
:::::



:::::::::::::


:::::::::::::::



---



:::::::::::::::{exercise} Oppgave 6

:::::::::::::{part} a
Bestem $A$, $\omega$ og $\varphi$ slik at likningen er en identitet.


$$
\sqrt{2} \cos (3x) + \sqrt{2} \sin (3x) = A\cos(\omega x - \varphi)
$$


:::::{answer}

$$
A = 2 \and \omega = 3 \and \varphi = \dfrac{\pi}{4}
$$

::::{solution}
Vi har at 

$$
a = \sqrt{2} \and b = \sqrt{2} \limplies A = \sqrt{a^2 + b^2} = 2
$$

Vi har at 

$$
a = A\cos \varphi \and b = A \sin \varphi
$$

som gir 

$$
\sqrt{2} = 2 \cos \varphi \and \sqrt{2} = 2 \sin \varphi
$$

eller da 

$$
\cos \varphi = \dfrac{\sqrt{2}}{2} \and \sin \varphi = \dfrac{\sqrt{2}}{2}
$$

Siden både cosinus og sinus er positive, så må $\varphi$ ligge i 1. kvadrant. Siden verdiene er like, får vi at 

$$
\varphi = \dfrac{\pi}{4}
$$

Vinkelfrekvensen er lik på begge sider slik at $\omega = 3$. Dermed er likningen en identitet dersom

$$
A = 2 \and \omega = 3 \and \varphi = \dfrac{\pi}{4}
$$

::::
:::::



:::::::::::::


:::::::::::::{part} b
Bestem $A$, $\omega$ og $\varphi$ slik at likningen er en identitet.

$$
5\sqrt{3} \cos(4x) - 5 \sin(4x) = A\cos(\omega x - \varphi)
$$



:::::{answer}
$$
A = 10 \and \omega = 4 \and \varphi = -\dfrac{\pi}{6}
$$


::::{solution}
Vi har at $a = 5\sqrt{3}$ og $b = -5$. Da er amplituden $A$ gitt ved:

$$
\begin{align*}
A &= \sqrt{a^2 + b^2} \\
\\
&= \sqrt{(5\sqrt{3})^2 + (-5)^2} \\
\\
&= \sqrt{5^2 \cdot 3 + 5^2} \\
\\
&= \sqrt{4 \cdot 5^2} \\
\\
&= \sqrt{4} \cdot \sqrt{5^2} \\
\\
&= 10
\end{align*}
$$

Vi har derfra at 

$$
a = A \cos \varphi \and b = A \sin \varphi
$$

$$
5 \sqrt{3} = 10 \cos \varphi \and -5 = 10 \sin \varphi
$$

$$
\cos \varphi = \dfrac{\sqrt{3}}{2} \and \sin \varphi = -\dfrac{1}{2}
$$

Siden $\cos \varphi$ er positiv og $\sin \varphi$ er negativ, så må $\varphi$ ligge i 4. kvadrant. For at vinkelen skal oppfylle de to likningene samtidig kan vi sette

$$
\varphi = -\dfrac{\pi}{6}
$$

Som vanlig er vinkelfrekvensen lik på begge sider, så $\omega = 4$. Dermed er likningen en identitet dersom

$$
A = 10 \and \omega = 4 \and \varphi = -\dfrac{\pi}{6}
$$
::::
:::::


:::::::::::::


:::::::::::::{part} c
Bestem $a$, $b$ og $c$ slik at likningen er en identitet.

$$
a \cos (cx) + b \sin (cx) = 4 \cos\left(\dfrac{\pi}{2}x - \dfrac{\pi}{3}\right)
$$


:::::{answer}

$$
a = 2 \and b = 2 \sqrt{3} \and c = \dfrac{\pi}{2}
$$

::::{solution}
Vi har at 

$$
a = A \cos \varphi \and b = A \sin \varphi
$$

der $A = 4$ og $\varphi = \dfrac{\pi}{3}$. Dermed får vi at 

$$
a = 4 \cdot \cos \left(\dfrac{\pi}{3}\right) = 4 \cdot \dfrac{1}{2} = 2
$$

og 

$$
b = 4 \cdot \sin \left(\dfrac{\pi}{3}\right) = 4 \cdot \dfrac{\sqrt{3}}{2} = 2 \sqrt{3}
$$

Videre må $c$ representere vinkelfrekvens her slik at $c = \dfrac{\pi}{2}$. Dermed er likningen en identitet hvis 

$$
a = 2 \and b = 2 \sqrt{3} \and c = \dfrac{\pi}{2}
$$

::::
:::::

:::::::::::::


:::::::::::::{part} d
Bestem $A$, $\omega$ og $b$ slik at likningen er en identitet.

$$
A \cos \left(\omega x + \dfrac{\pi}{3}\right) = 3 \cos(2x) + b \sin(2x)
$$



:::::{answer}
$$
A = 6 \and b = -3\sqrt{3} \and \omega = 2
$$

::::{solution}
Vi har at $\omega = 2$ siden vinkelfrekvensen til uttrykkene på høyre side er dette. 

Vi har at

$$
a = 3 = A \cos \varphi \and b = A \sin \varphi
$$

der vi kan lese av at 

$$
\varphi = -\dfrac{\pi}{3} \limplies \cos \varphi = \dfrac{1}{2}
$$

som gir at 

$$
3 = A \cdot \dfrac{1}{2} \limplies A = 6
$$

Til slutt finner vi verdien til $b$: 

$$
b = A \sin \varphi = 6 \cdot \sin \left(-\dfrac{\pi}{3}\right) = 6 \cdot \left(-\dfrac{\sqrt{3}}{2}\right) = -3\sqrt{3}
$$

Altså er likningen en identitet hvis 

$$
A = 6 \and b = -3\sqrt{3} \and \omega = 2
$$

::::
:::::


:::::::::::::


:::::::::::::::


---



:::::::::::::::{exercise} Oppgave 7
Funksjonen $f$ er gitt ved

$$
f(x) = \sqrt{3} \cos \left(\dfrac{x}{6}\right) + 3 \sin \left(\dfrac{x}{6}\right) \qder D_f = [-10\pi, 10\pi \rangle
$$


:::::::::::::{part} a
Bestem $A$, $\omega$ og $\varphi$ slik at likningen nedenfor er en identitet:

$$
\sqrt{3} \cos \left(\dfrac{x}{6}\right) + 3 \sin \left(\dfrac{x}{6}\right) = A \cos (\omega x - \varphi)
$$


:::::{answer}
$$
A = 2 \sqrt{3} \and \omega = \dfrac{1}{6} \and \varphi = \dfrac{\pi}{3}
$$




::::{solution}
Vi har at 

$$
A = \sqrt{a^2 + b^2} \and a = \sqrt{3} \and b = 3
$$

som gir at 


$$
A = \sqrt{\sqrt{3}^2 + 3^2} = \sqrt{12} = 2 \sqrt{3}
$$

Vi har at

$$
a = A\cos \varphi \and b = A \sin \varphi
$$

som gir 

$$
\sqrt{3} = 2 \sqrt{3} \cos \varphi \and 3 = 2 \sqrt{3} \sin \varphi
$$

$$
\cos \varphi = \dfrac{1}{2} \and \sin \varphi = \dfrac{\sqrt{3}}{2}
$$

som betyr at $\varphi$ ligger i 1. kvadrant. Med verdiene til cosinus og sinus vil derfor 

$$
\varphi = \dfrac{\pi}{3}
$$

Vinkelfrekvensen er $\omega = \dfrac{1}{6}$ siden vinkelfrekvensen til uttrykkene på venstre side må være lik som uttrykket på høyre side. Ergo er likningen en identitet hvis 

$$
A = 2 \sqrt{3} \and \omega = \dfrac{1}{6} \and \varphi = \dfrac{\pi}{3}
$$

::::

:::::


:::::::::::::



:::::::::::::{part} b
Bestem nullpunktene til $f$.


:::::{answer}

$$
x \in \{-7\pi, -\pi, 5\pi\}
$$

::::{solution}
Vi løser likningen $f(x) = 0$:

$$
f(x) = 0
$$

$$
2\sqrt{3} \cos\left(\dfrac{x}{6} - \dfrac{\pi}{3}\right) = 0
$$

som betyr at 

$$
\cos\left(\dfrac{x}{6} - \dfrac{\pi}{3}\right) = 0
$$

Vi setter $u = \dfrac{x}{6} - \dfrac{\pi}{3}$, som gir at

$$
\cos u = 0 \liff u = \dfrac{\pi}{2} + k\pi \qfor k \in \mathbb{Z}
$$

Så setter vi tilbake $u = \dfrac{x}{6} - \dfrac{\pi}{3}$, som gir

$$
\dfrac{x}{6} - \dfrac{\pi}{3} = \dfrac{\pi}{2} + k\pi \qfor k \in \mathbb{Z}
$$

$$
x - 2\pi = 3\pi + 6\pi k
$$

$$
x = 5\pi + 6\pi k \qfor k \in \mathbb{Z}
$$


Nullpunktene i definisjonsmengden $D_f$ er da 

$$
x \in \{-7\pi, -\pi, 5\pi\}
$$



::::
:::::

:::::::::::::



:::::::::::::{part} c
Bestem koordinatene til toppunktene og bunnpunktene til $f$.

:::::{answer}


* Toppunkter: $\{(-10\pi, 2\sqrt{3}), (2\pi, 2\sqrt{3})\}$
* Bunnpunkter: $\{(-4\pi, -2\sqrt{3}), (8\pi, -2\sqrt{3})\}$


::::{solution}
Toppunktene til $f$ finner vi ved å kreve at $\cos u = 1$ der $u = \dfrac{x}{6} - \dfrac{\pi}{3}$. Da har vi at 

$$
\cos u = 1 \liff u = 2\pi k
$$

Vi setter tilbake $u = \dfrac{x}{6} - \dfrac{\pi}{3}$, som gir

$$
\dfrac{x}{6} - \dfrac{\pi}{3} = 2\pi k 
$$

$$
x - 2\pi = 12\pi k
$$

$$
x = 2\pi + 12\pi k
$$

Toppunktene i definsjonsmengden $D_f = [-10\pi, 10\pi\rangle$ vil da ha $x$-koordinatene 


$$
x \in \{-10\pi, 2\pi\}
$$

Maksimalverdien til funksjonen er $y_\mathrm{topp} = 2\sqrt{3}$.

Bunnpunktene ligger en halv periode fra toppunktene. Ett slikt punkt vil derfor ha $x$-koordinaten

$$
x = 2\pi + 6\pi = 8\pi
$$

De andre bunnpunktene finner vi ved å legge til hele perioder på $12\pi$ som betyr at $x$-koordinatene til bunnpunktene i definisjonsmengden $D_f$ er 

$$
x \in \{-4\pi, 8\pi\}
$$

Minimalverdien til $f$ er $y_\mathrm{bunn} = -2\sqrt{3}$.

Dermed er 

* Toppunkter: $\{(-10\pi, 2\sqrt{3}), (2\pi, 2\sqrt{3})\}$
* Bunnpunkter: $\{(-4\pi, -2\sqrt{3}), (8\pi, -2\sqrt{3})\}$
::::
:::::

:::::::::::::



:::::::::::::{part} d
Løs likningen

$$
f(x) = 3
$$



:::::{answer}
$$
x \in \{-9\pi, \pi, 3\pi\}
$$

::::{solution}
Vi har at 

$$
f(x) = 2\sqrt{3} \cos \left(\dfrac{x}{6} - \dfrac{\pi}{3}\right)
$$

Vi setter $f(x) = 3$ som gir 

$$
2\sqrt{3} \cos \left(\dfrac{x}{6} - \dfrac{\pi}{3}\right) = 3
$$

$$
\cos \left(\dfrac{x}{6} - \dfrac{\pi}{3}\right) = \dfrac{\sqrt{3}}{2}
$$

Vi lar $u = \dfrac{x}{6} - \dfrac{\pi}{3}$. Da har vi

$$
\cos u = \dfrac{\sqrt{3}}{2}
$$

som har de generelle løsningene 

$$
u = \pm \dfrac{\pi}{6} + 2\pi k
$$

så setter vi tilbake $u = \dfrac{x}{6} - \dfrac{\pi}{3}$ som gir

$$
\dfrac{x}{6} - \dfrac{\pi}{3} = \pm \dfrac{\pi}{6} + 2\pi k
$$

$$
x - 2\pi = \pm \pi + 12\pi k
$$

som gir 

$$
x = 2\pi \pm \pi + 12\pi k
$$

som kan skrives om til to likninger 

$$
x = \pi + 12\pi k \or x = 3\pi + 12\pi k
$$

Løsningene som ligger i definisjonsmengden $D_f = [-10\pi, 10\pi\rangle$ finner vi ved å sette inn ulike heltall $k$ i de generelle løsningene. Da får vi til slutt 

$$
x \in \{-9\pi, \pi, 3\pi\}
$$

::::
:::::


:::::::::::::


:::::::::::::::




:::::::::::::::{exercise} Oppgave 8


:::::::::::::{part} a
:::{plot}
width: 100%
align: right
let: A = 6
let: omega = pi/3
let: phi = 2 * pi / 3
let: d = 2
function: A * cos(omega * x - phi) + d, f, (0, 7)
ticks: off
xmin: -1
xmax: 7
point: (2, 8)
text: 2, 8, "$(2, 8)$", top-center
point: (5, -4)
text: 5, -4, "$(5, -4)$", bottom-center
fontsize: 26
ymax: 9
:::


Om en trigonometrisk funksjon $f$ får du vite følgende:

* Definisjonsmengden er $D_f = [0, 7]$
* Grafen til $f$ har ett toppunkt i $(2, 8)$.
* Grafen til $f$ har ett bunnpunkt i $(5, -4)$.

Bestem et mulig uttrykk for $f(x)$.


:::::{answer}
$$
f(x) = 6 \cos \left(\dfrac{\pi}{3}x - \dfrac{2\pi}{3}\right) + 2
$$


::::{solution}
Grafen har et toppunkt i $(2, 8)$ og et bunnpunkt i $(5, -4)$. Avstanden (langs $x$-aksen) mellom et toppunkt og et bunnpunkt vil være en halv periode som betyr at 

$$
\dfrac{T}{2} = 5 - 2 = 3 \limplies T = 6
$$

Dermed er 

$$
\omega = \dfrac{2\pi}{6} = \dfrac{\pi}{3}
$$

Fra ekstremalpunktene får vi at $y_\mathrm{topp} = 8$ og $y_\mathrm{bunn} = -4$ som gir at amplituden er 

$$
A = \dfrac{y_\mathrm{topp} - y_\mathrm{bunn}}{2} = \dfrac{8 - (-4)}{2} = 6
$$

og likevektslinje 

$$
d = \dfrac{y_\mathrm{topp} + y_\mathrm{bunn}}{2} = \dfrac{8 - 4}{2} = 2
$$

Vi kan bruke en generell cosinusfunksjon siden vi kjenner til det første toppunktet til høyre for $y$-aksen. Faseforskyvningen blir da 

$$
\dfrac{\varphi}{\omega} = 2 \limplies \varphi = 2\omega = \dfrac{2\pi}{3}
$$

Dermed er et mulig uttrykk for $f(x)$ gitt ved 

$$
f(x) = 6 \cos \left(\dfrac{\pi}{3}x - \dfrac{2\pi}{3}\right) + 2
$$

::::


:::::


:::::::::::::



:::::::::::::{part} b
:::{plot}
width: 100%
align: right
let: A = 3
let: omega = pi/4
let: phi = 5 * pi / 4
let: d = 1
function: A * cos(omega * x - phi) + d, g, (0, 10)
ticks: off
xmin: -1
xmax: 11
fontsize: 26
ymax: 6
ymin: -4
point: (3, d)
text: 3, d, "$(3, 1)$", top-left
point: (5, 4)
text: 5, 4, "$(5, 4)$", top-center
hline: 1, dashed, gray
:::


Om en trigonometrisk funksjon $g$ får du vite at 
* Definsjonsmengden er $D_g = [0, 10]$
* Grafen til $g$ skjærer likevektslinja si i $(3, 1)$
* Grafen har ett toppunkt i $(5, 4)$

Bestem et mulig uttrykk for $g(x)$.


:::::{answer}
$$
g(x) = 3 \sin\left(\dfrac{\pi}{4}x - \dfrac{3\pi}{4}\right) + 1
$$

eller

$$
g(x) = 3 \cos \left(\dfrac{\pi}{4}x - \dfrac{5\pi}{4}\right) + 1
$$


::::{solution}
Siden grafen skjærer likevektslinja i $(3, 1)$ på vei opp, og deretter har et toppunkt i $(5, 4)$ kan vi finne perioden ved å erkjenne at avstanden mellom de to punktene langs $x$-aksen må være en kvart periode, altså at 

$$
\dfrac{T}{4} = 5 - 3 = 2 \limplies T = 8
$$

Dermed er vinkelfrekvensen

$$
\omega = \dfrac{2\pi}{T} = \dfrac{2\pi}{8} = \dfrac{\pi}{4}
$$

Likevektslinja er gitt fra punktet $(3, 1)$ som $d = 1$. Amplituden vil være avstanden fra likevektslinja til toppunktet som er 

$$
A = 4 - 1 = 3
$$

Vi kan her velge fritt mellom sinus eller cosinus. Vi velger sinus her som gir at faseforskyvningen er avstanden fra $y$-aksen til første gang grafen skjærer likevektslinja si på vei opp. Denne avstanden er $3$ som betyr at 

$$
\dfrac{\varphi}{\omega} = 3 \limplies \varphi = 3\omega = \dfrac{3\pi}{4}
$$

Altså er et mulig uttrykk gitt ved 

$$
g(x) = 3 \sin\left(\dfrac{\pi}{4}x - \dfrac{3\pi}{4}\right) + 1
$$

Hvis vi i stedet valgte oss en cosinusfunksjon, så vil faseforskyvningen være lik avstanden fra $y$-aksen til første toppunkt som er lik $5$. Dermed ville vi i stedet fått 

$$
\dfrac{\varphi}{\omega} = 5 \limplies \varphi = 5\omega = \dfrac{5\pi}{4}
$$

og da ville uttrykket i stedet blitt 

$$
g(x) = 3 \cos\left(\dfrac{\pi}{4}x - \dfrac{5\pi}{4}\right) + 1
$$

::::


:::::
:::::::::::::


:::::::::::::{part} c
:::{plot}
width: 100%
align: right
let: A = 6
let: omega = pi/6
let: phi = pi / 3
let: d = -2
function: A * cos(omega * x - phi) + d, h, (0, 12)
ticks: off
xmin: -1
xmax: 13
fontsize: 26
ymax: 6
ymin: -10
point: (5, -2)
text: 5, -2, "$(5, -2)$", top-right
point: (8, -8)
text: 8, -8, "$(8, -8)$", bottom-center
hline: -2, dashed, gray
:::


Om en trigonometrisk funksjon $h$ får du vite:

* Definisjonsmengden er $D_h = [0, 12]$
* Grafen skjærer likevektslinja i $(5, -2)$
* Grafen har ett bunnpunkt i $(8, -8)$

Bestem et mulig uttrykk for $h(x)$.


:::::{answer}
$$
h(x) = 6 \cos\left(\dfrac{\pi}{6}x - \dfrac{\pi}{3}\right) - 2
$$

eller

$$
h(x) = 6\sin\left(\dfrac{\pi}{6}x - \dfrac{11\pi}{6}\right) - 2
$$


::::{solution}
Fra skjæringen med likevektslinja til bunnpunktet er det en kvart periode, som betyr at 

$$
\dfrac{T}{4} = 8 - 5 = 3 \limplies T = 12
$$

som gir at vinkelfrekvensen er 

$$
\omega = \dfrac{2\pi}{T} = \dfrac{2\pi}{12} = \dfrac{\pi}{6}
$$

Likevektslinja er $d = -2$ siden grafen skjærer likevektslinja i $(5, -2)$. Avstanden fra likevektslinja til bunnpunktet vil være lik amplituden som gir 

$$
A = \abs{-8 - (-2)} = \abs{-8 + 2} = \abs{-6} = 6
$$

Vi kan finne $x$-koordinaten til toppunktet til grafen ved å gå en halv periode fra bunnpunktet som gir 

$$
x_\mathrm{topp} = 8 - \dfrac{T}{2} = 8 - 6 = 2
$$

Ved å bruke en cosinusfunksjon får vi da at faseforskyvningen er 

$$
\dfrac{\varphi}{\omega} = 2 \limplies \varphi = 2\omega = \dfrac{\pi}{3}
$$

Dermed er et mulig funksjonsuttrykk gitt ved 

$$
h(x) = 6 \cos\left(\dfrac{\pi}{6}x - \dfrac{\pi}{3}\right) - 2
$$

Hvis vi heller vil bruke en sinusfunksjon, så er det også mulig med opplysningene. Vi kan da bruke at $x$-koordinaten til første skjæring mellom grafen og likevektslinja på vei opp vil ligge en halv periode fra skjæringspunktet med likevektslinja når grafen er på vei, som blir:

$$
x_\mathrm{skjæring} = 5 + \dfrac{T}{2} = 5 + 6 = 11
$$

Faseforskyvningen til sinusfunksjonen er da

$$
\dfrac{\varphi}{\omega} = 11 \limplies \varphi = 11\omega = \dfrac{11\pi}{6}
$$

Dermed er et annet mulig funksjonsuttrykk gitt ved 

$$
h(x) = 6\sin\left(\dfrac{\pi}{6}x - \dfrac{11\pi}{6}\right) - 2
$$




::::
:::::


:::::::::::::

:::::::::::::::



---



:::::::::::::::{exercise} Oppgave 9
En likning er gitt ved 

$$
-4\cos\left(\dfrac{\pi}{12}x\right) + 4\sqrt{3}\sin\left(\dfrac{\pi}{12}x\right) = A \cos(\omega x - \varphi)
$$

:::::::::::::{part} a
Bestem $A$, $\omega$ og $\varphi$ slik at likningen er en identitet.



:::::{answer}

$$
A = 8 \and \omega = \dfrac{\pi}{12} \and \varphi = \dfrac{2\pi}{3}
$$

::::{solution}
Vi har at 

$$
a = -4 \and b = 4\sqrt{3}
$$

som gir at amplituden er 

$$
A = \sqrt{a^2 + b^2} = \sqrt{(-4)^2 + (4\sqrt{3})^2} = \sqrt{16 + 48} = \sqrt{64} = 8
$$

Vinkelfrekvensen er som vanlig lik på hver side, så $\omega = \dfrac{\pi}{12}$.


Til slutt finner vi fasevinkelen $\varphi$ ved å bruke at 

$$
a = A \cos \varphi \and b = A \sin \varphi
$$

$$
-4 = 8 \cos \varphi \and 4\sqrt{3} = 8 \sin \varphi
$$

$$
\cos \varphi = -\dfrac{1}{2} \and \sin \varphi = \dfrac{\sqrt{3}}{2}
$$

Dermed vil $\varphi$ ligge i 2. kvadrant og være gitt ved 

$$
\varphi = \dfrac{2\pi}{3}
$$

Dermed er likningen en identitet dersom

$$
A = 8 \and \omega = \dfrac{\pi}{12} \and \varphi = \dfrac{2\pi}{3}
$$

::::
:::::


:::::::::::::


Funksjonen $f$ er gitt ved 

$$
f(x) = -4\cos\left(\dfrac{\pi}{12}x\right) + 4\sqrt{3}\sin\left(\dfrac{\pi}{12}x\right) \qder D_f = [-24, 24]
$$


:::::::::::::{part} b
Bestem nullpunktene til $f$.


:::::{answer}
$$
x \in \{-22, -10, 2, 14\}
$$

::::{solution}
Fra identiteten i oppgave **a)**, så vil $f(x)$ også være gitt ved 

$$
f(x) = 8 \cos\left(\dfrac{\pi}{12}x - \dfrac{2\pi}{3}\right)
$$

Nullpunktene finner vi ved å løse $f(x) = 0$. Vi gjør et variabelskifte $u = \dfrac{\pi}{12}x - \dfrac{2\pi}{3}$ som da gir oss likningen

$$
\cos u = 0 \limplies u = \dfrac{\pi}{2} + \pi k
$$

Så setter vi tilbake $u$ og løser for $x$:

$$
\dfrac{\pi}{12}x - \dfrac{2\pi}{3} = \dfrac{\pi}{2} + \pi k
$$

$$
\pi x - 8\pi = 6\pi + 12\pi k
$$

$$
\pi x = 14\pi + 12\pi k
$$

$$
x = 14 + 12k
$$

Deretter er det å finne alle løsningene $x \in D_f$. Da får vi 

$$
x \in \{-22, -10, 2, 14\}
$$
::::
:::::

:::::::::::::



:::::::::::::{part} c
Bestem koordinatene til grafens topp- og bunnpunkter.



:::::{answer}

* Toppunkter: $(-16, 8)$ og $(8, 8)$
* Bunnpunkter: $(-4, -8)$ og $(20, -8)$



::::{solution}
$x$-koordinaten til det første toppunktet til høyre for $y$-aksen er gitt ved faseforskyvningen:

$$
x_\mathrm{topp} = \dfrac{\varphi}{\omega} = \dfrac{2\pi/3}{\pi/12} = \dfrac{2\pi}{3} \cdot \dfrac{12}{\pi} = 8
$$

Resten av toppunktene finner vi ved å legge til eller trekke fra en periode. Siden $\omega = \dfrac{\pi}{12}$, så vil perioden være 

$$
\omega = \dfrac{2\pi}{T} \limplies T = \dfrac{2\pi}{\omega} = \dfrac{2\pi}{\pi/12} = 24
$$


Dermed blir $x$-koordinatene som gir toppunkter 

$$
x_\mathrm{topp} \in \{-16, 8\}
$$

Siden amplituden er $A = 8$ og likevektslinja er $d = 0$, så blir toppunktene gitt ved 

$$
\mathrm{Toppunkter} = \{(-16, 8), (8, 8)\}
$$


Et bunnpunkt vil ligge en halv periode unna et toppunkt. $x$-koordinaten til ett slikt punkt er derfor 

$$
x_\mathrm{bunn} = 8 + \dfrac{T}{2} = 8 + 12 = 20
$$

Alle andre bunnpunkter ligger en full periode $T = 24$ unna som betyr at $x$-koordinatene som gir bunnpunkter i $D_f$ er 

$$
x_\mathrm{bunn} \in \{-4, 20\}
$$

Siden $A = 8$ og $d = 0$, vil $y_\mathrm{bunn} = -8$, så alle bunnpunktene til grafen er 

$$
\mathrm{Bunnpunkter} = \{(-4, -8), (20, -8)\}
$$

::::
:::::


:::::::::::::




:::::::::::::::


---



:::::::::::::::{exercise} Oppgave 10

Funksjonen $f$ er gitt ved 

$$
f(x) = 3 \cos(2x) + 3\sqrt{3} \sin(2x) - 3 \qder D_f = [0, 2\pi\rangle
$$


:::::::::::::{part} a
Bestem nullpunktene til $f$.


:::::{answer}

$$
x \in \left\{0, \dfrac{\pi}{3}, \pi, \dfrac{4\pi}{3}\right\}
$$

::::{solution}
Vi skriver om funksjonsuttrykket til formen

$$
f(x) = A \cos(\omega x - \varphi) - 3
$$

Vi har at 

$$
a = 3 \and b = 3\sqrt{3} \and  A = \sqrt{a^2 + b^2}
$$

Dermed får vi at 

$$
A = \sqrt{3^2 + 3^2 \cdot 3} = \sqrt{3^2} \cdot \sqrt{1 + 3} = 3 \cdot 2 = 6
$$

Videre får vi fasevinkelen ved 

$$
a = A \cos \varphi \and b = A \sin \varphi
$$

$$
3 = 6 \cos \varphi \and 3 \sqrt{3} = 6 \sin \varphi
$$

$$
\cos \varphi = \dfrac{1}{2} \and \sin \varphi = \dfrac{\sqrt{3}}{2}
$$

Ergo er en mulighet for fasevinkelen 

$$
\varphi = \dfrac{\pi}{3}
$$

Dermed kan vi skrive om funksjonen som

$$
f(x) = 6 \cos\left(2x - \dfrac{\pi}{3}\right) - 3
$$

Så løser vi $f(x) = 0$ for å finne nullpunktene som gir 

$$
f(x) = 0
$$

$$
6 \cos\left(2x - \dfrac{\pi}{3}\right) - 3 = 0
$$

$$
\cos\left(2x - \dfrac{\pi}{3}\right) = \dfrac{1}{2}
$$

Vi setter $u = 2x - \dfrac{\pi}{3}$, som gir 

$$
\cos u = \dfrac{1}{2}
$$

Løsningen til denne likningen er 

$$
u = \dfrac{\pi}{3} + 2\pi k \or u = -\dfrac{\pi}{3} + 2\pi k
$$

Så setter vi tilbake $u = 2x - \dfrac{\pi}{3}$, som gir 

$$
2x - \dfrac{\pi}{3} = \dfrac{\pi}{3} + 2\pi k \or 2x - \dfrac{\pi}{3} = -\dfrac{\pi}{3} + 2\pi k
$$

$$
2x = \dfrac{2\pi}{3} + 2\pi k \or 2x = 0 + 2\pi k
$$

$$
x = \dfrac{\pi}{3} + \pi k \or x = \pi k
$$

Så må vi bare finne alle løsningene som ligger i definisjonsmengden $D_f = [0, 2\pi\rangle$.


Fra den første løsningen får vi at 

$$
x \in \left\{\dfrac{\pi}{3}, \dfrac{4\pi}{3}\right\}
$$

Fra den andre løsningen får vi at 

$$
x \in \left\{0, \pi\right\}
$$


Dermed er nullpunktene til $f$ gitt ved 

$$
x \in \left\{0, \dfrac{\pi}{3}, \pi, \dfrac{4\pi}{3}\right\}
$$

::::
:::::


:::::::::::::


:::::::::::::{part} b
Bestem koordinatene til grafens topp- og bunnpunkter.



:::::{answer}
* Toppunkter: $(\pi/6, 3)$ og $(7\pi/6, 3)$
* Bunnpunkter: $(2\pi/3, -9)$ og $(5\pi/3, -9)$

::::{solution}
Vi finner toppunktene ved å løse 

$$
\cos u = 1 \qder u = 2x - \dfrac{\pi}{3}
$$

som gir oss de generelle løsningene 

$$
u = 2\pi k
$$

Så setter vi tilbake $u = 2x - \dfrac{\pi}{3}$, som gir 

$$
2x - \dfrac{\pi}{3} = 2\pi k
$$

$$
2x = \dfrac{\pi}{3} + 2\pi k
$$

$$
x = \dfrac{\pi}{6} + \pi k
$$

Dermed er $x$-koordinatene til toppunktene gitt ved 

$$
x \in \left\{\dfrac{\pi}{6}, \dfrac{7\pi}{6}\right\}
$$

Vi har at $A = 6$ og $d = -3$ slik at $y_\mathrm{topp} = A + d = 6 - 3 = 3$. Dermed er toppunktene gitt ved 

$$
\mathrm{Toppunkter} = \left\{\left(\dfrac{\pi}{6}, 3\right), \left(\dfrac{7\pi}{6}, 3\right)\right\}
$$

Bunnpunktene ligger en halv periode etter toppunktene. Perioden til funksjonen er 

$$
T = \dfrac{2\pi}{\omega} = \dfrac{2\pi}{2} = \pi
$$

Dermed er $x$-koordinatene til ett bunnpunkt gitt ved 

$$
x_\mathrm{bunn} = x_\mathrm{topp} + \dfrac{T}{2} = \dfrac{\pi}{6} + \dfrac{\pi}{2} = \dfrac{2\pi}{3}
$$

Alle andre bunnpunkter får vi ved å legge til hele perioder $T = \pi$, altså 

$$
x_\mathrm{bunn} \in \left\{\dfrac{2\pi}{3}, \dfrac{5\pi}{3}\right\}
$$

Siden $A = 6$ og $d = -3$ slik at $y_\mathrm{bunn} = -A + d = -6 - 3 = -9$, er bunnpunktene gitt ved 

$$
\mathrm{Bunnpunkter} = \left\{\left(\dfrac{2\pi}{3}, -9\right), \left(\dfrac{5\pi}{3}, -9\right)\right\}
$$
::::
:::::

:::::::::::::


:::::::::::::::
