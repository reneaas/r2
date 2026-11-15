# Oppgaver: Derivasjon



:::::::::::::::{exercise} Oppgave 1
:::::::::::::{part} a
Deriver funksjonen 

$$
f(x) = 3 \cos (4x)
$$

:::::{answer}
$$
f'(x) = -12 \sin(4x)
$$


::::{solution}
$$
\begin{align*}
f'(x) = 3 (\cos(4x))' \\
\\
&= 3 (- \sin(4x)) \cdot (4x)' \\
\\
&= 3 (- \sin(4x)) \cdot 4 \\
\\
&= -12 \sin(4x)
\end{align*}
$$
::::


:::::

:::::::::::::


:::::::::::::{part} b
Deriver funksjonen 

$$
g(x) = 5 \sin (2x - 1)
$$


:::::{answer}
$$
g'(x) = 10 \cos(2x - 1)
$$


::::{solution}
$$
\begin{align*}
g'(x) &= 5 (\sin (2x - 1))' \\
\\
&= 5 \cos(2x - 1) \cdot (2x - 1)' \\
\\
&= 5 \cos(2x - 1) \cdot 2 \\
\\
&= 10 \cos(2x - 1)
\end{align*}
$$
::::

:::::

:::::::::::::


:::::::::::::{part} c
Deriver funksjonen

$$
h(x) = 4 \cos (2x) - 3 \sin (2x)
$$


:::::{answer}
$$
h'(x) = -8\sin(2x) - 6\cos(2x)
$$


::::{solution}
$$
\begin{align*}
h'(x) &= 4 (\cos (2x))' - 3 (\sin(2x))' \\
\\
&= -4 \sin(2x) \cdot 2 - 3 \cos(2x) \cdot 2 \\
\\
&= -8 \sin(2x) - 6 \cos(2x)
\end{align*}
$$
::::


:::::

:::::::::::::


:::::::::::::{part} d
Deriver funksjonen 

$$
p(x) = 3 \sin^2 x
$$


:::::{answer}
$$
p'(x) = 6 \sin x \cos x
$$

::::{solution}
$$
\begin{align*}
p(x) &= 3 (\sin^2 x)' \\
\\
&= 3 \cdot 2 \sin x \cdot (\sin x)' \\
\\
&= 6 \sin x \cdot \cos x \\
\\
&= 6 \sin x \cos x
\end{align*}
$$
::::
:::::
:::::::::::::


:::::::::::::::


---


:::::::::::::::{exercise} Oppgave 2

:::::::::::::{part} a
Deriver funksjonen

$$
f(x) = \tan x
$$


:::{hint} Hint
Bruk at $\tan x = \dfrac{\sin x}{\cos x}$ og brøkregelen $\left(\dfrac{u}{v}\right)' = \dfrac{u'v - uv'}{v^2}$
:::

:::::{answer}
$$
f'(x) = \dfrac{1}{\cos^2 x}
$$


::::{solution}
$$
\begin{align*}
f'(x) &= (\tan x)' = \left(\dfrac{\sin x}{\cos x}\right)' \\
\\
&= \dfrac{(\sin x)' \cos x - \sin x (\cos x)'}{\cos^2 x} \\
\\
&= \dfrac{\cos x \cdot \cos x - \sin x \cdot (-\sin x)}{\cos^2 x} \\
\\
&= \dfrac{\cos^2 x + \sin^2 x}{\cos^2 x} \\
\\
&= \dfrac{1}{\cos^2 x}
\end{align*}
$$
::::


:::::


:::::::::::::


:::::::::::::{part} b
Deriver funksjonen

$$
g(x) = \tan^2 (2x)
$$

:::::{answer}
$$
g'(x) = \dfrac{4\tan (2x)}{\cos^2(2x)} = \dfrac{4 \sin (2x)}{\cos^3 (2x)}
$$


::::{solution}
$$
\begin{align*}
g'(x) &= \left(\tan^2 (2x)\right)' \\
\\
&= 2 \tan(2x) \cdot (\tan(2x))' \\
\\
&= 2 \tan(2x) \cdot \dfrac{1}{\cos^2 (2x)} \cdot 2 \\
\\
&= \dfrac{4\tan (2x)}{\cos^2(2x)} \\
\\
&= \dfrac{4 \sin (2x)}{\cos^3 (2x)}
\end{align*}
$$
::::


:::::

:::::::::::::


:::::::::::::{part} c
Deriver funksjonen

$$
h(x) = \cos(3x) \sin(3x)
$$

:::::{answer}
$$
h'(x) = 3 \cos^2(3x) - 3 \sin^2 (3x) = 3 \cos(6x)
$$

