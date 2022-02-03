If you have a group of servers in charge of doing the same "thing" (like charging a user). `Leader Election` has the servers in question elect one of them as a `leader`, and that leader server is responsible to do this single action.  
The other servers (the `followers`) stays online, and if the `leader` goes down, a new leader is elected out of the `followers`.

This subject is hard because it is difficult to share the state of the knowledge of who the leader is. The act of getting `concensus` is hard.

# How to implement Leader election for your service ? 
We can use [[Etcd]]  (maybe Zookeeper) DB to implement leader election for our servers. You have multiple servers communicating with ETCD, and at any given point in time, you have a special Key-Value pair that represents who the leader is.  
For example the leader key could be `leader`. 
# Tools
- [[Zookeeper]]
- [[Etcd]]

# Consensus Algorithm
- Paxos 
- Raft
