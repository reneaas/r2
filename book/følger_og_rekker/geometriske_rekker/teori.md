# Geometriske følger og rekker


:::{goals} Læringsmål
* Kunne bestemme et uttrykk for det $n$-te leddet i en geometrisk følge.
* Kunne bestemme summen av endelige geometriske rekker.
* Kunne bestemme summen av uendelige geometriske rekker.
* Kunne avgjøre om en uendelig geometrisk rekke konvergerer eller divergerer.
* Kunne bestemme konvergensområdet for uendelige geometriske rekker med variable kvotienter.
* Kunne bruke geometriske rekker i praktiske anvendelser. 
:::


En geometrisk følge $\{a_n\}$ er en følge der forholdet mellom to naboledd $a_{n + 1} / a_n$ alltid er lik en fast konstant $k$ som vi kaller for **kvotienten** til følgen. En geometrisk rekke er summen $\sum a_n$ av leddene i en geometrisk følge.


:::::::::::::::{example} Eksempel 1
:::{plot}
width: 100%
align: right
axis: off
axis: equal
let: s = 4
polygon: (0, 0), (s, 0), (s, s), (0, s)
repeat: n=1..10; line-segment: (s/2**n, 0), (s/2**n, s/2**(n - 1)), dashed, blue
repeat: n=1..10; line-segment: (0, s/2**n), (s/2**n, s/2**n), dashed, blue
text: 0.5 * (s/2 + s), 0.5 * s, "$A_1$", center-center
text: 0.25 * s, 0.5 * (s/2 + s), "$A_2$", center-center
text: 0.5 * (s/4 + s/2), 0.5 * (0 + 0.5 * s), "$A_3$", center-center
text: 0.5 * (0 + 0.25 * s), 0.5 * (s/4 + s/2), "$A_4$", center-center
fontsize: 28
text: 0.5 * s, 0, "$1$", bottom-center
text: s, 0.5 * s, "$1$", center-right
:::

I figuren til høyre vises et kvadrat med sidelengder $1$. Arealet av kvadratet er derfor bare $A = 1$. 

Figuren er delt opp i mindre områder med areal $A_1$, $A_2$, $A_3$, $A_4$ og så videre der de fire første områdene er merket i figuren. Arealet av det neste området er alltid halvparten av det forrige området slik at

$$
A_1 = \dfrac{1}{2}, \quad A_2 = \dfrac{1}{4}, \quad A_3 = \dfrac{1}{8}, \quad A_4 = \dfrac{1}{16}, \quad \ldots
$$

Slik fortsetter mønsteret for alltid siden vi kan alltid dele opp det siste området i to mindre områder. Men summen av alle disse arealene *må* jo være lik $1$ siden arealet av hele kvadratet er $1$. Det må i så fall bety at 

$$
1 = A_1 + A_2 + A_3 + A_4 + \ldots = \dfrac{1}{2} + \dfrac{1}{4} + \dfrac{1}{8} + \dfrac{1}{16} + \ldots
$$

Vi kan se at hvert ledd bare er det forrige leddet ganget med $\dfrac{1}{2}$. Vi sier at dette er en **geometrisk rekke** og at den har **kvotienten** $\dfrac{1}{2}$.

:::::::::::::::



## Geometriske følger


:::::::::::::::{summary} Rekursiv formel for geometriske følger
For en geometrisk følge $\{a_n\}$, gjelder

$$
a_{n + 1} = a_n \cdot k \qfor n = 1, 2, 3, \ldots 
$$

der $k$ kalles for **kvotienten** til følgen. 
:::::::::::::::


---


:::::::::::::::{example} Eksempel 2
En geometrisk følge $\{a_n\}$ er gitt ved

$$
3, 6, 12, 24, 48, \ldots
$$

Finn en rekursiv formel for leddene i følgen.

::::{solution}
---
open:
---
Vi finner kvotienten ved å dele to naboledd med hverandre siden

$$
a_{n + 1} = a_n \cdot k \liff k = \dfrac{a_{n + 1}}{a_n}
$$

Da får vi

$$
k = \dfrac{6}{3} = 2
$$

Dermed har vi at 

$$
a_{n + 1} = 2 \cdot a_n \qfor n = 1, 2, 3, \ldots \qder a_1 = 3
$$
::::

:::::::::::::::


---


:::::::::::::::{exercise} Underveisoppgave 1
En geometrisk følge $\{a_n\}$ er gitt ved 

$$
9, 27, 81, 243, 729, \ldots
$$

Finn en rekursiv formel for leddene i følgen.

:::::{answer}
$$
a_{n + 1} = 3 \cdot a_n \qfor n = 1, 2, 3, \ldots \qder a_1 = 9
$$

