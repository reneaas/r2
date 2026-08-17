# Oppgaver: Aritmetiske rekker


:::::::::::::::{exercise} Oppgave 1
:::::::::::::{part} a
En aritmetisk følge $\{a_n\}$ har startledd $2$ og differanse $5$.

Finn en eksplisitt formel for $a_n$.


:::::{answer}
$$
a_n = 5n - 3
$$

::::{solution}
Formelen for det $n$-te leddet er 

$$
a_n = a_1 + d(n - 1)
$$

Vi har at $a_1 = 2$ og $d = 5$ som gir

$$
a_n = 2 + 5(n - 1) = 2 + 5n - 5 = 5n - 3
$$
::::
:::::

:::::::::::::

:::::::::::::{part} b
En aritmetisk følge $\{b_n\}$ har startledd $-3$ og differanse $2$.

Finn en eksplisitt formel for $b_n$.

:::::{answer}
$$
b_n = 2n - 5
$$

::::{solution}
Startleddet er $b_1 = -3$ og differansen er $d = 2$. Da blir

$$
b_n = b_1 + d(n - 1) = -3 + 2(n - 1) = -3 + 2n - 2 = 2n - 5
$$
::::

:::::
:::::::::::::


:::::::::::::{part} c
En aritmetisk følge $\{c_n\}$ har startledd $20$ og differanse $-3$.

Finn en eksplisitt formel for $c_n$.

:::::{answer}
$$
c_n = -3n + 23
$$

::::{solution}
Startleddet er $c_1 = 20$ og differansen er $d = -3$. Da blir formelen for det $n$-te leddet:

$$
c_n = c_1 + d(n - 1) = 20 - 3(n - 1) = 20 - 3n + 3 = -3n + 23
$$
::::
:::::

:::::::::::::

:::::::::::::::


---


:::::::::::::::{exercise} Oppgave 2

:::::::::::::{part} a
En artimetisk følge $\{a_n\}$ er gitt ved 

$$
3, 8, 13, 18, 23, \ldots
$$

Finn en eksplisitt formel $a_n$.

:::::{answer}
$$
a_n = 5n - 2
$$

::::{solution}
Startleddet er $a_1 = 3$ og differansen er $d = 5$. Dermed blir

$$
a_n = a_1 + d(n - 1) = 3 + 5(n - 1) = 3 + 5n - 5 = 5n - 2
$$
::::
:::::

:::::::::::::

:::::::::::::{part} b
En aritmetisk følge $\{b_n\}$ er gitt ved

$$
50, 45, 40, 35, 30, \ldots
$$

Finn en eksplisitt formel $b_n$.


:::::{answer}
$$
b_n = -5n + 55
$$

::::{solution}
Startleddet er $b_1 = 50$ og differansen er $d = -5$. Dermed blir

$$
b_n = b_1 + d(n - 1) = 50 - 5(n - 1) = 50 - 5n + 5 = -5n + 55
$$
::::
:::::

:::::::::::::


:::::::::::::{part} c
En aritmetisk følge $\{c_n\}$ er gitt ved

$$
-10, -3, 4, 11, 18, \ldots
$$

Finn en eksplisitt formel $c_n$.


:::::{answer}
$$
c_n = 7n - 17
$$

::::{solution}
Startleddet er $c_1 = -10$ og differansen er $d = 7$. Dermed blir

$$
c_n = c_1 + d(n - 1) = -10 + 7(n - 1) = -10 + 7n - 7 = 7n - 17
$$
::::
:::::

:::::::::::::

:::::::::::::::


---


:::::::::::::::{exercise} Oppgave 3

En aritmetisk følge $\{a_n\}$ er gitt ved

$$
1, 3, 5, 7, 9, \ldots, 99
$$


:::::::::::::{part} a
Finn en eksplisitt formel for $a_n$.


:::::{answer}

$$
a_n = 2n - 1
$$


::::{solution}
Differansen i følgen er $d = 2$. Startleddet er $a_1 = 1$. Dermed kan vi skrive opp en formel for følgen som:

$$
a_n = a_1 + (n - 1)d = 1 + (n - 1) \cdot 2 = 1 + 2n - 2 = 2n - 1
$$
::::
:::::

:::::::::::::

