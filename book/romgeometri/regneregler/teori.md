# Vektorer i 3D


:::{goals}
* Utforske og forstå regneregler for vektorer i rommet, og bruke vektorer til å beregne ulike størrelser i rommet.
:::

Regnereglene for vektorer i 2 dimensjoner (2D) generaliseres naturlig over til 3 dimensjoner (3D). Hovedforskjellen er at vi nå har én ekstra dimensjon å ta hensyn til, men regnereglene du kjenner til fra før av er ellers de samme.




:::::::::::::::{summary} Representasjon av vektorer i 3D
:::{plot3d-2}
width: 100%
fontsize: 24
align: right
xrange: (-1, 5)
yrange: (-1, 5)
zrange: (-1, 5)
ticks: off
let: Ax = 2
let: Ay = 3
let: Az = 3
point: (Ax, Ay, Az), black
vector: (0, 0, 0), (Ax, Ay, Az), blue
text: at=(Ax, 0, 0), value="$a_x$", ha=right, va=top
text: at=(0, Ay, 0), value="$a_y$", ha=right, va=bottom
text: at=(0 - 0.1, 0, Az), value="$a_z$", ha=right, va=center
line-segment: from=(Ax, Ay, 0), to=(Ax, Ay, Az), linestyle=dashed, color=red
line-segment: from=(Ax, Ay, 0), to=(Ax, 0, 0), linestyle=dashed, color=gray
line-segment: from=(Ax, Ay, 0), to=(0, Ay, 0), linestyle=dashed, color=gray
line-segment: from=(0, 0, Az), to=(Ax, Ay, Az), linestyle=dashed, color=gray
text: at=(0.5 * Ax, 0.5 * Ay, 0.5 * Az), value="$\vec{a}$", ha=right, va=bottom
azim: -45
:::


En vektor $\vec{a}$ kan skrives som

$$
\vec{a} = [a_x, a_y, a_z]
$$

:::::::::::::::



:::::::::::::::{example} Eksempel 1
:::{plot3d-2}
width: 100%
fontsize: 24
align: right
xrange: (-1, 5)
yrange: (-1, 5)
zrange: (-1, 5)
let: Ax = 2
let: Ay = 3
let: Az = 4
point: (Ax, Ay, Az), black
vector: (0, 0, 0), (Ax, Ay, Az), blue
line-segment: from=(Ax, Ay, 0), to=(Ax, Ay, Az), linestyle=dashed, color=red
line-segment: from=(Ax, Ay, 0), to=(Ax, 0, 0), linestyle=dashed, color=gray
line-segment: from=(Ax, Ay, 0), to=(0, Ay, 0), linestyle=dashed, color=gray
line-segment: from=(0, 0, Az), to=(Ax, Ay, Az), linestyle=dashed, color=gray
text: at=(0.5 * Ax, 0.5 * Ay, 0.5 * Az), value="$\vec{a}$", ha=right, va=bottom
azim: -45
grid: true
:::

I figuren til høyre vises vektoren

$$
\vec{a} = [2, 3, 4]
$$

:::::::::::::::



---




:::::::::::::::{summary} Posisjonsvektorer
:::{plot3d-2}
width: 100%
fontsize: 24
align: right
xrange: (-1, 5)
yrange: (-1, 5)
zrange: (-1, 5)
ticks: off
let: Ax = 2
let: Ay = 3
let: Az = 3
point: (Ax, Ay, Az), black
vector: (0, 0, 0), (Ax, Ay, Az), blue
text: at=(0.5 * Ax, 0.5 * Ay, 0.5 * Az), value="$\overrightarrow{OP}$", ha=right, va=bottom
text: at=(Ax, Ay, Az), value="$P(x, y, z)$", ha=left, va=bottom
azim: -45
:::

Gitt et punkt $P(x, y, z)$ i rommet, så er **posisjonsvektoren** $\lvec{OP}$ fra origo $O$ til punktet $P$ gitt ved

$$
\lvec{OP} = [x, y, z] 
$$
:::::::::::::::


---


:::::::::::::::{example} Eksempel 2
Finn posisjonsvektoren til punktet $P(-1, 3, 5)$.


::::{solution}
---
open:
---
Posisjonsvektoren til punktet har de samme koordinatene som punktet:

$$
\lvec{OP} = [-1, 3, 5] 
$$
::::


:::::::::::::::


---



