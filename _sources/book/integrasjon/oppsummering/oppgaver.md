# Blandede oppgaver: Integralregning



:::::::::::::::{exercise} Oppgave 1
::::::::{jeopardy-2}
:::::::{jeopardy-question}
---
category: Ubestemte integraler
points: 100
---
Finn integralet 

$$
\int e^{-2x} \, \text{d}x
$$

::::::{jeopardy-answer}
$$
-\frac{1}{2} e^{-2x} + C
$$
::::::

:::::::


:::::::{jeopardy-question}
---
category: Bestemte integraler
points: 100
---
Regn ut

$$
\int\limits_0^3 \left(x^2 + 1\right) \, \text{d}x
$$



::::::{jeopardy-answer}
$$
12
$$
::::::

:::::::

:::::::{jeopardy-question}
---
category: Integrasjonsteknikk
points: 100
---
Finn integralet

$$
\int 2x e^{-x^2} \, \text{d}x
$$


::::::{jeopardy-answer}
$$
-e^{-x^2} + C
$$
::::::


:::::::


:::::::{jeopardy-question}
---
category: Anvendelser
points: 100
---
Regn ut volumet av omdreiningslegemet som fremkommer når vi dreier grafen til $f(x) = \sqrt{x}$ 360 grader om $x$-aksen mellom $x = 0$ og $x = 4$.



::::::{jeopardy-answer}
$$
V = 8\pi
$$
::::::

:::::::


:::::::{jeopardy-question}
---
category: Numerisk integrasjon
points: 100
---

Finn verdien programmet nedenfor skriver ut når det kjøres.

:::{code-block} python
---
linenos:
---
def f(x):
    return x**2 + 1

a = 0
b = 2
N = 10_000

I = 0
dx = (b - a) / N
for i in range(N):
    x = a + i * dx
    I = I + f(x) * dx

print(I)
:::
:::::::


:::::::{jeopardy-question}
---
category: Blanda
points: 100
---

:::::::

::::::::
:::::::::::::::