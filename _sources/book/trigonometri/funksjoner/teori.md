# Trigonometriske funksjoner


## Sinus- og cosinusfunksjonen

Sinusfunksjonen $\sin x$ og cosinusfunksjonen $\cos x$ får vi ved å la $x$ være vinkelen til ulike punkter på enhetssirkelen. Hvis vi tegner punktene $(x, \cos x)$ og $(x, \sin x)$ i et koordinatsystem, får vi grafene til sinusfunksjonen og cosinusfunksjonen. Se den interaktive figuren nedenfor:

::::{multi-interactive-graph}
---
rows: 1
cols: 2
interactive-var: x, 0, 4*pi, 128
interactive-var-start: pi/4
---

:::{interactive-graph} 
circle: (0, 0), 1, dashed, gray
point: (cos(x), sin(x))
line-segment: (0, 0), (cos(x), sin(x)), solid, black
angle-arc: (0, 0), 0.2, 0, x * 180 / pi, purple, arrow
curve: cos(t), sin(t), (0, x), solid, black
hline: sin(x), 0, cos(x), dashed, red
vline: cos(x), 0, sin(x), dashed, blue
axis: equal
grid: off
ticks: off
xlabel: $\cos x$
ylabel: $\sin x$
fontsize: 32
:::

:::{interactive-graph} 
curve: t, cos(t), (0, x), solid, blue
curve: t, sin(t), (0, x), solid, red
xmin: 0
xmax: 16
ymin: -1.5
ymax: 1.5
xtick-format: pi
xmin: 0
xmax: 4*pi
xstep: pi/2
nocache:
fontsize: 32 
:::
::::



:::::::::::::::{summary} Sinusfunksjonen $\sin x$ og cosinusfunksjonen $\cos x$
::::{multi-plot2}
---
rows: 1
cols: 2
---
:::{plot}
width: 100%
function: cos(x), (-2*pi, 2*pi)
xtick-format: pi
xmin: -2*pi
xmax: 2*pi
xstep: pi/2
ymax: 1.2
ymin: -1.2
fontsize: 26
text: pi, 1, "$y = \cos x$", center-center, bbox
:::


:::{plot}
width: 100%
function: sin(x), (-2*pi, 2*pi), red 
xtick-format: pi
xmin: -2*pi
xmax: 2*pi
xstep: pi/2
ymax: 1.2
ymin: -1.2
fontsize: 26
text: 3*pi/2, 1, "$y = \sin x$", center-center, bbox
:::
::::

:::{table}
labels: Egenskap, $y = \cos x$, $y = \sin x$
Nullpunkter, $x = \dfrac{\pi}{2} + k\pi$, $x = k\pi$ 
Ekstremalpunkter, $x = k\pi$, $x = \dfrac{\pi}{2} + k\pi$
Periode, $2\pi$, $2\pi$
:::

:::::::::::::::






## Tangensfunksjonen



:::::::::::::::{summary} Tangensfunksjonen
:::{plot}
width: 350px
align: right
function: tan(x), (-2*pi, 2*pi)
repeat: n=-2..2; vline: n*pi + pi/2, dashed, red
xtick-format: pi
xmin: -2*pi
xmax: 2*pi
xstep: pi/2
fontsize: 26
:::



Tangensfunksjonen 

$$
f(x) = \tan x
$$

har følgende egenskaper:
* Periode på $\pi$.
* Vertikale asymptoter i $x = \dfrac{\pi}{2} + \pi \cdot k$, der $k \in \mathbb{Z}$.
* Nullpunkter i $x = \pi \cdot k$, der $k \in \mathbb{Z}$.
:::::::::::::::



## Generelle cosinusfunksjoner

Vi kan beskrive mer generelle trigonometriske funksjoner ved å bruke generelle cosinusfunksjoner.


