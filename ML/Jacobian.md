The `Jacobian` is the extension of a gradient where the partial derivaties of a function whose input and output are both **vectors**.

Given a function $\boldsymbol{f}: \mathbb{R}^{m} \rightarrow \mathbb{R}^{n}$, its Jacobian  $\boldsymbol{J} \in \mathbb{R}^{n \times m}$ is defined as $J_{i,j}  = \frac{\partial}{\partial x_i} f(\boldsymbol{x})_i$