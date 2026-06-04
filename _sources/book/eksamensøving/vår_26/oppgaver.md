# Eksamen vår 2026




## Del 1 – 3 timer – Uten hjelpemidler


:::::::::::::::{exercise} Oppgave 1 (4 poeng)
Bestem integralene.

:::::::::::::{part} a

$$
\int\limits_0^2 \left(e^{2x} + x\right) \d x
$$


::::{answer}
$$
\int\limits_0^2 \left(e^{2x} + x\right) \d x = \dfrac{e^4 + 3}{2}
$$
::::

::::{solution}
Vi finner først en antiderivert til integranden:

$$
\begin{align*}
F(x) &= \int \left(e^{2x} + x\right) \d x 
\\
&= \int e^{2x} \d x + \int x \d x \\
\\
&= \dfrac{1}{2} e^{2x} + \dfrac{x^2}{2} 
\end{align*}
$$

der vi har valgt integrasjonskonstanten $C = 0$ siden vi skal løse et bestemt integral. Da får vi at

$$
F(0) = \dfrac{1}{2} e^0 + \dfrac{0^2}{2} = \dfrac{1}{2}
$$

og 

$$
F(2) = \dfrac{1}{2} e^4 + \dfrac{2^2}{2} = \dfrac{1}{2} e^4 + 2.
$$

Dermed er integralet gitt ved

$$
\int\limits_0^2 (e^{2x} + x) \d x = F(2) - F(0) = \left(\dfrac{1}{2} e^4 + 2\right) - \dfrac{1}{2} = \dfrac{e^4 + 3}{2}.
$$
::::
:::::::::::::


:::::::::::::{part} b
$$
\int \dfrac{\sin (\ln x)}{x} \d x
$$


::::{answer}
$$
\int \dfrac{\sin (\ln x)}{x} \d x = -\cos (\ln x) + C
$$
::::


::::{solution}
Vi bruker substitusjon:

$$
u = \ln x  \limplies \d u = \dfrac{\d x}{x} \liff \d x = x \d u
$$

Vi setter inn dette i integralet:

$$
\begin{align*}
\int \dfrac{\sin (\ln x)}{x} \d x &= \int \dfrac{\sin u}{x} \cdot x \d u \\
\\
&= \int \sin u \, \d u \\
\\
&= -\cos u + C \\
\\
&= -\cos (\ln x) + C
\end{align*}
$$
::::


:::::::::::::



:::::::::::::::




---



:::::::::::::::{exercise} Oppgave 2 (4 poeng)
Du får vite dette om en funksjon $f$

* Funksjonen er definert for $x > 0$
* $f'(x) = \dfrac{2}{x^2}$
* Grafen til $f$ går gjennom punktet $(2, 2)$


:::::::::::::{part} a
Bestem $f(x)$.


::::{answer}
$$
f(x) = -\dfrac{2}{x} + 3.
$$
::::

::::{solution}
Fra analysens fundamentalteorem har vi at

$$
\int f'(x) \d x = f(x) + C
$$

Vi regner ut integralet på venstresiden:

$$
\begin{align*}
\int f'(x) \d x &= \int \dfrac{2}{x^2} \d x \\
\\
&= \int 2x^{-2} \d x \\
\\
&= 2 \int x^{-2} \d x \\
\\
&= 2 \cdot \left(-\dfrac{1}{x}\right) + C \\
\\
&= -\dfrac{2}{x} + C
\end{align*}
$$

Altså er

$$
f(x) = -\dfrac{2}{x} + C
$$

Vi vet at grafen til $f$ går gjennom punktet $(2, 2)$ som gir 

$$
f(2) = 2 \liff -\dfrac{2}{2} + C = 2 \liff C = 3.
$$

Altså er 

$$
f(x) = -\dfrac{2}{x} + 3.
$$
::::

:::::::::::::


To andre funksjoner, $g$ og $h$, er gitt ved $g(x) = x$ og $h(x) = -\dfrac{3}{x} + 4$ for $x > 0$.


:::::::::::::{part} b
Finn arealet av området avgrenset av grafene til $g$ og $h$.



::::{answer}
$$
-3 \ln 3 + 4.
$$
::::

::::{solution}
Vi finner først skjæringspunktene mellom grafene til $g$ og $h$ ved å løse likningen

$$
g(x) = h(x) \liff x = -\dfrac{3}{x} + 4 \liff x^2 - 4x + 3 = 0
$$

Dette kan vi faktorisere videre som

$$
x^2 - 4x + 3 = (x - 1)(x - 3) = 0
$$

Grafene skjærer hverandre altså når

$$
x = 1 \qog x = 3.
$$

Vi sjekker deretter hvilken av funksjonene som ligger øverst i intervallet $[1, 3]$ ved å regne ut $g(2)$ og $h(2)$:

$$
g(2) = 2 \qog h(2) = -\dfrac{3}{2} + 4 = \dfrac{5}{2}.
$$

Vi finner altså at 

$$
h(2) > g(2) \limplies h(x) > g(x) \quad \text{for} \quad x \in [1, 3].
$$

Det betyr at arealet av området avgrenset av grafene til $g$ og $h$ er gitt ved

