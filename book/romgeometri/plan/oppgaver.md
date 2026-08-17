# Plan: Oppgaver




:::::::::::::::{exercise} Oppgave 1
:::::::::::::{part} a
Om et plan $\alpha$ får du vite at
* $\vec{n} = [2, 0, 1]$ er en normalvektor til planet
* $A(0, 1, 3)$ er et punkt i planet

Finn likningen til planet.


:::::{answer}
$$
2x + z - 3 = 0
$$

::::{solution}
La $P(x, y, z)$ være et vilkårlig punkt i planet. Da er 

$$
\lvec{AP} \cdot \vec{n} = 0
$$

$$
[x - 0, y - 1, z - 3] \cdot [2, 0, 1] = 0
$$

$$
2x + 0 \cdot (y - 1) + 1 \cdot (z - 3) = 0
$$

$$
2x + z - 3 = 0
$$
::::
:::::


:::::::::::::



:::::::::::::{part} b
Om et plan $\beta$ får du vite at
* $\vec{n} = [0, 0, 1]$ er en normalvektor til planet
* $B(1, 2, 3)$ er et punkt i planet

Bestem likningen til planet.


:::::{answer}
$$
z - 3 = 0
$$

::::{solution}
Vi lar $P(x, y, z)$ være et vilkårlig punkt i planet. Da er 

$$
\lvec{BP} \cdot \vec{n} = 0
$$

$$
[x - 1, y - 2, z - 3] \cdot [0, 0, 1] = 0
$$

$$
0 \cdot (x - 1) + 0 \cdot (y - 2) + 1 \cdot (z - 3) = 0
$$

$$
z - 3 = 0
$$
::::
:::::


:::::::::::::


:::::::::::::{part} c
Om et plan $\gamma$ får du vite at
* $\vec{n} = [-1, 2, 0]$ er en normalvektor til planet
* $C(1, 2, 3)$ er et punkt i planet

Finn likningen til planet.


:::::{answer}
$$
-x + 2y - 3 = 0
$$

::::{solution}
La $P(x, y, z)$ være et vilkårlig punkt i planet. Da er 

$$
\lvec{CP} \cdot \vec{n} = 0
$$

$$
[x - 1, y - 2, z - 3] \cdot [-1, 2, 0] = 0
$$

$$
-(x - 1) + 2(y - 2) + 0 \cdot (z - 3) = 0
$$

$$
-x + 1 + 2y - 4 = 0
$$

$$
-x + 2y - 3 = 0
$$
::::
:::::


:::::::::::::


:::::::::::::{part} d
Om et plan $\psi$ får du vite at
* $\vec{n} = [1, -1, 1]$ er en normalvektor til planet
* $D(1, 2, 3)$ er et punkt i planet

Bestem likningen til planet.


:::::{answer}
$$
x - y + z - 2 = 0
$$

::::{solution}
La $P(x, y, z)$ være et vilkårlig punkt i planet. Da er 

$$
\lvec{DP} \cdot \vec{n} = 0
$$

$$
[x - 1, y - 2, z - 3] \cdot [1, -1, 1] = 0
$$

$$
(x - 1) - (y - 2) + (z - 3) = 0
$$

$$
x - 1 - y + 2 + z - 3 = 0
$$

$$
x - y + z - 2 = 0
$$
::::
:::::


:::::::::::::


:::::::::::::::



---



:::::::::::::::{exercise} Oppgave 2
:::::::::::::{part} a
Punktene $A(4, 0, 1)$, $B(1, 2, 3)$ og $C(0, 1, 2)$ ligger i et plan $\alpha$. 

Finn likningen til planet.


:::::{answer}

$$
-y + z - 1 = 0
$$

::::{solution}
Vi trenger først å finne en normalvektor til planet. En normalvektor vil være parallell med kryssproduktet $\lvec{AB} \times \lvec{AC}$. Vi finner først de to vektorene:

$$
\lvec{AB} = [1 - 4, 2 - 0, 3 - 1] = [-3, 2, 2]
$$

$$
\lvec{AC} = [0 - 4, 1 - 0, 2 - 1] = [-4, 1, 1]
$$

Så finner vi kryssproduktet:

$$
\begin{align*}
\lvec{AB} \times \lvec{AC} &= \mqty|\vec{e}_x & \vec{e}_y & \vec{e}_z \\ -3 & 2 & 2 \\ -4 & 1 & 1| \\
\\
&= \vec{e}_x \cdot (2 \cdot 1 - 2 \cdot 1) - \vec{e}_y \cdot (-3 \cdot 1 - 2 \cdot (-4)) + \vec{e}_z \cdot (-3 \cdot 1 - 2 \cdot (-4)) \\
\\
&= \vec{e}_x \cdot (2 - 2) - \vec{e}_y \cdot (-3 + 8) + \vec{e}_z \cdot (-3 + 8) \\
\\
&= \vec{e}_x \cdot 0 - \vec{e}_y \cdot 5 + \vec{e}_z \cdot 5 \\
\\
&= [0, -5, 5] \\
\\
&= 5 \cdot [0, -1, 1]
\end{align*}
$$

Altså kan vi velge $\vec{n} = [0, -1, 1]$ som en normalvektor til planet. Vi kan nå bruke punktet $A(4, 0, 1)$ for å finne likningen til planet:

$$
\lvec{AP} \cdot \vec{n} = 0
$$

$$
[x - 4, y - 0, z - 1] \cdot [0, -1, 1] = 0
$$

$$
0 \cdot (x - 4) - 1 \cdot (y - 0) + 1 \cdot (z - 1) = 0
$$

$$
-y + z - 1 = 0
$$
::::
:::::


:::::::::::::


:::::::::::::{part} b
Punktene $A(1, 0, 0)$, $B(0, 1, 0)$ og $C(0, 0, 1)$ ligger i et plan $\beta$.

