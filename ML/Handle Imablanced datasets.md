Usual ML algorithms are designed to operate on classification data with an equal number of observations for each class. 

Some models use prior probabilities, such as [[Naive Bayes Classifier]] and Discriminant Analysis Classifiers. Unless specified manually, these models typically derive the value of the priors from the training data. Using more balanced priors or a balanced training set may help deal with a class imbalance.

Examples here are given for binary classification task, but can be extended for multi-class.

There are a few ways to compensate for imbalanced datasets" 
- Oversampling
- Undersampling
- Loss weighting


# Oversampling
Generate new training sample of the minority class. 
1. Random Oversampling: duplicates minority samples randomly
1. Synthetic Minority Oversampling technique (**SMOTE**): popular. Produce new samples of minority class by sampling along the line defined by 2 samples.
1. Many extensions of SMOTE

# Undersampling
Reduce the training set size.
1. Random undersampling: randomly delete samples from Majority class
2. **Tomek Links**: Tomek links is found when 2 samples are nearest neighbour of each other and have different classes. The majority one will be removed.


> It is beneficial to combine Oversampling and Undersampling. For example: SMOTE + Tome Links is popular.


# Loss Weighting
For Random Forest or Neural networks, it is also possible to modify the loss to increase the contribution of the minority class. 
The weighted Cross entropy loss becomes: $CE(y, \hat y) = \sum_0^N w_{y=1} \cdot y log(\hat{y}) + w_{y=0} \cdot (1 - y) log(1 - \hat{y})$
For the random Forest, the Gini index can be modified.