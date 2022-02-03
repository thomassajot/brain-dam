We want to **estimate** (ie learn) the parameters $\boldsymbol \theta$  given a training set $\mathcal{D} = \{ (\boldsymbol x_0, y_0), ..., (\boldsymbol x_N, y_N) \}$ of $N$ documents.

We can find
- a **point estimate** of these parameters, ie a given value / vector / matrix for $\boldsymbol \theta$
- or a distribution over these parameters space, ie a function $\boldsymbol \theta(.)$

We can find these parameters with a proper well defined training set $\mathcal{D}$ (MLE, MAP, EM, full bayesian) or with partial data (for example we do not have labels for some features).

##### MLE: Maximum Likelihood Estimate
MLE gives a point estimate. We maximize the likelihood of the data given our model:

$$
\hat{\boldsymbol \theta}_{MLE} = \underset{\boldsymbol \theta}{argmax} ~ L(\boldsymbol \theta)
= \underset{\boldsymbol \theta}{argmax} ~ p(\mathcal{D} | \boldsymbol \theta)
$$

##### MAP: Maximum a Posteriori
MAP gives a point estimate. We maximize the likelihood of the label given the training data and defined priors:
$$
\hat{\boldsymbol \theta}_{MAP} 
= \underset{\boldsymbol \theta}{argmax} ~ p(\boldsymbol \theta | \mathcal{D})
= \underset{\boldsymbol \theta}{argmax} ~ p(\mathcal{D} | \boldsymbol \theta) p(\boldsymbol \theta)
$$

##### Bayesian estimation
Instead of maximising the posterior distribution, we can integrate over the parameters in order to find the value of the distribution for a given variable value.


##### Expectation maximization
