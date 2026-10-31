# Likninger: Oppgaver



:::::::::::::::{exercise} Oppgave 1
:::::::::::::{part} a
Finn de generelle løsningene til likningen

$$
\sin x = \dfrac{1}{2}
$$


:::::{answer}

$$
x = \dfrac{\pi}{6} + 2\pi \cdot k \or x = \dfrac{5\pi}{6} + 2\pi \cdot k
$$

for alle heltall $k \in \integer$.

::::{solution}
:::{plot}
width: 350px
align: right
axis: equal
ticks: off
xlabel: $\cos x$
ylabel: $\sin x$
circle: (0, 0), 1, black
let: phi = pi/6
let: theta = pi - phi
line-segment: (cos(theta), sin(theta)), (cos(phi), sin(phi)), dashed, red
point: (cos(phi), sin(phi))
point: (cos(theta), sin(theta))
line-segment: (0, 0), (cos(phi), sin(phi)), solid, blue
line-segment: (0, 0), (cos(theta), sin(theta)), solid, blue
angle-arc: (0, 0), 0.4, 0, phi * 180 / pi, red, arrow
angle-arc: (0, 0), 0.3, 0, theta * 180 / pi, red, arrow
text: 0.5 * cos(phi/2), 0.5 * sin(phi/2), "$x_1$", center-center
text: 0.4 * cos(theta/2), 0.4 * sin(theta/2), "$x_2$", center-center
fontsize: 24
:::

Én løsning i 1. kvadrant til likningen $\sin x = \dfrac{1}{2}$ er

$$
x = \dfrac{\pi}{6}
$$

En annen løsning finner vi ved å speile punktet på enhetssirkelen om $y$-aksen:

$$
x = \pi - \dfrac{\pi}{6} = \dfrac{5\pi}{6}
$$

Vi kan legge til eller trekke fra $2\pi$ så mange ganger vi vil og fortsatt ende opp på samme punkter på enhetssirkelen. Dermed er de generelle løsningene til likningen

$$
x = \dfrac{\pi}{6} + 2\pi \cdot k \or x = \dfrac{5\pi}{6} + 2\pi \cdot k
$$

for alle heltall $k \in \integer$.
::::::::


::::
:::::



:::::::::::::



:::::::::::::{part} b
Finn de generelle løsningene til likningen

$$
\cos x = \dfrac{\sqrt{3}}{2}
$$



:::::{answer}

$$
x = \dfrac{\pi}{6} + 2\pi \cdot k \or x = -\dfrac{\pi}{6} + 2\pi \cdot k
$$

for alle heltall $k \in \integer$.

::::{solution}
:::{plot}
width: 350px
axis: equal
ticks: off
align: right
fontsize: 28
xlabel: $\cos x$
ylabel: $\sin x$
circle: (0, 0), 1
let: u = pi/6
let: v = -u
line-segment: (0, 0), (cos(u), sin(u)), blue
line-segment: (0, 0), (cos(v), sin(v)), blue
line-segment: (cos(u), sin(u)), (cos(u), 0), dashed, red
line-segment: (cos(v), sin(v)), (cos(v), 0), dashed
angle-arc: (0, 0), 0.4, 0, u * 180/pi, red, arrow
angle-arc: (0, 0), 0.3, 0, v * 180/pi, red, arrow
point: (cos(u), sin(u))
point: (cos(v), sin(v))
text: 0.55 * cos(u/2), 0.45 * sin(u/2), "$x_1$", center-center
text: 0.45 * cos(v/2), 0.45 * sin(v/2), "$x_2$", center-center
:::


I 1. kvadrant så er én løsning til likningen gitt ved 

$$
x = \dfrac{\pi}{6}
$$

Én annen løsning får vi ved å speile punktet på enhetssirkelen om $x$-aksen som gir 

$$
x = -\dfrac{\pi}{6}
$$

Vi kan legge til eller trekke fra $2\pi$ så mange ganger vi vil og fortsatt ende opp på samme punkter på enhetssirkelen. Dermed er de generelle løsningene til likningen

$$
x = \dfrac{\pi}{6} + 2\pi \cdot k \or x = -\dfrac{\pi}{6} + 2\pi \cdot k
$$

for alle heltall $k \in \integer$.

::::
:::::


:::::::::::::



:::::::::::::{part} c
Finn de generelle løsningene til likningen

$$
\sin x = -\dfrac{\sqrt{2}}{2}
$$


:::::{answer}

$$
x = \dfrac{5\pi}{4} + 2\pi \cdot k \or x = -\dfrac{\pi}{4} + 2\pi \cdot k \qfor k \in \integer
$$

::::{solution}
:::{plot}
width: 350px
align: right
axis: equal
ticks: off
xlabel: $\cos x$
ylabel: $\sin x$
circle: (0, 0), 1, black
let: phi = pi + pi / 4
let: theta = pi - phi
line-segment: (cos(theta), sin(theta)), (cos(phi), sin(phi)), dashed, red
point: (cos(phi), sin(phi))
point: (cos(theta), sin(theta))
line-segment: (0, 0), (cos(phi), sin(phi)), solid, blue
line-segment: (0, 0), (cos(theta), sin(theta)), solid, blue
angle-arc: (0, 0), 0.4, 0, phi * 180 / pi, red, arrow
angle-arc: (0, 0), 0.3, 0, theta * 180 / pi, red, arrow
text: 0.5 * cos(phi/2), 0.5 * sin(phi/2), "$x_1$", center-center
text: 0.4 * cos(theta/2), 0.4 * sin(theta/2), "$x_2$", center-center
fontsize: 24
:::

Én løsning til likning $\sin x = -\dfrac{\sqrt{2}}{2}$ som ligger i 3. kvadrant er:

$$
x = \dfrac{5\pi}{4}
$$


Én annen løsning som ligger i 4. kvadrant er

$$
x = \pi - \dfrac{5\pi}{4} = -\dfrac{\pi}{4}
$$


Vi kan legge til eller trekke fra $2\pi$ så mange ganger vi vil og fortsatt ende opp på samme punkter på enhetssirkelen. Dermed er de generelle løsningene til likningen

$$
x = \dfrac{5\pi}{4} + 2\pi \cdot k \or x = -\dfrac{\pi}{4} + 2\pi \cdot k \qfor k \in \integer
$$

for alle heltall $k \in \integer$.



::::



:::::


:::::::::::::



:::::::::::::{part} d
Finn de generelle løsningene til likningen

$$
\cos x = -\dfrac{\sqrt{3}}{2}
$$

:::::{answer}
$$
x = \dfrac{5\pi}{6} + 2\pi \cdot k \or x = -\dfrac{5\pi}{6} + 2\pi \cdot k \qfor k \in \integer
$$

::::{solution}
:::{plot}
width: 350px
axis: equal
ticks: off
align: right
fontsize: 28
xlabel: $\cos x$
ylabel: $\sin x$
circle: (0, 0), 1
let: u = pi - pi/6
let: v = -u
line-segment: (0, 0), (cos(u), sin(u)), blue
line-segment: (0, 0), (cos(v), sin(v)), blue
line-segment: (cos(u), sin(u)), (cos(u), 0), dashed, red
line-segment: (cos(v), sin(v)), (cos(v), 0), dashed
angle-arc: (0, 0), 0.3, 0, u * 180/pi, red, arrow
angle-arc: (0, 0), 0.25, 0, v * 180/pi, red, arrow
point: (cos(u), sin(u))
point: (cos(v), sin(v))
text: 0.55 * cos(u/2), 0.45 * sin(u/2), "$x_1$", center-center
text: 0.45 * cos(v/2), 0.45 * sin(v/2), "$x_2$", center-center
:::


