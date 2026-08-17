# Oppgaver: Geometriske følger og rekker


:::::::::::::::{exercise} Oppgave 1
:::::::::::::{part} a
En geometrisk følge $\{a_n\}$ er gitt ved

$$
5, 10, 20, 40, 80, \ldots
$$

Finn en eksplisitt formel for $a_n$.


:::::{answer}
$$
a_n = 5 \cdot 2^{n - 1} \qfor n = 1, 2, 3, \ldots
$$

::::{solution}
Kvotienten i følgen er $k = 2$ siden hvert ledd alltid er $2$ ganger det forrige. Det første leddet er $a_1 = 5$ som betyr at 

$$
a_n = a_1 \cdot k^{n - 1} = 5 \cdot 2^{n - 1} \qfor n = 1, 2, 3, \ldots
$$
::::
:::::

:::::::::::::


:::::::::::::{part} b
En geometrisk følge $\{b_n\}$ er gitt ved

$$
2, 6, 18, 54, 162, \ldots
$$

Finn en eksplisitt formel for $b_n$.

:::::{answer}
$$
b_n = 2 \cdot 3^{n - 1} \qfor n = 1, 2, 3, \ldots
$$

::::{solution}
Startleddet er $b_1 = 2$ og kvotienten er $k = 3$ siden hvert ledd alltid er $3$ ganger det forrige leddet. Derfor er

$$
b_n = b_1 \cdot k^{n - 1} = 2 \cdot 3^{n - 1} \qfor n = 1, 2, 3, \ldots
$$
::::
:::::

:::::::::::::


:::::::::::::{part} c
En geometrisk følge $\{c_n\}$ er gitt ved

$$
4, 2, 1, \frac{1}{2}, \frac{1}{4}, \ldots
$$

Finn en eksplisitt formel for $c_n$.


:::::{answer}
$$
c_n = 4 \cdot \left(\frac{1}{2}\right)^{n - 1} \qfor n = 1, 2, 3, \ldots
$$

::::{solution}
Startleddet er $c_1 = 4$ og kvotienten er $k = 1/2$ siden hvert ledd alltid er en $1/2$ ganget med det forrige leddet. Dermed er

$$
c_n = c_1 \cdot k^{n - 1} = 4 \cdot \left(\frac{1}{2}\right)^{n - 1} \qfor n = 1, 2, 3, \ldots
$$
::::
:::::


:::::::::::::


:::::::::::::{part} d
En geometrisk følge $\{d_n\}$ er gitt ved

$$
3, -1, \frac{1}{3}, -\frac{1}{9}, \frac{1}{27}, \ldots
$$

Finn en eksplisitt formel for $d_n$.

:::{hint} Hint
Når leddene i en geometrisk følge bytter fortegn annenhver gang, betyr det at kvotienten er negativ.
:::

:::::{answer}
$$
d_n = 3 \cdot \left(-\frac{1}{3}\right)^{n - 1} \qfor n = 1, 2, 3, \ldots
$$

::::{solution}
Startleddet er $d_1 = 3$ og kvotienten er $k = -1/3$ siden hvert ledd alltid er $1/3$ av det forrige, men vi kan også se at leddene bytter fortegn annen hver gang som betyr at kvotienten må være negativ. 

Dermed er

$$
d_n = d_1 \cdot k^{n - 1} = 3 \cdot \left(-\frac{1}{3}\right)^{n - 1} \qfor n = 1, 2, 3, \ldots
$$
::::
:::::
:::::::::::::

:::::::::::::::


---



:::::::::::::::{exercise} Oppgave 2
:::::::::::::{part} a
En geometrisk følge $\{a_n\}$ er gitt ved den rekursive formelen

$$
a_{n + 1} = \dfrac{a_n}{2} \qder a_1 = 32
$$

Finn de $5$ første leddene i følgen.


:::::{answer}
$$
32, 16, 8, 4, 2
$$


::::{solution}
Fra den rekursive formelen kan vi se at kvotienten er $k = 1/2$. Altså vil hvert ledd alltid være halvparten av det forrige leddet. De 5 første leddene i følgen er derfor

$$
32, 16, 8, 4, 2
$$
::::
:::::

:::::::::::::


:::::::::::::{part} b
En geometrisk følge $\{b_n\}$ er gitt ved den rekursive formelen

$$
b_{n + 1} = (-2) \cdot b_n \qder b_1 = \dfrac{1}{4}
$$

Finn de $5$ første leddene i følgen.


:::::{answer}
$$
\dfrac{1}{4}, -\dfrac{1}{2}, 1, -2, 4
$$

::::{solution}
Fra den rekursive formelen ser vi at $k = -2$. Det betyr at hvert ledd er alltid dobbelt så stort som det forrige, og at det bytter fortegn siden kvotienten er negativ. 

De 5 første leddene blir da 

$$
\dfrac{1}{4}, -\dfrac{1}{2}, 1, -2, 4
$$
::::
:::::


:::::::::::::



:::::::::::::{part} c
En geometrisk følge $\{c_n\}$ er gitt ved den rekursive formelen

$$
c_{n + 1} = \dfrac{1}{3}\cdot c_n \qder c_3 = 3
$$

