# Enhetssirkelen og radianer: Oppgaver



:::::::::::::::{exercise} Oppgave 1


:::::::::::::{part} a

Finn vinkelen i radianer.


$$
\alpha = 30\degree
$$


:::::{answer}
$$
\alpha = \dfrac{\pi}{6}
$$

::::{solution}
$$
\alpha = 30\degree \cdot \dfrac{\pi}{180\degree} = \dfrac{\pi}{6}
$$
::::
:::::


:::::::::::::


:::::::::::::{part} b
Finn vinkelen i radianer.

$$
\beta = 45\degree
$$


:::::{answer}
$$
\beta = \dfrac{\pi}{4}
$$

::::{solution}
$$
\beta = 45\degree \cdot \dfrac{\pi}{180\degree} = \dfrac{\pi}{4}
$$
::::
:::::


:::::::::::::


:::::::::::::{part} c
Finn vinkelen i radianer.

$$
\gamma = 60\degree
$$


:::::{answer}
$$
\gamma = \dfrac{\pi}{3}
$$

::::{solution}
$$
\gamma = 60\degree \cdot \dfrac{\pi}{180\degree} = \dfrac{\pi}{3}
$$
::::
:::::


:::::::::::::


:::::::::::::{part} d
Finn vinkelen i radianer.

$$
\varphi = 90\degree
$$


:::::{answer}


::::{solution}
$$
\varphi = 90\degree \cdot \dfrac{\pi}{180\degree} = \dfrac{\pi}{2}
$$
::::
:::::


:::::::::::::


:::::::::::::{part} e
Finn vinkelen i radianer:

$$
\theta = 120\degree
$$


:::::{answer}
$$
\theta = \dfrac{2\pi}{3}
$$

::::{solution}
$$
\theta = 120\degree \cdot \dfrac{\pi}{180\degree} = \dfrac{2\pi}{3}
$$
::::
:::::


:::::::::::::


:::::::::::::::



---



:::::::::::::::{exercise} Oppgave 2
:::::::::::::{part} a
Finn vinkelen i grader.

$$
\alpha = \pi
$$


:::::{answer}
$$
\alpha = 180\degree
$$

::::{solution}
$$
\alpha = \pi \cdot \dfrac{180\degree}{\pi} = 180\degree
$$
::::
:::::

:::::::::::::


:::::::::::::{part} b
Finn vinkelen i grader.

$$
\beta = -\dfrac{\pi}{2}
$$


:::::{answer}


::::{solution}
$$
\beta = -\dfrac{\pi}{2} \cdot \dfrac{180\degree}{\pi} = -90\degree
$$
::::
:::::

:::::::::::::



:::::::::::::{part} c
Finn vinkelen i grader.

$$
\gamma = \dfrac{4\pi}{3}
$$


:::::{answer}
$$
\gamma = 240\degree
$$

::::{solution}
$$
\gamma = \dfrac{4\pi}{3} \cdot \dfrac{180\degree}{\pi} = 240\degree
$$
::::
:::::


:::::::::::::


:::::::::::::{part} d
Finn vinkelen i grader.

$$
\varphi = \dfrac{3\pi}{2}
$$


:::::{answer}
$$
\varphi = 270\degree
$$

::::{solution}
$$
\varphi = \dfrac{3\pi}{2} \cdot \dfrac{180\degree}{\pi} = 270\degree
$$
::::
:::::


:::::::::::::


:::::::::::::::



---



:::::::::::::::{exercise} Oppgave 3


:::::::::::::{part} a
En vinkel er gitt ved $\varphi = \dfrac{2\pi}{3}$. 

Hvilken figur nedenfor viser $\varphi$ i enhetssirkelen?


::::{multi-plot2}
---
rows: 2
cols: 2
fontsize: 32
---
:::{plot}
width: 100%
circle: (0, 0), 1
let: u = 4 * pi / 3
angle-arc: (0, 0), 0.3, 0, u*180/pi, red, arrow
line-segment: (0, 0), (cos(u), sin(u)), blue
text: 0.45 * cos(u/2), 0.45 * sin(u/2), "$\varphi$", center-center
text: 1.1, 1.1, "A", center-center, bbox
axis: equal
ticks: off
:::


:::{plot}
width: 100%
circle: (0, 0), 1
let: u = 2 * pi / 3
angle-arc: (0, 0), 0.3, 0, u*180/pi, red, arrow
line-segment: (0, 0), (cos(u), sin(u)), blue
text: 0.45 * cos(u/2), 0.45 * sin(u/2), "$\varphi$", center-center
text: 1.1, 1.1, "B", center-center, bbox
axis: equal
ticks: off
:::

:::{plot}
width: 100%
circle: (0, 0), 1
let: u = -2 * pi / 3
angle-arc: (0, 0), 0.3, 0, u*180/pi, red, arrow
line-segment: (0, 0), (cos(u), sin(u)), blue
text: 0.45 * cos(u/2), 0.45 * sin(u/2), "$\varphi$", center-center
text: 1.1, 1.1, "C", center-center, bbox
axis: equal
ticks: off
:::

:::{plot}
width: 100%
circle: (0, 0), 1
let: u = -4 * pi / 3
angle-arc: (0, 0), 0.3, 0, u*180/pi, red, arrow
line-segment: (0, 0), (cos(u), sin(u)), blue
text: 0.45 * cos(u/2), 0.45 * sin(u/2), "$\varphi$", center-center
text: 1.1, 1.1, "D", center-center, bbox
axis: equal
ticks: off
:::

