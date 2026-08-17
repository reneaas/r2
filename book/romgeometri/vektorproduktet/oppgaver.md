# Oppgaver: Kryssproduktet


:::::::::::::::{exercise} Oppgave 1

:::::::::::::{part} a
Gitt vektorene $\vec{a} = [1, -2, 4]$ og $\vec{b} = [3, 0, -1]$. 

Finn $\vec{a} \times \vec{b}$.



:::::{answer}
$$
\vec{a} \times \vec{b} = [2, 13, 6]
$$

::::{solution}
$$
\begin{align*}
\vec{a} \times \vec{b} &= \mqty|\vec{e}_x & \vec{e}_y & \vec{e}_z \\ 1 & -2 & 4 \\ 3 & 0 & -1| \\
\\
&= \vec{e}_x \cdot \mqty|-2 & 4 \\ 0 & -1| - \vec{e}_y \cdot \mqty|1 & 4 \\ 3 & -1| + \vec{e}_z \cdot \mqty|1 & -2 \\ 3 & 0| \\
\\
&= \vec{e}_x \cdot ((-2)\cdot (-1) - 4\cdot 0) - \vec{e}_y \cdot (1\cdot (-1) - 4\cdot 3) + \vec{e}_z \cdot (1\cdot 0 - (-2)\cdot 3) \\
\\
&= \vec{e}_x \cdot (2 - 0) - \vec{e}_y \cdot (-1 - 12) + \vec{e}_z \cdot (0 + 6) \\
\\
&= 2 \cdot \vec{e}_x + 13 \cdot \vec{e}_y + 6 \cdot \vec{e}_z \\
\\
&= [2, 13, 6]
\end{align*}
$$
::::
:::::


:::::::::::::


:::::::::::::{part} b
Gitt vektorene $\vec{c} = [2, 1, 0]$ og $\vec{d} = [0, 3, 5]$.

Finn $\vec{c} \times \vec{d}$.



:::::{answer}
$$
\vec{c} \times \vec{d} = [5, -10, 6]
$$

::::{solution}
$$
\begin{align*}
\vec{c} \times \vec{d} &= \mqty|\vec{e}_x & \vec{e}_y & \vec{e}_z \\ 2 & 1 & 0 \\ 0 & 3 & 5| \\
\\
&= \vec{e}_x \cdot \mqty|1 & 0 \\ 3 & 5| - \vec{e}_y \cdot \mqty|2 & 0 \\ 0 & 5| + \vec{e}_z \cdot \mqty|2 & 1 \\ 0 & 3| \\
\\
&= \vec{e}_x \cdot (1\cdot 5 - 0\cdot 3) - \vec{e}_y \cdot (2\cdot 5 - 0\cdot 0) + \vec{e}_z \cdot (2\cdot 3 - 1\cdot 0) \\
\\
&= \vec{e}_x \cdot (5 - 0) - \vec{e}_y \cdot (10 - 0) + \vec{e}_z \cdot (6 - 0) \\
\\
&= 5 \cdot \vec{e}_x - 10 \cdot \vec{e}_y + 6 \cdot \vec{e}_z \\
\\
&= [5, -10, 6]
\end{align*}
$$
::::
:::::


:::::::::::::


:::::::::::::{part} c
Gitt vektorene $\vec{u} = [-1, 0, 5]$ og $\vec{v} = [2, 4, -3]$.

Finn $\vec{u} \times \vec{v}$.



:::::{answer}
$$
\vec{u} \times \vec{v} = [-20, 7, -4]
$$

::::{solution}
$$
\begin{align*}
\vec{u} \times \vec{v} &= \mqty|\vec{e}_x & \vec{e}_y & \vec{e}_z \\ -1 & 0 & 5 \\ 2 & 4 & -3| \\
\\
&= \vec{e}_x \cdot \mqty|0 & 5 \\ 4 & -3| - \vec{e}_y \cdot \mqty|-1 & 5 \\ 2 & -3| + \vec{e}_z \cdot \mqty|-1 & 0 \\ 2 & 4| \\
\\
&= \vec{e}_x \cdot (0\cdot -3 - 5\cdot 4) - \vec{e}_y \cdot (-1\cdot -3 - 5\cdot 2) + \vec{e}_z \cdot (-1\cdot 4 - 0\cdot 2) \\
\\
&= \vec{e}_x \cdot (0 - 20) - \vec{e}_y \cdot (3 - 10) + \vec{e}_z \cdot (-4 - 0) \\
\\
&= -20 \cdot \vec{e}_x + 7 \cdot \vec{e}_y - 4 \cdot \vec{e}_z \\
\\
&= [-20, 7, -4]
\end{align*}
$$
::::
:::::


:::::::::::::


:::::::::::::{part} d
Gitt vektorene $\vec{r} = [-4, 0, 1]$ og $\vec{s} = [0, 2, 3]$.

Finn $\vec{r} \times \vec{s}$.


:::::{answer}
$$
\vec{r} \times \vec{s} = [-2, 12, -8]
$$

::::{solution}
$$
\begin{align*}
\vec{r} \times \vec{s} &= \mqty|\vec{e}_x & \vec{e}_y & \vec{e}_z \\ -4 & 0 & 1 \\ 0 & 2 & 3| \\
\\
&= \vec{e}_x \cdot \mqty|0 & 1 \\ 2 & 3| - \vec{e}_y \cdot \mqty|-4 & 1 \\ 0 & 3| + \vec{e}_z \cdot \mqty|-4 & 0 \\ 0 & 2| \\
\\
&= \vec{e}_x \cdot (0\cdot 3 - 1\cdot 2) - \vec{e}_y \cdot (-4\cdot 3 - 1\cdot 0) + \vec{e}_z \cdot (-4\cdot 2 - 0\cdot 0) \\
\\
&= \vec{e}_x \cdot (0 - 2) - \vec{e}_y \cdot (-12 - 0) + \vec{e}_z \cdot (-8 - 0) \\
\\
&= -2 \cdot \vec{e}_x + 12 \cdot \vec{e}_y - 8 \cdot \vec{e}_z \\
\\
&= [-2, 12, -8]
\end{align*}
$$
::::
:::::


:::::::::::::


:::::::::::::::


---


:::::::::::::::{exercise} Oppgave 2


Gitt vektorene $\vec{a} = [3, 0, 0]$ og $\vec{b} = [0, 4, 0]$.

:::::::::::::{part} a
Finn $\vec{a} \times \vec{b}$.


:::::{answer}
$$
\vec{a} \times \vec{b} = [0, 0, 12]
$$

::::{solution}
$$
\begin{align*}
\vec{a} \times \vec{b} &= \mqty|\vec{e}_x & \vec{e}_y & \vec{e}_z \\ 3 & 0 & 0 \\ 0 & 4 & 0| \\
\\
&= \vec{e}_x \cdot \mqty|0 & 0 \\ 4 & 0| - \vec{e}_y \cdot \mqty|3 & 0 \\ 0 & 0| + \vec{e}_z \cdot \mqty|3 & 0 \\ 0 & 4| \\
\\
&= \vec{e}_x \cdot (0\cdot 0 - 0\cdot 4) - \vec{e}_y \cdot (3\cdot 0 - 0\cdot 0) + \vec{e}_z \cdot (3\cdot 4 - 0\cdot 0) \\
\\
&= \vec{e}_x \cdot (0 - 0) - \vec{e}_y \cdot (0 - 0) + \vec{e}_z \cdot (12 - 0) \\
\\
&= 0 \cdot \vec{e}_x + 0 \cdot \vec{e}_y + 12 \cdot \vec{e}_z \\
\\
&= [0, 0, 12]
\end{align*}
$$
::::
:::::



