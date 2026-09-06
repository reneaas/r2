# Trigonometriske identiteter

:::{goals} 
* utforske egenskaper ved radianer og trigonometriske funksjoner og identiteter og anvende disse egenskapene til å løse praktiske problemer
:::



Trigonometriske identiteter lar oss omforme uttrykk med sinus og cosinus, og de lar oss regne ut eksakte verdier til en del vinkler ved å bruke de eksakte verdiene vi allerede kjenner. 

I praksis er det mange identiteter, men de fleste kan vi bruke ved hjelp av enhetssirkelen og vektorregning.


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
text: 0.5 * cos(0.5*(u + v)*pi/180), 0.5 * sin(0.5*(u + v)*pi/180), "$\varphi + \frac{\pi}{2}$", center-center
text: 0.65 * cos(0.5*(w + u)*pi/180), 0.65 * sin(0.5*(w + u)*pi/180), "$\varphi - \frac{\pi}{2}$", center-center
text: cos(u*pi/180), sin(u*pi/180), "$P$", top-right
text: cos(v*pi/180), sin(v*pi/180), "$Q$", top-left
text: cos(w*pi/180), sin(w*pi/180), "$R$", bottom-right
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
Posisjonsvektoren $\lvec{OP}$ har koordinatene:

$$
\lvec{OP} = [\cos \varphi, \sin \varphi]
$$

Vi får vektoren $\lvec{OQ}$ ved å rotere $\lvec{OP}$ mot klokka med $\pi/2$ radianer (90 grader). Da må vi bytte plass på koordinatene og endre fortegnet på den nye $x$-koordinaten:

$$
\lvec{OQ} = [-\sin \varphi, \cos \varphi] = \mqty[\cos\left(\varphi + \dfrac{\pi}{2}\right), \sin\left(\varphi + \dfrac{\pi}{2}\right)]
$$

Altså er 

$$
\begin{align*}
\cos \left(\varphi + \dfrac{\pi}{2}\right) &= -\sin \varphi \\
\\
\sin \left(\varphi + \dfrac{\pi}{2}\right) &= \cos \varphi
\end{align*}
$$

Koordinatene til $\lvec{OR}$ får vi ved å rotere $\lvec{OP}$ med $\pi/2$ radianer *med* klokka. Da bytter vi plass på koordinatene og endrer fortegnet på den nye $y$-koordinaten:

$$
\lvec{OR} = \left[\sin \varphi, -\cos \varphi\right] = \left[\cos\left(\varphi - \dfrac{\pi}{2}\right), \sin\left(\varphi - \dfrac{\pi}{2}\right)\right]
$$

Altså får vi at 

$$
\begin{align*}
\cos \left(\varphi - \dfrac{\pi}{2}\right) &= \sin \varphi \\
\\
\sin \left(\varphi - \dfrac{\pi}{2}\right) &= -\cos \varphi
\end{align*}
$$

Vi kan samle alle fire identiteter til to mer kompakte identiteter:

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
text: cos(u), sin(u), "$P$", top-left
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
Koordinatene til vektoren $\lvec{OP}$ er 

$$
\lvec{OP} = \left[\cos \dfrac{2\pi}{3}, \sin \dfrac{2\pi}{3}\right]
$$

Vi kan rotere vektoren $90$ grader *med* klokka for å få et punkt $Q$ som ligger i 1. kvadrant slik at vi kan bestemme koordinatene med en kjent vinkel:

$$
\lvec{OQ} = \left[\cos \left(\dfrac{2\pi}{3} - \dfrac{\pi}{2}\right), \sin \left(\dfrac{2\pi}{3} - \dfrac{\pi}{2}\right)\right] = \left[\cos \dfrac{\pi}{6}, \sin \dfrac{\pi}{6}\right] = \left[\dfrac{\sqrt{3}}{2}, \dfrac{1}{2}\right]
$$

Siden vi nå kjenner koordinatene til $\lvec{OQ}$, kan vi finne koordinatene til $\lvec{OP}$ ved å rotere $\lvec{OQ}$ $90$ grader *mot* klokka (altså vi bare "angrer" den opprinnelige rotasjonen). Da får vi at 

$$
\lvec{OP} = \left[-\dfrac{1}{2}, \dfrac{\sqrt{3}}{2}\right]
$$

Altså er 

