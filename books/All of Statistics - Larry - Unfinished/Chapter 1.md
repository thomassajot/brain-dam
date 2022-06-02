# Exercices
### Ex 1: 
**Fill in the details of the proof of Th 1.8. Also prove the monotone decreasing case.**

1. Proof that $B_1, B_2, ...$ are disjoint.  
Assume $\omega \in B_i \cap B_j$ for $i < j$. Then $\omega \in A_j$ **and** $\omega \in A_i$ **but** $\omega_i \notin A_{j-1}$ nor $\omega_i \notin A_{i-1}$ by definition of $B_n$. Thus since $i < j$, $A_i \subset A_{j-1}$ so $\omega \in A_{j-1}$. Which is false.   
**So $B$ are disjoint events.**  
$\blacksquare$

2. Proof that $A_n = \bigcup_{i=1}^n A_i = \bigcup_{i=1}^n B_i ~~,\forall n$   
We can prove that $lhs \subset rhd$ and $lhs \supset rhd$ of the equality, which means equality.  
From right to left:
$$\bigcup_{i=1}^n B_i = \bigcup_{i=1}^n A_i - A_{i - 1}  \subset \bigcup_{i=1}^n A_i = A_n$$ And  from left to right:
If we define the function $f(\omega) = min\{k : \omega \in A_k\}$, then for any $\omega \in  A_n$ we have $\omega \in B_{f(\omega)}$. so all elements of $A_n$ are in some $B_k$. => $A_n \subset B_n$.
$$
\begin{align}
B_n \subset A_n \text{ and } A_n \subset B_n \Leftrightarrow A_n = B_n & \\ 
																	 & \blacksquare
\end{align}
$$





3. Proof theorem 1.8 for monotone decreasing events.  
If $A_1 \supset A_2 \supset ... A_n$ then the complement is monotone increasing $A_1^c \subset A_2^c \subset ... A_n^c$. As we proved the theorem for monotone increasing events, we have 
$$
\begin{align}
&P(A_n^c) \underset{n \rightarrow \infty}{\rightarrow} P(A^c) & \\
\text{or}&& \\
&P(A_n) = 1- P(A_n^c) \underset{n \rightarrow \infty}{\rightarrow} 1 - P(A^c) = P(A)& \\
&&\blacksquare 
\end{align}
$$

### Ex 2
Prove the statements of equation 1.1: 
1. $P(\emptyset) = 0$
2. $A \subset B \rightarrow P(A) \leq P(B)$
3. $0 \leq P(A) \leq 1$
4. $P(A^c) = 1 - P(A)$
5. $A \bigcap B = \emptyset \rightarrow P(A \bigcup B) = P(A) + P(B)$

Solutions: 
1. If we partition the space into $\{\Omega, \emptyset\}$ we have $P(\Omega \bigcup \emptyset) = P(\Omega) + P(\emptyset)$ (axiom 3). Or $\Omega \bigcup \emptyset = \Omega$ so $P(\Omega) + P(\emptyset) = P(\Omega) \rightarrow P(\emptyset)= 0 ~ \blacksquare$ 
2. $P(A) = P(B) - P(B - A)$ so $P(A) \leq P(B) \blacksquare$ 
3. $P(\Omega) = 1 \rightarrow P(\Omega) = P(A) + P(A^c) = 1 \rightarrow P(A) \leq 1  \blacksquare$ 
4. $P(A) + P(A^c) = P(\Omega) = 1 \rightarrow P(A) = 1 - p(A^c) \blacksquare$ 
5. We know that $P(A \bigcup B) = P(A) + P(B) - P(A \bigcap B)$ or $P(A \bigcap B) = P(\emptyset) = 0$ $\blacksquare$ 


### Ex 3
Let $\Omega$ be a sample space and let $A_1, A_2, ...$ be events. Define $B_n = \bigcup_{i=n}^\infty A_i$ and $C_n = \bigcap_{i=n}^\infty A_i$
1. Show that $B_n$ is monotonic decreasing and $C_n$ is monotonic increasing.
2. Show that $\omega \in \bigcap_{n=1}^\infty B_n$ if and only if $\omega$ belongs to an infinite number of the events $A_i$
3. Show that $\omega \in \bigcup_{n=1}^\infty C_n$ if and only if $\omega$ belongs to all of the events $A_i$ except possibly a finite number of those events.