Finn de $5$ første leddene i følgen.


:::::{answer}
$$
27, 9, 3, 1, \frac{1}{3}
$$

::::{solution}
Fra den rekursive formelen ser vi at kvotienten er $k = 1/3$. Vi kjenner til $c_3$, og leddene *før* dette må være $3$ ganger større for hvert ledd, mens leddene etter må være $1/3$ av det forrige leddet. Dermed får vi

$$
27, 9, 3, 1, \frac{1}{3}
$$
::::
:::::


:::::::::::::



:::::::::::::::


---


:::::::::::::::{exercise} Oppgave 3
:::::::::::::{part} a
En geometrisk rekke er gitt ved 

$$
S = 4 + 2 + 1 + \frac{1}{2} + \ldots + \dfrac{1}{128}
$$

Finn summen av rekka.


:::::{answer}
$$
S = \dfrac{1023}{128}
$$

::::{solution}
Det første leddet i rekka er $a_1 = 4$ og det siste er $a_n = \dfrac{1}{128}$. Vi kan se at kvotienten er $k = 1/2$ siden hvert ledd alltid er halvparten av det forrige leddet. Dermed er summen av rekka gitt ved

$$
\begin{align*}
S &= \dfrac{a_1 - a_n\cdot k}{1 - k} = \dfrac{4 - \dfrac{1}{128}\cdot \dfrac{1}{2}}{1 - \dfrac{1}{2}} \\
\\
&= \dfrac{4 - \dfrac{1}{256}}{1/2} \\
\\
&= 2 \cdot \left(4 - \dfrac{1}{256}\right) \\
\\
&= 8 - \dfrac{1}{128} \\
\\
&= \dfrac{1023}{128}
\end{align*}
$$
::::
:::::


:::::::::::::



:::::::::::::{part} b
En geometrisk rekke er gitt ved 

$$
R = 1 - 2 + 4 - 8 + \ldots + 1024
$$


Bestem summen av rekka.


:::::{answer}
$$
R = 683
$$

::::{solution}
Det første leddet er $a_1 = 1$ og det siste er $a_n = 1024$. Kvotienten i rekka er $k = -2$ siden hvert ledd alltid er dobbelt så stort som det forrige, men med motsatt fortegn. 

Summen av rekka er da 

$$
\begin{align*}
R &= 1 - 2 + 4 - 8 + \ldots + 1024 \\
\\
&= \dfrac{a_1 - a_n \cdot k}{1 - k} = \dfrac{1 - 1024 \cdot (-2)}{1 - (-2)} \\
\\
&= \dfrac{1 + 2048}{3} \\
\\
&= \dfrac{2049}{3} \\
\\
&= 683
\end{align*}
$$
::::
:::::

:::::::::::::



:::::::::::::{part} c
En geometrisk rekke er gitt ved 

$$
L = 1 - \dfrac{1}{2} + \dfrac{1}{4} - \dfrac{1}{8} + \ldots - \dfrac{1}{512}
$$

Finn summen av rekka.


:::::{answer}
$$
L = \dfrac{341}{256}
$$

::::{solution}
Det første leddet er $a_1 = 1$ og det siste er $a_n = -1/512$. Kvotienten i rekka er $k = -1/2$ siden hvert ledd alltid er halvparten av det forrige og fortegnet alternerer. 

Summen av rekka er da 

$$
\begin{align*}
L &= 1 - \dfrac{1}{2} + \dfrac{1}{4} - \dfrac{1}{8} + \ldots - \dfrac{1}{512} \\
\\
&= \dfrac{a_1 - a_n \cdot k}{1 - k} = \dfrac{1 - \left(-\dfrac{1}{512}\right) \cdot \left(-\dfrac{1}{2}\right)}{1 - \left(-\dfrac{1}{2}\right)} \\
\\
&= \dfrac{1 - \dfrac{1}{1024}}{3/2} \\
\\
&= \dfrac{2}{3} \cdot \left(1 - \dfrac{1}{1024}\right) \\
\\
&= \dfrac{2}{3} \cdot \dfrac{1023}{1024} \\
\\
&= \dfrac{682}{512} \\
\\
&= \dfrac{341}{256}
\end{align*}
$$
::::
:::::


:::::::::::::


:::::::::::::::



---


:::::::::::::::{exercise} Oppgave 4
:::::::::::::{part} a
En uendelig geometrisk rekke er gitt ved

$$
S = 2 + 1 + \dfrac{1}{2} + \dfrac{1}{4} + \dfrac{1}{8} + \ldots
$$

Finn summen av rekka.


:::::{answer}
$$
S = 4
$$

::::{solution}
Rekka har startledd $a_1 = 2$ og kvotient $k = 1/2$ siden hvert ledd alltid er halvparten av det forrige. Da er summen av rekka gitt ved

$$
S = \dfrac{a_1}{1 - k} = \dfrac{2}{1 - 1/2} = \dfrac{2}{1/2} = 4
$$
::::
:::::

:::::::::::::


:::::::::::::{part} b
En uendelig geometrisk rekke er gitt ved

