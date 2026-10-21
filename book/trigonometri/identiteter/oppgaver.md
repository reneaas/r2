# Trigonometriske identiteter: Oppgaver




:::::::::::::::{exercise} Oppgave 1
:::::::::::::{part} a
:::{plot}
width: 320px
axis: equal
ticks: off
align: right
fontsize: 28
circle: (0, 0), 1
let: u = 3*pi/4
vector: (0, 0), (cos(u), sin(u)), blue
point: (cos(u), sin(u))
text: cos(u), sin(u), "$\vec r\left(\frac{3\pi}{4}\right)$", top-left
angle-arc: (0, 0), 0.3, 0, u*180/pi, red, arrow
text: 0.5 * cos(u/2), 0.5 * sin(u/2), "$3\pi/4$", center-center
text: 0.5 * cos(u), 0.5 * sin(u), "$1$", bottom-left
lw: 3
xlabel: $\cos \varphi$
ylabel: $\sin \varphi$
:::



Vektoren $\vec r\left(\varphi\right)$ peker på et punkt på enhetssirkelen og danner vinkelen $\varphi = \dfrac{3\pi}{4}$ med førsteaksen.

Finn $\cos \dfrac{3\pi}{4}$ og $\sin \dfrac{3\pi}{4}$.


:::::{answer}

$$
\cos \dfrac{3\pi}{4} = -\dfrac{\sqrt{2}}{2} \qog \sin \dfrac{3\pi}{4} = \dfrac{\sqrt{2}}{2}
$$

::::{solution}
Vi har at 

$$
\vec r\left(\dfrac{3\pi}{4}\right) = \left[\cos \left(\dfrac{3\pi}{4}\right), \sin \left(\dfrac{3\pi}{4}\right)\right]
$$

Roterer vi vektoren $90$ grader *med* klokka får vi:

$$
\vec r\left(\dfrac{3\pi}{4} - \dfrac{\pi}{2}\right) = \vec r\left(\dfrac{\pi}{4}\right) = \mqty[\cos \left(\dfrac{\pi}{4}\right), \sin \left(\dfrac{\pi}{4}\right)] = \mqty[\dfrac{\sqrt{2}}{2}, \dfrac{\sqrt{2}}{2}]
$$

Vi roterer denne vektoren tilbake igjen med $90$ grader *mot* klokka for å komme tilbake til det opprinnelige punktet på enhetssirkelen. Da bytter vi rekkefølgen på koordinatene og endrer fortegnet på den nye $x$-koordinaten:

$$
\vec r\left(\dfrac{3\pi}{4}\right) = \mqty[-\dfrac{\sqrt{2}}{2}, \dfrac{\sqrt{2}}{2}]
$$

Dermed er 

$$
\cos \dfrac{3\pi}{4} = -\dfrac{\sqrt{2}}{2} \qog \sin \dfrac{3\pi}{4} = \dfrac{\sqrt{2}}{2}
$$


::::
:::::


:::::::::::::


:::::::::::::{part} b
:::{plot}
width: 320px
axis: equal
ticks: off
align: right
fontsize: 28
circle: (0, 0), 1
let: u = 2*pi/3
vector: (0, 0), (cos(u), sin(u)), blue
point: (cos(u), sin(u))
text: cos(u), sin(u), "$\vec r\left(\frac{2\pi}{3}\right)$", top-left
angle-arc: (0, 0), 0.3, 0, u*180/pi, red, arrow
text: 0.5 * cos(u/2), 0.5 * sin(u/2), "$2\pi/3$", center-center
text: 0.5 * cos(u), 0.5 * sin(u), "$1$", bottom-left
lw: 3
xlabel: $\cos \varphi$
ylabel: $\sin \varphi$
:::

Vektoren $\vec r\left(\varphi\right)$ peker på et punkt på enhetssirkelen og danner vinkelen $\varphi = \dfrac{2\pi}{3}$ med førsteaksen.

Finn $\cos \dfrac{2\pi}{3}$ og $\sin \dfrac{2\pi}{3}$.



:::::{answer}
$$
\cos \dfrac{2\pi}{3} = -\dfrac{1}{2} \qog \sin \dfrac{2\pi}{3} = \dfrac{\sqrt{3}}{2}
$$

::::{solution}
Vi har at 

$$
\vec r\left(\dfrac{2\pi}{3}\right) = \left[\cos \left(\dfrac{2\pi}{3}\right), \sin \left(\dfrac{2\pi}{3}\right)\right]
$$

Vi roterer vektoren med $-\pi/2$ radianer (90 grader *med* klokka) som gir et punkt på enhetssirkelen i 1. kvadrant:

$$
\vec r\left(\dfrac{2\pi}{3} - \dfrac{\pi}{2}\right) = \vec r\left(\dfrac{\pi}{6}\right) = \mqty[\cos \left(\dfrac{\pi}{6}\right), \sin \left(\dfrac{\pi}{6}\right)] = \mqty[\dfrac{\sqrt{3}}{2}, \dfrac{1}{2}]
$$

Så roterer vi vektoren tilbake igjen for å finne koordinatene til det opprinnelige punktet. Da bytter vi rekkefølgen på koordinatene og endrer fortegnet på den nye $x$-koordinaten:

$$
\vec r\left(\dfrac{2\pi}{3}\right) = \mqty[-\dfrac{1}{2}, \dfrac{\sqrt{3}}{2}]
$$

Ergo er 

$$
\cos \left(\dfrac{2\pi}{3}\right) = -\dfrac{1}{2} \qog \sin \left(\dfrac{2\pi}{3}\right) = \dfrac{\sqrt{3}}{2}
$$

::::
:::::


:::::::::::::


:::::::::::::{part} c
:::{plot}
width: 320px
axis: equal
ticks: off
align: right
fontsize: 28
circle: (0, 0), 1
let: u = 5*pi/6
vector: (0, 0), (cos(u), sin(u)), blue
point: (cos(u), sin(u))
text: cos(u), sin(u), "$\vec r\left(\frac{5\pi}{6}\right)$", top-left
angle-arc: (0, 0), 0.3, 0, u*180/pi, red, arrow
text: 0.5 * cos(u/2), 0.5 * sin(u/2), "$5\pi/6$", center-center
text: 0.5 * cos(u), 0.5 * sin(u), "$1$", bottom-left
lw: 3
xlabel: $\cos \varphi$
ylabel: $\sin \varphi$
:::

Vektoren $\vec r\left(\varphi\right)$ peker på et punkt på enhetssirkelen og danner vinkelen $\varphi = \dfrac{5\pi}{6}$ med førsteaksen.

Finn $\cos \dfrac{5\pi}{6}$ og $\sin \dfrac{5\pi}{6}$.



:::::{answer}
$$
\cos \dfrac{5\pi}{6} = -\dfrac{\sqrt{3}}{2} \qog \sin \dfrac{5\pi}{6} = \dfrac{1}{2}
$$

::::{solution}
Vi har at 

$$
\vec r\left(\dfrac{5\pi}{6}\right) = \left[\cos \left(\dfrac{5\pi}{6}\right), \sin \left(\dfrac{5\pi}{6}\right)\right]
$$

Vi roterer vektoren med $-\pi/2$ radianer (90 grader *med* klokka) som gir et punkt på enhetssirkelen i 1. kvadrant:

$$
\vec r\left(\dfrac{5\pi}{6} - \dfrac{\pi}{2}\right) = \vec r\left(\dfrac{\pi}{3}\right) = \mqty[\cos \left(\dfrac{\pi}{3}\right), \sin \left(\dfrac{\pi}{3}\right)] = \mqty[\dfrac{1}{2}, \dfrac{\sqrt{3}}{2}]
$$

Så roterer vi vektoren tilbake igjen som innebærer å bytte rekkefølgen på koordinatene og endre fortegnet på den nye $x$-koordinaten:

$$
\vec r\left(\dfrac{5\pi}{6}\right) = \mqty[-\dfrac{\sqrt{3}}{2}, \dfrac{1}{2}]
$$

Ergo er 

$$
\cos \left(\dfrac{5\pi}{6}\right) = -\dfrac{\sqrt{3}}{2} \qog \sin \left(\dfrac{5\pi}{6}\right) = \dfrac{1}{2}
$$
::::
:::::

:::::::::::::


:::::::::::::::


---



:::::::::::::::{exercise} Oppgave 2

:::::::::::::{part} a
:::{plot}
width: 320px
axis: equal
ticks: off
align: right
fontsize: 28
circle: (0, 0), 1
let: u = -pi/6
vector: (0, 0), (cos(u), sin(u)), blue
point: (cos(u), sin(u))
text: cos(u), sin(u), "$\vec r\left(-\frac{\pi}{6}\right)$", bottom-right
angle-arc: (0, 0), 0.3, 0, u*180/pi, red, arrow
text: 0.55 * cos(u/2), 0.5 * sin(u/2), "$-\pi/6$", center-center
text: 0.5 * cos(u), 0.5 * sin(u), "$1$", bottom-left
lw: 3
xlabel: $\cos \varphi$
ylabel: $\sin \varphi$
:::


Vektoren $\vec r\left(\varphi\right)$ peker på et punkt på enhetssirkelen og danner vinkelen $\varphi = -\dfrac{\pi}{6}$ med førsteaksen.

Finn $\cos \left(-\dfrac{\pi}{6}\right)$ og $\sin \left(-\dfrac{\pi}{6}\right)$.


:::::{answer}

$$
\cos \left(-\dfrac{\pi}{6}\right) = \dfrac{\sqrt{3}}{2} \qog \sin \left(-\dfrac{\pi}{6}\right) = -\dfrac{1}{2}
$$

::::{solution}
Vi har at 

$$
\vec r\left(-\dfrac{\pi}{6}\right) = \left[\cos \left(-\dfrac{\pi}{6}\right), \sin \left(-\dfrac{\pi}{6}\right)\right]
$$

Speiler vi vektoren om $x$-aksen så endres vinkelen fra $-\dfrac{\pi}{6}$ til $\dfrac{\pi}{6}$ som gir:

$$
\vec r\left(\dfrac{\pi}{6}\right) = \mqty[\cos \left(\dfrac{\pi}{6}\right), \sin \left(\dfrac{\pi}{6}\right)] = \mqty[\dfrac{\sqrt{3}}{2}, \dfrac{1}{2}]
$$

