# Kuler: Oppgaver


:::::::::::::::{exercise} Oppgave 1
:::::::::::::{part} a
En kule har sentrum $S(3, 1, -2)$ og radius $r = 5$. 

Finn likningen til kulen.


:::::{answer}
$$
(x - 3)^2 + (y - 1)^2 + (z + 2)^2 = 25
$$

::::{solution}
Likningen til en kule med sentrum $S(x_0, y_0, z_0)$ og radius $r$ er gitt ved 

$$
(x - x_0)^2 + (y - y_0)^2 + (z - z_0)^2 = r^2
$$

Vi setter inn verdiene og får:

$$
(x - 3)^2 + (y - 1)^2 + (z + 2)^2 = 25
$$
::::
:::::


:::::::::::::


:::::::::::::{part} b
En kule har sentrum $S(-2, 3, -1)$ og radius $r = \sqrt{5}$.

Finn likningen til kulen.


:::::{answer}
$$
(x + 2)^2 + (y - 3)^2 + (z + 1)^2 = 5
$$
:::::


:::::::::::::


:::::::::::::{part} c
En kule har sentrum $S(0, 2, 1)$ og radius $r = 3$.

Finn likningen til kulen.


:::::{answer}
$$
x^2 + (y - 2)^2 + (z - 1)^2 = 9
$$
:::::


:::::::::::::


:::::::::::::::



---



:::::::::::::::{exercise} Oppgave 2
:::::::::::::{part} a
En kule er gitt ved likningen

$$
x^2 - 2x + y^2 + 4y + z^2 - 6z - 3 = 0
$$

Finn sentrum og radius til kulen.


:::::{answer}
* Sentrum $S(1, -2, 3)$
* Radius $r = \sqrt{17}$

::::{solution}
Vi fullfører kvadratene for hver variabel:

$$
x^2 - 2x = x^2 - 2x + 1^2 - 1^2 = (x - 1)^2 - 1
$$

$$
y^2 + 4y = y^2 + 4y + 2^2 - 2^2 = (y + 2)^2 - 4
$$

$$
z^2 - 6z = z^2 - 6z + 3^2 - 3^2 = (z - 3)^2 - 9
$$

Så setter vi inn i likningen:

$$
x^2 - 2x + y^2 + 4y + z^2 - 6z - 3 = 0
$$

$$
(x - 1)^2 - 1 + (y + 2)^2 - 4 + (z - 3)^2 - 9 - 3 = 0
$$

$$
(x - 1)^2 + (y + 2)^2 + (z - 3)^2 = 17
$$


Fra likningen kan vi lese av at sentrum er $S(1, -2, 3)$ og radius er $r = \sqrt{17}$.
::::
:::::

:::::::::::::



:::::::::::::{part} b
En kule er gitt ved likningen

$$
x^2 + 8x + y^2 - 4y + z^2 - 7 = 0
$$

Finn sentrum og radius til kulen.


:::::{answer}
* Sentrum $S(-4, 2, 0)$
* Radius $r = \sqrt{27}$

::::{solution}
Vi fullfører kvadratene for hver variabel:

$$
x^2 + 8x = x^2 + 8x + 4^2 - 4^2 = (x + 4)^2 - 16
$$

$$
y^2 - 4y = y^2 - 4y + 2^2 - 2^2 = (y - 2)^2 - 4
$$

Vi trenger ikke gjøre noe med $z^2$-leddet siden vi mangler et $z$-ledd. 

Så setter vi inn i likningen:

$$
(x + 4)^2 - 16 + (y - 2)^2 - 4 + z^2 - 7 = 0
$$

$$
(x + 4)^2 + (y - 2)^2 + z^2 = 27
$$

Fra likningen kan vi lese av at sentrum er $S(-4, 2, 0)$ og radius er $r = \sqrt{27}$.
::::
:::::

:::::::::::::


:::::::::::::{part} c
En kule er gitt ved likningen

$$
x^2 + y^2 + 12y + z^2 + 8z - 12 = 0
$$

Finn sentrum og radius til kulen.


:::::{answer}
* Sentrum $S(0, -6, -4)$
* Radius $r = 8$

::::{solution}
Vi fullfører kvadratene der det er nødvendig:

$$
y^2 + 12y = y^2 + 12y + 6^2 - 6^2 = (y + 6)^2 - 36
$$