$$
S = 1 - \dfrac{1}{2} + \dfrac{1}{4} - \dfrac{1}{8} + \ldots
$$

Finn summen av rekka.


:::::{answer}
$$
S = \dfrac{2}{3}
$$

::::{solution}
Rekka har startledd $a_1 = 1$ og kvotient $k = -1/2$ siden hvert ledd alltid er halvparten så stort som det forrige, og fortegnene alternerer. 

Da er summen av rekka gitt ved 

$$
S = \dfrac{a_1}{1 - k} = \dfrac{1}{1 - (-1/2)} = \dfrac{1}{1 + 1/2} = \dfrac{1}{3/2} = \dfrac{2}{3}
$$
::::
:::::


:::::::::::::


:::::::::::::{part} c
En uendelig geometrisk rekke er gitt ved

$$
S = 16 + 4 + 1 + \dfrac{1}{4} + \dfrac{1}{16} + \ldots
$$

Finn summen av rekka.


:::::{answer}
$$
S = \dfrac{64}{3}
$$

::::{solution}
Det første leddet i rekka er $a_1 = 16$. Kvotienten til rekka er $k = 1/4$ siden hvert ledd er en $1/4$ av det forrige leddet i rekka. 

Summen av rekka er derfor

$$
S = \dfrac{a_1}{1 - k} = \dfrac{16}{1 - 1/4} = \dfrac{16}{3/4} = \dfrac{16 \cdot 4}{3} = \dfrac{64}{3}
$$
::::
:::::




:::::::::::::


:::::::::::::{part} d
En uendelig geometrisk rekke er gitt ved 

$$
S = \dfrac{1}{3} - \dfrac{1}{9} + \dfrac{1}{27} - \dfrac{1}{81} + \ldots
$$

Finn summen av rekka.


:::::{answer}
$$
S = \dfrac{1}{4}
$$

::::{solution}
Det første leddet i rekka er $a_1 = 1/3$. Kvotienten i rekka er $k = -1/3$ siden hvert ledd er $1/3$ av det forrige i størrelse, og fortegnet til leddene alternerer.

Summen av rekka er derfor

$$
S = \dfrac{a_1}{1 - k} = \dfrac{1/3}{1 - (-1/3)} = \dfrac{1/3}{1 + 1/3} = \dfrac{1/3}{4/3} = \dfrac{1}{4}
$$

::::
:::::


:::::::::::::


:::::::::::::::



---



:::::::::::::::{exercise} Oppgave 5
Leddene i en geometrisk følge $\{a_n\}$ er definert av rekursjonsformelen

$$
a_{n + 1} = \dfrac{a_n}{3} \qder a_1 = 9.
$$


:::::::::::::{part} a
Bestem en formel for $a_n$.


:::::{answer}
$$
a_n = 9 \cdot \left(\dfrac{1}{3}\right)^{n - 1} \qfor n = 1, 2, 3, \ldots
$$

::::{solution}
Startleddet er $a_1 = 9$. Kvotienten kan vi se fra rekursjonsformelen er $k = 1/3$. Dermed er formelen for det $n$-te leddet

$$
a_n = a_1 \cdot k^{n - 1} = 9 \cdot \left(\dfrac{1}{3}\right)^{n - 1} \qfor n = 1, 2, 3, \ldots
$$
::::
:::::

:::::::::::::


:::::::::::::{part} b
Regn ut

$$
S = a_1 + a_2 + \ldots 
$$

:::::{answer}
$$
S = \dfrac{27}{2}
$$

::::{solution}
Rekka er en uendelig geometrisk rekke med startledd $a_1 = 9$ og kvotient $k = 1/3$. Dermed er summen av rekka gitt ved

$$
S = \dfrac{a_1}{1 - k} = \dfrac{9}{1 - 1/3} = \dfrac{9}{2/3} = \dfrac{9 \cdot 3}{2} = \dfrac{27}{2}
$$
::::
:::::

:::::::::::::

:::::::::::::::



---



:::::::::::::::{exercise} Oppgave 6

:::::::::::::{part} a
Om en geometrisk rekke får du vite at

* Rekka konvergerer mot $16$.
* $\dfrac{a_5}{a_2} = \dfrac{1}{8}$.

Bestem det første leddet i rekka.


:::::{answer}
$a_1 = 8$

::::{solution}
Formelen for det $n$-te leddet er 

$$
a_n = ak^{n - 1}
$$

Det betyr at 

$$
\dfrac{a_5}{a_2} = \dfrac{ak^4}{ak} = k^3
$$

Vi har at dette forholdstallet skal være lik $1/8$, så da er

$$
k^3 = \dfrac{1}{8} \liff k = \dfrac{1}{2}
$$

Rekka konvergerer mot $16$ som betyr at

$$
16 = \dfrac{a_1}{1 - k} = \dfrac{a_1}{1 - 1/2} = 2a_1
$$

Altså må 

$$
a_1 = \dfrac{16}{2} = 8
$$
::::
:::::
:::::::::::::



:::::::::::::{part} b
En geometrisk rekke $b_1 + b_2 + b_3 + \ldots$ konvergerer mot $24$.

Summen $b_1 + b_2 + b_3 = 21$.