$$
\begin{align*}
A &= \int\limits_1^3 \left(h(x) - g(x)\right) \d x = \int\limits_1^3 \left(-\dfrac{3}{x} + 4 - x\right) \d x \\
\end{align*}
$$

Vi finner først en antiderivert til integranden:

$$
\begin{align*}
F(x) &= \int \left(-\dfrac{3}{x} + 4 - x\right) \d x \\
\\
&= \int -\dfrac{3}{x} \d x + \int 4 \d x - \int x \d x \\
\\
&= -3 \int x^{-1} \d x + 4 \int 1 \d x - \int x \d x \\
\\
&= -3 \ln x + 4x - \dfrac{x^2}{2} + C.
\end{align*}
$$

Vi setter $C = 0$ siden vi skal løse et bestemt integral. Da har vi at

$$
F(1) = -3 \ln 1 + 4 \cdot 1 - \dfrac{1^2}{2} = \dfrac{7}{2}
$$

og 

$$
F(3) = -3 \ln 3 + 4 \cdot 3 - \dfrac{3^2}{2} = -3 \ln 3 + \dfrac{15}{2}.
$$

Altså er arealet av området avgrenset av grafene til $g$ og $h$ gitt ved

$$
\begin{align*}
A &= F(3) - F(1) \\
\\
&= \left(-3 \ln 3 + \dfrac{15}{2}\right) - \dfrac{7}{2} \\
\\
&= -3 \ln 3 + 4.
\end{align*}
$$
::::


:::::::::::::
:::::::::::::::


---


:::::::::::::::{exercise} Oppgave 3 (4 poeng)


:::::::::::::{part} a
Bestem $\sin v$ og $\tan v$ når $\cos v = \dfrac{2}{3}$ og $v$ er en vinkel i 4. kvadrant.


::::{answer}
$$
\sin v = -\dfrac{\sqrt{5}}{3} \qog \tan v = -\dfrac{\sqrt{5}}{2}
$$
::::

::::{solution}
Fra Pytagoras' identitet har vi at

$$
\sin^2 v + \cos^2 v = 1 \liff \sin^2 v = 1 - \cos^2 v
$$

Da får vi at

$$
\sin^2 v = 1 - \left(\dfrac{2}{3}\right)^2 = 1 - \dfrac{4}{9} = \dfrac{5}{9}.
$$

Siden vinkel $v$ ligger i 4. kvadrant, følger det at $\sin v < 0$. Dermed har vi at

$$
\sin v = -\sqrt{\dfrac{5}{9}} = -\dfrac{\sqrt{5}}{3}.
$$

Vi kan nå regne ut $\tan v$:

$$
\tan v = \dfrac{\sin v}{\cos v} = \dfrac{-\dfrac{\sqrt{5}}{3}}{\dfrac{2}{3}} = -\dfrac{\sqrt{5}}{2}.
$$

Altså er 

$$
\sin v = -\dfrac{\sqrt{5}}{3} \qog \tan v = -\dfrac{\sqrt{5}}{2}
$$
::::


:::::::::::::


:::::::::::::{part} b
Løs likningen

$$
2 \cos \left(\dfrac{\pi}{3}x \right) = \sqrt{3} \, , \quad x \in \langle 0, 10 \rangle
$$


::::{answer}
$$
x = \dfrac{1}{2} \or x = \dfrac{11}{2} \or x = \dfrac{13}{2}
$$
::::


::::{solution}
Vi løser likningen generelt først:

$$
2 \cos \left(\dfrac{\pi}{3}x \right) = \sqrt{3}
$$

$$
\cos \left(\dfrac{\pi}{3}x \right) = \dfrac{\sqrt{3}}{2}
$$

Vi gjør et variableskifte med $u = \dfrac{\pi}{3}x$ som gir oss likningen

$$
\cos u = \dfrac{\sqrt{3}}{2}.
$$

Dette gir oss at 

$$
u = \dfrac{\pi}{6} + 2k\pi \qog u = -\dfrac{\pi}{6} + 2k\pi, \quad k \in \mathbb{Z}.
$$

Vi setter tilbake for $u$ og får at

$$
\dfrac{\pi}{3}x = \dfrac{\pi}{6} + 2k\pi \qog \dfrac{\pi}{3}x = -\dfrac{\pi}{6} + 2k\pi
$$

Så deler vi med $\pi/3$ og får at

$$
x = \dfrac{1}{2} + 6k \qog x = -\dfrac{1}{2} + 6k, \quad k \in \mathbb{Z}.
$$


Nå må vi finne løsningene $x \in \langle 0, 10 \rangle$. Vi starter med den første løsningen:

:::{table}
labels: $k$, $x = \dfrac{1}{2} + 6k$
0, $\dfrac{1}{2}$
1, $\dfrac{13}{2}$
:::

Resten av løsningene vil ligge utenfor intervallet. Så ser vi på den andre løsningen:

:::{table}
labels: $k$, $x = -\dfrac{1}{2} + 6k$
1, $\dfrac{11}{2}$
:::

Det betyr at løsningen av likningen er

$$
x = \dfrac{1}{2} \or x = \dfrac{11}{2} \or x = \dfrac{13}{2}
$$


::::


:::::::::::::


::::::::::::::

:::::::::::::::



---


