# Enhetssirkelen og radianer


:::{goals}
* utforske egenskaper ved radianer og trigonometriske funksjoner og identiteter og anvende disse egenskapene til å løse praktiske problemer
:::

## Radianer

Radianer er et absolutt vinkelmål som er bedre egnet enn grader når vi jobber med trigonometriske funksjoner. 

:::::::::::::::{summary} Definisjon: Radianer

:::{plot}
width: 100%
align: right
fontsize: 32
axis: equal
axis: off
circle: (0, 0), 1, gray
let: u = 60
line-segment: (0, 0), (1, 0), blue
line-segment: (0, 0), (cos(u*pi/180), sin(u*pi/180)), blue
angle-arc: (0, 0), 0.3, 0, u, red, arrow
text: 0.25 * (cos(u*pi/180) + 1), 0.25 * sin(u*pi/180), "$\varphi$", center-center
angle-arc: (0, 0), 1, 0, u, blue
text: 1.1 * cos(u*pi/360), 1.1 * sin(u*pi/360), "$s$", center-center
text: 0.5 * cos(u * pi/ 180), 0.5 * sin(u * pi/180), "$r$", top-left
:::

Radianer er et vinkelmål som er definert som forholdet mellom buelengden $s$ av en sirkelbue og radiusen $r$ til sirkelen:

$$
\varphi = \dfrac{s}{r}
$$


Gitt vinkelen $\varphi \degree$ i grader, så er vinkelen i radianer gitt ved 

$$
\varphi = \dfrac{\pi}{180} \cdot \varphi \degree
$$


:::::::::::::::


---


:::::::::::::::{example} Eksempel 1
:::{plot}
width: 100%
align: right
circle: (0, 0), 1
angle-arc: (0, 0), 0.3, 0, 360, red, arrow
text: 0.3, 0.3, "$\varphi$", center-center
axis: equal
grid: off
fontsize: 32
:::


En sirkel med radius $1$ har en omkrets på $2\pi$. En vinkel $\varphi$ på $360\degree$ er tegnet inn.

Finn vinkelen $\varphi$ i radianer.


::::{solution}
---
open:
---
Buelengden er lik omkretsen som er $s = 2\pi$. Radiusen er $r = 1$. Dermed blir vinkelen i radianer: 

$$
\varphi = \dfrac{s}{r} = \dfrac{2\pi}{1} = 2\pi
$$

Altså tilsvarer $2\pi$ radianer $360\degree$.
::::

:::::::::::::::


---



:::::::::::::::{example} Eksempel 2
En vinkel $\varphi = 120\degree$. 

Finn vinkelen i radianer.


::::{solution}
---
open:
---
For å omgjøre vinkelen fra grader til radianer, ganger vi med $\pi / 180$: 

$$
\varphi = 120\degree = 120\cdot \dfrac{\pi}{180} = \dfrac{2\pi}{3}
$$
::::
:::::::::::::::


---


## Enhetssirkelen

Enhetssirkelen er en sirkel med radius $1$ som lar oss definere sinus og cosinus for alle mulige vinkler.

:::::::::::::::{summary} Enhetssirkelen

:::{plot}
nocache:
width: 350px
align: right
fontsize: 28
axis: equal
ticks: off
circle: (0, 0), 1
let: u = 60
line-segment: (0, 0), (cos(u*pi/180), sin(u*pi/180)), blue
angle-arc: (0, 0), 0.3, 0, u, red, arrow
text: 0.45 * cos(u*pi/360), 0.45 * sin(u*pi/360), "$\varphi$", center-center
point: (cos(u*pi/180), sin(u*pi/180))
text: cos(u * pi/180), sin(u * pi/180), "$P(\cos \varphi, \sin \varphi)$", top-right
text: 0.5 * cos(u * pi/180), 0.5 * sin(u * pi/180), "$1$", top-left
text: 1.5, 1.5, "1. kvadrant", center-center
text: -1.5, 1.5, "2. kvadrant", center-center
text: -1.5, -1.5, "3. kvadrant", center-center
text: 1.5, -1.5, "4. kvadrant", center-center
:::


