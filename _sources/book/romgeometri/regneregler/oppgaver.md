# Vektorer i 3D: Oppgaver



:::::::::::::::{exercise} Oppgave 1
:::::::::::::{part} a
:::{plot3d-2}
width: 100%
fontsize: 24
align: right
xrange: (-1, 5)
yrange: (-1, 5)
zrange: (-1, 5)
let: Ax = 1
let: Ay = 3
let: Az = 2
point: (Ax, Ay, Az), black
vector: (0, 0, 0), (Ax, Ay, Az), blue
line-segment: from=(Ax, Ay, 0), to=(Ax, Ay, Az), linestyle=dashed, color=red
line-segment: from=(Ax, Ay, 0), to=(Ax, 0, 0), linestyle=dashed, color=red
line-segment: from=(Ax, Ay, 0), to=(0, Ay, 0), linestyle=dashed, color=red
line-segment: from=(0, 0, Az), to=(Ax, Ay, Az), linestyle=dashed, color=red
text: at=(0.5 * Ax, 0.5 * Ay, 0.5 * Az), value="$\vec{a}$", ha=right, va=bottom
azim: -45
grid: true
:::

Bestem koordinatene til vektoren $\vec{a}$ som vises i figuren til høyre.


:::::{answer}
$$
\vec{a} = [1, 3, 2]
$$
:::::



:::::::::::::


:::::::::::::{part} b
:::{plot3d-2}
width: 100%
fontsize: 24
align: right
xrange: (-1, 5)
yrange: (-3, 3)
zrange: (-1, 5)
let: Ax = 4
let: Ay = -2
let: Az = 3
point: (Ax, Ay, Az), black
vector: (0, 0, 0), (Ax, Ay, Az), blue
line-segment: from=(Ax, Ay, 0), to=(Ax, Ay, Az), linestyle=dashed, color=red
line-segment: from=(Ax, Ay, 0), to=(Ax, 0, 0), linestyle=dashed, color=red
line-segment: from=(Ax, Ay, 0), to=(0, Ay, 0), linestyle=dashed, color=red
line-segment: from=(0, 0, Az), to=(Ax, Ay, Az), linestyle=dashed, color=red
text: at=(0.5 * Ax, 0.5 * Ay, 0.5 * Az), value="$\vec{b}$", ha=right, va=bottom
azim: -75
grid: true
:::

Bestem koordinatene til vektoren $\vec{b}$ som vises i figuren til høyre.


:::::{answer}
$$
\vec{b} = [4, -2, 3]
$$
:::::

:::::::::::::



:::::::::::::{part} c
:::{plot3d-2}
width: 100%
fontsize: 24
align: right
xrange: (-3, 4)
yrange: (-3, 4)
zrange: (-3, 6)
let: Ax = -2
let: Ay = 3
let: Az = 5
point: (Ax, Ay, Az), black
vector: (0, 0, 0), (Ax, Ay, Az), blue
line-segment: from=(Ax, Ay, 0), to=(Ax, Ay, Az), linestyle=dashed, color=red
line-segment: from=(Ax, Ay, 0), to=(Ax, 0, 0), linestyle=dashed, color=red
line-segment: from=(Ax, Ay, 0), to=(0, Ay, 0), linestyle=dashed, color=red
line-segment: from=(0, 0, Az), to=(Ax, Ay, Az), linestyle=dashed, color=red
text: at=(0.5 * Ax, 0.5 * Ay, 0.5 * Az), value="$\vec{c}$", ha=left, va=bottom
azim: -85
grid: true
:::

Bestem koordinatene til vektoren $\vec{c}$ som vises i figuren til høyre.

:::::{answer}
$$
\vec{c} = [-2, 3, 5]
$$
:::::



:::::::::::::::



---


:::::::::::::::{exercise} Oppgave 2
:::::::::::::{part} a
Gitt punktene $A(1, 2, 3)$ og $B(4, -1, 5)$. 

Finn vektoren $\lvec{AB}$.



:::::{answer}
$$
\lvec{AB} = [3, -3, 2]
$$

::::{solution}
Posisjonsvektorene til de to punktene er gitt ved

$$
\lvec{OA} = [1, 2, 3] \qog \lvec{OB} = [4, -1, 5].
$$

Vektoren fra $A$ til $B$ er da gitt ved