Bestem $b_1$.


:::::{answer}
$$
b_1 = 12
$$

::::{solution}
Siden rekka konvergerer mot $24$, har vi at 

$$
\dfrac{b_1}{1 - k} = 24
$$

Samtidig har vi at 

$$
b_1 + b_2 + b_3 = 21
$$

$$
b_1 + b_1\cdot k + b_1 \cdot k^2 = 21
$$

som gir

$$
b_1 \cdot \dfrac{1-k^3}{1-k} = 21
$$

som vi kan skrive om til

$$
\dfrac{b_1}{1 - k} \cdot (1 - k^3) = 21
$$

Vi vet allerede at $\dfrac{b_1}{1 - k} = 24$, så da får vi

$$
24 (1 - k^3) = 21
$$

som vi kan skrive om til

$$
1 - k^3 = \dfrac{21}{24} = \dfrac{3\cdot 7}{3 \cdot 8} = \dfrac{7}{8}
$$

Altså er 

$$
1 - k^3 = \dfrac{7}{8} \liff k^3 = 1 - \dfrac{7}{8}
$$

som gir

$$
k^3 = \dfrac{1}{8} \liff k = \dfrac{1}{2}
$$

Men da er verdien til det første leddet gitt ved

$$
\dfrac{b_1}{1 - 1/2} = 24 \liff \dfrac{b_1}{1/2} = 24
$$

Ergo er

$$
b_1 = \dfrac{1}{2} \cdot 24 = 12
$$
::::
:::::

:::::::::::::

:::::::::::::::




---



:::::::::::::::{exercise} Oppgave 7

:::::::::::::{part} a
:::{plot}
width: 320px
align: right
let: L = 3
let: r = 1/2
def: s(n) = L*(1 - r**n)
polygon: (0, 0), (L, 0), (L, L), (0, L)
repeat: n=1..10; line-segment: (s(n), s(n-1)), (s(n), L), dashed, black
repeat: n=1..10; line-segment: (s(n-1), s(n)), (L, s(n)), dashed, black
repeat: n=1..10; fill-polygon: (s(n-1), s(n-1)), (s(n), s(n-1)), (s(n), s(n)), (s(n-1), s(n)), blue, 0.3
axis: off
axis: equal
lw: 1
:::

I figuren til høyre vises et kvadrat med sidelengder $3$.

Kvadratet er delt opp i mindre kvadrater der en uendelig følge av kvadrater er fargelagt. 

Finn arealet av det fargelagte området.


:::::{answer}
Arealet er $3$


::::{solution}
De fargelagte kvadratene er alltid $1/2$ så stor sidelengde som det forrige fargelagte kvadratet. Det betyr at arealet til et fargelagt kvadrat er $1/4$ av arealet til det forrige fargelagte kvadratet. Vi kan derfor sette kvotienten til arealene lik $k = 1/4$.

Det første arealet er $A_1 = (3/2)^2 = 9/4$. Ergo vil arealet av det samlede fargelagte området være

$$
A = \dfrac{A_1}{1 - k} = \dfrac{9/4}{1 - 1/4} = \dfrac{9/4}{3/4} = 3
$$
::::

:::::
:::::::::::::



:::::::::::::{part} b
Figuren nedenfor er satt sammen av uendelig mange linjestykker. 

Lengden til det neste linjestykke er alltid $90\%$ av lengden til det forrige linjestykket. Det første linjestykket er $100~\mathrm{cm}$ langt.

:::{plot}
width: 100%
figsize: (8, 1.5)
lw: 1.5
fontsize: 20
axis: off
axis: equal
let: L = 100
let: k = 0.9
def: x(n) = L*k*(1 - k**(2*n))/(1 - k**2)
def: y(n) = L*(1 + (-1)**n * k**(2*n + 2))/(1 + k**2)
line-segment: (0, 0), (0, L), blue
repeat: n=0..100; line-segment: (x(n), y(n)), (x(n+1), y(n)), blue
repeat: n=0..100; line-segment: (x(n+1), y(n)), (x(n+1), y(n+1)), blue
text: -1, 0.5 * L, "100 cm", center-left
text: 0.5 * k * L, L, "90 cm", top-center
nocache:
:::

Finn den totale lengden av alle linjestykkene.


:::::{answer}
$1000~\mathrm{cm}$


::::{solution}
Lengden har startverdi $L_1 = 100$. Siden hvert linjestykke alltid er $90\%$ av lengden til det forrige, er kvotienten 

$$
k = 90\% = 0.9 = 9/10
$$

Den totale lengden av linjestykkene er da

$$
L = \dfrac{L_1}{1 - k} = \dfrac{100}{1 - 9/10} = \dfrac{100}{1/10} = 1000
$$

Altså vil den totale lengden konvergere mot $1000~\mathrm{cm}$.

::::


:::::

:::::::::::::



:::::::::::::{part} c

:::{plot}
axis: off
axis: equal
align: right
width: 350px
let: r = 1
let: k = 0.8
let: N = 7
repeat: n=0..100; line-segment: (r * k**n * cos(2 * pi * n / N), r * k**n * sin(2 * pi * n / N)), (r * k**(n + 1) * cos(2 * pi * (n + 1) / N), r * k**(n + 1) * sin(2 * pi * (n + 1) / N)), blue
lw: 2
:::


