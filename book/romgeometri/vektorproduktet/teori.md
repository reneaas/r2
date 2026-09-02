# Kryssproduktet

:::{goals} 
* utforske og forstå regneregler for vektorer i rommet, og bruke vektorer til å beregne ulike størrelser i rommet
:::


Kryssproduktet er en måte å gange to vektorer sammen som lager en ny vektor med noen veldig nyttige egenskaper. Men før vi ser på kryssproduktet, skal vi ta en liten svipptur innom noe vi kaller for **determinanter**. Dette er et verktøy vi trenger for å regne ut kryssprodukter.

## Determinanter

En determinant knytter sammen fire tall på en bestemt måte:

:::::::::::::::{summary} $2 \times 2$ – determinanter
En $2 \times 2$ – determinant er definert som

$$
\mqty|a & b \\ c & d| = a \cdot d - b \cdot c
$$


:::::::::::::::


---


:::::::::::::::{example} Eksempel 1
Regn ut determinanten $\mqty|1 & 2 \\ 3 & -4|$

::::{solution}
---
open:
---
Vi bruker definisjonen:

$$
\mqty|1 & 2 \\ 3 & -4| = 1 \cdot (-4) - 2 \cdot 3 = -4 - 6 = -10
$$
::::


:::::::::::::::








## Definisjonen av kryssproduktet

**Kryssproduktet** (som også kalles for **vektorproduktet**) mellom to vektorer $\vec{a}$ og $\vec{b}$ gir oss en ny vektor som står ortogonalt (vinkelrett) på både $\vec{a}$ og $\vec{b}$.

Først introduserer vi enhetsvektorene i $x$-, $y$- og $z$-retning:

$$
\vec{e}_x = [1, 0, 0] \qog \vec{e}_y = [0, 1, 0] \qog \vec{e}_z = [0, 0, 1]
$$

Med de tre vektorene kan vi for eksempel skrive en vektor $\vec{a} = [3, -2, 1]$ som

$$
\vec{a} = [3, -2, 1] = 3 \cdot \vec{e}_x - 2 \cdot \vec{e}_y + 1 \cdot \vec{e}_z
$$

La oss nå se på hvordan vi kan regne ut kryssproduktet med en $3 \times 3$ – determinant:


:::::::::::::::{summary} Kryssprodukt med determinanter
Gitt to vektorer $\vec{a} = [a_x, a_y, a_z]$ og $\vec{b} = [b_x, b_y, b_z]$, så kan vi skrive kryssproduktet som en $3 \times 3$ – determinant på formen:

$$
\vec{a} \times \vec{b} = \mqty|\vec{e}_x & \vec{e}_y & \vec{e}_z \\ a_x & a_y & a_z \\ b_x & b_y & b_z|
$$


Vi regner ut stegvis med ett steg per enhetsvektor:

**Steg 1: $x$-komponenten**

$$
\mqty|\textcolor{red}{\vec{e}_x} & \vec{e}_y & \vec{e}_z \\ a_x & \textcolor{RoyalBlue}{a_y} & \textcolor{RoyalBlue}{a_z} \\ b_x & \textcolor{RoyalBlue}{b_y} & \textcolor{RoyalBlue}{b_z}| = \textcolor{red}{\vec{e}_x} \cdot \mqty|\textcolor{RoyalBlue}{a_y} & \textcolor{RoyalBlue}{a_z} \\ \textcolor{RoyalBlue}{b_y} & \textcolor{RoyalBlue}{b_z}|
$$

**Steg 2: $y$-komponenten**

$$
\mqty|\vec{e}_x & \textcolor{red}{\vec{e}_y} & \vec{e}_z \\ \textcolor{RoyalBlue}{a_x} & a_y & \textcolor{RoyalBlue}{a_z} \\ \textcolor{RoyalBlue}{b_x} & b_y & \textcolor{RoyalBlue}{b_z}| = \vec{e}_x \cdot \mqty|a_y & a_z \\ b_y & b_z| - \textcolor{red}{\vec{e}_y} \cdot \mqty|\textcolor{RoyalBlue}{a_x} & \textcolor{RoyalBlue}{a_z} \\ \textcolor{RoyalBlue}{b_x} & \textcolor{RoyalBlue}{b_z}|
$$

**Steg 3: $z$-komponenten**

$$
\mqty|\vec{e}_x & \vec{e}_y & \textcolor{red}{\vec{e}_z} \\ \textcolor{RoyalBlue}{a_x} & \textcolor{RoyalBlue}{a_y} & a_z \\ \textcolor{RoyalBlue}{b_x} & \textcolor{RoyalBlue}{b_y} & b_z| = \vec{e}_x \cdot \mqty|a_y & a_z \\ b_y & b_z| - \vec{e}_y \cdot \mqty|a_x & a_z \\ b_x & b_z| + \textcolor{red}{\vec{e}_z}\cdot \mqty|\textcolor{RoyalBlue}{a_x} & \textcolor{RoyalBlue}{a_y} \\ \textcolor{RoyalBlue}{b_x} & \textcolor{RoyalBlue}{b_y}|
$$

:::::::::::::::



---


:::::::::::::::{example} Eksempel 2
Gitt vektorene 

$$
\vec{a} = [1, 2, 3] \quad \text{og} \quad \vec{b} = [4, 5, 6]
$$

Finn $\vec{a} \times \vec{b}$.

::::{solution}
---
open:
---

$$
\begin{align*}
\vec{a} \times \vec{b} &= \mqty|\vec{e}_x & \vec{e}_y & \vec{e}_z \\ 1 & 2 & 3 \\ 4 & 5 & 6| \\
\\
&= \vec{e}_x \cdot \mqty|2 & 3 \\ 5 & 6| - \vec{e}_y \cdot \mqty|1 & 3 \\ 4 & 6| + \vec{e}_z \cdot \mqty|1 & 2 \\ 4 & 5| \\
\\
&= \vec{e}_x \cdot (2\cdot 6 - 3\cdot 5) - \vec{e}_y \cdot (1\cdot 6 - 3\cdot 4) + \vec{e}_z \cdot (1\cdot 5 - 2\cdot 4) \\
\\
&= \vec{e}_x \cdot (-3) - \vec{e}_y \cdot (-6) + \vec{e}_z \cdot (-3) \\
\\
&= -3 \vec{e}_x + 6 \vec{e}_y - 3 \vec{e}_z \\
\\
&= [-3, 6, -3]
\end{align*}
$$

Altså er $\vec{a} \times \vec{b} = [-3, 6, -3]$.
:::::::::::::::


---




## Geometrien til kryssproduktet



:::::::::::::::{summary} Geometriske egenskaper til kryssproduktet