:::::::::::::::{summary} Cosinusfunksjoner
:::{plot}
nocache:
ticks: off
fontsize: 24
width: 380px
align: right
let: A = 2
let: d = 3
let: T = 3
let: omega = 2 * pi / T
let: phi = -2.5*pi / 3
function: A * cos(omega * x + phi) + d
ymin: 0
xmin: 0
hline: d, dashed, red
text: 0, d, $d$, center-left
vline: (- phi + 2*pi) / omega, d, d + A, dashed, red
text: (-phi + 2*pi) / omega, 0.5 * (d + d + A), $A$, center-left
bar: ((-phi) / omega, d + A + 0.2), T, h
text: (-phi) / omega + 0.5 * T, d + A + 0.4, $T$, top-center
bar: (0, d + A + 0.3), -phi/omega, h
text: -phi/omega * 0.5, d + A + 0.5, $\displaystyle \frac{\varphi}{\omega}$, top-center
hline: d - A, 0, (pi - phi) / omega, dashed, gray
text: 0, d - A, "$y_\mathrm{bunn}$", center-left
hline: d + A, 0, (- phi) / omega, dashed, gray
text: 0, d + A, "$y_\mathrm{topp}$", center-left
::: 

En trigonometrisk funksjon $f$ kan skrives på formen

$$
f(x) = A \cos (\omega x - \varphi) + d
$$



:::{clear}
:::


:::{table}
labels: Parameter, Beskrivelse, Formel, Antakelse
Amplitude $A$, Avstanden fra likevektslinja til et toppunkt eller bunnpunkt, $$A = \dfrac{y_\mathrm{topp} - y_\mathrm{bunn}}{2}$$, $A > 0$
Likevektslinje $d$, Verdien av $y$-koordinaten til likevektslinja, $$d = \dfrac{y_\mathrm{topp} + y_\mathrm{bunn}}{2}$$, –
Periode $T$, Avstanden mellom to påfølgende toppunkter eller bunnpunkter, $$T = \dfrac{2\pi}{\omega}$$, $T > 0$
Vinkelfrekvens $\omega$, Også kalt vinkelfart., $$\omega = \dfrac{2\pi}{T}$$, $\omega > 0$
Fasevinkel $\varphi$, Gir en horisontal **faseforskyvning** lik $\dfrac{\varphi}{\omega}$ i forhold til grafen til  $y = A\cos(\omega x) + d$., –, –
:::


