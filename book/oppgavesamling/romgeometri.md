# Oppgavesamling: Romgeometri



:::::::::::::::{exercise} Oppgave 1
Gitt punktene $A(-1, 3, 2)$, $B(2, 2, 1)$, $C(1, -1, -2)$ og $T(5, 3, 8)$.


:::::::::::::{part} a
Finn $\lvec{AB} \times \lvec{AC}$


:::::{answer}
$$
\lvec{AB} \times \lvec{AC} = [0, 10, -10]
$$

::::{solution}
Vi har at 

$$
\lvec{AB} = [2 - (-1), 2 - 3, 1 - 2] = [3, -1, -1]
$$

$$
\lvec{AC} = [1 - (-1), -1 - 3, -2 - 2] = [2, -4, -4]
$$

$$
\begin{align*}
\lvec{AB} \times \lvec{AC} &= \mqty|\vec e_x & \vec e_y & \vec e_z \\ 3 & -1 & -1 \\ 2 & -4 & -4| \\
\\
&= \vec e_x \cdot \underbrace{\mqty|-1 & -1 \\ -4 & -4|}_{\displaystyle =0} - \vec e_y \cdot \underbrace{\mqty|3 & -1 \\ 2 & -4|}_{\displaystyle =-10} + \vec e_z \cdot \underbrace{\mqty|3 & -1 \\ 2 & -4|}_{\displaystyle =-10} \\
\\
&= [0, 10, -10]
\end{align*}
$$
::::
:::::

:::::::::::::


Gitt trekanten $ABC$.

:::::::::::::{part} b
Finn arealet av trekanten.


:::::{answer}
$5 \sqrt{2}$

::::{solution}
Arealvektoren til trekanten er gitt ved 

$$
\vec{G} = \dfrac{1}{2} \cdot \lvec{AB} \times \lvec{AC} = [0, 5, -5]
$$

Lengden av denne vektoren gir arealet av trekanten:

$$
\abs{\vec G} = |5 \cdot [0, 1, -1]| = 5 \sqrt{2}
$$
::::
:::::



:::::::::::::


En linje $\ell$ går gjennom punktene $A$ og $B$.

:::::::::::::{part} c
Finn den korteste avstanden fra $C$ til $\ell$.


:::::{answer}
$$
L = \dfrac{10\sqrt{22}}{11}
$$

::::{solution}
Vi har at $\lvec{AB}$ er en retningsvektor for linja $\ell$.

Den korteste avstanden $L$ fra punktet $C$ til linja $\ell$ er gitt ved formelen

$$
L = \dfrac{\abs{\lvec{AC} \times \lvec{AB}}}{\abs{\lvec{AB}}}
$$

der vi vet at 

$$
\lvec{AB} \times \lvec{AC} = [0, 10, -10] \qog \lvec{AB} = [3, -1, -1].
$$

Da får vi 

$$
\abs{\lvec{AB} \times \lvec{AC}} = |10 \cdot [0, 1, -1]| = 10\sqrt{2}
$$

$$
\abs{\lvec{AB}} = \sqrt{3^2 + (-1)^2 + (-1)^2} = \sqrt{11}
$$

Dermed er den korteste avstanden

$$
L = \dfrac{10\sqrt{2}}{\sqrt{11}} = \dfrac{10\sqrt{22}}{11}
$$
::::
:::::

:::::::::::::



Gitt pyramiden $ABCT$.

:::::::::::::{part} d
Finn volumet av pyramiden.



:::::{answer}
$V = 10$

::::{solution}
Når en pyramide har fire hjørner, så spiller det ingen rolle hvilke tre punkter vi velger som grunnflate. Vi lar $ABC$ være grunnflaten siden vi allerede har arealvektoren $\vec{G}$ til denne trekanten fra oppgave **b)**. 

Da er volumet av pyramiden

$$
V = \dfrac{\abs{\vec G \cdot \lvec{AT}}}{3}
$$

der 

$$
\vec{G} = [0, 5, -5] \qog \lvec{AT} = [6, 0, 6]
$$

Da får vi

$$
\vec{G} \cdot \lvec{AT} = -30
$$

som gir volumet

$$
V = \dfrac{\abs{-30}}{3} = 10
$$
::::
:::::



:::::::::::::





:::::::::::::::


:::::::::::::::{exercise} Oppgave 2
Et plan $\alpha$ går gjennom punktene $A(-3, 6, 8)$, $B(0, 2, 4)$ og $C(3, -4, 4)$.


:::::::::::::{part} a
Bestem en likning for planet.


:::::{answer}
$$
4x + 2y + z - 8 = 0
$$

::::{solution}
Vi finner en normalvektor til planet først:

$$
\lvec{AB} = [3, -4, -4] \qog \lvec{AC} = [6, -10, -4]
$$

$$
\begin{align*}
\lvec{AB} \times \lvec{AC} &= \mqty|\vec e_x & \vec e_y & \vec e_z \\ 3 & -4 & -4 \\ 6 & -10 & -4| \\
\\
&= \vec e_x \cdot \underbrace{\mqty|-4 & -4 \\ -10 & -4|}_{\displaystyle = -24} - \vec e_y \cdot \underbrace{\mqty|3 & -4 \\ 6 & -4|}_{\displaystyle = 12} + \vec e_z \cdot \underbrace{\mqty|3 & -4 \\ 6 & -10|}_{\displaystyle = -6} \\
\\
&= [-24, -12, -6] \\
\\
&= (-6) \cdot [4, 2, 1]
\end{align*}
$$

Så vi setter normalvektoren til $\vec n = [4, 2, 1]$. Vi bruker punktet $B(0, 2, 4)$ til å lage en likning for planet:

$$
\lvec{BP} \cdot \vec n = 0
$$

$$
[x, y - 2, z - 4] \cdot [4, 2, 1] = 0
$$

$$
4x + 2(y - 2) + (z - 4) = 0
$$

$$
4x + 2y + z - 8 = 0
$$
::::
:::::

:::::::::::::


:::::::::::::{part} b
Bestem skjæringspunktene mellom $\alpha$ og hver av de tre koordinataksene.



:::::{answer}
* Skjæring med $x$-aksen: $X(2, 0, 0)$
* Skjæring med $y$-aksen: $Y(0, 4, 0)$
* Skjæring med $z$-aksen: $Z(0, 0, 8)$

::::{solution}
Planlikningen til $\alpha$ er gitt ved 

$$
4x + 2y + z - 8 = 0
$$

Når planet skjærer $x$-aksen er $y = z = 0$. Fra planlikningen får vi da

$$
4x - 8 = 0 \liff x = 2 \liff X(2, 0, 0) \in \alpha
$$

Når planet skjærer $y$-aksen er $x = z = 0$. Fra planlikningen får vi da

$$
2y - 8 = 0 \liff y = 4 \liff Y(0, 4, 0) \in \alpha
$$

Når planet skjærer $z$-aksen er $x = y = 0$. Fra planlikningen får vi da:

$$
z - 8 = 0 \liff z = 8 \liff Z(0, 0, 8) \in \alpha
$$

::::
:::::


:::::::::::::


En pyramide har hjørner i origo og i skjæringspunktene mellom $\alpha$ og koordinataksene.

:::::::::::::{part} c
Bestem volumet av pyramiden.


:::::{answer}
$$
V = \dfrac{32}{3}
$$

::::{solution}
Fra oppgave **b)** har vi skjæringspunktene mellom $\alpha$ og koordinataksene:

$$
X(2, 0, 0) \qog Y(0, 4, 0) \qog Z(0, 0, 8)
$$

Vi kaller origo for $O(0, 0, 0)$ og velger $OXY$ som grunnflate og $Z$ som toppunkt. Grunnflaten er da spent ut av vektorene

$$
\lvec{OX} = [2, 0, 0] \qog \lvec{OY} = [0, 4, 0]
$$

Grunnflatevektoren $\vec{G}$ er gitt ved 

$$
\vec{G} = \dfrac{1}{2}\lvec{OX} \times \lvec{OY}
$$

Vi regner ut kryssproduktet først:


$$
\begin{align*}
\lvec{OX} \times \lvec{OY} &= \mqty|\vec e_x & \vec e_y & \vec e_z \\ 2 & 0 & 0 \\ 0 & 4 & 0| \\
\\
&= \vec e_x \cdot \underbrace{\mqty|0 & 0 \\ 4 & 0|}_{\displaystyle = 0} - \vec e_y \cdot \underbrace{\mqty|2 & 0 \\ 0 & 0|}_{\displaystyle = 0} + \vec e_z \cdot \underbrace{\mqty|2 & 0 \\ 0 & 4|}_{\displaystyle = 8} \\
\\
&= [0, 0, 8]
\end{align*}
$$

Grunnflatevektoren er da $\vec G = [0, 0, 4]$. Volumet av pyramiden er gitt ved

$$
V = \dfrac{\abs{\vec G \cdot \lvec{OZ}}}{3}
$$

Vi har at 

