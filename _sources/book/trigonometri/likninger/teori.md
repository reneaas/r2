# Likninger



:::{goals} Læringsmål
* Kunne løse grunnleggende trigonometriske likninger
* Kunne løse trigonometriske likninger ved å forenkle dem med variabelskifte
* Kunne bruke trigonometriske identiteter til å forenkle likninger til grunnleggende trigonometriske likninger
:::


Vi har sett at enhetssirkelen medfører at sinus og cosinus repeterer seg periodisk. Konsekvensen av dette er at trigonometriske likninger kan ha flere løsninger.


## Grunnlikninger


:::::::::::::::{summary} Likningen $\cos x = k$

:::{plot}
width: 100%
axis: equal
ticks: off
align: right
fontsize: 28
xlabel: $\cos x$
ylabel: $\sin x$
circle: (0, 0), 1
let: u = pi/4.5
let: v = -u
line-segment: (0, 0), (cos(u), sin(u)), blue
line-segment: (0, 0), (cos(v), sin(v)), blue
line-segment: (cos(u), sin(u)), (cos(u), 0), dashed, red
line-segment: (cos(v), sin(v)), (cos(v), 0), dashed
angle-arc: (0, 0), 0.4, 0, u * 180/pi, red, arrow
angle-arc: (0, 0), 0.3, 0, v * 180/pi, red, arrow
point: (cos(u), sin(u))
point: (cos(v), sin(v))
:::

Likningen 

$$
\cos x = k
$$

har i hvert omløp av enhetssirkelen

* to løsninger så lenge $k \in \langle -1, 1\rangle$
* når $k = -1$ eller $k = 1$ har likningen én løsning
* når $\abs{k} > 1$ har likningen ingen løsning



:::::::::::::::


---



:::::::::::::::{example} Eksempel 1
Finn de generelle løsningene til likningen

$$
\cos x = \dfrac{1}{2} 
$$



:::::{solution}
---
open:
---
:::{plot}
width: 380px
axis: equal
ticks: off
fontsize: 28
align: right
circle: (0, 0), 1
let: u = pi/3
let: v = -pi/3
line-segment: (0, 0), (cos(u), sin(u)), blue
line-segment: (0, 0), (cos(v), sin(v)), blue
line-segment: (cos(u), sin(u)), (cos(u), 0), dashed
line-segment: (cos(v), sin(v)), (cos(v), 0), dashed
angle-arc: (0, 0), 0.3, 0, u * 180/pi, red, arrow
angle-arc: (0, 0), 0.25, 0, v * 180/pi, red, arrow
point: (cos(u), sin(u))
point: (cos(v), sin(v))
xlabel: $\cos x$
ylabel: $\sin x$
text: 0.4 * cos(u/2), 0.4 * sin(u/2), "$x$", center-center
text: 0.4 * cos(v/2), 0.4 * sin(v/2), "$-x$", center-center
:::



Vi vet at i 1. kvadrant så er 

$$
\cos x = \dfrac{1}{2} \liff x = \dfrac{\pi}{3}
$$

Men det finnes også en løsning i 4. kvadrant, som er speilet om $x$-aksen. Ergo er denne løsningen:

$$
x = -\dfrac{\pi}{3}
$$


Men om vi legger til eller trekker fra $2\pi$ til disse løsningene, ender vi opp på samme sted på enhetssirkelen siden det tilsvarer å rotere et fullt omløp rundt enhetssirkelen. Og det kan vi gjøre så mange ganger vi vil. 


::::{multi-plot2}
---
rows: 1
cols: 2
---
:::{plot}
width: 100%
axis: equal
ticks: off
fontsize: 28
circle: (0, 0), 1
let: u = pi/3
line-segment: (0, 0), (cos(u), sin(u)), blue
angle-arc: (0, 0), 0.4, 0, u * 180/pi, red, arrow
angle-arc: (0, 0), 0.2, 0, (u + 6*pi) * 180/pi, purple, arrow
point: (cos(u), sin(u))
text: 0.5 * cos(u/2), 0.5 * sin(u/2), "$\frac{\pi}{3}$", center-center
text: 0.4, -0.5, "$\frac{\pi}{3} + 2\pi \cdot 3$", center-center
xlabel: $\cos x$
ylabel: $\sin x$
:::