::::{solution}
Vi finner kvotienten $k$ ved å dele to naboledd med hverandre:

$$
k = \dfrac{a_2}{a_1} = \dfrac{27}{9} = 3
$$

Dermed har vi at 

$$
a_{n + 1} = 3 \cdot a_n \qfor n = 1, 2, 3, \ldots \qder a_1 = 9
$$
::::
:::::

:::::::::::::::



:::::::::::::::{summary} Eksplisitt formel for geometriske følger
For geometrisk følge $\{a_n\}$ med startledd $a_1$ og kvotient $k$, er det $n$-te leddet i følgen gitt ved

$$
a_n = a_1 \cdot k^{n - 1} \qfor n = 1, 2, 3, \ldots
$$
:::::::::::::::


---


:::::::::::::::{example} Eksempel 3
En geometrisk følge $\{a_n\}$ er gitt ved

$$
3, 6, 12, 24, 48, \ldots
$$

Bestem $a_n$.

::::{solution}
---
open:
---
Vi har at $a_1 = 3$ og $a_2 = 6$. Da blir kvotienten

$$
k = \dfrac{a_2}{a_1} = \dfrac{6}{3} = 2
$$

Dermed får vi 

$$
a_n = a_1 \cdot k^{n - 1} = 3 \cdot 2^{n - 1} \qfor n = 1, 2, 3, \ldots
$$


::::

:::::::::::::::


---


:::::::::::::::{exercise} Underveisoppgave 2
En geometrisk følge $\{a_n\}$ er gitt ved

$$
4, 2, 1, \dfrac{1}{2}, \dfrac{1}{4}, \ldots
$$

Finn en eksplisitt formel for $a_n$.

:::::{answer}
$$
a_n = 4 \cdot \left( \dfrac{1}{2} \right)^{n - 1} = \dfrac{4}{2^{n - 1}} \qfor n = 1, 2, 3, \ldots
$$

::::{solution}
Kvotienten $k$ er gitt ved

$$
k = \dfrac{a_{2}}{a_1} = \dfrac{2}{4} = \dfrac{1}{2} 
$$

Dermed er en eksplisitt formel for $a_n$ gitt ved

$$
a_n = a_1 \cdot k^{n - 1} = 4 \cdot \left( \dfrac{1}{2} \right)^{n - 1} = \dfrac{4}{2^{n - 1}} \qfor n = 1, 2, 3, \ldots
$$
::::
:::::

:::::::::::::::


---


## Geometriske rekker

En geometrisk rekke er summen av leddene i en geometrisk følge. Den kan enten ha endelig mange ledd, eller den kan ha uendelig mange ledd. Vi tar et motiverende eksempel før vi ser på det generelle tilfellet.


:::::::::::::::{example} Eksempel 4
En geometrisk rekke er gitt ved

$$
S = 1 + 2 + 4 + 8 + 16 + \ldots + 1024
$$

Finn summen av rekka.


::::{solution}
---
open:
---
Vi kan se at kvotienten er lik $2$ siden hvert ledd er det dobbelte av det forrige leddet. Vi skriver først opp rekka slik den er, deretter skriver vi opp rekka på nytt ganget med kvotienten $2$:

$$
\begin{align*}
S &= 1 + 2 + 4 + 8 + 16 + \ldots + 1024 \\
\\
2\cdot S &= 2 + 4 + 8 + 16 + \ldots + 1024 + 2048
\end{align*}
$$

Trekker vi den siste likningen fra den første likningen får vi:

$$
2S - S = 2 + 4 + 8 + 16 + \ldots + 1024 + 2048 - \left( 1 + 2 + 4 + 8 + 16 + \ldots + 1024 \right)
$$

som vi kan skrive som

$$
S = 2048 - 1 + (2 - 2) + (4 - 4) + (8 - 8) + \ldots + (1024 - 1024)
$$

som gir

$$
S = 2048 - 1 = 2047
$$




::::

:::::::::::::::


Strategien i eksempel 4 er det vi skal bruke til å finne en helt generell formel for summen av en endelig geometrisk rekke, som er det neste vi skal se på.



## Endelige geometriske rekker


:::::::::::::::{summary} Formel for en endelig geometrisk rekke
For en endelig geometrisk rekke med $n$ ledd og kvotient $k$ på formen

$$
S_n = a + ak + ak^2 + ak^3 + \ldots + ak^{n - 1}
$$

er summen av alle leddene gitt ved formelen

$$
S_n = a \cdot \dfrac{1 - k^n}{1 - k} \qfor k \neq 1
$$

Hvis første $a_1$ og siste ledd $a_n$ i rekka er kjent, kan formelen også skrives som