$$
\lvec{AB} = \lvec{OB} - \lvec{OA} = [4, -1, 5] - [1, 2, 3] = [3, -3, 2].
$$
::::
:::::



:::::::::::::


:::::::::::::{part} b
Gitt punktene $C(-2, 3, 1)$ og $D(0, -1, 4)$.

Finn vektoren $\lvec{CD}$.


:::::{answer}
$$
\lvec{CD} = [2, -4, 3]
$$


::::{solution}
Posisjonsvektorene til de to punktene er gitt ved

$$
\lvec{OC} = [-2, 3, 1] \qog \lvec{OD} = [0, -1, 4].
$$

Vektoren fra $C$ til $D$ er da gitt ved

$$
\lvec{CD} = \lvec{OD} - \lvec{OC} = [0, -1, 4] - [-2, 3, 1] = [2, -4, 3].
$$
::::
:::::


:::::::::::::


:::::::::::::{part} c
Gitt punktene $E(2, 0, -1)$ og $F(-3, 4, 2)$.

Finn vektoren $\lvec{EF}$.


:::::{answer}
$$
\lvec{EF} = [-5, 4, 3]
$$

::::{solution}
Posisjonsvektorene til de to punktene er gitt ved 

$$
\lvec{OE} = [2, 0, -1] \qog \lvec{OF} = [-3, 4, 2].
$$

Dermed er vektoren fra $E$ til $F$ gitt ved

$$
\lvec{EF} = \lvec{OF} - \lvec{OE} = [-3, 4, 2] - [2, 0, -1] = [-5, 4, 3].
$$
::::
:::::


:::::::::::::

:::::::::::::::



---



:::::::::::::::{exercise} Oppgave 3
:::::::::::::{part} a
Gitt vektoren $\vec{a} = [2, 3, -1]$. 

Finn $\abs{\vec{a}}$.


:::::{answer}
$$
\abs{\vec{a}} = \sqrt{14}
$$


::::{solution}
$$
\abs{\vec{a}} = \sqrt{2^2 + 3^2 + (-1)^2} = \sqrt{4 + 9 + 1} = \sqrt{14}
$$
::::
:::::
:::::::::::::


:::::::::::::{part} b
Gitt vektoren $\vec{b} = [-1, 4, 6]$.

Finn $\abs{\vec{b}}$.


:::::{answer}
$$
\abs{\vec{b}} = \sqrt{53}
$$

::::{solution}
$$
\abs{\vec{b}} = \sqrt{(-1)^2 + 4^2 + 6^2} = \sqrt{1 + 16 + 36} = \sqrt{53}
$$
::::
:::::


:::::::::::::


:::::::::::::{part} c
Gitt vektoren $\vec{c} = [0, -2, 5]$.


Finn $\abs{\vec{c}}$.


:::::{answer}
$$
\abs{\vec{c}} = \sqrt{29}
$$

::::{solution}
$$
\abs{\vec{c}} = \sqrt{0^2 + (-2)^2 + 5^2} = \sqrt{0 + 4 + 25} = \sqrt{29}
$$
::::
:::::


:::::::::::::


:::::::::::::::



---



:::::::::::::::{exercise} Oppgave 4
To punkter er gitt ved $A(1, 3, -2)$ og $B(4, -1, 5)$.


:::::::::::::{part} a
Finn $\lvec{OA}$ og $\lvec{OB}$.


:::::{answer}
$$
\lvec{OA} = [1, 3, -2] \qog \lvec{OB} = [4, -1, 5].
$$

::::{solution}
Posisjonsvektorene fra origo $O$ ut til punktene har de samme koordinatene som punktene, så 

$$
\lvec{OA} = [1, 3, -2] \qog \lvec{OB} = [4, -1, 5].
$$
::::
:::::


:::::::::::::


:::::::::::::{part} b
Finn $\lvec{AB}$.


:::::{answer}
$$
\lvec{AB} = [3, -4, 7]
$$

::::{solution}
Vektoren som peker fra $A$ til $B$ er gitt ved 

$$
\begin{align*}
\lvec{AB} &= \lvec{OB} - \lvec{OA} \\
\\
&= [4, -1, 5] - [1, 3, -2] \\
\\
&= [4 - 1, -1 - 3, 5 - (-2)] \\
\\
&= [3, -4, 7]
\end{align*}
$$
::::
:::::