:::{plot3d-2}
nocache:
width: 100%
align: right
fontsize: 24
let: ax = 3
let: ay = 0
let: az = 0
let: bx = 1
let: by = 3
let: bz = 0
let: cx = 0
let: cy = 0
let: cz = 3.5
vector: (0, 0, 0), (ax, ay, az), blue
vector: (0, 0, 0), (bx, by, bz), red
vector: (0, 0, 0), (cx, cy, cz), orange
vector: (0, 0, 0), (-cx, -cy, -cz), purple
ngon: [(0, 0, 0), (ax, ay, az), (ax + bx, ay + by, az + bz), (bx, by, bz)], color=blue, alpha=0.2, edgecolor=none
line-segment: start=(ax, ay, az), end=(ax + bx, ay + by, az + bz), style=dashed, color=gray
line-segment: start=(bx, by, bz), end=(ax + bx, ay + by, az + bz), style=dashed, color=gray
axis: off
xrange: (-1, 4)
yrange: (-1, 4)
zrange: (-4, 4)
azim: -50
elev: 40
text: at=(0.5 * (ax + bx), 0.5 * (ay + by), 0.5 * (az + bz)), value="$|\vec{a} \times \vec{b}|$", ha=center, va=center
text: at=(cx, cy, cz), value="$\vec{a} \times \vec{b}$", ha=center, va=bottom
text: at=(-cx, -cy, -cz), value="$\vec{b} \times \vec{a}$", ha=center, va=top
text: at=(0.5 * ax, 0.5 * ay, 0.5 * az - 0.1), value="$\vec{a}$", ha=right, va=top
text: at=(0.5 * bx, 0.5 * by, 0.5 * bz), value="$\vec{b}$", ha=right, va=bottom
angle: at=(0, 0, 0), dir1=(ax, ay, az), dir2=(bx, by, bz), radius=0.6, color=black
right-angle: at=(0, 0, 0), dir1=(ax, ay, az), dir2=(cx, cy, cz), size=0.4, color=black
right-angle: at=(0, 0, 0), dir1=(bx, by, bz), dir2=(cx, cy, cz), size=0.4, color=black
let: s = 0.18
text: at=(s * (ax + bx), s * (ay + by), s * (az + bz)), value="$\varphi$", ha=center, va=center
:::



Gitt to vektorer $\vec{a}$ og $\vec{b}$ med en vinkel $\varphi$ mellom seg, så er


1. $\abs{\vec{a} \times \vec{b}} = \abs{\vec{a}} \cdot \abs{\vec{b}} \cdot \sin \varphi$

2. Arealet av parallellogrammet spent ut av $\vec{a}$ og $\vec{b}$ er lik $\abs{\vec{a} \times \vec{b}}$

3. $\vec{a} \times \vec{b}$ står ortogonalt på både $\vec{a}$ og $\vec{b}$

4. $\vec{a} \times \vec{b} = - (\vec{b} \times \vec{a})$



:::{clear}
:::


::::{proof} Vis forklaring
De geometriske egenskapene til kryssproduktet kan ikke være avhengig av hvilket koordinatsystem vi velger. Vi velger derfor et enkelt koordinatsystem der $\vec{a}$ ligger langs $x$-aksen og $\vec{b}$ er rotert en vinkel $\varphi$ i forhold til $\vec{a}$ i $xy$-planet.

:::{plot}
nocache:
fontsize: 32
width: 40%
ticks: off
axis: equal
let: u = pi/4
vector: (0, 0), (1, 0), blue
vector: (0, 0), (cos(u), sin(u)), red
line-segment: (0, 0), (1, 0), dashed, white
line-segment: (0, 0), (cos(u), sin(u)), dashed, white
text: 0.5, - 0.1, "$\vec{a}$", center-center
text: 0.5 * cos(u) - 0.05, 0.5 * sin(u) + 0.05, "$\vec{b}$", center-center
let: ds = 0.2
angle-arc: (0, 0), ds, 0, u*180/pi
text: 1.4 * ds * cos(0.5 * u), 1.4 * ds * sin(0.5 * u), "$\varphi$", center-center
:::

Da kan vi skrive vektorene som

$$
\vec{a} = \left[\abs{\vec{a}}, 0, 0\right] \qog \vec{b} = \left[\abs{\vec{b}} \cdot \cos \varphi, \abs{\vec{b}} \cdot \sin \varphi, 0\right].
$$

Så regner vi ut kryssproduktet mellom de to vektorene:

$$
\begin{align*}
\vec{a} \times \vec{b} &= \mqty|\vec{e}_x & \vec{e}_y & \vec{e}_z \\ \abs{\vec{a}} & 0 & 0 \\ \abs{\vec{b}} \cdot \cos \varphi & \abs{\vec{b}} \cdot \sin \varphi & 0| \\
\\
&= \vec{e}_x \cdot (0) - \vec{e}_y \cdot (0) + \vec{e}_z \cdot (\abs{\vec{a}} \cdot \abs{\vec{b}} \cdot \sin \varphi)\\
\\
&= \mqty[0, 0, \abs{\vec{a}} \cdot \abs{\vec{b}} \cdot \sin \varphi]
\end{align*}
$$




**Formelen for lengden av vektoren**:

Lengden av kryssproduktet får vi da som:

$$
\abs{\vec{a} \times \vec{b}} = \abs{\vec{a}} \cdot \abs{\vec{b}} \cdot \sin \varphi
$$


**Arealet av et parallellogram**:


:::{plot}
nocache:
fontsize: 32
align: right
width: 100%
ticks: off
axis: off
axis: equal
let: u = pi/4
vector: (0, 0), (1, 0), blue
vector: (0, 0), (cos(u), sin(u)), red
line-segment: (0, 0), (1, 0), dashed, white
line-segment: (0, 0), (cos(u), sin(u)), dashed, white
line-segment: (1, 0), (1 + cos(u), sin(u)), dashed, black
line-segment: (cos(u), sin(u)), (1 + cos(u), sin(u)), dashed, black
line-segment: (cos(u), 0), (cos(u), sin(u)), dashdot, gray
text: 0.5, -0.2, "$\vec{a}$", center-center
text: 0.5 * cos(u) - 0.1, 0.5 * sin(u) + 0.1, "$\vec{b}$", center-center
let: ds = 0.2
angle-arc: (0, 0), ds, 0, u*180/pi
text: 1.4 * ds * cos(0.5 * u), 1.4 * ds * sin(0.5 * u), "$\varphi$", center-center
text: cos(u) + 0.2, 0.5 * sin(u), "$h$", center-center
let: dl = 0.1
line-segment: (cos(u) - dl, 0), (cos(u) - dl, dl), solid, gray
line-segment: (cos(u) - dl, dl), (cos(u), dl), solid, gray
:::

Fra figuren til høyre kan vi uttrykke høyden i parallellogrammet spent ut av $\vec{a}$ og $\vec{b}$ som

$$
\sin \varphi = \dfrac{h}{\abs{\vec{b}}} \liff h = \abs{\vec{b}} \cdot \sin \varphi
$$

Arealet av parallellogrammet er grunnlinje ganget med høyden, så vi har at 

$$
G_\mathrm{parallellogram} = \abs{\vec{a}} \cdot h = \abs{\vec{a}} \cdot \abs{\vec{b}} \cdot \sin \varphi = \abs{\vec{a} \times \vec{b}}
$$




**Ortogonalitet**:


Vi kan bekrefte at $\vec{a} \times \vec{b}$ står ortogonalt på både $\vec{a}$ og $\vec{b}$ ved å sjekke at prikkproduktet blir null:

$$
\vec{a} \cdot (\vec{a} \times \vec{b}) = \left[\abs{\vec{a}}, 0, 0\right] \cdot \left[0, 0, \abs{\vec{a}} \cdot \abs{\vec{b}} \cdot \sin \varphi\right] = 0
$$

