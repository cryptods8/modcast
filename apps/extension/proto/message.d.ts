import * as $protobuf from "protobufjs";
import Long = require("long");
/** Properties of a Message. */
export interface IMessage {

    /** Message data */
    data?: (IMessageData|null);

    /** Message hash */
    hash?: (Uint8Array|null);

    /** Message hashScheme */
    hashScheme?: (HashScheme|null);

    /** Message signature */
    signature?: (Uint8Array|null);

    /** Message signatureScheme */
    signatureScheme?: (SignatureScheme|null);

    /** Message signer */
    signer?: (Uint8Array|null);

    /** Message dataBytes */
    dataBytes?: (Uint8Array|null);
}

/**
 * A Message is a delta operation on the Farcaster network. The message protobuf is an envelope
 * that wraps a MessageData object and contains a hash and signature which can verify its authenticity.
 */
export class Message implements IMessage {

    /**
     * Constructs a new Message.
     * @param [properties] Properties to set
     */
    constructor(properties?: IMessage);

    /** Message data. */
    public data?: (IMessageData|null);

    /** Message hash. */
    public hash: Uint8Array;

    /** Message hashScheme. */
    public hashScheme: HashScheme;

    /** Message signature. */
    public signature: Uint8Array;

    /** Message signatureScheme. */
    public signatureScheme: SignatureScheme;

    /** Message signer. */
    public signer: Uint8Array;

    /** Message dataBytes. */
    public dataBytes?: (Uint8Array|null);

    /**
     * Creates a new Message instance using the specified properties.
     * @param [properties] Properties to set
     * @returns Message instance
     */
    public static create(properties?: IMessage): Message;

    /**
     * Encodes the specified Message message. Does not implicitly {@link Message.verify|verify} messages.
     * @param message Message message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(message: IMessage, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Encodes the specified Message message, length delimited. Does not implicitly {@link Message.verify|verify} messages.
     * @param message Message message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encodeDelimited(message: IMessage, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a Message message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns Message
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): Message;

    /**
     * Decodes a Message message from the specified reader or buffer, length delimited.
     * @param reader Reader or buffer to decode from
     * @returns Message
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): Message;

    /**
     * Verifies a Message message.
     * @param message Plain object to verify
     * @returns `null` if valid, otherwise the reason why it is not
     */
    public static verify(message: { [k: string]: any }): (string|null);

    /**
     * Creates a Message message from a plain object. Also converts values to their respective internal types.
     * @param object Plain object
     * @returns Message
     */
    public static fromObject(object: { [k: string]: any }): Message;

    /**
     * Creates a plain object from a Message message. Also converts values to other types if specified.
     * @param message Message
     * @param [options] Conversion options
     * @returns Plain object
     */
    public static toObject(message: Message, options?: $protobuf.IConversionOptions): { [k: string]: any };

    /**
     * Converts this Message to JSON.
     * @returns JSON object
     */
    public toJSON(): { [k: string]: any };

    /**
     * Gets the default type url for Message
     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
     * @returns The default type url
     */
    public static getTypeUrl(typeUrlPrefix?: string): string;
}

/** Properties of a UserNameProof. */
export interface IUserNameProof {

    /** UserNameProof data */
    data?: (Uint8Array|null);
}

/** Represents a UserNameProof. */
export class UserNameProof implements IUserNameProof {

    /**
     * Constructs a new UserNameProof.
     * @param [properties] Properties to set
     */
    constructor(properties?: IUserNameProof);

    /** UserNameProof data. */
    public data: Uint8Array;

    /**
     * Creates a new UserNameProof instance using the specified properties.
     * @param [properties] Properties to set
     * @returns UserNameProof instance
     */
    public static create(properties?: IUserNameProof): UserNameProof;

    /**
     * Encodes the specified UserNameProof message. Does not implicitly {@link UserNameProof.verify|verify} messages.
     * @param message UserNameProof message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(message: IUserNameProof, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Encodes the specified UserNameProof message, length delimited. Does not implicitly {@link UserNameProof.verify|verify} messages.
     * @param message UserNameProof message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encodeDelimited(message: IUserNameProof, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a UserNameProof message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns UserNameProof
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): UserNameProof;

    /**
     * Decodes a UserNameProof message from the specified reader or buffer, length delimited.
     * @param reader Reader or buffer to decode from
     * @returns UserNameProof
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): UserNameProof;

    /**
     * Verifies a UserNameProof message.
     * @param message Plain object to verify
     * @returns `null` if valid, otherwise the reason why it is not
     */
    public static verify(message: { [k: string]: any }): (string|null);

    /**
     * Creates a UserNameProof message from a plain object. Also converts values to their respective internal types.
     * @param object Plain object
     * @returns UserNameProof
     */
    public static fromObject(object: { [k: string]: any }): UserNameProof;

    /**
     * Creates a plain object from a UserNameProof message. Also converts values to other types if specified.
     * @param message UserNameProof
     * @param [options] Conversion options
     * @returns Plain object
     */
    public static toObject(message: UserNameProof, options?: $protobuf.IConversionOptions): { [k: string]: any };

