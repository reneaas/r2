# Plan


:::{goals}
* utforske og forstå regneregler for vektorer i rommet, og bruke vektorer til å beregne ulike størrelser i rommet
:::


:::{plot3d-2}
width: 100%
ticks: off
align: right
fontsize: 26
plane: equation=z=2, xrange=(-0.5, 4), yrange=(-0.5, 4), color=blue, alpha=0.2
xrange: (-1, 4)
yrange: (-1, 4)
zrange: (-1, 4)
azim: -70
elev: 20
let: Ax = 1
let: Ay = 1
let: Az = 2
let: Bx = 3
let: By = 1
let: Bz = 2
let: Cx = 1
let: Cy = 3
let: Cz = 2
point: (Ax, Ay, Az), black
text: at=(Ax, Ay, Az), value="$A$", ha=right, va=top
point: (Bx, By, Bz), black
text: at=(Bx, By, Bz), value="$B$", ha=left, va=center
point: (Cx, Cy, Cz), black
text: at=(Cx, Cy, Cz), value="$C$", ha=center, va=bottom
vector: (Ax, Ay, Az), (Bx, By, Bz), red
vector: (Ax, Ay, Az), (Cx, Cy, Cz), red
vector: (Ax, Ay, Az), (Ax, Ay, Az + 1), red
text: at=(Ax, Ay, Az + 1), value="$\vec{n}$", ha=center, va=bottom
right-angle: at=(Ax, Ay, Az), dir1=(Bx - Ax, By - Ay, Bz - Az), dir2=(0, 0, 1), size=0.35
right-angle: at=(Ax, Ay, Az), dir1=(Cx - Ax, Cy - Ay, Cz - Az), dir2=(0, 0, 1), size=0.35
:::


Et plan er definert på én av tre måter: 
1. Ved ett punkt $A$ og en normalvektor $\vec{n}$ som står vinkelrett på planet
2. Ved tre punkter $A$, $B$ og $C$ som ikke ligger på samme rette linje.
3. To ikke-parallelle vektorer som ligger i planet og ett punkt $A$ i planet


:::{clear}
:::




:::::::::::::::{summary} Normalvektoren til et plan
:::{plot3d-2}
width: 100%
ticks: off
align: right
fontsize: 26
plane: equation=z=2, xrange=(-0.5, 4), yrange=(-0.5, 4), color=blue, alpha=0.2
xrange: (-1, 4)
yrange: (-1, 4)
zrange: (-1, 4)
azim: -70
elev: 20
let: Ax = 1
let: Ay = 1
let: Az = 2
let: Bx = 3
let: By = 1
let: Bz = 2
let: Cx = 1
let: Cy = 3
let: Cz = 2
point: (Ax, Ay, Az), black
text: at=(Ax, Ay, Az), value="$A$", ha=right, va=top
point: (Bx, By, Bz), black
text: at=(Bx, By, Bz), value="$B$", ha=left, va=center
point: (Cx, Cy, Cz), black
text: at=(Cx, Cy, Cz), value="$C$", ha=center, va=bottom
vector: (Ax, Ay, Az), (Bx, By, Bz), red
vector: (Ax, Ay, Az), (Cx, Cy, Cz), red
vector: (Ax, Ay, Az), (Ax, Ay, Az + 1), red
text: at=(Ax, Ay, Az + 1), value="$\vec{n}$", ha=center, va=bottom
right-angle: at=(Ax, Ay, Az), dir1=(Bx - Ax, By - Ay, Bz - Az), dir2=(0, 0, 1), size=0.35
right-angle: at=(Ax, Ay, Az), dir1=(Cx - Ax, Cy - Ay, Cz - Az), dir2=(0, 0, 1), size=0.35
:::

Gitt tre punkter $A$, $B$ og $C$ i et plan $\alpha$, så er en normalvektor $\vec{n}$ til planet gitt ved 

$$
\vec{n} = \lvec{AB} \times \lvec{AC}
$$


Alle vektorer som er parellelle med $\lvec{AB} \times \lvec{AC}$ er også en normalvektor til planet.


:::::::::::::::


---



:::::::::::::::{example} Eksempel 1 
Punktene $A(1, 2, 3)$, $B(2, 3, 1)$ og $C(3, 1, 2)$ ligger i et plan $\alpha$.

Finn en normalvektor til planet. 


::::{solution}
---
open:
---
Vi finner først vektorene $\lvec{AB}$ og $\lvec{AC}$:

$$
\lvec{AB} = \lvec{OB} - \lvec{OA} = [2 - 1, 3 - 2, 1 - 3] = [1, 1, -2]
$$

$$
\lvec{AC} = \lvec{OC} - \lvec{OA} = [3 - 1, 1 - 2, 2 - 3] = [2, -1, -1]
$$

Så regner vi ut en normalvektor ved å ta kryssproduktet:

$$
\begin{align*}
\lvec{AB} \times \lvec{AC} &= \mqty|\vec{e}_x & \vec{e}_y & \vec{e}_z \\ 1 & 1 & -2 \\ 2 & -1 & -1| \\
\\
&= \vec{e}_x \cdot (1\cdot(-1) - (-2)\cdot(-1)) - \vec{e}_y \cdot (1\cdot(-1) - (-2)\cdot 2) + \vec{e}_z \cdot (1\cdot(-1) - 1\cdot 2) \\
\\
&= \vec{e}_x \cdot (-1 - 2) - \vec{e}_y \cdot (-1 - (-4)) + \vec{e}_z \cdot (-1 - 2) \\
\\
&= -3 \vec{e}_x - 3 \vec{e}_y - 3 \vec{e}_z \\ 
\\
&= [-3, -3, -3] \\
\\
&= (-3) \cdot [1, 1, 1]
\end{align*}
$$

Alle vektorer som står normalt på planet er regnet som en normalvektor til planet. En normalvektor her vil derfor være

$$
\vec{n} = [1, 1, 1]
$$
::::


:::::::::::::::




:::::::::::::::{summary} Planlikningen
:::{plot3d-2}
width: 350px
align: right
elev: 20
azim: -70
xrange: (-1, 5)
yrange: (-1, 5)
zrange: (-1, 4)
ticks: off
nocache:
fontsize: 24
plane: normal=(0, 0, 1), point=(3, 2, 1), span=(4,4), color=blue, alpha=0.2
point: (2, 1, 1), black
text: at=(2, 1, 1), value="$A(x_0, y_0, z_0)$", ha=center, va=top
point: (3, 3, 1), black
text: at=(3, 3, 1), value="$P(x, y, z)$", ha=left, va=center
let: nx = 0
let: ny = 0
let: nz = 2
vector: (3, 3, 1), (3 + nx, 3 + ny, 1 + nz), red
text: at=(3 + nx, 3 + ny, 1 + nz), value="$\vec{n} = [a, b, c]$", ha=center, va=bottom
vector: (2, 1, 1), (3, 3, 1), red
right-angle: at=(3, 3, 1), dir1=(nx, ny, nz), dir2=(2 - 3, 1 - 3, 1 - 1), size=0.3
:::

Gitt et punkt $A$ og en normalvektor $\vec{n}$ til et plan $\alpha$, så vil alle punkter $P$ i planet tilfredsstille likningen 

$$
\lvec{AP} \cdot \vec{n} = 0
$$

På koordinatform med en normalvektor $\vec{n} = [a, b, c]$ og et punkt $A(x_0, y_0, z_0)$ i planet, så vil alle punkter $P(x, y, z)$ i planet tilfredsstille en likning på formen

$$
ax + by + cz + d = 0
$$

:::::::::::::::



---



:::::::::::::::{example} Eksempel 2
Et punkt $A(2, 1, 1)$ ligger i et plan $\alpha$ med normalvektor $\vec{n} = [1, 2, 3]$. 

Finn likningen til planet.

::::{solution}
---
open:
---
Vi tenker oss et vilkårlig punkt $P(x, y, z)$ i planet. Vektoren $\lvec{AP}$ er da gitt ved

$$
\lvec{AP} = \lvec{OP} - \lvec{OA} = [x - 2, y - 1, z - 1]
$$

Siden $\lvec{AP}$ er parallell med planet, må 

$$
\lvec{AP} \cdot \vec{n} = 0
$$

$$
[x - 2, y - 1, z - 1] \cdot [1, 2, 3] = 0
$$

$$
(x - 2) + 2(y - 1) + 3(z - 1) = 0
$$

$$
x + 2y + 3z - 7 = 0
$$
::::
:::::::::::::::


---


Noen ganger må vi finne normalvektoren for å kunne finne likningen til et plan.


:::::::::::::::{example} Eksempel 3
Punktene $A(1, 2, 3)$, $B(2, 1, -1)$ og $C(3, 1, 2)$ ligger i et plan $\alpha$.

Bestem likningen til planet.