Speiler vi vektoren tilbake igjen om $x$-aksen, så forblir fortegnet til $x$-komponenten uendret, mens $y$-koordinaten bytter fortegn:

$$
\vec r\left(-\dfrac{\pi}{6}\right) = \mqty[\dfrac{\sqrt{3}}{2}, -\dfrac{1}{2}]
$$

Ergo er 

$$
\cos \left(-\dfrac{\pi}{6}\right) = \dfrac{\sqrt{3}}{2} \qog \sin \left(-\dfrac{\pi}{6}\right) = -\dfrac{1}{2}
$$

::::
:::::


:::::::::::::


:::::::::::::{part} b
:::{plot}
width: 320px
axis: equal
ticks: off
align: right
fontsize: 28
circle: (0, 0), 1
let: u = -pi/4
vector: (0, 0), (cos(u), sin(u)), blue
point: (cos(u), sin(u))
text: cos(u), sin(u), "$\vec r\left(-\frac{\pi}{4}\right)$", bottom-right
angle-arc: (0, 0), 0.3, 0, u*180/pi, red, arrow
text: 0.55 * cos(u/2), 0.5 * sin(u/2), "$-\pi/4$", center-center
text: 0.5 * cos(u), 0.5 * sin(u), "$1$", bottom-left
lw: 3
xlabel: $\cos \varphi$
ylabel: $\sin \varphi$
:::


Vektoren $\vec r\left(\varphi\right)$ peker på et punkt på enhetssirkelen og danner vinkelen $\varphi = -\dfrac{\pi}{4}$ med førsteaksen.

Finn $\cos \left(-\dfrac{\pi}{4}\right)$ og $\sin \left(-\dfrac{\pi}{4}\right)$.



:::::{answer}

$$
\cos \left(-\dfrac{\pi}{4}\right) = \dfrac{\sqrt{2}}{2} \qog \sin \left(-\dfrac{\pi}{4}\right) = -\dfrac{\sqrt{2}}{2}
$$

::::{solution}
Hvis vi speiler vektoren om $x$-aksen får vi en vektor med vinkelen $\dfrac{\pi}{4}$. Da er $x$-koordinaten til punktet lik, mens $y$-koordinaten bytter fortegn som betyr at 

$$
\cos \left(-\dfrac{\pi}{4}\right) = \cos \left(\dfrac{\pi}{4}\right) = \dfrac{\sqrt{2}}{2} 
$$

og 

$$
\sin \left(-\dfrac{\pi}{4}\right) = -\sin \left(\dfrac{\pi}{4}\right) = -\dfrac{\sqrt{2}}{2}
$$
::::
:::::


:::::::::::::


:::::::::::::{part} c
:::{plot}
width: 320px
axis: equal
ticks: off
align: right
fontsize: 28
circle: (0, 0), 1
let: u = -pi/3
vector: (0, 0), (cos(u), sin(u)), blue
point: (cos(u), sin(u))
text: cos(u), sin(u), "$\vec r\left(-\frac{\pi}{3}\right)$", bottom-right
angle-arc: (0, 0), 0.3, 0, u*180/pi, red, arrow
text: 0.55 * cos(u/2), 0.5 * sin(u/2), "$-\pi/3$", center-center
text: 0.5 * cos(u), 0.5 * sin(u), "$1$", bottom-left
lw: 3
xlabel: $\cos \varphi$
ylabel: $\sin \varphi$
:::



Vektoren $\vec r\left(\varphi\right)$ peker på et punkt på enhetssirkelen og danner vinkelen $\varphi = -\dfrac{\pi}{3}$ med førsteaksen.

Finn $\cos \left(-\dfrac{\pi}{3}\right)$ og $\sin \left(-\dfrac{\pi}{3}\right)$.


:::::{answer}
$$
\cos \left(-\dfrac{\pi}{3}\right) = \dfrac{1}{2} \qog \sin \left(-\dfrac{\pi}{3}\right) = -\dfrac{\sqrt{3}}{2}
$$

::::{solution}
Vi har at 

$$
\vec r\left(-\dfrac{\pi}{3}\right) = \left[\cos \left(-\dfrac{\pi}{3}\right), \sin \left(-\dfrac{\pi}{3}\right)\right]
$$

Speiler vi vektoren om $x$-aksen, så endres vinkelen fra $-\dfrac{\pi}{3}$ til $\dfrac{\pi}{3}$ som gir:

$$
\vec r\left(\dfrac{\pi}{3}\right) = \mqty[\cos \left(\dfrac{\pi}{3}\right), \sin \left(\dfrac{\pi}{3}\right)] = \mqty[\dfrac{1}{2}, \dfrac{\sqrt{3}}{2}]
$$

Speiler vi vektoren tilbake igjen om $x$-aksen, så forblir fortegnet på $x$-komponenten uendret, mens $y$-koordinaten bytter fortegn:

$$
\vec r\left(-\dfrac{\pi}{3}\right) = \mqty[\dfrac{1}{2}, -\dfrac{\sqrt{3}}{2}]
$$

Ergo er 

$$
\cos \left(-\dfrac{\pi}{3}\right) = \dfrac{1}{2} \qog \sin \left(-\dfrac{\pi}{3}\right) = -\dfrac{\sqrt{3}}{2}
$$
::::
:::::


:::::::::::::




:::::::::::::::



---



:::::::::::::::{exercise} Oppgave 3
:::::::::::::{part} a
:::{plot}
width: 320px
axis: equal
ticks: off
align: right
fontsize: 28
circle: (0, 0), 1
let: u = 7*pi/6
vector: (0, 0), (cos(u), sin(u)), blue
point: (cos(u), sin(u))
text: cos(u), sin(u), "$\vec r\left(\frac{7\pi}{6}\right)$", bottom-left
angle-arc: (0, 0), 0.3, 0, u*180/pi, red, arrow
text: 0.5 * cos(u/2), 0.5 * sin(u/2), "$7\pi/6$", center-center
text: 0.5 * cos(u), 0.5 * sin(u), "$1$", bottom-right
lw: 3
xlabel: $\cos \varphi$
ylabel: $\sin \varphi$
:::


Vektoren $\vec r\left(\varphi\right)$ peker på et punkt på enhetssirkelen og danner vinkelen $\varphi = \dfrac{7\pi}{6}$ med førsteaksen.

Finn $\cos \dfrac{7\pi}{6}$ og $\sin \dfrac{7\pi}{6}$.


:::::{answer}
$$
\cos \dfrac{7\pi}{6} = -\dfrac{\sqrt{3}}{2} \qog \sin \dfrac{7\pi}{6} = -\dfrac{1}{2}
$$

::::{solution}
Vi har at 

$$
\vec r\left(\dfrac{7\pi}{6}\right) = \left[\cos \left(\dfrac{7\pi}{6}\right), \sin \left(\dfrac{7\pi}{6}\right)\right]
$$

Roterer vi vektoren $-\pi$ radianer (180 grader *med* klokka) får vi et punkt på enhetssirkelen i 1. kvadrant:

$$
\vec r\left(\dfrac{7\pi}{6} - \pi\right) = \vec r\left(\dfrac{\pi}{6}\right) = \mqty[\cos \left(\dfrac{\pi}{6}\right), \sin \left(\dfrac{\pi}{6}\right)] = \mqty[\dfrac{\sqrt{3}}{2}, \dfrac{1}{2}]
$$

Så roterer vi vektoren tilbake igjen til utgangspunktet som svarer til å gange vektoren med $(-1)$:

$$
\vec r\left(\dfrac{7\pi}{6}\right) = (-1) \cdot \mqty[\dfrac{\sqrt{3}}{2}, \dfrac{1}{2}] = \mqty[-\dfrac{\sqrt{3}}{2}, -\dfrac{1}{2}]
$$

Ergo er 

$$
\cos \dfrac{7\pi}{6} = -\dfrac{\sqrt{3}}{2} \qog \sin \dfrac{7\pi}{6} = -\dfrac{1}{2}
$$
::::
:::::


:::::::::::::

:::::::::::::{part} b
:::{plot}
width: 320px
axis: equal
ticks: off
align: right
fontsize: 28
circle: (0, 0), 1
let: u = 5*pi/4
vector: (0, 0), (cos(u), sin(u)), blue
point: (cos(u), sin(u))
text: cos(u), sin(u), "$\vec r\left(\frac{5\pi}{4}\right)$", bottom-left
angle-arc: (0, 0), 0.3, 0, u*180/pi, red, arrow
text: 0.5 * cos(u/2), 0.5 * sin(u/2), "$5\pi/4$", center-center
text: 0.5 * cos(u), 0.5 * sin(u), "$1$", bottom-right
lw: 3
xlabel: $\cos \varphi$
ylabel: $\sin \varphi$
:::


Vektoren $\vec r\left(\varphi\right)$ peker på et punkt på enhetssirkelen og danner vinkelen $\varphi = \dfrac{5\pi}{4}$ med førsteaksen.

Finn $\cos \dfrac{5\pi}{4}$ og $\sin \dfrac{5\pi}{4}$.


:::::{answer}

$$
\cos \dfrac{5\pi}{4} = -\dfrac{\sqrt{2}}{2} \qog \sin \dfrac{5\pi}{4} = -\dfrac{\sqrt{2}}{2}
$$

::::{solution}
Vi har at 

$$
\vec r\left(\dfrac{5\pi}{4}\right) = \left[\cos \left(\dfrac{5\pi}{4}\right), \sin \left(\dfrac{5\pi}{4}\right)\right]
$$

Roterer vi vektoren $-\pi$ radianer (180 grader *med* klokka) får vi et punkt på enhetssirkelen i 1. kvadrant:

$$
\vec r\left(\dfrac{5\pi}{4} - \pi\right) = \vec r\left(\dfrac{\pi}{4}\right) = \mqty[\cos \left(\dfrac{\pi}{4}\right), \sin \left(\dfrac{\pi}{4}\right)] = \mqty[\dfrac{\sqrt{2}}{2}, \dfrac{\sqrt{2}}{2}]
$$

Så roterer vi vektoren tilbake igjen til utgangspunktet som svarer til å gange vektoren med $(-1)$:

$$
\vec r\left(\dfrac{5\pi}{4}\right) = (-1) \cdot \mqty[\dfrac{\sqrt{2}}{2}, \dfrac{\sqrt{2}}{2}] = \mqty[-\dfrac{\sqrt{2}}{2}, -\dfrac{\sqrt{2}}{2}]
$$