:::::::::::::::{exercise} Oppgave 4 (2 poeng)
I koordinatsystemet nedenfor ser du grafen til en funksjon $f$.


:::{plot}
width: 80%
function: 2 * cos(2 * x - pi) - 1, (-2 * pi, 3 * pi), f
xmin: -3 * pi/2
xmax: 2 * pi + pi/2
xstep: pi/2
xtick-format: pi
ymin: -5
ymax: 3
:::


Bestem et mulig funksjonsuttrykk $f(x)$.



::::{answer}
$$
f(x) = 2 \sin \left(2x - \dfrac{\pi}{2}\right) - 1.
$$
::::

::::{solution}
Vi starter med et generelt uttrykk for funksjonen gitt ved 

$$
f(x) = A \sin \left(\omega x + \varphi\right) + d.
$$

Amplituden $A$ er gitt ved 

$$
A = \frac{y_{\max} - y_{\min}}{2} = \frac{1 - (-3)}{2} = 2.
$$

Likevektslinja $d$ er gitt ved gjennomsnittet av $y_{\max}$ og $y_{\min}$:

$$
d = \frac{y_{\max} + y_{\min}}{2} = \frac{1 + (-3)}{2} = -1.
$$

Vinkelfrekvensen $\omega$ er gitt ved 

$$
\omega = \frac{2\pi}{T}
$$

der $T$ er perioden. Perioden kan vi lese av er $T = \pi$ som betyr at 

$$
\omega = \frac{2\pi}{\pi} = 2.
$$

Nå har vi at 

$$
f(x) = 2 \sin \left(2x + \varphi\right) - 1.
$$

Fra grafen til $f$ kan vi se at $f(0) = -3$ som gir oss likningen

$$
f(0) = -3 \liff 2 \sin \left(\varphi\right) - 1 = -3 \liff \sin \left(\varphi\right) = -1.
$$

Da får vi at en mulig verdi for $\varphi$ er

$$
\varphi = -\dfrac{\pi}{2}
$$

Ergo er et mulig funksjonsuttrykk for $f(x)$ gitt ved

$$
f(x) = 2 \sin \left(2x - \dfrac{\pi}{2}\right) - 1.
$$
::::


:::::::::::::::


---


:::::::::::::::{exercise} Oppgave 5 (2 poeng)

:::{plot}
width: 70%
function: 2 * x - 1
xmin: -1
xmax: 5
xstep: 0.5
ymin: -4
ymax: 8
:::

I koordinatsystemet ovenfor ser du grafen til funksjonen $f$ gitt ved

$$
f(x) = 2x - 1.
$$

Et omdreiningslegeme framkommer ved at grafen til $f$ fra $x = 1$ til $x = 3$, dreies $360\degree$ rundt førsteaksen.

Regn ut volumet til omdreiningslegemet.


::::{answer}
$$
V = \dfrac{62\pi}{3}.
$$
::::


::::{solution}
Volumet av omdreiningslegemet er gitt ved 

$$
V = \pi \int\limits_{1}^3 f(x)^2 \d x = \pi \int\limits_{1}^3 (2x - 1)^2 \d x.
$$

Vi bruker substitusjon som gir 

$$
u = 2x - 1 \limplies \d u = 2 \d x. 
$$

De nye integrasjonsgrensene blir

$$
u(1) = 2 \cdot 1 - 1 = 1 \qog u(3) = 2 \cdot 3 - 1 = 5.
$$

Dermed er volumet av omdreningslegemet gitt ved

$$
\begin{align*}
V &= \pi \int\limits_{1}^3 (2x - 1)^2 \d x = \pi \int\limits_{1}^3 u^2 \cdot \dfrac{\d u}{2} = \dfrac{\pi}{2} \int\limits_{1}^5 u^2 \d u \\
\\
&= \dfrac{\pi}{2} \cdot \left[\dfrac{u^3}{3}\right]_1^5 = \dfrac{\pi}{2} \cdot \left(\dfrac{5^3}{3} - \dfrac{1^3}{3}\right) = \dfrac{\pi}{2} \cdot \dfrac{124}{3} = \dfrac{62\pi}{3}.
\end{align*}
$$
::::


:::::::::::::::


---



:::::::::::::::{exercise} Oppgave 6 (4 poeng)
I et kunstprosjekt skal Selma bygge et stort tårn ved å legge kvadratiske treplater oppå hverandre. Hun starter med en treplate med sidelengde $5~\mathrm{m}$. 

Når hun bygger videre, skal sidelengden til hver ny treplate være $0.1~\mathrm{m}$ kortere enn sidelengden til treplaten under.

:::::::::::::{part} a
Sett opp en aritmetisk rekke som viser summen av sidelengdene til treplatene i tårnet. 

Hvor mange treplater kan det maksimalt bli i tårnet til Selma?


::::{answer}
Rekke
: $S = 4\cdot \left(5 + 4.9 + 4.8 + \ldots + 0.1\right)$

Maks antall ledd
: $n = 50$
::::

::::{solution}
Vi har at startverdien til rekka er $a_1 = 5$ og at differansen er $d = -0.1$. Rekka vil derfor være gitt ved 

$$
S = 4\cdot \left(5 + 4.9 + 4.8 + \ldots + 0.1\right)
$$