Rekka $S$ er gitt ved

$$
S = 1 + 3 + 5 + 7 + 9 + \ldots + 99
$$


:::::::::::::{part} b
Finn summen av rekka.


:::::{answer}
$$
S = 2500
$$
::::{solution}
Summen av en aritmetisk rekke er 

$$
S_n = \dfrac{a_1 + a_n}{2} \cdot n
$$

Vi har at det $n$-te leddet i rekka er

$$
a_n = 2n - 1
$$

Det siste i rekka er $a_n = 99$ som gir

$$
2n - 1 = 99 \implies 2n = 100 \implies n = 50
$$

Altså er det $50$ ledd i rekka. Da blir summen lik

$$
S_{50} = \dfrac{1 + 99}{2} \cdot 50 = 50 \cdot 50 = 2500
$$
::::
:::::

:::::::::::::

:::::::::::::::


---



:::::::::::::::{exercise} Oppgave 4

:::::::::::::{part} a
En aritmetisk rekke er gitt ved

$$
S = 2 + 5 + 8 + 11 + \ldots + 50
$$


Finn summen av rekka.

:::::{answer}
$$
S = 442
$$

::::{solution}
Rekka har startledd $a_1 = 2$ med en differanse $d = 3$. Derfor får vi at 

$$
a_n = 2 + 3(n - 1) = 2 + 3n - 3 = 3n - 1
$$

Det siste leddet i rekka er lik $50$ som gir 

$$
a_n = 50 \liff 3n - 1 = 50 \liff 3n = 51
$$

som gir 

$$
n = 17
$$

Summen av rekka er derfor

$$
S = \dfrac{a_1 + a_{17}}{2} \cdot 17 = \frac{5 + 50}{2} \cdot 17 = 26 \cdot 17 = 442
$$

::::
:::::

:::::::::::::



:::::::::::::{part} b
En aritmetisk rekke er gitt ved 

$$
S = 3 + 7 + 11 + 15 + \ldots + 99
$$


Bestem summen av rekka.


:::::{answer}
$$
S = 1275
$$

::::{solution}
Rekka har startledd $a_1 = 3$ med en differanse $d = 4$. Formelen for det $n$-te leddet i rekka er da

$$
a_n = 3 + 4(n - 1) = 3 + 4n - 4 = 4n - 1
$$

Det siste leddet i rekka er $a_n = 99$ som gir

$$
4n - 1 = 99 \liff 4n = 100 \liff n = 25
$$

Altså er det $25$ ledd i rekka. Summen av rekka blir derfor

$$
S = \dfrac{a_1 + a_{25}}{2} \cdot 25 = \dfrac{3 + 99}{2} \cdot 25 = 51 \cdot 25 = 1275
$$

::::
:::::

:::::::::::::



:::::::::::::{part} c
En aritmetisk rekke er gitt ved

$$
S = 100 + 96 + 92 + \ldots + 4
$$

Finn summen av rekka.


:::::{answer}
$$
S = 1300
$$


::::{solution}
Rekka har startledd $a_1 = 100$ og differanse $d = -4$. Det $n$-te leddet er derfor gitt ved 

$$
a_n = 100 - 4(n - 1) = 100 - 4n + 4 = -4n + 104
$$

Det siste leddet i rekka er $a_n = 4$ som gir

$$
-4n + 104 = 4 \liff -4n = -100 \liff n = 25
$$

Altså er det $25$ ledd i rekka. Summen av rekka blir derfor

$$
S = \dfrac{a_1 + a_{25}}{2} \cdot 25 = \dfrac{100 + 4}{2} \cdot 25 = 52 \cdot 25 = 1300
$$

::::
:::::

:::::::::::::


:::::::::::::{part} d
En aritmetisk rekke er gitt ved 

$$
S = -8 - 3 + 2 + 7 + \ldots + 47
$$

Bestem summen av rekka.



:::::{answer}
$$
S = 234
$$

::::{solution}
Rekka har startled $a_1 = -8$ og differanse $d = 5$. Det $n$-te leddet i rekka er derfor gitt ved

$$
a_n = -8 + 5(n - 1) = -8 + 5n - 5 = 5n - 13
$$

Det siste leddet i rekka er $a_n = 47$ som gir

