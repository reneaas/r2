# Trigonometriske identiteter

:::{goals} 
* utforske egenskaper ved radianer og trigonometriske funksjoner og identiteter og anvende disse egenskapene til å løse praktiske problemer
:::



Trigonometriske identiteter lar oss omforme uttrykk med sinus og cosinus, og de lar oss regne ut eksakte verdier til en del vinkler ved å bruke de eksakte verdiene vi allerede kjenner. 

I praksis er det mange identiteter, men de fleste kan vi bruke ved hjelp av enhetssirkelen og vektorregning. 


:::{plot}
nocache:
width: 350px
align: right
fontsize: 28
axis: equal
ticks: off
circle: (0, 0), 1
let: u = 60
vector: (0, 0), (cos(u*pi/180), sin(u*pi/180)), blue
angle-arc: (0, 0), 0.35, 0, u, red, arrow
text: 0.45 * cos(u*pi/360), 0.45 * sin(u*pi/360), "$\varphi$", center-center
point: (cos(u*pi/180), sin(u*pi/180))
text: 1.2 * cos(u*pi/180), 1.2 * sin(u*pi/180), "$\vec{r}(\varphi)$", center-center
xlabel: $\cos \varphi$
ylabel: $\sin \varphi$
:::


Punktene på enhetssirkelen kan beskrives med posisjonsvektoren

$$
\vec r(\varphi) = [\cos \varphi, \sin \varphi]
$$

som angir koordinatene til punktet man får dersom man roterer et punkt som starter i $(1, 0)$ på $x$-aksen med $\varphi$ radianer på enhetssirkelen.


:::{clear}
:::

:::::::::::::::{summary} Periodisitet
:::{plot}
nocache:
width: 350px
align: right
fontsize: 28
axis: equal
ticks: off
circle: (0, 0), 1
let: u = 60
let: v = 60 + 360
vector: (0, 0), (cos(u*pi/180), sin(u*pi/180)), blue
angle-arc: (0, 0), 0.35, 0, u, red, arrow
angle-arc: (0, 0), 0.2, 0, v, purple, arrow
text: 0.45 * cos(u*pi/360), 0.45 * sin(u*pi/360), "$\varphi$", center-center
text: 0.2 * cos(u*pi/360), -0.2 * sin(u*pi/360), "$\varphi + 2\pi$", bottom-right
point: (cos(u*pi/180), sin(u*pi/180))
text: 0.5 * cos(u*pi/180), 0.5 * sin(u*pi/180), "$\vec{r}$", top-left
:::



For en vinkel $\varphi$, vil vi kunne legge til eller trekke fra $2\pi$ og få akkurat samme punkt på enhetssirkelen. 

Hver gang vi legger til eller trekker fra $2\pi$, går vi én runde rundt enhetssirkelen og ender opp på samme punkt.

Derfor tilfredsstiller posisjonsvektoren til punktet

$$
\vec{r}(\varphi + 2\pi\cdot k) = \vec{r}(\varphi)
$$

som betyr at

$$
\begin{align*}
\sin \left(\varphi + 2\pi k\right) &= \sin \varphi \\
\\
\cos \left(\varphi + 2\pi k\right) &= \cos \varphi
\end{align*}
$$

for alle heltall $k$.


:::::::::::::::


---


:::::::::::::::{example} Eksempel 1
:::{plot}
width: 100%
align: right
axis: equal
ticks: off
fontsize: 28
circle: (0, 0), 1
let: u = pi / 6 + 4*pi
line-segment: (0, 0), (cos(u), sin(u)), blue
angle-arc: (0, 0), 0.3, 0, u*180/pi, red, arrow
text: 0.6 * cos(u/2), 0.55 * sin(u/2), "$\frac{25\pi}{6}$", center-center
point: (cos(u), sin(u))
xlabel: $\cos \varphi$
ylabel: $\sin \varphi$
:::

Enhetssirkelen er vist til høyre med en vinkel $\varphi = \dfrac{25\pi}{6}$. 

Bestem de eksakte verdiene til

$$
\cos \dfrac{25\pi}{6} \qog \sin \dfrac{25\pi}{6}
$$



::::{solution}
---
open:
---
Vi kan se at vinkelen går 2 ekstra omløp i positiv retning. For å finne vinkelen i første omløp, trekker vi fra $2\pi$ to ganger:

$$
\dfrac{25\pi}{6} - 2\pi - 2\pi = \dfrac{25\pi}{6} - 4\pi = \dfrac{25\pi - 24\pi}{6} = \dfrac{\pi}{6}
$$

Altså er 

$$
\cos \dfrac{25\pi}{6} = \cos \dfrac{\pi}{6} = \dfrac{\sqrt{3}}{2}
$$

og 

$$
\sin \dfrac{25\pi}{6} = \sin \dfrac{\pi}{6} = \dfrac{1}{2}
$$
::::


:::::::::::::::


---

## Rotasjoner


:::{plot}
width: 350px
align: right
axis: equal
ticks: off
let: a = 1
let: b = 2
vector: (0, 0), (a, b), blue
point: (a, b)
text: a + 0.2, b + 0.1, "$[a, b]$", top-right
vector: (0, 0), (-b, a), red
point: (-b, a)
text: -b - 0.2, a + 0.1, "$[-b, a]$", top-center
vector: (0, 0), (b, -a), purple
point: (b, -a)
text: b + 0.2, -a, "$[b, -a]$", bottom-right
fontsize: 28
let: vx = a
let: vy = b
let: ux = b
let: uy = -a
let: ds = 0.15
line-segment: (ds * ux, ds * uy), (ds * ux + ds * vx, ds * uy + ds * vy), solid, gray
line-segment: (ds * vx, ds * vy), (ds * vx + ds * ux, ds * vy + ds * uy), solid, gray
:::



