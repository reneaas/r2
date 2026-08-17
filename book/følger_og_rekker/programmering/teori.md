# Programmering med følger og rekker

:::{goals} Læringsmål
* Kunne lese, tolke og skrive programmer som regner ut leddene i en følge
* Kunne lese, tolke og skrive programmer som regner ut summen av leddene i en rekke
:::

Når vi skal bruke programmering til å regne med følger og rekker, så er det en viktig forutsetning av vi vet hvordan vi skriver `for`{l=python}-løkker og `while`{l=python}-løkker. Dette er fordi vi ofte skal gjenta en regneoperasjon mange ganger. 

## `for`{l=python}-løkker

Med en `for`{l=python}-løkke kan vi gjenta en regneoperasjon et bestemt antall ganger ved å bruke `range`{l=python}-funksjonen. 


:::::::::::::::{summary} `for`{l=python}-løkker med `range`{l=python}-funksjonen
Den generelle måten å skrive en `for`{l=python}-løkke på er

:::{code-block} python
for n in range(start, stopp, step):
    # kode som skal gjentas

:::

Da vil `range`{l=python}-funksjonen generere en tallfølge som tilordnes variabelen `n`{l=python} med følgende egenskaper:
* det første tallet er lik verdien til `start`{l=python}
* alle andre tall har en avstand mellom seg lik `step`{l=python}
* det siste tall som genereres er mindre enn verdien til `stopp`{l=python}



:::::::::::::::


:::::::::::::::{example} Eksempel 1
I programmet nedenfor er 

* `start`{l=python} lik `1`{l=python} som betyr at det første tallet som genereres er $1$
* `stopp`{l=python} lik `11`{l=python} som betyr at det siste tallet kan maksimalt være $10$
* `step`{l=python} lik `2`{l=python} som betyr at avstanden mellom tallene som genereres er $2$


Altså skriver programmet ut tallfølgen $1, 3, 5, 7, 9$


:::{interactive-code}
for n in range(1, 11, 2):
    print(n)


:::


:::::::::::::::


---



:::::::::::::::{exercise} Underveisoppgave 1
Ta quizen!

::::::::{quiz-2}
:::::::{quiz-question}
Hvilken tallfølge skrives ut av programmet?

:::{code-block} python
---
linenos:
---
for n in range(2, 10, 2):
    print(n)


:::


::::::{quiz-answer}
---
correct:
---
$$
2, 4, 6, 8
$$
::::::

::::::{quiz-answer}
$$
2, 4, 6, 8, 10
$$
::::::


::::::{quiz-answer}
$$
4, 6, 8, 10
$$
::::::

::::::{quiz-answer}
$$
2, 10, 2
$$
::::::

:::::::


:::::::{quiz-question}
Hvilken tallfølge skrives ut av programmet?

:::{code-block} python
---
linenos:
---
for n in range(-4, 5, 2):
    print(n)


:::


::::::{quiz-answer}
---
correct:
---
$$
-4, -2, 0, 2, 4
$$
::::::


::::::{quiz-answer}
$$
-4, -2, 0, 2, 4, 5
$$
::::::

::::::{quiz-answer}
$$
-4, -3, \ldots, 3, 4
$$
::::::

::::::{quiz-answer}
$$
-4, 5, 2
$$
::::::


:::::::


:::::::{quiz-question}
Hvilken tallfølge skrives ut av programmet?

:::{code-block} python
---
linenos:
---
for n in range(1, 6, 1):
    print(n)


:::



::::::{quiz-answer}
---
correct:
---
$$
1, 2, 3, 4, 5
$$
::::::


::::::{quiz-answer}
$$
1, 2, 3, 4, 5, 6
$$
::::::


::::::{quiz-answer}
$$
1, 6, 1
$$
::::::


::::::{quiz-answer}
$$
2, 3, 4, 5, 6
$$
::::::



:::::::



:::::::{quiz-question}
Hvilken tallfølge skrives ut av programmet?

:::{code-block} python
---
linenos:
---
for n in range(10, 1, -3):
    print(n)


:::


::::::{quiz-answer}
---
correct:
---
$$
10, 7, 4
$$
::::::

::::::{quiz-answer}
$$
10, 7, 4, 1
$$
::::::


::::::{quiz-answer}
$$
1, 4, 7, 10
$$
::::::


::::::{quiz-answer}
$$
-3, 0, 3, 6, 9
$$
::::::


:::::::


::::::::


:::::::::::::::


:::::::::::::::{summary} `for`{l=python}-løkker med standardverdier
En `for`{l=python}-løkke med `range`{l=python}-funksjonen kan skrives som

:::{code-block} python
for n in range(stopp):
    # kode som skal gjentas

:::

der `start = 0`{l=python} og `step = 1`{l=python} er standardverdier. Programmet vil derfor generere tallfølgen

$$
0, 1, 2, \ldots, \text{stopp} - 1
$$


Vi kan også skrive 

:::{code-block} python
for n in range(start, stopp):
    # kode som skal gjentas

:::

der `step = 1`{l=python} er standardverdi. Programmet vil derfor generere tallfølgen

$$
\text{start}, \text{start} + 1, \text{start} + 2, \ldots, \text{stopp} - 1
$$


:::::::::::::::




## `while`{l=python}-løkker


## Programmering med følger
Vi kan bruke både `for`{l=python}-løkker og `while`{l=python}-løkker til å regne ut leddene i en følge. Da bruker vi `n`{l=python} til å holde styr på hvilket ledd vi er i følgen, og så bruker vi en variabel for å regne ut de ulike tallene i tallfølgen.


:::::::::::::::{example} Eksempel 
En tallfølge $\{a_n\}$ er gitt ved

$$
a_n = 3 + 2(n - 1) \qfor n = 1, 2, 3, \ldots
$$

Lag et program som skriver de $5$ første leddene i følgen.


::::{solution}
---
open:
---
Vi kan bruke en `for`{l=python}-løkke for $n = 1, 2, 3, 4, 5$

:::{interactive-code}
for n in range(1, 6):
    a = 3 + 2 * (n - 1)
    print(a)


:::

::::
:::::::::::::::


:::::::::::::::{exercise} Underveisoppgave
Programmet nedenfor skriver ut de $5$ første leddene i en følge $\{a_n\}$.

Hvilke verdier skriver programmet ut?

:::{interactive-code}
---
predict:
---
for n in range(1, 6):
    a = 2**n
    print(a)


:::

:::::::::::::::


## Programmering med rekker