$$
5n - 13 = 17 \liff 5n = 60 \liff n = 12
$$

Altså er det $12$ ledd i rekka. Summen av rekka blir derfor

$$
S = \dfrac{a_1 + a_{12}}{2} \cdot 12 = \dfrac{-8 + 47}{2} \cdot 12 = \dfrac{39}{2} \cdot 12 = 234
$$

::::
:::::


:::::::::::::



:::::::::::::{part} e
En aritmetisk rekke er gitt ved

$$
S = -3 + 0 + 3 + 6 + \ldots + 69
$$

Finn summen av rekka.



:::::{answer}
$$
S = 825
$$


::::{solution}
Rekka har startledd $a_1 = -3$ og differanse $d = 3$. Det $n$-te leddet i rekka er derfor gitt ved

$$
a_n = -3 + 3(n - 1) = -3 + 3n - 3 = 3n - 6
$$

Det siste leddet i rekka er $a_n = 69$ som gir

$$
3n - 6 = 69 \liff 3n = 75 \liff n = 25
$$

Altså er det $25$ ledd i rekka. Summen av rekka blir derfor

$$
S = \dfrac{a_1 + a_{25}}{2} \cdot 25 = \dfrac{-3 + 69}{2} \cdot 25 = \dfrac{66}{2} \cdot 25 = 33 \cdot 25 = 825
$$
::::
:::::


:::::::::::::

:::::::::::::::




---



:::::::::::::::{exercise} Oppgave 5
For en aritmetisk følge $\{a_n\}$ gjelder

$$
a_{n + 1} - a_n = 5 \qog a_1 = 3
$$


:::::::::::::{part} a
Finn $a_5$.


:::::{answer}
$$
a_5 = 23
$$

::::{solution}
Den rekursive formelen forteller oss at differansen i følgen er $d = 5$. Startleddet er $a_1 = 3$ som gir at formelen for det $n$-te leddet er

$$
a_n = 3 + 5(n - 1) = 3 + 5n - 5 = 5n - 2
$$

Vi setter inn $n = 5$: 

$$
a_5 = 5 \cdot 5 - 2 = 25 - 2 = 23
$$
::::

:::::

:::::::::::::

En rekke er gitt ved 

$$
S = a_1 + a_2 + a_3 + \ldots + a_{30}
$$

:::::::::::::{part} b
Finn summen av rekka. 


:::::{answer}
$$
S = 2265
$$

::::{solution}
Fra oppgave **a** vet vi at 

$$
a_n = 5n - 2
$$

Det siste leddet i rekka blir da 

$$
a_{30} = 5 \cdot 30 - 2 = 150 - 2 = 148
$$

Summen av rekka blir derfor

$$
S = \dfrac{a_1 + a_{30}}{2} \cdot 30 = \dfrac{3 + 148}{2} \cdot 30 = \dfrac{151}{2} \cdot 30 = 151 \cdot 15 = 2265
$$
::::
:::::

:::::::::::::



En annen rekke er gitt ved 

$$
R = a_1 + a_3 + a_5 + \ldots + a_{29}
$$


:::::::::::::{part} c
Bestem $R$.


:::::{answer}
$$
R = 1095
$$

::::{solution}
Rekka $R$ er summen av annen hvert ledd i $\{a_n\}$. Dette betyr at rekka består av $15$ ledd. Det siste leddet er gitt ved 

$$
a_{29} = 5 \cdot 29 - 2 = 145 - 2 = 143
$$

Summen av rekka blir derfor

$$
R = \dfrac{a_1 + a_{29}}{2} \cdot 15 = \dfrac{3 + 143}{2} \cdot 15 = \dfrac{146}{2} \cdot 15 = 73 \cdot 15 = 1095
$$
::::
:::::

:::::::::::::


:::::::::::::::


---


:::::::::::::::{exercise} Oppgave 6
:::::::::::::{part} a
I en aritmetisk følge $\{a_n\}$ er $a_5 - a_1 = 12$ og $a_1 = 3$.

Bestem en eksplisitt formel for $a_n$.

:::::{answer}
$$
a_n = 3n
$$

::::{solution}
Startleddet er $a_1 = 3$. Differansen $d$ vil tilfredsstille likningen