En spiral er vist i figuren til høyre.

Det neste linjestykket er alltid $20\%$ kortere enn det forrige linjestykket. Det første linjestykket er $10~\mathrm{cm}$ langt.


Finn den samlede lengden til spiralen.


:::::{answer}
$$
50~\mathrm{cm}
$$


::::{solution}
Det første linjestykke har lengden $L_1 = 10$. Siden hvert linjestykke alltid er $20\%$ kortere enn det forrige linjestykket, er kvotienten gitt ved

$$
k = 100\% - 20\% = 80\% = 0.8 = \dfrac{4}{5}
$$

Dermed blir den samlede lengden av spiralen

$$
L = \dfrac{L_1}{1 - k} = \dfrac{10}{1 - 4/5} = \dfrac{10}{1/5} = 50
$$

Altså vil den samlede lengden av spiralen konvergere mot $50~\mathrm{cm}$.
::::


:::::


:::::::::::::


:::::::::::::{part} d
:::{plot}
width: 320px 
align: right
let: L = 1
let: r = 1/2
let: k = sqrt(3)/2
let: h = k * L
def: s(n) = r * h * (r**n - 1) / (r - 1)
polygon: (-0.5 * L, 0), (0.5 * L, 0), (0, h)
repeat: n=1..10; polygon: (0, s(n-1)), (r * L / 2**n, s(n)), (-r * L / 2**n, s(n)), blue, 0.3
axis: off
axis: equal
:::

Til høyre vises en likesidet trekant med areal $12$. 

Trekanten er delt i mindre likesidete trekanter der noen er fargelagte. Oppdelingen fortsetter slik for alltid.

Finn det samlede arealet av alle de fargelagte trekantene.


:::::{answer}
Det samlede arealet er lik $4$.

::::{solution}
Arealet av hele trekanten er $12$. Arealet av den største fargelagte trekanten er $1/4$ av arealet til hele trekanten. Arealet av den nest største fargelagte trekanten er $1/4$ av arealet til den største fargelagte trekanten, og så videre. Dermed er kvotienten mellom arealene til de fargelagte trekantene gitt ved

$$
k = \dfrac{1}{4}
$$

Det samlede arealet av de fargelagte trekantene vil da være

$$
A = \dfrac{A_1}{1 - k} = \dfrac{12/4}{1 - 1/4} = \dfrac{3}{3/4} = 4
$$
::::

:::::
:::::::::::::



:::::::::::::{part} e
Nedenfor vises de fire første figurene i en figurfølge. Arealet av den første figuren er $1$.


::::{multi-plot2}
---
rows: 1
cols: 4
width: 100%
align: center
---

:::{plot}
axis: equal
axis: off
fontsize: 45
fill-polygon: (0, 0), (1, 0), (1/2, sqrt(3)/2), blue, 0.2
polygon: (0, 0), (1, 0), (1/2, sqrt(3)/2)
text: 1/2, -0.35, "Figur 1", top-center
:::

:::{plot}
axis: equal
axis: off
fontsize: 45
fill-polygon: (0, 0), (1/2, 0), (1/4, sqrt(3)/4), blue, 0.2
polygon: (0, 0), (1/2, 0), (1/4, sqrt(3)/4)
fill-polygon: (1/2, 0), (1, 0), (3/4, sqrt(3)/4), blue, 0.2
polygon: (1/2, 0), (1, 0), (3/4, sqrt(3)/4)
fill-polygon: (1/4, sqrt(3)/4), (3/4, sqrt(3)/4), (1/2, sqrt(3)/2), blue, 0.2
polygon: (1/4, sqrt(3)/4), (3/4, sqrt(3)/4), (1/2, sqrt(3)/2)
text: 1/2, -0.35, "Figur 2", top-center
:::

:::{plot}
axis: equal
axis: off
fontsize: 45

fill-polygon: (0, 0), (1/4, 0), (1/8, sqrt(3)/8), blue, 0.2
polygon: (0, 0), (1/4, 0), (1/8, sqrt(3)/8)
fill-polygon: (1/4, 0), (1/2, 0), (3/8, sqrt(3)/8), blue, 0.2
polygon: (1/4, 0), (1/2, 0), (3/8, sqrt(3)/8)
fill-polygon: (1/8, sqrt(3)/8), (3/8, sqrt(3)/8), (1/4, sqrt(3)/4), blue, 0.2
polygon: (1/8, sqrt(3)/8), (3/8, sqrt(3)/8), (1/4, sqrt(3)/4)

fill-polygon: (1/2, 0), (3/4, 0), (5/8, sqrt(3)/8), blue, 0.2
polygon: (1/2, 0), (3/4, 0), (5/8, sqrt(3)/8)
fill-polygon: (3/4, 0), (1, 0), (7/8, sqrt(3)/8), blue, 0.2
polygon: (3/4, 0), (1, 0), (7/8, sqrt(3)/8)
fill-polygon: (5/8, sqrt(3)/8), (7/8, sqrt(3)/8), (3/4, sqrt(3)/4), blue, 0.2
polygon: (5/8, sqrt(3)/8), (7/8, sqrt(3)/8), (3/4, sqrt(3)/4)

