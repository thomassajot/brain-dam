This is a [[Key-Value Stores|Key-Value Store]] that is [[Availability|highly available]] and Strongly Consistent store.  
It implements the RAFT consensus algorithm.

We can use this DB to implement leader election for our servers. You have multiple servers communicating with ETCD, and at any given point in time, you have a special Key-Value pair that represents who the leader is.

This is a tool like [[Zookeeper]].