    /**
     * Converts this UserNameProof to JSON.
     * @returns JSON object
     */
    public toJSON(): { [k: string]: any };

    /**
     * Gets the default type url for UserNameProof
     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
     * @returns The default type url
     */
    public static getTypeUrl(typeUrlPrefix?: string): string;
}

/** Properties of a MessageData. */
export interface IMessageData {

    /** MessageData type */
    type?: (MessageType|null);

    /** MessageData fid */
    fid?: (number|Long|null);

    /** MessageData timestamp */
    timestamp?: (number|null);

    /** MessageData network */
    network?: (FarcasterNetwork|null);

    /** MessageData castAddBody */
    castAddBody?: (ICastAddBody|null);

    /** MessageData castRemoveBody */
    castRemoveBody?: (ICastRemoveBody|null);

    /** MessageData reactionBody */
    reactionBody?: (IReactionBody|null);

    /** MessageData verificationAddAddressBody */
    verificationAddAddressBody?: (IVerificationAddAddressBody|null);

    /** MessageData verificationRemoveBody */
    verificationRemoveBody?: (IVerificationRemoveBody|null);

    /** MessageData userDataBody */
    userDataBody?: (IUserDataBody|null);

    /** MessageData linkBody */
    linkBody?: (ILinkBody|null);

    /** MessageData usernameProofBody */
    usernameProofBody?: (IUserNameProof|null);

    /** MessageData frameActionBody */
    frameActionBody?: (IFrameActionBody|null);

    /** MessageData linkCompactStateBody */
    linkCompactStateBody?: (ILinkCompactStateBody|null);
}

/**
 * A MessageData object contains properties common to all messages and wraps a body object which
 * contains properties specific to the MessageType.
 */
export class MessageData implements IMessageData {

    /**
     * Constructs a new MessageData.
     * @param [properties] Properties to set
     */
    constructor(properties?: IMessageData);

    /** MessageData type. */
    public type: MessageType;

    /** MessageData fid. */
    public fid: (number|Long);

    /** MessageData timestamp. */
    public timestamp: number;

    /** MessageData network. */
    public network: FarcasterNetwork;

    /** MessageData castAddBody. */
    public castAddBody?: (ICastAddBody|null);

    /** MessageData castRemoveBody. */
    public castRemoveBody?: (ICastRemoveBody|null);

    /** MessageData reactionBody. */
    public reactionBody?: (IReactionBody|null);

    /** MessageData verificationAddAddressBody. */
    public verificationAddAddressBody?: (IVerificationAddAddressBody|null);

    /** MessageData verificationRemoveBody. */
    public verificationRemoveBody?: (IVerificationRemoveBody|null);

    /** MessageData userDataBody. */
    public userDataBody?: (IUserDataBody|null);

    /** MessageData linkBody. */
    public linkBody?: (ILinkBody|null);

    /** MessageData usernameProofBody. */
    public usernameProofBody?: (IUserNameProof|null);

    /** MessageData frameActionBody. */
    public frameActionBody?: (IFrameActionBody|null);

    /** MessageData linkCompactStateBody. */
    public linkCompactStateBody?: (ILinkCompactStateBody|null);

    /** MessageData body. */
    public body?: ("castAddBody"|"castRemoveBody"|"reactionBody"|"verificationAddAddressBody"|"verificationRemoveBody"|"userDataBody"|"linkBody"|"usernameProofBody"|"frameActionBody"|"linkCompactStateBody");

    /**
     * Creates a new MessageData instance using the specified properties.
     * @param [properties] Properties to set
     * @returns MessageData instance
     */
    public static create(properties?: IMessageData): MessageData;

    /**
     * Encodes the specified MessageData message. Does not implicitly {@link MessageData.verify|verify} messages.
     * @param message MessageData message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(message: IMessageData, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Encodes the specified MessageData message, length delimited. Does not implicitly {@link MessageData.verify|verify} messages.
     * @param message MessageData message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encodeDelimited(message: IMessageData, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a MessageData message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns MessageData
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): MessageData;

    /**
     * Decodes a MessageData message from the specified reader or buffer, length delimited.
     * @param reader Reader or buffer to decode from
     * @returns MessageData
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): MessageData;

    /**
     * Verifies a MessageData message.
     * @param message Plain object to verify
     * @returns `null` if valid, otherwise the reason why it is not
     */
    public static verify(message: { [k: string]: any }): (string|null);

    /**
     * Creates a MessageData message from a plain object. Also converts values to their respective internal types.
     * @param object Plain object
     * @returns MessageData
     */
    public static fromObject(object: { [k: string]: any }): MessageData;

    /**
     * Creates a plain object from a MessageData message. Also converts values to other types if specified.
     * @param message MessageData
     * @param [options] Conversion options
     * @returns Plain object
     */
    public static toObject(message: MessageData, options?: $protobuf.IConversionOptions): { [k: string]: any };

