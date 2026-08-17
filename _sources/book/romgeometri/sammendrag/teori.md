# Vektorregning: Sammendrag



::::::::{grid}
---
gutter: 2
columns: 12
---
::::::{grid-item-card}
---
columns: 12
---
**Vektorregning i 3D**
^^^
::::::


::::::{grid-item-card}
---
columns: 12
---
**Kryssproduktet**
^^^
:::{plot3d-2}
nocache:
width: 100%
align: right
fontsize: 24
let: ax = 3
let: ay = 0
let: az = 0
let: bx = 1
let: by = 3
let: bz = 0
let: cx = 0
let: cy = 0
let: cz = 3.5
vector: (0, 0, 0), (ax, ay, az), blue
vector: (0, 0, 0), (bx, by, bz), red
vector: (0, 0, 0), (cx, cy, cz), orange
vector: (0, 0, 0), (-cx, -cy, -cz), purple
ngon: [(0, 0, 0), (ax, ay, az), (ax + bx, ay + by, az + bz), (bx, by, bz)], color=blue, alpha=0.2, edgecolor=none
line-segment: start=(ax, ay, az), end=(ax + bx, ay + by, az + bz), style=dashed, color=gray
line-segment: start=(bx, by, bz), end=(ax + bx, ay + by, az + bz), style=dashed, color=gray
axis: off
xrange: (-1, 4)
yrange: (-1, 4)
zrange: (-4, 4)
azim: -50
elev: 40
text: at=(0.5 * (ax + bx), 0.5 * (ay + by), 0.5 * (az + bz)), value="$|\vec{a} \times \vec{b}|$", ha=center, va=center
text: at=(cx, cy, cz), value="$\vec{a} \times \vec{b}$", ha=center, va=bottom
text: at=(-cx, -cy, -cz), value="$\vec{b} \times \vec{a}$", ha=center, va=top
text: at=(0.5 * ax, 0.5 * ay, 0.5 * az - 0.1), value="$\vec{a}$", ha=right, va=top
text: at=(0.5 * bx, 0.5 * by, 0.5 * bz), value="$\vec{b}$", ha=right, va=bottom
angle: at=(0, 0, 0), dir1=(ax, ay, az), dir2=(bx, by, bz), radius=0.6, color=black
right-angle: at=(0, 0, 0), dir1=(ax, ay, az), dir2=(cx, cy, cz), size=0.4, color=black
right-angle: at=(0, 0, 0), dir1=(bx, by, bz), dir2=(cx, cy, cz), size=0.4, color=black
let: s = 0.18
text: at=(s * (ax + bx), s * (ay + by), s * (az + bz)), value="$\varphi$", ha=center, va=center
:::

$$
\vec{a} \times \vec{b} = \mqty|\vec{e}_x & \vec{e}_y & \vec{e}_z \\
a_x & a_y & a_z \\
b_x & b_y & b_z
|
$$

$$
\abs{\vec{a} \times \vec{b}} = \abs{\vec{a}} \abs{\vec{b}} \sin \varphi
$$
::::::


::::::{grid-item-card}
---
columns: 6
---
**Areal**
^^^
**Parallellogram**:

$$
G = \abs{\vec{a} \times \vec{b}}
$$

**Trekant**:

$$
G = \dfrac{1}{2}\abs{\vec{a} \times \vec{b}}
$$


::::::


::::::{grid-item-card}
---
columns: 6
---
**Volum**
^^^
**Prisme**:

$$
V = \abs{\vec{G} \cdot \vec{c}}
$$

**Pyramide**:

$$
V = \dfrac{\abs{\vec{G} \cdot \vec{c}}}{3}
$$


::::::


::::::{grid-item-card}
---
columns: 6
---
**Linjer**
^^^
**Parameterframstillinger**

$$
\vec{r}(t) = \lvec{OA} + \vec{v} \cdot t
$$


**Retningsvektor**

$$
\vec{v} = \lvec{AB} = \vec{r}'(t)
$$

::::::



::::::{grid-item-card}
---
columns: 6
---
**Plan**
^^^
**Planlikningen**

$$
\lvec{AP} \cdot \vec{n} = 0
$$

$$
ax + by + cz + d = 0
$$

::::::


::::::{grid-item-card}
---
columns: 12
---
**Avstander**
^^^


:::::{grid} 1 2 2 2 
::::{grid-item}
**Punkt til linje**

$$
L = \dfrac{\abs{\lvec{AP} \times \vec{v}}}{\abs{\vec{v}}}
$$
::::

::::{grid-item}
**Punkt til plan**

$$
L = \dfrac{\abs{\lvec{AP} \cdot \vec{n}}}{\abs{\vec{n}}}
$$
::::


::::{grid-item}
**Parallelle linjer**

$$
L = \dfrac{\abs{\lvec{AP} \cdot \vec{v}}}{\abs{\vec{v}}}
$$
::::


::::{grid-item}
**Ikke-parallelle linjer**

$$
L = \dfrac{\abs{\lvec{AP} \cdot \vec{n}}}{\abs{\vec{n}}}
$$

$$
\vec{n} = \vec{v}_\ell \times \vec{v}_m
$$
::::
:::::


::::::



::::::::
