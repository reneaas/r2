# Trigonometriske identiteter: Oppgaver




:::::::::::::::{exercise} Oppgave 1
:::::::::::::{part} a
:::{plot}
width: 100%
axis: equal
ticks: off
align: right
fontsize: 28
circle: (0, 0), 1
let: u = 3*pi/4
line-segment: (0, 0), (cos(u), sin(u)), red
point: (cos(u), sin(u))
text: cos(u), sin(u), "$P$", top-left
angle-arc: (0, 0), 0.3, 0, u*180/pi, red, arrow
text: 0.5 * cos(u/2), 0.5 * sin(u/2), "$3\pi/4$", center-center
text: 0.5 * cos(u), 0.5 * sin(u), "$1$", bottom-left
lw: 3
xlabel: $\cos \varphi$
ylabel: $\sin \varphi$
:::


Punktet $P$ ligger på enhetssirkelen. Linjestykket $OP$ danner vinkelen $\varphi = \dfrac{3\pi}{4}$ med førsteaksen.

Finn $\cos \dfrac{3\pi}{4}$ og $\sin \dfrac{3\pi}{4}$.


:::::{answer}

$$
\cos \dfrac{3\pi}{4} = -\dfrac{\sqrt{2}}{2} \qog \sin \dfrac{3\pi}{4} = \dfrac{\sqrt{2}}{2}
$$

::::{solution}
Posisjonsvektoren til punktet $P$ er

$$
\lvec{OP} = \left[\cos \left(\dfrac{3\pi}{4}\right), \sin \left(\dfrac{3\pi}{4}\right)\right]
$$

Dersom vi roterer denne vektoren 90 grader med klokka, får vi et punkt $Q$ i 1. kvadrant. Dette punktet får koordinatene:

$$
\lvec{OQ} = \left[\cos \left(\dfrac{3\pi}{4} - \dfrac{\pi}{2}\right), \sin \left(\dfrac{3\pi}{4} - \dfrac{\pi}{2}\right)\right] = \left[\cos \left(\dfrac{\pi}{4}\right), \sin \left(\dfrac{\pi}{4}\right)\right] = \left[\dfrac{\sqrt{2}}{2}, \dfrac{\sqrt{2}}{2}\right]
$$

Så roterer vi $\lvec{OQ}$ 90 grader mot klokka for å komme tilbake til punktet $P$ ved å bytte om på rekkefølgen på koordinatene og endre fortegnet på $x$-koordinaten:

$$
\lvec{OP} = \lvec{OQ}_{+\pi/2} = \left[-\dfrac{\sqrt{2}}{2}, \dfrac{\sqrt{2}}{2}\right]
$$


Altså er 

$$
\cos \dfrac{3\pi}{4} = -\dfrac{\sqrt{2}}{2} \qog \sin \dfrac{3\pi}{4} = \dfrac{\sqrt{2}}{2}
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
let: u = 2*pi/3
line-segment: (0, 0), (cos(u), sin(u)), red
point: (cos(u), sin(u))
text: cos(u), sin(u), "$P$", top-left
angle-arc: (0, 0), 0.3, 0, u*180/pi, red, arrow
text: 0.5 * cos(u/2), 0.5 * sin(u/2), "$2\pi/3$", center-center
text: 0.5 * cos(u), 0.5 * sin(u), "$1$", bottom-left
lw: 3
xlabel: $\cos \varphi$
ylabel: $\sin \varphi$
:::


Punktet $P$ ligger på enhetssirkelen. Linjestykket $OP$ danner vinkelen $\varphi = \dfrac{2\pi}{3}$ med førsteaksen.

Finn $\cos \dfrac{2\pi}{3}$ og $\sin \dfrac{2\pi}{3}$.



:::::{answer}
$$
\cos \dfrac{2\pi}{3} = -\dfrac{1}{2} \qog \sin \dfrac{2\pi}{3} = \dfrac{\sqrt{3}}{2}
$$

::::{solution}
Posisjonsvektoren til punktet $P$ er gitt ved

$$
\lvec{OP} = \left[\cos \left(\dfrac{2\pi}{3}\right), \sin \left(\dfrac{2\pi}{3}\right)\right]
$$

Roterer vi vektoren $90$ grader med klokka, får vi et punkt $Q$ i 1. kvadrant. Dette punktet får koordinatene:

$$
\begin{align*}
\lvec{OQ} &= \lvec{OP}_{-\pi/2} = \left[\cos \left(\dfrac{2\pi}{3} - \dfrac{\pi}{2}\right), \sin \left(\dfrac{2\pi}{3} - \dfrac{\pi}{2}\right)\right] \\
\\
&= \left[\cos \left(\dfrac{\pi}{6}\right), \sin \left(\dfrac{\pi}{6}\right)\right] \\
\\
&= \left[\dfrac{\sqrt{3}}{2}, \dfrac{1}{2}\right]
\end{align*}
$$

For å få koordinatene til punktet $P$, roterer vi vektoren tilbake med $90$ grader mot klokka:

$$
\lvec{OP} = \lvec{OQ}_{+\pi/2} = \left[-\dfrac{1}{2}, \dfrac{\sqrt{3}}{2}\right]
$$

Altså er 

$$
\cos \dfrac{2\pi}{3} = -\dfrac{1}{2} \qog \sin \dfrac{2\pi}{3} = \dfrac{\sqrt{3}}{2}
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
let: u = 5*pi/6
line-segment: (0, 0), (cos(u), sin(u)), red
point: (cos(u), sin(u))
text: cos(u), sin(u), "$P$", top-left
angle-arc: (0, 0), 0.3, 0, u*180/pi, red, arrow
text: 0.5 * cos(u/2), 0.5 * sin(u/2), "$5\pi/6$", center-center
text: 0.5 * cos(u), 0.5 * sin(u), "$1$", bottom-left
lw: 3
xlabel: $\cos \varphi$
ylabel: $\sin \varphi$
:::