$$
\vec G \cdot \lvec{OZ} = [0, 0, 4] \cdot [0, 0, 8] = 32
$$

Altså er volumet

$$
V = \dfrac{32}{3}
$$
::::
:::::


:::::::::::::


:::::::::::::::



---


:::::::::::::::{exercise} Oppgave 3
En linje $\ell$ går gjennom punktene $A(3, 1, 2)$ og $B(5, 3, 3)$.


:::::::::::::{part} a
Lag en parameterframstilling for $\ell$.


:::::{answer}
$\vec r(t) = [3, 1, 2] + [2, 2, 1] \cdot t$

::::{solution}
Vi trenger en retningsvektor for linja. Enhver slik vektor er parallell med

$$
\lvec{AB} = [5 - 3, 3 - 1, 3 - 2] = [2, 2, 1]
$$

Vi velger $\vec v = [2, 2, 1]$. Da er en parameterframstilling for linja gitt ved:

$$
\begin{align*}
\vec r(t) &= \lvec{OA} + \vec v \cdot t \\
\\
&= [3, 1, 2] + [2, 2, 1] \cdot t \\
\end{align*}
$$

> Det er ofte ryddig å bare oppgi svaret på formen ovenfor siden det viser tydelig hva som er startpunkt og hva som er retningsvektor. I praktiske oppgaver må vi som regel forenkle og skrive det om til den mer kompakte formen $\vec r(t) = [3 + 2t, 1 + 2t, 2 + t]$ for å bruke det videre.
::::
:::::

:::::::::::::


Et punkt $C(1, -3, 5)$ ligger ikke på linja.


:::::::::::::{part} b
Finn avstanden fra $\ell$ til $C$.


:::::{answer}
$L = 2 \sqrt{5}$

::::{solution}
Avstanden fra $\ell$ til $C$ er gitt ved

$$
L = \dfrac{|\lvec{AC} \times \vec v|}{|\vec v|}
$$

Vi har at 

$$
\lvec{AC} = [1 - 3, -3 - 1, 5 - 2] = [-2, -4, 3] \qog \vec v = [2, 2, 1]
$$

Da får vi

$$
\begin{align*}
\lvec{AC} \times \vec v &= \mqty|\vec e_x & \vec e_y & \vec e_z \\ -2 & -4 & 3 \\ 2 & 2 & 1| \\
\\
&= \vec e_x \cdot \underbrace{\mqty|-4 & 3 \\ 2 & 1|}_{\displaystyle = -10} - \vec e_y \cdot \underbrace{\mqty|-2 & 3 \\ 2 & 1|}_{\displaystyle = -8} + \vec e_z \cdot \underbrace{\mqty|-2 & -4 \\ 2 & 2|}_{\displaystyle = 4} \\
\\
&= [-10, 8, 4]
\end{align*}
$$

Vi regner ut lengden av telleren og nevneren i formelen:

$$
\begin{align*}
\abs{\lvec{AC} \times \vec v} &= \abs{[-10, 8, 4]} \\
\\
&= \abs{2 \cdot [-5, 4, 2]} \\
\\
&= 2 \cdot \sqrt{5^2 + 4^2 + 2^2} \\
\\
&= 2 \cdot \sqrt{45} \\
\\
&= 2 \cdot \sqrt{9 \cdot 5} \\
\\
&= 2 \cdot 3 \cdot \sqrt{5} \\
\\
&= 6 \sqrt{5}
\end{align*}
$$

Lengden av nevneren er

$$
|\vec v| = \abs{[2, 2, 1]} = \sqrt{2^2 + 2^2 + 1^2} = \sqrt{9} = 3
$$

Dermed blir avstanden

$$
L = \dfrac{6 \sqrt{5}}{3} = 2 \sqrt{5}
$$
::::
:::::


:::::::::::::


Et plan $\alpha$ er gitt ved 

$$
2x - y + 2z + 3 = 0
$$


:::::::::::::{part} c
Finn koordinatene til skjæringspunktet mellom $\alpha$ og $\ell$. 


:::::{answer}
$(-3, -5, -1)$

::::{solution}
Vi setter inn koordinatene til parameterframstillingen i planlikningen og løser for $t$. Fra oppgave **a)** har vi at 

$$
\vec r(t) = [3 + 2t, 1 + 2t, 2 + t]
$$

som gir

$$
2 \cdot \underbrace{(3 + 2t)}_{\displaystyle x} - \underbrace{(1 + 2t)}_{\displaystyle y} + 2 \cdot \underbrace{(2 + t)}_{\displaystyle z} + 3 = 0
$$

$$
2(3 + 2t) - (1 + 2t) + 2(2 + t) + 3 = 0
$$

$$
6 + 4t - 1 - 2t + 4 + 2t + 3 = 0
$$

$$
4t + 12 = 0 \liff t = -3
$$

Koordinatene til skjæringspunktet er da 

$$
\begin{align*}
\vec r(-3) &= [3 + 2\cdot (-3), 1 + 2\cdot (-3), 2 + (-3)] \\
\\
&= [-3, -5, -1]
\end{align*}
$$

Altså skjærer $\ell$ planet $\alpha$ i punktet $(-3, -5, -1)$.
::::
:::::


:::::::::::::

:::::::::::::::

---



:::::::::::::::{exercise} Oppgave 4
Et plan $\alpha$ er gitt ved likningen

$$
3x + 4z - 10 = 0
$$


:::::::::::::{part} a
Finn en normalvektor til planet.

:::::{answer}
$\vec n = [3, 0, 4]$


::::{solution}
Fra planlikningen

$$
ax + by + cz + d = 0
$$

kan vi lese av $\vec n = [a, b, c]$ som en normalvektor til planet. Dermed er en mulig normalvektor

$$
\vec n = [3, 0, 4].
$$
::::


:::::

:::::::::::::


:::::::::::::{part} b
Vis at punktet $A(2, 3, 1)$ ligger i planet.



::::{solution}
Vi setter inn koordinatene til $A$ i planlikningen og sjekker at den er oppfylt:

$$
3 \cdot 2 + 4 \cdot 1 - 10 = 0
$$

Altså ligger $A$ i $\alpha$.

::::



:::::::::::::


En kule $K$ tangerer planet i punktet $A$ og har radius $10$. 

:::::::::::::{part} c
Finn de mulige koordinatene til kulens sentrum.


:::::{answer}
$S_1(8, 3, 9)$ eller $S_2(-4, 3, -7)$

::::{solution}
Koordinatene til kulens sentrum vil ligge en avstand $10$ fra punktet $A$ langs linja som har retningsvektor $\vec n$. Hvis vi lager oss en enhetsvektor $\hat n$ langs denne retningen, får vi to mulige sentrum:

$$
\lvec{OS} = \lvec{OA} \pm 10 \hat n
$$

Vi har at 

$$
\hat n = \dfrac{\vec n}{|\vec n|}
$$

der 

$$
\abs{\vec n} = \sqrt{3^2 + 0^2 + 4^2} = \sqrt{25} = 5
$$

Dermed er 

$$
\hat n = \dfrac{\vec n}{5}
$$

Den ene muligheten blir derfor

$$
\begin{align*}
\lvec{OS_1} &= \lvec{OA} + 10 \cdot \dfrac{\vec n}{5} \\
\\
&= \lvec{OA} + 2 \cdot \vec n \\
\\
&= [2, 3, 1] + 2 \cdot [3, 0, 4] \\
\\
&= [8, 3, 9]
\end{align*}
$$

Den andre muligheten blir

$$
\begin{align*}
\lvec{OS_2} &= \lvec{OA} - 2 \cdot \vec n \\
\\
&= [2, 3, 1] - 2 \cdot [3, 0, 4] \\
\\
&= [-4, 3, -7]
\end{align*}
$$
::::
:::::


:::::::::::::






:::::::::::::::


---



:::::::::::::::{exercise} Oppgave 5
To linjer $\ell$ og $m$ er gitt ved 

$$
\vec{r}_\ell(t) = [3 + 4t, 1 + 7t, 1 + 4t] \qog \vec r_m(s) = [5 + s, 8 + 2s, 7 + s] 
$$


Linja $\ell$ ligger i et plan $\alpha$ og linja $m$ ligger i et plan $\beta$ der planene er parallelle.


:::::::::::::{part} a
Bestem en likning for hvert plan.



:::::{answer}
$$
\begin{align*}
\alpha:& \quad x - z - 2 = 0 \\
\\
\beta:& \quad x - z + 2 = 0
\end{align*}
$$


::::{solution}
Retningsvektorene til de to linjene vil være parallelle med hvert plan. Retningsvektorene kan lese av fra koeffisientene til parameterframstillingene som:

$$
\vec v_\ell = [4, 7, 4] \qog \vec v_m = [1, 2, 1]
$$

Da blir en normalvektor til hvert plan:

$$
\begin{align*}
\vec v_\ell \times \vec v_m &= \mqty|\vec e_x & \vec e_y & \vec e_z \\ 4 & 7 & 4 \\ 1 & 2 & 1| \\
\\
&= \vec e_x \cdot \underbrace{\mqty|7 & 4 \\ 2 & 1|}_{\displaystyle = -1} - \vec e_y \cdot \underbrace{\mqty|4 & 4 \\ 1 & 1|}_{\displaystyle = 0} + \vec e_z \cdot \underbrace{\mqty|4 & 7 \\ 1 & 2| }_{\displaystyle = 1} \\
\\
&= [-1, 0, 1] = (-1) \cdot [1, 0, -1] 
\end{align*}
$$

Altså er $\vec n = [1, 0, -1]$ en normalvektor til begge plan. Vi trenger et punkt i hvert plan. Et punkt $A$ i $\alpha$ vil være gitt ved

$$
\lvec{OA} = \vec r_\ell(0) = [3, 1, 1]
$$

Dermed blir en planlikning til $\alpha$ gitt ved 

$$
\lvec{AP} \cdot [1, 0, -1] = 0
$$

$$
[x - 3, y - 1, z - 1]\cdot [1, 0, -1] = 0
$$

$$
x - z - 2 = 0
$$

Et punkt $B$ i $\beta$ vil være gitt ved

$$
\lvec{OB} = \vec r_m(0) = [5, 8, 7]
$$

Dermed blir en planlikning til $\beta$ gitt ved 

$$
\lvec{BP} \cdot [1, 0, -1] = 0
$$

$$
[x - 5, y - 8, z - 7] \cdot [1, 0, -1] = 0
$$

$$
x - z + 2 = 0
$$

Altså er likningene til de to planene gitt ved:

$$
\begin{align*}
\alpha:& \quad x - z - 2 = 0 \\
\\
\beta:& \quad x - z + 2 = 0
\end{align*}
$$

::::
:::::


:::::::::::::


En kule tangerer $\alpha$ i et punkt på $\ell$ og $\beta$ i et punkt på $m$. 


:::::::::::::{part} b
Bestem kulens radius.


:::::{answer}
$r = \sqrt{2}$.

::::{solution}
Linjene ligger i hvert sitt parallelle plan som betyr at avstanden mellom de to linjene reduseres til avstanden fra et punkt til et plan. Radien til kula må være halvparten av denne avstanden.

Vi har at et punkt i planet $\alpha$ er 

$$
\lvec{OP} = \vec r_\ell(0) = [3, 1, 1]
$$

Om det andre planet $\beta$ vet vi at 

$$
x - z + 2 = 0 \qog \abs{\vec n_\beta} = \sqrt{2}
$$

Avstanden fra punktet $P$ til $\beta$ er da 

$$
\begin{align*}
L &= \dfrac{\abs{x - z + 2}}{\abs{\vec n_\beta}} \\
\\
&= \dfrac{\abs{3 - 1 + 2}}{\sqrt{2}} \\
\\
&= \dfrac{4}{\sqrt{2}}
\end{align*}
$$

Radius til kula vil være halvparten av denne avstanden, altså:

$$
r = \dfrac{L}{2} = \dfrac{2}{\sqrt{2}} = \sqrt{2}
$$

::::
:::::


:::::::::::::

:::::::::::::::



---



:::::::::::::::{exercise} Oppgave 6
En kuleflate $K$ er gitt ved likningen

$$
x^2 + y^2 + z^2 - 4x + 6y - 2z - 35 = 0
$$


:::::::::::::{part} a
Bestem sentrum og radius til $K$.


:::::{answer}
Sentrum $S(2, -3, 1)$ og radius $7$.

::::{solution}
Vi skriver om likningen til standardform ved å fullføre kvadrater:

$$
x^2 - 4x + y^2 + 6y + z^2 - 2z - 35 = 0
$$

$$
(x - 2)^2 - 4 + (y + 3)^2 - 9 + (z - 1)^2 - 1 - 35 = 0
$$

$$
(x - 2)^2 + (y + 3)^2 + (z - 1)^2 = 49 = 7^2
$$

Altså har kuleflaten sentrum $S(2, -3, 1)$ og radius $7$.

::::
:::::

:::::::::::::


Et plan $\alpha$ tangerer $K$ i punktet $A(4, 0, -5)$.


:::::::::::::{part} b
Bestem en likning for $\alpha$.


:::::{answer}
$$
2x + 3y - 6z - 38 = 0
$$

::::{solution}
En normalvektor til planet er gitt ved 

$$
\vec n = \lvec{SA} = [4 - 2, 0 - (-3), -5 - 1] = [2, 3, -6]
$$

Likningen for planet blir da 

$$
\lvec{AP} \cdot \vec n = 0
$$

$$
[x - 4, y - 0, z - (-5)] \cdot [2, 3, -6] = 0
$$

$$
2(x - 4) + 3y - 6(z + 5) = 0
$$

$$
2x + 3y - 6z - 38 = 0
$$
::::
:::::


:::::::::::::


En linje $\ell$ er parallell med planet $\alpha$ og går gjennom punktet $B(0, -6, 7)$.

:::::::::::::{part} c
Bestem i hvilket punkt linja $\ell$ skjærer $z$-aksen.


:::::{answer}
$Z(0, 0, 10)$.

::::{solution}
Siden linja $\ell$ er parallell med planet $\alpha$, må retningsvektoren $\vec v$ til linja og normalvektoren $\vec n$ til planet være ortogonale. Det betyr at 

$$
\vec v \cdot \vec n = 0
$$

La $Z(0, 0, z)$ være punktet linja skjærer $z$-aksen. Da er $\lvec{BZ}$ *også* en retningsvektor for linja som betyr at

$$
\lvec{BZ} \cdot \vec n = 0
$$

Vi har at 

$$
\lvec{BZ} = [0, 6, z - 7] \qog \vec n = [2, 3, -6]
$$

som gir


$$
[0, 6, z - 7] \cdot [2, 3, -6] = 0
$$

$$
18 - 6z + 42 = 0
$$

$$
6z = 60 \liff z = 10
$$

Altså skjærer linja $z$-aksen i $Z(0, 0, 10)$.

::::
:::::


:::::::::::::


Linja $\ell$ ligger i et annet plan $\beta$. Planet $\beta$ står normalt på $\alpha$.

:::::::::::::{part} d
Bestem en likning for $\beta$.


:::::{answer}
$$
15x - 2y + 4z - 28 = 0
$$

::::{solution}
Vi trenger to ikke-parallelle vektorer som er parallelle med $\beta$ for å finne en normalvektor til planet. Siden punktene $B(0, -6, 7)$ og $Z(0, 0, 10)$ fra oppgave **c)** ligger i planet, så må $\lvec{BZ}$ være en slik vektor. Siden planet $\beta$ står normalt på $\alpha$, vil også $\vec n_\alpha$ være parallell med $\beta$. 

Dermed vil $\vec n_\alpha \times \lvec{BZ}$ være en normalvektor til $\beta$. Vi har at

$$
\vec n_\alpha = [2, 3, -6] \qog \lvec{BZ} = [0, 6, 3]
$$

$$
\begin{align*}
\vec n_\alpha \times \lvec{BZ} &= \mqty|\vec e_x & \vec e_y & \vec e_z \\ 2 & 3 & -6 \\ 0 & 6 & 3| \\
\\
&= \vec e_x \cdot \underbrace{\mqty|3 & -6 \\ 6 & 3|}_{\displaystyle = 45} - \vec e_y \cdot \underbrace{\mqty|2 & -6 \\ 0 & 3|}_{\displaystyle = 6} + \vec e_z \cdot \underbrace{\mqty|2 & 3 \\ 0 & 6|}_{\displaystyle = 12} \\
\\
&= [45, -6, 12] \\
\\
&= 3 \cdot [15, -2, 4]
\end{align*}
$$

Vi velger derfor $\vec n_\beta = [15, -2, 4]$ som normalvektor til planet $\beta$. Da kan vi skrive en likning for planet som

$$
\lvec{BP} \cdot \vec n_\beta = 0
$$

$$
[x, y, z - 7] \cdot [15, -2, 4] = 0
$$

$$
15x - 2y + 4z - 28 = 0
$$
::::

:::::


:::::::::::::




:::::::::::::::



---


:::::::::::::::{exercise} Oppgave 7
To linjer $\ell$ og $m$ er gitt ved 

$$
\vec r_\ell(t) = [9 + 2t, t, 5 + 2t] \qog \vec r_m(s) = [2 + 3s, -4 + 2s, -1 + 2s]
$$

Linjene skjærer hverandre i et punkt $T$.

:::::::::::::{part} a
Bestem koordinatene til $T$.



:::::{answer}
$T(5, -2, 1)$

::::{solution}
Vi løser likningen $\vec r_\ell(t) = \vec r_m(s)$ for å finne koordinatene til punktet. Det gir oss likningssystemet

$$
9 + 2t = 2 + 3s \and t = -4 + 2s \and 5 + 2t = -1 + 2s
$$

Den midterste likningen er allerede løst for $t$, så vi setter inn uttrykket for $t$ i én av de andre likningene. Velger den første likningen:

