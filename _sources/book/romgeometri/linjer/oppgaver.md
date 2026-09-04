# Oppgaver: Linjer


:::::::::::::::{exercise} Oppgave 1
:::::::::::::{part} a
En linje $\ell$ går gjennom punktet $A(2, 0, 1)$ og har en retningsvektor $\vec{v}_\ell = [1, 2, -1]$.

Finn en parameterframstilling for linja $\ell$.


:::::{answer}
$$
\vec{r}_\ell(t) = [2 + t, 2t, 1 - t] \qfor t \in \real
$$

::::{solution}
En parameterframstilling for linja er gitt ved:

$$
\begin{align*}
\vec{r}_\ell(t) &= \lvec{OA} + \vec{v}_\ell \cdot t \\
\\
&= [2, 0, 1] + [1, 2, -1] \cdot t \\
\\
&= [2 + t, 2t, 1 - t]
\end{align*}
$$

for alle $t \in \real$.
::::
:::::

:::::::::::::



:::::::::::::{part} b
En linje $m$ går gjennom punktet $B(5, -1, 3)$ og har en retningsvektor $\vec{v}_m = [2, -1, 4]$.

Lag en parameterframstilling for linja $m$.


:::::{answer}
$$
\vec{r}_m(t) = [5 + 2t, -1 - t, 3 + 4t] \qfor t \in \real
$$

::::{solution}
En parameterframstilling for linja er gitt ved 

$$
\begin{align*}
\vec{r}_m(t) &= \lvec{OB} + \vec{v}_m \cdot t \\
\\
&= [5, -1, 3] + [2, -1, 4] \cdot t \\
\\
&= [5 + 2t, -1 - t, 3 + 4t]
\end{align*}
$$

for alle $t \in \real$.
::::
:::::


:::::::::::::



:::::::::::::{part} c
En linje $n$ går gjennom punktet $C(-1, 2, 0)$ og har en retningsvektor $\vec{v}_n = [3, 0, -2]$.

Lag en parameterframstilling for linja $n$.


:::::{answer}
$$
\vec{r}_n(t) = [-1 + 3t, 2, -2t] \qfor t \in \real
$$

::::{solution}
En parameterframstilling for linja er gitt ved 

$$
\begin{align*}
\vec{r}_n(t) &= \lvec{OC} + \vec{v}_n \cdot t \\
\\
&= [-1, 2, 0] + [3, 0, -2] \cdot t \\
\\
&= [-1 + 3t, 2, -2t]
\end{align*}
$$

for alle $t \in \real$.
::::
:::::


:::::::::::::


:::::::::::::::


---


:::::::::::::::{exercise} Oppgave 2
:::::::::::::{part} a
En linje $\ell$ går gjennom punktene $A(5, -1, 3)$ og $B(2, 4, 1)$.

Bestem en parameterframstilling for linja $\ell$.


:::::{answer}
$$
\vec{r}_\ell(t) = [5 - 3t, -1 + 5t, 3 - 2t] \qfor t \in \real
$$

::::{solution}
Vi finner først en retningsvektor linja. En slik vektor er gitt ved 

$$
\vec{v}_\ell = \lvec{AB} = [2 - 5, 4 - (-1), 1 - 3] = [-3, 5, -2]
$$

En parameterframstilling for linja er da gitt ved 

$$
\begin{align*}
\vec{r}_\ell(t) &= \lvec{OA} + \vec{v}_\ell \cdot t \\
\\
&= [5, -1, 3] + [-3, 5, -2] \cdot t \\
\\
&= [5 - 3t, -1 + 5t, 3 - 2t]
\end{align*}
$$

for alle $t \in \real$.

::::
:::::

:::::::::::::



:::::::::::::{part} b
En linje $m$ går gjennom punktene $C(-1, 2, 0)$ og $D(3, -1, 4)$.

Finn en parameterframstilling for linja $m$.


:::::{answer}
$$
\vec{r}_m(t) = [-1 + 4t, 2 - 3t, 4t] \qfor t \in \real
$$

::::{solution}
Vi finner først en retningsvektor for linja. En slik vektor er gitt ved:

$$
\vec{v}_m = \lvec{CD} = [3 - (-1), -1 - 2, 4 - 0] = [4, -3, 4]
$$

En parameterframstilling for linja er da gitt ved 

$$
\begin{align*}
\vec{r}_m(t) &= \lvec{OC} + \vec{v}_m \cdot t \\
\\
&= [-1, 2, 0] + [4, -3, 4] \cdot t \\
\\
&= [-1 + 4t, 2 - 3t, 4t]
\end{align*}
$$

for alle $t \in \real$.
::::
:::::


:::::::::::::


:::::::::::::{part} c
En linje $n$ går gjennom punktene $E(0, 0, 0)$ og $F(1, 1, 1)$.

Lag en parameterframstilling for linja $n$.


:::::{answer}
$$
\vec{r}_n(t) = [t, t, t] \qfor t \in \real
$$

::::{solution}
Vi finner først en retningsvektor for linja. En slik vektor er gitt ved 

$$
\vec{v}_n = \lvec{EF} = [1 - 0, 1 - 0, 1 - 0] = [1, 1, 1]
$$

En parameterframstilling for linja er da gitt ved

$$
\begin{align*}
\vec{r}_n(t) &= \lvec{OE} + \vec{v}_n \cdot t \\
\\
&= [0, 0, 0] + [1, 1, 1] \cdot t \\
\\
&= [t, t, t]
\end{align*}
$$

for alle $t \in \real$.
::::
:::::


:::::::::::::



:::::::::::::::



---



:::::::::::::::{exercise} Oppgave 3
En linje $\ell$ er gitt ved

$$
\vec{r}(t) = [3 + 2t, -1 + t, 4 - t], \quad t \in \real
$$


:::::::::::::{part} a
Avgjør om punktet $A(5, 0, 3)$ ligger på linja.



:::{hint} Hint
Punktet $A$ ligger på linja dersom likningen $\vec{r}(t) = \lvec{OA}$ har nøyaktig én løsning for $t$.
:::


:::::{answer}
Ja, punktet ligger på linja. 

::::{solution}
Vi sjekker om likningen $\vec{r}(t) = \lvec{OA}$ har nøyaktig én løsning for $t$:

$$
3 + 2t = 5 \and -1 + t = 0 \and 4 - t = 3
$$

Den første likningen gir

$$
3 + 2t = 5 \liff 2t = 2 \liff t = 1
$$

Den andre likningen gir

$$
-1 + t = 0 \liff t = 1
$$

Den siste likningen gir

$$
4 - t = 3 \liff t = 1
$$

Altså får vi én løsning for $t$ for alle tre komponentene, som betyr at punktet $A$ ligger på linja.
::::
:::::

:::::::::::::



:::::::::::::{part} b
Avgjør om punktet $B(1, -2, 5)$ ligger på linja.


