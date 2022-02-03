We wish to find the maximal or minimal value of $f(\boldsymbol{x})$ for values of $\boldsymbol{x}$ in some set $\mathbb{S}$. This is known as constrained optimization. Points $\boldsymbol{x}$ that lie within the set $\mathbb{S}$ are called feasible points in constrained optimization terminology.

- We can do gradient optimization with a small step size. Then project the obtained set of parameters back in the set $\mathbb{S}$.  
- We could do something similar with [[Line Search]] where we only considered feasible values $\boldsymbol{x} \in \mathbb{S}$. 
- More sofisticated, the [[KKT]] approach.