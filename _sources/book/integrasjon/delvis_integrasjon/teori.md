# Delvis integrasjon


:::{goals} Læringsmål
* kunne regne ut ubestemte og bestemte integraler ved bruk av delvis integrasjon
:::


Siden integrasjon handler om å finne antideriverte, er det naturlig å snu seg mot derivasjonsreglene for å utvikle teknikker for å løse integraler. Her skal vi ta utgangspunkt i produktregelen for derivasjon for å utvikle en teknikk for å løse integraler som kalles **delvis integrasjon**.


:::::::::::::::{summary} Integrasjonsteknikk: Delvis integrasjon
For to funksjoner $u$ og $v$ gjelder

$$
\int u'(x) \cdot v(x) \, \d x = u(x) \cdot v(x) - \int u(x) \cdot v'(x) \, \d x
$$

Vi skriver dette ofte på en mer kompakt form som

$$
\boxed{\int u' \cdot v = u \cdot v - \int u \cdot v'}
$$


::::{proof}
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

Vi ser derfor på venstresiden av formelen som vårt integral, og så bruker vi formelen til å omgjøre det til et enklere integral på høyresiden. Vi står fritt til å velge hvilken av funksjonene som skal være $u'$ og hvilken som skal være $v$.



:::::::::::::::{example} Eksempel 1
Finn integralet

$$ 
\int x \cdot e^x \, \d x
$$


::::{solution}
---
open:
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



---



:::::::::::::::{exercise} Underveisoppgave 1
Regn ut 

$$
\int x \ln x \d x
$$


:::::{answer}
$$
\int x \ln x \d x = \frac{1}{4}x^2(2\ln x - 1) + C
$$


::::{solution}
Vi prøver delvis integrasjon med

$$
u' = x \limplies u = \frac{1}{2}x^2
$$

$$
v = \ln x \limplies v' = \frac{1}{x}
$$

Setter vi dette inn i formelen for delvis integrasjon får vi

$$
\int u' \cdot v = u \cdot v - \int u \cdot v'
$$

$$
\begin{align*}
\int x \ln x \d x &= \frac{1}{2}x^2 \ln x - \int \frac{1}{2}x^2 \cdot \frac{1}{x} \d x \\
\\
&= \frac{1}{2}x^2 \ln x - \int \frac{1}{2}x \d x \\
\\
&= \frac{1}{2}x^2 \ln x - \frac{1}{2} \cdot \frac{1}{2}x^2 + C \\
\\
&= \frac{1}{2}x^2 \ln x - \frac{1}{4}x^2 + C \\
\\
&= \frac{1}{4}x^2(2\ln x - 1) + C
\end{align*}
$$
::::
:::::

:::::::::::::::



---



:::::::::::::::{example} Eksempel 2
Regn ut

$$
\int\limits_1^e 2x \ln x \d x
$$


::::{solution}
---
open:
---
Vi finner det ubestemte integralet først:

$$
\int 2x \ln x \d x
$$

Vi bruker delvis integrasjon med

$$
u' = 2x \limplies u = x^2
$$

$$
v = \ln x \limplies v' = \frac{1}{x}
$$

Setter vi dette inn i formelen for delvis integrasjon får vi

$$
\int u' \cdot v = u \cdot v - \int u \cdot v'
$$

$$
\begin{align*}
\int 2x \ln x \d x &= x^2 \ln x - \int x^2 \cdot \frac{1}{x} \d x \\
\\
&= x^2 \ln x - \int x \d x \\
\\
&= x^2 \ln x - \frac{1}{2}x^2 + C \\
\\
&= \frac{1}{2}x^2(2\ln x - 1) + C
\end{align*}
$$

En antiderivert er derfor $F(x) = \dfrac{1}{2}x^2(2\ln x - 1)$. Vi kan nå bruke dette til å regne ut det bestemte integralet:

$$
F(1) = \frac{1}{2} \cdot 1^2 (2\ln 1 - 1) = -\frac{1}{2}
$$

$$
F(e) = \frac{1}{2} \cdot e^2 (2\ln e - 1) = \frac{1}{2} \cdot e^2 (2 - 1) = \frac{1}{2}e^2
$$

Dermed er 

$$
\begin{align*}
\int\limits_1^e 2x \ln x \d x &= F(e) - F(1) \\
\\
&= \frac{1}{2}e^2 - \left(-\frac{1}{2}\right) \\
\\
&= \frac{1}{2}e^2 + \frac{1}{2} \\
\\
&= \frac{1}{2}(e^2 + 1)
\end{align*}
$$
::::

:::::::::::::::


---



:::::::::::::::{exercise} Underveisoppgave 2
Regn ut

$$
\int\limits_1^{e} x^2 \ln x \d x
$$



:::::{answer}
$$
\int\limits_1^{e} x^2 \ln x \d x = \frac{1}{9}(2e^3 + 1)
$$

::::{solution}
Vi finner det ubestemte integralet først:

$$
\int x^2 \ln x \d x
$$

Vi prøver delvis integrasjon med 

$$
u' = x^2 \limplies u = \frac{1}{3}x^3
$$

$$
v = \ln x \limplies v' = \frac{1}{x}
$$

Så setter vi dette inn i formelen for delvis integrasjon:

$$
\int u' \cdot v = u \cdot v - \int u \cdot v'
$$

$$
\begin{align*}
\int x^2 \ln x \d x &= \frac{1}{3}x^3 \ln x - \int \frac{1}{3}x^3 \cdot \frac{1}{x} \d x \\
\\
&= \frac{1}{3}x^3 \ln x - \int \frac{1}{3}x^2 \d x \\
\\
&= \frac{1}{3}x^3 \ln x - \frac{1}{3} \cdot \frac{1}{3}x^3 + C \\
\\
&= \frac{1}{3}x^3 \ln x - \frac{1}{9}x^3 + C \\
\\
&= \frac{1}{9}x^3(3\ln x - 1) + C
\end{align*}
$$

Siden vi skal regne ut et bestemt integral, setter vi $C = 0$ for å få en så enkel antiderivert som mulig. Vi har da at 

$$
F(x) = \frac{1}{9}x^3(3\ln x - 1)
$$

som gir

$$
F(1) = \frac{1}{9} \cdot 1^3 (3\ln 1 - 1) = -\frac{1}{9}
$$

$$
F(e) = \frac{1}{9} \cdot e^3 (3\ln e - 1) = \frac{1}{9} \cdot e^3 (3 - 1) = \frac{2}{9}e^3
$$

Dermed blir det bestemte integralet


$$
\begin{align*}
\int\limits_1^{e} x^2 \ln x \d x &= F(e) - F(1) \\
\\
&= \frac{2}{9}e^3 - \left(-\frac{1}{9}\right) \\
\\
&= \frac{2}{9}e^3 + \frac{1}{9} \\
\\
&= \frac{1}{9}(2e^3 + 1)
\end{align*}
$$
::::
:::::


:::::::::::::::