The act of limiting the number of request sent to or from a system. Rate Limiting is most often used to limit the number of incoming requests in order to prevent DoS attacks and can be enforced at the IP-address level, at the user-account level or at the region level. Rate limiting can also be implemented in tiers; for instance, a type of network request could be limited to 1 per second, 5 per 10 seconds and 10 per minute.

# Tools
You can use [[Redis]] to implement rate limiting by recording the number of request in this DB.