:::::::::::::


:::::::::::::{part} c
Finn lengden av linjestykket $AB$.


:::::{answer}
$$
AB = \sqrt{74}
$$

::::{solution}
Lengden av linjestykket $AB$ er gitt ved

$$
\begin{align*}
AB &= \abs{\lvec{AB}} \\
\\
&= \sqrt{3^2 + (-4)^2 + 7^2} \\
\\
&= \sqrt{9 + 16 + 49} \\
\\
&= \sqrt{74}
\end{align*}
$$
::::
:::::

:::::::::::::


:::::::::::::::



---



:::::::::::::::{exercise} Oppgave 5
Gitt vektorene

$$
\vec{u} = [2, 1, 4] \qog \vec{v} = [-3, 4, -1].
$$


:::::::::::::{part} a
En vektor $\vec{a}$ er gitt ved 

$$
\vec{a} = 3 \vec{u}.
$$

Finn $\vec{a}$.


:::::{answer}
$$
\vec{a} = [6, 3, 12]
$$

::::{solution}
$$
\vec{a} = 3 \cdot \vec{u} = 3 \cdot [2, 1, 4] = [3 \cdot 2, 3\cdot 1, 3 \cdot 4] = [6, 3, 12]
$$
::::
:::::


:::::::::::::


:::::::::::::{part} b
En vektor $\vec{b}$ er gitt ved

$$
\vec{b} = -2 \vec{v}.
$$

Finn $\vec{b}$.


:::::{answer}
$$
\vec{b} = [6, -8, 2]
$$

::::{solution}
$$
\vec{b} = -2 \vec{v} = -2 \cdot [-3, 4, -1] = [(-2) \cdot (-3), (-2) \cdot 4, (-2) \cdot (-1)] = [6, -8, 2]
$$
::::
:::::
:::::::::::::

:::::::::::::{part} c
En vektor $\vec{c}$ er gitt ved

$$
\vec{c} = 4 \vec{a} - 5 \vec{b}.
$$


Finn $\vec{c}$.


:::::{answer}
$$
\vec{c} = [-6, 52, 38]
$$

::::{solution}
$$
\begin{align*}
\vec{c} &= 4 \vec{a} - 5 \vec{b} \\
\\
&= 4 \cdot [6, 3, 12] - 5 \cdot [6, -8, 2] \\
\\
&= [24, 12, 48] - [30, -40, 10] \\
\\
&= [24 - 30, 12 - (-40), 48 - 10] \\
\\
&= [-6, 52, 38]
\end{align*}
$$
::::
:::::


:::::::::::::


:::::::::::::::


---


:::::::::::::::{exercise} Oppgave 6
:::::::::::::{part} a
Gitt vektorene $\vec a = [2, 1, 4]$ og $\vec b = [-3, 4, -1]$.

Avgjør om vektorene er parallelle.


:::::{answer}
Vektorene er ikke parallelle.


::::{solution}
Hvis $\vec a$ og $\vec b$ er parallelle, så finnes det et tall $k$ slik at $\vec a = k \cdot \vec b$.

Hvis vi ganger $y$-komponenten til $\vec a$ med $4$ får vi $y$-komponenten til $\vec b$. Men ganger vi $x$-komponenten til $\vec a$ med $4$ får vi $8$, som ikke er lik $x$-komponenten til $\vec b$. Dermed finnes det ikke et tall $k$ slik at $\vec a = k \cdot \vec b$, og vektorene er derfor ikke parallelle.
::::
:::::


:::::::::::::


:::::::::::::{part} b
Gitt vektorene $\vec{c} = [2, -1, 3]$ og $\vec d = [-4, 2, -6]$.

Avgjør om vektorene er parallelle.


:::::{answer}
Vektorene er parallelle.


::::{solution}
Hvis vi ganger $x$-komponenten til $\vec c$ med $-2$ får vi $x$-komponenten til $\vec d$. Vi kan sjekke om de andre komponentene også stemmer overens:

$$
-2 \cdot \vec c = -2 \cdot [2, -1, 3] = [-4, 2, -6] = \vec d
$$

Altså er de to vektorene parallelle.
::::
:::::


:::::::::::::