$$
\cos \dfrac{2\pi}{3} = -\dfrac{1}{2} \qog \sin \dfrac{2\pi}{3} = \dfrac{\sqrt{3}}{2}
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
vector: (0, 0), (cos(w), sin(w)), purple
angle-arc: (0, 0), 0.4, 0, u*180/pi, blue, arrow
angle-arc: (0, 0), 0.3, u*180/pi, v*180/pi, red, arrow
angle-arc: (0, 0), 0.35, u*180/pi, w*180/pi, purple, arrow
text: 0.5 * cos(u/2), 0.45 * sin(u/2), "$\varphi$", center-center
text: 0.5 * cos(v/2), 0.5 * sin(v/2), "$\varphi - \pi$", center-center
text: 0.5 * cos(w/2), 0.5 * sin(w/2), "$\varphi + \pi$", center-center
line-segment: (cos(u), sin(u)), (cos(v), sin(v)), dashed, gray
point: (cos(u), sin(u))
point: (cos(v), sin(v))
text: cos(u), sin(u), "$P$", top-right
text: cos(v), sin(v), "$Q$", bottom-left
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
Vektoren $\lvec{OP}$ har koordinatene

$$
\lvec{OP} = [\cos \varphi, \sin \varphi]
$$

Punktet $Q$ får vi ved å enten rotere vektoren $\lvec{OP}$ 180 grader mot eller med klokka. Mot klokka tilsvarer $\varphi + \pi$ og med klokka tilsvarer $\varphi - \pi$. Koordinatene til $\lvec{OQ}$ vil uansett da bli

$$
\lvec{OQ} = [\cos(\varphi + \pi), \sin(\varphi + \pi)] = [\cos(\varphi - \pi), \sin(\varphi - \pi)]
$$

som vi kan samle til ett uttrykk:

$$
\lvec{OQ} = [\cos(\varphi \pm \pi), \sin(\varphi \pm \pi)]
$$

Å rotere vektoren $\lvec{OP}$ 180 grader er det samme som å finne den motsatte vektoren, som vi gjør med å gange vektoren med $-1$. Ergo må koordinatene til $\lvec{OQ}$ være

$$
\lvec{OQ} = (-1) \cdot \lvec{OP} = [-\cos \varphi, -\sin \varphi]
$$

De to uttrykkene for $\lvec{OQ}$ må være like som betyr at vi får identitene:

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
text: cos(u), sin(u), "$P$", bottom-left
:::

I figuren til høyre vises enhetssirkelen med en vinkel $\varphi = \dfrac{4\pi}{3}$ og en vektor $\lvec{OP}$. 

Finn de eksakte verdiene til 

$$
\cos \dfrac{4\pi}{3} \qog \sin \dfrac{4\pi}{3}
$$


::::{solution}
---
open:
---
Vektoren $\lvec{OP}$ har koordinatene

$$
\lvec{OP} = \left[\cos \dfrac{4\pi}{3}, \sin \dfrac{4\pi}{3}\right]
$$

Hvis vi roterer vektoren 180 grader med klokka får vi et punkt $Q$ som ligger i 1. kvadrant. Da kan vi finne koordinatene til $\lvec{OQ}$ med en kjent vinkel:

$$
\lvec{OQ} = \left[\cos \left(\dfrac{4\pi}{3} - \pi\right), \sin \left(\dfrac{4\pi}{3} - \pi\right)\right] = \left[\cos \dfrac{\pi}{3}, \sin \dfrac{\pi}{3}\right] = \left[\dfrac{1}{2}, \dfrac{\sqrt{3}}{2}\right]
$$

Vektoren $\lvec{OP}$ er bare motsatt rettet av $\lvec{OQ}$. Vi ganger derfor bare koordinatene til $\lvec{OQ}$ med $-1$ for å finne koordinatene til $\lvec{OP}$:

$$
\lvec{OP} = (-1) \cdot \lvec{OQ} = \left[-\dfrac{1}{2}, -\dfrac{\sqrt{3}}{2}\right]
$$


Altså er 

$$
\cos \dfrac{4\pi}{3} = -\dfrac{1}{2} \qog \sin \dfrac{4\pi}{3} = -\dfrac{\sqrt{3}}{2}
$$
::::

:::::::::::::::




---




:::::::::::::::{summary} Sinus og cosinus til positive og negative vinkler
:::{plot}
axis: equal
ticks: off
width: 100%
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
:::{plot}
axis: equal
ticks: off
width: 100%
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
text: cos(u*pi/180), sin(u*pi/180), "$P$", top-right
text: cos(v*pi/180), sin(v*pi/180), "$Q$", bottom-right
:::

