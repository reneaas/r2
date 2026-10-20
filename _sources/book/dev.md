# Dev



:::{plot}
width: 70%
axis: equal
axis: off
let: Ax = 0
let: Ay = 0
let: Bx = 1
let: By = 0
let: Cx = 1
let: Cy = 1
let: Dx = 0
let: Dy = 1
polygon: (Ax, Ay), (Bx, By), (Cx, Cy), (Dx, Dy), blue, 0.1
let: Sx = (Ax + Bx + Cx + Dx)/4
let: Sy = (Ay + By + Cy + Dy)/4
vector: (Sx, Sy), 0, -0.4, red
point: (Sx, Sy)
text: Sx, Sx - 0.45, "$\vec G$", center-center
vector: (Sx + 0.2, 0), 0, 0.4, blue
point: (Sx + 0.2, 0)
text: Sx + 0.2, 0.45, "$\vec N$", center-center
point: (1, Sy)
vector: (1, Sy), 0.3, 0, teal
text: 1.35, Sy, "$\vec F$", center-center
point: (Sx - 0.2, 0)
line-segment: (Sx - 0.2, 0), (Sx - 0.2, -0.1), solid, purple
vector: (Sx - 0.2, -0.1), -0.3, 0, purple
text: Sx - 0.2 - 0.35, -0.1, "$\vec R$", center-center
let: x0 = -0.6
let: y0 = Sx
vector: (x0, y0), 0.3, 0, black
vector: (x0, y0), 0, 0.3, black
text: x0 + 0.35, y0, "$x$", center-center
text: x0, y0 + 0.35, "$y$", center-center
:::
