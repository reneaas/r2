# Kuler


:::{goals}
* utforske og forstå regneregler for vektorer i rommet, og bruke vektorer til å beregne ulike størrelser i rommet
:::


:::::::::::::::{summary} Kulelikningen
:::{plot3d-2}
width: 100%
align: right
fontsize: 24
let: Sx = 4
let: Sy = 2
let: Sz = 3
let: r = 2
sphere: center=(Sx, Sy, Sz), radius=r, color=blue, alpha=0.2, resolution=128
xrange: (-1, 7)
yrange: (-1, 7)
zrange: (-1, 7)
ticks: off
point: (Sx, Sy, Sz), black
azim: -70
ylabel: none
text: at=(Sx, Sy, Sz), value="$S$", ha=left, va=top
let: phi = pi/6
let: theta = pi/4
let: Px = Sx + r * cos(phi) * cos(theta)
let: Py = Sy + r * cos(phi) * sin(theta)
let: Pz = Sz + r * sin(phi)
point: (Px, Py, Pz), black
text: at=(Px, Py, Pz), value="$P$", ha=left, va=bottom
vector: (Sx, Sy, Sz), (Px, Py, Pz), red
:::



En kuleflate med sentrum i punktet $S(x_0, y_0, z_0)$ og radius $r$ består av alle punktet $P(x, y, z)$ som tilfredsstiller likningen

$$
\abs{\lvec{SP}} = r
$$

Likningen kan skrives på standardform med koordinater som følger:

$$
(x - x_0)^2 + (y - y_0)^2 + (z - z_0)^2 = r^2
$$



:::::::::::::::



---


:::::::::::::::{example} Eksempel 1
:::{plot3d-2}
width: 100%
align: right
fontsize: 24
let: Sx = 4
let: Sy = 2
let: Sz = 3
let: r = 2
sphere: center=(Sx, Sy, Sz), radius=r, color=blue, alpha=0.2, resolution=128
xrange: (-1, 7)
yrange: (-1, 7)
zrange: (-1, 7)
point: (Sx, Sy, Sz), black
azim: -70
ylabel: none
text: at=(Sx, Sy, Sz), value="$S(4, 2, 3)$", ha=left, va=bottom
grid: true
:::


Gitt en kule med sentrum i punktet $S(4, 2, 3)$ og radius $r = 2$. 

Finn likningen til kuleflaten.

::::{solution}
---
open:
---
Kulelikningen er gitt ved

$$
(x - 4)^2 + (y - 2)^2 + (z - 3)^2 = 2^2
$$

$$
(x - 4)^2 + (y - 2)^2 + (z - 3)^2 = 4
$$
::::


:::::::::::::::


---



Likningen til en kule er ikke alltid skrevet på standardform, som gjør det vanskelig å lese av sentrum og radius fra likningen. Da kan vi bruke fullstendig kvadraters metode for å skrive om likningen til standardform.


:::::::::::::::{summary} Fullstendig kvadraters metode
Gitt et uttrykk $x^2 + bx$ kan vi alltid skrive det om til

$$
x^2 + bx = \left(x + \dfrac{b}{2}\right)^2 - \left(\dfrac{b}{2}\right)^2
$$
:::::::::::::::


La oss se på et eksempel.


:::::::::::::::{example} Eksempel 2
En kule er gitt ved likningen

$$
x^2 + 4x + y^2 - 6y + z^2 + 2z - 6 = 0
$$


Finn sentrum og radius til kulen.


::::{solution}
---
open:
---
Vi bruker fullstendig kvadraters metode for å skrive om uttrykkene uttrykkene i likningen som fullstendige kvadrater: 

$$
x^2 + 4x = \left(x + \dfrac{4}{2}\right)^2 - \left(\dfrac{4}{2}\right)^2 = (x + 2)^2 - 4
$$

$$
y^2 - 6y = \left(y - \dfrac{6}{2}\right)^2 - \left(\dfrac{6}{2}\right)^2 = (y - 3)^2 - 9
$$