::::{solution}
---
open:
---
Vi må først finne en normalvektor for å bestemme likningen til planet. Normalvektoren kan vi lage ved å ta kryssproduktet av to vektorer som ligger i planet. Vi kan for eksempel bruke vektorene $\lvec{AB}$ og $\lvec{AC}$:

$$
\lvec{AB} = \lvec{OB} - \lvec{OA} = [2 - 1, 1 - 2, -1 - 3] = [1, -1, -4]
$$

$$
\lvec{AC} = \lvec{OC} - \lvec{OA} = [3 - 1, 1 - 2, 2 - 3] = [2, -1, -1]
$$

Deretter finner vi en normalvektor $\vec{n}$ ved å ta kryssproduktet:

$$
\begin{align*}
\lvec{AB} \times \lvec{AC} &= \mqty|\vec{e}_x & \vec{e}_y & \vec{e}_z \\ 1 & -1 & -4 \\ 2 & -1 & -1| \\
\\
&= \vec{e}_x \cdot \mqty|-1 & -4 \\ -1 & -1| - \vec{e}_y \cdot \mqty|1 & -4 \\ 2 & -1| + \vec{e}_z \cdot \mqty|1 & -1 \\ 2 & -1| \\
\\
&= -3 \vec{e}_x - 7 \vec{e}_y + 1 \vec{e}_z \\
\\
&= [-3, -7, 1] \\
\\
&= (-1) \cdot [3, 7, -1]
\end{align*}
$$

Altså kan vi bruke at $\vec{n} = [3, 7, -1]$ som normalvektor til planet.


Nå tenker vi oss et vilkårlig punkt $P(x, y, z)$ i planet. Vektoren $\lvec{AP}$ er da gitt ved

$$
\lvec{AP} = \lvec{OP} - \lvec{OA} = [x - 1, y - 2, z - 3]
$$

Siden $\lvec{AP}$ er parallell med planet, må

$$
\lvec{AP} \cdot \vec{n} = 0
$$

$$
[x - 1, y - 2, z - 3] \cdot [3, 7, -1] = 0
$$

$$
3(x - 1) + 7(y - 2) - (z - 3) = 0
$$

som vi kan skrive om til:

$$
3x + 7y - z - 6 = 0
$$


::::

:::::::::::::::



## Avstander

Avstander mellom plan og andre objekter bruker alle sammen den samme grunnideen: **Projeksjonslengde**. Vi skal i det følgende se på tre tilsynelatende forskjellige situasjoner som alle sammen reduseres til samme formel for avstand. 


:::::::::::::::{summary} Avstand fra punkt til plan
:::{plot3d-2}
width: 350px
align: right
elev: 20
azim: -70
xrange: (-1, 5)
yrange: (-1, 5)
zrange: (-1, 5)
ticks: off
nocache:
fontsize: 24
plane: normal=(0, 0, 1), point=(3, 2, 1), span=(4,4), color=blue, alpha=0.2
normal-segment: plane-normal=(0, 0, 1), plane-point=(3, 2, 1), point=(3, 3, 4), color=black, linestyle=dashed
vector: (0, 0, 0), (3, 3, 4), red
vector: (0, 0, 0), (2, 1, 1), red
point: (2, 1, 1), black
text: at=(2, 1, 1), value="$A$", ha=left, va=top
vector: (2, 1, 1), (3, 3, 4), blue
text: at=(3, 3, 4), value="$P$", ha=left, va=bottom
let: nx = 0
let: ny = 0
let: nz = 1
vector: (3, 3, 1), (3 + nx, 3 + ny, 1 + nz), red
text: at=(3 + 0.5 * nx - 0.1, 3 + 0.5 * ny, 1 + 0.5 * nz), value="$\vec{n}$", ha=right, va=center
text: at=(3.1, 3, 2.5), value="$L$", ha=left, va=bottom
:::


Gitt et plan $\alpha$ med en normalvektor $\vec{n}$ og et punkt $A$ i planet, så er avstanden $L$ fra et punkt $P$ til planet gitt ved formelen

$$
L = \dfrac{|\lvec{AP} \cdot \vec{n}|}{\abs{\vec{n}}}
$$


:::{clear}
:::


:::::{proof} Vis forklaring
Vektoren fra punktet $A$ i planet til punktet $P$ utenfor planet er gitt ved $\lvec{AP}$. Den korteste avstanden $L$ fra punktet $P$ til planet er da gitt ved projeksjonslengden langs normalvektoren $\vec{n}$, som er gitt ved formelen

