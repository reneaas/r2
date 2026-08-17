# Linjer


:::{goals} 
* utforske og forstå regneregler for vektorer i rommet, og bruke vektorer til å beregne ulike størrelser i rommet
:::

En linje er definert på én av to måter:

1. Ved to punkter $A$ og $B$ som ligger på linjen.
2. Ved ett punkt $A$ og en retningsvektor $\vec{v}$ som er parallell med linjen.


## Parameterframstillinger

:::::::::::::::{summary} Retningsvektorer
:::{plot}
nocache:
figsize: (4, 3)
width: 100%
align: right
let: Ax = 0
let: Ay = 0
let: Bx = 1
let: By = 1
let: vx = Bx - Ax
let: vy = By - Ay
line: (Ax, Ay), (Bx, By), blue, solid
vector: (Ax, Ay), (Bx, By), red
text: 0.5 * (Ax + Bx), 0.5 * (Ay + By), "$\vec{v}$", top-center
text: Ax, Ay, "$A$", bottom-right
text: Bx, By, "$B$", bottom-right
axis: off
xmin: -1
xmax: 2
ymin: -1
ymax: 2
fontsize: 24
point: (Ax, Ay)
point: (Bx, By)
:::


En linje som går gjennom punktene $A$ og $B$ har en retningsvektor $\vec{v}$ som er gitt ved

$$
\vec{v} = \lvec{AB}
$$

Alle vektorer som er parallelle med $\lvec{AB}$ er også en retningsvektor for linja.


:::::::::::::::


---


:::::::::::::::{example} Eksempel 1
En linje $\ell$ går gjennom punktene $A(-1, 2, 5)$ og $B(3, 0, 1)$. 

Finn en retningsvektor $\vec{v}$ for linja.

::::{solution}
---
open:
---
En retningsvektor $\vec{v}$ er gitt ved vektoren fra $A$ til $B$:

$$
\vec{v} = \lvec{AB} = [3 - (-1), 0 - 2, 1 - 5] = [4, -2, -4]
$$

Merk at siden alle vektorer som er parallelle med $\lvec{AB}$ også er en retningsvektor for linja, så kan vi også bruke vektoren $[2, -1, -2]$ som retningsvektor for linja siden $[4, -2, -4] = 2 \cdot [2, -1, -2]$.

::::

:::::::::::::::




:::::::::::::::{summary} Parameterframstilling for linjer

:::{plot3d-2}
nocache:
align: right
fontsize: 24
width: 100%
let: Ax = 3
let: Ay = 0
let: Az = 4
let: vx = 2
let: vy = 0
let: vz = 0.5
let: t = 1.5
line: point=(Ax, Ay, Az), direction=(vx, vy, vz), color=blue, lw=2
point: (Ax, Ay, Az), black
vector: (Ax, Ay, Az), (Ax + t*vx, Ay + t*vy, Az + t*vz), red
text: at=(Ax, Ay, Az), value="$A$", ha=right, va=bottom
ticks: off
xrange: (-1, 7)
yrange: (-1, 5)
zrange: (-1, 5)
vector: (0, 0, 0), (Ax, Ay, Az), blue
text: at=(0.5 * Ax, 0.5 * Ay, 0.5 * Az), value="$\overrightarrow{OA}$", ha=right, va=bottom
vector: (0, 0, 0), (Ax + t*vx, Ay + t*vy, Az + t*vz), blue
text: at=(0.5 * (2*Ax + t*vx), 0.5 * (2*Ay + t*vy), 0.5 * (2*Az + t*vz)), value="$\vec{v} \cdot t$", ha=center, va=bottom
text: at=(0.5 * (Ax + t*vx), 0.5 * (Ay + t*vy), 0.5 * (Az + t*vz)), value="$\vec{r}(t)$", ha=left, va=top
text: at=(Ax + t*vx, Ay + t*vy, Az + t*vz), value="$P$", ha=left, va=bottom
point: (Ax + t*vx, Ay + t*vy, Az + t*vz), black
elev: 20
azim: -70
ylabel: none
:::

En parameterframstilling for en linje angir alle punktene som ligger på linja.