:::::::::::::


:::::::::::::{part} b
Finn $\vec{b} \times \vec{a}$.


:::::{answer}
$$
\vec{b} \times \vec{a} = [0, 0, -12]
$$

::::{solution}
Vi har at $\vec{b} \times \vec{a} = -(\vec{a} \times \vec{b})$. Dermed er 

$$
\vec{b} \times \vec{a} = -[0, 0, 12] = [0, 0, -12]
$$
::::
:::::

:::::::::::::


> For to vektorer $\vec{a}$ og $\vec{b}$, så gjelder $(k\vec{a}) \times (r\vec{b}) = k\cdot r \cdot (\vec{a} \times \vec{b})$ for alle skalarer $k$ og $r$.


:::::::::::::{part} c
Finn $(2\vec{a}) \times (3\vec{b})$.


:::::{answer}
$$
(2\vec{a}) \times (3\vec{b}) = [0, 0, 72]
$$

::::{solution}
Vi kan skrive om kryssproduktet som

$$
(2\vec{a}) \times (3\vec{b}) = 6(\vec{a} \times \vec{b}) = 6[0, 0, 12] = [0, 0, 72]
$$

::::
:::::


:::::::::::::


:::::::::::::{part} d
Finn $(3 \vec{b}) \times (8 \vec{a})$.

:::::{answer}
$$
(3 \vec{b}) \times (8 \vec{a}) = [0, 0, -288]
$$

::::{solution}
$$
(3\vec{b}) \times (8 \vec{a}) = 24(\vec{b} \times \vec{a}) = 24[0, 0, -12] = [0, 0, -288]
$$
::::

:::::


:::::::::::::


:::::::::::::::


---


:::::::::::::::{exercise} Oppgave 3
Gitt vektorene $\vec{a} = [2, -1, 3]$ og $\vec{b} = [1, 4, -2]$.

:::::::::::::{part} a
Finn $\vec{a} \times \vec{b}$.


:::::{answer}
$$
\vec a \times \vec b = [-10, 7, 9]
$$

::::{solution}
$$
\begin{align*}
\vec a \times \vec b &= \mqty|\vec{e}_x & \vec{e}_y & \vec{e}_z \\ 2 & -1 & 3 \\ 1 & 4 & -2| \\
\\
&= \vec{e}_x \cdot \mqty|-1 & 3 \\ 4 & -2| - \vec{e}_y \cdot \mqty|2 & 3 \\ 1 & -2| + \vec{e}_z \cdot \mqty|2 & -1 \\ 1 & 4| \\
\\
&= \vec{e}_x \cdot ((-1)\cdot (-2) - 3\cdot 4) - \vec{e}_y \cdot (2\cdot (-2) - 3\cdot 1) + \vec{e}_z \cdot (2\cdot 4 - (-1)\cdot 1) \\
\\
&= \vec{e}_x \cdot (2 - 12) - \vec{e}_y \cdot (-4 - 3) + \vec{e}_z \cdot (8 + 1) \\
\\
&= -10 \cdot \vec{e}_x + 7 \cdot \vec{e}_y + 9 \cdot \vec{e}_z \\
\\
&= [-10, 7, 9]
\end{align*}
$$
::::
:::::

:::::::::::::


:::::::::::::{part} b
Regn ut $\vec{a} \cdot (\vec{a} \times \vec{b})$ og $\vec{b} \cdot (\vec{a} \times \vec{b})$.

Hva forteller svarene om vektorene $\vec a$, $\vec b$ og $\vec a \times \vec b$? 


:::::{answer}
Prikkproduktene blir lik null som betyr at $\vec a \times \vec b$ står normalt på både $\vec a$ og $\vec b$.
::::{solution}
Vi har at

$$
\begin{align*}
\vec a \cdot (\vec a \times \vec b) &= [2, -1, 3] \cdot [-10, 7, 9] \\
\\
&= 2\cdot(-10) + (-1)\cdot 7 + 3\cdot 9 \\
\\
&= -20 - 7 + 27 \\
\\
&= 0
\end{align*}
$$

og

$$
\begin{align*}
\vec b \cdot (\vec a \times \vec b) &= [1, 4, -2] \cdot [-10, 7, 9] \\
\\
&= 1\cdot(-10) + 4\cdot 7 + (-2)\cdot 9 \\
\\
&= -10 + 28 - 18 \\
\\
&= 0
\end{align*}
$$

Siden begge prikkprodukter er lik null, så betyr det at $\vec a \times \vec b$ står normalt på både $\vec a$ og $\vec b$.
::::
:::::


:::::::::::::




:::::::::::::::


---



:::::::::::::::{exercise} Oppgave 4

:::::::::::::{part} a
:::{plot3d-2}
width: 100%
fontsize: 24
align: right
let: Ax = 1
let: Ay = 2
let: Az = 0
let: Bx = 4
let: By = 2
let: Bz = 1
let: Cx = 4
let: Cy = 6
let: Cz = 3
let: Dx = 1
let: Dy = 6
let: Dz = 2
ngon: [(Ax, Ay, Az), (Bx, By, Bz), (Cx, Cy, Cz), (Dx, Dy, Dz)], color=blue, alpha=0.3
grid: true
text: at=(Ax, Ay, Az), value="$A$", ha=right, va=top
text: at=(Bx, By, Bz), value="$B$", ha=left, va=top
text: at=(Cx, Cy, Cz), value="$C$", ha=left, va=bottom
text: at=(Dx, Dy, Dz), value="$D$", ha=right, va=bottom
xrange: (-1, 5)
yrange: (-1, 7)
zrange: (-1, 4)
point: (Ax, Ay, Az), black
point: (Bx, By, Bz), black
point: (Cx, Cy, Cz), black
point: (Dx, Dy, Dz), black
:::


Et parallellogram $ABCD$ har hjørnene $A(1, 2, 0)$, $B(4, 2, 1)$, $C(4, 6, 3)$ og $D(1, 6, 2)$.

Finn arealet $G$ av parallellogrammet.


:::::{answer}
$$
G = 14
$$

::::{solution}
Vi finner to vektorer som spenner ut parallellogrammet. For eksempel $\lvec{AB}$ og $\lvec{AD}$. Da er $\abs{\lvec{AB} \times \lvec{AD}}$ lik arealet av parallellogrammet. Kryssproduktet er gitt ved:

$$
\begin{align*}
\lvec{AB} \times \lvec{AD} &= \mqty|\vec{e}_x & \vec{e}_y & \vec{e}_z \\ 3 & 0 & 1 \\ 0 & 4 & 2| \\
\\
&= \vec{e}_x \cdot \mqty|0 & 1 \\ 4 & 2| - \vec{e}_y \cdot \mqty|3 & 1 \\ 0 & 2| + \vec{e}_z \cdot \mqty|3 & 0 \\ 0 & 4| \\
\\
&= \vec{e}_x \cdot (0\cdot 2 - 1\cdot 4) - \vec{e}_y \cdot (3\cdot 2 - 1\cdot 0) + \vec{e}_z \cdot (3\cdot 4 - 0\cdot 0) \\
\\
&= \vec{e}_x \cdot (0 - 4) - \vec{e}_y \cdot (6 - 0) + \vec{e}_z \cdot (12 - 0) \\
\\
&= -4 \cdot \vec{e}_x - 6 \cdot \vec{e}_y + 12 \cdot \vec{e}_z \\
\\
&= [-4, -6, 12]
\end{align*}
$$

Dermed er arealet av parallellogrammet gitt ved

$$
G = \abs{\lvec{AB} \times \lvec{AD}} = \sqrt{(-4)^2 + (-6)^2 + 12^2} = \sqrt{16 + 36 + 144} = \sqrt{196} = 14
$$
::::
:::::