::::{solution}
$$
\begin{align*}
h'(x) &= (\cos(3x) \sin(3x))' \\
\\
&= (\cos(3x))' \cdot \sin(3x) + \cos(3x) \cdot (\sin(3x))' \\
\\
&= -3 \sin(3x) \cdot \sin (3x) + \cos(3x) \cdot \cos(3x) \cdot 3 \\
\\
&= -3 \sin^2(3x) + 3 \cos^2(3x) \\
\\
&= 3 \cos(6x)
\end{align*}
$$
::::


:::::

:::::::::::::


:::::::::::::{part} d
Deriver funksjonen 

$$
p(x) = \cos^2 x \sin x
$$

:::::{answer}
$$
p'(x) = -2\cos x \sin^2 x + \cos^3 x
$$


::::{solution}
$$
\begin{align*}
p'(x) &= (\cos^2 x \sin x)' \\
\\
&= (\cos^2 x)' \sin x + \cos^2 x (\sin x)' \\
\\
&= -2 \cos x (\cos x)' \sin x + \cos^2 x \cos x \\
\\
&= -2 \cos x \sin^2 x + \cos^3 x
\end{align*}
$$
::::


:::::
:::::::::::::


:::::::::::::::



---


:::::::::::::::{exercise} Oppgave 3
Funksjonen $f$ er gitt ved 

$$
f(x) = 12 \cos\left(\dfrac{\pi}{3}x - \dfrac{4\pi}{3}\right) - 2
$$


:::::::::::::{part} a
Bestem stigningstallet til tangenten i punktet $(2, f(2))$.

:::::{answer}
Stigningstallet er $2\sqrt{3} \pi$

::::{solution}
Vi deriverer funksjonen:

$$
\begin{align*}
f'(x) &= \left(12 \cos\left(\dfrac{\pi}{3}x - \dfrac{4\pi}{3}\right) - 2\right)' \\
\\
&= 12 \left(\cos\left(\dfrac{\pi}{3}x - \dfrac{4\pi}{3}\right)\right)' \\
\\
&= -12 \sin\left(\dfrac{\pi}{3}x - \dfrac{4\pi}{3}\right) \cdot \left(\dfrac{\pi}{3}x - \dfrac{4\pi}{3}\right)' \\
\\
&= -12 \sin\left(\dfrac{\pi}{3}x - \dfrac{4\pi}{3}\right) \cdot \dfrac{\pi}{3} \\
\\
&= -4 \pi \sin\left(\dfrac{\pi}{3}x - \dfrac{4\pi}{3}\right)
\end{align*}
$$

Stigningstallet til tangenten er lik $f'(2)$ som er gitt ved:

$$
\begin{align*}
f'(2) &= -4\pi \sin\left(\dfrac{\pi}{3} \cdot 2 - \dfrac{4\pi}{3}\right) \\
\\
&= -4\pi \sin \left(-\dfrac{2\pi}{3}\right) \\
\\
&= -4\pi \cdot \left(-\dfrac{\sqrt{3}}{2}\right) \\
\\
&= 2\sqrt{3}\pi
\end{align*}
$$
::::
:::::

:::::::::::::


:::::::::::::{part} b
Bestem det største stigningstallet en tangent til grafen til $f$ kan ha.


:::::{answer}
Det største stigningstallet er $4\pi$. 


::::{solution}
Vi har at 

$$
f'(x) = -4 \pi \sin\left(\dfrac{\pi}{3}x - \dfrac{4\pi}{3}\right)
$$

Siden amplituden er $4\pi$ og likevektslinja er $d = 0$, så vil den største mulige verdien til $f'(x)$ være lik $4\pi$. Dette vil være det største stigningstallet en tangent til grafen til $f$ kan ha.
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
let: A = 4
let: d = -1
let: T = 4
let: omega = 2 * pi / T
let: x0 = 2
let: phi = x0 * omega
function: A * cos(omega * x - phi) + d, f
xmin: -2
xmax: 6
tangent: 1, f
point: (1, f(1))
fontsize: 26
:::

I figuren til høyre vises en trigonometrisk funksjon $f$.

Grafen har en tangent i $(1, -1)$. 

Bestem stigningstallet til tangenten. 

:::::{answer}
Stigningstallet er $2\pi$


::::{solution}
Vi kan skrive $f(x)$ på formen:

$$
f(x) = A \cos (\omega x - \varphi) + d
$$

Vi har at 

$$
A = \dfrac{3 + 5}{2} = 4 \and d = \dfrac{3 - 5}{2} = -1
$$

Perioden er $T = 4$ som gir at

$$
\omega = \dfrac{2\pi}{T} = \dfrac{\pi}{2}
$$

Faseforskyvningen er 

