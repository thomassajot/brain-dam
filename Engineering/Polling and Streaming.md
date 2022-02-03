# Polling
```mermaid 
graph LR
C1("Client 1<br>Polling")

S1("Server 1")

C1 -- "Request<br>every x seconds" --> S1
S1 --> C1
```
Have a client issue a request at every time interval.

# Streaming
```mermaid 
graph LR
C2("Client 1")

S2("Server 2<br>Streaming")

S2 -."Streaming<br>continuously".-> C2
```
The Server opens a [[Socket]] on the client.  
Streaming is pushing data from your server to the client. Whereas polling requires the client to initialize the data exchange with a request.
Streaming allows to have instantaneous information flow without having many request being done by clients.