# Sammendrag: Trigonometri



::::::::::{masonry}
---
colums: 1 2 2
gap: 1rem
---


:::::::::{masonry-card} Buelengde og radianer
:::{plot}
width: 80%
fontsize: 32
axis: equal
axis: off
circle: (0, 0), 1, gray
let: u = 60
line-segment: (0, 0), (1, 0), blue
line-segment: (0, 0), (cos(u*pi/180), sin(u*pi/180)), blue
angle-arc: (0, 0), 0.3, 0, u, red, arrow
text: 0.25 * (cos(u*pi/180) + 1), 0.25 * sin(u*pi/180), "$\varphi$", center-center
angle-arc: (0, 0), 1, 0, u, blue
text: 1.1 * cos(u*pi/360), 1.1 * sin(u*pi/360), "$s$", center-center
text: 0.5 * cos(u * pi/ 180), 0.5 * sin(u * pi/180), "$r$", top-left
:::

$$
\varphi = \dfrac{s}{r}
$$


:::::::::

:::::::::{masonry-card} Enhetssirkelen og eksakte verdier

:::{plot}
width: 100%
xlabel: $\cos \varphi$
ylabel: $\sin \varphi$
fontsize: 22
axis: equal
ticks: off
circle: (0, 0), 1
let: r = 1.3
let: r1 = 0.55
let: r2 = 0.85
let: ds = 0.1
line-segment: (0, 0), (r1 * cos(pi/6), r1 * sin(pi/6)), blue
line-segment: (r2 * cos(pi/6), r2 * sin(pi/6)), (cos(pi/6), sin(pi/6)), blue
text: 0.7 * cos(pi/6), 0.7 * sin(pi/6), "$\frac{\pi}{6}$", center-center
text: r * cos(pi/6) + ds, r * sin(pi/6) - ds, "$\left(\frac{\sqrt{3}}{2}, \frac{1}{2}\right)$", center-center
line-segment: (0, 0), (r1 * cos(pi/4), r1 * sin(pi/4)), blue
line-segment: (r2 * cos(pi/4), r2 * sin(pi/4)), (cos(pi/4), sin(pi/4)), blue
text: 0.7 * cos(pi/4), 0.7 * sin(pi/4), "$\frac{\pi}{4}$", center-center
text: r * cos(pi/4) + ds, r * sin(pi/4), "$\left(\frac{\sqrt{2}}{2}, \frac{\sqrt{2}}{2}\right)$", center-center
line-segment: (0, 0), (r1 * cos(pi/3), r1 * sin(pi/3)), blue
line-segment: (r2 * cos(pi/3), r2 * sin(pi/3)), (cos(pi/3), sin(pi/3)), blue
text: 0.7 * cos(pi/3), 0.7 * sin(pi/3), "$\frac{\pi}{3}$", center-center
text: r * cos(pi/3) - ds, r * sin(pi/3) + ds, "$\left(\frac{1}{2}, \frac{\sqrt{3}}{2}\right)$", center-center
line-segment: (0, 0), (r1 * cos(2*pi/3), r1 * sin(2*pi/3)), blue
line-segment: (r2 * cos(2*pi/3), r2 * sin(2*pi/3)), (cos(2*pi/3), sin(2*pi/3)), blue
text: 0.7 * cos(2*pi/3), 0.7 * sin(2*pi/3), "$\frac{2\pi}{3}$", center-center
text: r * cos(2*pi/3) + ds, r * sin(2*pi/3) + ds, "$\left(-\frac{1}{2}, \frac{\sqrt{3}}{2}\right)$", center-center
line-segment: (0, 0), (r1 * cos(3*pi/4), r1 * sin(3*pi/4)), blue
line-segment: (r2 * cos(3*pi/4), r2 * sin(3*pi/4)), (cos(3*pi/4), sin(3*pi/4)), blue
text: 0.7 * cos(3*pi/4), 0.7 * sin(3*pi/4), "$\frac{3\pi}{4}$", center-center
text: r * cos(3*pi/4) - ds, r * sin(3*pi/4), "$\left(-\frac{\sqrt{2}}{2}, \frac{\sqrt{2}}{2}\right)$", center-center
line-segment: (0, 0), (r1 * cos(5*pi/6), r1 * sin(5*pi/6)), blue
line-segment: (r2 * cos(5*pi/6), r2 * sin(5*pi/6)), (cos(5*pi/6), sin(5*pi/6)), blue
text: 0.7 * cos(5*pi/6), 0.7 * sin(5*pi/6), "$\frac{5\pi}{6}$", center-center
text: r * cos(5*pi/6) - ds, r * sin(5*pi/6) - ds, "$\left(-\frac{\sqrt{3}}{2}, \frac{1}{2}\right)$", center-center
line-segment: (0, 0), (r1 * cos(7*pi/6), r1 * sin(7*pi/6)), blue
line-segment: (r2 * cos(7*pi/6), r2 * sin(7*pi/6)), (cos(7*pi/6), sin(7*pi/6)), blue
text: 0.7 * cos(7*pi/6), 0.7 * sin(7*pi/6), "$\frac{7\pi}{6}$", center-center
text: r * cos(7*pi/6) - ds, r * sin(7*pi/6) + ds, "$\left(-\frac{\sqrt{3}}{2}, -\frac{1}{2}\right)$", center-center
line-segment: (0, 0), (r1 * cos(5*pi/4), r1 * sin(5*pi/4)), blue
line-segment: (r2 * cos(5*pi/4), r2 * sin(5*pi/4)), (cos(5*pi/4), sin(5*pi/4)), blue
text: 0.7 * cos(5*pi/4), 0.7 * sin(5*pi/4), "$\frac{5\pi}{4}$", center-center
text: r * cos(5*pi/4) - ds, r * sin(5*pi/4), "$\left(-\frac{\sqrt{2}}{2}, -\frac{\sqrt{2}}{2}\right)$", center-center
line-segment: (0, 0), (r1 * cos(4*pi/3), r1 * sin(4*pi/3)), blue
line-segment: (r2 * cos(4*pi/3), r2 * sin(4*pi/3)), (cos(4*pi/3), sin(4*pi/3)), blue
text: 0.7 * cos(4*pi/3), 0.7 * sin(4*pi/3), "$\frac{4\pi}{3}$", center-center
text: r * cos(4*pi/3) + ds, r * sin(4*pi/3) - ds, "$\left(-\frac{1}{2}, -\frac{\sqrt{3}}{2}\right)$", center-center
line-segment: (0, 0), (r1 * cos(5*pi/3), r1 * sin(5*pi/3)), blue
line-segment: (r2 * cos(5*pi/3), r2 * sin(5*pi/3)), (cos(5*pi/3), sin(5*pi/3)), blue
text: 0.7 * cos(5*pi/3), 0.7 * sin(5*pi/3), "$\frac{5\pi}{3}$", center-center
text: r * cos(5*pi/3) - ds, r * sin(5*pi/3) - ds, "$\left(\frac{1}{2}, -\frac{\sqrt{3}}{2}\right)$", center-center
line-segment: (0, 0), (r1 * cos(7*pi/4), r1 * sin(7*pi/4)), blue
line-segment: (r2 * cos(7*pi/4), r2 * sin(7*pi/4)), (cos(7*pi/4), sin(7*pi/4)), blue
text: 0.7 * cos(7*pi/4), 0.7 * sin(7*pi/4), "$\frac{7\pi}{4}$", center-center
text: r * cos(7*pi/4) + ds, r * sin(7*pi/4), "$\left(\frac{\sqrt{2}}{2}, -\frac{\sqrt{2}}{2}\right)$", center-center
line-segment: (0, 0), (r1 * cos(11*pi/6), r1 * sin(11*pi/6)), blue
line-segment: (r2 * cos(11*pi/6), r2 * sin(11*pi/6)), (cos(11*pi/6), sin(11*pi/6)), blue
text: 0.7 * cos(11*pi/6), 0.7 * sin(11*pi/6), "$\frac{11\pi}{6}$", center-center
text: r * cos(11*pi/6) + ds, r * sin(11*pi/6) + ds, "$\left(\frac{\sqrt{3}}{2}, -\frac{1}{2}\right)$", center-center
point: (cos(pi/6), sin(pi/6))
point: (cos(pi/4), sin(pi/4))
point: (cos(pi/3), sin(pi/3))
point: (cos(2*pi/3), sin(2*pi/3))
point: (cos(3*pi/4), sin(3*pi/4))
point: (cos(5*pi/6), sin(5*pi/6))
point: (cos(7*pi/6), sin(7*pi/6))
point: (cos(5*pi/4), sin(5*pi/4))
point: (cos(4*pi/3), sin(4*pi/3))
point: (cos(5*pi/3), sin(5*pi/3))
point: (cos(7*pi/4), sin(7*pi/4))
point: (cos(11*pi/6), sin(11*pi/6))
:::