der den minste plata vil ha sidelengde $0.1~\mathrm{m}$. Formelen for det $n$-te leddet i en aritmetisk rekke er gitt ved

$$
a_n = a_1 + (n - 1)d.
$$

Dette gir oss

$$
a_n = 5 + (n - 1)(-0.1) = 5 - 0.1(n - 1) = 5.1 - 0.1n.
$$

Det siste leddet må være $0.1$ som gir oss likningen

$$
0.1 = 5.1 - 0.1n \liff 0.1n = 5 \liff n = 50.
$$

Altså kan det maksimalt bli $50$ treplater i tårnet til Selma.
::::
:::::::::::::


Vilfred skal bygge et annet stort tårn ved å legge kvadratiske treplater oppå hverandre. Han starter med en treplate som har areal $19~\mathrm{m}^2$. 

Når han bygger videre, skal sidelengden til hver ny treplate være $10~\%$ kortere enn sidelengden til treplaten under.

:::::::::::::{part} b
Hvor stort kan det samlede arealet av platene bli i tårnet til Vilfred?


::::{answer}
$100~\mathrm{m}^2$
::::

::::{solution}
Vi har at startverdien til rekka er $a_1 = 19$. Siden sidelengden til hver ny plate er $10~\%$ kortere enn sidelengden til treplaten under, vil kvotienten i rekka være

$$
k = \left(1 - \dfrac{10}{100}\right)^2 = 0.9^2 = 0.81.
$$

Rekka vil derfor være gitt ved

$$
S = 19 + 19 \cdot 0.81 + 19 \cdot 0.81^2 + \ldots
$$

Vi ser at dette er en uendelig geometrisk rekke med startverdi $a_1 = 19$ og kvotient $k = 0.81$. Summen av en uendelig geometrisk rekke er gitt ved formelen

$$
S = \dfrac{a_1}{1 - k}.
$$

Dette gir oss

$$
S = \dfrac{19}{1 - 0.81} = \dfrac{19}{0.19} = 100.
$$

Altså vil det samlede arealet av platene i tårnet til Vilfred kunne bli $100~\mathrm{m}^2$.
::::


:::::::::::::


:::::::::::::::


---



:::::::::::::::{exercise} Oppgave 7 (7 poeng)
Et plan $\alpha$ er gitt ved likningen

$$
2x - 5y + 4z = -4.
$$

Punktene $A(1, 2, 1)$, $B(2, 0, -2)$ og $C(-1, 2, 2)$ ligger i planet.


:::::::::::::{part} a
Avgjør om punktet $D(3, 1, -1)$ ligger i planet $\alpha$.


::::{answer}
Nei.
::::

::::{solution}
Vi setter inn $(x, y, z) = (3, 1, -1)$ i planlikningen og ser om den er tilfredsstilt:

$$
2 \cdot 3 - 5 \cdot 1 + 4\cdot (-1) = 6 - 5 - 4 = -3 \neq -4.
$$

Altså er ikke likningen tilfredsstilt som betyr at punktet $D$ ikke ligger i planet $\alpha$.
::::
:::::::::::::

:::::::::::::{part} b
Bruk kryssprodukt til å vise at $[2, -5, 4]$ er en normalvektor til planet.

::::{solution}
En mulig normalvektor til planet vil være $\lvec{AB} \times \lvec{AC}$. Vi regner ut de to vektorene først: 

$$
\lvec{AB} = [2 - 1, 0 - 2, -2 - 1] = [1, -2, -3]
$$

$$
\lvec{AC} = [-1 - 1, 2 - 2, 2 - 1] = [-2, 0, 1].
$$

Deretter regner vi ut kryssproduktet: 

$$
\begin{align*}
\lvec{AB} \times \lvec{AC} &= \begin{vmatrix}
\vec{e}_x & \vec{e}_y & \vec{e}_z \\
1 & -2 & -3 \\
-2 & 0 & 1
\end{vmatrix}
\\
\\
&= \vec{e}_x \cdot \begin{vmatrix}
-2 & -3 \\
0 & 1
\end{vmatrix} - \vec{e}_y \cdot \begin{vmatrix}
1 & -3 \\
-2 & 1
\end{vmatrix} + \vec{e}_z \cdot \begin{vmatrix}
1 & -2 \\
-2 & 0
\end{vmatrix} \\
\\
&= -2\vec{e}_x + 5\vec{e}_y - 4\vec{e}_z = [-2, 5, -4] \\
\\
&= -1 \cdot [2, -5, 4].
\end{align*}
$$

Altså får vi en vektor som er antiparallell med $[2, -5, 4]$ som betyr at $[2, -5, 4]$ er en normalvektor til planet $\alpha$.
::::

:::::::::::::

En kule tangerer planet $\alpha$ i et punkt $P$.

Kuleflaten er gitt ved likningen

$$
x^2 + y^2 + z^2 - 18y + 2z + k = 0.
$$


:::::::::::::{part} c
Vis at punktet $(0, 9, -1)$ er sentrum i kulen.


::::{solution}
Generelt er likningen til en kule gitt ved med sentrum $(x_0, y_0, z_0)$ og radius $r$ gitt ved