og 

$$
\vec{b} \cdot (\vec{a} \times \vec{b}) = \left[\abs{\vec{b}} \cdot \cos \varphi, \abs{\vec{b}} \cdot \sin \varphi, 0\right] \cdot \left[0, 0, \abs{\vec{a}} \cdot \abs{\vec{b}} \cdot \sin \varphi\right] = 0
$$


**Antikommutativitet**:


At $\vec{a} \times \vec{b} = - (\vec{b} \times \vec{a})$ kan vi se ved å bytte om rekkefølgen på vektorene når vi regner ut kryssproduktet:

$$
\begin{align*}
\vec{b} \times \vec{a} &= \mqty|\vec{e}_x & \vec{e}_y & \vec{e}_z \\ \abs{\vec{b}} \cdot \cos \varphi & \abs{\vec{b}} \cdot \sin \varphi & 0 \\ \abs{\vec{a}} & 0 & 0| \\
\\
&= \vec{e}_x \cdot (0) - \vec{e}_y \cdot (0) + \vec{e}_z \cdot (-\abs{\vec{a}} \cdot \abs{\vec{b}} \cdot \sin \varphi)\\
\\
&= \mqty[0, 0, -\abs{\vec{a}} \cdot \abs{\vec{b}} \cdot \sin \varphi] \\
\\
&= - \mqty[0, 0, \abs{\vec{a}} \cdot \abs{\vec{b}} \cdot \sin \varphi] \\
\\
&= - (\vec{a} \times \vec{b})
\end{align*}
$$

::::

:::::::::::::::



---


:::::::::::::::{example} Eksempel 3
:::{plot3d-2}
nocache:
fontsize: 24
width: 100%
align: right
ngon: [(0, 0, 0), (1, 2, -2), (0, 5, 4), (-1, 3, 6)], color=blue, alpha=0.3
zrange: (-2, 8)
yrange: (-2, 6)
xrange: (-3, 5)
point: (0, 0, 0), black 
point: (1, 2, -2), black
point: (0, 5, 4), black
point: (-1, 3, 6), black
text: at=(0, 0, 0), value="$O$", ha=right, va=top
text: at=(1, 2, -2), value="$A$", ha=left, va=top
text: at=(0, 5, 4), value="$B$", ha=left, va=bottom
text: at=(-1, 3, 6), value="$C$", ha=right, va=bottom
grid: true
:::


Et parallellogram har hjørnene $O(0, 0, 0)$, $A(1, 2, -2)$, $B(0, 5, 4)$ og $C(-1, 3, 6)$.

Finn arealet av parallellogrammet.



::::{solution}
---
open:
---
Vi finner først to vektorer som spenner ut parallellogrammet. Disse er gitt ved 

$$
\lvec{OA} = [1, 2, -2] \quad \text{og} \quad \lvec{OC} = [-1, 3, 6]
$$

Deretter finner vi vektorproduktet:

$$
\begin{align*}
\lvec{OA} \times \lvec{OC} &= \mqty|\vec{e}_x & \vec{e}_y & \vec{e}_z \\ 1 & 2 & -2 \\ -1 & 3 & 6| \\
\\
&= \vec{e}_x \cdot \mqty|2 & -2 \\ 3 & 6| - \vec{e}_y \cdot \mqty|1 & -2 \\ -1 & 6| + \vec{e}_z \cdot \mqty|1 & 2 \\ -1 & 3| \\
\\
&= \vec{e}_x \cdot (12 - (-6)) - \vec{e}_y \cdot (6 - 2) + \vec{e}_z \cdot (3 - (-2)) \\ 
\\
&= 18 \vec{e}_x - 4 \vec{e}_y + 5 \vec{e}_z \\
\\
&= [18, -4, 5]
\end{align*}
$$

Arealet av parallellogrammet er da: 

$$
\abs{\lvec{OA} \times \lvec{OC}} = \sqrt{18^2 + (-4)^2 + 5^2} = \sqrt{365}
$$
::::


:::::::::::::::


---


## Areal
Vi kan bruke kryssproduktet til å finne arealet av flater i rommet. Dersom flaten ikke er et parallellogram, så er strategien alltid å dele opp flaten i trekanter og regne ut arealet av hver trekant. 


:::::::::::::::{summary} Areal av trekanter
:::{plot}
axis: equal
align: right
width: 100%
figsize: (4, 4)
let: Ax = 0
let: Ay = 0
let: Bx = 3
let: By = 0
let: Cx = 2
let: Cy = 2
point: (Ax, Ay)
point: (Bx, By)
point: (Cx, Cy)
vector: (Ax, Ay), (Bx, By), blue
vector: (Ax, Ay), (Cx, Cy), red
line-segment: (Bx, By), (Cx, Cy), dashed, gray
xmin: -0.5
xmax: 3.5
ymin: -0.5
ymax: 1.5
ticks: off
axis: off
text: 0.5 * Bx, 0, "$\vec{a}$", bottom-center
text: 0.5 * Cx, 0.5 * Cy, "$\vec{b}$", top-left
fontsize: 20
text: Ax, Ay, "$A$", bottom-left
text: Bx, By, "$B$", bottom-right
text: Cx, Cy, "$C$", top-right
lw: 1.5
:::

Gitt to vektorer $\vec{a}$ og $\vec{b}$, kan vi lage en arealvektor

$$
\vec{G} = \dfrac{1}{2} \cdot (\vec{a} \times \vec{b})
$$

som har lengde lik arealet av trekanten som spennes ut av $\vec{a}$ og $\vec{b}$. Arealet av trekanten er dermed gitt ved

$$
G = \dfrac{1}{2} \abs{\vec{a} \times \vec{b}}
$$


:::{clear}
:::

:::::{proof} Vis forklaring
Hvis $\vec{a}$ og $\vec{b}$ spenner ut et parallellogram, så er arealet av parallellogrammet lik $\abs{\vec{a} \times \vec{b}}$. Arealet av trekanten er bare halvparten av et slikt parallellogram. Ergo er arealet av trekanten gitt ved

$$
G = \dfrac{1}{2} \abs{\vec{a} \times \vec{b}}
$$

En vektor med denne lengden er da gitt ved 

$$
\vec{G} = \dfrac{1}{2} \cdot (\vec{a} \times \vec{b})
$$

som vi skal kalle for en **arealvektor** til trekanten.

:::::


:::::::::::::::


---


:::::::::::::::{example} Eksempel 4

:::{plot3d-2}
width: 100%
fontsize: 24
align: right
let: Ax = 1
let: Ay = 3
let: Az = 2
let: Bx = 4
let: By = 2
let: Bz = 1
let: Cx = 2
let: Cy = 5
let: Cz = 3
ngon: [(Ax, Ay, Az), (Bx, By, Bz), (Cx, Cy, Cz)], color=blue, alpha=0.3
zrange: (-2, 6)
yrange: (-2, 6)
xrange: (-2, 4)
point: (Ax, Ay, Az), black
point: (Bx, By, Bz), black
point: (Cx, Cy, Cz), black
text: at=(Ax, Ay, Az), value="$A$", ha=right, va=top
text: at=(Bx, By, Bz), value="$B$", ha=left, va=top
text: at=(Cx, Cy, Cz), value="$C$", ha=left, va=bottom
grid: true
:::


