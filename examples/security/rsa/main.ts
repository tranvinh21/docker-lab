import { generateKeyPairSync, privateEncrypt, publicDecrypt, sign as createSign, createVerify } from "https://deno.land/std/crypto/mod.ts";

// Generate an RSA key pair
function generateKeyPair() {
    const { publicKey, privateKey } = generateKeyPairSync('rsa', {
        modulusLength: 2048,
        publicKeyEncoding: {
            type: 'pkcs1',
            format: 'pem',
        },
        privateKeyEncoding: {
            type: 'pkcs1',
            format: 'pem',
        },
    });
    return { publicKey, privateKey };
}

// Sign a message using the private key
function signMessage(privateKey: string, message: string): Buffer {
    const signer = createSign('sha256');
    signer.update(message);
    signer.end();
    return signer.sign(privateKey);
}

// Verify the signed message with the public key
function verifySignature(publicKey: string, message: string, signature: Buffer): boolean {
    const verifier = createVerify('sha256');
    verifier.update(message);
    verifier.end();
    return verifier.verify(publicKey, signature);
}

// Encrypt a message with the private key (like a digital signature)
function encryptWithPrivateKey(privateKey: string, message: string): Buffer {
    return privateEncrypt(privateKey, Buffer.from(message));
}

// Decrypt the encrypted message with the public key
function decryptWithPublicKey(publicKey: string, encryptedMessage: Buffer): string {
    return publicDecrypt(publicKey, encryptedMessage).toString();
}

// Run the example
function main() {
    // Generate key pair
    const { publicKey, privateKey } = generateKeyPair();
    console.log("Public Key:", publicKey);
    console.log("Private Key:", privateKey);

    const message = "This is a test message for signing.";

    // Sign the message
    const signature = signMessage(privateKey, message);
    console.log("Signature:", signature.toString('base64'));

    // Verify the signature
    const isVerified = verifySignature(publicKey, message, signature);
    console.log("Signature verified:", isVerified);

    // Encrypt the message with the private key
    const encryptedMessage = encryptWithPrivateKey(privateKey, message);
    console.log("Encrypted message:", encryptedMessage.toString('base64'));

    // Decrypt the message with the public key
    const decryptedMessage = decryptWithPublicKey(publicKey, encryptedMessage);
    console.log("Decrypted message:", decryptedMessage);
}

main();