Punktet $P$ ligger på enhetssirkelen. Linjestykket $OP$ danner vinkelen $\varphi = \dfrac{5\pi}{6}$ med førsteaksen.

Finn $\cos \dfrac{5\pi}{6}$ og $\sin \dfrac{5\pi}{6}$.



:::::{answer}
$$
\cos \dfrac{5\pi}{6} = -\dfrac{\sqrt{3}}{2} \qog \sin \dfrac{5\pi}{6} = \dfrac{1}{2}
$$

::::{solution}
Posisjonsvektoren til punktet $P$ er gitt ved 

$$
\lvec{OP} = \left[\cos \left(\dfrac{5\pi}{6}\right), \sin \left(\dfrac{5\pi}{6}\right)\right]
$$

Roterer vi vektoren $90$ grader med klokka, får vi et punkt $Q$ i 1. kvadrant. Dette punktet får koordinatene:

$$
\begin{align*}
\lvec{OQ} &= \lvec{OP}_{-\pi/2} = \left[\cos \left(\dfrac{5\pi}{6} - \dfrac{\pi}{2}\right), \sin \left(\dfrac{5\pi}{6} - \dfrac{\pi}{2}\right)\right] \\
\\
&= \left[\cos \left(\dfrac{\pi}{3}\right), \sin \left(\dfrac{\pi}{3}\right)\right] \\
\\
&= \left[\dfrac{1}{2}, \dfrac{\sqrt{3}}{2}\right]
\end{align*}
$$

Så roterer vi vektoren tilbake igjen med $90$ grader mot klokka for å komme tilbake til punktet $P$:

$$
\begin{align*}
\lvec{OP} &= \lvec{OQ}_{+\pi/2} = \left[-\dfrac{\sqrt{3}}{2}, \dfrac{1}{2}\right]
\end{align*}
$$


Ergo er

$$
\cos \dfrac{5\pi}{6} = -\dfrac{\sqrt{3}}{2} \qog \sin \dfrac{5\pi}{6} = \dfrac{1}{2}
$$
::::
:::::

:::::::::::::


:::::::::::::::


---



:::::::::::::::{exercise} Oppgave 2

:::::::::::::{part} a
:::{plot}
width: 100%
axis: equal
ticks: off
align: right
fontsize: 28
circle: (0, 0), 1
let: u = -pi/6
line-segment: (0, 0), (cos(u), sin(u)), red
point: (cos(u), sin(u))
text: cos(u), sin(u), "$P$", bottom-right
angle-arc: (0, 0), 0.3, 0, u*180/pi, red, arrow
text: 0.55 * cos(u/2), 0.5 * sin(u/2), "$-\pi/6$", center-center
text: 0.5 * cos(u), 0.5 * sin(u), "$1$", bottom-left
lw: 3
xlabel: $\cos \varphi$
ylabel: $\sin \varphi$
:::


Punktet $P$ ligger på enhetssirkelen. Linjestykket $OP$ danner vinkelen $\varphi = -\dfrac{\pi}{6}$ med førsteaksen.

Finn $\cos \left(-\dfrac{\pi}{6}\right)$ og $\sin \left(-\dfrac{\pi}{6}\right)$.


:::::{answer}

$$
\cos \left(-\dfrac{\pi}{6}\right) = \dfrac{\sqrt{3}}{2} \qog \sin \left(-\dfrac{\pi}{6}\right) = -\dfrac{1}{2}
$$

::::{solution}
Posisjonsvektoren til $\lvec{OP}$ er gitt ved 

$$
\lvec{OP} = \left[\cos \left(-\dfrac{\pi}{6}\right), \sin \left(-\dfrac{\pi}{6}\right)\right]
$$

Dersom vi speiler vektoren om $x$-aksen, får vi punktet 

$$
\lvec{OQ} = \left[\cos \left(\dfrac{\pi}{6}\right), \sin \left(\dfrac{\pi}{6}\right)\right] = \left[\dfrac{\sqrt{3}}{2}, \dfrac{1}{2}\right]
$$

Vi speiler vektoren tilbake for å finne koordinatene til $P$ som svarer til å holde $x$-koordinaten uendret, mens fortegnet på $y$-koordinaten endres:

$$
\lvec{OP} = \left[\dfrac{\sqrt{3}}{2}, -\dfrac{1}{2}\right]
$$

Altså er 

$$
\cos \left(-\dfrac{\pi}{6}\right) = \dfrac{\sqrt{3}}{2} \qog \sin \left(-\dfrac{\pi}{6}\right) = -\dfrac{1}{2}
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
let: u = -pi/4
line-segment: (0, 0), (cos(u), sin(u)), red
point: (cos(u), sin(u))
text: cos(u), sin(u), "$P$", bottom-right
angle-arc: (0, 0), 0.3, 0, u*180/pi, red, arrow
text: 0.55 * cos(u/2), 0.5 * sin(u/2), "$-\pi/4$", center-center
text: 0.5 * cos(u), 0.5 * sin(u), "$1$", bottom-left
lw: 3
xlabel: $\cos \varphi$
ylabel: $\sin \varphi$
:::


Punktet $P$ ligger på enhetssirkelen. Linjestykket $OP$ danner vinkelen $\varphi = -\dfrac{\pi}{4}$ med førsteaksen.

Finn $\cos \left(-\dfrac{\pi}{4}\right)$ og $\sin \left(-\dfrac{\pi}{4}\right)$.



:::::{answer}

$$
\cos \left(-\dfrac{\pi}{4}\right) = \dfrac{\sqrt{2}}{2} \qog \sin \left(-\dfrac{\pi}{4}\right) = -\dfrac{\sqrt{2}}{2}
$$

::::{solution}
Posisjonsvektoren til $P$ er gitt ved 

$$
\lvec{OP} = \left[\cos \left(-\dfrac{\pi}{4}\right), \sin \left(-\dfrac{\pi}{4}\right)\right]
$$

Dersom vi speiler vektoren om $x$-aksen, får vi punktet

