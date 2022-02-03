MapReduce is based on the assumptions that most data processing tasks can be split up into a `map` and a `reduce` functions.

```mermaid 
graph LR

AA(('AA'))
AB(('AB'))
AAC(('AAC'))
BBB(('BBB'))

KV1(("k/v<br>pairs"))
KV2(("k/v<br>pairs"))
KV3(("k/v<br>pairs"))
KV4(("k/v<br>pairs"))

N1(("A"))
N2(("B"))
N3(("C"))

Output(("Output"))

AA --Map--> KV1
AB --Map--> KV2
AAC --Map--> KV3
BBB --Map--> KV4

KV1 --Shuffle--> N1
KV2 --Shuffle--> N1
KV2 --Shuffle--> N2
KV3 --Shuffle--> N1
KV3 --Shuffle--> N3
KV4 --Shuffle--> N2

N1 --Reduce--> Output
N2 --Reduce--> Output
N3 --Reduce--> Output

```

Do not forget, there is a `Shuffle` step between the Map and Reduce step !
# Important points
1. When dealing with MapReduce model, we assume we have a distributed file system. And the distributed FS has knowledge of where the data chunks reside and how to communicate with the machine that are going to apply the Map Operation (the `workers`).
2. Because we have large dataset, we do not want to move the data, we move the Map operation (the map program) on the machines that contains the data.
3. The Key-value pair after a Map operation is very important. The Reduce step relies on the Key to "reduce" / aggregate the data.
4. MapReduce handles failures by re-doing a Map or Reduce operation. Hence our Map and Reduce functions are [[Idempotent Operation| idempotent]] !  (they do not change an external state)
5. As an engineer dealing with a MapReduce job, what we care about is specifying Map and Reduce functions and their inputs / outputs.
# Reference
[MapReduce original white Paper](https://static.googleusercontent.com/media/research.google.com/en//archive/mapreduce-osdi04.pdf)