En trekant har hjørnene $A(1, 3, 2)$, $B(4, 2, 1)$ og $C(2, 5, 3)$.

Finn arealet av trekanten.


::::{solution}
---
open:
---
Vi finner to vektorer som spenner ut trekanten. Vi velger $\lvec{AB}$ og $\lvec{AC}$:

$$
\lvec{AB} = [4 - 1, 2 - 3, 1 - 2] = [3, -1, -1]
$$

$$
\lvec{AC} = [2 - 1, 5 - 3, 3 - 2] = [1, 2, 1]
$$

Så regner vi ut kryssproduktet av de to vektorene:

$$
\begin{align*}
\lvec{AB} \times \lvec{AC} &= \mqty|\vec{e}_x & \vec{e}_y & \vec{e}_z \\ 3 & -1 & -1 \\ 1 & 2 & 1| \\
\\
&= \vec{e}_x \cdot \mqty|-1 & -1 \\ 2 & 1| - \vec{e}_y \cdot \mqty|3 & -1 \\ 1 & 1| + \vec{e}_z \cdot \mqty|3 & -1 \\ 1 & 2| \\
\\
&= \vec{e}_x \cdot (-1 + 2) - \vec{e}_y \cdot (3 + 1) + \vec{e}_z \cdot (6 + 1) \\
\\
&= \vec{e}_x - 4\vec{e}_y + 7\vec{e}_z \\
\\
&= \mqty[1, -4, 7]
\end{align*}
$$

Lengden av denne vektoren er

$$
\abs{\lvec{AB} \times \lvec{AC}} = \sqrt{1^2 + (-4)^2 + 7^2} = \sqrt{66}
$$

Altså er arealet av trekanten:

$$
G = \dfrac{1}{2} \abs{\lvec{AB} \times \lvec{AC}} = \dfrac{1}{2} \sqrt{66}
$$

::::


:::::::::::::::


---


:::::::::::::::{example} Eksempel 5
:::{plot3d-2}
width: 100%
align: right
let: Ax = 0
let: Ay = 0
let: Az = 1
let: Bx = 2
let: By = 4
let: Bz = 2
let: Cx = -1
let: Cy = 7
let: Cz = 5
let: Dx = -5
let: Dy = 1
let: Dz = 4
ngon: [(Ax, Ay, Az), (Bx, By, Bz), (Cx, Cy, Cz), (Dx, Dy, Dz)], color=blue, alpha=0.3
zrange: (-2, 6)
xrange: (-6, 4)
yrange: (-2, 8)
fontsize: 24
text: at=(Ax, Ay, Az), value="$A$", ha=right, va=top
text: at=(Bx, By, Bz), value="$B$", ha=left, va=center
text: at=(Cx, Cy, Cz), value="$C$", ha=left, va=bottom
text: at=(Dx, Dy, Dz), value="$D$", ha=right, va=bottom
point: (Ax, Ay, Az), black
point: (Bx, By, Bz), black
point: (Cx, Cy, Cz), black
point: (Dx, Dy, Dz), black
grid: true
:::


En firkant har hjørnene $A(0, 0, 1)$, $B(2, 4, 2)$, $C(-1, 7, 5)$ og $D(-5, 1, 4)$.


Finn arealet av firkanten.


::::{solution}
---
open:
---
Vi deler opp firkanten i to mindre trekanter $ABC$ og $ACD$. Vi finner først arealet av trekanten $ABC$. Vi velger vektorene $\lvec{AB}$ og $\lvec{AC}$ til å spenne ut trekanten:

$$
\lvec{AB} = [2 - 0, 4 - 0, 2 - 1] = [2, 4, 1]
$$

$$
\lvec{AC} = [-1 - 0, 7 - 0, 5 - 1] = [-1, 7, 4]
$$

Så regner vi ut kryssproduktet:

$$
\begin{align*}
\lvec{AB} \times \lvec{AC} &= \mqty|\vec{e}_x & \vec{e}_y & \vec{e}_z \\ 2 & 4 & 1 \\ -1 & 7 & 4| \\
\\
&= \vec{e}_x \cdot \mqty|4 & 1 \\ 7 & 4| - \vec{e}_y \cdot \mqty|2 & 1 \\ -1 & 4| + \vec{e}_z \cdot \mqty|2 & 4 \\ -1 & 7| \\
\\
&= \vec{e}_x \cdot (16 - 7) - \vec{e}_y \cdot (8 + 1) + \vec{e}_z \cdot (14 + 4) \\
\\
&= 9 \vec{e}_x - 9\vec{e}_y + 18\vec{e}_z \\
\\
&= \mqty[9, -9, 18] \\
\\
&= 9 \cdot \mqty[1, -1, 2]
\end{align*}
$$

Lengden av denne vektoren er

$$
\abs{\lvec{AB} \times \lvec{AC}} = \abs{9\cdot  [1, -1, 2]} = 9 \cdot \sqrt{1^2 + (-1)^2 + 2^2} = 9 \sqrt{6}
$$

Dermed er arealet av trekanten $ABC$:

$$
G_{ABC} = \dfrac{1}{2} \abs{\lvec{AB} \times \lvec{AC}} = \dfrac{1}{2} \cdot 9 \sqrt{6} = \dfrac{9}{2} \sqrt{6}
$$


Så finner vi arealet av trekanten $ACD$. Vi velger vektorene $\lvec{AC}$ og $\lvec{AD}$ til å spenne ut trekanten:

$$
\lvec{AD} = [-5 - 0, 1 - 0, 4 - 1] = [-5, 1, 3]
$$

Så regner vi ut kryssproduktet:

$$
\begin{align*}
\lvec{AC} \times \lvec{AD} &= \mqty|\vec{e}_x & \vec{e}_y & \vec{e}_z \\ -1 & 7 & 4 \\ -5 & 1 & 3| \\
\\
&= \vec{e}_x \cdot \mqty|7 & 4 \\ 1 & 3| - \vec{e}_y \cdot \mqty|-1 & 4 \\ -5 & 3| + \vec{e}_z \cdot \mqty|-1 & 7 \\ -5 & 1| \\
\\
&= \vec{e}_x \cdot (21 - 4) - \vec{e}_y \cdot (-3 + 20) + \vec{e}_z \cdot (-1 + 35) \\
\\
&= 17 \vec{e}_x - 17\vec{e}_y + 34\vec{e}_z \\
\\
&= \mqty[17, -17, 34] \\
\\
&= 17 \cdot \mqty[1, -1, 2]
\end{align*}
$$

Lengden av denne vektoren er

$$
\abs{\lvec{AC} \times \lvec{AD}} = \abs{17\cdot [1, -1, 2]} = 17 \cdot \sqrt{1^2 + (-1)^2 + 2^2} = 17 \sqrt{6}
$$

Dermed er arealet av trekanten $ACD$:

$$
G_{ACD} = \dfrac{1}{2} \abs{\lvec{AC} \times \lvec{AD}} = \dfrac{1}{2} \cdot 17 \sqrt{6} = \dfrac{17}{2} \sqrt{6}
$$

Arealet av firkanten er summen av de to arealene:

