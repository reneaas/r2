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
\\
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
\abs{\lvec{AB}} = \sqrt{4^2 + 0^2 + (-2)^2} = \sqrt{20} = 2\sqrt{5}
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
$Q(-2, 2, 3)$

::::{solution}
Vi har at $Q$ må ligge på den andre siden av kuleflaten, diametralt motsatt fra punktet $P$. Det betyr at 

$$
\lvec{OQ} = \lvec{OS} - \lvec{SP} = [2, -1, 3] - [4, -3, 0] = [-2, 2, 3]
$$

Altså er punktet gitt ved $Q(-2, 2, 3)$.
::::
:::::


:::::::::::::

:::::::::::::::



---


:::::::::::::::{exercise} Oppgave 5
En kuleflate $K$ har likningen

$$
x^2 + y^2 + z^2 - 2x + 2y - 6z = 14
$$



:::::::::::::{part} a
Finn sentrum og radius til kulen.


:::::{answer}
* Sentrum $S(1, -1, 3)$
* Radius $r = 5$

::::{solution}
Vi skriver om likningen til standardlikningen:

$$
x^2 - 2x + y^2 + 2y + z^2 - 6z = 14
$$

$$
(x - 1)^2 - 1 + (y + 1)^2 - 1 + (z - 3)^2 - 9 = 14
$$

$$
(x - 1)^2 + (y + 1)^2 + (z - 3)^2 = 25 = 5^2
$$

Fra likningen kan vi lese av at kulen har sentrum i $S(1, -1, 3)$ og radius $r = 5$.
::::
:::::

:::::::::::::


:::::::::::::{part} b
Vis at punktet $A(4, 3, 3)$ ligger på $K$.


::::{solution}
Vi setter inn koordinatene til punktet og sjekker at kulelikningen er oppfylt:

$$
(4 - 1)^2 + (3 + 1)^2 + (3 - 3)^2 = 3^2 + 4^2 + 0^2 = 25 = 5^2
$$

Likningen er oppfylt som betyr at $A$ ligger på $K$.
::::



:::::::::::::

Et plan $\alpha$ tangerer kuleflaten i punktet $A$.

:::::::::::::{part} c
Bestem en likning for $\alpha$.


:::::{answer}
$$
3x + 4y - 24 = 0
$$

::::{solution}
En normalvektor til planet vil være parallell med $\lvec{SA}$:

$$
\lvec{SA} = \lvec{OA} - \lvec{OS} = [4, 3, 3] - [1, -1, 3] = [3, 4, 0]
$$

Vi setter normalvektoren til $\vec n = [3, 4, 0]$. Vi lar $P(x, y, z)$ være et vilkårlig punkt i planet. Da er planlikningen gitt ved

$$
\lvec{AP} \cdot \vec n = 0
$$

$$
[x - 4, y - 3, z - 3] \cdot [3, 4, 0] = 0
$$

$$
3(x - 4) + 4(y - 3) + 0(z - 3) = 0
$$

$$
3x - 12 + 4y - 12 = 0
$$

$$
3x + 4y - 24 = 0
$$
::::
:::::

:::::::::::::

Et annet plan $\beta$ inneholder både $S$ og $B(1, 0, 1)$ og står normalt på $\alpha$.

:::::::::::::{part} d

Bestem en likning for $\beta$.


:::::{answer}
$$
-8x + 6y + 3z + 5 = 0
$$

::::{solution}
Siden $\beta$ inneholder $S$ og $B$, vil $\lvec{SB}$ være parallell med planet. Siden $\beta$ står normalt på $\alpha$, vil også normalvektoren til $\alpha$ være parallell med $\beta$. Dermed kan vi lage en normalvektor til $\beta$ ved å ta kryssproduktet mellom $\lvec{SB}$ og normalvektoren til $\alpha$. Vi har at

$$
\begin{align*}
\vec n_\alpha \times \lvec{SB} &= \mqty| \vec e_x & \vec e_y & \vec e_z \\ 3 & 4 & 0 \\ 0 & 1 & -2 | \\
\\
&= \vec e_x \cdot \mqty| 4 & 0 \\ 1 & -2 | - \vec e_y \cdot \mqty| 3 & 0 \\ 0 & -2 | + \vec e_z \cdot \mqty| 3 & 4 \\ 0 & 1 | \\
\\
&= \vec e_x \cdot (-8) - \vec e_y \cdot (-6) + \vec e_z \cdot (3) \\
\\
&= [-8, 6, 3]
\end{align*}
$$