Posisjonsvektoren $\vec{r}(t)$ til punktene $P(t)$ på en linje $\ell$ med startpunkt $A$ og retningsvektor $\vec{v}$ kan skrives som

$$
\vec{r}(t) = \lvec{OA} + \vec{v} \cdot t \qder t \in \real
$$


På koordinatform, er posisjonsvektoren gitt ved 

$$
\vec{r}(t) = \mqty[A_x + v_x \cdot t,  A_y + v_y \cdot t,  A_z + v_z \cdot t]
$$

Noen ganger skrives parameterframstillingen for linja som

$$
\ell: \begin{cases} x = A_x + v_x \cdot t \\ y = A_y + v_y \cdot t \\ z = A_z + v_z \cdot t \end{cases}
$$


:::::::::::::::


---


:::::::::::::::{example} Eksempel 2
Linja $\ell$ går gjennom punktene $A(5, 2, 1)$ og $B(1, 4, 3)$.

Finn en parameterframstilling for linja $\ell$.


::::{solution}
---
open:
---
Vi trenger først og fremst en retningsvektor for linja. Enhver retningsvektor er parallell med vektoren

$$
\lvec{AB} = [1 - 5, 4 - 2, 3 - 1] = [-4, 2, 2] = (-2) \cdot [2, -1, -1]
$$

Vi velger derfor $\vec{v} = [2, -1, -1]$ som retningsvektor for linja. Vi står fritt til å velge hvilket som helst punkt på linja som startpunkt for parameterframstillingen. Vi velger punktet $A(5, 2, 1)$ som startpunkt. Dermed får vi parameterframstillingen

$$
\begin{align*}
\vec{r}(t) &= \lvec{OA} + \vec{v} \cdot t \\
\\
&= \mqty[5, 2, 1] + \mqty[2, -1, -1] \cdot t \\
\\
&= \mqty[5 + 2t, 2 - t, 1 - t]
\end{align*}
$$

som vi også eventuelt kan skrive som

$$
\ell: \begin{cases} x = 5 + 2t \\ y = 2 - t \\ z = 1 - t \end{cases}
$$


::::


:::::::::::::::


---


:::::::::::::::{summary} Retningsvektor fra parameterframstilling
Gitt en parameterframstilling $\vec{r}(t) = [x(t), y(t), z(t)]$ for en linje $\ell$, så er en retningsvektor for linja gitt ved den deriverte av posisjonsvektoren $\vec{r}(t)$:

$$
\vec{v} = \vec{r}'(t) = [x'(t), y'(t), z'(t)]
$$


:::::::::::::::


---


:::::::::::::::{example} Eksempel 3
En linje $\ell$ er gitt ved 

$$
\vec{r}(t) = [1 + 2t, 3 - t, 4 + 5t]
$$

Finn en retningtsvektor for linja $\ell$.

::::{solution}
---
open:
---
En retningsvektor for linja finner vi ved å deriverte posisjonsvektoren:

$$
\vec{v} = \vec{r}'(t) = [(1 + 2t)', (3 - t)', (4 + 5t)'] = [2, -1, 5]
$$
::::
:::::::::::::::


---



## Avstander



:::::::::::::::{summary} Avstand fra punkt til linje

:::{plot}
figsize: (4, 3)
align: right
width: 100%
line: 1, -2, solid, blue
point: (1, 3)
text: 1, 3, "$P$", top-left
text: 0.5 * (1 + 3), 0.5 * (1 + 3), "$L$", top-right
line-segment: (1, 3), (3, 1), dashed, gray
axis: equal
xmin: -1
xmax: 5
ymin: -1
ymax: 5
polygon: (2.6, 0.6), (3, 1), (2.6, 1.4), (2.2, 1)
axis: off
fontsize: 20
text: 5, 3, "$\ell$", top-right
point: (0, -2)
text: -0.15, -2, "$A$", center-left
vector: (0, -2), (1.75, -0.25), red
text: 0.5 * (0 + 1.75), 0.5 * (-2 + -0.25), "$\vec{v}$", bottom-right
vector: (0, -2), (1, 3), red
text: 0.5 * (0 + 1), 0.5 * (-2 + 3), "$\overrightarrow{AP}$", top-left
:::