:::::::::::::{part} c
Gitt vektorene $\vec u = [3, -5, -1]$ og $\vec v = [9, -15, -3]$.

Avgjør om vektorene er parallelle.


:::::{answer}
Vektorene er parallelle.

::::{solution}
Hvis vi ganger $x$-komponenten til $\vec u$ med $3$ får vi $x$-komponenten til $\vec v$. Vi kan sjekke om de andre komponentene også stemmer overens:

$$
3 \cdot \vec u = 3 \cdot [3, -5, -1] = [9, -15, -3] = \vec v
$$

Altså er de to vektorene parallelle.
::::
:::::


:::::::::::::

:::::::::::::::



---


:::::::::::::::{exercise} Oppgave 7
:::::::::::::{part} a
Gitt vektorene $\vec{a} = [2, 1, 4]$ og $\vec{b} = [-3, 4, -1]$.


Finn $\vec{a} \cdot \vec{b}$.


:::::{answer}
$$
\vec{a} \cdot \vec{b} = -6
$$

::::{solution}
$$
\begin{align*}
\vec{a} \cdot \vec{b} &= [2, 1, 4] \cdot [-3, 4, -1] \\
\\
&= 2 \cdot (-3) + 1 \cdot 4 + 4 \cdot (-1) \\
\\
&= -6 + 4 - 4 \\
\\
&= -6
\end{align*}
$$
::::
:::::
:::::::::::::


:::::::::::::{part} b
Gitt vektorene $\vec{c} = [1, 2, 3]$ og $\vec{d} = [4, -5, 6]$.

Finn $\vec{c} \cdot \vec{d}$.


:::::{answer}
$$
\vec{c} \cdot \vec{d} = 12
$$

::::{solution}
$$
\begin{align*}
\vec{c} \cdot \vec{d} &= [1, 2, 3] \cdot [4, -5, 6] \\
\\
&= 1 \cdot 4 + 2 \cdot (-5) + 3 \cdot 6 \\
\\
&= 4 - 10 + 18 \\
\\
&= 12
\end{align*}
$$
::::
:::::


:::::::::::::


:::::::::::::{part} c
Gitt vektorene $\vec{u} = [0, 1, 2]$ og $\vec{v} = [3, 4, 5]$.

Finn $\vec{u} \cdot \vec{v}$.


:::::{answer}
$$
\vec{u} \cdot \vec{v} = 14
$$

::::{solution}
$$
\begin{align*}
\vec{u} \cdot \vec{v} &= [0, 1, 2] \cdot [3, 4, 5] \\
\\
&= 0 \cdot 3 + 1 \cdot 4 + 2 \cdot 5 \\
\\
&= 0 + 4 + 10 \\
\\
&= 14
\end{align*}
$$
::::
:::::


:::::::::::::

:::::::::::::::



---



:::::::::::::::{exercise} Oppgave 8
:::::::::::::{part} a
Gitt vektoren $\vec{a} = [1, 1, 1]$.

Finn enhetsvektoren $\hat{a}$ som har samme retning som $\vec{a}$.


:::::{answer}
$$
\hat{a} = \left[\dfrac{1}{\sqrt{3}}, \dfrac{1}{\sqrt{3}}, \dfrac{1}{\sqrt{3}}\right]
$$

::::{solution}
Enhetsvektoren er gitt ved 

$$
\hat{a} = \dfrac{\vec{a}}{\abs{\vec{a}}}
$$

Lengden av vektoren $\vec{a}$ er gitt ved

$$
\abs{\vec{a}} = \sqrt{1^2 + 1^2 + 1^2} = \sqrt{3}
$$

Altså får vi at 

$$
\hat{a} = \dfrac{1}{\sqrt{3}} \cdot [1, 1, 1] = \left[\dfrac{1}{\sqrt{3}}, \dfrac{1}{\sqrt{3}}, \dfrac{1}{\sqrt{3}}\right]
$$
::::
:::::

:::::::::::::


:::::::::::::{part} b
Gitt vektoren $\vec{b} = [2, -3, 6]$.

Finn enhetsvektoren $\hat{b}$ som har samme retning som $\vec{b}$.


:::::{answer}
$$
\hat{b} = \left[\dfrac{2}{7}, -\dfrac{3}{7}, \dfrac{6}{7}\right]
$$