$$
(x - x_0)^2 + (y - y_0)^2 + (z - z_0)^2 = r^2
$$


Vi fullfører kvadratene i likningen for å lese av hva sentrum i sirkelen er. Vi har at 

$$
y^2 - 18y = y^2 - 18y + 9^2 - 9^2 = (y - 9)^2 - 81
$$

og 

$$
z^2 + 2z = z^2 + 2z + 1^2 - 1^2 = (z + 1)^2 - 1.
$$

Altså får vi at likningen blir

$$
x^2 + (y - 9)^2 + (z + 1)^2 - 81 - 1 + k = 0
$$

$$
x^2 + (y - 9)^2 + (z + 1)^2 = 82 - k.
$$

Ved avlesning finner vi derfor at sentrum i kulen er gitt ved $(x_0, y_0, z_0) = (0, 9, -1)$.
::::


:::::::::::::

:::::::::::::{part} d
Bestem en parameterframstilling for linjen som går gjennom sentrum i kulen og punktet $P$


::::{answer}
$$
\vec{r} = [2t, 9 - 5t, -1 + 4t].
$$
::::

::::{solution}
Siden planet $\alpha$ tangerer kulen, vil normalvektoren $\vec{n}_\alpha$ til $\alpha$ være en retningsvektor til linja gjennom sentrum $S$ og tangeringspunktet $P$. Dermed vil en parameterframstilling for linja være gitt ved 

$$
\vec{r}(t) = \lvec{OS} + \vec{n}_\alpha \cdot t = [0, 9, -1] + [2, -5, 4] \cdot t = [2t, 9 - 5t, -1 + 4t].
$$
::::


:::::::::::::


:::::::::::::{part} e
Bestem konstanten $k$ i likningen for kuleflaten.


::::{answer}
$$
k = 37
$$
::::

::::{solution}
Fra oppgave **c** har vi at radius til kula tilfredsstiller:

$$
r^2 = 82 - k.
$$

Vi finner koordinatene til tangeringspunktet $P$ ved å sette inn koordinatene til $\vec{r}(t)$ i likningen for planet $\alpha$:

$$
2 (2t) - 5(9 - 5t) + 4(-1 + 4t) = -4
$$

så løser vi for $t$:

$$
4t - 45 + 25t - 4 + 16t = -4 \liff 45t = 45 \liff t = 1.
$$

Altså vil koordinatene til tangeringspunktet være 

$$
\lvec{OP} = \vec{r}(1) = [2 \cdot 1, 9 - 5 \cdot 1, -1 + 4 \cdot 1] = [2, 4, 3].
$$

Vektoren som peker fra sentrum $S$ til tangeringspunktet $P$ er da gitt ved

$$
\lvec{SP} = \lvec{OP} - \lvec{OS} = [2, 4, 3] - [0, 9, -1] = [2, -5, 4].
$$

Radius i kula tilfredsstiller da at

$$
r^2 = \abs{\lvec{SP}}^2 \and r^2 = 82 - k.
$$

Vi har at 

$$
r^2 = \abs{\lvec{SP}}^2 = 2^2 + (-5)^2 + 4^2 = 4 + 25 + 16 = 45.
$$

Altså får vi at 

$$
45 = 82 - k \liff k = 82 - 45 = 37.
$$

Altså må 

$$
k = 37
$$

::::
:::::::::::::


:::::::::::::::



---



:::::::::::::::{exercise} Oppgave 8 (3 poeng)
:::::::::::::{summary} Påstand
Dersom to vektorer $\vec{p}$ og $\vec{q}$ er ortogonale, er $\abs{\vec{p} + \vec{q}}^2 = \abs{\vec{p}}^2 + \abs{\vec{q}}^2$.
:::::::::::::

En elev prøver å bevise påstanden ovenfor.


:::::::::::::{summary} Elevens bevis

$$
\vec{p} = [4, 0, 0] \qog \vec{q} = [0, 0, 3]
$$


Da er

$$
\abs{\vec{p} + \vec{q}}^2 = \abs{[4, 0, 3]}^2 = 4^2 + 0^2 + 3^2 = 25
$$

og

$$
\abs{\vec{p}}^2 + \abs{\vec{q}}^2 = 4^2 + 3^2 = 16 + 9 = 25.
$$

Altså er påstanden riktig.
:::::::::::::


:::::::::::::{part} a
Forklar hvorfor dette ikke er et gyldig matematisk bevis for påstanden.


::::{solution}
Elevens bevis tar utgangspunkt i ett eksempel. Dette er ikke nok til å bevise påstanden. Det kan *tenkes* at det finnes moteksempler der påstanden ikke er riktig, og ett eksempel er ikke nok til å utelukke dette. For at beviset skal være gyldig, må det vise at påstanden er riktig for alle ortogonale vektorer, og ikke bare for ett spesifikt eksempel.
::::


:::::::::::::

:::::::::::::{part} b
Bevis påstanden ved hjelp av vektorregning.



::::{solution}
La $\vec{p}$ og $\vec{q}$ være ortogonale vektorer. Da har vi at 

$$
\vec{p} \cdot \vec{q} = 0.
$$

Videre har vi at 

$$
\abs{\vec{p} + \vec{q}}^2 = \abs{\vec{p}}^2 + \abs{\vec{q}}^2 + 2 \vec{p} \cdot \vec{q}
$$

