# Substitusjon

:::{goals} Læringsmål
* Kunne bruke substitusjon til å regne ut ubestemte og bestemte integraler.
:::


Substitusjon (variabelskifte) er en teknikk som tar utgangspunkt i kjerneregelen for derivasjon. I prinsippet bruker vi kjerneregelen baklengs.




:::::::::::::::{summary} Ubestemte integraler med substitusjon
Gitt en funksjon $f(u(x))$ der $u(x)$ er en kjerne, så er

$$
\boxed{\int f(u(x)) \d x = \int f(u) \cdot \dfrac{\d u}{u'}}
$$
:::::::::::::::


Akkurat som med delvis integrasjon, står vi fritt til å velge oss hva $u$ skal være når vi jobber med et integral. Et godt valg av $u$ lar oss omdanne et vanskelig integral til et enklere et som vi kan løse.


$$
\underbrace{\int f(u(x)) \d x}_{\text{vanskelig integral}} = \underbrace{\int f(u) \cdot \dfrac{\d u}{u'}}_{\text{enklere integral}}
$$


:::::::::::::::{example} Eksempel 1
Finn 

$$
\int xe^{x^2} \d x
$$


::::{solution}
---
open:
---

Målet vårt er å få en enklere integrand som bare inneholder variabelen $u$. Vi prøver å sette $u = x^2$ siden $u' = 2x$. Dette vil sørge for at vi deler bort faktoren $x$ som står foran eksponentialfunksjonen. 

Med formelen for substitusjon får vi da at

$$
\begin{align*}
\int x e^{x^2} \d x &= \int x e^u \cdot \dfrac{\d u}{u'} \\
\\
&= \int x e^u \cdot \dfrac{\d u}{2x} \\
\\
&= \dfrac{1}{2} \int e^u \d u \\
\\
&= \dfrac{1}{2} e^u + C
\end{align*}
$$

Til slutt setter vi tilbake kjernen $u$. Dermed er 

$$
\int x e^{x^2} \d x = \dfrac{1}{2} e^{x^2} + C
$$
::::
:::::::::::::::




La oss ta et type integral vi får bruk for å løse i blant:


:::::::::::::::{example} Eksempel 2
Finn integralet

$$
\int \dfrac{1}{2x - 1} \d x
$$


::::{solution}
---
open:
---
Vi prøver å sette $u = 2x - 1$ som gir $u' = 2$. Da får vi

$$
\begin{align*}
\int \dfrac{1}{2x - 1} \d x &= \int \dfrac{1}{u} \cdot \dfrac{\d u}{u'} \\
\\
&= \int \dfrac{1}{u} \cdot \dfrac{\d u}{2} \\
\\
&= \dfrac{1}{2} \int \dfrac{1}{u} \d u \\
\\
&= \dfrac{1}{2} \ln \abs{u} + C \\
\\
&= \dfrac{1}{2} \ln \abs{2x - 1} + C
\end{align*}
$$
::::


:::::::::::::::





:::::::::::::::{summary} Bestemt integrasjon med substitusjon
Gitt en funksjon $f(u(x))$ der $u(x)$ er en kjerne, så er

$$
\boxed{\int\limits_a^b f(u(x)) \dx = \int\limits_{u(a)}^{u(b)} f(u)\dfrac{\d u}{u'}}
$$


:::::::::::::::


Setningen ovenfor gir oss en systematisk måte å bytte ut grensene på når vi regner ut bestemte integraler. Det lar oss slippe å sette tilbake kjernen når vi er ferdig, og vi får ofte en del enklere regning. 




:::::::::::::::{example} Eksempel 3
Regn ut

$$
\int\limits_1^3 (2x - 1)^2 \d x
$$


::::{solution}
---
open:
---
Vi bruker substitusjon med

$$
u = 2x - 1 \limplies u' = 2.
$$

Når vi bytter variabelen fra $x$ til $u$, må også grensene endres. Disse får vi ved å regne ut $u(x)$ med de opprinnelige grensene:

$$
x = 1 \limplies u(1) = 2 \cdot 1 - 1 = 1
$$

$$
x = 3 \limplies u(3) = 2 \cdot 3 - 1 = 5
$$

Altså blir integralet 

$$
\begin{align*}
\int\limits_1^3 (2x - 1)^2 \d x &= \int\limits_1^5 u^2 \cdot \dfrac{\d u}{2} = \dfrac{1}{2}\int\limits_1^5 u^2 \d u \\
\\
&= \dfrac{1}{2} \left[\dfrac{1}{3}u^3\right]_1^5 = \dfrac{1}{2} \cdot \dfrac{1}{3} \cdot (5^3 - 1^3) \\
\\
&= \dfrac{1}{6} \cdot 124 = \dfrac{62}{3}
\end{align*}
$$
::::

:::::::::::::::
