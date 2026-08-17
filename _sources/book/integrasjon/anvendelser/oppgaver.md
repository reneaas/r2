# Oppgaver: Anvendelser av integrasjon



:::::::::::::::{exercise} Oppgave X


::::{multi-plot2}
---
rows: 1
cols: 2
---
:::{plot}
width: 100%
fontsize: 24
repeat: a=1..5; function: 16 * 2**(-a) * abs(sin(pi*x)), (a - 1, a), f_{a}
repeat: a=6..100; function: 16 * 2**(-a) * abs(sin(pi*x)), (a - 1, a)
xmin: 0
xmax: 6
ymax: 9
ymin: 0
ticks: off
repeat: a=1..4; text: 0, 16*2**(-a), "${16*2**(-a)}$", center-left
repeat: a=1..4; hline: 16*2**(-a), 0, 0.5 * (a - 1 + a), dashed, gray
repeat: a=1..5; text: a, 0, "${a}$", bottom-center
:::


:::{plot3d-2}
width: 100%
repeat: a=1..8; solid-of-revolution: 16 * 2**(-a) * abs(sin(pi*x)), (a - 1, a)
xrange: (0, 8)
yrange: (-8, 4)
zrange: (-10, 10)
elev: 20
azim: -85
ticks: off
nocache:
xlabel: $x$
ylabel: $y$
zlabel: $z$
fontsize: 20
:::



::::


Funksjonen $f$ er stykkevis satt sammen av en uendelig følge av sinusfunksjoner.

Funksjonen $f$ dreies 360 grader om $x$-aksen og danner et omdreiningslegeme.

Finn volumet av omdreiningslegemet.


:::::::::::::::


:::::::::::::::{exercise} Oppgave Y
::::{multi-plot2}
---
rows: 1
cols: 2
---
:::{plot}
width: 100%
let: A = 16
repeat: a=1..5; function: A * 2**(-a) * abs(sin(a*pi*x)), (a - 1, a), f_{a}
repeat: a=6..100; function: A * 2**(-a) * abs(sin(a*pi*x)), (a - 1, a)
xmin: 0
xmax: 5.5
ymax: 9
ymin: 0
ticks: off
repeat: a=1..4; text: 0, 16*2**(-a), "${16*2**(-a)}$", center-left
hline: 8, 0, 1/2, dashdot, gray
hline: 4, 0, 1 + 1/2 * 1/2, dashdot, gray
hline: 2, 0, 2 + 1/2**3, dashdot, gray
hline: 1, 0, 3 + 1/2**4, dashdot, gray
repeat: a=1..5; text: a, 0, "${a}$", bottom-center
:::



:::{plot3d-2}
width: 100%
repeat: a=1..8; solid-of-revolution: 16 * 2**(-a) * abs(sin(a*pi*x)), (a - 1, a)
xrange: (0, 8)
yrange: (-8, 4)
zrange: (-10, 10)
elev: 20
azim: -85
ticks: off
fontsize: 20
:::


::::

En funksjon $f$ består av en uendelig følge av sinusfunksjoner $f_1, f_2, f_3, \ldots$ som er stykkevis satt sammen til å lage funksjonen $f$.


:::::::::::::{part} a
Finn $f_1(x)$.


:::::::::::::


:::::::::::::{part} b
Finn volumet av omdreiningslegemet som dannes når grafen til $f_1$ dreies 360 grader om $x$-aksen.


:::::::::::::


Hele grafen til $f$ dreies 360 grader om $x$-aksen og danner et omdreiningslegeme.

:::::::::::::{part} c
Finn volumet av omdreiningslegemet.

:::::{answer}
$$
V = 64\pi
$$
:::::

:::::::::::::


:::::::::::::::


---


:::::::::::::::{exercise} Oppgave Z
:::{plot}
width: 380px
align: right
fontsize: 24
repeat: a=1..100; function: 16 * 2**(-a) * sin(pi*x), (a - 1, a)
xmin: 0
xmax: 6
ymax: 9
ymin: -6
ticks: off
repeat: a=1..4; text: 0, 16*2**(-a) * (-1) ** (a + 1), "${16*2**(-a) * (-1) ** (a + 1)}$", center-left
repeat: a=1..4; hline: 16*2**(-a) * (-1)**(a+ 1), 0, 0.5 * (a - 1 + a), dashed, gray
repeat: a=1..5; text: a, 0, "${a}$", bottom-center
:::


Funksjonen $f$ er stykkevis satt sammen av en uendelige følge av sinusfunksjoner.

Regn ut integralet 

$$
\int\limits_0^\infty f(x) \dx
$$


:::::::::::::::