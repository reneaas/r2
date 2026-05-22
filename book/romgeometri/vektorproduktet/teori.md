# Kryssproduktet

:::{admonition} Læringsmål
---
class: tip
---
* Kunne regne ut vektorproduktet mellom to vektorer.
* Kunne bruke forklare og bruke den geometriske formelen for vektorproduktet til å beregne arealer og volum.
:::


## Definisjonen av vektorproduktet

**Vektorproduktet** (som vi ofte kaller for **kryssproduktet**) mellom to vektorer $\vec{a}$ og $\vec{b}$ gir oss en ny vektor $\vec{c}$ som står ortogonalt (vinkelrett) på både $\vec{a}$ og $\vec{b}$.



:::::::::::::::{summary} Definisjon: Vektorproduktet
Gitt to vektorer $\vec{a} = [a_x, a_y, a_z]$ og $\vec{b} = [b_x, b_y, b_z]$, så er vektorproduktet $\vec{a} \times \vec{b}$ gitt ved:


$$
\vec{a} \times \vec{b} = \begin{vmatrix} \vec{e}_x & \vec{e}_y & \vec{e}_z \\ a_x & a_y & a_z \\ b_x & b_y & b_z \end{vmatrix}
$$
:::::::::::::::


---


:::::::::::::::{example} Eksempel 1
Gitt vektorene 

$$
\vec{a} = [1, 2, 3] \quad \text{og} \quad \vec{b} = [4, 5, 6]
$$

Bestem vektorproduktet $\vec{a} \times \vec{b}$.

::::{solution}
---
dropdown: 0
---
Vi bruker formelen for vektorproduktet:

$$
\begin{align*}
\vec{a} \times \vec{b} &= \begin{vmatrix} \vec{e}_x & \vec{e}_y & \vec{e}_z \\ 1 & 2 & 3 \\ 4 & 5 & 6 \end{vmatrix} \\
\\
&= \vec{e}_x \cdot \begin{vmatrix} 2 & 3 \\ 5 & 6 \end{vmatrix} - \vec{e}_y \cdot \begin{vmatrix} 1 & 3 \\ 4 & 6 \end{vmatrix} + \vec{e}_z \cdot \begin{vmatrix} 1 & 2 \\ 4 & 5 \end{vmatrix} \\
\\
&= \vec{e}_x \cdot (2 \cdot 6 - 3 \cdot 5) - \vec{e}_y \cdot (1 \cdot 6 - 3 \cdot 4) + \vec{e}_z \cdot (1 \cdot 5 - 2 \cdot 4) \\
\\
&= \vec{e}_x \cdot (12 - 15) - \vec{e}_y \cdot (6 - 12) + \vec{e}_z \cdot (5 - 8) \\
\\
&= -3 \vec{e}_x + 6 \vec{e}_y - 3 \vec{e}_z \\
\\
&= [-3, 6, -3]
\end{align*}
$$
::::

:::::::::::::::


---



## Geometrien til kryssproduktet

:::::::::::::::{summary} Geometrisk formel for kryssproduktet
:::{plot}
fontsize: 32
width: 100%
xmax: 1.2
ymax: 1.2
xmin: -0.5
align: right
axis: off
axis: equal
let: u = -pi/6
let: v = pi/12
vector: (0, 0), (cos(u), sin(u)), blue
vector: (0, 0), (cos(v), sin(v)), red
vector: (0, 0), (0, 1), orange
text: -0.1, 0.5, "$\vec{a} \times \vec{b}$", center-left
line-segment: (cos(u), sin(u)), (cos(u) + cos(v), sin(u) + sin(v)), dashed, gray
line-segment: (cos(v), sin(v)), (cos(u) + cos(v), sin(u) + sin(v)), dashed, gray
text: 0.5 * cos(u) - 0.1, 0.5 * sin(u), "$\vec{a}$", bottom-left
text: 0.5 * cos(v), 0.5 * sin(v), "$\vec{b}$", top-left
text: 0.5 * (cos(u) + cos(v)), 0.5 * (sin(u) + sin(v)), "$|\vec{a} \times \vec{b}|$", center-center
line-segment: (0, 0), (0, 1), dashed, white
fill-polygon: (0, 0), (cos(u), sin(u)), (cos(u) + cos(v), sin(u) + sin(v)), (cos(v), sin(v)), blue, 0.1
let: ds = 0.25
angle-arc: (0, 0), ds, u*180/pi, v*180/pi
text: ds * cos(0.5 * (u + v)), ds * sin(0.5 * (u + v)), "$\varphi$", center-right
line-segment: (0, ds), (ds * cos(v), ds + ds * sin(v)), dashed, gray
line-segment: (ds * cos(v), ds + ds * sin(v)), (ds * cos(v), ds * sin(v)), dashed, gray
line-segment: (0, ds), (ds * cos(u), ds + ds * sin(u)), dashed, gray
line-segment: (ds * cos(u), ds + ds * sin(u)), (ds * cos(u), ds * sin(u)), dashed, gray
nocache:
:::

