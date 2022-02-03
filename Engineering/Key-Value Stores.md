**Useful for caching or dynamic configuration.**  
When you want to use a database that does not enforce relational format (in SQL).

Because we are accessing value directly thoruigh keys, you can access values very fast. Usually you have lower latency and increrased throughput.


| Key | Value |
|-----|-------|
| foo | 9001           |
| bar | SystemsExpert  |
| baz | 1, two, 3      |

# Tools
- [[Redis]] (in memory storage)
- Dynamo DB
- ZooKeeper
- Etcd