    /**
     * Converts this MessageData to JSON.
     * @returns JSON object
     */
    public toJSON(): { [k: string]: any };

    /**
     * Gets the default type url for MessageData
     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
     * @returns The default type url
     */
    public static getTypeUrl(typeUrlPrefix?: string): string;
}

/** Type of hashing scheme used to produce a digest of MessageData */
export enum HashScheme {
    HASH_SCHEME_NONE = 0,
    HASH_SCHEME_BLAKE3 = 1
}

/** Type of signature scheme used to sign the Message hash */
export enum SignatureScheme {
    SIGNATURE_SCHEME_NONE = 0,
    SIGNATURE_SCHEME_ED25519 = 1,
    SIGNATURE_SCHEME_EIP712 = 2
}

/** Type of the MessageBody */
export enum MessageType {
    MESSAGE_TYPE_NONE = 0,
    MESSAGE_TYPE_CAST_ADD = 1,
    MESSAGE_TYPE_CAST_REMOVE = 2,
    MESSAGE_TYPE_REACTION_ADD = 3,
    MESSAGE_TYPE_REACTION_REMOVE = 4,
    MESSAGE_TYPE_LINK_ADD = 5,
    MESSAGE_TYPE_LINK_REMOVE = 6,
    MESSAGE_TYPE_VERIFICATION_ADD_ETH_ADDRESS = 7,
    MESSAGE_TYPE_VERIFICATION_REMOVE = 8,
    MESSAGE_TYPE_USER_DATA_ADD = 11,
    MESSAGE_TYPE_USERNAME_PROOF = 12,
    MESSAGE_TYPE_FRAME_ACTION = 13,
    MESSAGE_TYPE_LINK_COMPACT_STATE = 14
}

/** Farcaster network the message is intended for */
export enum FarcasterNetwork {
    FARCASTER_NETWORK_NONE = 0,
    FARCASTER_NETWORK_MAINNET = 1,
    FARCASTER_NETWORK_TESTNET = 2,
    FARCASTER_NETWORK_DEVNET = 3
}

/** Adds metadata about a user */
export class UserDataBody implements IUserDataBody {

    /**
     * Constructs a new UserDataBody.
     * @param [properties] Properties to set
     */
    constructor(properties?: IUserDataBody);

    /** UserDataBody type. */
    public type: UserDataType;

    /** UserDataBody value. */
    public value: string;

    /**
     * Creates a new UserDataBody instance using the specified properties.
     * @param [properties] Properties to set
     * @returns UserDataBody instance
     */
    public static create(properties?: IUserDataBody): UserDataBody;

    /**
     * Encodes the specified UserDataBody message. Does not implicitly {@link UserDataBody.verify|verify} messages.
     * @param message UserDataBody message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(message: IUserDataBody, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Encodes the specified UserDataBody message, length delimited. Does not implicitly {@link UserDataBody.verify|verify} messages.
     * @param message UserDataBody message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encodeDelimited(message: IUserDataBody, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a UserDataBody message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns UserDataBody
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): UserDataBody;

    /**
     * Decodes a UserDataBody message from the specified reader or buffer, length delimited.
     * @param reader Reader or buffer to decode from
     * @returns UserDataBody
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): UserDataBody;

    /**
     * Verifies a UserDataBody message.
     * @param message Plain object to verify
     * @returns `null` if valid, otherwise the reason why it is not
     */
    public static verify(message: { [k: string]: any }): (string|null);

    /**
     * Creates a UserDataBody message from a plain object. Also converts values to their respective internal types.
     * @param object Plain object
     * @returns UserDataBody
     */
    public static fromObject(object: { [k: string]: any }): UserDataBody;

    /**
     * Creates a plain object from a UserDataBody message. Also converts values to other types if specified.
     * @param message UserDataBody
     * @param [options] Conversion options
     * @returns Plain object
     */
    public static toObject(message: UserDataBody, options?: $protobuf.IConversionOptions): { [k: string]: any };

    /**
     * Converts this UserDataBody to JSON.
     * @returns JSON object
     */
    public toJSON(): { [k: string]: any };

    /**
     * Gets the default type url for UserDataBody
     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
     * @returns The default type url
     */
    public static getTypeUrl(typeUrlPrefix?: string): string;
}

/** Type of UserData */
export enum UserDataType {
    USER_DATA_TYPE_NONE = 0,
    USER_DATA_TYPE_PFP = 1,
    USER_DATA_TYPE_DISPLAY = 2,
    USER_DATA_TYPE_BIO = 3,
    USER_DATA_TYPE_URL = 5,
    USER_DATA_TYPE_USERNAME = 6
}

/** Represents an Embed. */
export class Embed implements IEmbed {

    /**
     * Constructs a new Embed.
     * @param [properties] Properties to set
     */
    constructor(properties?: IEmbed);

    /** Embed url. */
    public url?: (string|null);

    /** Embed castId. */
    public castId?: (ICastId|null);