Gitt en linje $\ell$ med en retningsvektor $\vec{v}$ og et punkt $A$ på linja, så er avstanden $L$ fra punktet $P$ til linja $\ell$ gitt ved

$$
L = \dfrac{|\lvec{AP} \times \vec{v}|}{\abs{\vec{v}}}
$$



:::{clear}
:::


:::::{proof} Vis forklaring
:::{plot}
figsize: (4, 3)
align: right
width: 100%
line: 1, -2, solid, blue
point: (1, 3)
text: 1, 3, "$P$", top-left
text: 0.5 * (1 + 3), 0.5 * (1 + 3), "$L$", top-right
line-segment: (1, 3), (3, 1), dashed, gray
axis: equal
xmin: -1
xmax: 5
ymin: -1
ymax: 5
polygon: (2.6, 0.6), (3, 1), (2.6, 1.4), (2.2, 1)
axis: off
fontsize: 20
text: 5, 3, "$\ell$", top-right
point: (0, -2)
text: -0.15, -2, "$A$", center-left
vector: (0, -2), (1.75, -0.25), red
text: 0.5 * (0 + 1.75), 0.5 * (-2 + -0.25), "$\vec{v}$", bottom-right
vector: (0, -2), (1, 3), red
text: 0.5 * (0 + 1), 0.5 * (-2 + 3), "$\overrightarrow{AP}$", top-left
line-segment: (1.75, -0.25), (1, 3), solid, black
fill-polygon: (0, -2), (1.75, -0.25), (1, 3), blue, 0.2
:::

Vi starter med å lage oss en trekant som er spent ut av vektorene $\vec{AP}$ og $\vec{v}$. Vi finner så arealet $T$ av trekanten på to måter og setter de lik hverandre:

$$
T = \dfrac{1}{2} \abs{\lvec{AP} \times \vec{v}} = \dfrac{1}{2} \underbrace{ \abs{\vec{v}} \cdot L}_{\text{grunnlinje} \cdot \text{høyde}}
$$

Det forteller oss at 

$$
|\lvec{AP} \times \vec{v}| = \abs{\vec{v}} \cdot L
$$

så løser vi for avstanden som gir oss formelen vi er ute etter:

$$
L = \dfrac{|\lvec{AP} \times \vec{v}|}{\abs{\vec{v}}}
$$

:::::


:::::::::::::::


---



:::::::::::::::{example} Eksempel 4
En linje går gjennom punktene $A(3, 2, 0)$ og $B(4, 4, -2)$.

Finn avstanden fra punktet $P(2, 3, -1)$ til linja.


::::{solution}
---
open:
---
Vi finner først en retningsvektor for linja:

$$
\vec{v} = \lvec{AB} = [4 - 3, 4 - 2, -2 - 0] = [1, 2, -2]
$$

Så finner vi en vektor som peker fra et punkt på linja til punktet $P$. Vi velger punktet $A$ som ligger på linja, og lager vektoren $\lvec{AP}$:

$$
\lvec{AP} = [2 - 3, 3 - 2, -1 - 0] = [-1, 1, -1]
$$

Vi må finne kryssproduktet mellom vektorene $\lvec{AP}$ og $\vec{v}$:

$$
\begin{align*}
\lvec{AP} \times \lvec{v} &= \mqty|\vec{e}_x & \vec{e}_y & \vec{e}_z \\ -1 & 1 & -1 \\ 1 & 2 & -2| \\
\\
&= \vec{e}_x \cdot \mqty|1 & -1 \\ 2 & -2| - \vec{e}_y \cdot \mqty|-1 & -1 \\ 1 & -2| + \vec{e}_z \cdot \mqty|-1 & 1 \\ 1 & 2| \\
\\
&= \vec{e}_x \cdot (1 \cdot -2 - (-1) \cdot 2) - \vec{e}_y \cdot (-1 \cdot -2 - (-1) \cdot 1) + \vec{e}_z \cdot (-1 \cdot 2 - 1 \cdot 1) \\
\\
&= \vec{e}_x \cdot (-2 + 2) - \vec{e}_y \cdot (2 - (-1)) + \vec{e}_z \cdot (-2 - 1) \\
\\
&= \vec{e}_x \cdot 0 - \vec{e}_y \cdot 3 + \vec{e}_z \cdot (-3) \\
\\
&= [0, -3, -3]
\end{align*}
$$