:::::{answer}
Ja, punktet ligger på linja.

::::{solution}
Punktet $B$ ligger på linja dersom likningen $\vec{r}(t) = \lvec{OB}$ har nøyaktig én løsning for $t$:

$$
3 + 2t = 1 \and -1 + t = -2 \and 4 - t = 5
$$

Den første likningen gir

$$
3 + 2t = 1 \liff 2t = -2 \liff t = -1
$$

Den andre likningen gir

$$
-1 + t = -2 \liff t = -1
$$

Den siste likningen gir

$$
4 - t = 5 \liff -t = 1 \liff t = -1
$$

Vi får én løsning for $t$ som betyr at punktet $B$ ligger på linja.
::::
:::::

:::::::::::::


:::::::::::::{part} c
Avgjør om punktet $C(7, 3, 2)$ ligger på linja.


:::::{answer}
Nei, punktet ligger ikke på linja.

::::{solution}
Punktet $C$ ligger på linja dersom likningen $\vec{r}(t) = \lvec{OC}$ har nøyaktig én løsning for $t$:

$$
3 + 2t = 7 \and -1 + t = 3 \and 4 - t = 2
$$

Den første likningen gir

$$
3 + 2t = 7 \liff 2t = 4 \liff t = 2
$$

Den andre likningen gir

$$
-1 + t = 3 \liff t = 4
$$

Vi fikk to forskjellige løsninger for $t$ og trenger ikke sjekke den siste likningen. Det betyr at punktet $C$ ikke ligger på linja.
::::
:::::

:::::::::::::



:::::::::::::::




---



:::::::::::::::{exercise} Oppgave 4
:::::::::::::{part} a
En linje $\ell$ går gjennom punktene $A(1, -2, 3)$ og $B(4, 0, 1)$.

Bestem den korteste avstanden fra punktet $P(7, 8, 5)$ til linja $\ell$.


:::::{answer}
$$
L = 6\sqrt{2}
$$

::::{solution}
Den korteste avstanden fra punktet $P$ til linja er gitt ved 

$$
L = \dfrac{\abs{\lvec{AP} \times \vec{v}}}{\abs{\vec{v}}}
$$

der $\vec{v}$ er en retningsvektor for linja. En slik vektor er gitt ved 

$$
\vec{v} = \lvec{AB} = [4 - 1, 0 - (-2), 1 - 3] = [3, 2, -2]
$$

Så finner vi vektoren $\lvec{AP}$:

$$
\lvec{AP} = \lvec{OP} - \lvec{OA} = [7 - 1, 8 - (-2), 5 - 3] = [6, 10, 2]
$$

Kryssproduktet av de to vektorene er gitt ved 

$$
\begin{align*}
\lvec{AP} \times \vec{v} &= \mqty|\vec{e}_x & \vec{e}_y & \vec{e}_z \\ 6 & 10 & 2 \\ 3 & 2 & -2 | \\
\\
&= \vec{e}_x \cdot \mqty|10 & 2 \\ 2 & -2| - \vec{e}_y \cdot \mqty|6 & 2 \\ 3 & -2| + \vec{e}_z \cdot \mqty|6 & 10 \\ 3 & 2| \\
\\
&= \vec{e}_x \cdot (10 \cdot (-2) - 2 \cdot 2) - \vec{e}_y \cdot (6 \cdot (-2) - 2 \cdot 3) + \vec{e}_z \cdot (6 \cdot 2 - 10 \cdot 3) \\
\\
&= \vec{e}_x \cdot (-20 - 4) - \vec{e}_y \cdot (-12 - 6) + \vec{e}_z \cdot (12 - 30) \\
\\
&= \vec{e}_x \cdot (-24) - \vec{e}_y \cdot (-18) + \vec{e}_z \cdot (-18) \\
\\
&= [-24, 18, -18] \\
\\
&= -6 \cdot [4, -3, 3]
\end{align*}
$$

Vi regner ut lengden av kryssproduktet:

$$
\abs{\lvec{AP} \times \vec{v}} = \abs{-6 \cdot [4, -3, 3]} = 6 \cdot \sqrt{4^2 + (-3)^2 + 3^2} = 6 \cdot \sqrt{16 + 9 + 9} = 6 \cdot \sqrt{34}
$$

så regner vi ut lengden av retningsvektoren:

$$
\abs{\vec{v}} = \abs{[3, 2, -2]} = \sqrt{3^2 + 2^2 + (-2)^2} = \sqrt{9 + 4 + 4} = \sqrt{17}
$$

Dermed blir den korteste avstanden fra punktet $P$ til linja $\ell$:

$$
L = \dfrac{\abs{\lvec{AP} \times \vec{v}}}{\abs{\vec{v}}} = \dfrac{6 \cdot \sqrt{34}}{\sqrt{17}} = \dfrac{6 \cdot \sqrt{2} \cdot \sqrt{17}}{\sqrt{17}} = 6\sqrt{2}
$$


::::
:::::


:::::::::::::



:::::::::::::{part} b
En linje $m$ går gjennom punktene $C(-1, 2, 0)$ og $D(3, -1, 4)$.

Finn den korteste avstanden fra punktet $Q(8, -4, 7)$ til linja $m$.


:::::{answer}

$$
L = \sqrt{2}
$$

::::{solution}
Den korteste avstanden fra $Q$ til linja er gitt ved 

$$
L = \dfrac{\abs{\lvec{CQ} \times \vec{v}}}{\abs{\vec{v}}}
$$

der $\vec{v}$ er en retningsvektor for linja. En slik vektor er gitt ved

$$
\vec{v} = \lvec{CD} = [3 - (-1), -1 - 2, 4 - 0] = [4, -3, 4]
$$

Vi trenger så vektoren $\lvec{CQ}$:

$$
\lvec{CQ} = \lvec{OQ} - \lvec{OC} = [8 - (-1), -4 - 2, 7 - 0] = [9, -6, 7]
$$

Så regner vi ut kryssproduktet av de to vektorene:

$$
\begin{align*}
\vec{CQ} \times \vec{v} &= \mqty|\vec{e}_x & \vec{e}_y & \vec{e}_z \\ 9 & -6 & 7 \\ 4 & -3 & 4 | \\
\\
&= \vec{e}_x \cdot \mqty|-6 & 7 \\ -3 & 4| - \vec{e}_y \cdot \mqty|9 & 7 \\ 4 & 4| + \vec{e}_z \cdot \mqty|9 & -6 \\ 4 & -3| \\
\\
&= \vec{e}_x \cdot (-6 \cdot 4 - 7 \cdot (-3)) - \vec{e}_y \cdot (9 \cdot 4 - 7 \cdot 4) + \vec{e}_z \cdot (9 \cdot (-3) - (-6) \cdot 4) \\
\\
&= \vec{e}_x \cdot (-24 + 21) - \vec{e}_y \cdot (36 - 28) + \vec{e}_z \cdot (-27 + 24) \\
\\
&= \vec{e}_x \cdot (-3) - \vec{e}_y \cdot (8) + \vec{e}_z \cdot (-3) \\
\\
&= [-3, -8, -3]
\end{align*}
$$