    /** Embed embed. */
    public embed?: ("url"|"castId");

    /**
     * Creates a new Embed instance using the specified properties.
     * @param [properties] Properties to set
     * @returns Embed instance
     */
    public static create(properties?: IEmbed): Embed;

    /**
     * Encodes the specified Embed message. Does not implicitly {@link Embed.verify|verify} messages.
     * @param message Embed message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(message: IEmbed, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Encodes the specified Embed message, length delimited. Does not implicitly {@link Embed.verify|verify} messages.
     * @param message Embed message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encodeDelimited(message: IEmbed, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes an Embed message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns Embed
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): Embed;

    /**
     * Decodes an Embed message from the specified reader or buffer, length delimited.
     * @param reader Reader or buffer to decode from
     * @returns Embed
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): Embed;

    /**
     * Verifies an Embed message.
     * @param message Plain object to verify
     * @returns `null` if valid, otherwise the reason why it is not
     */
    public static verify(message: { [k: string]: any }): (string|null);

    /**
     * Creates an Embed message from a plain object. Also converts values to their respective internal types.
     * @param object Plain object
     * @returns Embed
     */
    public static fromObject(object: { [k: string]: any }): Embed;

    /**
     * Creates a plain object from an Embed message. Also converts values to other types if specified.
     * @param message Embed
     * @param [options] Conversion options
     * @returns Plain object
     */
    public static toObject(message: Embed, options?: $protobuf.IConversionOptions): { [k: string]: any };

    /**
     * Converts this Embed to JSON.
     * @returns JSON object
     */
    public toJSON(): { [k: string]: any };

    /**
     * Gets the default type url for Embed
     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
     * @returns The default type url
     */
    public static getTypeUrl(typeUrlPrefix?: string): string;
}

/** Type of cast */
export enum CastType {
    CAST = 0,
    LONG_CAST = 1
}

/** Adds a new Cast */
export class CastAddBody implements ICastAddBody {

    /**
     * Constructs a new CastAddBody.
     * @param [properties] Properties to set
     */
    constructor(properties?: ICastAddBody);

    /** CastAddBody embedsDeprecated. */
    public embedsDeprecated: string[];

    /** CastAddBody mentions. */
    public mentions: (number|Long)[];

    /** CastAddBody parentCastId. */
    public parentCastId?: (ICastId|null);

    /** CastAddBody parentUrl. */
    public parentUrl?: (string|null);

    /** CastAddBody text. */
    public text: string;

    /** CastAddBody mentionsPositions. */
    public mentionsPositions: number[];

    /** CastAddBody embeds. */
    public embeds: IEmbed[];

    /** CastAddBody type. */
    public type: CastType;

    /** CastAddBody parent. */
    public parent?: ("parentCastId"|"parentUrl");

    /**
     * Creates a new CastAddBody instance using the specified properties.
     * @param [properties] Properties to set
     * @returns CastAddBody instance
     */
    public static create(properties?: ICastAddBody): CastAddBody;

    /**
     * Encodes the specified CastAddBody message. Does not implicitly {@link CastAddBody.verify|verify} messages.
     * @param message CastAddBody message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(message: ICastAddBody, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Encodes the specified CastAddBody message, length delimited. Does not implicitly {@link CastAddBody.verify|verify} messages.
     * @param message CastAddBody message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encodeDelimited(message: ICastAddBody, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a CastAddBody message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns CastAddBody
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): CastAddBody;

    /**
     * Decodes a CastAddBody message from the specified reader or buffer, length delimited.
     * @param reader Reader or buffer to decode from
     * @returns CastAddBody
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): CastAddBody;

    /**
     * Verifies a CastAddBody message.
     * @param message Plain object to verify
     * @returns `null` if valid, otherwise the reason why it is not
     */
    public static verify(message: { [k: string]: any }): (string|null);

    /**
     * Creates a CastAddBody message from a plain object. Also converts values to their respective internal types.
     * @param object Plain object
     * @returns CastAddBody
     */
    public static fromObject(object: { [k: string]: any }): CastAddBody;

    /**
     * Creates a plain object from a CastAddBody message. Also converts values to other types if specified.
     * @param message CastAddBody
     * @param [options] Conversion options
     * @returns Plain object
     */
    public static toObject(message: CastAddBody, options?: $protobuf.IConversionOptions): { [k: string]: any };

    /**
     * Converts this CastAddBody to JSON.
     * @returns JSON object
     */
    public toJSON(): { [k: string]: any };

    /**
     * Gets the default type url for CastAddBody
     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
     * @returns The default type url
     */
    public static getTypeUrl(typeUrlPrefix?: string): string;
}

/** Removes an existing Cast */
export class CastRemoveBody implements ICastRemoveBody {

    /**
     * Constructs a new CastRemoveBody.
     * @param [properties] Properties to set
     */
    constructor(properties?: ICastRemoveBody);

    /** CastRemoveBody targetHash. */
    public targetHash: Uint8Array;

