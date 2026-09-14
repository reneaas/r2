# Dev


## Normalvektorer

:::{interactive-plot3d}
width: 100%
ticks: off
fontsize: 26
plane: equation=z=2, xrange=(-0.5, 4), yrange=(-0.5, 4), color=blue, alpha=0.2
xrange: (-1, 4)
yrange: (-1, 4)
zrange: (-1, 4)
azim: -65
elev: 20
let: Ax = 1
let: Ay = 1
let: Az = 2
let: Bx = 3
let: By = 0.5
let: Bz = 2
let: Cx = 0.5
let: Cy = 3
let: Cz = 2
point: (Ax, Ay, Az), black
text: at=(Ax, Ay, Az), value="$A$", ha=right, va=top
point: (Bx, By, Bz), black
text: at=(Bx, By, Bz), value="$B$", ha=left, va=center
point: (Cx, Cy, Cz), black
text: at=(Cx, Cy, Cz), value="$C$", ha=center, va=bottom
vector: (Ax, Ay, Az), (Bx, By, Bz), blue
vector: (Ax, Ay, Az), (Cx, Cy, Cz), blue
vector: (Ax, Ay, Az), (Ax, Ay, Az + 2), red
text: at=(Ax, Ay, Az + 2), value="$\vec{n}$", ha=center, va=bottom
right-angle: at=(Ax, Ay, Az), dir1=(Bx - Ax, By - Ay, Bz - Az), dir2=(0, 0, 1), size=0.35
right-angle: at=(Ax, Ay, Az), dir1=(Cx - Ax, Cy - Ay, Cz - Az), dir2=(0, 0, 1), size=0.35
:::


## Planlikningen


:::{interactive-plot3d}
width: 100%
elev: 25
azim: -60
xrange: (-1, 5)
yrange: (-1, 5)
zrange: (-1, 4)
ticks: off
nocache:
fontsize: 22
plane: normal=(0, 0, 1), point=(3, 2, 1), span=(4,4), color=blue, alpha=0.2
point: (2, 1, 1), black
text: at=(2, 1, 1), value="$A(x_0, y_0, z_0)$", ha=center, va=top
point: (3, 3, 1), black
text: at=(3, 3, 1), value="$P(x, y, z)$", ha=left, va=center
let: nx = 0
let: ny = 0
let: nz = 2
vector: (3, 3, 1), (3 + nx, 3 + ny, 1 + nz), red
text: at=(3 + nx, 3 + ny, 1 + nz), value="$\vec{n} = [a, b, c]$", ha=center, va=bottom
vector: (2, 1, 1), (3, 3, 1), blue
right-angle: at=(3, 3, 1), dir1=(nx, ny, nz), dir2=(2 - 3, 1 - 3, 1 - 1), size=0.35
:::


## Avstand fra punkt til plan

:::{interactive-plot3d}
width: 100%
align: right
elev: 20
azim: -50
xrange: (-2, 5)
yrange: (-2, 5)
zrange: (-1, 5)
ticks: off
let: Ax = 2
let: Ay = 1
let: Az = 1
let: Px = 3
let: Py = 3
let: Pz = 4
fontsize: 24
plane: normal=(0, 0, 1), point=(Ax, Ay, Az), span=(5,5), color=blue, alpha=0.2
point: at=(Ax, Ay, Az), color=black
point: at=(Px, Py, Pz), color=black
text: at=(Ax, Ay, Az), value="$A$", ha=left, va=top
vector: (Ax, Ay, Az), (Px, Py, Pz), blue
text: at=(Px, Py, Pz), value="$P$", ha=left, va=bottom
let: nx = 0
let: ny = 0
let: nz = 1.5
vector: (Ax, Ay, Az), (Ax + nx, Ay + ny, Az + nz), red
text: at=(Ax + 0.5 * nx - 0.1, Ay + 0.5 * ny - 0.1, Az + 0.5 * nz + 0.2), value="$\vec{n}$", ha=right, va=center
text: at=(Px + 0.1, Py, 0.5 * (Az + Pz)), value="$L$", ha=left, va=center
line-segment: from=(Ax, Ay, Az), to=(Ax, Ay, Pz), linestyle=dashed, color=red
right-angle: at=(Ax, Ay, Pz), dir1=(0, 0, -1), dir2=((Px - Ax), (Py - Ay), 0), size=0.35
line-segment: from=(Ax, Ay, Pz), to=(Px, Py, Pz), linestyle=dashed, color=black
right-angle: at=(Ax, Ay, Az), dir1=(0, 0, 1), dir2=(-(Px - Ax), -(Py - Ay), 0), size=0.35
line-segment: from=(Px, Py, Pz), to=(Px, Py, Az), linestyle=dashed, color=red
right-angle: at=(Px, Py, Az), dir1=(0, 0, 1), dir2=(-(Px - Ax), -(Py - Ay), 0), size=0.35, color=red
:::