::::


:::::{answer}
Figur B


::::{solution}
Vi kan regne ut vinkelen i grader for å finne i hvilken kvadrant vinkelen ligger i:

$$
\varphi = \dfrac{2\pi }{3} \cdot \dfrac{180\degree}{\pi} = 120\degree
$$

som betyr at vinkelen ligger i 2. kvadrant. Dermed må det være figur B som viser vinkelen.
::::
:::::

:::::::::::::



:::::::::::::{part} b
En vinkel er gitt ved $\theta = -\dfrac{\pi}{4}$. 

Hvilken figur nedenfor viser $\theta$ i enhetssirkelen?

::::{multi-plot2}
---
rows: 2
cols: 2
fontsize: 32
---
:::{plot}
nocache:
width: 100%
circle: (0, 0), 1
let: u = -pi / 4
angle-arc: (0, 0), 0.3, 0, u*180/pi, red, arrow
line-segment: (0, 0), (cos(u), sin(u)), blue
text: 0.45 * cos(u/2), 0.45 * sin(u/2), "$\theta$", center-center
text: 1.1, 1.1, "A", center-center, bbox
axis: equal
ticks: off
:::


:::{plot}
nocache:
width: 100%
circle: (0, 0), 1
let: u = pi / 4
angle-arc: (0, 0), 0.3, 0, u*180/pi, red, arrow
line-segment: (0, 0), (cos(u), sin(u)), blue
text: 0.45 * cos(u/2), 0.45 * sin(u/2), "$\theta$", center-center
text: 1.1, 1.1, "B", center-center, bbox
axis: equal
ticks: off
:::

:::{plot}
nocache:
width: 100%
circle: (0, 0), 1
let: u = 2*pi - pi/4
angle-arc: (0, 0), 0.3, 0, u*180/pi, red, arrow
line-segment: (0, 0), (cos(u), sin(u)), blue
text: 0.45 * cos(u/2), 0.45 * sin(u/2), "$\theta$", center-center
text: 1.1, 1.1, "C", center-center, bbox
axis: equal
ticks: off
:::

:::{plot}
nocache:
width: 100%
circle: (0, 0), 1
let: u = pi + pi/4
angle-arc: (0, 0), 0.3, 0, u*180/pi, red, arrow
line-segment: (0, 0), (cos(u), sin(u)), blue
text: 0.45 * cos(u/2), 0.45 * sin(u/2), "$\theta$", center-center
text: 1.1, 1.1, "D", center-center, bbox
axis: equal
ticks: off
:::

::::


:::::{answer}
Figur A.

::::{solution}
Vi kan omregne vinkelen til grader: 

$$
\theta = -\dfrac{\pi}{4} \cdot \dfrac{180\degree}{\pi} = -45\degree
$$

Altså ligger vinkelen i 4. kvadrant. Omløpsretningen er negativ, som betyr at det er figur A som viser vinkelen.
::::
:::::


:::::::::::::



:::::::::::::{part} c
En vinkel er gitt ved $\gamma = \dfrac{3\pi}{4}$. 

Hvilken figur nedenfor viser $\gamma$ i enhetssirkelen?

::::{multi-plot2}
---
rows: 2
cols: 2
fontsize: 32
---
:::{plot}
nocache:
width: 100%
circle: (0, 0), 1
let: u = -pi + pi/4
angle-arc: (0, 0), 0.3, 0, u*180/pi, red, arrow
line-segment: (0, 0), (cos(u), sin(u)), blue
text: 0.45 * cos(u/2), 0.45 * sin(u/2), "$\gamma$", center-center
text: 1.1, 1.1, "A", center-center, bbox
axis: equal
ticks: off
:::


:::{plot}
nocache:
width: 100%
circle: (0, 0), 1
let: u = -5*pi/4
angle-arc: (0, 0), 0.3, 0, u*180/pi, red, arrow
line-segment: (0, 0), (cos(u), sin(u)), blue
text: 0.45 * cos(u/2), 0.45 * sin(u/2), "$\gamma$", center-center
text: 1.1, 1.1, "B", center-center, bbox
axis: equal
ticks: off
:::

:::{plot}
nocache:
width: 100%
circle: (0, 0), 1
let: u = 3*pi/4
angle-arc: (0, 0), 0.3, 0, u*180/pi, red, arrow
line-segment: (0, 0), (cos(u), sin(u)), blue
text: 0.45 * cos(u/2), 0.45 * sin(u/2), "$\gamma$", center-center
text: 1.1, 1.1, "C", center-center, bbox
axis: equal
ticks: off
:::

:::{plot}
nocache:
width: 100%
circle: (0, 0), 1
let: u = 5*pi/4
angle-arc: (0, 0), 0.3, 0, u*180/pi, red, arrow
line-segment: (0, 0), (cos(u), sin(u)), blue
text: 0.45 * cos(u/2), 0.45 * sin(u/2), "$\gamma$", center-center
text: 1.1, 1.1, "D", center-center, bbox
axis: equal
ticks: off
:::

::::


:::::{answer}
Figur C.

::::{solution}
Vinkelen går i positiv omløpsretning. Regner vi om til grader får vi:

$$
\gamma = \dfrac{3\pi}{4} \cdot \dfrac{180\degree}{\pi} = 135\degree = 3 \cdot 45\degree
$$

