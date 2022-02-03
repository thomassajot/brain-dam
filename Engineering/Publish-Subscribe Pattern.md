```mermaid 
graph TD
P1((P1))
P2((P2))
P3((P3))

T1[[T1]]
T2[[T2]]
T3[[T3]]

S1((S1))
S2((S2))
S2((S3))

P1 --Push--> T1
P2 --Push--> T2
P3 --Push--> T3

S1 --Pull--> T1
S2 --Pull--> T1
S3 --Pull--> T3
```

4 entities:
- `Publishers`: Servers publishing data (in the form of messages) into Topics.
- `Subscribers`: Clients that subscribes to Topics.
- `Topics`: Conceptual Channels of specific information.
- `Message`: Represents the data that is relevant to the Subscriber to get/process.


This is closely related to [[Polling and Streaming|Streaming]].

A Pub/Sub system is like a DB. You are guaranteed at **least once** delivery to a subscriber. This can lead to issues where the same message is send multiple times to the same server. This issue enforces the subscriber to have [[Idempotent Operation]].

### Additional property:
- Messages are send to Subscribers in the same order as they come in. This is the behavior of a queue.
- It is possible to "replay" messages.

### Why do we need multiple topics ? 
Pub/Sub is like a Database, which means that we may want to have multiple "tables" (as in SQL). So for each type of data, we want to have multiple topics. These topics have different sets of subscribers.

# Tools
- Apache Kafka
- Google Cloud pub/sub: Topics scales automatically, sharding at a topic level is handled automatically.