:::::::::::::


:::::::::::::{part} b
:::{plot3d-2}
width: 100%
fontsize: 24
align: right
let: Ax = 1
let: Ay = 1
let: Az = 0
let: Bx = 5
let: By = 3
let: Bz = 4
let: Cx = 2
let: Cy = 2
let: Cz = 3
ngon: [(Ax, Ay, Az), (Bx, By, Bz), (Cx, Cy, Cz)], color=blue, alpha=0.3
grid: true
text: at=(Ax, Ay, Az), value="$A$", ha=right, va=center
text: at=(Bx, By, Bz), value="$B$", ha=left, va=center
text: at=(Cx, Cy, Cz), value="$C$", ha=right, va=bottom
xrange: (-1, 5)
yrange: (-1, 7)
zrange: (-1, 4)
point: (Ax, Ay, Az), black
point: (Bx, By, Bz), black
point: (Cx, Cy, Cz), black
elev: 22
azim: -70
:::


En trekant $ABC$ har hjørnene $A(1, 1, 0)$, $B(5, 3, 4)$ og $C(2, 2, 3)$.

Finn arealet $G$ av trekanten.


:::::{answer}
$$
G = 3\sqrt{2}
$$

::::{solution}
Vi finner to vektorer som spenner ut trekanten. Vi velger $\lvec{AB}$ og $\lvec{AC}$. Arealvektoren til trekanten er da gitt ved 

$$
\vec{G} = \dfrac{1}{2} \lvec{AB} \times \lvec{AC}
$$

Vi regner ut kryssproduktet:


$$
\begin{align*}
\lvec{AB} \times \lvec{AC} &= \mqty|\vec{e}_x & \vec{e}_y & \vec{e}_z \\ 4 & 2 & 4 \\ 1 & 1 & 3| \\
\\
&= \vec{e}_x \cdot \mqty|2 & 4 \\ 1 & 3| - \vec{e}_y \cdot \mqty|4 & 4 \\ 1 & 3| + \vec{e}_z \cdot \mqty|4 & 2 \\ 1 & 1| \\
\\
&= \vec{e}_x \cdot (6 - 4) - \vec{e}_y \cdot (12 - 4) + \vec{e}_z \cdot (4 - 2) \\
\\
&= 2 \cdot \vec{e}_x - 8 \cdot \vec{e}_y + 2 \cdot \vec{e}_z \\
\\
&= [2, -8, 2] \\
\\
&= 2 \cdot [1, -4, 1]
\end{align*}
$$

Lengden av arealvektoren er da gitt ved

$$
\begin{align*}
\abs{\lvec{G}} &= \dfrac{1}{2} \abs{\lvec{AB} \times \lvec{AC}} \\
\\
&= \dfrac{1}{2} \cdot \abs{2 \cdot [1, -4, 1]} \\
\\
&= \dfrac{1}{2} \cdot 2 \sqrt{1^2 + (-4)^2 + 1^2} \\
\\
&= \sqrt{1 + 16 + 1} \\
\\
&= \sqrt{18} \\
\\
&= 3\sqrt{2}
\end{align*}
$$

::::
:::::



:::::::::::::



:::::::::::::{part} c
:::{plot3d-2}
width: 100%
fontsize: 24
align: right
let: Ax = -1
let: Ay = 3
let: Az = 2
let: Bx = 0
let: By = 4
let: Bz = 1
let: Cx = 2
let: Cy = 1
let: Cz = 5
ngon: [(Ax, Ay, Az), (Bx, By, Bz), (Cx, Cy, Cz)], color=blue, alpha=0.3
grid: true
text: at=(Ax, Ay, Az), value="$A$", ha=right, va=top
text: at=(Bx, By, Bz), value="$B$", ha=left, va=top
text: at=(Cx, Cy, Cz), value="$C$", ha=center, va=bottom
xrange: (-2, 3)
yrange: (-1, 6)
zrange: (-1, 4)
point: (Ax, Ay, Az), black
point: (Bx, By, Bz), black
point: (Cx, Cy, Cz), black
elev: 10
:::

Punktene $A(-1, 3, 2)$, $B(0, 4, 1)$ og $C(2, 1, 5)$ danner en trekant $ABC$.

Finn arealet $G$ av trekanten.


:::::{answer}
$$
G = \dfrac{1}{2} \sqrt{62}
$$

::::{solution}
Vi finner to vektorer som spenner ut trekanten:

$$
\lvec{AB} = \mqty[1, 1, -1] \qog \lvec{AC} = \mqty[3, -2, 3]
$$


Kryssproduktet av de to vektorene er da 

$$
\begin{align*}
\lvec{AB} \times \lvec{AC} &= \mqty|\vec{e}_x & \vec{e}_y & \vec{e}_z \\ 1 & 1 & -1 \\ 3 & -2 & 3| \\
\\
&= \vec{e}_x \cdot \mqty|1 & -1 \\ -2 & 3| - \vec{e}_y \cdot \mqty|1 & -1 \\ 3 & 3| + \vec{e}_z \cdot \mqty|1 & 1 \\ 3 & -2| \\
\\
&= \vec{e}_x \cdot (1\cdot 3 - (-1)\cdot -2) - \vec{e}_y \cdot (1\cdot 3 - (-1)\cdot 3) + \vec{e}_z \cdot (1\cdot -2 - 1\cdot 3) \\
\\
&= \vec{e}_x \cdot (3 - 2) - \vec{e}_y \cdot (3 + 3) + \vec{e}_z \cdot (-2 - 3) \\
\\
&= 1 \cdot \vec{e}_x - 6 \cdot \vec{e}_y - 5 \cdot \vec{e}_z \\
\\
&= [1, -6, -5]
\end{align*}
$$

Arealet av trekanten er da gitt ved

$$
G = \dfrac{1}{2} \abs{\lvec{AB} \times \lvec{AC}} = \dfrac{1}{2} \sqrt{1^2 + (-6)^2 + (-5)^2} = \dfrac{1}{2} \sqrt{1 + 36 + 25} = \dfrac{1}{2} \sqrt{62}
$$



::::
:::::

:::::::::::::



:::::::::::::::



---



:::::::::::::::{exercise} Oppgave 5
:::::::::::::{part} a
:::{plot3d-2}
nocache:
width: 100%
fontsize: 24
align: right
let: Ax = 2
let: Ay = 0
let: Az = 1
let: Bx = 3
let: By = 1
let: Bz = 0
let: Cx = 1
let: Cy = 3
let: Cz = 1
let: Dx = Ax + 1
let: Dy = Ay + 1
let: Dz = Az + 2
let: Ex = Bx + 1
let: Ey = By + 1
let: Ez = Bz + 2
let: Fx = Cx + 1
let: Fy = Cy + 1
let: Fz = Cz + 2
ngon: [(Ax, Ay, Az), (Bx, By, Bz), (Cx, Cy, Cz)], color=blue, alpha=0.3, edgecolor=none
ngon: [(Bx, By, Bz), (Ex, Ey, Ez), (Fx, Fy, Fz), (Cx, Cy, Cz)], color=blue, alpha=0.4, edgecolor=none
line-segment: start=(Ax, Ay, Az), end=(Bx, By, Bz), color=black, style=solid
line-segment: start=(Bx, By, Bz), end=(Cx, Cy, Cz), color=black, style=solid
line-segment: start=(Ax, Ay, Az), end=(Cx, Cy, Cz), color=black, style=solid
line-segment: start=(Dx, Dy, Dz), end=(Ex, Ey, Ez), color=black, style=dashdot
line-segment: start=(Ex, Ey, Ez), end=(Fx, Fy, Fz), color=black, style=solid
line-segment: start=(Dx, Dy, Dz), end=(Fx, Fy, Fz), color=black, style=dashdot
line-segment: start=(Ax, Ay, Az), end=(Dx, Dy, Dz), color=black, style=dashdot
line-segment: start=(Bx, By, Bz), end=(Ex, Ey, Ez), color=black, style=solid
line-segment: start=(Cx, Cy, Cz), end=(Fx, Fy, Fz), color=black, style=solid
grid: true
xrange: (-2, 3)
yrange: (-1, 7)
zrange: (-1, 5)
point: (Ax, Ay, Az), black
point: (Bx, By, Bz), black
point: (Cx, Cy, Cz), black
point: (Dx, Dy, Dz), black
point: (Ex, Ey, Ez), black
point: (Fx, Fy, Fz), black
text: at=(Ax, Ay, Az), value="$A$", ha=right, va=top
text: at=(Bx, By, Bz), value="$B$", ha=left, va=top
text: at=(Cx, Cy, Cz), value="$C$", ha=right, va=bottom
text: at=(Dx, Dy, Dz), value="$D$", ha=left, va=bottom
text: at=(Ex, Ey, Ez), value="$E$", ha=left, va=top
text: at=(Fx, Fy, Fz), value="$F$", ha=left, va=bottom
azim: -70
ylabel: none
:::

