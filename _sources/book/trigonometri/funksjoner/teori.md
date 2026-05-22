# Trigonometriske funksjoner


::::{multi-interactive-graph}
---
rows: 1
cols: 2
interactive-var: u, 0, 720, 721
interactive-var-start: 30
---

:::{interactive-graph} 
circle: (0, 0), 1, dashed, gray
point: (cos(u * pi / 180), sin(u * pi / 180))
line-segment: (0, 0), (cos(u * pi / 180), sin(u * pi / 180)), solid, black
angle-arc: (0, 0), 0.2, 0, u
curve: cos(t), sin(t), (0, u * pi / 180), solid, purple
hline: sin(u * pi / 180), 0, cos(u * pi / 180), dashed, red
vline: cos(u * pi / 180), 0, sin(u * pi / 180), dashed, blue
axis: equal
grid: off
xlabel: $\cos x$
ylabel: $\sin x$
fontsize: 32
:::

:::{interactive-graph} 
function: sin(x), (0, u * pi / 180), red
function: cos(x), (0, u * pi / 180), blue
xmin: 0
xmax: 16
ymin: -1.5
ymax: 1.5
ticks: off
nocache:
fontsize: 32 
:::
::::