:::{plot}
width: 100%
axis: equal
ticks: off
fontsize: 28
circle: (0, 0), 1
let: u = -pi/3
line-segment: (0, 0), (cos(u), sin(u)), blue
angle-arc: (0, 0), 0.4, 0, u * 180/pi, red, arrow
angle-arc: (0, 0), 0.2, 0, (u + 4*pi) * 180/pi, purple, arrow
point: (cos(u), sin(u))
text: 0.55 * cos(u/2), 0.5 * sin(u/2), "$-\frac{\pi}{3}$", center-center
text: -0.4, +0.4, "$-\frac{\pi}{3} + 2\pi \cdot 2$", center-center
xlabel: $\cos x$
ylabel: $\sin x$
:::
::::


Vi kan utføre vilkårlig mange omløp $n$ rundt enhetssirkelen i begge retninger.


For den første løsningen betyr det 

$$
x = \dfrac{\pi}{3} + 2\pi \cdot n \qfor n \in \mathbb{Z}
$$




For den andre løsningen betyr det at:

$$
x = -\dfrac{\pi}{3} + 2\pi \cdot n \qfor n \in \mathbb{Z}
$$



:::::


:::::::::::::::




:::::::::::::::{summary} Likningen $\sin x = k$

:::{plot}
width: 100%
axis: equal
ticks: off
align: right
fontsize: 28
xlabel: $\cos x$
ylabel: $\sin x$
circle: (0, 0), 1
let: u = pi/4.5
let: v = pi - u
line-segment: (0, 0), (cos(u), sin(u)), blue
line-segment: (0, 0), (cos(v), sin(v)), blue
line-segment: (cos(u), sin(u)), (cos(v), sin(v)), dashed, red
angle-arc: (0, 0), 0.4, 0, u * 180/pi, red, arrow
angle-arc: (0, 0), 0.3, 0, v * 180/pi, red, arrow
point: (cos(u), sin(u))
point: (cos(v), sin(v))
:::

Likningen 

$$
\sin x = k
$$

har i hvert omløp av enhetssirkelen

* to løsninger så lenge $k \in \langle -1, 1\rangle$
* når $k = -1$ eller $k = 1$ har likningen én løsning
* når $\abs{k} > 1$ har likningen ingen løsning


:::::::::::::::



---



:::::::::::::::{example} Eksempel 2
Finn løsningene til likningen

$$
\sin x = -\dfrac{\sqrt{3}}{2} \qfor x \in \langle -\pi, \pi\rangle
$$



::::{solution}
---
open:
---
:::{plot}
width: 350px
align: right
fontsize: 28
axis: equal
ticks: off
xlabel: $\cos x$
ylabel: $\sin x$
circle: (0, 0), 1
let: u = -pi/3
let: v = pi + pi/3
line-segment: (0, 0), (cos(u), sin(u)), blue
line-segment: (0, 0), (cos(v), sin(v)), blue
line-segment: (cos(u), sin(u)), (cos(v), sin(v)), dashed, red
angle-arc: (0, 0), 0.4, 0, u * 180/pi, red, arrow
angle-arc: (0, 0), 0.3, 0, v * 180/pi, red, arrow
point: (cos(u), sin(u))
point: (cos(v), sin(v))
text: 0.5 * cos(u/2), 0.5 * sin(u/2), "$x_1$", center-center
text: 0.5 * cos(v/2), 0.5 * sin(v/2), "$x_2$", center-center
:::

For likningen

$$
\sin x = -\dfrac{\sqrt{3}}{2}
$$

vil det være én vinkel i 3. kvadrant og én i 4. kvadrant per omløp i enhetssirkelen. I 4. kvadrant vil vinkelen kunne beskrives som

$$
x = -\dfrac{\pi}{3}
$$

