# Delvis integrasjon


:::{admonition} Læringsmål
---
class: tip
---
* Kunne bruke delvis integrasjon til å løse ubestemte og bestemte integraler.
* Kunne begrunne delvis integrasjon som en konsekvens av produktregelen for derivasjon og analysens fundamentalteorem.
:::


Siden integrasjon handler om å finne antideriverte, er det naturlig å snu seg mot derivasjonsreglene for å utvikle teknikker for å løse integraler. Her skal vi ta utgangspunkt i produktregelen for derivasjon for å utvikle en teknikk for å løse integraler som kalles **delvis integrasjon**.


:::::::::::::::{summary} Delvis integrasjon
For to funksjoner $u$ og $v$ gjelder

$$
\int u'(x) \cdot v(x) \, \d x = u(x) \cdot v(x) - \int u(x) \cdot v'(x) \, \d x
$$

Vi skriver dette ofte på en mer kompakt form som

$$
\boxed{\int u' \cdot v = u \cdot v - \int u \cdot v'}
$$


::::{admonition} Forklaring av formelen
---
class: theory, dropdown
---
Produktregelen for derivasjon sier at

$$
(u \cdot v)' = u' \cdot v + u \cdot v'
$$

Integrerer vi på hver side av likningen får vi

$$
\int (u \cdot v)' \, \d x = \int u' \cdot v \, \d x + \int u \cdot v' \, \d x
$$

På venstre side skal vi bare finne den antideriverte til $(u \cdot v)'$, og det er jo bare $u \cdot v + C$. Dermed får vi

$$
u \cdot v + C = \int u' \cdot v \, \d x + \int u \cdot v' \, \d x
$$

Dette kan vi skrive om til

$$
\int u' \cdot v \, \d x = u \cdot v - \int u \cdot v' \, \d x + C
$$

Vi kan "bake inn" integrasjonskonstanten i en av de andre ubestemte integralene siden de vil begge ha en integrasjonskonstant, og dermed får vi formelen for delvis integrasjon:

$$
\int u' \cdot v \, \d x = u \cdot v - \int u \cdot v' \, \d x
$$
::::


:::::::::::::::


---

Teknikken går ut på å omgjøre et "vanskelig" integral til et "enklere" integral vi kan antiderivere direkte: 


$$
\underbrace{\int u' \cdot v}_{\text{vanskelig integral}} = u\cdot v - \underbrace{\int u \cdot v'}_{\text{enkelt integral}}
$$



:::::::::::::::{example} Eksempel 1
Finn integralet

$$
\int x \cdot e^x \, \d x
$$


::::{solution}
---
dropdown: 0
---
Her kan vi ikke umiddelbart se noen enkel antiderivert. Men siden integralet er et produkt av to funksjoner, kan vi prøve oss på delvis integrasjon

$$
\int u' \cdot v = u \cdot v - \int u \cdot v'
$$

Vi tenker oss at vårt integral er venstresiden av formelen. Vi står fritt til å velge hvilken av funksjonene som skal være $u'$ og hvilken som skal være $v$. Men det er ofte bare én av valgene som gir oss et enklere integral vi kan løse. 

La oss først prøve å velge at $u' = x$ og at $v = e^x$. Da får vi at

$$
u' = x \limplies u = \dfrac{1}{2} x^2
$$

$$
v = e^x \limplies v' = e^x
$$

Setter vi dette inn i formelen for delvis integrasjon får vi

$$
\int u' \cdot v = u \cdot v - \int u \cdot v'
$$

$$
\int x \cdot e^x \, \d x = \dfrac{1}{2} x^2 e^x - \int \dfrac{1}{2} x^2 e^x \, \d x
$$

Dette ga oss bare et *enda* vanskeligere integral på høyre side, så dette var ikke et godt valg. 

La oss prøve det andre valget, nemlig at $u' = e^x$ og at $v = x$. Da får vi at

$$
u' = e^x \limplies u = e^x
$$

$$
v = x \limplies v' = 1
$$

Setter vi dette inn i formelen for delvis integrasjon får vi

$$
\int u' \cdot v = u \cdot v - \int u \cdot v'
$$

$$
\int x \cdot e^x \, \d x = e^x \cdot x - \int e^x \cdot 1 \, \d x
$$

Nå fikk vi et enklere integral vi kan løse:

$$
\begin{align*}
\int x \cdot e^x \, \d x &= e^x \cdot x - \int e^x \, \d x \\
\\
&= e^x \cdot x - e^x + C \\
\\
&= e^x \cdot (x - 1) + C
\end{align*}
$$

::::


:::::::::::::::