Lengden av kryssproduktet er 

$$
\abs{\lvec{CQ} \times \vec{v}} = \sqrt{(-3)^2 + (-8)^2 + (-3)^2} = \sqrt{9 + 64 + 9} = \sqrt{82}
$$

Lengden av retningsvektoren er 

$$
\abs{\vec{v}} = \abs{[4, -3, 4]} = \sqrt{4^2 + (-3)^2 + 4^2} = \sqrt{16 + 9 + 16} = \sqrt{41}
$$

Altså er den korteste avstanden fra punktet $Q$ til linja $m$:

$$
L = \dfrac{\abs{\lvec{CQ} \times \vec{v}}}{\abs{\vec{v}}} = \dfrac{\sqrt{82}}{\sqrt{41}} = \dfrac{\sqrt{2} \cdot \sqrt{41}}{\sqrt{41}} = \sqrt{2}
$$



::::
:::::
:::::::::::::



:::::::::::::{part} c
En linje $n$ går gjennom punktene $E(-1, 2, 0)$ og $F(0, 3, 1)$.

Finn den korteste avstanden fra punktet $R(2, 3, 5)$ til linja $n$.


:::::{answer}
$$
L = 2\sqrt{2}
$$

::::{solution}
Den korteste avstanden fra $R$ til linja er gitt ved 

$$
L = \dfrac{\abs{\lvec{ER} \times \vec{v}}}{\abs{\vec{v}}}
$$

der $\vec{v}$ er en retningsvektor for linja. En slik vektor er gitt ved

$$
\vec{v} = \lvec{EF} = [0 - (-1), 3 - 2, 1 - 0] = [1, 1, 1]
$$

Vi trenger så vektoren $\lvec{ER}$:

$$
\lvec{ER} = \lvec{OR} - \lvec{OE} = [2 - (-1), 3 - 2, 5 - 0] = [3, 1, 5]
$$

Kryssproduktet av de to vektorene er gitt ved

$$
\begin{align*}
\lvec{ER} \times \vec{v} &= \mqty|\vec{e}_x & \vec{e}_y & \vec{e}_z \\ 3 & 1 & 5 \\ 1 & 1 & 1 | \\
\\
&= \vec{e}_x \cdot \mqty|1 & 5 \\ 1 & 1| - \vec{e}_y \cdot \mqty|3 & 5 \\ 1 & 1| + \vec{e}_z \cdot \mqty|3 & 1 \\ 1 & 1| \\
\\
&= \vec{e}_x \cdot (1 \cdot 1 - 5 \cdot 1) - \vec{e}_y \cdot (3 \cdot 1 - 5 \cdot 1) + \vec{e}_z \cdot (3 \cdot 1 - 1 \cdot 1) \\
\\
&= \vec{e}_x \cdot (1 - 5) - \vec{e}_y \cdot (3 - 5) + \vec{e}_z \cdot (3 - 1) \\
\\
&= \vec{e}_x \cdot (-4) - \vec{e}_y \cdot (-2) + \vec{e}_z \cdot (2) \\
\\
&= [-4, 2, 2] \\
\\
&= 2 \cdot [-2, 1, 1]
\end{align*}
$$

Lengden av kryssproduktet er 

$$
\abs{\lvec{ER} \times \vec{v}} = \abs{2 \cdot [-2, 1, 1]} = 2 \cdot \sqrt{(-2)^2 + 1^2 + 1^2} = 2 \cdot \sqrt{4 + 1 + 1} = 2 \cdot \sqrt{6}
$$

Lengden av retningsvektoren er 

$$
\abs{\vec{v}} = \abs{[1, 1, 1]} = \sqrt{1^2 + 1^2 + 1^2} = \sqrt{3}
$$

Altså er den korteste avstanden fra punktet $R$ til linja $n$:

$$
L = \dfrac{\abs{\lvec{ER} \times \vec{v}}}{\abs{\vec{v}}} = \dfrac{2 \cdot \sqrt{6}}{\sqrt{3}} = \dfrac{2 \cdot \sqrt{2} \cdot\sqrt{3}}{\sqrt{3}} = 2 \cdot \sqrt{2}
$$

::::
:::::

:::::::::::::


:::::::::::::::



---


:::::::::::::::{exercise} Oppgave 5
To linjer $\ell$ og $m$ er gitt ved

$$
\vec{r}_\ell(t) = [1 + 2t, 3 - t, 4 + t] \qog \vec{r}_m(s) = [7 - 4s, 5 + 2s, 6 - 2s]
$$


:::::::::::::{part} a
Vis at linjene er parallelle.


:::::{answer}
$\vec{v}_m = -2 \cdot \vec{v}_\ell$ som betyr at linjene er parallelle. 

::::{solution}
Linjene er parallelle dersom retningsvektorene er parallelle. 

En retningsvektor for $\ell$ er gitt ved 

$$
\vec{v}_\ell = \vec{r}_\ell'(t) = [(1 + 2t)', (3 - t)', (4 + t)'] = [2, -1, 1]
$$

En retningsvektor for $m$ er gitt ved

$$
\vec{v}_m = \vec{r}_m'(s) = [(7 - 4s)', (5 + 2s)', (6 - 2s)'] = [-4, 2, -2] = -2 \cdot [2, -1, 1]
$$

Vi ser at $\vec{v}_m = -2 \cdot \vec{v}_\ell$, som betyr at retningsvektorene er parallelle. Dermed er linjene $\ell$ og $m$ parallelle.

::::
:::::


:::::::::::::


:::::::::::::{part} b
Finn et punkt på linja $\ell$ og et punkt på linja $m$.


:::::{answer}
* $A(1, 3, 4)$ er et punkt på $\ell$
* $B(7, 5, 6)$ er et punkt på $m$

::::{solution}
Et punkt på linja $\ell$ er gitt ved 

$$
\lvec{OA} = \vec{r}_\ell(0) = [1 + 2 \cdot 0, 3 - 0, 4 + 0] = [1, 3, 4]
$$

Et punkt på linja $m$ er gitt ved

$$
\lvec{OB} = \vec{r}_m(0) = [7 - 4 \cdot 0, 5 + 2 \cdot 0, 6 - 2 \cdot 0] = [7, 5, 6]
$$
::::
:::::

:::::::::::::


:::::::::::::{part} c
Bestem avstanden mellom $\ell$ og $m$.


:::::{answer}
$$
L = 2\sqrt{5}
$$

