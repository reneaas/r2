# Bestemte og ubestemte integraler


:::{admonition} Læringsmål
---
class: tip
---
* Kunne regne ut bestemte integraler for enkle elementærfunksjoner.
* Kunne forklare sammenhengen mellom integraler og antideriverte ved hjelp av analysens fundamentalteorem.
* Kunne regne ut ubestemte integraler for enkle elementærfunksjoner.
:::

## Bestemte integraler: Areal med fortegn

:::{plot}
fontsize: 32
width: 100%
align: right
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
text: 0.5 * (a + b), 0.2, "$\displaystyle \int\limits_a^b f(x) \, \mathrm{d}x$", center-center
vline: a, 0, f(a), blue, dashed
vline: b, 0, f(b), blue, dashed
nocache:
:::



Integrasjon handler om å finne arealet mellom grafen til en funksjon $f$ og $x$-aksen. Vi forestiller oss at vi skal regne ut dette arealet på et intervall $[a, b]$. Vi skriver da at dette arealet $A$ som

$$
A = \int\limits_a^b f(x) \, \d x
$$

og kaller det for det **bestemte integralet** av $f$ på intervallet $[a, b]$. 



:::::::::::::::{example} Eksempel 1
:::{plot}
width: 100%
align: right
fontsize: 32
xmin: -1
xmax: 6
ymin: -1
ymax: 8
function: x, (0, 5), f, blue
fill-between: f(x), 0, (0, 5), blue, 0.2, where=above
:::

Grafen til funksjonen $f$ er vist til høyre.


Regn ut integralet

$$
\int\limits_0^5 f(x) \dx
$$



::::{solution}
---
open:
---
Vi finner arealet mellom grafen til $f$ og $x$-aksen. Da får vi en trekant med grunnlinje $5$ og høyde $5$ som betyr at integralet (som er lik arealet) er 

$$
\int\limits_0^5 f(x) \dx = \dfrac{1}{2} \cdot 5 \cdot 5 = \frac{25}{2}
$$
::::


:::::::::::::::


---


:::{plot}
width: 100%
align: right
function: x * (x - 1) * (x - 3)
def: f(x) = x * (x - 1) * (x - 3)
xmin: -1
xmax: 4
ymin: -3
ymax: 2
fill-between: f(x), 0, (0, 3), red, 0.3, where=above
fill-between: f(x), 0, (0, 3), blue, 0.2, where=below
annotate: (0.5, 1.5), (0.5, 0.2), "Positivt areal", 0.3
annotate: (2, -2.7), (2, -1.5), "Negativt areal", -0.3
ticks: off
fontsize: 32
:::




Når vi regner ut integraler, så regner vi ut arealet med fortegn. Det vil si at når grafen til $f$ ligger på oversiden av $x$-aksen så er arealet positivt siden $f(x)$ er positiv. Når grafen til $f$ ligger på undersiden av $x$-aksen så er arealet negativt siden $f(x)$ er negativ. Altså er integraler egentlig **arealer med fortegn**. 

La oss se på et eksempel:


:::{clear}
:::


:::::::::::::::{example} Eksempel 2

:::{plot}
width: 100%
align: right
fontsize: 32
xmin: -2
xmax: 6
ymin: -5
ymax: 5
function: x, (0, 2), f, blue
function: -2*(x - 2) + 2, (2, 5), blue
fill-between: x, 0, (0, 2), red, 0.3, where=above
fill-between: -2*(x - 2) + 2, 0, (2, 3), red, 0.3, where=above
fill-between: -2*(x - 2) + 2, 0, (3, 5), blue, 0.2, where=below
:::




Grafen til funksjonen $f$ er vist til høyre.

Regn ut

$$
\int\limits_0^5 f(x) \dx
$$



::::{solution}
---
open:
---
Integralet

$$
\int\limits_0^5 f(x) \dx
$$

kan deles opp i to mindre integraler

$$
\int\limits_0^5 f(x) \dx = \int\limits_0^3 f(x) \dx + \int\limits_3^5 f(x) \dx
$$

Med det første integralet ligger grafen til $f$ på oversiden av $x$-aksen, så dette integralet blir positivt. Med det andre integralet ligger grafen til $f$ på undersiden av $x$-aksen, så dette integralet blir negativt. 

For det første integralet, så har vi en trekant med grunnlinje $3$ og høyde $+2$ som betyr at 

$$
\int\limits_0^3 f(x) \dx = \dfrac{1}{2} \cdot 3 \cdot 2 = 3
$$

For det andre integralet, så har vi en trekant med grunnlinje $2$ og høyde $-4$ som betyr at

$$
\int\limits_3^5 f(x) \dx = \dfrac{1}{2} \cdot 2 \cdot (-4) = -4
$$

Dermed er det samlede integralet lik

$$
\int\limits_0^5 f(x) \dx = 3 + (-4) = -1
$$
::::


:::::::::::::::


---