Altså ligger vinkelen i 2. kvadrant. Dermed er riktig svar figur C.
::::
:::::


:::::::::::::


:::::::::::::{part} d
En vinkel er gitt ved $\xi = -\dfrac{5\pi}{6}$. 

Hvilken figur nedenfor viser $\xi$ i enhetssirkelen?

::::{multi-plot2}
---
rows: 2
cols: 2
fontsize: 32
---
:::{plot}
nocache:
width: 100%
circle: (0, 0), 1
let: u = -5*pi/6
angle-arc: (0, 0), 0.3, 0, u*180/pi, red, arrow
line-segment: (0, 0), (cos(u), sin(u)), blue
text: 0.45 * cos(u/2), 0.45 * sin(u/2), "$\xi$", center-center
text: 1.1, 1.1, "A", center-center, bbox
axis: equal
ticks: off
:::


:::{plot}
nocache:
width: 100%
circle: (0, 0), 1
let: u = -pi + 5*pi/6
angle-arc: (0, 0), 0.3, 0, u*180/pi, red, arrow
line-segment: (0, 0), (cos(u), sin(u)), blue
text: 0.45 * cos(u/2), 0.45 * sin(u/2), "$\xi$", center-center
text: 1.1, 1.1, "B", center-center, bbox
axis: equal
ticks: off
:::

:::{plot}
nocache:
width: 100%
circle: (0, 0), 1
let: u = -pi - pi/6
angle-arc: (0, 0), 0.3, 0, u*180/pi, red, arrow
line-segment: (0, 0), (cos(u), sin(u)), blue
text: 0.45 * cos(u/2), 0.45 * sin(u/2), "$\xi$", center-center
text: 1.1, 1.1, "C", center-center, bbox
axis: equal
ticks: off
:::

:::{plot}
nocache:
width: 100%
circle: (0, 0), 1
let: u = 2*pi - pi/6
angle-arc: (0, 0), 0.3, 0, u*180/pi, red, arrow
line-segment: (0, 0), (cos(u), sin(u)), blue
text: 0.45 * cos(u/2), 0.45 * sin(u/2), "$\xi$", center-center
text: 1.1, 1.1, "D", center-center, bbox
axis: equal
ticks: off
:::

::::


:::::{answer}
Figur A.


::::{solution}
Vinkelen går i negativ omløpsretning. Vi kan regne om til grader for å finne hvilken kvadrant vinkelen ligger i:

$$
\xi = -\dfrac{5\pi }{6} \cdot \dfrac{180\degree}{\pi} = -150\degree
$$

Vinkelen ligger derfor i 3. kvadrant og dermed er riktig svar figur A.
::::
:::::


:::::::::::::


:::::::::::::::



---



:::::::::::::::{exercise} Oppgave 4
:::::::::::::{part} a
:::{plot}
nocache:
axis: equal
ticks: off
width: 100%
align: right
fontsize: 32
let: r = 3
let: u = 2 * pi / 3
circle: (0, 0), r, gray
line-segment: (0, 0), (r * cos(u), r * sin(u)), blue
text: 0.5 * r*cos(u), 0.5 * r*sin(u), "$3$", bottom-left
angle-arc: (0, 0), 0.3 * r, 0, u*180/pi, red, arrow
text: 0.45 * r * cos(u/2), 0.45 * r * sin(u/2), "$\varphi$", center-center
text: 1.1 * r * cos(u/2), 1.1 * r * sin(u/2), "$2\pi$", top-right
angle-arc: (0, 0), r, 0, u * 180 / pi, blue
point: (r, 0)
point: (r * cos(u), r * sin(u))
:::


I figuren til høyre vises en sirkel med radius $3$.

Buelengden til den blå sirkelbuen er $2\pi$.

Finn vinkelen $\varphi$ i radianer og grader.


:::::{answer}
$$
\varphi = \dfrac{2\pi}{3} = 120\degree
$$

::::{solution}
Sammenhengen mellom buelengde $s$, radius $r$ og vinkelen $\varphi$ er 

$$
\varphi = \dfrac{s}{r}
$$

Vi har at $s = 2\pi$ og $r = 3$. Ergo er vinkelen i radianer:

$$
\varphi = \dfrac{2\pi}{3}
$$

Vinkelen i grader er 

$$
\varphi = \dfrac{2\pi}{3} \cdot \dfrac{180\degree}{\pi} = 120\degree
$$
::::
:::::

:::::::::::::


:::::::::::::{part} b
:::{plot}
nocache:
axis: equal
ticks: off
width: 100%
align: right
fontsize: 32
let: r = 15
let: u = pi / 5
circle: (0, 0), r, gray
line-segment: (0, 0), (r * cos(u), r * sin(u)), blue
text: 0.5 * r*cos(u), 0.5 * r*sin(u), "$15$", top-left
angle-arc: (0, 0), 0.3 * r, 0, u*180/pi, red, arrow
text: 0.45 * r * cos(u/2), 0.45 * r * sin(u/2), "$\theta$", center-center
text: 1.1 * r * cos(u/2), 1.1 * r * sin(u/2), "$\displaystyle 3\pi$", top-right
angle-arc: (0, 0), r, 0, u * 180 / pi, blue
point: (r, 0)
point: (r * cos(u), r * sin(u))
:::


I figuren til høyre vises en sirkel med radius $15$.