Et prisme har grunnflaten $ABC$ med hjørnene $A(2, 0, 1)$, $B(3, 1, 0)$ og $C(1, 3, 1)$. 

Toppflaten til prismet har hjørnene $D(3, 1, 3)$, $E(4, 2, 2)$ og $F(2, 4, 3)$.

Finn volumet av prismet.


:::::{answer}
$$
V = 6
$$


::::{solution}
Volumet av prismet er gitt ved 

$$
V = \abs{\vec{G} \cdot \vec{c}}
$$

der $\vec{G}$ er grunnflatevektoren og $\vec{c}$ er en vektor som peker fra et punkt på grunnflaten til et punkt på toppflaten. Siden grunnflaten er en trekant, så kan vi finne grunnflatevektoren ved 

$$
\vec{G} = \dfrac{1}{2} \lvec{AB} \times \lvec{AC}
$$

Vi har at 

$$
\lvec{AB} = \mqty[1, 1, -1] \qog \lvec{AC} = \mqty[-1, 3, 0]
$$

Kryssproduktet av de to vektorene er gitt ved 

$$
\begin{align*}
\lvec{AB} \times \lvec{AC} &= \mqty|\vec{e}_x & \vec{e}_y & \vec{e}_z \\ 1 & 1 & -1 \\ -1 & 3 & 0| \\
\\
&= \vec{e}_x \cdot \mqty|1 & -1 \\ 3 & 0| - \vec{e}_y \cdot \mqty|1 & -1 \\ -1 & 0| + \vec{e}_z \cdot \mqty|1 & 1 \\ -1 & 3| \\
\\
&= \vec{e}_x \cdot (0 + 3) - \vec{e}_y \cdot (0 - 1) + \vec{e}_z \cdot (3 + 1) \\
\\
&= 3 \cdot \vec{e}_x + 1 \cdot \vec{e}_y + 4 \cdot \vec{e}_z \\
\\
&= [3, 1, 4]
\end{align*}
$$

Grunnflatevektoren er da gitt ved

$$
\vec{G} = \dfrac{1}{2} \lvec{AB} \times \lvec{AC} = \dfrac{1}{2} \cdot [3, 1, 4]
$$

Så finner vi en vektor $\vec{c}$ som peker fra et punkt på grunnflaten til et punkt på toppflaten. Vi kan for eksempel bruke punktene $A$ og $D$. Da er

$$
\vec{c} = \lvec{AD} = \mqty[1, 1, 2]
$$

Volumet blir da:

$$
\begin{align*}
V &= \abs{\vec{G} \cdot \vec{c}} \\
\\
&= \abs{\dfrac{1}{2} [3, 1, 4] \cdot [1, 1, 2]} \\
\\
&= \abs{\dfrac{1}{2} (3\cdot 1 + 1\cdot 1 + 4\cdot 2)} \\
\\
&= \abs{\dfrac{1}{2} (3 + 1 + 8)} \\
\\
&= \abs{\dfrac{12}{2}} \\
\\
&= 6
\end{align*}
$$

::::
:::::




:::::::::::::


:::::::::::::{part} b
:::{plot3d-2}
width: 100%
fontsize: 24
align: right
let: Ax = 1
let: Ay = 1
let: Az = 0
let: Bx = 4
let: By = 1
let: Bz = -2
let: Cx = 2 
let: Cy = 3
let: Cz = 1
let: Tx = 0
let: Ty = 3
let: Tz = 5
pyramid: apex=(Tx, Ty, Tz), base=[(Ax, Ay, Az), (Bx, By, Bz), (Cx, Cy, Cz)], base-color=blue, side-color=none, alpha=0.35
grid: true
ylabel: none
point: (Ax, Ay, Az), black
point: (Bx, By, Bz), black
point: (Cx, Cy, Cz), black
point: (Tx, Ty, Tz), black
text: at=(Ax, Ay, Az), value="$A$", ha=right, va=center
text: at=(Bx, By, Bz), value="$B$", ha=left, va=top
text: at=(Cx, Cy, Cz), value="$C$", ha=left, va=bottom
text: at=(Tx, Ty, Tz), value="$T$", ha=right, va=bottom
xrange: (-1, 6)
yrange: (-2, 5)
zrange: (-3, 6)
:::


En pyramide $ABCT$ har hjørner i punktene $A(1, 1, 0)$, $B(4, 1, -2)$, $C(2, 3, 1)$ og $T(0, 3, 5)$.

Finn volumet av pyramiden.



:::::{answer}
$$
V = \dfrac{8}{3}
$$

::::{solution}
Volumet av pyramiden er gitt ved 

$$
V = \dfrac{\abs{\vec{G} \cdot \vec{c}}}{3}
$$

der $\vec{G}$ er grunnflatevektoren og $\vec{c}$ er en vektor som peker fra et punkt på grunnflaten til toppunktet $T$.

Grunnflaten er trekantet, så grunnflatevektoren kan uttrykkes som

$$
\vec{G} = \dfrac{1}{2} \lvec{AB} \times \lvec{AC}
$$

Vi har at 

$$
\lvec{AB} = \mqty[3, 0, -2] \qog \lvec{AC} = \mqty[1, 2, 1]
$$

Kryssproduktet av de to vektorene er da 

$$
\begin{align*}
\lvec{AB} \times \lvec{AC} &= \mqty|\vec{e}_x & \vec{e}_y & \vec{e}_z \\ 3 & 0 & -2 \\ 1 & 2 & 1| \\
\\
&= \vec{e}_x \cdot \mqty|0 & -2 \\ 2 & 1| - \vec{e}_y \cdot \mqty|3 & -2 \\ 1 & 1| + \vec{e}_z \cdot \mqty|3 & 0 \\ 1 & 2| \\
\\
&= \vec{e}_x \cdot (0 + 4) - \vec{e}_y \cdot (3 + 2) + \vec{e}_z \cdot (6 - 0) \\
\\
&= 4 \cdot \vec{e}_x - 5 \cdot \vec{e}_y + 6 \cdot \vec{e}_z \\
\\
&= [4, -5, 6]
\end{align*}
$$

Så finner vi vektoren $\vec{c}$ som peker fra et punkt på grunnflaten til toppunktet $T$. Vi kan for eksempel bruke punktet $A$. Da er

