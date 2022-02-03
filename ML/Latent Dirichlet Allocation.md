
This can be used for Topic Modeling.

Extract topics from multiple documents. This is an unsupervised approach.
LDA is a probabilistic model: 
- Treat data as obs that arise from a generative prob process that includes hidden variables
	- For Documents, the hidden variables reflect the thematic structure of the collection
- Infer the hidden structure using posterior inference
	- What are the topics that describe this collection ? 
- Situate new data into the estimated model
	- How does this query or new document fit into the estimated topics.

In LDA, the intuition is that **Documents exhibit multiple topics**.

The underlying model of how a document is generated is based of: 
- Every topic **is** a distribution over a fixed vocab. 
- We have a distribution over the topics.
a document is a given distribution over the topics, then we sample topics, and then we sample one word for the sampled topic.

Graphical model:
![[Pasted image 20211111132355.png|700]]

How do we infer this model ? (the latent variables)

##### Q: Why do we condition on $Z$ and $\beta$ ? Why do we have a condition for W over ALL $\beta_K$ and not just the beta for the given topic ?

$p(W_{d,n} | Z_{d,n}, \beta_K)$ because $Z_{d,n}$ is a topic index, using this topic index we can select this topic distribution from $\beta_K$.

##### Q: mixed membership model
see video in link below at ~1h5min

# Links
[Nice Lecture from David Blei](http://videolectures.net/mlss09uk_blei_tm/)
