# Oppgaver: Programmering med følger og rekker


:::::::::::::::{exercise} Oppgave 1
Ta quizen!

::::::::{quiz-2}
:::::::{quiz-question}
Hvilke tall skrives ut av programmet?

```{code-block} python
---
linenos:
---
for n in range(1, 5):
    print(n)


```

::::::{quiz-answer}
---
correct:
---
$$
1, 2, 3, 4
$$
::::::

::::::{quiz-answer}
$$
1, 5 
$$
::::::

::::::{quiz-answer}
$$
1, 2, 3, 4, 5
$$
::::::


::::::{quiz-answer}
$$
2, 3, 4, 5
$$
::::::




:::::::


:::::::{quiz-question}
Hvilke tall skrives ut av programmet?

```{code-block} python
---
linenos:
---
for n in range(1, 10, 3):
    print(n)
```


::::::{quiz-answer}
---
correct:
---
$$
1, 4, 7
$$
::::::


::::::{quiz-answer}
$$
1, 4, 7, 10
$$
::::::


::::::{quiz-answer}
$$
1, 10, 3
$$
::::::

::::::{quiz-answer}
$$
1, 3, 10
$$
::::::


:::::::


:::::::{quiz-question}
Hvilke tall skrives ut av programmet?

```{code-block} python
---
linenos:
---
for n in range(4):
    print(n)

```


::::::{quiz-answer}
---
correct:
---
$$
0, 1, 2, 3
$$
::::::


::::::{quiz-answer}
$$
0, 1, 2, 3, 4
$$
::::::

::::::{quiz-answer}
$$
1, 2, 3, 4
$$
::::::


::::::{quiz-answer}
$$
4
$$
::::::

:::::::


:::::::{quiz-question}
Hvilke tall skrives ut av programmet?

```{code-block} python
---
linenos:
---
for n in range(0, 100, 20):
    print(n)

```


::::::{quiz-answer}
---
correct:
---
$$
0, 20, 40, 60, 80
$$
::::::


::::::{quiz-answer}
$$
0, 20, 40, 60, 80, 100
$$
::::::

::::::{quiz-answer}
$$
0, 20, 100
$$
::::::

::::::{quiz-answer}
$$
0, 100, 20
$$
::::::


:::::::


::::::::

:::::::::::::::


---


:::::::::::::::{exercise} Oppgave 2
:::::::::::::{part} a
Hvilke tall skrives ut av programmet nedenfor? 


:::{interactive-code}
---
predict:
---
for n in range(2, 7, 3):
    print(n)


:::


:::::::::::::


:::::::::::::{part} b
Hvilke tall skrives ut av programmet nedenfor?

:::{interactive-code}
---
predict:
---
for n in range(12, 4, -3):
    print(n)


:::

:::::::::::::



:::::::::::::{part} c
Hvilke tall skrives ut av programmet nedenfor?

:::{interactive-code}
---
predict:
---
for n in range(-3, 4):
    print(n)


:::

:::::::::::::


:::::::::::::{part} d
Hvilke tall skrives ut av programmet nedenfor?

:::{interactive-code}
---
predict:
---
for n in range(5):
    print(n)


:::

:::::::::::::

:::::::::::::::


---



:::::::::::::::{exercise} Oppgave 1

:::::::::::::{part} a
Nedenfor vises et program som skriver ut noen ledd i en følge $\{a_n\}$.

Forutsi hva programmet skriver ut og sjekk svaret ditt.


:::{interactive-code}
---
predict:
---
a = 2
d = 5

for n in range(5):
    print(a)
    a = a + d


:::

:::::::::::::


:::::::::::::{part} b
Nedenfor vises et program som skriver ut noen ledd i en følge $\{b_n\}$.

Forutsi hva programmet skriver ut og sjekk svaret ditt.


:::{interactive-code}
---
predict:
---
b = -3
d = 2

for n in range(4):
    print(b)
    b = b + d


:::


:::::::::::::



:::::::::::::{part} c
Nedenfor vises et program som skriver ut noen ledd i en følge $\{c_n\}$.

Forutsi hva programmet skriver ut og sjekk svaret ditt.

:::{interactive-code}
---
predict:
---
c = 16
k = 1/2

for n in range(5):
    print(c)
    c = c * k


:::

:::::::::::::



:::::::::::::{part} d
Nedenfor vises et program som skriver ut noen ledd i en følge $\{d_n\}$.

Forutsi hva programmet skriver ut og sjekk svaret ditt.


:::{interactive-code}
---
predict:
---
d = -3

for n in range(5):
    print(d)
    d = d + n


:::

:::::::::::::

:::::::::::::::


---



:::::::::::::::{exercise} Oppgave 2
:::::::::::::{part} a
Programmet nedenfor regner ut summen av en rekke $S$.

Forutsi hva programmet skriver ut og sjekk svaret ditt.


:::{interactive-code}
---
predict:
---
a = 2
d = 4
S = 0

for n in range(1, 51):
    S = S + a
    a = a + d

print(S)


:::

:::::::::::::


:::::::::::::{part} b
Programmet nedenfor regner ut summen av en rekke $R$.

Forutsi hva programmet skriver ut og sjekk svaret ditt.


:::{interactive-code}
---
predict:
---
b = -3
d = 6
R = 0
for n in range(1, 21):
    R = R + b
    b = b + d

print(R)

:::


:::::::::::::


:::::::::::::{part} c
Programmet nedenfor regner ut summen av en rekke $L$.

Forutsi hva programmet skriver ut og sjekk svaret ditt.


:::{interactive-code}
---
predict:
---
a = 32 
L = 0
for n in range(1, 100001):
    L = L + a
    a = a / 2

print(L)


:::

:::::::::::::


:::::::::::::{part} d
Programmet nedenfor regner ut summen av en rekke $M$.

Forutsi hva programmet skriver ut og sjekk svaret ditt.

:::{interactive-code}
---
predict:
---
a = 12
M = 0
for n in range(1, 100001):
    M = M + a
    a = a / 4

print(M)

:::

:::::::::::::

:::::::::::::::


---


:::::::::::::::{exercise} Oppgave 3
En følge $\{a_n\}$ er gitt ved 

$$
a_n = \dfrac{1}{2^n} \qfor n = 1, 2, \ldots
$$


:::::::::::::{part} a
Lag et program som skriver ut de 5 første leddene i følgen.

:::{interactive-code}
# Din kode her


:::


:::::::::::::


En rekke $S$ er gitt ved 

$$
S = a_1 + a_2 + \ldots + a_{100}
$$


:::::::::::::{part} b
Lag et program som finner summen $S$.

:::{interactive-code}
# Din kode her


:::

:::::::::::::

:::::::::::::::