:::::::::::::::{summary} Vektorer mellom to punkter
:::{plot3d-2}
width: 100%
fontsize: 24
align: right
xrange: (-1, 5)
yrange: (-1, 5)
zrange: (-1, 5)
ticks: off
let: Ax = 1
let: Ay = 2
let: Az = 3
let: Bx = 4
let: By = 2
let: Bz = 3
point: (Ax, Ay, Az), black
point: (Bx, By, Bz), black
vector: (0, 0, 0), (Ax, Ay, Az), blue
vector: (0, 0, 0), (Bx, By, Bz), blue
vector: (Ax, Ay, Az), (Bx, By, Bz), red
text: at=(0.5 * Ax, 0.5 * Ay, 0.5 * Az), value="$\overrightarrow{OA}$", ha=right, va=bottom
text: at=(0.5 * Bx, 0.5 * By, 0.5 * Bz), value="$\overrightarrow{OB}$", ha=left, va=top
text: at=(0.5 * (Ax + Bx), 0.5 *(Ay + By), 0.5 * (Az + Bz)), value="$\overrightarrow{AB}$", ha=center, va=bottom
text: at=(Ax, Ay, Az), value="$A$", ha=right, va=bottom
text: at=(Bx, By, Bz), value="$B$", ha=left, va=bottom
azim: -70
:::

Gitt to punkter $A$ og $B$ i rommet, så er vektoren $\lvec{AB}$ fra $A$ til $B$ gitt ved

$$
\lvec{AB} = \lvec{OB} - \lvec{OA}
$$
:::::::::::::::


---


:::::::::::::::{example} Eksempel 3
Gitt punktene $A(1, 2, 3)$ og $B(4, 2, 3)$. 

Finn vektoren $\lvec{AB}$ fra $A$ til $B$.


::::{solution}
---
open:
---
Vi har at 

$$
\lvec{OA} = [1, 2, 3] \quad \text{og} \quad \lvec{OB} = [4, 2, 3]
$$

Da er vektoren fra $A$ til $B$ gitt ved

$$
\lvec{AB} = \lvec{OB} - \lvec{OA} = [4, 2, 3] - [1, 2, 3] = [3, 0, 0]
$$

::::
:::::::::::::::


---


:::::::::::::::{summary} Lengden av en vektor
:::{plot3d-2}
width: 100%
fontsize: 24
align: right
xrange: (-1, 5)
yrange: (-1, 5)
zrange: (-1, 5)
ylabel: none
xlabel: none
zlabel: none
ticks: off
let: Ax = 4
let: Ay = 3
let: Az = 3
point: (Ax, Ay, Az), black
vector: (0, 0, 0), (Ax, Ay, Az), blue
text: at=(0.5 * Ax, 0, 0), value="$x$", ha=right, va=top
text: at=(Ax + 0.1, 0.5 * Ay, 0), value="$y$", ha=left, va=center
text: at=(Ax, Ay, 0.5 * Az), value="$z$", ha=left, va=center
line-segment: from=(Ax, Ay, 0), to=(Ax, Ay, Az), linestyle=dashed, color=red
line-segment: from=(Ax, Ay, 0), to=(Ax, 0, 0), linestyle=dashed, color=gray
line-segment: from=(0, 0, 0), to=(Ax, Ay, 0), linestyle=dotted, color=red
text: at=(0.5 * Ax, 0.5 * Ay, 0.5 * Az), value="$\vec{a}$", ha=right, va=bottom
right-angle: at=(Ax, 0, 0), dir1=(-1, 0, 0), dir2=(0, 1, 0), size=0.35
right-angle: at=(Ax, Ay, 0), dir1=(0, 0, 1), dir2=(-Ax, -Ay, 0), size=0.35
text: at=(0.5 * Ax, 0.5 * Ay, 0), value="$\sqrt{x^2 + y^2}$", ha=center, va=bottom
azim: -70
elev: 30
:::



Lengden av vektoren $\vec{a} = [x, y, z]$ er gitt ved

$$
\abs{\vec{a}} = \sqrt{x^2 + y^2 + z^2}
$$


:::::{proof} Vis forklaring
Fra figuren til høyre ser vi at vektoren $\vec{a}$ kan danne en rettvinklet trekant med kateter $\sqrt{x^2 + y^2}$ og $z$. Lengden $\abs{\vec{a}}$ av vektoren er hypotenusen i trekanten. Fra Pytagoras' setning har vi da at

$$
\abs{\vec{a}}^2 = \left(\sqrt{x^2 + y^2}\right)^2 + z^2 = x^2 + y^2 + z^2
$$

Altså er 

$$
\abs{\vec{a}} = \sqrt{x^2 + y^2 + z^2}
$$
:::::


