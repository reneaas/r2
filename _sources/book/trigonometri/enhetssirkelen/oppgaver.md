# Enhetssirkelen og radianer: Oppgaver



:::::::::::::::{exercise} Oppgave 1


:::::::::::::{part} a

Finn vinkelen i radianer:


$$
\alpha = 30\degree
$$
:::::::::::::


:::::::::::::{part} b
Finn vinkelen i radianer:

$$
\beta = 45\degree
$$
:::::::::::::


:::::::::::::{part} c
Finn vinkelen i radianer:

$$
\gamma = 60\degree
$$
:::::::::::::


:::::::::::::{part} d
Finn vinkelen i radianer:

$$
\varphi = 90\degree
$$
:::::::::::::


:::::::::::::{part} e
Finn vinkelen i radianer:

$$
\theta = 120\degree
$$
:::::::::::::


:::::::::::::::



---



:::::::::::::::{exercise} Oppgave 2
:::::::::::::{part} a
Finn vinkelen i grader: 

$$
\alpha = \pi
$$
:::::::::::::


:::::::::::::{part} b
Finn vinkelen i grader:

$$
\beta = -\dfrac{\pi}{2}
$$

:::::::::::::



:::::::::::::{part} c
Finn vinkelen i grader:

$$
\gamma = \dfrac{2\pi}{3}
$$
:::::::::::::


:::::::::::::{part} d
Finn vinkelen i grader:

$$
\varphi = \dfrac{3\pi}{2}
$$
:::::::::::::


:::::::::::::{part} e
Finn vinkelen i grader:

$$
\theta = \dfrac{4\pi}{3}
$$

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
line-segment: (0, 0), (cos(u), sin(u)), red
point: (cos(u), sin(u))
text: cos(u), sin(u), "$P$", top-right
lw: 4
xlabel: $\cos \varphi$
ylabel: $\sin \varphi$
:::



Et punkt $P$ ligger på enhetssirkelen.

Vinkelen mellom førsteaksen og linjestykket $OP$ er $\varphi = 0$.

Finn $\cos 0$ og $\sin 0$.
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
line-segment: (0, 0), (cos(u), sin(u)), red
point: (cos(u), sin(u))
text: cos(u), sin(u), "$Q$", top-right
angle-arc: (0, 0), 0.3, 0, u*180/pi, red, arrow
text: 0.5 * cos(u/2), 0.5 * sin(u/2), "$\pi/2$", center-center
lw: 4
xlabel: $\cos \varphi$
ylabel: $\sin \varphi$
:::

Et punkt $Q$ ligger på enhetssirkelen.

Vinkelen mellom førsteaksen og linjestykket $OQ$ er $\varphi = \dfrac{\pi}{2}$.

Finn $\cos \dfrac{\pi}{2}$ og $\sin \dfrac{\pi}{2}$.


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
line-segment: (0, 0), (cos(u), sin(u)), red
point: (cos(u), sin(u))
text: cos(u), sin(u), "$R$", top-left
angle-arc: (0, 0), 0.3, 0, u*180/pi, red, arrow
text: 0.5 * cos(u/2), 0.5 * sin(u/2), "$\pi$", center-center
lw: 4
xlabel: $\cos \varphi$
ylabel: $\sin \varphi$
:::

Et punkt $R$ ligger på enhetssirkelen.

Vinkelen mellom førsteaksen og linjestykket $OR$ er $\varphi = \pi$.

Finn $\cos \pi$ og $\sin \pi$.


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
line-segment: (0, 0), (cos(u), sin(u)), red
point: (cos(u), sin(u))
text: cos(u), sin(u), "$S$", bottom-left
angle-arc: (0, 0), 0.3, 0, u*180/pi, red, arrow
text: 0.5 * cos(u/2), 0.5 * sin(u/2), "$3\pi/2$", center-center
lw: 4
xlabel: $\cos \varphi$
ylabel: $\sin \varphi$
:::

Et punkt $S$ ligger på enhetssirkelen.

Vinkelen mellom førsteaksen og linjestykket $OS$ er $\varphi = \dfrac{3\pi}{2}$.

Finn $\cos \dfrac{3\pi}{2}$ og $\sin \dfrac{3\pi}{2}$.


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
:::


En likesidet trekant med sidelengder $1$ er vist til høyre.



:::::::::::::{part} b

Bruk trekanten til å finne eksakte verdier for 

$$
\cos 30\degree \qog \sin 30\degree
$$
:::::::::::::


:::::::::::::{part} c
Bruk trekanten til å finne eksakte verdier for

$$
\cos 60\degree \qog \sin 60\degree
$$
:::::::::::::


:::::::::::::::


---


:::::::::::::::{exercise} Oppgave 7

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


:::{hint} Hint
Bruk svarene du fant i oppgave 6.
:::


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
:::::::::::::


:::::::::::::::


---






---


:::::::::::::::{exercise} Oppgave 8
:::::::::::::{part} a
Bestem fortegnet til $\cos \varphi$ og $\sin \varphi$ når $\varphi$ ligger i 1.kvadrant.


:::::::::::::


:::::::::::::{part} b
Finn fortegnet til $\cos \varphi$ og $\sin \varphi$ når $\varphi$ ligger i 2.kvadrant.


:::::::::::::


:::::::::::::{part} c
Finn fortegnet til $\cos \varphi$ og $\sin \varphi$ når $\varphi$ ligger i 3.kvadrant.
:::::::::::::


:::::::::::::{part} d
Finn fortegnet til $\cos \varphi$ og $\sin \varphi$ når $\varphi$ ligger i 4.kvadrant.
:::::::::::::


:::::::::::::::


---


:::::::::::::::{exercise} Oppgave 9
:::::::::::::{part} a
Om en vinkel $\varphi$ får du vite at

* $\cos \varphi \gt 0$
* $\tan \varphi \lt 0$

Hvilken kvadrant ligger vinkelen $\varphi$ i?
:::::::::::::


:::::::::::::{part} b
Om en vinkel $\theta$ får du vite at

* $\sin \theta \gt 0$
* $\tan \theta \gt 0$

Hvilken kvadrant ligger vinkelen $\theta$ i?
:::::::::::::


:::::::::::::{part} c
Om en vinkel $\gamma$ får du vite at

* $\tan \gamma > 0$

I hvilke kvadranter kan vinkelen $\gamma$ ligge?
:::::::::::::


:::::::::::::{part} d
Om en vinkel $\xi$ får du vite at

* $\cos \xi \lt 0$ 
* $\sin \xi \lt 0$

Bestem fortegnet til $\tan \xi$ og hvilken kvadrant vinkelen $\xi$ ligger i.

:::::::::::::




:::::::::::::::

