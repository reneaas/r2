# Aritmetiske følger og rekker

:::{goals} Læringsmål
* utforske egenskaper ved ulike rekker og gjøre rede for praktiske anvendelser av egenskaper ved rekker
:::



En **aritmetisk følge** $\{a_n\}$ er en følge der differansen mellom to naboledd alltid er lik en fast konstant $d$. En **aritmetisk rekke** er summen $\sum a_n$ av leddene i en aritmetisk følge.

Vi starter med et eksempel:


:::::::::::::::{example} Eksempel 1
En aritmetisk rekke er gitt ved

$$
S = 1 + 2 + 3 + \ldots + 99 + 100
$$


Finn summen av rekka.


::::{solution}
---
open:
---
Hvis vi skriver opp rekka to ganger over hverandre, men i motsatt rekkefølge av hverandre, får vi: 

$$
\begin{align*}
S &= 1 + 2 + 3 + \ldots + 98 + 99 + 100 \\
\\
S &= 100 + 99 + 98 + \ldots + 3 + 2 + 1
\end{align*}
$$

Hvis vi legger sammen leddene som står ovenfor hverandre, så får vi

$$
2S = (1 + 100) + (2 + 99) + (3 + 98) + \ldots + (98 + 3) + (99 + 2) + (100 + 1)
$$

som vi kan forenkle til

$$
2S = \underbrace{101 + 101 + 101 + \ldots + 101 + 101 + 101}_{100 \text{ ledd}}
$$

Så derfor er

$$
2S = 101 \cdot 100
$$

som blir 

$$
S = \dfrac{101 \cdot 100}{2} = 5050
$$

::::

:::::::::::::::

---


:::::::::::::::{exercise} Underveisoppgave 1
En aritmetisk rekke er gitt ved

$$
S = 2 + 4 + 6 + \ldots + 96 + 98 + 100
$$

Finn summen av rekka.

:::::{answer}

$$
S = 2550
$$

::::{solution}
Vi bruker samme strategi som i eksempel 1. Vi skriver opp rekka to ganger over hverandre, men i motsatt rekkefølge:

$$
\begin{align*}
S &= 2 + 4 + 6 + \ldots + 96 + 98 + 100 \\
\\
S &= 100 + 98 + 96 + \ldots + 6 + 4 + 2
\end{align*}
$$

Så legger vi sammen leddene som står ovenfor hverandre:

$$
2S = (2 + 100) + (4 + 98) + (6 + 96) + \ldots + (96 + 6) + (98 + 4) + (100 + 2)
$$

som vi kan forenkle til

$$
2S = \underbrace{102 + 102 + 102 + \ldots + 102 + 102 + 102}_{50 \text{ ledd}}
$$

Dermed er 

$$
2S = 102 \cdot 50
$$

som gir

$$
S = \dfrac{102 \cdot 50}{2} = 2550
$$
::::
:::::

:::::::::::::::


La oss definere mer presist:


:::::::::::::::{summary} Eksplisitt formel for aritmetiske følger
En aritmetisk følge $\{a_n\}$ er en følge der det er en fast differanse $d$ mellom alle naboledd. Det $n$-te leddet i følgen er da gitt ved

$$
a_n = a_1 + d\cdot (n - 1) \qfor n = 1, 2, 3, \ldots
$$


:::::::::::::::


:::::::::::::::{example} Eksempel 2
En aritmetisk følge $\{a_n\}$ er gitt ved

$$
3, 7, 11, 15, 19, \ldots
$$

Finn en eksplisitt formel for $a_n$. 


::::{solution}
---
open:
---
Vi ser at startleddet er $a_1 = 3$. Differansen mellom to naboledd blir:

$$
d = 7 - 3 = 4
$$

Vi ser også at dette er differansen mellom alle de andre naboleddene. Dermed kan vi skrive opp en formel for følgen som: 

$$
a_n = a_1 + (n - 1)d = 3 + (n - 1) \cdot 4 = 3 + 4n - 4 = 4n - 1
$$

::::
:::::::::::::::


:::::::::::::::{exercise} Underveisoppgave 2
En aritmetisk følge $\{a_n\}$ er gitt ved

$$
5, 9, 13, 17, 21, \ldots
$$

Finn en eksplisitt formel for $a_n$.

:::::{answer}

$$
a_n = 4n + 1
$$

::::{solution}
Startleddet er $a_1 = 5$. Differansen mellom to naboledd blir:

$$
d = 9 - 5 = 4
$$

Dermed kan vi skrive opp en formel for følgen som:

$$
a_n = a_1 + (n - 1)d = 5 + (n - 1) \cdot 4 = 5 + 4n - 4 = 4n + 1
$$
::::

:::::

:::::::::::::::


---


:::::::::::::::{summary} Rekursiv formel for en aritmetisk følge
For en aritmetisk følge $\{a_n\}$ med en fast differanse $d$ mellom alle naboledd, er en rekursiv formel for leddene i følgen gitt ved