$$
a_5 - a_1 = 4d
$$

og siden $a_5 - a_1 = 12$, får vi

$$
4d = 12 \liff d = 3
$$

Det betyr at formelen for det $n$-te leddet i følgen er

$$
a_n = a_1 + d(n - 1) = 3 + 3(n - 1) = 3 + 3n - 3 = 3n
$$
::::
:::::

:::::::::::::


:::::::::::::{part} b
I en aritmetisk følge $\{b_n\}$ er $b_6 - b_3 = 15$ og $b_2 = 4$.

Finn en eksplisitt formel for $b_n$.


:::::{answer}
$$
b_n = 5n - 6
$$

::::{solution}
Differansen i følgen tilfredsstiller

$$
b_6 - b_3 = 3d \and b_6 - b_3 = 15
$$

som betyr at

$$
3d = 15 \liff d = 5
$$

Siden $b_2 = 4$, betyr det at startleddet er 

$$
b_1 = b_2 - d = 4 - 5 = -1
$$

Dermed blir formelen for det $n$-te leddet i følgen

$$
b_n = b_1 + d(n - 1) = -1 + 5(n - 1) = -1 + 5n - 5 = 5n - 6
$$
::::
:::::

:::::::::::::



:::::::::::::{part} c
I en aritmetisk følge er $\{c_n\}$ gitt ved $c_7 - c_2 = 20$ og $c_3 = 5$.

Finn en eksplisitt formel for $c_n$.


:::::{answer}
$$
c_n = 4n - 7
$$

::::{solution}
Differansen i følgen tilfredsstiller

$$
c_7 - c_2 = 5d \and c_7 - c_2 = 20
$$

som betyr at

$$
5d = 20 \liff d = 4
$$

Siden $c_3 = 5$, betyr det at startleddet er

$$
c_1 = c_3 - 2d = 5 - 2 \cdot 4 = 5 - 8 = -3
$$

Dermed blir formelen for det $n$-te leddet i følgen

$$
c_n = c_1 + d(n - 1) = -3 + 4(n - 1) = -3 + 4n - 4 = 4n - 7
$$
::::
:::::


:::::::::::::


:::::::::::::::


---



:::::::::::::::{exercise} Oppgave 7
Ta quizen!

::::::::{quiz-2}
:::::::{quiz-question}
La $\{a_n\}$ være en aritmetisk følge. Hvilket alternativ er riktig? 

::::::{quiz-answer}
---
correct:
---
$$
a_5 = \dfrac{a_3 + a_7}{2}
$$
::::::

::::::{quiz-answer}
$$
a_6 = \dfrac{a_5 + a_8}{2}
$$
::::::


::::::{quiz-answer}
$$
a_7 = \dfrac{a_5 + a_{10}}{2}
$$
::::::


::::::{quiz-answer}
$$
a_{9} = \dfrac{a_{7} + a_{12}}{2}
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
b_{15} = \dfrac{b_{11} + b_{19}}{2}
$$
::::::


::::::{quiz-answer}
$$
b_{5} = \dfrac{b_{3} + b_{8}}{2}
$$
::::::


::::::{quiz-answer}
$$
b_{21} = \dfrac{b_{16} + b_{23}}{2}
$$
::::::


::::::{quiz-answer}
$$
b_{8} = \dfrac{b_{6} + b_{11}}{2}
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
c_{20} = \dfrac{c_{18} + c_{22}}{2}
$$
::::::

::::::{quiz-answer}
$$
c_{15} = \dfrac{c_{12} + c_{17}}{2}
$$
::::::


::::::{quiz-answer}
$$
c_{10} = \dfrac{c_{8} + c_{13}}{2}
$$
::::::


::::::{quiz-answer}
$$
c_{5} = \dfrac{c_{1} + c_{7}}{2}
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
d_{11} = \dfrac{d_{7} + d_{15}}{2}
$$
::::::


::::::{quiz-answer}
$$
d_{16} = \dfrac{d_{13} + d_{18}}{2}
$$
::::::


::::::{quiz-answer}
$$
d_{50} = \dfrac{d_{45} + d_{54}}{2}
$$
::::::

::::::{quiz-answer}
$$
d_{67} = \dfrac{d_{62} + d_{73}}{2}
$$
::::::

