Similar to [[Eigendecomposition]] but decomposes a matrix into `singular vectors` and `singular values`. SVD is more general than Eigendecomposition because all real matrix have an SVD.

SVD decomposes $\boldsymbol{A}$ as:
$$ 
\begin{align}
&\boldsymbol{A} =  \boldsymbol{U}\boldsymbol{D}\boldsymbol{V}^{T} \\
&\text{ where } 
\boldsymbol{A} \in \mathbb{R}^{m \times n}, 
\boldsymbol{U} \in \mathbb{R}^{m \times m}, 
\boldsymbol{D} \in \mathbb{R}^{m \times n}, 
\boldsymbol{V} \in \mathbb{R}^{n \times n}
\end{align}
$$
$\boldsymbol{U}$ and $\boldsymbol{V}$ are both `orthogonal` matrices. $\boldsymbol{D}$ is defined to be a diagonal matrix, but is not necessarily square.

We can use SVD to generalise matrix inversion to non-sqaure matrices, see [[Moore-Penrose Pseudoinverse]].
