Gradient descend using second order derivative. The Taylor series is:
$$
f(\boldsymbol{x}) \approx f\left(\boldsymbol{x}^{(0)}\right)+\left(\boldsymbol{x}-\boldsymbol{x}^{(0)}\right)^{\top} \nabla_{\boldsymbol{x}} f\left(\boldsymbol{x}^{(0)}\right)+\frac{1}{2}\left(\boldsymbol{x}-\boldsymbol{x}^{(0)}\right)^{\top} \boldsymbol{H}(f)\left(\boldsymbol{x}^{(0)}\right)\left(\boldsymbol{x}-\boldsymbol{x}^{(0)}\right)
$$

We solve for the critical point of this function: 
$$
\boldsymbol{x}^{*}=\boldsymbol{x}^{(0)}-\boldsymbol{H}(f)\left(\boldsymbol{x}^{(0)}\right)^{-1} \nabla_{\boldsymbol{x}} f\left(\boldsymbol{x}^{(0)}\right)
$$
When $f$ is a positive definite quadratic function, Newton's method consists of applying the above equation to jump to the minimum, of the function directly. When the function is not quadratic but can be locally approximated as positive definite quadratic, Newton's method consists of applying the above equation multiple times.