> Merk at så lenge $\varphi \in [0, 2\pi \rangle$, så vil $\varphi / \omega$ angi $x$-koordinaten til det første toppunktet på grafen når $x \geq 0$. Men vi står fritt til å velge $\varphi$ utenfor dette intervallet også siden $\varphi + 2\pi k$ gir oss akkurat det samme punktet på enhetssirkelen. 


:::::::::::::::


---




:::::::::::::::{explore} Utforsk 1
Nedenfor vises grafen til $y = \cos x$ som en grå stiplet linje. I hvert interaktive vindu kan du se hva som skjer når du justerer på parameterne $A$, $\omega$, $\varphi$ og $d$ i den generelle cosinusfunksjonen og sammenligne med grafen til $y = \cos x$.

::::{multi-plot2}
---
rows: 2
cols: 2
---
:::{interactive-graph} 
width: 100%
interactive-var: A, 1, 4, 4
interactive-var-start: 1
function: A*cos(x), $y = A\cdot \cos(x)$
curve: t, cos(t), (-6, 6), dashed, gray
ymin: -4
ymax: 4
:::

:::{interactive-graph} 
width: 100%
interactive-var: omega, 1, 5, 5
interactive-var-start: 1
function: cos(omega*x), $y = \cos(omega \cdot x)$
curve: t, cos(t), (-6, 6), dashed, gray
ymin: -4
ymax: 4
:::

:::{interactive-graph} 
width: 100%
interactive-var: varphi, -2*pi, 2*pi, 11
interactive-var-start: 0
function: cos(x - varphi), $y = \cos(x - varphi)$
curve: t, cos(t), (-6, 6), dashed, gray
ymin: -4
ymax: 4
:::

:::{interactive-graph} 
width: 100%
interactive-var: d, -5, 5, 11
interactive-var-start: 0
function: cos(x) + d, $y = \cos(x) + d$
curve: t, cos(t), (-6, 6), dashed, gray
hline: d, dashed, red
ymin: -4
ymax: 4
:::
::::
:::::::::::::::






---

Vi tar et eksempel:


:::::::::::::::{example} Eksempel 1
:::{plot}
nocache:
fontsize: 24
width: 380px
align: right
let: A = 3
let: d = -1
let: T = pi
let: omega = 2 * pi / T
let: x0 = pi/2
let: phi = -omega * x0
function: A * cos(omega * x - phi) + d
ymin: -5
ymax: 3
xtick-format: pi
xmin: 0
xmax: 4*pi
xstep: pi/2
::: 

Grafen til en trigonometrisk funksjon $f$ er vist til høyre.

Bestem et funksjonsuttrykk på formen

$$
f(x) = A\cos(\omega x - \varphi) + d
$$


::::{solution}
---
open:
---
Vi går ut ifra uttrykket på formen

$$
f(x) = A \cos \left(\omega x - \varphi\right) + d
$$

Vi kan lese av fra grafen at 

$$
y_\mathrm{topp} = 2 \and y_\mathrm{bunn} = -4
$$

Dermed blir amplituden

$$
A = \dfrac{y_\mathrm{topp} - y_\mathrm{bunn}}{2} = \dfrac{2 - (-4)}{2} = 3
$$

Likevektslinja blir

$$
d = \dfrac{y_\mathrm{topp} + y_\mathrm{bunn}}{2} = \dfrac{2 + (-4)}{2} = -1
$$

Perioden er lik avstanden mellom to toppunkter på grafen som blir:

$$
T = \dfrac{3\pi}{2} - \dfrac{\pi}{2} = \pi
$$

Vinkelfrekvensen er derfor

$$
\omega = \dfrac{2\pi}{T} = \dfrac{2\pi}{\pi} = 2
$$

Dermed er grafen på formen:

$$
f(x) = 3 \cos \left(2x - \varphi\right) - 1
$$

Nå bruker vi at $\varphi/\omega$ gir oss $x$-koordinaten til det første toppunktet når $x \geq 0$:

$$
\dfrac{\varphi}{\omega} = \dfrac{\pi}{2} \liff \dfrac{\varphi}{2} = \dfrac{\pi}{2} \liff \varphi = \pi
$$

Altså er 

$$
f(x) = 3 \cos \left(2x - \pi\right) - 1
$$


::::

:::::::::::::::


---



:::::::::::::::{exercise} Underveisoppgave 1
:::{plot}
width: 380px
align: right
let: A = 4
let: d = -2
let: T = 2
let: omega = 2 * pi / T
let: x0 = -1
let: phi = -omega * x0
function: A * cos(omega * x - phi) + d
ymin: -7
ymax: 4
xmin: -4
xmax: 4
:::

Grafen til en trigonometrisk funksjon $f$ er vist til høyre.

Finn et funksjonsuttrykk på formen

$$
f(x) = A \cos (\omega x - \varphi) + d
$$


:::::{answer}
$$
f(x) = 4 \cos (\pi x - \pi) - 2
$$

::::{solution}
Vi ser at $y_\mathrm{maks} = 2$ og $y_\mathrm{min} = -6$. Amplituden er 

$$
A = \dfrac{y_\mathrm{maks} - y_\mathrm{min}}{2} = \dfrac{2 - (-6)}{2} = 4
$$

Likevektslinja er gitt ved

$$
d = \dfrac{y_\mathrm{maks} + y_\mathrm{min}}{2} = \dfrac{2 + (-6)}{2} = -2
$$

Perioden kan vi lese av ved å se på den horisontale avstanden mellom to toppunkter. Det ser vi er $T = 2$. Dermed blir vinkelfrekvensen

$$
\omega = \dfrac{2\pi}{T} = \dfrac{2\pi}{2} = \pi
$$

Vi finner det første toppunktet på grafen når $x \geq 0$ som er i $x = 1$. Da får vi at 

$$
\dfrac{\varphi}{\omega} = 1 \liff \dfrac{\varphi}{\pi} = 1 \liff \varphi = \pi
$$

Altså er 

$$
f(x) = 4 \cos (\pi x - \pi) - 2
$$


::::
:::::



:::::::::::::::





## Generelle sinusfunksjoner

Siden $\cos u = \sin \left(u + \dfrac{\pi}{2}\right)$, kan vi også beskrive trigonometriske funksjoner ved å bruke generelle sinusfunksjoner.


:::::::::::::::{summary} Sinusfunksjoner

:::{plot}
nocache:
ticks: off
fontsize: 24
width: 380px
align: right
let: A = 2
let: d = 3
let: T = 3
let: omega = 2 * pi / T
let: phi = -2.5*pi / 3
function: A * sin(omega * x + phi) + d
ymin: 0
xmin: 0
hline: d, dashed, red
text: 0, d, $d$, center-left
vline: (pi/2 - phi + 2*pi) / omega, d, d + A, dashed, red
text: (pi/2 - phi + 2*pi) / omega, 0.5 * (d + d + A), $A$, center-left
bar: ((pi/2 - phi) / omega, d + A + 0.2), T, h
text: (pi/2 - phi) / omega + 0.5 * T, d + A + 0.4, $T$, top-center
bar: (0, d + 0.3), -phi/omega, h
text: -phi/omega * 0.5, d + 0.5, $\displaystyle \frac{\varphi}{\omega}$, top-center
hline: d - A, 0, (-pi/2 - phi) / omega, dashed, gray
text: 0, d - A, "$y_\mathrm{bunn}$", center-left
hline: d + A, 0, (pi/2 - phi) / omega, dashed, gray
text: 0, d + A, "$y_\mathrm{topp}$", center-left
::: 



En trigonometrisk funksjon $f$ kan skrives på formen

$$
f(x) = A \sin (\omega x - \varphi) + d
$$



:::::::::::::::


---


:::::::::::::::{example} Eksempel 2

:::{plot}
nocache:
fontsize: 24
width: 380px
align: right
let: A = 2
let: d = 3
let: T = 2
let: omega = 2 * pi / T
let: x0 = 1
let: phi = -omega * x0
function: A * sin(omega * x + phi) + d
ymin: -1
xmin: -4
xmax: 4
::: 


Til høyre vises grafen til en trigonometrisk funksjon $f$.

Bestem et funksjonsuttrykk på formen

$$
f(x) = A \sin (\omega x - \varphi) + d
$$


::::{solution}
---
open:
---
Fra grafen kan vi lese av at 

$$
y_\mathrm{topp} = 5 \and y_\mathrm{bunn} = 1
$$


Derfor er amplituden gitt ved 

$$
A = \dfrac{y_\mathrm{topp} - y_\mathrm{bunn}}{2} = \dfrac{5 - 1}{2} = 2
$$

og likevektslinja er gitt ved

$$
d = \dfrac{y_\mathrm{topp} + y_\mathrm{bunn}}{2} = \dfrac{5 + 1}{2} = 3
$$

Vi klarer ikke lese av perioden ved å bruke toppunktene eller bunnpunktene, men vi kan lese av perioden ved å se på hvor grafen krysser likevektslinja på vei opp. Dette skjer i både $x = 1$ og $x = 3$ som betyr at perioden er $T = 2$. Dermed blir vinkelfrekvensen

$$
\omega = \dfrac{2\pi}{T} = \dfrac{2\pi}{2} = \pi
$$

For å bestemme fasevinkelen kan vi bruke at $\dfrac{\varphi}{\omega}$ angir $x$-koordinaten der grafen skjærer likevektslinja (på vei opp!). Vi ser at dette skjer i $x = 1$, som betyr at

$$
\dfrac{\varphi}{\omega} = 1 \liff \dfrac{\varphi}{\pi} = 1 \liff \varphi = \pi
$$

Altså er 

$$
f(x) = 2 \sin (\pi x - \pi) + 3
$$


::::


:::::::::::::::


---



:::::::::::::::{exercise} Underveisoppgave 2
:::{plot}
nocache:
fontsize: 24
width: 380px
align: right
let: A = 3
let: d = -1
let: T = 2*pi
let: omega = 2 * pi / T
let: x0 = -pi/2
let: phi = -omega * x0
function: A * sin(omega * x + phi) + d
ymin: -5
ymax: 3
xtick-format: pi
xmin: 0
xmax: 4*pi
xstep: pi/2
::: 

Grafen til en trigonometrisk funksjon $f$ er vist til høyre.

Finn et mulig funksjonsuttrykk på formen

$$
f(x) = A \sin (\omega x - \varphi) + d
$$


:::::{answer}
$$
f(x) = 3 \sin \left(x + \frac{\pi}{2}\right) - 1
$$

::::{solution}
Fra grafen kan vi lese av at $y_\mathrm{topp} = 2$ og $y_\mathrm{bunn} = -4$. Dermed er amplituden

$$
A = \dfrac{y_\mathrm{topp} - y_\mathrm{bunn}}{2} = \dfrac{2 - (-4)}{2} = 3
$$

og likevektslinja er 

$$
d = \dfrac{y_\mathrm{topp} + y_\mathrm{bunn}}{2} = \dfrac{2 + (-4)}{2} = -1
$$

Avstanden mellom to påfølgende toppunkter er $T = 2\pi$ som betyr at vinkelfrekvensen er

$$
\omega = \dfrac{2\pi}{T} = \dfrac{2\pi}{2\pi} = 1
$$

Funksjonsuttrykket er nå på formen

$$
f(x) = 3 \sin (x - \varphi) - 1
$$

Vi kan bestemme $\varphi$ ved å bruke at grafen har et toppunkt når $x = 0$. Da følger det at 

$$
f(0) = 2 \liff 3 \sin (0 - \varphi) - 1 = 2 \liff \sin (-\varphi) = 1
$$

Her står vi fritt til å velge $\varphi$ slik at likningen er oppfylt, som for eksempel skjer dersom 

$$
-\varphi = \frac{\pi}{2} \liff \varphi = -\frac{\pi}{2}
$$

Dermed er

$$
f(x) = 3 \sin \left(x + \frac{\pi}{2}\right) - 1
$$


> Merk at vi også kunne brukt at $\varphi/\omega$ gir oss $x$-koordinaten der grafen til $f$ skjærer likevektslinja på vei opp for første gang når $x > 0$. Da ville vi i stedet fått at $\varphi = 3\pi/2$ som bare er $\varphi + 2\pi$ og dermed det samme punktet på enhetssirkelen.
::::
:::::


:::::::::::::::


---



## Funksjonsuttrykk på formen $a \cos \omega x + b \sin \omega x$

Vi kan også skrive trigonometriske funksjoner på formen

$$
f(x) = a \cos (\omega x) + b \sin (\omega x)
$$

Men denne skrivemåten lar seg ikke lett lese av egenskapene til funksjonen. Derfor foretrekker vi å skrive den om til en sinus- eller cosinusfunksjon på formen. Det holder å vite hvordan vi skriver det om til en cosinusfunksjon, siden vi kan bruke at $\cos u = \sin \left(u + \dfrac{\pi}{2}\right)$ for å skrive om til en sinusfunksjon etterpå. 


:::::::::::::::{summary} Fra $a \cos \omega x + b \sin \omega x$ til $A \cos (\omega x - \varphi)$
Gitt funksjonen $f$ på formen

$$
f(x) = a \cos (\omega x) + b \sin (\omega x)
$$


kan den skrives om til formen

$$
f(x) = A \cos (\omega x - \varphi)
$$

der 

* $A = \sqrt{a^2 + b^2}$ er amplituden
* $a = A \cos \varphi$ og $b = A \sin \varphi$

Fortegnet til $a$ og $b$ gir oss informasjon om hvilken kvadrant $\varphi$ ligger i: 

:::{table}
---
width: 60%
---
labels: $\varphi$, $a$, $b$
1. kvadrant, $a > 0$, $b > 0$
2. kvadrant, $a < 0$, $b > 0$
3. kvadrant, $a \lt 0$, $b \lt 0$
4. kvadrant, $a > 0$, $b \lt 0$
:::



:::::{proof} Vis forklaring
Vi kan tolke funksjonsuttrykket

$$
f(x) = a \cos (\omega x) + b \sin (\omega x)
$$

som prikkproduktet 

$$
[a, b] \cdot [\cos (\omega x), \sin (\omega x)]
$$


:::{plot}
width: 100%
fontsize: 28
axis: equal
ticks: off
align: right
circle: (0, 0), 1
let: A = 1.5
let: phi = pi/3
point: (A*cos(phi), A*sin(phi))
text: A * cos(phi), A * sin(phi), $P(a, b)$, top-right
vector: (0, 0), (A*cos(phi), A*sin(phi)), blue
let: theta = 5*pi/6
point: (cos(theta), sin(theta))
text: cos(theta), sin(theta), $Q$, top-left
vector: (0, 0), (cos(theta), sin(theta)), red
text: 0.5 * cos(phi/2), 0.5 * sin(phi/2), $\varphi$, center-center
text: 0.4 * cos(theta/2) - 0.1, 0.4 * sin(theta/2), $\omega x$, center-left
angle-arc: (0, 0), 0.3, 0, phi * 180 / pi, blue, arrow
angle-arc: (0, 0), 0.2, 0, theta * 180 / pi, red, arrow
:::




Vi tenker oss en posisjonsvektor $\lvec{OP} = [a, b]$. Da vil 

$$
\abs{\lvec{OP}} = \sqrt{a^2 + b^2} = A
$$

Det betyr også at 

$$
\cos \varphi = \frac{a}{A} \and \sin \varphi = \frac{b}{A}
$$

som gir oss 

$$
a = A \cos \varphi \and b = A \sin \varphi
$$

Og så tenker vi oss et punkt $Q$ på enhetssirkelen med posisjonsvektoren $\lvec{OQ} = [\cos (\omega x), \sin (\omega x)]$.

Vinkelen mellom $\lvec{OP}$ og $\lvec{OQ}$ er da $\omega x - \varphi$. Dermed kan vi skrive prikkproduktet som

$$
\lvec{OP} \cdot \lvec{OQ} = \underbrace{\abs{\lvec{OP}}}_{=A} \cdot \underbrace{\abs{\lvec{OQ}}}_{=1} \cos (\omega x - \varphi) = A \cos (\omega x - \varphi)
$$

Dermed har vi at 

$$
a\cos (\omega x) + b \sin (\omega x) = A \cos (\omega x - \varphi)
$$

der 

$$
A = \sqrt{a^2 + b^2} \and a = A \cos \varphi \and b = A \sin \varphi
$$
:::::

:::::::::::::::



---



:::::::::::::::{example} Eksempel 3
Funksjonen $f$ er gitt ved

$$
f(x) = 2 \cos (4x) + 2 \sqrt{3} \sin (4x)
$$

Finn funkjonsuttrykket på formen

$$
f(x) = A \cos (\omega x - \varphi) \qog f(x) = A \sin (\omega x - \varphi)
$$


::::{solution}
---
open:
---
Først kan vi merke oss at vinkelfrekvensen er den samme i de to uttrykkene, så dermed er $\omega = 4$. 


Vi har at $a = 2$ og $b = 2\sqrt{3}$. Dermed er amplituden gitt ved:

$$
A = \sqrt{2^2 + (2\sqrt{3})^2} = \sqrt{4 + 12} = \sqrt{16} = 4
$$

Siden $a > 0$ og $b > 0$, så ligger $\varphi$ i 1. kvadrant.

Vi løser likningen

$$
a = A \cos \varphi \liff 2 = 4 \cos \varphi \liff \cos \varphi = \frac{1}{2}
$$

som er tilfredsstilt når

$$
\varphi = \frac{\pi}{3}
$$

Altså er 

$$
f(x) = 4 \cos \left(4x - \frac{\pi}{3}\right)
$$

Vi kan finne sinusfunksjonen ved å bruke at $\cos u = \sin \left(u + \dfrac{\pi}{2}\right)$:

$$
f(x) = 4 \sin \left(4x - \frac{\pi}{3} + \frac{\pi}{2}\right) = 4 \sin \left(4x + \frac{\pi}{6}\right)
$$


::::


:::::::::::::::



---



:::::::::::::::{exercise} Underveisoppgave 3
Funksjonen $f$ er gitt ved

$$
f(x) = 3 \cos (2x) - 3 \sqrt{3} \sin (2x)
$$

Finn $f(x)$ på formen

$$
f(x) = A \cos (\omega x - \varphi)
$$

:::::{answer}
$$
f(x) = 6 \cos \left(2x + \frac{\pi}{3}\right)
$$

::::{solution}
Vinkelefrekvensen i de to uttrykkene må være like, så $\omega = 2$.

Vi har at $a = 3$ og $b = -3\sqrt{3}$. Amplituden er derfor gitt ved

$$
A = \sqrt{a^2 + b^2} = \sqrt{3^2 + (-3\sqrt{3})^2} = \sqrt{9 + 9 \cdot 3} = \sqrt{4 \cdot 9} = \sqrt{4} \cdot \sqrt{9} = 2 \cdot 3 = 6
$$


Siden $a$ er positiv, må $\varphi$ ligge i enten 1. kvadrant eller 4. kvadrant. Siden $b$ er negativ, medfører det at det må være 4. kvadrant. For å bestemme $\varphi$ kan vi løse likningen

$$
a = A \cos \varphi \liff 3 = 6 \cos \varphi \liff \cos \varphi = \frac{1}{2}
$$

Siden $\varphi$ må ligge i 4. kvadrant, får vi at

$$
\varphi = -\frac{\pi}{3}
$$

Dermed er 

$$
f(x) = A \cos (\omega x - \varphi) = 6 \cos \left(2x - \left(-\frac{\pi}{3}\right)\right) = 6 \cos \left(2x + \frac{\pi}{3}\right)
$$


::::
:::::

:::::::::::::::



---



## Topp- og bunnpunkter




:::::::::::::::{summary} Topp- og bunnpunkter for sinus- og cosinusfunksjoner 


:::{plot}
nocache:
ticks: off
fontsize: 24
width: 380px
align: right
let: A = 2
let: d = 3
let: T = 3
let: omega = 2 * pi / T
let: phi = -3.5*pi / 3
function: A * sin(omega * x + phi) + d
ymin: 0
xmin: 0
hline: d, dashed, gray
text: 0, d, $d$, center-left
vline: (pi/2 - phi + 2*pi) / omega, d, d + A, dashed, gray
text: (pi/2 - phi + 2*pi) / omega, 0.5 * (d + d + A), $A$, center-left
hline: d - A, 0, (-pi/2 - phi) / omega, dashed, red
text: 0, d - A, "$d - A$", center-left
hline: d + A, 0, (pi/2 - phi) / omega, dashed, red
text: 0, d + A, "$d + A$", center-left
::: 

Toppunktene til en sinus- eller cosinusfunksjon finner vi ved å løse likningen

$$
f(x) = d + A
$$

Bunnpunktene til en sinus- eller cosinusfunksjon finner vi ved å løse likningen

$$
f(x) = d - A
$$


Med variabelskifte $u = \omega x + \varphi$, svarer det til å løse likningene:

:::{table}
labels: Type punkt, Sinusfunksjoner, Cosinusfunksjoner
Toppunkter, $\sin u = 1$, $\cos u = 1$
Bunnpunkter, $\sin u = -1$, $\cos u = -1$
:::



:::::{proof} Vis forklaring
For en sinusfunksjon på formen

$$
f(x) = A \sin (\omega x + \varphi) + d
$$

vil toppunktene være gitt ved å løse likningen 

$$
f(x) = d + A 
$$

$$
A \sin (\omega x + \varphi) + d = d + A 
$$

$$
\sin (\omega x + \varphi) = 1
$$

Tilsvarende vil bunnpunktene være gitt ved å løse likningen

$$
f(x) = d - A \liff A \sin (\omega x + \varphi) + d = d - A \liff \sin (\omega x + \varphi) = -1
$$

Definerer vi variabelen $u = \omega x + \varphi$, så får vi likningene

$$
\begin{align*}
\sin u &= 1 && \mathrm{Toppunkter} \\
\\
\sin u &= -1 && \mathrm{Bunnpunkter}
\end{align*}
$$


For cosinusfunksjoner på formen 

$$
f(x) = A \cos (\omega x + \varphi) + d
$$

får vi at toppunkter er gitt ved å løse likningen

$$
f(x) = d + A \liff A \cos (\omega x + \varphi) + d = d + A \liff \cos (\omega x + \varphi) = 1
$$

Tilsvarende vil bunnpunktene være gitt ved å løse likningen

$$
f(x) = d - A \liff A \cos (\omega x + \varphi) + d = d - A \liff \cos (\omega x + \varphi) = -1
$$

Definerer vi variabelen $u = \omega x - \varphi$, så får vi likningene

$$
\begin{align*}
\cos u &= 1 && \mathrm{Toppunkter} \\
\\
\cos u &= -1 && \mathrm{Bunnpunkter}
\end{align*}
$$


:::::


:::::::::::::::



:::::::::::::::{example} Eksempel 4
En trigonometrisk funksjon $f$ er gitt ved

$$
f(x) = 2 \sin \left(2x - \frac{\pi}{2}\right) + 3
$$


Finn koordinatene til topp- og bunnpunktene til $f$ for $x \in [0, 4\pi]$.



::::{solution}
---
open:
---
Først merker vi oss at amplituden er $A = 2$ og likevektslinja er $d = 3$. 

**Toppunktene**:

Vi setter $u = 2x - \frac{\pi}{2}$ og løser likningen for toppunktene:

$$
\sin u = 1 \liff u = \frac{\pi}{2} + 2k\pi \qfor k \in \mathbb{Z}
$$

Vi setter tilbake definisjonen av $u$ og løser for $x$:

:::{table}
---
transpose:
width: 70%
---
labels: $k$, $x = \dfrac{\pi}{2} + k\pi$
$0$, $\dfrac{\pi}{2}$
$1$, $\dfrac{3\pi}{2}$
$2$, $\dfrac{5\pi}{2}$
$3$, $\dfrac{7\pi}{2}$
:::

Vi har at $y$-koordinaten til toppunktene er gitt ved

$$
y_\mathrm{maks} = d + A = 3 + 2 = 5
$$

Toppunktene er derfor gitt ved mengden

$$
T = \left\{\left(\dfrac{\pi}{2}, 5\right), \left(\dfrac{3\pi}{2}, 5\right), \left(\dfrac{5\pi}{2}, 5\right), \left(\dfrac{7\pi}{2}, 5\right)\right\}
$$


**Bunnpunktene**:

Vi setter $u = 2x - \frac{\pi}{2}$ og løser likningen for bunnpunktene:

$$
\sin u = -1 \liff u = -\frac{\pi}{2} + 2k\pi \qfor k \in \mathbb{Z}
$$

Vi setter tilbake definisjonen av $u$ og løser for $x$:

$$
2x - \dfrac{\pi}{2} = -\dfrac{\pi}{2} + 2k\pi \liff 2x = 2k\pi \liff x = k\pi
$$

Altså har vi 

:::{table}
---
transpose:
width: 70%
---
labels: $k$, $x = k\pi$
$0$, $0$
$1$, $\pi$
$2$, $2\pi$
$3$, $3\pi$
$4$, $4\pi$
:::

Her vil $y$-koordinaten til bunnpunktene være gitt ved

$$
y_\mathrm{min} = d - A = 3 - 2 = 1
$$

Altså er mengden av bunnpunkter gitt ved

$$
B = \left\{(0, 1), (\pi, 1), (2\pi, 1), (3\pi, 1), (4\pi, 1)\right\}
$$


::::


:::::::::::::::


---



:::::::::::::::{exercise} Underveisoppgave 4
En trigonometrisk funksjon $f$ er gitt ved

$$
f(x) = 3 \cos \left(\pi x + \pi\right) - 2
$$


Finn koordinatene til topp- og bunnpunktene til $f$ i intervallet $\langle -3, 3\rangle$.


:::::{answer}

* Toppunkter: $T = \{(-1, 1), (1, 1)\}$
* Bunnpunkter: $B = \{(-2, -5), (0, -5), (2, -5)\}$

::::{solution}
Amplituden og likevektslinja er gitt ved

$$
A = 3 \and d = -2
$$

Da er $y$-koordinatene til topp- og bunnpunktene gitt ved 

$$
\begin{align*}
y_\mathrm{topp} &= d + A = -2 + 3 = 1\\
\\
y_\mathrm{bunn} &= d - A = -2 - 3 = -5
\end{align*}
$$


**Toppunkter**:

For å finne toppunktene setter vi $u = \pi x + \pi$ og løser likningen

$$
\cos u = 1 \liff u = 2k\pi \qfor k \in \mathbb{Z}
$$

Så setter vi tilbake definisjonen av $u$ og løser for $x$:

$$
\pi x + \pi = 2k\pi \liff \pi x = 2k\pi - \pi \liff x = 2k - 1
$$

Så finner vi de aktuelle løsningene for $x \in \langle -3, 3\rangle$:

:::{table}
---
transpose:
width: 70%
---
labels: $k$, $x = 2k - 1$
$-1$, $-3$
$0$, $-1$
$1$, $1$
$2$, $3$
:::

Vi ser at det bare er $x = -1$ og $x = 1$ som er i intervallet $\langle -3, 3\rangle$. Dermed får vi toppunktene

$$
T = \{(-1, 1), (1, 1)\}
$$

**Bunnpunkter**:

For å finne bunnpunktene setter vi $u = \pi x + \pi$ og løser likningen

$$
\cos u = -1 \liff u = \pi + 2k\pi \qfor k \in \mathbb{Z}
$$

Så setter vi tilbake definisjonen av $u$ og løser for $x$:

$$
\pi x + \pi = \pi + 2k\pi \liff \pi x = 2k\pi \liff x = 2k
$$

Så finner vi de aktuelle løsningene for $x \in \langle -3, 3\rangle$:

:::{table}
---
transpose:
width: 70%
---
labels: $k$, $x = 2k$
$-1$, $-2$
$0$, $0$
$1$, $2$
:::

Dermed får vi bunnpunktene

$$
B = \{(-2, -5), (0, -5), (2, -5)\}
$$


::::
:::::


:::::::::::::::