$$
a_{n + 1} - a_n = d \qfor n = 1, 2, 3, \ldots 
$$
:::::::::::::::


---


:::::::::::::::{example} Eksempel 3
En aritmetisk følge $\{a_n\}$ er gitt ved

$$
-3, 0, 3, 6, 9, \ldots
$$

Finn en rekursiv formel for leddene i følgen.

::::{solution}
---
open:
---
Differansen i følgen er $d = 3$. Det første leddet er $a_1 = -3$. En rekursiv formel for leddene i følgen er derfor

$$
a_{n + 1} - a_n = 3 \qfor n = 1, 2, 3, \ldots \qder a_1 = -3
$$
::::
:::::::::::::::



---



:::::::::::::::{summary} Summen av en aritmetisk rekke
Summen av de $n$ første leddene i en aritmetisk rekke er 

$$
S_n = \dfrac{a_1 + a_n}{2} \cdot n
$$

Vi kan tolke dette som gjennomsnittet av første og siste ledd, ganget med hvor mange ledd det er i rekka.


:::::{proof} Vis forklaring
Vi starter med strategien vi så på i eksempel 1 og underveisoppgave 1. Vi har at:

$$
S_n = a_1 + a_2 + a_3 + \ldots + a_{n - 1} + a_n
$$

der 

$$
a_n = a_1 + (n - 1)d
$$

Da kan vi tenke oss at vi lager en annen aritmetisk følge $\{b_n\}$ som er $\{a_n\}$ i motsatt rekkefølge slik at $\{b_n\}$ er lik

$$
a_n, a_{n - 1}, \ldots, a_2, a_1
$$

Hvis vi da lager oss en følge $\{c_n\}$ som er summen av de to følgende, så får vi

$$
a_1 + a_n, a_2 + a_{n - 1}, \ldots, a_{n - 1} + a_n, a_n + a_1
$$


Akkurat som i eksempel 1 og underveisoppgave 1, vil alle leddene i følgen bli lik $a_1 + a_n$. Vi kan for eksempel se at dette er tilfelle her:

$$
a_2 + a_{n - 1} = a_1 + \underbrace{d + a_{n - 1}}_{=a_n} = a_1 + a_n
$$

Så skriver vi opp rekka to ganger, men i motsatt rekkefølge av hverandre:

$$
\begin{align*}
S_n &= a_1 + a_2 + \ldots + a_{n - 1} + a_n \\
\\
S_n &= a_n + a_{n - 1} +  \ldots + a_2 + a_1
\end{align*}
$$

Så legger vi de sammen og bruker at summen av alle ledd nå blir lik summen av første og siste ledd:


$$
2S_n = \underbrace{(a_1 + a_n) + (a_1 + a_n) + (a_1 + a_n) + \ldots + (a_1 + a_n) + (a_1 + a_n)}_{n \text{ ledd}}
$$

Da får vi

$$
2S_n = (a_1 + a_n) \cdot n
$$

som gir

$$
S_n = \dfrac{a_1 + a_n}{2} \cdot n
$$



:::::

:::::::::::::::


---


:::::::::::::::{example} Eksempel 4
En aritmetisk rekke $S$ er gitt ved

$$
S = 1 + 5 + 9 + 14 + 19 + \ldots + 77
$$

Finn summen av rekka.


::::{solution}
---
open:
---
Summen av rekka vil være

$$
S_n = \dfrac{a_1 + a_n}{2} \cdot n
$$

Vi må derfor første finne en formel for det $n$-te leddet og deretter hvor mange ledd det er i rekka, før vi kan finne summen.

Vi har at differansen er $d = 4$ og første ledd er $a_1 = 1$. Dermed er 

$$
a_n = a_1 + (n - 1)d = 1 + (n - 1)\cdot 4 = 1 + 4n - 4 = 4n - 3
$$

Vi vet at siste ledd er gitt ved $a_n = 77$, så vi setter opp en likning og løser for $n$:

$$
a_n = 77 \liff 4n - 3 = 77
$$

som gir

$$
4n = 80 \liff n = 20
$$

Ergo har vi at summen av rekka er lik:

$$
S_{20} = \dfrac{a_1 + a_{20}}{2} \cdot 20 = \frac{1 + 77}{2} \cdot 20 = 78\cdot 10 = 780
$$

::::

:::::::::::::::


---



Gjennomsnittet $\bar{x}$ av to tall $a$ og $b$ ligger alltid midt mellom $a$ og $b$. Dette er en egenskap som vil være nyttig i noen sammenhenger når vi jobber med aritmetiske følger.


:::::::::::::::{summary} Aritmetiske gjennomsnitt
:::{plot}
figsize: (5, 1.5)
width: 100%
align: right
ticks: off
vector: (0, 0), (10, 0), black
text: 10, 0, "$a_n$", bottom-right
point: (1, 0)
text: 1,0, "$a_1$", bottom-center
point: (3, 0)
text: 3, 0, "$a_2$", bottom-center
point: (5, 0)
text: 5, 0, "$a_3$", bottom-center
point: (7, 0)
text: 7, 0, "$a_4$", bottom-center
point: (9, 0)
text: 9, 0, "$a_5$", bottom-center
axis: off
xmin: 0
xmax: 11
:::


