<!-- Use cases -->

<!-- How to generate -->

<!-- Components -->

```bash
openssl req -x509 -newkey rsa:2048 -keyout key.pem -out cert.pem -days 365 -nodes
```

openssl genrsa -out ./ca.key 2048 ->

openssl genrsa -out ./server.key 2048

openssl req -new -x509 -days 30 -key ./ca.key -out ./ca.crt

<!-- How to use -->

openssl genrsa -aes256 -out ca-key.pem 4096 // pass 1234 -> Private key of CA

openssl req -new -x509 -sha256 -days 30 -key ca-key.pem -out ca.pem ->

openssl x509 -in ca.pem -text

openssl genrsa -out cert-key.pem 4096

openssl req -new -sha256 -subj "/CN=CN" -key cert-key.pem -out cert.csr

openssl x509 -req -sha256 -days 30 -in cert.csr -CA ca.pem -CAkey ca-key.pem
-out cert.pem -extfile extfile.cnf

<!-- CAcreateserial -->

cat cert.pem > fullchain.pem cat ca.pem >> fullchain.pem

<!-- add cert to client and server -->

CA-private-key.pem CA.pem from CA-private-key.pem -> can view or check with
openssl x509 -in CA.pem -text

CA

Certificate Private/Public Key

What is rsa, sha256, openssl, x509, what does command lines (openssl genrsa,
openssl req, openssl x509) do?

data encryption => use public key to encrypt, private key to decrypt

data signature => use private key to sign, public key to verify

<!-- Steps 1: Generate CA private key and CA certificate -->

openssl genrsa -aes256 -out ca-key.pem 4096 -> pass 1234

openssl req -new -x509 -sha256 -days 30 -key ca-key.pem -out ca.pem

<!-- Steps 2: Generate server private key and server certificate signing request -->

openssl genrsa -out server-key.pem 4096

openssl req -new -sha256 -subj "/CN=CN" -key server-key.pem -out server.csr

<!-- Steps 3: Generate server certificate from CA certificate and CA private key -->

openssl x509 -req -sha256 -days 30 -in server.csr -CA ca.pem -CAkey ca-key.pem
-out server.pem

<!-- Steps 4: Verify server certificate -->

openssl verify -CAfile ca.pem server.pem