$$
L = \dfrac{|\lvec{AP} \cdot \vec{n}|}{\abs{\vec{n}}}
$$

:::::


:::::::::::::::


---


:::::::::::::::{example} Eksempel 4
Et plan $\alpha$ har en normalvektor $\vec{n} = [2, -1, 3]$ og et punkt $A(1, 2, 3)$ ligger i planet.

Et punkt $P(5, 3, 1)$ ligger utenfor planet.

Finn avstanden fra punktet $P$ til planet $\alpha$.


::::{solution}
---
open:
---
Avstanden er gitt ved 

$$
L = \dfrac{|\lvec{AP} \cdot \vec{n}|}{\abs{\vec{n}}}
$$

Vi har at 

$$
\lvec{AP} = \lvec{OP} - \lvec{OA} = [5 - 1, 3 - 2, 1 - 3] = [4, 1, -2]
$$

Prikkproduktet med normalvektoren  er da

$$
\lvec{AP} \cdot \vec{n} = [4, 1, -2] \cdot [2, -1, 3] = 4\cdot 2 + 1\cdot(-1) + (-2)\cdot 3 = 8 - 1 - 6 = 1
$$

Lengden av normalvektoren er 

$$
\abs{\vec{n}} = \sqrt{2^2 + (-1)^2 + 3^2} = \sqrt{4 + 1 + 9} = \sqrt{14}
$$

Altså er avstanden fra $P$ til $\alpha$ gitt ved

$$
L = \dfrac{|\lvec{AP} \cdot \vec{n}|}{\abs{\vec{n}}} = \dfrac{|1|}{\sqrt{14}} = \dfrac{\sqrt{14}}{14}
$$

::::

:::::::::::::::



---

Hvis vi kjenner likningen til planet, så kan vi bruke den direkte til å finne avstanden fra et punkt til planet **uten** å finne et kjent punkt i som ligger i planet først.


:::::::::::::::{summary} Avstand fra punkt til plan på koordinatform
Gitt et plan $\alpha$ med likningen

$$
ax + by + cz + d = 0
$$

og et punkt $P(x, y, z)$ utenfor planet, så er avstanden $L$ fra punktet $P$ til planet gitt ved formelen

$$
L = \dfrac{|ax + by + cz + d|}{\sqrt{a^2 + b^2 + c^2}}
$$


:::::{proof}
La $A(x_0, y_0, z_0)$ være et vilkårlig punkt i planet og $P(x, y, z)$ være et punkt utenfor planet. La $\vec{n} = [a, b, c]$ være normalvektoren til planet. Da har vi at

$$
L = \dfrac{|\lvec{AP} \cdot \vec{n}|}{\abs{\vec{n}}}
$$

Prikkproduktet i telleren er gitt ved 

$$
\begin{align*}
\lvec{AP} \cdot \vec{n} &= [x - x_0, y - y_0, z - z_0] \cdot [a, b, c] \\
\\
&= a(x - x_0) + b(y - y_0) + c(z - z_0) \\
\\
&= ax + by + cz - (ax_0 + by_0 + cz_0) \\
\\
&= ax + by + cz + d
\end{align*}
$$

Lengden av normalvektoren er gitt ved 

$$
\abs{\vec{n}} = \sqrt{a^2 + b^2 + c^2}
$$

Dermed kan vi skrive om formelen for avstanden som

$$
L = \dfrac{|ax + by + cz + d|}{\sqrt{a^2 + b^2 + c^2}}
$$

:::::


:::::::::::::::


---


:::::::::::::::{example} Eksempel 5
Et plan $\alpha$ er gitt ved likningen

$$
2x - 3y + z - 6 = 0
$$


Finn avstanden fra punktet $P(3, 2, 4)$ til planet $\alpha$.


::::{solution}
---
open:
---
Fra likningen kan vi lese av at

$$
a = 2 \and b = -3 \and c = 1 \and d = -6
$$

Avstanden fra punktet $P(3, 2, 4)$ til planet $\alpha$ er da gitt ved formelen

$$
\begin{align*}
L &= \dfrac{|ax + by + cz + d|}{\sqrt{a^2 + b^2 + c^2}} \\
\\
&= \dfrac{|2\cdot 3 + (-3)\cdot 2 + 1\cdot 4 - 6|}{\sqrt{2^2 + (-3)^2 + 1^2}} \\
\\
&= \dfrac{|6 - 6 + 4 - 6|}{\sqrt{4 + 9 + 1}} \\
\\
&= \dfrac{|-2|}{\sqrt{14}} = \dfrac{2}{\sqrt{14}} \\
\\
&= \dfrac{\sqrt{14}}{7}
\end{align*}
$$
::::

