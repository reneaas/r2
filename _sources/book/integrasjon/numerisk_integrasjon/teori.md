# Numerisk integrasjon


:::{admonition} Læringsmål
---
class: tip
---
* Kunne bruke bruke numeriske metoder for integrasjon til å finne numeriske verdier for integraler, og analysere nøyaktigheten av disse metodene.
* Kunne tolke og skrive programmer som bruker ulike numeriske metoder til å beregne bestemte integraler.
* Kunne beskrive integralet som en grense av Riemannsummer, og bruke Riemannsummer med programmering til å finne numeriske verdier for integraler.
:::

En hel haug med integraler kan ikke løses uten å numeriske metoder rett og slett fordi det ikke finnes noen elementærfunksjon for den antideriverte til en funksjon. Sagt med andre ord, vi kan ikke finne en funksjon $F(x)$ slik at $F'(x) = f(x)$. Et eksempel på dette er et integral som tilsynelatende ser veldig enkelt ut, men hvor integranden likevel ikke har noen antiderivert:

$$
I = \int\limits_{0}^1 e^{-x^2} \, \d x
$$

En måte å angripe dette integralet på er derfor ved å bruke **numerisk integrasjon**. I all teorien som følger, skal vi se på hvordan vi kan utvikle og implementere numeriske metoder for integrasjon på integraler på formen

$$
I = \int\limits_a^b f(x) \, \d x
$$


## Rektangelmetoder

Strategien som ligger bak rektangelmetodene går ut på å tegne inn rektangler under grafen til $f$ og bruke summen av arealene til rektangelene som en tilnærming til verdien til integralet.


::::{multi-plot2}
---
rows: 1
cols: 2
---

:::{plot}
fontsize: 24
width: 100%
function: x**2 * exp(-x) - 0.025 * log(x), (0, 6), f
let: a = 1
let: b = 5
ticks: off
xmin: -0.5
ymin: -0.2
ymax: 0.7
text: a, 0, "$a$", bottom-center
text: b, 0, "$b$", bottom-center
fill-between: f(x), 0, (a, b), blue, 0.1, where=above
vline: a, 0, f(a), blue, dashed
vline: b, 0, f(b), blue, dashed
nocache:
:::

:::{plot}
fontsize: 24
width: 100%
function: x**2 * exp(-x) - 0.025 * log(x), (0, 6), f
let: N = 6
let: a = 1
let: b = 5
let: dx = (b - a) / N
repeat: n=0..N-1; polygon: (a + n*dx, 0), (a + n*dx, f(a + n*dx)), (a + (n+1)*dx, f(a + n*dx)), (a + (n+1)*dx, 0), blue, 0.1
ticks: off
xmin: -0.5
ymin: -0.2
ymax: 0.7
bar: (3*a, -0.05), dx, h
text: 3 * a + 0.5 * dx, -0.05, "$\Delta x$", bottom-center
text: a, 0, "$a$", bottom-center
text: b, 0, "$b$", bottom-center
:::
::::

Fellestrekket for alle rektangelmetodene er at de har to komponenter:
1. En fast bredde $\Delta x$ på hvert rektangel. Vi kaller dette ofte for **steglengden** til metoden.
2. Lar høyden til hvert rektangel være lik funksjonsverdien i et bestemt punkt på hvert intervall

Hvis vi bruker stadig flere rektangler med mindre bredde, så vil tilnærmingen komme nærmere og nærmere den faktiske verdien til integralet. I grensen der vi lar antall rektangler $N \to \infty$, så vil tilnærmingen konvergere mot den ekte verdien av integralet.


:::::::::::::::{summary} Venstretilnærming

Å bruke en **venstretilnærming** handler om å bruke det venstre endepunktet på hvert intervall til å bestemme høyden på rektangelet. Høyden av rektangelet vil være lik funksjonsverdien i venstre endepunkt på hvert intervall.


::::{multi-plot2}
---
rows: 1
cols: 2
---
:::{plot}
fontsize: 24
width: 100%
function: x**2 * exp(-x) - 0.025 * log(x), (0, 6), f
let: N = 6
let: a = 1
let: b = 5
let: dx = (b - a) / N
repeat: n=0..N-1; polygon: (a + n*dx, 0), (a + n*dx, f(a + n*dx)), (a + (n+1)*dx, f(a + n*dx)), (a + (n+1)*dx, 0), blue, 0.1
repeat: n=0..N-1; point: (a + n*dx, f(a + n*dx))
ticks: off
xmin: -0.5
ymin: -0.2
ymax: 0.7
bar: (3*a, -0.05), dx, h
text: 3 * a + 0.5 * dx, -0.05, "$\Delta x$", bottom-center
text: a, 0, "$a$", bottom-center
text: b, 0, "$b$", bottom-center
:::

:::{interactive-graph}
interactive-var: N, 1, 64, 64
interactive-var-start: 6
function: x**2 * exp(-x) - 0.025 * log(x), (0, 6), f
ticks: off
xmin: -0.5
ymin: -0.2
ymax: 0.7
let: a = 1
let: b = 5
let: h = (b - a) / N
repeat: n=0..N-1; polygon: (a + n * h, 0), (a + (n + 1) * h, 0), (a + (n + 1) * h, f(a + n * h)), (a + n * h, f(a + n * h)), blue, 0.1
fontsize: 26
text: a, 0, "$a$", bottom-center
text: b, 0, "$b$", bottom-center
:::