    /**
     * Creates a new CastRemoveBody instance using the specified properties.
     * @param [properties] Properties to set
     * @returns CastRemoveBody instance
     */
    public static create(properties?: ICastRemoveBody): CastRemoveBody;

    /**
     * Encodes the specified CastRemoveBody message. Does not implicitly {@link CastRemoveBody.verify|verify} messages.
     * @param message CastRemoveBody message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(message: ICastRemoveBody, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Encodes the specified CastRemoveBody message, length delimited. Does not implicitly {@link CastRemoveBody.verify|verify} messages.
     * @param message CastRemoveBody message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encodeDelimited(message: ICastRemoveBody, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a CastRemoveBody message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns CastRemoveBody
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): CastRemoveBody;

    /**
     * Decodes a CastRemoveBody message from the specified reader or buffer, length delimited.
     * @param reader Reader or buffer to decode from
     * @returns CastRemoveBody
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): CastRemoveBody;

    /**
     * Verifies a CastRemoveBody message.
     * @param message Plain object to verify
     * @returns `null` if valid, otherwise the reason why it is not
     */
    public static verify(message: { [k: string]: any }): (string|null);

    /**
     * Creates a CastRemoveBody message from a plain object. Also converts values to their respective internal types.
     * @param object Plain object
     * @returns CastRemoveBody
     */
    public static fromObject(object: { [k: string]: any }): CastRemoveBody;

    /**
     * Creates a plain object from a CastRemoveBody message. Also converts values to other types if specified.
     * @param message CastRemoveBody
     * @param [options] Conversion options
     * @returns Plain object
     */
    public static toObject(message: CastRemoveBody, options?: $protobuf.IConversionOptions): { [k: string]: any };

    /**
     * Converts this CastRemoveBody to JSON.
     * @returns JSON object
     */
    public toJSON(): { [k: string]: any };

    /**
     * Gets the default type url for CastRemoveBody
     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
     * @returns The default type url
     */
    public static getTypeUrl(typeUrlPrefix?: string): string;
}

/** Identifier used to look up a Cast */
export class CastId implements ICastId {

    /**
     * Constructs a new CastId.
     * @param [properties] Properties to set
     */
    constructor(properties?: ICastId);

    /** CastId fid. */
    public fid: (number|Long);

    /** CastId hash. */
    public hash: Uint8Array;

    /**
     * Creates a new CastId instance using the specified properties.
     * @param [properties] Properties to set
     * @returns CastId instance
     */
    public static create(properties?: ICastId): CastId;

    /**
     * Encodes the specified CastId message. Does not implicitly {@link CastId.verify|verify} messages.
     * @param message CastId message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(message: ICastId, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Encodes the specified CastId message, length delimited. Does not implicitly {@link CastId.verify|verify} messages.
     * @param message CastId message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encodeDelimited(message: ICastId, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a CastId message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns CastId
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): CastId;

    /**
     * Decodes a CastId message from the specified reader or buffer, length delimited.
     * @param reader Reader or buffer to decode from
     * @returns CastId
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): CastId;

    /**
     * Verifies a CastId message.
     * @param message Plain object to verify
     * @returns `null` if valid, otherwise the reason why it is not
     */
    public static verify(message: { [k: string]: any }): (string|null);

    /**
     * Creates a CastId message from a plain object. Also converts values to their respective internal types.
     * @param object Plain object
     * @returns CastId
     */
    public static fromObject(object: { [k: string]: any }): CastId;

    /**
     * Creates a plain object from a CastId message. Also converts values to other types if specified.
     * @param message CastId
     * @param [options] Conversion options
     * @returns Plain object
     */
    public static toObject(message: CastId, options?: $protobuf.IConversionOptions): { [k: string]: any };

    /**
     * Converts this CastId to JSON.
     * @returns JSON object
     */
    public toJSON(): { [k: string]: any };

    /**
     * Gets the default type url for CastId
     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
     * @returns The default type url
     */
    public static getTypeUrl(typeUrlPrefix?: string): string;
}

/** Adds or removes a Reaction from a Cast */
export class ReactionBody implements IReactionBody {

    /**
     * Constructs a new ReactionBody.
     * @param [properties] Properties to set
     */
    constructor(properties?: IReactionBody);

    /** ReactionBody type. */
    public type: ReactionType;

    /** ReactionBody targetCastId. */
    public targetCastId?: (ICastId|null);

    /** ReactionBody targetUrl. */
    public targetUrl?: (string|null);

    /** ReactionBody target. */
    public target?: ("targetCastId"|"targetUrl");

    /**
     * Creates a new ReactionBody instance using the specified properties.
     * @param [properties] Properties to set
     * @returns ReactionBody instance
     */
    public static create(properties?: IReactionBody): ReactionBody;

