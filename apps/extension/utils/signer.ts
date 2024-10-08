import { SignatureScheme } from "~proto/message"

import { ed25519 } from "@noble/curves/ed25519";

export interface Signer {
  readonly scheme: SignatureScheme

  /**
   * Get the key in bytes used to identify this signer.
   */
  getSignerKey(): Promise<Uint8Array>

  /**
   * Generates a 256-bit signature for a message hash and returns the bytes.
   */
  signMessageHash(hash: Uint8Array): Promise<Uint8Array>
}

abstract class Ed25519Signer implements Signer {
  /** Signature scheme as defined in protobufs */
  public readonly scheme = SignatureScheme.SIGNATURE_SCHEME_ED25519;

  /**
   * Get the 256-bit public key in bytes
   */
  public abstract getSignerKey(): Promise<Uint8Array>
  public abstract signMessageHash(hash: Uint8Array): Promise<Uint8Array>
}

export class NobleEd25519Signer extends Ed25519Signer {
  private readonly _privateKey: Uint8Array;

  constructor(privateKey: Uint8Array) {
    super();
    this._privateKey = privateKey;
  }

  public async getSignerKey(): Promise<Uint8Array> {
    return ed25519.getPublicKey(this._privateKey);
  }

  public async signMessageHash(hash: Uint8Array): Promise<Uint8Array> {
    return ed25519.sign(hash, this._privateKey);
  }
}