Den eneste måten vi kan få at 

$$
\abs{\vec{p} + \vec{q}}^2 = \abs{\vec{p}}^2 + \abs{\vec{q}}^2 
$$

er dersom $\vec{p} \cdot \vec{q} = 0$. Dette skjer dersom de to vektorene er ortogonale. 

Ergo er påstanden sann.
::::


:::::::::::::




:::::::::::::::


---

## Del 2 – 2 timer – Med hjelpemidler


:::::::::::::::{exercise} Oppgave 1 (6 poeng)
Selskapet IntCom er en internettleverandør. Selskapet sørger for overføring av data mellom kundene og internett. Datatrafikken varierer gjennom døgnet.

Tabellen nedenfor viser datatrafikken (gigabit per time) et døgn i mai.

:::{table}
---
transpose: true
---
labels: Tidspunkt (klokkeslett), Datatrafikk (gigabit per time)
00:00, $58~280$
02:00, $39~400$
06:00, $22~550$
08:00, $32~200$
12:00, $67~450$
16:00, $86~110$
20:00, $102~007$
22:00, $87~810$
:::

:::::::::::::{part} a
Lag en god modell for datatrafikken $S(t)$ gigabit per time, $t$ timer etter midnatt dette døgnet.



::::{solution}
Vi bruker regresjon med en modell på formen

$$
S(t) = A \sin \left(\omega x + \varphi\right) + d
$$

Først legger vi inn datapunktene i et regneark:

:::{figure} ./figurer/1/a/regneark.png
---
class: no-click, adaptive-figure
width: 35%
---
:::

så bruker vi {ggb-icon}`mode_regression` og velger en sinusmodell. Da får vi: 


:::{figure} ./figurer/1/a/regresjonsmodell.png
---
class: no-click, adaptive-figure
width: 90%
---
:::

En god modell for datatrafikken er derfor gitt ved

$$
S(t) = 63~190 + 37~228 \cdot \sin\left(0.24t - 2.96\right)
$$


::::

:::::::::::::

Videre i oppgaven skal du bruke modellen

$$
D(t) = 63~000 + 37~000 \cdot \sin \left(0.24 \cdot t - 3.0\right)
$$

for datatrafikken $D(t)$, $t$ timer etter midnatt dette døgnet.

:::::::::::::{part} b
Når var datatrafikken ut fra selskapet mer enn $90~000$ gigabit per time ifølge modellen?


::::{answer}
Mellom klokken 16 og 22.
::::

::::{solution}
Vi løser ulikheten $D(t) > 90~000$ for $t \in \langle 0, 24\rangle$ med CAS: 


:::{figure} ./figurer/1/b/sol.png
---
class: no-click, adaptive-figure
width: 70%
---
:::

Altså er datatrafikken fra selskapet mer enn $90~000$ gigabit per time for $t \in \langle 15.9, 22.2\rangle$ som vil si ca. mellom klokken 16 og klokken 22.

::::

:::::::::::::


:::::::::::::{part} c
Når økte datatrafikken raskest, og hvor stor var denne økningen ifølge modellen?


::::{answer}
Når klokken er ca. 12:30 øker datatrafikken raskest. Da øker den med ca. $8~880$ gigabit per time *per* time.
::::

::::{solution}
Datatrafikken øker raskest når $D(t)'' = 0$ og $D'(t) > 0$. Vi løser den første likningen med CAS og sjekker at den deriverte er positiv:

:::{figure} ./figurer/1/c/sol.png
---
class: no-click, adaptive-figure
width: 60%
---
:::

Når klokken er ca. 12:30 øker datatrafikken raskest. Da øker den med ca. $8~880$ gigabit per time *per* time.


::::

:::::::::::::

:::::::::::::{part} d
Hvor stor del av den totale datamengden som IntCom overførte dette døgnet, ble overført i løpet av arbeidsdagen, det vil si mellom klokken 8 og klokken 16, ifølge modellen?


::::{answer}
Ca. $31.5~\%$. 
::::


::::{solution}
Den totale datamengden som overføres i løpet av hele døgnet kan tilnærmes som

$$
\int\limits_0^{24} D(t) \d t
$$

Datatrafikken i løpet av arbeidsdagen er derimot tilnærmet gitt ved

$$
\int\limits_{8}^{16} D(t) \d t
$$


Vi regner ut forholdet mellom de to med CAS:

:::{figure} ./figurer/1/d/sol.png
---
class: no-click, adaptive-figure
width: 60%
---
:::

Altså blir omtrent $31.5~\%$ av den totale datamengden overført i løpet av arbeidsdagen.
::::

:::::::::::::


:::::::::::::::


---


:::::::::::::::{exercise} Oppgave 2 (4 poeng)
Leddene i en uendelige rekke er gitt ved den rekursive sammenhengen

$$
a_n = (a_{n - 1} - 1)^2
$$

:::::::::::::{part} a
Lag et program som skriver ut de 6 første leddene i rekken dersom $a_1 = 5$.


::::{solution}
Et mulig program som løser oppgaven er

:::{code-block} python
---
linenos:
---
a = 5
n = 1 
while n <= 6:
    print(a)
    a = (a - 1)**2
    n = n + 1
