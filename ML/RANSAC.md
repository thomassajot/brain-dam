**Random Sample Consensus** is an iterative method to estimate parameters of a mathematical model from a set of observed data that contains **outliers**, when outliers are to be accorded to influence on the values of the estimates. Therefore, it also can be interpreted as an outlier detection method.

It is a non-deterministic algorithm.

# Overview
The RANSAC algorithm is a learning technique to estimate parameters of a model by random sampling of observed data. Given a dataset whose data elements contain both inliers and outliers, RANSAC uses the voting scheme to find the optimal fitting result. Data elements in the dataset are used to vote for one or multiple models. The implementation of this voting scheme is based on two assumptions: that the noisy features will not vote consistently for any single model (few outliers) and there are enough features to agree on a good model (few missing data). The RANSAC algorithm is essentially composed of two steps that are iteratively repeated:

1.  In the first step, a sample subset containing minimal data items is randomly selected from the input dataset. A fitting model and the corresponding model parameters are computed using only the elements of this sample subset. The cardinality of the sample subset is the smallest sufficient to determine the model parameters.
2.  In the second step, the algorithm checks which elements of the entire dataset are consistent with the model instantiated by the estimated model parameters obtained from the first step. A data element will be considered as an outlier if it does not fit the fitting model instantiated by the set of estimated model parameters within some error threshold that defines the maximum deviation attributable to the effect of noise.

The set of inliers obtained for the fitting model is called the consensus set. The RANSAC algorithm will iteratively repeat the above two steps until the obtained consensus set in certain iteration has enough inliers.

The input to the RANSAC algorithm is a set of observed data values, a way of fitting some kind of model to the observations, and some [confidence](https://en.wikipedia.org/wiki/Confidence_interval "Confidence interval") parameters. RANSAC achieves its goal by repeating the following steps:

1.  Select a random subset of the original data. Call this subset the _hypothetical inliers_.
2.  A model is fitted to the set of hypothetical inliers.
3.  All other data are then tested against the fitted model. Those points that fit the estimated model well, according to some model-specific [loss function](https://en.wikipedia.org/wiki/Loss_function "Loss function"), are considered as part of the _consensus set_.
4.  The estimated model is reasonably good if sufficiently many points have been classified as part of the consensus set.
5.  Afterwards, the model may be improved by reestimating it using all members of the consensus set.

This procedure is repeated a fixed number of times, each time producing either a model which is rejected because too few points are part of the consensus set, or a refined model together with a corresponding consensus set size. In the latter case, we keep the refined model if its consensus set is larger than the previously saved model.

![[Pasted image 20211231124420.png]]