$$
z^2 + 8z  = z^2 + 8z + 4^2 - 4^2 = (z + 4)^2 - 16
$$

Så setter vi inn i likningen:

$$
x^2 + (y + 6)^2 - 36 + (z + 4)^2 - 16 - 12 = 0
$$

$$
x^2 + (y + 6)^2 + (z + 4)^2 = 64 = 8^2
$$

Fra likningen kan vi lese av at sentrum er $S(0, -6, -4)$ og radius er $r = 8$.
::::
:::::

:::::::::::::


:::::::::::::::



---



:::::::::::::::{exercise} Oppgave 3
Punktene $A(1, 2, 3)$ og $B(5, 2, 1)$ ligger på en kule der $AB$ er diameteren til kulen.

:::::::::::::{part} a
Finn kulens sentrum og radius.


:::::{answer}
* Sentrum $S(3, 2, 2)$
* Radius $r = \sqrt{5}$

::::{solution}
Sentrum vil ligge midt mellom punktene $A$ og $B$. Vi kan finne koordinatene til dette punktet ved å ta gjennomsnittet av koordinatene til $A$ og $B$:

$$
\begin{align*}
\lvec{OS} &= \dfrac{1}{2}(\lvec{OA} + \lvec{OB}) \\
\\
&= \dfrac{1}{2}\cdot \left([1, 2, 3] + [5, 2, 1]\right) \\
\
&= \dfrac{1}{2} \cdot [6, 4, 4] \\
\\
&= [3, 2, 2]
\end{align*}
$$

Altså er sentrum i $S(3, 2, 2)$.

Radius er halvparten av lengden av diameteren $AB$. Vi har at 

$$
\lvec{AB} = \lvec{OB} - \lvec{OA} = [5, 2, 1] - [1, 2, 3] = [4, 0, -2]
$$

Lengden av denne vektoren er 

$$
\abs{\lvec{AB}} &= \sqrt{4^2 + 0^2 + (-2)^2} = \sqrt{16 + 0 + 4} = \sqrt{20} = 2\sqrt{5}
$$

Radius er derfor 

$$
r = \sqrt{5}
$$
::::
:::::


:::::::::::::



:::::::::::::{part} b
Et plan $\alpha$ tangererer kuleflaten i punktet $B$.


Finn likningen til planet $\alpha$.


:::::{answer}
$$
2x - z - 9 = 0
$$

::::{solution}
Normalvektoren til planet vil være parallell med $\lvec{SB}$. Vi har at

$$
\lvec{SB} = \lvec{OB} - \lvec{OS} = [5, 2, 1] - [3, 2, 2] = [2, 0, -1]
$$

Vi kan derfor velge $\vec{n} = [2, 0, -1]$ som en normalvektor til planet. Gitt et vilkårlig punkt $P(x, y, z)$ i planet, er da planlikningen gitt ved:

$$
\lvec{BP} \cdot \vec{n} = 0
$$

$$
[x - 5, y - 2, z - 1] \cdot [2, 0, -1] = 0
$$

$$
2(x - 5) + 0(y - 2) - 1(z - 1) = 0
$$

$$
2x - 10 - z + 1 = 0
$$

$$
2x - z - 9 = 0
$$
::::
:::::

:::::::::::::

En linje $\ell$ går gjennom sentrum av kula og står normalt på $\alpha$.

:::::::::::::{part} c
Lag en parameterframstilling for linja $\ell$.


:::::{answer}
$$
\vec{r}_\ell(t) = [3 + 2t, 2, 2 - t]
$$

::::{solution}
Normalvektoren til planet vil også være en retningsvektor for linja siden linja står normalt på planet. Dermed kan vi velge retningsvektoren

$$
\vec{v}_\ell = \vec{n} = [2, 0, -1]
$$

Linja går gjennom sentrum $S(3, 2, 2)$ som gir oss parameterframstillingen

$$
\begin{align*}
\vec{r}_\ell(t) &= \lvec{OS} + \vec{n} \cdot t \\
\\
&= [3, 2, 2] + [2, 0, -1] \cdot t \\
\\
&= [3 + 2t, 2, 2 - t]
\end{align*}
$$



::::
:::::

:::::::::::::


:::::::::::::{part} d
Finn koordinatene til punktene der $\ell$ skjærer kula. 


:::::{answer}
$B(5, 2, 1)$ og $C(1, 2, 3)$

