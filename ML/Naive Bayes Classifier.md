Given a corpus of text and their label as training set, we want to build a classifier that can give us a class given a text.  
More formally, given a vector of multiple discrete values features $\boldsymbol x \in \{1, ...K\}^D$ and a target label $y$. 

$$

\begin{aligned}

p(y=c | \boldsymbol x) & =  \frac{p(y=c)p(\boldsymbol x|y=c)}{p(\boldsymbol x)} \\
& = \frac{p(y=c)\prod_{i=1}^D p(x_i|y=c)}{p(\boldsymbol x)} \Leftarrow \textit{ naive assumption of conditional independence}
\end{aligned}
$$

For example, $\boldsymbol x$ is a vector representing a document.
1. If $x_i$ represents the absence or presence of $word_i$ in a text. In this case, $K = 2$ because $x_i \in \{0, 1\}$
2. If $x_i$ represents the frequency (count) of $word_i$ in a text, then $x_i$ can have any discrete value from 0 to infinity. So $x_i \sim Bin(\mu_i)$. A Binomial distribution of the frequency to be 0, 1, 2, 125, ... So $\mu_i$ is a vector of size $N$ which denotes the maximum frequency we have from the training set.   
   /!\ I used to confuse myself. This is not a CATEGORICAL distribution but a Multinomial !!!!!!!! If we see the Document containing $n$ words, each word could be from a vocab of size $k = |vocab|$ then what is the probability that we have $word_1$ appearing 10 times, $word_3$ 2 times, ... This distribution totally makes sense for any number of word frequency, even ones that we not present during training. For example,. this is the first time we see $word_8$ appearing 123 times.
   
3. It is possible to handle other type of distribution for $x_i$ even different distributions for every features.

### Directed Graphical Model
![[Pasted image 20211215205658.png|200]] ^8d39ff

Where:
- $\boldsymbol \pi$ is the prior of the categorical distribution of $Y$: $Y \sim Cat(\pi)$
- $x_{ij}$ is the feature of the jth word for the ith document. $j \in \{1, ..., D\}$ words (ie D is the vocab size) and $i \in \{1, ... N\}$ documents. 
- $\theta_{jc}$ is the parameter of the $x_{ij}$ feature variable. The document $i$  is associated with a label $y_i$ which has values in the possible class $C$. 
- The plates: there are $N$ documents, $D$ words across all N documents (vocab), there are $C$ possible outcome class values for $Y$. 



# The ultimate understanding of the Naive Bayes Classifier, version 8

Notations: 
- $\mathbf{x} = \{x_1, ..., x_D\}$ the feature vector for one sample. Each $x_j$ is a random variable.
- $\mathcal{D} = \{(\mathbf{x}_i, y_i)\}^N$ is the training set which is different from $D$ the number of features. (convention from Machine Learning a probabilistic Perspective, not mine)
- $\theta$ are model's parameters.

We would like to classify vectors of discrete-valued features, $\mathbf{x} \in \{1, ... K\}^D$ where $K$ is the number of values for each feature, and $D$ is the number of features.   
After training on the dataset $\mathcal{D}$, the goal of the prediction is to find the class $y$ given the feature $\mathbf{x}$: $$\hat{y} = \underset{y\in\{1, .., C\}}{max} ~ p(y=c|x, \mathcal{D})$$We will use the generative approach (**TODO: Explain why this is a generative approach**). 
Using Bayes rule we have: $$p(y=c|x, \mathcal{D}) \propto  p(y=c | \mathcal{D})p(\mathbf{x} | y = c, \mathcal{D})$$
Let's introduce the "naive" assumption made in the Naive Bayes model. We consider each features to be independent from each other. So the conditional probability simplifies into:
$$p(\mathbf{x}|y=c, \theta) = \prod_{j=1}^D p(x_j|y=c, \theta_{jc})$$
Where $\theta$ are the parameters of the model and $\theta_{jc}$ are the parameters describing the probability distribution of the independent variable $x_i$.

Here is the Directed Graphical model representation of the NBC. The random variable $y$ is not observed (not shaded), but the variables $x_j$ are observed (shaded). We have $D$ features.
![[Pasted image 20220215201300.png | 600]]

## The input data
So far, we have not made assumption about our data points $\mathbf{x}$. We have the option to choose our models to suit the type of each feature:
- In the case of real-valued features, we can use the Gaussian distribution: $p(\mathbf{x} | y=c, \theta) = \prod_{j = 1}^D \mathcal{N}(x_j | \mu_{jc}, \sigma_{jc}^2)$ where $\mu_{jc}$ is the mean of the feature $j$ in objects of class $c$, and $\sigma_{jc}^2$ is its variance.
- In the case of binary features, $x_j \in \{0, 1\}$, we can use the Bernoulli distribution: $p(\mathbf{x} | y=c, \theta) = \prod_{j = 1}^D Ber(x_j | \mu_{jc})$ where $\mu_{jc}$ is the probability that feature $j$ occurs in class $c$. This is called the **multivariate Bernoulli naive Bayes model**
- In the case of categorical features, $x_j \in \{1, K\}$ we can use the multinoulli distribution:  $p(\mathbf{x} | y=c, \theta) = \prod_{j = 1}^D Cat(x_j | \mu_{jc})$ where $\mu_{jc}$ is the histogram over the $K$ possible values for $x_j$ in class $c$. 
- In the case of positive integers features, $x_j \in \{0, 1, ..., \inf \}$,we can consider these values as counts. We can use the Multinomial distribution: $p(\mathbf{x} | y=c, \theta) = Mul(\mathbf{x} | \boldsymbol{\mu}) = \frac{n!}{x_1!...x_k!}p_1^{x_1}\times ... \times p_k^{x_k}$ where $n= \sum_{j=1}^D x_j$ 