:::

som gir utskriften

:::{code-block} console
5
16
225
50176
2517530625
6337960442777829376
:::

::::

:::::::::::::



:::::::::::::{part} b
Avgjør om det finnes et heltall $a_1$ som gjør at rekken blir konvergent.


::::{solution}
Rekka $S$ er gitt ved 

$$
S = a_1 + a_2 + a_3 + \ldots
$$


Dersom $a_1 = 0$, så vil vi få at 

$$
a_2 = (0 - 1)^2 = 1
$$

$$
a_3 = (1 - 1)^2 = 0
$$

og dette vil gjenta seg slik at 

$$
\{a_n\} = 0, 1, 0, 1, \ldots
$$

som betyr at rekka ikke konvergerer.

Dersom $a_1 = 1$, så vil vi få at

$$
a_2 = (1 - 1)^2 = 0
$$

$$
a_3 = (0 - 1)^2 = 1
$$

og dette vil gjenta seg slik at

$$
\{a_n\} = 1, 0, 1, 0, \ldots
$$

som betyr at rekka ikke konvergerer. 

Dersom $a_1 = 2$, så vil vi få at 

$$
a_2 = (2 - 1)^2 = 1
$$

som betyr at rekka vil oppføre seg som i det første tilfellet og dermed ikke konvergere.

Dersom $\abs{a_1} \gt 2$, så vil vi får at 

$$
a_2 = (a_1 - 1)^2 \gt 1
$$

Dermed vil $a_n$ vokse uten begrensning som betyr at rekka heller ikke konvergerer. 

Dermed finnes det ikke et heltall $a_1$ som gjør at rekken blir konvergent.
::::

:::::::::::::


:::::::::::::::


---


:::::::::::::::{exercise} Oppgave 3 (6 poeng)


:::{figure} ./bilder/fly.jpg
---
class: no-click
width: 40%
---
:::


Et lite propellfly må nødlande på en motorvei. Posisjonen $\vec{r}(t)$ til flyet $t$ sekunder etter at nødlandingen har startet, er gitt ved

$$
\vec{r}(t) = \left[30t - t^2, 8 \sin \left(\dfrac{\pi}{10}t\right), 50\left(1 - \dfrac{t}{10}\right)^2\right]
$$

Motorveien ligger i $xy$-planet. Enhetene langs aksene er meter.


:::::::::::::{part} a
Hvor høyt over motorveien er flyet $4$ sekunder etter at nødlandingen har startet?


::::{answer}
$18$ meter.
::::

::::{solution}
Høyden over motorveien vil være gitt ved $z(4)$ som er 

$$
z(4) = 50 \cdot (1 - 4/10)^2 = 50 \cdot (0.6)^2 = 50 \cdot 0.36 = 18.
$$

Altså er flyet $18~\mathrm{m}$ over motorveien $4$ sekunder etter at nødlandingen har startet.
::::

:::::::::::::


:::::::::::::{part} b
Bestem banefarten idet flyet lander på motorveien.

> Banefart er lengden av fartsvektoren.


::::{answer}
$10.3~\mathrm{m/s}$.
::::