Bestem likningen til planet.


:::::{answer}
$$
x + y + z - 1 = 0
$$

::::{solution}
Vi finner først en normalvektor. En slik vektor er parallell med $\lvec{AB} \times \lvec{AC}$:

$$
\lvec{AB} = [0 - 1, 1 - 0, 0 - 0] = [-1, 1, 0]
$$

$$
\lvec{AC} = [0 - 1, 0 - 0, 1 - 0] = [-1, 0, 1]
$$

$$
\begin{align*}
\lvec{AB} \times \lvec{AC} &= \mqty|\vec{e}_x & \vec{e}_y & \vec{e}_z \\ -1 & 1 & 0 \\ -1 & 0 & 1| \\
\\
&= \vec{e}_x \cdot (1 \cdot 1 - 0 \cdot 0) - \vec{e}_y \cdot (-1 \cdot 1 - 0 \cdot (-1)) + \vec{e}_z \cdot (-1 \cdot 0 - 1 \cdot (-1)) \\
\\
&= \vec{e}_x \cdot (1 - 0) - \vec{e}_y \cdot (-1 - 0) + \vec{e}_z \cdot (0 + 1) \\
\\
&= \vec{e}_x + \vec{e}_y + \vec{e}_z \\
\\
&= [1, 1, 1]
\end{align*}
$$

Altså er en normalvektor til planet $\vec{n} = [1, 1, 1]$. Vi kan nå bruke punktet $A(1, 0, 0)$ for å finne likningen til planet:

$$
\lvec{AP} \cdot \vec{n} = 0
$$

$$
[x - 1, y - 0, z - 0] \cdot [1, 1, 1] = 0
$$

$$
(x - 1) + (y - 0) + (z - 0) = 0
$$

$$
x + y + z - 1 = 0
$$
::::
:::::


:::::::::::::


:::::::::::::{part} c
Punktene $A(-2, 1, 0)$, $B(3, 0, 0)$ og $C(0, -1, 1)$ ligger i et plan $\gamma$.

Finn likningen til planet.


:::::{answer}
$$
x + 5y + 8z - 3 = 0
$$

::::{solution}
Vi starter med å finne en normalvektor til planet. En slik vektor er parallell med $\lvec{AB} \times \lvec{AC}$:

$$
\lvec{AB} = [3 - (-2), 0 - 1, 0 - 0] = [5, -1, 0]
$$

$$
\lvec{AC} = [0 - (-2), -1 - 1, 1 - 0] = [2, -2, 1]
$$

$$
\begin{align*}
\lvec{AB} \times \lvec{AC} &= \mqty|\vec{e}_x & \vec{e}_y & \vec{e}_z \\ 5 & -1 & 0 \\ 2 & -2 & 1| \\
\\
&= \vec{e}_x \cdot ((-1) \cdot 1 - 0 \cdot (-2)) - \vec{e}_y \cdot (5 \cdot 1 - 0 \cdot 2) + \vec{e}_z \cdot (5 \cdot (-2) - (-1) \cdot 2) \\
\\
&= \vec{e}_x \cdot (-1 - 0) - \vec{e}_y \cdot (5 - 0) + \vec{e}_z \cdot (-10 + 2) \\
\\
&= -\vec{e}_x  - 5 \vec{e}_y - 8\vec{e}_z \\
\\
&= [-1, -5, -8] \\
\\
&= (-1) \cdot [1, 5, 8] \\
\end{align*}
$$

Altså er $\vec{n} = [1, 5, 8]$ en normalvektor til planet. Vi kan nå bruke punktet $A(-2, 1, 0)$ for å finne likningen til planet:

$$
\lvec{AP} \cdot \vec{n} = 0
$$

$$
[x - (-2), y - 1, z - 0] \cdot [1, 5, 8] = 0
$$

$$
(x + 2) + 5(y - 1) + 8(z - 0) = 0
$$

$$
x + 2 + 5y - 5 + 8z = 0
$$

$$
x + 5y + 8z - 3 = 0
$$
::::
:::::


:::::::::::::


:::::::::::::::



---



:::::::::::::::{exercise} Oppgave 3
Planet $\alpha$ er gitt ved likningen

$$
2x - y + 3z - 5 = 0
$$

:::::::::::::{part} a


Finn en normalvektor til planet.



:::{hint} Hint
En normalvektor kan leses av fra planlikningen ved å se på koeffisientene til $x$, $y$ og $z$.
:::

:::::{answer}
$$
\vec{n} = [2, -1, 3]
$$

::::{solution}
Fra koeffisientene i planlikningen

$$
ax + by + cz + d = 0
$$

kan vi lese at 

$$
a = 2 \and b = -1 \and c = 3
$$

Normalvektoren er da gitt ved

$$
\vec{n} = [a, b, c] = [2, -1, 3]
$$
::::
:::::

:::::::::::::


:::::::::::::{part} b
Finn et punkt som ligger i planet.


:::{hint} Hint
Du kan sette to av koordinatene til punktet lik $0$, og deretter bruke planlikningen til å løse for den siste koordinaten. 
:::


:::::{answer}
For eksempel: $\left(0, 0, \dfrac{5}{3}\right)$

::::{solution}
For å finne et punkt i planet, kan vi sette to av koordinatene lik $0$. For eksempel kan vi sette $x = y = 0$. Med planlikningen får vi da:

$$
2 \cdot 0 - 0 + 3z - 5 = 0
$$

$$
3z - 5 = 0 \liff z = \dfrac{5}{3}
$$

Altså er punktet $\left(0, 0, \dfrac{5}{3}\right)$ et punkt som ligger i planet.
::::
:::::


:::::::::::::



:::::::::::::{part} c
Avgjør om punktet $A(4, 3, 1)$ ligger i planet.



:::{hint} Hint
Koordinatene til punktet må oppfylle planlikningen for at punktet skal ligge i planet.
:::