$$
\vec{c} = \lvec{AT} = \mqty[-1, 2, 5]
$$

Prikkproduktet mellom $\vec{G}$ og $\vec{c}$ er da

$$
\begin{align*}
\vec{G} \cdot \vec{c} &= \dfrac{1}{2} [4, -5, 6] \cdot [-1, 2, 5] \\
\\
&= \dfrac{1}{2} (4\cdot (-1) + (-5)\cdot 2 + 6\cdot 5)\\
\\
&= \dfrac{1}{2} (-4 - 10 + 30) \\
\\
&= \dfrac{16}{2} \\
\\
&= 8
\end{align*}
$$

Altså er volumet

$$
V = \dfrac{\abs{\vec{G} \cdot \vec{c}}}{3} = \dfrac{8}{3}
$$


::::
:::::


:::::::::::::


:::::::::::::{part} c
:::{plot3d-2}
width: 100%
fontsize: 24
align: right
let: Ax = 0
let: Ay = 0
let: Az = 1
let: Bx = 2
let: By = 0
let: Bz = 0
let: Cx = 3 
let: Cy = 2
let: Cz = 0
let: Dx = -1
let: Dy = 2
let: Dz = 2
let: Tx = 4
let: Ty = 1
let: Tz = 5
pyramid: apex=(Tx, Ty, Tz), base=[(Ax, Ay, Az), (Bx, By, Bz), (Cx, Cy, Cz), (Dx, Dy, Dz)], base-color=blue, side-color=none, alpha=0.35
grid: true
ylabel: none
point: (Ax, Ay, Az), black
point: (Bx, By, Bz), black
point: (Cx, Cy, Cz), black
point: (Dx, Dy, Dz), black
point: (Tx, Ty, Tz), black
text: at=(Ax, Ay, Az), value="$A$", ha=right, va=top
text: at=(Bx, By, Bz), value="$B$", ha=right, va=top
text: at=(Cx, Cy, Cz), value="$C$", ha=left, va=top
text: at=(Dx, Dy, Dz), value="$D$", ha=center, va=bottom
text: at=(Tx, Ty, Tz), value="$T$", ha=left, va=bottom
xrange: (-1, 6)
yrange: (-2, 5)
zrange: (-1, 6)
elev: 14
:::

En pyramide $ABCDT$ har grunnflate med hjørner $A(0, 0, 1)$, $B(2, 0, 0)$, $C(3, 2, 0)$, $D(-1, 2, 2)$ og et toppunkt i $T(4, 1, 5)$.

Finn volumet av pyramiden.


:::::{answer}
$$
V = \dfrac{23}{2}
$$

::::{solution}
Siden grunnflaten er en firkant, så deler vi den opp i to trekanter. Det betyr at vi i praksis deler opp pyramiden i to mindre pyramider med trekantede grunnflater. La oss dele opp grunnflaten i trekantene $ABC$ og $ACD$. 

Trekant $ABC$ har en grunnflatevektor gitt ved

$$
\vec{G}_{ABC} = \dfrac{1}{2} \lvec{AB} \times \lvec{AC}
$$

Vi har at 

$$
\lvec{AB} = \mqty[2, 0, -1] \qog \lvec{AC} = \mqty[3, 2, -1]
$$

Kryssproduktet av de to vektorene er da

$$
\begin{align*}
\lvec{AB} \times \lvec{AC} &= \mqty|\vec{e}_x & \vec{e}_y & \vec{e}_z \\ 2 & 0 & -1 \\ 3 & 2 & -1| \\
\\
&= \vec{e}_x \cdot \mqty|0 & -1 \\ 2 & -1| - \vec{e}_y \cdot \mqty|2 & -1 \\ 3 & -1| + \vec{e}_z \cdot \mqty|2 & 0 \\ 3 & 2| \\
\\
&= \vec{e}_x \cdot (0 + 2) - \vec{e}_y \cdot (-2 + 3) + \vec{e}_z \cdot (4 - 0) \\
\\
&= 2 \cdot \vec{e}_x - 1 \cdot \vec{e}_y + 4 \cdot \vec{e}_z \\
\\
&= [2, -1, 4]
\end{align*}
$$

En vektor som peker fra et punkt i grunnflaten til toppunktet er gitt ved

$$
\lvec{AT} = \mqty[4, 1, 4]
$$

Volumet av pyramiden med grunnflate $ABC$ er da gitt ved


$$
\begin{align*}
V_{ABCT} &= \dfrac{\abs{\vec{G}_{ABC} \cdot \lvec{AT}}}{3} \\
\\
&= \dfrac{\abs{\dfrac{1}{2} [2, -1, 4] \cdot [4, 1, 4]}}{3} \\
\\
&= \dfrac{\abs{\dfrac{1}{2} (2\cdot 4 + (-1)\cdot 1 + 4\cdot 4)}}{3} \\
\\
&= \dfrac{\abs{\dfrac{1}{2} (8 - 1 + 16)}}{3} \\
\\
&= \dfrac{\abs{\dfrac{23}{2}}}{3} \\
\\
&= \dfrac{23}{6}
\end{align*}
$$


Så finner vi en grunnflatevektor for trekant $ACD$. En slik vektor er gitt ved 

$$
\vec{G}_{ACD} = \dfrac{1}{2} \lvec{AC} \times \lvec{AD}
$$

Vi har at $\lvec{AD} = \mqty[-1, 2, 1]$. Kryssproduktet av de to vektorene er da

$$
\begin{align*}
\lvec{AC} \times \lvec{AD} &= \mqty|\vec{e}_x & \vec{e}_y & \vec{e}_z \\ 3 & 2 & -1 \\ -1 & 2 & 1| \\
\\
&= \vec{e}_x \cdot \mqty|2 & -1 \\ 2 & 1| - \vec{e}_y \cdot \mqty|3 & -1 \\ -1 & 1| + \vec{e}_z \cdot \mqty|3 & 2 \\ -1 & 2| \\
\\
&= \vec{e}_x \cdot (2 + 2) - \vec{e}_y \cdot (3 - 1) + \vec{e}_z \cdot (6 + 2) \\
\\
&= 4 \cdot \vec{e}_x - 2 \cdot \vec{e}_y + 8 \cdot \vec{e}_z \\
\\
&= [4, -2, 8]
\end{align*}
$$

Grunnflatevektoren er dermed

$$
\vec{G}_{ACD} = \dfrac{1}{2} [4, -2, 8] = [2, -1, 4]
$$

Volumet av pyramiden med grunnflate $ACD$ er da gitt ved

$$
\begin{align*}
V_{ACDT} &= \dfrac{\abs{\vec{G}_{ACD} \cdot \lvec{AT}}}{3} \\
\\
&= \dfrac{\abs{[2, -1, 4] \cdot [4, 1, 4]}}{3} \\
\\
&= \dfrac{\abs{(2\cdot 4 + (-1)\cdot 1 + 4\cdot 4)}}{3} \\
\\
&= \dfrac{\abs{(8 - 1 + 16)}}{3} \\
\\
&= \dfrac{23}{3}
\end{align*}
$$

Volumet av hele pyramiden er da gitt ved summen av de to volumene:

$$
V = V_{ABCT} + V_{ACDT} = \dfrac{23}{6} + \dfrac{23}{3} = \dfrac{23}{6} + \dfrac{46}{6} = \dfrac{69}{6} = \dfrac{23}{2}
$$

::::
:::::


:::::::::::::


:::::::::::::::


---


