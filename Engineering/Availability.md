What happens if the system fails. How fault tolerant is the system. The percentage of time where the system is satisfying its primary functions.
# SLA / SLO
System level agreement. System level objective. SLO are components of SLA. 

# Nines
The percentage of time where the system is running according to SLA is usually expressed in percentages with `9`, like 99% availability in a year, or 99.9%, 99.999%, ... Which are 2, 3, and 5 nines.

Systems with `Highly Availability (HA)` are systems with more than 5 nines ~5 min of downtime. It is a official term 
# Redundancy
Removing Single Points of Failure is a way to improve availability. Redundancy is a way to duplicates (or more) your servers.   
`Passive redundancy`: If a machine dies, the other machines already there will pick up the traffic.  
`Active redundancy`: Only one or few of the machines doing work. If this one fail, the other machines are going to know and pick up the work. For example a Leader election, if the leader machine fails another machine will become leader.