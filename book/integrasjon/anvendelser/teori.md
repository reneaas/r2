# Anvendelser av integrasjon


:::{goals} Læringsmål
* Kunne bestemme volumet til omdreiningslegemer som er dreid om $x$-aksen eller $y$-aksen med integrasjon
* Kunne bestemme arealet avgrenset av to funksjonsgrafer.
* Kunne bestemme lengden av en kurve med integrasjon
* Kunne bestemme gjennomsnittsverdien til en funksjon på et intervall med integrasjon
:::



## Areal avgrenset av funksjonsgrafer



:::::::::::::::{summary} Areal avgrenset av to funksjonsgrafer

:::{plot}
width: 100%
align: right
ticks: off
xmin: 0
xmax: 5
ymin: -4
ymax: 4
function: (x-1)**2 - 2*(x - 1) - 1, blue, f
function: (x - 1) + sin(pi * (x - 1)) - 1, red, g
fill-between: g(x), f(x), (1, 4), purple, 0.2, where=above  
fontsize: 32
let: a = 1
let: b = 4
text: a, 0, "$a$", top-center
text: b, 0, "$b$", bottom-center
vline: a, 0, f(a), dashed, gray
vline: b, 0, f(b), dashed, gray
:::

Dersom funksjonsgrafene til to funksjoner $f$ og $g$ skjærer hverandre i $x = a$ og $x = b$, så er arealet $A$ av området mellom grafene gitt ved

$$
A = \int\limits_a^b \abs{f(x) - g(x)} \, \d x
$$


:::::::::::::::



:::::::::::::::{example} Eksempel 1
:::{plot}
width: 100%
align: right
function: x**2, f
function: sqrt(x), g
xmin: -0.5
xmax: 1.5
ymin: -0.5
ymax: 2
ticks: off
fill-between: g(x), f(x), (0, 1), purple, where=above
fontsize: 26
:::


Til høyre vises grafene til funksjonene

$$
f(x) = x^2 \qog g(x) = \sqrt{x}
$$


Finn arealet avgrenset av de to grafene.


::::{solution}
---
open:
---
Vi starter med å finne skjæringspunktene mellom de to funksjonsgrafene slik at vi vet hva integrasjonsgrensene skal være:

$$
f(x) = g(x) \liff x^2 = \sqrt{x} \limplies x^4 = x
$$

$$
x^4 - x = 0 \limplies x(x^3 - 1) = 0 
$$

som gir 

$$
x = 0 \or x^3 = 1 \limplies x = 0 \or x = 1.
$$


På intervallet $[0, 1]$ vil $g(x) > f(x)$. Da blir arealet av området avgrenset av de to grafene gitt ved

$$
A = \int\limits_0^1 \abs{f(x) - g(x)} \d x = \int\limits_0^1 (g(x) - f(x)) \d x
$$

Vi løser det ubestemte integralet først: 

$$
\begin{align*}
\int (g(x) - f(x)) \d x &= \int (\sqrt{x} - x^2) \d x \\
\\
&= \int \sqrt{x} \d x - \int x^2 \d x \\
\\
&= \int x^{1/2} \d x - \dfrac{1}{3}x^3 \\
\\
&= \dfrac{1}{3/2}x^{3/2} - \dfrac{1}{3}x^3 + C \\
\\
&= \dfrac{2}{3}x^{3/2} - \dfrac{1}{3}x^3 + C.
\end{align*}
$$

Vi velger den enkleste antideriverte ved å sette $C = 0$. Den er da gitt ved 

$$
F(x) = \dfrac{2}{3}x^{3/2} - \dfrac{1}{3}x^3
$$

Arealet blir da

$$
\begin{align*}
A &= F(1) - F(0) \\
\\
&= \left(\dfrac{2}{3} \cdot 1^{3/2} - \dfrac{1}{3} \cdot 1^3\right) - \left(\dfrac{2}{3} \cdot 0^{3/2} - \dfrac{1}{3} \cdot 0^3\right) \\
\\
&= \dfrac{2}{3} - \dfrac{1}{3} \\
\\
&= \dfrac{1}{3}
\end{align*}
$$
::::


:::::::::::::::




## Volum av omdreiningslegemer



:::::::::::::::{summary} Volum av omdreiningslegemer om $x$-aksen (skivemetoden)