$$
S_n = \dfrac{a_1 - a_n \cdot k}{1 - k} \qfor k \neq 1
$$



::::{proof} Vis forklaring
Vi har at 

$$
S_n = a + ak + ak^2 + \ldots + ak^{n - 1}
$$

Ganger vi hver side av likningen med kvotienten $k$ får vi

$$
k \cdot S_n = ak + ak^2 + \ldots + ak^{n - 1} + ak^n
$$

Trekker vi den første likningen fra den siste likningen får vi:

$$
S_n - k \cdot S_n = a + ak + ak^2 + \ldots + ak^{n - 1} - \left( ak + ak^2 + \ldots + ak^{n - 1} + ak^n \right)
$$

Omrokkerer vi på leddene på høyre side får vi:

$$
S_n - k \cdot S_n = a + \left( ak - ak \right) + \left( ak^2 - ak^2 \right) + \ldots + \left( ak^{n - 1} - ak^{n - 1} \right) - ak^n
$$

Så alle ledd kansellerer hverandre bort bortsett fra det første og det siste leddet som gir:

$$
S_n - k \cdot S_n = a - ak^n
$$

Vi kan faktorisere på hver side og forenkle likningen til:

$$
S_n \cdot (1 - k) = a \cdot (1 - k^n)
$$

Løser vi denne likningen for $S_n$ får vi:

$$
S_n = a \cdot \dfrac{1 - k^n}{1 - k}
$$

som var det vi skulle vise.

::::


:::::::::::::::



---



:::::::::::::::{example} Eksempel 5
Bestem summen av rekka 

$$
S = 1 + \dfrac{1}{2} + \dfrac{1}{4} + \dfrac{1}{8} + \ldots + \dfrac{1}{2048}
$$

::::{solution}
---
open:
---
Rekka er en geometrisk rekke med startledd $a_1 = 1$ og kvotient $k = \dfrac{1}{2}$. Det siste leddet er gitt ved $a_n = \dfrac{1}{2048}$. Vi kan bruke formelen for summen av en endelig geometrisk rekke:

$$
\begin{align*}
S &= \dfrac{a_1 - a_n \cdot k}{1 - k} \\
\\
&= \dfrac{1 - \dfrac{1}{2048} \cdot \dfrac{1}{2}}{1 - \dfrac{1}{2}} \\
\\
&= \dfrac{1 - \dfrac{1}{4096}}{\dfrac{1}{2}} \\
\\
&= 2\cdot \left(1 - \dfrac{1}{4096}\right) \\
\\
&= 2 - \dfrac{1}{2048} \\
\\
&= \dfrac{4095}{2048}
\end{align*}
$$
::::


:::::::::::::::



---


:::::::::::::::{exercise} Underveisoppgave 3
En geometrisk rekke er gitt ved

$$
S = 3 + 1 + \dfrac{1}{3} + \dfrac{1}{9} + \ldots + \dfrac{1}{729}
$$


:::::{answer}
$$
S = \dfrac{6560}{1458}
$$

::::{solution}
Det første leddet er $a_1 = 3$ og det siste leddet er $a_n = \dfrac{1}{729}$. Kvotienten er gitt ved $k = \dfrac{1}{3}$ siden det neste leddet alltid er $1/3$ av det forrige. Dermed er summen av rekka gitt ved

$$
\begin{align*}
S &= \dfrac{a_1 - a_n \cdot k}{1 - k} \\
\\
&= \dfrac{3 - \dfrac{1}{729} \cdot \dfrac{1}{3}}{1 - \dfrac{1}{3}} \\
\\
&= \dfrac{3 - \dfrac{1}{2187}}{\dfrac{2}{3}} \\
\\
&= \dfrac{3}{2} \cdot \left( 3 - \dfrac{1}{2187} \right) \\
\\
&= \dfrac{9}{2} - \dfrac{1}{1458} \\
\\
&= \dfrac{6560}{1458}
\end{align*}
$$
::::
:::::


:::::::::::::::



## Uendelige geometriske rekker
Som vi så i eksempel 1 og 2, så kan en geometrisk rekke også ha uendelig mange ledd. I mange situasjoner vil rekka nærme seg et bestemt tall, og da sier vi at rekka **konvergerer** – eller kaller rekka for **konvergent**. Hvis summen av rekka går mot $\pm \infty$, så sier vi at rekka **divergerer** – eller kaller rekka for **divergent**.


:::::::::::::::{summary} Uendelige geometriske rekker
En uendelig geometrisk rekke $S$ med startledd $a$ og kvotient $k$ på formen

$$
S = a + ak + ak^2 + ak^3 + \ldots
$$

