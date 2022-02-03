Form an Hypothesis:
- Replace a user experience with another
- Dependent variable selection: eg the profit lift brought by the new change, increased click through rate, screen time, ...
- Directionality of these dependent variables: identify the change of each dependent variables
- Experiment participants

Template: 
`"If we replace X with Y for some distincts set of user, then [A, B, C] will go [up/down] and [invariants] won't change."`
`[A, B, C]` are the dependent variables.

see [[Bayesian AB testing]]

# Frequentist A/B testing
Control group in which the experience is unchanged so that we can compare a treatment group. 
-> Determine if the treatment group should replace control group.


Run for at least 2 weeks.
### Results extrapolation
- Through time
- Through population

### Impact of change:
- novelty effect: user uses the new UI more because it's new, not because it's better
- Change aversion: user don't use the new UI because it's different
- Time intensive feedback: sometime, the chosen dependent variable we want to optimize takes too long to get. For example think graduation grades for master, if you change the first year course, it will take 4 years to get feedback. SUch a long period of time will surely have invariante variable change which is no good. -> we want feedback within a month

# A/A testing
To measure that our dependent variables don't have crazy variance, and maybe to measure the `minimum detectable change` required to reject the null hypothesis, we can do A/A testing, which is running the same platform for 2 sets of users and measuring the p-value, etc of the hypothesis testing we will do in A/B testing. We expect to see that the null hypothesis is not rejected in this case.


# Tools for A/B testing
- Optimizely 
- Google optimize
- Facebook plan out


# Multi arm banding (MAB) vs AB
![[Pasted image 20211220141202.png]]