Avstanden $L$ fra $P$ til linja er gitt ved 

$$
L = \dfrac{|\lvec{AP} \times \vec{v}|}{\abs{\vec{v}}}
$$

Vi regner ut lengden av de to vektorene først:

$$
|\lvec{AP} \times \vec{v}| = \sqrt{0^2 + (-3)^2 + (-3)^2} = \sqrt{0 + 9 + 9} = \sqrt{18} = 3\sqrt{2}
$$

og 

$$
\abs{\vec{v}} = \sqrt{1^2 + 2^2 + (-2)^2} = \sqrt{1 + 4 + 4} = \sqrt{9} = 3
$$

Dermed får vi at avstanden $L$ er

$$
L = \dfrac{3\sqrt{2}}{3} = \sqrt{2}
$$



::::

:::::::::::::::



---


Når vi studerer flere linjer i rommet, så kan de være orientert i forhold til hverandre på tre forskjellige måter:

1. Linjene er **parallelle**. Da kan de enten ligge ved siden av hverandre eller være sammenfallende (ligger oppå hverandre – slik at avstanden er lik $0$).
2. Linjene er **ikke-parallelle** og **skjærer hverandre**. Da har de ett punkt til felles og den korteste avstanden mellom de to er lik $0$.
3. Linjene er **ikke-parallelle** og **ikke-skjærende**. Da sier vi at linjene er **vindskjeve** og den korteste avstanden mellom de to linjene er større enn $0$.


Når to linjer er parallelle, kan vi regne ut avstanden mellom dem ved å bruke formelen for avstanden fra et punkt til en linje.


:::::::::::::::{summary} Avstand mellom parallelle linjer
Dersom to linjer $\ell$ og $m$ er **parallelle**, så er avstanden mellom de to linjene gitt ved avstanden fra et punkt til en linje. 

Gitt at $A \in \ell$ og $B \in m$, så er avstanden $L$ mellom linjene $\ell$ og $m$ gitt ved

$$
L = \dfrac{|\lvec{AB} \times \vec{v}|}{\abs{\vec{v}}}
$$

der $\vec{v}$ er en retningsvektor for linjene $\ell$ og $m$.

Hvis linjene er sammenfallende, så er avstanden $L = 0$.

:::::::::::::::


---


Når to linjer er ikke-parallelle, trenger vi en annen strategi for å finne den korteste avstanden mellom dem:


:::::::::::::::{summary} Avstand mellom ikke-parallelle linjer

:::{plot3d-2}
nocache:
align: right
fontsize: 24
width: 100%
elev: 20
azim: -70
ticks: off
xrange: (-1, 7)
yrange: (-1, 5)
zrange: (-2, 5)
ylabel: none
let: Ax = 3
let: Ay = 0
let: Az = 4
let: vl_x = 2
let: vl_y = 0
let: vl_z = 0.5
let: vm_x = 0.5
let: vm_y = 2
let: vm_z = 0.5
let: Bx = 3 + vm_x
let: By = 2 + vm_y
let: Bz = -1 + vm_z
let: n_x = vl_y * vm_z - vl_z * vm_y
let: n_y = vl_z * vm_x - vl_x * vm_z
let: n_z = vl_x * vm_y - vl_y * vm_x
let: t = 1.5
line: point=(Ax, Ay, Az), direction=(vl_x, vl_y, vl_z), color=red, lw=2
point: (Ax, Ay, Az), black
text: at=(Ax, Ay, Az), value="$B$", ha=right, va=bottom
line: point=(Bx, By, Bz), direction=(vm_x, vm_y, vm_z), color=blue, lw=2
point: (Bx, By, Bz), black
text: at=(Bx, By, Bz), value="$A$", ha=left, va=top
normal-segment: point1=(Ax, Ay, Az), direction1=(vl_x, vl_y, vl_z), point2=(Bx, By, Bz), direction2=(vm_x, vm_y, vm_z), color=gray, style=dashdot, right-angle-size=0.35
vector: (Bx, By, Bz), (Ax, Ay, Az), blue
let: n = sqrt(n_x**2 + n_y**2 + n_z**2)
vector: (767/281, 258/281, -357/281), (767/281 + 1.5*n_x/n, 258/281 + 1.5*n_y/n, -357/281 + 1.5*n_z/n), red
text: at=(767/281 + 0.75*n_x/n - 0.4, 258/281 + 0.75*n_y/n, -357/281 + 0.75*n_z/n), value="$\vec{n}$", ha=right, va=top
text: at=(767/281 + 0.6*n_x, 258/281 + 0.6*n_y, -357/281 + 0.6*n_z), value="$L$", ha=left, va=bottom
text: at=(Bx - 2.6*vm_x, By - 2.5*vm_y, Bz - 2.5*vm_z), value="$\ell$", ha=right, va=top
text: at=(Ax + 2*vl_x, Ay + 2*vl_y, Az + 2*vl_z), value="$m$", ha=left, va=top
:::