Når vi roterer en vektor $\vec r = [a, b]$ med 90 grader, så får vi en **tverrvektor** som står normalt på den opprinnelige vektoren og har samme lengde. Vi kan lage to forskjellige tverrvektorer avhengig av hvilken retning vi ønsker å rotere vektoren:
1. Rotasjon *mot* klokka i positiv omløpsretning. Da får vi $\vec r_\perp = [-b, a]$.
2. Rotasjon *med* klokka i negativ omløpsretning. Da får vi $\vec r_\perp = [b, -a]$.



:::::::::::::::{summary} Rotasjon med $\dfrac{\pi}{2}$ radianer (90 grader)
:::{plot}
nocache:
xlabel: $\cos \varphi$
ylabel: $\sin \varphi$
axis: equal
ticks: off
fontsize: 28
width: 350px
align: right
circle: (0, 0), 1
let: u = 60
let: v = u + 90
let: w = u - 90
vector: (0, 0), (cos(u*pi/180), sin(u*pi/180)), blue
vector: (0, 0), (cos(v*pi/180), sin(v*pi/180)), red
vector: (0, 0), (cos(w*pi/180), sin(w*pi/180)), purple
point: (cos(u*pi/180), sin(u*pi/180))
point: (cos(v*pi/180), sin(v*pi/180))
point: (cos(w*pi/180), sin(w*pi/180))
angle-arc: (0, 0), 0.2, 0, u, blue, arrow
angle-arc: (0, 0), 0.3, u, v, red, arrow
angle-arc: (0, 0), 0.4, u, w, purple, arrow
text: 0.3 * cos(u*pi/360), 0.3 * sin(u*pi/360), "$\varphi$", center-center
text: 0.5 * cos(0.5*(u + v)*pi/180), 0.5 * sin(0.5*(u + v)*pi/180), "$+\frac{\pi}{2}$", center-center
text: 0.65 * cos(0.5*(w + u)*pi/180), 0.65 * sin(0.5*(w + u)*pi/180), "$-\frac{\pi}{2}$", center-center
text: cos(u*pi/180), sin(u*pi/180), "$\vec r(\varphi)$", top-right
text: cos(v*pi/180), sin(v*pi/180), "$\vec r(\varphi + \frac{\pi}{2})$", top-left
text: cos(w*pi/180), sin(w*pi/180), "$\vec r(\varphi - \frac{\pi}{2})$", bottom-right
:::



For alle vinkler $\varphi$ gjelder:

$$
\begin{align*}
\cos \left(\varphi \pm \dfrac{\pi}{2}\right) &= \mp\sin \varphi \\
\\
\sin \left(\varphi \pm \dfrac{\pi}{2}\right) &= \pm\cos \varphi
\end{align*}
$$



:::::{proof} Vis forklaring
Vi har at posisjonsvektoren med $\varphi$ radianer er gitt ved 

$$
\vec r(\varphi) = [\cos \varphi, \sin \varphi]
$$

Dersom vi roterer denne vektoren med $\pi/2$ radianer *mot* klokka (i positiv omløpsretning) får vi:

$$
\vec r\left(\varphi + \dfrac{\pi}{2}\right) = \mqty[\cos\left(\varphi + \dfrac{\pi}{2}\right), \sin\left(\varphi + \dfrac{\pi}{2}\right)] = [-\sin \varphi, \cos \varphi]
$$

som betyr at 

$$
\cos \left(\varphi + \dfrac{\pi}{2}\right) = -\sin \varphi \qog \sin \left(\varphi + \dfrac{\pi}{2}\right) = \cos \varphi
$$


Dersom vi roterer $\vec r(\varphi)$ med $\pi/2$ radianer *med* klokka (i negativ omløpsretning) får vi:

$$
\vec r\left(\varphi - \dfrac{\pi}{2}\right) = \mqty[\cos\left(\varphi - \dfrac{\pi}{2}\right), \sin\left(\varphi - \dfrac{\pi}{2}\right)] = [\sin \varphi, -\cos \varphi]
$$

Dermed har vi at 

$$
\cos \left(\varphi - \dfrac{\pi}{2}\right) = \sin \varphi \qog \sin \left(\varphi - \dfrac{\pi}{2}\right) = -\cos \varphi
$$

Vi kan samle de to rotasjonene til to mer kompakte identiteter: 


$$
\begin{align*}
\cos \left(\varphi \pm \dfrac{\pi}{2}\right) &= \mp\sin \varphi \\
\\
\sin \left(\varphi \pm \dfrac{\pi}{2}\right) &= \pm\cos \varphi
\end{align*}
$$


:::::



:::::::::::::::


---



:::::::::::::::{example} Eksempel 2
:::{plot}
axis: equal
ticks: off
fontsize: 28
width: 350px
align: right
circle: (0, 0), 1
let: u = 2*pi/3
vector: (0, 0), (cos(u), sin(u)), blue
angle-arc: (0, 0), 0.3, 0, u*180/pi, red, arrow
point: (cos(u), sin(u))
text: 0.45 * cos(u/2), 0.45 * sin(u/2), "$\frac{2\pi}{3}$", center-center
text: cos(u), sin(u), "$\vec r\left(\displaystyle \frac{2\pi}{3}\right)$", top-left
xlabel: $\cos \varphi$
ylabel: $\sin \varphi$
:::


En vinkel $\varphi = \dfrac{2\pi}{3}$ er vist i enhetssirkelen til høyre.


Finn de eksakte verdiene til

$$
\cos \dfrac{2\pi}{3} \qog \sin \dfrac{2\pi}{3}
$$


::::{solution}
---
open:
---
Koordinatene til posisjonsvektoren $\vec r \left(\dfrac{2\pi}{3}\right)$ er 