Ergo er 

$$
\cos \dfrac{5\pi}{4} = -\dfrac{\sqrt{2}}{2} \qog \sin \dfrac{5\pi}{4} = -\dfrac{\sqrt{2}}{2}
$$

::::
:::::


:::::::::::::


:::::::::::::{part} c
:::{plot}
width: 320px
axis: equal
ticks: off
align: right
fontsize: 28
circle: (0, 0), 1
let: u = 4*pi/3
vector: (0, 0), (cos(u), sin(u)), blue
point: (cos(u), sin(u))
text: cos(u), sin(u), "$\vec r\left(\frac{4\pi}{3}\right)$", bottom-left
angle-arc: (0, 0), 0.3, 0, u*180/pi, red, arrow
text: 0.5 * cos(u/2), 0.5 * sin(u/2), "$4\pi/3$", center-center
text: 0.5 * cos(u), 0.5 * sin(u), "$1$", bottom-right
lw: 3
xlabel: $\cos \varphi$
ylabel: $\sin \varphi$
:::


Vektoren $\vec r\left(\varphi\right)$ peker på et punkt på enhetssirkelen og danner vinkelen $\varphi = \dfrac{4\pi}{3}$ med førsteaksen.

Finn $\cos \dfrac{4\pi}{3}$ og $\sin \dfrac{4\pi}{3}$.



:::::{answer}
$$
\cos \dfrac{4\pi}{3} = -\dfrac{1}{2} \qog \sin \dfrac{4\pi}{3} = -\dfrac{\sqrt{3}}{2}
$$

::::{solution}
Vi har at 

$$
\vec r\left(\dfrac{4\pi}{3}\right) = \left[\cos \left(\dfrac{4\pi}{3}\right), \sin \left(\dfrac{4\pi}{3}\right)\right]
$$

Roterer vi vektoren $-\pi$ radianer (180 grader *med* klokka) får vi et punkt på enhetssirkelen i 1. kvadrant:

$$
\vec r\left(\dfrac{4\pi}{3} - \pi\right) = \vec r\left(\dfrac{\pi}{3}\right) = \mqty[\cos \left(\dfrac{\pi}{3}\right), \sin \left(\dfrac{\pi}{3}\right)] = \mqty[\dfrac{1}{2}, \dfrac{\sqrt{3}}{2}]
$$

Så roterer vi vektoren tilbake igjen til utgangspunktet som svarer til å gange vektoren med $(-1)$:

$$
\vec r\left(\dfrac{4\pi}{3}\right) = (-1) \cdot \mqty[\dfrac{1}{2}, \dfrac{\sqrt{3}}{2}] = \mqty[-\dfrac{1}{2}, -\dfrac{\sqrt{3}}{2}]
$$

Ergo er 

$$
\cos \dfrac{4\pi}{3} = -\dfrac{1}{2} \qog \sin \dfrac{4\pi}{3} = -\dfrac{\sqrt{3}}{2}
$$
::::
:::::


:::::::::::::


:::::::::::::{part} d
:::{plot}
width: 320px
axis: equal
ticks: off
align: right
fontsize: 28
circle: (0, 0), 1
let: u = -2*pi/3
vector: (0, 0), (cos(u), sin(u)), blue
point: (cos(u), sin(u))
text: cos(u), sin(u), "$\vec r\left(-\frac{2\pi}{3}\right)$", bottom-left
angle-arc: (0, 0), 0.3, 0, u*180/pi, red, arrow
text: 0.55 * cos(u/2), 0.5 * sin(u/2), "$-2\pi/3$", center-center
text: 0.5 * cos(u), 0.5 * sin(u), "$1$", top-left
lw: 3
xlabel: $\cos \varphi$
ylabel: $\sin \varphi$
:::


Vektoren $\vec r\left(\varphi\right)$ peker på et punkt på enhetssirkelen og danner vinkelen $\varphi = -\dfrac{2\pi}{3}$ med førsteaksen.

Finn $\cos \left(-\dfrac{2\pi}{3}\right)$ og $\sin \left(-\dfrac{2\pi}{3}\right)$.


:::::{answer}

$$
\cos \left(-\dfrac{2\pi}{3}\right) = -\dfrac{1}{2} \qog \sin \left(-\dfrac{2\pi}{3}\right) = -\dfrac{\sqrt{3}}{2}
$$

::::{solution}
Vi har at 

$$
\vec r\left(-\dfrac{2\pi}{3}\right) = \left[\cos \left(-\dfrac{2\pi}{3}\right), \sin \left(-\dfrac{2\pi}{3}\right)\right]
$$

Roterer vi vektoren $+\pi$ radianer (180 grader *mot* klokka) får vi et punkt på enhetssirkelen i 1. kvadrant og 1. omløp:

$$
\vec r\left(-\dfrac{2\pi}{3} + \pi\right) = \vec r\left(\dfrac{\pi}{3}\right) = \mqty[\cos \left(\dfrac{\pi}{3}\right), \sin \left(\dfrac{\pi}{3}\right)] = \mqty[\dfrac{1}{2}, \dfrac{\sqrt{3}}{2}]
$$

Så roterer vi vektoren tilbake igjen til utgangspunktet som svarer til å gange vektoren med $(-1)$:

$$
\vec r\left(-\dfrac{2\pi}{3}\right) = (-1) \cdot \mqty[\dfrac{1}{2}, \dfrac{\sqrt{3}}{2}] = \mqty[-\dfrac{1}{2}, -\dfrac{\sqrt{3}}{2}]
$$

Da får vi at 

$$
\cos \left(-\dfrac{2\pi}{3}\right) = -\dfrac{1}{2} \qog \sin \left(-\dfrac{2\pi}{3}\right) = -\dfrac{\sqrt{3}}{2}
$$
::::
:::::


:::::::::::::


:::::::::::::::



---


:::::::::::::::{exercise} Oppgave 4

:::::::::::::{part} a
:::{plot}
width: 320px
align: right
fontsize: 28
axis: equal
ticks: off
xlabel: $\cos \varphi$
ylabel: $\sin \varphi$
circle: (0, 0), 1
let: u = pi/3 + 4*pi
vector: (0, 0), (cos(u), sin(u)), blue
point: (cos(u), sin(u))
text: cos(u), sin(u), "$\vec r\left(\frac{13\pi}{3}\right)$", top-right
angle-arc: (0, 0), 0.3, 0, u*180/pi, red, arrow
text: 0.6 * cos(u/2), 0.5 * sin(u/2), "$\displaystyle \frac{13\pi}{3}$", center-center
:::


Bestem 

$$
\cos \dfrac{13\pi}{3} \qog \sin \dfrac{13\pi}{3}
$$


:::::{answer}
$$
\cos \dfrac{13\pi}{3} = \cos \dfrac{\pi}{3} = \dfrac{1}{2} \qog \sin \dfrac{13\pi}{3} = \sin \dfrac{\pi}{3} = \dfrac{\sqrt{3}}{2}
$$

::::{solution}
Vinkelen har 2 omløp ekstra i positiv retning, så hvis vi trekker fra $2\pi$ to ganger, får vi en vinkel som ligger i 1. kvadrant:

$$
\varphi = \dfrac{13\pi}{3} - 4\pi = \dfrac{\pi}{3}
$$

Altså er 

$$
\cos \dfrac{13\pi}{3} = \cos \dfrac{\pi}{3} = \dfrac{1}{2} \qog \sin \dfrac{13\pi}{3} = \sin \dfrac{\pi}{3} = \dfrac{\sqrt{3}}{2}
$$
::::
:::::


:::::::::::::


:::::::::::::{part} b

:::{plot}
width: 100%
align: right
fontsize: 28
axis: equal
ticks: off
xlabel: $\cos \varphi$
ylabel: $\sin \varphi$
circle: (0, 0), 1
let: u = 2*pi / 3 + 2*pi
vector: (0, 0), (cos(u), sin(u)), blue
point: (cos(u), sin(u))
text: cos(u), sin(u), "$\vec r\left(\frac{8\pi}{3}\right)$", top-left
angle-arc: (0, 0), 0.3, 0, u*180/pi, red, arrow
text: 0.6 * cos(u/2), 0.6 * sin(u/2), "$\displaystyle \frac{8\pi}{3}$", center-center
:::


Bestem 

$$
\cos \dfrac{8\pi}{3} \qog \sin \dfrac{8\pi}{3}
$$


:::::{answer}
$$
\cos \dfrac{8\pi}{3} = \cos \dfrac{2\pi}{3} = -\dfrac{1}{2} \qog \sin \dfrac{8\pi}{3} = \sin \dfrac{2\pi}{3} = \dfrac{\sqrt{3}}{2}
$$

::::{solution}
Vinkelen har 1 omløp ekstra om enhetssirkelen. Trekker vi fra $2\pi$ får vi en vinkel som ligger i 2. kvadrant:

$$
\varphi = \dfrac{8\pi}{3} - 2\pi = \dfrac{2\pi}{3}
$$

Altså er

$$
\cos \dfrac{8\pi}{3} = \cos \dfrac{2\pi}{3} = -\dfrac{1}{2} \qog \sin \dfrac{8\pi}{3} = \sin \dfrac{2\pi}{3} = \dfrac{\sqrt{3}}{2}
$$
::::
:::::


:::::::::::::



:::::::::::::{part} c

:::{plot}
width: 320px
align: right
fontsize: 28
axis: equal
ticks: off
xlabel: $\cos \varphi$
ylabel: $\sin \varphi$
circle: (0, 0), 1
let: u = pi / 6 - 6*pi
vector: (0, 0), (cos(u), sin(u)), blue
point: (cos(u), sin(u))
text: cos(u), sin(u), "$\vec r\left(-\frac{35\pi}{6}\right)$", top-right
angle-arc: (0, 0), 0.2, 0, u*180/pi, red, arrow
text: 0.6 * cos(u/2), 0.6 * sin(u/2), "$\displaystyle -\frac{35\pi}{6}$", center-center
:::


Bestem 

$$
\cos \left(-\dfrac{35\pi}{6}\right) \qog \sin \left(-\dfrac{35\pi}{6}\right)
$$