Gitt to ikke-parallelle linjer $\ell$ og $m$ med følgende egenskaper:

* linja $\ell$ går gjennom punktet $A$ og har retningsvektor $\vec{v}_\ell$
* linja $m$ går gjennom punktet $B$ og har retningsvektor $\vec{v}_m$

så er den korteste avstanden $L$ mellom linjene $\ell$ og $m$ gitt ved

$$
L = \dfrac{|\lvec{AB} \cdot \vec{n}|}{\abs{\vec{n}}}
$$

der vektoren $\vec{n}$ står normalt på begge linjene og er gitt ved 

$$
\vec{n} = \vec{v}_\ell \times \vec{v}_m
$$


Hvis linjene skjærer hverandre, så er den korteste avstanden $L = 0$.


:::::{proof} Vis forklaring
Vektoren $\vec{n} = \vec{v}_\ell \times \vec{v}_m$ står normalt på begge linjene. Projeksjonsavstanden av vektoren $\lvec{AB}$ på $\vec{n}$ er den korteste avstanden mellom de to linjene. Dermed kan vi bruke formelen for projeksjonsavstanden til å finne avstanden mellom de to linjene:

$$
L = \dfrac{|\lvec{AB} \cdot \vec{n}|}{\abs{\vec{n}}}
$$


:::::::::::::::



---



:::::::::::::::{example} Eksempel 5
En linje $\ell$ går gjennom punktet $A(3, 0, 4)$ og har en retningsvektor $\vec{v}_\ell = [2, 1, 1]$. 

En linje $m$ går gjennom punktet $B(4, 2, -1)$ og har en retningsvektor $\vec{v}_m = [1, 2, 1]$.

Finn den korteste avstanden mellom $\ell$ og $m$.


::::{solution}
---
open:
---
Først finner vi en vektor $\vec{n}$ som står normalt på begge linjer:

$$
\begin{align*}
\lvec{n} &= \vec{v}_\ell \times \vec{v}_m \\
\\
&= \mqty|\vec{e}_x & \vec{e}_y & \vec{e}_z \\ 2 & 1 & 1 \\ 1 & 2 & 1| \\
\\
&= \vec{e}_x \cdot \mqty|1 & 1 \\ 2 & 1| - \vec{e}_y \cdot \mqty|2 & 1 \\ 1 & 1| + \vec{e}_z \cdot \mqty|2 & 1 \\ 1 & 2| \\
\\
&= \vec{e}_x \cdot (1 \cdot 1 - 1 \cdot 2) - \vec{e}_y \cdot (2 \cdot 1 - 1 \cdot 1) + \vec{e}_z \cdot (2 \cdot 2 - 1 \cdot 1) \\
\\
&= \vec{e}_x \cdot (1 - 2) - \vec{e}_y \cdot (2 - 1) + \vec{e}_z \cdot (4 - 1) \\
\\
&= -\vec{e}_x  - \vec{e}_y  + 3\vec{e}_z  \\
\\
&= [-1, -1, 3]
\end{align*}
$$