$$
\vec r \left(\dfrac{2\pi}{3}\right) = \left[\cos \dfrac{2\pi}{3}, \sin \dfrac{2\pi}{3}\right]
$$

Hvis vi roterer posisjonsvektoren med $\pi/2$ radianer med klokka, så havner vi i 1. kvadrant: 


$$
\begin{align*}
\vec r\left(\dfrac{2\pi}{3} - \dfrac{\pi}{2}\right) &= \vec r\left(\dfrac{\pi}{6}\right) \\
\\
&= \left[\cos \dfrac{\pi}{6}, \sin \dfrac{\pi}{6}\right] \\
\\
&= \left[\dfrac{\sqrt{3}}{2}, \dfrac{1}{2}\right]
\end{align*}
$$

Så roterer vi denne vektoren *tilbake* igjen med $\pi/2$ radianer *mot* klokka for å finne koordinatene til den opprinnelige posisjonsvektoren:

$$
\vec r\left(\dfrac{2\pi}{3}\right) = \left[-\dfrac{1}{2}, \dfrac{\sqrt{3}}{2}\right]
$$

Dermed har vi at 

$$
\mqty[\cos \dfrac{2\pi}{3},  \sin \dfrac{2\pi}{3}] = \mqty[-\dfrac{1}{2},  \dfrac{\sqrt{3}}{2}]
$$

som betyr at 

$$
\cos \dfrac{2\pi}{3} = -\dfrac{1}{2} \and \sin \dfrac{2\pi}{3} = \dfrac{\sqrt{3}}{2}
$$


::::


:::::::::::::::


---


:::::::::::::::{summary} Rotasjon med $\pi$ radianer (180 grader)

:::{plot}
xlabel: $\cos \varphi$
ylabel: $\sin \varphi$
axis: equal
ticks: off
width: 350px
align: right
fontsize: 28
circle: (0, 0), 1
let: u = pi/3
let: v = u - pi
let: w = u + pi
vector: (0, 0), (cos(u), sin(u)), blue
vector: (0, 0), (cos(v), sin(v)), red
vector: (0, 0), (cos(w), sin(w)), red
angle-arc: (0, 0), 0.4, 0, u*180/pi, blue, arrow
angle-arc: (0, 0), 0.3, u*180/pi, v*180/pi, red, arrow
angle-arc: (0, 0), 0.35, u*180/pi, w*180/pi, red, arrow
text: 0.5 * cos(u/2), 0.45 * sin(u/2), "$\varphi$", center-center
text: 0.5 * cos(v/2), 0.5 * sin(v/2), "$-\pi$", center-center
text: 0.5 * cos(w/2), 0.5 * sin(w/2), "$+\pi$", center-center
line-segment: (cos(u), sin(u)), (cos(v), sin(v)), dashed, gray
point: (cos(u), sin(u))
point: (cos(v), sin(v))
text: cos(u), sin(u), "$\vec r(\varphi)$", top-right
text: cos(v), sin(v), "$\vec r(\varphi \pm \pi)$", bottom-left
:::


For alle vinkler $\varphi$ gjelder:

$$
\begin{align*}
\cos(\varphi \pm \pi) &= -\cos \varphi \\
\\
\sin(\varphi \pm \pi) &= -\sin \varphi
\end{align*}
$$



:::::{proof} Vis forklaring
Vektoren $\vec r (\varphi)$ har koordinatene

$$
\vec r (\varphi) = [\cos \varphi, \sin \varphi]
$$

Om vi roterer med $+\pi$ radianer (mot klokka) eller $-\pi$ radianer (med klokka), så får vi en vektor som peker i motsatt retning. Dermed har vi at

$$
\vec r(\varphi \pm \pi) = -\vec r(\varphi) = [-\cos \varphi, -\sin \varphi]
$$

Videre har vi at 

$$
\vec r(\varphi \pm \pi) = [\cos (\varphi \pm \pi), \sin (\varphi \pm \pi)]
$$

som betyr at 

$$
[\cos (\varphi \pm \pi), \sin (\varphi \pm \pi)] = [-\cos \varphi, -\sin \varphi]
$$

Dermed har vi identitetene:

$$
\begin{align*}
\cos (\varphi \pm \pi) &= -\cos \varphi \\
\\
\sin (\varphi \pm \pi) &= -\sin \varphi
\end{align*}
$$

:::::


:::::::::::::::


---




:::::::::::::::{example} Eksempel 3

:::{plot}
width: 350px
align: right
axis: equal
ticks: off
fontsize: 28
circle: (0, 0), 1
let: u = 4*pi/3
vector: (0, 0), (cos(u), sin(u)), blue
angle-arc: (0, 0), 0.3, 0, u*180/pi, red, arrow
point: (cos(u), sin(u))
text: 0.45 * cos(u/2), 0.45 * sin(u/2), "$\frac{4\pi}{3}$", center-center
xlabel: $\cos \varphi$
ylabel: $\sin \varphi$
text: cos(u), sin(u), "$\vec r\left(\frac{4\pi}{3}\right)$", bottom-left
:::

I figuren til høyre vises enhetssirkelen med en vinkel $\varphi = \dfrac{4\pi}{3}$ og posisjonsvektoren $\vec r\left(\dfrac{4\pi}{3}\right)$. 

Finn de eksakte verdiene til 

$$
\cos \dfrac{4\pi}{3} \qog \sin \dfrac{4\pi}{3}
$$


::::{solution}
---
open:
---
Koordinatene til $\vec r\left(\dfrac{4\pi}{3}\right)$ er gitt ved

$$
\vec r\left(\dfrac{4\pi}{3}\right) = \left[\cos \dfrac{4\pi}{3}, \sin \dfrac{4\pi}{3}\right]
$$