:::::::::::::::{exercise} Oppgave 6
:::{plot3d-2}
width: 100%
fontsize: 24
align: right
let: Ax = 1
let: Ay = 1
let: Az = 0
let: Bx = 4
let: By = 2
let: Bz = 0
let: Cx = 1 
let: Cy = 4
let: Cz = 1
let: Tx = 0
let: Ty = 2
let: Tz = 4
pyramid: apex=(Tx, Ty, Tz), base=[(Ax, Ay, Az), (Bx, By, Bz), (Cx, Cy, Cz)], base-color=blue, side-color=none, alpha=0.35
grid: true
ylabel: none
point: (Ax, Ay, Az), black
point: (Bx, By, Bz), black
point: (Cx, Cy, Cz), black
point: (Tx, Ty, Tz), black
text: at=(Ax, Ay, Az), value="$A$", ha=right, va=center
text: at=(Bx, By, Bz), value="$B$", ha=left, va=top
text: at=(Cx, Cy, Cz), value="$C$", ha=left, va=bottom
text: at=(Tx, Ty, Tz), value="$T$", ha=right, va=bottom
xrange: (-1, 6)
yrange: (-2, 5)
zrange: (-1, 6)
azim: -40
elev: 10
:::


En pyramide $ABCT$ er gitt ved punktene $A(1, 1, 0)$, $B(4, 2, 0)$, $C(1, 4, 1)$ og $T(0, 2, 4)$.


:::::::::::::{part} a
Finn volumet av pyramiden.


:::::{answer}
$$
V = \dfrac{16}{3}
$$

::::{solution}
Grunnflaten er trekantet. En grunnflatevektor er derfor gitt ved 

$$
\vec{G} = \dfrac{1}{2} \lvec{AB} \times \lvec{AC}
$$

Vi har at 

$$
\lvec{AB} = \mqty[3, 1, 0] \qog \lvec{AC} = \mqty[0, 3, 1]
$$

Kryssproduktet av de to vektorene er da

$$
\begin{align*}
\lvec{AB} \times \lvec{AC} &= \mqty|\vec{e}_x & \vec{e}_y & \vec{e}_z \\ 3 & 1 & 0 \\ 0 & 3 & 1| \\
\\
&= \vec{e}_x \cdot \mqty|1 & 0 \\ 3 & 1| - \vec{e}_y \cdot \mqty|3 & 0 \\ 0 & 1| + \vec{e}_z \cdot \mqty|3 & 1 \\ 0 & 3| \\
\\
&= \vec{e}_x \cdot (1 - 0) - \vec{e}_y \cdot (3 - 0) + \vec{e}_z \cdot (9 - 0) \\
\\
&= 1 \cdot \vec{e}_x - 3 \cdot \vec{e}_y + 9 \cdot \vec{e}_z \\
\\
&= [1, -3, 9]
\end{align*}
$$

Grunnflatevektoren er derfor

$$
\vec{G} = \dfrac{1}{2} [1, -3, 9]
$$

En vektor som peker fra et punkt i grunnflaten til toppunktet $T$ er gitt ved

$$
\lvec{AT} = \mqty[-1, 1, 4]
$$

Volumet av pyramiden er da gitt ved

$$
\begin{align*}
V &= \dfrac{\abs{\vec{G} \cdot \lvec{AT}}}{3} \\
\\
&= \dfrac{\abs{\dfrac{1}{2} [1, -3, 9] \cdot [-1, 1, 4]}}{3} \\
\\
&= \dfrac{\abs{\dfrac{1}{2} (1\cdot -1 + (-3)\cdot 1 + 9\cdot 4)}}{3} \\
\\
&= \dfrac{\abs{\dfrac{1}{2} (-1 - 3 + 36)}}{3} \\
\\
&= \dfrac{\abs{\dfrac{32}{2}}}{3} \\
\\
&= \dfrac{16}{3}
\end{align*}
$$

::::
:::::


:::::::::::::


:::::::::::::{part} b
Finn arealet av sideflaten $BCT$. 


:::::{answer}
$$
G_{BCT} = 4\sqrt{3}
$$

::::{solution}
Sideflaten er en trekant, så arealvektoren $\vec{G}$ er gitt ved 

$$
\vec{G}_{BCT} = \dfrac{1}{2} \lvec{BC} \times \lvec{BT}
$$

Vi har at

$$
\lvec{BC} = \mqty[-3, 2, 1] \qog \lvec{BT} = \mqty[-4, 0, 4]
$$

Kryssproduktet av de to vektorene er da

$$
\begin{align*}
\lvec{BC} \times \lvec{BT} &= \mqty|\vec{e}_x & \vec{e}_y & \vec{e}_z \\ -3 & 2 & 1 \\ -4 & 0 & 4| \\
\\
&= \vec{e}_x \cdot \mqty|2 & 1 \\ 0 & 4| - \vec{e}_y \cdot \mqty|-3 & 1 \\ -4 & 4| + \vec{e}_z \cdot \mqty|-3 & 2 \\ -4 & 0| \\
\\
&= \vec{e}_x \cdot (8 - 0) - \vec{e}_y \cdot (-12 + 4) + \vec{e}_z \cdot (0 + 8) \\
\\
&= 8 \cdot \vec{e}_x + 8 \cdot \vec{e}_y + 8 \cdot \vec{e}_z \\
\\
&= [8, 8, 8] \\
\\
&= 8 \cdot [1, 1, 1]
\end{align*}
$$

Arealet av trekanten $BCT$ er da gitt ved

$$
\begin{align*}
G_{BCT} &= \abs{\vec{G}_{BCT}} \\
\\
&= \abs{\dfrac{1}{2} \lvec{BC} \times \lvec{BT}} \\
\\
&= \dfrac{1}{2} \abs{8 \cdot [1, 1, 1]} \\
\\
&= \dfrac{1}{2} \cdot 8 \sqrt{1^2 + 1^2 + 1^2} \\
\\
&= \dfrac{1}{2} \cdot 8\sqrt{3} \\
\\
&= 4\sqrt{3}
\end{align*}
$$



::::
:::::

:::::::::::::

:::::::::::::::


---


:::::::::::::::{exercise} Oppgave 7

:::{plot3d-2}
width: 100%
align: right
ticks: off
xrange: (-3, 8)
yrange: (-1, 6)
zrange: (-1, 5)
fontsize: 24
let: Ax = 1
let: Ay = 1
let: Az = 0
let: Bx = 5
let: By = 5
let: Bz = 0
let: Cx = 5
let: Cy = 6
let: Cz = 1
let: Dx = 3
let: Dy = 5
let: Dz = 2
let: Tx = 7
let: Ty = 0
let: Tz = 5
pyramid: apex=(Tx, Ty, Tz), base=[(Ax, Ay, Az), (Bx, By, Bz), (Cx, Cy, Cz), (Dx, Dy, Dz)], base-color=blue, side-color=none, alpha=0.35
ylabel: none
azim: -50
elev: 10
text: at=(Ax, Ay, Az), value="$A$", ha=right, va=center
text: at=(Bx, By, Bz), value="$B$", ha=center, va=top
text: at=(Cx, Cy, Cz), value="$C$", ha=left, va=center
text: at=(Dx, Dy, Dz), value="$D$", ha=left, va=bottom
text: at=(Tx, Ty, Tz), value="$T$", ha=center, va=bottom
:::



En pyramide $ABCDT$ har grunnflate med hjørner $A(1, 1, 0)$, $B(5, 5, 0)$, $C(5, 6, 1)$ og $D(3, 5, 2)$.

Pyramiden har et toppunkt i $T(7, 0, 5)$.

:::::::::::::{part} a
Finn arealet av grunnflaten $ABCD$.



:::::{answer}
$$
G_{ABCD} = 5\sqrt{3}
$$

::::{solution}
Vi deler opp grunnflaten i to trekanter $ABC$ og $ACD$. 