:::::{answer}
$$
\cos \left(-\dfrac{35\pi}{6}\right) = \cos \dfrac{\pi}{6} = \dfrac{\sqrt{3}}{2} \qog \sin \left(-\dfrac{35\pi}{6}\right) = \sin \dfrac{\pi}{6} = \dfrac{1}{2}
$$

::::{solution}
Vi legger til $6\pi$ for å få en positiv vinkel som ligger i 1. kvadrant:

$$
\varphi = -\dfrac{35\pi}{6} + 6\pi = \dfrac{\pi}{6}
$$

Altså er 

$$
\cos \left(-\dfrac{35\pi}{6}\right) = \cos \dfrac{\pi}{6} = \dfrac{\sqrt{3}}{2} \qog \sin \left(-\dfrac{35\pi}{6}\right) = \sin \dfrac{\pi}{6} = \dfrac{1}{2}
$$
::::
:::::


:::::::::::::


:::::::::::::{part} d

:::{plot}
width: 100%
align: right
fontsize: 28
axis: equal
ticks: off
xlabel: $\cos \varphi$
ylabel: $\sin \varphi$
circle: (0, 0), 1
let: u = 4*pi/3 - 4*pi
vector: (0, 0), (cos(u), sin(u)), blue
point: (cos(u), sin(u))
text: cos(u), sin(u), "$\vec r\left(-\frac{8\pi}{3}\right)$", bottom-left
angle-arc: (0, 0), 0.3, 0, u*180/pi, red, arrow
text: 0.6 * cos(u/2), 0.6 * sin(u/2), "$\displaystyle -\frac{8\pi}{3}$", center-center
:::


Bestem 

$$
\cos \left(-\dfrac{8\pi}{3}\right) \qog \sin \left(-\dfrac{8\pi}{3}\right)
$$


:::::{answer}

$$
\cos \left(-\dfrac{8\pi}{3}\right) = -\dfrac{1}{2} \qog \sin \left(-\dfrac{8\pi}{3}\right) = -\dfrac{\sqrt{3}}{2}
$$

::::{solution}
Legger vi til $4\pi$ får vi en positiv vinkel som ligger i 3. kvadrant:

$$
\varphi = -\dfrac{8\pi}{3} + 4\pi = \dfrac{4\pi}{3}
$$

Dermed er 

$$
\cos \left(-\dfrac{8\pi}{3}\right) = \cos \dfrac{4\pi}{3} = -\dfrac{1}{2}
$$

og 

$$
\sin \left(-\dfrac{8\pi}{3}\right) = \sin \dfrac{4\pi}{3} = -\dfrac{\sqrt{3}}{2}
$$

::::
:::::


:::::::::::::



:::::::::::::{part} e

:::{plot}
width: 100%
align: right
fontsize: 28
axis: equal
ticks: off
xlabel: $\cos \varphi$
ylabel: $\sin \varphi$
circle: (0, 0), 1
let: u = 3*pi/4 + 2*pi
vector: (0, 0), (cos(u), sin(u)), blue
point: (cos(u), sin(u))
text: cos(u), sin(u), "$\vec r\left(\frac{11\pi}{4}\right)$", top-left
angle-arc: (0, 0), 0.3, 0, u*180/pi, red, arrow
text: 0.6 * cos(u/2), 0.6 * sin(u/2), "$\displaystyle \frac{11\pi}{4}$", center-center
:::


Bestem 

$$
\cos \dfrac{11\pi}{4} \qog \sin \dfrac{11\pi}{4}
$$



:::::{answer}

$$
\cos \dfrac{11\pi}{4} = -\dfrac{\sqrt{2}}{2} \qog \sin \dfrac{11\pi}{4} = \dfrac{\sqrt{2}}{2}
$$


::::{solution}
Vinkelen har 1 ekstra omløp om enhetssirkelen. Vinkelen i første omløp får vi derfor ved å trekke fra $2\pi$:

$$
\varphi = \dfrac{11\pi}{4} - 2\pi = \dfrac{3\pi}{4}
$$


Dermed har vi at

$$
\cos \dfrac{11\pi}{4} = \cos \dfrac{3\pi}{4} = -\dfrac{\sqrt{2}}{2} \qog \sin \dfrac{11\pi}{4} = \sin \dfrac{3\pi}{4} = \dfrac{\sqrt{2}}{2}
$$


::::
:::::

:::::::::::::






:::::::::::::::


---



:::::::::::::::{exercise} Oppgave 5

:::{hint} Hint
Bruk Pytagoras' identitet $\cos^2 \varphi + \sin^2 \varphi = 1$
:::


:::::::::::::{part} a
Om en vinkel $\varphi$ får du vite at

* Vinkelen $\varphi$ ligger i 3. kvadrant
* $\sin \varphi = -\dfrac{2}{3}$

Bestem en eksakt verdi for $\cos \varphi$ og $\tan \varphi$.


:::::{answer}

$$
\cos \varphi = -\dfrac{\sqrt{5}}{3} \qog \tan \varphi = \dfrac{2}{\sqrt{5}}
$$

::::{solution}
Fra Pytagoras' identitet har vi at 

$$
\cos^2\varphi + \sin^2 \varphi = 1
$$

Vi løser denne likningen for $\cos \varphi$ og velger det negative svaret siden $\varphi$ ligger i 3. kvadrant:

$$
\cos^2\varphi = 1 - \sin^2 \varphi = 1 - \left(-\dfrac{2}{3}\right)^2 = 1 - \dfrac{4}{9} = \dfrac{5}{9}
$$

$$
\cos \varphi = -\sqrt{\dfrac{5}{9}} = -\dfrac{\sqrt{5}}{3}
$$

Så finner vi tangens:

$$
\tan \varphi = \dfrac{\sin \varphi}{\cos \varphi} = \dfrac{-\dfrac{2}{3}}{-\dfrac{\sqrt{5}}{3}} = \dfrac{2}{\sqrt{5}}
$$


::::
:::::


:::::::::::::



:::::::::::::{part} b
Om en vinkel $\theta$ får du vite at

* Vinkelen ligger i 4. kvadrant
* $\tan \theta = -\dfrac{3}{4}$

Bestem en eksakt verdi for $\sin \theta$ og $\cos \theta$.


:::::{answer}

$$
\cos \theta = \dfrac{4}{5} \qog \sin \theta = -\dfrac{3}{5}
$$


::::{solution}
Vi tar utgangspunkt i Pytagoras' identitet:

$$
\cos^2 \theta + \sin^2 \theta = 1
$$

Vi vet at $\tan \theta = -3/4$, som betyr at 

$$
\dfrac{\sin \theta}{\cos \theta} = -\dfrac{3}{4} \liff \sin \theta = -\dfrac{3}{4} \cos \theta
$$

Vi setter inn dette i Pytagoras' identitet:

$$
\cos^2 \theta + \left(-\dfrac{3}{4} \cos \theta\right)^2 = 1
$$

$$
\cos^2 \theta + \dfrac{9}{16} \cos^2 \theta = 1
$$

$$
\dfrac{25}{16} \cos^2 \theta = 1
$$

$$
\cos^2 \theta = \dfrac{16}{25}
$$

Vi vet at $\theta$ ligger i 4. kvadrant, så $\cos \theta$ må være positiv:

$$
\cos \theta = \sqrt{\dfrac{16}{25}} = \dfrac{4}{5}
$$

Siden vinkelen er i 4. kvadrant, blir $\sin \theta$ negativ:

$$
\sin^2 \theta = 1 - \cos^2 \theta = 1 - \dfrac{16}{25} = \dfrac{9}{25}
$$

$$
\sin \theta = -\sqrt{\dfrac{9}{25}} = -\dfrac{3}{5}
$$
::::
:::::

:::::::::::::



:::::::::::::{part} c
Om en vinkel $\gamma$ får du vite at

* Vinkelen ligger i 3. kvadrant
* $\tan \gamma = \dfrac{5}{12}$

Bestem en eksakt verdi for $\sin \gamma$ og $\cos \gamma$.



:::::{answer}

$$
\cos \gamma = -\dfrac{12}{13} \qog \sin \gamma = -\dfrac{5}{13}
$$


::::{solution}
Vi tar utgangspunkt i Pytagoras' identitet:

$$
\cos^2\gamma + \sin^2\gamma = 1
$$

Vi vet at $\tan \gamma = 5/12$, som betyr at

$$
\dfrac{\sin \gamma}{\cos \gamma} = \dfrac{5}{12} \liff \sin \gamma = \dfrac{5}{12} \cos \gamma
$$

Vi setter inn i Pytagoras' identitet:

$$
\cos^2\gamma + \left(\dfrac{5}{12} \cos \gamma\right)^2 = 1
$$

$$
\cos^2\gamma + \dfrac{25}{144} \cos^2 \gamma = 1
$$

$$
\dfrac{169}{144} \cos^2 \gamma = 1
$$

som gir 

$$
\cos^2 \gamma = \dfrac{144}{169}
$$

Siden $\gamma$ ligger i 3. kvadrant, må $\cos \gamma$ være negativ:

$$
\cos \gamma = -\sqrt{\dfrac{144}{169}} = -\dfrac{12}{13}
$$

Så finner vi $\sin \gamma$ som også må være negativ i 3. kvadrant:

$$
\sin^2 \gamma = 1 - \cos^2 \gamma = 1 - \dfrac{144}{169} = \dfrac{25}{169}
$$

$$
\sin \gamma = -\sqrt{\dfrac{25}{169}} = -\dfrac{5}{13}
$$

::::

:::::

:::::::::::::


:::::::::::::{part} d
Om en vinkel $\psi$ får du vite at 

* Vinkelen ligger i 2. kvadrant
* $\cos \psi = -\dfrac{4}{5}$

Bestem en eksakt verdi for $\sin \psi$ og $\tan \psi$.



:::::{answer}

$$
\sin \psi = \dfrac{3}{5} \qog \tan \psi = -\dfrac{3}{4}
$$


::::{solution}
Vi tar utgangspunkt i Pytagoras' identitet:

$$
\cos^2\psi + \sin^2\psi = 1
$$

Vi vet at $\cos \psi = -4/5$, som betyr at

$$
\sin^2 \psi = 1 - \cos^2 \psi = 1 - \left(-\dfrac{4}{5}\right)^2 = 1 - \dfrac{16}{25} = \dfrac{9}{25}
$$

Siden vinkelen $\psi$ ligger i 2. kvadrant, må $\sin \psi$ være positiv:

$$
\sin \psi = \sqrt{\dfrac{9}{25}} = \dfrac{3}{5}
$$

Så finner vi $\tan \psi$:

$$
\tan \psi = \dfrac{\sin \psi}{\cos \psi} = \dfrac{\dfrac{3}{5}}{-\dfrac{4}{5}} = -\dfrac{3}{4}
$$
::::
:::::


:::::::::::::


:::::::::::::{part} e
Om en vinkel $\lambda$ får du vite at 

* $\lambda \in \langle 0, \pi\rangle$
* $\tan \lambda = -2$

Bestem de eksakte verdiene for $\sin \lambda$ og $\cos \lambda$.


:::::{answer}

$$
\cos \lambda = -\dfrac{\sqrt{5}}{5} \qog \sin \lambda = \dfrac{2\sqrt{5}}{5}
$$

::::{solution}
Vi tar utgangspunkt i Pytagoras' identitet:

$$
\cos^2 \lambda + \sin^2 \lambda = 1
$$

Vi vet at $\tan \lambda = -2$, som betyr at

$$
\dfrac{\sin \lambda}{\cos \lambda} = -2 \liff \sin \lambda = -2 \cos \lambda
$$

Så setter vi inn i Pytagoras' identitet:

$$
\cos^2 \lambda + \left(-2 \cos \lambda\right)^2 = 1
$$

$$
\cos^2 \lambda + 4 \cos^2 \lambda = 1
$$

$$
5 \cos^2 \lambda = 1 \liff \cos^2 \lambda = \dfrac{1}{5}
$$

Vi vet at vinkelen må ligge i 2. kvadrant siden $\tan \lambda$ er negativ og $\lambda \in \langle 0, \pi\rangle$. Derfor må $\cos \lambda$ være negativ:

$$
\cos \lambda = -\sqrt{\dfrac{1}{5}} = -\dfrac{1}{\sqrt{5}} = -\dfrac{\sqrt{5}}{5}
$$

Så finner vi $\sin \lambda$:

$$
\sin \lambda = -2 \cos \lambda = -2 \left(-\dfrac{\sqrt{5}}{5}\right) = \dfrac{2\sqrt{5}}{5}
$$
::::
:::::


:::::::::::::



:::::::::::::::





---




:::::::::::::::{exercise} Oppgave 6
For en vinkel $\varphi$ i 1. kvadrant er $\cos \varphi = \dfrac{1}{3}$.


:::::::::::::{part} a
Finn $\sin \varphi$.


:::::{answer}
$$
\sin \varphi = \dfrac{2\sqrt{2}}{3}
$$

::::{solution}
Vi bruker Pytagoras' identitet:

$$
\cos^2 \varphi + \sin^2 \varphi = 1
$$


$$
\sin^2 \varphi = 1 - \cos^2 \varphi = 1 - \left(\dfrac{1}{3}\right)^2 = 1 - \dfrac{1}{9} = \dfrac{8}{9}
$$


Siden vinkelen $\varphi$ ligger i 1. kvadrant, må $\sin \varphi$ være positiv:

$$
\sin \varphi = \sqrt{\dfrac{8}{9}} = \dfrac{2\sqrt{2}}{3}
$$

::::

:::::

:::::::::::::



:::::::::::::{part} b

Finn $\cos (\varphi + \pi)$ og $\sin (\varphi + \pi)$.



:::::{answer}

$$
\cos (\varphi + \pi) = -\dfrac{1}{3} \qog \sin (\varphi + \pi) = -\dfrac{2\sqrt{2}}{3}
$$

::::{solution}
:::{plot}
xlabel: $\cos \varphi$
ylabel: $\sin \varphi$
fontsize: 28
align: right
width: 100%
circle: (0, 0), 1
let: u = acos(1/3)
let: v = u + pi
vector: (0, 0), (cos(u), sin(u)), blue
text: cos(u), sin(u), "$\vec r(\varphi)$", top-right
point: (cos(u), sin(u))
vector: (0, 0), (cos(v), sin(v)), red
point: (cos(v), sin(v))
text: 1.05 * cos(v), 1.05 * sin(v), "$\vec r(\varphi + \pi)$", bottom-left
angle-arc: (0, 0), 0.4, 0, u*180/pi, blue, arrow
angle-arc: (0, 0), 0.3, 0, v*180/pi, red, arrow
text: 0.5 * cos(u/2), 0.5 * sin(u/2), "$\varphi$", center-center
text: 0.4 * cos(v/2), 0.45 * sin(v/2), "$\varphi + \pi$", center-center
axis: equal
ticks: off
:::

Vi har at 

$$
\vec{r}(\varphi) = \left[\cos \varphi, \sin \varphi\right] = \mqty[\dfrac{1}{3}, \dfrac{2\sqrt{2}}{3}]
$$

Vinkelen $\varphi + \pi$ svarer til å rotere med $\pi$ radianer (180 grader) fra $\varphi$ som plasserer oss på motsatt side av enhetssirkelen slik at:

$$
\vec{r}(\varphi + \pi) = -\vec r(\varphi)
$$

Da får vi at 

$$
\cos(\varphi + \pi) = -\cos \varphi = -\dfrac{1}{3} 
$$

og

$$
\sin(\varphi + \pi) = -\sin \varphi = -\dfrac{2\sqrt{2}}{3}
$$



::::
:::::



:::::::::::::



:::::::::::::{part} c
Finn $\cos \left(\varphi - \pi\right)$ og $\sin \left(\varphi - \pi\right)$.



:::::{answer}

$$
\cos (\varphi - \pi) = -\dfrac{1}{3} \qog \sin (\varphi - \pi) = -\dfrac{2\sqrt{2}}{3}
$$


::::{solution}
Som i oppgave **b**, så er dette her en rotasjon på $180$ grader, bare denne gangen går det i negativ omløpsretning. Koordinatene blir de samme som i oppgave **b**, og dermed er: 

$$
\cos \left(\varphi - \pi\right) = -\dfrac{1}{3} \qog \sin \left(\varphi - \pi\right) = -\dfrac{2\sqrt{2}}{3}
$$
::::
:::::



:::::::::::::


:::::::::::::{part} d
Finn $\cos \left(\varphi - \dfrac{\pi}{2}\right)$ og $\sin \left(\varphi - \dfrac{\pi}{2}\right)$.



:::::{answer}

$$
\cos \left(\varphi - \dfrac{\pi}{2}\right) = \dfrac{2\sqrt{2}}{3} \qog \sin \left(\varphi - \dfrac{\pi}{2}\right) = -\dfrac{1}{3}
$$


::::{solution}
Vi vet at 

$$
\vec r(\varphi) = \left[\cos \varphi, \sin \varphi\right] = \mqty[\dfrac{1}{3}, \dfrac{2\sqrt{2}}{3}]
$$

Roterer vi denne vektoren med $-\pi/2$ radianer (altså 90 grader *med* klokka), så skal vi bytte om på $x$- og $y$-koordinatene og bytte fortegnet til den nye $y$-koordinaten:

$$
\vec r\left(\varphi - \dfrac{\pi}{2}\right) = \mqty[\dfrac{2\sqrt{2}}{3}, -\dfrac{1}{3}]
$$

Da følger det at 

$$
\cos \left(\varphi - \dfrac{\pi}{2}\right) = \dfrac{2\sqrt{2}}{3} \qog \sin \left(\varphi - \dfrac{\pi}{2}\right) = -\dfrac{1}{3}
$$
::::
:::::




:::::::::::::


:::::::::::::{part} e
Finn $\cos \left(\varphi + \dfrac{\pi}{2}\right)$ og $\sin \left(\varphi + \dfrac{\pi}{2}\right)$.


:::::{answer}
$$
\cos \left(\varphi + \dfrac{\pi}{2}\right) = -\dfrac{2\sqrt{2}}{3} \qog \sin \left(\varphi + \dfrac{\pi}{2}\right) = \dfrac{1}{3}
$$

::::{solution}
Vi vet at 

$$
\vec r(\varphi) = \left[\cos \varphi, \sin \varphi\right] = \mqty[\dfrac{1}{3}, \dfrac{2\sqrt{2}}{3}]
$$

Vektoren $\vec r\left(\varphi + \dfrac{\pi}{2}\right)$ får vi ved å rotere $\vec r(\varphi)$ med $+\pi/2$ radianer (altså 90 grader mot klokka). Dette tilsvarer å bytte om på $x$- og $y$-koordinatene og bytte fortegnet til den nye $x$-koordinaten:

$$
\vec r\left(\varphi + \dfrac{\pi}{2}\right) = \mqty[-\dfrac{2\sqrt{2}}{3}, \dfrac{1}{3}]
$$

Da følger det at 

$$
\cos \left(\varphi + \dfrac{\pi}{2}\right) = -\dfrac{2\sqrt{2}}{3} \qog \sin \left(\varphi + \dfrac{\pi}{2}\right) = \dfrac{1}{3}
$$
::::
:::::



:::::::::::::



:::::::::::::{part} f
Finn $\cos \left(\dfrac{\pi}{2} - \varphi\right)$ og $\sin \left(\dfrac{\pi}{2} - \varphi\right)$.



::::{hint} Hint
Tenk deg at du roterer $\vec r(-\varphi) = [\cos(-\varphi), \sin(-\varphi)]$ med $\pi/2$ radianer i positiv omløpsretning.
::::



:::::{answer}
$$
\cos \left(\dfrac{\pi}{2} - \varphi\right) = \dfrac{2\sqrt{2}}{3} \qog \sin \left(\dfrac{\pi}{2} - \varphi\right) = \dfrac{1}{3}
$$


::::{solution}
Vi vet at 

$$
\vec r(\varphi) = \left[\cos \varphi, \sin \varphi\right] = \mqty[\dfrac{1}{3}, \dfrac{2\sqrt{2}}{3}]
$$

En strategi her er å 
1. Først speile vektoren om $x$-aksen slik at vi får $\vec r(-\varphi)$
2. Deretter rotere vektoren med $\pi/2$ radianer i positiv omløpsretning så får vi $\vec r\left(\dfrac{\pi}{2} - \varphi\right)$.

Vektoren $\vec r(-\varphi)$ får vi ved å speile vektoren om $x$-aksen. Da vil $x$-koordinaten forbli den samme, mens $y$-koordinaten vil bytte fortegn:

$$
\vec r(-\varphi) = \mqty[\dfrac{1}{3}, -\dfrac{2\sqrt{2}}{3}]
$$

Nå roterer vi denne vektoren med $\pi/2$ radianer i positiv omløpsretning. Dette tilsvarer å bytte om på $x$- og $y$-koordinatene og bytte fortegnet til den nye $x$-koordinaten:

$$
\vec r\left(\dfrac{\pi}{2} - \varphi\right) = \mqty[\dfrac{2\sqrt{2}}{3}, \dfrac{1}{3}]
$$

Koordinatene til vektoren er henholdsvis cosinus og sinus som gir:

$$
\cos \left(\dfrac{\pi}{2} - \varphi\right) = \dfrac{2\sqrt{2}}{3} \qog \sin \left(\dfrac{\pi}{2} - \varphi\right) = \dfrac{1}{3}
$$

::::


:::::


:::::::::::::



:::::::::::::::


---



:::::::::::::::{exercise} Oppgave 7
Gitt at $\sin \varphi = \dfrac{4}{5}$ og $\varphi$ ligger i 2. kvadrant.



:::::::::::::{part} a
Finn $\cos \varphi$.


:::::{answer}
$$
\cos \varphi = -\dfrac{3}{5}
$$


::::{solution}
Vi bruker Pytagoras' identitet:

$$
\cos^2 \varphi + \sin^2 \varphi = 1
$$

$$
\cos^2 \varphi = 1 - \sin^2 \varphi = 1 - \left(\dfrac{4}{5}\right)^2 = 1 - \dfrac{16}{25} = \dfrac{9}{25}
$$

Siden vinkelen $\varphi$ ligger i 2. kvadrant, må $\cos \varphi$ være negativ:

$$
\cos \varphi = -\sqrt{\dfrac{9}{25}} = -\dfrac{3}{5}
$$
::::


:::::

:::::::::::::


:::::::::::::{part} b
Bestem $\cos (\varphi + \pi)$ og $\sin (\varphi + \pi)$.


:::::{answer}
$$
\cos (\varphi + \pi) = \dfrac{3}{5} \qog \sin (\varphi + \pi) = -\dfrac{4}{5}
$$


::::{solution}
Vi har at 

$$
\vec r(\varphi) = \left[\cos \varphi, \sin \varphi\right] = \mqty[-\dfrac{3}{5}, \dfrac{4}{5}]
$$

Roterer vi denne vektoren med $\pi$ radianer (180 grader) mot klokka, så får vi

$$
\vec r(\varphi + \pi) = -\vec r(\varphi) = \mqty[\dfrac{3}{5}, -\dfrac{4}{5}]
$$

Ergo er 

$$
\cos (\varphi + \pi) = \dfrac{3}{5} \qog \sin (\varphi + \pi) = -\dfrac{4}{5}
$$
::::

:::::

:::::::::::::


:::::::::::::{part} c
Bestem $\cos \left(\varphi - \dfrac{\pi}{2}\right)$ og $\sin \left(\varphi - \dfrac{\pi}{2}\right)$.



:::::{answer}
$$
\cos \left(\varphi - \dfrac{\pi}{2}\right) = \dfrac{4}{5} \qog \sin \left(\varphi - \dfrac{\pi}{2}\right) = \dfrac{3}{5}
$$

::::{solution}
Vi har at 

$$
\vec r(\varphi) = \left[\cos \varphi, \sin \varphi\right] = \mqty[-\dfrac{3}{5}, \dfrac{4}{5}]
$$

Roterer vi denne vektoren med $-\pi/2$ radianer (90 grader med klokka), så får vi

$$
\vec r\left(\varphi - \dfrac{\pi}{2}\right) = \mqty[\dfrac{4}{5}, \dfrac{3}{5}]
$$

Altså er 

$$
\cos \left(\varphi - \dfrac{\pi}{2}\right) = \dfrac{4}{5} \qog \sin \left(\varphi - \dfrac{\pi}{2}\right) = \dfrac{3}{5}
$$

::::

:::::

:::::::::::::


:::::::::::::{part} d
Bestem $\cos \left(\varphi + \dfrac{\pi}{2}\right)$ og $\sin \left(\varphi + \dfrac{\pi}{2}\right)$.


:::::{answer}
$$
\cos \left(\varphi + \dfrac{\pi}{2}\right) = -\dfrac{4}{5} \qog \sin \left(\varphi + \dfrac{\pi}{2}\right) = -\dfrac{3}{5}
$$


::::{solution}
Vi har at 

$$
\vec r(\varphi) = \left[\cos \varphi, \sin \varphi\right] = \mqty[-\dfrac{3}{5}, \dfrac{4}{5}]
$$

Roterer vi denne vektoren med $+\pi/2$ radianer (90 grader mot klokka), så får vi

$$
\vec r\left(\varphi + \dfrac{\pi}{2}\right) = \mqty[-\dfrac{4}{5}, -\dfrac{3}{5}]
$$

Dermed er 

$$
\cos \left(\varphi + \dfrac{\pi}{2}\right) = -\dfrac{4}{5} \qog \sin \left(\varphi + \dfrac{\pi}{2}\right) = -\dfrac{3}{5}
$$
::::

:::::

:::::::::::::



:::::::::::::{part} e
Finn $\cos(\pi - \varphi)$ og $\sin(\pi - \varphi)$.


:::::{answer}
$$
\cos (\pi - \varphi) = \dfrac{3}{5} \qog \sin(\pi - \varphi) = \dfrac{4}{5}
$$

::::{solution}
Vi har at 

$$
\vec r(\varphi) = \left[\cos \varphi, \sin \varphi\right] = \mqty[-\dfrac{3}{5}, \dfrac{4}{5}]
$$

Vektoren $\vec r(\pi - \varphi)$ får vi ved å speile $\vec r(\varphi)$ om $y$-aksen. Da vil $y$-koordinaten forbli den samme, mens $x$-koordinaten vil bytte fortegn:

$$
\vec r(\pi - \varphi) = \mqty[\dfrac{3}{5}, \dfrac{4}{5}]
$$

Ergo er 

$$
\cos (\pi - \varphi) = \dfrac{3}{5} \qog \sin(\pi - \varphi) = \dfrac{4}{5}
$$
::::
:::::

:::::::::::::

:::::::::::::::



---


:::::::::::::::{exercise} Oppgave 8
:::::::::::::{part} a
Om en vinkel $\varphi$ får du vite at

* $\cos (2\varphi) = \dfrac{1}{2}$
* $\sin \varphi = \dfrac{1}{2}$

Bestem de mulige verdiene til $\cos \varphi$.



:::::{answer}

$$
\cos \varphi = \pm \dfrac{\sqrt{3}}{2}
$$

::::{solution}
Vi bruker identiteten:

$$
\cos(2\varphi) = \cos^2 \varphi - \sin^2 \varphi
$$

Vi har at $\cos(2\varphi) = 1/2$ og $\sin \varphi = 1/2$ som gir

$$
\dfrac{1}{2} = \cos^2 \varphi - \left(\dfrac{1}{2}\right)^2
$$

$$
\dfrac{1}{2} = \cos^2 \varphi - \dfrac{1}{4}
$$

$$
\cos^2 \varphi = \dfrac{1}{2} + \dfrac{1}{4} = \dfrac{3}{4}
$$

$$
\cos \varphi = \pm \dfrac{\sqrt{3}}{2}
$$
::::
:::::


:::::::::::::


:::::::::::::{part} b
Om en vinkel $\varphi$ får du vite at

$$
\cos (2\varphi) = \dfrac{3}{4}
$$

Bestem de mulige verdiene til $\cos \varphi$.


:::::{answer}

$$
\cos\varphi = \pm \dfrac{\sqrt{14}}{4}
$$

::::{solution}
Vi starter med identiteten:

$$
\cos (2\varphi) = \cos^2 \varphi - \sin^2 \varphi
$$

Så bruker vi Pytagoras' identitet til å kvitte oss med $\sin^2 \varphi$:

$$
\cos^2 \varphi + \sin^2 \varphi = 1 \liff \sin^2 \varphi = 1 - \cos^2 \varphi
$$

$$
\cos (2\varphi) = \cos^2 \varphi - (1 - \cos^2 \varphi) = 2\cos^2 \varphi - 1
$$

Altså er 

$$
\cos^2 \varphi = \dfrac{\cos (2\varphi) + 1}{2} = \dfrac{\dfrac{3}{4} + 1}{2} = \dfrac{\dfrac{7}{4}}{2} = \dfrac{7}{8}
$$

Det betyr at de mulige verdiene er

$$
\cos \varphi = \pm \sqrt{\dfrac{7}{8}} = \pm \dfrac{\sqrt{14}}{4}
$$
::::
:::::


:::::::::::::



:::::::::::::{part} c
Om en vinkel $\varphi$ får du vite at

* $\sin \varphi = \dfrac{1}{3}$
* Vinkelen $\varphi$ ligger i 1. kvadrant

Finn $\sin (2\varphi)$. 


:::::{answer}
$$
\sin (2\varphi) = \dfrac{4\sqrt{2}}{9}
$$

::::{solution}
Vi starter med identiteten:

$$
\sin (2\varphi) = 2 \sin \varphi \cos \varphi
$$

Fra Pytagoras' identitet har vi at 

$$
\cos^2 \varphi + \sin^2 \varphi = 1 \liff \cos^2 \varphi = 1 - \sin^2 \varphi
$$

Siden vinkelen ligger i 1. kvadrant er $\sin \varphi$ positiv og $\cos \varphi$ positiv. Vi kan derfor skrive om $\cos \varphi$ som

$$
\cos \varphi = \sqrt{1 - \sin^2 \varphi}
$$

Vi setter tilbake igjen i den første likningen:

$$
\sin (2\varphi) = 2 \sin \varphi \sqrt{1 - \sin^2 \varphi}
$$

Da får vi

$$
\sin (2\varphi) = 2 \cdot \dfrac{1}{3} \sqrt{1 - \left(\dfrac{1}{3}\right)^2} = \dfrac{2}{3} \sqrt{1 - \dfrac{1}{9}} = \dfrac{2}{3} \sqrt{\dfrac{8}{9}} = \dfrac{2}{3} \cdot \dfrac{2\sqrt{2}}{3} = \dfrac{4\sqrt{2}}{9}
$$




