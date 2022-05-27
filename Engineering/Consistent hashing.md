[High level explanation](https://www.toptal.com/big-data/consistent-hashing)
[Tutorial with more details](https://docs.openstack.org/swift/latest/ring_background.html)

General Idea:
1. Hash all the servers IDs (UUID, IP address, ...) and "map" them onto the unit circle.
1. Hash the object you want to save (like username). Then "map" this hash onto the unit circle
1. The location where to store an object is on the closest server on the unit circle in the anti-clockwise direction (for example). 

If a node crashes, we need only to move this nodes data, ie `K/N` values, `K` being the number of keys and `N` the number of nodes / servers in the pool.  
Example of 3 servers 5 keys to be mapped.
![[Pasted image 20211110210818.png|700]]

It is better to have multiple hashes for a given servers (10x, 50x, 1000x ?) so that selecting the closest server for an object is more uniform. The number of keys per servers (10x, ...) depends on the server capacity. This is called the servers `weight`. 
Example of 3 servers with 10 keys per server.
![[Pasted image 20211110211244.png|700]]

# Consistent hashing with bounded load

# Questions 
- How do you support duplication over multiple server to be resilient if a machine goes down ? Maybe we can assign a key to the 2 closest servers in the circle ? z


# Other strategy
See [[Rendez-vous Hashing]]  
See [[Jump hashing]]