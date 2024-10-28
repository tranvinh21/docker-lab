# RSA Cryptography Documentation

### 1. **Introduction to RSA**

RSA (Rivest-Shamir-Adleman) is a widely used asymmetric cryptographic algorithm
named after its inventors. Unlike symmetric encryption, which uses a single key
for both encryption and decryption, RSA uses a **pair of keys**: a **public
key** and a **private key**.

- **Public Key**: Used to encrypt data or verify digital signatures.
- **Private Key**: Used to decrypt data or create digital signatures.

RSA’s security relies on the difficulty of factoring large numbers, which makes
it secure for sensitive data transmission and digital signatures.

### 2. **What Does RSA Do?**

RSA allows secure communication and verification through two main processes:

- **Encryption and Decryption**: Encrypts data using the recipient’s public key,
  ensuring only the recipient with the corresponding private key can decrypt it.
- **Digital Signatures**: Allows a sender to sign a message using their private
  key, which recipients can verify using the sender’s public key, ensuring
  message authenticity and integrity.

### 3. **Why Do We Need RSA?**

RSA is essential in modern cryptography due to its ability to enable secure,
authenticated communication. Common reasons for its use include:

- **Confidentiality**: RSA encrypts data to protect it from unauthorized access.
- **Integrity**: RSA signatures ensure that a message has not been tampered
  with.
- **Authentication**: Verifying an RSA signature authenticates the sender’s
  identity.

### 4. **Common Use Cases of RSA**

RSA is used in numerous security protocols and systems, including:

- **Secure Web Browsing (HTTPS)**: RSA helps establish a secure connection
  between web servers and clients.
- **Email Encryption**: Encrypting sensitive emails.
- **Digital Signatures**: Signing documents, software, and certificates.
- **VPN Connections**: RSA is often used to set up secure VPN connections.

### 5. **Examples of RSA Operations**

#### Example 1: RSA Encryption and Decryption

1. **Generate RSA Keys**:
   ```bash
   openssl genpkey -algorithm RSA -out private_key.pem
   openssl rsa -pubout -in private_key.pem -out public_key.pem
   ```

2. **Encrypt a Message with the Public Key**:
   ```bash
   echo "This is a confidential message." > message.txt
   openssl rsautl -encrypt -in message.txt -out encrypted_message.bin -inkey public_key.pem -pubin
   ```

3. **Decrypt the Message with the Private Key**:
   ```bash
   openssl rsautl -decrypt -in encrypted_message.bin -out decrypted_message.txt -inkey private_key.pem
   cat decrypted_message.txt
   ```

#### Example 2: Signing with Hash (Recommended)

1. **Hash the Message**:
   ```bash
   openssl dgst -sha256 -binary -out hash.bin message.txt
   ```

2. **Sign the Hash with the Private Key**:
   ```bash
   openssl pkeyutl -sign -in hash.bin -out signature.bin -inkey private_key.pem
   ```

3. **Verify the Signature with the Public Key**:
   ```bash
   openssl pkeyutl -verify -in hash.bin -sigfile signature.bin -inkey public_key.pem -pubin
   ```

#### Example 3: Signing Without Hash (Direct Signing of Message)

This approach is possible but generally **not recommended** due to security
risks.

1. **Sign the Raw Message with the Private Key**:
   ```bash
   openssl pkeyutl -sign -in message.txt -out signature.bin -inkey private_key.pem
   ```

2. **Verify the Signature with the Public Key**:
   ```bash
   openssl pkeyutl -verify -in message.txt -sigfile signature.bin -inkey public_key.pem -pubin
   ```