:::::::::::::::


---


En linje $\ell$ med retningsvektor $\vec{v}$ er parallell med et plan $\alpha$ med normalvektor $\vec{n}$ dersom

$$
\vec{v} \cdot \vec{n} = 0
$$

:::::::::::::::{summary} Avstand fra linje til plan

:::{plot3d-2}
nocache:
width: 100%
ylabel: none
align: right
ticks: off
fontsize: 24
elev: 20
azim: -70
xrange: (-1, 5)
yrange: (-1, 5)
zrange: (-1, 5)
plane: normal=(0, 0, 1), point=(2, 2, 2), span=(6,6), color=blue, alpha=0.2
line: point=(4, 3, 4), direction=(1, 0, 0), color=blue, lw=1
point: (4, 3, 4), black
point: (2, 2, 2), black
normal-segment: point=(4, 3, 4), plane-normal=(0, 0, 1), plane-point=(2, 2, 2), color=black, linestyle=dashed
text: at=(4, 3, 4), value="$P$", ha=left, va=bottom
text: at=(2, 2, 2), value="$A$", ha=right, va=top
text: at=(4, 3, 3), value="$L$", ha=left, va=center
vector: (2, 2, 2), (4, 3, 4), red
vector: (1, 3, 4), (2, 3, 4), red
text: at=(1.5, 3, 4), value="$\vec{v}$", ha=center, va=bottom
vector: (1, 2, 2), (1, 2, 3), red
right-angle: at=(1, 2, 2), dir1=(0,0,1), dir2=(1,0,0), size=0.35
text: at=(0.9, 2, 2.5), value="$\vec{n}$", ha=right, va=center
vector: (4, 1, 0.2), (4, 1, 1.2), red
vector: (4, 1, 0.2), (5, 1, 0.2), red
right-angle: at=(4, 1, 0.2), dir1=(0,0,1), dir2=(1,0,0), size=0.35
text: at=(3.9, 1, 0.7), value="$\vec{n}$", ha=right, va=center
text: at=(5, 1, 0.2), value="$\vec{v}$", ha=left, va=center
:::


Gitt at en linje $\ell$ er parallell med et plan $\alpha$, så er avstanden $L$ fra linja til planet gitt ved 

$$
L = \dfrac{|\lvec{AP} \cdot \vec{n}|}{\abs{\vec{n}}}
$$

der $A$ er et punkt i planet og $P$ er et punkt på linja, og $\vec{n}$ er en normalvektor til planet.

:::{clear}
:::
> Dette er egentlig bare en anvendelse av formelen for avstanden fra et punkt til et plan.

:::::::::::::::


---



:::::::::::::::{example} Eksempel 6
Et plan $\alpha$ er gitt ved likningen

$$
2x - 3y + z - 2 = 0
$$

En linje $\ell$ er gitt ved 

$$
\vec{r}(t) = \mqty[3t + 1 \\ 2t + 2 \\ 3]
$$

Finn avstanden fra linja $\ell$ til planet $\alpha$.

::::{solution}
---
open:
---
Vi finner ett punkt på linja $\ell$ ved å sette $t = 0$:

$$
\lvec{OP} = \vec{r}(0) = \mqty[1 \\ 2 \\ 3]
$$

Så finner vi et punkt $A$ i planet $\alpha$. Vi kan for eksempel sette $x = 0$ og $y = 0$, som gir at $z = 2$. Altså kan vi bruke punktet $A(0, 0, 2)$ i planet. Da får vi at 

$$
\lvec{AP} = \lvec{OP} - \lvec{OA} = \mqty[1 \\ 2 \\ 3] - \mqty[0 \\ 0 \\ 2] = \mqty[1 \\ 2 \\ 1]
$$

Normalvektoren til planet $\alpha$ er gitt ved koeffisientene i likningen, altså $\vec{n} = [2, -3, 1]$.

Prikkproduktet mellom $\lvec{AP}$ og $\vec{n}$ er da

$$
\lvec{AP} \cdot \vec{n} = [1, 2, 1] \cdot [2, -3, 1] = 1\cdot 2 + 2\cdot(-3) + 1\cdot 1 = 2 - 6 + 1 = -3
$$

Lengden av normalvektoren er