$$
\dfrac{\varphi}{\omega} = 2 \limplies \varphi = 2\omega = \pi
$$

Dermed er 

$$
f(x) = 4 \cos\mqty(\dfrac{\pi}{2}x - \pi) - 1
$$

Stigningstallet til tangenten er lik $f'(1)$. Vi finner den deriverte:

$$
\begin{align*}
f'(x) &= \left(4 \cos\mqty(\dfrac{\pi}{2}x - \pi) - 1\right)' \\
\\
&= -4 \sin \mqty(\dfrac{\pi}{2}x - \pi) \cdot \dfrac{\pi}{2} \\
\\
&= -2\pi \sin \mqty(\dfrac{\pi}{2}x - \pi)
\end{align*}
$$

Så setter vi inn $x = 1$:

$$
\begin{align*}
f'(1) &= -2\pi \sin \mqty(\dfrac{\pi}{2} \cdot 1 - \pi) \\
\\
&= -2\pi \sin \mqty(-\dfrac{\pi}{2}) \\
\\
&= -2\pi \cdot \left(-1\right) \\
\\
&= 2\pi
\end{align*}
$$




::::


:::::

:::::::::::::


:::::::::::::{part} b
:::{plot}
width: 350px
align: right
let: A = 6
let: d = -3
let: T = 3
let: omega = 2 * pi / T
let: x0 = 1
let: phi = x0 * omega
function: A * cos(omega * x - phi) + d, g
xmin: -2
xmax: 6
ymin: -10
tangent: 2, g
point: (2, g(2))
fontsize: 26
:::

I figuren til høyre vises en trigonometrisk funksjon $g$.

Grafen har en tangent i $(2, -6)$. 

Bestem stigningstallet til tangenten. 

:::::{answer}
Stigningstallet er $-2\sqrt{3} \pi$



::::{solution}
Vi velger å bruke en cosinusfunksjon: 

$$
g(x) = A \cos\mqty(\omega x - \varphi) + d
$$

Vi har at 

$$
d = \dfrac{3 - 9}{2} = -3 \and A = \dfrac{3 + 9}{2} = 6
$$

Perioden er $T = 3$ som gir 

$$
\omega = \dfrac{2\pi}{T} = \dfrac{2\pi}{3}
$$

Faseforskyvningen er 

$$
\dfrac{\varphi}{\omega} = 1 \limplies \varphi = \omega = \dfrac{2\pi}{3}
$$

Dermed er 

$$
g(x) = 6 \cos\mqty(\dfrac{2\pi}{3}x - \dfrac{2\pi}{3}) - 3
$$

Stigningstallet til tangenten er lik $g'(2)$. Vi finner den deriverte:

$$
\begin{align*}
g'(x) &= \left(6 \cos\mqty(\dfrac{2\pi}{3}x - \dfrac{2\pi}{3}) - 3\right)' \\
\\
&= \left(-6 \sin\mqty(\dfrac{2\pi}{3}x - \dfrac{2\pi}{3}) \cdot \dfrac{2\pi}{3}\right) \\
\\
&= -6 \cdot \dfrac{2\pi}{3} \sin\mqty(\dfrac{2\pi}{3}x - \dfrac{2\pi}{3}) \\
\\
&= -4\pi \sin\mqty(\dfrac{2\pi}{3}x - \dfrac{2\pi}{3})
\end{align*}
$$

Så regner vi ut stigningstallet:

$$
\begin{align*}
g'(2) &= -4\pi \sin\mqty(\dfrac{2\pi}{3} \cdot 2 - \dfrac{2\pi}{3}) \\
\\
&= -4\pi \sin\mqty(\dfrac{4\pi}{3} - \dfrac{2\pi}{3}) \\
\\
&= -4\pi \sin\mqty(\dfrac{2\pi}{3}) \\
\\
&= -4\pi \cdot \dfrac{\sqrt{3}}{2} \\
\\
&= -2\sqrt{3} \pi
\end{align*}
$$



::::


:::::

:::::::::::::


:::::::::::::::



---


:::::::::::::::{exercise} Oppgave 5

:::::::::::::{part} a
For en trigonometrisk funksjon $f(x) = a \cos(\omega x) + b \sin(\omega x)$ er


* $f(0) = 2$
* $f'(0) = 0$
* $f''(0) = -8$

Bestem et mulig uttrykk for $f(x)$. 

:::::{answer}
$$
f(x) = 2 \cos(2x)
$$


::::{solution}
Vi har at 

$$
f(x) = a \cos(\omega x) + b \sin(\omega x)
$$

Siden $f(0) = 2$, får vi 

$$
f(0) = 2
$$

$$
a \cos 0 + b \sin 0 = 2 \limplies a = 2
$$

Vi har at 