::::{solution}
Enhetsvektoren er gitt ved 

$$
\hat{b} = \dfrac{\vec{b}}{\abs{\vec{b}}}
$$

Lengden av vektoren $\vec{b}$ er gitt ved

$$
\abs{\vec{b}} = \sqrt{2^2 + (-3)^2 + 6^2} = \sqrt{4 + 9 + 36} = \sqrt{49} = 7
$$

Altså får vi at

$$
\hat{b} = \dfrac{1}{7} \cdot [2, -3, 6] = \left[\dfrac{2}{7}, -\dfrac{3}{7}, \dfrac{6}{7}\right]
$$
::::
:::::


:::::::::::::


:::::::::::::{part} c
Gitt vektoren $\vec{c} = [-4, 2, 1]$.

Finn enhetsvektoren $\hat{c}$ som har samme retning som $\vec{c}$.


:::::{answer}
$$
\hat{c} = \left[-\dfrac{4}{\sqrt{21}}, \dfrac{2}{\sqrt{21}}, \dfrac{1}{\sqrt{21}}\right]
$$


::::{solution}
Enhetsvektoren er gitt ved

$$
\hat{c} = \dfrac{\vec{c}}{\abs{\vec{c}}}
$$

Lengden av vektoren $\vec{c}$ er gitt ved

$$
\abs{\vec{c}} = \sqrt{(-4)^2 + 2^2 + 1^2} = \sqrt{16 + 4 + 1} = \sqrt{21}
$$

Altså får vi at

$$
\hat{c} = \dfrac{1}{\sqrt{21}} \cdot [-4, 2, 1] = \left[-\dfrac{4}{\sqrt{21}}, \dfrac{2}{\sqrt{21}}, \dfrac{1}{\sqrt{21}}\right]
$$
::::
:::::


:::::::::::::


:::::::::::::::



---



:::::::::::::::{exercise} Oppgave 9


::::::{hint} Påminnelse: Projeksjonslengde
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
::::::


:::::::::::::{part} a
Gitt vektorene $\vec{a} = [1, 2, 3]$ og $\vec{b} = [4, -5, 6]$.

Finn projeksjonslengden av $\vec{b}$ på $\vec{a}$.


:::::{answer}
$$
L = \dfrac{12}{\sqrt{14}}
$$

::::{solution}
Projeksjonslengden av $\vec{b}$ på $\vec{a}$ er gitt ved

$$
L = \dfrac{\abs{\vec{a} \cdot \vec{b}}}{\abs{\vec{a}}}
$$

Vi har at

$$
\vec{a} \cdot \vec{b} = 1 \cdot 4 + 2 \cdot (-5) + 3 \cdot 6 = 4 - 10 + 18 = 12
$$

og

$$
\abs{\vec{a}} = \sqrt{1^2 + 2^2 + 3^2} = \sqrt{1 + 4 + 9} = \sqrt{14}
$$

Dermed er projeksjonslengden

$$
L = \dfrac{12}{\sqrt{14}}
$$

::::
:::::


:::::::::::::


:::::::::::::{part} b
Gitt vektorene $\vec{c} = [2, 1, 0]$ og $\vec{d} = [1, -3, 4]$.

Finn projeksjonslengden av $\vec{d}$ på $\vec{c}$.


:::::{answer}
$$
L = \dfrac{1}{\sqrt{5}}
$$

::::{solution}
Projeksjonslengden av $\vec{d}$ på $\vec{c}$ er gitt ved

$$
L = \dfrac{\abs{\vec{c} \cdot \vec{d}}}{\abs{\vec{c}}}
$$

Vi har at

$$
\vec{c} \cdot \vec{d} = 2 \cdot 1 + 1 \cdot (-3) + 0 \cdot 4 = 2 - 3 + 0 = -1
$$

og

$$
\abs{\vec{c}} = \sqrt{2^2 + 1^2 + 0^2} = \sqrt{4 + 1 + 0} = \sqrt{5}
$$

Dermed er projeksjonslengden

$$
L = \dfrac{\abs{-1}}{\sqrt{5}} = \dfrac{1}{\sqrt{5}}
$$
::::
:::::

:::::::::::::


:::::::::::::{part} c
Gitt vektorene $\vec{u} = [0, 1, 2]$ og $\vec{v} = [3, 4, -5]$.