## Avstand fra linje til plan

:::{interactive-plot3d}
width: 100%
ticks: off
fontsize: 24
elev: 20
azim: -70
xrange: (-1, 5)
yrange: (-1, 5)
zrange: (-1, 5)
let: Ax = 2
let: Ay = 2
let: Az = 2
let: Px = 4
let: Py = 3
let: Pz = 5
plane: normal=(0, 0, 1), point=(Ax, Ay, Az), span=(6,6), color=blue, alpha=0.2
line: point=(Px, Py, Pz), direction=(1, 0, 0), color=blue, lw=1
point: (Px, Py, Pz), black
point: (Ax, Ay, Az), black
text: at=(Px, Py, Pz), value="$P$", ha=left, va=bottom
text: at=(Ax, Ay, Az), value="$A$", ha=right, va=top
text: at=(Px, Py, 0.5 * (Az + Pz)), value="$L$", ha=left, va=center
vector: (2, 2, 2), (4, 3, 5), red
vector: (1, 3, 5), (2, 3, 5), red
text: at=(1.5, 3, 5), value="$\vec{v}$", ha=center, va=bottom
vector: (4, 3, 2), (4, 3, 3), red
text: at=(4 + 0.2, 3, 2.5), value="$\vec{n}$", ha=left, va=center
vector: (4, 1, 0.2), (4, 1, 1.2), red
vector: (4, 1, 0.2), (5, 1, 0.2), red
right-angle: at=(4, 1, 0.2), dir1=(0,0,1), dir2=(1,0,0), size=0.35
text: at=(3.9, 1, 0.7), value="$\vec{n}$", ha=right, va=center
text: at=(5, 1, 0.2), value="$\vec{v}$", ha=left, va=center
line-segment: from=(2, 2, 2), to=(4, 3, 2), linestyle=dashed, color=gray
right-angle: at=(4, 3, 2), dir1=(0, 0, 1), dir2=(-(4 - 2), -(3 - 2), 0), size=0.35
line-segment: from=(4, 3, 2), to=(4, 3, 5), linestyle=dashed, color=black
:::


## Avstand fra plan til plan


:::{interactive-plot3d}
width: 100%
elev: 20
azim: -70
xrange: (-1, 5)
yrange: (-1, 5)
zrange: (-1, 5.5)
ticks: off
fontsize: 24
plane: normal=(0, 0, 1), point=(2, 2, 1), span=(6,6), color=blue, alpha=0.2
plane: normal=(0, 0, 1), point=(2, 2, 4), span=(6,6), color=teal, alpha=0.2
point: (2, 2, 1), black
point: (3, 3, 4), black
vector: (2, 2, 1), (3, 3, 4), red
text: at=(2, 2, 1), value="$A$", ha=right, va=top
text: at=(3, 3, 4), value="$B$", ha=left, va=bottom
vector: (-0.2, 3, 1), (-0.2, 3, 2), blue
vector: (1, 1, 4), (1, 1, 5), teal
right-angle: at=(-0.2, 3, 1), dir1=(0,0,1), dir2=(1,0,0), size=0.35
right-angle: at=(1, 1, 4), dir1=(0,0,1), dir2=(1,0,0), size=0.35
text: at=(-0.3, 3, 1.5), value="$\vec{n}_\alpha$", ha=right, va=center
text: at=(0.9, 1, 4.5), value="$\vec{n}_\beta$", ha=right, va=center
text: at=(3, 3, 2.5), value="$L$", ha=left, va=center
line-segment: (2, 2, 1), (3, 3, 1), linestyle=dashed, color=gray
right-angle: at=(3, 3, 1), dir1=(0, 0, 1), dir2=(-(3 - 2), -(3 - 2), 0), size=0.35
line-segment: (3, 3, 4), (3, 3, 1), linestyle=dashed, color=black
vector: (3, 3, 1), (3, 3, 2), blue
:::


