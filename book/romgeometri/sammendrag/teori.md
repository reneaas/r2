# Romgeometri: Sammendrag



::::::::::{masonry}
---
colums: 1 2 2
gap: 1rem
---

:::::::::{masonry-card} Kryssproduktet
$$
\vec{a} \times \vec{b} = \mqty|\vec{e}_x & \vec{e}_y & \vec{e}_z \\ a_x & a_y & a_z \\ b_x & b_y & b_z|
$$


* $\vec{a} \times \vec{b}$ er ortogonal med både $\vec{a}$ and $\vec{b}$.
* $\vec{a} \times \vec{b} = -(\vec{b} \times \vec{a})$
* $|\vec{a} \times \vec{b}| = |\vec{a}| \cdot |\vec{b}| \cdot \sin\varphi$, der $\varphi$ er vinkelen mellom $\vec{a}$ og $\vec{b}$.


:::::::::


:::::::::{masonry-card} Skalarproduktet

$$
\vec a \cdot \vec b = a_xb_x + a_yb_y + a_zb_z
$$

$$
\vec a \cdot \vec b = |\vec a|\cdot |\vec b|\cdot \cos\varphi
$$


:::::::::


:::::::::{masonry-card} Areal av trekant
Arealet av en trekant $ABC$ er

$$
G = \dfrac{1}{2}|\lvec{AB}\times \lvec{AC}|
$$


:::::::::


:::::::::{masonry-card} Volum av pyramide

:::{interactive-plot3d}
width: 100%
height: 250px
align: center
fontsize: 24
ylabel: none
xrange: (0, 5)
yrange: (0, 7)
zrange: (-1, 7)
let: ax = 3
let: ay = 0
let: az = 0
let: bx = 0
let: by = 4
let: bz = 0
let: Ax = 1
let: Ay = 1
let: Az = 0
let: Bx = Ax + ax
let: By = Ay + ay
let: Bz = Az + az
let: Cx = Bx + bx
let: Cy = By + by
let: Cz = Bz + bz
let: Dx = Cx - ax
let: Dy = Cy - ay
let: Dz = Cz - az
let: hx = 2
let: hy = 0
let: hz = 4
let: Tx = Ax + hx
let: Ty = Ay + hy
let: Tz = Az + hz
ngon: [(Ax, Ay, Az), (Bx, By, Bz), (Cx, Cy, Cz), (Dx, Dy, Dz)], color=blue, alpha=0.25, edgecolor=none
line-segment: start=(Ax, Ay, Az), end=(Bx, By, Bz), linestyle=solid, color=black
line-segment: start=(Bx, By, Bz), end=(Cx, Cy, Cz), linestyle=solid, color=black
line-segment: start=(Cx, Cy, Cz), end=(Dx, Dy, Dz), linestyle=dashdot, color=black
line-segment: start=(Ax, Ay, Az), end=(Tx, Ty, Tz), linestyle=solid, color=black
line-segment: start=(Bx, By, Bz), end=(Tx, Ty, Tz), linestyle=solid, color=black
line-segment: start=(Cx, Cy, Cz), end=(Tx, Ty, Tz), linestyle=solid, color=black
line-segment: start=(Dx, Dy, Dz), end=(Tx, Ty, Tz), linestyle=dashdot, color=black
vector: (Ax, Ay, Az), (Ax + hx, Ay + hy, Az + hz), red
vector: (Ax, Ay, Az), (Bx, By, Bz), blue
vector: (Ax, Ay, Az), (Dx, Dy, Dz), blue
text: at=(Ax + 0.7 * hx, Ay + 0.7 * hy, Az + 0.7 * hz), value="$\vec{c}$", ha=right, va=bottom
text: at=((Ax + Bx + Cx + Dx)/4, (Ay + By + Cy + Dy)/4, (Az + Bz + Cz + Dz)/4), value="$|\vec{G}|$", ha=center, va=center
text: at=(0.5 * (Ax + Bx), 0.5 * (Ay + By), 0.5 * (Az + Bz)), value="$\vec{a}$", ha=right, va=top
text: at=(0.5 * (Ax + Dx), 0.5 * (Ay + Dy), 0.5 * (Az + Dz)), value="$\vec{b}$", ha=right, va=bottom
let: s = 0.4
let: Gx = s * (ay * bz - az * by)
let: Gy = s * (az * bx - ax * bz)
let: Gz = s * (ax * by - ay * bx)
vector: (Ax, Ay, Az), (Ax + Gx, Ay + Gy, Az + Gz), blue
text: at=(Ax + Gx, Ay + Gy, Az + Gz), value="$\vec{G}$", ha=center, va=bottom
ticks: off
azim: -65
axis: off
text: at=(Tx, Ty, Tz), value="$T$", ha=center, va=bottom
:::


En pyramide med grunnflatevektor $\vec{G}$ og forflytningsvektor $\vec{c}$ er gitt ved 

$$
V = \dfrac{|\vec{G} \cdot \vec{c}|}{3}
$$


:::::::::


:::::::::{masonry-card} Parameterframstilling for linjer
Gitt et punkt $A$ og en retningsvektor $\vec v$, så er en parameterframstilling gitt ved 

$$
\vec r(t) = \lvec{OA} + \vec{v} \cdot t
$$

:::::::::


:::::::::{masonry-card} Avstand fra punkt til linje
:::{plot}
figsize: (4, 3)
align: center
width: 60%
line: 1, -2, solid, blue
point: (1, 3)
text: 1, 3, "$P$", top-left
text: 0.5 * (1 + 3), 0.5 * (1 + 3), "$L$", top-right
line-segment: (1, 3), (3, 1), dashed, gray
axis: equal
xmin: -1
xmax: 5
ymin: -1
ymax: 5
polygon: (2.6, 0.6), (3, 1), (2.6, 1.4), (2.2, 1)
axis: off
fontsize: 24
text: 5, 3, "$\ell$", top-right
point: (0, -2)
text: -0.15, -2, "$A$", center-left
vector: (0, -2), (1.75, -0.25), red
text: 0.5 * (0 + 1.75), 0.5 * (-2 + -0.25), "$\vec{v}$", bottom-right
vector: (0, -2), (1, 3), red
text: 0.5 * (0 + 1), 0.5 * (-2 + 3), "$\overrightarrow{AP}$", top-left
:::

$$
L = \dfrac{|\lvec{AP} \times \vec v|}{|\vec v|}
$$

:::::::::


:::::::::{masonry-card} Planlikningen
Gitt et punkt $A$ i planet og en normalvektor $\vec{n}$, så er planlikningen gitt ved 

$$
\lvec{AP} \cdot \vec n = 0
$$

På standardform:

$$
ax + by + cz + d = 0
$$

:::::::::


:::::::::{masonry-card} Avstand fra punkt til plan
Gitt et plan $\alpha$ med normalvektor $\vec n$ og $A \in \alpha$ og $P(x, y, z) \notin \alpha$.

**Geometrisk formel**:

$$
L = \frac{|\lvec{AP} \cdot \vec n|}{|\vec n|}
$$


**Koordinatformel:**

$$
L = \frac{|ax + by + cz + d|}{\sqrt{a^2 + b^2 + c^2}}
$$

Avstandsformelen gjelder også for avstanden mellom
* To parallelle plan
* Linje og plan som er parallelle
* To ikke-parallelle linjer


:::::::::


:::::::::{masonry-card} Kulelikningen
En kule med sentrum $S(x_0, y_0, z_0)$ og radius $r$ har likningen 

$$
(x - x_0)^2 + (y - y_0)^2 + (z - z_0)^2 = r^2
$$

::::::::::

