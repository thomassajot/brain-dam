# Blob Store
A BLOB means Binary Large Object.  
A BLOB in an arbitrary of storage data. For example a video, image, large text, binary file.  
A BLOB store is a storage solution for BLOBs.  
A BLOB does not fit in an SQL DB.   

BLOB stores are optimize for storing and retrieving massive amount of storage.

They behave like Key-Value store. Usually you access the data piece through some key. BUT they are not the same ! Because BLOB store is not optimize in the same way as Key-value. 

## Tools
- GCS (Google Cloud Storage)
- S3 (AWS)
- Azure Blob storage (Microsoft)


# Time Series DB
Is a DB that is specialized to store Time Series data.  
Like monitoring, telemetry data, sensors (like IoT), stock prices.

## Tools
- Influx DB
- [[Prometheus]]

# Graph DB
A Graph DB][=]
## Tools
- Neo4j


# Spatial DB + QuadTree
## Tools
- 