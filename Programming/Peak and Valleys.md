AKA min and max
# Example problem: Min Rewards (hard pb)
Imagine that you're a teacher who's just graded the final exam in a class. You have a list of student scores on the final exam in a particular order (not necessarily sorted), and you want to reward your students. You decide to do so fairly by giving them arbitrary rewards following two rules:
1. All students must receive at least one reward.
2. Any given student must receive strictly more rewards than an adjacent student (a student immediately to the left or to the right) with a lower score and must receive strictly fewer rewards than an adjacent student with a higher score.

Write a function that takes in a list of scores and returns the minimum number of rewards that you must give out to students to satisfy the two rules.
You can assume that all students have different scores; in other words, the scores are all unique.

### Samples input: 
```python
scores = [8, 4, 2, 1, 3, 6, 7, 9, 5]
```

### Sample output:
```python
25 // you would give out the following rewards: [4, 3, 2, 1, 2, 3, 4, 5, 1]
```

# Solution Peak and Valley
## Version 1
Identify the minimums in the list of scores. Each values that are local minimum (smaller than the value to the left or right) are going to be assigned a `1`. 
Then we want to go to the left and right of these local minimums, incrementing the rewards for each values.

```
### to lazy
```

## Version 2 (optimal)
Once we understood the previous solution, we can realise that we do not need to start from the local minimums. We can iterate from left to right, incrementing a value if the current value is greater than the previous. Then iterating in reverse order, and taking the max of current rewards or next rewards + 1 if the current value is greater than the next one.

```python
# O(n) time | O(n) space 
def minRewards(scores):
    rewards = [1] * len(scores)
    for i in range(1, len(scores)):
		if scores[i] > scores[i - 1]:
			rewards[i] = rewards[i - 1] + 1
	for i in reversed(range(len(scores) - 1)):
		if scores[i] > scores[i + 1]:
			rewards[i] = max(rewards[i], rewards[i + 1] + 1)
	return sum(rewards)
```