$$
9 + 2 \cdot (-4 + 2s) = 2 + 3s
$$

$$
9 - 8 + 4s = 2 + 3s \liff s = 1
$$

som gir oss at 

$$
t = -4 + 2\cdot 1 = -2
$$

Vi bør regne ut punktet med begge parameterframstillinger for å dobbeltsjekke at vi får samme punkt:

$$
\vec r_\ell(-2) = [9 + 2\cdot(-2), -2, 5 + 2\cdot(-2)] = [5, -2, 1]
$$

og 

$$
\vec r_m(1) = [2 + 3\cdot 1, -4 + 2\cdot 1, -1 + 2\cdot 1] = [5, -2, 1]
$$

Altså skjærer linjene hverandre i punktet $T(5, -2, 1)$.



::::
:::::


:::::::::::::


Linjene ligger i et plan $\alpha$. 

:::::::::::::{part} b
Bestem en likning for planet.


:::::{answer}
$$
-2x + 2y + z + 13 = 0
$$

::::{solution}
Retningsvektorene til linjene vil være parallelle med planet, samtidig som de to vektorene er ikke-parallelle. Dermed kan vi bruke kryssproduktet av dem til å lage en normalvektor til planet. Vi har at 

$$
\vec v_\ell = \vec r_\ell'(t) = [2, 1, 2] \qog \vec v_m = \vec r_m'(s) = [3, 2, 2]
$$

Da får vi

$$
\vec v_\ell \times \vec v_m &= \mqty|\vec e_x & \vec e_y & \vec e_z \\ 2 & 1 & 2 \\ 3 & 2 & 2| \\
\\
&= \vec e_x \cdot \underbrace{\mqty|1 & 2 \\ 2 & 2|}_{\displaystyle = -2} - \vec e_y \cdot \underbrace{\mqty|2 & 2 \\ 3 & 2|}_{\displaystyle = -2} + \vec e_z \cdot \underbrace{\mqty|2 & 1 \\ 3 & 2|}_{\displaystyle = 1} \\
\\
&= [-2, 2, 1]
$$


Altså kan vi velge normalvektoren $\vec n = [-2, 2, 1]$. Punktet $T$ ligger i planet, som gir planlikningen:

$$
\lvec{TP} \cdot \vec n = 0
$$

$$
[x - 5, y + 2, z - 1] \cdot [-2, 2, 1] = 0
$$

$$
-2(x - 5) + 2(y + 2) + (z - 1) = 0
$$

$$
-2x + 2y + z + 13 = 0
$$

::::
:::::

:::::::::::::


Planet tangerer en kuleflate som har sentrum i $S(8, 6, 9)$. 


:::::::::::::{part} c
Bestem kulens radius.


:::::{answer}
$r = 6$

::::{solution}
Den korteste avstanden fra sentrum til planet vil være lik radius. Fra oppgave **b)** har vi planlikningen

$$
-2x + 2y + z + 13 = 0
$$

som gir oss at avstanden er 

$$
\begin{align*}
r &= \dfrac{\abs{-2 \cdot 8 + 2 \cdot 6 + 9 + 13}}{\sqrt{(-2)^2 + 2^2 + 1^2}} \\
\\
&= \dfrac{\abs{18}}{3} \\
\\
&= 6
\end{align*}
$$

Altså har kuleflaten radius $r = 6$.
::::
:::::



:::::::::::::



En annen kuleflate tangerer planet $\alpha$ i samme punkt som den første kulen. Kuleflaten har radius $9$ og ligger på den andre siden av planet i forhold til den første kulen.



:::::::::::::{part} d
Bestem koordinatene til kuleflatens sentrum $Q$.


:::::{answer}
$Q(18, -4, 4)$

::::{solution}
Kuleflaten har radius lik $9$. Den forrige kuleflaten har radius lik $6$ som betyr at vi kan flytte oss en avstand $6 + 9 = 15$ fra punktet $S$ langs normalvektoren til planet for å finne koordinatene til sentrum. Vi vet ikke hvilken vei vi skal gå langs $\vec n$, så vi må også dobbeltsjekke at vi får en avstand $9$ fra planet. 

Vi vet at $\abs{\vec n} = 3$, så da vil $5\cdot \vec n$ ha riktig lengde hvis vi starter i $S$. Da får vi to muligheter:

$$
\begin{align*}
\lvec{OQ} &= \lvec{OS} + 5 \cdot \vec n \\
\\
&= [8, 6, 9] + 5 \cdot [-2, 2, 1] \\
\\
&= [8, 6, 9] + [-10, 10, 5] \\
\\
&= [-2, 16, 14]
\end{align*}
$$

Vi sjekker om avstanden fra planet til punktet er $9$:

$$
\begin{align*}
L &= \dfrac{\abs{-2x + 2y + z + 13}}{3} \\
\\
&= \dfrac{\abs{-2 \cdot (-2) + 2 \cdot 16 + 14 + 13}}{3} \\ 
\\
&= \dfrac{\abs{63}}{3} \\
\\
&= 21
\end{align*}
$$

Altså er ikke dette det riktige punktet. Da går vi i motsatt retning i stedet:

$$
\begin{align*}
\lvec{OQ} &= \lvec{OS} - 5\cdot \vec n \\
\\
&= [8, 6, 9] - [-10, 10, 5] \\
\\
&= [18, -4, 4]
\end{align*}
$$

Vi sjekker om avstanden er korrekt:

$$
\begin{align*}
L &= \dfrac{\abs{-2 \cdot 18 + 2 \cdot (-4) + 4 + 13}}{3} \\
\\
&= \dfrac{\abs{-27}}{3} \\
\\
&= 9
\end{align*}
$$

Altså får vi riktig avstand som betyr at kuleflatens sentrum er $Q(18, -4, 4)$.
::::
:::::

:::::::::::::

:::::::::::::::


---



:::::::::::::::{exercise} Oppgave 8
:::{interactive-plot3d} 
nocache:
width: 50%
align: right
xrange: (-2, 6)
yrange: (-2, 6)
zrange: (-1, 6)
let: Ox = 0
let: Oy = 0
let: Oz = 0
let: Ax = 4
let: Ay = 0
let: Az = 0
let: Bx = 4
let: By = 4
let: Bz = 0
let: Cx = 0
let: Cy = 4
let: Cz = 0
let: Dx = 1
let: Dy = 1
let: Dz = 3
let: Ex = 3
let: Ey = 1
let: Ez = 3
let: Fx = 3
let: Fy = 3
let: Fz = 3
let: Gx = 1
let: Gy = 3
let: Gz = 3
ngon: [(Ox, Oy, Oz), (Ax, Ay, Az), (Bx, By, Bz), (Cx, Cy, Cz)], color=blue, alpha=0.2, edgecolor=none
ngon: [(Ax, Ay, Az), (Bx, By, Bz), (Fx, Fy, Fz), (Ex, Ey, Ez)], color=blue, alpha=0.2, edgecolor=none
ngon: [(Bx, By, Bz), (Cx, Cy, Cz), (Gx, Gy, Gz), (Fx, Fy, Fz)], color=blue, alpha=0.2, edgecolor=none
ngon: [(Cx, Cy, Cz), (Ox, Oy, Oz), (Dx, Dy, Dz), (Gx, Gy, Gz)], color=blue, alpha=0.2, edgecolor=none
ngon: [(Dx, Dy, Dz), (Ex, Ey, Ez), (Fx, Fy, Fz), (Gx, Gy, Gz)], color=blue, alpha=0.2, edgecolor=none
ngon: [(Ox, Oy, Oz), (Ax, Ay, Az), (Ex, Ey, Ez), (Dx, Dy, Dz)], color=blue, alpha=0.2, edgecolor=none
text: at=(Ox, Oy, Oz), value="$O$", ha=right, va=top
text: at=(Ax, Ay, Az), value="$A$", ha=right, va=top
text: at=(Bx, By, Bz), value="$B$", ha=left, va=top
text: at=(Cx, Cy, Cz), value="$C$", ha=left, va=top
text: at=(Dx, Dy, Dz), value="$D$", ha=right, va=bottom
text: at=(Ex, Ey, Ez), value="$E$", ha=left, va=bottom
text: at=(Fx, Fy, Fz), value="$F$", ha=left, va=bottom
text: at=(Gx, Gy, Gz), value="$G$", ha=left, va=bottom
ticks: off
fontsize: 24
:::


En rett avkortet pyramide $OABCDEFG$ er vist i figuren til høyre. Punktene er gitt ved

* $O(0, 0, 0)$
* $A(4, 0, 0)$
* $B(4, 4, 0)$
* $C(0, 4, 0)$
* $D(1, 1, 3)$
* $E(3, 1, 3)$
* $F(3, 3, 3)$
* $G(1, 3, 3)$




:::::::::::::{part} a
Bestem arealet av sideflaten $ABFE$.


:::::{answer}
$$
G_{ABFE} = 3\sqrt{10}
$$