Buelengden til den blå sirkelbuen er $3\pi$.

Finn vinkelen $\theta$ i radianer og grader.


:::::{answer}
$$
\theta = \dfrac{\pi}{5} = 36\degree
$$

::::{solution}
Vinkelen i radianer er gitt ved:

$$
\theta = \dfrac{s}{r} = \dfrac{3\pi}{15} = \dfrac{\pi}{5}
$$

Vinkelen i grader er da:

$$
\theta = \dfrac{\pi}{5} \cdot \dfrac{180\degree}{\pi} = 36\degree
$$

::::
:::::

:::::::::::::


:::::::::::::{part} c
:::{plot}
nocache:
axis: equal
ticks: off
width: 100%
align: right
fontsize: 32
let: r = 9
let: u = 4 * pi / 3
circle: (0, 0), r, gray
line-segment: (0, 0), (r * cos(u), r * sin(u)), blue
text: 0.5 * r*cos(u), 0.5 * r*sin(u), "$9$", bottom-right
angle-arc: (0, 0), 0.3 * r, 0, u*180/pi, red, arrow
text: 0.45 * r * cos(u/2), 0.45 * r * sin(u/2), "$\gamma$", center-center
text: 1.1 * r * cos(u/2), 1.1 * r * sin(u/2), "$\displaystyle 12\pi$", top-right
angle-arc: (0, 0), r, 0, u * 180 / pi, blue
point: (r, 0)
point: (r * cos(u), r * sin(u))
:::


I figuren til høyre vises en sirkel med radius $9$.

Buelengden til den blå sirkelbuen er $12\pi$.

Finn vinkelen $\gamma$ i radianer og grader.


:::::{answer}
$$
\gamma = \dfrac{4\pi}{3} = 240\degree
$$

::::{solution}
Vinkelen i radianer er:

$$
\gamma = \dfrac{s}{r} = \dfrac{12\pi}{9} = \dfrac{4\pi}{3}
$$

Vinkelen i grader er da:

$$
\gamma = \dfrac{4\pi}{3} \cdot \dfrac{180\degree}{\pi} = 240\degree
$$
::::
:::::

:::::::::::::



:::::::::::::{part} d
:::{plot}
nocache:
axis: equal
ticks: off
width: 100%
align: right
fontsize: 32
let: r = 4
let: u = 2 * pi / 3
circle: (0, 0), r, gray
line-segment: (0, 0), (r * cos(u), r * sin(u)), blue
text: 0.5 * r*cos(u), 0.5 * r*sin(u), "$4$", bottom-left
angle-arc: (0, 0), 0.3 * r, 0, u*180/pi, red, arrow
text: 0.35 * r * cos(u/2), 0.35 * r * sin(u/2), "$\displaystyle \frac{2\pi}{3}$", top-right
text: 1.1 * r * cos(u/2), 1.1 * r * sin(u/2), "$s$", top-right
angle-arc: (0, 0), r, 0, u * 180 / pi, blue
point: (r, 0)
point: (r * cos(u), r * sin(u))
:::


I figuren til høyre vises en sirkel med radius $4$ og en blå sirkelbue.

Vinkelen i figuren er lik $\dfrac{2\pi}{3}$.

Finn buelengden $s$ til den blå sirkelbuen.



:::::{answer}
$$
s = \dfrac{8\pi}{3}
$$

::::{solution}
Sammenhengen mellom en vinkel $\varphi$, buelengde $s$ og radius $r$ er gitt ved 

$$
\varphi = \dfrac{s}{r} \liff s = \varphi \cdot r
$$

Vi har at $\varphi = \dfrac{2\pi}{3}$ og $r = 4$. Dermed er buelengden:

$$
s = \dfrac{2\pi}{3} \cdot 4 = \dfrac{8\pi}{3}
$$
::::
:::::


:::::::::::::



:::::::::::::{part} e
:::{plot}
nocache:
axis: equal
ticks: off
width: 100%
align: right
fontsize: 32
let: r = 8
let: u = 3 * pi / 4
circle: (0, 0), r, gray
line-segment: (0, 0), (r * cos(u), r * sin(u)), blue
text: 0.5 * r*cos(u), 0.5 * r*sin(u), "$r$", bottom-left
angle-arc: (0, 0), 0.3 * r, 0, u*180/pi, red, arrow
text: 0.35 * r * cos(u/2), 0.35 * r * sin(u/2), "$\displaystyle \frac{3\pi}{4}$", top-right
text: 1.1 * r * cos(u/2), 1.1 * r * sin(u/2), "$6\pi$", top-right
angle-arc: (0, 0), r, 0, u * 180 / pi, blue
point: (r, 0)
point: (r * cos(u), r * sin(u))
:::

En sirkel har radius $r$ og en blå sirkelbue har buelengden $6\pi$.

Vinkelen i figuren er lik $\dfrac{3\pi}{4}$.

Finn radiusen $r$ til sirkelen.


:::::{answer}
$$
r = 8
$$

::::{solution}
Gitt en vinkel $\varphi$, buelengde $s$ og radius $r$ er sammenhengen gitt ved

$$
\varphi = \dfrac{s}{r} \liff r = \dfrac{s}{\varphi}
$$

Vi har at $s = 6\pi$ og $\varphi = \dfrac{3\pi}{4}$. Dermed er radiusen:

$$
r = \dfrac{6\pi}{3\pi/ 4} = 6\pi \cdot \dfrac{4}{3\pi} = 8
$$
::::
:::::