::::{solution}
Siden linjene er parallelle, vil avstanden mellom de være gitt ved avstanden fra et punkt til en linje. Vi kan derfor bruke 

$$
L = \dfrac{\abs{\lvec{AB} \times \vec{v}_\ell}}{\abs{\vec{v}_\ell}}
$$


Vi har at $\vec{v}_\ell = [2, -1, 1]$ og 

$$
\lvec{AB} = \lvec{OB} - \lvec{OA} = [7 - 1, 5 - 3, 6 - 4] = [6, 2, 2]
$$

Kryssproduktet av de to vektorene er gitt ved 

$$
\begin{align*}
\lvec{AB} \times \vec{v}_\ell &= \mqty|\vec{e}_x & \vec{e}_y & \vec{e}_z \\ 6 & 2 & 2 \\ 2 & -1 & 1 | \\
\\
&= \vec{e}_x \cdot \mqty|2 & 2 \\ -1 & 1| - \vec{e}_y \cdot \mqty|6 & 2 \\ 2 & 1| + \vec{e}_z \cdot \mqty|6 & 2 \\ 2 & -1| \\
\\
&= \vec{e}_x \cdot (2 \cdot 1 - 2 \cdot (-1)) - \vec{e}_y \cdot (6 \cdot 1 - 2 \cdot 2) + \vec{e}_z \cdot (6 \cdot (-1) - 2 \cdot 2) \\
\\
&= \vec{e}_x \cdot (2 + 2) - \vec{e}_y \cdot (6 - 4) + \vec{e}_z \cdot (-6 - 4) \\
\\
&= \vec{e}_x \cdot 4 - \vec{e}_y \cdot 2 + \vec{e}_z \cdot (-10) \\
\\
&= [4, -2, -10] \\
\\
&= -2 \cdot [-2, 1, 5]
\end{align*}
$$


Lengden av kryssproduktet er 

$$
\abs{\lvec{AB} \times \vec{v}_\ell} = \abs{-2 \cdot [-2, 1, 5]} = 2 \cdot \sqrt{(-2)^2 + 1^2 + 5^2} = 2 \cdot \sqrt{4 + 1 + 25} = 2 \cdot \sqrt{30}
$$

Lengden av retningsvektoren er

$$
\abs{\vec{v}_\ell} = \abs{[2, -1, 1]} = \sqrt{2^2 + (-1)^2 + 1^2} = \sqrt{4 + 1 + 1} = \sqrt{6}
$$

Dermed blir avstanden mellom linjene $\ell$ og $m$:

$$
L = \dfrac{\abs{\lvec{AB} \times \vec{v}_\ell}}{\abs{\vec{v}_\ell}} = \dfrac{2 \cdot \sqrt{30}}{\sqrt{6}} = \dfrac{2 \cdot \sqrt{5} \cdot \sqrt{6}}{\sqrt{6}} = 2\sqrt{5}
$$

::::
:::::



:::::::::::::


:::::::::::::::


---



:::::::::::::::{exercise} Oppgave 6
To linjer $\ell$ og $m$ er gitt ved

$$
\vec{r}_\ell(t) = [2 + t, -1 + 4t, 5 + t] \qog \vec{r}_m(s) = [-5 + s, -3 + 2s, 2 - s]
$$

der $s, t \in \real$. 



:::::::::::::{part} a
Vis at $\ell$ og $m$ er ikke-parallelle.


:::::{answer}
Det finnes ikke noe tall $k$ slik at $\vec{v}_\ell = k \cdot \vec{v}_m$. Dermed er linjene ikke-parallelle.

::::{solution}
Linjene er ikke-parallelle dersom retningsvektorene til de to linjene ikke er parallelle. 

Retningsvektoren til linja $\ell$ er gitt ved

$$
\vec{v}_\ell = \vec{r}_\ell'(t) = [(2 + t)', (-1 + 4t)', (5 + t)'] = [1, 4, 1]
$$

Retningsvektoren til linja $m$ er gitt ved

$$
\vec{v}_m = \vec{r}_m'(s) = [(-5 + s)', (-3 + 2s)', (2 - s)'] = [1, 2, -1]
$$

Det er kanskje tydelig at det ikke finnes noe tall $k$ slik at $\vec{v}_\ell = k \cdot \vec{v}_m$. For eksempel må vi gange $y$-komponenten til $\vec{v}_\ell$ med 2 for å få $y$-komponenten til $\vec{v}_m$, men $x$- og $z$-komponentene vil ikke bli riktige. Dermed er retningsvektorene ikke-parallelle, som betyr at linjene $\ell$ og $m$ er ikke-parallelle.

::::
:::::


:::::::::::::


:::::::::::::{part} b
Finn en vektor $\vec{n}$ som står normalt på både $\ell$ og $m$.

:::::{answer}
$\vec{n} = [3, -1, 1]$ eller hvilken som helst annen vektor som er parallell med denne. 

::::{solution}
En vektor som står normalt på både $\ell$ og $m$ er gitt ved kryssproduktet av retningsvektorene til de to linjene:

$$
\begin{align*}
\vec{v}_\ell \times \vec{v}_m &= \mqty|\vec{e}_x & \vec{e}_y & \vec{e}_z \\ 1 & 4 & 1 \\ 1 & 2 & -1 | \\
\\
&= \vec{e}_x \cdot \mqty|4 & 1 \\ 2 & -1| - \vec{e}_y \cdot \mqty|1 & 1 \\ 1 & -1| + \vec{e}_z \cdot \mqty|1 & 4 \\ 1 & 2| \\
\\
&= \vec{e}_x \cdot (-6) - \vec{e}_y \cdot (-2) + \vec{e}_z \cdot (-2) \\
\\
&= [-6, 2, -2] \\
\\
&= -2 \cdot [3, -1, 1]
\end{align*}
$$

Vi kan velge $\vec{n} = [3, -1, 1]$ som en vektor som står normalt på både $\ell$ og $m$ siden denne er parallell med kryssproduktet $[-6, 2, -2]$.
::::
:::::


:::::::::::::


:::::::::::::{part} c
Bestem den korteste avstanden mellom de to linjene.


:::::{answer}
$$
L = 2\sqrt{11}
$$

::::{solution}
Den korteste avstanden mellom to ikke-parallelle linjer er gitt ved 

$$
L = \dfrac{\abs{\lvec{AB} \cdot \vec{n}}}{\abs{\vec{n}}}
$$

der $\lvec{AB}$ er en vektor fra et punkt på linja $\ell$ til et punkt på linja $m$, og $\vec{n}$ er en vektor som står normalt på begge linjene. 

Et punkt på $\ell$ er gitt ved 

$$
\lvec{OA} = \vec{r}_\ell(0) = [2 + 0, -1 + 0, 5 + 0] = [2, -1, 5]
$$

Et punkt på linja $m$ er gitt ved

