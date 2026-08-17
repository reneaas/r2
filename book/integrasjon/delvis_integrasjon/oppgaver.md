# Oppgaver: Delvis integrasjon


:::{goals} Sentrale formler

* Delvis integrasjon

$$
\boxed{\int u' \cdot v = u \cdot v - \int u \cdot v'}
$$

* Analysens fundamentalteorem

$$
\boxed{\int f'(x) \d x = f(x) + C}
$$
:::


:::::::::::::::{exercise} Oppgave 1

Regn ut integralene.


:::::::::::::{part} a
$$
\int x e^{2x} \d x
$$


:::::{answer}

$$
\int x e^{2x} \d x = \dfrac{1}{4}e^{2x}(2x - 1) + C
$$

::::{solution}
Vi velger at 

$$
u = x \limplies u' = 1
$$

og

$$
v' = e^{2x} \limplies v = \frac{1}{2} e^{2x}
$$

Med delvis integrasjon får vi da 


$$
\begin{align*}
\int u' v &= uv - \int uv' \\
\\
&= x \cdot \dfrac{1}{2}e^{2x} - \int 1 \cdot \dfrac{1}{2}e^{2x} \d x \\
\\
&= \dfrac{1}{2}xe^{2x}  - \dfrac{1}{2} \cdot \dfrac{1}{2}e^{2x} + C \\
\\
&= \dfrac{1}{2}xe^{2x} - \dfrac{1}{4}e^{2x} + C \\
\\
&= \dfrac{1}{4}e^{2x}(2x - 1) + C
\end{align*}
$$


::::
:::::

:::::::::::::



:::::::::::::{part} b
---
open:
---
$$
\int x \ln (2x) \d x
$$
:::::::::::::



:::::::::::::{part} c
---
open:
---
$$
\int 4x e^{-2x} \d x
$$
:::::::::::::



:::::::::::::{part} d
---
open:
---
$$
x^2 \ln x \d x
$$
:::::::::::::

:::::::::::::::




:::::::::::::::{exercise} Oppgave 2
Regn ut integralene.


:::::::::::::{part} a
---
open:
---
$$
\int\limits_0^1 x e^{2x} \d x
$$
:::::::::::::



:::::::::::::{part} b
---
open:
---
$$
\int\limits_{-1}^0 x^2 e^{-x} \d x
$$
:::::::::::::


:::::::::::::{part} c
---
open:
---
$$
\int\limits_1^2 x \ln x \d x
$$
:::::::::::::


:::::::::::::{part} d
---
open:
---
$$
\int\limits_1^2 \ln x \d x
$$

:::{hints}
Tenk på integranden som $1 \cdot \ln x$ og bruk delvis integrasjon.
:::

:::::::::::::


:::::::::::::::



:::::::::::::::{exercise} Oppgave 3

Regn ut integralene.

:::::::::::::{part} a
---
open:
---
$$
\int \sqrt{x} \ln x \d x
$$


:::::::::::::


:::::::::::::{part} b
---
open:
---
$$
\int \dfrac{\ln x}{x} \d x
$$


::::{hints}
Tenk at det integranden er $\dfrac{1}{x} \cdot \ln x$ og bruk delvis integrasjon.
::::
:::::::::::::




:::::::::::::{part} c
---
open:
---
$$
\int \sqrt{x}e^x \d x
$$
:::::::::::::


:::::::::::::{part} d
---
open:
---
$$
\int \dfrac{\ln x}{\sqrt{x}} \d x
$$


::::{hints}
Tenk at det integranden er $\dfrac{1}{\sqrt{x}} \cdot \ln x$ og bruk delvis integrasjon.
::::

:::::::::::::

:::::::::::::::



---



:::::::::::::::{exercise} Oppgave 4



:::::::::::::{part} a
Om en funksjon $f$ får du vite at

* $f'(x) = xe^{-x}$
* Grafen til $f$ går gjennom punktet $(0, 3)$.


Bestem $f(x)$.


:::::{answer}
$$
f(x) = -e^{-x}(x + 1) + 4
$$
:::::


:::::::::::::



:::::::::::::{part} b
---
open:
---
Om en funksjon $g$ får du vite at

* $g'(x) = e^{x} (x^2 - 1)$
* Grafen til $g$ går gjennom punktet $(1, 4e)$.

Bestem $g(x)$.
:::::::::::::


:::::::::::::{part} c
---
open:
---
Om en funksjon $h$ får du vite at

* $h'(x) = 2x \ln x + x$
* Grafen til $h$ går gjennom punktet $(1, 3)$.

Bestem $h(x)$.
:::::::::::::



:::::::::::::{part} d
---
open:
---
Om en funksjon $p$ får du vite at 

* $p'(x) = e^{-3x} + 3xe^{-3x}$
* Grafen til $p$ går gjennom punktet $(1, e)$.

:::::::::::::


:::::::::::::::



:::::::::::::::{exercise} Oppgave 5

:::::::::::::{part} a
:::{plot}
width: 100%
align: right
function: (x - 1) * exp(-x),  (-1, 5), f
xmin: -0.5
xmax: 3
ymin: -1.5
ymax: 1
fill-between: f(x), 0, (0, 1), where=below
nocache:
ticks: off
fontsize: 26
:::



Til høyre vises grafen til funksjonen

$$
f(x) = (x - 1)e^{-x}
$$


Finn arealet av det fargelagte området. 



:::::{answer}
Arealet er $\dfrac{1}{e}$
:::::
:::::::::::::



:::::::::::::::



:::::::::::::::{exercise} Oppgave 6

:::{plot}
width: 100%
align: right
function: (x**2 - 1) * exp(-x/2), (-2, 5), f
xmin: -0.5
xmax: 3
fill-between: f(x), 0, (0, 2.15329), where=above, red
fill-between: f(x), 0, (0, 2.15329), where=below, blue
:::


Grafen til en funksjon $f$ er vist til høyre.

Bestem $b$ slik at arealet av de to fargelagte områdene er like store.
:::::::::::::::