**Example features:**
Most common example is classifying text. What would be $D$ in this case ? 

Can $D$ be the number of words in a document ? Then each document has an $\mathbf{x}$ of different dimensions. Then it would be hard to fit such a model. If each variable $x_j$, $j \in \{1, D\}$ would have different amount of training data. Especially, if only one document is much larger than the others, then the last variables $x_i$ would have their distribution parameters fitted based on a single example from that documents. In addition, for this approach, the word order does not matter so if the words is last or first, its probability should be the same. **So no $D$ is not the size of a document.** 

-> If we choose $D$ to be the number of different words across all our documents, ie $D = |vocab|$ is the vocabulary size. Then the order of the words does not matter, which is good, and each $x_j$ can be adapted depending on our data representation.

Doc 1 = "This morning, this is BBC radio.", Doc 2 = "This is a rabbit and a Dog".

|format |sentence | "morning" | "this" |  "is"  |  "a"  | "rabbit" | "and" | "dog" | "BBC" | "radio" |
|-------|----------|----------|-----|----|----|-------|----|------|----|----|
|binary |Doc1 | 1 | 1 |  1  |  0  | 0 | 0 | 0 | 1 | 1|
|binary |Doc2 | 0 | 1 |  1  |  1  | 1 | 1 | 1 | 0 | 0|
|counts |Doc1 | 1 | **2** |  1  |  0  | 0 | 0 | 0 | 1 | 1|
|counts |Doc2 | 0 | 1 |  1  |  **2**  | 1 | 1 | 1 | 0 | 0|



 ## Model fitting
 We now get into finding the best parameters $\theta$ of our model. We solve for $\theta$ considering that our features are Bernoulli distributed. See the section **TODO** for the solution with Multinoulli distributed features.

 ### Maximum Likelihood estimate for NBC
 A measure of fit is the famous **likelihood** function. The likelihood is the probability of our training data given the parameters $\theta$. 
 $$Likelihood(\mathcal{D} | \theta) = p(\mathbf{x}_i, y_i | \theta)$$ where  $(\mathbf{x}_i, y_i)$ is a sample from our training set. 
Using this measure of fit, we want to find the best $\theta$, which means maximising the likelihood function with regards to $\theta$. 
Similarly, and for convenience later on, we will maximize the **log likelihood** of the data. This is very useful as the $log$ converts multiplications into summations. This is useful to sort out the math but also in practice to avoid underflows (since we multiply probabilities). 

 The probability for a single data case is given by
 $$p(\mathbf{x_i, y_i} | \boldsymbol{\theta}) = p(x_i | \boldsymbol{\pi}) \prod_{j = 1}^D p(x_{ij} | \boldsymbol{\theta}_j) = \prod_c^C \pi_c^{\mathbb{I}(y_i = c)} \prod_j^D \prod_c^C p(x_{ij} | \theta_{jc})^{\mathbb{I}(y_i = c)}$$ Reminder, $\mathbb{I}(y_i = c)$ is 1 when $y_i = c$  or 0 if not. The right most term tells us that the parameters of the feature distribution depends on $y$.
 Hence the log-likelihood over the whole training set $\mathcal{D}$ is given by:
 $$log(p(\mathcal{D} | \boldsymbol{\theta})) = \sum_{c=1}^C N_c log(\pi_c) + \sum_{j=1}^D\sum_{c=1}^C\sum_{i:y_i=c} log~p(x_{ij}|\theta_{jc})$$
Where $N_c$ is the number of documents of class $c$. Maximizing the log-likelihood can be done by maximizing the 2 sums independently, one with $\pi$ and one with $\theta_{jc}$.
**The solution to the MLE is then:** $$\hat \pi = \frac{N_c}{N} \text{  and  } \hat \theta_{jc} = \frac{N_{jc}}{N_c}$$ where  $N_{jc}$ is the number of times the feature $x_j$ appears in documents of class $c$. 

In this case, implementing the NBC is very simple. During fit, we only need to compute $\hat \pi$ and $\hat \theta_{jc}$. 




See section [[Naive Bayes Classifier#Maximizing the parameters of y]] and [[Naive Bayes Classifier#Maximizing the parameters of Bernoulli features]] for detailed explanations of how to derive this result.


#### Maximizing the parameters of y
**TODO**

#### Maximizing the parameters of Bernoulli features
**TODO**

#### Maximizing the parameters of Multinomial features 
**TODO**


### Maximum a posteriori


Explain The Different distribution we could use about the features and that we can merge them
	Explain that independently of our model, we use MLE or MAP to find the best params. Explain the creation of the model graph with and without the priors !!!!!!!!!





# Resources
http://www.cs.columbia.edu/~mcollins/em.pdf
http://cs.brown.edu/courses/cs195-5/spring2012/lectures/2012-02-07_bayesContinuous.pdf
https://cs.brown.edu/courses/csci2950-p/lectures/2013-01-29_directedGraphs.pdf

https://colab.research.google.com/drive/17NkYm5kNPl80TVoLGpkhbs3eKYikR-lb#scrollTo=kR_TsDfsrPTq&uniqifier=1