:::::{answer}
Punktet ligger ikke i planet.

::::{solution}
Vi setter inn koordinatene til $A$ i planlikningen og sjekker om likningen er tilfredsstilt:

$$
2 \cdot 4 - 3 + 3 \cdot 1 - 5 = 8 - 3 + 3 - 5 = 3 \neq 0
$$

Altså er ikke planlikningen tilfredsstilt, så punktet $A$ ligger ikke i planet.
::::
:::::



:::::::::::::


:::::::::::::::



---



:::::::::::::::{exercise} Oppgave 4
Et plan $\beta$ er gitt ved likningen

$$
-x + 3y - 2z + 6 = 0
$$


:::::::::::::{part} a
Finn en normalvektor til planet.


:::::{answer}
$$
\vec{n} = [-1, 3, -2]
$$

::::{solution}
For en planlikning på formen

$$
ax + by + cz + d = 0
$$

er en normalvektor gitt ved $\vec{n} = [a, b, c]$. I dette tilfellet er 

$$
a = -1 \and b = 3 \and c = -2
$$

så en normalvektor til planet er gitt ved 

$$
\vec{n} = [-1, 3, -2]
$$
::::


:::::

:::::::::::::


:::::::::::::{part} b
Finn et punkt som ligger i planet.



:::::{answer}
For eksempel: $(0, 0, 3)$

::::{solution}
Vi setter to av koordinatene lik $0$ i planlikningen, og løser for den siste koordinaten. Vi setter $x = y = 0$ som gir:

$$
-0 + 3 \cdot 0 - 2z + 6 = 0
$$

som gir 

$$
2z = 6 \liff z = 3
$$

Altså ligger punktet $(0, 0, 3)$ i planet.
::::
:::::



:::::::::::::


:::::::::::::{part} c
Avgjør om punktet $A(1, 0, 4)$ ligger i planet.


:::::{answer}
Nei, $A$ ligger ikke i planet.

::::{solution}
Vi setter inn koordinatene til punktet $A$ i planlikningen og sjekker om den er oppfylt:

$$
-1 + 3 \cdot 0 - 2 \cdot 4 + 6 = -1 - 8 + 6 = -3 \neq 0
$$

Planlikningen er ikke oppfylt, så punktet $A$ ligger ikke i planet.
::::
:::::


:::::::::::::




:::::::::::::::


---



:::::::::::::::{exercise} Oppgave 5
:::::::::::::{part} a
Om et plan $\alpha$ får du vite at 
* $\vec{n} = [1, 4, 2]$ er en normalvektor til planet
* $A(1, 2, 3)$ er et punkt i planet

Finn avstanden fra punktet $B(4, 5, 6)$ til planet $\alpha$.



:::::{answer}
$$
L = \sqrt{21}
$$

::::{solution}
Gitt et punkt $A$ i planet og et punkt $B$ utenfor planet, så er avstanden fra planet til punktet gitt ved

$$
L = \dfrac{|\lvec{AB} \cdot \vec{n}|}{\abs{\vec{n}}}
$$

Vi finner først vektoren $\lvec{AB}$:

$$
\lvec{AB} = [4 - 1, 5 - 2, 6 - 3] = [3, 3, 3]
$$

Deretter regner vi ut prikkproduktet $\lvec{AB} \cdot \vec{n}$:

$$
\lvec{AB} \cdot \vec{n} = [3, 3, 3] \cdot [1, 4, 2] = 3 \cdot 1 + 3 \cdot 4 + 3 \cdot 2 = 3 + 12 + 6 = 21
$$

Lengden av normalvektoren er 

$$
\abs{\vec{n}} = \sqrt{1^2 + 4^2 + 2^2} = \sqrt{1 + 16 + 4} = \sqrt{21}
$$

Altså er avstanden fra punktet $B$ til planet $\alpha$ gitt ved

$$
L = \dfrac{|\lvec{AB} \cdot \vec{n}|}{\abs{\vec{n}}} = \dfrac{|21|}{\sqrt{21}} = \sqrt{21}
$$
::::
:::::



:::::::::::::



:::::::::::::{part} b
Om et plan $\beta$ får du vite at
* $\vec{n} = [2, -1, 3]$ er en normalvektor til planet
* $C(1, 0, 2)$ er et punkt i planet

Bestem avstanden fra punktet $D(1, -2, 1)$ til planet $\beta$.


:::::{answer}
$$
L = \dfrac{\sqrt{14}}{14}
$$

::::{solution}
Gitt punktet $C$ i planet og punktet $D$ utenfor planet, så er avstanden fra $D$ til planet gitt ved 

$$
L = \dfrac{|\lvec{CD} \cdot \vec{n}|}{\abs{\vec{n}}}
$$

Vi finner først vektoren $\lvec{CD}$:

$$
\lvec{CD} = [1 - 1, -2 - 0, 1 - 2] = [0, -2, -1]
$$

Deretter regner vi ut prikkproduktet $\lvec{CD} \cdot \vec{n}$:

$$
\lvec{CD} \cdot \vec{n} = [0, -2, -1] \cdot [2, -1, 3] = 0 \cdot 2 + (-2) \cdot (-1) + (-1) \cdot 3 = 0 + 2 - 3 = -1
$$

Lengden av normalvektoren er

$$
\abs{\vec{n}} = \sqrt{2^2 + (-1)^2 + 3^2} = \sqrt{4 + 1 + 9} = \sqrt{14}
$$

Altså er avstanden fra punktet $D$ til planet $\beta$ gitt ved

$$
L = \dfrac{|\lvec{CD} \cdot \vec{n}|}{\abs{\vec{n}}} = \dfrac{|-1|}{\sqrt{14}} = \dfrac{1}{\sqrt{14}} = \dfrac{\sqrt{14}}{14}
$$
::::
:::::


:::::::::::::