    /**
     * Encodes the specified ReactionBody message. Does not implicitly {@link ReactionBody.verify|verify} messages.
     * @param message ReactionBody message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(message: IReactionBody, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Encodes the specified ReactionBody message, length delimited. Does not implicitly {@link ReactionBody.verify|verify} messages.
     * @param message ReactionBody message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encodeDelimited(message: IReactionBody, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a ReactionBody message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns ReactionBody
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): ReactionBody;

    /**
     * Decodes a ReactionBody message from the specified reader or buffer, length delimited.
     * @param reader Reader or buffer to decode from
     * @returns ReactionBody
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): ReactionBody;

    /**
     * Verifies a ReactionBody message.
     * @param message Plain object to verify
     * @returns `null` if valid, otherwise the reason why it is not
     */
    public static verify(message: { [k: string]: any }): (string|null);

    /**
     * Creates a ReactionBody message from a plain object. Also converts values to their respective internal types.
     * @param object Plain object
     * @returns ReactionBody
     */
    public static fromObject(object: { [k: string]: any }): ReactionBody;

    /**
     * Creates a plain object from a ReactionBody message. Also converts values to other types if specified.
     * @param message ReactionBody
     * @param [options] Conversion options
     * @returns Plain object
     */
    public static toObject(message: ReactionBody, options?: $protobuf.IConversionOptions): { [k: string]: any };

    /**
     * Converts this ReactionBody to JSON.
     * @returns JSON object
     */
    public toJSON(): { [k: string]: any };

    /**
     * Gets the default type url for ReactionBody
     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
     * @returns The default type url
     */
    public static getTypeUrl(typeUrlPrefix?: string): string;
}

/** Type of Reaction */
export enum ReactionType {
    REACTION_TYPE_NONE = 0,
    REACTION_TYPE_LIKE = 1,
    REACTION_TYPE_RECAST = 2
}

/** Type of Protocol to disambiguate verification addresses */
export enum Protocol {
    PROTOCOL_ETHEREUM = 0,
    PROTOCOL_SOLANA = 1
}

/** Adds a Verification of ownership of an Address based on Protocol */
export class VerificationAddAddressBody implements IVerificationAddAddressBody {

    /**
     * Constructs a new VerificationAddAddressBody.
     * @param [properties] Properties to set
     */
    constructor(properties?: IVerificationAddAddressBody);

    /** VerificationAddAddressBody address. */
    public address: Uint8Array;

    /** VerificationAddAddressBody claimSignature. */
    public claimSignature: Uint8Array;

    /** VerificationAddAddressBody blockHash. */
    public blockHash: Uint8Array;

    /** VerificationAddAddressBody verificationType. */
    public verificationType: number;

    /** VerificationAddAddressBody chainId. */
    public chainId: number;

    /** VerificationAddAddressBody protocol. */
    public protocol: Protocol;

    /**
     * Creates a new VerificationAddAddressBody instance using the specified properties.
     * @param [properties] Properties to set
     * @returns VerificationAddAddressBody instance
     */
    public static create(properties?: IVerificationAddAddressBody): VerificationAddAddressBody;

    /**
     * Encodes the specified VerificationAddAddressBody message. Does not implicitly {@link VerificationAddAddressBody.verify|verify} messages.
     * @param message VerificationAddAddressBody message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(message: IVerificationAddAddressBody, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Encodes the specified VerificationAddAddressBody message, length delimited. Does not implicitly {@link VerificationAddAddressBody.verify|verify} messages.
     * @param message VerificationAddAddressBody message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encodeDelimited(message: IVerificationAddAddressBody, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a VerificationAddAddressBody message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns VerificationAddAddressBody
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): VerificationAddAddressBody;

    /**
     * Decodes a VerificationAddAddressBody message from the specified reader or buffer, length delimited.
     * @param reader Reader or buffer to decode from
     * @returns VerificationAddAddressBody
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): VerificationAddAddressBody;

    /**
     * Verifies a VerificationAddAddressBody message.
     * @param message Plain object to verify
     * @returns `null` if valid, otherwise the reason why it is not
     */
    public static verify(message: { [k: string]: any }): (string|null);

    /**
     * Creates a VerificationAddAddressBody message from a plain object. Also converts values to their respective internal types.
     * @param object Plain object
     * @returns VerificationAddAddressBody
     */
    public static fromObject(object: { [k: string]: any }): VerificationAddAddressBody;

    /**
     * Creates a plain object from a VerificationAddAddressBody message. Also converts values to other types if specified.
     * @param message VerificationAddAddressBody
     * @param [options] Conversion options
     * @returns Plain object
     */
    public static toObject(message: VerificationAddAddressBody, options?: $protobuf.IConversionOptions): { [k: string]: any };

    /**
     * Converts this VerificationAddAddressBody to JSON.
     * @returns JSON object
     */
    public toJSON(): { [k: string]: any };

    /**
     * Gets the default type url for VerificationAddAddressBody
     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
     * @returns The default type url
     */
    public static getTypeUrl(typeUrlPrefix?: string): string;
}

/** Removes a Verification of a given protocol */
export class VerificationRemoveBody implements IVerificationRemoveBody {