$$
\lvec{OQ} = \left[\cos \left(\dfrac{\pi}{4}\right), \sin \left(\dfrac{\pi}{4}\right)\right] = \left[\dfrac{\sqrt{2}}{2}, \dfrac{\sqrt{2}}{2}\right]
$$

Så speiler vi denne vektoren tilbake igjen for å finne koordinatene til $P$ som svarer til å holde $x$-koordinaten uendret, mens fortegnet på $y$-koordinaten endres:

$$
\lvec{OP} = \left[\dfrac{\sqrt{2}}{2}, -\dfrac{\sqrt{2}}{2}\right]
$$

Ergo må 

$$
\cos \left(-\dfrac{\pi}{4}\right) = \dfrac{\sqrt{2}}{2} \qog \sin \left(-\dfrac{\pi}{4}\right) = -\dfrac{\sqrt{2}}{2}
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
let: u = -pi/3
line-segment: (0, 0), (cos(u), sin(u)), red
point: (cos(u), sin(u))
text: cos(u), sin(u), "$P$", bottom-right
angle-arc: (0, 0), 0.3, 0, u*180/pi, red, arrow
text: 0.55 * cos(u/2), 0.5 * sin(u/2), "$-\pi/3$", center-center
text: 0.5 * cos(u), 0.5 * sin(u), "$1$", bottom-left
lw: 3
xlabel: $\cos \varphi$
ylabel: $\sin \varphi$
:::


Punktet $P$ ligger på enhetssirkelen. Linjestykket $OP$ danner vinkelen $\varphi = -\dfrac{\pi}{3}$ med førsteaksen.

Finn $\cos \left(-\dfrac{\pi}{3}\right)$ og $\sin \left(-\dfrac{\pi}{3}\right)$.


:::::{answer}
$$
\cos \left(-\dfrac{\pi}{3}\right) = \dfrac{1}{2} \qog \sin \left(-\dfrac{\pi}{3}\right) = -\dfrac{\sqrt{3}}{2}
$$

::::{solution}
Posisjonsvektoren til punktet $P$ er gitt ved

$$
\lvec{OP} = \left[\cos \left(-\dfrac{\pi}{3}\right), \sin \left(-\dfrac{\pi}{3}\right)\right]
$$

Dersom vi speiler vektoren om $x$-aksen, får vi punktet

$$
\lvec{OQ} = \left[\cos \left(\dfrac{\pi}{3}\right), \sin \left(\dfrac{\pi}{3}\right)\right] = \left[\dfrac{1}{2}, \dfrac{\sqrt{3}}{2}\right]
$$

Så speiler vi denne vektoren tilbake igjen for å finne koordinatene til $P$ som svarer til å holde $x$-koordinaten uendret, mens fortegnet på $y$-koordinaten endres:

$$
\lvec{OP} = \left[\dfrac{1}{2}, -\dfrac{\sqrt{3}}{2}\right]
$$

Ergo må 

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
width: 100%
axis: equal
ticks: off
align: right
fontsize: 28
circle: (0, 0), 1
let: u = 7*pi/6
line-segment: (0, 0), (cos(u), sin(u)), red
point: (cos(u), sin(u))
text: cos(u), sin(u), "$P$", bottom-left
angle-arc: (0, 0), 0.3, 0, u*180/pi, red, arrow
text: 0.5 * cos(u/2), 0.5 * sin(u/2), "$7\pi/6$", center-center
text: 0.5 * cos(u), 0.5 * sin(u), "$1$", bottom-right
lw: 3
xlabel: $\cos \varphi$
ylabel: $\sin \varphi$
:::


Punktet $P$ ligger på enhetssirkelen. Linjestykket $OP$ danner vinkelen $\varphi = \dfrac{7\pi}{6}$ med førsteaksen.

Finn $\cos \dfrac{7\pi}{6}$ og $\sin \dfrac{7\pi}{6}$.


:::::{answer}
$$
\cos \dfrac{7\pi}{6} = -\dfrac{\sqrt{3}}{2} \qog \sin \dfrac{7\pi}{6} = -\dfrac{1}{2}
$$

::::{solution}
Posisjonsvektoren til $P$ er gitt ved

$$
\lvec{OP} = \left[\cos \left(\dfrac{7\pi}{6}\right), \sin \left(\dfrac{7\pi}{6}\right)\right]
$$

Siden punktet $P$ ligger i 3. kvadrant, kan vi rotere vektoren med 180 grader med klokka for å få et punkt $Q$ i 1. kvadrant. Dette punktet får koordinatene:

$$
\begin{align*}
\lvec{OQ} &= \lvec{OP}_{-\pi} = \left[\cos \left(\dfrac{7\pi}{6} - \pi\right), \sin \left(\dfrac{7\pi}{6} - \pi\right)\right] \\
\\
&= \left[\cos \left(\dfrac{\pi}{6}\right), \sin \left(\dfrac{\pi}{6}\right)\right] \\
\\
&= \left[\dfrac{\sqrt{3}}{2}, \dfrac{1}{2}\right]
\end{align*}
$$

Så roterer vi denne vektoren tilbake med 180 grader mot klokka for å komme tilbake til punktet $P$. Dette svarer til å gange vektoren med $-1$:

$$
\lvec{OP} = \lvec{OQ}_{+\pi} = (-1) \cdot \lvec{OQ} = \left[-\dfrac{\sqrt{3}}{2}, -\dfrac{1}{2}\right]
$$

Altså er 

$$
\cos \dfrac{7\pi}{6} = -\dfrac{\sqrt{3}}{2} \qog \sin \dfrac{7\pi}{6} = -\dfrac{1}{2}
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
let: u = 5*pi/4
line-segment: (0, 0), (cos(u), sin(u)), red
point: (cos(u), sin(u))
text: cos(u), sin(u), "$P$", bottom-left
angle-arc: (0, 0), 0.3, 0, u*180/pi, red, arrow
text: 0.5 * cos(u/2), 0.5 * sin(u/2), "$5\pi/4$", center-center
text: 0.5 * cos(u), 0.5 * sin(u), "$1$", bottom-right
lw: 3
xlabel: $\cos \varphi$
ylabel: $\sin \varphi$
:::