:::::::::::::::



---


:::::::::::::::{example} Eksempel 4
Finn lengden av vektoren $\vec{a} = [-2, 1, 5]$.


::::{solution}
---
open:
---
Lengden av vektoren er gitt ved:

$$
\abs{\vec{a}} = \sqrt{(-2)^2 + 1^2 + 5^2} = \sqrt{4 + 1 + 25} = \sqrt{30}
$$
::::

:::::::::::::::


---



:::::::::::::::{summary} Prikkproduktet (skalarproduktet)
:::{plot}
figsize: (3, 3)
align: right
width: 100%
axis: off
vector: 0, 0, 1.5, 0, red
vector: 0, 0, 1, 1, blue
angle-arc: (0, 0), 0.3, 0, 45
xmin: -0.2
ymin: -0.5 
ymax: 1.3
xmax: 1.7
text: 0.45 * cos(pi/4), 0.1 * sin(pi/4), "$\varphi$", top-right
text: 0.75, 0, "$\vec{a}$", bottom-center
text: 0.5, 0.5, "$\vec{b}$", top-left
fontsize: 18
lw: 1
:::

Prikkproduktet mellom to vektorer $\vec{a} = [a_x, a_y, a_z]$ og $\vec{b} = [b_x, b_y, b_z]$ er gitt ved

$$
\vec{a} \cdot \vec{b} = a_x \cdot b_x + a_y \cdot b_y + a_z \cdot b_z
$$

Dersom vinkelen mellom $\vec{a}$ og $\vec{b}$ er $\varphi$, så kan prikkproduktet også skrives som

$$
\vec{a} \cdot \vec{b} = \abs{\vec{a}} \cdot \abs{\vec{b}} \cdot \cos \varphi
$$

Hvis $\vec{a}$ og $\vec{b}$ er **ortogonale** vektorer, er $\varphi = 90\degree$ og $\vec{a} \cdot \vec{b} = 0$. Da skriver vi at $\vec{a} \perp \vec{b}$. Vi sier iblant at vektorene står **normalt** på hverandre. 

Sammenhengen mellom vinkelen mellom vektorene og prikkproduktet kan oppsummeres i tabellen under:


:::{table}
---
width: 50%
---
labels: $\varphi$, $\vec a \cdot \vec b$
$\varphi \in [0^\circ, 90^\circ\rangle$, $\vec a \cdot \vec b > 0$
$\varphi = 90^\circ$, $\vec a \cdot \vec b = 0$
$\varphi \in \langle 90^\circ, 180^\circ]$, $\vec a \cdot \vec b < 0$
:::



:::::::::::::::






---


:::::::::::::::{example} Eksempel 5
To vektorer er gitt ved 

$$
\vec{a} = [-2, 1, 4] \quad \text{og} \quad \vec{b} = [5, 2, 3]
$$

Finn $\vec{a} \cdot \vec{b}$.


::::{solution}
---
open:
---
$$
\vec{a} \cdot \vec{b} = [-2, 1, 4] \cdot [5, 2, 3] = (-2) \cdot 5 + 1 \cdot 2 + 4 \cdot 3 = -10 + 2 + 12 = 4
$$
::::


:::::::::::::::



---



:::::::::::::::{summary} Multiplikasjon med skalarer
:::{plot}
align: right
width: 100%
axis: off
vector: (1, 1), (3, 3), red
vector: (3, 3), (5, 5), red
vector: (1, 0), (5, 4), blue
vector: (3, -1), (1, -3), purple
vector: (3, -4), (2, -5), purple
text: 0.5 * (1 + 3), 0.5 * (1 + 3), "$\vec{a}$", top-left
text: 0.5 * (3 + 5), 0.5 * (3 + 5), "$\vec{a}$", top-left
text: 0.5 * (1 + 5), 0.5 * (0 + 4), "$2 \cdot \vec{a}$", bottom-right
text: 0.5 * (3 + 1), 0.5 * (-1 + -3), "$-\vec{a}$", bottom-right
text: 0.5 * (3 + 2), 0.5 * (-4 + -5), "$-\displaystyle \frac{1}{2} \cdot \vec{a}$", bottom-right
xmin: -2
fontsize: 30
:::


Gitt en vektor $\vec{a} = [x, y, z]$ og en skalar $k$, så er $k \cdot \vec{a}$ en ny vektor gitt ved 

$$
k \cdot \vec{a} = k \cdot [x, y, z] = [k \cdot x, k \cdot y, k \cdot z]
$$