$$
z^2 + 2z = \left(z + \dfrac{2}{2}\right)^2 - \left(\dfrac{2}{2}\right)^2 = (z + 1)^2 - 1
$$

Så setter vi inn i kulelikningen:

$$
(x + 2)^2 - 4 + (y - 3)^2 - 9 + (z + 1)^2 - 1 - 6 = 0
$$

$$
(x + 2)^2 + (y - 3)^2 + (z + 1)^2 - 20 = 0
$$

$$
(x + 2)^2 + (y - 3)^2 + (z + 1)^2 = 20
$$

Ergo har kule sentrum i $S(-2, 3, -1)$ og radius $r = \sqrt{20} = 2\sqrt{5}$.


::::


:::::::::::::::


---


:::::::::::::::{summary} Tangentplan
:::{plot3d-2}
width: 100%
align: right
ticks: off
ylabel: none
fontsize: 24
let: Sx = 2
let: Sy = 2
let: Sz = 3
let: phi = 0
let: theta = 0
let: r = 2
let: Px = Sx + r * cos(phi) * cos(theta)
let: Py = Sy + r * cos(phi) * sin(theta)
let: Pz = Sz + r * sin(phi)
sphere: center=(Sx, Sy, Sz), radius=r, color=blue, alpha=0.1, resolution=128
xrange: (-1, 7)
yrange: (-1, 7)
zrange: (-1, 7)
let: nx = Px - Sx
let: ny = Py - Sy
let: nz = Pz - Sz
plane: normal=(nx, ny, nz), point=(Px, Py, Pz), span=(4, 4), color=red, alpha=0.4
point: (Px, Py, Pz), black
vector: (Px, Py, Pz), (Px + nx, Py + ny, Pz + nz), red
azim: -70
point: (Sx, Sy, Sz), black
text: at=(Sx, Sy, Sz), value="$S$", ha=right, va=bottom
right-angle: at=(Px, Py, Pz), dir1=(nx, ny, nz), dir2=(ny, -nx, -1), size=0.35
vector: (Sx, Sy, Sz), (Px, Py, Pz), blue
text: at=(Px, Py, Pz), value="$P$", ha=left, va=bottom
text: at=(Px + nx, Py + ny, Pz + nz), value="$\vec{n}$", ha=left, va=center
:::

Når et plan $\alpha$ tangerer en kuleflate i et punkt $P$, kaller vi planet for et **tangentplan** til kula. Da er en normalvektor til planet gitt ved 

$$
\vec{n} = \lvec{SP}
$$


:::::::::::::::


---


:::::::::::::::{example} Eksempel 3
Punktene $A(-1, 0, 3)$ og $B(3, 2, 5)$ ligger på en kule der $AB$ er diameteren til kulen.

Et plan $\alpha$ tangerer kuleflaten i punktet $B$.

Finn likningen til $\alpha$.


::::{solution}
---
open:
---
Først finner vi kulens sentrum. Siden $AB$ er diameteren til kula, så må punktet $S$ ligge midt mellom $A$ og $B$. Vi finner koordinatene til $S$ ved å ta gjennomsnittet av koordinatene til $A$ og $B$:

$$
\lvec{OS} = \dfrac{1}{2}(\lvec{OA} + \lvec{OB}) = \dfrac{1}{2}([-1, 0, 3] + [3, 2, 5]) = \dfrac{1}{2}[2, 2, 8] = [1, 1, 4]
$$

Dermed har kulen sentrum i $S(1, 1, 4)$. En normalvektor til tangentplanet er da 

$$
\vec{n} = \lvec{SB} = [3 - 1, 2 - 1, 5 - 4] = [2, 1, 1]
$$

Vi lar $P(x, y, z)$ være et vilkårlig punktet i planet. Da er likningen til planet gitt ved 

$$
\lvec{PB} \cdot \vec{n} = 0
$$

$$
[x - 3, y - 2, z - 5] \cdot [2, 1, 1] = 0
$$

$$
2(x - 3) + 1(y - 2) + 1(z - 5) = 0
$$

