PCA is defined as an [orthogonal](https://en.wikipedia.org/wiki/Orthogonal_transformation "Orthogonal transformation") [linear transformation](https://en.wikipedia.org/wiki/Linear_transformation "Linear transformation") that transforms the data to a new [coordinate system](https://en.wikipedia.org/wiki/Coordinate_system "Coordinate system") such that the greatest variance by some scalar projection of the data comes to lie on the first coordinate (called the first principal component), the second greatest variance on the second coordinate, and so on.

![[Pasted image 20211222145709.png | 300]]

# Maths
Let's have $X$ already mean centered (ie $X = X - \overline{X}$). We want to find the new basis $W$ which vectors maximizes the variance along the axis. This matrix $W \in \mathcal{R}^{p \times l}$ where $l \le p$ since we can reduce the dimensionality.
So a sample $x_i$ is mapped to the new space as $t_i$ as: $t_{ik} = x_i \times w_k$. 
As the first vector $w_1$ explains most of the variance we have: 
$$
w_i= \underset{||w|| = 1}{argmax} ~ \sum_{i=1}^n t_i ^ 2 = \underset{||w|| = 1}{argmax} ~ \sum_{i=1}^n (x_i \times w) ^ 2
$$

Using the matrix representation $X$: 
$$
w_i = \underset{||w|| = 1}{argmax} ~|| X \times w ||^2  = \underset{||w|| = 1}{argmax} ~\{ w^T X^T X w \}
$$
As $w_1$ is a  unit vector, this is equivalent to:
$$
w_i = \underset{w}{argmax}  ~\{ \frac{w^T X^T X w}{w^T w} \}
$$
We can identify here that this is problem is a Rayleigh quotient. The solution of this Equation with a Rayleigh quotient is the eigenvector with the largest eigenvalue ! 

To find the $k^{th}$ vector of the $k^{th}$ largest variance, we remove the eigenvector from X:
$$
\hat{X_k} = X - \sum_{s=1}^{k-1} Xw_sw_s^T
$$
and then the associated eigenvalue is 

$$
w_k = \underset{||w|| =1}{argmax} ~|| \hat{X_k} \times w ||^2 = \underset{w}{argmax}  ~\{ \frac{w^T \hat{X_k}^T \hat{X_k} w}{w^T w} \}
$$
Which is again a Rayleigh quotient and the solution is again an eigenvector. 

In the end, the eigenvectors of $X$ are the basis that explains the variance the most.