:::::::::::::{part} c
Om et plan $\gamma$ får du vite at
* $\vec{n} = [0, 1, 1]$ er en normalvektor til planet.
* $E(0, 0, 0)$ er et punkt i planet

Finn avstanden fra punktet $F(1, 5, 3)$ til planet $\gamma$.



:::::{answer}
$$
L = 4\sqrt{2}
$$

::::{solution}
Gitt et punkt $E$ i planet og et punkt $F$ utenfor planet, så er avstanden fra $F$ til planet gitt ved 

$$
L = \dfrac{|\lvec{EF} \cdot \vec{n}|}{\abs{\vec{n}}}
$$


Vi finner først vektoren $\lvec{EF}$:

$$
\lvec{EF} = [1 - 0, 5 - 0, 3 - 0] = [1, 5, 3]
$$

Deretter regner vi ut prikkproduktet $\lvec{EF} \cdot \vec{n}$:

$$
\lvec{EF} \cdot \vec{n} = [1, 5, 3] \cdot [0, 1, 1] = 1 \cdot 0 + 5 \cdot 1 + 3 \cdot 1 = 0 + 5 + 3 = 8
$$

Lengden av normalvektoren er

$$
\abs{\vec{n}} = \sqrt{0^2 + 1^2 + 1^2} = \sqrt{0 + 1 + 1} = \sqrt{2}
$$

Altså er avstanden fra punktet $F$ til planet $\gamma$ gitt ved

$$
L = \dfrac{|\lvec{EF} \cdot \vec{n}|}{\abs{\vec{n}}} = \dfrac{|8|}{\sqrt{2}} = \dfrac{8}{\sqrt{2}} = 4\sqrt{2}
$$
::::
:::::


:::::::::::::


:::::::::::::::


---



:::::::::::::::{exercise} Oppgave 6
:::::::::::::{part} a
Et plan $\alpha$ er gitt ved likningen

$$
4x - 2y + z - 6 = 0
$$

Finn avstanden fra punktet $A(1, 0, 3)$ til planet $\alpha$.


:::::{answer}
$$
L = \dfrac{\sqrt{21}}{21}
$$

::::{solution}
Vi bruker formelen

$$
L = \dfrac{|ax + by + cz + d|}{\sqrt{a^2 + b^2 + c^2}}
$$

der 

$$
a = 4 \and b = -2 \and c = 1 \and d = -6
$$

Vi setter inn koordinatene til punktet $A(1, 0, 3)$:

$$
\begin{align*}
L &= \dfrac{|4 \cdot 1 - 2 \cdot 0 + 1 \cdot 3 - 6|}{\sqrt{4^2 + (-2)^2 + 1^2}} \\
\\
&= \dfrac{|4 + 0 + 3 - 6|}{\sqrt{16 + 4 + 1}} \\
\\
&= \dfrac{|1|}{\sqrt{21}} \\
\\
&= \dfrac{\sqrt{21}}{21}
\end{align*}
$$
::::
:::::

:::::::::::::


:::::::::::::{part} b
Et plan $\beta$ er gitt ved likningen

$$
-2x + y + z + 4 = 0
$$

Finn avstanden fra punktet $B(3, 2, 5)$ til planet $\beta$.


:::::{answer}
$$
L = \dfrac{5\sqrt{6}}{6}
$$

::::{solution}
Vi bruker formelen

$$
L = \dfrac{|ax + by + cz + d|}{\sqrt{a^2 + b^2 + c^2}}
$$

der 

$$
a = -2 \and b = 1 \and c = 1 \and d = 4
$$

Vi setter inn koordinatene til punktet $B(3, 2, 5)$ i formelen og regner ut:

$$
\begin{align*}
L &= \dfrac{|-2 \cdot 3 + 1 \cdot 2 + 1 \cdot 5 + 4|}{\sqrt{(-2)^2 + 1^2 + 1^2}} \\
\\
&= \dfrac{|-6 + 2 + 5 + 4|}{\sqrt{4 + 1 + 1}} \\
\\
&= \dfrac{|5|}{\sqrt{6}} \\
\\
&= \dfrac{5\sqrt{6}}{6}
\end{align*}
$$
::::
:::::

:::::::::::::


:::::::::::::{part} c
Et plan $\gamma$ er gitt ved likningen

$$
x + 2y - 3z + 2 = 0
$$


Finn avstanden fra punktet $C(0, 1, 6)$ til planet $\gamma$.


:::::{answer}
$$
L = \sqrt{14}
$$

::::{solution}
Vi bruker formelen

$$
L = \dfrac{|ax + by + cz + d|}{\sqrt{a^2 + b^2 + c^2}}
$$

der 

$$
a = 1 \and b = 2 \and c = -3 \and d = 2
$$

Vi setter inn koordinatene til punktet $C(0, 1, 6)$ i formelen og regner ut:

$$
\begin{align*}
L &= \dfrac{|1 \cdot 0 + 2 \cdot 1 - 3 \cdot 6 + 2|}{\sqrt{1^2 + 2^2 + (-3)^2}} \\
\\
&= \dfrac{|0 + 2 - 18 + 2|}{\sqrt{1 + 4 + 9}} \\
\\
&= \dfrac{|-14|}{\sqrt{14}} \\
\\
&= \dfrac{14}{\sqrt{14}} \\
\\
&= \sqrt{14}
\end{align*}
$$
::::
:::::



:::::::::::::


:::::::::::::::



---


:::::::::::::::{exercise} Oppgave 7
Planet $\alpha$ er gitt ved likningen

$$
-x + 2y - z + 3 = 0
$$


:::::::::::::{part} a
Finn en normalvektor til planet.


:::::{answer}
$$
\vec{n} = [-1, 2, -1]
$$

::::{solution}
Fra planlikningen $ax + by + cz + d = 0$, vil $\vec{n} = [a, b, c]$ være en normalvektor til planet. Her er 