:::::::::::::


:::::::::::::::



---


:::::::::::::::{exercise} Oppgave 5
:::::::::::::{part} a

:::{plot}
width: 100%
align: right
fontsize: 32
ticks: off
axis: equal
circle: (0, 0), 1
let: u = 0
vector: (0, 0), (cos(u), sin(u)), red
point: (cos(u), sin(u))
text: cos(u), sin(u), "$P$", top-right
lw: 2
xlabel: $\cos \varphi$
ylabel: $\sin \varphi$
:::



Et punkt $P$ ligger på enhetssirkelen.

Vinkelen mellom førsteaksen og vektoren $\lvec{OP}$ er $\varphi = 0$.

Finn $\cos 0$ og $\sin 0$.


:::::{answer}

::::{solution}
Vi har at 

$$
\lvec{OP} = [\cos 0, \sin 0] = [1, 0]
$$

Ergo er 

$$
\cos 0 = 1 \and \sin 0 = 0
$$
::::
:::::


:::::::::::::



:::::::::::::{part} b
:::{plot}
width: 100%
align: right
fontsize: 32
ticks: off
axis: equal
circle: (0, 0), 1
let: u = pi/2
vector: (0, 0), (cos(u), sin(u)), red
point: (cos(u), sin(u))
text: cos(u), sin(u), "$Q$", top-right
angle-arc: (0, 0), 0.3, 0, u*180/pi, blue, arrow
text: 0.5 * cos(u/2), 0.5 * sin(u/2), "$\pi/2$", center-center
lw: 2
xlabel: $\cos \varphi$
ylabel: $\sin \varphi$
:::

Et punkt $Q$ ligger på enhetssirkelen.

Vinkelen mellom førsteaksen og vektoren $\lvec{OQ}$ er $\varphi = \dfrac{\pi}{2}$.

Finn $\cos \dfrac{\pi}{2}$ og $\sin \dfrac{\pi}{2}$.


:::::{answer}
$$
\cos \dfrac{\pi}{2} = 0 \and \sin \dfrac{\pi}{2} = 1
$$

::::{solution}
Vektoren er gitt ved 

$$
\lvec{OQ} = \mqty[\cos \dfrac{\pi}{2}, \sin \dfrac{\pi}{2}] = [0, 1]
$$

som betyr at 

$$
\cos \dfrac{\pi}{2} = 0 \and \sin \dfrac{\pi}{2} = 1
$$
::::
:::::

:::::::::::::


:::::::::::::{part} c
:::{plot}
width: 100%
align: right
fontsize: 32
ticks: off
axis: equal
circle: (0, 0), 1
let: u = pi
vector: (0, 0), (cos(u), sin(u)), red
point: (cos(u), sin(u))
text: cos(u), sin(u), "$R$", top-left
angle-arc: (0, 0), 0.3, 0, u*180/pi, blue, arrow
text: 0.5 * cos(u/2), 0.5 * sin(u/2), "$\pi$", center-right
lw: 2
xlabel: $\cos \varphi$
ylabel: $\sin \varphi$
:::

Et punkt $R$ ligger på enhetssirkelen.

Vinkelen mellom førsteaksen og linjestykket $OR$ er $\varphi = \pi$.

Finn $\cos \pi$ og $\sin \pi$.


:::::{answer}
$$
\cos \pi = -1 \and \sin \pi = 0
$$

::::{solution}
Vektoren $\lvec{OR}$ er gitt ved 

$$
\lvec{OR} = \mqty[\cos \pi, \sin \pi] = [-1, 0]
$$

Altså er 

$$
\cos \pi = -1 \and \sin \pi = 0
$$
::::
:::::


:::::::::::::


:::::::::::::{part} d
:::{plot}
width: 100%
align: right
fontsize: 32
ticks: off
axis: equal
circle: (0, 0), 1
let: u = 3*pi/2
vector: (0, 0), (cos(u), sin(u)), red
point: (cos(u), sin(u))
text: cos(u), sin(u), "$S$", bottom-left
angle-arc: (0, 0), 0.3, 0, u*180/pi, blue, arrow
text: 0.5 * cos(u/2), 0.5 * sin(u/2), "$3\pi/2$", center-center
lw: 2
xlabel: $\cos \varphi$
ylabel: $\sin \varphi$
:::

Et punkt $S$ ligger på enhetssirkelen.

Vinkelen mellom førsteaksen og linjestykket $OS$ er $\varphi = \dfrac{3\pi}{2}$.

Finn $\cos \dfrac{3\pi}{2}$ og $\sin \dfrac{3\pi}{2}$.


:::::{answer}
$$
\cos \dfrac{3\pi}{2} = 0 \and \sin \dfrac{3\pi}{2} = -1
$$

::::{solution}
Vektoren $\lvec{OS}$ er gitt ved 

$$
\lvec{OS} = \mqty[\cos \dfrac{3\pi}{2}, \sin \dfrac{3\pi}{2}] = [0, -1]
$$

Altså er 

$$
\cos \dfrac{3\pi}{2} = 0 \and \sin \dfrac{3\pi}{2} = -1
$$
::::
:::::


:::::::::::::




:::::::::::::::


---