Hvis vi roterer vektoren med $-\pi$ radianer (med klokka), så havner vi i 1. kvadrant:

$$
\vec r\left(\dfrac{4\pi}{3} - \pi\right) = \vec r\left(\dfrac{\pi}{3}\right) = \left[\cos \dfrac{\pi}{3}, \sin \dfrac{\pi}{3}\right] = \left[\dfrac{1}{2}, \dfrac{\sqrt{3}}{2}\right]
$$

Hvis vi nå roterer denne vektoren tilbake igjen med $+\pi$ radianer (mot klokka – som å angre rotasjonen), så får vi:


$$
\vec r\left(\dfrac{4\pi}{3}\right) = - \vec r\left(\dfrac{\pi}{3}\right) = - \left[\dfrac{1}{2}, \dfrac{\sqrt{3}}{2}\right] = \left[-\dfrac{1}{2}, -\dfrac{\sqrt{3}}{2}\right]
$$

Dermed må vi ha at 

$$
\mqty[\cos \dfrac{4\pi}{3},  \sin \dfrac{4\pi}{3}] = \mqty[-\dfrac{1}{2},  -\dfrac{\sqrt{3}}{2}]
$$

som betyr at 

$$
\cos \dfrac{4\pi}{3} = -\dfrac{1}{2} \and \sin \dfrac{4\pi}{3} = -\dfrac{\sqrt{3}}{2}
$$


::::

:::::::::::::::




---


## Speilinger


:::{plot}
width: 350px
align: right
axis: equal
ticks: off
let: a = 1
let: b = 2
vector: (0, 0), (a, b), blue
point: (a, b)
text: a, b, "$[a, b]$", top-right
vector: (0, 0), (a, -b), red
point: (a, -b)
text: a, -b, "$[a, -b]$", bottom-right
vector: (0, 0), (-a, b), purple
point: (-a, b)
text: -a, b, "$[-a, b]$", top-left
fontsize: 28
line-segment: (a, b), (a, -b), dashed, gray
line-segment: (a, b), (-a, b), dashed, gray
:::


Når vi jobber med trigonometriske likninger, så vil speilinger om koordinataksene spille en viktig rolle i måten vi løser likningene på. Hvis vi tenker oss en vektor $\vec r = [a, b]$, så kan vi speile de om koordinataksene som følger:
1. Speiling om $x$-aksen: $[a, b]$ speiles til $[a, -b]$
2. Speiling om $y$-aksen: $[a, b]$ speiles til $[-a, b]$


:::{clear}
:::


:::::::::::::::{summary} Speiling om $x$-aksen
:::{plot}
axis: equal
ticks: off
width: 350px
align: right
fontsize: 28
circle: (0, 0), 1
let: u = 50
let: v = -50
vector: (0, 0), (cos(u*pi/180), sin(u*pi/180)), blue
vector: (0, 0), (cos(v*pi/180), sin(v*pi/180)), blue
point: (cos(u*pi/180), sin(u*pi/180))
point: (cos(v*pi/180), sin(v*pi/180))
angle-arc: (0, 0), 0.35, 0, u, red, arrow
angle-arc: (0, 0), 0.2, 0, v, blue, arrow
text: 0.45 * cos(u*pi/360), 0.45 * sin(u*pi/360), "$\varphi$", center-center
text: 0.2 * cos(u*pi/360), -0.2 * sin(u*pi/360), "$-\varphi$", bottom-right
line-segment: (cos(u * pi/180), sin(u*pi/180)), (cos(v * pi/180), sin(v*pi/180)), dashed, red
line-segment: (0, sin(u * pi/180)), (cos(u * pi/180), sin(u*pi/180)), dashed, teal
line-segment: (0, sin(v * pi/180)), (cos(v * pi/180), sin(v*pi/180)), dashed, teal
xlabel: $\cos \varphi$
ylabel: $\sin \varphi$
text: cos(u*pi/180), sin(u*pi/180), "$\vec r(\varphi)$", top-right
text: cos(v*pi/180), sin(v*pi/180), "$\vec r(-\varphi)$", bottom-right
:::



For alle vinkler $\varphi$ er

$$
\begin{align*}
\cos (-\varphi) &= \cos \varphi \\
\\
\sin (-\varphi) &= -\sin \varphi
\end{align*}
$$



:::::{proof} Vis forklaring


Posisjonsvektoren $\vec r(\varphi)$ har koordinatene

$$
\vec r(\varphi) = [\cos \varphi, \sin \varphi]
$$

Når vi speiler denne vektoren om $x$-aksen, så endres fortegnet på $y$-koordinaten, mens $x$-koordinaten forblir den samme. Dermed får vi at

$$
\vec r(-\varphi) = [\cos \varphi, -\sin \varphi]
$$

Samtidig så er 

$$
\vec r(-\varphi) = [\cos(-\varphi), \sin(-\varphi)]
$$

Ved å sammenligne de to uttrykkene for $\vec r(-\varphi)$ må vi derfor ha at

$$
\cos(-\varphi) = \cos \varphi \and \sin(-\varphi) = -\sin \varphi
$$

:::::


:::::::::::::::


---


:::::::::::::::{example} Eksempel 4
Finn de eksakte verdiene til

$$
\cos \left(-\dfrac{\pi}{3}\right) \qog \sin \left(-\dfrac{\pi}{3}\right)
$$