Én løsning til likningen i 2. kvadrant er 

$$
x = \dfrac{5\pi}{6}
$$

Én annen løsning i 3. kvadrant er da

$$
x = -\dfrac{5\pi}{6}
$$

De generelle løsningene blir derfor

$$
x = \dfrac{5\pi}{6} + 2\pi \cdot k \or x = -\dfrac{5\pi}{6} + 2\pi \cdot k \qfor k \in \integer
$$


::::
:::::


:::::::::::::

:::::::::::::::



---



:::::::::::::::{exercise} Oppgave 2

:::::::::::::{part} a
Løs likningen

$$
2\sin x - \sqrt{3} = 0 \qfor x \in [0, 4\pi\rangle
$$



:::::{answer}

$$
x \in \left\{\dfrac{\pi}{3}, \dfrac{2\pi}{3}, \dfrac{7\pi}{3}, \dfrac{8\pi}{3}\right\}
$$

::::{solution}

:::{plot}
width: 350px
align: right
axis: equal
ticks: off
xlabel: $\cos x$
ylabel: $\sin x$
circle: (0, 0), 1, black
let: phi = pi/3
let: theta = pi - phi
line-segment: (cos(theta), sin(theta)), (cos(phi), sin(phi)), dashed, red
point: (cos(phi), sin(phi))
point: (cos(theta), sin(theta))
line-segment: (0, 0), (cos(phi), sin(phi)), solid, blue
line-segment: (0, 0), (cos(theta), sin(theta)), solid, blue
angle-arc: (0, 0), 0.4, 0, phi * 180 / pi, red, arrow
angle-arc: (0, 0), 0.3, 0, theta * 180 / pi, red, arrow
text: 0.5 * cos(phi/2), 0.5 * sin(phi/2), "$x_1$", center-center
text: 0.4 * cos(theta/2), 0.4 * sin(theta/2), "$x_2$", top-left
fontsize: 24
:::

Vi skriver om likningen til

$$
2 \sin x = \sqrt{3}
$$

$$
\sin x = \dfrac{\sqrt{3}}{2}
$$

Én løsning til likningen i 1. kvadrant er

$$
x = \dfrac{\pi}{3}
$$

Én annen løsning i 2. kvadrant er 

$$
x = \pi - \dfrac{\pi}{3} = \dfrac{2\pi}{3}
$$

De generelle løsningene er da 

$$
x = \dfrac{\pi}{3} + 2\pi \cdot k \or x = \dfrac{2\pi}{3} + 2\pi \cdot k \qfor k \in \integer
$$

Vi må finne de spesielle løsningene $x \in [0, 4\pi\rangle$. De to første løsningene vi fant ligger i 1. periode. For å finne de to neste som ligger i $[2\pi, 4\pi\rangle$, så legger vi bare på $2\pi$ til de to første løsningene:

$$
x = \dfrac{\pi}{3} + 2\pi = \dfrac{7\pi}{3} \or x = \dfrac{2\pi}{3} + 2\pi = \dfrac{8\pi}{3}
$$

Dermed er alle løsningene i intervallet $[0, 4\pi\rangle$:

$$
x \in \left\{\dfrac{\pi}{3}, \dfrac{2\pi}{3}, \dfrac{7\pi}{3}, \dfrac{8\pi}{3}\right\}
$$


::::
:::::


:::::::::::::



:::::::::::::{part} b
Løs likningen

$$
2\cos \left(\pi x\right) = \sqrt{3} \qfor x \in [-2, 2\rangle
$$


:::::{answer}

$$
x \in \left\{-\dfrac{11}{6}, -\dfrac{1}{6}, \dfrac{1}{6}, \dfrac{11}{6}\right\}
$$

::::{solution}
:::{plot}
width: 350px
axis: equal
ticks: off
align: right
fontsize: 28
xlabel: $\cos u$
ylabel: $\sin u$
circle: (0, 0), 1
let: u = pi/6
let: v = -u
line-segment: (0, 0), (cos(u), sin(u)), blue
line-segment: (0, 0), (cos(v), sin(v)), blue
line-segment: (cos(u), sin(u)), (cos(u), 0), dashed, red
line-segment: (cos(v), sin(v)), (cos(v), 0), dashed
angle-arc: (0, 0), 0.4, 0, u * 180/pi, red, arrow
angle-arc: (0, 0), 0.3, 0, v * 180/pi, red, arrow
point: (cos(u), sin(u))
point: (cos(v), sin(v))
text: 0.55 * cos(u/2), 0.45 * sin(u/2), "$u_1$", center-center
text: 0.45 * cos(v/2), 0.45 * sin(v/2), "$u_2$", center-center
:::


Vi gjør variabelskiftet $u = \pi x$ og skriver om likningen:

$$
2\cos u = \sqrt{3}
$$

$$
\cos u = \dfrac{\sqrt{3}}{2}
$$

En løsning i 1. kvadrant er 

$$
u = \dfrac{\pi}{6}
$$

En løsning i 4. kvadrant er 

$$
u = -\dfrac{\pi}{6}
$$

Da blir de generelle løsningene 

$$
u = \dfrac{\pi}{6} + 2\pi \cdot k \or u = -\dfrac{\pi}{6} + 2\pi \cdot k \qfor k \in \integer
$$

Så setter vi tilbake $u = \pi x$ og løser for $x$:

$$
\pi x = \dfrac{\pi}{6} + 2\pi \cdot k \or \pi x = -\dfrac{\pi}{6} + 2\pi \cdot k \qfor k \in \integer
$$

$$
x = \dfrac{1}{6} + 2 \cdot k \or x = -\dfrac{1}{6} + 2 \cdot k \qfor k \in \integer
$$


For den første løsningen får vi da de spesielle løsningene i intervallet $[-2, 2\rangle$ ved å sette inn ulike heltall $k$:

:::{table}
---
width: 60%
---
labels: $k$, $x = \dfrac{1}{6} + 2 \cdot k$
$-1$, $-\dfrac{11}{6}$
$0$, $\dfrac{1}{6}$
:::

og for den andre løsningen får vi

:::{table}
---
width: 60%
---
labels: $k$, $x = -\dfrac{1}{6} + 2 \cdot k$
$0$, $-\dfrac{1}{6}$
$1$, $\dfrac{11}{6}$
:::

Dermed er løsningene til likningen gitt ved 

$$
x \in \left\{-\dfrac{11}{6}, -\dfrac{1}{6}, \dfrac{1}{6}, \dfrac{11}{6}\right\}
$$




::::
:::::


:::::::::::::


:::::::::::::{part} c
Løs likningen

$$
\sin \left(2x - \dfrac{\pi}{2}\right) = \dfrac{1}{2} \qfor x \in [-\pi, \pi\rangle
$$


:::::{answer}

$$
x \in \left\{-\dfrac{2\pi}{3}, -\dfrac{\pi}{3}, \dfrac{\pi}{3}, \dfrac{2\pi}{3}\right\}
$$

::::{solution}

:::{plot}
width: 350px
align: right
axis: equal
ticks: off
xlabel: $\cos u$
ylabel: $\sin u$
circle: (0, 0), 1, black
let: phi = pi/6
let: theta = pi - phi
line-segment: (cos(theta), sin(theta)), (cos(phi), sin(phi)), dashed, red
point: (cos(phi), sin(phi))
point: (cos(theta), sin(theta))
line-segment: (0, 0), (cos(phi), sin(phi)), solid, blue
line-segment: (0, 0), (cos(theta), sin(theta)), solid, blue
angle-arc: (0, 0), 0.4, 0, phi * 180 / pi, red, arrow
angle-arc: (0, 0), 0.3, 0, theta * 180 / pi, red, arrow
text: 0.5 * cos(phi/2), 0.5 * sin(phi/2), "$u_1$", center-center
text: 0.4 * cos(theta/2), 0.4 * sin(theta/2), "$u_2$", center-center
fontsize: 24
:::


Vi setter $u = 2x - \dfrac{\pi}{2}$ slik at vi kan skrive opp likningen som

$$
\sin u = \dfrac{1}{2}
$$

En løsning i 1. kvadrant er 

$$
u = \dfrac{\pi}{6}
$$

En løsning i 2. kvadrant er 

$$
u = \pi - \dfrac{\pi}{6} = \dfrac{5\pi}{6}
$$

Dermed blir de generelle løsningene for $u$ gitt ved

$$
u = \dfrac{\pi}{6} + 2\pi \cdot k \or u = \dfrac{5\pi}{6} + 2\pi \cdot k \qfor k \in \integer
$$

Så setter vi tilbake $u = 2x - \dfrac{\pi}{2}$ og løser for $x$. Med den første likningen får vi

$$
2x - \dfrac{\pi}{2} = \dfrac{\pi}{6} + 2\pi \cdot k
$$

$$
2x = \dfrac{2\pi}{3} + 2\pi \cdot k
$$

$$
x = \dfrac{\pi}{3} + \pi \cdot k
$$

Med den andre likningen får vi

$$
2x - \dfrac{\pi}{2} = \dfrac{5\pi}{6} + 2\pi \cdot k
$$

$$
2x = \dfrac{4\pi}{3} + 2\pi \cdot k
$$

$$
x = \dfrac{2\pi}{3} + \pi \cdot k
$$

Så de generelle løsningene er 

$$
x = \dfrac{\pi}{3} + \pi \cdot k \or x = \dfrac{2\pi}{3} + \pi \cdot k \qfor k \in \integer
$$

Så finner vi de spesielle løsningene i intervallet $[-\pi, \pi\rangle$. Med den første løsningen får vi

:::{table}
---
width: 60%
---
labels: $k$, $x = \dfrac{\pi}{3} + \pi \cdot k$
$-1$, $\dfrac{\pi}{3} - \pi = -\dfrac{2\pi}{3}$
$0$, $\dfrac{\pi}{3}$
:::

Og for den andre løsningen får vi

:::{table}
---
width: 60%
---
labels: $k$, $x = \dfrac{2\pi}{3} + \pi \cdot k$
$-1$, $\dfrac{2\pi}{3} - \pi = -\dfrac{\pi}{3}$
$0$, $\dfrac{2\pi}{3}$
:::


Dermed er løsningen av likningen

$$
x \in \left\{-\dfrac{2\pi}{3}, -\dfrac{\pi}{3}, \dfrac{\pi}{3}, \dfrac{2\pi}{3}\right\}
$$

::::
:::::

:::::::::::::



:::::::::::::::


---



:::::::::::::::{exercise} Oppgave 3
:::::::::::::{part} a
Løs likningen

$$
\cos \left(x - \dfrac{\pi}{6}\right) = 0 \qfor x \in \left[-\dfrac{\pi}{2}, \pi\right]
$$



:::::{answer}

$$
x = \dfrac{2\pi}{3} \or x = -\dfrac{\pi}{3}
$$

::::{solution}

:::{plot}
width: 350px
axis: equal
ticks: off
align: right
fontsize: 28
xlabel: $\cos u$
ylabel: $\sin u$
circle: (0, 0), 1
let: u = pi/2
let: v = -u
line-segment: (0, 0), (cos(u), sin(u)), blue
line-segment: (0, 0), (cos(v), sin(v)), blue
angle-arc: (0, 0), 0.4, 0, u * 180/pi, red, arrow
angle-arc: (0, 0), 0.3, 0, v * 180/pi, red, arrow
point: (cos(u), sin(u))
point: (cos(v), sin(v))
text: 0.55 * cos(u/2), 0.45 * sin(u/2), "$u_1$", center-center
text: 0.45 * cos(v/2), 0.45 * sin(v/2), "$u_2$", center-center
:::


Vi setter $u = x - \dfrac{\pi}{6}$ slik at likningen blir

$$
\cos u = 0
$$

Da får vi at de generelle løsningene for $u$ er

$$
u = \dfrac{\pi}{2} + 2\pi \cdot k \or u = -\dfrac{\pi}{2} + 2\pi \cdot k
$$

Vi kan samle disse til én generell løsning som

$$
u = \dfrac{\pi}{2} + \pi \cdot k
$$

siden vi får den andre løsningen ved å rotere $\pi$ radianer fra den første løsningen. 


:::{plot}
width: 350px
axis: equal
ticks: off
align: right
fontsize: 28
xlabel: $\cos x$
ylabel: $\sin x$
circle: (0, 0), 1
let: u = 2*pi/3
line-segment: (0, 0), (cos(u), sin(u)), blue
angle-arc: (0, 0), 0.35, 0, u * 180/pi, red, arrow
point: (cos(u), sin(u))
text: 0.55 * cos(u/2), 0.45 * sin(u/2), "$x$", center-center
:::

Så setter vi tilbake $u = x - \dfrac{\pi}{6}$, og får

$$
x - \dfrac{\pi}{6} = \dfrac{\pi}{2} + \pi \cdot k
$$

$$
x = \dfrac{2\pi}{3} + \pi \cdot k
$$


De spesielle løsningene som ligger i intervallet $[-\dfrac{\pi}{2}, \pi]$ er

$$
x = \dfrac{2\pi}{3} \or x = -\dfrac{\pi}{3}
$$


::::
:::::


:::::::::::::




:::::::::::::{part} b
Løs likningen

$$
\sin\left(2x - \dfrac{\pi}{3}\right) = 0 \qfor x \in \left[-\pi, \dfrac{\pi}{2}\right]
$$


:::::{answer}

$$
x \in \left\{-\dfrac{5\pi}{6}, -\dfrac{\pi}{3}, \dfrac{\pi}{6}\right\}
$$

::::{solution}
:::{plot}
width: 350px
align: right
axis: equal
ticks: off
xlabel: $\cos u$
ylabel: $\sin u$
circle: (0, 0), 1, black
let: phi = 0
let: theta = pi - phi
line-segment: (cos(theta), sin(theta)), (cos(phi), sin(phi)), dashed, red
point: (cos(phi), sin(phi))
point: (cos(theta), sin(theta))
line-segment: (0, 0), (cos(phi), sin(phi)), solid, blue
line-segment: (0, 0), (cos(theta), sin(theta)), solid, blue
angle-arc: (0, 0), 0.4, 0, phi * 180 / pi, red, arrow
angle-arc: (0, 0), 0.3, 0, theta * 180 / pi, red, arrow
text: 0.5 * cos(phi/2), 0.5 * sin(phi/2), "$u_1$", bottom-center
text: 0.4 * cos(theta/2), 0.4 * sin(theta/2), "$u_2$", center-left
fontsize: 24
:::

Vi setter $u = 2x - \dfrac{\pi}{3}$ slik at likningen blir

$$
\sin u = 0
$$

Da får vi at 

$$
u = 0 + 2\pi \cdot k \or u = \pi + 2\pi \cdot k
$$

som vi kan samle til én generell løsning som

$$
u = \pi \cdot k
$$


:::{plot}
nocache:
width: 350px
align: right
axis: equal
ticks: off
xlabel: $\cos x$
ylabel: $\sin x$
circle: (0, 0), 1, black
let: phi = pi/6
point: (cos(phi), sin(phi))
line-segment: (0, 0), (cos(phi), sin(phi)), solid, blue
angle-arc: (0, 0), 0.4, 0, phi * 180 / pi, red, arrow
text: 0.5 * cos(phi/2), 0.5 * sin(phi/2), "$x = \frac{\pi}{6}$", center-right
fontsize: 24
line-segment: (0, 0), (cos(phi - pi/2), sin(phi - pi/2)), solid, blue
point: (cos(phi - pi/2), sin(phi - pi/2))
angle-arc: (0, 0), 0.35, phi * 180 / pi, (phi - pi/2) * 180 / pi, red, arrow
text: 0.5 * cos((phi - pi/2)/2), 0.5 * sin((phi - pi/2)/2), "$-\frac{\pi}{2}$", center-right
line-segment: (0, 0), (cos(phi - pi), sin(phi - pi)), solid, blue
point: (cos(phi - pi), sin(phi - pi))
angle-arc: (0, 0), 0.4, (phi - pi/2) * 180 / pi, (phi - pi) * 180 / pi, red, arrow
text: 0.5 * cos((phi - pi)/2), 0.5 * sin((phi - pi)/2), "$-\frac{\pi}{2}$", bottom-left
:::

Deretter setter vi tilbake $u = 2x - \dfrac{\pi}{3}$, og får

$$
2x - \dfrac{\pi}{3} = \pi \cdot k
$$

$$
2x = \dfrac{\pi}{3} + \pi \cdot k
$$

$$
x = \dfrac{\pi}{6} + \dfrac{\pi}{2} \cdot k
$$

For hver $k$, så roterer vi med $\dfrac{\pi}{2}$ på enhetssirkelen. Løsningene som ligger i intervallet $\left[-\pi, \dfrac{\pi}{2}\right]$ er da 

:::{table}
---
width: 60%
---
labels: $k$, $x = \dfrac{\pi}{6} + \dfrac{\pi}{2} \cdot k$
$0$, $\dfrac{\pi}{6}$
$-1$, $-\dfrac{\pi}{3}$
$-2$, $-\dfrac{5\pi}{6}$
:::


Altså er løsningene 

$$
x \in \left\{-\dfrac{5\pi}{6}, -\dfrac{\pi}{3}, \dfrac{\pi}{6}\right\}
$$



::::
:::::
:::::::::::::



:::::::::::::{part} c
Løs likningen

$$
\cos \left(4 x + \dfrac{\pi}{3}\right) = -1 \qfor x \in \left[-\pi, \pi\right\rangle
$$


:::::{answer}

$$
x \in \left\{-\dfrac{5\pi}{6}, -\dfrac{\pi}{3},\dfrac{\pi}{6}, \dfrac{2\pi}{3} \right\}
$$

::::{solution}

:::{plot}
width: 350px
align: right
axis: equal
ticks: off
xlabel: $\cos u$
ylabel: $\sin u$
circle: (0, 0), 1, black
let: phi = pi
point: (cos(phi), sin(phi))
line-segment: (0, 0), (cos(phi), sin(phi)), solid, blue
angle-arc: (0, 0), 0.3, 0, phi * 180 / pi, red, arrow
text: 0.35 * cos(phi/2), 0.35 * sin(phi/2), "$u$", top-right
fontsize: 24
:::

Vi setter $u = 4x + \dfrac{\pi}{3}$ slik at likningen blir

$$
\cos u = -1
$$

Denne har den generelle løsningen for $u$ gitt ved 

$$
u = \pi + 2\pi \cdot k
$$


:::{plot}
width: 350px
align: right
axis: equal
ticks: off
xlabel: $\cos x$
ylabel: $\sin x$
circle: (0, 0), 1, black
let: phi = pi/6
point: (cos(phi), sin(phi))
line-segment: (0, 0), (cos(phi), sin(phi)), solid, blue
angle-arc: (0, 0), 0.45, 0, phi * 180 / pi, red, arrow
text: 0.5 * cos(phi/2), 0.5 * sin(phi/2), "$x = \frac{\pi}{6}$", center-right
fontsize: 24
let: x1 = phi + pi/2
let: x2 = phi - pi/2
let: x3 = phi - pi
line-segment: (0, 0), (cos(x1), sin(x1)), solid, blue
line-segment: (0, 0), (cos(x2), sin(x2)), solid, blue
line-segment: (0, 0), (cos(x3), sin(x3)), solid, blue
point: (cos(x1), sin(x1))
point: (cos(x2), sin(x2))
point: (cos(x3), sin(x3))
angle-arc: (0, 0), 0.32, phi * 180/pi, x1 * 180/pi, red, arrow
angle-arc: (0, 0), 0.35, phi * 180/pi, x2 * 180/pi, red, arrow
angle-arc: (0, 0), 0.3, x2 * 180/pi, x3 * 180/pi, red, arrow
text: 0.4 * cos((phi + x1) / 2), 0.4 * sin((phi + x1) / 2), "$+\frac{\pi}{2}$", top-right
text: 0.4 * cos(x2/2), 0.4 * sin(x2/2), "$-\frac{\pi}{2}$", bottom-right
text: 0.4 * cos((x2 + x3)/2), 0.4 * sin((x2 + x3)/2), "$-\frac{\pi}{2}$", bottom-left
:::

Så setter vi tilbake $u = 4x + \dfrac{\pi}{3}$, og får

$$
4x + \dfrac{\pi}{3} = \pi + 2\pi \cdot k
$$

$$
4x = \dfrac{2\pi}{3} + 2\pi \cdot k
$$

$$
x = \dfrac{\pi}{6} + \dfrac{\pi}{2} \cdot k
$$

Løsningene i intervallet $[-\pi, \pi\rangle$ er da: 

:::{table}
---
width: 60%
---
labels: $k$, $x = \dfrac{\pi}{6} + \dfrac{\pi}{2} \cdot k$
$-2$, $-\dfrac{5\pi}{6}$
$-1$, $-\dfrac{\pi}{3}$
$0$, $\dfrac{\pi}{6}$
$1$, $\dfrac{2\pi}{3}$
:::

Altså er de spesielle løsningene til likningen

$$
x \in \left\{-\dfrac{5\pi}{6}, -\dfrac{\pi}{3},\dfrac{\pi}{6}, \dfrac{2\pi}{3} \right\}
$$

::::
:::::


:::::::::::::



:::::::::::::::




---


:::::::::::::::{exercise} Oppgave 4
Gitt likningen

$$
\tan x = \sqrt{3}
$$


:::::::::::::{part} a
Avgjør hvilke kvadranter løsningene av likningen ligger i.

:::::{answer}
$x$ ligger i 1. kvadrant og 3. kvadrant.

::::{solution}
Definisjonen av tangens er:

$$
\tan x = \dfrac{\sin x}{\cos x}
$$

Siden $\tan x > 0$, så vil $\sin x$ og $\cos x$ ha samme fortegn. Dette er tilfellet i 1. kvadrant og 3. kvadrant.
::::


:::::


:::::::::::::



:::::::::::::{part} b
Bestem de mulige verdiene til $\sin x$ og $\cos x$.


:::::{answer}
$$
\sin x = \pm \dfrac{\sqrt{3}}{2} \and \cos x = \pm \dfrac{1}{2}
$$


::::{solution}
Vi har at 

$$
\tan x = \sqrt{3} \liff \dfrac{\sin x}{\cos x} = \sqrt{3}
$$

som gir 

$$
\sin x = \sqrt{3} \cos x
$$

Vi kvadrerer hver side av likningen som gir

$$
\sin^2 x = 3\cos^2 x
$$

Med Pytagoras' identitet får vi 

$$
\sin^2 x = 3(1 - \sin^2 x) = 3 - 3\sin^2 x
$$

$$
4\sin^2 x = 3 \liff \sin x = \pm \dfrac{\sqrt{3}}{2}
$$

Da vil cosinus være gitt ved

$$
\cos x = \pm \dfrac{1}{2}
$$

Siden de må ha samme fortegn samtidig for at vi skal ligge i 1. kvadrant eller 3. kvadrant, har vi at 

$$
\sin x = \pm \dfrac{\sqrt{3}}{2} \and \cos x = \pm \dfrac{1}{2}
$$

der vi må velge like fortegn for de to for at $\tan x = \sqrt{3}$.
::::


:::::

:::::::::::::



:::::::::::::{part} c
Løs likningen

$$
\tan x = \sqrt{3} \qfor x \in [0, 2\pi\rangle
$$



:::::{answer}

$$
x = \dfrac{\pi}{3} \or x = \dfrac{4\pi}{3}
$$

::::{solution}
:::{plot}
width: 350px
align: right
axis: equal
ticks: off
xlabel: $\cos x$
ylabel: $\sin x$
circle: (0, 0), 1, black
let: phi = pi/3
let: theta = phi + pi
point: (cos(phi), sin(phi))
point: (cos(theta), sin(theta))
line-segment: (0, 0), (cos(phi), sin(phi)), solid, blue
line-segment: (0, 0), (cos(theta), sin(theta)), solid, blue
angle-arc: (0, 0), 0.4, 0, phi * 180 / pi, red, arrow
angle-arc: (0, 0), 0.3, 0, theta * 180 / pi, red, arrow
text: 0.5 * cos(phi/2), 0.5 * sin(phi/2), "$x_1$", center-center
text: 0.4 * cos(theta/2), 0.4 * sin(theta/2), "$x_1 + \pi$", top-left
fontsize: 24
:::


Fra oppgave **b)** vet vi at 

$$
\sin x = \pm \dfrac{\sqrt{3}}{2} \and \cos x = \pm \dfrac{1}{2}
$$

Det holder å løse én av de to likningene og passe på at løsningene ligger i 1. kvadrant og 3. kvadrant. Den første løsningen finner vi i 1. kvadrant og deretter kan vi rotere med $\pi$ radianer for å finne løsningen i 3. kvadrant.

Vi vet at $\sin x = \dfrac{\sqrt{3}}{2}$ i 1. kvadrant når 

$$
x = \dfrac{\pi}{3}
$$

En løsning i 3. kvadrant blir da 

$$
x = \dfrac{\pi}{3} + \pi = \dfrac{4\pi}{3}
$$

Roterer vi med $\pi$ radianer flere ganger, så ligger vi ikke lenger innenfor intervallet $[0, 2\pi\rangle$. Ergo er løsningen av likningen

$$
x = \dfrac{\pi}{3} \or x = \dfrac{4\pi}{3}
$$

::::
:::::

:::::::::::::



:::::::::::::::


---




:::::::::::::::{exercise} Oppgave 5


:::::::::::::{part} a
Løs likningen

$$
\sin x \cdot \left(\sin x - \dfrac{\sqrt{3}}{2}\right) = 0 \qfor x \in [-\pi, \pi\rangle.
$$


:::{hint} Hint
Hvis $f(x) \cdot g(x) = 0$, så er enten $f(x) = 0$ eller $g(x) = 0$.
:::


:::::{answer}

$$
x \in \left\{-\pi, 0, \dfrac{\pi}{3}, \dfrac{2\pi}{3}\right\}
$$

::::{solution}
Produktregelen for likninger gir oss at 


$$
\sin x \cdot \left(\sin x - \dfrac{\sqrt{3}}{2}\right) = 0
$$

gir de to likningene

$$
\sin x = 0 \or \sin x - \dfrac{\sqrt{3}}{2} = 0
$$

Den første av de to likningene har løsningen

$$
x = \pi k \qfor k \in \integer
$$

Løsningene som ligger i intervallet $[-\pi, \pi\rangle$ for denne løsningen er

$$
x = -\pi \or x = 0
$$


Fra den andre likningen får vi

$$
\sin x = \dfrac{\sqrt{3}}{2}
$$

som har de generelle løsningene

$$
x = \dfrac{\pi}{3} + 2\pi k \or x = \dfrac{2\pi}{3} + 2\pi k
$$

Her vil løsningene kun ligge i intervallet $[-\pi, \pi \rangle$ når $k = 0$ som gir løsningene

$$
x =  \dfrac{\pi}{3} \or x = \dfrac{2\pi}{3}
$$

Dermed er den fullstendige løsningsmengden gitt ved 

$$
x \in \left\{-\pi, 0, \dfrac{\pi}{3}, \dfrac{2\pi}{3}\right\}
$$

::::
:::::


:::::::::::::


:::::::::::::{part} b
Løs likningen

$$
2\cos^2 x - \cos x = 0 \qfor x \in [-\pi, 2\pi\rangle
$$

:::{hint} Hint
Faktoriser venstresiden av likningen så mye som mulig først. 
:::


:::::{answer}

$$
x \in \left\{-\dfrac{\pi}{2}, -\dfrac{\pi}{3}, \dfrac{\pi}{3}, \dfrac{\pi}{2}, \dfrac{3\pi}{2}\right\}
$$

::::{solution}
Vi faktoriserer ut en faktor av $\cos x$ slik at likningen kan skrives som

$$
\cos x \cdot (2\cos x - 1) = 0
$$

som gir 

$$
\cos x = 0 \or \cos x = \dfrac{1}{2}
$$

En løsning til den første likningen er $x = \dfrac{\pi}{2}$. Roterer vi $\pm \pi$ radianer får vi en ny løsning slik at den generelle løsningen til likningen kan skrives som:

$$
x = \dfrac{\pi}{2} + \pi k \qfor k \in \integer
$$

Løsningene som ligger i intervallet $[-\pi, 2\pi\rangle$ er da 

$$
x \in \left\{-\dfrac{\pi}{2}, \dfrac{\pi}{2}, \dfrac{3\pi}{2}\right\}
$$

Den andre likningen har den generelle løsningen

$$
x = \pm \dfrac{\pi}{3} + 2\pi k \qfor k \in \integer
$$

Løsningene av denne likningen som ligger i intervallet $[-\pi, 2\pi\rangle$ er da 

$$
x \in \left\{-\dfrac{\pi}{3}, \dfrac{\pi}{3}\right\}
$$

Den fullstendige løsningsmengden til likningen er da 

$$
x \in \left\{-\dfrac{\pi}{2}, -\dfrac{\pi}{3}, \dfrac{\pi}{3}, \dfrac{\pi}{2}, \dfrac{3\pi}{2}\right\}
$$


::::
:::::


:::::::::::::


:::::::::::::{part} c
Løs likningen

$$
2 \cos^2 x + \sin x - 2 = 0 \qfor x \in [0, 2\pi\rangle
$$


:::{hint} Hint
Skriv om høyresiden ved å bruke Pytagoras' identitet $\cos^2 x + \sin^2 x = 1$ før du løser likningen.
:::


:::::{answer}

$$
x \in \left\{0, \dfrac{\pi}{6}, \dfrac{5\pi}{6}, \pi\right\}
$$

::::{solution}
Vi kan skrive om likningen med Pytagoras' identitet som


$$
2 \cos^2 x + \sin x - 2 = 0
$$

$$
2 (1 - \sin^2 x) + \sin x - 2 = 0
$$

$$
2 - 2\sin^2 x + \sin x - 2 = 0
$$

$$
-2\sin^2 x + \sin x = 0 \liff 2\sin^2 x - \sin x = 0
$$

$$
\sin x \cdot (2\sin x - 1) = 0
$$

som gir at 

$$
\sin x = 0 \or \sin x = \dfrac{1}{2}
$$

Den første likningen har den generelle løsningen

$$
x = \pi k \qfor k \in \integer.
$$

Løsningene i intervallet $[0, 2\pi\rangle$ er da 

$$
x = 0 \or x = \pi
$$

Den andre likningen $\sin x = \dfrac{1}{2}$ har de generelle løsningene

$$
x = \dfrac{\pi}{6} \or x = \pi - \dfrac{\pi}{6} = \dfrac{5\pi}{6}
$$

Om vi roterer $2\pi$ radianer fra disse løsningene havner vi utenfor intervallet $[0, 2\pi\rangle$ som betyr de to løsningene er de eneste den likningen gir i intervallet. 

Dermed er den fullstendige løsningsmengden til likningen

$$
x \in \left\{0, \dfrac{\pi}{6}, \dfrac{5\pi}{6}, \pi\right\}
$$

::::
:::::



:::::::::::::

:::::::::::::::


---


:::::::::::::::{exercise} Oppgave 6

:::::::::::::{part} a
Løs likningen

$$
\sin^2 x + \dfrac{1}{2} \sin (2x) = 0 \qfor x \in [0, 2\pi\rangle
$$



:::::{answer}

$$
x \in \left\{0, \dfrac{3\pi}{4}, \pi, \dfrac{7\pi}{4}\right\}
$$


::::{solution}
Vi bruker at $\sin (2x) = 2\cos x \sin x$ til å skrive om likningen til

$$
\sin^2 x + \dfrac{1}{2} \sin (2x) = 0 
$$

$$
\sin^2 x + \dfrac{1}{2} \cdot 2\cos x \sin x = 0
$$

$$
\sin^2x + \cos x \sin x = 0
$$

$$
\sin x \cdot (\sin x + \cos x) = 0
$$

som gir at 

$$
\sin x = 0 \or \sin x + \cos x = 0
$$

Den første likningen gir at 

$$
\sin x = 0 \liff x = \pi k \limplies x = 0 \or x = \pi
$$

i intervallet $[0, 2\pi\rangle$.

Den andre likningen må vi skrive om først:

$$
\sin x + \cos x = 0 \liff \sin x = -\cos x \liff \tan x = -1
$$

Siden $\tan x \lt 0$, så må $x$ ligge i 2. kvadrant eller 4. kvadrant. Siden $\abs{\tan x} = 1$, så vil nødvendigvis

$$
\abs{\sin x} = \abs{\cos x} = \dfrac{\sqrt{2}}{2}
$$

I 2. kvadrant betyr det at 

$$
x = \dfrac{3\pi}{4}
$$

og i 4. kvadrant betyr det at 

$$
x = \dfrac{3\pi}{4} + \pi = \dfrac{7\pi}{4}
$$

Siden løsningene skal ligge i intervallet $[0, 2\pi\rangle$, finnes det ikke noen andre løsninger til likningen. Dermed er den fullstendige løsningsmengden

$$
x \in \left\{0, \dfrac{3\pi}{4}, \pi, \dfrac{7\pi}{4}\right\}
$$

::::
:::::


:::::::::::::



:::::::::::::{part} b 
Løs likningen

$$
\sin^2 x - 2 \sin x + 1 = 0 \qfor x \in [-\pi, \pi\rangle
$$

:::{hint} Hint
Gjør et variabelskifte $u = \sin x$ og løs likningen for $u$ først.
:::


:::::{answer}

$$
x = \dfrac{\pi}{2}
$$


::::{solution}
Vi gjør et variabelskifte $u = \sin x$ som lar oss skrive om likningen til

$$
u^2 - 2u + 1 = 0 \liff (u - 1)^2 = 0 \liff u = 1
$$

Dermed er 

$$
\sin x = 1
$$

som har den generelle løsningen

$$
x = \dfrac{\pi}{2} + 2\pi k
$$

Løsningene som ligger i intervallet $[-\pi, \pi\rangle$ er da 

$$
x = \dfrac{\pi}{2}
$$
::::
:::::



:::::::::::::



:::::::::::::{part} c
Løs likningen

$$
2 \cos^2 x - \cos x - 1 = 0 \qfor x \in \langle -\pi, \pi\rangle
$$


:::::{answer}
$$
x \in \left\{-\dfrac{2\pi}{3}, 0, \dfrac{2\pi}{3}\right\}
$$

::::{solution}
Vi setter $u = \cos x$ slik at likningen kan skrives om til

$$
2u^2 - u - 1 = 0
$$

Så bruker vi $abc$-formelen for å bestemme $u$:

$$
u = \dfrac{1 \pm \sqrt{1 + 8}}{4} = \dfrac{1 \pm 3}{4} = \begin{cases} 1 \\ \\ -\dfrac{1}{2}  \end{cases}
$$

Altså er 

$$
u = 1 \or u = -\dfrac{1}{2}
$$

som gir

$$
\cos x = 1 \or \cos x = -\dfrac{1}{2}
$$

Den første av de to likningene har den generelle løsningen

$$
x = 2\pi k \qfor k \in \integer. 
$$

Løsningene fra denne likningen som ligger i intervallet $\langle -\pi, \pi \rangle$ er 

$$
x = 0
$$

Den andre likningen gir oss de generelle løsningene

$$
x = \pm \dfrac{2\pi}{3} + 2\pi k \qfor k \in \integer
$$

Løsningene fra denne likningene som ligger i intervallet $\langle -\pi, \pi \rangle$ er

$$
x = \pm \dfrac{2\pi}{3}
$$

Dermed er den fullstendige løsningsmengden til likningen gitt ved 

$$
x \in \left\{-\dfrac{2\pi}{3}, 0, \dfrac{2\pi}{3}\right\}
$$

::::
:::::


:::::::::::::

:::::::::::::::






---



:::::::::::::::{exercise} Oppgave 7
:::::::::::::{part} a
Løs likningen

$$
2 \sin^2 x + 3 \cos x = 0 \qfor  x\in [-\pi, \pi\rangle
$$


:::::{answer}

$$
x = -\dfrac{2\pi}{3} \or x = \dfrac{2\pi}{3}
$$

::::{solution}
Vi bruker Pytagoras' identitet til å skrive om likningen slik at vi bare har $\cos x$ og $\cos^2 x$ i likningen:

$$
2 (1 - \cos^2 x) + 3\cos x = 0
$$

$$
2 - 2\cos^2 x + 3\cos x  = 0
$$

$$
-2\cos^2 x + 3\cos x + 2 = 0
$$

$$
2\cos^2 x - 3\cos x - 2 = 0
$$

Så gjør vi variabelskifte $u = \cos x$ som gir oss andregradslikningen

$$
2u^2 - 3u - 2 = 0
$$

Vi bruker $abc$-formelen til å finne $u$:

$$
u = \dfrac{3 \pm \sqrt{9 + 16}}{4} = \dfrac{3 \pm 5}{4} = \begin{cases} 2 \\ \\ -\dfrac{1}{2} \end{cases}
$$

Altså får vi 

$$
u = 2 \or u = -\dfrac{1}{2}
$$

$$
\cos x = 2 \or \cos x = -\dfrac{1}{2}
$$

Den første likningen har ingen løsning siden $\abs{\cos x} \leq 1$. Dermed har vi kun at 

$$
\cos x = -\dfrac{1}{2}
$$

som har de generelle løsningene

$$
x = \dfrac{2\pi}{3} + 2\pi k \or x = -\dfrac{2\pi}{3} + 2\pi k
$$

De spesielle løsningene som ligger i intervallet $[-\pi, \pi\rangle$ er da

$$
x = -\dfrac{2\pi}{3} \or x = \dfrac{2\pi}{3}
$$

siden intervallet beskriver én full periode på enhetssirkelen. 

::::
:::::

:::::::::::::



:::::::::::::{part} b
Løs likningen

$$
\sqrt{3}\cos x + 3 \sin x = 0 \qfor x\in [0, 4\pi\rangle
$$


:::::{answer}

$$
x \in \left\{\dfrac{5\pi}{6}, \dfrac{11\pi}{6}, \dfrac{17\pi}{6}, \dfrac{23\pi}{6}\right\}
$$


::::{solution}
Vi skriver om likningen:

$$
3 \sin x = - \sqrt{3} \cos x
$$


$$
\sin x = -\dfrac{\sqrt{3}}{3} \cos x
$$

$$
\dfrac{\sin x}{\cos x} = -\dfrac{\sqrt{3}}{3} \liff \tan x = -\dfrac{\sqrt{3}}{3}
$$

Siden $\tan x \lt 0$ så må $x$ ligge i 2. kvadrant eller 4. kvadrant.

For å finne de mulige løsningene kvadrerer vi likningen 

$$
3 \sin x = - \sqrt{3} \cos x \limplies 9 \sin^2 x = 3\cos^2 x
$$

Så brukes vi Pytagoras' identitet til å løse for $\sin^2 x$: 

$$
9\sin^2 x = 3 (1 - \sin^2 x)
$$

$$
9 \sin^2 x = 3 - 3\sin^2 x 
$$

$$
12 \sin^2 x = 3 \liff \sin^2 x = \dfrac{1}{4}
$$

$$
\sin x = \pm \dfrac{1}{2}
$$

Vi løser først $\sin x = \dfrac{1}{2}$ i 2. kvadrant. Én løsning er

$$
x = \dfrac{5\pi}{6}
$$

Så løser vi $\sin x = -\dfrac{1}{2}$ i 4. kvadrant. Én løsning er da:

$$
x = \dfrac{11\pi}{6}
$$

Dermed blir de generelle løsningene til likningen

$$
x = \dfrac{5\pi}{6} + 2\pi k \or x = \dfrac{11\pi}{6} + 2\pi k
$$

De spesielle løsningene må ligge i intervallet $[0, 4\pi\rangle$ som tilsvarer to perioder på enhetssirkelen, altså for $k = 0$ og $k = 1$. Dermed får vi

:::{table}
labels: $k$, $x = \dfrac{5\pi}{6} + 2\pi k$, $x = \dfrac{11\pi}{6} + 2\pi k$
0, $\dfrac{5\pi}{6}$, $\dfrac{11\pi}{6}$
1, $\dfrac{17\pi}{6}$, $\dfrac{23\pi}{6}$
:::

Dermed er løsningsmengden til likningen

$$
x \in \left\{\dfrac{5\pi}{6}, \dfrac{11\pi}{6}, \dfrac{17\pi}{6}, \dfrac{23\pi}{6}\right\}
$$


::::
:::::


:::::::::::::


:::::::::::::{part} c
Løs likningen

$$
\sin \left(\dfrac{x}{2}\right) - \sin x = 0 \qfor x \in [-\pi, \pi\rangle
$$


:::{hint} Hint
Bruk identiteten 

$$
\sin 2x = 2 \sin x \cos x
$$ 

til å skrive om $\sin x$ i likningen ved å sette $2x \to x$ på begge sider av identiteten. 
:::



:::::{answer}

$$
x \in \left\{-\dfrac{2\pi}{3}, 0, \dfrac{2\pi}{3}\right\}
$$

::::{solution}
Siden vi har at 

$$
\sin 2x = 2\sin x \cos x
$$

får vi et uttrykk for $\sin x$ ved å sette $2x \to x$ på begge sider av identiteten:

$$
\sin x = 2 \sin\left(\dfrac{x}{2}\right) \cos\left(\dfrac{x}{2}\right)
$$

Dermed kan vi skrive om likningen

$$
\sin \left(\dfrac{x}{2}\right) - \sin x = 0
$$ 

til

$$
\sin \left(\dfrac{x}{2}\right) - 2 \sin\left(\dfrac{x}{2}\right) \cos\left(\dfrac{x}{2}\right) = 0
$$

som vi kan faktorisere til 

$$
\sin \left(\dfrac{x}{2}\right) \left(1 - 2 \cos\left(\dfrac{x}{2}\right)\right) = 0
$$

som gir at 

$$
\sin \left(\dfrac{x}{2}\right) = 0 \or 1 - 2 \cos\left(\dfrac{x}{2}\right) = 0
$$

Vi lar $u = \dfrac{x}{2}$ slik at vi får likningene

$$
\sin u = 0 \or 1 - 2 \cos u = 0
$$

Den første likningen har den generelle løsningen

$$
u = \pi k \qfor k \in \integer
$$

som gir at 

$$
\dfrac{x}{2} = \pi k \qfor k \in \integer
$$

$$
x = 2 \pi k \qfor k \in \integer
$$

Innenfor intervallet $[-\pi, \pi\rangle$ får vi bare én løsning

$$
x = 0
$$


Den andre likningen kan vi skrive om til

$$
\cos u = \dfrac{1}{2}
$$

som har de generelle løsningene

$$
u = \pm \dfrac{\pi}{3} + 2\pi k \qfor k \in \integer
$$

Så setter vi inn $u = \dfrac{x}{2}$ og løser for $x$:

$$
\dfrac{x}{2} = \pm \dfrac{\pi}{3} + 2\pi k \qfor k \in \integer
$$

$$
x = \pm \dfrac{2\pi}{3} + 4\pi k \qfor k \in \integer
$$

Innenfor intervallet $[-\pi, \pi\rangle$ får vi løsningene

$$
x = -\dfrac{2\pi}{3} \or x = \dfrac{2\pi}{3}
$$

Dermed er løsningsmengden 

$$
x \in \left\{-\dfrac{2\pi}{3}, 0, \dfrac{2\pi}{3}\right\}
$$
::::
:::::

:::::::::::::


:::::::::::::::




---





:::::::::::::::{exercise} Oppgave 8


:::::::::::::{part} a
Gitt likningen

$$
\left(\cos x + \dfrac{1}{2}\right) \cdot \left(\cos x - a\right) = 0 \qfor x \in [0, 2\pi \rangle \qog a \in \real
$$


Bestem $a$ slik at likningen har $3$ løsninger. 


:::::{answer}
$$
a = \pm 1
$$

::::{solution}
Vi har at 

$$
\left(\cos x + \dfrac{1}{2}\right) \cdot \left(\cos x - a\right) = 0
$$

betyr at 

$$
\cos x = -\dfrac{1}{2} \or \cos x = a
$$

Den første av de to likningene har to løsninger i intervallet $[0, 2\pi\rangle$. Den andre likningen har nøyaktig én løsning dersom $a = \pm 1$ siden $\cos x = 1$ eller $\cos x = -1$ gir kun én løsning i intervallet $[0, 2\pi\rangle$. Dermed er svaret

$$
a = \pm 1
$$
::::
:::::


:::::::::::::


:::::::::::::{part} b
Gitt likningen

$$
4 \sin x \cos x = \sqrt{3} \qfor [-a\pi, a\pi\rangle
$$

der $a$ er et positivt heltall.


Bestem $a$ slik at likningen har $8$ løsninger.



::::::{answer}

$$
a = 2
$$

:::::{solution}
Vi skriver om likningen med $2 \sin x \cos x = \sin (2x)$ som gir

$$
2 \sin(2x) = \sqrt{3}
$$

$$
\sin (2x) = \dfrac{\sqrt{3}}{2}
$$


:::{plot}
width: 350px
align: right
axis: equal
ticks: off
xlabel: $\cos u$
ylabel: $\sin u$
circle: (0, 0), 1, black
let: phi = pi/3
let: theta = pi - phi
line-segment: (cos(theta), sin(theta)), (cos(phi), sin(phi)), dashed, red
point: (cos(phi), sin(phi))
point: (cos(theta), sin(theta))
line-segment: (0, 0), (cos(phi), sin(phi)), solid, blue
line-segment: (0, 0), (cos(theta), sin(theta)), solid, blue
angle-arc: (0, 0), 0.4, 0, phi * 180 / pi, red, arrow
angle-arc: (0, 0), 0.3, 0, theta * 180 / pi, red, arrow
text: 0.5 * cos(phi/2), 0.5 * sin(phi/2), "$u_1$", center-center
text: 0.4 * cos(theta/2), 0.4 * sin(theta/2), "$u_2$", top-left
fontsize: 24
:::


Så gjør vi variabelskiftet $u = 2x$ som gir oss grunnlikningen

$$
\sin u = \dfrac{\sqrt{3}}{2}
$$

Da har vi at en løsning i 1. kvadrant er

$$
u = \dfrac{\pi}{3}
$$

som gir den generelle løsningen

$$
u = \dfrac{\pi}{3} + 2\pi k
$$

En løsning i 2. kvadrant er gitt ved

$$
u = \pi - \dfrac{\pi}{3} = \dfrac{2\pi}{3}
$$

som gir den generelle løsningen

$$
u = \dfrac{2\pi}{3} + 2\pi k
$$

Så setter vi tilbake $u = 2x$ og løser de generelle løsningene for $x$:


$$
2x = \dfrac{\pi}{3} + 2\pi k \or 2x = \dfrac{2\pi}{3} + 2\pi k
$$

$$
x = \dfrac{\pi}{6} + \pi k \or x = \dfrac{\pi}{3} + \pi k
$$


Vi kan tegne inn løsningene i enhetssirkelen og merke oss at hver generelle løsning gir $2$ løsninger i hvert omløp på enhetssirkelen:

::::{multi-plot2}
---
rows: 1
cols: 2
---
:::{plot}
width: 100%
axis: equal
ticks: off
xlabel: $\cos x$
ylabel: $\sin x$
circle: (0, 0), 1, black
let: phi = pi/6
let: theta = pi + phi
point: (cos(phi), sin(phi))
point: (cos(phi + pi), sin(phi + pi))
line-segment: (0, 0), (cos(phi), sin(phi)), solid, blue
line-segment: (0, 0), (cos(phi + pi), sin(phi + pi)), solid, blue
angle-arc: (0, 0), 0.4, 0, phi * 180 / pi, red, arrow
angle-arc: (0, 0), 0.3, phi * 180 / pi, phi * 180 / pi + 180, red, arrow
text: 0.5 * cos(phi/2), 0.5 * sin(phi/2), "$x = \frac{\pi}{6}$", right-center
text: 0.4 * cos(theta/2), 0.4 * sin(theta/2), "$\pi$", center-center
fontsize: 24
:::

:::{plot}
width: 100%
axis: equal
ticks: off
xlabel: $\cos x$
ylabel: $\sin x$
circle: (0, 0), 1, black
let: phi = pi/3
let: theta = pi + phi
point: (cos(phi), sin(phi))
point: (cos(phi + pi), sin(phi + pi))
line-segment: (0, 0), (cos(phi), sin(phi)), solid, blue
line-segment: (0, 0), (cos(phi + pi), sin(phi + pi)), solid, blue
angle-arc: (0, 0), 0.4, 0, phi * 180 / pi, red, arrow
angle-arc: (0, 0), 0.3, phi * 180 / pi, phi * 180 / pi + 180, red, arrow
text: 0.5 * cos(phi/2), 0.5 * sin(phi/2), "$x = \frac{\pi}{3}$", right-center
text: 0.4 * cos(theta/2), 0.4 * sin(theta/2), "$\pi$", center-center
fontsize: 24
:::
::::

Dermed får vi $4$ løsninger for $a = 1$. For å få $8$ løsninger må vi sette $a = 2$.

:::::
::::::

:::::::::::::


:::::::::::::{part} c
En likning er gitt ved 

$$
\cos^2\left(\dfrac{\pi}{2}x\right) - \sin^2 \left(\dfrac{\pi}{2}x\right) = \dfrac{1}{2}
$$


Bestem $a$ slik at likningen har $6$ løsninger i intervallet $[-a, a\rangle$ der $a$ er et positivt heltall.


:::::{answer}
$$
a = 3
$$

::::{solution}
Vi gjør variabelskifte $u = \dfrac{\pi}{2}x$ som lar oss skrive om likningen til

$$
\cos^2 u - \sin^2 u = \dfrac{1}{2}
$$

Så bruker vi identiteten $\cos (2u) = \cos^2 u - \sin^2 u$ som gir at 

$$
\cos(2u) = \dfrac{1}{2}
$$

Vi har at 

$$
x \in [-a, a\rangle \limplies u \in \left[-\dfrac{\pi}{2}a, \dfrac{\pi}{2}a\right\rangle \limplies 2u \in [-\pi a, \pi a \rangle.
$$

Vi har at $\cos (2u) = \dfrac{1}{2}$ for to vinkler $2u \in [-\pi, \pi\rangle$. Verdien til $a$ gir antall perioder av $\cos(2u)$ vi får på enhetssirkelen som betyr at vi får $6$ løsninger ved å velge $3$ perioder siden

$$
2a = 6 \limplies a = 3
$$

::::
:::::


:::::::::::::


:::::::::::::::