:::::::::::::::{exercise} Oppgave 6
:::::::::::::{part} a
:::{plot}
figsize: (4, 4)
width: 80%
fontsize: 28
align: right
let: Ax = 0
let: Ay = 0
let: Bx = sqrt(2)/2
let: By = 0
let: Cx = sqrt(2)/2
let: Cy = sqrt(2)/2
axis: equal
axis: off
line-segment: (Ax, Ay), (Bx, By), blue
line-segment: (Bx, By), (Cx, Cy), blue
line-segment: (Cx, Cy), (Ax, Ay), blue
angle-arc: (Ax, Ay), 0.2, 0, 45, red, arrow
text: 0.30 * cos(pi/8), 0.25 * sin(pi/8), "$45^\circ$", center-center
let: ds = 0.1
line-segment: (Bx - ds, By), (Bx - ds, By + ds), gray, solid
line-segment: (Bx - ds, By + ds), (Bx, By + ds), gray, solid
text: 0.5 * (Ax + Cx), 0.5 * (Ay + Cy), "$1$", top-left
:::


Gitt den rettvinklede trekanten til høyre.

Bruk trekanten til å finne eksakte verdier for

$$
\cos 45\degree \qog \sin 45\degree
$$



:::::{answer}
$$
\cos 45\degree = \dfrac{\sqrt{2}}{2} \and \sin 45\degree = \dfrac{\sqrt{2}}{2}
$$

::::{solution}
Den rettvinkla trekanten er en likebeint trekant med kateter med lengde $x$ og hypotenus lik $1$. Fra Pytagoras' setning får vi at 

$$
x^2 + x^2 = 1^2 \liff 2x^2 = 1 \limplies x = \dfrac{1}{\sqrt{2}} = \dfrac{\sqrt{2}}{2}
$$

Dermed får vi at 

$$
\cos 45\degree = \dfrac{\sqrt{2}}{2} \and \sin 45\degree = \dfrac{\sqrt{2}}{2}
$$
::::
:::::

:::::::::::::


:::{plot}
figsize: (4, 4)
width: 80%
align: right
fontsize: 28
let: Ax = -1/2
let: Ay = 0
let: Bx = 1/2
let: By = 0
let: Cx = 0
let: Cy = sqrt(3)/2
axis: equal
axis: off
line-segment: (Ax, Ay), (Bx, By), blue
line-segment: (Bx, By), (Cx, Cy), blue
line-segment: (Cx, Cy), (Ax, Ay), blue
angle-arc: (Ax, Ay), 0.2, 0, 60, red, arrow
text: Ax + 0.3 * cos(pi/6), Ay + 0.3 * sin(pi/6), "$60^\circ$", center-center
line-segment: (0, 0), (Cx, Cy), red, dashed
let: ds = 0.1
line-segment: (-ds, 0), (-ds, ds), gray, solid
line-segment: (-ds, ds), (0, ds), gray, solid
text: 0.5 * (Ax + Bx), 0.5 * (Ay + By), "$1$", bottom-center
text: 0.5 * (Ax + Cx), 0.5 * (Ay + Cy), "$1$", top-left
text: 0.5 * (Bx + Cx), 0.5 * (By + Cy), "$1$", top-right
text: Cx + 0.02, 0.5 * (Ay + Cy) , "$h$", center-right
:::


En likesidet trekant med sidelengder $1$ er vist til høyre.



:::::::::::::{part} b
Finn høyden $h$ i trekanten. 


:::::{answer}
$$
h = \dfrac{\sqrt{3}}{2}
$$

::::{solution}
Fra Pytagoras' setning har vi at 

$$
h^2 + \left(\dfrac{1}{2}\right)^2 = 1^2 
$$

$$
h^2 + \dfrac{1}{4} = 1
$$

$$
h^2 = \dfrac{3}{4}
$$

$$
h = \dfrac{\sqrt{3}}{2}
$$
::::
:::::


:::::::::::::


:::::::::::::{part} c
Bruk trekanten til å finne eksakte verdier for

$$
\cos 60\degree \qog \sin 60\degree
$$


:::::{answer}
$$
\cos 60\degree = \dfrac{1}{2} \and \sin 60\degree = \dfrac{\sqrt{3}}{2}
$$

::::{solution}
Fra trekanten har vi at 

$$
\cos 60\degree = \dfrac{1/2}{1} = \dfrac{1}{2}
$$

og

$$
\sin 60\degree = \dfrac{h}{1} = \dfrac{\sqrt{3}}{2}
$$
::::
:::::


:::::::::::::


:::::::::::::{part} d

Bruk trekanten til å finne eksakte verdier for 

$$
\cos 30\degree \qog \sin 30\degree
$$


:::::{answer}
$$
\cos 30\degree = \dfrac{\sqrt{3}}{2} \and \sin 30\degree = \dfrac{1}{2}
$$

::::{solution}
Vi bruker den rettvinkla trekanten til venstre til å finne verdiene for $\cos 30\degree$ og $\sin 30\degree$. Vi har at

$$
\cos 30\degree = \dfrac{h}{1} = \dfrac{\sqrt{3}}{2}
$$

og

$$
\sin 30\degree = \dfrac{1/2}{1} = \dfrac{1}{2}
$$
::::
:::::


:::::::::::::


:::::::::::::::


---


:::::::::::::::{exercise} Oppgave 7

:::{hint} Hint
Bruk svarene du fant i oppgave 6.
:::