Finn projeksjonslengden av $\vec{v}$ på $\vec{u}$.


:::::{answer}
$$
L = \dfrac{6}{\sqrt{5}}
$$

::::{solution}
Projeksjonslengden $L$ av $\vec{v}$ på $\vec{u}$ er gitt ved

$$
L = \dfrac{\abs{\vec{u} \cdot \vec{v}}}{\abs{\vec{u}}}
$$

Vi har at

$$
\vec{u} \cdot \vec{v} = 0 \cdot 3 + 1 \cdot 4 + 2 \cdot (-5) = 0 + 4 - 10 = -6
$$

og

$$
\abs{\vec{u}} = \sqrt{0^2 + 1^2 + 2^2} = \sqrt{0 + 1 + 4} = \sqrt{5}
$$

Ergo er projeksjonslengden

$$
L = \dfrac{\abs{-6}}{\sqrt{5}} = \dfrac{6}{\sqrt{5}}
$$
::::
:::::


:::::::::::::


:::::::::::::::


---


:::::::::::::::{exercise} Oppgave 10

::::{hint} Hint
Fra den geometriske formelen for prikkproduktet $\vec{a} \cdot \vec{b} = \abs{\vec{a}} \cdot \abs{\vec{b}} \cdot \cos \varphi$ der $\varphi$ er vinkelen mellom vektorene, følger det at

:::{table}
---
width: 60%
---
labels: $\vec{a} \cdot \vec{b}$, $\varphi$
$> 0$, $\lt 90^\circ$
$= 0$, $= 90^\circ$
$< 0$, $\gt 90^\circ$
:::

::::


:::::::::::::{part} a
Gitt vektorene $\vec{a} = [1, 2, 3]$ og $\vec{b} = [4, -5, 6]$.

Avgjør om vinkelen mellom vektorene er
1. mindre enn $90 \degree$
2. lik $90 \degree$
3. større enn $90 \degree$


:::::{answer}
Mindre enn $90 \degree$.

::::{solution}
Vi regner ut prikkproduktet mellom de to vektorene:

$$
\vec{a} \cdot \vec{b} = 1 \cdot 4 + 2 \cdot (-5) + 3 \cdot 6 = 4 - 10 + 18 = 12
$$

Siden $\vec{a} \cdot \vec{b} > 0$, er vinkelen mellom vektorene mindre enn $90 \degree$.
::::
:::::
:::::::::::::


:::::::::::::{part} b
Gitt vektorene $\vec{c} = [2, 1, 0]$ og $\vec{d} = [1, -8, 4]$.

Avgjør om vinkelen mellom vektorene er
1. mindre enn $90 \degree$
2. lik $90 \degree$
3. større enn $90 \degree$

:::::{answer}
Vinkelen er større enn $90 \degree$.

::::{solution}
Vi regner ut prikkproduktet mellom de to vektorene:

$$
\vec{c} \cdot \vec{d} = 2 \cdot 1 + 1 \cdot (-8) + 0 \cdot 4 = 2 - 8 + 0 = -6
$$

Siden $\vec{c} \cdot \vec{d} < 0$, er vinkelen mellom vektorene større enn $90 \degree$.
::::
:::::


:::::::::::::


:::::::::::::{part} c
Gitt vektorene $\vec{u} = [1, 2, 3]$ og $\vec{v} = [1, 1, -1]$.

Avgjør om vinkelen mellom vektorene er

1. mindre enn $90 \degree$
2. lik $90 \degree$
3. større enn $90 \degree$


:::::{answer}
Vinkelen er lik $90 \degree$.

::::{solution}
Vi regner ut prikkproduktet mellom de to vektorene:

$$
\vec{u} \cdot \vec{v} = 1 \cdot 1 + 2 \cdot 1 + 3 \cdot (-1) = 1 + 2 - 3 = 0
$$

Siden $\vec{u} \cdot \vec{v} = 0$, er vinkelen mellom vektorene lik $90 \degree$.
::::
:::::


:::::::::::::


:::::::::::::::



---



:::::::::::::::{exercise} Oppgave 11
Om to vektorer $\vec{u}$ og $\vec{v}$ får du vite at

* $\abs{\vec{u}} = 6$
* $\abs{\vec{v}} = 3$
* $\cos \varphi = \dfrac{1}{2}$ der $\varphi$ er vinkelen mellom vektorene.