:::{plot}
width: 100%
align: right
function: (2 - cos(x)) / sin(x), (0.5, 2.5), blue, f
curve: t, -(2 - cos(t)) / sin(t), (0.5, 2.5), blue, dashed
ticks: off
xmin: 0
xmax: 3
ymin: -6
ymax: 6
fontsize: 32
let: a = 0.5
let: b = 2.5
def: g(x) = (2 - cos(x)) / sin(x)
text: a, 0, "$a$", bottom-center
text: b, 0, "$b$", bottom-center
vline: a, 0, f(a), dashed, gray
vline: b, 0, f(b), dashed, gray
ellipse: (b, 0), 0.1, f(b), solid, red
curve: a + 0.1 * cos(t), g(a) * sin(t), (-pi/2, pi/2), red, dashdot
curve: a + 0.1 * cos(t), g(a) * sin(t), (pi/2, 3 * pi/2), red, solid
let: m = 0.5 * (a + b)
curve: m + 0.1 * cos(t), g(m) * sin(t), (-pi/2, pi/2), gray, dashdot
curve: m + 0.1 * cos(t), g(m) * sin(t), (pi/2, 3 * pi/2), gray, solid
text: m,
nocache:
:::



Volumet $V$ til omdreiningslegemet vi får om vi dreier grafen til $f$ $360\degree$ om $x$-aksen på intervallet $[a, b]$ er gitt ved

$$
\boxed{V = \pi \int\limits_a^b f(x)^2 \, \d x}
$$

:::::::::::::::


---


:::::::::::::::{example} Eksempel 2

Grafen til funksjonen $f(x) = 2x + 1$ dreies om 360 grader om $x$-aksen på intervallet $[1, 3]$. 


::::{multi-plot2}
---
rows: 1
cols: 2
---
:::{plot}
width: 100%
function: 2*x + 1, (1, 3), f, blue
xmin: 0
ymin: 0
xmax: 4
ymax: 8
:::


:::{plot3d}
layout: symmetric
xrange: (0, 8)
yrange: (-2.5, 8)
zrange: (-2.5, 8)
ticks: false
xlabel: $x$
ylabel: $y$
zlabel: $z$
solid-of-revolution: x + 1, (1, 5), blue, alpha=0.35, disks=6
:::


::::

Finn volumet av omdreiningslegemet.



::::{solution}
---
open:
---
Volumet av omdreiningslegemet er gitt ved

$$
V = \pi \int\limits_1^3 f(x)^2 \d x = \pi \int\limits_1^3 (2x + 1)^2 \d x
$$

Vi kan bruke substitusjon for å løse integralet enklest mulig:

$$
u = 2x + 1 \limplies \d u = 2\d x \liff \d x = \dfrac{\d u}{2}
$$

De nye integrasjonsgrensene blir da

$$
u(1) = 2 \cdot 1 + 1 = 3 \qog u(3) = 2\cdot 3 + 1 = 7
$$

Dermed blir volumet

$$
\begin{align*}
V &= \pi \int\limits_3^7 u^2 \dfrac{\d u}{2} \\
\\
&= \dfrac{\pi}{2} \int\limits_3^7 u^2 \d u \\
\\
&= \dfrac{\pi}{2} \left[\dfrac{1}{3}u^3\right]_3^7 \\
\\
&= \dfrac{\pi}{6} \left(7^3 - 3^3\right) \\
\\
&= \dfrac{\pi}{6} \left(343 - 27\right) \\
\\
&= \dfrac{\pi}{6} \cdot 316 \\
\\
&= \dfrac{158\pi}{3}
\end{align*}
$$
::::

:::::::::::::::



---



:::::::::::::::{summary} Volumet av omdreiningslegemer om $y$-aksen (sylindermetoden)
Volumet til omdreiningslegemet vi får om vi dreier grafen til $f$ $360\degree$ om $y$-aksen på intervallet $[a, b]$ er gitt ved

$$
\boxed{V = 2\pi \int\limits_a^b x \cdot f(x) \, \d x}
$$


:::::::::::::::



---


## Gjennomsnittsverdien til en funksjon

:::::::::::::::{summary} Gjennomsnittet av en funksjon
Gjennomsnittet til en funksjon $f$ på intervallet $[a, b]$ er gitt ved

$$
\boxed{\bar{f} = \dfrac{1}{b - a} \int\limits_a^b f(x) \, \d x}
$$
:::::::::::::::



---



## Buelengde av en kurve


:::::::::::::::{summary} Buelengde (lengden av en kurve)
Buelengden $L$ av grafen til en funksjon $f$ på et intervall $[a, b]$ er gitt ved

$$
\boxed{L = \int\limits_a^b \sqrt{1 + f'(x)^2} \, \d x}
$$
:::::::::::::::


## Overflatearealet til et omdreiningslegeme 


:::::::::::::::{summary} Overflatearealet til et omdreiningslegeme om $x$-aksen
Overflatearealet $A$ til omdreiningslegemet vi får om vi dreier grafen til $f$ $360\degree$ om $x$-aksen på intervallet $[a, b]$ er gitt ved

$$
\boxed{A = 2\pi \int\limits_a^b f(x) \sqrt{1 + f'(x)^2} \, \d x}
$$

:::::::::::::::