I 3. kvadrant vil vinkelen kunne beskrives som

$$
x = \pi + \dfrac{\pi}{3} = \dfrac{4\pi}{3}
$$

Vi kan ta så mange omløp vi vil i positiv eller negativ omløpsretning som svarer til å legge til eller trekke fra $2\pi$ til vinklene. Altså blir de generelle løsningene

$$
x = -\dfrac{\pi}{3} + 2\pi \cdot n \or x = \dfrac{4\pi}{3} + 2\pi \cdot n \qfor n \in \mathbb{Z}
$$


Men siden vi skal finne løsningene $x \in \langle -\pi, \pi\rangle$, må prøve ut ulike verdier for $n$ for å sjekke hvilke løsninger som faller innenfor intervallet. For den første av løsningene får vi:


:::{table}
---
width: 70%
---
labels: $n$, $x = -\dfrac{\pi}{3} + 2\pi \cdot n$
$-1$, $-\dfrac{\pi}{3} - 2\pi = -\dfrac{7\pi}{3}$
$0$, $-\dfrac{\pi}{3}$
$1$, $-\dfrac{\pi}{3} + 2\pi = \dfrac{5\pi}{3}$
:::

Vi finner at det bare er $x = -\dfrac{\pi}{3}$ som faller innenfor intervallet $\langle -\pi, \pi\rangle$.

Så sjekker vi den andre løsningen:

:::{table}
labels: $n$, $x = \dfrac{4\pi}{3} + 2\pi \cdot n$
$-1$, $\dfrac{4\pi}{3} - 2\pi = -\dfrac{2\pi}{3}$
$0$, $\dfrac{4\pi}{3}$
$1$, $\dfrac{4\pi}{3} + 2\pi = \dfrac{10\pi}{3}$
:::

Vi ser at det bare er $x = -\dfrac{2\pi}{3}$ som faller innenfor intervallet $\langle -\pi, \pi\rangle$.

Ergo er løsningene av likningen gitt ved

$$
x = -\dfrac{\pi}{3} \or x = -\dfrac{2\pi}{3}
$$





::::


:::::::::::::::



---



:::::::::::::::{summary} Likningen $\tan x = k$
:::{plot}
width: 100%
circle: (0, 0), 1
axis: equal
ticks: off
xlabel: $\cos x$
ylabel: $\sin x$
align: right
let: u = pi/3
let: v = pi + u
line-segment: (0, 0), (cos(u), sin(u)), blue
line-segment: (0, 0), (cos(v), sin(v)), blue
angle-arc: (0, 0), 0.4, 0, u * 180/pi, red, arrow
angle-arc: (0, 0), 0.3, 0, v * 180/pi, red, arrow
point: (cos(u), sin(u))
point: (cos(v), sin(v))
text: 0.5 * cos(u/2), 0.5 * sin(u/2), "$x_1$", center-center
text: 0.5 * cos(v/2), 0.5 * sin(v/2), "$x_1 + \pi$", center-center
fontsize: 28
:::


Likningen

$$
\tan x = k
$$

har to løsninger per omløp i enhetssirkelen. Hvis én av løsningene er $x_1$, så vil de generelle løsningene være gitt ved

$$
x = x_1 + \pi\cdot n \qfor n \in \mathbb{Z}
$$
:::::::::::::::


---


:::::::::::::::{example} Eksempel 3
Løs likningen 

$$
\tan x = \sqrt{3}
$$


::::{solution}
---
open:
---
Siden $\tan x$ skal være positiv, så må løsningen ligge i 1. kvadrant eller 3. kvadrant siden $\sin x$ og $\cos x$ må ha samme fortegn. Vi skriver om likningen ved å bruke definisjonen av tangens:

$$
\dfrac{\sin x}{\cos x} = \sqrt{3} \liff \sin x = \sqrt{3} \cos x
$$

Så kvadrerer vi likningen på begge sider:

$$
\sin^2 x = 3 \cos^2 x
$$

Nå kan vi bruke Pytagoras' identitet $\sin^2 x + \cos^2 x = 1$ til å skrive om likningen:

$$
\sin^2 x = 3 (1 - \sin^2 x) \liff \sin^2 x = 3 - 3\sin^2 x \liff 4\sin^2 x = 3 \liff \sin^2 x = \dfrac{3}{4}
$$

altså er 

$$
\sin x = \dfrac{\sqrt{3}}{2}
$$

Siden vinkelen må ligge i 1. kvadrant, så har vi at én løsning er $x = \dfrac{\pi}{3}$. Resten av de generelle løsningene er da gitt ved 

$$
x = \dfrac{\pi}{3} + \pi \cdot n \qfor n \in \mathbb{Z}
$$
::::


:::::::::::::::




## Løsning med variabelskifte
I mange likninger, så jobber vi ikke med enkle uttrykk som $\cos x$ og $\sin x$, men heller mer sammensatte uttrykk som $\cos 2x$ eller $\sin \left(\dfrac{x}{2} - \pi\right)$. Da kan det være lurt å gjøre et variabelskifte for å forenkle likningen til en grunnlikning.



:::::::::::::::{example} Eksempel 4
Gitt likningen

$$
\sin \left(\pi x - \dfrac{\pi}{2}\right) = \dfrac{\sqrt{2}}{2}
$$


Finn løsningene for alle $x \in \langle -2, 2 \rangle$.


::::{solution}
---
open:
---
Gitt likningen 

$$
\sin \left(\pi x - \dfrac{\pi}{2}\right) = \dfrac{\sqrt{2}}{2}
$$

gjør vi variabelskiftet

$$
u = \pi x - \dfrac{\pi}{2}
$$

slik at likningen kan skrives om til

$$
\sin u = \dfrac{\sqrt{2}}{2}
$$

Så løser vi likningen for $u$, før vi deretter løser for $x$.

Først og fremst har vi at $\sin u = \dfrac{\sqrt{2}}{2}$ dersom

$$
u = \dfrac{\pi}{4} \or u = \pi - \dfrac{\pi}{4} = \dfrac{3\pi}{4}
$$

Men dette er bare spesielle løsninger for $u$. Vi kan legge til eller trekke fra $2\pi$ så mange ganger vi vil og fortsatt få samme sinusverdi. Dermed er de generelle løsningene:

$$
u = \dfrac{\pi}{4} + 2\pi \cdot n \or u = \dfrac{3\pi}{4} + 2\pi \cdot n \qfor n \in \mathbb{Z}
$$

Nå setter vi tilbake definisjonen av variabelen $u$ for å løse likningene for $x$:

$$
\pi x - \dfrac{\pi}{2} = \dfrac{\pi}{4} + 2\pi \cdot n \or \pi x - \dfrac{\pi}{2} = \dfrac{3\pi}{4} + 2\pi \cdot n
$$

som gir

$$
\pi x = \dfrac{\pi}{4} + \dfrac{\pi}{2} + 2\pi \cdot n \or \pi x = \dfrac{3\pi}{4} + \dfrac{\pi}{2} + 2\pi \cdot n
$$

som vi forenkler til:

$$
\pi x = \dfrac{3\pi}{4} + 2\pi \cdot n \or \pi x = \dfrac{5\pi}{4} + 2\pi \cdot n
$$

Så deler vi begge likningene med $\pi$ for å få $x$ alene:

$$
x = \dfrac{3}{4} + 2 \cdot n \or x = \dfrac{5}{4} + 2 \cdot n \qfor n \in \mathbb{Z}
$$

Så sjekker vi hvilke løsninger som ligger i intervallet $\langle -2, 2 \rangle$. For den første løsningen får vi:


:::{table}
---
width: 70%
---
labels: $n$, $x = \dfrac{3}{4} + 2 \cdot n$
$-2$, $\dfrac{3}{4} - 4 = -\dfrac{13}{4}$
$-1$, $\dfrac{3}{4} - 2 = -\dfrac{5}{4}$
$0$, $\dfrac{3}{4}$
$1$, $\dfrac{3}{4} + 2 = \dfrac{11}{4}$
$2$, $\dfrac{3}{4} + 4 = \dfrac{19}{4}$
:::