Punktet $P$ ligger på enhetssirkelen. Linjestykket $OP$ danner vinkelen $\varphi = \dfrac{5\pi}{4}$ med førsteaksen.

Finn $\cos \dfrac{5\pi}{4}$ og $\sin \dfrac{5\pi}{4}$.


:::::{answer}

$$
\cos \dfrac{5\pi}{4} = -\dfrac{\sqrt{2}}{2} \qog \sin \dfrac{5\pi}{4} = -\dfrac{\sqrt{2}}{2}
$$

::::{solution}
Posisjonsvektoren til $P$ er gitt ved 

$$
\lvec{OP} = \left[\cos \left(\dfrac{5\pi}{4}\right), \sin \left(\dfrac{5\pi}{4}\right)\right]
$$

Siden punktet ligger i 3. kvadrant, kan vi rotere vektoren med 180 grader med klokka for å få et punkt $Q$ i 1. kvadrant. Dette punktet får koordinatene:

$$
\begin{align*}
\lvec{OQ} &= \lvec{OP}_{-\pi} = \left[\cos \left(\dfrac{5\pi}{4} - \pi\right), \sin \left(\dfrac{5\pi}{4} - \pi\right)\right] \\
\\
&= \left[\cos \left(\dfrac{\pi}{4}\right), \sin \left(\dfrac{\pi}{4}\right)\right] \\
\\
&= \left[\dfrac{\sqrt{2}}{2}, \dfrac{\sqrt{2}}{2}\right]
\end{align*}
$$

Så roterer vi denne vektoren tilbake med 180 grader mot klokka for å komme tilbake til punktet $P$. Dette svarer til å gange vektoren med $-1$:

$$
\lvec{OP} = \lvec{OQ}_{+\pi} = (-1) \cdot \lvec{OQ} = \left[-\dfrac{\sqrt{2}}{2}, -\dfrac{\sqrt{2}}{2}\right]
$$

Altså er 

$$
\cos \dfrac{5\pi}{4} = -\dfrac{\sqrt{2}}{2} \qog \sin \dfrac{5\pi}{4} = -\dfrac{\sqrt{2}}{2}
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
let: u = 4*pi/3
line-segment: (0, 0), (cos(u), sin(u)), red
point: (cos(u), sin(u))
text: cos(u), sin(u), "$P$", bottom-left
angle-arc: (0, 0), 0.3, 0, u*180/pi, red, arrow
text: 0.5 * cos(u/2), 0.5 * sin(u/2), "$4\pi/3$", center-center
text: 0.5 * cos(u), 0.5 * sin(u), "$1$", bottom-right
lw: 3
xlabel: $\cos \varphi$
ylabel: $\sin \varphi$
:::


Punktet $P$ ligger på enhetssirkelen. Linjestykket $OP$ danner vinkelen $\varphi = \dfrac{4\pi}{3}$ med førsteaksen.

Finn $\cos \dfrac{4\pi}{3}$ og $\sin \dfrac{4\pi}{3}$.



:::::{answer}
$$
\cos \dfrac{4\pi}{3} = -\dfrac{1}{2} \qog \sin \dfrac{4\pi}{3} = -\dfrac{\sqrt{3}}{2}
$$

::::{solution}
Posisjonsvektoren til punktet $P$ er gitt ved 

$$
\lvec{OP} = \left[\cos \left(\dfrac{4\pi}{3}\right), \sin \left(\dfrac{4\pi}{3}\right)\right]
$$

Siden punktet ligger i 3. kvadrant, kan vi rotere vektoren med 180 grader med klokka for å få et punkt $Q$ i 1. kvadrant. Dette punktet får koordinatene:

$$
\begin{align*}
\lvec{OQ} &= \lvec{OP}_{-\pi} = \left[\cos \left(\dfrac{4\pi}{3} - \pi\right), \sin \left(\dfrac{4\pi}{3} - \pi\right)\right] \\
\\
&= \left[\cos \left(\dfrac{\pi}{3}\right), \sin \left(\dfrac{\pi}{3}\right)\right] \\
\\
&= \left[\dfrac{1}{2}, \dfrac{\sqrt{3}}{2}\right]
\end{align*}
$$

Så roterer vi denne vektoren tilbake med 180 grader mot klokka for å komme tilbake til punktet $P$. Dette svarer til å gange vektoren med $-1$:

$$
\lvec{OP} = \lvec{OQ}_{+\pi} = (-1) \cdot \lvec{OQ} = \left[-\dfrac{1}{2}, -\dfrac{\sqrt{3}}{2}\right]
$$

Altså er 

$$
\cos \dfrac{4\pi}{3} = -\dfrac{1}{2} \qog \sin \dfrac{4\pi}{3} = -\dfrac{\sqrt{3}}{2}
$$
::::
:::::


:::::::::::::


:::::::::::::{part} d
:::{plot}
width: 100%
axis: equal
ticks: off
align: right
fontsize: 28
circle: (0, 0), 1
let: u = -2*pi/3
line-segment: (0, 0), (cos(u), sin(u)), red
point: (cos(u), sin(u))
text: cos(u), sin(u), "$P$", bottom-left
angle-arc: (0, 0), 0.3, 0, u*180/pi, red, arrow
text: 0.55 * cos(u/2), 0.5 * sin(u/2), "$-2\pi/3$", center-center
text: 0.5 * cos(u), 0.5 * sin(u), "$1$", top-left
lw: 3
xlabel: $\cos \varphi$
ylabel: $\sin \varphi$
:::


Punktet $P$ ligger på enhetssirkelen. Linjestykket $OP$ danner vinkelen $\varphi = -\dfrac{2\pi}{3}$ med førsteaksen.

Finn $\cos \left(-\dfrac{2\pi}{3}\right)$ og $\sin \left(-\dfrac{2\pi}{3}\right)$.


:::::{answer}