::::{solution}
Vi deler opp sideflaten $ABFE$ i to trekanter $ABF$ og $AFE$.

Vektorene som spenner ut trekanten $ABF$ er gitt ved 

$$
\lvec{AB} = [0, 4, 0] \qog \lvec{AF} = [-1, 3, 3]
$$

Arealet av denne trekanten er da $G_{ABF} = \dfrac{1}{2}\abs{\lvec{AB} \times \lvec{AF}}$. Vi regner ut kryssproduktet først:

$$
\begin{align*}
\lvec{AB} \times \lvec{AF} &= \mqty|\vec e_x & \vec e_y & \vec e_z \\ 0 & 4 & 0 \\ -1 & 3 & 3| \\
\\
&= \vec e_x \cdot \underbrace{\mqty|4 & 0 \\ 3 & 3|}_{\displaystyle =12} - \vec e_y \cdot \underbrace{\mqty|0 & 0 \\ -1 & 3|}_{\displaystyle =0} + \vec e_z \cdot \underbrace{\mqty|0 & 4 \\ -1 & 3|}_{\displaystyle =4} \\
\\
&= [12, 0, 4] \\
\\
&= 4 \cdot [3, 0, 1]
\end{align*}
$$

Arealet av trekanten $ABF$ blir da

$$
G_{ABF} = \frac{1}{2} \abs{\lvec{AB} \times \lvec{AF}} = \frac{1}{2} \abs{4 \cdot [3, 0, 1]} = \frac{1}{2} \cdot 4 \cdot \sqrt{3^2 + 0^2 + 1^2} = 2 \cdot \sqrt{10}
$$

Så tar vi trekant $AFE$. Denne er utspent av vektorene

$$
\lvec{AF} = [-1, 3, 3] \qog \lvec{AE} = [-1, 1, 3]
$$

Vi regner ut kryssproduktet:

$$
\begin{align*}
\lvec{AF} \times \lvec{AE} &= \mqty|\vec e_x & \vec e_y & \vec e_z \\ -1 & 3 & 3 \\ -1 & 1 & 3| \\
\\
&= \vec e_x \cdot \underbrace{\mqty|3 & 3 \\ 1 & 3|}_{\displaystyle =6} - \vec e_y \cdot \underbrace{\mqty|-1 & 3 \\ -1 & 3|}_{\displaystyle =0} + \vec e_z \cdot \underbrace{\mqty|-1 & 3 \\ -1 & 1|}_{\displaystyle =2} \\
\\
&= [6, 0, 2] \\
\\
&= 2 \cdot [3, 0, 1]
\end{align*}
$$

Arealet av trekant $AFE$ er da 

$$
G_{AFE} = \frac{1}{2} \abs{\lvec{AF} \times \lvec{AE}} = \frac{1}{2} \abs{2 \cdot [3, 0, 1]} = \frac{1}{2} \cdot 2 \cdot \sqrt{3^2 + 0^2 + 1^2} = \sqrt{10}
$$


Arealet av sideflaten $ABFE$ blir da summen av arealene av trekantene $ABF$ og $AFE$:

$$
G_{ABFE} = G_{ABF} + G_{AFE} = 2\sqrt{10} + \sqrt{10} = 3\sqrt{10}
$$
::::
:::::


:::::::::::::



:::::::::::::{part} b
Bestem volumet av $OABCDEFG$.


:::::{hint} Hint
Se for deg at du utvider pyramiden slik at du får den fulle pyramiden før den ble avkortet som vist i den interaktive figuren nedenfor. Du kan bruke denne ideen til å finne volumet av den avkortede pyramiden.


:::{interactive-plot3d} 
nocache:
width: 100%
xrange: (-2, 6)
yrange: (-2, 6)
zrange: (-1, 6)
let: Ox = 0
let: Oy = 0
let: Oz = 0
let: Ax = 4
let: Ay = 0
let: Az = 0
let: Bx = 4
let: By = 4
let: Bz = 0
let: Cx = 0
let: Cy = 4
let: Cz = 0
let: Dx = 1
let: Dy = 1
let: Dz = 3
let: Ex = 3
let: Ey = 1
let: Ez = 3
let: Fx = 3
let: Fy = 3
let: Fz = 3
let: Gx = 1
let: Gy = 3
let: Gz = 3
let: Tx = 2
let: Ty = 2
let: Tz = 6
ngon: [(Ox, Oy, Oz), (Ax, Ay, Az), (Bx, By, Bz), (Cx, Cy, Cz)], color=blue, alpha=0.2, edgecolor=black
ngon: [(Ax, Ay, Az), (Bx, By, Bz), (Fx, Fy, Fz), (Ex, Ey, Ez)], color=blue, alpha=0.2, edgecolor=black
ngon: [(Bx, By, Bz), (Cx, Cy, Cz), (Gx, Gy, Gz), (Fx, Fy, Fz)], color=blue, alpha=0.2, edgecolor=black
ngon: [(Cx, Cy, Cz), (Ox, Oy, Oz), (Dx, Dy, Dz), (Gx, Gy, Gz)], color=blue, alpha=0.2, edgecolor=black
ngon: [(Dx, Dy, Dz), (Ex, Ey, Ez), (Fx, Fy, Fz), (Gx, Gy, Gz)], color=blue, alpha=0.2, edgecolor=black
ngon: [(Ox, Oy, Oz), (Ax, Ay, Az), (Ex, Ey, Ez), (Dx, Dy, Dz)], color=blue, alpha=0.2, edgecolor=black
line-segment: start=(Dx, Dy, Dz), end=(Tx, Ty, Tz), color=gray, style=dashdot
line-segment: start=(Ex, Ey, Ez), end=(Tx, Ty, Tz), color=gray, style=dashdot
line-segment: start=(Fx, Fy, Fz), end=(Tx, Ty, Tz), color=gray, style=dashdot
line-segment: start=(Gx, Gy, Gz), end=(Tx, Ty, Tz), color=gray, style=dashdot
text: at=(Tx, Ty, Tz), value="$T$", ha=center, va=bottom
text: at=(Ox, Oy, Oz), value="$O$", ha=right, va=top
text: at=(Ax, Ay, Az), value="$A$", ha=right, va=top
text: at=(Bx, By, Bz), value="$B$", ha=left, va=top
text: at=(Cx, Cy, Cz), value="$C$", ha=left, va=top
text: at=(Dx, Dy, Dz), value="$D$", ha=right, va=bottom
text: at=(Ex, Ey, Ez), value="$E$", ha=left, va=bottom
text: at=(Fx, Fy, Fz), value="$F$", ha=left, va=bottom
text: at=(Gx, Gy, Gz), value="$G$", ha=left, va=bottom
ticks: off
fontsize: 24
:::
:::::



:::::{answer}
$$
V_{OABCDEFG} = 28
$$


::::{solution}
Vi kan tenke på volumet av $OABCDEFG$ som volumet av en pyramide med grunnflate $OABC$ hvor vi fjerner volumet av en pyramide med grunnflate $DEFG$ der de har et felles toppunkt $T$.

Koordinatene i $xy$-planet til toppunktet vil ligge i midten av begge grunnflater som bare er gitt ved

$$
\lvec{OT}_{xy} = \dfrac{\lvec{OO} + \lvec{OA} + \lvec{OB} + \lvec{OC}}{4} = \dfrac{[8, 8, 0]}{4} = [2, 2, 0]
$$

Samtidig vil linja gjennom $O$ og $D$ nødvendigvis gå gjennom dette toppunktet $T$, så vi kan lage en parameterframstilling for denne linja og bestemme $t$ slik at $x = y = 2$:

$$
\vec r(t) = \lvec{OO} + \lvec{OD} \cdot t = [t, t, 3t]
$$

For at $x$- og $y$-koordinatene skal være lik $2$, må $t = 2$ som betyr at toppunktet vil ha koordinatene

$$
\lvec{OT} = \vec r(2) = [2, 2, 6]
$$

Grunnflaten $OABC$ og $DEFG$ er kvadrater, så volumet av hver av dem kan vi finne ved å bruke at volumet for en pyramide med grunnflate $G$ og høyde $h$ er gitt ved

$$
V = \dfrac{Gh}{3}
$$

Grunnflatearealet til $OABC$ er 

$$
G_{OABC} = 4^2 = 16
$$

Grunnflatearealet til $DEFG$ er

$$
G_{DEFG} = \abs{\lvec{DE}}^2 = 2^2 = 4
$$

Siden begge grunnflater er parallelle med $xy$-planet, så er høyden til hver pyramide forskjellen i $z$-koordinatene til punktet $T$ og $z$-koordinaten til grunnflaten. 

Høyden til pyramiden med grunnflate $OABC$ er

$$
h_{OABC} = 6 - 0 = 6
$$

som gir volumet

$$
V = \dfrac{G_{OABC} \cdot h_{OABC}}{3} = \dfrac{16 \cdot 6}{3} = 32
$$

Høyden til pyramiden med grunnflate $DEFG$ er

$$
h_{DEFG} = 6 - 3 = 3
$$