Gitt to vektorer $\vec{a}$ og $\vec{b}$ med en vinkel $\varphi$ mellom seg, så er


1. $\abs{\vec{a} \times \vec{b}} = \abs{\vec{a}} \cdot \abs{\vec{b}} \cdot \sin \varphi$

2. Arealet av parallellogrammet spent ut av $\vec{a}$ og $\vec{b}$ er lik $\abs{\vec{a} \times \vec{b}}$

3. $\vec{a} \times \vec{b}$ står ortogonal på både $\vec{a}$ og $\vec{b}$



:::{clear}
:::


::::{admonition} Forklaring av formelen
---
class: theory, dropdown
---
**Formelen for lengden av vektoren**

Lengden av en vektor er uavhengig av hvordan vi velger koordinatsystemet vårt, som betyr at hvis vi finner en formel for lengden av vektorproduktet i ett koordinatsystem, må denne formelen også gjelde i alle andre koordinatsystemer.

Vi forestiller oss at vi velger et koordinatsystem der $\vec{a}$ ligger langs $x$-aksen og at $\vec{b}$ ligger i $xy$-planet der vektor $\vec{b}$ er dreid en vinkel $\varphi$ i forhold til $\vec{a}$. 

:::{plot}
fontsize: 32
width: 40%
axis: equal
ticks: off
let: u = pi/4
vector: (0, 0), (1, 0), blue
vector: (0, 0), (cos(u), sin(u)), red
line-segment: (0, 0), (1, 0), dashed, white
line-segment: (0, 0), (cos(u), sin(u)), dashed, white
text: 0.5, -0.1, "$\vec{a}$", bottom-center
text: 0.5 * cos(u), 0.5 * sin(u), "$\vec{b}$", top-left
let: ds = 0.2
angle-arc: (0, 0), ds, 0, u*180/pi
text: ds * cos(0.5 * u), ds * sin(0.5 * u), "$\varphi$", top-right
:::
Da er 

$$
\vec{a} = \left[\abs{\vec{a}}, 0, 0\right]
$$

og 

$$
\vec{b} = \left[\abs{\vec{b}} \cdot \cos \varphi, \abs{\vec{b}} \cdot \sin \varphi, 0\right].
$$

Så regner vi ut kryssproduktet mellom de to vektorene:

$$
\begin{align*}
\vec{a} \times \vec{b} &= \begin{vmatrix} \vec{e}_x & \vec{e}_y & \vec{e}_z \\ \abs{\vec{a}} & 0 & 0 \\ \abs{\vec{b}} \cdot \cos \varphi & \abs{\vec{b}} \cdot \sin \varphi & 0 \end{vmatrix} \\
\\
&= \vec{e}_x \cdot \begin{vmatrix} 0 & 0 \\ \abs{\vec{b}} \cdot \sin \varphi & 0 \end{vmatrix} - \vec{e}_y \cdot \begin{vmatrix} \abs{\vec{a}} & 0 \\ \abs{\vec{b}} \cdot \cos \varphi & 0 \end{vmatrix} + \vec{e}_z \cdot \begin{vmatrix} \abs{\vec{a}} & 0 \\ \abs{\vec{b}} \cdot \cos \varphi & \abs{\vec{b}} \cdot \sin \varphi \end{vmatrix} \\
\\
&= \vec{e}_x \cdot 0 - \vec{e}_y \cdot 0 + \vec{e}_z \cdot \left(\abs{\vec{a}} \cdot \abs{\vec{b}} \cdot \sin \varphi\right) \\
\\
&= \left[0, 0, \abs{\vec{a}} \cdot \abs{\vec{b}} \cdot \sin \varphi\right]
\end{align*}
$$

Lengden av denne vektoren blir da 

$$
\abs{\vec{a} \times \vec{b}} = \abs{\vec{a}} \cdot \abs{\vec{b}} \cdot \sin \varphi
$$

**Ortogonalitet** 


Vi kan bekrefte at $\vec{a} \times \vec{b}$ står ortogonalt på både $\vec{a}$ og $\vec{b}$ ved å sjekke at prikkproduktet blir null:

$$
\vec{a} \cdot (\vec{a} \times \vec{b}) = \left[\abs{\vec{a}}, 0, 0\right] \cdot \left[0, 0, \abs{\vec{a}} \cdot \abs{\vec{b}} \cdot \sin \varphi\right] = 0
$$

og 

$$
\vec{b} \cdot (\vec{a} \times \vec{b}) = \left[\abs{\vec{b}} \cdot \cos \varphi, \abs{\vec{b}} \cdot \sin \varphi, 0\right] \cdot \left[0, 0, \abs{\vec{a}} \cdot \abs{\vec{b}} \cdot \sin \varphi\right] = 0
$$



::::

:::::::::::::::


:::::::::::::::
