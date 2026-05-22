# Anvendelser av integrasjon


:::{admonition} Læringsmål
---
class: tip
---
* Kunne bestemme volumet til omdreiningslegemer som er dreid om $x$-aksen eller $y$-aksen med integrasjon
* Kunne bestemme arealet avgrenset av to funksjonsgrafer.
* Kunne bestemme lengden av en kurve med integrasjon
* Kunne bestemme gjennomsnittsverdien til en funksjon på et intervall med integrasjon
:::



## Areal avgrenset funksjonsgrafer



:::::::::::::::{summary} Areal mellom funksjonsgrafer

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


:::::::::::::::{example} Eksempel 1

:::{plot}
axis: equal
width: 100%
align: right
let: R = 4
function: sqrt(R**2 - x**2), (-R, R), blue, f
xmin: -(R + 1)
xmax: R + 1
ymin: -R
ymax: R
fontsize: 32
text: -R, 0, "$-R$", bottom-center
text: R, 0, "$R$", bottom-left
ticks: off
:::



Funksjonen $f$ viser en halvsirkel med radius $R$ som har sentrum i origo:

$$
f(x) = \sqrt{R^2 - x^2} \qfor x \in [-R, R].
$$

Bestem volumet til omdreiningslegemet vi får om vi dreier grafen til $f$ $360\degree$ om $x$-aksen på intervallet $[-R, R]$.



:::{clear}
:::

::::{solution}
---
dropdown: 0
---
Når vi dreier halvsirkelen 360 grader om $x$-aksen, så får vi en kule med radius $R$.

Volumet til omdreiningslegemet er gitt ved

$$
\begin{align*}
V &= \pi \int\limits_{-R}^R f(x)^2 \, \d x \\
\\
&= \pi \int\limits_{-R}^R \left(\sqrt{R^2 - x^2}\right)^2 \, \d x \\
\\
&= \pi \int\limits_{-R}^R \left(R^2 - x^2\right) \, \d x \\
\\
&= \pi \left[ R^2 x - \dfrac{1}{3} x^3 \right]_{-R}^R \\
\\
&= \pi \left( R^3 - \dfrac{1}{3} R^3 - \left(-R^3 + \dfrac{1}{3} R^3\right) \right) \\
\\
&= \dfrac{4}{3}\pi R^3
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