$$
\lvec{OB} = \vec{r}_m(0) = [-5 + 0, -3 + 0, 2 + 0] = [-5, -3, 2]
$$

Dermed får vi vektoren $\lvec{AB}$:

$$
\lvec{AB} = \lvec{OB} - \lvec{OA} = [-5 - 2, -3 - (-1), 2 - 5] = [-7, -2, -3]
$$

Så regner vi ut prikkproduktet i telleren: 

$$
\begin{align*}
\lvec{AB} \cdot \vec{n} &= [-7, -2, -3] \cdot [3, -1, 1] \\
\\
&= (-7) \cdot 3 + (-2) \cdot (-1) + (-3) \cdot 1 \\
\\
&= -21 + 2 - 3 = -22
\end{align*}
$$

og deretter lengden av normalvektoren: 

$$
\abs{\vec{n}} = \abs{[3, -1, 1]} = \sqrt{3^2 + (-1)^2 + 1^2} = \sqrt{9 + 1 + 1} = \sqrt{11}
$$

Dermed blir den korteste avstanden mellom de to linjene:

$$
L = \dfrac{\abs{\lvec{AB} \cdot \vec{n}}}{\abs{\vec{n}}} = \dfrac{\abs{-22}}{\sqrt{11}} = \dfrac{22}{\sqrt{11}} = \dfrac{2 \cdot 11}{\sqrt{11}} = 2\sqrt{11}
$$
::::
:::::



:::::::::::::



:::::::::::::::




---


:::::::::::::::{exercise} Oppgave 7


:::{hint} Hint
Her må du sjekke om linjene er parallelle eller ikke-parallelle før du prøver å finne avstanden. 
1. Parallelle: Bruk formelen for avstand fra punkt til linje
2. Ikke-parallelle: Bruk formelen for avstand mellom to ikke-parallelle linjer
:::


:::::::::::::{part} a
Linjene $\ell$ og $m$ er gitt ved

$$
\ell: \begin{cases} x = 2 + 3t \\ y = -2 + t \\ z = 1 + t \end{cases} \qog m: \begin{cases} x = 6 - 2s \\ y = 1 - s \\ z = 8 - s\end{cases} 
$$


Finn den (korteste) avstanden mellom $\ell$ og $m$.



:::::{answer}
$$
L = 2\sqrt{2}
$$

::::{solution}
Retningsvektoren til $\ell$ er gitt ved 

$$
\vec{v}_\ell = [3, 1, 1]
$$

Retningsvektoren til $m$ er gitt ved 

$$
\vec{v}_m = [-2, -1, -1] = -1 \cdot [2, 1, 1]
$$

Vektorene er ikke-parallelle siden vi ikke kan gange den ene vektoren med et tall for å få den andre vektoren. Dermed er linjene ikke-parallelle. Da er den korteste avstanden mellom de to linjene gitt ved

$$
L = \dfrac{\abs{\lvec{AB} \cdot \vec{n}}}{\abs{\vec{n}}}
$$

der $\vec{n} = \vec{v}_\ell \times \vec{v}_m$ og $\lvec{AB}$ er en vektor fra et punkt på linja $\ell$ til et punkt på linja $m$.

Et punkt på linja $\ell$ er gitt ved

$$
\lvec{OA} = \vec{r}_\ell(0) = [2 + 3 \cdot 0, -2 + 0, 1 + 0] = [2, -2, 1]
$$

Et punkt på linja $m$ er gitt ved 

$$
\lvec{OB} = \vec{r}_m(0) = [6 - 2 \cdot 0, 1 - 0, 8 - 0] = [6, 1, 8]
$$

Dermed er 

$$
\lvec{AB} = \lvec{OB} - \lvec{OA} = [6 - 2, 1 - (-2), 8 - 1] = [4, 3, 7]
$$

Så finner vi normalvektoren ved å ta kryssproduktet av retningsvektorene:

$$
\begin{align*}
\vec{n} &= \vec{v}_\ell \times \vec{v}_m = \mqty|\vec{e}_x & \vec{e}_y & \vec{e}_z \\ 3 & 1 & 1 \\ -2 & -1 & -1 | \\
\\
&= \vec{e}_x \cdot \mqty|1 & 1 \\ -1 & -1| - \vec{e}_y \cdot \mqty|3 & 1 \\ -2 & -1| + \vec{e}_z \cdot \mqty|3 & 1 \\ -2 & -1| \\
\\
&= \vec{e}_x \cdot 0 - \vec{e}_y \cdot (-1) + \vec{e}_z \cdot (-1) \\
\\
&= [0, 1, -1]
\end{align*}
$$

Prikkproduktet i telleren av avstandsformelen er gitt ved 

$$
\begin{align*}
\lvec{AB} \cdot \vec{n} &= [4, 3, 7] \cdot [0, 1, -1] \\
\\
&= 4 \cdot 0 + 3 \cdot 1 + 7 \cdot (-1) \\
\\
&= 0 + 3 - 7 = -4
\end{align*}
$$

Lengden av normalvektoren er

$$
\abs{\vec{n}} = \abs{[0, 1, -1]} = \sqrt{0^2 + 1^2 + (-1)^2} = \sqrt{0 + 1 + 1} = \sqrt{2}
$$

Dermed er den korteste avstanden mellom de to linjene:

$$
L = \dfrac{\abs{\lvec{AB} \cdot \vec{n}}}{\abs{\vec{n}}} = \dfrac{\abs{-4}}{\sqrt{2}} = \dfrac{4}{\sqrt{2}} = 2\sqrt{2}
$$


::::
:::::


:::::::::::::



:::::::::::::{part} b
Om to linjer får du vite at
* Linja $\ell$ går gjennom punktene $A(1, -1, 4)$ og $B(2, 0, 2)$
* Linja $m$ går gjennom punktene $C(5, 3, 2)$ og $D(7, 5, -2)$

Finn den (korteste) avstanden mellom de to linjene.


:::::{answer}
$$
L = 2 \sqrt{3}
$$

::::{solution}
Vi sjekker først om de to linjene er parallelle eller ikke-parallelle. 

En retningsvektor for linja $\ell$ er gitt ved

$$
\vec{v}_\ell = \lvec{AB} = [2 - 1, 0 - (-1), 2 - 4] = [1, 1, -2]
$$

En retningsvektor for linja $m$ er gitt ved

$$
\vec{v}_m = \lvec{CD} = [7 - 5, 5 - 3, -2 - 2] = [2, 2, -4] = 2 \cdot [1, 1, -2]
$$

Altså er $\vec{v}_m = 2 \cdot \vec{v}_\ell$ som betyr at de to linjene er parallelle. Da er den korteste avstanden gitt ved 

$$
L = \dfrac{\abs{\lvec{AC} \times \vec{v}_\ell}}{\abs{\vec{v}_\ell}}
$$

Vi har at 