konvergerer hvis og bare hvis $\abs{k} < 1$. 

Da er summen av rekka gitt ved

$$
S = \dfrac{a}{1 - k}
$$


::::{proof} Vis forklaring
Vi starter med summen av de første $n$ leddene i rekka:

$$
S_n = a \cdot \dfrac{1 - k^n}{1 - k}
$$

Dersom $\abs{k} < 1$ så vil $k^n$ bli mindre og mindre jo større $n$ blir. I grensen der $n \to \infty$, så vil $k^n \to 0$. Da får vi at

$$
S = \lim_{n \to \infty} S_n = \lim_{n \to \infty} a \cdot \dfrac{1 - k^n}{1 - k} = a \cdot \dfrac{1 - 0}{1 - k} = \dfrac{a}{1 - k}
$$

som var det vi skulle vise.
::::

:::::::::::::::



---



:::::::::::::::{example} Eksempel 6
En rekke er gitt ved

$$
S = 1 + \dfrac{1}{3} + \dfrac{1}{9} + \dfrac{1}{27} + \ldots
$$

Bestem summen av rekka. 


::::{solution}
---
open:
---
Rekka er en geometrisk rekke med startledd $a = 1$ og kvotient $k = \dfrac{1}{3}$. Siden $\abs{k} < 1$, så konvergerer rekka og summen av rekka er gitt ved formelen for uendelige geometriske rekker:

$$
S = \dfrac{a}{1 - k} = \dfrac{1}{1 - \dfrac{1}{3}} = \dfrac{1}{2/3} = \dfrac{3}{2}
$$
::::
:::::::::::::::


---



:::::::::::::::{exercise} Underveisoppgave 4
En geometrisk rekke er gitt ved

$$
S = 2 + \dfrac{2}{5} + \dfrac{2}{25} + \dfrac{2}{125} + \ldots
$$

Finn summen av rekka.


:::::{answer}
$$
S = \dfrac{5}{2}
$$

::::{solution}
Vi har startledd $a = 2$ og kvotient $k = 1/5$ siden hvert ledd alltid blir en $1/5$ av det forrige. Summen av rekka er da

$$
S = \dfrac{a}{1 - k} = \dfrac{2}{1 - \dfrac{1}{5}} = \dfrac{2}{4/5} = \dfrac{10}{2} = \dfrac{5}{2}
$$
::::
:::::


:::::::::::::::



---


## Variable kvotienter og konvergensområder

Noen ganger jobber vi med geometriske rekker der kvotienten er en funksjon $k(x)$. 


:::::::::::::::{summary} Uendelig geometrisk rekke med variabel kvotient
En uendelig geometrisk rekke $S(x)$ med startledd $a$ og kvotient $k(x)$ på formen

$$
S(x) = a + a\cdot k(x) + a \cdot k(x)^2 + a \cdot k(x)^3 + \ldots
$$

konvergerer hvis og bare hvis

$$
\abs{k(x)} \lt 1
$$

De verdiene av $x$ som tilfredsstiller at $\abs{k(x)} \lt 1$ kalles for **konvergensområdet** til rekka.
:::::::::::::::



---


:::::::::::::::{example} Eksempel 7
Gitt rekka

$$
S(x) = 1 + \dfrac{x}{2} + \dfrac{x^2}{4} + \dfrac{x^3}{8} + \ldots
$$

Bestem konvergensområdet til rekka.



::::{solution}
---
open:
---
Vi kan se at kvotienten til rekka er

$$
k(x) = \dfrac{x}{2}
$$

Konvergensområdet til rekka må tilfredsstille at

$$
\abs{k(x)} \lt 1 \liff \abs{\dfrac{x}{2}} \lt 1
$$

Dette betyr at konvergensområdet til rekka er

$$
\abs{x} \lt 2 \liff -2 \lt x \lt 2
$$

::::

:::::::::::::::



---


:::::::::::::::{exercise} Underveisoppgave 5
Gitt rekka 

$$
S(x) = 1 + \dfrac{3x}{4} + \dfrac{9x^2}{16} + \dfrac{27x^3}{64} + \ldots
$$

Finn konvergensområdet til rekka.


:::::{answer}
$$
\abs{x} \lt \dfrac{4}{3}
$$

::::{solution}
Kvotienten til rekka er gitt ved

$$
k(x) = \dfrac{3x}{4}
$$

Konvergensområdet til rekka må tilfredsstille at

$$
\abs{k(x)} \lt 1 \liff \abs{\dfrac{3x}{4}} \lt 1 \liff \abs{x} \lt \dfrac{4}{3}
$$
::::
:::::

:::::::::::::::