:::::::



::::::::

:::::::::::::::


---




:::::::::::::::{exercise} Oppgave 8
I en aritmetisk følge $\{a_n\}$ er 

$$
a_1 + a_3 + a_5 = 21
$$


:::::::::::::{part} a 
Finn $a_3$.

:::::{answer}
$$
a_3 = 7
$$

::::{solution}
Leddet $a_3$ ligger midt mellom $a_1$ og $a_5$ i følgen $\{a_n\}$. Dermed vil gjennomsnittet av $a_1$ og $a_5$ være lik $a_3$:

$$
\dfrac{a_1 + a_5}{2} = a_3 \liff a_1 + a_5 = 2a_3
$$

Vi setter inn i likningen:

$$
a_3 + (a_1 + a_5) = 21
$$

$$
a_3 + 2a_3 = 21 \liff 3a_3 = 21 \liff a_3 = 7
$$

::::

:::::

:::::::::::::

I en aritmetisk følge $\{b_n\}$ er 

$$
b_1 + b_2 + b_3 + b_4 + b_5 = 25
$$

:::::::::::::{part} b
Finn $b_3$.


:::::{answer}
$$
b_3 = 5
$$

::::{solution}
Leddet $b_3$ ligger midt mellom $b_2$ og $b_4$ som betyr at gjennomsnittet av de to leddene er lik $b_3$:

$$
\dfrac{b_2 + b_4}{2} = b_3 \liff b_2 + b_4 = 2b_3
$$

Leddet $b_3$ ligger også midt mellom $b_1$ og $b_5$ som også betyr at 

$$
\dfrac{b_1 + b_5}{2} = b_3 \liff b_1 + b_5 = 2b_3
$$

Dermed blir likningen

$$
b_1 + b_2 + b_3 + b_4 + b_5 = 25
$$

$$
(b_1 + b_5) + b_3 + (b_2 + b_4) = 25
$$

$$
2b_3 + b_3 + 2b_3 = 25
$$

$$
5b_3 = 25
$$

$$
b_3 = 5
$$
::::

:::::

:::::::::::::


:::::::::::::::


---


:::::::::::::::{exercise} Oppgave 9
En aritmetisk følge $\{a_n\}$ tilfredsstiller

$$
a_{n + 1} = a_n + 3 \qder a_1 = 2
$$

:::::::::::::{part} a
Finn en eksplisitt formel for $a_n$.


:::::{answer}

$$
a_n = 3n - 1
$$

::::{solution}
Fra rekursjonsformelen ser vi at differansen i følgen er $d = 3$. Startleddet er $a_1 = 2$ som betyr at 

$$
a_n = 2 + 3(n - 1) = 2 + 3n - 3 = 3n - 1
$$
::::
:::::

:::::::::::::

En rekke $S$ er gitt ved 

$$
S = \sum_{n = 1}^{20} a_n
$$


:::::::::::::{part} b
Bestem $S$.


:::::{answer}
$$
S = 610
$$

::::{solution}
Vi har at 

$$
S = \sum_{n = 1}^{20} a_n = a_1 + a_2 + \ldots + a_{20}
$$

Vi vet at det første leddet er $a_1 = 2$. Det siste leddet blir:

$$
a_{20} = 3 \cdot 20 - 1 = 60 - 1 = 59
$$

Summen av rekka er derfor

$$
S = \dfrac{a_1 + a_{20}}{2} \cdot 20 = \dfrac{2 + 59}{2} \cdot 20 = \dfrac{61}{2} \cdot 20 = 61 \cdot 10 = 610
$$

::::
:::::

:::::::::::::

En annen rekke $R$ er gitt ved 

$$
R = \sum_{n = 1}^{10} a_{2n}
$$

:::::::::::::{part} c
Finn $R$.


:::::{answer}
$$
R = 320
$$

::::{solution}
Rekka $R$ kan skrives om til

$$
R = \sum_{n=1}^{10} a_{2n} = a_2 + a_4 + a_6 + \ldots + a_{18} + a_{20}
$$

Rekka består av $10$ ledd, der det siste leddet er $a_{20} = 59$ og det første leddet er