$$
\lvec{AC} = \lvec{OC} - \lvec{OA} = [5 - 1, 3 - (-1), 2 - 4] = [4, 4, -2]
$$

Så regner vi ut kryssproduktet 

$$
\begin{align*}
\lvec{AC} \times \vec{v}_\ell &= \mqty|\vec{e}_x & \vec{e}_y & \vec{e}_z \\ 4 & 4 & -2 \\ 1 & 1 & -2 | \\
\\
&= \vec{e}_x \cdot \mqty|4 & -2 \\ 1 & -2| - \vec{e}_y \cdot \mqty|4 & -2 \\ 1 & -2| + \vec{e}_z \cdot \mqty|4 & 4 \\ 1 & 1| \\
\\
&= \vec{e}_x \cdot (-6) - \vec{e}_y \cdot (-6) + \vec{e}_z \cdot 0 \\
\\
&= [-6, 6, 0] \\
\\
&= 6 \cdot [-1, 1, 0]
\end{align*}
$$

Lengden av kryssproduktet er

$$
\abs{\lvec{AC} \times \vec{v}_\ell} = \abs{6 \cdot [-1, 1, 0]} = 6 \cdot \sqrt{(-1)^2 + 1^2 + 0^2} = 6 \cdot \sqrt{1 + 1 + 0} = 6 \cdot \sqrt{2}
$$

Lengden av retningsvektoren til $\ell$ er 

$$
\abs{\vec{v}_\ell} = \abs{[1, 1, -2]} = \sqrt{1^2 + 1^2 + (-2)^2} = \sqrt{1 + 1 + 4} = \sqrt{6}
$$

Dermed er 

$$
L = \dfrac{\abs{\lvec{AC} \times \vec{v}_\ell}}{\abs{\vec{v}_\ell}} = \dfrac{6 \cdot \sqrt{2}}{\sqrt{6}} = 2 \sqrt{3}
$$

::::
:::::


:::::::::::::


:::::::::::::{part} c
To linjer $\ell$ og $m$ er gitt ved 

$$
\vec{r}_\ell(t) = [5 - 2t, 8 - 4t, t] \qog \vec{r}_m(s) = [11 + 4s, 20 + 8s, -3 - 2s]
$$

Finn den (korteste) avstanden mellom de to linjene.


:::::{answer}
Avstanden er lik $0$ fordi de to linjene er samme linje (de er sammenfallende).

::::{solution}
Vi sjekker først om de to linjene er parallelle eller ikke-parallelle.

En retningsvektor for linja $\ell$ er gitt ved

$$
\vec{v}_\ell = \vec{r}_\ell'(t) = [(5 - 2t)', (8 - 4t)', (t)'] = [-2, -4, 1]
$$

En retningsvektor for linja $m$ er gitt ved

$$
\vec{v}_m = \vec{r}_m'(s) = [(11 + 4s)', (20 + 8s)', (-3 - 2s)'] = [4, 8, -2] = -2 \cdot [-2, -4, 1]
$$

Altså er $\vec{v}_m = -2 \cdot \vec{v}_\ell$ som betyr at de to linjene er parallelle. Da er den korteste avstanden gitt ved

$$
L = \dfrac{\abs{\lvec{AB} \times \vec{v}_\ell}}{\abs{\vec{v}_\ell}}
$$

der $A$ er et punkt på $\ell$ og $B$ er et punkt på $m$. Vi kan velge $t = 0$ og $s = 0$ for å finne punktene:

$$
\lvec{OA} = \vec{r}_\ell(0) = [5 - 2 \cdot 0, 8 - 4 \cdot 0, 0] = [5, 8, 0]
$$

og 

$$
\lvec{OB} = \vec{r}_m(0) = [11 + 4 \cdot 0, 20 + 8 \cdot 0, -3 - 2 \cdot 0] = [11, 20, -3]
$$

Så er 

$$
\lvec{AB} = \lvec{OB} - \lvec{OA} = [11 - 5, 20 - 8, -3 - 0] = [6, 12, -3]
$$

Så regner vi ut kryssproduktet mellom $\lvec{AB}$ og $\vec{v}_\ell$:

$$
\begin{align*}
\lvec{AB} \times \vec{v}_\ell &= \mqty|\vec{e}_x & \vec{e}_y & \vec{e}_z \\ 6 & 12 & -3 \\ -2 & -4 & 1 | \\
\\
&= \vec{e}_x \cdot \mqty|12 & -3 \\ -4 & 1| - \vec{e}_y \cdot \mqty|6 & -3 \\ -2 & 1| + \vec{e}_z \cdot \mqty|6 & 12 \\ -2 & -4| \\
\\
&= \vec{e}_x \cdot 0 - \vec{e}_y \cdot 0 + \vec{e}_z \cdot 0 \\
\\
&= [0, 0, 0]
\end{align*}
$$

Kryssproduktet blir lik nullvektoren $\vec{0}$ som forteller oss at avstanden mellom de to linjene er lik $0$ siden 

$$
\abs{\lvec{AB} \times \vec{v}_\ell} = 0
$$

Det betyr at de to linjene er den samme linja (sammenfallende).

::::
:::::

:::::::::::::


:::::::::::::{part} d
* Linja $\ell$ går gjennom punktene $A(-2, 1, 0)$ og $B(6, -1, 4)$
* Linja $m$ går gjennom punktene $C(7, -12, 7)$ og $D(11, -4, 3)$.

Finn den (korteste) avstanden mellom de to linjene.


:::::{answer}
$$
L = \sqrt{14}
$$


::::{solution}
Vi sjekker først om de to linjene er parallelle eller ikke-parallelle.

En retningsvektor til linja $\ell$ er gitt ved

$$
\vec{v}_\ell = \lvec{AB} = [6 - (-2), -1 - 1, 4 - 0] = [8, -2, 4]
$$

En retningsvektor til linja $m$ er gitt ved

$$
\vec{v}_m = \lvec{CD} = [11 - 7, -4 - (-12), 3 - 7] = [4, 8, -4]
$$

Vi ser at det ikke finnes noe tall $k$ vi kan gange $\vec{v}_m$ med for å få $\vec{v}_\ell$ siden forholdstallet mellom tilsvarende komponenter er ulike. Dermed er linjene ikke-parallelle. 

Da er den korteste avstanden mellom de to linjene gitt ved

$$
L = \dfrac{\abs{\lvec{AC} \cdot \vec{n}}}{\abs{\vec{n}}}
$$

der $\vec{n} = \vec{v}_\ell \times \vec{v}_m$ og $\lvec{AC}$ er en vektor fra punktet $A$ på linja $\ell$ til punktet $C$ på linja $m$.

Vi har at 

$$
\lvec{AC} = \lvec{OC} - \lvec{OA} = [7 - (-2), -12 - 1, 7 - 0] = [9, -13, 7]
$$