:::::::::



:::::::::{masonry-card} Identiteter

$$
\begin{align*}
\cos^2 x + \sin^2 x = 1 \\
\\
\cos(2x) = \cos^2 x - \sin^2 x \\
\\
\sin(2x) = 2\cos x \sin x \\
\end{align*}
$$


:::::::::


:::::::::{masonry-card} Rotasjon med 90 grader
:::{plot}
xlabel: $\cos \varphi$
ylabel: $\sin \varphi$
axis: equal
ticks: off
fontsize: 28
width: 100%
circle: (0, 0), 1
let: u = 60
let: v = u + 90
let: w = u - 90
vector: (0, 0), (cos(u*pi/180), sin(u*pi/180)), blue
vector: (0, 0), (cos(v*pi/180), sin(v*pi/180)), red
vector: (0, 0), (cos(w*pi/180), sin(w*pi/180)), purple
point: (cos(u*pi/180), sin(u*pi/180))
point: (cos(v*pi/180), sin(v*pi/180))
point: (cos(w*pi/180), sin(w*pi/180))
angle-arc: (0, 0), 0.2, 0, u, blue, arrow
angle-arc: (0, 0), 0.3, u, v, red, arrow
angle-arc: (0, 0), 0.4, u, w, purple, arrow
text: 0.3 * cos(u*pi/360), 0.3 * sin(u*pi/360), "$\varphi$", center-center
text: 0.5 * cos(0.5*(u + v)*pi/180), 0.5 * sin(0.5*(u + v)*pi/180), "$+\frac{\pi}{2}$", center-center
text: 0.65 * cos(0.5*(w + u)*pi/180), 0.65 * sin(0.5*(w + u)*pi/180), "$-\frac{\pi}{2}$", center-center
text: cos(u*pi/180), sin(u*pi/180), "$\vec r(\varphi)$", top-right
text: cos(v*pi/180), sin(v*pi/180), "$\vec r(\varphi + \frac{\pi}{2})$", top-left
text: cos(w*pi/180), sin(w*pi/180), "$\vec r(\varphi - \frac{\pi}{2})$", bottom-right
:::

