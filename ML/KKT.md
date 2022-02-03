The **Karush–Kuhn–Tucker** (KKT) approach provides general solution to [[Constrained optimization]]. With the KKT approach, we introduce a new function called the `generalized Lagrangian`.

# KKT conditions
These conditions are necessary, but not always sufficient, for a solution point to be optimal for the given generalized Lagrangian.
- The gradient of the generalized Lagrangian is zero.
- All contraints on both $\boldsymbol{x}$ and the KKT multipliers are satisfied.
- The inequality constraints exhibit "complementary slackness": $\alpha \odot \boldsymbol{h}(\boldsymbol{x}) = 0$