::::{solution}
Punktet $B(5, 2, 1)$ vil være et av skjæringspunktene. Det andre skjæringspunktet finner vi ved å følge $\lvec{SB}$ i motsatt retning fra punkt $S$. Hvis vi kaller skjæringspunktet for $C$, har vi 

$$
\begin{align*}
\lvec{OC} &= \lvec{OS} - \lvec{SB} \\
\\
&= [3, 2, 2] - [2, 0, -1] \\
\\
&= [1, 2, 3]
\end{align*}
$$

Altså skjærer linja kuleflaten i punktene $B(5, 2, 1)$ og $C(1, 2, 3)$.
::::
:::::

:::::::::::::



:::::::::::::::



---



:::::::::::::::{exercise} Oppgave 4
En kuleflate er gitt ved likningen

$$
x^2 - 4x + y^2 + 2y + z^2 - 6z = 11
$$


:::::::::::::{part} a
Bestem sentrum $S$ og radius $r$ til kula.



:::::{answer}
* Sentrum $S(2, -1, 3)$
* Radius $r = 5$

::::{solution}
Vi fullfører kvadratene for hver variabel så vi kan lese av sentrum og radius. Vi har at

$$
x^2 - 4x = x^2 - 4x + 2^2 - 2^2 = (x - 2)^2 - 4
$$

$$
y^2 + 2y = y^2 + 2y + 1^2 - 1^2 = (y + 1)^2 - 1
$$

$$
z^2 - 6z = z^2 - 6z + 3^2 - 3^2 = (z - 3)^2 - 9
$$

Dermed kan vi skrive om likningen til kula som

$$
(x - 2)^2 - 4 + (y + 1)^2 - 1 + (z - 3)^2 - 9 = 11
$$

$$
(x - 2)^2 + (y + 1)^2 + (z - 3)^2 = 25 = 5^2
$$

Dermed er sentrum $S(2, -1, 3)$ og radius $r = 5$.
::::
:::::

:::::::::::::


Et plan $\alpha$ tangerer kuleflaten i punktet $P(6, -4, 3)$.

:::::::::::::{part} b
Bestem en likning for $\alpha$.


:::::{answer}
$$
4x - 3y - 36 = 0
$$


::::{solution}
En normalvektor til planet vil være $\vec n = \lvec{SP}$:

$$
\vec n = \lvec{SP} = \lvec{OP} - \lvec{OS} = [6, -4, 3] - [2, -1, 3] = [4, -3, 0]
$$

Vi lar $T(x, y, z)$ være et vilkårlig punkt i planet. Da er planlikningen gitt ved

$$
\lvec{PT} \cdot \vec n = 0
$$

$$
[x - 6, y + 4, z - 3] \cdot [4, -3, 0] = 0
$$

$$
4(x - 6) - 3(y + 4) + 0(z - 3) = 0
$$

$$
4x - 24 - 3y - 12 = 0
$$

$$
4x - 3y - 36 = 0
$$
::::
:::::



:::::::::::::


Den rette linja gjennom $P$ og $S$ skjærer kuleflaten i et annet punkt $Q$.


:::::::::::::{part} c
Finn koordinatene til $Q$.


:::::{answer}

::::{solution}

::::
:::::


:::::::::::::


Et plan $\beta$ er parallelt med $\alpha$ og skjærer kuleflaten langs en sirkel. Avstanden fra $\beta$ til $Q$ er $3$.

:::::::::::::{part} d
Finn radiusen til skjæringssirkelen mellom $\beta$ og kuleflaten.


:::::::::::::



:::::::::::::::



---


:::::::::::::::{exercise} Oppgave 5
En kuleflate $K$ har likningen

$$
x^2 - 2x + y^2 + 2y + z^2 - 6z = 14
$$



:::::::::::::{part} a
Finn sentrum og radius til kulen.

:::::::::::::


:::::::::::::{part} b
Vis at punktet $A(4, 3, 3)$ ligger på $K$.


:::::::::::::



:::::::::::::{part} c
Bestem likningen til tangentplanet $\alpha$ til kuleflaten i punktet $A$.


:::::::::::::


:::::::::::::{part} d
Et annet plan $\alpha$ går gjennom $S$ og $B(1, 0, 1)$ og står normalt på $\alpha$.

Bestem likningen til $\beta$. 
:::::::::::::




:::::::::::::::

