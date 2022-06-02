> [!tldr] Partitioning
> Splitting a big database into smaller subsets called partitions so that different partitions can be assigned to different nodes (also known as **sharding**).
> From Design Data-intensive apps

To improve [[Latency and Throughput|throughput]] you can increase the replicas of a DB but this is limiting if the database if huge. So you may want to replicate specific subset of the data. Splitting the data across databases. Partitioning the data (this splitting) is known as **sharding**.

How do you know how to split the data and where to put it ?  
For example with tables, you can split up certain rows into different shards, for example by customer name.

## Hotspots
Some shards may get more traffic than others just by chance.  
You use hashing function to determine what shard a piece of data is gonna be written to and read from. [[Consistent hashing]] may be useful here, depending on the problem.

This logic of choosing how to do the sharding, you could implement it in the server that does the service itself. But in practice, this logic is implemented in a [[Proxies|Reverse Proxy]] that acts on behalf of the DB.

This mechanism goes hand in hand with [[Replication]].
