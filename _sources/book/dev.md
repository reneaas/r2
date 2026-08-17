# Dev


::::{multi-plot2}
---
rows: 1
cols: 2
---
:::{plot3d-2}
xrange: (-4, 4)
yrange: (-4, 4)
zrange: (-2, 6)
xstep: 1
ystep: 1
zstep: 1
xlabel: $x$
ylabel: $y$
zlabel: $z$
elev: 20
azim: -60
width: 100%
vector: (0, 0, 0), (1, 2, 3), red
point: (1, 2, 3)
nocache:
:::



:::{plot3d-2}
xrange: (-4, 8)
yrange: (-4, 4)
zrange: (-2, 2)
xstep: 1
ystep: 1
zstep: 1
xlabel: $x$
ylabel: $y$
zlabel: $z$
elev: 20
azim: -70
width: 100%
solid-of-revolution: sin(x)/x, (pi/2, 2*pi)
nocache:
fontsize: 24
:::
::::


::::{multi-plot2}
---
rows: 1
cols: 2
---
:::{plot3d-2}
xrange: (-4, 8)
yrange: (-4, 4)
zrange: (-2, 6)
xstep: 1
ystep: 1
zstep: 1
xlabel: $x$
ylabel: $y$
zlabel: $z$
elev: 20
azim: -60
width: 100%
solid-of-revolution: (2 - cos(x)) / sin(x), (pi/4, 3*pi/4)
nocache:
fontsize: 24
ticks: off
:::

:::{plot3d-2}
xrange: (-4, 8)
yrange: (-4, 4)
zrange: (-2, 6)
xstep: 1
ystep: 1
zstep: 1
xlabel: $x$
ylabel: $y$
zlabel: $z$
elev: 20
azim: -60
width: 100%
plane: equation=x + y + 2*z = 6, xrange=(1, 4), yrange=(1, 4), color=blue, alpha=0.35
nocache:
fontsize: 24
:::
::::


:::{plot3d-2}
xrange: (-4, 8)
yrange: (-4, 4)
zrange: (-2, 6)
xstep: 1
ystep: 1
zstep: 1
xlabel: $x$
ylabel: $y$
zlabel: $z$
elev: 20
azim: -60
width: 100%
plane: normal=(1, 2, 1), point=(1, 1, 1), span=(4,4), color=blue, alpha=0.35
nocache:
fontsize: 24
:::



:::{plot3d-2}
xrange: (-4, 8)
yrange: (-4, 4)
zrange: (-2, 6)
xstep: 1
ystep: 1
zstep: 1
xlabel: $x$
ylabel: $y$
zlabel: $z$
elev: 20
azim: -60
width: 100%
pyramid: base=[(0, 0, 0), (5, 0, 0), (4, 2, 0)], apex=(0, 0, 5), color=blue, alpha=0.35
text: at=(0, 0, 5), value="$T$", ha=right, va=bottom
text: at=(0, 0, 0), value="$A$", ha=right, va=bottom
text: at=(4, 2, 0), value="$C$", ha=left, va=bottom
text: at=(5, 0, 0), value="$B$", ha=left, va=top
point: (0, 0, 5), black
point: (0, 0, 0), black
point: (4, 2, 0), black
point: (5, 0, 0), black
ticks: off
nocache:
fontsize: 20
:::


:::{plot3d-2}
xrange: (-4, 8)
yrange: (-4, 4)
zrange: (-2, 6)
xstep: 1
ystep: 1
zstep: 1
xlabel: $x$
ylabel: $y$
zlabel: $z$
elev: 20
azim: -60
width: 100%
prism: base=[(0, 0, 0), (5, 0, 0), (3, 2, 0)], vector=(0, 1, 4)
ticks: off
nocache:
fontsize: 20
:::


:::{plot3d-2}
xrange: (-4, 8)
yrange: (-4, 4)
zrange: (-2, 6)
xstep: 1
ystep: 1
zstep: 1
xlabel: $x$
ylabel: $y$
zlabel: $z$
elev: 20
azim: -60
width: 100%
prism: base=[(0, 0, 0), (5, 0, 0), (3, 2, 0)], vector=(0, 1, 3)
ticks: off
nocache:
fontsize: 20
:::



:::{plot3d-2}
xrange: (-4, 8)
yrange: (-4, 8)
zrange: (-2, 6)
xstep: 1
ystep: 1
zstep: 1
xlabel: $x$
ylabel: $y$
zlabel: $z$
elev: 20
azim: -60
width: 100%
sphere: center=(4, 1, 2), radius=2, alpha=0.35
point: (4, 1, 2), black
ticks: off
nocache:
fontsize: 20
:::


::::{multi-plot2}
---
rows: 1
cols: 2
---
:::{plot3d-2}
xrange: (-4, 4)
yrange: (-4, 4)
zrange: (-2, 5*pi)
xstep: 1
ystep: 1
zstep: 1
xlabel: $x$
ylabel: $y$
zlabel: $z$
elev: 20
azim: -60
width: 100%
curve: x=cos(3*t), y=sin(3*t), z=t, trange=(0, 4*pi), color=blue, lw=2, arrow-count=12
ticks: off
nocache:
fontsize: 20
:::


:::{plot3d-2}
xrange: (-5*pi, 5*pi)
yrange: (-5*pi, 5*pi)
zrange: (-2, 5*pi)
xstep: 1
ystep: 1
zstep: 1
xlabel: $x$
ylabel: $y$
zlabel: $z$
elev: 20
azim: -60
width: 100%
curve: x=t*cos(3*t), y=t*sin(3*t), z=t, trange=(0, 4*pi), color=blue, lw=2, arrow-count=12
ticks: off
nocache:
fontsize: 20
:::
::::



:::{plot3d-2}
xrange: (-5*pi, 5*pi)
yrange: (-5*pi, 5*pi)
zrange: (-5*pi, 5*pi)
xstep: 1
ystep: 1
zstep: 1
xlabel: $x$
ylabel: $y$
zlabel: $z$
elev: 20
azim: -60
width: 100%
curve: x=t, y=t*sin(3*t), z=t*cos(3*t), trange=(0, 4*pi), color=blue, lw=2, arrow-count=16
ticks: off
nocache:
fontsize: 20
:::


:::{plot3d-2}
ngon: [(0, 0, 0), (2, 0, 0), (2, 1, 1), (0, 1, 1)], color=blue, alpha=0.5
:::


:::{plot3d-2}
nocache:
line: point=(1, 0, -2), direction=(1, 2, 3), color=blue, lw=2
point: (1, 0, -2), black
vector: (1, 0, -2), (1 + 1, 0 + 2, -2 + 3), red
:::