$$
\cos \left(-\dfrac{2\pi}{3}\right) = -\dfrac{1}{2} \qog \sin \left(-\dfrac{2\pi}{3}\right) = -\dfrac{\sqrt{3}}{2}
$$

::::{solution}
Posisjonsvektoren til $P$ er gitt ved 

$$
\lvec{OP} = \left[\cos \left(-\dfrac{2\pi}{3}\right), \sin \left(-\dfrac{2\pi}{3}\right)\right]
$$

Punktet ligger i 3. kvadrant, men siden vinkelen er negativ, roterer vi vektoren med 180 grader mot klokka for å få et punkt $Q$ i 1. kvadrant. Dette punktet får koordinatene:

$$
\begin{align*}
\lvec{OQ} &= \lvec{OP}_{+\pi} = \left[\cos \left(-\dfrac{2\pi}{3} + \pi\right), \sin \left(-\dfrac{2\pi}{3} + \pi\right)\right] \\
\\
&= \left[\cos \left(\dfrac{\pi}{3}\right), \sin \left(\dfrac{\pi}{3}\right)\right] \\
\\
&= \left[\dfrac{1}{2}, \dfrac{\sqrt{3}}{2}\right]
\end{align*}
$$

Så roterer vi vektoren tilbake med 180 grader med klokka for å komme tilbake til punktet $P$. Dette svarer til å gange vektoren med $-1$:

$$
\lvec{OP} = \lvec{OQ}_{-\pi} = (-1) \cdot \lvec{OQ} = \left[-\dfrac{1}{2}, -\dfrac{\sqrt{3}}{2}\right]
$$

Altså er 

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
width: 100%
align: right
fontsize: 28
axis: equal
ticks: off
xlabel: $\cos \varphi$
ylabel: $\sin \varphi$
circle: (0, 0), 1
let: u = pi/3 + 4*pi
line-segment: (0, 0), (cos(u), sin(u)), blue
point: (cos(u), sin(u))
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
line-segment: (0, 0), (cos(u), sin(u)), blue
point: (cos(u), sin(u))
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
width: 100%
align: right
fontsize: 28
axis: equal
ticks: off
xlabel: $\cos \varphi$
ylabel: $\sin \varphi$
circle: (0, 0), 1
let: u = pi / 6 - 6*pi
line-segment: (0, 0), (cos(u), sin(u)), blue
point: (cos(u), sin(u))
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
line-segment: (0, 0), (cos(u), sin(u)), blue
point: (cos(u), sin(u))
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
Trekker vi fra $-4\pi$ får vi en positiv vinkel som ligger i 4. kvadrant:

$$
\varphi = -\dfrac{8\pi}{3} + 4\pi = \dfrac{4\pi}{3}
$$

Denne vinkelen ligger i 3. kvadrant, så vi kan rotere vektoren med 180 grader med klokka for å få et punkt $Q$ i 1. kvadrant. Dette punktet får koordinatene:

Vi har at

$$
\cos\left(\dfrac{4\pi}{3}\right) = -\cos \dfrac{\pi}{3} = -\dfrac{1}{2} \qog \sin\left(\dfrac{4\pi}{3}\right) = -\sin \dfrac{\pi}{3} = -\dfrac{\sqrt{3}}{2}
$$

Dermed er 

$$
\cos \left(-\dfrac{8\pi}{3}\right) = -\dfrac{1}{2} \qog \sin \left(-\dfrac{8\pi}{3}\right) = -\dfrac{\sqrt{3}}{2}
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
line-segment: (0, 0), (cos(u), sin(u)), blue
point: (cos(u), sin(u))
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
For en vinkel $\varphi$ i 1. kvadrant er $\cos \varphi = \dfrac{\sqrt{3}}{2}$.


:::::::::::::{part} a
Finn $\sin \varphi$.


:::::{answer}
$$
\sin \varphi = \dfrac{1}{2}
$$

::::{solution}
Vi bruker Pytagoras' identitet:

$$
\cos^2 \varphi + \sin^2 \varphi = 1
$$


$$
\sin^2 \varphi = 1 - \cos^2 \varphi = 1 - \left(\dfrac{\sqrt{3}}{2}\right)^2 = 1 - \dfrac{3}{4} = \dfrac{1}{4}
$$


Siden vinkelen $\varphi$ ligger i 1. kvadrant, må $\sin \varphi$ være positiv:

$$
\sin \varphi = \sqrt{\dfrac{1}{4}} = \dfrac{1}{2}
$$

::::

:::::

:::::::::::::



:::::::::::::{part} b

Finn $\cos (\varphi + \pi)$ og $\sin (\varphi + \pi)$.



:::::{answer}

$$
\cos(\varphi + \pi) = -\dfrac{\sqrt{3}}{2} \qog \sin(\varphi + \pi) = -\dfrac{1}{2}
$$

::::{solution}
:::{plot}
xlabel: $\cos \varphi$
ylabel: $\sin \varphi$
fontsize: 28
align: right
width: 100%
circle: (0, 0), 1
let: u = pi/6
let: v = pi/6 + pi
line-segment: (0, 0), (cos(u), sin(u)), blue
text: cos(u), sin(u), "$P$", top-right
point: (cos(u), sin(u))
line-segment: (0, 0), (cos(v), sin(v)), red
point: (cos(v), sin(v))
text: 1.05 * cos(v), 1.05 * sin(v), "$P'$", bottom-left
angle-arc: (0, 0), 0.4, 0, u*180/pi, blue, arrow
angle-arc: (0, 0), 0.3, 0, v*180/pi, red, arrow
text: 0.5 * cos(u/2), 0.5 * sin(u/2), "$\varphi$", center-center
text: 0.4 * cos(v/2), 0.4 * sin(v/2), "$\varphi + \pi$", center-center
axis: equal
ticks: off
:::

Posisjonsvektoren til punktet $P$ er gitt ved

$$
\lvec{OP} = \left[\cos \varphi, \sin \varphi\right] = \left[\dfrac{\sqrt{3}}{2}, \dfrac{1}{2}\right]
$$

