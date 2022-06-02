# Formats for Encoding Data
# Modes of Dataflow
## Dataflow through databases
## Dataflow through Services: REST and RPC
When we need 2 services to communicate over a network, we need to define the schema of the requests and responses. Data will be exchanged between the client and the server. If HTTPS is used to transmit information, we call this a WebService.

So far, this is similar to the communication btw a client and a database. However, in the case of services we do not want the client to run any types of query (contrary to the database). Services exposes specific API that allows inputs and outputs that are predetermined by the business logic. This restriction provides a degree of encapsulation.

#### REST
**REST** and **SOAP** are two popular method to agree on what the communication Schema for WebServices looks like. But SOAP is falling out of favour so forget about it.

#### RPC
> **RPC**: Remote procedure call: tries to make a request to a remote network service look the same as calling a function or method in your programming language, within the same process. Such abstraction is called *"location transparency"*.

The book mentions many downsides to RPC. I disagree with these points. The main argument is that the author combines the fact that RPC makes a server call look like a regular function call. I believe that the programmer / user of the API knows that a RPC call does not behave in the same way as a regular function call and is faced with the same issues that would arise nonetheless when using REST.

The issue related to lost responses is the same between REST and RPC. 
Overall RPC is more about the simplicity of sending the data to the other server. It is miss-leading to think that the user / programmer should not benefit from the nice syntax of native function to perform these communication because these function would behave differently. It is up to the user to know what exception can be raised by looking at the documentation. 

However, it is true that the user has to know how to handle Time out and lost responses or idempotent operations. But this knowledge should be acquired when using both REST and RPC.


#### REST vs RPC
Custom RPC protocols with a binary encoding format can achieve better performance than something generic like JSON over REST. But REST API are easier for experimentation and debugging. 

> I recommend to use RPC for internal services which are owned by the same company. It makes is simpler to maintain the schema as well. REST is preferable for public endpoints. 

**I enjoy to use gRPC because the schema is enforced by code**. In the case of REST, one endpoints uses a specific schema and the schema is enforced via testing. Which is much more brittle and some edge cases could be missed. It is preferable to use gRPC which requires the creation of a Protocol Buffer schema which both clients and server have to use. 


#### Message-passing Dataflow

```mermaid
graph LR;

C[Client] --> B(Broker) --> S[Server]
```

Using a Message broker has several advantages: 
- Improve sys reliability: acts as a buffer if the recipient is unavailable. 
- Prevent lost msg: automatically redeliver messages to a process that has crashed.
- Decouples sender and recipient: 
	- the sender does not need to know PORT and IP of receiver.
	- The sender does not know the receiver or how many.
- Allows one msg to be send to several recipients.

Downside is that the communication becomes one way. if you want to have it two way, you need to add a separate channel. Thus this communication pattern is `asynchronous`.

##### Distributed actor frameworks
[...]


# Summary
As services have to communicate between themselves, we looked at how to encode messages (JSON, binary, with schema...). 
In order to update services, we have a to still be able to handle older and newer message format. Being `backward` and `forward` compatible allows to gradually update components instead of all services at once. However, it is also a bit of a challenge. Schema evolution is something to be mindful of but [[Thrift]] and [[Protocol Buffers]] helps you to achieve it.

[[Rolling updates]] allow new versions of a service to be released without downtime. Since different services of different versions will coexists, we need backward and forward compatibility.

We have seen how to communicate between services: 
- Databases
- REST / SOAP 
- RPC 
- Asynchronous message passing using brokers or actors.