## Avstand mellom ikke-parallelle linjer

:::{interactive-plot3d}
fontsize: 24
width: 100%
xrange: (-1, 6)
yrange: (-1, 6)
let: Ax = 2
let: Ay = 2
let: Az = 1
let: Bx = 2
let: By = 2
let: Bz = 4
let: vax = 2
let: vay = 1
let: vaz = 0
let: vbx = -2
let: vby = 1
let: vbz = 0
plane: equation=z=Az, span=(4, 4), color=blue, alpha=0.2
plane: equation=z=Bz, span=(4, 4), color=red, alpha=0.2
zrange: (-1, 6)
ticks: off
line: point=(Ax, Ay, Az), direction=(vax, vay, vaz), color=black, style=solid
line: point=(Bx, By, Bz), direction=(vbx, vby, vbz), color=black, style=solid
point: at=(Ax + vax, Ay + vay, Az + vaz), color=black
point: at=(Bx - vbx, By - vby, Bz - vbz), color=black
text: at=(Bx - vbx, By - vby, Bz - vbz), value="$B$", ha=left, va=bottom
text: at=(Ax + vax, Ay + vay, Az + vaz), value="$A$", ha=left, va=bottom
vector: (Ax + vax, Ay + vay, Az + vaz), (Bx - vbx, By - vby, Bz - vbz), teal
line-segment: from=(Ax, Ay, Az), to=(Bx, By, Bz), linestyle=dashed, color=black
text: at=(0.5 * (Ax + Bx), 0.5 * (Ay + By), 0.5 * (Az + Bz)), value="$L$", ha=left, va=center
line-segment: from=(Bx - vbx, By - vby, Bz - vbz), to=(Bx - vbx, By - vby, Az), linestyle=dashed, color=gray
right-angle: at=(Bx - vbx, By - vby, Az), dir1=(0, 0, 1), dir2=(-((Bx - vbx) - (Ax + vax)), -((By - vby) - (Ay + vay)), 0), size=0.35, color=black
right-angle: at=(Ax, Ay, Az), dir1=(0,0,1), dir2=(vax, vay, vaz), size=0.35, color=black
vector: (Bx - vbx, By - vby, Az), (Bx - vbx, By - vby, Ax + 0.5), blue
text: at=(Bx - vbx, By - vby - 0.25, Ax + 0.25), value="$\vec{n}$", ha=right, va=center
line-segment: from=(Ax + vax, Ay + vay, Az + vaz), to=(Bx - vbx, By - vby, Az + vaz), linestyle=dashed, color=gray
vector: (Ax + vax, Ay + vay, Az + vaz), ((Ax + vax + vax), (Ay + vay +  vay), (Az + vaz + vaz)), blue
text: at=(0.5 * (Ax + vax + (Ax + vax + vax)), 0.5 * (Ay + vay + (Ay + vay + vay)), 0.5 * (Az + vaz + (Az + vaz + vaz))), value="$\vec{v}_\ell$", ha=left, va=bottom
vector: (Bx - vbx, By - vby, Bz - vbz), ((Bx - vbx - vbx), (By - vby -  vby), (Bz - vbz - vbz)), red
text: at=(0.5 * (Bx - vbx + (Bx - vbx - vbx)), 0.5 * (By - vby + (By - vby -  vby)), 0.5 * (Bz - vbz + (Bz - vbz - vbz))), value="$\vec{v}_m$", ha=left, va=bottom
:::