$$
\begin{align*}
\cos \left(\varphi \pm \dfrac{\pi}{2}\right) &= \mp\sin \varphi \\
\\
\sin \left(\varphi \pm \dfrac{\pi}{2}\right) &= \pm\cos \varphi
\end{align*}
$$



:::::::::

:::::::::{masonry-card} Rotasjon med 180 grader
:::{plot}
xlabel: $\cos \varphi$
ylabel: $\sin \varphi$
axis: equal
ticks: off
width: 100%
fontsize: 28
circle: (0, 0), 1
let: u = pi/3
let: v = u - pi
let: w = u + pi
vector: (0, 0), (cos(u), sin(u)), blue
vector: (0, 0), (cos(v), sin(v)), red
vector: (0, 0), (cos(w), sin(w)), red
angle-arc: (0, 0), 0.4, 0, u*180/pi, blue, arrow
angle-arc: (0, 0), 0.3, u*180/pi, v*180/pi, red, arrow
angle-arc: (0, 0), 0.35, u*180/pi, w*180/pi, red, arrow
text: 0.5 * cos(u/2), 0.45 * sin(u/2), "$\varphi$", center-center
text: 0.5 * cos(v/2), 0.5 * sin(v/2), "$-\pi$", center-center
text: 0.5 * cos(w/2), 0.5 * sin(w/2), "$+\pi$", center-center
line-segment: (cos(u), sin(u)), (cos(v), sin(v)), dashed, gray
point: (cos(u), sin(u))
point: (cos(v), sin(v))
text: cos(u), sin(u), "$\vec r(\varphi)$", top-right
text: cos(v), sin(v), "$\vec r(\varphi \pm \pi)$", bottom-left
:::

$$
\begin{align*}
\cos(\varphi \pm \pi) &= -\cos \varphi \\
\\
\sin(\varphi \pm \pi) &= -\sin \varphi
\end{align*}
$$

:::::::::


:::::::::{masonry-card} Speiling om $x$-aksen