Enhetssirkelen er en sirkel med radius $1$ som er plassert i et koordinatsystem med sentrum i origo. Alle punkter på enhetssirkelen har derfor avstanden $1$ fra origo. 

Et linjestykke $OP$ fra origo ut til et punkt $P$ danner en vinkel $\varphi$ med førsteaksen. Da er koordinatene til punktet

$$
\begin{align*}
x &= \cos \varphi \\
\\
y &= \sin \varphi
\end{align*}
$$

Vi navnsetter derfor ofte $\cos \varphi$ på førsteaksen og $\sin \varphi$ på andreaksen.

:::::::::::::::


---



:::::::::::::::{example} Eksempel 3
:::{plot}
nocache:
width: 350px
align: right
fontsize: 28
axis: equal
ticks: off
circle: (0, 0), 1
let: u = 60
line-segment: (0, 0), (cos(u*pi/180), sin(u*pi/180)), blue
angle-arc: (0, 0), 0.3, 0, u, red, arrow
text: 0.45 * cos(u*pi/360), 0.45 * sin(u*pi/360), "$60^\circ$", center-center
point: (cos(u*pi/180), sin(u*pi/180))
text: cos(u * pi/180), sin(u * pi/180), "$(1/2, \sqrt{3}/2)$", top-right
text: 0.5 * cos(u * pi/180), 0.5 * sin(u * pi/180), "$1$", top-left
:::

Finn $\cos 60\degree$ og $\sin 60\degree$ ved å bruke enhetssirkelen.

Uttrykk svarene ved å bruke radianer for vinklene.


::::{solution}
---
open:
---
Per definisjon, er det $x$-koordinaten  som gir cosinusverdien og $y$-koordinaten som gir sinusverdien. Dermed har vi at

$$
\cos 60\degree = \frac{1}{2}
$$

$$
\sin 60\degree = \frac{\sqrt{3}}{2}
$$

Vi finner vinkelen i radianer:

$$
60\degree = 60 \cdot \frac{\pi}{180} = \frac{\pi}{3}
$$

Dermed blir

$$
\cos \frac{\pi}{3} = \frac{1}{2}
$$

$$
\sin \frac{\pi}{3} = \frac{\sqrt{3}}{2}
$$
::::

:::::::::::::::





---


:::::::::::::::{summary} Omløpsretning og vinkler
Når en vinkel $\varphi$ er positiv, går vinkelen mot klokka. Når vinkelen er negativ, går vinkelen med klokka. Vi sier derfor at positiv omløpsretning er mot klokka, og negativ omløpsretning er med klokka.

::::{multi-plot2}
---
rows: 1
cols: 2
---
:::{plot}
width: 100%
circle: (0, 0), 1
let: u = 60
line-segment: (0, 0), (1, 0), blue
line-segment: (0, 0), (cos(u*pi/180), sin(u*pi/180)), blue
angle-arc: (0, 0), 0.3, 0, u, red, arrow
text: 0.4 * cos(u*pi/360), 0.4 * sin(u*pi/360), "$\varphi$", center-center
axis: equal
grid: off
ticks: off
fontsize: 32
:::

:::{plot}
width: 100%
circle: (0, 0), 1
let: u = -60
line-segment: (0, 0), (1, 0), blue
line-segment: (0, 0), (cos(u*pi/180), sin(u*pi/180)), blue
angle-arc: (0, 0), 0.3, 0, u, red, arrow
text: 0.45 * cos(u*pi/360), 0.45 * sin(u*pi/360), "$-\varphi$", center-center
axis: equal
grid: off
ticks: off
fontsize: 32
:::

::::

:::::::::::::::




---




:::::::::::::::{summary} Eksaktverdier i første periode (grader)
Nedenfor ser du en figur som viser eksakte verdier for sinus og cosinus i alle kvadranter der vinkelmålet er i grader. $x$-koordinaten gir cosinusverdien og $y$-koordinaten gir sinusverdien.