Når $k \neq 0$ er $\vec{a}$ og $k \cdot \vec{a}$ parallelle, og lengden av $k \cdot \vec{a}$ er gitt ved

$$
\abs{k \cdot \vec{a}} = \abs{k} \cdot \abs{\vec{a}}
$$
:::::::::::::::


---



:::::::::::::::{example} Eksempel 6
Gitt vektoren $\vec{a} = [-2, 3, 1]$. 


En annen vektor er gitt ved $\vec{b} = -3 \cdot \vec{a}$. 

Finn $\vec{b}$ og $\abs{\vec{b}}$.


::::{solution}
---
open:
---
Først finner vi komponentene til $\vec{b}$:

$$
\vec{b} = -3 \cdot \vec{a} = -3 \cdot [-2, 3, 1] = [6, -9, -3]
$$


For å regne ut lengden bruker vi at $\abs{\vec{b}} = \abs{-3} \cdot \abs{\vec{a}}$:

$$
\abs{\vec{b}} = \abs{-3} \cdot \sqrt{(-2)^2 + 3^2 + 1^2} = 3 \cdot \sqrt{4 + 9 + 1} = 3 \cdot \sqrt{14}
$$
::::


:::::::::::::::



---





:::::::::::::::{summary} Enhetsvektorer
:::{plot}
align: right
width: 100%
axis: off
vector: (1, 1), (4, 4), red
vector: (2, 0), (3, 1), blue
text: 0.5 * (1 + 3), 0.5 * (1 + 3), "$\vec{a}$", top-left
text: 0.5 * (2 + 3), 0.5 * (0 + 1), "$\hat{a}$", bottom-right
fontsize: 30
:::


En **enhetsvektor** er en vektor med lengde lik $1$. Gitt vektoren $\vec{a}$, så er enhetsvektoren i samme retning som $\vec{a}$ gitt ved

$$
\hat{a} = \dfrac{\vec{a}}{\abs{\vec{a}}}
$$


Vi bruker en "hatt" over enhetsvektorer for å indikere at de er enhetsvektorer.



:::::{proof} Vis forklaring
Gitt vektoren $\vec{a}$, så er enhetsvektoren i samme retning som $\vec{a}$ gitt ved

$$
\hat{a} = \dfrac{\vec{a}}{\abs{\vec{a}}}
$$

Lengden av enhetsvektoren er da 

$$
\abs{\hat{a}} = \abs{\dfrac{\vec{a}}{\abs{\vec{a}}}} = \dfrac{\abs{\vec{a}}}{\abs{\vec{a}}} = 1
$$

Altså har $\hat{a}$ lengde lik $1$, og er dermed en enhetsvektor.
:::::


:::::::::::::::


---


:::::::::::::::{example} Eksempel 7
Gitt vektoren $\vec{a} = [-2, 3, 1]$. 

Finn enhetsvektoren $\hat{a}$ i samme retning som $\vec{a}$.


::::{solution}
---
open:
---
Lengden av vektoren er gitt ved 

$$
\abs{\vec{a}} = \sqrt{(-2)^2 + 3^2 + 1^2} = \sqrt{4 + 9 + 1} = \sqrt{14}
$$

Dermed er enhetsvektoren i samme retning som $\vec{a}$ gitt ved

$$
\hat{a} = \dfrac{\vec{a}}{\abs{\vec{a}}} = \dfrac{[-2, 3, 1]}{\sqrt{14}} = \left[-\dfrac{2}{\sqrt{14}}, \dfrac{3}{\sqrt{14}}, \dfrac{1}{\sqrt{14}}\right]
$$
::::
::::::::::::::: 




---




:::::::::::::::{summary} Projeksjonslengde
:::{plot}
figsize: (3, 3)
align: right
width: 100%
axis: off
vector: 0, 0, 1.5, 0, red
vector: 0, 0, 1, 1, blue
line-segment: (1, 1), (1, 0), dashed, gray
let: ds = 0.15
line-segment: (1 - ds, 0), (1 - ds, ds), solid, gray
line-segment: (1 - ds, ds), (1, ds), solid, gray
xmin: -0.2
ymin: -0.5 
ymax: 1.3
xmax: 1.7
text: 1.5, 0, "$\vec{a}$", bottom-center
text: 0.5, 0.5, "$\vec{b}$", top-left
text: 0.5, -0.1, "$L$", bottom-center
bar: (0, -0.1), 1, horizontal
fontsize: 18
lw: 1
:::


Gitt en vektor $\vec{a}$ og en annen vektor $\vec{b}$, så er **projeksjonslengden** $L$ av $\vec{b}$ på $\vec{a}$ gitt ved