fill-polygon: (1/4, sqrt(3)/4), (1/2, sqrt(3)/4), (3/8, 3*sqrt(3)/8), blue, 0.2
polygon: (1/4, sqrt(3)/4), (1/2, sqrt(3)/4), (3/8, 3*sqrt(3)/8)
fill-polygon: (1/2, sqrt(3)/4), (3/4, sqrt(3)/4), (5/8, 3*sqrt(3)/8), blue, 0.2
polygon: (1/2, sqrt(3)/4), (3/4, sqrt(3)/4), (5/8, 3*sqrt(3)/8)
fill-polygon: (3/8, 3*sqrt(3)/8), (5/8, 3*sqrt(3)/8), (1/2, sqrt(3)/2), blue, 0.2
polygon: (3/8, 3*sqrt(3)/8), (5/8, 3*sqrt(3)/8), (1/2, sqrt(3)/2)

text: 1/2, -0.35, "Figur 3", top-center
:::

:::{plot}
axis: equal
axis: off
fontsize: 45

macro: tri(x, y, s)
    fill-polygon: (x, y), (x + s, y), (x + s/2, y + sqrt(3)/2*s), blue, 0.2
    polygon: (x, y), (x + s, y), (x + s/2, y + sqrt(3)/2*s)
endmacro

macro: sier3(x, y, s)
    use: tri(x, y, s/8)
    use: tri(x + s/8, y, s/8)
    use: tri(x + s/16, y + sqrt(3)/16*s, s/8)

    use: tri(x + s/4, y, s/8)
    use: tri(x + 3*s/8, y, s/8)
    use: tri(x + 5*s/16, y + sqrt(3)/16*s, s/8)

    use: tri(x + s/8, y + sqrt(3)/8*s, s/8)
    use: tri(x + s/4, y + sqrt(3)/8*s, s/8)
    use: tri(x + 3*s/16, y + 3*sqrt(3)/16*s, s/8)

    use: tri(x + s/2, y, s/8)
    use: tri(x + 5*s/8, y, s/8)
    use: tri(x + 9*s/16, y + sqrt(3)/16*s, s/8)

    use: tri(x + 3*s/4, y, s/8)
    use: tri(x + 7*s/8, y, s/8)
    use: tri(x + 13*s/16, y + sqrt(3)/16*s, s/8)

    use: tri(x + 5*s/8, y + sqrt(3)/8*s, s/8)
    use: tri(x + 3*s/4, y + sqrt(3)/8*s, s/8)
    use: tri(x + 11*s/16, y + 3*sqrt(3)/16*s, s/8)

    use: tri(x + s/4, y + sqrt(3)/4*s, s/8)
    use: tri(x + 3*s/8, y + sqrt(3)/4*s, s/8)
    use: tri(x + 5*s/16, y + 5*sqrt(3)/16*s, s/8)

    use: tri(x + s/2, y + sqrt(3)/4*s, s/8)
    use: tri(x + 5*s/8, y + sqrt(3)/4*s, s/8)
    use: tri(x + 9*s/16, y + 5*sqrt(3)/16*s, s/8)

    use: tri(x + 3*s/8, y + 3*sqrt(3)/8*s, s/8)
    use: tri(x + s/2, y + 3*sqrt(3)/8*s, s/8)
    use: tri(x + 7*s/16, y + 7*sqrt(3)/16*s, s/8)
endmacro

use: sier3(0, 0, 1)
text: 1/2, -0.35, "Figur 4", top-center
:::
::::

Figurfølgen fortsetter i det uendelige.

Finn det samlede arealet av alle de fargelagte trekantene i figurfølgen.


:::::{answer}
Det samlede arealet er $4$.


::::{solution}
Startverdien til følgen av arealet er $A_1 = 1$. Arealet av de fargelagte trekantene i figur 2 er $3/4$ av arealet til figur 1. Tilsvarende ser vi at arealet av de fargelagte trekantene i figur 3 er $3/4$ av arealet av de fargelagte trekantene i figur 2. Kvotienten er derfor

$$
k = \dfrac{3}{4}
$$

Det samlede arealet av de fargelagte trekantene i figurfølgen vil da være

$$
A = \dfrac{A_1}{1 - k} = \dfrac{1}{1 - 3/4} = \dfrac{1}{1/4} = 4
$$
::::


:::::

:::::::::::::





:::::::::::::::


---

:::::::::::::::{exercise} Oppgave 8
:::::::::::::{part} a
En uendelig geometrisk rekke $S(x)$ er gitt ved

$$
S(x) = 1 + 2x + 4x^2 + 8x^3 + \ldots
$$

Finn et uttrykk for $S(x)$ og bestem konvergensområdet til rekka. 


:::::{answer}
$$
S(x) = \dfrac{1}{1 - 2x} \qfor \abs{x} < \dfrac{1}{2}
$$

