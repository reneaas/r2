# Oppgaver: Følger og rekker



:::::::::::::::{exercise-2} Oppgave 1

En tallfølge $\{a_n\}$ er gitt ved

$$
1, 4, 8, 16, 32, 64, 128.
$$

:::::::::::::{part} a
Bestem $a_4$.


:::::{answer-2}
$$
a_4 = 16
$$
:::::

:::::::::::::


:::::::::::::{part} b
Finn $a_2 + a_3 + a_4$.


:::::{answer-2}
$$
a_2 + a_3 + a_4 = 28
$$
:::::


:::::::::::::


:::::::::::::::


---


:::::::::::::::{exercise-2} Oppgave 2
Regn ut summene nedenfor.

:::::::::::::{part} a
$$
\sum_{n = 1}^5 (2n + 1)
$$


:::::{answer-2}


$$
\sum_{n = 1}^5 (2n + 1) = 35
$$


::::{solution-2}
$$
\begin{align*}
\sum_{n = 1}^5 (2n + 1) &= (2 \cdot 1 + 1) + (2 \cdot 2 + 1) + (2 \cdot 3 + 1) + (2 \cdot 4 + 1) + (2 \cdot 5 + 1) \\
&= 3 + 5 + 7 + 9 + 11 \\
\\
&= 35
\end{align*}
$$
::::
:::::

:::::::::::::


:::::::::::::{part} b
$$
\sum_{n = 2}^4 (n^2 - 1)
$$


:::::{answer-2}
$$
\sum_{n = 2}^4 (n^2 - 1) = 26
$$


::::{solution-2}
$$
\begin{align*}
\sum_{n = 2}^4 (n^2 - 1) &= (2^2 - 1) + (3^2 - 1) + (4^2 - 1) \\
&= 3 + 8 + 15 \\
\\
&= 26
\end{align*}
$$
::::
:::::



:::::::::::::

:::::::::::::{part} c
$$
\sum_{n = 0}^3 2^n
$$


:::::{answer-2}

$$
\sum_{n = 0}^3 2^n = 15
$$

::::{solution-2}
$$
\begin{align*}
\sum_{n = 0}^3 2^n &= 2^0 + 2^1 + 2^2 + 2^3 \\
&= 1 + 2 + 4 + 8 \\
\\
&= 15
\end{align*}
$$
::::
:::::

:::::::::::::

:::::::::::::::


---



:::::::::::::::{exercise-2} Oppgave 3
En følge $\{a_n\}$ er definert av den rekursive formelen

$$
a_{n + 1} = a_n + 3 \qder a_1 = 2.
$$


:::::::::::::{part} a
Bestem $a_4$.


:::::{answer-2}

$$
a_4 = 11
$$


::::{solution-2}
Vi bruker den rekursive formelen til å regne oss fra $a_1$ fram til $a_4$:

$$
\begin{align*}
a_2 &= a_1 + 3 = 2 + 3 = 5 \\
\\
a_3 &= a_2 + 3 = 5 + 3 = 8 \\
\\
a_4 &= a_3 + 3 = 8 + 3 = 11
\end{align*}
$$
::::
:::::

:::::::::::::


:::::::::::::{part} b
Regn ut $\sum\limits_{n = 1}^4 a_n$


:::::{answer-2}
$$
\sum\limits_{n = 1}^4 a_n = 26
$$


::::{solution-2}
Vi regner ut summen:


$$
\begin{align*}
\sum\limits_{n = 1}^4 a_n &= a_1 + a_2 + a_3 + a_4 \\
\\
&= 2 + 5 + 8 + 11 \\
\\
&= 26
\end{align*}
$$

::::
:::::

:::::::::::::


:::::::::::::::





---




:::::::::::::::{exercise-2} Oppgave 4
En rekke $S$ er gitt ved

$$
S = 1 + 2 + 4 + 8 + 16 + \ldots
$$

:::::::::::::{part} a
Finn delsummen $S_5$.




:::::::::::::


:::::::::::::{part} b
Finn en rekursiv formel for delsummen $S_N$. 
:::::::::::::

:::::::::::::::




---



:::::::::::::::{exercise-2} Oppgave 5
En følge $\{a_n\}$ er gitt ved

$$
1, 2, 4, 8, 16, 32, \ldots
$$


:::::::::::::{part} a
Finn en rekursjonsformel som gir en sammenheng mellom $a_{n + 1}$ og $a_n$.


:::::::::::::


:::::::::::::{part} b
Finn en eksplisitt formel for $a_n$. 


:::::::::::::



:::::::::::::::


---



:::::::::::::::{exercise} Oppgave 6
En rekke er gitt ved

$$
R = \dfrac{1}{\sqrt{1} + \sqrt{2}} + \dfrac{1}{\sqrt{2} + \sqrt{3}} + \dfrac{1}{\sqrt{3} + \sqrt{4}} + \ldots + \dfrac{1}{\sqrt{99} + \sqrt{100}}
$$


:::::::::::::{part} a
:::{hint} Hint
Konjugatsetningen sier at $(a + b)(a - b) = a^2 - b^2$. 

Gang med noe i teller og nevner ved å bruke konjugatsetningen så du blir kvitt brøkene.
:::

Vis at 

$$
\dfrac{1}{\sqrt{x} + \sqrt{x + 1}} = \sqrt{x + 1} - \sqrt{x}
$$
:::::::::::::


:::::::::::::{part} b
Bestem $R$.
:::::::::::::
:::::::::::::::