Posisjonsvektoren $\lvec{OP}$ er gitt ved 

$$
\lvec{OP} = [\cos \varphi, \sin \varphi]
$$

Samtidig får vi koordinatene til $\lvec{OQ}$ ved å speile vektoren om $x$-aksen. Dette svarer til å endre $y$-koordinaten, men holde $x$-koordinaten uendret. Dermed får vi:

$$
\lvec{OQ} = [\cos(-\varphi), \sin(-\varphi)] = [\cos \varphi, -\sin \varphi]
$$

Men da er 

$$
\cos(-\varphi) = \cos \varphi \qog \sin(-\varphi) = -\sin \varphi
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
text: cos(u*pi/180), sin(u*pi/180), "$P$", top-right
text: cos(v*pi/180), sin(v*pi/180), "$Q$", bottom-right
:::

Fra figuren kan vi se at $x$-koordinatene til punktet $P$ og $Q$ er like, mens $y$-koordinaten har motsatt fortegn. Dermed får vi at

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
width: 100%
circle: (0, 0), 1
let: u = pi/3
point: (cos(u), sin(u))
line-segment: (0, 0), (cos(u), sin(u)), blue
angle-arc: (0, 0), 0.3, 0, u*180/pi, red, arrow
text: 0.45 * cos(u/2), 0.45 * sin(u/2), "$\varphi$", center-center
text: cos(u), sin(u), "$P(\cos \varphi, \sin \varphi)$", top-right
text: 0.5 * cos(u), 0.5 * sin(u), "$1$", top-left
:::



For alle vinkler $\varphi$ gjelder

$$
\cos^2 \varphi + \sin^2 \varphi = 1
$$



:::::{proof} Vis forklaring

Vi bruker vektorregning og regner ut lengden av posisjonsvektoren til punktet $P$:

$$
\lvec{OP} = [\cos \varphi, \sin \varphi]
$$

$$
\abs{\lvec{OP}}^2 = \lvec{OP} \cdot \lvec{OP} = [\cos \varphi, \sin \varphi] \cdot [\cos \varphi, \sin \varphi] = \cos^2 \varphi + \sin^2 \varphi
$$

Denne må være lik $1$ siden radius i sirkelen er $1$ og punktet ligger på enhetssirkelen. Dermed får vi Pytagoras' identitet:

$$
\cos^2 \varphi + \sin^2 \varphi = 1
$$

:::::







:::::::::::::::



---



:::::::::::::::{example} Eksempel 5
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
For alle vinkler $\varphi$ gjelder følgende identitet:

$$
\cos (2\varphi) = \cos^2 \varphi - \sin^2 \varphi
$$



:::::{proof} Forklaring
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
text: cos(u), sin(u), "$P$", top-right
text: cos(u), -sin(u), "$Q$", bottom-right
:::

Posisjonsvektoren til punktet $P$ er gitt ved

$$
\lvec{OP} = [\cos \varphi, \sin \varphi]
$$

Posisjonsvektoren til punktet $Q$ er gitt ved

$$
\lvec{OQ} = [\cos (-\varphi), \sin (-\varphi)] = [\cos \varphi, -\sin \varphi]
$$

Med den geometriske formelen for skalarproduktet får vi da

$$
\lvec{OP} \cdot \lvec{OQ} = \abs{\lvec{OP}} \cdot \abs{\lvec{OQ}} \cdot \cos (\varphi - (-\varphi))
$$

Siden begge punktene ligger på enhetssirkelen er $\abs{\lvec{OP}} = \abs{\lvec{OQ}} = 1$. Dermed får vi

$$
\lvec{OP} \cdot \lvec{OQ} = 1 \cdot 1 \cdot \cos (2\varphi)
$$

Regner vi ut skalarproduktet på venstre side får vi

$$
\lvec{OP} \cdot \lvec{OQ} = [\cos \varphi, \sin \varphi] \cdot [\cos \varphi, -\sin \varphi] = \cos^2 \varphi - \sin^2 \varphi
$$

Dermed følger det at 

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



> Identitetene nedenfor er mer generelle, men vi trenger dem ikke i praksis. Derfor er de markert med (*). I oppgavene får du utlede dem med rotasjoner av vektorer på enhetssirkelen.


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