For en aritmetisk følge $\{a_n\}$ så vil ethvert ledd $a_n$ være lik gjennomsnittet av to ledd $a_{n + k}$ og $a_{n - k}$ som ligger like mange ledd $k$ fra $a_n$. Det vil si:

$$
a_n = \dfrac{a_{n + k} + a_{n - k}}{2}
$$




:::::::::::::::



---


:::::::::::::::{exercise} Underveisoppgave 4
::::::::{quiz-2}
:::::::{quiz-question}
La $\{a_n\}$ være en aritmetisk følge. Hvilket alternativ er riktig?


::::::{quiz-answer}
---
correct:
---
$$
a_8 = \dfrac{a_6 + a_{10}}{2}
$$
::::::


::::::{quiz-answer}
$$
a_4 = \dfrac{a_1 + a_6}{2}
$$
::::::


::::::{quiz-answer}
$$
a_5 = \dfrac{a_4 + a_7}{2}
$$
::::::


::::::{quiz-answer}
$$
a_6 = \dfrac{a_4 + a_7}{2}
$$
::::::

:::::::


:::::::{quiz-question}
La $\{b_n\}$ være en aritmetisk følge. Hvilket alternativ er riktig?


::::::{quiz-answer}
---
correct:
---
$$
b_4 = \dfrac{b_2 + b_6}{2}
$$
::::::


::::::{quiz-answer}
$$
b_3 = \dfrac{b_1 + b_4}{2}
$$
::::::


::::::{quiz-answer}
$$
b_{21} = \dfrac{b_{19} + b_{24}}{2}
$$
::::::


::::::{quiz-answer}
$$
b_{15} = \dfrac{b_{13} + b_{18}}{2}
$$
::::::


:::::::



:::::::{quiz-question}
La $\{c_n\}$ være en aritmetisk følge. Hvilket alternativ er riktig?

::::::{quiz-answer}
---
correct:
---

$$
c_{17} = \dfrac{c_{11} + c_{23}}{2}
$$
::::::


::::::{quiz-answer}
$$
c_{13} = \dfrac{c_{7} + c_{20}}{2}
$$
::::::


::::::{quiz-answer}
$$
c_{7} = \dfrac{c_{5} + c_{10}}{2}
$$
::::::


::::::{quiz-answer}
$$
c_{30} = \dfrac{c_{27} + c_{32}}{2}
$$
::::::

:::::::



:::::::{quiz-question}
La $\{d_n\}$ være en aritmetisk følge. Hvilket alternativ er riktig?


::::::{quiz-answer}
---
correct:
---
$$
d_{11} = \dfrac{d_{9} + d_{13}}{2}
$$
::::::

::::::{quiz-answer}
$$
d_{7} = \dfrac{d_{5} + d_{10}}{2}
$$
::::::


::::::{quiz-answer}
$$
d_{15} = \dfrac{d_{11} + d_{18}}{2}
$$
::::::

::::::{quiz-answer}
$$
d_{20} = \dfrac{d_{17} + d_{24}}{2}
$$
::::::




:::::::


::::::::
:::::::::::::::


---



:::::::::::::::{example} Eksempel 5
I en aritmetisk følge $\{a_n\}$ er 

$$
a_1 + a_3 + a_5 = 30
$$

Finn $a_3$. 


::::{solution}
---
open:
---
Vi har at gjennomsnittet av $a_1$ og $a_5$ må være lik $a_3$ siden leddavstanden er den samme fra $a_3$ til $a_5$ som fra $a_3$ til $a_1$, nemlig $k = 2$.


Det betyr at 

$$
a_3 = \dfrac{a_1 + a_5}{2} \liff 2a_3 = a_1 + a_5
$$

Dermed kan vi skrive om likningen som

$$
a_3 + (a_1 + a_5) = 30 \liff a_3 + 2a_3 = 30
$$

altså er 

$$
3a_3 = 30 \liff a_3 = 10
$$


::::


:::::::::::::::



---



:::::::::::::::{exercise} Underveisoppgave 5
I en aritmetisk følge $\{a_n\}$ er

$$
a_2 + a_4 + a_6 = 36
$$

Finn $a_4$.


:::::{answer}

$$
a_4 = 12
$$

::::{solution}
Vi har at 

$$
a_4 = \dfrac{a_2 + a_6}{2} \liff a_2 + a_6 = 2a_4
$$

Dermed får vi at

$$
a_4 + (a_2 + a_6) = 36
$$

$$
a_4 + 2a_4 = 36
$$

$$
3a_4 = 36 \liff a_4 = \dfrac{36}{3} = 12
$$
::::
:::::

:::::::::::::::






