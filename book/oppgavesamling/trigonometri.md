# Oppgavesamling: Trigonometri


:::::::::::::::{exercise} Oppgave 1
Gitt vinkelen $\varphi = 150\degree$.


:::::::::::::{part} a
Bestem $\varphi$ i radianer.


:::::{answer}
$$
\varphi = \dfrac{5\pi}{6}
$$

::::{solution}
$$
\varphi = 150\degree = 150\degree \cdot \dfrac{\pi}{180\degree} = \dfrac{5\pi}{6}
$$
::::
:::::



:::::::::::::


Gitt vinkelen $\theta = -\dfrac{7\pi}{6}$


:::::::::::::{part} b
Bestem $\theta$ i grader.


:::::{answer}
$$
\theta = -210\degree
$$

::::{solution}
$$
\theta = -\dfrac{7\pi}{6} \cdot \dfrac{180\degree}{\pi} = -7 \cdot 30\degree = -210\degree
$$
::::
:::::

:::::::::::::


Gitt vinkelen $\alpha = \dfrac{19\pi}{4}$.

:::::::::::::{part} c
Bestem $\tan \alpha$.


:::::{answer}
$$
\tan \alpha = -1
$$

::::{solution}
Vi trekker fra $2\pi$ fram til vi får en vinkel som ligger i første periode $[0, 2\pi\rangle$:

$$
\dfrac{19\pi}{4} - 2\pi = \dfrac{11\pi}{4}
$$

Én gang til:

$$
\dfrac{11\pi}{4} - 2\pi = \dfrac{3\pi}{4}
$$

Dermed er

$$
\tan \alpha = \tan \left(\dfrac{3\pi}{4}\right)
$$

Siden $\dfrac{3\pi}{4}$ ligger i 2. kvadrant, 

$$
\cos \alpha = -\dfrac{\sqrt{2}}{2} \and \sin \alpha = \dfrac{\sqrt{2}}{2}
$$

Dermed får vi at 

$$
\tan \alpha = \dfrac{\sin \alpha}{\cos \alpha} = -1
$$
::::
:::::

:::::::::::::



:::::::::::::::



---



:::::::::::::::{exercise} Oppgave 2
For en vinkel $\varphi$ i 2. kvadrant er $\cos \varphi = -\dfrac{5}{13}$

:::::::::::::{part} a
Bestem $\sin \varphi$ og $\tan \varphi$.



:::::{answer}
$$
\sin \varphi = \dfrac{12}{13} \and \tan \varphi = -\dfrac{12}{5}
$$

::::{solution}
Fra Pytagoras' identitet har vi at 

$$
\cos^2 \varphi + \sin^2 \varphi = 1 \limplies \sin^2 \varphi = 1 - \cos^2 \varphi
$$

som gir 

$$
\sin^2 \varphi = 1 - \left(-\dfrac{5}{13}\right)^2 = 1 - \dfrac{25}{169} = \dfrac{169 - 25}{169}
$$

som gir

$$
\sin^2 \varphi = \dfrac{144}{169} = \dfrac{12^2}{13^2} \limplies \sin \varphi = \dfrac{12}{13}
$$

siden $\varphi$ ligger i 2. kvadrant og $\sin \varphi$ må derfor være positiv. 

Verdien til tangens får vi fra definisjonen:

$$
\tan \varphi = \dfrac{\sin \varphi}{\cos \varphi} = \dfrac{12/13}{-5/13} = -\dfrac{12}{5}
$$
::::
:::::

:::::::::::::


:::::::::::::{part} b
Bestem $\cos \left(\varphi + \dfrac{\pi}{2}\right)$.


:::::{answer}
$$
\cos\left(\varphi + \dfrac{\pi}{2}\right) = -\dfrac{12}{13}
$$

::::{solution}
Vi har at 

$$
\vec r(\varphi) = [\cos \varphi, \sin \varphi]
$$

Roterer vi denne vektoren $\dfrac{\pi}{2}$ radianer mot klokka får vi 

$$
\vec r\left(\varphi + \dfrac{\pi}{2}\right) = \mqty[\cos(\varphi + \dfrac{\pi}{2}), \sin(\varphi + \dfrac{\pi}{2})] = [-\sin \varphi, \cos \varphi]
$$

Dermed er 

$$
\cos\left(\varphi + \dfrac{\pi}{2}\right) = -\sin \varphi = -\dfrac{12}{13}
$$
::::
:::::

:::::::::::::


:::::::::::::{part} c
Bestem $\sin(\pi - \varphi)$.


:::::{answer}
$$
\sin(\pi - \varphi) = \dfrac{12}{13}
$$


::::{solution}
Her speiler vi $\vec r(\varphi) = [\cos \varphi, \sin \varphi]$ om $y$-aksen som flipper fortegnet på $x$-koordinaten, men bevarer $y$-koordinaten til vektoren. Dermed får vi at 

$$
\vec r(\pi - \varphi) = [-\cos \varphi, \sin \varphi]
$$

som betyr at 

$$
\sin (\pi - \varphi) = \sin \varphi = \dfrac{12}{13}
$$
::::
:::::

:::::::::::::


:::::::::::::{part} d
Bestem $\cos(-\varphi)$.


:::::{answer}
$$
\cos(-\varphi) = -\dfrac{5}{13}
$$

::::{solution}
Her speiler vi vektoren $\vec r(\varphi)$ om $x$-aksen som flipper fortegnet på $y$-koordinaten, men bevarer $x$-koordinaten. Altså er 

$$
\vec r(-\varphi) = [\cos \varphi, -\sin \varphi]
$$

Altså er 

$$
\cos(-\varphi) = \cos \varphi = -\dfrac{5}{13}
$$
::::
:::::



:::::::::::::



:::::::::::::{part} e
Bestem $\sin \left(\dfrac{\pi}{2} - \varphi\right)$.


:::::{answer}
$$
\sin \left(\dfrac{\pi}{2} - \varphi\right) = -\dfrac{5}{13}
$$

::::{solution}
Her deler vi opp beregninger i to deler:
1. Først speiler vi $\vec r(\varphi)$ om $x$-aksen for å få $\vec r(-\varphi)$.
2. Deretter roterer vi $\vec r(-\varphi)$ $\dfrac{\pi}{2}$ radianer mot klokka for å få $\vec r\left(\dfrac{\pi}{2} - \varphi\right)$.

Vi starter fra vektoren:

$$
\vec r(\varphi) = [\cos \varphi, \sin \varphi]
$$

Så speiler vi om $x$-aksen for å få 

$$
\vec r(-\varphi) = [\cos \varphi, -\sin \varphi]
$$

Så roterer vi vektoren med $\dfrac{\pi}{2}$ radianer mot klokka som gir (bytt om på $x$- og $y$-koordinatene og deretter bytt fortegn på den nye $x$-koordinaten):

$$
\vec r\left(\dfrac{\pi}{2} - \varphi\right) = [\sin \varphi, \cos \varphi]
$$

Dermed er 

$$
\sin \left(\dfrac{\pi}{2} - \varphi\right) = \cos \varphi = -\dfrac{5}{13}
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
\sqrt{2}\cos \left(\dfrac{\pi}{4}x\right) = 1 \qfor x \in [0, 10\rangle.
$$

:::::{answer}
$$
x \in \{1, 7, 9\}
$$


::::{solution}
Vi skriver om likningen til

$$
\cos \left(\dfrac{\pi}{4}x\right) = \dfrac{1}{\sqrt{2}}  = \dfrac{\sqrt{2}}{2}
$$

Da får vi at 

$$
\dfrac{\pi}{4}x = \pm \dfrac{\pi}{4} + 2\pi k
$$

$$
x = \pm 1 + 8k
$$

som vi kan skrive som løsninger:

$$
x = -1 + 8k \or x = 1 + 8k
$$

Vi må hente ut løsningene som ligger i intervallet $[0, 10\rangle$. Den første løsningen gir at 

$$
x = 7
$$

og den andre løsningen gir at 

$$
x = 1 \or x = 9
$$

Dermed er løsningene til likningen:

$$
x \in \{1, 7, 9\}
$$

::::

:::::

:::::::::::::


:::::::::::::{part} b
Løs likningen

$$
2\sin \left(\dfrac{\pi}{3}x + \dfrac{\pi}{3}\right) - \sqrt{3} = 0 \qfor x \in [-8, 8\rangle.
$$


:::::{answer}
$$
x \in \{-6, -5, 0, 1, 6, 7\}
$$

::::{solution}
Vi lar $u = \dfrac{\pi}{3}x + \dfrac{\pi}{3}$ slik at likningen blir

$$
2 \sin u - \sqrt{3} = 0 \liff \sin u = \dfrac{\sqrt{3}}{2}
$$

som har de generelle løsningene

$$
u = \dfrac{\pi}{3} + 2\pi k \or u = \dfrac{2\pi}{3} + 2\pi k
$$

så setter vi tilbake definisjonen av $u$ og løser for $x$:

$$
\dfrac{\pi}{3}x + \dfrac{\pi}{3} = \dfrac{\pi}{3} + 2\pi k \or \dfrac{\pi}{3}x + \dfrac{\pi}{3} = \dfrac{2\pi}{3} + 2\pi k
$$

$$
x + 1 = 1 + 6k \or x + 1 = 2 + 6k
$$

$$
x = 6k \or x = 1 + 6k
$$

Så må vi finne løsningene som ligger i intervallet $[-8, 8\rangle$. Den første løsningen gir da at 

$$
x \in \{-6, 0, 6\}
$$

Den andre løsningen gir at 

$$
x \in \{-5, 1, 7\}
$$

Dermed er løsningene til likningen:

$$
x \in \{-6, -5, 0, 1, 6, 7\}
$$
::::
:::::

:::::::::::::


:::::::::::::{part} c
Løs likningen

$$
\cos^2 x + \cos x = 0 \qder x \in [0, 2\pi\rangle
$$


:::::{answer}
$$
x \in \left\{\dfrac{\pi}{2}, \pi, \dfrac{3\pi}{2}\right\}
$$

::::{solution}
Vi skriver om likningen ved å faktorisere ut én faktor av $\cos x$ som gir:

$$
\cos x \cdot (\cos x + 1) = 0
$$

som derfor gir at 

$$
\cos x = 0 \or \cos x = -1
$$

Den første likningen gir at 

$$
x = \dfrac{\pi}{2} + \pi k
$$

Den andre gir at 

$$
x = \pi + 2\pi k
$$

Dermed er den generelle løsningen til likningen gitt ved

$$
x = \dfrac{\pi}{2} + \pi k \or x = \pi + 2\pi k
$$

Løsningene som ligger i intervallet $[0, 2\pi\rangle$ er da 

$$
x \in \left\{\dfrac{\pi}{2}, \pi, \dfrac{3\pi}{2}\right\}
$$
::::
:::::


:::::::::::::


:::::::::::::{part} d
Løs likningen

$$
2\sin^2 (2x) + \sin (2x) = 1 \qder x \in [0, \pi\rangle
$$


:::::{answer}
$$
x \in \left\{\dfrac{\pi}{12}, \dfrac{5\pi}{12}, \dfrac{3\pi}{4}\right\}
$$

::::{solution}
Vi lar $u = \sin(2x)$ slik at likningen kan skrives om til

$$
2u^2 + u = 1 \liff 2u^2 + u - 1 = 0
$$

Så bruker vi $abc$-formelen for å bestemme $u$:

$$
u = \dfrac{-1 \pm \sqrt{1 + 8}}{4} = \dfrac{-1 \pm 3}{4} = \begin{cases} \dfrac{1}{2} \\ \\ -1 \end{cases}
$$

Altså er 

$$
u = \dfrac{1}{2} \or u = -1
$$

$$
\sin(2x) = \dfrac{1}{2} \or \sin(2x) = -1
$$

Den første likningen gir at 

$$
2x = \dfrac{\pi}{6} + 2\pi k \or 2x = \dfrac{5\pi}{6} + 2\pi k
$$

som gir at 

$$
x = \dfrac{\pi}{12} + \pi k \or x = \dfrac{5\pi}{12} + \pi k
$$

Løsningene til denne likningen som ligger i intervallet $[0, \pi\rangle$ er da 

$$
x \in \left\{\dfrac{\pi}{12}, \dfrac{5\pi}{12}\right\}
$$

Den andre likningen gir at 

$$
2x = \dfrac{3\pi}{2} + 2\pi k
$$

som gir at 

$$
x = \dfrac{3\pi}{4} + \pi k
$$

Løsningene til denne likningen som ligger i intervallet $[0, \pi\rangle$ er da 

$$
x \in \left\{\dfrac{3\pi}{4}\right\}
$$


Dermed er løsningen til likningen i intervallet $[0, \pi\rangle$ gitt ved

$$
x \in \left\{\dfrac{\pi}{12}, \dfrac{5\pi}{12}, \dfrac{3\pi}{4}\right\}
$$




::::
:::::



:::::::::::::



:::::::::::::::


---



:::::::::::::::{exercise} Oppgave 4


:::::::::::::{part} a

:::{plot}
width: 350px
align: right
let: A = 3
let: d = -2
let: T = pi/2
let: x0 = pi/4
let: omega = 2 * pi / T
let: phi = omega * x0
function: A * cos(omega * x - phi) + d, f
xtick-format: pi
xmin: 0
xmax: 2 * pi
xstep: pi/4
fontsize: 26
:::


Grafen til funksjonen $f$ er vist til høyre.

Bestem et mulig uttrykk for $f(x)$.

:::::{answer}
$$
f(x) = 3 \cos(4x - \pi) - 2
$$


::::{solution}
Vi velger å bruke 

$$
f(x) = A \cos(\omega x - \varphi) + d
$$

Vi har at 

$$
A = \dfrac{1 - (-5)}{2} = \dfrac{1 + 5}{2} = 3 \and d = \dfrac{1 - 5}{2} = -2
$$

Perioden er 

$$
T = \dfrac{3\pi}{4} - \dfrac{\pi}{4} = \dfrac{2\pi}{4} = \dfrac{\pi}{2}
$$

som gir vinkelfrekvensen

$$
\omega = \dfrac{2\pi}{T} = \dfrac{2\pi}{\pi/2} = 4
$$

Faseforskyvningen er 

$$
\dfrac{\varphi}{\omega} = \dfrac{\pi}{4} \limplies \varphi = \dfrac{\pi}{4}\omega = \pi
$$

Altså er 

$$
f(x) = 3 \cos(4x - \pi) - 2
$$

::::


:::::


:::::::::::::


:::::::::::::{part} b

:::{plot}
width: 350px
align: right
let: A = 2
let: d = 1
let: T = 5
let: x0 = 2
let: omega = 2 * pi / T
let: phi = omega * x0
function: A * sin(omega * x - phi) + d, g
fontsize: 26
:::

Grafen til funksjonen $g$ er vist til høyre.

Bestem et mulig uttrykk for $g(x)$.


:::::{answer}
$$
g(x) = 2\sin\left(\dfrac{2\pi}{5}x - \dfrac{4\pi}{5}\right) + 1
$$



::::{solution}
Her velger vi å bruke 

$$
g(x) = A \sin(\omega x - \varphi) + d
$$

Vi har at 

$$
A = \dfrac{3 - (-1)}{2} = 2 \and d = \dfrac{3 - 1}{2} = 1
$$

Perioden er 

$$
T = 2 - (-3) = 5
$$

som gir vinkelfrekvensen

$$
\omega = \dfrac{2\pi}{T} = \dfrac{2\pi}{5}
$$

Faseforskyvningen er avstanden fra $y$-aksen til første gang grafen skjærer likevektslinja på vei opp som er gitt ved 

$$
\dfrac{\varphi}{\omega} = 2 \limplies \varphi = 2 \omega = \dfrac{4\pi}{5}
$$

Dermed er 

$$
g(x) = 2 \sin\left(\dfrac{2\pi}{5}x - \dfrac{4\pi}{5}\right) + 1
$$

::::


:::::


:::::::::::::


:::::::::::::{part} c

:::{plot}
width: 350px
align: right
let: A = 4
let: d = 2
let: T = 3
let: x0 = 1
let: omega = 2 * pi / T
let: phi = omega * x0
function: A * cos(omega * x - phi) + d, h
fontsize: 26
ymin: -4
ymax: 8
:::

Grafen til funksjonen $h$ er vist til høyre.

Bestem et mulig uttrykk for $h(x)$.

:::::{answer}
$$
h(x) = 4 \cos \left(\dfrac{2\pi}{3}x - \dfrac{2\pi}{3}\right) + 2
$$


::::{solution}
Vi velger cosinusfunksjonen siden vi kan tydelige lese av toppunkter, men ikke skjæring med likevektslinja:

$$
h(x) = A \cos(\omega x - \varphi) + d
$$

Vi har at 

$$
A = \dfrac{6 - (-2)}{2} = 4 \and d = \dfrac{6 - 2}{2} = 2
$$

Perioden er 

$$
T = 4 - 1 = 3
$$

som gir vinkelfrekvensen

$$
\omega = \dfrac{2\pi}{T} = \dfrac{2\pi}{3}
$$

Faseforskyvningen er lik avstanden fra $y$-aksen til første toppunkt som gir:

$$
\dfrac{\varphi}{\omega} = 1 \limplies \varphi = \omega = \dfrac{2\pi}{3}
$$

Dermed er 

$$
h(x) = 4 \cos\left(\dfrac{2\pi}{3}x - \dfrac{2\pi}{3}\right) + 2
$$

::::


:::::

:::::::::::::


:::::::::::::::


---


:::::::::::::::{exercise} Oppgave 5
Funksjonen $f$ er gitt ved 

$$
f(x) = 6 \sin\left(\dfrac{\pi}{6}x - \dfrac{\pi}{3}\right) - 3 \qder D_f = [0, 24\rangle
$$


:::::::::::::{part} a
Bestem grafens amplitude, likevektslinje, periode og faseforskyvning.


:::::{answer}
$$
A = 6 \and d = -3 \and T = 12 \and \dfrac{\varphi}{\omega} = 2
$$


::::{solution}
Vi kan lese av direkte at 

* Amplituden er $A = 6$
* Likevektslinja er $d = -3$

Vinkelfrekvensen er gitt ved 

$$
\omega = \dfrac{\pi}{6} \and \omega = \dfrac{2\pi}{T}
$$

som gir at perioden er 

$$
T = \dfrac{2\pi}{\omega} = \dfrac{2\pi}{\pi / 6} = 12
$$

Til slutt finner vi faseforskyvningen

$$
\dfrac{\varphi}{\omega} = \dfrac{\pi / 3}{\pi / 6} = 2
$$

Dermed er 

$$
A = 6 \and d = -3 \and T = 12 \and \dfrac{\varphi}{\omega} = 2
$$

::::

:::::

:::::::::::::


:::::::::::::{part} b
Bestem nullpunktene til $f$.


:::::{answer}
$$
x \in \{3, 7, 15, 19\}
$$

::::{solution}
Vi løser likningen $f(x) = 0$:

$$
6 \sin\left(\dfrac{\pi}{6}x - \dfrac{\pi}{3}\right) - 3 = 0
$$

Ved å sette $u = \dfrac{\pi}{6}x - \dfrac{\pi}{3}$ får vi da 

$$
6 \sin u - 3 = 0 \liff \sin u = \dfrac{1}{2}
$$

som har de generelle løsningene

$$
u = \dfrac{\pi}{6} + 2\pi k \or u = \dfrac{5\pi}{6} + 2\pi k
$$

så setter vi tilbake definisjonen av $u$ og løser for $x$. Den første av de to løsningene gir:

$$
\dfrac{\pi}{6}x - \dfrac{\pi}{3} = \dfrac{\pi}{6} + 2\pi k
$$

$$
x - 2 = 1 + 12k \liff x = 3 + 12 k
$$

Den andre av de to løsningene gir

$$
\dfrac{\pi}{6}x - \dfrac{\pi}{3} = \dfrac{5\pi}{6} + 2\pi k
$$

$$
x - 2 = 5 + 12k
$$

$$
x = 7 + 12k
$$

Dermed er 

$$
x = 3 + 12k \or x = 7 + 12 k
$$

Løsningene som ligger innenfor definisjonsmengden $D_f = [0, 24\rangle$ er

$$
x \in \{3, 7, 15, 19\}
$$


::::
:::::

:::::::::::::


:::::::::::::{part} c
Bestem koordinatene til $f$ sine topp- og bunnpunkter.


:::::{answer}
* Toppunkter: $\{(5, 3), (17, 3)\}$
* Bunnpunkter: $\{(11, -9), (23, -9)\}$

::::{solution}
Toppunktene til grafen til $f$ får vi ved å løse 

$$
\sin u = 1 \qder u = \dfrac{\pi}{6}x - \dfrac{\pi}{3}
$$

Da får vi at 

$$
u = \dfrac{\pi}{2} + 2\pi k
$$

som gir 

$$
\dfrac{\pi}{6}x - \dfrac{\pi}{3} = \dfrac{\pi}{2} + 2\pi k
$$

$$
x - 2 = 3 + 12k
$$

$$
x = 5 + 12 k
$$

Det betyr at alle $x$-koordinatene som gir toppunkter i $D_f$ er

$$
x \in \{5, 17\}
$$

Her vil $y_\mathrm{topp} = A + d = 6 - 3 = 3$. Dermed er toppunktene gitt ved 

$$
\mathrm{Toppunkter} = \{(5, 3), (17, 3)\}
$$

Bunnpunktene vil ligge en halv periode $\dfrac{T}{2} = 6$ unna hvert toppunkt, så $x$-koordinatene deres vil derfor være

$$
x \in \{11, 23\}
$$

Vi har at $y_\mathrm{bunn} = -A + d = -6 - 3 = -9$. Dermed er bunnpunktene til grafen

$$
\mathrm{Bunnpunkter} = \{(11, -9), (23, -9)\}
$$

::::
:::::

:::::::::::::


:::::::::::::{part} d
Tegn en skisse av grafen til $f$.


:::::{answer}

:::{plot}
width: 70%
function: 6 * sin(pi/6 * x - pi/3) - 3, [0, 24], f
point: (3, 0)
text: 3, 0, "$(3, 0)$", top-left
point: (7, 0)
text: 7, 0, "$(7, 0)$", top-right
point: (15, 0)
text: 15, 0, "$(15, 0)$", top-left
point: (19, 0)
text: 19, 0, "$(19, 0)$", top-right
point: (5, 3)
text: 5, 3, "$(5, 3)$", top-center
point: (17, 3)
text: 17, 3, "$(17, 3)$", top-center
point: (11, -9)
text: 11, -9, "$(11, -9)$", bottom-center
point: (23, -9)
text: 23, -9, "$(23, -9)$", bottom-center
ticks: off
fontsize: 24
xmin: 0
xmax: 24
ymin: -10
ymax: 5
:::

:::::



:::::::::::::

:::::::::::::::



---



:::::::::::::::{exercise} Oppgave 6




:::::::::::::{part} a
Gitt likningen

$$
\left(\sin x - \dfrac{\sqrt{3}}{2}\right) (\sin (ax) - 1) = 0 \qder x \in [0, 2\pi\rangle
$$

der $a$ er et positivt heltall.

Bestem $a$ slik at likningen har 8 løsninger. 


:::::{answer}
$$
a = 6
$$


::::{solution}
Vi har at 

$$
\left(\sin x - \dfrac{\sqrt{3}}{2}\right) (\sin (ax) - 1) = 0
$$

gir 

$$
\left(\sin x - \dfrac{\sqrt{3}}{2}\right) = 0 \or \sin(ax) = 1
$$

Den første av de to likningene har to løsninger per omløp i enhetssirkelen. Den andre likningen gir at 

$$
ax = \dfrac{\pi}{2} + 2\pi k
$$

som gir 

$$
x = \dfrac{\pi}{2a} + \dfrac{2\pi}{a} k
$$

Denne likningen vil ha $a$ løsninger per omløp i enhetssirkelen. Dermed må 

$$
a = 6
$$

for at likningen skal ha 8 løsninger. 

::::
:::::

:::::::::::::


:::::::::::::{part} b
Gitt likningen

$$
\cos(2x) - \cos x = 0 \qder x \in [-a\pi, a\pi\rangle
$$

der $a$ er positivt heltall.

Bestem $a$ slik at likningen har 6 løsninger.

:::::{answer}
$$
a = 2
$$


::::{solution}
Vi bruker at 

$$
\cos(2x) = \cos^2 x - \sin^2 x = \cos^2 x - (1 - \cos^2 x) = 2\cos^2 x - 1
$$

Da får vi at likningen kan skrives om til

$$
\cos(2x) - \cos x = 0
$$

$$
2\cos^2 x - \cos x - 1 = 0
$$

Vi setter $u = \cos x$ som gir likningen

$$
2u^2 - u - 1 = 0
$$

som med $abc$-formelen gir at 

$$
u = \dfrac{1\pm \sqrt{1 + 8}}{4} = \dfrac{1 \pm 3}{4} = \begin{cases} 1 \\ \\ -\dfrac{1}{2} \end{cases}
$$

som betyr at 

$$
u = 1 \or u = -\dfrac{1}{2}
$$

$$
\cos x = 1 \or \cos x = -\dfrac{1}{2}
$$

Den første likningen vil ha én løsning i hvert omløp på enhetssirkelen. Den andre likningen vil ha to løsninger for hvert omløp på enhetssirkelen. Verdien til $a$ angir antall runder rundt enhetssirkelen siden intervallet er $[-a\pi, a\pi\rangle$. 

Dermed vil antall løsninger per omløp $a$ være $3a$. Siden vi skal bestemme $a$ slik at vi får $6$ løsninger har vi at 

$$
3a = 6 \liff a = 2
$$

Dermed vil $a = 2$ gjøre at likningen får $6$ løsninger.
::::


:::::
:::::::::::::


:::::::::::::{part} c
Gitt likningen

$$
\tan\left(\dfrac{\pi}{2}x\right) = 1 \qder x \in [0, a] \qog a \in \real
$$

Bestem den laveste positive verdien av $a$ som gjør at likningen har 5 løsninger.

:::::{answer}
$$
a = \dfrac{17}{2}
$$


::::{solution}
Vi har at 

$$
\tan\left(\dfrac{\pi}{2}x\right) = 1
$$

har de generelle løsningene

$$
\dfrac{\pi}{2}x = \dfrac{\pi}{4} + \pi k
$$

siden $\tan u = 1$ skjer enten ved $u = \dfrac{\pi}{4}$ eller $u = \dfrac{\pi}{4} + \pi$ (det vil si *midt* i 1. kvadrant eller *midt* i 3. kvadrant).

Den generelle løsningen blir derfor

$$
x = \dfrac{1}{2} + 2k
$$

Den 5. løsningen får vi ved å sette inn $k = 4$ som gir 

$$
x = \dfrac{1}{2} + 2 \cdot 4 = \dfrac{17}{2}
$$

Dette er den minste verdien for $a$ siden intervallet er $[0, a]$. Ergo er 

$$
a = \dfrac{17}{2}
$$


::::


:::::

:::::::::::::


:::::::::::::::



---



:::::::::::::::{exercise} Oppgave 7
Gitt likningen

$$
\cos\left(\dfrac{\pi}{4}x\right) - \sin\left(\dfrac{\pi}{4}x\right) = A \cos(\omega x - \varphi)
$$

:::::::::::::{part} a
Bestem $A$, $\omega$ og $\varphi$ slik at likningen er en identitet.


:::::{answer}

$$
A = \sqrt{2} \and \omega = \dfrac{\pi}{4} \and \varphi = -\dfrac{\pi}{4}
$$

::::{solution}
Vinkelfrekvensen vil være lik i begge uttrykk slik at $\omega = \dfrac{\pi}{4}$.

Videre har vi at 

$$
a = 1 \and b = -1
$$

som gir at 

$$
A = \sqrt{1^2 + (-1)^2} = \sqrt{1 + 1} = \sqrt{2}
$$

Videre er 

$$
a = A \cos \varphi \and b = A \sin \varphi 
$$

$$
1 = \sqrt{2} \cos \varphi \and -1 = \sqrt{2} \sin \varphi
$$

$$
\cos \varphi = \dfrac{1}{\sqrt{2}} \and \sin \varphi = -\dfrac{1}{\sqrt{2}}
$$

$$
\cos \varphi = \dfrac{\sqrt{2}}{2} \and \sin \varphi = -\dfrac{\sqrt{2}}{2}
$$

som betyr at 

$$
\varphi = -\dfrac{\pi}{4}
$$

Dermed er 

$$
A = \sqrt{2} \and \omega = \dfrac{\pi}{4} \and \varphi = -\dfrac{\pi}{4}
$$
::::
:::::

:::::::::::::



:::::::::::::{part} b
Løs likningen

$$
\cos\left(\dfrac{\pi}{4}x\right) - \sin\left(\dfrac{\pi}{4}x\right) = -\sqrt{2} \qfor x \in [-10, 10]
$$


:::::{answer}

$$
x \in \{-5, 3\}
$$


::::{solution}
Likningen kan skrives om til

$$
\cos\left(\dfrac{\pi}{4}x\right) - \sin\left(\dfrac{\pi}{4}x\right) = -\sqrt{2}
$$

$$
\sqrt{2} \cos\left(\dfrac{\pi}{4}x + \dfrac{\pi}{4}\right) = -\sqrt{2}
$$

som gir at 

$$
\cos\left(\dfrac{\pi}{4}x + \dfrac{\pi}{4}\right) = -1
$$

Vi har dermed at 

$$
\dfrac{\pi}{4}x + \dfrac{\pi}{4} = \pi + 2\pi k
$$

som gir at 

$$
x + 1 = 4 + 8k
$$

$$
x = 3 + 8k
$$

Løsningene som ligger i intervallet $[-10, 10]$ er da 

$$
x \in \{-5, 3\}
$$



::::
:::::



:::::::::::::


:::::::::::::::


---



:::::::::::::::{exercise} Oppgave 8
:::::::::::::{part} a
:::{plot}
width: 350px
fontsize: 26
align: right
let: A = 4
let: T = 6
let: x0 = 2
let: d = 1
let: omega = 2 * pi / T
let: phi = x0 * omega
function: A * cos(omega * x - phi) + d, f
point: (-4, 5)
text: -4, 5, "$(-4, 5)$", top-center
point: (5, -3)
text: 5, -3, "$(5, -3)$", bottom-center
ticks: off
:::

Grafen til en trigonometrisk funksjon $f$ er vist til høyre.

Bestem et mulig uttrykk for $f(x)$.


:::::{answer}
$$
f(x) = 4 \cos\left(\dfrac{\pi}{3}x - \dfrac{2\pi}{3}\right) + 1
$$

::::{solution}
Vi har et toppunkt i $(-4, 5)$ og et bunnpunkt i $(5, -3)$. Amplituden blir derfor 

$$
A = \dfrac{5 - (-3)}{2} = 4
$$

og likevektslinja er 

$$
d = \dfrac{5 - 3}{2} = 1
$$

For å finne perioden $T$ kan vi merke oss at toppunktet og bunnpunktet ligger en avstand $T + T/2$ fra hverandre siden avstanden mellom to toppunkter er $T$ og avstanden mellom et toppunkt og et bunnpunkt er $T/2$. Altså får vi at 

$$
T + \dfrac{T}{2} = 5 - (-4) = 9
$$

$$
\dfrac{3T}{2} = 9 \limplies T = 6
$$

Dermed blir vinkelfrekvensen

$$
\omega = \dfrac{2\pi}{T} = \dfrac{2\pi}{6} = \dfrac{\pi}{3}
$$

Vi velger å bruke en cosinusfunksjon som betyr at faseforskyvningen $\varphi / \omega$ er avstanden fra $y$-aksen til det første toppunktet. Koordinatene til dette toppunktet ligger en avstanden $T = 6$ fra toppunktet $(-4, 5)$ som betyr at det har koordinatene $(2, 5)$. Dermed er 

$$
\dfrac{\varphi}{\omega} = 2 \limplies \varphi = 2\omega = \dfrac{2\pi}{3}
$$

Dermed er 

$$
f(x) = A\cos(\omega x - \varphi) + d = 4 \cos\left(\dfrac{\pi}{3}x - \dfrac{2\pi}{3}\right) + 1
$$

::::
:::::

:::::::::::::


:::::::::::::{part} b
:::{plot}
width: 350px
fontsize: 26
align: right
let: A = 4
let: T = 16
let: x0 = 6
let: d = -2
let: omega = 2 * pi / T
let: phi = x0 * omega
function: A * sin(omega * x - phi) + d, g
xmin: -6
xmax: 24
ymin: -8
xstep: 2
hline: d
point: (14, -2)
text: 14, -2, "$(14, -2)$", bottom-left
point: (18, -6)
text: 18, -6, "$(18, -6)$", bottom-center
ticks: off
:::

Grafen til en trigonometrisk funksjon $g$ er vist til høyre.

Bestem et mulig uttrykk for $g(x)$.


:::::{answer}
$$
g(x) = 4 \cos\left(\dfrac{\pi}{8}x - \dfrac{5\pi}{4}\right) - 2
$$


::::{solution}
Vi kan umiddelbart konkludere at likevektslinja gir $d = -2$.

Amplituden er avstanden fra likevektslinja til bunnpunktet som gir

$$
A = \abs{-2 - (-6)} = 4
$$

Hvis $T$ er perioden til grafen, så får vi at 

$$
\dfrac{T}{4} = 18 - 14 = 4 \limplies T = 16
$$

Derfor er vinkelfrekvensen

$$
\omega = \dfrac{2\pi}{16} = \dfrac{\pi}{8}
$$

Vi velger å bruke en cosinusfunksjon her, slik at faseforskyvningen $\varphi / \omega$ er lik avstanden fra $y$-aksen til det første toppunktet til høyre for $y$-aksen. $x$-koordinaten til dette punktet vil ligge en kvart periode fra $(14, -2)$ som betyr at 

$$
\dfrac{\varphi}{\omega} = 14 - \dfrac{T}{4} = 14 - 4 = 10
$$

Derfor er 

$$
\varphi = 10 \omega = 10\cdot \dfrac{\pi}{8} = \dfrac{5\pi}{4}
$$

Dermed er 

$$
g(x) = A \cos(\omega x - \varphi) + d = 4 \cos\left(\dfrac{\pi}{8}x - \dfrac{5\pi}{4}\right) - 2
$$


::::
:::::
:::::::::::::


:::::::::::::::



---


:::::::::::::::{exercise} Oppgave 9

:::::::::::::{part} a
Funksjonen $f$ er gitt ved 

$$
f(x) = 3 \sin \left(2x - 4\right) - 1
$$

Bestem likningen til tangenten til grafen til $f$ i $(2, f(2))$.

:::::{answer}
$$
y = 6x - 13
$$
:::::

:::::::::::::


:::::::::::::{part} b
Funksjonen $g$ er gitt ved 

$$
g(x) = A \sin(3x - 9) + d
$$

En tangent til grafen til $g$ har likningen $y = 6x - 14$ og tangerer grafen i $(3, g(3))$. 

Bestem $A$ og $d$.

:::::{answer}
$$
A = 2 \and d = 4
$$
:::::
:::::::::::::

:::::::::::::::


---



:::::::::::::::{exercise} Oppgave 10

En sinusfunksjon $f$ kan beskrives som

$$
f(x) = A\cos(\omega x - \varphi) + d \qeller f(x) = A \sin (\omega x - \theta) + d
$$

der $\theta = \varphi - \dfrac{\pi}{2}$.


:::::::::::::{part} a
Vis at det største mulige stigningstallet en tangent til grafen til $f$ kan ha er lik $A\omega$.


::::{solution}
Vi har at 

$$
f'(x) = -A\omega \sin(\omega x - \varphi) \qeller f'(x) = A\omega \cos(\omega x - \theta)
$$

I begge tilfeller er likevektslinja til den deriverte er lik $0$ og amplituden er $A \omega$. Dermed blir

$$
\max f'(x) = A \omega
$$

som er det største stigningstallet en tangent til grafen kan ha.
::::


:::::::::::::


Dersom en tangent har størst mulig stigningstall, så må den tangere grafen i et punkt som ligger på likevektslinja.



:::::::::::::{part} b

:::{plot}
width: 350px
fontsize: 26
align: right
let: A = 4
let: T = 8
let: x0 = 2
let: d = 2
let: omega = 2 * pi / T
let: phi = x0 * omega
function: A * sin(omega * x - phi) + d, f
ymax: 8
ymin: -4
xmin: 0
tangent: 2, f, solid, red
point: (2, f(2))
def: g(x) = A * omega * (x - 2) + 2
line-segment: (2, f(2)), (2, g(3)), dashed, black
line-segment: (2, g(3)), (3, g(3)), dashed, black
hline: d, dashed, gray
xmax: 10
text: 0.5 * (2 + 3), g(3), "$1$", top-center
text: 2, 0.5 * (f(2) + g(3)), "$\pi$", center-left
point: (8, -2)
text: 8, -2, "$(8, -2)$", bottom-center
text: 0, d, "$y = 2$", center-left
ticks: off
:::

Grafen til en trigonometrisk funksjon $f$ er vist til høyre.

En linje tangerer grafen til $f$ i et punkt på likevektslinja.

Bestem et mulig uttrykk for $f(x)$.


:::::{answer}
$$
f(x) = 4 \cos\left(\dfrac{\pi}{4}x - \pi\right) + 2
$$
:::::

:::::::::::::


:::::::::::::{part} c
:::{plot}
width: 350px
align: right
let: A = 3
let: T = pi
let: x0 = 3
let: d = 4
let: omega = 2 * pi / T
let: phi = x0 * omega
function: A * sin(omega * x - phi) + d, g
hline: d, dashed, gray
xmin: 0
xmax: 6
ymin: -3
ymax: 9
let: a = 3 - T/2
tangent: a, g, solid, red
point: (a, g(a))
def: t(x) = -A * omega * (x - a) + 4
line-segment: (a, t(a)), (a, t(a + 1)), dashed, black
line-segment: (a, t(a + 1)), (a + 1, t(a + 1)), dashed, black
point: (3, g(3))
text: 3, g(3), "$(3, 4)$", bottom-right
text: 0.5 * (a + a + 1), t(a + 1), "$1$", bottom-center
text: a, 0.5 * (t(a) + t(a + 1)), "$-6$", center-left
fontsize: 26
ticks: off
point: (3 + T/2, g(3 + T/2))
text: 3 + T/2, g(3 + T/2), "$\left(3 + \displaystyle \frac{\pi}{2}, 4\right)$", top-right
:::

Grafen til en trigonometrisk funksjon $g$ er vist til høyre.

En linje tangerer grafen til $g$ på likevektslinja. 

Bestem et mulig uttrykk for $g(x)$.


:::::{answer}

$$
g(x) = 3 \sin(2x - 6) + 4
$$

:::::

:::::::::::::

:::::::::::::::