som gir volumet

$$
V = \dfrac{G_{DEFG} \cdot h_{DEFG}}{3} = \dfrac{4 \cdot 3}{3} = 4
$$

Dermed er volumet av $OABCDEFG$ gitt ved volumet av den store pyramiden minus volumet av den lille pyramiden:

$$
V_{OABCDEFG} = V_{OABC} - V_{DEFG} = 32 - 4 = 28
$$


::::
:::::

:::::::::::::
:::::::::::::::




---



:::::::::::::::{exercise} Oppgave 9
To plan $\alpha$ og $\beta$ er gitt ved 

$$
\begin{align*}
\alpha &: \quad 2x - 2y + z + 21 = 0 \\
\\
\beta &: \quad 7x - 4y + 4z + 56 = 0
\end{align*}
$$


En kuleflate $K$ tangerer $\alpha$ i $P(-3, 7, -1)$ og $\beta$ i $Q(-4, 5, -2)$.

:::::::::::::{part} a
Bestem en likning for $K$.


:::{hint} Hint
Tenk deg en linje som starter i $P$ og en annen linje som starter i $Q$. Skjæringspunktet mellom disse linjene vil være sentrumet til kulen.
:::

:::::{answer}
$$
(x - 3)^2 + (y - 1)^2 + (z - 2)^2 = 9^2
$$


::::{solution}
Vi tenker oss en linje $\ell$ som går gjennom punktet $P$ og står normalt på $\alpha$. Denne linja vil gå gjennom kulens sentrum. Så tenker vi oss en annen linje $m$ som går gjennom punktet$ Q$ og står normalt på $\beta$. Denne linja vil også gå gjennom kulens sentrum. Strategien er derfor å finne skjæringspunktet mellom de to linjene.

Vi lager parameterframstillingene først. Retningsvektorene til linjene er bare lik normalvektorene til planene som vi kan lese av fra planlikningene til å være:

$$
\vec n_\alpha = [2, -2, 1] \qog \vec n_\beta = [7, -4, 4]
$$

Da får vi:

$$
\begin{align*}
\vec r_\ell(t) &= \lvec{OP} + \vec n_\alpha \cdot t \\
\\
&= [-3, 7, -1] + [2, -2, 1] \cdot t \\
\\
&= [-3 + 2t, 7 - 2t, -1 + t]
\end{align*}
$$

og 

$$
\begin{align*}
\vec r_m(s) &= \lvec{OQ} + \vec n_\beta \cdot s \\
\\
&= [-4, 5, -2] + [7, -4, 4] \cdot s \\
\\
&= [-4 + 7s, 5 - 4s, -2 + 4s]
\end{align*}
$$

Så finner vi skjæringspunktet mellom linjene ved å løse $\vec r_\ell(t) = \vec r_m(s)$:

$$
-3 + 2t = -4 + 7s \and 7 - 2t = 5 - 4s \and -1 + t = -2 + 4s
$$

Vi løser den siste likningen for $t$:

$$
-1 + t = -2 + 4s \liff t = -1 + 4s
$$

Så setter vi inn i den første likningen:

$$
-3 + 2\cdot (-1 + 4s) = -4 + 7s
$$

$$
-3 - 2 + 8s = -4 + 7s \liff s = 1
$$

som også gir at 

$$
t = -1 + 4 = 3
$$

Vi setter inn i begge parameterframstillinger for å sikre at vi får samme punkt: 

$$
\vec r_\ell(3) = [-3 + 2\cdot 3, 7 - 2\cdot 3, -1 + 3] = [3, 1, 2]
$$

og 

$$
\vec r_m(1) = [-4 + 7, 5 - 4, -2 + 4] = [3, 1, 2]
$$


Altså er kulens sentrum $S(3, 1, 2)$. Siden vi flytte oss én enhet langs $\vec n_\beta$ med linja $m$, vil radius til kula være

$$
r = \abs{\vec n_\beta} = \sqrt{7^2 + (-4)^2 + 4^2} = \sqrt{81} = 9
$$

Dermed er en likning for kuleflaten gitt ved 

$$
(x - 3)^2 + (y - 1)^2 + (z - 2)^2 = 9^2
$$


::::


:::::
:::::::::::::



Planet $\alpha$ og $\beta$ skjærer hverandre langs en linje $\ell$. Punktet $A(-8, 5, 5)$ ligger på linja.

:::::::::::::{part} b
Lag en parameterframstilling for $\ell$.



:::::{answer}
$\vec r_\ell(t) = [-8 - 4t, 5 - t, 5 + 6t]$

::::{solution}
Retningsvektoren til linja vil stå normalt på begge plan, slik at vi kan lage en retningsvektor for linja ved å ta kryssproduktet av normalvektorene. Vi har 

$$
\vec n_\alpha = [2, -2, 1] \qog \vec n_\beta = [7, -4, 4]
$$

Da får vi en retningsvektor blir:

$$
\begin{align*}
\vec v_\ell = \vec n_\alpha \times \vec n_\beta = \mqty|\vec e_x & \vec e_y & \vec e_z \\ 2 & -2 & 1 \\ 7 & -4 & 4| \\
\\
&= \vec e_x \cdot \underbrace{\mqty|-2 & 1 \\ -4 & 4|}_{\displaystyle = -4} - \vec e_y \cdot \underbrace{\mqty|2 & 1 \\ 7 & 4|}_{\displaystyle = 1} + \vec e_z \cdot \underbrace{\mqty|2 & -2 \\ 7 & -4|}_{\displaystyle = 6} \\
\\
&= [-4, -1, 6]
\end{align*}
$$

Da kan vi lage en parameterframstilling for linja som:

$$
\begin{align*}
\vec r_\ell(t) &= \lvec{OA} + \vec v \cdot t \\
\\
&= [-8, 5, 5] + [-4, -1, 6] \cdot t \\
\\
&= [-8 - 4t, 5 - t, 5 + 6t]
\end{align*}
$$
::::
:::::


:::::::::::::



Et plan $\gamma$ er gitt ved

$$
\gamma: \quad x + 2y + 2z - 27 = 0
$$

Planet $\gamma$ skjærer $K$ langs en sirkel.

:::::::::::::{part} c
Bestem sentrum og radius til sirkelen.


:::::{answer}
Sentrum i $(5, 5, 6)$ og radius $3\sqrt{5}$.

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
text: 4, 2, "$\gamma$", center-right
:::

La $L$ være avstanden fra sentrum $S$ til planet $\gamma$ og $\rho$ være radius i skjæringssirkelen, og $r$ være radius til kula. Da kan vi bruke skissen vist til høyre for å forstå geometrien.

Kula har sentrum $S(3, 1, 2)$. Normalvektoren til planet er 

$$
\vec n_\gamma = [1, 2, 2] \limplies \abs{\vec n_\gamma} = 3
$$

Dermed får vi at avstanden $L$ fra $S$ til $\gamma$ er 

$$
\begin{align*}
L &= \dfrac{\abs{x + 2y + 2z - 27}}{\abs{\vec n_\gamma}} \\
\\
&= \dfrac{\abs{3 + 2 \cdot 1 + 2 \cdot 2 - 27}}{3} \\
\\
&= \dfrac{\abs{-18}}{3} \\
\\
&= 6
\end{align*}
$$

Dermed blir radien til sirkelen

$$
L^2 + \rho^2 = r^2 \implies \rho = \sqrt{r^2 - L^2} \\
$$

$$
\rho = \sqrt{9^2 - 6^2} = \sqrt{45} = 3 \sqrt{5}
$$

Linja som går gjennom $S$ og har retningsvektor lik normalvektoren til planet $\gamma$ vil skjære planet i sentrum av sirkelen. Vi har at 

$$
\begin{align*}
\vec r(t) &= \lvec{OS} + \vec n_\gamma \cdot t \\
\\
&= [3, 1, 2] + [1, 2, 2] \cdot t \\
\\
&= [3 + t, 1 + 2t, 2 + 2t]
\end{align*}
$$

Vi setter inn koordinatene til linja inn i planlikningen til $\gamma$ for å finne sentrum av sirkelen. Vi har at

$$
\underbrace{(3 + t)}_{\displaystyle x} + 2 \underbrace{(1 + 2t)}_{\displaystyle y} + 2 \underbrace{(2 + 2t)}_{\displaystyle z} - 27 = 0
$$

$$
3 + t + 2 + 4t + 4 + 4t - 27 = 0
$$

$$
9t - 18 = 0 \liff t = 2
$$

Dermed er koordinatene til sirkelens sentrum

$$
\vec r(2) = [3 + 2, 1 + 2\cdot 2, 2 + 2\cdot 2] = [5, 5, 6]
$$

Altså har sirkelen sentrum i $(5, 5, 6)$ og radius $3\sqrt{5}$.



::::

:::::


:::::::::::::


:::::::::::::::




---




---



:::::::::::::::{exercise} Oppgave 10