$$
a = -1 \and b = 2 \and c = -1
$$

som betyr at en normalvektor er gitt ved:

$$
\vec{n} = [-1, 2, -1]
$$
::::
:::::

:::::::::::::


:::::::::::::{part} b
Finn et punkt som ligger i $\alpha$. 



:::::{answer}
For eksempel $(0, 0, 3)$.

::::{solution}
Vi setter to av koordinatene lik $0$ og løser for den siste ved sette inn i planlikningen. Vi lar $x = y = 0$ som gir:

$$
0 + 2 \cdot 0 - z + 3 = 0 \liff -z + 3 = 0 \liff z = 3
$$

Altså er $(0, 0, 3)$ et punkt som ligger i $\alpha$.
::::
:::::






:::::::::::::




:::::::::::::{part} c
Et annet plan $\gamma$ er parallelt med planet $\alpha$ og avstanden mellom de to planene er lik $\sqrt{6}$.

Finn de to mulige likningene for planet $\gamma$.


:::::{answer}
$$
-x + 2y - z + 2 = 0 \qeller -x + 2y - z + 4 = 0
$$

::::{solution}
Siden $\gamma \parallel \alpha$, så er $\vec{n} = [-1, 2, -1]$ også en normalvektor for $\gamma$. For å finne et punkt $P$ som ligger i $\gamma$, kan vi derfor gå ut ifra punktet $A(0, 0 3)$ fra oppgave **b** og følge normalvektoren en avstand $\sqrt{6}$ i hver sin retning langs normalvektoren.

De to punktene finner vi ved å følge en enhetsnormalvektor en avstand $\sqrt{6}$ i hver retning:

$$
\lvec{OQ}_\pm = \lvec{OA} \pm \sqrt{6} \cdot \dfrac{\vec{n}}{\abs{\vec{n}}}
$$

Lengden av normalvektoren er

$$
\abs{\vec{n}} = \sqrt{(-1)^2 + 2^2 + (-1)^2} = \sqrt{1 + 4 + 1} = \sqrt{6}
$$

Altså får vi 

$$
\lvec{OQ}_\pm = \lvec{OA} \pm \sqrt{6} \cdot \dfrac{\vec{n}}{\sqrt{6}} = \lvec{OA} \pm \vec{n}
$$

Vi regner ut de to mulige punktene:

$$
\begin{align*}
\lvec{OQ}_+ &= \lvec{OA} + \vec{n} \\
\\
&= [0, 0, 3] + [-1, 2, -1] \\
\\
&= [-1, 2, 2]
\end{align*}
$$

$$
\begin{align*}
\lvec{OQ}_- &= \lvec{OA} - \vec{n} \\
\\
&= [0, 0, 3] - [-1, 2, -1] \\
\\
&= [1, -2, 4]
\end{align*}
$$


Med det første punktet $Q_+$ blir planlikningen til $\gamma$ gitt ved:

$$
\lvec{Q_+P} \cdot \vec{n} = 0
$$

$$
[x + 1, y - 2, z - 2] \cdot [-1, 2, -1] = 0
$$

$$
-x + 2y - z + 2 = 0
$$

Med det andre punktet $Q_-$ blir planlikningen til $\gamma$ gitt ved:

$$
\lvec{Q_-P} \cdot \vec{n} = 0
$$

$$
[x - 1, y + 2, z - 4] \cdot [-1, 2, -1] = 0
$$

$$
-x + 2y - z - 2 = 0
$$







::::
:::::


:::::::::::::

:::::::::::::::


---
 



:::::::::::::::{exercise} Oppgave 8
Et plan $\alpha$ har likningen

$$
3x - 2y + z - 8 = 0
$$

:::::::::::::{part} a

En linje $\ell$ er parallell med planet og går gjennom punktet $A(0, 0, 7)$. 

Bestem avstanden mellom planet og linja.


:::::{answer}
$$
L = \dfrac{\sqrt{14}}{14}
$$

::::{solution}
Vi bruker formelen for avstanden mellom et punkt og et plan. Vi kan velge et punkt på linja $\ell$, for eksempel punktet $A(0, 0, 7)$. Avstanden mellom planet $\alpha$ og punktet $A$ er gitt ved

$$
\begin{align*}
L &= \dfrac{|3 \cdot 0 - 2 \cdot 0 + 1 \cdot 7 - 8|}{\sqrt{3^2 + (-2)^2 + 1^2}} \\
\\
&= \dfrac{|0 - 0 + 7 - 8|}{\sqrt{9 + 4 + 1}} \\
\\
&= \dfrac{|-1|}{\sqrt{14}} \\
\\
&= \dfrac{1}{\sqrt{14}} \\
\\
&= \dfrac{\sqrt{14}}{14}
\end{align*}
$$
::::
:::::

:::::::::::::



:::::::::::::{part} b
Et plan $\beta$ er parallell med $\alpha$ og inneholder punktet $B(3, 1, -7)$.


Finn avstanden mellom $\alpha$ og $\beta$.


:::::{answer}
$$
L = \dfrac{4\sqrt{14}}{7}
$$


::::{solution}
Vi bruker formelen for avstanden fra punktet $B$ til planet $\alpha$: 

$$
\begin{align*}
L &= \dfrac{|3 \cdot 3 - 2 \cdot 1 + 1 \cdot (-7) - 8|}{\sqrt{3^2 + (-2)^2 + 1^2}} \\
\\
&= \dfrac{|9 - 2 - 7 - 8|}{\sqrt{9 + 4 + 1}} \\
\\
&= \dfrac{|-8|}{\sqrt{14}} \\
\\
&= \dfrac{8}{\sqrt{14}} \\
\\
&= \dfrac{4\sqrt{14}}{7}
\end{align*}
$$
::::
:::::


:::::::::::::