I eksempel 1 og 2 er funksjonene bygget opp av rette linjer som gjør det mulig å regne ut integralene med geometri. Men de fleste funksjoner vi jobber med er jo ikke så enkle. For å regne ut integralet av mer kompliserte funksjoner trenger vi en mer generell sammenheng. Dette får vi ved hjelp av det som kalles for **analysens fundamentalteorem**.


## Analysens fundamentalteorem
Analysens fundamentalteorem forteller oss at å regne ut et integral 

$$
\int\limits_a^b f(x) \dx
$$

er det samme som å derivere baklengs. Vi kaller det å **antiderivere**. Det vil si at det finnes en funksjon $F$ slik at $F'(x) = f(x)$. Integrasjon handler derfor om å lete etter *hvilken* funksjon $F$ vi må derivere for å få $f(x)$. Vi kaller $f(x)$ for **integranden** og $F(x)$ for den **antideriverte** til $f(x)$.

Integrasjon og derivasjon er derfor motsatte regnearter.

:::::::::::::::{summary} Analysens fundamentalteorem: Bestemte integraler
For en funksjon $f$ finnes det en funksjon $F$ slik at $F'(x) = f(x)$ for alle $x$. Da gjelder:

$$
\int\limits_a^b f(x) \dx = F(b) - F(a)
$$

der $F$ er en **antiderivert** til $f$.

Skrivemåten nedenfor er svært vanlig:

$$
\left[ F(x) \right]_a^b = F(b) - F(a)
$$

som lar oss skrive setningen som


$$
\int\limits_a^b f(x) \dx = \left[ F(x) \right]_a^b
$$


::::{proof}
:::{plot}
width: 100%
fontsize: 32
align: right
function: 0.25 * x + 0.25 * sin(x) + 2, (-1, 5), blue
def: f(x) = 0.25 * x + 0.25 * sin(x) + 2
fill-between: f(x), 0, (1, 3), blue, 0.1, where=above
fill-between: f(x), 0, (3, 4), red, 0.1, where=above
vline: 1, 0, f(1), blue, dashed
vline: 3, 0, f(3), blue, dashed
vline: 4, 0, f(4), red, dashed
xmin: 0
xmax: 5
ymin: 0
ymax: 4
ticks: off
let: a = 1
let: b = 3
let: c = 4
text: a, 0, "$a$", bottom-center
text: b, 0, "$x$", bottom-center
text: c, 0, "$x + \Delta x$", bottom-center
annotate: (a, f(a) + 1), (a + 0.5 * (b - a), 0.5 * f(a)), "$F(x)$", -0.3
annotate: (b, f(b) + 1), (b + 0.5 * (c - b), 0.5 * f(b)), "$F(x + \Delta x)$", -0.3
annotate: (b, f(b) + 1), (a + 0.5 * (b - a), 0.5 * f(a)), "$F(x + \Delta x)$", 0.3
:::



La oss tenke oss at vi har en funksjon $f$ og vi skal regne ut integralet på et intervall $[a, x]$. Arealet mellom grafen til $f$ og $x$-aksen på dette intervallet er da en funksjon $F(x)$ gitt ved

$$
F(x) = \int\limits_a^x f(x) \dx
$$

Regner vi ut integralet på intervallet $[a, x + \Delta x]$ får vi i stedet

$$
F(x + \Delta x) = \int\limits_a^{x + \Delta x} f(x) \, \d x
$$

Vi kan dele opp dette uttrykket i to integralet:

$$
F(x + \Delta x) = \underbrace{\int\limits_a^x f(x) \, \d x}_{\displaystyle = F(x)} + \int\limits_x^{x + \Delta x} f(x) \, \d x
$$


Altså har vi at 

$$
F(x + \Delta x) = F(x) + \int\limits_x^{x + \Delta x} f(x) \, \d x
$$

Vi kan skrive om dette til

$$
F(x + \Delta x) - F(x) = \int\limits_x^{x + \Delta x} f(x) \, \d x
$$

Så lenge $\Delta x$ er veldig liten, så vil integralet på høyre side være omtrent det samme som å regne ut arealet av et rektangel med høyde $f(x)$ og bredde $\Delta x$. Det vil si at

$$
\int\limits_x^{x + \Delta x} f(x) \, \d x \approx f(x) \cdot \Delta x
$$

Men da får vi at

$$
F(x + \Delta x) - F(x) \approx f(x) \cdot \Delta x
$$

Deler vi med $\Delta x$ på begge sider får vi

$$
\dfrac{F(x + \Delta x) - F(x)}{\Delta x} \approx f(x)
$$

Tar vi grensen når $\Delta x \to 0$, så vil venstre side være definisjonen av den deriverte til $F$ i punktet $x$. Det vil si at

$$
F'(x) = f(x)
$$


Fra argmentasjonen ovenfor, så fant vi at integralet på intervallet [x, x + \Delta x]$ er gitt ved 

$$
\int\limits_x^{x + \Delta x} f(x) \, \d x = F(x + \Delta x) - F(x)
$$

