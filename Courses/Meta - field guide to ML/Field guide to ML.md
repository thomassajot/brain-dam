# Introduction
The right setup is more important than choosing the algorithm.
Stages:
1. **Problem Definition**
2. **Data**: how to build dataset
3. **Evaluation**: How do you define success ?
4. **Features**
5. **Models**
6. **Experimentations**: measure the impact of ML systems in the real world

![[240830049_176529261234363_5106599873009478327_n.png | 700]]

# 1. Define the Problem
Define the right problem to solve. Convert the business problem into an ML task.
Think carefully about what the ML task for your project is.

**What does success look like ?**
Find simpler tasks that can be good **proxies** for the ultimate goal. 
- Use intermediate events rather than end metric: eg instead of using "enjoyment of adds" as the target metric, we can use "is this add relevant" to the user. 
- Good intermediate events are a bit less  relevant to the target but can be used to go into the right direction while making it possible to actually measure and train a model on this intermediate event.
	- Intermediate events are: less relevant, easier to define, easier to model
	- Original events (like enjoyment) are: relevant (to the problem), harder to define, harder to model
- Properties we want from **proxy events**:
	- Does the proxy event happen within a reasonable amount of time from the prediction being made ? (one month is too slow!) - Faster responses makes faster iterations
	- Is it too sparse ? 1 Billion examples is nice, but if the positive rate is 1 in a million then this is little data.
	- Do features contain information about the event ? ??????
	- Is the true desired outcome sensitive to variations ?


1. Determine the right task for the project. 
2. Simple is better than complicated
3. Define your label and training example precisely
4. Don't prematurely optimise


# 2. Data 
1. Data recency and real-time training
2. Training/prediction consistency
3. Records and sampling (see [[Handle Imablanced datasets]])

You can measure performance of the model using data up to day N, then predict the perf on day N+1, N+2, ... and measure **sensitivity** of the performance based on how recently it was last trained.


# 3. Evaluation - Offline
Offline evaluation and Online experimentation
1. Offline is fast and efficient. Evaluate offline before online
2. Online if more time consuming but more accurate.
3. Evaluate both the choice of data and the kind of statistics you calculate
4. don't be bound to evaluate and train on the same things (the train set can be different from test set)
5. When evaluating your model, understand where the performance comes from

Baseline model = simplest possible model. Useful to use to compare more complex models.

Gold standard of offline evaluation is to split the dataset into Train / Validation / Test. 

Usually we do this using K-fold.

Performance metric should be: 
- **Interpretable**
- **sensitive to improvements in the model.**

#### Calibration of model
$calibration = \frac{\text{Sum of preds}}{\text{sum of labels}}$  
This is a sanity check. To check that the calibration is the same of both train and test set. It measure that the average prediction is the same btw train and test.


# 4. Features 
Selecting features is done with regard to: 
1. The model architecture we are using or want to use
2. The properties of the data
3. Special cases
4. The size of the training data

Types of features: Categorical / Numerical / Derived.