Arealvektoren til $ABC$ er gitt ved 

$$
\vec{G}_{ABC} = \dfrac{1}{2} \lvec{AB} \times \lvec{AC}
$$

Vi har at 

$$
\lvec{AB} = \mqty[4, 4, 0] \qog \lvec{AC} = \mqty[4, 5, 1]
$$

Kryssproduktet av de to vektorene er da

$$
\begin{align*}
\lvec{AB} \times \lvec{AC} &= \mqty|\vec{e}_x & \vec{e}_y & \vec{e}_z \\ 4 & 4 & 0 \\ 4 & 5 & 1| \\
\\
&= \vec{e}_x \cdot \mqty|4 & 0 \\ 5 & 1| - \vec{e}_y \cdot \mqty|4 & 0 \\ 4 & 1| + \vec{e}_z \cdot \mqty|4 & 4 \\ 4 & 5| \\
\\
&= \vec{e}_x \cdot (4 - 0) - \vec{e}_y \cdot (4 - 0) + \vec{e}_z \cdot (20 - 16) \\
\\
&= 4 \cdot \vec{e}_x - 4 \cdot \vec{e}_y + 4 \cdot \vec{e}_z \\
\\
&= [4, -4, 4] \\
\\
&= 4 \cdot [1, -1, 1]
\end{align*}
$$

Altså er arealvektoren for trekant $ABC$ gitt ved

$$
\vec{G}_{ABC} = \dfrac{1}{2} \lvec{AB} \times \lvec{AC} = 2 \cdot [1, -1, 1]
$$

Arealet av $ABC$ er lik lengden av denne vektoren:

$$
G_{ABC} = \abs{\vec{G}_{ABC}} = \abs{2 \cdot [1, -1, 1]} = 2 \sqrt{1^2 + (-1)^2 + 1^2} = 2\sqrt{3}
$$

Så finner vi arealvektoren for trekant $ACD$. En slik vektor er gitt ved

$$
\vec{G}_{ACD} = \dfrac{1}{2} \lvec{AC} \times \lvec{AD}
$$

Vi har at

$$
\lvec{AC} = \mqty[4, 5, 1] \qog \lvec{AD} = \mqty[2, 4, 2]
$$

Vi regner ut kryssproduktet av de to vektorene:

$$
\begin{align*}
\lvec{AC} \times \lvec{AD} &= \mqty|\vec{e}_x & \vec{e}_y & \vec{e}_z \\ 4 & 5 & 1 \\ 2 & 4 & 2| \\
\\
&= \vec{e}_x \cdot \mqty|5 & 1 \\ 4 & 2| - \vec{e}_y \cdot \mqty|4 & 1 \\ 2 & 2| + \vec{e}_z \cdot \mqty|4 & 5 \\ 2 & 4| \\
\\
&= \vec{e}_x \cdot (10 - 4) - \vec{e}_y \cdot (8 - 2) + \vec{e}_z \cdot (16 - 10) \\
\\
&= 6 \cdot \vec{e}_x - 6 \cdot \vec{e}_y + 6 \cdot \vec{e}_z \\
\\
&= [6, -6, 6] \\
\\
&= 6 \cdot [1, -1, 1]
\end{align*}
$$

Ergo er arealvektoren for trekant $ACD$ gitt ved

$$
\vec{G}_{ACD} = \dfrac{1}{2} \lvec{AC} \times \lvec{AD} = 3 \cdot [1, -1, 1]
$$

Da er arealet av trekant $ACD$ lik lengden av denne vektoren:

$$
G_{ACD} = \abs{\vec{G}_{ACD}} = \abs{3 \cdot [1, -1, 1]} = 3 \sqrt{1^2 + (-1)^2 + 1^2} = 3\sqrt{3}
$$

Arealet av grunnflaten $ABCD$ er da gitt ved summen av arealene til de to trekantene:

$$
G_{ABCD} = G_{ABC} + G_{ACD} = 2\sqrt{3} + 3\sqrt{3} = 5\sqrt{3}
$$
::::
:::::

:::::::::::::


:::::::::::::{part} b 
Finn volumet av pyramiden $ABCDT$.


:::::{answer}
$$
V_{ABCDT} = 20
$$

::::{solution}
Fra oppgave **a** har vi de to grunnflatevektorene 

$$
\vec{G}_{ABC} = 2 \cdot [1, -1, 1] \qog \vec{G}_{ACD} = 3 \cdot [1, -1, 1]
$$

Vi deler opp pyramiden $ABCDT$ i to mindre pyramider med de to trekantede grunnflatene $ABC$ og $ACD$. For å finne volumet av pyramiden må vi ha en vektor $\vec{c}$ som peker fra et punkt på grunnflaten opp til toppunktet $T$. Vi kan for eksempel bruke punktet $A$. Da er

$$
\vec{c} = \lvec{AT} = \mqty[6, -1, 5]
$$

For pyramiden med grunnflate $ABC$ er volumet gitt ved

$$
\begin{align*}
V_{ABCT} &= \dfrac{\abs{\vec{G}_{ABC} \cdot \vec{c}}}{3} \\
\\
&= \dfrac{\abs{2 \cdot [1, -1, 1] \cdot [6, -1, 5]}}{3} \\
\\
&= \dfrac{\abs{2 \cdot (6 + 1 + 5)}}{3} \\
\\
&= \dfrac{\abs{2 \cdot 12}}{3} \\
\\
&= \dfrac{24}{3} \\
\\
&= 8
\end{align*}
$$

For pyramiden med grunnflate $ACD$ er volumet gitt ved

$$
\begin{align*}
V_{ACDT} &= \dfrac{\abs{\vec{G}_{ACD} \cdot \vec{c}}}{3} \\
\\
&= \dfrac{\abs{3 \cdot [1, -1, 1] \cdot [6, -1, 5]}}{3} \\
\\
&= \dfrac{\abs{3 \cdot (6 + 1 + 5)}}{3} \\
\\
&= \dfrac{\abs{3 \cdot 12}}{3} \\
\\
&= \dfrac{36}{3} \\
\\
&= 12
\end{align*}
$$

Volumet av hele pyramiden er dermed

$$
V_{ABCDT} = V_{ABCT} + V_{ACDT} = 8 + 12 = 20
$$

::::
:::::

:::::::::::::

:::::::::::::::



---



:::::::::::::::{exercise} Oppgave 8
Tre vektorer er gitt ved 

$$
\vec{a} = \mqty[-2, 1, 3] \qog \vec{b} = \mqty[1, 2, -1] \qog \vec{c} = \mqty[3, 0, 2]
$$


:::::::::::::{part} a
Finn $\vec{a} \times \vec{b}$.


:::::{answer}
$$
\vec{a} \times \vec{b} = [-7, 1, -5]
$$

::::{solution}
$$
\begin{align*}
\vec{a} \times \vec{b} &= \mqty|\vec{e}_x & \vec{e}_y & \vec{e}_z \\ -2 & 1 & 3 \\ 1 & 2 & -1| \\
\\
&= \vec{e}_x \cdot \underbrace{\mqty|1 & 3 \\ 2 & -1|}_{=-7} - \vec{e}_y \cdot \underbrace{\mqty|-2 & 3 \\ 1 & -1|}_{=-1} + \vec{e}_z \cdot \underbrace{\mqty|-2 & 1 \\ 1 & 2|}_{=-5} \\
\\
&= -7 \cdot \vec{e}_x + 1 \cdot \vec{e}_y - 5 \cdot \vec{e}_z \\
\\
&= [-7, 1, -5]
\end{align*}
$$
::::
:::::

:::::::::::::