:::::::::::::{part} a
Finn $\vec{u} \cdot \vec{v}$.

:::{hint} Hint
Bruk den geometriske formelen for skalarproduktet:

$$
\vec{u} \cdot \vec{v} = \abs{\vec{u}} \cdot \abs{\vec{v}} \cdot \cos \varphi
$$
:::


:::::{answer}
$$
\vec{u} \cdot \vec{v} = 9
$$

::::{solution}
Fra den geometriske formelen for prikkproduktet har vi at

$$
\vec{u} \cdot \vec{v} = \abs{\vec{u}} \cdot \abs{\vec{v}} \cdot \cos \varphi = 6 \cdot 3 \cdot \dfrac{1}{2} = 9
$$
::::
:::::

:::::::::::::


:::::::::::::{part} b
Gitt vektoren $\vec{b} = \vec{u} + \vec{v}$.

Finn $\abs{\vec{b}}$.


:::{hint} Hint
Regn ut $\abs{\vec{b}}^2 = \vec{b} \cdot \vec{b}$ først.
:::


:::::{answer}
$$
\abs{\vec{b}} = \sqrt{63} = 3 \sqrt{7}
$$


::::{solution}
Vi regner ut $\abs{\vec{b}}^2$ først:

$$
\begin{align*}
\abs{\vec{b}}^2 &= \vec{b} \cdot \vec{b} \\
\\
&= (\vec{u} + \vec{v}) \cdot (\vec{u} + \vec{v}) \\
\\
&= \vec{u} \cdot \vec{u} + 2 \cdot \vec{u} \cdot \vec{v} + \vec{v} \cdot \vec{v} \\
\\
&= \abs{\vec{u}}^2 + 2 \cdot 9 + \abs{\vec{v}}^2 \\
\\
&= 6^2 + 18 + 3^2 \\
\\
&= 36 + 18 + 9 \\
\\
&= 63
\end{align*}
$$

Dermed er 

$$
\abs{\vec{b}} = \sqrt{63} = 3 \sqrt{7}
$$
::::
:::::

:::::::::::::


:::::::::::::{part} c
Gitt vektoren $\vec{c} = \vec{u} - \vec{v}$.

Finn $\abs{\vec{c}}$.


:::::{answer}
$$
\abs{\vec{c}} = \sqrt{27} = 3 \sqrt{3}
$$

::::{solution}
Vi regner ut $\abs{\vec{c}}^2$ først:

$$
\begin{align*}
\abs{\vec{c}}^2 &= \vec{c} \cdot \vec{c} \\
\\
&= (\vec{u} - \vec{v}) \cdot (\vec{u} - \vec{v}) \\
\\
&= \vec{u} \cdot \vec{u} - 2 \cdot \vec{u} \cdot \vec{v} + \vec{v} \cdot \vec{v} \\
\\
&= \abs{\vec{u}}^2 - 2 \cdot 9 + \abs{\vec{v}}^2 \\
\\
&= 6^2 - 18 + 3^2 \\
\\
&= 36 - 18 + 9 \\
\\
&= 27
\end{align*}
$$

Altså er 

$$
\abs{\vec{c}} = \sqrt{27} = 3 \sqrt{3}
$$
::::
:::::


:::::::::::::


:::::::::::::{part} d
Gitt vektoren $\vec{d} = 3 \vec{u} - 2 \vec{v}$.

Finn $\abs{\vec{d}}$.


:::::{answer}
$$
\abs{\vec{d}} = 6 \sqrt{7}
$$

::::{solution}
Vi regner ut $\abs{\vec{d}}^2$ først:

$$
\begin{align*}
\abs{\vec{d}}^2 &= \vec{d} \cdot \vec{d} \\
\\
&= (3 \vec{u} - 2 \vec{v}) \cdot (3 \vec{u} - 2 \vec{v}) \\
\\
&= 9 \cdot \vec{u} \cdot \vec{u} - 12 \cdot \vec{u} \cdot \vec{v} + 4 \cdot \vec{v} \cdot \vec{v} \\
\\
&= 9 \cdot \abs{\vec{u}}^2 - 12 \cdot 9 + 4 \cdot \abs{\vec{v}}^2 \\
\\
&= 9 \cdot 6^2 - 108 + 4 \cdot 3^2 \\
\\
&= 324 - 108 + 36 \\
\\
&= 252
\end{align*}
$$