Altså ligger $x \in \left\{-\dfrac{5}{4}, \dfrac{3}{4}\right\}$ i intervallet $\langle -2, 2 \rangle$.

Så sjekker vi den andre løsningen:

:::{table}
---
width: 70%
---
labels: $n$, $x = \dfrac{5}{4} + 2 \cdot n$
$-2$, $\dfrac{5}{4} - 4 = -\dfrac{11}{4}$
$-1$, $\dfrac{5}{4} - 2 = -\dfrac{3}{4}$
$0$, $\dfrac{5}{4}$
$1$, $\dfrac{5}{4} + 2 = \dfrac{13}{4}$
$2$, $\dfrac{5}{4} + 4 = \dfrac{21}{4}$
:::

Altså ligger $x \in \left\{-\dfrac{3}{4}, \dfrac{5}{4}\right\}$ i intervallet $\langle -2, 2 \rangle$.

Ergo er alle løsningene til likningen 

$$
x \in \left\{-\dfrac{5}{4}, -\dfrac{3}{4}, \dfrac{3}{4}, \dfrac{5}{4}\right\}
$$

::::



:::::::::::::::


## Løsning med identiteter


I en del trigonometriske likninger, må vi først bruke en trigonometrisk identitet for å forenkle likningen før vi kan få en likning vi kan løse.



:::::::::::::::{example} Eksempel 5
Løs likningen

$$
\cos^2 (\pi x) - \sin^2 \left(\pi x\right) = \dfrac{1}{2} \qfor x \in \langle 0, 1\rangle
$$


::::{solution}
---
open:
---
Vi kan først merke oss at 

$$
\cos^2 (\pi x) - \sin^2 \left(\pi x\right) = \cos \left(2\pi x\right)
$$

Dermed kan vi skrive om likningen til

$$
\cos \left(2\pi x\right) = \dfrac{1}{2}
$$

Vi setter $u = 2\pi x$ for å gjøre et variabelskifte, og får

$$
\cos u = \dfrac{1}{2}
$$

Vi løser likningen for $u$ som gir oss:

$$
u = -\dfrac{\pi}{3} + 2\pi \cdot n \or u = \dfrac{\pi}{3} + 2\pi \cdot n \qfor n \in \mathbb{Z}
$$

Så setter vi tilbake definisjonen av $u$:

$$
2\pi x = -\dfrac{\pi}{3} + 2\pi \cdot n \or 2\pi x = \dfrac{\pi}{3} + 2\pi \cdot n
$$

Så deler vi med $2\pi$ for å få $x$ alene:

$$
x = -\dfrac{1}{6} + n \or x = \dfrac{1}{6} + n \qfor n \in \mathbb{Z}
$$

Vi skal bare finne spesielle løsninger for $x \in \langle 0, 1\rangle$. For den første løsningen får vi:

:::{table}
---
width: 70%
---
labels: $n$, $x = -\dfrac{1}{6} + n$
$0$, $-\dfrac{1}{6}$
$1$, $-\dfrac{1}{6} + 1 = \dfrac{5}{6}$
$2$, $-\dfrac{1}{6} + 2 = \dfrac{11}{6}$
:::

Altså er det bare $x = \dfrac{5}{6}$ som ligger i intervallet $\langle 0, 1\rangle$.

Så sjekker vi den andre løsningen:

:::{table}
---
width: 70%
---
labels: $n$, $x = \dfrac{1}{6} + n$
$0$, $\dfrac{1}{6}$
$1$, $\dfrac{1}{6} + 1 = \dfrac{7}{6}$
:::


Altså er det bare $x = \dfrac{1}{6}$ som ligger i intervallet $\langle 0, 1\rangle$. 

Den fullstendige løseningen til likningen er dermed

$$
x \in \left\{\dfrac{1}{6}, \dfrac{5}{6}\right\}
$$

::::



:::::::::::::::
