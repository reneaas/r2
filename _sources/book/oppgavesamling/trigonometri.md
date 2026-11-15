# Oppgavesamling: Trigonometri


:::::::::::::::{exercise} Oppgave 1
For en vinkel $\varphi$ i 2. kvadrant er $\cos \varphi = -\dfrac{5}{13}$

:::::::::::::{part} a
Bestem $\sin \varphi$ og $\tan \varphi$.


:::::::::::::


:::::::::::::{part} b
Bestem $\cos \left(\varphi + \dfrac{\pi}{2}\right)$.


:::::::::::::


:::::::::::::{part} c
Bestem $\sin(\pi - \varphi)$.


:::::::::::::


:::::::::::::{part} d
Bestem $\cos(-\varphi)$.


:::::::::::::



:::::::::::::{part} e
Bestem $\sin \left(\dfrac{\pi}{2} - \varphi\right)$.


:::::::::::::


:::::::::::::::



---





:::::::::::::::{exercise} Oppgave 2


:::::::::::::{part} a

:::{plot}
width: 350px
align: right
let: A = 3
let: d = -2
let: T = pi/2
let: x0 = pi/4
let: omega = 2 * pi / T
let: phi = omega * x0
function: A * cos(omega * x - phi) + d, f
xtick-format: pi
xmin: 0
xmax: 2 * pi
xstep: pi/4
fontsize: 26
:::


Grafen til funksjonen $f$ er vist til høyre.

Bestem et mulig uttrykk for $f(x)$.

:::::{answer}
$$
f(x) = 3 \cos(4x - \pi) - 2
$$
:::::


:::::::::::::


:::::::::::::{part} b

:::{plot}
width: 350px
align: right
let: A = 2
let: d = 1
let: T = 5
let: x0 = 2
let: omega = 2 * pi / T
let: phi = omega * x0
function: A * sin(omega * x - phi) + d, g
fontsize: 26
:::

Grafen til funksjonen $g$ er vist til høyre.

Bestem et mulig uttrykk for $g(x)$.


:::::{answer}
$$
g(x) = 2\sin\left(\dfrac{2\pi}{5}x - \dfrac{4\pi}{5}\right) + 1
$$
:::::


:::::::::::::


:::::::::::::{part} c

:::{plot}
width: 350px
align: right
let: A = 4
let: d = 2
let: T = 3
let: x0 = 1
let: omega = 2 * pi / T
let: phi = omega * x0
function: A * cos(omega * x - phi) + d, h
fontsize: 26
ymin: -4
ymax: 8
:::

Grafen til funksjonen $h$ er vist til høyre.

Bestem et mulig uttrykk for $h(x)$.

:::::{answer}
$$
h(x) = 4 \cos \left(\dfrac{2\pi}{3}x - \dfrac{2\pi}{3}\right) + 2
$$
:::::

:::::::::::::


:::::::::::::::


---


:::::::::::::::{exercise} Oppgave 3
Funksjonen $f$ er gitt ved 

$$
f(x) = 6 \sin\left(\dfrac{\pi}{6}x - \dfrac{\pi}{4}\right) - 3
$$


:::::::::::::{part} a
Bestem grafens amplitude, likevektslinje, periode og faseforskyvning.


:::::::::::::


:::::::::::::{part} b
Bestem nullpunktene til $f$.


:::::::::::::


:::::::::::::{part} c
Bestem koordinatene til $f$ sin bunnpunkter.

:::::::::::::

:::::::::::::::