$$
\abs{\vec{n}} = \sqrt{2^2 + (-3)^2 + 1^2} = \sqrt{4 + 9 + 1} = \sqrt{14}
$$

Altså er avstanden fra linja $\ell$ til planet $\alpha$ gitt ved

$$
L = \dfrac{|\lvec{AP} \cdot \vec{n}|}{\abs{\vec{n}}} = \dfrac{|-3|}{\sqrt{14}} = \dfrac{3}{\sqrt{14}} = \dfrac{3\sqrt{14}}{14}
$$
::::

:::::::::::::::


---



:::::::::::::::{summary} Avstand fra plan til plan
:::{plot3d-2}
width: 100%
align: right
elev: 20
azim: -70
ylabel: none
xrange: (-1, 5)
yrange: (-1, 5)
zrange: (-1, 5.5)
ticks: off
fontsize: 24
plane: normal=(0, 0, 1), point=(2, 2, 1), span=(6,6), color=blue, alpha=0.2
plane: normal=(0, 0, 1), point=(2, 2, 4), span=(6,6), color=teal, alpha=0.2
point: (2, 2, 1), black
point: (3, 3, 4), black
normal-segment: point=(3, 3, 4), plane-normal=(0, 0, 1), plane-point=(2, 2, 1), color=black, linestyle=dashed
vector: (2, 2, 1), (3, 3, 4), red
text: at=(2, 2, 1), value="$A$", ha=right, va=top
text: at=(3, 3, 4), value="$B$", ha=left, va=bottom
vector: (-0.2, 3, 1), (-0.2, 3, 2), blue
vector: (1, 1, 4), (1, 1, 5), teal
right-angle: at=(-0.2, 3, 1), dir1=(0,0,1), dir2=(1,0,0), size=0.35
right-angle: at=(1, 1, 4), dir1=(0,0,1), dir2=(1,0,0), size=0.35
text: at=(-0.3, 3, 1.5), value="$\vec{n}_\alpha$", ha=right, va=center
text: at=(0.9, 1, 4.5), value="$\vec{n}_\beta$", ha=right, va=center
text: at=(3, 3, 4 - 2), value="$L$", ha=left, va=center
:::

La $\alpha$ og $\beta$ være to parallelle plan med normalvektorer $\vec{n}_\alpha$ og $\vec{n}_\beta$. La $A$ være et punkt i planet $\alpha$ og $B$ være et punkt i planet $\beta$. 

Da er avstanden $L$ mellom de to planene gitt ved 

$$
L = \dfrac{|\lvec{AB} \cdot \vec{n}_\alpha|}{\abs{\vec{n}_\alpha}} = \dfrac{|\lvec{AB} \cdot \vec{n}_\beta|}{\abs{\vec{n}_\beta}}
$$


:::{clear}
:::

> Igjen, dette er bare samme formel som avstanden fra et punkt til et plan! 

:::::::::::::::


---


:::::::::::::::{example} Eksempel 8
Likningene til to parallelle plan $\alpha$ og $\beta$ er gitt ved

$$
\begin{align*}
\alpha: & \, 2x - 3y + z - 6 = 0 \\
\\
\beta: & \, 2x - 3y + z - 2 = 0
\end{align*}
$$




::::{solution}
---
open:
---
Fra koeffisientene til likningene til de to planene kan vi se at begge har normalvektoren

$$
\vec{n} = [2, -3, 1]
$$

Vi trenger ett punkt i $\alpha$ og ett punkt i $\beta$. Vi kan sette $x = y = 0$ i begge likninger for å finne et punkt i hvert plan.

For $\alpha$-planet, får vi

$$
2\cdot 0 - 3 \cdot 0 + z - 6 = 0 \liff z = 6 \liff A(0, 0, 6) \in \alpha
$$

For $\beta$-planet, får vi

$$
2 \cdot 0 - 3 \cdot 0 + z - 2 = 0 \liff z = 2 \liff B(0, 0, 2) \in \beta
$$

Vektoren som peker fra punktet $A$ i $\alpha$ til punktet $B$ i $\beta$ er da

$$
\lvec{AB} = \lvec{OB} - \lvec{OA} = [0 - 0, 0 - 0, 2 - 6] = [0, 0, -4]
$$

Skalarproduktet med normalvektoren til planene er da 

$$
\lvec{AB} \cdot \vec{n} = [0, 0, -4] \cdot [2, -3, 1] = 0 + 0 + (-4) \cdot 1 = -4
$$

