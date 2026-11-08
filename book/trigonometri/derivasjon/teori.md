# Derivasjon

:::{goals} Vis læringsmål
* Kunne derivere sinus- og cosinusfunksjoner.
* Kunne derivere tangensfunksjonen.
* Kunne finne koordinatene til topp- og bunnpunkter med derivasjon
* Kunne finne den raskeste vekstfarten til sinus- og cosinusfunksjoner.
:::




## Derivasjon av trigonometriske funksjoner


:::::::::::::::{summary} De deriverte til sinus og cosinus

De deriverte til sinus og cosinus er gitt ved 

$$
\begin{align*}
(\cos x)' &= -\sin x \\
\\
(\sin x)' &= \cos x
\end{align*}
$$



:::::{proof} Vis forklaring
:::{plot}
nocache:
width: 100%
align: right
fontsize: 26
axis: equal
ticks: off
circle: (0, 0), 1
let: u = 120 * pi/180
curve: cos(t), sin(t), (0, u), solid, red
let: dx = 40 * pi/180
point: (cos(u), sin(u))
xlabel: $\cos \varphi$
ylabel: $\sin \varphi$
vector: (0, 0), (cos(u), sin(u)), blue
text: 0.5 * cos(u) - 0.1, 0.5 * sin(u) - 0.1, "$\vec{r}$", center-center
angle-arc: (0, 0), 0.3, 0, u*180/pi, red, arrow
text: 0.4 * cos(u/2), 0.4 * sin(u/2), "$x$", center-center
vector: (cos(u), sin(u)), (cos(u) - l * sin(u), sin(u) + l * cos(u)), blue 
let: l = 1
text: 0.5 * (cos(u) - l * sin(u) + cos(u)), 0.5 * (sin(u) + l * cos(u) + sin(u)) + 0.2, "$\vec{v}$", center-center
text: 1.2 * cos(u/2), 1.2 * sin(u/2), "$s(x)$", center-center
:::


Vi tenker oss et punkt på enhetssirkelen der vi har rotert en vinkel $x$ som beveger seg med en konstant vinkelfart lik $1$. Posisjonsvektoren til dette punktet vil være gitt ved:

$$
\vec{r}(x) = [\cos x, \sin x]
$$

Fra vektorregningen vet vi at fartsvektoren er lik en tangentvektor til sirkelen i punktet gitt ved: 

$$
\vec{v}(x) = \vec{r}'(x) = [(\cos x)', (\sin x)']
$$

Buelengden $s(x) = r\cdot x = x$ siden radius er lik $1$. Banefarten får vi ved å derivere dette uttrykket: 

$$
v(x) = s'(x) = x' = 1
$$

Altså er banefarten lik $1$ som betyr at lengden av fartsvektoren er $\abs{\vec v(x)} = 1$.

Vektoren $\vec v(x)$ må være en tangent til sirkelen som betyr at den står ortogonalt på $\vec r(x)$. Vi får en slik vektor ved å rotere $\vec r(x)$ $90\degree$. Vi må rotere den $90\degree$ mot klokka for at vektoren skal peke i riktig retning siden $x$ øker.

$$
\vec v(x) = [-\sin x, \cos x]
$$

Denne vektoren har lengde $1$ siden 

$$
\abs{\vec v(x)} = \sqrt{(-\sin x)^2 + (\cos x)^2} = \sqrt{\sin^2 x + \cos^2 x} = \sqrt{1} = 1
$$

Sammenligner vi de to uttrykkene for fartsvektoren, så får vi at

$$
[(\cos x)', (\sin x)'] = [-\sin x, \cos x]
$$

som gir oss derivasjonsreglene vi skulle vise:

$$
\begin{align*}
(\cos x)' &= -\sin x \\
\\
(\sin x)' &= \cos x
\end{align*}
$$

:::::


:::::::::::::::


---


:::::::::::::::{example} Eksempel 1 
Funksjonen $f$ er gitt ved

$$
f(x) = 4 \cos \left(4x - 2\right) + 3
$$


Finn $f'(x)$.



::::{solution}
---
open:
---
Vi bruker kjernereglene med $u = 4x - 2$. Da har vi at $u' = 4$ og $(\cos u)' = -\sin u$. Dermed får vi at

$$
\begin{align*}
f'(x) &= \left(4 \cos \left(4x - 2\right) + 3 \right)' \\
\\
&= 4 \cdot (\cos u)' \cdot u' + 0 \\
\\
&= 4 \cdot (-\sin u) \cdot 4 \\
\\
&= -16 \sin \left(4x - 2\right)
\end{align*}
$$
::::


:::::::::::::::


---



:::::::::::::::{example} Eksempel 2
Funksjonen $f$ er gitt ved 

$$
f(x) = 3 \sin x + 4 \cos (2x)
$$

Finn $f'(x)$.

::::{solution}
---
open:
---
Vi vet at $(\sin x)' = \cos x$ og $(\cos x)' = -\sin x$. Dermed får vi at

$$
\begin{align*}
f'(x) &= 3 (\sin x)' + 4 (\cos (2x))' \\
\\
&= 3 \cos x + 4 \cdot (-\sin (2x)) \cdot (2x)' \\
\\
&= 3 \cos x - 8 \sin (2x)
\end{align*}
$$
::::

:::::::::::::::