:::{plot}
width: 100%
xlabel: $\cos \varphi$
ylabel: $\sin \varphi$
fontsize: 16
axis: equal
ticks: off
circle: (0, 0), 1
let: r = 1.3
let: r1 = 0.55
let: r2 = 0.85
let: ds = 0.1
line-segment: (0, 0), (r1 * cos(pi/6), r1 * sin(pi/6)), blue
line-segment: (r2 * cos(pi/6), r2 * sin(pi/6)), (cos(pi/6), sin(pi/6)), blue
text: 0.7 * cos(pi/6), 0.7 * sin(pi/6), "$30^\circ$", center-center
text: r * cos(pi/6) + ds, r * sin(pi/6) - ds, "$\left(\frac{\sqrt{3}}{2}, \frac{1}{2}\right)$", center-center
line-segment: (0, 0), (r1 * cos(pi/4), r1 * sin(pi/4)), blue
line-segment: (r2 * cos(pi/4), r2 * sin(pi/4)), (cos(pi/4), sin(pi/4)), blue
text: 0.7 * cos(pi/4), 0.7 * sin(pi/4), "$45^\circ$", center-center
text: r * cos(pi/4) + ds, r * sin(pi/4), "$\left(\frac{\sqrt{2}}{2}, \frac{\sqrt{2}}{2}\right)$", center-center
line-segment: (0, 0), (r1 * cos(pi/3), r1 * sin(pi/3)), blue
line-segment: (r2 * cos(pi/3), r2 * sin(pi/3)), (cos(pi/3), sin(pi/3)), blue
text: 0.7 * cos(pi/3), 0.7 * sin(pi/3), "$60^\circ$", center-center
text: r * cos(pi/3) - ds, r * sin(pi/3) + ds, "$\left(\frac{1}{2}, \frac{\sqrt{3}}{2}\right)$", center-center
line-segment: (0, 0), (r1 * cos(2*pi/3), r1 * sin(2*pi/3)), blue
line-segment: (r2 * cos(2*pi/3), r2 * sin(2*pi/3)), (cos(2*pi/3), sin(2*pi/3)), blue
text: 0.7 * cos(2*pi/3), 0.7 * sin(2*pi/3), "$120^\circ$", center-center
text: r * cos(2*pi/3) + ds, r * sin(2*pi/3) + ds, "$\left(-\frac{1}{2}, \frac{\sqrt{3}}{2}\right)$", center-center
line-segment: (0, 0), (r1 * cos(3*pi/4), r1 * sin(3*pi/4)), blue
line-segment: (r2 * cos(3*pi/4), r2 * sin(3*pi/4)), (cos(3*pi/4), sin(3*pi/4)), blue
text: 0.7 * cos(3*pi/4), 0.7 * sin(3*pi/4), "$135^\circ$", center-center
text: r * cos(3*pi/4) - ds, r * sin(3*pi/4), "$\left(-\frac{\sqrt{2}}{2}, \frac{\sqrt{2}}{2}\right)$", center-center
line-segment: (0, 0), (r1 * cos(5*pi/6), r1 * sin(5*pi/6)), blue
line-segment: (r2 * cos(5*pi/6), r2 * sin(5*pi/6)), (cos(5*pi/6), sin(5*pi/6)), blue
text: 0.7 * cos(5*pi/6), 0.7 * sin(5*pi/6), "$150^\circ$", center-center
text: r * cos(5*pi/6) - ds, r * sin(5*pi/6) - ds, "$\left(-\frac{\sqrt{3}}{2}, \frac{1}{2}\right)$", center-center
line-segment: (0, 0), (r1 * cos(7*pi/6), r1 * sin(7*pi/6)), blue
line-segment: (r2 * cos(7*pi/6), r2 * sin(7*pi/6)), (cos(7*pi/6), sin(7*pi/6)), blue
text: 0.7 * cos(7*pi/6), 0.7 * sin(7*pi/6), "$210^\circ$", center-center
text: r * cos(7*pi/6) - ds, r * sin(7*pi/6) + ds, "$\left(-\frac{\sqrt{3}}{2}, -\frac{1}{2}\right)$", center-center
line-segment: (0, 0), (r1 * cos(5*pi/4), r1 * sin(5*pi/4)), blue
line-segment: (r2 * cos(5*pi/4), r2 * sin(5*pi/4)), (cos(5*pi/4), sin(5*pi/4)), blue
text: 0.7 * cos(5*pi/4), 0.7 * sin(5*pi/4), "$225^\circ$", center-center
text: r * cos(5*pi/4) - ds, r * sin(5*pi/4), "$\left(-\frac{\sqrt{2}}{2}, -\frac{\sqrt{2}}{2}\right)$", center-center
line-segment: (0, 0), (r1 * cos(4*pi/3), r1 * sin(4*pi/3)), blue
line-segment: (r2 * cos(4*pi/3), r2 * sin(4*pi/3)), (cos(4*pi/3), sin(4*pi/3)), blue
text: 0.7 * cos(4*pi/3), 0.7 * sin(4*pi/3), "$240^\circ$", center-center
text: r * cos(4*pi/3) + ds, r * sin(4*pi/3) - ds, "$\left(-\frac{1}{2}, -\frac{\sqrt{3}}{2}\right)$", center-center
line-segment: (0, 0), (r1 * cos(5*pi/3), r1 * sin(5*pi/3)), blue
line-segment: (r2 * cos(5*pi/3), r2 * sin(5*pi/3)), (cos(5*pi/3), sin(5*pi/3)), blue
text: 0.7 * cos(5*pi/3), 0.7 * sin(5*pi/3), "$300^\circ$", center-center
text: r * cos(5*pi/3) - ds, r * sin(5*pi/3) - ds, "$\left(\frac{1}{2}, -\frac{\sqrt{3}}{2}\right)$", center-center
line-segment: (0, 0), (r1 * cos(7*pi/4), r1 * sin(7*pi/4)), blue
line-segment: (r2 * cos(7*pi/4), r2 * sin(7*pi/4)), (cos(7*pi/4), sin(7*pi/4)), blue
text: 0.7 * cos(7*pi/4), 0.7 * sin(7*pi/4), "$315^\circ$", center-center
text: r * cos(7*pi/4) + ds, r * sin(7*pi/4), "$\left(\frac{\sqrt{2}}{2}, -\frac{\sqrt{2}}{2}\right)$", center-center
line-segment: (0, 0), (r1 * cos(11*pi/6), r1 * sin(11*pi/6)), blue
line-segment: (r2 * cos(11*pi/6), r2 * sin(11*pi/6)), (cos(11*pi/6), sin(11*pi/6)), blue
text: 0.7 * cos(11*pi/6), 0.7 * sin(11*pi/6), "$330^\circ$", center-center
text: r * cos(11*pi/6) + ds, r * sin(11*pi/6) + ds, "$\left(\frac{\sqrt{3}}{2}, -\frac{1}{2}\right)$", center-center
point: (cos(pi/6), sin(pi/6))
point: (cos(pi/4), sin(pi/4))
point: (cos(pi/3), sin(pi/3))
point: (cos(2*pi/3), sin(2*pi/3))
point: (cos(3*pi/4), sin(3*pi/4))
point: (cos(5*pi/6), sin(5*pi/6))
point: (cos(7*pi/6), sin(7*pi/6))
point: (cos(5*pi/4), sin(5*pi/4))
point: (cos(4*pi/3), sin(4*pi/3))
point: (cos(5*pi/3), sin(5*pi/3))
point: (cos(7*pi/4), sin(7*pi/4))
point: (cos(11*pi/6), sin(11*pi/6))
:::