::::{solution}
---
open:
---
:::{plot}
axis: equal
ticks: off
width: 350px
align: right
fontsize: 28
circle: (0, 0), 1
let: u = 60
let: v = -60
vector: (0, 0), (cos(u*pi/180), sin(u*pi/180)), blue
vector: (0, 0), (cos(v*pi/180), sin(v*pi/180)), blue
point: (cos(u*pi/180), sin(u*pi/180))
point: (cos(v*pi/180), sin(v*pi/180))
angle-arc: (0, 0), 0.35, 0, u, red, arrow
angle-arc: (0, 0), 0.2, 0, v, blue, arrow
text: 0.45 * cos(u*pi/360), 0.45 * sin(u*pi/360), "$\frac{\pi}{3}$", center-center
text: 0.2 * cos(u*pi/360), -0.2 * sin(u*pi/360), "$-\frac{\pi}{3}$", bottom-right
line-segment: (cos(u * pi/180), sin(u*pi/180)), (cos(v * pi/180), sin(v*pi/180)), dashed, red
line-segment: (0, sin(u * pi/180)), (cos(u * pi/180), sin(u*pi/180)), dashed, teal
line-segment: (0, sin(v * pi/180)), (cos(v * pi/180), sin(v*pi/180)), dashed, teal
xlabel: $\cos \varphi$
ylabel: $\sin \varphi$
text: cos(u*pi/180), sin(u*pi/180), "$\vec r\left(\frac{\pi}{3}\right)$", top-right
text: cos(v*pi/180), sin(v*pi/180), "$\vec r\left(-\frac{\pi}{3}\right)$", bottom-right
:::



Fra figuren kan vi se at $x$-koordinatene til punktet $\vec r\left(\dfrac{\pi}{3}\right)$ og punktet $\vec r\left(-\dfrac{\pi}{3}\right)$ er like, mens $y$-koordinatene har motsatt fortegn. Dermed har vi at

$$
\cos \left(-\dfrac{\pi}{3}\right) = \cos \dfrac{\pi}{3} = \dfrac{1}{2}
$$

og

$$
\sin \left(-\dfrac{\pi}{3}\right) = -\sin \dfrac{\pi}{3} = -\dfrac{\sqrt{3}}{2}
$$



::::

:::::::::::::::



---



:::::::::::::::{summary} Speiling om $y$-aksen
:::{plot}
axis: equal
ticks: off
width: 350px
align: right
fontsize: 28
circle: (0, 0), 1
let: u = 50
let: v = 180 - u
vector: (0, 0), (cos(u*pi/180), sin(u*pi/180)), blue
vector: (0, 0), (cos(v*pi/180), sin(v*pi/180)), blue
point: (cos(u*pi/180), sin(u*pi/180))
point: (cos(v*pi/180), sin(v*pi/180))
angle-arc: (0, 0), 0.35, 0, u, red, arrow
angle-arc: (0, 0), 0.35, 180, v, red, arrow
text: 0.45 * cos(u*pi/360), 0.45 * sin(u*pi/360), "$\varphi$", center-center
text: 0.45 * 0.5 * (-1 + cos(v*pi/180)) - 0.1, 0.45 * 0.5 * sin(v*pi/180), "$\varphi$", center-center
line-segment: (cos(u * pi/180), sin(u*pi/180)), (cos(v * pi/180), sin(v*pi/180)), dashed, red
line-segment: (cos(u * pi/ 180), sin(u * pi/180)), (cos(u * pi/180), 0), dashed, teal
line-segment: (cos(v * pi/180), sin(v * pi/180)), (cos(v * pi/180), 0), dashed, teal
xlabel: $\cos \varphi$
ylabel: $\sin \varphi$
text: cos(u*pi/180), sin(u*pi/180), "$\vec r(\varphi)$", top-right
text: cos(v*pi/180), sin(v*pi/180), "$\vec r(\pi-\varphi)$", top-left
:::


For alle vinkler $\varphi$ er

$$
\begin{align*}
\cos (\pi - \varphi) &= -\cos \varphi \\
\\
\sin (\pi - \varphi) &= \sin \varphi
\end{align*}
$$


:::::{proof} Vis forklaring
Posisjonsvektoren $\vec r(\varphi)$ har koordinatene

$$
\vec r(\varphi) = [\cos \varphi, \sin \varphi]
$$

Hvis vi speiler denne vektoren om $y$-aksen, så endres fortegnet på $x$-koordinaten, mens $y$-koordinaten forblir den samme. Dermed får vi at

Vinkelen vi får når vi speiler $\vec r(\varphi)$ om $y$-aksen er $\pi - \varphi$. Dermed har vi at

$$
\vec r(\pi - \varphi) = \mqty[\cos (\pi - \varphi), \sin (\pi - \varphi)] = [-\cos \varphi, \sin \varphi]
$$

Derfor er 

$$
\cos(\pi - \varphi) = -\cos \varphi \and \sin (\pi - \varphi) = \sin \varphi
$$
:::::



:::::::::::::::


---



:::::::::::::::{example} Eksempel 5
:::{plot}
axis: equal
ticks: off
fontsize: 28
width: 350px
align: right
circle: (0, 0), 1
let: u = 2*pi/3
vector: (0, 0), (cos(u), sin(u)), blue
angle-arc: (0, 0), 0.3, 0, u*180/pi, red, arrow
point: (cos(u), sin(u))
text: 0.45 * cos(u/2), 0.45 * sin(u/2), "$\frac{2\pi}{3}$", center-center
text: cos(u), sin(u), "$\vec r\left(\displaystyle \frac{2\pi}{3}\right)$", top-left
xlabel: $\cos \varphi$
ylabel: $\sin \varphi$
:::


Posisjonsvektoren $\vec r \mqty(\dfrac{2\pi}{3})$ er vist i figuren til høyre.

Bruk speiling om $y$-aksen til å finne de eksakte verdiene til

$$
\cos \dfrac{2\pi}{3} \qog \sin \dfrac{2\pi}{3}
$$