$$
L = \dfrac{\abs{\vec{b} \cdot \vec{a}}}{\abs{\vec{a}}} = \abs{\vec{b} \cdot \hat{a}}
$$


Projeksjonslengden er lengden av den delen av $\vec{b}$ som er parallell med $\vec{a}$.


:::{clear}
:::


:::::{proof} Vis forklaring
:::{plot}
figsize: (3, 3)
align: right
width: 100%
axis: off
vector: 0, 0, 1.5, 0, red
vector: 0, 0, 1, 1, blue
line-segment: (1, 1), (1, 0), dashed, gray
let: ds = 0.15
line-segment: (1 - ds, 0), (1 - ds, ds), solid, gray
line-segment: (1 - ds, ds), (1, ds), solid, gray
xmin: -0.2
ymin: -0.5 
ymax: 1.3
xmax: 1.7
text: 1.5, 0, "$\vec{a}$", bottom-center
text: 0.5, 0.5, "$\vec{b}$", top-left
text: 0.5, -0.1, "$L$", bottom-center
bar: (0, -0.1), 1, horizontal
fontsize: 18
lw: 1
let: angle = atan(1 / 1)
angle-arc: (0, 0), 0.3, 0, angle * 180 / pi, black
text: 0.45 * cos(angle/2), 0.45 * sin(angle/2), "$\varphi$", center-center
:::

La $\varphi$ være vinkelen mellom $\vec{a}$ og $\vec{b}$. Da kan vi skrive projeksjonslengden $L$ som

$$
\cos \varphi = \dfrac{L}{\abs{\vec{b}}} \liff L = \abs{\vec{b}} \cdot \cos \varphi
$$

Samtidig er prikkproduktet mellom $\vec{a}$ og $\vec{b}$ gitt ved

$$
\vec{a} \cdot \vec{b} = \abs{\vec{a}} \cdot \underbrace{\abs{\vec{b}} \cdot \cos \varphi}_{=L}
$$

Ergo får vi at 

$$
\abs{\vec{a}} \cdot L = \vec{a} \cdot \vec{b} \liff L = \dfrac{\vec{a} \cdot \vec{b}}{\abs{\vec{a}}}
$$

Men siden $\vec{a}$ og $\vec{b}$ kan ha en vinkel større enn $90\degree$, så vil $L$ bli negativ. Dermed tar vi absoluttverdien av prikkproduktet:

$$
L = \dfrac{\abs{\vec{a} \cdot \vec{b}}}{\abs{\vec{a}}}
$$

Hvis vi i stedet bruker enhetsvektoren $\hat{a}$, så er $\abs{\hat{a}} = 1$, og da får vi at 

$$
L = \abs{\vec{b} \cdot \hat{a}}
$$


:::::



:::::::::::::::



---



:::::::::::::::{example} Eksempel 8
En vektor $\vec{a} = [2, 1, 4]$ og $\vec{b} = [-3, 4, -1]$.

Finn projeksjonslengden $L$ av $\vec{b}$ på $\vec{a}$.

::::{solution}
---
open:
---
Vi finner først enhetsvektoren i samme retning som $\vec{a}$:

$$
\abs{\vec{a}} = \sqrt{2^2 + 1^2 + 4^2} = \sqrt{21}
$$

Enhetsvektoren i samme retning som $\vec{a}$ er da

$$
\hat{a} = \dfrac{\vec{a}}{\abs{\vec{a}}} = \dfrac{[2, 1, 4]}{\sqrt{21}} = \left[\dfrac{2}{\sqrt{21}}, \dfrac{1}{\sqrt{21}}, \dfrac{4}{\sqrt{21}}\right]
$$

Så finner vi projeksjonslengden $L$ av $\vec{b}$ på $\vec{a}$:


$$
\vec{b} \cdot \hat{a} = [-3, 4, -1] \cdot \left[\dfrac{2}{\sqrt{21}}, \dfrac{1}{\sqrt{21}}, \dfrac{4}{\sqrt{21}}\right] = -\dfrac{6}{\sqrt{21}} + \dfrac{4}{\sqrt{21}} - \dfrac{4}{\sqrt{21}} = -\dfrac{6}{\sqrt{21}}
$$

Projeksjonslengden er da 

$$
L = \abs{\vec{b} \cdot \hat{a}} = \abs{-\dfrac{6}{\sqrt{21}}} = \dfrac{6}{\sqrt{21}}
$$

::::

:::::::::::::::