:::::::::::::::



---




:::::::::::::::{exercise} Oppgave 9
Et plan $\alpha$ inneholder punktene $A(2, 3, -7)$, $B(-2, 1, -3)$ og $C(3, 5, -5)$.


:::::::::::::{part} a
Bestem likningen til $\alpha$.



:::::{answer}
$$
2x - 2y + z + 9 = 0
$$

::::{solution}
Først finner vi en normalvektor til planet. En slik vektor er parallell med kryssproduktet $\lvec{AB} \times \lvec{AC}$.

$$
\lvec{AB} = [-2 - 2, 1 - 3, -3 - (-7)] = [-4, -2, 4]
$$

$$
\lvec{AC} = [3 - 2, 5 - 3, -5 - (-7)] = [1, 2, 2]
$$

$$
\lvec{AB} \times \lvec{AC} = \mqty[-4 \\ -2 \\ 4] \times \mqty[1 \\ 2 \\ 2] = \mqty[(-2)\cdot 2 - 4\cdot 2 \\ -( -4\cdot 2 - 4\cdot 1) \\ -4\cdot 2 - (-2)\cdot 1] = \mqty[-4 - 8 \\ -(-8 - 4) \\ -8 + 2] = \mqty[-12 \\ 12 \\ -6] = -6 \mqty[2 \\ -2 \\ 1]
$$

Altså er $\vec{n} = [2, -2, 1]$ en normalvektor til planet. Vi kan nå bruke punktet $A(2, 3, -7)$ for å finne likningen til planet:

$$
\lvec{AP} \cdot \vec{n} = 0
$$

$$
[x - 2, y - 3, z - (-7)] \cdot [2, -2, 1] = 0
$$

$$
2(x - 2) - 2(y - 3) + 1(z + 7) = 0
$$

$$
2x - 4 - 2y + 6 + z + 7 = 0
$$

$$
2x - 2y + z + 9 = 0
$$
::::
:::::

:::::::::::::



En linje $\ell$ går gjennom punktene $P(3, 1, -2)$ og $Q(6, 3, -4)$.


:::::::::::::{part} b
Vis at $\ell$ er parallell med $\alpha$.



:::::{answer}
Retningsvektoren $\vec{v}$ til linja og normalvektoren $\vec{n}$ til tilfredsstiller at 

$$
\vec{v} \cdot \vec{n} = 0
$$

som betyr at linja og planet er parallelle.

::::{solution}
En retningsvektor for linja er gitt ved 

$$
\lvec{v} = \lvec{PQ} = [6 - 3, 3 - 1, -4 - (-2)] = [3, 2, -2]
$$

Dersom linja $\ell$ er parallell med $\alpha$, så må 

$$
\vec{v} \cdot \vec{n} = 0
$$

Vi sjekker at dette kravet er oppfylt:

$$
[3, 2, -2] \cdot [2, -2, 1] = 3 \cdot 2 + 2 \cdot (-2) + (-2) \cdot 1 = 6 - 4 - 2 = 0
$$

Altså er linja $\ell$ parallell med planet $\alpha$.
::::
:::::

:::::::::::::


:::::::::::::{part} c
Bestem avstanden fra $\ell$ til $\alpha$.


:::::{answer}
$$
L = \dfrac{11}{3}
$$

::::{solution}
Punktet $A(2, 3, -7)$ ligger i planet og punktet $P(3, 1, -2)$ ligger på linja. Avstanden fra linja til planet er da gitt ved 

$$
L = \dfrac{|\lvec{AP} \cdot \vec{n}|}{\abs{\vec{n}}}
$$

Vi finner først vektoren $\lvec{AP}$:

$$
\lvec{AP} = [3 - 2, 1 - 3, -2 - (-7)] = [1, -2, 5]
$$

Deretter regner vi ut prikkproduktet $\lvec{AP} \cdot \vec{n}$:

$$
\lvec{AP} \cdot \vec{n} = [1, -2, 5] \cdot [2, -2, 1] = 1 \cdot 2 + (-2) \cdot (-2) + 5 \cdot 1 = 2 + 4 + 5 = 11
$$

Lengden av normalvektoren er

$$
\abs{\vec{n}} = \sqrt{2^2 + (-2)^2 + 1^2} = \sqrt{4 + 4 + 1} = \sqrt{9} = 3
$$

Altså er avstanden fra linja $\ell$ til planet $\alpha$ gitt ved

$$
L = \dfrac{|\lvec{AP} \cdot \vec{n}|}{\abs{\vec{n}}} = \dfrac{|11|}{3} = \dfrac{11}{3}
$$
::::
:::::

:::::::::::::



:::::::::::::::




---



:::::::::::::::{exercise} Oppgave 10
Punktene $A(0, 0, 0)$, $B(1, 1, 1)$, $C(-1, 2, 3)$ ligger i et plan $\alpha$.

:::::::::::::{part} a
Finn likningen til $\alpha$.



:::::{answer}
$$
x - 4y + 3z = 0
$$

::::{solution}
Vi finner først en normalvektor til planet. Enhver normalvektor til planet er parallell med $\lvec{AB} \times \lvec{AC}$: 

$$
\lvec{AB} = [1 - 0, 1 - 0, 1 - 0] = [1, 1, 1]
$$

$$
\lvec{AC} = [-1 - 0, 2 - 0, 3 - 0] = [-1, 2, 3]
$$

$$
\begin{align*}
\lvec{AB} \times \lvec{AC} &= \mqty|\vec{e}_x & \vec{e}_y & \vec{e}_z \\ 1 & 1 & 1 \\ -1 & 2 & 3| \\
\\
&= \vec{e}_x \cdot (1 \cdot 3 - 1 \cdot 2) - \vec{e}_y \cdot (1 \cdot 3 - 1 \cdot (-1)) + \vec{e}_z \cdot (1 \cdot 2 - 1 \cdot (-1)) \\
\\
&= \vec{e}_x \cdot (3 - 2) - \vec{e}_y \cdot (3 + 1) + \vec{e}_z \cdot (2 + 1) \\
\\
&= \vec{e}_x - 4\vec{e}_y + 3\vec{e}_z \\
\\
&= [1, -4, 3]
\end{align*}
$$

