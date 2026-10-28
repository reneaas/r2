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
\cos x = -\dfrac{\sqrt{2}}{2}
$$


:::::::::::::



:::::::::::::{part} d
Finn de generelle løsningene til likningen

$$
\sin x = -\dfrac{\sqrt{3}}{2}
$$
:::::::::::::

:::::::::::::::



---



:::::::::::::::{exercise} Oppgave 2

:::::::::::::{part} a
Løs likningen

$$
2\sin x - 1 = 0 \qfor x \in [0, 2\pi\rangle
$$
:::::::::::::



:::::::::::::{part} b
Løs likningen

$$
2\cos \left(\pi x\right) = \sqrt{3} \qfor x \in [-4, 4\rangle
$$
:::::::::::::




:::::::::::::{part} c
Løs likningen

$$
\tan \left(\dfrac{\pi}{2}x\right) = 1 \qfor x \in [-4, 4\rangle
$$
:::::::::::::



:::::::::::::{part} d
Løs likningen

$$
\sin x - \sqrt{3} \cos x = 0 \qfor x \in \langle -\pi, \pi\rangle
$$

:::::::::::::

:::::::::::::::



---


:::::::::::::::{exercise} Oppgave 4
:::::::::::::{part} a
Løs likningen

$$
\left(\sin x - \frac{1}{2}\right)\left(\cos x + \frac{\sqrt{3}}{2}\right) = 0 \qfor x \in [0, 2\pi\rangle
$$


:::{hint} Hint
Hvis to funksjoner $f(x) \cdot g(x) = 0$, så er enten $f(x) = 0$ eller $g(x) = 0$.
:::

:::::::::::::



:::::::::::::{part} b
Løs likningen

$$
4 \sin \left(\dfrac{x}{2}\right) + 2 = 0 \qfor x \in [-2\pi, 2\pi\rangle
$$
:::::::::::::



:::::::::::::{part} c
Løs likningen

$$
\cos (\pi x) - \sin (\pi x) = 0 \qfor x \in [-2, 2\rangle
$$
:::::::::::::



:::::::::::::{part} d
Løs likningen

$$
2\sqrt{3} \sin (2x) + 2 \cos (2x) = 0 \qfor x \in [-2\pi, 2\pi\rangle
$$
:::::::::::::

:::::::::::::::


---



:::::::::::::::{exercise} Oppgave 5
:::::::::::::{part} a
Løs likningen

$$
\cos \left(\dfrac{\pi}{2}x - \dfrac{\pi}{3}\right) = \dfrac{1}{2}
$$
:::::::::::::



:::::::::::::{part} b
Løs likningen

$$
\sin \left(\dfrac{\pi}{2}x + \dfrac{\pi}{6}\right) = -\dfrac{\sqrt{2}}{2}
$$
:::::::::::::



:::::::::::::{part} c
Løs likningen

$$
\tan \left(\dfrac{\pi}{2}x - \dfrac{\pi}{4}\right) = 1
$$
:::::::::::::
:::::::::::::::


---


:::::::::::::::{exercise} Oppgave 6
:::::::::::::{part} a
Løs likningen

$$
2 \cos^2 x + \sin x - 2 = 0 \qfor x \in [0, 2\pi\rangle
$$


:::::::::::::



:::::::::::::{part} b
Løs likningen

$$
\sin^2 x + \dfrac{1}{2} \sin (2x) = 0 \qfor x \in [0, 2\pi\rangle
$$


:::::::::::::



:::::::::::::{part} c
Løs likningen

$$
\sin^2 x - 2 \sin x + 1 = 0 \qfor x \in [0, 2\pi\rangle
$$

:::::::::::::



:::::::::::::::


---



:::::::::::::::{exercise} Oppgave 7
En likning er gitt ved 

$$
\cos^2\left(\dfrac{\pi}{2}x\right) - \sin^2 \left(\dfrac{\pi}{2}x\right) = \dfrac{1}{2}
$$


:::::::::::::{part} a
Finn de generelle løsningene til likningen.


:::::::::::::


:::::::::::::{part} b
Bestem $a$ slik at likningen har $6$ løsninger i intervallet $[-a, a\rangle$. 
:::::::::::::


:::::::::::::::



---



:::::::::::::::{exercise} Oppgave 8
:::::::::::::{part} a
Gitt punktene $A(1, 1, 1)$, $B(3, 3, 2)$ og $C(2, 1, 2)$.

Finn vinkelen $\angle BAC$.


:::{hint} Hint
Bruk den geometriske formelen for prikkproduktet 

$$
\vec a \cdot \vec b = \abs{\vec a} \abs{\vec b} \cos \varphi
$$
:::


:::::::::::::
:::::::::::::::