$$
G_{ABCD} = G_{ABC} + G_{ACD} = \dfrac{9}{2} \sqrt{6} + \dfrac{17}{2} \sqrt{6} = \dfrac{26}{2} \sqrt{6} = 13 \sqrt{6}
$$


::::


:::::::::::::::



## Volum
Når vi skal regne ut volum av ulike romlegemer, så får vi bruk for kryssproduktet. Med kryssproduktet kan vi lage oss en **grunnflatevektor** $\vec{G}$ som står ortogonalt på grunnflaten til romlegemet og har lengde lik arealet av grunnflaten. Sammen med prikkproduktet, kan vi da regne ut volumet av to typer romlegemer: Prismer og pyramider.


### Prismer

:::{plot3d-2}
width: 100%
align: right
fontsize: 24
ylabel: none
xrange: (0, 5)
yrange: (0, 7)
zrange: (-1, 4.5)
let: ax = 3
let: ay = 0
let: az = 0
let: bx = 0
let: by = 4
let: bz = 0
let: Ax = 1
let: Ay = 1
let: Az = 0
let: Bx = Ax + ax
let: By = Ay + ay
let: Bz = Az + az
let: Cx = Bx + bx
let: Cy = By + by
let: Cz = Bz + bz
let: Dx = Cx - ax
let: Dy = Cy - ay
let: Dz = Cz - az
let: hx = 2
let: hy = 0
let: hz = 4
prism: base=[(Ax, Ay, Az), (Bx, By, Bz), (Cx, Cy, Cz), (Dx, Dy, Dz)], vector=(hx, hy, hz), color=blue, alpha=0.25
axis: off
:::

Et prisme har en grunnflate med areal $G$ og en høyde $h$. For å lage et prisme tar vi en kopi av grunnflaten og flytter den oppover med en vektor $\vec{c}$. Se figuren til høyre. Volumet av prismet er da gitt ved

$$
V = G \cdot h
$$

:::{clear}
:::

Men målet vårt er å bruke vektorregning til å regne ut volumet:

:::::::::::::::{summary} Volumet av et prisme


:::{plot3d-2}
width: 100%
align: right
fontsize: 24
ylabel: none
xrange: (0, 5)
yrange: (0, 7)
zrange: (-1, 7)
let: ax = 3
let: ay = 0
let: az = 0
let: bx = 0
let: by = 4
let: bz = 0
let: Ax = 1
let: Ay = 1
let: Az = 0
let: Bx = Ax + ax
let: By = Ay + ay
let: Bz = Az + az
let: Cx = Bx + bx
let: Cy = By + by
let: Cz = Bz + bz
let: Dx = Cx - ax
let: Dy = Cy - ay
let: Dz = Cz - az
let: hx = 2
let: hy = 0
let: hz = 4
ngon: [(Ax, Ay, Az), (Bx, By, Bz), (Cx, Cy, Cz), (Dx, Dy, Dz)], color=blue, alpha=0.25, edgecolor=none
line-segment: start=(Ax, Ay, Az), end=(Bx, By, Bz), linestyle=solid, color=black
line-segment: start=(Bx, By, Bz), end=(Cx, Cy, Cz), linestyle=solid, color=black
line-segment: start=(Cx, Cy, Cz), end=(Dx, Dy, Dz), linestyle=dashdot, color=black
line-segment: start=(Ax, Ay, Az), end=(Ax + hx, Ay + hy, Az + hz), linestyle=solid, color=black
line-segment: start=(Bx, By, Bz), end=(Bx + hx, By + hy, Bz + hz), linestyle=solid, color=black
line-segment: start=(Cx, Cy, Cz), end=(Cx + hx, Cy + hy, Cz + hz), linestyle=solid, color=black
line-segment: start=(Dx, Dy, Dz), end=(Dx + hx, Dy + hy, Dz + hz), linestyle=dashdot, color=black
line-segment: start=(Ax + hx, Ay + hy, Az + hz), end=(Bx + hx, By + hy, Bz + hz), linestyle=solid, color=black
line-segment: start=(Bx + hx, By + hy, Bz + hz), end=(Cx + hx, Cy + hy, Cz + hz), linestyle=solid, color=black
line-segment: start=(Cx + hx, Cy + hy, Cz + hz), end=(Dx + hx, Dy + hy, Dz + hz), linestyle=solid, color=black
line-segment: start=(Dx + hx, Dy + hy, Dz + hz), end=(Ax + hx, Ay + hy, Az + hz), linestyle=solid, color=black
vector: (Ax, Ay, Az), (Ax + hx, Ay + hy, Az + hz), red
vector: (Ax, Ay, Az), (Bx, By, Bz), blue
vector: (Ax, Ay, Az), (Dx, Dy, Dz), blue
text: at=(Ax + 0.7 * hx, Ay + 0.7 * hy, Az + 0.7 * hz), value="$\vec{c}$", ha=right, va=bottom
text: at=((Ax + Bx + Cx + Dx)/4, (Ay + By + Cy + Dy)/4, (Az + Bz + Cz + Dz)/4), value="$|\vec{G}|$", ha=center, va=center
text: at=(0.5 * (Ax + Bx), 0.5 * (Ay + By), 0.5 * (Az + Bz)), value="$\vec{a}$", ha=right, va=top
text: at=(0.5 * (Ax + Dx), 0.5 * (Ay + Dy), 0.5 * (Az + Dz)), value="$\vec{b}$", ha=right, va=bottom
let: s = 0.4
let: Gx = s * (ay * bz - az * by)
let: Gy = s * (az * bx - ax * bz)
let: Gz = s * (ax * by - ay * bx)
vector: (Ax, Ay, Az), (Ax + Gx, Ay + Gy, Az + Gz), blue
text: at=(Ax + Gx, Ay + Gy, Az + Gz), value="$\vec{G}$", ha=center, va=bottom
ticks: off
azim: -60
axis: off
:::


Volumet av et prisme med grunnflatevektor $\vec{G}$ og en vektor $\vec{c}$ fra et hjørne på grunnflaten til et hjørne på toppflaten er gitt ved 

$$
V = \abs{\vec{G} \cdot \vec{c}}
$$


:::{table}
labels: Grunnflate, $\vec{G}$
Parallellogram, $\vec{G} = \vec{a} \times \vec{b}$
Trekant, $\vec{G} = \dfrac{1}{2} \vec{a} \times \vec{b}$
:::



:::::{proof} Vis forklaring


Volumet av et prisme er generelt sett gitt ved 

$$
V = \underbrace{G}_{\mathrm{grunnflateareal}} \cdot \underbrace{h}_{\mathrm{høyde}} = \abs{\vec{G}} \cdot h
$$