$$
a_2 = 3 \cdot 2 - 1 = 6 - 1 = 5
$$

Summen av rekka blir derfor

$$
R = \dfrac{a_2 + a_{20}}{2} \cdot 10 = \dfrac{5 + 59}{2} \cdot 10 = \dfrac{64}{2} \cdot 10 = 32 \cdot 10 = 320
$$

::::
:::::


:::::::::::::

:::::::::::::::



---



:::::::::::::::{exercise} Oppgave 10
I en aritmetisk følge $\{a_n\}$ er

$$
a_1 + a_3 + a_5 = 30 \and a_5 = 14
$$

:::::::::::::{part} a
Finn $a_1$.


:::::{answer}
$$
a_1 = 6
$$

::::{solution}
Leddet $a_3$ ligger midt mellom $a_1$ og $a_5$ i følgen $\{a_n\}$ slik at 

$$
a_3 = \dfrac{a_1 + a_5}{2} \liff 2a_3 = a_1 + a_5
$$

Det betyr at

$$
a_1 + a_3 + a_5 = 30
$$

$$
3a_3 = 30
$$

$$
a_3 = 10
$$

Leddet $a_5 = 14$ som betyr at $a_5 - a_3 = 14 - 10 = 4$. Differansen $a_3 - a_1$ må også være lik $4$ som betyr at 

$$
a_1 = a_3 - 4 = 10 - 4 = 6
$$


::::
:::::


:::::::::::::

En rekke $S$ er gitt ved 

$$
S = a_1 + a_2 + a_3 + \ldots + a_{50}
$$

:::::::::::::{part} b
Bestem $S$.


:::::{answer}
$$
S = 2750
$$

::::{solution}
Vi har at startleddet er $a_1 = 6$. Differansen i følgen blir halvparten av differansen $a_3 - a_1 = 4$, så derfor er $d = 2$. Formelen for det $n$-te leddet er da

$$
a_n = 6 + 2(n - 1) = 6 + 2n - 2 = 2n + 4
$$

Det siste leddet i rekka blir da

$$
a_{50} = 2 \cdot 50 + 4 = 100 + 4 = 104
$$

Summen av rekka blir derfor

$$
S = \dfrac{a_1 + a_{50}}{2} \cdot 50 = \dfrac{6 + 104}{2} \cdot 50 = \dfrac{110}{2} \cdot 50 = 55 \cdot 50 = 2750
$$

::::
:::::


:::::::::::::

:::::::::::::::



:::::::::::::::{exercise} Oppgave 11
I en aritmetisk følge $\{a_n\}$ er

$$
a_1 + a_5 + a_9 = 0 \and a_9 = 8
$$

:::::::::::::{part} a
Finn en eksplisitt formel for $a_n$.


:::::{answer}
$$
a_n = 2n - 10
$$

::::{solution}
Vi har at $a_5$ er lik gjennomsnittet av $a_1$ og $a_9$ i følgen $\{a_n\}$:

$$
\dfrac{a_1 + a_9}{2} = a_5 \liff a_1 + a_9 = 2a_5
$$

Men da får vi at 

$$
a_1 + a_5 + a_9 = 0 \liff 3a_5 = 0 \liff a_5 = 0
$$


Siden summen av de tre leddene er lik $0$, må altså $a_5$ = 0. Og da må det også bety at $a_1 = -a_9 = -8$. 

Differansen i følgen $\{a_n\}$ blir da

$$
d = \dfrac{a_9 - a_5}{9 - 5} = \dfrac{8 - 0}{4} = 2
$$

Dermed kan vi skrive opp en eksplisitt formel for det $n$-te leddet i følgen:

$$
a_n = a_1 + (n - 1)d = -8 + (n - 1) \cdot 2 = -8 + 2n - 2 = 2n - 10
$$

::::
:::::

:::::::::::::

En rekke tilfredsstiller

$$
a_1 + a_2 + \ldots + a_{n} = 220
$$


:::::::::::::{part} b
Bestem hvor mange ledd det er i rekka.

:::::{answer}
$$
n = 20
$$

::::{solution}
Summen av rekka er generelt gitt ved

$$
S_n = \dfrac{a_1 + a_n}{2} \cdot n = \dfrac{-8 + 2n - 10}{2} \cdot n = \dfrac{2n - 18}{2} \cdot n = (n - 9)n
$$