Så finner vi normalvektoren ved å ta kryssproduktet av retningsvektorene:

$$
\begin{align*}
\vec{v}_\ell \times \vec{v}_m &= \mqty|\vec{e}_x & \vec{e}_y & \vec{e}_z \\ 8 & -2 & 4 \\ 4 & 8 & -4 | \\
\\
&= \vec{e}_x \cdot \mqty|-2 & 4 \\ 8 & -4| - \vec{e}_y \cdot \mqty|8 & 4 \\ 4 & -4| + \vec{e}_z \cdot \mqty|8 & -2 \\ 4 & 8| \\
\\
&= \vec{e}_x \cdot (-24) - \vec{e}_y \cdot (-48) + \vec{e}_z \cdot (72) \\
\\
&= [-24, 48, 72] \\
\\
&= 24 \cdot [-1, 2, 3]
\end{align*}
$$

Siden enhver vektor som er parallell med kryssproduktet er en normalvektor, velger vi her at 

$$
\vec{n} = [-1, 2, 3]
$$

Prikkproduktet mellom normalvektoren og vektoren $\lvec{AC}$ er gitt ved

$$
\begin{align*}
\lvec{AC} \cdot \vec{n} &= [9, -13, 7] \cdot [-1, 2, 3] \\
\\
&= 9 \cdot (-1) + (-13) \cdot 2 + 7 \cdot 3 \\
\\
&= -9 - 26 + 21 = -14
\end{align*}
$$

Lengden av normalvektoren er

$$
\abs{\vec{n}} = \abs{[-1, 2, 3]} = \sqrt{(-1)^2 + 2^2 + 3^2} = \sqrt{1 + 4 + 9} = \sqrt{14}
$$

Dermed er den korteste avstanden mellom de to linjene:

$$
L = \dfrac{\abs{\lvec{AC} \cdot \vec{n}}}{\abs{\vec{n}}} = \dfrac{\abs{-14}}{\sqrt{14}} = \dfrac{14}{\sqrt{14}} = \sqrt{14}
$$

::::
:::::

:::::::::::::


:::::::::::::::




---



:::::::::::::::{exercise} Oppgave 8
En linje $\ell$ går gjennom punktene $A(-3, 0, 1)$ og $B(1, 4, 5)$.

:::::::::::::{part} a
Lag en parameterframstilling for linja.


:::::{answer}
$$
\vec{r}_\ell(t) = [-3 + t, t, 1 + t]
$$

::::{solution}
Vi finner først en retningsvektor for linja. En slik vektor er 

$$
\lvec{AB} = [1 - (-3), 4 - 0, 5 - 1] = [4, 4, 4] = 4 \cdot [1, 1, 1]
$$

Vi velger den enkleste mulige retningsvektoren $\vec{v} = [1, 1, 1]$. Dermed kan vi lage en parameterframstilling for linja $\ell$ ved å bruke punktet $A$ og retningsvektoren $\vec{v}$:

$$
\vec{r}_\ell(t) = \lvec{OA} + t \cdot \vec{v} = [-3, 0, 1] + t \cdot [1, 1, 1] = [-3 + t, t, 1 + t]
$$
::::
:::::
:::::::::::::



:::::::::::::{part} b
Avgjør om punktet $P(0, 2, 3)$ ligger på linja $\ell$


:::::{answer}
Nei, punktet ligger ikke på linja.


::::{solution}
Vi sjekker om likningen $\vec{r}_\ell(t) = \lvec{OP}$ har nøyaktig én løsning for $t$. Vi setter opp vektorlikningen:

$$
-3 + t = 0 \and t = 2 \and 1 + t = 3
$$

Den første likningen gir $t = 3$, mens den andre gir $t = 2$ som betyr at punktet ikke ligger på linja $\ell$.
::::
:::::

:::::::::::::


:::::::::::::{part} c
Finn den korteste avstanden fra punktet $C(-2, 5, 10)$ til linja $\ell$.


:::::{answer}
$$
L = 4 \sqrt{2}
$$

::::{solution}
Den korteste avstanden fra $C$ til $\ell$ er gitt ved 

$$
L = \dfrac{\abs{\lvec{AC} \times \vec{v}}}{\abs{\vec{v}}}
$$

Vi har at $\vec{v} = [1, 1, 1]$ og

$$
\lvec{AC} = \lvec{OC} - \lvec{OA} = [-2 - (-3), 5 - 0, 10 - 1] = [1, 5, 9]
$$

Kryssproduktet av de to vektorene er gitt ved 

$$
\begin{align*}
\lvec{AC} \times \vec{v} &= \mqty|\vec{e}_x & \vec{e}_y & \vec{e}_z \\ 1 & 5 & 9 \\ 1 & 1 & 1 | \\
\\
&= \vec{e}_x \cdot \mqty|5 & 9 \\ 1 & 1| - \vec{e}_y \cdot \mqty|1 & 9 \\ 1 & 1| + \vec{e}_z \cdot \mqty|1 & 5 \\ 1 & 1| \\
\\
&= \vec{e}_x \cdot (-4) - \vec{e}_y \cdot (-8) + \vec{e}_z \cdot (-4) \\
\\
&= [-4, 8, -4] \\
\\
&= -4 \cdot [1, -2, 1]
\end{align*}
$$

Lengden av kryssproduktet er 

$$
\abs{\lvec{AC} \times \vec{v}} = \abs{-4 \cdot [1, -2, 1]} = 4 \cdot \sqrt{1^2 + (-2)^2 + 1^2} = 4 \cdot \sqrt{1 + 4 + 1} = 4 \cdot \sqrt{6}
$$

Lengden av retningsvektoren er

$$
\abs{\vec{v}} = \abs{[1, 1, 1]} = \sqrt{1^2 + 1^2 + 1^2} = \sqrt{3}
$$

Dermed er den korteste avstanden fra punktet $C$ til linja $\ell$:

$$
L = \dfrac{\abs{\lvec{AC} \times \vec{v}}}{\abs{\vec{v}}} = \dfrac{4 \cdot \sqrt{6}}{\sqrt{3}} = 4 \cdot \sqrt{2}
$$

::::
:::::


:::::::::::::


:::::::::::::{part} d
Bestem arealet av trekanten som har hjørner i punktene $A$, $B$ og $C$.



:::::{answer}
$$
G = 8\sqrt{6}
$$

::::{solution}
Fra oppgave **c** vet vi at den korteste avstanden fra $C$ til linja $\ell$ gjennom $A$ og $B$ er $L = 4\sqrt{2}$. Dette vil tilsvare høyden i trekanten hvis vi behandler $AB$ som grunnlinja i trekanten. Grunnlinja vil da ha lengden:

$$
\lvec{AB} = [4, 4, 4]
$$

$$
AB = \abs{\lvec{AB}} = \sqrt{4^2 + 4^2 + 4^2} = \sqrt{16 + 16 + 16} = \sqrt{48} = 4\sqrt{3}
$$