::::
:::::

:::::::::::::

:::::::::::::::



---



:::::::::::::::{exercise} Oppgave 9
En vinkel $\varphi$ ligger i 3. kvadrant der $\tan \varphi = \dfrac{3}{4}$.


:::::::::::::{part} a
Finn en eksakt verdi for $\cos \varphi$ og $\sin \varphi$.


:::::{answer}
$$
\cos \varphi = -\dfrac{4}{5} \qog \sin \varphi = -\dfrac{3}{5}
$$

::::{solution}
Vi vet at 

$$
\tan \varphi = \dfrac{\sin \varphi}{\cos \varphi} = \dfrac{3}{4} \liff \sin \varphi = \dfrac{3}{4} \cos \varphi
$$

Så bruker vi Pytagoras' identitet:

$$
\cos^2 \varphi + \sin^2 \varphi = 1
$$

$$
\cos^2 \varphi + \left(\dfrac{3}{4} \cos \varphi\right)^2 = 1
$$

$$
\cos^2 \varphi + \dfrac{9}{16} \cos^2 \varphi = 1
$$

$$
\dfrac{25}{16} \cos^2 \varphi = 1
$$

$$
\cos^2 \varphi = \dfrac{16}{25}
$$

$$
\cos \varphi = \pm \dfrac{4}{5}
$$

Siden $\varphi$ ligger i 3. kvadrant, er $\cos \varphi$ negativ:

$$
\cos \varphi = -\dfrac{4}{5}
$$

Og dermed:

$$
\sin \varphi = -\dfrac{3}{5}
$$
::::
:::::

:::::::::::::


:::::::::::::{part} b
Finn $\cos \left(\varphi + 3\pi\right)$ og $\sin \left(\varphi + 3\pi\right)$.



:::::{answer}
$$
\cos \left(\varphi + 3\pi\right) = \dfrac{4}{5} \qog \sin \left(\varphi + 3\pi\right) = \dfrac{3}{5}
$$

::::{solution}
Vi har at 

$$
\vec r(\varphi) = \left[\cos \varphi, \sin \varphi\right] = \left[-\dfrac{4}{5}, -\dfrac{3}{5}\right]
$$

Vinkelen $\varphi + 3\pi$ vil svare til én full rotasjon med $2\pi$ og deretter en halv rotasjon med $\pi$ radianer. Ergo vil vi ende opp på motsatt side av sirkelen. Altså får vi

$$
\vec r(\varphi + 3\pi) = -1 \cdot \vec r(\varphi) = \left[\dfrac{4}{5}, \dfrac{3}{5}\right]
$$

Dermed er 

$$
\cos \left(\varphi + 3\pi\right) = \dfrac{4}{5} \qog \sin \left(\varphi + 3\pi\right) = \dfrac{3}{5}
$$
::::
:::::

:::::::::::::


:::::::::::::{part} c
Finn $\cos \left(\varphi + \dfrac{3\pi}{2}\right)$ og $\sin \left(\varphi + \dfrac{3\pi}{2}\right)$.


:::::{answer}
$$
\cos \left(\varphi + \dfrac{3\pi}{2}\right) = -\dfrac{3}{5} \qog \sin \left(\varphi + \dfrac{3\pi}{2}\right) = \dfrac{4}{5}
$$

::::{solution}
Vi har at:

$$
\vec r(\varphi) = \left[\cos \varphi, \sin \varphi\right] = \left[-\dfrac{4}{5}, -\dfrac{3}{5}\right]
$$

Deretter skal vi rotere vektoren $3\pi/2$ radianer som vi kan dele opp i å først rotere $\pi$ radianer og deretter $\pi/2$ radianer. Etter å ha rotert $\pi$ radianer, vil vi ende opp på motsatt side av sirkelen:

$$
\vec r(\varphi + \pi) = -1 \cdot \vec r(\varphi) = \left[\dfrac{4}{5}, \dfrac{3}{5}\right]
$$

Deretter skal vi rotere $\pi/2$ radianer som svarer til å bytte om rekkefølgen på koordinatene og endre fortegn på den nye $x$-koordinaten:

$$
\vec r\left(\varphi + \pi + \pi/2\right) = \vec r\left(\varphi + 3\pi/2\right) = \left[\cos(\varphi + 3\pi/2), \sin(\varphi + 3\pi/2)\right] = \left[-\dfrac{3}{5}, \dfrac{4}{5}\right]
$$

Ergo er 

$$
\cos \left(\varphi + \dfrac{3\pi}{2}\right) = -\dfrac{3}{5} \qog \sin \left(\varphi + \dfrac{3\pi}{2}\right) = \dfrac{4}{5}
$$
::::
:::::



:::::::::::::




:::::::::::::::



---



:::::::::::::::{exercise} Oppgave 10


:::::::::::::{part} a
Vis at 

$$
\cos 2\varphi = 2\cos^2 \varphi - 1
$$



:::{hint} Hint
Kombiner identitetene

$$
\cos^2 \varphi + \sin^2 \varphi = 1
$$

og 

$$
\cos 2\varphi = \cos^2 \varphi - \sin^2 \varphi
$$
:::


::::{solution}
Vi har at 

$$
\cos 2\varphi = \cos^2 \varphi - \sin^2 \varphi
$$

Samtidig er 

$$
\sin^2 \varphi + \cos^2 \varphi = 1 \liff \sin^2 \varphi = 1 - \cos^2 \varphi
$$

Vi setter inn uttrykket for $\sin^2 \varphi$ i den første identiteten som gir

$$
\cos 2\varphi = \cos^2 \varphi - (1 - \cos^2 \varphi) = 2\cos^2 \varphi - 1
$$
::::


:::::::::::::

:::::::::::::{part} b
Vis at 

$$
\sin^2 \varphi = \dfrac{1 - \cos 2\varphi}{2}
$$



::::{solution}
Vi har at 

$$
\cos 2\varphi = \cos^2 \varphi - \sin^2 \varphi
$$

og

$$
\sin^2 \varphi + \cos^2 \varphi = 1 \liff \cos^2 \varphi = 1 - \sin^2 \varphi
$$


Vi setter inn uttrykket for $\cos^2 \varphi$ i den første identiteten som gir

$$
\cos 2\varphi = (1 - \sin^2 \varphi) - \sin^2 \varphi = 1 - 2\sin^2 \varphi
$$

Så løser vi for $\sin^2 \varphi$:

$$
2\sin^2 \varphi = 1 - \cos 2\varphi \liff \sin^2 \varphi = \dfrac{1 - \cos 2\varphi}{2}
$$

::::


:::::::::::::





:::::::::::::::


---


:::::::::::::::{exercise} Oppgave 11

:::::::::::::{part} a
Vis at 

$$
\cos 2\varphi - \sin \varphi = -2\sin^2 \varphi - \sin \varphi + 1
$$



::::{solution}
Vi bruker først at 

$$
\cos 2\varphi = \cos^2 \varphi - \sin^2 \varphi
$$

som gir

$$
\cos 2\varphi - \sin \varphi = \cos^2 \varphi - \sin^2 \varphi - \sin \varphi
$$

Deretter bruker vi at 

$$
\cos^2 \varphi = 1 - \sin^2 \varphi
$$

som gir at 

$$
\cos 2\varphi - \sin \varphi = (1 - \sin^2 \varphi) - \sin^2 \varphi - \sin \varphi = 1 - 2\sin^2 \varphi - \sin \varphi
$$

Dermed er 

$$
\cos 2\varphi - \sin \varphi = -2\sin^2 \varphi - \sin \varphi + 1
$$
::::


:::::::::::::



:::::::::::::{part} b
Vis at 

$$
\sin^2 2\varphi - \sin^2 \varphi = -4\sin^4 \varphi + 3\sin^2 \varphi
$$



::::{solution}
Vi har at 

$$
\sin 2\varphi = 2\cos \varphi \sin \varphi \limplies \sin^2 2\varphi = 4\cos^2 \varphi \sin^2 \varphi
$$

Dermed får vi 

$$
\begin{align*}
\sin^2 2\varphi - \sin^2 \varphi &= 4\cos^2 \varphi \sin^2 \varphi - \sin^2 \varphi \\
\\
&= 4(1 - \sin^2 \varphi) \sin^2 \varphi - \sin^2 \varphi \\
\\
&= 4\sin^2 \varphi - 4\sin^4 \varphi - \sin^2 \varphi \\
\\
&= -4\sin^4 \varphi + 3\sin^2 \varphi
\end{align*}
$$
::::


:::::::::::::




:::::::::::::::



---


:::::::::::::::{exercise} Oppgave 12


:::{hint} Hint
Du kan bruke identiteten for sinus av en dobbel vinkel ved å innse at 

$$
\sin 4\varphi = \sin (2\cdot 2\varphi) = \sin 2 \theta
$$

der $\theta = 2\varphi$.
:::

:::::::::::::{part} a
Vis at 

$$
\sin 4\varphi = 2 \sin 2\varphi \cdot \cos 2\varphi
$$


::::{solution}
Vi har at 

$$
\sin 4\varphi = \sin (2\cdot 2\varphi)
$$

Hvis vi lar $\theta = 2\varphi$ får vi 

$$
\sin 2\theta = 2\cos \theta \sin \theta = 2\sin 2\varphi \cos 2\varphi
$$

Ergo er 

$$
\sin 4\varphi = 2 \sin 2\varphi \cdot \cos 2\varphi
$$

::::


:::::::::::::


:::::::::::::{part} b
Vis at 

$$
\sin 4\varphi = 4\cos^3 \varphi \sin \varphi - 4\cos \varphi \sin^3 \varphi
$$



::::{solution}
Vi starter fra identiteten fra oppgave **a)**:

$$
\sin 4\varphi = 2 \sin 2\varphi \cdot \cos 2\varphi
$$

Vi har da at 

$$
\sin 2\varphi = 2 \sin \varphi \cos \varphi
$$

og

$$
\cos 2\varphi = \cos^2 \varphi - \sin^2 \varphi
$$

Så setter vi inn og ganger ut:

$$
\begin{align*}
\sin 4\varphi = 2 \sin 2\varphi \cdot \cos 2\varphi &= 2 (2 \sin \varphi \cos \varphi) (\cos^2 \varphi - \sin^2 \varphi) \\
\\
&= 4 \sin \varphi \cos \varphi (\cos^2 \varphi - \sin^2 \varphi) \\
\\
&= 4 \sin \varphi \cos^3 \varphi - 4 \sin^3 \varphi \cos \varphi \\
\\
&= 4 \cos^3 \varphi \sin \varphi - 4 \cos \varphi \sin^3 \varphi
\end{align*}
$$
::::