:::{plot}
axis: equal
ticks: off
width: 100%
fontsize: 28
circle: (0, 0), 1
let: u = 50
let: v = -50
vector: (0, 0), (cos(u*pi/180), sin(u*pi/180)), blue
vector: (0, 0), (cos(v*pi/180), sin(v*pi/180)), blue
point: (cos(u*pi/180), sin(u*pi/180))
point: (cos(v*pi/180), sin(v*pi/180))
angle-arc: (0, 0), 0.35, 0, u, red, arrow
angle-arc: (0, 0), 0.2, 0, v, blue, arrow
text: 0.45 * cos(u*pi/360), 0.45 * sin(u*pi/360), "$\varphi$", center-center
text: 0.2 * cos(u*pi/360), -0.2 * sin(u*pi/360), "$-\varphi$", bottom-right
line-segment: (cos(u * pi/180), sin(u*pi/180)), (cos(v * pi/180), sin(v*pi/180)), dashed, red
line-segment: (0, sin(u * pi/180)), (cos(u * pi/180), sin(u*pi/180)), dashed, teal
line-segment: (0, sin(v * pi/180)), (cos(v * pi/180), sin(v*pi/180)), dashed, teal
xlabel: $\cos \varphi$
ylabel: $\sin \varphi$
text: cos(u*pi/180), sin(u*pi/180), "$\vec r(\varphi)$", top-right
text: cos(v*pi/180), sin(v*pi/180), "$\vec r(-\varphi)$", bottom-right
:::


$$
\begin{align*}
\cos (-\varphi) &= \cos \varphi \\
\\
\sin (-\varphi) &= -\sin \varphi
\end{align*}
$$

:::::::::


:::::::::{masonry-card} Speiling om $y$-aksen
:::{plot}
axis: equal
ticks: off
width: 100%
fontsize: 28
circle: (0, 0), 1
let: u = 50
let: v = 180 - u
vector: (0, 0), (cos(u*pi/180), sin(u*pi/180)), blue
vector: (0, 0), (cos(v*pi/180), sin(v*pi/180)), blue
point: (cos(u*pi/180), sin(u*pi/180))
point: (cos(v*pi/180), sin(v*pi/180))
angle-arc: (0, 0), 0.35, 0, u, red, arrow
angle-arc: (0, 0), 0.35, 180, v, red, arrow
text: 0.45 * cos(u*pi/360), 0.45 * sin(u*pi/360), "$\varphi$", center-center
text: 0.45 * 0.5 * (-1 + cos(v*pi/180)) - 0.1, 0.45 * 0.5 * sin(v*pi/180), "$\varphi$", center-center
line-segment: (cos(u * pi/180), sin(u*pi/180)), (cos(v * pi/180), sin(v*pi/180)), dashed, red
line-segment: (cos(u * pi/ 180), sin(u * pi/180)), (cos(u * pi/180), 0), dashed, teal
line-segment: (cos(v * pi/180), sin(v * pi/180)), (cos(v * pi/180), 0), dashed, teal
xlabel: $\cos \varphi$
ylabel: $\sin \varphi$
text: cos(u*pi/180), sin(u*pi/180), "$\vec r(\varphi)$", top-right
text: cos(v*pi/180), sin(v*pi/180), "$\vec r(\pi-\varphi)$", top-left
:::

$$
\begin{align*}
\cos (\pi - \varphi) &= -\cos \varphi \\
\\
\sin (\pi - \varphi) &= \sin \varphi
\end{align*}
$$

:::::::::


:::::::::{masonry-card} Grunnlikningen $\cos x = a$

:::{plot}
width: 100%
axis: equal
ticks: off
fontsize: 28
xlabel: $\cos x$
ylabel: $\sin x$
circle: (0, 0), 1
let: u = pi/4.5
let: v = -u
line-segment: (0, 0), (cos(u), sin(u)), blue
line-segment: (0, 0), (cos(v), sin(v)), blue
line-segment: (cos(u), sin(u)), (cos(u), 0), dashed, red
line-segment: (cos(v), sin(v)), (cos(v), 0), dashed
angle-arc: (0, 0), 0.4, 0, u * 180/pi, red, arrow
angle-arc: (0, 0), 0.3, 0, v * 180/pi, red, arrow
point: (cos(u), sin(u))
point: (cos(v), sin(v))
text: 0.55 * cos(u/2), 0.45 * sin(u/2), "$x_1$", center-center
text: 0.45 * cos(v/2), 0.45 * sin(v/2), "$x_2$", center-center
:::


