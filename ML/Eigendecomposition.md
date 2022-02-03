Decomposition of matrix into a set of `eigenvectors` and `eigenvalues`.
An `eigenvector` of square matrix $\boldsymbol{A}$ is a non-zero vector $\boldsymbol{v}$ such that multiplication by  $\boldsymbol{A}$ alters only the scale of  $\boldsymbol{v}$.
$$\boldsymbol{A} \boldsymbol{v} = \lambda \boldsymbol{v}$$
$\lambda$ is the `eigenvalue` corresponding to this eigenvector.  
Concatenating all eigenvectors per column into a matrix  $\boldsymbol{V}$ and all eigenvalues into a vector  $\boldsymbol{\lambda}$.  
The `eigendecomposition` of  $\boldsymbol{A}$   is then:
$$ \boldsymbol{A} =  \boldsymbol{V} diag(\boldsymbol{\lambda})\boldsymbol{V}^{-1}$$
Every real [[Symmetric matrix]] can be decomposed into an expression using only real-valued eigenvectors and eigenvalues: $\boldsymbol{A} = \boldsymbol{Q}\boldsymbol{\Lambda}\boldsymbol{Q}^T$ where $\boldsymbol{Q}$ is an orthogonal matrix composed of eigenvectors of $\boldsymbol{A}$, and $\boldsymbol{\Lambda}$ is a diagonal matrix.

##### A matrix is [[Singular matrix|singular]] iff any of the eigenvalues are zero.

A matrix with all positive eigenvalues is called [[Positive Definite Matrix|positive definite]].  
A matrix with all positive of zero-valued eigenvalues is called [[Positive Definite Matrix|positive semidefinite]].  
A matrix with all negative eigenvalues is called `negative definite`.  
A matrix with all negative of zero-valued eigenvalues is called `negative semidefinite`.