:::{interactive-plot3d}
interactive-var: t, -6, 6, 61
interactive-var-start: t=-2
width: 50%
align: right
let: Ax = 0
let: Ay = 0
let: Az = 0
let: Bx = 2
let: By = 0
let: Bz = 4
let: Cx = 0
let: Cy = 3
let: Cz = 6
let: Tx = t
let: Ty = t
let: Tz = t**2 + 5
pyramid: base=[(Ax, Ay, Az), (Bx, By, Bz), (Cx, Cy, Cz)], apex=(Tx, Ty, Tz), color=blue, alpha=0.2
curve: x=t, y=t, z=t**2 + 5, t=(-6, 6), color=red, lw=2.5
ticks: off
xrange: (-2, 6)
yrange: (-2, 6)
zrange: (-2, 10)
text: at=(Ax, Ay, Az), value="$A$", ha=right, va=top
text: at=(Bx, By, Bz), value="$B$", ha=left, va=center
text: at=(Cx, Cy, Cz), value="$C$", ha=left, va=bottom
text: at=(t, t, t**2 + 5), value="$T$", ha=right, va=center
fontsize: 24
point: at=(t, t, t**2 + 5), drag=t, color=black
:::



En pyramide har grunnflate i punktene $A(0, 0, 0)$, $B(2, 0, 4)$ og $C(0, 3, 6)$. 

Pyramiden har et toppunkt $T(t, t, t^2 + 5)$ der $t \in \real$ som ligger på en kurve i rommet.


I figuren til høyre kan du flytte rundt på punktet $T$.

:::::::::::::{part} a
Bestem hvilke punkter $T$ som gir at volumet av pyramiden er lik $10$.


:::::{answer}
$$
T(-1, -1, 6) \or T(5, 5, 30)
$$

::::{solution}
Vi starter med å finne en funksjon $V(t)$ for volumet til pyramiden. Grunnflatevektoren er gitt ved 

$$
\vec G = \dfrac{1}{2} \cdot \lvec{AB} \times \lvec{AC}
$$

Vi har at 

$$
\lvec{AB} = [2, 0, 4] \qog \lvec{AC} = [0, 3, 6]
$$

Kryssproduktet av de to vektorene er da

$$
\begin{align*}
\lvec{AB} \times \lvec{AC} &= \mqty|\vec e_x & \vec e_y & \vec e_z \\ 2 & 0 & 4 \\ 0 & 3 & 6| \\
\\
&= \vec e_x \cdot \underbrace{\mqty|0 & 4 \\ 3 & 6|}_{\displaystyle = -12} - \vec e_y \cdot \underbrace{\mqty|2 & 4 \\ 0 & 6|}_{\displaystyle = 12} + \vec e_z \cdot \underbrace{\mqty|2 & 0 \\ 0 & 3|}_{\displaystyle = 6} \\
\\
&= [-12, -12, 6]
\end{align*}
$$

som gir at grunnflatevektoren er 

$$
\vec G = [-6, -6, 3]
$$

Forflytningsvektoren fra grunnflaten til toppunktet kan være 

$$
\lvec{AT} = [t, t, t^2 + 5]
$$

Da blir en funksjon $V(t)$ for volumet til pyramiden gitt ved 

$$
V(t) = \dfrac{\abs{\vec G \cdot \lvec{AT}}}{3}
$$

Vi har at 

$$
\begin{align*}
\vec G \cdot \lvec{AT} &= [-6, -6, 3] \cdot [t, t, t^2 + 5] \\
\\ 
&= -6t - 6t + 3(t^2 + 5) \\
\\
&= 3t^2 - 12t + 15 \\
\\
&= 3(t^2 - 4t + 5)
\end{align*}
$$

Vi har at 

$$
t^2 - 4t + 5 = (t - 2)^2 + 1 > 0 \qfor t \in \real
$$

som vi kan tolke som en konveks andregradsfunksjon med bunnpunkt i $(2, 1)$, og vil derfor aldri være negativ.

Derfor vil absoluttverdien av uttrykket alltid være lik selve uttrykket, altså

$$
|3(t^2 - 4t + 5)| = 3(t^2 - 4t + 5)
$$

Dermed blir volumfunksjonen


$$
V(t) = \dfrac{\abs{\vec G \cdot \lvec{AT}}}{3} = \dfrac{\abs{3(t^2 - 4t + 5)}}{3} = t^2 - 4t + 5
$$


Vi skal bestemme $t$ slik at $V(t) = 10$. Da får vi:

$$
V(t) = 10 \liff t^2 - 4t + 5 = 10 \liff t^2 - 4t - 5 = 0
$$

Vi bruker $abc$-formelen:

$$
\begin{align*}
t &= \dfrac{4 \pm \sqrt{16 + 20}}{2} \\
\\
&= \dfrac{4 \pm 6}{2} \\
\\
&= 2 \pm 3
\end{align*}
$$


som gir 

$$
t = -1 \or t = 5
$$

Dermed blir de ulike mulige toppunktene $T$ som gir volumet $10$:

$$
T(-1, -1, 6) \or T(5, 5, 30)
$$

::::
:::::

:::::::::::::


:::::::::::::{part} b
Bestem det minste mulige volumet pyramiden kan ha.


:::{hint} Hint
Bruk derivasjon til å finne den verdien av $t$ som gir det minste mulige volumet $V(t)$.
:::


:::::{answer}
$V_\mathrm{minst} = 1$.

::::{solution}
Fra oppgave **a)** har vi at volumfunksjonen er

$$
V(t) = t^2 - 4t + 5
$$

Volumet blir minst mulig dersom $V'(t) = 0$. Vi har at 

$$
V'(t) = 2t - 4 = 0 \liff t = 2
$$

Altså er det minste mulige volumet pyramiden kan ha gitt ved 

$$
V_\mathrm{minst} = V(2) = 2^2 - 4 \cdot 2 + 5 = 4 - 8 + 5 = 1
$$
::::
:::::

:::::::::::::
:::::::::::::::





---



:::::::::::::::{exercise} Oppgave 11 
* Et plan $\alpha$ går gjennom punktene $A(0, 0, 0)$, $B(2, 1, 0)$ og $C(2, 0, 1)$.
* En linje $\ell$ er gitt ved $\vec r_\ell(t) = [9, 0, 0] + [2, 1, 0] \cdot t$.
* En kuleflate $K$ har sentrum $S$ på linja $\ell$. Kula inneholder punktet $D(9, 0, 2)$.
* Kuleflaten $K$ tangerer $\alpha$.


Bestem kulens radius og de mulige koordinatene til sentrum $S$.


:::::{answer}
Kula har radius $3$ og sentrum i enten $S_1(11, 1, 0)$ eller $S_2(7, -1, 0)$.

::::{solution}
Først bør vi finne en normalvektor til planet så vi kan sammenligne hvordan planet er orientert i forhold til linja. 

Vi har at 

$$
\lvec{AB} = [2, 1, 0] \qog \lvec{AC} = [2, 0, 1]
$$

Alle normalvektorer til planet er parallell med kryssproduktet av de to vektorene, så:

$$
\begin{align*}
\lvec{AB} \times \lvec{AC} &= \mqty|\vec e_x & \vec e_y & \vec e_z \\ 2 & 1 & 0 \\ 2 & 0 & 1| \\
\\
&= \vec e_x \cdot \underbrace{\mqty|1 & 0 \\ 0 & 1|}_{\displaystyle = 1} - \vec e_y \cdot \underbrace{\mqty|2 & 0 \\ 2 & 1|}_{\displaystyle = 2} + \vec e_z \cdot \underbrace{\mqty|2 & 1 \\ 2 & 0|}_{\displaystyle = -2} \\
\\
&= [1, -2, -2]
\end{align*}
$$

Dermed vil $n_\alpha = [1, -2, -2]$ være en normalvektor for $\alpha$. Retningsvektoren til linja $\ell$ er $v_\ell = [2, 1, 0]$. Vi kan merke oss at 

$$
\vec n_\alpha \cdot \vec v_\ell = [1, -2, -2] \cdot [2, 1, 0] = 0
$$

som betyr at planet og linja er parallelle. Det betyr at avstanden fra planet til linja *alltid* er den samme. Siden kuleflaten har sentrum på linja, og planet tangerer kula, vil denne avstanden være lik radius. 

For å regne ut denne avstanden trenger vi en planlikning til $\alpha$:

$$
\lvec{AP} \cdot \vec n_\alpha = 0
$$

$$
[x - 0, y - 0, z - 0] \cdot [1, -2, -2] = 0
$$

$$
x - 2y - 2z = 0
$$

Vi kan sette inn koordinatene til parameterframstillingen for linja i formelen for avstand fra punkt til plan for å finne radius:

$$
r &= \dfrac{\abs{x - 2y - 2z}}{\sqrt{1^2 + (-2)^2 + (-2)^2}} \\
\\
&= \dfrac{\abs{(9 + 2t) - 2\cdot t - 2 \cdot 0}}{3} \\
\\
&= \dfrac{\abs{9}}{3} \\
\\
&= 3
$$