:::{plot}
nocache:
axis: off
figsize: (3, 6)
width: 70%
axis: equal
align: right
let: Gx = 0
let: Gy = 1
let: hx = 0.6
let: hy = 0.8
vector: (0, 0), (Gx, Gy), blue
vector: (0, 0), (hx, hy), red
text: Gx, Gy + 0.1, "$\vec{G}$", center-center
text: hx, hy + 0.1, "$\vec{c}$", center-center
let: theta = atan(hy / hx)
let: phi = acos((Gx * hx + Gy * hy) / (sqrt(Gx^2 + Gy^2) * sqrt(hx^2 + hy^2)))
angle-arc: (0, 0), 0.2, theta * 180 / pi, (theta + phi) * 180/pi, black
lw: 1.5
text: 0.3 * cos((2*theta + phi)/2), 0.3 * sin((2*theta + phi)/2), "$\varphi$", center-center
line-segment: (hx, hy), (0, hy), dashdot, gray
let: ds = 0.1
line-segment: (0, hy - ds), (ds, hy - ds), solid, gray
line-segment: (ds, hy - ds), (ds, hy), solid, gray
bar: (-ds, 0), hy, vertical
text: -1.5*ds, 0.5 * hy, "$h$", center-center
:::




Gitt en vinkel $\varphi$ mellom $\vec{G}$ og $\vec{c}$, vil høyden $h$ til prismet være gitt ved

$$
\cos \varphi = \frac{h}{\abs{\vec{c}}} \liff h = \abs{\vec{c}} \cdot \cos \varphi
$$

Dersom vinkelen mellom $\vec{G}$ og $\vec{c}$ er større enn $90\degree$, så vil $h$ bli en negativ størrelse. For at volumet skal bli positiv, tar vi derfor absoluttverdien av prikkproduktet for å få et positivt volum:

$$
V = \abs{\vec{G}} \cdot \abs{\vec{c}} \cdot \abs{\cos \varphi} = \abs{\vec{G} \cdot \vec{c}}
$$





:::::


:::::::::::::::


---


:::::::::::::::{example} Eksempel 6
:::{plot3d-2}
width: 100%
align: right
prism: base=[(1, 1, 0), (4, 1, 0), (4, 5, 0)], vector=(1, 1, 3), color=blue, alpha=0.25
xrange: (-1, 6)
yrange: (-1, 7)
zrange: (-1, 4)
grid: true
fontsize: 24
:::


Et prisme har hjørnene $A(1, 1, 0)$, $B(4, 1, 0)$, $C(4, 5, 0)$ i grunnflaten. Toppflaten har hjørnene $D(2, 2, 3)$, $E(5, 2, 3)$ og $F(5, 6, 3)$.

Finn volumet av prismet.


::::{solution}
---
open:
---
Grunnflaten er en trekant. Grunnflatevektoren $\vec{G}$ kan da skrives som

$$
\vec{G} = \dfrac{1}{2} \lvec{AB} \times \lvec{AC}
$$

Vi har at 

$$
\lvec{AB} = [4 - 1, 1 - 1, 0 - 0] = [3, 0, 0] \qog \lvec{AC} = [4 - 1, 5 - 1, 0 - 0] = [3, 4, 0]
$$

Vi regner ut kryssproduktet av de to vektorene:

$$
\begin{align*}
\lvec{AB} \times \lvec{AC} &= \mqty|\vec{e}_x & \vec{e}_y & \vec{e}_z \\ 3 & 0 & 0 \\ 3 & 4 & 0| \\
\\
&= \vec{e}_x \cdot \mqty|0 & 0 \\ 4 & 0| - \vec{e}_y \cdot \mqty|3 & 0 \\ 3 & 0| + \vec{e}_z \cdot \mqty|3 & 0 \\ 3 & 4| \\
\\
&= \vec{e}_x \cdot (0\cdot 0 - 0\cdot 4) - \vec{e}_y \cdot (3\cdot 0 - 0\cdot 3) + \vec{e}_z \cdot (3\cdot 4 - 0\cdot 3) \\
\\
&= 0 \cdot \vec{e}_x - 0 \cdot \vec{e}_y + 12 \cdot \vec{e}_z \\
\\
&= [0, 0, 12]
\end{align*}
$$

Grunnflatevektoren blir da

$$
\vec{G} = \dfrac{1}{2} \lvec{AB} \times \lvec{AC} = \dfrac{1}{2} [0, 0, 12] = [0, 0, 6]
$$

Så finner vi en vektor som peker fra et punkt på grunnflaten til et punkt på toppflaten. Vi velger 

$$
\lvec{c} = \lvec{AD} = [2 - 1, 2 - 1, 3 - 0] = [1, 1, 3]
$$

Volumet av prismet er da 

$$
V = \abs{\vec{G} \cdot \vec{c}} = \abs{[0, 0, 6] \cdot [1, 1, 3]} = \abs{0 + 0 + 18} = 18
$$


Det spiller ingen rolle hvilke to punkter vi velger ut. Vi kunne også brukt $\lvec{AE}$ for eksempel, som gir

$$
\lvec{AE} = [5 - 1, 2 - 1, 3 - 0] = [4, 1, 3]
$$

Da hadde vi fått:

$$
V = \abs{\vec{G} \cdot \lvec{AE}} = \abs{[0, 0, 6] \cdot [4, 1, 3]} = \abs{0 + 0 + 18} = 18
$$

Prikkproduktet henter ut den riktige høyden automatisk, så vi trenger ikke bekymre oss for hvilken vektor vi bruker så lenge den starter på grunnflaten og ender på toppflaten.

::::


:::::::::::::::



### Pyramider

:::{plot3d-2}
nocache:
width: 100%
align: right
fontsize: 24
ylabel: none
xrange: (0, 5)
yrange: (0, 7)
zrange: (-1, 4.5)
let: ax = 3
let: ay = 0
let: az = 0
let: bx = 0
let: by = 4
let: bz = 0
let: Ax = 1
let: Ay = 1
let: Az = 0
let: Bx = Ax + ax
let: By = Ay + ay
let: Bz = Az + az
let: Cx = Bx + bx
let: Cy = By + by
let: Cz = Bz + bz
let: Dx = Cx - ax
let: Dy = Cy - ay
let: Dz = Cz - az
let: hx = 1
let: hy = 1
let: hz = 4
let: Tx = Ax + hx
let: Ty = Ay + hy
let: Tz = Az + hz
ngon: [(Ax, Ay, Az), (Bx, By, Bz), (Cx, Cy, Cz), (Dx, Dy, Dz)], color=blue, alpha=0.25, edgecolor=none
line-segment: start=(Ax, Ay, Az), end=(Bx, By, Bz), linestyle=solid, color=black
line-segment: start=(Bx, By, Bz), end=(Cx, Cy, Cz), linestyle=solid, color=black
line-segment: start=(Cx, Cy, Cz), end=(Dx, Dy, Dz), linestyle=dashdot, color=black
line-segment: start=(Ax, Ay, Az), end=(Tx, Ty, Tz), linestyle=solid, color=black
line-segment: start=(Bx, By, Bz), end=(Tx, Ty, Tz), linestyle=solid, color=black
line-segment: start=(Cx, Cy, Cz), end=(Tx, Ty, Tz), linestyle=solid, color=black
line-segment: start=(Dx, Dy, Dz), end=(Tx, Ty, Tz), linestyle=dashdot, color=black
line-segment: start=(Ax, Ay, Az), end=(Dx, Dy, Dz), linestyle=dashdot, color=black
text: at=((Ax + Bx + Cx + Dx)/4, (Ay + By + Cy + Dy)/4, (Az + Bz + Cz + Dz)/4), value="$G$", ha=center, va=center
ticks: off
azim: -65
axis: off
let: Gx = s * (ay * bz - az * by)
let: Gy = s * (az * bx - ax * bz)
let: Gz = s * (ax * by - ay * bx)
normal-segment: point=(Tx, Ty, Tz), plane-normal=(0, 0, 1), plane-point=(Ax, Ay, Az), style=dashed, color=gray, points=false
text: at=(Tx, Ty, 0.5 * Tz), value="$h$", ha=right, va=center
text: at=(Tx, Ty, Tz), value="$T$", ha=center, va=bottom
:::