:::::::::::::::


---



:::::::::::::::{summary} Eksaktverdier i første periode (radianer)
Nedenfor ser du en figur som viser eksakte verdier for sinus og cosinus i alle kvadranter. $x$-koordinaten gir cosinusverdien og $y$-koordinaten gir sinusverdien.


:::{plot}
width: 100%
xlabel: $\cos \varphi$
ylabel: $\sin \varphi$
fontsize: 16
axis: equal
ticks: off
circle: (0, 0), 1
let: r = 1.3
let: r1 = 0.55
let: r2 = 0.85
let: ds = 0.1
line-segment: (0, 0), (r1 * cos(pi/6), r1 * sin(pi/6)), blue
line-segment: (r2 * cos(pi/6), r2 * sin(pi/6)), (cos(pi/6), sin(pi/6)), blue
text: 0.7 * cos(pi/6), 0.7 * sin(pi/6), "$\frac{\pi}{6}$", center-center
text: r * cos(pi/6) + ds, r * sin(pi/6) - ds, "$\left(\frac{\sqrt{3}}{2}, \frac{1}{2}\right)$", center-center
line-segment: (0, 0), (r1 * cos(pi/4), r1 * sin(pi/4)), blue
line-segment: (r2 * cos(pi/4), r2 * sin(pi/4)), (cos(pi/4), sin(pi/4)), blue
text: 0.7 * cos(pi/4), 0.7 * sin(pi/4), "$\frac{\pi}{4}$", center-center
text: r * cos(pi/4) + ds, r * sin(pi/4), "$\left(\frac{\sqrt{2}}{2}, \frac{\sqrt{2}}{2}\right)$", center-center
line-segment: (0, 0), (r1 * cos(pi/3), r1 * sin(pi/3)), blue
line-segment: (r2 * cos(pi/3), r2 * sin(pi/3)), (cos(pi/3), sin(pi/3)), blue
text: 0.7 * cos(pi/3), 0.7 * sin(pi/3), "$\frac{\pi}{3}$", center-center
text: r * cos(pi/3) - ds, r * sin(pi/3) + ds, "$\left(\frac{1}{2}, \frac{\sqrt{3}}{2}\right)$", center-center
line-segment: (0, 0), (r1 * cos(2*pi/3), r1 * sin(2*pi/3)), blue
line-segment: (r2 * cos(2*pi/3), r2 * sin(2*pi/3)), (cos(2*pi/3), sin(2*pi/3)), blue
text: 0.7 * cos(2*pi/3), 0.7 * sin(2*pi/3), "$\frac{2\pi}{3}$", center-center
text: r * cos(2*pi/3) + ds, r * sin(2*pi/3) + ds, "$\left(-\frac{1}{2}, \frac{\sqrt{3}}{2}\right)$", center-center
line-segment: (0, 0), (r1 * cos(3*pi/4), r1 * sin(3*pi/4)), blue
line-segment: (r2 * cos(3*pi/4), r2 * sin(3*pi/4)), (cos(3*pi/4), sin(3*pi/4)), blue
text: 0.7 * cos(3*pi/4), 0.7 * sin(3*pi/4), "$\frac{3\pi}{4}$", center-center
text: r * cos(3*pi/4) - ds, r * sin(3*pi/4), "$\left(-\frac{\sqrt{2}}{2}, \frac{\sqrt{2}}{2}\right)$", center-center
line-segment: (0, 0), (r1 * cos(5*pi/6), r1 * sin(5*pi/6)), blue
line-segment: (r2 * cos(5*pi/6), r2 * sin(5*pi/6)), (cos(5*pi/6), sin(5*pi/6)), blue
text: 0.7 * cos(5*pi/6), 0.7 * sin(5*pi/6), "$\frac{5\pi}{6}$", center-center
text: r * cos(5*pi/6) - ds, r * sin(5*pi/6) - ds, "$\left(-\frac{\sqrt{3}}{2}, \frac{1}{2}\right)$", center-center
line-segment: (0, 0), (r1 * cos(7*pi/6), r1 * sin(7*pi/6)), blue
line-segment: (r2 * cos(7*pi/6), r2 * sin(7*pi/6)), (cos(7*pi/6), sin(7*pi/6)), blue
text: 0.7 * cos(7*pi/6), 0.7 * sin(7*pi/6), "$\frac{7\pi}{6}$", center-center
text: r * cos(7*pi/6) - ds, r * sin(7*pi/6) + ds, "$\left(-\frac{\sqrt{3}}{2}, -\frac{1}{2}\right)$", center-center
line-segment: (0, 0), (r1 * cos(5*pi/4), r1 * sin(5*pi/4)), blue
line-segment: (r2 * cos(5*pi/4), r2 * sin(5*pi/4)), (cos(5*pi/4), sin(5*pi/4)), blue
text: 0.7 * cos(5*pi/4), 0.7 * sin(5*pi/4), "$\frac{5\pi}{4}$", center-center
text: r * cos(5*pi/4) - ds, r * sin(5*pi/4), "$\left(-\frac{\sqrt{2}}{2}, -\frac{\sqrt{2}}{2}\right)$", center-center
line-segment: (0, 0), (r1 * cos(4*pi/3), r1 * sin(4*pi/3)), blue
line-segment: (r2 * cos(4*pi/3), r2 * sin(4*pi/3)), (cos(4*pi/3), sin(4*pi/3)), blue
text: 0.7 * cos(4*pi/3), 0.7 * sin(4*pi/3), "$\frac{4\pi}{3}$", center-center
text: r * cos(4*pi/3) + ds, r * sin(4*pi/3) - ds, "$\left(-\frac{1}{2}, -\frac{\sqrt{3}}{2}\right)$", center-center
line-segment: (0, 0), (r1 * cos(5*pi/3), r1 * sin(5*pi/3)), blue
line-segment: (r2 * cos(5*pi/3), r2 * sin(5*pi/3)), (cos(5*pi/3), sin(5*pi/3)), blue
text: 0.7 * cos(5*pi/3), 0.7 * sin(5*pi/3), "$\frac{5\pi}{3}$", center-center
text: r * cos(5*pi/3) - ds, r * sin(5*pi/3) - ds, "$\left(\frac{1}{2}, -\frac{\sqrt{3}}{2}\right)$", center-center
line-segment: (0, 0), (r1 * cos(7*pi/4), r1 * sin(7*pi/4)), blue
line-segment: (r2 * cos(7*pi/4), r2 * sin(7*pi/4)), (cos(7*pi/4), sin(7*pi/4)), blue
text: 0.7 * cos(7*pi/4), 0.7 * sin(7*pi/4), "$\frac{7\pi}{4}$", center-center
text: r * cos(7*pi/4) + ds, r * sin(7*pi/4), "$\left(\frac{\sqrt{2}}{2}, -\frac{\sqrt{2}}{2}\right)$", center-center
line-segment: (0, 0), (r1 * cos(11*pi/6), r1 * sin(11*pi/6)), blue
line-segment: (r2 * cos(11*pi/6), r2 * sin(11*pi/6)), (cos(11*pi/6), sin(11*pi/6)), blue
text: 0.7 * cos(11*pi/6), 0.7 * sin(11*pi/6), "$\frac{11\pi}{6}$", center-center
text: r * cos(11*pi/6) + ds, r * sin(11*pi/6) + ds, "$\left(\frac{\sqrt{3}}{2}, -\frac{1}{2}\right)$", center-center
point: (cos(pi/6), sin(pi/6))
point: (cos(pi/4), sin(pi/4))
point: (cos(pi/3), sin(pi/3))
point: (cos(2*pi/3), sin(2*pi/3))
point: (cos(3*pi/4), sin(3*pi/4))
point: (cos(5*pi/6), sin(5*pi/6))
point: (cos(7*pi/6), sin(7*pi/6))
point: (cos(5*pi/4), sin(5*pi/4))
point: (cos(4*pi/3), sin(4*pi/3))
point: (cos(5*pi/3), sin(5*pi/3))
point: (cos(7*pi/4), sin(7*pi/4))
point: (cos(11*pi/6), sin(11*pi/6))
:::


:::::::::::::::