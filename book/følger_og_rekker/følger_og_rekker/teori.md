# Følger og rekker

:::{goals} Læringsmål
* Kunne veksle mellom eksplisitte summer og summetegn, og regne ut summen av rekker skrevet med summetegn. 
* Kunne finne formelen for det $n$-te leddet i en følge.
* Kunne finne rekursive formler for leddene i en følge.
* Kunne finne rekursive formler for summen av rekker.
:::


## Følger

En **følge** er en ordnet liste med tall som følger et bestemt mønster. For eksempel er 

$$
2, 4, 6, 8, 10
$$ 

en tallfølge som består av fem **ledd**. Vi kaller det første tallet $a_1$ i følgen for det første **leddet**, det andre tallet $a_2$ for det andre leddet, og så videre. Det $n$-te leddet i en følge skriver vi gjerne som $a_n$. Følgen kan bestå av endelig mange ledd, eller det kan være uendelig mange ledd. Vi kaller $n$ for **indeksen** til leddet $a_n$. 


:::::::::::::::{summary} Følger
En (tall)følge $\{a_n\}_{n=1}^N$ er en ordnet liste med tall som følger et bestemt mønster. Det $n$-te leddet i en følge skriver vi som $a_n$, og skriver følgen som

$$
a_1, \, a_2, \, a_3, \, \ldots, \, a_N
$$

> Når verdiene som $n$ kan ha i en følge er underforstått, så skriver vi ofte bare $\{a_n\}$ for å betegne følgen.


:::::::::::::::


---


:::::::::::::::{example} Eksempel 1
Nedenfor vises noen kjente tallfølger.

::::::::{grid}
---
gutter: 2
columns: 12
---
::::::{grid-item-card}
---
columns: 6
---
**Partallene**
^^^
$$
2, 4, 6, 8, 10, \ldots, 2n, \ldots
$$

::::::

::::::{grid-item-card}
---
columns: 6
---
**Oddetallene**
^^^
$$
1, 3, 5, 7, 9, \ldots, 2n-1, \ldots
$$

::::::


::::::{grid-item-card}
---
columns: 6
---
**Kvadrattallene**
^^^
$$
1, 4, 9, 16, 25, \ldots, n^2, \ldots
$$

::::::


::::::{grid-item-card}
---
columns: 6
---
**Fibonaccitallene**
^^^
$$
1, 1, 2, 3, 5, 8, 13, \ldots
$$

::::::
::::::::


:::::::::::::::


:::::::::::::::{summary} Representasjoner av følger
Følger kan representeres på to måter med

1. en **eksplisitt formel** som gir verdien til det $n$-te leddet direkte.
2. en **rekursjonsformel** som forteller hvordan vi finner det neste leddet dersom vi kjenner verdien til det forrige leddet.


::::::::{grid}
---
gutter: 2
columns: 12
---
::::::{grid-item-card}
---
columns: 6
---
**Eksplisitt formel**
^^^
$$
a_n = 3 + 2(n - 1)
$$

::::::

::::::{grid-item-card}
---
columns: 6
---
**Rekursjonsformel**
^^^
$$
a_{n + 1} = a_n + 2 \qder a_1 = 3
$$

::::::

::::::::



:::::::::::::::




:::::::::::::::{example} Eksempel 2
En følge $\{a_n\}$ er gitt ved den eksplisitte formelen 

$$
a_n = 2n - 1 \qfor n = 1, 2, 3, \ldots
$$

Finn de fem første leddene i følgen.


::::{solution}
---
open:
---
Vi regner ut verdiene i følgen for $n = 1, 2, 3, 4, 5$

:::{table}
width: 50%
labels: $n$, $a_n = 2n - 1$
$1$, $2 \cdot 1 - 1 = 1$
$2$, $2 \cdot 2 - 1 = 3$
$3$, $2 \cdot 3 - 1 = 5$
$4$, $2 \cdot 4 - 1 = 7$
$5$, $2 \cdot 5 - 1 = 9$
:::

Altså er de fem første leddene i følgen gitt ved 

$$
1, 3, 5, 7, 9
$$

som er de fem første oddetallene.