::::{solution}
---
open:
---
Hvis vi speiler posisjonsvektoren $\vec r \mqty(\dfrac{2\pi}{3})$ om $y$-aksen, så får vi en vektor som peker i 1. kvadrant. Denne vektoren har vinkelen $\pi - \dfrac{2\pi}{3} = \dfrac{\pi}{3}$. Dermed vil den speilede vektoren har koordinatene 

$$
\vec r \mqty(\dfrac{\pi}{3}) = \mqty[\cos \dfrac{\pi}{3}, \sin \dfrac{\pi}{3}] = \mqty[\dfrac{1}{2}, \dfrac{\sqrt{3}}{2}]
$$

Speiler vi den tilbake igjen om $y$-aksen, så skal vi endre fortegnet på $x$-koordinaten, mens $y$-koordinaten forblir den samme. Dermed får vi at

$$
\vec r \mqty(\dfrac{2\pi}{3}) = \mqty[-\dfrac{1}{2}, \dfrac{\sqrt{3}}{2}]
$$

Dermed er 

$$
\cos \dfrac{2\pi}{3} = -\dfrac{1}{2} \and \sin \dfrac{2\pi}{3} = \dfrac{\sqrt{3}}{2}
$$


Vi fant disse verdiene ved å bruke rotasjon med $\pi/2$ radianer i eksempel 2, mens her ser vi at det er mulig å bruke speiling til å finne de samme verdiene.
::::

:::::::::::::::


---



## Lengden av posisjonsvektoren


Den neste identiteten vi skal se på kalles for Pytagoras' identitet. Den har en sterk tilknytning til Pytagoras' setning. Først skal vi merke oss at vi bruker en forenklet skrivemåte

$$
\sin^2 \varphi = (\sin \varphi)^2 \qog \cos^2 \varphi = (\cos \varphi)^2
$$


:::::::::::::::{summary} Pytagoras' identitet

:::{plot}
align: right
fontsize: 28
xlabel: $\cos \varphi$
ylabel: $\sin \varphi$
ticks: off
axis: equal
width: 350px
circle: (0, 0), 1
let: u = pi/3
point: (cos(u), sin(u))
line-segment: (0, 0), (cos(u), sin(u)), blue
angle-arc: (0, 0), 0.3, 0, u*180/pi, red, arrow
text: 0.45 * cos(u/2), 0.45 * sin(u/2), "$\varphi$", center-center
text: cos(u), sin(u), "$\vec r(\varphi)$", top-right
text: 0.5 * cos(u), 0.5 * sin(u), "$1$", top-left
:::



For alle vinkler $\varphi$ gjelder

$$
\cos^2 \varphi + \sin^2 \varphi = 1
$$



:::::{proof} Vis forklaring

Koordinatene til posisjonsvektoren $\vec r(\varphi)$ er gitt ved

$$
\vec r(\varphi) = [\cos \varphi, \sin \varphi]
$$

Siden punktet ligger på enhetssirkelen og denne sirkelen har radius lik $1$, må 

$$
\abs{\vec r(\varphi)} = 1 \limplies \abs{\vec r(\varphi)}^2 = 1
$$

Videre har vi at 

$$
\abs{\vec r(\varphi)}^2 = \cos^2 \varphi + \sin^2 \varphi
$$

Dermed må vi ha at 

$$
\cos^2 \varphi + \sin^2 \varphi = 1
$$

:::::







:::::::::::::::



---



:::::::::::::::{example} Eksempel 6
Om en vinkel $\varphi$ får du vite at

* $\varphi$ ligger i 3. kvadrant
* $\cos \varphi = -2/3$.

Finn en eksakt verdi for $\sin \varphi$.


::::{solution}
---
open:
---
Vi bruker Pytagoras' identitet:

$$
\cos^2 \varphi + \sin^2 \varphi = 1
$$

Vi setter inn verdien for $\cos \varphi$:

$$
\left(-\dfrac{2}{3}\right)^2 + \sin^2 \varphi = 1
$$

som gir

$$
\sin^2 \varphi = 1 - \dfrac{4}{9} = \dfrac{5}{9}
$$

Sinus må være negativ siden vi er i 3. kvadrant. Ergo er 

$$
\sin \varphi = -\sqrt{\dfrac{5}{9}} = -\dfrac{\sqrt{5}}{3}
$$
::::

:::::::::::::::




---


:::::::::::::::{summary} Cosinus til doble vinkler
:::{plot}
xlabel: $\cos \varphi$
ylabel: $\sin \varphi$
axis: equal
ticks: off
align: right
fontsize: 28
width: 100%
let: u = pi/3
circle: (0, 0), 1
line-segment: (0, 0), (cos(u), sin(u)), blue
line-segment: (0, 0), (cos(u), -sin(u)), blue
point: (cos(u), sin(u))
point: (cos(u), -sin(u))
angle-arc: (0, 0), 0.3, 0, u*180/pi, red, arrow
text: 0.45 * cos(u/2), 0.45 * sin(u/2), "$\varphi$", center-center
angle-arc: (0, 0), 0.25, 0, -u*180/pi, red, arrow
text: 0.45 * cos(u/2), -0.45 * sin(u/2), "$-\varphi$", center-center
text: cos(u), sin(u), "$\vec r(\varphi)$", top-right
text: cos(u), -sin(u), "$\vec r(-\varphi)$", bottom-right
:::

For alle vinkler $\varphi$ gjelder følgende identitet:

$$
\cos (2\varphi) = \cos^2 \varphi - \sin^2 \varphi
$$



:::::{proof} Vis forklaring
Koordinatene til $\vec r(\varphi)$ er gitt ved  

$$
\vec r(\varphi) = [\cos \varphi, \sin \varphi]
$$

Koordinatene til $\vec r(-\varphi)$ er gitt ved

$$
\vec r(-\varphi) = [\cos (-\varphi), \sin (-\varphi)] = [\cos \varphi, -\sin \varphi]
$$