Altså må radius til kula være $r = 3$. 

Nå må vi bare finne koordinatene til kulens sentrum. Vi har at punktet $D$ ligger på kuleflaten, og siden sentrum $S$ ligger på linja, må vi ha at 

$$
\abs{\vec r_\ell(t) - \lvec{OD}}^2 = r^2 = 9
$$

for maksimalt to verdier av $t$. Vi setter opp likningen og løser for $t$. Vi har at

$$
\vec r_\ell(t) - \lvec{OD} = [9 + 2t, t, 0] - [9, 0, 2] = [2t, t, -2]
$$

som gir oss 

$$
\abs{\vec r_\ell(t) - \lvec{OD}}^2 = 9
$$

$$
(2t)^2 + t^2 + (-2)^2 = 9
$$

$$
5t^2 + 4 = 9 \liff 5t^2 = 5 \liff t = \pm 1
$$

Dermed vil de mulige sentrene til kula være

$$
\lvec{OS_1} = \vec r_\ell(1) = [11, 1, 0]
$$

eller 

$$
\lvec{OS_2} = \vec r_\ell(-1) = [7, -1, 0]
$$


Altså har kula radius $3$ og sentrum i enten $S_1(11, 1, 0)$ eller $S_2(7, -1, 0)$.
::::
:::::
:::::::::::::::




:::::::::::::::{exercise} Oppgave 12
Gitt punktene $A(2, 1, 4)$, $B(4, 0, 4)$ og $C(2, 3, 2)$, og en linje $\ell$ gitt ved 

$$
\vec r_\ell(t) = [2, 1, 4] + [1, 2, -1] \cdot t
$$

* Planet $\alpha$ går gjennom punktene $A$, $B$ og $C$.
* Et punkt $S$ ligger på linja $\ell$ og er sentrum i en kuleflate $K$.
* Planet $\alpha$ skjærer kuleflata $K$ i en sirkel med radius $3$.
* Kuleflaten har radius $5$.

Bestem de mulige koordinatene til kulens sentrum.


:::::{answer}
$S_1(6, 9, 0)$ eller $S_2(-2, -7, 8)$

::::{solution}
Vi kan først og fremst merke oss at punktet $A(2, 1, 4)$ ligger både i planet og på linja siden

$$
\lvec{OA} = \vec r_\ell(0) = [2, 1, 4].
$$

Det er ikke opplagt hvordan vi går fram her, så vi får først finne ut mer om objektene involvert. Avstanden fra kulens sentrum $S$ til planet vil tilfredsstille

$$
L^2 + \rho^2 = r^2
$$

der $\rho$ er radius til skjæringssirkelen mellom planet og kulen, og $r$ er radius til kulen, og $L$ er avstanden fra $S$ til planet. Vi har at $\rho = 3$ og $r = 5$, så 

$$
L^2 = r^2 - \rho^2 = 5^2 - 3^2 = 16 \limplies L = 4
$$


Siden punktet $S$ ligger på linja $\ell$ vil vi for minst én verdi av $t$ ha at 

$$
\lvec{AS} = \underbrace{\vec r_\ell(t)}_{\displaystyle \lvec{OS}} - \lvec{OA} = [t, 2t, -t]
$$


Vi vet allerede avstanden $L$ fra $S$ til planet, så da må vi ha at 

$$
L = \dfrac{\abs{\lvec{AS} \cdot \vec n_\alpha}}{\abs{\vec n_\alpha}} = 4
$$

For å finne denne avstanden, må vi ha en normalvektor til planet. Dette kan vi finne ved kryssproduktet av to vektorer som ligger i planet, for eksempel $\lvec{AB}$ og $\lvec{AC}$. Vi har at

$$
\lvec{AB} = [2, -1, 0] \qog \lvec{AC} = [0, 2, -2]
$$

som gir

$$
\begin{align*}
\lvec{AB} \times \lvec{AC} &= \mqty|\vec e_x & \vec e_y & \vec e_z \\ 2 & -1 & 0 \\ 0 & 2 & -2| \\
\\
&= \vec e_x \cdot \underbrace{\mqty|-1 & 0 \\ 2 & -2|}_{\displaystyle = 2} - \vec e_y \cdot \underbrace{\mqty|2 & 0 \\ 0 & -2|}_{\displaystyle = -4} + \vec e_z \cdot \underbrace{\mqty|2 & -1 \\ 0 & 2|}_{\displaystyle = 4} \\
\\
&= [2, 4, 4] \\
\\
&= 2 \cdot [1, 2, 2]
\end{align*}
$$

Altså er en normalvektor til planet gitt ved 

$$
\vec n_\alpha = [1, 2, 2] \limplies \abs{\vec n_\alpha} = 3
$$

Nå kan vi sette opp en likning for $t$: 

$$
L = \dfrac{\abs{\lvec{AS} \cdot \vec n_\alpha}}{\abs{\vec n_\alpha}}
$$

$$
4 = \dfrac{\abs{[t, 2t, -t] \cdot [1, 2, 2]}}{3}
$$

$$
4 = \dfrac{\abs{t + 4t - 2t}}{3}
$$

$$
4 = \dfrac{\abs{3t}}{3} = \abs{t}
$$

som gir at 

$$
\abs{t} = 4 \liff t = \pm 4
$$

Altså blir de mulige koordinatene til kulens sentrum gitt ved 

$$
\lvec{OS_1} = \vec r_\ell(4) = [2, 1, 4] + [1, 2, -1] \cdot 4 = [6, 9, 0]
$$

eller

$$
\lvec{OS_2} = \vec r_\ell(-4) = [2, 1, 4] + [1, 2, -1] \cdot (-4) = [-2, -7, 8]
$$

Altså har kulen sentrum i enten $S_1(6, 9, 0)$ eller $S_2(-2, -7, 8)$.


::::
:::::
:::::::::::::::



---



:::::::::::::::{exercise} Oppgave 13
* Et plan $\alpha$ er gitt ved $x + 2y + 2z - 9 = 0$
* En linje $\ell$ er gitt ved $\vec r_\ell(t) = [1, 1, 2] + [1, 1, 1] \cdot t$
* En kuleflate $K$ har sentrum $S$ som ligger på linja $\ell$
* $K$ tangerer $\alpha$ i punktet $A(3, 1, 2)$.

Bestem kuleflatens sentrum og radius.



:::::{answer}
Sentrum $S(5, 5, 6)$ og radius $r = 6$.


::::{solution}
Vi vet at punktene $S$ ligger på linja $\ell$. Siden sentrum $S$ ligger på linja vil $\vec{AS}$ peke fra tangeringspunktet til sentrum $S$. Lengden av denne vektoren er lik radiusen til kula. 

$$
\lvec{OS} = \vec r_\ell(t) = [t + 1, t + 1, t + 2]
$$

for én verdi av $t$. Betyr at $\abs{\lvec{AS}}^2 = r^2$ der $r$ er kulens radius. Vi kan finne et eksplisitt uttrykk for dette:

$$
\lvec{AS} = \vec r_\ell(t) - \lvec{OA} = [t + 1, t + 1, t + 2] - [3, 1, 2] = [t - 2, t, t]
$$

Dermed er 

$$
r^2 = \abs{\lvec{AS}}^2 = (t - 2)^2 + t^2 + t^2 = 3t^2 - 4t + 4
$$

Samtidig vet vi at $\alpha$ tangerer $K$ i punktet $A$. Det betyr at den avstanden fra punktet $S$ til $\alpha$ også er lik kulens radius $r$. Da har vi 

$$
\begin{align*}
r &= L = \dfrac{\abs{(t + 1) + 2(t + 1) + 2(t + 1) - 9}}{3} \\
\\
&= \dfrac{\abs{t + 1 + 2t + 2 + 2t + 2 - 9}}{3} \\
\\
&= \dfrac{\abs{5t - 2}}{3}
\end{align*}
$$

Hvis vi krever at de to uttrykkene for $r$ er like, eller snarere $r^2$, får vi:

$$
\dfrac{(5t - 2)^2}{3^2} = 3t^2 - 4t + 4
$$

$$
(5t - 2)^2 = 9(3t^2 - 4t + 4) = 27t^2 - 36t + 36
$$

$$
25t^2 - 20t + 4 = 27t^2 - 36t + 36
$$

$$
0 = 2t^2 - 16t + 32
$$

$$
0 = t^2 - 8t + 16 = (t - 4)^2
$$

Altså får vi at 

$$
t = 4
$$

Kulens sentrum blir da 

$$
\lvec{OS} = \vec r_\ell(4) = [1, 1, 2] + [1, 1, 1] \cdot 4 = [5, 5, 6]
$$

Kulens radius tilfredsstiller

$$
r^2 = 3t^2 - 4t + 4 = 3 \cdot 4^2 - 4 \cdot 4 + 4 = 48 - 16 + 4 = 36
$$

som gir at 

$$
r = 6
$$

Altså er kulens sentrum $S(5, 5, 6)$ og radius $r = 6$.
::::
:::::


:::::::::::::::