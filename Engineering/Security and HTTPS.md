HTTP can be hacked with a Man In The Middle attack.

# Encryption
## Symmetric encryption
Relies on symmetric key, so a single key, to both encrypt and decrypt data.
Downside, that one key has to be shared between the 2 machines. This s hard to make sure that no one else get the key.
This requires AES (advanced encryption standards)

## Asymmetric
Relies on 2 keys, public and private  keys. When you encrypt a message using the public key, you can only decrypt it using the private key.

# HTTPS
## TLS (handshake)
Transport Layer Security, which is a secured layer. So HTTPS is using TLS to be secure.  
The 2 services establishes a secure connection during the `TLS handshake`. 

```mermaid
sequence
```

## SSL (certificate)
Secure Socket Layer.