:::{factor-tree}
nocache:
n: 252
width: 100%
align: right
figsize: (6, 6)
:::

Vi primtallsfaktoriserer $252$ for å forenkle kvadratroten:

$$
252 = 2^2 \cdot 3^2 \cdot 7
$$

som gir oss at 

$$
\abs{\vec{d}} = \sqrt{252} = \sqrt{2^2 \cdot 3^2 \cdot 7} = 2 \cdot 3 \cdot \sqrt{7} = 6 \sqrt{7}
$$

::::
:::::


:::::::::::::


:::::::::::::::



---



:::::::::::::::{exercise} Oppgave 12
Avgjør om påstandene nedenfor er sanne. Begrunn svaret.


:::::::::::::{part} a
Gitt en vektor $\vec a = [x, y, z]$, så vil vektorene nedenfor være ortogonale med $\vec{a}$:

$$
[y, -x, 0] \qog [z, 0, -x] \qog [0, z, -y]
$$


:::::{answer}
Sann.


::::{solution}
Dersom vektorene er ortgonale med $\vec a$, må prikkproduktet være lik $0$. Vi sjekker:

$$
[x, y, z] \cdot [y, -x, 0] = x \cdot y + y \cdot (-x) + z \cdot 0 = xy - xy + 0 = 0
$$

og 

$$
[x, y, z] \cdot [z, 0, -x] = x \cdot z + y \cdot 0 + z \cdot (-x) = xz - xz = 0
$$

og 

$$
[x, y, z] \cdot [0, z, -y] = x \cdot 0 + y \cdot z + z \cdot (-y) = yz - yz = 0
$$

Altså er alle tre vektorene ortogonale med $\vec a$.
::::
:::::


:::::::::::::



:::::::::::::{part} b
Dersom to vektorer $\vec{a}$ og $\vec{b}$ er ortogonale, så er 

$$
\abs{\vec{a} + \vec{b}}^2 = \abs{\vec{a}}^2 + \abs{\vec{b}}^2
$$


:::::{answer}
Sann.

::::{solution}
Påstanden er sann som vi kan se ved å følgende utregning:

$$
\begin{align*}
\abs{\vec a + \vec b}^2 &= (\vec a + \vec b) \cdot (\vec a + \vec b) \\
\\
&= \vec a \cdot \vec a + 2 \cdot \vec a \cdot \vec b + \vec b \cdot \vec b \\
\\
&= \abs{\vec a}^2 + 2 \cdot \vec a \cdot \vec b  + \abs{\vec b}^2 \\
\\
\end{align*}
$$

For at påstanden skal være sann, må $\vec a \cdot \vec b = 0$ som betyr at de to vektorene må være ortogonale.
::::
:::::


:::::::::::::


:::::::::::::{part} c
For alle punkter $A$ og $B$ er

$$
\abs{\lvec{AB}} = \abs{\lvec{BA}}
$$

:::::{answer}
Sann.


::::{solution}
Vi har at $\lvec{AB} = -\lvec{BA}$. Lengden av de vektorene må være like siden 

$$
\abs{\lvec{AB}} = \abs{-\lvec{BA}} = \abs{-1} \cdot \abs{\lvec{BA}} = \abs{\lvec{BA}}
$$
::::
:::::

:::::::::::::



:::::::::::::{part} d
Hvis to vektorer $\vec{a}$ og $\vec{b}$ er parallelle, så er 

$$
\vec a \cdot \vec b = \abs{\vec a} \cdot \abs{\vec b}
$$


:::::{answer}
Usann.

::::{solution}
Den geometriske formelen for prikkproduktet er gitt ved

$$
\vec a \cdot \vec b = \abs{\vec a} \cdot \abs{\vec b} \cdot \cos \varphi
$$

Hvis to vektorer er parallelle, betyr det at vinkelen $\varphi$ mellom dem er enten lik $0\degree$ eller $180\degree$.

Når $\varphi = 180\degree$, så er $\cos \varphi = -1$, og dermed vil prikkproduktet være negativt. Dermed er påstanden usann.
::::
:::::


:::::::::::::


:::::::::::::::