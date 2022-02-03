A collection of machines referred to as peers that divide a workload between themselves to presumably complete the workload faster than would otherwise be possible. Peer-to-Peer networks often used in file-distribution systems.

You want to send a big file to many many machines. 

You split this file into very small chunks. Send these chunks to all machines. Then let all the machines talks to each other to request between themselves the remaining chunks to build back the original file.

This is way better than going one by leveraging parallelism.

How do we know which peer to send a given chunk of the file ? 
- Using a `tracker`: You can use a DB that knows which server got which chunk so far.
- Using the `gossip protocol` / `epidemic protocol`: servers talk between themselves and figure out what they need from each other. This relies on a [[Distributed Hash Table]] (DHT)

# Tools
- Kraken from Uber.