En pyramide består av en grunnflate med areal $G$ og et toppunkt $T$ som ligger en høyde $h$ over grunnflaten. Volumet av pyramiden er da gitt ved 

$$
V = \dfrac{G \cdot h}{3}
$$

:::{clear}
:::



:::::::::::::::{summary} Volumet av en pyramide

:::{plot3d-2}
width: 100%
align: right
fontsize: 24
ylabel: none
xrange: (0, 5)
yrange: (0, 7)
zrange: (-1, 7)
let: ax = 3
let: ay = 0
let: az = 0
let: bx = 0
let: by = 4
let: bz = 0
let: Ax = 1
let: Ay = 1
let: Az = 0
let: Bx = Ax + ax
let: By = Ay + ay
let: Bz = Az + az
let: Cx = Bx + bx
let: Cy = By + by
let: Cz = Bz + bz
let: Dx = Cx - ax
let: Dy = Cy - ay
let: Dz = Cz - az
let: hx = 2
let: hy = 0
let: hz = 4
let: Tx = Ax + hx
let: Ty = Ay + hy
let: Tz = Az + hz
ngon: [(Ax, Ay, Az), (Bx, By, Bz), (Cx, Cy, Cz), (Dx, Dy, Dz)], color=blue, alpha=0.25, edgecolor=none
line-segment: start=(Ax, Ay, Az), end=(Bx, By, Bz), linestyle=solid, color=black
line-segment: start=(Bx, By, Bz), end=(Cx, Cy, Cz), linestyle=solid, color=black
line-segment: start=(Cx, Cy, Cz), end=(Dx, Dy, Dz), linestyle=dashdot, color=black
line-segment: start=(Ax, Ay, Az), end=(Tx, Ty, Tz), linestyle=solid, color=black
line-segment: start=(Bx, By, Bz), end=(Tx, Ty, Tz), linestyle=solid, color=black
line-segment: start=(Cx, Cy, Cz), end=(Tx, Ty, Tz), linestyle=solid, color=black
line-segment: start=(Dx, Dy, Dz), end=(Tx, Ty, Tz), linestyle=dashdot, color=black
vector: (Ax, Ay, Az), (Ax + hx, Ay + hy, Az + hz), red
vector: (Ax, Ay, Az), (Bx, By, Bz), blue
vector: (Ax, Ay, Az), (Dx, Dy, Dz), blue
text: at=(Ax + 0.7 * hx, Ay + 0.7 * hy, Az + 0.7 * hz), value="$\vec{c}$", ha=right, va=bottom
text: at=((Ax + Bx + Cx + Dx)/4, (Ay + By + Cy + Dy)/4, (Az + Bz + Cz + Dz)/4), value="$|\vec{G}|$", ha=center, va=center
text: at=(0.5 * (Ax + Bx), 0.5 * (Ay + By), 0.5 * (Az + Bz)), value="$\vec{a}$", ha=right, va=top
text: at=(0.5 * (Ax + Dx), 0.5 * (Ay + Dy), 0.5 * (Az + Dz)), value="$\vec{b}$", ha=right, va=bottom
let: s = 0.4
let: Gx = s * (ay * bz - az * by)
let: Gy = s * (az * bx - ax * bz)
let: Gz = s * (ax * by - ay * bx)
vector: (Ax, Ay, Az), (Ax + Gx, Ay + Gy, Az + Gz), blue
text: at=(Ax + Gx, Ay + Gy, Az + Gz), value="$\vec{G}$", ha=center, va=bottom
ticks: off
azim: -65
axis: off
text: at=(Tx, Ty, Tz), value="$T$", ha=center, va=bottom
:::




Volumet av en pyramide med grunnflatevektor $\vec{G}$ og en vektor $\vec{c}$ fra et punkt i grunnflaten til toppunktet $T$ er gitt ved

$$
V = \dfrac{\abs{\vec{G} \cdot \vec{c}}}{3}
$$

:::{table}
labels: Grunnflate, $\vec{G}$
Parallellogram, $\vec{G} = \vec{a} \times \vec{b}$
Trekant, $\vec{G} = \dfrac{1}{2} \vec{a} \times \vec{b}$
:::



:::::{proof}
Volumet av en pyramide med grunnflate $G$ og høyde $h$ er $1/3$ av volumet av et prisme med samme grunnflate og høyde. Siden volumet av et prisme kan skrives som 

$$
V_{\text{prisme}} = \abs{\vec{G} \cdot \vec{c}}
$$

må volumet av en pyramide være $1/3$ av denne størrelsen som gir:

$$
V_{\text{pyramide}} = \dfrac{V_{\text{prisme}}}{3} = \dfrac{\abs{\vec{G} \cdot \vec{c}}}{3}
$$
:::::


:::::::::::::::



---



:::::::::::::::{example} Eksempel 7


:::{plot3d-2}
width: 100%
align: right
xrange: (-1, 5)
yrange: (-1, 5)
zrange: (-1, 6)
let: Ax = 1
let: Ay = 0
let: Az = 0
let: Bx = 3
let: By = 1
let: Bz = 0
let: Cx = 1
let: Cy = 4
let: Cz = 0
let: Tx = -2
let: Ty = 3
let: Tz = 4
pyramid: apex=(Tx, Ty, Tz), base=[(Ax, Ay, Az), (Bx, By, Bz), (Cx, Cy, Cz)], base-color=blue, side-color=none, alpha=0.8
fontsize: 24
grid: true
:::



En pyramide $ABCT$ er gitt ved punktene $A(1, 0, 0)$, $B(3, 1, 0)$, $C(1, 4, 0)$ og $T(-2, 3, 4)$. 

Finn volumet av pyramiden.



::::{solution}
---
open:
---
Først finner vi grunnflatevektoren $\vec{G}$. Grunnflaten er en trekant, så grunnflatevektoren er gitt ved 

$$
\vec{G} = \dfrac{1}{2} \lvec{AB} \times \lvec{AC}
$$

Vi har at 

$$
\lvec{AB} = [3 - 1, 1 - 0, 0 - 0] = [2, 1, 0]
$$

$$
\lvec{AC} = [1 - 1, 4 - 0, 0 - 0] = [0, 4, 0]
$$

Kryssproduktet av de to vektorene er da: 

$$
\begin{align*}
\lvec{AB} \times \lvec{AC} &= \mqty|\vec{e}_x & \vec{e}_y & \vec{e}_z \\ 2 & 1 & 0 \\ 0 & 4 & 0| \\
\\
&= \vec{e}_x \cdot \mqty|1 & 0 \\ 4 & 0| - \vec{e}_y \cdot \mqty|2 & 0 \\ 0 & 0| + \vec{e}_z \cdot \mqty|2 & 1 \\ 0 & 4| \\
\\
&= \vec{e}_x \cdot (1\cdot 0 - 0\cdot 4) - \vec{e}_y \cdot (2\cdot 0 - 0\cdot 0) + \vec{e}_z \cdot (2\cdot 4 - 1\cdot 0) \\
\\
&= 0 \cdot \vec{e}_x - 0 \cdot \vec{e}_y + 8 \cdot \vec{e}_z \\
\\
&= [0, 0, 8]
\end{align*}
$$