Altså er en mulig normalvektor gitt ved $\vec{n} = [1, -4, 3]$. Vi kan nå bruke punktet $A(0, 0, 0)$ for å finne likningen til planet:

$$
\lvec{AP} \cdot \vec{n} = 0
$$

$$
[x - 0, y - 0, z - 0] \cdot [1, -4, 3] = 0
$$

$$
x - 4y + 3z = 0
$$

::::
:::::




:::::::::::::


Et punkt $T(3, -1, 8)$ ligger ikke i planet $\alpha$.

:::::::::::::{part} b
Finn avstanden fra $T$ til $\alpha$.



:::::{answer}
$$
L = \dfrac{31\sqrt{26}}{26}
$$

::::{solution}
Avstanden fra fra $T$ til $\alpha$ kan bestemme ved: 

$$
L = \dfrac{|\lvec{AT} \cdot \vec{n}|}{\abs{\vec{n}}}
$$

Vi har at 

$$
\lvec{AT} = [3 - 0, -1 - 0, 8 - 0] = [3, -1, 8]
$$

Prikkproduktet blir da 

$$
\lvec{AT} \cdot \vec{n} = [3, -1, 8] \cdot [1, -4, 3] = 3 \cdot 1 + (-1) \cdot (-4) + 8 \cdot 3 = 3 + 4 + 24 = 31
$$

Lengden av normalvektoren er

$$
\abs{\vec{n}} = \sqrt{1^2 + (-4)^2 + 3^2} = \sqrt{1 + 16 + 9} = \sqrt{26}
$$

Altså er avstanden fra $T$ til $\alpha$ gitt ved

$$
L = \dfrac{|\lvec{AT} \cdot \vec{n}|}{\abs{\vec{n}}} = \dfrac{|31|}{\sqrt{26}} = \dfrac{31}{\sqrt{26}} = \dfrac{31\sqrt{26}}{26}
$$
::::
:::::

:::::::::::::


Punktene danner en pyramide $ABCT$. 


:::::::::::::{part} c
Finn volumet til pyramiden.


:::::{answer}
$$
V = \dfrac{31}{6}
$$

::::{solution}
Grunnflaten i pyramiden har areal $G = \dfrac{1}{2}|\lvec{AB} \times \lvec{AC}|$. Denne er gitt ved: 

$$
G = \dfrac{1}{2}|\lvec{AB} \times \lvec{AC}| = \dfrac{1}{2}\sqrt{1^2 + (-4)^2 + 3^2} = \dfrac{1}{2}\sqrt{1 + 16 + 9} = \dfrac{1}{2}\sqrt{26}
$$

Høyden i pyramiden er lik avstanden fra punktet $T$ til planet $\alpha$, som vi fant i deloppgave **b**. Dermed er volumet av pyramiden gitt ved: 

$$
V = \dfrac{1}{3} G h = \dfrac{1}{3} \cdot \dfrac{1}{2}\sqrt{26} \cdot \dfrac{31\sqrt{26}}{26} = \dfrac{1}{6} \cdot \dfrac{31 \cdot 26}{26} = \dfrac{31}{6}
$$
::::
:::::

:::::::::::::


:::::::::::::::



---



:::::::::::::::{exercise} Oppgave 11

:::::::::::::{part} a
Et plan $\alpha$ er gitt ved likningen

$$
x - y - 2z - 1 = 0
$$

En linje $\ell$ er gitt ved 

$$
\vec{r}(t) = \mqty[-1 + t, 8 - t, 7 - 2t]
$$


Finn koordinatene til skjæringspunktet $P$ mellom $\alpha$ og $\ell$.


:::::{answer}
$$
P(3, 4, -1)
$$

::::{solution}
Vi setter inn komponentene til linja i planlikningen og løser for $t$:

$$
\underbrace{(-1 + t)}_{\displaystyle x} - \underbrace{(8 - t)}_{\displaystyle y} - 2\cdot \underbrace{(7 - 2t)}_{\displaystyle z} - 1 = 0
$$

$$
t - 1 - 8 + t - 14 + 4t - 1 = 0
$$

$$
6t - 24 = 0
$$

$$
t = 4
$$

Så setter vi inn $t$-verdien i posisjonsvektoren til linja for å finne skjæringspunktet $P$:

$$
\lvec{OP} = \vec{r}(4) = \mqty[-1 + 4, 8 - 4, 7 - 2 \cdot 4] = \mqty[3, 4, -1]
$$

Altså er skjæringspunktet gitt ved $P(3, 4, -1)$.

::::
:::::



:::::::::::::



:::::::::::::{part} b
Et plan $\beta$ er gitt ved likningen

$$
4x - y - z + 1 = 0
$$

En linje $m$ er gitt ved

$$
\vec{r}(t) = [2 + 2t, 1 + 3t, 4 + t]
$$

Finn koordinatene til skjæringspunktet $Q$ mellom $\beta$ og $m$.


:::::{answer}
$$
Q(0, -2, 3)
$$
::::{solution}
Vi setter inn komponentene til linja i planlikningen og løser for $t$:

$$
4\cdot \underbrace{(2 + 2t)}_{\displaystyle x} - \underbrace{(1 + 3t)}_{\displaystyle y} - \underbrace{(4 + t)}_{\displaystyle z} + 1 = 0
$$

$$
8 + 8t - 1 - 3t - 4 - t + 1 = 0
$$

$$
4t + 4 = 0
$$

$$
t = -1
$$

