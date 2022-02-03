Exponential Family distribution over the Simplex (positive vectors that sums to 1).   
A Dirichlet is parameterize by a K-1 vector named $\alpha$. ($\alpha$ does not sum to one, this is a parameter not a probability.)

The Dirichlet is a conjugate to the multinomial. 

- $E[\theta_i | \alpha] = \frac{\alpha_i}{\sum\alpha_i}$, ie the mean.
- $\sum \alpha_i$ determine the peakiness of the Dirichlet, ie the scaling.

##### What happens when $\alpha < 1$ or equivalently $s < K$? 
Instead of having a "peak" in the dirichlet triangle, you get a "bowl" kind of, where the edges have higher values.
The samples categories get "sparser".


##### Conjugacy
$\theta \sim Dir(\alpha)$ and  $Z_n \sim Mult(\theta)$, so what is conditional distribution $p(\theta|Z_{1..N})$ ?

Let $n(Z_{1..N})$ be counts of each atom (atom ?). then $\theta|Z_{1..N} \sim Dir(\alpha + n(Z_{1..N}))$


![[Pasted image 20211111134057.png]]