:::::::::::::{part} b
Finn $\vec{b} \times \vec{c}$.


:::::{answer}
$$
\vec{b} \times \vec{c} = [4, -5, -6]
$$


::::{solution}
$$
\begin{align*}
\vec{b} \times \vec{c} &= \mqty|\vec{e}_x & \vec{e}_y & \vec{e}_z \\ 1 & 2 & -1 \\ 3 & 0 & 2| \\
\\
&= \vec{e}_x \cdot \mqty|2 & -1 \\ 0 & 2| - \vec{e}_y \cdot \mqty|1 & -1 \\ 3 & 2| + \vec{e}_z \cdot \mqty|1 & 2 \\ 3 & 0| \\
\\
&= \vec{e}_x \cdot (4 - 0) - \vec{e}_y \cdot (2 + 3) + \vec{e}_z \cdot (0 - 6) \\
\\
&= 4 \cdot \vec{e}_x - 5 \cdot \vec{e}_y - 6 \cdot \vec{e}_z \\
\\
&= [4, -5, -6]
\end{align*}
$$
::::
:::::


:::::::::::::


:::::::::::::{part} c
Finn $(\vec{a} \times \vec{b}) \times \vec{c}$.


:::::{answer}
$$
(\vec{a} \times \vec{b}) \times \vec{c} = [2, -1, -3]
$$

::::{solution}
$$
\begin{align*}
(\vec{a} \times \vec{b}) \times \vec{c} &= \mqty|\vec{e}_x & \vec{e}_y & \vec{e}_z \\ -7 & 1 & -5 \\ 3 & 0 & 2| \\
\\
&= \vec{e}_x \cdot \mqty|1 & -5 \\ 0 & 2| - \vec{e}_y \cdot \mqty|-7 & -5 \\ 3 & 2| + \vec{e}_z \cdot \mqty|-7 & 1 \\ 3 & 0| \\
\\
&= \vec{e}_x \cdot (2 - 0) - \vec{e}_y \cdot (-14 + 15) + \vec{e}_z \cdot (0 - 3) \\
\\
&= 2 \cdot \vec{e}_x - 1 \cdot \vec{e}_y - 3 \cdot \vec{e}_z \\
\\
&= [2, -1, -3]
\end{align*}
$$
::::
:::::

:::::::::::::


:::::::::::::{part} d
Finn $\vec{a} \times (\vec{b} \times \vec{c})$.


:::::{answer}
$$
\vec{a} \times (\vec{b} \times \vec{c}) = [9, 0, 6]
$$

::::{solution}
$$
\begin{align*}
\vec{a} \times (\vec{b} \times \vec{c}) &= \mqty|\vec{e}_x & \vec{e}_y & \vec{e}_z \\ -2 & 1 & 3 \\ 4 & -5 & -6| \\
\\
&= \vec{e}_x \cdot \mqty|1 & 3 \\ -5 & -6| - \vec{e}_y \cdot \mqty|-2 & 3 \\ 4 & -6| + \vec{e}_z \cdot \mqty|-2 & 1 \\ 4 & -5| \\
\\
&= \vec{e}_x \cdot (-6 + 15) - \vec{e}_y \cdot (12 - 12) + \vec{e}_z \cdot (10 - 4) \\
\\
&= 9 \cdot \vec{e}_x - 0 \cdot \vec{e}_y + 6 \cdot \vec{e}_z \\
\\
&= [9, 0, 6]
\end{align*}
$$
::::
:::::


:::::::::::::


:::::::::::::{part} e
Hvilken generell sammenheng kan du trekke fra svarene i oppgave **c** og **d**? 


:::::{answer}
Kryssproduktet er ikke **assosiativt** som betyr at 

$$
(\vec{a} \times \vec{b}) \times \vec{c} \neq \vec{a} \times (\vec{b} \times \vec{c})
$$

Vektoren vi får er avhengig av rekkefølgen vi utfører kryssproduktene i. Vi er vant til at når vi ganger sammen tre tall $a$, $b$ og $c$, så er 

$$
(a \cdot b) \cdot c = a \cdot (b \cdot c) 
$$

så da skriver vi bare produktet som $a \cdot b \cdot c$ siden det ikke spiller noen rolle hvilke tall vi ganger sammen først. 

Men dette er ikke sant for kryssproduktet.
:::::


:::::::::::::


:::::::::::::::


---



:::::::::::::::{exercise} Oppgave 9
Avgjør om påstandene nedenfor stemmer. Hvis du mener påstanden er feil, finn et moteksempel.


:::::::::::::{part} a
**Påstand**:

Hvis to vektorer $\vec{a}$ og $\vec{b}$ er parallelle, så er $\vec{a} \times \vec{b} = \vec{0}$.


:::::{answer}
Sann.

::::{solution}
Dersom $\vec{a}$ og $\vec{b}$ er parallelle, så får vi et parallellogram som har areal lik null. Det betyr at 

$$
\abs{a \times \vec{b}} = 0 \liff \vec{a} \times \vec{b} = \vec{0}
$$

::::
:::::

:::::::::::::


:::::::::::::{part} b
**Påstand**:

Gitt to vektorer $\vec{a}$ og $\vec{b}$ der $\vec{a} \cdot \vec{b} = 0$, så er $\abs{\vec{a} \times \vec{b}} = \abs{\vec{a}} \cdot \abs{\vec{b}}$.


:::::{answer}
Sann.


::::{solution}
Generelt har vi at 

$$
\abs{\vec a \times \vec b} = \abs{\vec a} \cdot \abs{\vec b} \cdot \sin\varphi
$$

Dersom $\vec a \cdot \vec b = 0$, så er vinkelen mellom vektorene $\varphi = 90^\circ$. Dermed får vi at $\sin\varphi = 1$, og vi får

$$
\abs{\vec a \times \vec b} = \abs{\vec a} \cdot \abs{\vec b} \cdot 1 = \abs{\vec a} \cdot \abs{\vec b}
$$

Altså er påstanden sann.
::::
:::::


:::::::::::::


:::::::::::::{part} c
**Påstand**:

Gitt to vektorer $\vec{a}$ og $\vec{b}$, så er $\abs{\vec{a} \times \vec{b}} = \abs{\vec{b} \times \vec{a}}$.


:::::{answer}
Sann.

::::{solution}
For alle vektorer $\vec{a}$ og $\vec b$ så er 

$$
\vec{a} \times \vec b = -(\vec b \times \vec a)$
$$

Rekkefølgen på kryssproduktet gir altså to vektorer som er antiparallelle, men som har samme lengde. Ergo er påstanden sann.
::::
:::::

:::::::::::::


:::::::::::::{part} d
**Påstand**:

Gitt tre vektorer $\vec{a}$, $\vec{b}$ og $\vec{c}$, så er

$$
\abs{(\vec{a} \times \vec{b}) \cdot \vec{c}} = \abs{\vec{a} \cdot (\vec{b} \times \vec{c})}
$$



:::::{answer}
Sann.

::::{solution}
Vi kan tolke uttrykket på venstre side som at det er et prisme med grunnflatevektor $\vec{a} \times \vec{b}$ og en vektor $\vec{c}$ som forbinder grunnflaten med toppflaten. Men vi kan snu om på situasjonen og tolke $\vec{b} \times \vec{c}$ som grunnflatevektoren og $\vec{a}$ som vektoren som forbinder grunnflaten med toppflaten. 

Volumet blir uansett likt, så derfor må 

$$
\abs{(\vec{a} \times \vec{b}) \cdot \vec{c}} = \abs{\vec{a} \cdot (\vec{b} \times \vec{c})}
$$
::::
:::::


:::::::::::::



:::::::::::::::


