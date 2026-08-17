# Oppgaver: Substitusjon



:::::::::::::::{exercise} Oppgave 1
Finn integralene.


:::::::::::::{part} a
$$
\int xe^{-x^2} \d x
$$


:::{hint}
Sett $u = -x^2$. 
:::



:::::{answer}
$$
\int xe^{-x^2} \d x = -\dfrac{1}{2} e^{-x^2} + C
$$

::::{solution}
Vi velger substitusjonen

$$
u = -x^2 \limplies u' = -2x
$$

Så setter vi inn i formelen for integrasjon med substitusjon:

$$
\begin{align*}
\int xe^{-x^2} \d x &= \int x\cdot e^u \cdot \dfrac{\d u}{u'} \\
\\
&= \int x\cdot e^u \cdot \dfrac{\d u}{-2x} \\
\\
&= -\dfrac{1}{2} \int e^u \cdot \d u \\
\\
&= -\dfrac{1}{2} e^u + C \\
\\
&= -\dfrac{1}{2} e^{-x^2} + C
\end{align*}
$$
::::
:::::
:::::::::::::



:::::::::::::{part} b
$$
\int \dfrac{5}{3x + 4} \d x
$$

:::{hint}
Sett $u = 3x + 4$
:::


:::::{answer}
$$
\int \dfrac{5}{3x + 4} \d x = \dfrac{5}{3} \ln \abs{3x + 4} + C
$$

::::{solution}
Vi setter 

$$
u = 3x + 4 \limplies u' = 3
$$

Så bruker vi formelen for integrasjon med substitusjon:

$$
\begin{align*}
\int \dfrac{5}{3x + 4} \d x &= \int \dfrac{5}{u} \cdot \dfrac{\d u}{u'} \\
\\
&= \int \dfrac{5}{u} \cdot \dfrac{\d u}{3} \\
\\
&= \dfrac{5}{3} \int \dfrac{1}{u} \d u \\
\\
&= \dfrac{5}{3} \ln \abs{u} + C \\
\\
&= \dfrac{5}{3} \ln \abs{3x + 4} + C
\end{align*}
$$
::::
:::::

:::::::::::::


:::::::::::::{part} c
$$
\int \dfrac{2x}{x^2 + 1} \d x
$$

:::{hint}
Sett $u = x^2 + 1$
:::


:::::{answer}
$$
\int \dfrac{2x}{x^2 + 1} \d x = \ln \abs{x^2 + 1} + C
$$

::::{solution}
Vi setter 

$$
u = x^2 + 1 \limplies u' = 2x
$$

Så setter vi inn i formelen for integrasjon med substitusjon:

$$
\begin{align*}
\int \dfrac{2x}{x^2 + 1} \d x &= \int \dfrac{u'}{u} \cdot \dfrac{\d u}{u'} \\
\\
&= \int \dfrac{1}{u} \d u \\
\\
&= \ln \abs{u} + C \\
\\
&= \ln \abs{x^2 + 1} + C
\end{align*}
$$
::::
:::::

:::::::::::::


:::::::::::::{part} d
$$
\int \dfrac{e^x}{e^x - 1} \d x
$$

:::{hint}
Sett $u = e^x - 1$.
:::


:::::{answer}
$$
\int \dfrac{e^x}{e^x - 1} \d x = \ln \abs{e^x - 1} + C
$$

::::{solution}
Vi setter 

$$
u = e^x - 1 \limplies u' = e^x
$$

Så setter vi inn i formelen for integrasjon med substitusjon:

$$
\begin{align*}
\int \dfrac{e^x}{e^x - 1} \d x &= \int \dfrac{u'}{u} \cdot \dfrac{\d u}{u'} \\
\\
&= \int \dfrac{1}{u} \d u \\
\\
&= \ln \abs{u} + C \\
\\
&= \ln \abs{e^x - 1} + C
\end{align*}
$$
::::
:::::


:::::::::::::

:::::::::::::::



---



:::::::::::::::{exercise} Oppgave 2
Finn integralene.

:::::::::::::{part} a
$$
\int x \sqrt{1 - x^2} \d x
$$


:::::{answer}
$$
\int x \sqrt{1 - x^2} \d x = -\dfrac{1}{3} (1 - x^2)^{3/2} + C
$$

::::{solution}
Vi velger oss $u$ gitt ved

$$
u = 1 - x^2 \limplies u' = -2x
$$

Så setter vi inn i formelen for integrasjon med substitusjon:

$$
\begin{align*}
\int x \sqrt{1 - x^2} \d x &= \int x \sqrt{u} \cdot \dfrac{\d u}{u'} \\
\\
&= \int x \sqrt{u} \cdot \dfrac{\d u}{-2x} \\
\\
&= -\dfrac{1}{2} \int \sqrt{u} \d u \\
\\
&= -\dfrac{1}{2} \int u^{1/2} \d u \\
\\
&= -\dfrac{1}{2} \cdot \dfrac{1}{3/2} u^{3/2} + C \\
\\
&= -\dfrac{1}{2} \cdot \dfrac{2}{3} u^{3/2} + C \\
\\
&= -\dfrac{1}{3} u^{3/2} + C \\
\\
&= -\dfrac{1}{3} (1 - x^2)^{3/2} + C
\end{align*}
$$
::::
:::::


:::::::::::::


:::::::::::::{part} b
$$
\int \dfrac{8x^3}{x^4 + 1} \d x
$$



:::::{answer}
$$
\int \dfrac{8x^3}{x^4 + 1} \d x = 2 \ln \abs{x^4 + 1} + C
$$

::::{solution}
Vi setter 

$$
u = x^4 + 1 \limplies u' = 4x^3
$$

Så setter vi inn i formelen for integrasjon med substitusjon:

$$
\begin{align*}
\int \dfrac{8x^3}{x^4 + 1} \d x &= \int \dfrac{8x^3}{u} \cdot \dfrac{\d u}{u'} \\
\\
&= \int \dfrac{8x^3}{u} \cdot \dfrac{\d u}{4x^3} \\
\\
&= \int \dfrac{2}{u} \d u \\
\\
&= 2 \ln \abs{u} + C \\
\\
&= 2 \ln \abs{x^4 + 1} + C
\end{align*}
$$
::::
:::::


:::::::::::::


:::::::::::::{part} c
$$
\int \dfrac{\ln x}{x} \d x
$$



:::::{answer}
$$
\int \dfrac{\ln x}{x} \d x = \dfrac{1}{2} (\ln x)^2 + C
$$

::::{solution}
Vi setter

$$
u = \ln x \limplies u' = \dfrac{1}{x}
$$

Så bruker vi formelen for integrasjon med substitusjon:

$$
\begin{align*}
\int \dfrac{\ln x}{x} \d x &= \int \dfrac{u}{x} \cdot \dfrac{\d u}{u'} \\
\\
&= \int \dfrac{u}{x} \cdot \dfrac{\d u}{1/x} \\
\\
&= \int u \d u \\
\\
&= \dfrac{1}{2} u^2 + C \\
\\
&= \dfrac{1}{2} (\ln x)^2 + C
\end{align*}
$$
::::
:::::


:::::::::::::


:::::::::::::{part} d
$$
\int \sqrt{x + 5} \d x
$$


:::::{answer}
$$
\int \sqrt{x + 5} \d x = \dfrac{2}{3} (x + 5)^{3/2} + C
$$

::::{solution}
Vi setter

$$
u = x + 5 \limplies u' = 1
$$

Så setter vi inn i formelen for integrasjon med substitusjon:

$$
\begin{align*}
\int \sqrt{x + 5} \d x &= \int \sqrt{u} \cdot \dfrac{\d u}{u'} \\
\\
&= \int \sqrt{u} \cdot \dfrac{\d u}{1} \\
\\
&= \int u^{1/2} \d u \\
\\
&= \dfrac{1}{3/2} u^{3/2} + C \\
\\
&= \dfrac{2}{3} u^{3/2} + C \\
\\
&= \dfrac{2}{3} (x + 5)^{3/2} + C
\end{align*}
$$
::::
:::::

:::::::::::::
:::::::::::::::


---


:::::::::::::::{exercise} Oppgave 3
Regn ut.


:::::::::::::{part} a
$$
\int\limits_0^2 (x + 3)^3 \d x
$$




:::::{answer}
$$
\int\limits_0^2 (x + 3)^3 \d x = 136
$$


::::{solution}
Vi velger substitusjonen

$$
u = x + 3 \limplies u' = 1
$$

De nye integrasjonsgrensene blir da

$$
\begin{align*}
x &= 0 \limplies u(0) = 0 + 3 = 3 \\
\\
x &= 2 \limplies u(2) = 2 + 3 = 5
\end{align*}
$$


Vi setter inn i formelen for integral med substitusjon som gir:


$$
\begin{align*}
\int\limits_0^2 (x + 3)^3 \d x &= \int\limits_3^5 u^3 \cdot \dfrac{\d u}{u'} \\
\\
&= \int\limits_3^5 u^3 \cdot \dfrac{\d u}{1} \\
\\
&= \int\limits_3^5 u^3 \d u \\
\\
&= \left[\dfrac{1}{4}u^4\right]_3^5 \\
\\
&= \dfrac{1}{4} \cdot \left(5^4 - 3^4\right) \\
\\
&= \dfrac{1}{4} \cdot \left(625 - 81\right) \\
\\
&= \dfrac{1}{4} \cdot 544 \\
\\
&= 136
\end{align*}
$$

der vi har brukt at vi kan faktorisere $544 = 4 \cdot 136$.

::::
:::::

:::::::::::::


:::::::::::::{part} b
$$
\int\limits_0^4 \dfrac{1}{\sqrt{2x + 1}} \d x
$$


:::::{answer}
$$
\int\limits_0^4 \dfrac{1}{\sqrt{2x + 1}} \d x = 2
$$


::::{solution}
Vi velger substitusjonen

$$
u = 2x + 1 \limplies u' = 2
$$

De nye grensene blir da

$$
\begin{align*}
x &= 0 \limplies u(0) = 2 \cdot 0 + 1 = 1 \\
\\
x &= 4 \limplies u(4) = 2 \cdot 4 + 1 = 9
\end{align*}
$$

Altså får vi 

$$
\begin{align*}
\int\limits_0^4 \dfrac{1}{\sqrt{2x + 1}} \d x &= \int\limits_1^9 \dfrac{1}{\sqrt{u}} \cdot \dfrac{\d u}{2} \\
\\
&= \dfrac{1}{2}\int\limits_1^9 u^{-\frac{1}{2}} \d u \\
\\
&= \dfrac{1}{2} \left[\dfrac{1}{1/2}u^{1/2}\right]_1^9 \\
\\
&= \dfrac{1}{2} \cdot 2 \cdot \left[\sqrt{u}\right]_1^9 \\
\\
&= \sqrt{9} - \sqrt{1} \\
\\
&= 3 - 1 \\
\\
&= 2
\end{align*}
$$
::::


:::::
:::::::::::::


:::::::::::::{part} c
$$
\int\limits_4^9 \dfrac{\sqrt{x} + 1}{\sqrt{x} - 1} \d x
$$


:::::{answer}
$$
\int\limits_4^9 \dfrac{\sqrt{x} + 1}{\sqrt{x} - 1} \d x = 9 + 4 \ln 2
$$

::::{solution}
Vi setter 

$$
u = \sqrt{x} \limplies u' = \dfrac{1}{2 \sqrt{x}} = \dfrac{1}{2u}
$$

De nye integrasjonsgrensene blir

$$
\begin{align*}
x &= 4 \limplies u(4) = \sqrt{4} = 2 \\
\\
x &= 9 \limplies u(9) = \sqrt{9} = 3
\end{align*}
$$

Dermed får vi at

$$
\begin{align*}
\int\limits_4^9 \dfrac{\sqrt{x} + 1}{\sqrt{x} - 1} \d x &= \int\limits_2^3 \dfrac{u + 1}{u - 1} \cdot \dfrac{\d u}{u'} \\
\\
&= \int\limits_2^3 \dfrac{u + 1}{u - 1} \cdot \dfrac{\d u}{1/(2u)} \\
\\
&= \int\limits_2^3 \dfrac{u + 1}{u - 1} \cdot 2u \d u \\
\\
&= \int\limits_2^3 \dfrac{2u^2 + 2u}{u - 1} \d u
\end{align*}
$$

Herfra kan vi utføre polynomdivisjon for å gjøre integranden enklere:


:::{polydiv}
---
p: 2u^2 + 2u
q: u - 1
width: 60%
vars: u
---
:::

Altså får vi at 

$$
\begin{align*}
\int\limits_2^3 \dfrac{2u^2 + 2u}{u - 1} \d u &= \int\limits_2^3 \left(2u + 4 + \dfrac{4}{u - 1}\right) \d u \\
\\
&= \int\limits_2^3 2u \d u + \int\limits_2^3 4 \d u + \int\limits_2^3 \dfrac{4}{u - 1} \d u \\
\\
&= \left[u^2\right]_2^3 + \left[4u\right]_2^3 + \left[4 \ln \abs{u - 1}\right]_2^3 \\
\\
&= (9 - 4) + (12 - 8) + (4 \ln 2 - 4 \ln 1) \\
\\
&= 5 + 4 + 4 \ln 2 \\
\\
&= 9 + 4 \ln 2
\end{align*}
$$

::::
:::::

:::::::::::::



:::::::::::::{part} d
$$
\int\limits_e^{e^2} \dfrac{1}{x \ln x} \d x
$$


:::::{answer}
$$
\int\limits_e^{e^2} \dfrac{1}{x \ln x} \d x = \ln 2
$$

::::{solution}
Vi prøver å sette $u = \ln x$ siden den deriverte da vil muligens kansellere faktoren $x$ i nevneren. Da får vi

$$
u = \ln x \limplies u' = \dfrac{1}{x}
$$

Da vil det ubestemte integralet bli

$$
\begin{align*}
\int \dfrac{1}{x \ln x} \d x &= \int \dfrac{1}{x \cdot u} \cdot \dfrac{\d u}{u'} \\
\\
&= \int \dfrac{1}{x \cdot u} \cdot \dfrac{\d u}{1/x} \\
\\
&= \int \dfrac{1}{x\cdot u} x \cdot \d u \\
\\
&= \int \dfrac{1}{u} \d u \\
\\
&= \ln \abs{u} + C \\
\end{align*}
$$

De nye integrasjonsgrensene blir

$$
\begin{align*}
x &= e \limplies u(e) = \ln e = 1 \\
\\
x &= e^2 \limplies u(e^2) = \ln e^2 = 2
\end{align*}
$$

Altså får vi at

$$
\int\limits_e^{e^2} \dfrac{1}{x \ln x} \d x = \int\limits_1^2 \dfrac{1}{u} \d u = \left[\ln \abs{u}\right]_1^2 = \ln 2 - \ln 1 = \ln 2
$$


::::
:::::


:::::::::::::


:::::::::::::::


---


:::::::::::::::{exercise} Oppgave 4
> Noen ganger må man bruke flere integrasjonsteknikker sammen for å komme helt i mål.

Finn integralene.


:::::::::::::{part} a
$$
\int e^{\sqrt{x}} \d x
$$

:::{hint}
Sett $u = \sqrt{x}$. Da får du et integral du kan løse med delvis integrasjon.
:::



:::::{answer}

$$
\int e^{\sqrt{x}} \d x = 2e^{\sqrt{x}}\left(\sqrt{x} - 1\right) + C
$$


::::{solution}
Vi setter $u = \sqrt{x}$ som gir

$$
u = \sqrt{x} \limplies u' = \dfrac{1}{2\sqrt{x}} = \dfrac{1}{2u}
$$

Så etter vi inn i formelen for integrasjon med substitusjon får vi

$$
\begin{align*}
\int e^{\sqrt{x}} \d x &= \int e^u \cdot \dfrac{\d u}{u'} \\
\\
&= \int e^u \cdot \dfrac{\d u}{1/(2u)} \\
\\
&= \int 2u e^u \d u
\end{align*}
$$

Dette integralet kan vi løse med delvis integrasjon (vi må passe på å bruke en annen variabel enn $u$ her siden den allerede er brukt):

$$
\int z' v = z v - \int z v'
$$

Vi setter

$$
\begin{align*}
z' &= e^u \limplies z = e^u \\
\\
v &= 2u \limplies v' = 2
\end{align*}
$$

Så setter vi inn i formelen for delvis integrasjon som gir

$$
\begin{align*}
\int 2u e^u \d u &= e^u \cdot 2u - \int e^u \cdot 2 \d u \\
\\
&= 2u e^u - 2 \int e^u \d u \\
\\
&= 2u e^u - 2 e^u + C \\
\\
&= 2 e^u (u - 1) + C
\end{align*}
$$

Til slutt setter vi tilbake kjernen $u$ som gir

$$
\int e^{\sqrt{x}} \d x = 2e^{\sqrt{x}}\left(\sqrt{x} - 1\right) + C
$$

::::
:::::


:::::::::::::


:::::::::::::{part} b
$$
\int \dfrac{x}{\sqrt{x} + 1} \d x
$$


::::{hint}
Etter du har gjort variabelskifte $u = \sqrt{x}$ kan du skrive om integranden til en brøk av polynomer med $u$ som variabel. Deretter kan du utføre polynomdivisjon for å gjøre integranden enklere.
::::
:::::::::::::

:::::::::::::::



---


:::::::::::::::{exercise} Oppgave 5
Om en funksjon $f$ får du vite at

* $f'(x) = \dfrac{4x}{x^2 - 1}$
* Funksjonen går gjennom punktet $(2, 4)$.

Bestem $f(x)$.

:::::::::::::::