Feature hashing, called the hashing trick, converts text data or categorical attributes with high cardinalities into a feature vector of arbitrary dimensionality.

### Benefits

-   Feature hashing is very useful for features that have high cardinality with hundreds and thousands of unique values. Hashing trick is a way to reduce the increase in dimension and memory by allowing multiple values to be present/encoded as the same value.

### Feature hashing example

-   First, you chose the dimensionality of your feature vectors. Then, using a hash function, you convert all values of your categorical attribute (or all tokens in your collection of documents) into a number. Then you convert this number into an index of your feature vector. The process is illustrated in the diagram below.

fox3brown4quick4the0

An illustration of the hashing trick for desired dimensionality of 5 for the originality of K of values of an attributes

-   Let’s illustrate what it would look like to convert the text “The quick brown fox” into a feature vector. The values for each word in the phrase are:
    
    ```
    the = 5
    quick = 4
    brown = 4
    fox = 3
    ```
    
- Let define a hash function, hh, that takes a string as input and outputs a non-negative integer. Let the desired dimensionality be 5. By applying the hash function to each word and applying the modulo of 5 to obtain the index of the word, we get:
    ```
    h(the) mod 5 = 0h(quick) mod 5 = 4h(brown) mod 5 = 4h(fox) mod 5 = 3
    ```

-   In this example:
	- `h(the) mod 5 = 0` means that we have one word in dimension **0** of the feature vector.
	- `h(quick) mod 5 = 4` and `h(brown) mod 5 = 4` means that we have two words in dimension **4** of the feature vector.
	- `h(fox) mod 5 = 3` means that we have one word in dimension **3** of the feature vector.
	- As you can see, that there are no words in dimensions 1 or 2 of the vector, so we keep them as 0.

-   Finally, we have the feature vector as: `[1, 0, 0, 1, 2]`.
-   As you can see, there is a collision between words “quick” and “brown.” They are both represented by dimension 4. The lower the desired dimensionality, the higher the chances of collision. To reduce the probability of collision, we can increase the desired dimensions. This is the trade-off between speed and quality of learning.    

> Commonly used hash functions are [MurmurHash3](https://en.wikipedia.org/wiki/MurmurHash), [Jenkins](https://en.wikipedia.org/wiki/Jenkins_hash_function), [CityHash](https://en.wikipedia.org/wiki/List_of_hash_functions), and [MD5](https://en.wikipedia.org/wiki/MD5).

### Feature hashing in tech companies[#](https://www.educative.io/courses/machine-learning-system-design/q2AwDN4nZ73#Feature-hashing-in-tech-companies)

-   Feature hashing is popular in many tech companies like [Booking](https://www.booking.com/), [Facebook](https://www.facebook.com/), [Yahoo](https://www.yahoo.com/), [Yandex](https://yandex.com/), [Avazu](http://avazu.com/home/) and [Criteo](https://www.criteo.com/).
-   One problem with hashing is collision. If the hash size is too small, more collisions will happen and negatively affect model performance. On the other hand, the larger the hash size, the more it will consume memory.
-   Collisions also affect model performance. With high collisions, a model won’t be able to differentiate coefficients between feature values. For example, the coefficient for “User login/ User logout” might end up the same, which makes no sense.

> Depending on application, you can choose the number of bits for feature hashing that provide the correct balance between model accuracy and computing cost during model training. For example, by increasing hash size we can improve performance, but the training time will increase as well as memory consumption.