::::


:::::::::::::::


---


:::::::::::::::{example} Eksempel 3
En tallfølge er definert som 

$$
a_{n + 1} = 2 a_n + 1 \qfor n = 1, 2, 3, \ldots \qder a_1 = 4.
$$

Bestem $a_4$ (det fjerde leddet i følgen).

::::{solution}
---
open:
---
Vi bruker rekursjonsformelen til å regne ut $a_2$, $a_3$ og $a_4$.

$$
\begin{align*}
a_2 &= 2 a_1 + 1 = 2 \cdot 4 + 1 = 9 \\
\\
a_3 &= 2 a_2 + 1 = 2 \cdot 9 + 1 = 19 \\
\\
a_4 &= 2 a_3 + 1 = 2 \cdot 19 + 1 = 39
\end{align*}
$$

Altså er $a_4 = 39$.
::::

:::::::::::::::


## Rekker
En **rekke** er en sum av leddene i en følge. 


:::::::::::::::{summary} Definisjon: Rekke
En rekke $S_N$ med $N$ ledd er summen av tallene i en tallfølge $a_1, a_2, \ldots, a_N$. Det vil si

$$
S_N = a_1 + a_2 + a_3 + \ldots + a_N
$$

Vi kaller $S_N$ for **delsummen** (med $N$ ledd) til rekka

$$
S = a_1 + a_2 + a_3 + \ldots
$$
:::::::::::::::

Så en rekke er altså summen av leddene i en følge. Vi kan illustrere sammenhengen mellom følger og rekker slik:

::::::::{grid}
---
gutter: 2
columns: 12
---
::::::{grid-item-card}
---
columns: 6
---
**Følge**
^^^
$$
a_1, a_2, a_3, \ldots, a_N
$$


**Eksempel**:

$$
1, 4, 9, 16, 25
$$

::::::

::::::{grid-item-card}
---
columns: 6
---
**Rekke**
^^^
$$
S_N = a_1 + a_2 + a_3 + \ldots + a_N
$$

**Eksempel**:

$$
S_5 = 1 + 4 + 9 + 16 + 25
$$

::::::

::::::::



## Summetegn og rekker

Vi bruker ofte summetegnet $\sum$ til å skrive rekker på en mer kompakt måte.


:::::::::::::::{summary} Summetegn
En rekke $S_N = a_1 + a_2 + a_3 + \ldots + a_N$ kan skrives som

$$
S_N = \sum_{n=1}^N a_n
$$

der notasjonen forteller oss at vi skal plusse sammen leddene $a_n$ for $n = 1, 2, 3, \ldots, N$.
:::::::::::::::


---


:::::::::::::::{example} Eksempel 4
En rekke er gitt ved

$$
S_4 = \sum_{n = 1}^4 (2n + 1)
$$

Bestem verdien til $S_4$.


::::{solution}
---
open:
---
Vi har at

$$
\begin{align*}
S_4 &= \sum_{n = 1}^4 (2 \cdot \textcolor{red}{n} + 1) \\
\\
&= (2 \cdot \textcolor{red}{1} + 1) + (2 \cdot \textcolor{red}{2} + 1) + (2 \cdot \textcolor{red}{3} + 1) + (2 \cdot \textcolor{red}{4} + 1) \\
\\
&= 3 + 5 + 7 + 9 \\
\\
&= 24
\end{align*}
$$
::::
:::::::::::::::



---



:::::::::::::::{example} Eksempel 5
Skriv rekken nedenfor med summetegn:

$$
S = 1 + 4 + 9 + 16 + 25
$$


::::{solution}
---
open:
---
Vi kan merke oss at leddene i rekka er tallfølgen

$$
1, 4, 9, 16, 25 = 1^2, 2^2, 3^2, 4^2, 5^2
$$

Dermed kan vi skrive om rekka som følger

$$
S = 1^2 + 2^2 + 3^2 + 4^2 + 5^2 = \sum_{n = 1}^5 n^2
$$

der vi har brukt at hvert ledd er gitt ved

$$
a_n = n^2 \qfor n = 1, 2, 3, 4, 5
$$
::::
:::::::::::::::