::::





:::::::::::::::







### Høyretilnærming


::::{multi-plot2}
---
rows: 1
cols: 2
---
:::{plot}
fontsize: 24
width: 100%
function: x**2 * exp(-x) - 0.025 * log(x), (0, 6), f
let: N = 6
let: a = 1
let: b = 5
let: dx = (b - a) / N
repeat: n=0..N-1; polygon: (a + n*dx, 0), (a + n*dx, f(a + (n+1)*dx)), (a + (n+1)*dx, f(a + (n+1)*dx)), (a + (n+1)*dx, 0), blue, 0.1
repeat: n=0..N-1; point: (a + (n+1)*dx, f(a + (n+1)*dx))
ticks: off
xmin: -0.5
ymin: -0.2
ymax: 0.7
bar: (3*a, -0.05), dx, h
text: 3 * a + 0.5 * dx, -0.05, "$\Delta x$", bottom-center
text: a, 0, "$a$", bottom-center
text: b, 0, "$b$", bottom-center
:::

:::{interactive-graph}
interactive-var: N, 1, 64, 64
interactive-var-start: 6
function: x**2 * exp(-x) - 0.025 * log(x), (0, 6), f
ticks: off
xmin: -0.5
ymin: -0.2
ymax: 0.7
let: a = 1
let: b = 5
let: h = (b - a) / N
repeat: n=0..N-1; polygon: (a + n * h, 0), (a + (n + 1) * h, 0), (a + (n + 1) * h, f(a + (n + 1) * h)), (a + n * h, f(a + (n + 1) * h)), blue, 0.1
fontsize: 26
text: a, 0, "$a$", bottom-center
text: b, 0, "$b$", bottom-center
:::

::::


### Midtpunktstilnærming



::::{multi-plot2}
---
rows: 1
cols: 2
---
:::{plot}
fontsize: 24
width: 100%
function: x**2 * exp(-x) - 0.025 * log(x), (0, 6), f
let: N = 6
let: a = 1
let: b = 5
let: dx = (b - a) / N
repeat: n=0..N-1; polygon: (a + n*dx, 0), (a + n*dx, f(a + (n+0.5)*dx)), (a + (n+1)*dx, f(a + (n+0.5)*dx)), (a + (n+1)*dx, 0), blue, 0.1
repeat: n=0..N-1; point: (a + (n+0.5)*dx, f(a + (n+0.5)*dx))
ticks: off
xmin: -0.5
ymin: -0.2
ymax: 0.7
bar: (3*a, -0.05), dx, h
text: 3 * a + 0.5 * dx, -0.05, "$\Delta x$", bottom-center
text: a, 0, "$a$", bottom-center
text: b, 0, "$b$", bottom-center
:::

:::{interactive-graph}
interactive-var: N, 1, 64, 64
interactive-var-start: 6
function: x**2 * exp(-x) - 0.025 * log(x), (0, 6), f
ticks: off
xmin: -0.5
ymin: -0.2
ymax: 0.7
let: a = 1
let: b = 5
let: h = (b - a) / N
repeat: n=0..N-1; polygon: (a + n * h, 0), (a + (n + 1) * h, 0), (a + (n + 1) * h, f(a + (n + 0.5) * h)), (a + n * h, f(a + (n + 0.5) * h)), blue, 0.1
fontsize: 26
text: a, 0, "$a$", bottom-center
text: b, 0, "$b$", bottom-center
:::

::::


## Trapesmetoden

Den siste geometriske tilnærmingen vi skal se på kalles for **trapesmetoden**. Ideen er at vi tegner inn trapeser under grafen til $f$ og bruker summen av arealene til trapsene som en tilnærming til verdien til integralet.




::::{multi-plot2}
---
rows: 1
cols: 2
---
:::{plot}
fontsize: 24
width: 100%
function: x**2 * exp(-x) - 0.025 * log(x), (0, 6), f
let: N = 6
let: a = 1
let: b = 5
let: dx = (b - a) / N
repeat: n=0..N-1; polygon: (a + n*dx, 0), (a + n*dx, f(a + n*dx)), (a + (n+1)*dx, f(a + (n+1)*dx)), (a + (n+1)*dx, 0), blue, 0.1
repeat: n=0..N-1; point: (a + n*dx, f(a + n*dx))
repeat: n=0..N-1; point: (a + (n+1)*dx, f(a + (n+1)*dx))
ticks: off
xmin: -0.5
ymin: -0.2
ymax: 0.7
bar: (3*a, -0.05), dx, h
text: 3 * a + 0.5 * dx, -0.05, "$\Delta x$", bottom-center
text: a, 0, "$a$", bottom-center
text: b, 0, "$b$", bottom-center
:::

:::{interactive-graph}
interactive-var: N, 1, 64, 64
interactive-var-start: 6
function: x**2 * exp(-x) - 0.025 * log(x), (0, 6), f
ticks: off
xmin: -0.5
ymin: -0.2
ymax: 0.7
let: a = 1
let: b = 5
let: h = (b - a) / N
repeat: n=0..N-1; polygon: (a + n * h, 0), (a + (n + 1) * h, 0), (a + (n + 1) * h, f(a + (n + 1) * h)), (a + n * h, f(a + n * h)), blue, 0.1
fontsize: 26
text: a, 0, "$a$", bottom-center
text: b, 0, "$b$", bottom-center
:::

::::



## Monte Carlo integrasjon