::::{solution}
Vi må først finne ved hvilket tidspunkt flyet lander på motorveien ved å løse $z(t) = 0$. Deretter regner vi ut banefarten $\abs{\vec{r}'(t)}$ ved dette tidspunktet. Vi gjør dette med CAS: 

:::{figure} ./figurer/3/b/sol.png
---
class: no-click, adaptive-figure
width: 70%
---
:::

Altså finner vi at flyet har en banefart på $10.3~\mathrm{m/s}$ idet det lander på motorveien.

::::

:::::::::::::

:::::::::::::{part} c
Ved hvilket tidspunkt under nødlandingen er banefarten $14.3~\mathrm{m/s}$? 


::::{answer}
Ca. $8$ sekunder etter at nødlandingen startet.
::::

::::{solution}
Vi løser likningen $\abs{\vec{r}'(t)} = 14.3$ med CAS:

:::{figure} ./figurer/3/c/sol.png
---
class: no-click, adaptive-figure
width: 80%
---
:::

I oppgave **b** fant vi at flyet lander når $t = 10$, så det må bety at banefarten til flyet er $14.3~\mathrm{m/s}$ når $t \approx 8$ sekunder etter at nødlandingen har startet.

::::


:::::::::::::


En fugl er i posisjonen $(131, 67, 23)$ idet flyet starter nødlandingen. Fuglen flyr i en rett linje og krysser banen til flyet i punktet $\left(125, 8, \dfrac{25}{2}\right)$.

Fuglen holder en jevn banefart på $12~\mathrm{m/s}$.

:::::::::::::{part} d
Vil fuglen treffe flyet?


::::{answer}
Ja!
::::

::::{solution}
Vi lar $\lvec{OA} = [131, 67, 23]$ være startposisjonen til fuglen. Flyet og fuglen kan møtes i $\lvec{OB} = \left[125, 8, \dfrac{25}{2}\right]$. Vi finner derfor først en retningsvektor 

$$
\vec{u} = \lvec{OB} - \lvec{OA}
$$

Fartsvektoren til fuglen vil da være gitt ved 

$$
\vec{v} = 12 \cdot \dfrac{\vec{u}}{\abs{\vec{u}}}
$$

Da er posisjonsvektoren til fuglen er gitt ved

$$
\vec{f}(t) = \lvec{OA} + \vec{v} \cdot t
$$

Vi bare sjekker om de to vektorene $\vec{r}(t)$ og $\vec{f}(t)$ er like for én $t \in \langle 0, 10\rangle$ med CAS:

:::{figure} ./figurer/3/d/sol.png
---
class: no-click, adaptive-figure
width: 90%
---
:::

Både fuglen og flyet er i skjæringspunktet mellom kurvene sine omtrent ved $t = 5$ sekunder som betyr at fuglen vil treffe flyet. 


> Merk at selv om fuglen er i punktet 0.02 sekunder senere, så vil det i praksis bety at fuglen og flyet treffer hverandre siden det er så liten tidsforskjell. 
::::

:::::::::::::


:::::::::::::::


---


:::::::::::::::{exercise} Oppgave 4 (3 poeng)
Du får i oppdrag å lage en vase med form som på bildet nedenfor.

Vasen skal romme omtrent $1.5~\mathrm{L}$ vann og ha høyde $20~\mathrm{cm}$.

:::{figure} ./bilder/vase.jpg
---
class: no-click
width: 30%
---
:::

Bruk det du kan om omdreiningslegemer og trigonometri, til å lage en funksjon på formen

$$
f(x) = A \cdot \sin \left(cx + \varphi\right) + d
$$

som ved omdreining gir en vase med denne formen.

Tegn grafen til funksjonen i et koordinatsystem der enhetene langs aksene er centimeter.

Husk å begrunne ditt valg av parameterne $A$, $c$, $\varphi$ og $d$, og la funksjonsuttrykket komme tydelig fram i besvarelsen din.


::::{solution}
Vi forestiller oss at vi skal dreie en sinusfunksjon om førsteaksen som vist nedenfor.


:::{plot}
width: 70%
let: T = 20
let: c = 2*pi / T
let: d = 2
let: A = 1
let: phi = -pi/2
function: A * sin(c * (x + phi)) + d, (0, T), f
ticks: off
xmin: -1
xmax: 22
fontsize: 24
ymax: 4
ymin: -4
ellipse: (T, 0), 0.4, f(T), solid, red
def: g(x) = A * sin(c * (x + phi)) + d
curve: t, -g(t), (0, T), dashed, blue
curve: T/2 + 0.4 * cos(t), g(T/2) * sin(t), (-pi/2, pi/2), dashed, red
curve: T/2 + 0.4 * cos(t), g(T/2) * sin(t), (pi/2, 3*pi/2), solid, red
curve: 0.4 * cos(t), g(0) * sin(t), (-pi/2, pi/2), dashed, red
curve: 0.4 * cos(t), g(0) * sin(t), (pi/2, 3*pi/2), solid, red
nocache:
:::


Vi setter først perioden $T = 20$ siden den skal være $20~\mathrm{cm}$ høy. Da får vi at 

$$
c = \dfrac{2\pi}{T} = \dfrac{2\pi}{20} = \dfrac{\pi}{10}.
$$

Siden det skal være en sinusfunksjon, er det rimelig å la faseforskyvningen være $-\pi/2$ så vi får en funksjon som starter og slutter på likevektslinja si. Da blir vasen like bred på bunnen og toppen. Altså må

$$
\dfrac{\varphi}{c} = -\dfrac{\pi}{2} \liff \varphi = -\dfrac{\pi}{2} \cdot \dfrac{\pi}{10} = -\dfrac{\pi^2}{20}.
$$


Amplituden $A < d$ for at vi skal få en vase som ikke skjærer $x$-aksen. Valget her er ganske fritt, så vi setter $A = \dfrac{d}{4}$ for å få en vase som svinger relativt lite i forhold til likevektslinja si. Nå trenger vi bare å kreve at 

$$
V = \pi \int\limits_0^{20} f(x)^2 \d x = 1500
$$

siden $1.5~\mathrm{L} = 1500~\mathrm{cm}^3$. Vi løser denne likningen for $d$ med CAS:


:::{figure} ./figurer/4/sol.png
---
class: no-click, adaptive-figure
width: 80%
---
:::

Altså blir funksjonsuttrykket som skal dreies om førsteaksen for å lage vasen gitt ved

$$
f(x) = \dfrac{5 \sqrt{22 \pi}}{11\pi} \cdot \sin \left(\dfrac{\pi}{10}x - \dfrac{\pi^2}{20}\right) + \dfrac{20 \sqrt{22 \pi}}{11\pi}.
$$

Grafen til $f$ er vist i figuren nedenfor.

:::{plot}
width: 70%
let: d = 20 * sqrt(22) * sqrt(pi) / (11 * pi)
let: A = d / 4
let: c = pi / 10
let: phi = -pi**2 / 20
function: A * sin(c * x + phi) + d, (0, 20), f
xstep: 5
xmin: 0
xmax: 25
ymin: 0
ymax: 10
xlabel: $x/\mathrm{cm}$
ylabel: $y/\mathrm{cm}$
fontsize: 24
:::


::::

:::::::::::::::