Lengden av normalvektoren er

$$
\abs{\vec{n}} = \sqrt{2^2 + (-3)^2 + 1^2} = \sqrt{4 + 9 + 1} = \sqrt{14}
$$

Altså er avstanden mellom de to planene gitt ved

$$
L = \dfrac{|\lvec{AB} \cdot \vec{n}|}{\abs{\vec{n}}} = \dfrac{|-4|}{\sqrt{14}} = \dfrac{4}{\sqrt{14}} = \dfrac{2\sqrt{14}}{7}
$$



::::


:::::::::::::::


## Skjæringer

### Skjæring mellom linje og plan

Så lenge en linje ikke er parallell med et plan, så vil linja og planet skjære hverandre i ett punkt.


:::::::::::::::{summary} Strategi: Skjæring mellom linje og plan

:::{plot3d-2}
width: 100%
align: right
ticks: off
fontsize: 24
elev: 20
azim: -70
xrange: (-1, 5)
yrange: (-1, 5)
zrange: (-1, 5)
plane: normal=(0, 0, 1), point=(3, 2, 2), span=(6,6), color=blue, alpha=0.2
line: point=(1, 3, 2), direction=(2, 2, -3), color=red, lw=2
point: (1,3,2), black
text: at=(1, 3, 2), value="$P$", ha=left, va=bottom
:::


Gitt en linje $\ell$ med posisjonsvektoren

$$
\vec{r}_\ell(t) = [x(t), y(t), z(t)]
$$

og et plan $\alpha$ med likningen

$$
ax + by + cz + d = 0
$$

så finner vi skjæringspunktet mellom linja og planet ved å finne $t$ slik at

$$
ax(t) + by(t) + cz(t) + d = 0
$$
:::::::::::::::


---



:::::::::::::::{example} Eksempel 7
Et plan $\alpha$ er gitt ved likningen

$$
\alpha : x + 2y + z - 5 = 0
$$


En linje $\ell$ er gitt ved posisjonsvektoren

$$
\vec{r}_\ell(t) = [3t + 4, t + 5, t + 3]
$$

Finn skjæringspunktet mellom linja $\ell$ og planet $\alpha$.

::::{solution}
---
open:
---
Vi setter inn posisjonsvektoren til linja inn i likningen til planet og løser for $t$:

$$
(3t + 4) + 2(t + 5) + (t + 3) - 5 = 0
$$

$$
3t + 4 + 2t + 10 + t + 3 - 5 = 0
$$

$$
6t + 12 = 0
$$

$$
t = -2
$$

Så regner vi ut $\vec{r}_\ell(-2)$ for å finne skjæringspunktet:

$$
\vec{r}_\ell(-2) = [3(-2) + 4, -2 + 5, -2 + 3] = [-6 + 4, 3, 1] = [-2, 3, 1]
$$

Altså er skjæringspunktet mellom linja $\ell$ og planet $\alpha$ gitt ved punktet $P(-2, 3, 1)$.

::::



:::::::::::::::

### Skjæring mellom to plan

Når to plan skjærer hverandre, så får vi en **skjæringslinje**. 

:::::::::::::::{summary} Strategi: Skjæring mellom to plan

