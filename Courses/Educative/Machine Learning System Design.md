From https://www.educative.io/courses/machine-learning-system-design/qAqBDXZvpP2


```mermaid
graph LR
PS[Problem<br>Statement]
IM[Identify<br>Metrics]
IR[Identify<br>Requirements]
TNE[Train and<br>evaluate<br>models]
Design[Design high<br>level system]
Scale[Scale<br>the design]

PS --> IM --> IR --> TNE --> Design --> Scale
```
The 6 basics steps to approach Machine Learning System Design.

### Features
1. One Hot encoding
2. [[Feature hashing]]
3. Crossed feature (aka conjunction), usually used with hashing as well
4. Embedding: The purpose of embedding is to capture semantic meaning of features
5. Numeric features:
	1. Normalization (0 mean, (-1, 1) range) VS Standardization: (0 mean, divide by std of variable)
	2. If feature follows power laws, we can transform using $log(\frac{1 + v}{ 1 + median(v))})$   


### Training pipeline:
1. Use column-oriented format like Parquet to store data. They have high throughput. Or TFrecord.
2. Data partitioning to reduce scanning code.
3. handle imabalnce class distribution:
	1. Use **class weights** in loss function.
	2. **Naive resampling** of the majority class to reduce its weight
	3. **Synthetic resampling** (Synthetic Minority Oversampling Technique - SMOTE)
4. Right loss function: Using Normalised Cross entropy for CTR is better

### Inference
1. we can have multiple models trained on different dataset. We should to the right model during inference
2. Non stationary problems means that we have to do retraining quite often
3. Exploration vs exploitation: [[Thompson Sampling]]

### Metric evaluation


# Example: Video Recommendation
Important points: Separate the problem into 2 stages: Candidate Generation and Ranking. 
If we do ranking on millions of videos, it will not scale. We need to reduce the number of candidates with rough estimation (with focus on **precision**). Then we can use the ranking to predict on fewer videos with the focus on **recall**.