:::::::::::::



:::::::::::::{part} c
Vis at 

$$
\sin 4\varphi = 8\cos^3 \varphi \sin \varphi - 4\cos \varphi \sin \varphi
$$


::::{solution}
I oppgave **a)** har vi vist at 

$$
\sin 4\varphi = 2 \sin 2\varphi \cdot \cos 2\varphi
$$

Vi bruker nå at 

$$
\sin 2\varphi = 2 \sin \varphi \cos \varphi
$$

og

$$
\cos 2\varphi = \cos^2 \varphi - \sin^2 \varphi = \cos^2 \varphi - (1 - \cos^2 \varphi) = 2\cos^2 \varphi - 1
$$

Vi setter inn i den opprinnelige likningen som gir

$$
\begin{align*}
\sin 4\varphi &= 2 \sin 2\varphi \cdot \cos 2\varphi \\
\\
&= 2 (2 \sin \varphi \cos \varphi) (2\cos^2 \varphi - 1) \\
\\
&= 4 \sin \varphi \cos \varphi (2\cos^2 \varphi - 1) \\
\\
&= 8 \sin \varphi \cos^3 \varphi - 4 \sin \varphi \cos \varphi \\
\end{align*}
$$
::::


:::::::::::::



:::::::::::::{part} d
Vis at 

$$
\sin 4\varphi = 4\cos\varphi(\sin \varphi - 2\sin^3 \varphi)
$$


::::{solution}
Fra oppgave **a)** har vi at 

$$
\sin 4\varphi = 2 \sin 2\varphi \cdot \cos 2\varphi
$$

Vi har også at 

$$
\sin 2\varphi = 2  \cos \varphi \sin \varphi
$$

og

$$
\cos 2\varphi = \cos^2 \varphi - \sin^2 \varphi = 1 - 2\sin^2 \varphi
$$

Vi setter inn og regner ut:

$$
\begin{align*}
\sin 4\varphi &= 2 \sin 2\varphi \cdot \cos 2\varphi \\
\\
&= 2 (2 \sin \varphi \cos \varphi) (1 - 2\sin^2 \varphi) \\
\\
&= 4  \cos \varphi \sin \varphi (1 - 2\sin^2 \varphi) \\
\\
&= 4 \cos \varphi \sin \varphi  - 8 \cos \varphi \sin^3 \varphi \\
\\
&= 4 \cos \varphi (\sin \varphi - 2\sin^3 \varphi)
\end{align*}
$$
::::


:::::::::::::


:::::::::::::::


---


:::::::::::::::{exercise} Oppgave 13

:::::::::::::{part} a
Vis at

$$
\cos 4\varphi = \cos^4 \varphi - 6\cos^2 \varphi \sin^2 \varphi + \sin^4 \varphi
$$


::::{solution}
Vi har at 


$$
\begin{align*}
\cos 4\varphi &= \cos (2 \cdot (2\varphi)) \\
\\
&= \cos^2 (2\varphi) - \sin^2 (2\varphi) \\
\\
&= (\cos^2 \varphi - \sin^2 \varphi)^2 - (2\cos \varphi \sin \varphi)^2 \\
\\
&= (\cos^4 \varphi - 2\cos^2 \varphi \sin^2 \varphi + \sin^4 \varphi) - 4\cos^2 \varphi \sin^2 \varphi \\
\\
&= \cos^4 \varphi - 6\cos^2 \varphi \sin^2 \varphi + \sin^4 \varphi
\end{align*}
$$
::::


:::::::::::::


:::::::::::::{part} b
Vis at 

$$
\cos 4\varphi = 8\cos^4 \varphi - 8\cos^2 \varphi + 1
$$


::::{solution}
Fra oppgave **a)** har vi at

$$
\cos 4\varphi = \cos^4 \varphi - 6\cos^2 \varphi \sin^2 \varphi + \sin^4 \varphi
$$

Vi bruker Pytagoras' identitet til å skrive om $\sin^2 \varphi$ som

$$
\sin^2 \varphi = 1 - \cos^2 \varphi
$$

Da får vi at 

$$
\begin{align*}
\cos 4\varphi &= \cos^4 \varphi - 6\cos^2 \varphi \sin^2 \varphi + \sin^4 \varphi \\
\\
&= \cos^4 \varphi - 6\cos^2 \varphi (1 - \cos^2 \varphi) + (1 - \cos^2 \varphi)^2 \\
\\
&= \cos^4 \varphi - 6\cos^2 \varphi + 6\cos^4 \varphi + 1 - 2\cos^2 \varphi + \cos^4 \varphi \\
\\
&= 8\cos^4 \varphi - 8\cos^2 \varphi + 1
\end{align*}
$$
::::


:::::::::::::

:::::::::::::::


---



:::::::::::::::{exercise} Oppgave 14

> Dette er en oppgavetype du vil ha formelark tilgjengelig for å løse. Eller så blir identiteten nedenfor oppgitt i oppgaven.

For alle vinkler $\varphi$ og $\theta$ gjelder følgende identitet:

$$
\begin{align*}
\sin (\varphi \pm \theta) = \sin \varphi \cdot \cos \theta \pm \cos \varphi \cdot \sin \theta
\end{align*}
$$


:::::::::::::{part} a
Vis at 

$$
\sin 3\varphi = \sin \varphi \cdot \cos 2\varphi + \cos \varphi \cdot \sin 2\varphi
$$


:::{hint} Hint
Bruk at $\sin 3\varphi = \sin (\varphi + 2\varphi)$
:::


::::{solution}
Vi bruker identiteten

$$
\sin (\varphi + \theta) = \sin \varphi \cdot \cos \theta + \cos \varphi \cdot \sin \theta
$$

der $\theta = 2\varphi$:

$$
\begin{align*}
\sin 3 \varphi &= \sin(\varphi + 2\varphi) \\
\\
&= \sin \varphi \cos 2\varphi + \cos \varphi \sin 2\varphi \\
\end{align*}
$$
::::




:::::::::::::


:::::::::::::{part} b
Vis at 

$$
\sin 3\varphi = 3\sin \varphi - 4\sin^3 \varphi
$$


:::{hint} Hint
Kombiner identiteten fra oppgave **a)** med 

$$
\cos 2\varphi = \cos^2 \varphi - \sin^2 \varphi \qog \sin 2\varphi = 2 \sin \varphi \cos \varphi
$$
:::


::::{solution}
Vi har at 

$$
\sin 3\varphi = \sin \varphi \cdot \cos 2\varphi + \cos \varphi \cdot \sin 2\varphi
$$

Så kombinerer vi dette med at 

$$
\cos 2\varphi = \cos^2 \varphi - \sin^2 \varphi = 1 - 2\sin^2 \varphi
$$

og 

$$
\sin 2\varphi = 2 \sin \varphi \cos \varphi
$$

som gir

$$
\begin{align*}
\sin 3\varphi &= \sin \varphi \cdot \cos 2\varphi + \cos \varphi \cdot \sin 2\varphi \\
\\
&= \sin \varphi (1 - 2\sin^2 \varphi) + \cos \varphi (2 \sin \varphi \cos \varphi) \\
\\
&= \sin \varphi - 2\sin^3 \varphi + 2 \sin \varphi \cos^2 \varphi \\
\\
&= \sin \varphi - 2\sin^3 \varphi + 2 \sin \varphi (1 - \sin^2 \varphi) \\
\\
&= \sin \varphi - 2\sin^3 \varphi + 2 \sin \varphi - 2 \sin^3 \varphi \\
\\
&= 3\sin \varphi - 4\sin^3 \varphi
\end{align*}
$$
::::


:::::::::::::


:::::::::::::::



---



:::::::::::::::{exercise} Oppgave 15
> Dette er en oppgavetype du vil ha formelark tilgjengelig for å løse. Eller så blir identiteten nedenfor oppgitt i oppgaven.

For alle vinkler $\varphi$ og $\theta$ gjelder følgende identitet:

$$
\cos (\varphi \pm \theta) = \cos \varphi \cdot \cos \theta \mp \sin \varphi \cdot \sin \theta
$$


:::::::::::::{part} a
Vis at 


$$
\cos 3\varphi = \cos \varphi \cdot \cos 2\varphi - \sin \varphi \cdot \sin 2\varphi
$$


::::{solution}
Vi bruker den oppgitte identiteten med $\theta = 2\varphi$ slik at

$$
\begin{align*}
\cos 3\varphi &= \cos(\varphi + 2\varphi) \\
\\
&= \cos \varphi \cdot \cos 2\varphi - \sin \varphi \cdot \sin 2\varphi
\end{align*}
$$
::::


:::::::::::::


:::::::::::::{part} b
Vis at 

$$
\cos 3\varphi = 4\cos^3 \varphi - 3\cos \varphi
$$


::::{solution}
Fra oppgave **a)** har vi at 

$$
\cos 3\varphi = \cos \varphi \cdot \cos 2\varphi - \sin \varphi \cdot \sin 2\varphi
$$

Vi bruker at 

$$
\cos 2\varphi = \cos^2 \varphi - \sin^2 \varphi = 2\cos^2 \varphi - 1
$$

og at 

$$
\sin 2\varphi = 2 \sin \varphi \cos \varphi
$$

Da får vi

$$
\begin{align*}
\cos 3\varphi &= \cos \varphi \cdot \cos 2\varphi - \sin \varphi \cdot \sin 2\varphi \\
\\
&= \cos \varphi (2\cos^2 \varphi - 1) - \sin \varphi (2 \sin \varphi \cos \varphi) \\
\\
&= 2\cos^3 \varphi - \cos \varphi - 2 \sin^2 \varphi \cos \varphi \\
\\
&= 2\cos^3 \varphi - \cos \varphi - 2 (1 - \cos^2 \varphi) \cos \varphi \\
\\
&= 2\cos^3 \varphi - \cos \varphi - 2 \cos \varphi + 2 \cos^3 \varphi \\
\\
&= 4\cos^3 \varphi - 3\cos \varphi
\end{align*}
$$

::::

:::::::::::::


:::::::::::::::