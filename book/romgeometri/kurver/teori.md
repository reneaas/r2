# Kurver

:::{interactive-plot3d}
width: 100%
interactive-var: t, 0, 2*pi, 25
interactive-var-start: t=0
xrange: (-6, 6)
yrange: (-6, 6)
zrange: (0, 7)
axis: on
curve: x=t*cos(2*t), y=t*sin(2*t), z=t, trange=(0, 2*pi), color=#2468ac, samples=96
point: (t*cos(2*t), t*sin(2*t), t), black
vector: (0, 0, 0), (t*cos(2*t), t*sin(2*t), t), red
text: at=(0.5 * t*cos(2*t), 0.5 * t*sin(2*t), 0.5 * t), value="$\vec r({t:.2f})$", offset=(0.1, 0.1, 0.1)
vector: (t * cos(2*t), t * sin(2*t), t), (t * cos(2*t) + cos(2*t) - t* 2 * sin(2*t), t * sin(2*t) + sin(2*t) + t * 2 * cos(2*t), t + 1), purple
text: at=(0.5 * (2* t * cos(2*t) + cos(2*t) - t * 2 * sin(2*t)), 0.5 * (2 * t * sin(2*t) + sin(2*t) + t * 2 * cos(2*t)), 0.5 * (2 * t + 1)), value="$\vec v({t:.2f})$", offset=(0, 0, 0)
fontsize: 24
ticks: off
:::