    /**
     * Constructs a new VerificationRemoveBody.
     * @param [properties] Properties to set
     */
    constructor(properties?: IVerificationRemoveBody);

    /** VerificationRemoveBody address. */
    public address: Uint8Array;

    /** VerificationRemoveBody protocol. */
    public protocol: Protocol;

    /**
     * Creates a new VerificationRemoveBody instance using the specified properties.
     * @param [properties] Properties to set
     * @returns VerificationRemoveBody instance
     */
    public static create(properties?: IVerificationRemoveBody): VerificationRemoveBody;

    /**
     * Encodes the specified VerificationRemoveBody message. Does not implicitly {@link VerificationRemoveBody.verify|verify} messages.
     * @param message VerificationRemoveBody message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(message: IVerificationRemoveBody, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Encodes the specified VerificationRemoveBody message, length delimited. Does not implicitly {@link VerificationRemoveBody.verify|verify} messages.
     * @param message VerificationRemoveBody message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encodeDelimited(message: IVerificationRemoveBody, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a VerificationRemoveBody message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns VerificationRemoveBody
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): VerificationRemoveBody;

    /**
     * Decodes a VerificationRemoveBody message from the specified reader or buffer, length delimited.
     * @param reader Reader or buffer to decode from
     * @returns VerificationRemoveBody
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): VerificationRemoveBody;

    /**
     * Verifies a VerificationRemoveBody message.
     * @param message Plain object to verify
     * @returns `null` if valid, otherwise the reason why it is not
     */
    public static verify(message: { [k: string]: any }): (string|null);

    /**
     * Creates a VerificationRemoveBody message from a plain object. Also converts values to their respective internal types.
     * @param object Plain object
     * @returns VerificationRemoveBody
     */
    public static fromObject(object: { [k: string]: any }): VerificationRemoveBody;

    /**
     * Creates a plain object from a VerificationRemoveBody message. Also converts values to other types if specified.
     * @param message VerificationRemoveBody
     * @param [options] Conversion options
     * @returns Plain object
     */
    public static toObject(message: VerificationRemoveBody, options?: $protobuf.IConversionOptions): { [k: string]: any };

    /**
     * Converts this VerificationRemoveBody to JSON.
     * @returns JSON object
     */
    public toJSON(): { [k: string]: any };

    /**
     * Gets the default type url for VerificationRemoveBody
     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
     * @returns The default type url
     */
    public static getTypeUrl(typeUrlPrefix?: string): string;
}

/** Adds or removes a Link */
export class LinkBody implements ILinkBody {

    /**
     * Constructs a new LinkBody.
     * @param [properties] Properties to set
     */
    constructor(properties?: ILinkBody);

    /** LinkBody type. */
    public type: string;

    /** LinkBody displayTimestamp. */
    public displayTimestamp?: (number|null);

    /** LinkBody targetFid. */
    public targetFid?: (number|Long|null);

    /** LinkBody target. */
    public target?: "targetFid";

    /**
     * Creates a new LinkBody instance using the specified properties.
     * @param [properties] Properties to set
     * @returns LinkBody instance
     */
    public static create(properties?: ILinkBody): LinkBody;

    /**
     * Encodes the specified LinkBody message. Does not implicitly {@link LinkBody.verify|verify} messages.
     * @param message LinkBody message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(message: ILinkBody, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Encodes the specified LinkBody message, length delimited. Does not implicitly {@link LinkBody.verify|verify} messages.
     * @param message LinkBody message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encodeDelimited(message: ILinkBody, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a LinkBody message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns LinkBody
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): LinkBody;

    /**
     * Decodes a LinkBody message from the specified reader or buffer, length delimited.
     * @param reader Reader or buffer to decode from
     * @returns LinkBody
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): LinkBody;

    /**
     * Verifies a LinkBody message.
     * @param message Plain object to verify
     * @returns `null` if valid, otherwise the reason why it is not
     */
    public static verify(message: { [k: string]: any }): (string|null);

    /**
     * Creates a LinkBody message from a plain object. Also converts values to their respective internal types.
     * @param object Plain object
     * @returns LinkBody
     */
    public static fromObject(object: { [k: string]: any }): LinkBody;

    /**
     * Creates a plain object from a LinkBody message. Also converts values to other types if specified.
     * @param message LinkBody
     * @param [options] Conversion options
     * @returns Plain object
     */
    public static toObject(message: LinkBody, options?: $protobuf.IConversionOptions): { [k: string]: any };

    /**
     * Converts this LinkBody to JSON.
     * @returns JSON object
     */
    public toJSON(): { [k: string]: any };

    /**
     * Gets the default type url for LinkBody
     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
     * @returns The default type url
     */
    public static getTypeUrl(typeUrlPrefix?: string): string;
}

/** A Compaction message for the Link Store */
export class LinkCompactStateBody implements ILinkCompactStateBody {

    /**
     * Constructs a new LinkCompactStateBody.
     * @param [properties] Properties to set
     */
    constructor(properties?: ILinkCompactStateBody);