$$
2x - 6 + y - 2 + z - 5 = 0
$$

$$
2x + y + z - 13 = 0
$$

::::

:::::::::::::::




---

## Avstander og skjæringer
I praksis er det ikke mye ny teori å lære om kuler. Avstander og skjæringer kan vi finne ved å bruke de samme metodene som vi allerede har brukt for linjer og plan. 



:::::::::::::::{example} Eksempel 4
:::{plot3d-2}
width: 100%
fontsize: 24
align: right
plane: equation=2*x + y - 2*z - 6 = 0, span=(2, 4), color=red, alpha=0.3
sphere: center=(3, 2, -1), radius=3, color=blue, alpha=0.2, resolution=128
xrange: (-2, 10)
yrange: (-2, 7)
zrange: (-3, 4)
azim: -50
:::


En kule $K$ og et plan $\alpha$ er gitt ved 

$$
\begin{align*}
K &: \quad (x - 3)^2 + (y - 2)^2 + (z + 1)^2 = 3^2 \\
\\
\alpha &: \quad 2x + y - 2z - 8 = 0
\end{align*}
$$


Finn sentrum og radius til skjæringssirkelen mellom kula og planet. 


::::{solution}
---
open:
---
:::{plot}
width: 100%
align: right
fontsize: 24
axis: off
axis: equal
circle: (0, 0), 3, blue, solid
line-segment: (-4, 2), (4, 2), red, dashed
line-segment: (0, 2), (sqrt(5), 2), red, solid
point: (0, 0)
text: 0, 0, "$S$", bottom-left
line-segment: (0, 0), (0, 2), black, dashdot
line-segment: (0, 0), (sqrt(5), 2), black, dashdot
let: ds = 0.5
line-segment: (0, 2 - ds), (ds, 2 - ds), gray, solid
line-segment: (ds, 2 - ds), (ds, 2), gray, solid
text: 0.5 * sqrt(5), 0.5 * 2, "$r$", bottom-right
text: 0, 1, "$L$", center-left
text: 0.5 * sqrt(5), 2, "$\rho$", top-center
text: 4, 2, "$\alpha$", center-right
:::


Vi lar $\rho$ være radius til skjæringssirkelen. Vi kan da lage oss en skisse som vist til høyre som viser et tverrsnitt av kuleflaten og planet.
Da er $L$ avstanden fra planet til kulens sentrum og $r$ er radien til kuleflaten.

Sentrum i kuleflaten er $S(3, 2, -1)$. Planet har en normalvektor $\vec{n} = [a, b, c] = [2, 3, -2]$. Avstanden fra $S$ til $\alpha$ er da gitt ved 

$$
\begin{align*}
L &= \dfrac{\abs{ax + by + cz + d}}{\sqrt{a^2 + b^2 + c^2}} \\
\\
&= \dfrac{\abs{2 \cdot 3 + 3 \cdot 2 - 2 \cdot (-1) - 8}}{\sqrt{2^2 + 3^2 + (-2)^2}} \\
\\
&= \dfrac{\abs{6 + 6 + 2 - 8}}{\sqrt{4 + 9 + 4}} \\
\\
&= \dfrac{\abs{6}}{\sqrt{17}} \\
\\
&= \dfrac{6}{\sqrt{17}}
\end{align*}
$$


Fra figuren har vi en rettvinklet trekant med hypotenus $r$, katet $L$ og den andre kateten $\rho$. Dermed kan vi bruke Pytagoras' setning for å finne radiusen til skjæringssirkelen:

$$
\rho^2 + L^2 = r^2 \liff \rho^2 = r^2 - L^2
$$

som gir

$$
\rho^2 = 3^2 - \left(\dfrac{6}{\sqrt{17}}\right)^2 = 9 - \dfrac{36}{17} = \dfrac{153 - 36}{17} = \dfrac{117}{17}
$$

Altså er radien til skjæringssirkelen gitt ved

$$
\rho = \sqrt{\dfrac{117}{17}}
$$




::::


:::::::::::::::