Vi lar $P(x, y, z)$ være et vilkårlig punkt i planet. Da er planlikningen til $\beta$ gitt ved

$$
\lvec{BP} \cdot \vec n_\beta = 0
$$

$$
[x - 1, y - 0, z - 1] \cdot [-8, 6, 3] = 0
$$

$$
-8(x - 1) + 6(y - 0) + 3(z - 1) = 0
$$

$$
-8x + 6y + 3z + 5 = 0
$$
::::
:::::

:::::::::::::




:::::::::::::::




---



:::::::::::::::{exercise} Oppgave 6
En kuleflate er gitt ved 

$$
x^2 - 6x + y^2 + 4y + z^2 - 8z - 20 = 0
$$


:::::::::::::{part} a
Finn sentrum $S$ og radius $r$ til kuleflaten.


:::::{answer}
* Sentrum $S(3, -2, 4)$
* Radius $r = 7$

::::{solution}
Vi skriver om kulelikningen til standardform:

$$
x^2 - 6x + y^2 + 4y + z^2 - 8z - 20 = 0
$$

$$
(x - 3)^2 - 9 + (y + 2)^2 - 4 + (z - 4)^2 - 16 - 20 = 0
$$

$$
(x - 3)^2 + (y + 2)^2 + (z - 4)^2 = 49 = 7^2
$$

Altså er sentrum $S(3, -2, 4)$ og radius $r = 7$.
::::
:::::

:::::::::::::


Et plan er gitt ved 

$$
6x - 3y + 2z - 4 = 0
$$


:::::::::::::{part} b
Bestem avstanden fra kulens sentrum til planet.


:::::{answer}
Avstanden er lik $4$.

::::{solution}
Normalvektoren til planet er $\vec n = [a, b, c] = [6, -3, 2]$. Avstanden fra $S(3, -2, 4)$ til planet er da gitt ved 

$$
\begin{align*}
L &= \dfrac{\abs{ax + by + cz + d}}{\sqrt{a^2 + b^2 + c^2}} \\
\\
&= \dfrac{\abs{6 \cdot 3 - 3 \cdot (-2) + 2 \cdot 4 - 4}}{\sqrt{6^2 + (-3)^2 + 2^2}} \\
\\
&= \dfrac{\abs{18 + 6 + 8 - 4}}{\sqrt{36 + 9 + 4}} \\
\\
&= \dfrac{\abs{28}}{\sqrt{49}} \\
\\
&= \dfrac{28}{7} \\
\\
&= 4
\end{align*}
$$
::::
:::::


:::::::::::::


Skjæringen mellom kuleflaten og planet danner en sirkel.


:::::::::::::{part} c
Bestem arealet av sirkelen.

:::{hint}
Husk at arealet av en sirkel er $A = \pi R^2$, der $R$ er radius til sirkelen.

:::


:::::{answer}
Arealet er lik $33\pi$.

::::{solution}
:::{plot}
width: 100%
align: right
fontsize: 24
axis: off
axis: equal
circle: (0, 0), 3, blue, solid
line-segment: (-4, 2), (4, 2), red, dashed
line-segment: (0, 2), (sqrt(5), 2), red, solid
point: (0, 0)
text: 0, 0, "$S$", bottom-left
line-segment: (0, 0), (0, 2), black, dashdot
line-segment: (0, 0), (sqrt(5), 2), black, dashdot
let: ds = 0.5
line-segment: (0, 2 - ds), (ds, 2 - ds), gray, solid
line-segment: (ds, 2 - ds), (ds, 2), gray, solid
text: 0.5 * sqrt(5), 0.5 * 2, "$r$", bottom-right
text: 0, 1, "$L$", center-left
text: 0.5 * sqrt(5), 2, "$\rho$", top-center
text: 4, 2, "$\alpha$", center-right
:::

Vi lar $\rho$ være radius til skjæringssirkelen. Fra skissa til høyre kan vi da bruke Pytagoras' setning: 

$$
\rho^2 + L^2 = r^2 
$$

$$
\rho^2 = r^2 - L^2 = 49 - 16 = 33
$$

Arealet av sirkelen er da gitt ved

$$
A = \pi \rho^2 = 33\pi
$$
::::
:::::


:::::::::::::

:::::::::::::::