:::::::::


:::::::::{masonry-card} Grunnlikningen $\sin x = a$

:::{plot}
width: 100%
axis: equal
ticks: off
fontsize: 28
xlabel: $\cos x$
ylabel: $\sin x$
circle: (0, 0), 1
let: u = pi/4.5
let: v = pi - u
line-segment: (0, 0), (cos(u), sin(u)), blue
line-segment: (0, 0), (cos(v), sin(v)), blue
line-segment: (cos(u), sin(u)), (cos(v), sin(v)), dashed, red
angle-arc: (0, 0), 0.4, 0, u * 180/pi, red, arrow
angle-arc: (0, 0), 0.3, 0, v * 180/pi, red, arrow
point: (cos(u), sin(u))
point: (cos(v), sin(v))
text: 0.55 * cos(u/2), 0.55 * sin(u/2), "$x_1$", center-center
text: 0.45 * cos(v/2), 0.45 * sin(v/2), "$x_2$", center-center
:::


:::::::::


:::::::::{masonry-card} Generelle cosinusfunksjoner

:::{plot}
ticks: off
fontsize: 24
width: 100%
let: A = 2
let: d = 3
let: T = 3
let: omega = 2 * pi / T
let: phi = -2.5*pi / 3
function: A * cos(omega * x + phi) + d
ymin: 0
xmin: 0
hline: d, dashed, red
text: 0, d, $d$, center-left
vline: (- phi + 2*pi) / omega, d, d + A, dashed, red
text: (-phi + 2*pi) / omega, 0.5 * (d + d + A), $A$, center-left
bar: ((-phi) / omega, d + A + 0.2), T, h
text: (-phi) / omega + 0.5 * T, d + A + 0.4, $T$, top-center
bar: (0, d + A + 0.3), -phi/omega, h
text: -phi/omega * 0.5, d + A + 0.5, $\displaystyle \frac{\varphi}{\omega}$, top-center
hline: d - A, 0, (pi - phi) / omega, dashed, gray
text: 0, d - A, "$y_\mathrm{bunn}$", center-left
hline: d + A, 0, (- phi) / omega, dashed, gray
text: 0, d + A, "$y_\mathrm{topp}$", center-left
::: 

$$
f(x) = A \cos(\omega x - \varphi) + d
$$


:::::::::


:::::::::{masonry-card} Generelle sinusfunksjoner

:::{plot}
nocache:
ticks: off
fontsize: 24
width: 100%
let: A = 2
let: d = 3
let: T = 3
let: omega = 2 * pi / T
let: phi = -2.5*pi / 3
function: A * sin(omega * x + phi) + d
ymin: 0
xmin: 0
hline: d, dashed, red
text: 0, d, $d$, center-left
vline: (pi/2 - phi + 2*pi) / omega, d, d + A, dashed, red
text: (pi/2 - phi + 2*pi) / omega, 0.5 * (d + d + A), $A$, center-left
bar: ((pi/2 - phi) / omega, d + A + 0.2), T, h
text: (pi/2 - phi) / omega + 0.5 * T, d + A + 0.4, $T$, top-center
bar: (0, d + 0.3), -phi/omega, h
text: -phi/omega * 0.5, d + 0.5, $\displaystyle \frac{\varphi}{\omega}$, top-center
hline: d - A, 0, (-pi/2 - phi) / omega, dashed, gray
text: 0, d - A, "$y_\mathrm{bunn}$", center-left
hline: d + A, 0, (pi/2 - phi) / omega, dashed, gray
text: 0, d + A, "$y_\mathrm{topp}$", center-left
::: 

$$
f(x) = A \sin(\omega x - \varphi) + d
$$


:::::::::


:::::::::{masonry-card} Omforming til cosinusfunksjon

$$
a \cos(\omega x) + b \sin(\omega x) = A \cos(\omega x - \varphi)
$$

$$
a = A \cos \varphi \and b = A \sin \varphi
$$

$$
A = \sqrt{a^2 + b^2}
$$

:::::::::


:::::::::{masonry-card} Derivasjon

$$
\begin{align*}
(\cos x)' &= -\sin x \\
\\
(\sin x)' &= \cos x
\end{align*}
$$

:::::::::


::::::::::