::::{solution}
Det første leddet i rekka er $a_1 = 1$ og kvotienten er $k = 2x$. Et uttrykk for rekka når den konvergerer er dermed

$$
S(x) = \dfrac{a_1}{1 - k} = \dfrac{1}{1 - 2x}
$$

Konvergensområdet til rekka får vi ved å kreve at 

$$
\abs{k(x)} \lt 1 \liff \abs{2x} \lt 1 \liff \abs{x} \lt \dfrac{1}{2}
$$

::::
:::::


:::::::::::::


:::::::::::::{part} b
En uendelig geometrisk rekke $R(x)$ er gitt ved 

$$
R(x) = (x - 2) + (x - 2)^2 + (x - 2)^3 + (x - 2)^4 + \ldots
$$

Finn et uttrykk for $R(x)$ og bestem konvergensområdet til rekka.



:::::{answer}
$$
R(x) = \dfrac{x - 2}{3 - x} \qfor 1 \lt x \lt 3
$$

::::{solution}
Det første leddet i rekka er $a_1 = (x - 2)$. Kvotienten i rekka er $k(x) = (x - 2)$. Et uttrykk for rekka når den konvergerer er dermed

$$
R(x) = \dfrac{a_1}{1 - k} = \dfrac{x - 2}{1 - (x - 2)} = \dfrac{x - 2}{3 - x}
$$

Konvergensområdet til rekka får vi ved å kreve at

$$
\abs{k(x)} \lt 1 \liff \abs{x - 2} \lt 1
$$

Dette gir oss

$$
-1 \lt x - 2 \lt 1
$$

$$
-1 + 2 \lt x \lt 1 + 2
$$

$$
1 \lt x \lt 3
$$
::::
:::::


:::::::::::::


:::::::::::::{part} c
En uendelig geometrisk rekke $T(x)$ er gitt ved

$$
T(x) = 2 + \dfrac{2}{x} + \dfrac{2}{x^2} + \dfrac{2}{x^3} + \ldots
$$

Finn et uttrykk for $T(x)$ og bestem konvergensområdet til rekka.


:::::{answer}
$$
T(x) = \dfrac{2x}{x - 1} \qfor \abs{x} \gt 1
$$

::::{solution}
Det første leddet i rekka er $a_1 = 2$. Kvotienten i rekka er $k(x) = \dfrac{1}{x}$. Et uttrykk for rekka når den konvergerer er da

$$
T(x) = \dfrac{a_1}{1 - k} = \dfrac{2}{1 - 1/x} = \dfrac{2}{\dfrac{x - 1}{x}} = \dfrac{2x}{x - 1}
$$

Konvergensområdet til rekka får vi ved å kreve at

$$
\abs{k(x)} \lt 1 \liff \abs{\dfrac{1}{x}} \lt 1 \liff \abs{x} \gt 1
$$

::::
:::::


:::::::::::::


:::::::::::::{part} d
En uendelig geometrisk rekke $F(x)$ er gitt ved

$$
F(x) = 1 + \ln x + (\ln x)^2 + (\ln x)^3 + \ldots
$$

Finn et uttrykk for $F(x)$ og bestem konvergensområdet til rekka.


:::::{answer}
$$
F(x) = \dfrac{1}{1 - \ln x} \qfor \dfrac{1}{e} \lt x \lt e
$$

::::{solution}
Det første leddet i rekka er $a_1 = 1$. Kvotienten er $k(x) = \ln x$. Et uttrykk for $F(x)$ når rekka konvergerer er da

$$
F(x) = \dfrac{a_1}{1 - k} = \dfrac{1}{1 - \ln x}
$$

Konvergensområdet til rekka får vi ved å kreve at

$$
\abs{k(x)} \lt 1 \liff \abs{\ln x} \lt 1
$$

Vi løser ulikheten

$$
\abs{\ln x} \lt 1
$$

$$
-1 \lt \ln x \lt 1
$$

$$
e^{-1} \lt e^{\ln x} \lt e^1
$$

$$
\dfrac{1}{e} \lt x \lt e
$$
::::
:::::

:::::::::::::



:::::::::::::::


---



:::::::::::::::{exercise} Oppgave 9

:::{cas-popup}
---
layout: sidebar
---
:::



Anna skal sette inn penger på en sparekonto som gir $3\%$ rente per år. 

Hun satt inn sitt første beløp på $30~000$ kr $1.januar 2026$. Hun setter inn $30~000$ kr på starten av hvert år.

Hvor stort er sparebeløpet til Anna 31. desember 2035?





:::::::::::::::


---



:::::::::::::::{exercise} Oppgave 10
:::{cas-popup}
---
layout: sidebar
---
:::

:::{hint} Hvordan fungerer nedbetaling av lån egentlig?
Vanligvis når man tar opp et lån, så tar man opp et **annuitetslån**. Dette betyr at man betaler et fast beløp hvert år som vi kaller for et **terminbeløp**.

Du kan tenke på å tilbakebetale lånet som at du skal ha to kontoer:

1. En konto der lånebeløpet vokser med $5\%$ rente per år.
2. En "sparekonto" der du setter inn terminbeløp. Dette "sparebeløpet" vokser med samme rente per år, på $5\%$.