Dersom integralet i stedet er på et vilkårlig intervall $[a, b]$, så kan vi bruke det samme argumentet for å finne at

$$
\int\limits_a^b f(x) \, \d x = F(b) - F(a)
$$


::::

:::::::::::::::




---



:::::::::::::::{example} Eksempel 3
Regn ut integralet

$$
\int\limits_0^1 x^2 \, \dx
$$


::::{solution}
---
open:
---
Vi må finne en funksjon $F$ slik at $F'(x) = x^2$. En slik funksjon er 


$$
F(x) = \dfrac{1}{3} x^3
$$

siden 

$$
F'(x) = \left(\dfrac{1}{3} x^3\right)' = \dfrac{1}{3} \cdot 3 x^2 = x^2
$$

Integralet er derfor lik:

$$
\int\limits_0^1 x^2 \, \d x = F(1) - F(0) = \dfrac{1}{3} \cdot 1^3 - \dfrac{1}{3} \cdot 0^3 = \dfrac{1}{3}
$$
::::


:::::::::::::::



---



Siden vi kan løse integraler ved å lete etter antideriverte, er det ganske viktig å ha gode strategier for å antiderivere funksjoner. Når vi vil finne den mest generelle antideriverte til en funksjon $f$ – det vil si at $F'(x) = f(x)$ – sier vi at vi løser et **ubestemt integral**. Dersom $F(x)$ er en antiderivert til $f(x)$, så vil også $F(x) + C$, der $C$ er en konstant, være en antiderivert siden

$$
\left[F(x) + C\right]' = F'(x) + 0 = f(x)
$$

Vi sier at å finne den mest generelle antideriverte til $f(x)$ er å løse et **ubestemt integral**.


:::::::::::::::{summary} Analysens fundamentalteorem: Ubestemte integraler
La $F$ være en antiderivert til $f$ slik at $F'(x) = f(x)$. Da er det **ubestemte integralet** til $f$ gitt ved

$$
\int f(x) \dx = F(x) + C
$$

Konstanten $C$ kaller vi for en **integrasjonskonstant**.

:::::::::::::::


Det er derfor viktig at vi husker de deriverte til elementærfunksjoner fordi integrasjon nå vil handle om å antiderivere – altså å derivere baklengs. 



:::::::::::::::{summary} Deriverte og antideriverte til elementærfunksjoner
Nedenfor vises en oversikt over de viktigste antideriverte vi må huske utenat.

:::{table}
labels: $f(x)$, $\int f(x) \, \mathrm{d} x$
$x^n$, $\dfrac{1}{n + 1} x^{n + 1} + C$, $n \neq -1$
$e^x$, $e^x + C$
$e^{kx}$, $\dfrac{1}{k} e^{kx} + C$, $k \neq 0$
$\dfrac{1}{x}$, $\ln|x| + C$
$\sin x$, $-\cos x + C$
$\cos x$, $\sin x + C$
$\sin (\omega x)$, $-\dfrac{1}{\omega} \cos (\omega x) + C$
$\cos (\omega x)$, $\dfrac{1}{\omega} \sin (\omega x) + C$
:::



:::::::::::::::


Greit, så nå har vi en oversikt over hvordan vi antideriverer enkelte elementærfunksjoner. Men hvordan blir det dersom vi har en sum eller differanse av slike funksjoner? Og hva om en slik funksjon er ganget med en konstant? Da får vi bruk for følgende regler for integrasjon.

:::::::::::::::{summary} Regneregler for integraler

:::{table}
labels: Regneregel, Integral
$1$, $\int 0 \, \mathrm{d} x = C$
$2$, $\int \left(f(x) \pm g(x)\right) \, \mathrm{d} x = \int f(x) \, \mathrm{d} x \pm \int g(x) \, \mathrm{d} x$
$3$, $\int k \cdot f(x) \, \mathrm{d} x = k \cdot \int f(x) \, \mathrm{d} x$, $k \in \mathbb{R}$
:::



:::::::::::::::



---


:::::::::::::::{example} Eksempel 4
Regn ut det ubestemte integralet

$$
\int \left(3x^2 + e^{-2x}\right) \, \d x
$$


::::{solution}
---
open:
---
Vi har at

$$
\begin{align*}
\int \left(3x^2 + 6e^{-2x}\right) \, \d x &= \int 3x^2 \, \d x + \int 6e^{-2x} \, \d x \\
\\
&= 3\cdot \int x^2 \, \d x + 6 \cdot\int e^{-2x} \, \d x \\
\\
&= 3\cdot \dfrac{1}{2 + 1} x^{2 + 1} + 6\cdot \left(-\dfrac{1}{2}\right) e^{-2x} + C\\
\\
&= x^3 - 3 e^{-2x} + C
\end{align*}
$$

> Vi samler integrasjonskonstanten $C$ til én felles integrasjonskonstant når vi har flere funksjoner vi antideriverer.
::::
:::::::::::::::