**Solutions:**

1. $B_{n-1} = A_{n-1} \bigcup B_n \supset B_n$ so B is monotonic decreasing. Similar for C.
1. (My )Solution by contrapositive. Let's have $\omega \in \bigcap_{n=1}^\infty B_n$. Assume $\omega \in \{A_j \bigcap ... A_k\}$ a finite set where $j < k$. Then $\omega \notin A_{k+1}$. Or by construction $\omega \in B_{k + 1} = B_k \bigcap A_{k+1}$ This implies that no such $\omega$ can satisfy this property. So we cannot find a $k$ for which $\omega \notin A_k$ for all $k$.   
**Online solution:** Assume that $\omega \in \bigcap_{n=1}^\infty B_n$. Then, for every $n$, $\omega \in B_n$, so for every $n$ there is a $m \geq n$ such that $\omega \in A_m$,. This implies there is an infinite number of such events $A_m$.
1. Let's prove the contrapositive.
-   Assume that ω does not belong to an infinite number of events Ai. Then, for every n, there is a m≥ such that ω∈Amc, and so ω is not in Cn. Since ω is not in none of the Cn's, it is not in the union of all Cn's either.
-   Assume that ω is not in the union of all Cn. This implies that ω is is not in any event Cn. This implies that, for every n, there is a m≥n such that ω is not in Am. This implies that there is an infinite number of such events Am.

### Ex 4
Let $\{A_i:i \in I\}$ be a collection of events where $I$ is an arbitrary index set. Show that 
$$ \text{1- }~(\bigcup_{i \in I} A_i)^c = \bigcap_{i \in I} A_i^c ~\text{  and 2- } ~ (\bigcap_{i \in I} A_i)^c = \bigcup_{i \in I} A_i^c$$
Let's prove it for only 2 sets $A$ and $B$.  
$$(A \cup B)^c = \Omega  -  (A \cup B) = \Omega - A - B = A^c - B = A^c \cap B^c$$
If $B$ is the collections of $A_i$ without one element (that we chose to be $A$) then by transitivity, we have the first result.   

For the second result
$$
\begin{align}
                & ~ \omega \in (\bigcap_{i \in I} A_i)^c \\
\Leftrightarrow & ~ \text{ not } (\omega \in \bigcap_{i \in I} A_i) \\
\Leftrightarrow & ~ \text{ not } (\forall i \in I, \omega \in A_i)\\
\Leftrightarrow & ~ \exists i \in I, \omega \notin A_i \\
\Leftrightarrow & ~ \exists i \in I, \omega \in A_i^c \\
\Leftrightarrow & ~ \omega \in \bigcup_{i \in I} A_i^c \\
\end{align}
$$

### ex 5
Suppose we toss a fair coin until we get exactly two heads. Describe the sample space $S$. What is the probability that exactly $k$ tosses are required ? 

Solution: 
Let's call the event $H_{i, j}$ the event of $j$ coin toss, where toss number $i$ and $j$ are heads and all other tosses are tails.  
Then $S = \{H_{i, j}, i < j, j\in \mathbb{N}\}$.   
We have a uniform distribution over the finite sample space $\Omega = \{\text{head , tail}\}^k$.  By definition of the probability on Finite sample spaces, we have 
$$ P(H_{i,k}) = \frac{|H_{i, k}|}{|\Omega|} = \frac{k-1}{2^k} $$ Where $|H_{i, k}| = k - 1$ because there are only k-1 possible events that have K toss and ends with a head.


### ex 6
Let $\Omega= \{0,1,2,…\}$. Prove that there does not exist a uniform distribution on $\Omega$ (i.e. if $P(A)=P(B)$ whenever $|A|=|B|$ then $P$ cannot satisfy the axioms of probability).

**Solution**:
 Assume that such a distribution exists, and let $P(\{1\})=p$. Since the distribution is uniform, the probability associated with any set of size 1 is p, and the probability associated with any set of size n is np.

-   If p>0, then a finite set A of size |A|=⌈2/p⌉ would have probability value P(A)=⌈2/p⌉p≥(2/p)p=2, which is greater than 1 -- a contradiction.
-   If p=0, then any finite set A must have P(A)=0. But then P(Ω)=∑iP({i})=∑i0=0, instead of 1 -- a contradiction.

### ex 7