Vi trenger en vektor som peker fra et punkt på linja $\ell$ til et punkt på linja $m$. Vi velger vektoren $\lvec{AB}$:

$$
\lvec{AB} = [4 - 3, 2 - 0, -1 - 4] = [1, 2, -5]
$$

Den korteste avstanden mellom linjene $\ell$ og $m$ er da gitt ved 

$$
L = \dfrac{|\lvec{AB} \cdot \vec{n}|}{\abs{\vec{n}}}
$$

Vi regner ut prikkproduktet: 

$$
\begin{align*}
\lvec{AB} \cdot \vec{n} &= [1, 2, -5] \cdot [-1, -1, 3] \\
\\
&= 1 \cdot (-1) + 2 \cdot (-1) + (-5) \cdot 3 \\
\\
&= -1 - 2 - 15 \\
\\
&= -18
\end{align*}
$$

så regner vi ut lengden av vektoren $\vec{n}$:

$$
\abs{\vec{n}} = \sqrt{(-1)^2 + (-1)^2 + 3^2} = \sqrt{1 + 1 + 9} = \sqrt{11}
$$

Dermed er den korteste avstanden mellom linjene $\ell$ og $m$ gitt ved

$$
L = \dfrac{|-18|}{\sqrt{11}} = \dfrac{18}{\sqrt{11}}
$$

::::


:::::::::::::::




---


## Skjæring mellom linjer

Gitt to linjer $\ell$ og $m$ som ligger i samme plan, kan vi finne koordinatene til skjæringspunktet mellom de to linjene ved å løse et likningssystem.


:::::::::::::::{summary} Skjæringspunktet mellom to linjer
Gitt to linjer $\ell$ og $m$ med parameterframstillinger $\vec{r}_\ell(t)$ og $\vec{r}_m(s)$, så finner vi skjæringspunktet ved å løse likningssystemet 

$$
\vec r_\ell(t) = \vec r_m(s)
$$
:::::::::::::::



:::::::::::::::{example} Eksempel 6
To linjer $\ell$ og $m$ er gitt ved 

$$
\vec r_\ell(t) = [-1 + 3t, -3 + 4t, -4 + t] \qog \vec r_m(s) = [4 + s, 5 + 2s, -1 + s]
$$

Finn koordinatene til skjæringspunktet mellom linjene.


::::{solution}
---
open:
---
Dersom linjene skjærer hverandre, må det finnes én verdi for $t$ og én verdi for $s$ slik at 

$$
\vec r_\ell(t) = \vec r_m(s)
$$

Dette gir oss vektorlikningen:

$$
[-1 + 3t, -3 + 4t, -4 + t] = [4 + s, 5 + 2s, -1 + s]
$$

Ved å sette hver vektorkomponent lik hverandre, får vi likningssystemet:

$$
-1 + 3t = 4 + s \and -3 + 4t = 5 + 2s \and -4 + t = -1 + s
$$

Her kan vi bruke innsettingsmetoden. Vi kan for eksempel først løse likning 3 for $t$:

$$
-4 + t = -1 + s \liff t = 3 + s
$$

Så setter vi dette uttrykket for $t$ inn i én av de andre likningene for å finne $s$. Vi velger likning 1:

$$
-1 + 3\cdot(3 + s) = 4 + s
$$

$$
-1 + 9 + 3s = 4 + s
$$

$$
8 + 3s = 4 + s
$$

$$
8 - 4 = s - 3s
$$

$$
4 = -2s
$$

$$
s = -\dfrac{4}{2} = -2
$$

Vi trenger strengt tatt ikke å finne verdien til $t$, men vi må huske på at verdien til $s$ hører til $\vec r_m(s)$. Koordinatene til skjæringspunktet blir derfor

$$
\begin{align*}
\vec r_m(-2) &= [4 + (-2), 5 + 2\cdot (-2), -1 + (-2)] \\
\\
&= [4 - 2, 5 - 4, -1 - 3] \\
\\
&= [2, 1, -3]
\end{align*}
$$

Ergo skjærer linjene hverandre i punktet $(2, 1, -3)$.
::::

:::::::::::::::