Målet er at etter 20 år, så er beløpet på de to kontoene like store. Da har Anna betalt tilbake hele lånet.
:::

Anna skal ta opp et lån på $2~000~000~\mathrm{kr}$ for å kjøpe en bolig. 

Anna skal tilbakebetale lånet på $20$ år med en fast årlig innbetaling $x$ som kalles for et **terminbeløp**. Lånet har en rente på $5\%$ per år. 

Anna betaler inn det første terminbeløpet etter ett år fra hun tar opp lånet.

:::::::::::::{part} a

Forklar at for å finne terminbeløpet, kan man sette opp likningen nedenfor:

$$
2~000~000 \cdot 1.05^{20} = x + 1.05x + 1.05^2x + \ldots + 1.05^{19}x
$$


::::{solution}
Lånet vokser med $5\%$ hver år i 20 år, så etter 20 år vil lånet ha vokst til $2~000~000 \cdot 1.05^{20}$.

Samtidig så betaler Anna inn et fast terminbeløp $x$ hver år i 20 år, der det første beløpet er etter ett år. Da vil hennes innbetalinger vokse med samme rente på $5\%$ per år. Da er den samlede verdien av innbetalingene til Anna etter 20 år gitt ved: 

$$
S = \underbrace{x}_{\text{siste innbetaling}} + 1.05x + 1.05^2x + \ldots + \underbrace{1.05^{19}x}_{\text{første innbetaling}}
$$

Dette er en geometrisk rekke med startledd $x$ og kvotient $k = 1.05$. 
::::


:::::::::::::


:::::::::::::{part} b
Finn terminbeløpet Anna må betale.

:::::{answer}
$$
x \approx 173764.5~\mathrm{kr}
$$
::::{solution}
Anna sine innbetalinger er en geometrisk rekke med startledd $x$ og kvotient $k = 1.05$. Dermed vil summen av innbetalingene hennes være gitt ved

$$
S(x) = x \cdot \dfrac{1 - 1.05^{20}}{1 - 1.05}
$$

Vi setter $S(x) = 2~000~000 \cdot 1.05^{20}$ og løser for $x$ med CAS:

:::{figure} ./figurer/oppgaver/oppgave_10/b/sol.png
---
class: no-click, adaptive-figure
width: 80%
---
:::

Altså finner vi at terminbeløpet Anna må betale er omtrent $173764.5~\mathrm{kr}$.


::::
:::::

:::::::::::::


:::::::::::::::



---



:::::::::::::::{exercise} Oppgave 11

:::{plot}
nocache:
align: right
fontsize: 24
width: 350px
def: f(t) = 120 * (1/3)**t
curve: t, f(t), (0, 1), blue
curve: t, f(t) + f(t - 1), (1, 2), blue
curve: t, f(t) + f(t - 1) + f(t - 2), (2, 3), blue
curve: t, f(t) + f(t - 1) + f(t - 2) + f(t - 3), (3, 4), blue
curve: t, f(t) + f(t - 1) + f(t - 2) + f(t - 3) + f(t - 4), (4, 5), blue
curve: t, f(t) + f(t - 1) + f(t - 2) + f(t - 3) + f(t - 4) + f(t - 5), (5, 6), blue
curve: t, f(t) + f(t - 1) + f(t - 2) + f(t - 3) + f(t - 4) + f(t - 5) + f(t - 6), (6, 7), blue
curve: t, f(t) + f(t - 1) + f(t - 2) + f(t - 3) + f(t - 4) + f(t - 5) + f(t - 6) + f(t - 7), (7, 8), blue
xmin: 0
xmax: 8
ymin: 0
ymax: 220
ystep: 20
xlabel: $t$/dager
ylabel: $K$/mg
:::


En pasient tar et medikament med én dose hver dag. 

Grafen til høyre viser konsentrasjon i blodet $K$ i mg av medikamentet etter $t$ dager. 

Medikamentet brytes ned med en fast prosent per dag og pasienten tar en dose hver dag over lang tid.

Finn en eksakt verdi for den største mulige konsentrasjonen av medikamentet som pasienten kommer til å ha i blodet over lang tid.


:::::{answer}
$$
180~\mathrm{mg}
$$


::::{solution}
Fra grafen ser vi at startverdien til konsentrasjonen er $K_1 = 120$. Samtidig ser vi at $K_2 = 40$. Det betyr at kvotienten i rekka er 

$$
k = \dfrac{K_2}{K_1} = \dfrac{40}{120} = \dfrac{1}{3}
$$

Den største mulige konsentrasjonen av medikamentet i blodet over lang tid vil være gitt ved verdien den uendelige geometriske rekka nedenfor konvergerer mot:

$$
120 + 40 + 40/3 + 40/9 + \ldots
$$

Denne er gitt ved 

$$
K = \dfrac{K_1}{1 - k} = \dfrac{120}{1 - 1/3} = \dfrac{120}{2/3} = 120 \cdot \dfrac{3}{2} = 180
$$

Altså vil pasienten maksimalt ha $180~\mathrm{mg}$ medikament i blodet over lang tid.
::::


:::::

:::::::::::::::