:::{plot3d-2}
nocache:
ylabel: none
fontsize: 26
width: 100%
align: right
elev: 20
azim: -70
ticks: off
xrange: (-1, 6)
yrange: (-2, 6)
zrange: (-1, 5)
let: na_x = 1
let: na_y = 0
let: na_z = 3
let: nb_x = -1
let: nb_y = 0
let: nb_z = 3
let: vx = na_y * nb_z - na_z * nb_y
let: vy = na_z * nb_x - na_x * nb_z
let: vz = na_x * nb_y - na_y * nb_x
let: Ax = 3
let: Ay = 2
let: Az = 1
plane: normal=(na_x, na_y, na_z), point=(Ax, Ay, Az), span=(7, 7), color=blue, alpha=0.2
plane: normal=(nb_x, nb_y, nb_z), point=(Ax, Ay, Az), span=(7,7), color=red, alpha=0.2
line: point=(Ax, Ay, Az), direction=(vx, vy, vz), color=black, lw=2
let: n_a = sqrt(na_x**2 + na_y**2 + na_z**2)
let: n_b = sqrt(nb_x**2 + nb_y**2 + nb_z**2)
let: Px = 1
let: Py = 3
let: Pz = (6 - Px) / 3
vector: (Px, Py, Pz), (Px + na_x/n_a, Py + na_y/n_a, Pz + na_z/n_a), blue
right-angle: at=(Px, Py, Pz), dir1=(na_x, na_y, na_z), dir2=(Ax - Px, Ay - Py, Az - Pz), size=0.35
let: Qx = 5.5
let: Qy = 3
let: Qz = Qx / 3
vector: (Qx, Qy, Qz), (Qx + nb_x/n_b, Qy + nb_y/n_b, Qz + nb_z/n_b), red
right-angle: at=(Qx, Qy, Qz), dir1=(nb_x, nb_y, nb_z), dir2=(Ax - Qx, Ay - Qy, Az - Qz), size=0.35
point: (Ax, Ay, Az), black
text: at=(Ax, Ay, Az), value="$A$", ha=left, va=top
let: v = sqrt(vx**2 + vy**2 + vz**2)
vector: (Ax, Ay, Az), (Ax - 2*vx/v, Ay - 2*vy/v, Az - 2*vz/v), deeppink
text: at=(Px + 0.5*na_x/n_a, Py + 0.5*na_y/n_a, Pz + 0.5*na_z/n_a), value="$\vec{n}_\alpha$", ha=right, va=bottom
text: at=(Qx + 0.5*nb_x/n_b, Qy + 0.5*nb_y/n_b, Qz + 0.5*nb_z/n_b), value="$\vec{n}_\beta$", ha=left, va=bottom
text: at=(Ax - 1.5*vx/v - 0.1, Ay - 1.5*vy/v, Az - 1.5*vz/v + 0.15), value="$\vec{v}_\ell$", ha=right, va=bottom
:::

Gitt et plan $\alpha$ med normalvektor $\vec{n}_\alpha$ og et plan $\beta$ med normalvektor $\vec{n}_\beta$, der normalvektorene ikke er parallelle, så vil skjæringslinja $\ell$ mellom de to planene ha retningsvektor

$$
\vec{v}_\ell = \vec{n}_\alpha \times \vec{n}_\beta
$$

Gitt et punkt $A$ som ligger i begge plan, er en parameterframstilling for skjæringslinja $\ell$ gitt ved

$$
\vec{r}_\ell(t) = \lvec{OA} + \vec{v}_\ell \cdot t
$$


:::::::::::::::



:::::::::::::::{example} Eksempel 9
To plan $\alpha$ og $\beta$ er gitt ved likningene

$$
\begin{align*}
\alpha~&: \, 3x - y + 2z - 1 = 0 \\
\\
\beta~&:  \, 2y - z - 4 = 0
\end{align*}
$$

Punktet $A(1, 2, 0)$ ligger i begge plan.

Finn en parameterframstilling for skjæringslinja $\ell$ mellom de to planene.



::::{solution}
---
open:
---
Først kan vi lese av fra planlikningene at normalvektorene er 

$$
\begin{align*}
\vec{n}_\alpha &= [3, -1, 2] \\
\\
\vec{n}_\beta &= [0, 2, -1]
\end{align*}
$$

En retningsvektor for skjæringslinja $\ell$ mellom de to planene er parallell med kryssproduktet av normalvektorene:

$$
\begin{align*}
\vec{n}_\alpha \times \vec{n}_\beta &= \mqty|\vec{e}_x & \vec{e}_y & \vec{e}_z \\ 3 & -1 & 2 \\ 0 & 2 & -1| \\
\\
&= \vec{e}_x \cdot \mqty| -1 & 2 \\ 2 & -1| - \vec{e}_y \cdot \mqty|3 & 2 \\ 0 & -1| + \vec{e}_z \cdot \mqty|3 & -1 \\ 0 & 2| \\
\\
&= \vec{e}_x \cdot (-3) - \vec{e}_y \cdot (-3) + \vec{e}_z \cdot (6) \\
\\
&= [-3, 3, 6] \\
\\
&= (-3) \cdot [1, -1, -2]
\end{align*}
$$

Vi kan derfor velge retningsvektoren til å være 

$$
\vec{v}_\ell = [1, -1, -2]
$$

En parameterframstilling for skjæringslinja er dermed

$$
\begin{align*}
\vec{r}_\ell(t) &= \lvec{OA} + \vec{v}_\ell \cdot t \\
\\
&= \mqty[1, 2, 0] + \mqty[1, -1, -2] \cdot t \\
\\
&= \mqty[1 + t, 2 - t, -2t] \\
\end{align*}
$$

::::


:::::::::::::::
