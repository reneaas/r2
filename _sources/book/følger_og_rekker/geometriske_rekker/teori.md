# Geometriske rekker


:::{admonition} Læringsmål
---
class: tip
---
* Kunne bestemme et uttrykk for det $n$-te leddet i en geometrisk følge.
* Kunne bestemme summen av endelige geometriske rekker.
* Kunne bestemme summen av uendelige geometriske rekker.
* Kunne avgjøre om en uendelig geometrisk rekke konvergerer eller divergerer.
* Kunne bestemme konvergensområdet for uendelige geometriske rekker med variable kvotienter.
* Kunne bruke geometriske rekker i praktiske anvendelser. 
:::



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



---


:::::::::::::::{summary} Definisjon: Geometriske rekker
En geometriske rekke med $n$ ledd er en rekke på formen

$$
S_n = a + ak + ak^2 + ak^3 + \ldots + ak^{n - 1}
$$


der det $n$-te leddet er gitt ved

$$
a_n = ak^{n - 1} \qfor n = 1, 2, 3, \ldots
$$


:::::::::::::::


---



:::::::::::::::{example} Eksempel 2
La oss ta for oss den geometriske rekka fra eksempel 1 og se hvordan vi kan vise at det må være lik $1$ selv uten den geometriske figuren. Vi har at arealet av figuren er lik

$$
A = \dfrac{1}{2} + \dfrac{1}{4} + \dfrac{1}{8} + \dfrac{1}{16} + \ldots
$$

Hvis vi nå ganger hele likningen med $\dfrac{1}{2}$ får vi

$$
\dfrac{1}{2} \cdot A = \dfrac{1}{4} + \dfrac{1}{8} + \dfrac{1}{16} + \dfrac{1}{32} + \ldots
$$

Trekker vi den første likningen fra den siste likningen får vi:

$$
A - \dfrac{1}{2} \cdot A = \dfrac{1}{2} + \dfrac{1}{4} + \dfrac{1}{8} + \dfrac{1}{16} + \ldots - \left( \dfrac{1}{4} + \dfrac{1}{8} + \dfrac{1}{16} + \dfrac{1}{32} + \ldots \right)
$$

Omrokkerer vi på leddene på høyre side får vi:

$$
A - \dfrac{1}{2} \cdot A = \dfrac{1}{2} + \left( \dfrac{1}{4} - \dfrac{1}{4} \right) + \left( \dfrac{1}{8} - \dfrac{1}{8} \right) + \left( \dfrac{1}{16} - \dfrac{1}{16} \right) + \ldots
$$

Så alle ledd kansellerer hverandre bortsett fra ett som gir: 

$$
\dfrac{1}{2}\cdot A = \dfrac{1}{2}
$$

Men da må $A = 1$. 
:::::::::::::::


---


Strategien i eksempel 2 gir oss en strategi for å komme fram til en generell formel for summen av en geometrisk rekke. Rekka i eksempel 1 og 2 har uendelig mange ledd, men en geometrisk rekke kan også ha et endelig antall ledd. Vi snur oss nå mot å finne en generell formel for begge tilfeller.

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



::::{admonition} Bevis
---
class: theory, dropdown
---
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



:::::::::::::::{example} Eksempel 3
Bestem summen av rekka 

$$
S = 1 + \dfrac{1}{2} + \dfrac{1}{4} + \dfrac{1}{8} + \ldots + \dfrac{1}{2048}
$$

::::{solution}
---
dropdown: 0
---
Rekka er en geometrisk rekke med startledd $a = 1$ og kvotient $k = \dfrac{1}{2}$. Vi trenger antall ledd i rekka som vi kan finne ved å bruke at

$$
a_n = 1\cdot \left(\dfrac{1}{2}\right)^{n - 1} = \dfrac{1}{2048}
$$

Vi har at $2048 = 2^{11}$, så vi kan skrive som betyr at 

$$
\dfrac{1}{2^{n - 1}} = \dfrac{1}{2^{11}}
$$

$$
n - 1 = 11 \liff n = 10
$$

Altså består rekka av $10$ ledd. Da kan vi bruke formelen for en endelig geometrisk rekke:

$$
S_{10} = 1 \cdot \dfrac{1 - \left( \dfrac{1}{2} \right)^{10}}{1 - \dfrac{1}{2}} = 2 \cdot \left( 1 - \dfrac{1}{1024} \right) = 2 - \dfrac{1}{512} = \dfrac{1023}{512}
$$
::::


:::::::::::::::



## Uendelige geometriske rekker
Som i eksempel 1 og 2, så kan en geometrisk rekke også ha uendelig mange ledd. I mange situasjoner vil rekka nærme seg et bestemt tall, og da sier vi at rekka **konvergerer** – eller kaller rekka for **konvergent**. Hvis summen av rekka går mot $\pm \infty$, så sier vi at rekka **divergerer** – eller kaller rekka for **divergent**.


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


::::{admonition} Bevis
---
class: theory, dropdown
---
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



:::::::::::::::{example} Eksempel 4
En rekke er gitt ved

$$
S = 1 + \dfrac{1}{3} + \dfrac{1}{9} + \dfrac{1}{27} + \ldots
$$

Bestem summen av rekka. 


::::{solution}
---
dropdown: 0
---
Rekka er en geometrisk rekke med startledd $a = 1$ og kvotient $k = \dfrac{1}{3}$. Siden $\abs{k} < 1$, så konvergerer rekka og summen av rekka er gitt ved formelen for uendelige geometriske rekker:

$$
S = \dfrac{a}{1 - k} = \dfrac{1}{1 - \dfrac{1}{3}} = \dfrac{1}{2/3} = \dfrac{3}{2}
$$
::::
:::::::::::::::



---


## Variable kvotienter og konvergensområder