:::::::::::::{part} a
:::{plot}
width: 100%
axis: equal
ticks: off
align: right
fontsize: 28
circle: (0, 0), 1
let: u = pi/4
line-segment: (0, 0), (cos(u), sin(u)), red
point: (cos(u), sin(u))
text: cos(u), sin(u), "$P$", top-right
angle-arc: (0, 0), 0.3, 0, u*180/pi, red, arrow
text: 0.5 * cos(u/2), 0.5 * sin(u/2), "$\pi/4$", center-center
text: 0.5 * cos(u), 0.5 * sin(u), "$1$", top-left
lw: 3
xlabel: $\cos \varphi$
ylabel: $\sin \varphi$
:::


Punktet $P$ ligger på enhetssirkelen. Linjestykket $OP$ danner vinkelen $\varphi = \dfrac{\pi}{4}$ med førsteaksen.

Finn $\cos \dfrac{\pi}{4}$ og $\sin \dfrac{\pi}{4}$.


:::::{answer}
$$
\cos \dfrac{\pi}{4} = \dfrac{\sqrt{2}}{2} \and \sin \dfrac{\pi}{4} = \dfrac{\sqrt{2}}{2}
$$

::::{solution}
Vinkelen i radianer er $\varphi = \dfrac{\pi}{4}$. I grader er denne vinkelen

$$
\varphi = \dfrac{\pi}{4} \cdot \dfrac{180\degree}{\pi} = 45\degree
$$

Fra oppgave 6 har vi at 

$$
\cos 45\degree = \dfrac{\sqrt{2}}{2} \and \sin 45\degree = \dfrac{\sqrt{2}}{2}
$$

Ergo er

$$
\cos \dfrac{\pi}{4} = \dfrac{\sqrt{2}}{2} \and \sin \dfrac{\pi}{4} = \dfrac{\sqrt{2}}{2}
$$
::::
:::::

:::::::::::::



:::::::::::::{part} b
:::{plot}
width: 100%
axis: equal
ticks: off
align: right
fontsize: 28
circle: (0, 0), 1
let: u = pi/6
line-segment: (0, 0), (cos(u), sin(u)), red
point: (cos(u), sin(u))
text: cos(u), sin(u), "$P$", top-right
angle-arc: (0, 0), 0.3, 0, u*180/pi, red, arrow
text: 0.5 * cos(u/2), 0.5 * sin(u/2), "$\pi/6$", center-center
text: 0.5 * cos(u), 0.5 * sin(u), "$1$", top-left
lw: 3
xlabel: $\cos \varphi$
ylabel: $\sin \varphi$
:::


Punktet $P$ ligger på enhetssirkelen. Linjestykket $OP$ danner vinkelen $\varphi = \dfrac{\pi}{6}$ med førsteaksen.

Finn $\cos \dfrac{\pi}{6}$ og $\sin \dfrac{\pi}{6}$.


:::::{answer}
$$
\cos \dfrac{\pi}{6} = \dfrac{\sqrt{3}}{2} \and \sin \dfrac{\pi}{6} = \dfrac{1}{2}
$$

::::{solution}
Vinkelen i radianer er $\varphi = \dfrac{\pi}{6}$. I grader er denne vinkelen

$$
\varphi = \dfrac{\pi}{6} \cdot \dfrac{180\degree}{\pi} = 30\degree
$$

Fra oppgave 6 har vi at 

$$
\cos 30\degree = \dfrac{\sqrt{3}}{2} \and \sin 30\degree = \dfrac{1}{2}
$$

Ergo er 

$$
\cos \dfrac{\pi}{6} = \dfrac{\sqrt{3}}{2} \and \sin \dfrac{\pi}{6} = \dfrac{1}{2}
$$
::::
:::::


:::::::::::::


:::::::::::::{part} c
:::{plot}
width: 100%
axis: equal
ticks: off
align: right
fontsize: 28
circle: (0, 0), 1
let: u = pi/3
line-segment: (0, 0), (cos(u), sin(u)), red
point: (cos(u), sin(u))
text: cos(u), sin(u), "$P$", top-right
angle-arc: (0, 0), 0.3, 0, u*180/pi, red, arrow
text: 0.5 * cos(u/2), 0.5 * sin(u/2), "$\pi/3$", center-center
text: 0.5 * cos(u), 0.5 * sin(u), "$1$", top-left
lw: 3
xlabel: $\cos \varphi$
ylabel: $\sin \varphi$
:::


Punktet $P$ ligger på enhetssirkelen. Linjestykket $OP$ danner vinkelen $\varphi = \dfrac{\pi}{3}$ med førsteaksen.

Finn $\cos \dfrac{\pi}{3}$ og $\sin \dfrac{\pi}{3}$.


:::::{answer}
$$
\cos \dfrac{\pi}{3} = \dfrac{1}{2} \and \sin \dfrac{\pi}{3} = \dfrac{\sqrt{3}}{2}
$$

::::{solution}
Vinkelen i radianer er $\varphi = \dfrac{\pi}{3}$. I grader er denne vinkelen

$$
\varphi = \dfrac{\pi}{3} \cdot \dfrac{180\degree}{\pi} = 60\degree
$$

Fra oppgave 6 har vi at 

$$
\cos 60\degree = \dfrac{1}{2} \and \sin 60\degree = \dfrac{\sqrt{3}}{2}
$$

Ergo er 

$$
\cos \dfrac{\pi}{3} = \dfrac{1}{2} \and \sin \dfrac{\pi}{3} = \dfrac{\sqrt{3}}{2}
$$
::::
:::::