Dermed blir arealet av trekanten

$$
G = \dfrac{1}{2} \cdot AB \cdot L = \dfrac{1}{2} \cdot 4\sqrt{3} \cdot 4\sqrt{2} = 8\sqrt{6}
$$
::::
:::::

:::::::::::::

:::::::::::::::



---


:::::::::::::::{exercise} Oppgave 9
:::::::::::::{part} a
To linjer $\ell$ og $m$ er gitt ved

$$
\vec r_\ell(t) = [2t + 2, 3t + 1, t - 1] \qog \vec r_m(s) = [s + 3, -2s + 13, s - 2]
$$

Finn skjæringspunktet mellom de to linjene. 



:::::{answer}
$(6, 7, 1)$

::::{solution}
Vi løser likningen $\vec r_\ell(t) = \vec r_m(s)$ for $t$ og $s$. Vi får da tre likninger (én for hver vektorkoordinat):

$$
\begin{align*}
2t + 2 &= s + 3 && (\mathrm{I}) \\
\\
3t + 1 &= -2s + 13 && (\mathrm{II}) \\
\\
t - 1 &= s - 2 && (\mathrm{III})
\end{align*}
$$

Vi bruker likning $\eq{I}$ og løser for $s$:

$$
2t + 2 = s + 3 \liff s = 2t - 1
$$

Så setter vi inn dette uttrykket for $s$ i likning $\eq{III}$:

$$
t - 1 = \underbrace{2t - 1}_{=s} - 2 \liff t - 1 = 2t - 3 \liff t = 2
$$

Skjæringspunktet må da være gitt ved 

$$
\vec r_\ell(2) = [2 \cdot 2 + 2, 3 \cdot 2 + 1, 2 - 1] = [6, 7, 1]
$$

Altså skjærer linjene hverandre i $(6, 7, 1)$.
::::
:::::

:::::::::::::


:::::::::::::{part} b
To linjer $\ell$ og $m$ er gitt ved

$$
\ell: \begin{cases} x = 4t + 1 \\ y = 2t + 2 \\ z = t + 1 \end{cases} \qog m: \begin{cases} x = -2s + 9 \\ y = s + 10 \\ z = s + 6 \end{cases}
$$


Bestem koordinatene til skjæringspunktet mellom de to linjene.


:::::{answer}
$(13, 8, 4)$

::::{solution}
Vi setter vektorkoordinatene lik hverandre og får et likningssystem:

$$
\begin{align*}
4t + 1 &= -2s + 9 && (\mathrm{I}) \\
2t + 2 &= s + 10 && (\mathrm{II}) \\
t + 1 &= s + 6 && (\mathrm{III})
\end{align*}
$$

Vi løser likning $\eq{III}$ for $s$:

$$
t + 1 = s + 6 \liff s = t - 5
$$

Så setter vi inn dette uttrykket for $s$ i likning $\eq{II}$:

$$
2t + 2 = \underbrace{t - 5}_{=s} + 10 \liff 2t + 2 = t + 5 \liff t = 3
$$

Altså skjærer linjene hverandre når $t = 3$. Koordinatene til dette punktet er 

$$
\vec r_\ell(3) = [4 \cdot 3 + 1, 2 \cdot 3 + 2, 3 + 1] = [13, 8, 4]
$$

Altså skjærer linjene hverandre i $(13, 8, 4)$.
::::
:::::


:::::::::::::
:::::::::::::::





---




:::::::::::::::{exercise} Oppgave 10
Avgjør om påstandene nedenfor stemmer. Hvis du mener påstanden er feil, finn et moteksempel.


:::::::::::::{part} a
**Påstand**:

Gitt en linje $\ell$ med retningsvektor $\vec{v}_\ell$ og en linje $m$ med retningsvektor $\vec{v}_m$, så må linjene skjære hverandre dersom 

$$
\vec{v}_\ell \cdot \vec{v}_m = 0
$$


:::::{answer}
Usann.

::::{solution}
Gitt at $\vec{v}_\ell \cdot \vec{v}_m = 0$, så vet vi at retningsvektorene er ortogonale. Men linjene må ikke skjære hverandre siden de kan være vindskjeve. 
::::
:::::

:::::::::::::



:::::::::::::{part} b
**Påstand**:

Hvis den korteste avstanden mellom to linjer er lik $0$, så skjærer de hverandre i nøyaktig ett punkt.


:::::{answer}
Usann.

::::{solution}
Linjene kan være sammenfallende. Da vil linjene være samme linje. For at påstanden skal være sann, må de to linjene være ikke-parallelle.

::::
:::::

:::::::::::::


:::::::::::::{part} c
**Påstand**:

Gitt en linje $\ell$ med retningsvektor $\vec{v}_\ell$ og en linje $m$ med retningsvektor $\vec{v}_m$, så må linjene være parallelle dersom 

$$
\vec{v}_\ell \times \vec{v}_m = \vec{0}
$$


:::::{answer}
Sann.

::::{solution}
Dersom $\vec{v}_\ell \times \vec{v}_m = \vec{0}$, så er retningsvektorene parallelle. Dermed må også linjene være parallelle.

::::
:::::

:::::::::::::


:::::::::::::{part} d
**Påstand**:

Gitt en linje $\ell$ med retningsvektor $\vec{v}_\ell$ og en linje $m$ med retningsvektor $\vec{v}_m$, så er avstanden mellom de to linjene lik $0$ dersom

$$
\vec{v}_\ell \times \vec{v}_m = \vec{0}
$$


:::::{answer}
Usann.

::::{solution}
Hvis $\vec{v}_\ell \times \vec{v}_m = \vec{0}$, så er retningsvektorene parallelle, men avstanden mellom de to linjene kan være ulik $0$.

::::
:::::

:::::::::::::


:::::::::::::{part} e
**Påstand**:

La en linje $\ell$ være gitt ved 

$$
\vec{r}_\ell(t) = \lvec{OA} + \vec{v}_\ell \cdot t
$$

Da er linja $m$ gitt ved

$$
\vec{r}_m(t) = \vec{r}_\ell(2) + 3 \cdot \vec{v}_\ell \cdot t
$$

nøyaktig samme linje som $\ell$.



:::::{answer}
Sann.

::::{solution}
Vi har at $\vec{r}_\ell(2)$ er et punkt på linja $\ell$. Retningsvektoren til linja $m$ er gitt ved $\vec{v}_m = 3 \cdot \vec{v}_\ell$, som er parallell med retningsvektoren til linja $\ell$. 

Linjene er altså parallelle og går gjennom ett punkt som er felles. Men da må alle andre punkter være felles også. Altså må de to linjene være nøyaktig samme linje. Dermed er påstanden sann.
::::
:::::



:::::::::::::


:::::::::::::::