$$
f'(x) = -a \omega \sin (\omega x) + b \omega \cos(\omega x)
$$

Siden $f'(0) = 0$ får vi 

$$
f'(0) = 0
$$

$$
a\omega \sin 0 + b \omega \cos 0 = 0 \limplies b = 0
$$

Vi har også at 

$$
f''(x) = -a \omega^2 \cos(\omega x) - b \omega^2 \sin(\omega x)
$$

og siden $f''(0) = -8$, får vi at 

$$
f''(0) = -8
$$

$$
-a \omega^2 \cos 0 - b \omega^2 \sin 0 = -8 \limplies -a\omega^2 = -8
$$

og siden vi har funnet at $a = 2$ får vi derfor at 

$$
-2\omega^2 = -8 \limplies \omega^2 = 4 \limplies \omega = 2
$$

Dermed er 

$$
f(x) = 2 \cos(2x)
$$

::::

:::::


:::::::::::::


:::::::::::::{part} b
Om en sinusfunksjon $g$ får du vite at 

* Grafen vokser raskest i punktet $(2, g(2))$
* Tangenten i punktet $(2, g(2))$ har stigningstall $12$
* Verdimengden er $V_g = [-5, 7]$

Bestem et mulig uttrykk for $g(x)$. 


:::::{answer}
$$
g(x) = 6 \sin (2x - 4) + 1
$$


::::{solution}
Vi bruker at 

$$
g(x) = A \sin(\omega x - \varphi) + d
$$

Siden verdimengden er $V_g = [-5, 7]$ vil likevektslinja være 

$$
d = \dfrac{-5 + 7}{2} = 1
$$

Amplituden blir

$$
A = \dfrac{7 + 5}{2} = 6
$$

Siden grafen til $g$ vokser raskest i punktet $(2, g(2))$, vil grafen til $g$ skjære likevektslinja på vei opp i dette punktet. Dermed er faseforskyvningen

$$
\dfrac{\varphi}{\omega} = 2 \limplies \varphi = 2\omega
$$

Tangenten i punktet $(2, g(2))$ har det største mulige stigningstallet en tangent kan ha siden den går gjennom punktet der hvor sinusfunksjonen skjærer likevektslinja si på vei opp. Dette stigningstallet er 

$$
\max f'(x) = A \omega = 12 \limplies \omega = \frac{12}{A} = \frac{12}{6} = 2
$$

Dermed er 

$$
\varphi = 2\omega = 2 \cdot 2 = 4
$$

Da får vi at 

$$
g(x) = 6 \sin(2x - 4) + 1
$$


::::


:::::

:::::::::::::


:::::::::::::::



---




:::::::::::::::{exercise} Oppgave 6

:::{plot}
figsize: (6, 3)
width: 350px
align: right
let: s = 10
let: x = pi/4
line-segment: (0, 0), (s, 0), blue
line-segment: (s, 0), (s + s * cos(x), s * sin(x)), blue
line-segment: (0, 0), (- s * cos(x), s * sin(x)), blue
line-segment: (- s * cos(x), s * sin(x)), (s + s * cos(x), s * sin(x)), dashed, gray
angle-arc: (s, 0), 0.3 * s, 0, x * 180 / pi, black
text: s + 0.4 * s * cos(x/2), 0.4 * s * sin(x/2), "$x$", center-right
axis: off
axis: equal
fontsize: 26
line-segment: (s, 0), (s + s * cos(x), 0), dashed, gray
line-segment: (0, 0), (-s * cos(x), 0), dashed, gray
angle-arc: (0, 0), 0.3 * s, 180 - x * 180 / pi, 180, black
text: -0.4 * s * cos(x/2), 0.4 * s * sin(x/2), "$x$", center-left
text: 0.5 * s, 0, "$10$", bottom-center
text: s + 0.5 * s * cos(x), 0.5 * s * sin(x), "$10$", top-left
text: -0.5 * s * cos(x), 0.5 * s * sin(x), "$10$", top-right
:::


En takrenne skal lages i form av et åpent trapes ved å brette to sidekanter fra et flatt rektangel med en vinkel $x$ slik at takrenna består av tre like store deler på $10$ cm.

Figuren til høyre viser et tverrsnitt av takrenna.


:::::::::::::{part} a
Bestem et uttrykk $A(x)$ for tverrsnittsarealet av takrenna.


:::::{answer}
$$
A(x) = 100 \sin x + 100 \sin x \cos x
$$
:::::

:::::::::::::


:::::::::::::{part} b
Bestem vinkelen $x$ som gir størst tverrsnittsareal for takrenna.


:::::{answer}
$$
x = 60 \degree
$$
:::::
:::::::::::::

:::::::::::::::