    /** LinkCompactStateBody type. */
    public type: string;

    /** LinkCompactStateBody targetFids. */
    public targetFids: (number|Long)[];

    /**
     * Creates a new LinkCompactStateBody instance using the specified properties.
     * @param [properties] Properties to set
     * @returns LinkCompactStateBody instance
     */
    public static create(properties?: ILinkCompactStateBody): LinkCompactStateBody;

    /**
     * Encodes the specified LinkCompactStateBody message. Does not implicitly {@link LinkCompactStateBody.verify|verify} messages.
     * @param message LinkCompactStateBody message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(message: ILinkCompactStateBody, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Encodes the specified LinkCompactStateBody message, length delimited. Does not implicitly {@link LinkCompactStateBody.verify|verify} messages.
     * @param message LinkCompactStateBody message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encodeDelimited(message: ILinkCompactStateBody, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a LinkCompactStateBody message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns LinkCompactStateBody
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): LinkCompactStateBody;

    /**
     * Decodes a LinkCompactStateBody message from the specified reader or buffer, length delimited.
     * @param reader Reader or buffer to decode from
     * @returns LinkCompactStateBody
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): LinkCompactStateBody;

    /**
     * Verifies a LinkCompactStateBody message.
     * @param message Plain object to verify
     * @returns `null` if valid, otherwise the reason why it is not
     */
    public static verify(message: { [k: string]: any }): (string|null);

    /**
     * Creates a LinkCompactStateBody message from a plain object. Also converts values to their respective internal types.
     * @param object Plain object
     * @returns LinkCompactStateBody
     */
    public static fromObject(object: { [k: string]: any }): LinkCompactStateBody;

    /**
     * Creates a plain object from a LinkCompactStateBody message. Also converts values to other types if specified.
     * @param message LinkCompactStateBody
     * @param [options] Conversion options
     * @returns Plain object
     */
    public static toObject(message: LinkCompactStateBody, options?: $protobuf.IConversionOptions): { [k: string]: any };

    /**
     * Converts this LinkCompactStateBody to JSON.
     * @returns JSON object
     */
    public toJSON(): { [k: string]: any };

    /**
     * Gets the default type url for LinkCompactStateBody
     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
     * @returns The default type url
     */
    public static getTypeUrl(typeUrlPrefix?: string): string;
}

/** A Farcaster Frame action */
export class FrameActionBody implements IFrameActionBody {

    /**
     * Constructs a new FrameActionBody.
     * @param [properties] Properties to set
     */
    constructor(properties?: IFrameActionBody);

    /** FrameActionBody url. */
    public url: Uint8Array;

    /** FrameActionBody buttonIndex. */
    public buttonIndex: number;

    /** FrameActionBody castId. */
    public castId?: (ICastId|null);

    /** FrameActionBody inputText. */
    public inputText: Uint8Array;

    /** FrameActionBody state. */
    public state: Uint8Array;

    /** FrameActionBody transactionId. */
    public transactionId: Uint8Array;

    /** FrameActionBody address. */
    public address: Uint8Array;

    /**
     * Creates a new FrameActionBody instance using the specified properties.
     * @param [properties] Properties to set
     * @returns FrameActionBody instance
     */
    public static create(properties?: IFrameActionBody): FrameActionBody;

    /**
     * Encodes the specified FrameActionBody message. Does not implicitly {@link FrameActionBody.verify|verify} messages.
     * @param message FrameActionBody message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(message: IFrameActionBody, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Encodes the specified FrameActionBody message, length delimited. Does not implicitly {@link FrameActionBody.verify|verify} messages.
     * @param message FrameActionBody message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encodeDelimited(message: IFrameActionBody, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a FrameActionBody message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns FrameActionBody
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): FrameActionBody;

    /**
     * Decodes a FrameActionBody message from the specified reader or buffer, length delimited.
     * @param reader Reader or buffer to decode from
     * @returns FrameActionBody
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): FrameActionBody;

    /**
     * Verifies a FrameActionBody message.
     * @param message Plain object to verify
     * @returns `null` if valid, otherwise the reason why it is not
     */
    public static verify(message: { [k: string]: any }): (string|null);

    /**
     * Creates a FrameActionBody message from a plain object. Also converts values to their respective internal types.
     * @param object Plain object
     * @returns FrameActionBody
     */
    public static fromObject(object: { [k: string]: any }): FrameActionBody;

    /**
     * Creates a plain object from a FrameActionBody message. Also converts values to other types if specified.
     * @param message FrameActionBody
     * @param [options] Conversion options
     * @returns Plain object
     */
    public static toObject(message: FrameActionBody, options?: $protobuf.IConversionOptions): { [k: string]: any };

    /**
     * Converts this FrameActionBody to JSON.
     * @returns JSON object
     */
    public toJSON(): { [k: string]: any };

    /**
     * Gets the default type url for FrameActionBody
     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
     * @returns The default type url
     */
    public static getTypeUrl(typeUrlPrefix?: string): string;
}