Rekka skal være lik $220$ som gir likningen

$$
n(n - 9) = 220 \liff n^2 - 9n - 220 = 0
$$

Vi bruker $abc$-formelen:

$$
n = \dfrac{9 \pm \sqrt{(-9)^2 - 4 \cdot 1 \cdot (-220)}}{2 \cdot 1} = \dfrac{9 \pm \sqrt{81 + 880}}{2} = \dfrac{9 \pm \sqrt{961}}{2} = \dfrac{9 \pm 31}{2}
$$

Det vil bare være den positive løsningen som gir mening, og denne blir

$$
n = \dfrac{9 + 31}{2} = \dfrac{40}{2} = 20
$$

Altså er det $20$ ledd i rekka.


::::

:::::
:::::::::::::

:::::::::::::::

---


:::::::::::::::{exercise} Oppgave 12
I en aritmetisk følge $\{a_n\}$ er

$$
a_5 - a_2 = 9 \qog a_2 = -4
$$

:::::::::::::{part} a
Finn en eksplisitt formel for $a_n$.


:::::{answer}
$$
a_n = 3n - 10
$$

::::{solution}
Vi har at 

$$
a_5 - a_2 = 9 \and a_5 - a_2 = 3d
$$

som betyr at differansen er

$$
3d = 9 \liff d = 3
$$

Startleddet i rekka blir da

$$
a_1 = a_2 - d = -4 - 3 = -7
$$

Formelen for det $n$-te leddet er da 

$$
a_n = a_1 + d(n - 1) = -7 + 3(n - 1) = -7 + 3n - 3 = 3n - 10
$$


::::

:::::

:::::::::::::

Rekka $S$ er gitt ved 

$$
S = a_1 + a_2 + a_3 + \ldots + a_{100}
$$


:::::::::::::{part} b
Bestem $S$.

:::::{answer}
$$
S = 14150
$$

::::{solution}
Det siste leddet i rekka blir

$$
a_{100} = 3 \cdot 100 - 10 = 300 - 10 = 290
$$

Da blir summen av rekka lik:


$$
S = \dfrac{a_1 + a_{100}}{2} \cdot 100 = \dfrac{-7 + 290}{2} \cdot 100 = \dfrac{283}{2} \cdot 100 = 283 \cdot 50 = 14150
$$

::::
:::::

:::::::::::::

:::::::::::::::




---



:::::::::::::::{exercise} Oppgave 13
En rekke er gitt ved 

$$
S = \ln e^2 + \ln e^4 + \ln e^6 + \ldots + \ln e^{100} 
$$


:::::::::::::{part} a
Finn $S$.


:::::{answer}
$$
S = 2550
$$

::::{solution}
Vi skriver om uttrykket ved å bruke sammenhengen mellom $e^x$ og $\ln x$:

$$
\begin{align*}
S &= \ln e^2 + \ln e^4 + \ln e^6 + \ldots + \ln e^{100} \\
\\
&= 2 + 4 + 6 + \ldots + 100
\end{align*}
$$

Altså er dette en aritmetisk rekke med startledd $a_1 = 2$ og differanse $d = 2$. Det siste leddet i rekka er $a_n = 100$ som betyr at vi summerer opp de $50$ første partallene. Da får vi

$$
S = \dfrac{a_1 + a_{50}}{2} \cdot 50 = \dfrac{2 + 100}{2} \cdot 50 = 51 \cdot 50 = 2550
$$
::::
:::::

:::::::::::::

En annen rekke er gitt ved

$$
R = \ln 2 + \ln 4 + \ln 8 + \ldots + \ln 1024
$$

:::::::::::::{part} b
Finn $R$.


:::::{answer}
$$
R = 55 \ln 2
$$
::::{solution}
Vi starter med å uttrykke tallene som potenser av $2$ og bruker logaritmeregler for å skrive uttrykket rekka enklere:

$$
\begin{align*}
R &= \ln 2 + \ln 4 + \ln 8 + \ldots + \ln 1024 \\
\\
&= \ln 2 + \ln 2^2 + \ln 2^3 + \ldots + \ln 2^{10} \\
\\
&= \ln 2 + 2\cdot \ln 2 + 3 \cdot \ln 2 + \ldots + 10\cdot \ln 2 \\
\\
&= (1 + 2 + 3 + \ldots + 10)\cdot \ln 2 \\
\\
&= \dfrac{(10 + 1)}{2} \cdot 10 \cdot \ln 2 \\
\\
&= 55 \ln 2
\end{align*}
$$
::::
:::::


:::::::::::::


Gitt uttrykket:

$$
L = \log_2 \left(2 \cdot 4 \cdot 8 \cdot \ldots \cdot 8192\right)
$$


:::::::::::::{part} c
Bestem $L$.

:::::{answer}
$$
L = 91
$$

::::{solution}
Vi har at 

$$
\begin{align*}
R &= \log_2 \left(2 \cdot 4 \cdot 8 \cdot \ldots \cdot 8192\right) \\
\\
&= \log_2 2 + \log_2 4 + \log_2 8 + \ldots + \log_2 8192 \\
\\
&= \log_2 2 + \log_2 2^2 + \log_2 2^3 + \ldots + \log_2 2^{13} \\
\\
&= 1 + 2 + 3 + \ldots + 13 \\
\\
&= \dfrac{(13 + 1)}{2} \cdot 13 = 91
\end{align*}
$$
::::
:::::



:::::::::::::

:::::::::::::::


---


:::::::::::::::{exercise} Oppgave 14
I en aritmetisk følge $\{a_n\}$ er $a_3 = 8$.


:::::::::::::{part} a
Finn summen

$$
a_1 + a_3 + a_5
$$

:::::{answer}

$$
a_1 + a_3 + a_5 = 24
$$

::::{solution}
Leddet $a_3$ ligger midt mellom $a_1$ og $a_5$, så dermed er 

$$
\dfrac{a_1 + a_5}{2} = a_3 \liff a_1 + a_5 = 2a_3
$$

Dermed blir summen 

$$
\begin{align*}
a_1 + a_2 + a_3 &= (a_1 + a_5) + a_3 \\
\\
&= 2a_3 + a_3 \\
\\
&= 3a_3 \\
\\
&= 3 \cdot 8 \\
\\
&= 24
\end{align*}
$$
::::


:::::

:::::::::::::



:::::::::::::{part} b
Finn summen

$$
a_1 + a_2 + a_3 + a_4 + a_5
$$


:::::{answer}
$$
a_1 + a_2 + a_3 + a_4 + a_5 = 40
$$

::::{solution}
Vi har at 
* gjennomnittet av $a_1$ og $a_5$ er lik $a_3$. 
* gjennomsnittet av $a_2$ og $a_4$ er lik $a_3$. 

Da får vi at

$$
a_1 + a_5 = 2a_3 \and a_2 + a_4 = 2a_3
$$

Dermed blir summen 

$$
a_1 + a_2 + a_3 + a_4 + a_5 = 5a_3 = 5 \cdot 8 = 40
$$
::::
:::::


:::::::::::::


I en annen aritmetisk følge $\{b_n\}$ er $b_{5} = 20$ 


:::::::::::::{part} c
Finn 

$$
b_1 + b_2 + \ldots + b_9
$$

:::::{answer}
$$
b_1 + b_2 + \ldots + b_9 = 180
$$

::::{solution}
Vi har at 
* gjennomnittet av $b_1$ og $b_9$ er lik $b_5$.
* gjennomnittet av $b_2$ og $b_8$ er lik $b_5$.
* gjennomnittet av $b_3$ og $b_7$ er lik $b_5$.
* gjennomnittet av $b_4$ og $b_6$ er lik $b_5$.

Alle disse gir et bidrag $2b_5$ til summen, som betyr at

$$
\begin{align*}
b_1 + b_2 + \ldots + b_9 &= (b_1 + b_9) + (b_2 + b_8) + (b_3 + b_7) + (b_4 + b_6) + b_5 \\
\\
&= 2b_5 + 2b_5 + 2b_5 + 2b_5 + b_5 \\
\\
&= 9b_5 \\
\\
&= 9 \cdot 20 \\
\\
&= 180
\end{align*}
$$
::::

:::::

:::::::::::::



:::::::::::::::
