# Vektorregning med digitale verktøy



Her skal vi ta for oss ulike temaer innenfor vektorregningen i 3D som er litt krevende å gjøre for hånd, men hvor ideene som ligger bak kan være relativt enkle å forstå. 


## Grunnleggende vektorregning i 3D


## Parameterframstillinger av linjer


## Skjæring mellom objekter


## Vinkler mellom objekter

Med den geometriske formelen for prikkproduktet kan vi finne vinkelen $\varphi$ mellom to vektorer $\vec{a}$ og $\vec{b}$:

$$
\vec{a} \cdot \vec{b} = \abs{\vec{a}} \cdot \abs{\vec{b}} \cos(\varphi) 
$$

Dette er setningen vi trenger for å finne vinkelen mellom plan og andre objekter.


### Vinkelen mellom en linje og et plan

Når vi skal finne vinkelen mellom en linje $\ell$ og et plan $\alpha$, tar vi utgangspunkt i retningsvektoren $\vec{v}$ til linja og normalvektoren $\vec{n}$ til planet. 


:::::::::::::::{summary} Vinkelen mellom et plan og en linje

:::{plot}
width: 100%
align: right
xmin: -2.5
xmax: 2.5
ymin: -2.5
ymax: 2.5
axis: off
line-segment: (-2, 0), (2, 0), blue, dashed
vector: (0, 0), (0, 1.5), blue
line-segment: (-2, -2), (2, 2), red, dashed
vector: (0, 0), (1.5, 1.5), red
angle-arc: (0, 0), 0.4, 0, 45, black
text: 0.6 * cos(pi/4/2), 0.6 * sin(pi/4/2), "$\theta$", center-center
angle-arc: (0, 0), 0.4, 45, 90, black
text: 0.6 * cos(0.5 * (pi/2 + pi/4)), 0.6 * sin(0.5 * (pi/2 + pi/4)), "$\varphi$", center-center
text: 2, 0, "$\alpha$", center-right
text: 0, 1.5, "$\vec{n}$", top-center
text: 2, 2, "$\ell$", top-right
text: 0.7 * 1.5, 0.7 * 1.5, "$\vec{v}$", bottom-right
fontsize: 26
:::



Gitt en linje $\ell$ med retningsvektor $\vec{v}$ og et plan $\alpha$ med normalvektor $\vec{n}$ der vinkelen mellom $\vec{v}$ og $\vec{n}$ er $\varphi$.

Da er vinkelen $\theta$ mellom linja og planet gitt ved

$$
\theta = 90^\circ - \varphi
$$
:::::::::::::::



### Vinkelen mellom to plan

Vinkelen mellom to plan er den samme som vinkelen mellom normalvektorene tli de to planene.

:::::::::::::::{summary} Vinkelen mellom to plan
:::{plot}
width: 100%
align: right
xmin: -2.5
xmax: 2.5
ymin: -2.5
ymax: 2.5
axis: off
line-segment: (-2, 0), (2, 0), blue, solid
line-segment: (-2, -2), (2, 2), red, solid
text: 2, 0, "$\alpha$", center-right
vector: (0, 0), (0, 1.5), blue
text: 0, 1.5, "$\vec{n}_\alpha$", top-center
text: 2, 2, "$\beta$", top-right
vector: (0, 0), (1.5 * cos(pi/4 + pi/2), 1.5 * sin(pi/4 + pi/2)), red
text: 1.5 * cos(pi/4 + pi/2), 1.5 * sin(pi/4 + pi/2), "$\vec{n}_\beta$", top-left
angle-arc: (0, 0), 0.4, 0, 45, black
angle-arc: (0, 0), 0.4, 90, 90 + 45, black
text: 0.6 * cos(pi/4/2), 0.6 * sin(pi/4/2), "$\varphi$", center-center
text: 0.6 * cos((pi/2 + pi/8)), 0.6 * sin((pi/2 + pi/8)), "$\varphi$", center-center
fontsize: 26
:::


Gitt et plan $\alpha$ med normalvektor $\vec{n}_\alpha$ og et plan $\beta$ med normalvektor $\vec{n}_\beta$.

La vinkelen mellom normalvektorene være $\varphi$. Da er vinkelen mellom de to planene også lik $\varphi$.
:::::::::::::::