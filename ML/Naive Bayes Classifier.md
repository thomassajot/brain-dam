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
2. If $x_i$ represents the frequency (count) of $word_i$ in a text, then $x_i$ can have any discrete value from 0 to infinity. So $x_i \sim Cat(\mu_i)$. A categorical distribution of the frequency to be 0, 1, 2, 125, ... So $\mu_i$ is a vector of size $N$ which denotes the maximum frequency we have from the training set.   
    If in the text test we have a greater frequency, the probability of having this frequency is 0 ???
3. It is possible to handle other type of distribution for $x_i$ even different distributions for every features.

### Directed Graphical Model
![[Pasted image 20211215205658.png|200]] ^8d39ff

Where:
- $\boldsymbol \pi$ is the prior of the categorical distribution of $Y$: $Y \sim Cat(\pi)$
- $x_{ij}$ is the feature of the jth word for the ith document. $j \in \{1, ..., D\}$ words (ie D is the vocab size) and $i \in \{1, ... N\}$ documents. 
- $\theta_{jc}$ is the parameter of the $x_{ij}$ feature variable. The document $i$  is associated with a label $y_i$ which has values in the possible class $C$. 
- The plates: there are $N$ documents, $D$ words across all N documents (vocab), there are $C$ possible outcome class values for $Y$. 