Så setter vi inn $t$-verdien i posisjonsvektoren til linja for å finne skjæringspunktet $Q$:

$$
\lvec{OQ} = \vec{r}(-1) = [2 + 2(-1), 1 + 3(-1), 4 + (-1)] = [2 - 2, 1 - 3, 4 - 1] = [0, -2, 3]
$$

Altså er skjæringspunktet gitt ved $Q(0, -2, 3)$.
::::
:::::


:::::::::::::


:::::::::::::{part} c
Et plan $\gamma$ er gitt ved likningen

$$
x + y + z - 14 = 0
$$

En linje $n$ er gitt ved

$$
\vec{r}(t) = [1 + t, 2 + 2t, 3 + t]
$$


Finn koordinatene til skjæringspunktet $R$ mellom $\gamma$ og $n$.


:::::{answer}
$$
R(3, 6, 5)
$$

::::{solution}
Vi setter inn komponentene til linja i planlikningen og løser for $t$:

$$
\underbrace{(1 + t)}_{\displaystyle x} + \underbrace{(2 + 2t)}_{\displaystyle y} + \underbrace{(3 + t)}_{\displaystyle z} - 14 = 0
$$

$$
1 + t + 2 + 2t + 3 + t - 14 = 0
$$

$$
4t - 8 = 0 \liff t = 2
$$

Så setter vi inn $t$-verdien i posisjonsvektoren til linja for å finne skjæringspunktet $R$:

$$
\lvec{OR} = \vec{r}(2) = [1 + 2, 2 + 2 \cdot 2, 3 + 2] = [3, 6, 5]
$$

Altså er skjæringspunktet gitt ved $R(3, 6, 5)$.


::::
:::::


:::::::::::::


:::::::::::::::



---




:::::::::::::::{exercise} Oppgave 12
:::::::::::::{part} a
To plan er gitt ved likningene

$$
\begin{align*}
\alpha &: \quad x - 2y + z - 12 = 0 \\
\\
\beta &: \quad 2x + y - z + 1 = 0
\end{align*}
$$


Punktet $A(3, -2, 5)$ ligger i begge plan.

Finn en parameterframstilling for skjæringslinja mellom $\alpha$ og $\beta$.


:::::{answer}
$$
\vec{r}_\ell(t) = [3 + t, -2 + 3t, 5 + 5t]
$$

::::{solution}
Retningsvektoren $\vec{v}_\ell$ til linja må stå ortogonalt på normalvektorene til begge plan. Dermed har vi 

$$
\begin{align*}
\vec{v}_\ell &= \vec{n}_\alpha \times \vec{n}_\beta = \mqty|\vec{e}_x & \vec{e}_y & \vec{e}_z \\ 1 & -2 & 1 \\ 2 & 1 & -1| \\
\\
&= \vec{e}_x \cdot (-2 \cdot -1 - 1 \cdot 1) - \vec{e}_y \cdot (1 \cdot -1 - 1 \cdot 2) + \vec{e}_z \cdot (1 \cdot 1 - (-2) \cdot 2) \\
\\
&= \vec{e}_x \cdot (2 - 1) - \vec{e}_y \cdot (-1 - 2) + \vec{e}_z \cdot (1 + 4) \\
\\
&= \vec{e}_x + 3\vec{e}_y + 5\vec{e}_z \\
\\
&= [1, 3, 5]
\end{align*}
$$

Gitt punktet $A(3, -2, 5)$, er en parameterframstilling for linja da gitt ved 

$$
\begin{align*}
\vec{r}_\ell(t) &= \lvec{OA} + \vec{v}_\ell \cdot t  \\
\\
&= [3, -2, 5] + [1, 3, 5] \cdot t \\
\\
&= [3 + t, -2 + 3t, 5 + 5t]
\end{align*}
$$


::::
:::::


:::::::::::::



:::::::::::::{part} b
Et plan $\alpha$ er gitt ved

$$
4x - 2y + z - 10 = 0
$$

Et plan $\beta$ står ortogonalt på $\alpha$. Skjæringslinja $\ell$ mellom de to planene er gitt ved

$$
\vec{r}_\ell(t) = [t, 2t, 10]
$$


Finn likningen til planet $\beta$.


:::::{answer}
$$
-2x + y + 10z - 100 = 0
$$

::::{solution}
En normalvektor til planet vil stå ortogonalt på både normalvektoren til planet $\alpha$ og retningsvektoren til linja $\ell$. Dermed har vi

$$
\begin{align*}
\vec{n}_\beta &= \vec{n}_\alpha \times \vec{v}_\ell = \mqty|\vec{e}_x & \vec{e}_y & \vec{e}_z \\ 4 & -2 & 1 \\ 1 & 2 & 0| \\
\\
&= \vec{e}_x \cdot (-2 \cdot 0 - 1 \cdot 2) - \vec{e}_y \cdot (4 \cdot 0 - 1 \cdot 1) + \vec{e}_z \cdot (4 \cdot 2 - (-2) \cdot 1) \\
\\
&= \vec{e}_x \cdot (0 - 2) - \vec{e}_y \cdot (0 - 1) + \vec{e}_z \cdot (8 + 2) \\
\\
&= -2\vec{e}_x + \vec{e}_y + 10\vec{e}_z \\
\\
&= [-2, 1, 10]
\end{align*}
$$

Et punkt som ligger i planet $\beta$ er for eksempel:

$$
\lvec{OA} = \vec{r}_\ell(0) = [0, 0, 10]
$$

Dermed er likningen til planet $\beta$ gitt ved

$$
\lvec{AP} \cdot \vec{n}_\beta = 0
$$

$$
[x, y, z - 10] \cdot [-2, 1, 10] = 0
$$

$$
-2x + y + 10(z - 10) = 0
$$

$$
-2x + y + 10z - 100 = 0
$$

::::
:::::




:::::::::::::


:::::::::::::::