Roterer vi vektoren med $180\degree$ i positiv omløpsretning, havner vi på motsatt side av sirkelen. Dette svarer til å gange vektoren med $-1$:

$$
\begin{align*}
\lvec{OP'} &= \left[\cos(\varphi + \pi), \sin(\varphi + \pi)\right] \\
\\
&= \lvec{OP}_{+\pi} \\
\\
&= (-1) \cdot \lvec{OP} \\
\\
&= \left[-\dfrac{\sqrt{3}}{2}, -\dfrac{1}{2}\right]
\end{align*}
$$

Altså er

$$
\cos(\varphi + \pi) = -\dfrac{\sqrt{3}}{2} \qog \sin(\varphi + \pi) = -\dfrac{1}{2}
$$


::::
:::::



:::::::::::::



:::::::::::::{part} c
Finn $\cos \left(\varphi - \pi\right)$ og $\sin \left(\varphi - \pi\right)$.



:::::{answer}

$$
\cos \left(\varphi - \pi\right) = -\dfrac{\sqrt{3}}{2} \qog \sin \left(\varphi - \pi\right) = -\dfrac{1}{2}
$$


::::{solution}
Som i oppgave **b**, så er dette her en rotasjon på $180$ grader, bare denne gangen går det i negativ omløpsretning. Koordinatene blir de samme så

$$
\cos \left(\varphi - \pi\right) = -\dfrac{\sqrt{3}}{2} \qog \sin \left(\varphi - \pi\right) = -\dfrac{1}{2}
$$
::::
:::::



:::::::::::::


:::::::::::::{part} d
Finn $\cos \left(\varphi - \dfrac{\pi}{2}\right)$ og $\sin \left(\varphi - \dfrac{\pi}{2}\right)$.



:::::{answer}

$$
\cos \left(\varphi - \dfrac{\pi}{2}\right) = \dfrac{1}{2} \qog \sin \left(\varphi - \dfrac{\pi}{2}\right) = -\dfrac{\sqrt{3}}{2}
$$


::::{solution}
Først tenker vi oss at punktet $P$ har posisjonsvektoren

$$
\lvec{OP} = \left[\cos \varphi, \sin \varphi\right] = \left[\dfrac{\sqrt{3}}{2}, \dfrac{1}{2}\right]
$$

Så roterer vi vektoren med $-\pi/2$ radianer, som svarer til å bytte om $x$- og $y$-koordinatene, men $y$-koordinaten får motsatt fortegn. Altså får vi

$$
\lvec{OP}_{-\pi/2} = \left[\cos \left(\varphi - \dfrac{\pi}{2}\right), \sin \left(\varphi - \dfrac{\pi}{2}\right)\right] = \left[\dfrac{1}{2}, -\dfrac{\sqrt{3}}{2}\right]
$$


Altså er 

$$
\cos \left(\varphi - \dfrac{\pi}{2}\right) = \dfrac{1}{2} \qog \sin \left(\varphi - \dfrac{\pi}{2}\right) = -\dfrac{\sqrt{3}}{2}
$$
::::
:::::




:::::::::::::


:::::::::::::{part} e
Finn $\cos \left(\varphi + \dfrac{\pi}{2}\right)$ og $\sin \left(\varphi + \dfrac{\pi}{2}\right)$.


:::::{answer}
$$
\cos \left(\varphi + \dfrac{\pi}{2}\right) = -\dfrac{1}{2} \qog \sin \left(\varphi + \dfrac{\pi}{2}\right) = \dfrac{\sqrt{3}}{2}
$$

::::{solution}
Vi tenker oss et punkt $P$ med posisjonsvektoren

$$
\lvec{OP} = \left[\cos \varphi, \sin \varphi\right] = \left[\dfrac{\sqrt{3}}{2}, \dfrac{1}{2}\right]
$$

Så roterer vi vektoren med $+\pi/2$ radianer, som svarer til å bytte om $x$- og $y$-koordinatene, men den nye $x$-koordinaten får motsatt fortegn. Altså får vi

$$
\lvec{OP}_{+\pi/2} = \left[\cos \left(\varphi + \dfrac{\pi}{2}\right), \sin \left(\varphi + \dfrac{\pi}{2}\right)\right] = \left[-\dfrac{1}{2}, \dfrac{\sqrt{3}}{2}\right]
$$

Altså er 

$$
\cos \left(\varphi + \dfrac{\pi}{2}\right) = -\dfrac{1}{2} \qog \sin \left(\varphi + \dfrac{\pi}{2}\right) = \dfrac{\sqrt{3}}{2}
$$



::::
:::::



:::::::::::::



:::::::::::::{part} f
Finn $\cos \left(\dfrac{\pi}{2} - \varphi\right)$ og $\sin \left(\dfrac{\pi}{2} - \varphi\right)$.



::::{hint} Hint
Tenk deg at du roterer en posisjonsvektor $\lvec{OP} = [\cos(-\varphi), \sin(-\varphi)]$ med $\pi/2$ radianer i positiv omløpsretning.
::::



:::::{answer}
$$
\cos \left(\dfrac{\pi}{2} - \varphi\right) = \dfrac{1}{2} \qog \sin \left(\dfrac{\pi}{2} - \varphi\right) = \dfrac{\sqrt{3}}{2}
$$


::::{solution}
Vi tenker oss først at vi ser på posisjonsvektoren til et punkt $P$ som er rotert $-\varphi$ radianer:

$$
\lvec{OP} = [\cos(-\varphi), \sin(-\varphi)] = [\cos \varphi, -\sin \varphi] = \left[\dfrac{\sqrt{3}}{2}, -\dfrac{1}{2}\right]
$$

Så roterer vi denne $+\pi/2$ radianer som svarer til å bytte om rekkefølgen på koordinatene og endre fortegn på den nye $x$-koordinaten:

$$
\begin{align*}
\lvec{OP}_{+\pi/2} &= \left[\cos(\dfrac{\pi}{2} - \varphi), \sin(\dfrac{\pi}{2} - \varphi)\right] \\
\\
&= \left[\dfrac{1}{2}, \dfrac{\sqrt{3}}{2}\right]
\end{align*}
$$

Altså er 

$$
\cos \left(\dfrac{\pi}{2} - \varphi\right) = \dfrac{1}{2} \qog \sin \left(\dfrac{\pi}{2} - \varphi\right) = \dfrac{\sqrt{3}}{2}
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
Vi tenker oss et punkt $P$ på enhetssirkelen med posisjonsvektoren

$$
\lvec{OP} = \left[\cos \varphi, \sin \varphi\right] = \left[-\dfrac{3}{5}, \dfrac{4}{5}\right]
$$

Så roterer vi denne vektoren med $+\pi$ radianer som svarer til å gange vektoren med $-1$:

$$
\lvec{OP}_{+\pi} = \left[\cos(\varphi + \pi), \sin(\varphi + \pi)\right] = -1 \cdot \lvec{OP} = \left[\dfrac{3}{5}, -\dfrac{4}{5}\right]
$$

Altså er 

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
Vi ser for oss et punkt $P$ på enhetssirkelen med posisjonsvektoren

$$
\lvec{OP} = \left[\cos \varphi, \sin \varphi\right] = \left[-\dfrac{3}{5}, \dfrac{4}{5}\right]
$$

Så roterer vi vektoren med $-\pi/2$ radianer som svarer til å bytte om rekkefølgen på koordinatene og endre fortegn på den nye $y$-koordinaten:

$$
\lvec{OP}_{-\pi/2} = \left[\cos(\varphi - \dfrac{\pi}{2}), \sin(\varphi - \dfrac{\pi}{2})\right] = \left[\dfrac{4}{5}, \dfrac{3}{5}\right]
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
Vi tenker oss et punkt $P$ på enhetssirkelen med posisjonsvektoren

$$
\lvec{OP} = \left[\cos \varphi, \sin \varphi\right] = \left[-\dfrac{3}{5}, \dfrac{4}{5}\right]
$$

Så roterer vi vektoren med $+\pi/2$ radianer som svarer til å bytte om rekkefølgen på koordinatene og endre fortegn på den nye $x$-koordinaten:

$$
\lvec{OP}_{+\pi/2} = \left[\cos(\varphi + \dfrac{\pi}{2}), \sin(\varphi + \dfrac{\pi}{2})\right] = \left[-\dfrac{4}{5}, -\dfrac{3}{5}\right]
$$

Altså er 

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
Vi ser for oss at vi først finner posisjonsvektoren til et punkt $P$ gitt ved

$$
\lvec{OP} = \left[\cos (-\varphi), \sin (-\varphi)\right] = \left[\cos \varphi, -\sin \varphi\right] = \left[-\dfrac{3}{5}, -\dfrac{4}{5}\right]
$$

Deretter roterer vi vektoren med $+\pi$ radianer som svarer til å gange vektoren med $-1$:

$$
\lvec{OP}_{+\pi} = \left[\cos(\pi - \varphi), \sin(\pi - \varphi)\right] = -1 \cdot \lvec{OP} = \left[\dfrac{3}{5}, \dfrac{4}{5}\right]
$$

Altså er 

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

Siden vinkelen ligger i 1.kvadrant er $\sin \varphi$ positiv og $\cos \varphi$ positiv. Vi kan derfor skrive om $\cos \varphi$ som

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
Vi starter med et punkt $P$ på enhetssirkelen gitt ved 

$$
\lvec{OP} = \left[\cos \varphi, \sin \varphi\right] = \left[-\dfrac{4}{5}, -\dfrac{3}{5}\right]
$$

Vinkelen $\varphi + 3\pi$ vil svare til én full rotasjon med $2\pi$ og deretter en halv rotasjon med $\pi$ radianer. Ergo vil vi ende opp på motsatt side av sirkelen. Altså får vi

$$
\lvec{OP}_{+3\pi} = \left[\cos(\varphi + 3\pi), \sin(\varphi + 3\pi)\right] = -1 \cdot \lvec{OP} = \left[\dfrac{4}{5}, \dfrac{3}{5}\right]
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
Vi starter i et punkt $P$ med posisjonsvektoren

$$
\lvec{OP} = \left[\cos \varphi, \sin \varphi\right] = \left[-\dfrac{4}{5}, -\dfrac{3}{5}\right]
$$

Deretter skal vi rotere vektoren $3\pi/2$ radianer som vi kan dele opp i å først rotere $\pi$ radianer og deretter $\pi/2$ radianer. Etter å ha rotert $\pi$ radianer, vil vi ende opp på motsatt side av sirkelen:

$$
\lvec{OP}_{+\pi} = \left[\cos(\varphi + \pi), \sin(\varphi + \pi)\right] = -1 \cdot \lvec{OP} = \left[\dfrac{4}{5}, \dfrac{3}{5}\right]
$$

Deretter skal vi rotere $\pi/2$ radianer som svarer til å bytte om rekkefølgen på koordinatene og endre fortegn på den nye $x$-koordinaten:

$$
\lvec{OP}_{+\pi + \pi/2} = \left[\cos(\varphi + 3\pi/2), \sin(\varphi + 3\pi/2)\right] = \left[-\dfrac{3}{5}, \dfrac{4}{5}\right]
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
Avgjør om påstandene nedenfor er sanne eller usanne. 

Begrunn svaret ditt! 



:::::::::::::{part} a
**Påstand:**

Hvis $\varphi$ ligger i 1. kvadrant, så ligger også $2\varphi$ i 1. kvadrant.



:::::{answer}
Usann.


::::{solution}
Siden $\varphi$ ligger i 1. kvadrant, vil $\varphi \in \left\langle 0, \dfrac{\pi}{2} \right\rangle$. Da vil $2\varphi$ doble alle verdiene i intervallet som gir oss at 

$$
2\varphi \in \left\langle 0, \pi \right\rangle
$$

Det må bety at for noen vinkler $\varphi$ i 1. kvadrant, så vil $2\varphi$ ligge i 2. kvadrant. 

Dermed er påstanden usann.
::::
:::::

:::::::::::::


:::::::::::::{part} b
**Påstand:**

Hvis $\varphi$ ligger i 2. kvadrant, så ligger $2\varphi$ enten i 3. kvadrant eller 4. kvadrant


:::::{answer}
Sann.


::::{solution}
Siden $\varphi$ ligger i 2. kvadrant, er 

$$
\varphi \in \left \langle \dfrac{\pi}{2}, \pi\right \rangle
$$

Det betyr at 

$$
2\varphi \in \langle \pi,  2\pi \rangle
$$

Altså ligger $2\varphi$ i 3. eller 4. kvadrant. 

Dermed er påstanden sann.
::::
:::::


:::::::::::::



:::::::::::::{part} c

**Påstand:**

Hvis $\cos \varphi$ er positiv, så kan $\cos (2\varphi)$ være positiv eller negativ.



:::::{answer}
Sann.

::::{solution}
Siden $\cos \varphi$ er positiv, følger det at $\varphi$ ligger i 4. eller 1. kvadrant. Da er

$$
\varphi \in \left \langle -\dfrac{\pi}{2}, \dfrac{\pi}{2} \right \rangle
$$

Det betyr at 

$$
2 \varphi \in \left \langle -\pi, \pi \right \rangle
$$

Her kan $\cos (2\varphi)$ være både positiv og negativ siden mengden inneholder alle kvadrantene.
::::
:::::


:::::::::::::



:::::::::::::{part} d

**Påstand:**


Hvis $\sin \varphi$ er negativ, så er også $\sin (2\varphi)$ negativ.


:::::{answer}
Usann.

::::{solution}
Hvis $\sin \varphi$ er negativ, så ligger $\varphi$ i 3. eller 4. kvadrant.

Altså er 

$$
\varphi \in \left\langle \pi, 2\pi \right\rangle
$$

Det betyr at 

$$
2\varphi \in \left\langle 2\pi, 4\pi \right\rangle = \left\langle 0, 2\pi \right\rangle
$$

som forteller oss at $2\varphi$ kan ligge i alle kvadranter. Dermed kan $\sin (2\varphi)$ være både positiv og negativ, helt avhengig av hva $\varphi$ er.

Altså er påstanden usann.
::::
:::::

:::::::::::::









:::::::::::::::




---




:::::::::::::::{exercise} Oppgave 11

:::::::::::::{part} a

:::{plot}
axis: equal
ticks: off
width: 100%
align: right
xlabel: $\cos \varphi$
ylabel: $\sin \varphi$
fontsize: 28
circle: (0, 0), 1
vector: (0, 0), (1, 0), blue
let: u = pi/3
vector: (0, 0), (cos(u), sin(u)), red
text: cos(u), sin(u), "$Q$", top-right
text: 1, 0, "$P$", top-right
angle-arc: (0, 0), 0.4, 0, u*180/pi, red, arrow
text: 0.5 * cos(u/2), 0.5 * sin(u/2), "$\varphi$", center-center
point: (cos(u), sin(u))
point: (1, 0)
:::



Vektoren $\lvec{OP} = [1, 0]$ er vist i figuren til høyre.

Vi får et punkt $Q$ ved å rotere $\lvec{OP}$ med $\varphi$ radiener i positiv omløpsretning.

Bestem koordinatene til punktet $Q$ uttrykt med $\cos \varphi$ og $\sin \varphi$.



:::::{answer}
$$
\lvec{OQ} = [\cos \varphi, \sin \varphi]
$$
:::::


:::::::::::::



:::::::::::::{part} b
:::{plot}
axis: equal
ticks: off
width: 100%
align: right
xlabel: $\cos \varphi$
ylabel: $\sin \varphi$
fontsize: 28
circle: (0, 0), 1
vector: (0, 0), (0, 1), blue
let: u = pi/2 + pi/3
vector: (0, 0), (cos(u), sin(u)), red
text: cos(u), sin(u), "$T$", top-left
text: 0, 1, "$R$", top-right
angle-arc: (0, 0), 0.4, 90, u*180/pi, red, arrow
text: 0.5 * cos((90 * pi/180 + u)/2), 0.5 * sin((90 * pi/180 + u)/2), "$\varphi$", center-center
point: (cos(u), sin(u))
point: (0, 1)
:::



Vektoren $\lvec{OR} = [0, 1]$ er vist i figuren til høyre.

Vi får et punkt $T$ ved å rotere $\lvec{OR}$ med $\varphi$ radianer i positiv omløpsretning.

Bestem koordinatene til punktet $T$ uttrykt med $\cos \varphi$ og $\sin \varphi$.



:::::{answer}
$$
\lvec{OT} = [-\sin \varphi, \cos \varphi]
$$
:::::


:::::::::::::


:::::::::::::{part} c
Forklar at 

$$
\lvec{OP} = [\cos \varphi, \sin \varphi] = \cos \varphi \cdot [1, 0] + \sin \varphi \cdot [0, 1]
$$
:::::::::::::



:::::::::::::{part} d
Om en vinkel $\varphi$ får du vite at

* $\cos \varphi = -\dfrac{3}{5}$
* $\sin \varphi = \dfrac{4}{5}$

Finn de eksakte verdiene til

$$
\cos \left(\varphi + \dfrac{\pi}{4}\right) \qog \sin \left(\varphi + \dfrac{\pi}{4}\right)
$$

:::::::::::::





:::::::::::::::




:::::::::::::::{exercise} Oppgave 12
Bruk ideen fra oppgave 11 til å vise at 

$$
\cos(\varphi + \theta) = \cos \varphi \cdot \cos \theta - \sin \varphi \cdot \sin \theta
$$

og 

$$
\sin (\varphi + \theta) = \sin \varphi \cdot \cos \theta + \cos \varphi \cdot \sin \theta
$$
:::::::::::::::