:::::::::::::


:::::::::::::::


---






---


:::::::::::::::{exercise} Oppgave 8
:::::::::::::{part} a
Bestem fortegnet til $\cos \varphi$ og $\sin \varphi$ når $\varphi$ ligger i 1. kvadrant.


:::::{answer}
$$
\cos \varphi \gt 0 \and \sin \varphi \gt 0
$$

::::{solution}
I 1. kvadrant vil $x$-koordinatene og $y$-koordinatene til punktene på enhetssirkelen være positive. Dermed er

$$
\cos \varphi \gt 0 \and \sin \varphi \gt 0
$$
::::
:::::




:::::::::::::


:::::::::::::{part} b
Finn fortegnet til $\cos \varphi$ og $\sin \varphi$ når $\varphi$ ligger i 2. kvadrant.


:::::{answer}
$$
\cos \varphi \lt 0 \and \sin \varphi \gt 0
$$

::::{solution}
I 2. kvadrant vil $x$-koordinatene til punktene på enhetssirkelen være negative, mens $y$-koordinatene vil være positive. Dermed er

$$
\cos \varphi \lt 0 \and \sin \varphi \gt 0
$$
::::
:::::



:::::::::::::


:::::::::::::{part} c
Finn fortegnet til $\cos \varphi$ og $\sin \varphi$ når $\varphi$ ligger i 3. kvadrant.


:::::{answer}
$$
\cos \varphi \lt 0 \and \sin \varphi \lt 0
$$

::::{solution}
I 3. kvadrant vil $x$-koordinatene og $y$-koordinatene til punktene på enhetssirkelen være negative. Dermed er

$$
\cos \varphi \lt 0 \and \sin \varphi \lt 0
$$
::::
:::::

:::::::::::::


:::::::::::::{part} d
Finn fortegnet til $\cos \varphi$ og $\sin \varphi$ når $\varphi$ ligger i 4. kvadrant.



:::::{answer}
$$
\cos \varphi \gt 0 \and \sin \varphi \lt 0
$$

::::{solution}
I 4. kvadrant vil $x$-koordinatene til punktene på enhetssirkelen være positive, mens $y$-koordinatene vil være negative. Dermed er

$$
\cos \varphi \gt 0 \and \sin \varphi \lt 0
$$
::::
:::::


:::::::::::::


:::::::::::::::


---


:::::::::::::::{exercise} Oppgave 9
:::::::::::::{part} a
Om en vinkel $\varphi$ får du vite at

* $\cos \varphi \gt 0$
* $\tan \varphi \lt 0$

Hvilken kvadrant ligger vinkelen $\varphi$ i?


:::::{answer}
Vinkelen $\varphi$ ligger i 4. kvadrant.

::::{solution}
Siden $\cos \varphi \gt 0$, vet vi at vinkelen ligger enten i 1. eller 4. kvadrant. Siden $\tan \varphi \lt 0$, vet vi at vinkelen må ligge i 4. kvadrant siden $\sin \varphi$ må være negativ, og dette er tilfellet i 4. kvadrant, men ikke i 1. kvadrant. Dermed ligger vinkelen $\varphi$ i 4. kvadrant.
::::
:::::


:::::::::::::


:::::::::::::{part} b
Om en vinkel $\theta$ får du vite at

* $\sin \theta \gt 0$
* $\tan \theta \gt 0$

Hvilken kvadrant ligger vinkelen $\theta$ i?


:::::{answer}
Vinkelen $\theta$ ligger i 1. kvadrant.

::::{solution}
Siden $\sin \theta \gt 0$, vet vi at $\theta$ enten ligger i 1. kvadrant eller 2. kvadrant. Siden $\tan \theta \gt 0$, må $\cos \theta$ ha samme fortegn som $\sin \theta$. Dette er tilfellet i 1. kvadrant som betyr at $\theta$ må ligge i 1. kvadrant.
::::
:::::


:::::::::::::


:::::::::::::{part} c
Om en vinkel $\gamma$ får du vite at

* $\tan \gamma > 0$

I hvilke kvadranter kan vinkelen $\gamma$ ligge?


:::::{answer}
$\gamma$ ligger enten i 1. kvadrant eller 3. kvadrant.

::::{solution}
Siden vi har at 

$$
\tan \gamma \gt 0 \and \tan \gamma = \dfrac{\sin \gamma}{\cos \gamma}
$$

må det bety at $\sin \gamma$ og $\cos \gamma$ har samme fortegn. Det betyr at $\gamma$ enten ligger i 1. kvadrant eller 3. kvadrant.
::::
:::::


:::::::::::::


:::::::::::::{part} d
Om en vinkel $\xi$ får du vite at

* $\cos \xi \lt 0$ 
* $\sin \xi \gt 0$

Bestem fortegnet til $\tan \xi$ og hvilken kvadrant vinkelen $\xi$ ligger i.


:::::{answer}
$\tan \xi \lt 0$ og $\xi$ ligger i 2. kvadrant.

::::{solution}
Vi har at 

$$
\tan \xi = \dfrac{\sin \xi}{\cos \xi}
$$

som betyr at $\tan \xi$ må være negativ. Vinkelen $\xi$ må ligge i 2. kvadrant siden $\sin \xi$ er positiv og $\cos \xi$ er negativ.
::::
:::::

:::::::::::::




:::::::::::::::