Bruker vi den geometriske formelen for skalarproduktet får vi at 

$$
\vec r(\varphi) \cdot \vec r(-\varphi) = \abs{\vec r(\varphi)} \cdot \abs{\vec r(-\varphi)} \cdot \cos (\varphi - (-\varphi)) = 1 \cdot 1 \cdot \cos (2\varphi) = \cos (2\varphi)
$$

Videre er 

$$
\vec r(\varphi) \cdot \vec r(-\varphi) = [\cos \varphi, \sin \varphi] \cdot [\cos \varphi, -\sin \varphi] = \cos^2 \varphi - \sin^2 \varphi
$$

Altså er 

$$
\cos (2\varphi) = \cos^2 \varphi - \sin^2 \varphi
$$

:::::

:::::::::::::::


---


:::::::::::::::{example} Eksempel 6
Om en vinkel $\varphi$ får du vite at $\cos \varphi = 3/5$.  

Finn $\cos (2 \varphi)$.


::::{solution}
---
open:
---
Vi har identiteten 

$$
\cos (2\varphi) = \cos^2\varphi - \sin^2 \varphi
$$

Siden vi kjenner til $\cos \varphi$, kan vi bruke Pytagoras' identitet til å eliminere $\sin \varphi$ fra identiteten:

$$
\cos^2 \varphi + \sin^2 \varphi = 1 \liff \sin^2 \varphi = 1 - \cos^2 \varphi
$$

Vi setter inn og får:

$$
\cos (2\varphi) = \cos^2 \varphi - (1 - \cos^2 \varphi) = 2\cos^2 \varphi - 1
$$

Så regner vi ut:

$$
\cos (2\varphi) = 2 \cdot \left(\dfrac{3}{5}\right)^2 - 1 = 2 \cdot \dfrac{9}{25} - 1 = \dfrac{18}{25} - 1 = -\dfrac{7}{25}
$$

::::

:::::::::::::::



---


:::::::::::::::{summary} Sinus til doble vinkler
For alle vinkler $\varphi$ gjelder følgende identitet:

$$
\sin (2\varphi) = 2 \cdot \sin \varphi \cdot \cos \varphi
$$



:::::{proof}
:::{plot}
xlabel: $\cos \varphi$
ylabel: $\sin \varphi$
axis: equal
ticks: off
align: right
fontsize: 28
width: 350px
let: u = pi/3
circle: (0, 0), 1
line-segment: (0, 0), (cos(u), sin(u)), blue
line-segment: (0, 0), (cos(u), -sin(u)), blue
point: (cos(u), sin(u))
point: (cos(u), -sin(u))
angle-arc: (0, 0), 0.3, 0, u*180/pi, red, arrow
text: 0.45 * cos(u/2), 0.45 * sin(u/2), "$\varphi$", center-center
angle-arc: (0, 0), 0.25, 0, -u*180/pi, red, arrow
text: 0.4 * cos(u/2), -0.45 * sin(u/2), "$-\varphi$", center-center
text: cos(u), sin(u), "$P$", top-right
text: cos(u), -sin(u), "$Q$", bottom-right
line-segment: (cos(u), sin(u)), (cos(u), -sin(u)), dashed, gray
:::

Posisjonsvektoren til punktet $P$ er gitt ved

$$
\lvec{OP} = [\cos \varphi, \sin \varphi]
$$

Posisjonsvektoren til punktet $Q$ er gitt ved

$$
\lvec{OQ} = [\cos (-\varphi), \sin (-\varphi)] = [\cos \varphi, -\sin \varphi]
$$

Arealet av trekanten $OPQ$ kan regnes ut ved å rotere $\lvec{OQ}$ 90 grader i samme retning som $\varphi$:

$$
\lvec{OQ}_\perp = [\sin \varphi, \cos \varphi] 
$$

Arealet av trekanten $OPQ$ er da 

$$
\begin{align*}
T &= \dfrac{1}{2} \lvec{OP} \cdot \lvec{OQ}_\perp \\
\\
&= \dfrac{1}{2} [\cos \varphi, \sin \varphi] \cdot [\sin \varphi, \cos \varphi] \\
\\
&= \dfrac{1}{2} (\cos \varphi \cdot \sin \varphi + \sin \varphi \cdot \cos \varphi) \\
\\
&= \sin \varphi \cdot \cos \varphi
\end{align*}
$$


Vi kan også finne et uttrykk for arealet ved å bruke arealsetningen fra trigonometrien:

$$
\begin{align*}
T &= \dfrac{1}{2} \abs{\lvec{OP}} \cdot \abs{\lvec{OQ}} \cdot \sin (\varphi - (-\varphi)) \\
\\
&= \dfrac{1}{2} \cdot 1 \cdot 1 \cdot \sin (2\varphi) \\
\\
&= \dfrac{1}{2} \sin (2\varphi)
\end{align*}
$$

Vi setter de to uttrykkene lik hverandre som gir:

$$
\dfrac{1}{2} \sin (2\varphi) = \sin \varphi \cdot \cos \varphi
$$

som gir

$$
\sin (2\varphi) = 2 \cdot \sin \varphi \cdot \cos \varphi
$$




:::::

:::::::::::::::


---


:::::::::::::::{example} Eksempel 7
Om en vinkel $\varphi$ får du vite at $\sin \varphi = 4/5$ og $\varphi$ ligger i 2. kvadrant.

Finn $\sin (2 \varphi)$.

::::{solution}
---
open:
---
Vi har identiteten

$$
\sin (2\varphi) = 2 \cdot \sin \varphi \cdot \cos \varphi
$$

Videre kan vi bruke Pytagoras' identitet til å eliminere $\cos \varphi$ fra identiteten:

$$
\cos^2 \varphi + \sin^2 \varphi = 1 \liff \cos^2 \varphi = 1 - \sin^2 \varphi
$$

Siden $\varphi$ ligger i 2. kvadrant, må $\cos \varphi$ være negativ. Dermed får vi

$$
\cos \varphi = -\sqrt{1 - \sin^2 \varphi}
$$

Vi setter inn i identiteten for sinus til doble vinkler og får:

$$
\begin{align*}
\sin (2\varphi) &= 2 \cdot \sin \varphi \cdot \cos \varphi \\
\\
&= 2 \sin \varphi \cdot \left(-\sqrt{1 - \sin^2 \varphi}\right) \\
\\
&= -2 \sin \varphi \cdot \sqrt{1 - \sin^2 \varphi}
\\
&= -2 \cdot \dfrac{4}{5} \cdot \sqrt{1 - \left(\dfrac{4}{5}\right)^2} \\
\\
&= -2 \cdot \dfrac{4}{5} \cdot \sqrt{1 - \dfrac{16}{25}} \\
\\
&= -2 \cdot \dfrac{4}{5} \cdot \sqrt{\dfrac{9}{25}} \\
\\
&= -2 \cdot \dfrac{4}{5} \cdot \dfrac{3}{5} \\
\\
&= -\dfrac{24}{25}
\end{align*}
$$
::::
:::::::::::::::


---



> Identitetene nedenfor er mer generelle, og du trenger ikke å kunne dem utenat. Du skal derimot kunne bruke dem til å utlede andre identiteter og skriv om uttrykk når du jobber med trigonometriske likninger og funksjoner.


:::::::::::::::{summary} Cosinus til summer og differanser av vinkler (*)


For alle vinkler $\varphi$ og $\theta$ gjelder følgende identiteter:

$$
\begin{align*}
\cos (\varphi + \theta) &= \cos \varphi \cdot \cos \theta - \sin \varphi \cdot \sin \theta \\
\\
\cos (\varphi - \theta) &= \cos \varphi \cdot \cos \theta + \sin \varphi \cdot \sin \theta
\end{align*}
$$

Vi kan samle de to identitetene til én samlet identitet: 

$$
\cos (\varphi \pm \theta) = \cos \varphi \cdot \cos \theta \mp \sin \varphi \cdot \sin \theta
$$

Vi velger enten det øverste eller nederste fortegnet gjennom hele likningen når vi skal bruke identitetene.


:::::{proof} Vis forklaring
:::{plot}
axis: equal
ticks: off
width: 100%
align: right
fontsize: 28
circle: (0, 0), 1
let: u = pi/6
let: v = pi - pi/4
vector: (0, 0), (cos(u), sin(u)), blue
text: cos(u), sin(u), "$P$", top-right
vector: (0, 0), (cos(v), sin(v)), blue
text: cos(v), sin(v), "$Q$", top-left
point: (cos(u), sin(u))
point: (cos(v), sin(v))
angle-arc: (0, 0), 0.4, 0, u*180/pi, red, arrow
angle-arc: (0, 0), 0.25, 0, v*180/pi, red, arrow
text: 0.3 * cos(v/2), 0.4 * sin(v/2), "$\varphi$", center-center
text: 0.5 * cos(u/2), 0.45 * sin(u/2), "$\theta$", center-center
:::

Punkt $P$ har posisjonsvektoren

$$
\lvec{OP} = [\cos \theta, \sin \theta]
$$


Punktet $Q$ har posisjonsvektoren

$$
\lvec{OQ} = [\cos \varphi, \sin \varphi]
$$

Etter Pytagoras' identitet, vil begge vektorene har lengde lik $1$:

$$
\abs{\lvec{OP}} = \abs{\lvec{OQ}} = 1
$$

Vinkelen mellom $\lvec{OP}$ og $\lvec{OQ}$ er gitt ved $\varphi - \theta$. Dermed kan vi bruke formelen for skalarproduktet til å finne

$$
\lvec{OP} \cdot \lvec{OQ} = \abs{\lvec{OP}} \cdot \abs{\lvec{OQ}} \cdot \cos (\varphi - \theta) 
$$

$$
[\cos \theta, \sin \theta] \cdot [\cos \varphi, \sin \varphi] = 1 \cdot 1 \cdot \cos (\varphi - \theta)
$$

som gir

$$
\cos \theta \cdot \cos \varphi + \sin \theta \cdot \sin \varphi = \cos (\varphi - \theta)
$$

Dersom vi setter $\theta \to -\theta$ i formelen får vi:

$$
\cos (-\theta) \cdot \cos \varphi + \sin (-\theta) \cdot \sin \varphi = \cos (\varphi - (-\theta)) = \cos (\varphi + \theta)
$$

som gir 

$$
\cos \theta \cdot \cos \varphi - \sin \theta \cdot \sin \varphi = \cos (\varphi + \theta)
$$


Altså har vi at 

$$
\cos (\varphi \pm \theta) = \cos \varphi \cdot \cos \theta \mp \sin \varphi \cdot \sin \theta
$$

:::::

:::::::::::::::


---



:::::::::::::::{summary} Sinus til summer og differanser av vinkler (*)
For alle vinkler $\varphi$ og $\theta$ gjelder følgende identiteter:

$$
\begin{align*}
\sin (\varphi + \theta) &= \sin \varphi \cdot \cos \theta + \cos \varphi \cdot \sin \theta \\
\\
\sin (\varphi - \theta) &= \sin \varphi \cdot \cos \theta - \cos \varphi \cdot \sin \theta
\end{align*}
$$

Vi kan samle de to identitene til én samlet identitet:

$$
\sin (\varphi \pm \theta) = \sin \varphi \cdot \cos \theta \pm \cos \varphi \cdot \sin \theta
$$

:::::::::::::::