Dermed er grunnflatevektoren


$$
\vec{G} = \dfrac{1}{2} \mqty[0, 0, 8] = \mqty[0, 0, 4]
$$


En vektor som peker fra et hjørne i grunnflaten til toppunktet er gitt ved

$$
\vec{c} = \lvec{AT} = [-2 - 1, 3 - 0, 4 - 0] = [-3, 3, 4]
$$

Skalarproduktet mellom $\vec{G}$ og $\vec{c}$ er da:

$$
\vec{G} \cdot \vec{c} = [0, 0, 4] \cdot [-3, 3, 4] = 0\cdot(-3) + 0\cdot 3 + 4\cdot 4 = 16
$$

Dermed er volumet av pyramiden:

$$
V = \dfrac{\abs{\vec{G} \cdot \vec{c}}}{3} = \dfrac{\abs{16}}{3} = \dfrac{16}{3}
$$
::::

:::::::::::::::



---


Når en pyramide har en mer komplisert grunnflate, deler vi opp grunnflaten i mindre trekanter. Da blir pyramiden bygget opp av flere mindre pyramider med trekantede grunnflater. Så finner vi volumet av hver av dem og legger dem sammen.



:::::::::::::::{example} Eksempel 8
:::{plot3d-2}
nocache:
width: 100%
align: right
xrange: (-2, 3)
yrange: (-1, 3)
zrange: (-2, 7)
pyramid: apex=(2, 1, 6), base=[(0, 0, 0), (1, 0, 0), (2, 1, 0), (0, 2, 0)], base-color=blue, side-color=none, alpha=0.8
fontsize: 24
elev: 40
azim: -40
grid: true
:::


En pyramide $ABCDT$ er gitt ved punktene $A(0, 0, 0)$, $B(1, 0, 0)$, $C(2, 1, 0)$, $D(0, 2, 0)$ og $T(2, 1, 6)$.

Finn volumet av pyramiden.



::::{solution}
---
open:
---
Grunnflaten $ABCD$ er en firkant. Vi deler den opp i to trekanter $ABC$ og $ACD$. Vi finner først grunnflatevektoren $\vec{G}_{ABC}$ til trekanten $ABC$. Grunnflatevektoren er gitt ved

$$
\vec{G}_{ABC} = \dfrac{1}{2} \lvec{AB} \times \lvec{AC}
$$

Vi har at 

$$
\lvec{AB} = [1 - 0, 0 - 0, 0 - 0] = [1, 0, 0]
$$

$$
\lvec{AC} = [2 - 0, 1 - 0, 0 - 0] = [2, 1, 0]
$$

Kryssproduktet av de to vektorene er da: 

$$
\begin{align*}
\lvec{AB} \times \lvec{AC} &= \mqty|\vec{e}_x & \vec{e}_y & \vec{e}_z \\ 1 & 0 & 0 \\ 2 & 1 & 0| \\
\\
&= \vec{e}_x \cdot \mqty|0 & 0 \\ 1 & 0| - \vec{e}_y \cdot \mqty|1 & 0 \\ 2 & 0| + \vec{e}_z \cdot \mqty|1 & 0 \\ 2 & 1| \\
\\
&= \vec{e}_x \cdot (0\cdot 0 - 0\cdot 1) - \vec{e}_y \cdot (1\cdot 0 - 0\cdot 2) + \vec{e}_z \cdot (1\cdot 1 - 0\cdot 2) \\
\\
&= 0 \cdot \vec{e}_x - 0 \cdot \vec{e}_y + 1 \cdot \vec{e}_z \\
\\
&= [0, 0, 1]
\end{align*}
$$

Dermed er grunnflatevektoren $\vec{G}_{ABC} = \dfrac{1}{2} \mqty[0, 0, 1] = \mqty[0, 0, \dfrac{1}{2}]$.

Volumet av pyramiden med grunnflate $ABC$ og toppunkt $T$ er da gitt ved

$$
V_{ABCT} = \dfrac{\abs{\vec{G}_{ABC} \cdot \lvec{AT}}}{3}
$$

Prikkproduktet mellom $\vec{G}_{ABC}$ og $\lvec{AT}$ er gitt ved

$$
\vec{G}_{ABC} \cdot \lvec{AT} = \mqty[0, 0, \dfrac{1}{2}] \cdot [2, 1, 6] = 0\cdot 2 + 0\cdot 1 + \dfrac{1}{2}\cdot 6 = 3
$$

Altså er volumet av pyramiden med grunnflate $ABC$ og toppunkt $T$:

$$
V_{ABCT} = \dfrac{\abs{3}}{3} = 1
$$

Så finner vi grunnflatevektoren $\vec{G}_{ACD}$ til trekanten $ACD$. Grunnflatevektoren er gitt ved

$$
\vec{G}_{ACD} = \dfrac{1}{2} \lvec{AC} \times \lvec{AD}
$$

Vi har at $\lvec{AD} = [0, 2, 0]$. Kryssproduktet av de to vektorene er da:

$$
\begin{align*}
\lvec{AC} \times \lvec{AD} &= \mqty|\vec{e}_x & \vec{e}_y & \vec{e}_z \\ 2 & 1 & 0 \\ 0 & 2 & 0| \\
\\
&= \vec{e}_x \cdot \mqty|1 & 0 \\ 2 & 0| - \vec{e}_y \cdot \mqty|2 & 0 \\ 0 & 0| + \vec{e}_z \cdot \mqty|2 & 1 \\ 0 & 2| \\
\\
&= \vec{e}_x \cdot (1\cdot 0 - 0\cdot 2) - \vec{e}_y \cdot (2\cdot 0 - 0\cdot 0) + \vec{e}_z \cdot (2\cdot 2 - 1\cdot 0) \\
\\
&= 0 \cdot \vec{e}_x - 0 \cdot \vec{e}_y + 4 \cdot \vec{e}_z \\
\\
&= [0, 0, 4]
\end{align*}
$$

Altså er grunnflatevektoren $\vec{G}_{ACD} = \dfrac{1}{2} \mqty[0, 0, 4] = \mqty[0, 0, 2]$. Prikkproduktet mellom $\vec{G}_{ACD}$ og $\lvec{AT}$ er gitt ved

$$
\vec{G}_{ACD} \cdot \lvec{AT} = [0, 0, 2] \cdot [2, 1, 6] = 0\cdot 2 + 0\cdot 1 + 2\cdot 6 = 12
$$

Altså er volumet av pyramiden med grunnflate $ACD$ og toppunkt $T$:

$$
V_{ACDT} = \dfrac{\abs{\vec{G}_{ACD} \cdot \lvec{AT}}}{3} = \dfrac{\abs{12}}{3} = 4
$$

Volumet av hele pyramiden er dermed

$$
V_{ABCDT} = V_{ABCT} + V_{ACDT} = 1 + 4 = 5
$$
::::


:::::::::::::::
