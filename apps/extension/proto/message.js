/*eslint-disable block-scoped-var, id-length, no-control-regex, no-magic-numbers, no-prototype-builtins, no-redeclare, no-shadow, no-var, sort-vars*/
"use strict";

var $protobuf = require("protobufjs/minimal");

// Common aliases
var $Reader = $protobuf.Reader, $Writer = $protobuf.Writer, $util = $protobuf.util;

// Exported root namespace
var $root = $protobuf.roots["default"] || ($protobuf.roots["default"] = {});

$root.Message = (function() {

    /**
     * Properties of a Message.
     * @exports IMessage
     * @interface IMessage
     * @property {IMessageData|null} [data] Message data
     * @property {Uint8Array|null} [hash] Message hash
     * @property {HashScheme|null} [hashScheme] Message hashScheme
     * @property {Uint8Array|null} [signature] Message signature
     * @property {SignatureScheme|null} [signatureScheme] Message signatureScheme
     * @property {Uint8Array|null} [signer] Message signer
     * @property {Uint8Array|null} [dataBytes] Message dataBytes
     */

    /**
     * Constructs a new Message.
     * @exports Message
     * @classdesc A Message is a delta operation on the Farcaster network. The message protobuf is an envelope
     * that wraps a MessageData object and contains a hash and signature which can verify its authenticity.
     * @implements IMessage
     * @constructor
     * @param {IMessage=} [properties] Properties to set
     */
    function Message(properties) {
        if (properties)
            for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                if (properties[keys[i]] != null)
                    this[keys[i]] = properties[keys[i]];
    }

    /**
     * Message data.
     * @member {IMessageData|null|undefined} data
     * @memberof Message
     * @instance
     */
    Message.prototype.data = null;

    /**
     * Message hash.
     * @member {Uint8Array} hash
     * @memberof Message
     * @instance
     */
    Message.prototype.hash = $util.newBuffer([]);

    /**
     * Message hashScheme.
     * @member {HashScheme} hashScheme
     * @memberof Message
     * @instance
     */
    Message.prototype.hashScheme = 0;

    /**
     * Message signature.
     * @member {Uint8Array} signature
     * @memberof Message
     * @instance
     */
    Message.prototype.signature = $util.newBuffer([]);

    /**
     * Message signatureScheme.
     * @member {SignatureScheme} signatureScheme
     * @memberof Message
     * @instance
     */
    Message.prototype.signatureScheme = 0;

    /**
     * Message signer.
     * @member {Uint8Array} signer
     * @memberof Message
     * @instance
     */
    Message.prototype.signer = $util.newBuffer([]);

    /**
     * Message dataBytes.
     * @member {Uint8Array|null|undefined} dataBytes
     * @memberof Message
     * @instance
     */
    Message.prototype.dataBytes = null;

    // OneOf field names bound to virtual getters and setters
    var $oneOfFields;

    // Virtual OneOf for proto3 optional field
    Object.defineProperty(Message.prototype, "_dataBytes", {
        get: $util.oneOfGetter($oneOfFields = ["dataBytes"]),
        set: $util.oneOfSetter($oneOfFields)
    });

    /**
     * Creates a new Message instance using the specified properties.
     * @function create
     * @memberof Message
     * @static
     * @param {IMessage=} [properties] Properties to set
     * @returns {Message} Message instance
     */
    Message.create = function create(properties) {
        return new Message(properties);
    };

    /**
     * Encodes the specified Message message. Does not implicitly {@link Message.verify|verify} messages.
     * @function encode
     * @memberof Message
     * @static
     * @param {IMessage} message Message message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    Message.encode = function encode(message, writer) {
        if (!writer)
            writer = $Writer.create();
        if (message.data != null && Object.hasOwnProperty.call(message, "data"))
            $root.MessageData.encode(message.data, writer.uint32(/* id 1, wireType 2 =*/10).fork()).ldelim();
        if (message.hash != null && Object.hasOwnProperty.call(message, "hash"))
            writer.uint32(/* id 2, wireType 2 =*/18).bytes(message.hash);
        if (message.hashScheme != null && Object.hasOwnProperty.call(message, "hashScheme"))
            writer.uint32(/* id 3, wireType 0 =*/24).int32(message.hashScheme);
        if (message.signature != null && Object.hasOwnProperty.call(message, "signature"))
            writer.uint32(/* id 4, wireType 2 =*/34).bytes(message.signature);
        if (message.signatureScheme != null && Object.hasOwnProperty.call(message, "signatureScheme"))
            writer.uint32(/* id 5, wireType 0 =*/40).int32(message.signatureScheme);
        if (message.signer != null && Object.hasOwnProperty.call(message, "signer"))
            writer.uint32(/* id 6, wireType 2 =*/50).bytes(message.signer);
        if (message.dataBytes != null && Object.hasOwnProperty.call(message, "dataBytes"))
            writer.uint32(/* id 7, wireType 2 =*/58).bytes(message.dataBytes);
        return writer;
    };

    /**
     * Encodes the specified Message message, length delimited. Does not implicitly {@link Message.verify|verify} messages.
     * @function encodeDelimited
     * @memberof Message
     * @static
     * @param {IMessage} message Message message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    Message.encodeDelimited = function encodeDelimited(message, writer) {
        return this.encode(message, writer).ldelim();
    };

    /**
     * Decodes a Message message from the specified reader or buffer.
     * @function decode
     * @memberof Message
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @param {number} [length] Message length if known beforehand
     * @returns {Message} Message
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    Message.decode = function decode(reader, length) {
        if (!(reader instanceof $Reader))
            reader = $Reader.create(reader);
        var end = length === undefined ? reader.len : reader.pos + length, message = new $root.Message();
        while (reader.pos < end) {
            var tag = reader.uint32();
            switch (tag >>> 3) {
            case 1: {
                    message.data = $root.MessageData.decode(reader, reader.uint32());
                    break;
                }
            case 2: {
                    message.hash = reader.bytes();
                    break;
                }
            case 3: {
                    message.hashScheme = reader.int32();
                    break;
                }
            case 4: {
                    message.signature = reader.bytes();
                    break;
                }
            case 5: {
                    message.signatureScheme = reader.int32();
                    break;
                }
            case 6: {
                    message.signer = reader.bytes();
                    break;
                }
            case 7: {
                    message.dataBytes = reader.bytes();
                    break;
                }
            default:
                reader.skipType(tag & 7);
                break;
            }
        }
        return message;
    };

    /**
     * Decodes a Message message from the specified reader or buffer, length delimited.
     * @function decodeDelimited
     * @memberof Message
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @returns {Message} Message
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    Message.decodeDelimited = function decodeDelimited(reader) {
        if (!(reader instanceof $Reader))
            reader = new $Reader(reader);
        return this.decode(reader, reader.uint32());
    };

    /**
     * Verifies a Message message.
     * @function verify
     * @memberof Message
     * @static
     * @param {Object.<string,*>} message Plain object to verify
     * @returns {string|null} `null` if valid, otherwise the reason why it is not
     */
    Message.verify = function verify(message) {
        if (typeof message !== "object" || message === null)
            return "object expected";
        var properties = {};
        if (message.data != null && message.hasOwnProperty("data")) {
            var error = $root.MessageData.verify(message.data);
            if (error)
                return "data." + error;
        }
        if (message.hash != null && message.hasOwnProperty("hash"))
            if (!(message.hash && typeof message.hash.length === "number" || $util.isString(message.hash)))
                return "hash: buffer expected";
        if (message.hashScheme != null && message.hasOwnProperty("hashScheme"))
            switch (message.hashScheme) {
            default:
                return "hashScheme: enum value expected";
            case 0:
            case 1:
                break;
            }
        if (message.signature != null && message.hasOwnProperty("signature"))
            if (!(message.signature && typeof message.signature.length === "number" || $util.isString(message.signature)))
                return "signature: buffer expected";
        if (message.signatureScheme != null && message.hasOwnProperty("signatureScheme"))
            switch (message.signatureScheme) {
            default:
                return "signatureScheme: enum value expected";
            case 0:
            case 1:
            case 2:
                break;
            }
        if (message.signer != null && message.hasOwnProperty("signer"))
            if (!(message.signer && typeof message.signer.length === "number" || $util.isString(message.signer)))
                return "signer: buffer expected";
        if (message.dataBytes != null && message.hasOwnProperty("dataBytes")) {
            properties._dataBytes = 1;
            if (!(message.dataBytes && typeof message.dataBytes.length === "number" || $util.isString(message.dataBytes)))
                return "dataBytes: buffer expected";
        }
        return null;
    };

    /**
     * Creates a Message message from a plain object. Also converts values to their respective internal types.
     * @function fromObject
     * @memberof Message
     * @static
     * @param {Object.<string,*>} object Plain object
     * @returns {Message} Message
     */
    Message.fromObject = function fromObject(object) {
        if (object instanceof $root.Message)
            return object;
        var message = new $root.Message();
        if (object.data != null) {
            if (typeof object.data !== "object")
                throw TypeError(".Message.data: object expected");
            message.data = $root.MessageData.fromObject(object.data);
        }
        if (object.hash != null)
            if (typeof object.hash === "string")
                $util.base64.decode(object.hash, message.hash = $util.newBuffer($util.base64.length(object.hash)), 0);
            else if (object.hash.length >= 0)
                message.hash = object.hash;
        switch (object.hashScheme) {
        default:
            if (typeof object.hashScheme === "number") {
                message.hashScheme = object.hashScheme;
                break;
            }
            break;
        case "HASH_SCHEME_NONE":
        case 0:
            message.hashScheme = 0;
            break;
        case "HASH_SCHEME_BLAKE3":
        case 1:
            message.hashScheme = 1;
            break;
        }
        if (object.signature != null)
            if (typeof object.signature === "string")
                $util.base64.decode(object.signature, message.signature = $util.newBuffer($util.base64.length(object.signature)), 0);
            else if (object.signature.length >= 0)
                message.signature = object.signature;
        switch (object.signatureScheme) {
        default:
            if (typeof object.signatureScheme === "number") {
                message.signatureScheme = object.signatureScheme;
                break;
            }
            break;
        case "SIGNATURE_SCHEME_NONE":
        case 0:
            message.signatureScheme = 0;
            break;
        case "SIGNATURE_SCHEME_ED25519":
        case 1:
            message.signatureScheme = 1;
            break;
        case "SIGNATURE_SCHEME_EIP712":
        case 2:
            message.signatureScheme = 2;
            break;
        }
        if (object.signer != null)
            if (typeof object.signer === "string")
                $util.base64.decode(object.signer, message.signer = $util.newBuffer($util.base64.length(object.signer)), 0);
            else if (object.signer.length >= 0)
                message.signer = object.signer;
        if (object.dataBytes != null)
            if (typeof object.dataBytes === "string")
                $util.base64.decode(object.dataBytes, message.dataBytes = $util.newBuffer($util.base64.length(object.dataBytes)), 0);
            else if (object.dataBytes.length >= 0)
                message.dataBytes = object.dataBytes;
        return message;
    };

    /**
     * Creates a plain object from a Message message. Also converts values to other types if specified.
     * @function toObject
     * @memberof Message
     * @static
     * @param {Message} message Message
     * @param {$protobuf.IConversionOptions} [options] Conversion options
     * @returns {Object.<string,*>} Plain object
     */
    Message.toObject = function toObject(message, options) {
        if (!options)
            options = {};
        var object = {};
        if (options.defaults) {
            object.data = null;
            if (options.bytes === String)
                object.hash = "";
            else {
                object.hash = [];
                if (options.bytes !== Array)
                    object.hash = $util.newBuffer(object.hash);
            }
            object.hashScheme = options.enums === String ? "HASH_SCHEME_NONE" : 0;
            if (options.bytes === String)
                object.signature = "";
            else {
                object.signature = [];
                if (options.bytes !== Array)
                    object.signature = $util.newBuffer(object.signature);
            }
            object.signatureScheme = options.enums === String ? "SIGNATURE_SCHEME_NONE" : 0;
            if (options.bytes === String)
                object.signer = "";
            else {
                object.signer = [];
                if (options.bytes !== Array)
                    object.signer = $util.newBuffer(object.signer);
            }
        }
        if (message.data != null && message.hasOwnProperty("data"))
            object.data = $root.MessageData.toObject(message.data, options);
        if (message.hash != null && message.hasOwnProperty("hash"))
            object.hash = options.bytes === String ? $util.base64.encode(message.hash, 0, message.hash.length) : options.bytes === Array ? Array.prototype.slice.call(message.hash) : message.hash;
        if (message.hashScheme != null && message.hasOwnProperty("hashScheme"))
            object.hashScheme = options.enums === String ? $root.HashScheme[message.hashScheme] === undefined ? message.hashScheme : $root.HashScheme[message.hashScheme] : message.hashScheme;
        if (message.signature != null && message.hasOwnProperty("signature"))
            object.signature = options.bytes === String ? $util.base64.encode(message.signature, 0, message.signature.length) : options.bytes === Array ? Array.prototype.slice.call(message.signature) : message.signature;
        if (message.signatureScheme != null && message.hasOwnProperty("signatureScheme"))
            object.signatureScheme = options.enums === String ? $root.SignatureScheme[message.signatureScheme] === undefined ? message.signatureScheme : $root.SignatureScheme[message.signatureScheme] : message.signatureScheme;
        if (message.signer != null && message.hasOwnProperty("signer"))
            object.signer = options.bytes === String ? $util.base64.encode(message.signer, 0, message.signer.length) : options.bytes === Array ? Array.prototype.slice.call(message.signer) : message.signer;
        if (message.dataBytes != null && message.hasOwnProperty("dataBytes")) {
            object.dataBytes = options.bytes === String ? $util.base64.encode(message.dataBytes, 0, message.dataBytes.length) : options.bytes === Array ? Array.prototype.slice.call(message.dataBytes) : message.dataBytes;
            if (options.oneofs)
                object._dataBytes = "dataBytes";
        }
        return object;
    };

    /**
     * Converts this Message to JSON.
     * @function toJSON
     * @memberof Message
     * @instance
     * @returns {Object.<string,*>} JSON object
     */
    Message.prototype.toJSON = function toJSON() {
        return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
    };

    /**
     * Gets the default type url for Message
     * @function getTypeUrl
     * @memberof Message
     * @static
     * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
     * @returns {string} The default type url
     */
    Message.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
        if (typeUrlPrefix === undefined) {
            typeUrlPrefix = "type.googleapis.com";
        }
        return typeUrlPrefix + "/Message";
    };

    return Message;
})();

$root.UserNameProof = (function() {

    /**
     * Properties of a UserNameProof.
     * @exports IUserNameProof
     * @interface IUserNameProof
     * @property {Uint8Array|null} [data] UserNameProof data
     */

    /**
     * Constructs a new UserNameProof.
     * @exports UserNameProof
     * @classdesc Represents a UserNameProof.
     * @implements IUserNameProof
     * @constructor
     * @param {IUserNameProof=} [properties] Properties to set
     */
    function UserNameProof(properties) {
        if (properties)
            for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                if (properties[keys[i]] != null)
                    this[keys[i]] = properties[keys[i]];
    }

    /**
     * UserNameProof data.
     * @member {Uint8Array} data
     * @memberof UserNameProof
     * @instance
     */
    UserNameProof.prototype.data = $util.newBuffer([]);

    /**
     * Creates a new UserNameProof instance using the specified properties.
     * @function create
     * @memberof UserNameProof
     * @static
     * @param {IUserNameProof=} [properties] Properties to set
     * @returns {UserNameProof} UserNameProof instance
     */
    UserNameProof.create = function create(properties) {
        return new UserNameProof(properties);
    };

    /**
     * Encodes the specified UserNameProof message. Does not implicitly {@link UserNameProof.verify|verify} messages.
     * @function encode
     * @memberof UserNameProof
     * @static
     * @param {IUserNameProof} message UserNameProof message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    UserNameProof.encode = function encode(message, writer) {
        if (!writer)
            writer = $Writer.create();
        if (message.data != null && Object.hasOwnProperty.call(message, "data"))
            writer.uint32(/* id 1, wireType 2 =*/10).bytes(message.data);
        return writer;
    };

    /**
     * Encodes the specified UserNameProof message, length delimited. Does not implicitly {@link UserNameProof.verify|verify} messages.
     * @function encodeDelimited
     * @memberof UserNameProof
     * @static
     * @param {IUserNameProof} message UserNameProof message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    UserNameProof.encodeDelimited = function encodeDelimited(message, writer) {
        return this.encode(message, writer).ldelim();
    };

    /**
     * Decodes a UserNameProof message from the specified reader or buffer.
     * @function decode
     * @memberof UserNameProof
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @param {number} [length] Message length if known beforehand
     * @returns {UserNameProof} UserNameProof
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    UserNameProof.decode = function decode(reader, length) {
        if (!(reader instanceof $Reader))
            reader = $Reader.create(reader);
        var end = length === undefined ? reader.len : reader.pos + length, message = new $root.UserNameProof();
        while (reader.pos < end) {
            var tag = reader.uint32();
            switch (tag >>> 3) {
            case 1: {
                    message.data = reader.bytes();
                    break;
                }
            default:
                reader.skipType(tag & 7);
                break;
            }
        }
        return message;
    };

    /**
     * Decodes a UserNameProof message from the specified reader or buffer, length delimited.
     * @function decodeDelimited
     * @memberof UserNameProof
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @returns {UserNameProof} UserNameProof
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    UserNameProof.decodeDelimited = function decodeDelimited(reader) {
        if (!(reader instanceof $Reader))
            reader = new $Reader(reader);
        return this.decode(reader, reader.uint32());
    };

    /**
     * Verifies a UserNameProof message.
     * @function verify
     * @memberof UserNameProof
     * @static
     * @param {Object.<string,*>} message Plain object to verify
     * @returns {string|null} `null` if valid, otherwise the reason why it is not
     */
    UserNameProof.verify = function verify(message) {
        if (typeof message !== "object" || message === null)
            return "object expected";
        if (message.data != null && message.hasOwnProperty("data"))
            if (!(message.data && typeof message.data.length === "number" || $util.isString(message.data)))
                return "data: buffer expected";
        return null;
    };

    /**
     * Creates a UserNameProof message from a plain object. Also converts values to their respective internal types.
     * @function fromObject
     * @memberof UserNameProof
     * @static
     * @param {Object.<string,*>} object Plain object
     * @returns {UserNameProof} UserNameProof
     */
    UserNameProof.fromObject = function fromObject(object) {
        if (object instanceof $root.UserNameProof)
            return object;
        var message = new $root.UserNameProof();
        if (object.data != null)
            if (typeof object.data === "string")
                $util.base64.decode(object.data, message.data = $util.newBuffer($util.base64.length(object.data)), 0);
            else if (object.data.length >= 0)
                message.data = object.data;
        return message;
    };

    /**
     * Creates a plain object from a UserNameProof message. Also converts values to other types if specified.
     * @function toObject
     * @memberof UserNameProof
     * @static
     * @param {UserNameProof} message UserNameProof
     * @param {$protobuf.IConversionOptions} [options] Conversion options
     * @returns {Object.<string,*>} Plain object
     */
    UserNameProof.toObject = function toObject(message, options) {
        if (!options)
            options = {};
        var object = {};
        if (options.defaults)
            if (options.bytes === String)
                object.data = "";
            else {
                object.data = [];
                if (options.bytes !== Array)
                    object.data = $util.newBuffer(object.data);
            }
        if (message.data != null && message.hasOwnProperty("data"))
            object.data = options.bytes === String ? $util.base64.encode(message.data, 0, message.data.length) : options.bytes === Array ? Array.prototype.slice.call(message.data) : message.data;
        return object;
    };

    /**
     * Converts this UserNameProof to JSON.
     * @function toJSON
     * @memberof UserNameProof
     * @instance
     * @returns {Object.<string,*>} JSON object
     */
    UserNameProof.prototype.toJSON = function toJSON() {
        return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
    };

    /**
     * Gets the default type url for UserNameProof
     * @function getTypeUrl
     * @memberof UserNameProof
     * @static
     * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
     * @returns {string} The default type url
     */
    UserNameProof.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
        if (typeUrlPrefix === undefined) {
            typeUrlPrefix = "type.googleapis.com";
        }
        return typeUrlPrefix + "/UserNameProof";
    };

    return UserNameProof;
})();

$root.MessageData = (function() {

    /**
     * Properties of a MessageData.
     * @exports IMessageData
     * @interface IMessageData
     * @property {MessageType|null} [type] MessageData type
     * @property {number|Long|null} [fid] MessageData fid
     * @property {number|null} [timestamp] MessageData timestamp
     * @property {FarcasterNetwork|null} [network] MessageData network
     * @property {ICastAddBody|null} [castAddBody] MessageData castAddBody
     * @property {ICastRemoveBody|null} [castRemoveBody] MessageData castRemoveBody
     * @property {IReactionBody|null} [reactionBody] MessageData reactionBody
     * @property {IVerificationAddAddressBody|null} [verificationAddAddressBody] MessageData verificationAddAddressBody
     * @property {IVerificationRemoveBody|null} [verificationRemoveBody] MessageData verificationRemoveBody
     * @property {IUserDataBody|null} [userDataBody] MessageData userDataBody
     * @property {ILinkBody|null} [linkBody] MessageData linkBody
     * @property {IUserNameProof|null} [usernameProofBody] MessageData usernameProofBody
     * @property {IFrameActionBody|null} [frameActionBody] MessageData frameActionBody
     * @property {ILinkCompactStateBody|null} [linkCompactStateBody] MessageData linkCompactStateBody
     */

    /**
     * Constructs a new MessageData.
     * @exports MessageData
     * @classdesc A MessageData object contains properties common to all messages and wraps a body object which
     * contains properties specific to the MessageType.
     * @implements IMessageData
     * @constructor
     * @param {IMessageData=} [properties] Properties to set
     */
    function MessageData(properties) {
        if (properties)
            for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                if (properties[keys[i]] != null)
                    this[keys[i]] = properties[keys[i]];
    }

    /**
     * MessageData type.
     * @member {MessageType} type
     * @memberof MessageData
     * @instance
     */
    MessageData.prototype.type = 0;

    /**
     * MessageData fid.
     * @member {number|Long} fid
     * @memberof MessageData
     * @instance
     */
    MessageData.prototype.fid = $util.Long ? $util.Long.fromBits(0,0,true) : 0;

    /**
     * MessageData timestamp.
     * @member {number} timestamp
     * @memberof MessageData
     * @instance
     */
    MessageData.prototype.timestamp = 0;

    /**
     * MessageData network.
     * @member {FarcasterNetwork} network
     * @memberof MessageData
     * @instance
     */
    MessageData.prototype.network = 0;

    /**
     * MessageData castAddBody.
     * @member {ICastAddBody|null|undefined} castAddBody
     * @memberof MessageData
     * @instance
     */
    MessageData.prototype.castAddBody = null;

    /**
     * MessageData castRemoveBody.
     * @member {ICastRemoveBody|null|undefined} castRemoveBody
     * @memberof MessageData
     * @instance
     */
    MessageData.prototype.castRemoveBody = null;

    /**
     * MessageData reactionBody.
     * @member {IReactionBody|null|undefined} reactionBody
     * @memberof MessageData
     * @instance
     */
    MessageData.prototype.reactionBody = null;

    /**
     * MessageData verificationAddAddressBody.
     * @member {IVerificationAddAddressBody|null|undefined} verificationAddAddressBody
     * @memberof MessageData
     * @instance
     */
    MessageData.prototype.verificationAddAddressBody = null;

    /**
     * MessageData verificationRemoveBody.
     * @member {IVerificationRemoveBody|null|undefined} verificationRemoveBody
     * @memberof MessageData
     * @instance
     */
    MessageData.prototype.verificationRemoveBody = null;

    /**
     * MessageData userDataBody.
     * @member {IUserDataBody|null|undefined} userDataBody
     * @memberof MessageData
     * @instance
     */
    MessageData.prototype.userDataBody = null;

    /**
     * MessageData linkBody.
     * @member {ILinkBody|null|undefined} linkBody
     * @memberof MessageData
     * @instance
     */
    MessageData.prototype.linkBody = null;

    /**
     * MessageData usernameProofBody.
     * @member {IUserNameProof|null|undefined} usernameProofBody
     * @memberof MessageData
     * @instance
     */
    MessageData.prototype.usernameProofBody = null;

    /**
     * MessageData frameActionBody.
     * @member {IFrameActionBody|null|undefined} frameActionBody
     * @memberof MessageData
     * @instance
     */
    MessageData.prototype.frameActionBody = null;

    /**
     * MessageData linkCompactStateBody.
     * @member {ILinkCompactStateBody|null|undefined} linkCompactStateBody
     * @memberof MessageData
     * @instance
     */
    MessageData.prototype.linkCompactStateBody = null;

    // OneOf field names bound to virtual getters and setters
    var $oneOfFields;

    /**
     * MessageData body.
     * @member {"castAddBody"|"castRemoveBody"|"reactionBody"|"verificationAddAddressBody"|"verificationRemoveBody"|"userDataBody"|"linkBody"|"usernameProofBody"|"frameActionBody"|"linkCompactStateBody"|undefined} body
     * @memberof MessageData
     * @instance
     */
    Object.defineProperty(MessageData.prototype, "body", {
        get: $util.oneOfGetter($oneOfFields = ["castAddBody", "castRemoveBody", "reactionBody", "verificationAddAddressBody", "verificationRemoveBody", "userDataBody", "linkBody", "usernameProofBody", "frameActionBody", "linkCompactStateBody"]),
        set: $util.oneOfSetter($oneOfFields)
    });

    /**
     * Creates a new MessageData instance using the specified properties.
     * @function create
     * @memberof MessageData
     * @static
     * @param {IMessageData=} [properties] Properties to set
     * @returns {MessageData} MessageData instance
     */
    MessageData.create = function create(properties) {
        return new MessageData(properties);
    };

    /**
     * Encodes the specified MessageData message. Does not implicitly {@link MessageData.verify|verify} messages.
     * @function encode
     * @memberof MessageData
     * @static
     * @param {IMessageData} message MessageData message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    MessageData.encode = function encode(message, writer) {
        if (!writer)
            writer = $Writer.create();
        if (message.type != null && Object.hasOwnProperty.call(message, "type"))
            writer.uint32(/* id 1, wireType 0 =*/8).int32(message.type);
        if (message.fid != null && Object.hasOwnProperty.call(message, "fid"))
            writer.uint32(/* id 2, wireType 0 =*/16).uint64(message.fid);
        if (message.timestamp != null && Object.hasOwnProperty.call(message, "timestamp"))
            writer.uint32(/* id 3, wireType 0 =*/24).uint32(message.timestamp);
        if (message.network != null && Object.hasOwnProperty.call(message, "network"))
            writer.uint32(/* id 4, wireType 0 =*/32).int32(message.network);
        if (message.castAddBody != null && Object.hasOwnProperty.call(message, "castAddBody"))
            $root.CastAddBody.encode(message.castAddBody, writer.uint32(/* id 5, wireType 2 =*/42).fork()).ldelim();
        if (message.castRemoveBody != null && Object.hasOwnProperty.call(message, "castRemoveBody"))
            $root.CastRemoveBody.encode(message.castRemoveBody, writer.uint32(/* id 6, wireType 2 =*/50).fork()).ldelim();
        if (message.reactionBody != null && Object.hasOwnProperty.call(message, "reactionBody"))
            $root.ReactionBody.encode(message.reactionBody, writer.uint32(/* id 7, wireType 2 =*/58).fork()).ldelim();
        if (message.verificationAddAddressBody != null && Object.hasOwnProperty.call(message, "verificationAddAddressBody"))
            $root.VerificationAddAddressBody.encode(message.verificationAddAddressBody, writer.uint32(/* id 9, wireType 2 =*/74).fork()).ldelim();
        if (message.verificationRemoveBody != null && Object.hasOwnProperty.call(message, "verificationRemoveBody"))
            $root.VerificationRemoveBody.encode(message.verificationRemoveBody, writer.uint32(/* id 10, wireType 2 =*/82).fork()).ldelim();
        if (message.userDataBody != null && Object.hasOwnProperty.call(message, "userDataBody"))
            $root.UserDataBody.encode(message.userDataBody, writer.uint32(/* id 12, wireType 2 =*/98).fork()).ldelim();
        if (message.linkBody != null && Object.hasOwnProperty.call(message, "linkBody"))
            $root.LinkBody.encode(message.linkBody, writer.uint32(/* id 14, wireType 2 =*/114).fork()).ldelim();
        if (message.usernameProofBody != null && Object.hasOwnProperty.call(message, "usernameProofBody"))
            $root.UserNameProof.encode(message.usernameProofBody, writer.uint32(/* id 15, wireType 2 =*/122).fork()).ldelim();
        if (message.frameActionBody != null && Object.hasOwnProperty.call(message, "frameActionBody"))
            $root.FrameActionBody.encode(message.frameActionBody, writer.uint32(/* id 16, wireType 2 =*/130).fork()).ldelim();
        if (message.linkCompactStateBody != null && Object.hasOwnProperty.call(message, "linkCompactStateBody"))
            $root.LinkCompactStateBody.encode(message.linkCompactStateBody, writer.uint32(/* id 17, wireType 2 =*/138).fork()).ldelim();
        return writer;
    };

    /**
     * Encodes the specified MessageData message, length delimited. Does not implicitly {@link MessageData.verify|verify} messages.
     * @function encodeDelimited
     * @memberof MessageData
     * @static
     * @param {IMessageData} message MessageData message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    MessageData.encodeDelimited = function encodeDelimited(message, writer) {
        return this.encode(message, writer).ldelim();
    };

    /**
     * Decodes a MessageData message from the specified reader or buffer.
     * @function decode
     * @memberof MessageData
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @param {number} [length] Message length if known beforehand
     * @returns {MessageData} MessageData
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    MessageData.decode = function decode(reader, length) {
        if (!(reader instanceof $Reader))
            reader = $Reader.create(reader);
        var end = length === undefined ? reader.len : reader.pos + length, message = new $root.MessageData();
        while (reader.pos < end) {
            var tag = reader.uint32();
            switch (tag >>> 3) {
            case 1: {
                    message.type = reader.int32();
                    break;
                }
            case 2: {
                    message.fid = reader.uint64();
                    break;
                }
            case 3: {
                    message.timestamp = reader.uint32();
                    break;
                }
            case 4: {
                    message.network = reader.int32();
                    break;
                }
            case 5: {
                    message.castAddBody = $root.CastAddBody.decode(reader, reader.uint32());
                    break;
                }
            case 6: {
                    message.castRemoveBody = $root.CastRemoveBody.decode(reader, reader.uint32());
                    break;
                }
            case 7: {
                    message.reactionBody = $root.ReactionBody.decode(reader, reader.uint32());
                    break;
                }
            case 9: {
                    message.verificationAddAddressBody = $root.VerificationAddAddressBody.decode(reader, reader.uint32());
                    break;
                }
            case 10: {
                    message.verificationRemoveBody = $root.VerificationRemoveBody.decode(reader, reader.uint32());
                    break;
                }
            case 12: {
                    message.userDataBody = $root.UserDataBody.decode(reader, reader.uint32());
                    break;
                }
            case 14: {
                    message.linkBody = $root.LinkBody.decode(reader, reader.uint32());
                    break;
                }
            case 15: {
                    message.usernameProofBody = $root.UserNameProof.decode(reader, reader.uint32());
                    break;
                }
            case 16: {
                    message.frameActionBody = $root.FrameActionBody.decode(reader, reader.uint32());
                    break;
                }
            case 17: {
                    message.linkCompactStateBody = $root.LinkCompactStateBody.decode(reader, reader.uint32());
                    break;
                }
            default:
                reader.skipType(tag & 7);
                break;
            }
        }
        return message;
    };

    /**
     * Decodes a MessageData message from the specified reader or buffer, length delimited.
     * @function decodeDelimited
     * @memberof MessageData
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @returns {MessageData} MessageData
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    MessageData.decodeDelimited = function decodeDelimited(reader) {
        if (!(reader instanceof $Reader))
            reader = new $Reader(reader);
        return this.decode(reader, reader.uint32());
    };

    /**
     * Verifies a MessageData message.
     * @function verify
     * @memberof MessageData
     * @static
     * @param {Object.<string,*>} message Plain object to verify
     * @returns {string|null} `null` if valid, otherwise the reason why it is not
     */
    MessageData.verify = function verify(message) {
        if (typeof message !== "object" || message === null)
            return "object expected";
        var properties = {};
        if (message.type != null && message.hasOwnProperty("type"))
            switch (message.type) {
            default:
                return "type: enum value expected";
            case 0:
            case 1:
            case 2:
            case 3:
            case 4:
            case 5:
            case 6:
            case 7:
            case 8:
            case 11:
            case 12:
            case 13:
            case 14:
                break;
            }
        if (message.fid != null && message.hasOwnProperty("fid"))
            if (!$util.isInteger(message.fid) && !(message.fid && $util.isInteger(message.fid.low) && $util.isInteger(message.fid.high)))
                return "fid: integer|Long expected";
        if (message.timestamp != null && message.hasOwnProperty("timestamp"))
            if (!$util.isInteger(message.timestamp))
                return "timestamp: integer expected";
        if (message.network != null && message.hasOwnProperty("network"))
            switch (message.network) {
            default:
                return "network: enum value expected";
            case 0:
            case 1:
            case 2:
            case 3:
                break;
            }
        if (message.castAddBody != null && message.hasOwnProperty("castAddBody")) {
            properties.body = 1;
            {
                var error = $root.CastAddBody.verify(message.castAddBody);
                if (error)
                    return "castAddBody." + error;
            }
        }
        if (message.castRemoveBody != null && message.hasOwnProperty("castRemoveBody")) {
            if (properties.body === 1)
                return "body: multiple values";
            properties.body = 1;
            {
                var error = $root.CastRemoveBody.verify(message.castRemoveBody);
                if (error)
                    return "castRemoveBody." + error;
            }
        }
        if (message.reactionBody != null && message.hasOwnProperty("reactionBody")) {
            if (properties.body === 1)
                return "body: multiple values";
            properties.body = 1;
            {
                var error = $root.ReactionBody.verify(message.reactionBody);
                if (error)
                    return "reactionBody." + error;
            }
        }
        if (message.verificationAddAddressBody != null && message.hasOwnProperty("verificationAddAddressBody")) {
            if (properties.body === 1)
                return "body: multiple values";
            properties.body = 1;
            {
                var error = $root.VerificationAddAddressBody.verify(message.verificationAddAddressBody);
                if (error)
                    return "verificationAddAddressBody." + error;
            }
        }
        if (message.verificationRemoveBody != null && message.hasOwnProperty("verificationRemoveBody")) {
            if (properties.body === 1)
                return "body: multiple values";
            properties.body = 1;
            {
                var error = $root.VerificationRemoveBody.verify(message.verificationRemoveBody);
                if (error)
                    return "verificationRemoveBody." + error;
            }
        }
        if (message.userDataBody != null && message.hasOwnProperty("userDataBody")) {
            if (properties.body === 1)
                return "body: multiple values";
            properties.body = 1;
            {
                var error = $root.UserDataBody.verify(message.userDataBody);
                if (error)
                    return "userDataBody." + error;
            }
        }
        if (message.linkBody != null && message.hasOwnProperty("linkBody")) {
            if (properties.body === 1)
                return "body: multiple values";
            properties.body = 1;
            {
                var error = $root.LinkBody.verify(message.linkBody);
                if (error)
                    return "linkBody." + error;
            }
        }
        if (message.usernameProofBody != null && message.hasOwnProperty("usernameProofBody")) {
            if (properties.body === 1)
                return "body: multiple values";
            properties.body = 1;
            {
                var error = $root.UserNameProof.verify(message.usernameProofBody);
                if (error)
                    return "usernameProofBody." + error;
            }
        }
        if (message.frameActionBody != null && message.hasOwnProperty("frameActionBody")) {
            if (properties.body === 1)
                return "body: multiple values";
            properties.body = 1;
            {
                var error = $root.FrameActionBody.verify(message.frameActionBody);
                if (error)
                    return "frameActionBody." + error;
            }
        }
        if (message.linkCompactStateBody != null && message.hasOwnProperty("linkCompactStateBody")) {
            if (properties.body === 1)
                return "body: multiple values";
            properties.body = 1;
            {
                var error = $root.LinkCompactStateBody.verify(message.linkCompactStateBody);
                if (error)
                    return "linkCompactStateBody." + error;
            }
        }
        return null;
    };

    /**
     * Creates a MessageData message from a plain object. Also converts values to their respective internal types.
     * @function fromObject
     * @memberof MessageData
     * @static
     * @param {Object.<string,*>} object Plain object
     * @returns {MessageData} MessageData
     */
    MessageData.fromObject = function fromObject(object) {
        if (object instanceof $root.MessageData)
            return object;
        var message = new $root.MessageData();
        switch (object.type) {
        default:
            if (typeof object.type === "number") {
                message.type = object.type;
                break;
            }
            break;
        case "MESSAGE_TYPE_NONE":
        case 0:
            message.type = 0;
            break;
        case "MESSAGE_TYPE_CAST_ADD":
        case 1:
            message.type = 1;
            break;
        case "MESSAGE_TYPE_CAST_REMOVE":
        case 2:
            message.type = 2;
            break;
        case "MESSAGE_TYPE_REACTION_ADD":
        case 3:
            message.type = 3;
            break;
        case "MESSAGE_TYPE_REACTION_REMOVE":
        case 4:
            message.type = 4;
            break;
        case "MESSAGE_TYPE_LINK_ADD":
        case 5:
            message.type = 5;
            break;
        case "MESSAGE_TYPE_LINK_REMOVE":
        case 6:
            message.type = 6;
            break;
        case "MESSAGE_TYPE_VERIFICATION_ADD_ETH_ADDRESS":
        case 7:
            message.type = 7;
            break;
        case "MESSAGE_TYPE_VERIFICATION_REMOVE":
        case 8:
            message.type = 8;
            break;
        case "MESSAGE_TYPE_USER_DATA_ADD":
        case 11:
            message.type = 11;
            break;
        case "MESSAGE_TYPE_USERNAME_PROOF":
        case 12:
            message.type = 12;
            break;
        case "MESSAGE_TYPE_FRAME_ACTION":
        case 13:
            message.type = 13;
            break;
        case "MESSAGE_TYPE_LINK_COMPACT_STATE":
        case 14:
            message.type = 14;
            break;
        }
        if (object.fid != null)
            if ($util.Long)
                (message.fid = $util.Long.fromValue(object.fid)).unsigned = true;
            else if (typeof object.fid === "string")
                message.fid = parseInt(object.fid, 10);
            else if (typeof object.fid === "number")
                message.fid = object.fid;
            else if (typeof object.fid === "object")
                message.fid = new $util.LongBits(object.fid.low >>> 0, object.fid.high >>> 0).toNumber(true);
        if (object.timestamp != null)
            message.timestamp = object.timestamp >>> 0;
        switch (object.network) {
        default:
            if (typeof object.network === "number") {
                message.network = object.network;
                break;
            }
            break;
        case "FARCASTER_NETWORK_NONE":
        case 0:
            message.network = 0;
            break;
        case "FARCASTER_NETWORK_MAINNET":
        case 1:
            message.network = 1;
            break;
        case "FARCASTER_NETWORK_TESTNET":
        case 2:
            message.network = 2;
            break;
        case "FARCASTER_NETWORK_DEVNET":
        case 3:
            message.network = 3;
            break;
        }
        if (object.castAddBody != null) {
            if (typeof object.castAddBody !== "object")
                throw TypeError(".MessageData.castAddBody: object expected");
            message.castAddBody = $root.CastAddBody.fromObject(object.castAddBody);
        }
        if (object.castRemoveBody != null) {
            if (typeof object.castRemoveBody !== "object")
                throw TypeError(".MessageData.castRemoveBody: object expected");
            message.castRemoveBody = $root.CastRemoveBody.fromObject(object.castRemoveBody);
        }
        if (object.reactionBody != null) {
            if (typeof object.reactionBody !== "object")
                throw TypeError(".MessageData.reactionBody: object expected");
            message.reactionBody = $root.ReactionBody.fromObject(object.reactionBody);
        }
        if (object.verificationAddAddressBody != null) {
            if (typeof object.verificationAddAddressBody !== "object")
                throw TypeError(".MessageData.verificationAddAddressBody: object expected");
            message.verificationAddAddressBody = $root.VerificationAddAddressBody.fromObject(object.verificationAddAddressBody);
        }
        if (object.verificationRemoveBody != null) {
            if (typeof object.verificationRemoveBody !== "object")
                throw TypeError(".MessageData.verificationRemoveBody: object expected");
            message.verificationRemoveBody = $root.VerificationRemoveBody.fromObject(object.verificationRemoveBody);
        }
        if (object.userDataBody != null) {
            if (typeof object.userDataBody !== "object")
                throw TypeError(".MessageData.userDataBody: object expected");
            message.userDataBody = $root.UserDataBody.fromObject(object.userDataBody);
        }
        if (object.linkBody != null) {
            if (typeof object.linkBody !== "object")
                throw TypeError(".MessageData.linkBody: object expected");
            message.linkBody = $root.LinkBody.fromObject(object.linkBody);
        }
        if (object.usernameProofBody != null) {
            if (typeof object.usernameProofBody !== "object")
                throw TypeError(".MessageData.usernameProofBody: object expected");
            message.usernameProofBody = $root.UserNameProof.fromObject(object.usernameProofBody);
        }
        if (object.frameActionBody != null) {
            if (typeof object.frameActionBody !== "object")
                throw TypeError(".MessageData.frameActionBody: object expected");
            message.frameActionBody = $root.FrameActionBody.fromObject(object.frameActionBody);
        }
        if (object.linkCompactStateBody != null) {
            if (typeof object.linkCompactStateBody !== "object")
                throw TypeError(".MessageData.linkCompactStateBody: object expected");
            message.linkCompactStateBody = $root.LinkCompactStateBody.fromObject(object.linkCompactStateBody);
        }
        return message;
    };

    /**
     * Creates a plain object from a MessageData message. Also converts values to other types if specified.
     * @function toObject
     * @memberof MessageData
     * @static
     * @param {MessageData} message MessageData
     * @param {$protobuf.IConversionOptions} [options] Conversion options
     * @returns {Object.<string,*>} Plain object
     */
    MessageData.toObject = function toObject(message, options) {
        if (!options)
            options = {};
        var object = {};
        if (options.defaults) {
            object.type = options.enums === String ? "MESSAGE_TYPE_NONE" : 0;
            if ($util.Long) {
                var long = new $util.Long(0, 0, true);
                object.fid = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
            } else
                object.fid = options.longs === String ? "0" : 0;
            object.timestamp = 0;
            object.network = options.enums === String ? "FARCASTER_NETWORK_NONE" : 0;
        }
        if (message.type != null && message.hasOwnProperty("type"))
            object.type = options.enums === String ? $root.MessageType[message.type] === undefined ? message.type : $root.MessageType[message.type] : message.type;
        if (message.fid != null && message.hasOwnProperty("fid"))
            if (typeof message.fid === "number")
                object.fid = options.longs === String ? String(message.fid) : message.fid;
            else
                object.fid = options.longs === String ? $util.Long.prototype.toString.call(message.fid) : options.longs === Number ? new $util.LongBits(message.fid.low >>> 0, message.fid.high >>> 0).toNumber(true) : message.fid;
        if (message.timestamp != null && message.hasOwnProperty("timestamp"))
            object.timestamp = message.timestamp;
        if (message.network != null && message.hasOwnProperty("network"))
            object.network = options.enums === String ? $root.FarcasterNetwork[message.network] === undefined ? message.network : $root.FarcasterNetwork[message.network] : message.network;
        if (message.castAddBody != null && message.hasOwnProperty("castAddBody")) {
            object.castAddBody = $root.CastAddBody.toObject(message.castAddBody, options);
            if (options.oneofs)
                object.body = "castAddBody";
        }
        if (message.castRemoveBody != null && message.hasOwnProperty("castRemoveBody")) {
            object.castRemoveBody = $root.CastRemoveBody.toObject(message.castRemoveBody, options);
            if (options.oneofs)
                object.body = "castRemoveBody";
        }
        if (message.reactionBody != null && message.hasOwnProperty("reactionBody")) {
            object.reactionBody = $root.ReactionBody.toObject(message.reactionBody, options);
            if (options.oneofs)
                object.body = "reactionBody";
        }
        if (message.verificationAddAddressBody != null && message.hasOwnProperty("verificationAddAddressBody")) {
            object.verificationAddAddressBody = $root.VerificationAddAddressBody.toObject(message.verificationAddAddressBody, options);
            if (options.oneofs)
                object.body = "verificationAddAddressBody";
        }
        if (message.verificationRemoveBody != null && message.hasOwnProperty("verificationRemoveBody")) {
            object.verificationRemoveBody = $root.VerificationRemoveBody.toObject(message.verificationRemoveBody, options);
            if (options.oneofs)
                object.body = "verificationRemoveBody";
        }
        if (message.userDataBody != null && message.hasOwnProperty("userDataBody")) {
            object.userDataBody = $root.UserDataBody.toObject(message.userDataBody, options);
            if (options.oneofs)
                object.body = "userDataBody";
        }
        if (message.linkBody != null && message.hasOwnProperty("linkBody")) {
            object.linkBody = $root.LinkBody.toObject(message.linkBody, options);
            if (options.oneofs)
                object.body = "linkBody";
        }
        if (message.usernameProofBody != null && message.hasOwnProperty("usernameProofBody")) {
            object.usernameProofBody = $root.UserNameProof.toObject(message.usernameProofBody, options);
            if (options.oneofs)
                object.body = "usernameProofBody";
        }
        if (message.frameActionBody != null && message.hasOwnProperty("frameActionBody")) {
            object.frameActionBody = $root.FrameActionBody.toObject(message.frameActionBody, options);
            if (options.oneofs)
                object.body = "frameActionBody";
        }
        if (message.linkCompactStateBody != null && message.hasOwnProperty("linkCompactStateBody")) {
            object.linkCompactStateBody = $root.LinkCompactStateBody.toObject(message.linkCompactStateBody, options);
            if (options.oneofs)
                object.body = "linkCompactStateBody";
        }
        return object;
    };

    /**
     * Converts this MessageData to JSON.
     * @function toJSON
     * @memberof MessageData
     * @instance
     * @returns {Object.<string,*>} JSON object
     */
    MessageData.prototype.toJSON = function toJSON() {
        return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
    };

    /**
     * Gets the default type url for MessageData
     * @function getTypeUrl
     * @memberof MessageData
     * @static
     * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
     * @returns {string} The default type url
     */
    MessageData.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
        if (typeUrlPrefix === undefined) {
            typeUrlPrefix = "type.googleapis.com";
        }
        return typeUrlPrefix + "/MessageData";
    };

    return MessageData;
})();

/**
 * Type of hashing scheme used to produce a digest of MessageData
 * @exports HashScheme
 * @enum {number}
 * @property {number} HASH_SCHEME_NONE=0 HASH_SCHEME_NONE value
 * @property {number} HASH_SCHEME_BLAKE3=1 HASH_SCHEME_BLAKE3 value
 */
$root.HashScheme = (function() {
    var valuesById = {}, values = Object.create(valuesById);
    values[valuesById[0] = "HASH_SCHEME_NONE"] = 0;
    values[valuesById[1] = "HASH_SCHEME_BLAKE3"] = 1;
    return values;
})();

/**
 * Type of signature scheme used to sign the Message hash
 * @exports SignatureScheme
 * @enum {number}
 * @property {number} SIGNATURE_SCHEME_NONE=0 SIGNATURE_SCHEME_NONE value
 * @property {number} SIGNATURE_SCHEME_ED25519=1 SIGNATURE_SCHEME_ED25519 value
 * @property {number} SIGNATURE_SCHEME_EIP712=2 SIGNATURE_SCHEME_EIP712 value
 */
$root.SignatureScheme = (function() {
    var valuesById = {}, values = Object.create(valuesById);
    values[valuesById[0] = "SIGNATURE_SCHEME_NONE"] = 0;
    values[valuesById[1] = "SIGNATURE_SCHEME_ED25519"] = 1;
    values[valuesById[2] = "SIGNATURE_SCHEME_EIP712"] = 2;
    return values;
})();

/**
 * Type of the MessageBody
 * @exports MessageType
 * @enum {number}
 * @property {number} MESSAGE_TYPE_NONE=0 MESSAGE_TYPE_NONE value
 * @property {number} MESSAGE_TYPE_CAST_ADD=1 MESSAGE_TYPE_CAST_ADD value
 * @property {number} MESSAGE_TYPE_CAST_REMOVE=2 MESSAGE_TYPE_CAST_REMOVE value
 * @property {number} MESSAGE_TYPE_REACTION_ADD=3 MESSAGE_TYPE_REACTION_ADD value
 * @property {number} MESSAGE_TYPE_REACTION_REMOVE=4 MESSAGE_TYPE_REACTION_REMOVE value
 * @property {number} MESSAGE_TYPE_LINK_ADD=5 MESSAGE_TYPE_LINK_ADD value
 * @property {number} MESSAGE_TYPE_LINK_REMOVE=6 MESSAGE_TYPE_LINK_REMOVE value
 * @property {number} MESSAGE_TYPE_VERIFICATION_ADD_ETH_ADDRESS=7 MESSAGE_TYPE_VERIFICATION_ADD_ETH_ADDRESS value
 * @property {number} MESSAGE_TYPE_VERIFICATION_REMOVE=8 MESSAGE_TYPE_VERIFICATION_REMOVE value
 * @property {number} MESSAGE_TYPE_USER_DATA_ADD=11 MESSAGE_TYPE_USER_DATA_ADD value
 * @property {number} MESSAGE_TYPE_USERNAME_PROOF=12 MESSAGE_TYPE_USERNAME_PROOF value
 * @property {number} MESSAGE_TYPE_FRAME_ACTION=13 MESSAGE_TYPE_FRAME_ACTION value
 * @property {number} MESSAGE_TYPE_LINK_COMPACT_STATE=14 MESSAGE_TYPE_LINK_COMPACT_STATE value
 */
$root.MessageType = (function() {
    var valuesById = {}, values = Object.create(valuesById);
    values[valuesById[0] = "MESSAGE_TYPE_NONE"] = 0;
    values[valuesById[1] = "MESSAGE_TYPE_CAST_ADD"] = 1;
    values[valuesById[2] = "MESSAGE_TYPE_CAST_REMOVE"] = 2;
    values[valuesById[3] = "MESSAGE_TYPE_REACTION_ADD"] = 3;
    values[valuesById[4] = "MESSAGE_TYPE_REACTION_REMOVE"] = 4;
    values[valuesById[5] = "MESSAGE_TYPE_LINK_ADD"] = 5;
    values[valuesById[6] = "MESSAGE_TYPE_LINK_REMOVE"] = 6;
    values[valuesById[7] = "MESSAGE_TYPE_VERIFICATION_ADD_ETH_ADDRESS"] = 7;
    values[valuesById[8] = "MESSAGE_TYPE_VERIFICATION_REMOVE"] = 8;
    values[valuesById[11] = "MESSAGE_TYPE_USER_DATA_ADD"] = 11;
    values[valuesById[12] = "MESSAGE_TYPE_USERNAME_PROOF"] = 12;
    values[valuesById[13] = "MESSAGE_TYPE_FRAME_ACTION"] = 13;
    values[valuesById[14] = "MESSAGE_TYPE_LINK_COMPACT_STATE"] = 14;
    return values;
})();

/**
 * Farcaster network the message is intended for
 * @exports FarcasterNetwork
 * @enum {number}
 * @property {number} FARCASTER_NETWORK_NONE=0 FARCASTER_NETWORK_NONE value
 * @property {number} FARCASTER_NETWORK_MAINNET=1 FARCASTER_NETWORK_MAINNET value
 * @property {number} FARCASTER_NETWORK_TESTNET=2 FARCASTER_NETWORK_TESTNET value
 * @property {number} FARCASTER_NETWORK_DEVNET=3 FARCASTER_NETWORK_DEVNET value
 */
$root.FarcasterNetwork = (function() {
    var valuesById = {}, values = Object.create(valuesById);
    values[valuesById[0] = "FARCASTER_NETWORK_NONE"] = 0;
    values[valuesById[1] = "FARCASTER_NETWORK_MAINNET"] = 1;
    values[valuesById[2] = "FARCASTER_NETWORK_TESTNET"] = 2;
    values[valuesById[3] = "FARCASTER_NETWORK_DEVNET"] = 3;
    return values;
})();

$root.UserDataBody = (function() {

    /**
     * Properties of a UserDataBody.
     * @exports IUserDataBody
     * @interface IUserDataBody
     * @property {UserDataType|null} [type] UserDataBody type
     * @property {string|null} [value] UserDataBody value
     */

    /**
     * Constructs a new UserDataBody.
     * @exports UserDataBody
     * @classdesc Adds metadata about a user
     * @implements IUserDataBody
     * @constructor
     * @param {IUserDataBody=} [properties] Properties to set
     */
    function UserDataBody(properties) {
        if (properties)
            for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                if (properties[keys[i]] != null)
                    this[keys[i]] = properties[keys[i]];
    }

    /**
     * UserDataBody type.
     * @member {UserDataType} type
     * @memberof UserDataBody
     * @instance
     */
    UserDataBody.prototype.type = 0;

    /**
     * UserDataBody value.
     * @member {string} value
     * @memberof UserDataBody
     * @instance
     */
    UserDataBody.prototype.value = "";

    /**
     * Creates a new UserDataBody instance using the specified properties.
     * @function create
     * @memberof UserDataBody
     * @static
     * @param {IUserDataBody=} [properties] Properties to set
     * @returns {UserDataBody} UserDataBody instance
     */
    UserDataBody.create = function create(properties) {
        return new UserDataBody(properties);
    };

    /**
     * Encodes the specified UserDataBody message. Does not implicitly {@link UserDataBody.verify|verify} messages.
     * @function encode
     * @memberof UserDataBody
     * @static
     * @param {IUserDataBody} message UserDataBody message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    UserDataBody.encode = function encode(message, writer) {
        if (!writer)
            writer = $Writer.create();
        if (message.type != null && Object.hasOwnProperty.call(message, "type"))
            writer.uint32(/* id 1, wireType 0 =*/8).int32(message.type);
        if (message.value != null && Object.hasOwnProperty.call(message, "value"))
            writer.uint32(/* id 2, wireType 2 =*/18).string(message.value);
        return writer;
    };

    /**
     * Encodes the specified UserDataBody message, length delimited. Does not implicitly {@link UserDataBody.verify|verify} messages.
     * @function encodeDelimited
     * @memberof UserDataBody
     * @static
     * @param {IUserDataBody} message UserDataBody message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    UserDataBody.encodeDelimited = function encodeDelimited(message, writer) {
        return this.encode(message, writer).ldelim();
    };

    /**
     * Decodes a UserDataBody message from the specified reader or buffer.
     * @function decode
     * @memberof UserDataBody
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @param {number} [length] Message length if known beforehand
     * @returns {UserDataBody} UserDataBody
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    UserDataBody.decode = function decode(reader, length) {
        if (!(reader instanceof $Reader))
            reader = $Reader.create(reader);
        var end = length === undefined ? reader.len : reader.pos + length, message = new $root.UserDataBody();
        while (reader.pos < end) {
            var tag = reader.uint32();
            switch (tag >>> 3) {
            case 1: {
                    message.type = reader.int32();
                    break;
                }
            case 2: {
                    message.value = reader.string();
                    break;
                }
            default:
                reader.skipType(tag & 7);
                break;
            }
        }
        return message;
    };

    /**
     * Decodes a UserDataBody message from the specified reader or buffer, length delimited.
     * @function decodeDelimited
     * @memberof UserDataBody
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @returns {UserDataBody} UserDataBody
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    UserDataBody.decodeDelimited = function decodeDelimited(reader) {
        if (!(reader instanceof $Reader))
            reader = new $Reader(reader);
        return this.decode(reader, reader.uint32());
    };

    /**
     * Verifies a UserDataBody message.
     * @function verify
     * @memberof UserDataBody
     * @static
     * @param {Object.<string,*>} message Plain object to verify
     * @returns {string|null} `null` if valid, otherwise the reason why it is not
     */
    UserDataBody.verify = function verify(message) {
        if (typeof message !== "object" || message === null)
            return "object expected";
        if (message.type != null && message.hasOwnProperty("type"))
            switch (message.type) {
            default:
                return "type: enum value expected";
            case 0:
            case 1:
            case 2:
            case 3:
            case 5:
            case 6:
                break;
            }
        if (message.value != null && message.hasOwnProperty("value"))
            if (!$util.isString(message.value))
                return "value: string expected";
        return null;
    };

    /**
     * Creates a UserDataBody message from a plain object. Also converts values to their respective internal types.
     * @function fromObject
     * @memberof UserDataBody
     * @static
     * @param {Object.<string,*>} object Plain object
     * @returns {UserDataBody} UserDataBody
     */
    UserDataBody.fromObject = function fromObject(object) {
        if (object instanceof $root.UserDataBody)
            return object;
        var message = new $root.UserDataBody();
        switch (object.type) {
        default:
            if (typeof object.type === "number") {
                message.type = object.type;
                break;
            }
            break;
        case "USER_DATA_TYPE_NONE":
        case 0:
            message.type = 0;
            break;
        case "USER_DATA_TYPE_PFP":
        case 1:
            message.type = 1;
            break;
        case "USER_DATA_TYPE_DISPLAY":
        case 2:
            message.type = 2;
            break;
        case "USER_DATA_TYPE_BIO":
        case 3:
            message.type = 3;
            break;
        case "USER_DATA_TYPE_URL":
        case 5:
            message.type = 5;
            break;
        case "USER_DATA_TYPE_USERNAME":
        case 6:
            message.type = 6;
            break;
        }
        if (object.value != null)
            message.value = String(object.value);
        return message;
    };

    /**
     * Creates a plain object from a UserDataBody message. Also converts values to other types if specified.
     * @function toObject
     * @memberof UserDataBody
     * @static
     * @param {UserDataBody} message UserDataBody
     * @param {$protobuf.IConversionOptions} [options] Conversion options
     * @returns {Object.<string,*>} Plain object
     */
    UserDataBody.toObject = function toObject(message, options) {
        if (!options)
            options = {};
        var object = {};
        if (options.defaults) {
            object.type = options.enums === String ? "USER_DATA_TYPE_NONE" : 0;
            object.value = "";
        }
        if (message.type != null && message.hasOwnProperty("type"))
            object.type = options.enums === String ? $root.UserDataType[message.type] === undefined ? message.type : $root.UserDataType[message.type] : message.type;
        if (message.value != null && message.hasOwnProperty("value"))
            object.value = message.value;
        return object;
    };

    /**
     * Converts this UserDataBody to JSON.
     * @function toJSON
     * @memberof UserDataBody
     * @instance
     * @returns {Object.<string,*>} JSON object
     */
    UserDataBody.prototype.toJSON = function toJSON() {
        return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
    };

    /**
     * Gets the default type url for UserDataBody
     * @function getTypeUrl
     * @memberof UserDataBody
     * @static
     * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
     * @returns {string} The default type url
     */
    UserDataBody.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
        if (typeUrlPrefix === undefined) {
            typeUrlPrefix = "type.googleapis.com";
        }
        return typeUrlPrefix + "/UserDataBody";
    };

    return UserDataBody;
})();

/**
 * Type of UserData
 * @exports UserDataType
 * @enum {number}
 * @property {number} USER_DATA_TYPE_NONE=0 USER_DATA_TYPE_NONE value
 * @property {number} USER_DATA_TYPE_PFP=1 USER_DATA_TYPE_PFP value
 * @property {number} USER_DATA_TYPE_DISPLAY=2 USER_DATA_TYPE_DISPLAY value
 * @property {number} USER_DATA_TYPE_BIO=3 USER_DATA_TYPE_BIO value
 * @property {number} USER_DATA_TYPE_URL=5 USER_DATA_TYPE_URL value
 * @property {number} USER_DATA_TYPE_USERNAME=6 USER_DATA_TYPE_USERNAME value
 */
$root.UserDataType = (function() {
    var valuesById = {}, values = Object.create(valuesById);
    values[valuesById[0] = "USER_DATA_TYPE_NONE"] = 0;
    values[valuesById[1] = "USER_DATA_TYPE_PFP"] = 1;
    values[valuesById[2] = "USER_DATA_TYPE_DISPLAY"] = 2;
    values[valuesById[3] = "USER_DATA_TYPE_BIO"] = 3;
    values[valuesById[5] = "USER_DATA_TYPE_URL"] = 5;
    values[valuesById[6] = "USER_DATA_TYPE_USERNAME"] = 6;
    return values;
})();

$root.Embed = (function() {

    /**
     * Properties of an Embed.
     * @exports IEmbed
     * @interface IEmbed
     * @property {string|null} [url] Embed url
     * @property {ICastId|null} [castId] Embed castId
     */

    /**
     * Constructs a new Embed.
     * @exports Embed
     * @classdesc Represents an Embed.
     * @implements IEmbed
     * @constructor
     * @param {IEmbed=} [properties] Properties to set
     */
    function Embed(properties) {
        if (properties)
            for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                if (properties[keys[i]] != null)
                    this[keys[i]] = properties[keys[i]];
    }

    /**
     * Embed url.
     * @member {string|null|undefined} url
     * @memberof Embed
     * @instance
     */
    Embed.prototype.url = null;

    /**
     * Embed castId.
     * @member {ICastId|null|undefined} castId
     * @memberof Embed
     * @instance
     */
    Embed.prototype.castId = null;

    // OneOf field names bound to virtual getters and setters
    var $oneOfFields;

    /**
     * Embed embed.
     * @member {"url"|"castId"|undefined} embed
     * @memberof Embed
     * @instance
     */
    Object.defineProperty(Embed.prototype, "embed", {
        get: $util.oneOfGetter($oneOfFields = ["url", "castId"]),
        set: $util.oneOfSetter($oneOfFields)
    });

    /**
     * Creates a new Embed instance using the specified properties.
     * @function create
     * @memberof Embed
     * @static
     * @param {IEmbed=} [properties] Properties to set
     * @returns {Embed} Embed instance
     */
    Embed.create = function create(properties) {
        return new Embed(properties);
    };

    /**
     * Encodes the specified Embed message. Does not implicitly {@link Embed.verify|verify} messages.
     * @function encode
     * @memberof Embed
     * @static
     * @param {IEmbed} message Embed message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    Embed.encode = function encode(message, writer) {
        if (!writer)
            writer = $Writer.create();
        if (message.url != null && Object.hasOwnProperty.call(message, "url"))
            writer.uint32(/* id 1, wireType 2 =*/10).string(message.url);
        if (message.castId != null && Object.hasOwnProperty.call(message, "castId"))
            $root.CastId.encode(message.castId, writer.uint32(/* id 2, wireType 2 =*/18).fork()).ldelim();
        return writer;
    };

    /**
     * Encodes the specified Embed message, length delimited. Does not implicitly {@link Embed.verify|verify} messages.
     * @function encodeDelimited
     * @memberof Embed
     * @static
     * @param {IEmbed} message Embed message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    Embed.encodeDelimited = function encodeDelimited(message, writer) {
        return this.encode(message, writer).ldelim();
    };

    /**
     * Decodes an Embed message from the specified reader or buffer.
     * @function decode
     * @memberof Embed
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @param {number} [length] Message length if known beforehand
     * @returns {Embed} Embed
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    Embed.decode = function decode(reader, length) {
        if (!(reader instanceof $Reader))
            reader = $Reader.create(reader);
        var end = length === undefined ? reader.len : reader.pos + length, message = new $root.Embed();
        while (reader.pos < end) {
            var tag = reader.uint32();
            switch (tag >>> 3) {
            case 1: {
                    message.url = reader.string();
                    break;
                }
            case 2: {
                    message.castId = $root.CastId.decode(reader, reader.uint32());
                    break;
                }
            default:
                reader.skipType(tag & 7);
                break;
            }
        }
        return message;
    };

    /**
     * Decodes an Embed message from the specified reader or buffer, length delimited.
     * @function decodeDelimited
     * @memberof Embed
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @returns {Embed} Embed
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    Embed.decodeDelimited = function decodeDelimited(reader) {
        if (!(reader instanceof $Reader))
            reader = new $Reader(reader);
        return this.decode(reader, reader.uint32());
    };

    /**
     * Verifies an Embed message.
     * @function verify
     * @memberof Embed
     * @static
     * @param {Object.<string,*>} message Plain object to verify
     * @returns {string|null} `null` if valid, otherwise the reason why it is not
     */
    Embed.verify = function verify(message) {
        if (typeof message !== "object" || message === null)
            return "object expected";
        var properties = {};
        if (message.url != null && message.hasOwnProperty("url")) {
            properties.embed = 1;
            if (!$util.isString(message.url))
                return "url: string expected";
        }
        if (message.castId != null && message.hasOwnProperty("castId")) {
            if (properties.embed === 1)
                return "embed: multiple values";
            properties.embed = 1;
            {
                var error = $root.CastId.verify(message.castId);
                if (error)
                    return "castId." + error;
            }
        }
        return null;
    };

    /**
     * Creates an Embed message from a plain object. Also converts values to their respective internal types.
     * @function fromObject
     * @memberof Embed
     * @static
     * @param {Object.<string,*>} object Plain object
     * @returns {Embed} Embed
     */
    Embed.fromObject = function fromObject(object) {
        if (object instanceof $root.Embed)
            return object;
        var message = new $root.Embed();
        if (object.url != null)
            message.url = String(object.url);
        if (object.castId != null) {
            if (typeof object.castId !== "object")
                throw TypeError(".Embed.castId: object expected");
            message.castId = $root.CastId.fromObject(object.castId);
        }
        return message;
    };

    /**
     * Creates a plain object from an Embed message. Also converts values to other types if specified.
     * @function toObject
     * @memberof Embed
     * @static
     * @param {Embed} message Embed
     * @param {$protobuf.IConversionOptions} [options] Conversion options
     * @returns {Object.<string,*>} Plain object
     */
    Embed.toObject = function toObject(message, options) {
        if (!options)
            options = {};
        var object = {};
        if (message.url != null && message.hasOwnProperty("url")) {
            object.url = message.url;
            if (options.oneofs)
                object.embed = "url";
        }
        if (message.castId != null && message.hasOwnProperty("castId")) {
            object.castId = $root.CastId.toObject(message.castId, options);
            if (options.oneofs)
                object.embed = "castId";
        }
        return object;
    };

    /**
     * Converts this Embed to JSON.
     * @function toJSON
     * @memberof Embed
     * @instance
     * @returns {Object.<string,*>} JSON object
     */
    Embed.prototype.toJSON = function toJSON() {
        return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
    };

    /**
     * Gets the default type url for Embed
     * @function getTypeUrl
     * @memberof Embed
     * @static
     * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
     * @returns {string} The default type url
     */
    Embed.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
        if (typeUrlPrefix === undefined) {
            typeUrlPrefix = "type.googleapis.com";
        }
        return typeUrlPrefix + "/Embed";
    };

    return Embed;
})();

/**
 * Type of cast
 * @exports CastType
 * @enum {number}
 * @property {number} CAST=0 CAST value
 * @property {number} LONG_CAST=1 LONG_CAST value
 */
$root.CastType = (function() {
    var valuesById = {}, values = Object.create(valuesById);
    values[valuesById[0] = "CAST"] = 0;
    values[valuesById[1] = "LONG_CAST"] = 1;
    return values;
})();

$root.CastAddBody = (function() {

    /**
     * Properties of a CastAddBody.
     * @exports ICastAddBody
     * @interface ICastAddBody
     * @property {Array.<string>|null} [embedsDeprecated] CastAddBody embedsDeprecated
     * @property {Array.<number|Long>|null} [mentions] CastAddBody mentions
     * @property {ICastId|null} [parentCastId] CastAddBody parentCastId
     * @property {string|null} [parentUrl] CastAddBody parentUrl
     * @property {string|null} [text] CastAddBody text
     * @property {Array.<number>|null} [mentionsPositions] CastAddBody mentionsPositions
     * @property {Array.<IEmbed>|null} [embeds] CastAddBody embeds
     * @property {CastType|null} [type] CastAddBody type
     */

    /**
     * Constructs a new CastAddBody.
     * @exports CastAddBody
     * @classdesc Adds a new Cast
     * @implements ICastAddBody
     * @constructor
     * @param {ICastAddBody=} [properties] Properties to set
     */
    function CastAddBody(properties) {
        this.embedsDeprecated = [];
        this.mentions = [];
        this.mentionsPositions = [];
        this.embeds = [];
        if (properties)
            for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                if (properties[keys[i]] != null)
                    this[keys[i]] = properties[keys[i]];
    }

    /**
     * CastAddBody embedsDeprecated.
     * @member {Array.<string>} embedsDeprecated
     * @memberof CastAddBody
     * @instance
     */
    CastAddBody.prototype.embedsDeprecated = $util.emptyArray;

    /**
     * CastAddBody mentions.
     * @member {Array.<number|Long>} mentions
     * @memberof CastAddBody
     * @instance
     */
    CastAddBody.prototype.mentions = $util.emptyArray;

    /**
     * CastAddBody parentCastId.
     * @member {ICastId|null|undefined} parentCastId
     * @memberof CastAddBody
     * @instance
     */
    CastAddBody.prototype.parentCastId = null;

    /**
     * CastAddBody parentUrl.
     * @member {string|null|undefined} parentUrl
     * @memberof CastAddBody
     * @instance
     */
    CastAddBody.prototype.parentUrl = null;

    /**
     * CastAddBody text.
     * @member {string} text
     * @memberof CastAddBody
     * @instance
     */
    CastAddBody.prototype.text = "";

    /**
     * CastAddBody mentionsPositions.
     * @member {Array.<number>} mentionsPositions
     * @memberof CastAddBody
     * @instance
     */
    CastAddBody.prototype.mentionsPositions = $util.emptyArray;

    /**
     * CastAddBody embeds.
     * @member {Array.<IEmbed>} embeds
     * @memberof CastAddBody
     * @instance
     */
    CastAddBody.prototype.embeds = $util.emptyArray;

    /**
     * CastAddBody type.
     * @member {CastType} type
     * @memberof CastAddBody
     * @instance
     */
    CastAddBody.prototype.type = 0;

    // OneOf field names bound to virtual getters and setters
    var $oneOfFields;

    /**
     * CastAddBody parent.
     * @member {"parentCastId"|"parentUrl"|undefined} parent
     * @memberof CastAddBody
     * @instance
     */
    Object.defineProperty(CastAddBody.prototype, "parent", {
        get: $util.oneOfGetter($oneOfFields = ["parentCastId", "parentUrl"]),
        set: $util.oneOfSetter($oneOfFields)
    });

    /**
     * Creates a new CastAddBody instance using the specified properties.
     * @function create
     * @memberof CastAddBody
     * @static
     * @param {ICastAddBody=} [properties] Properties to set
     * @returns {CastAddBody} CastAddBody instance
     */
    CastAddBody.create = function create(properties) {
        return new CastAddBody(properties);
    };

    /**
     * Encodes the specified CastAddBody message. Does not implicitly {@link CastAddBody.verify|verify} messages.
     * @function encode
     * @memberof CastAddBody
     * @static
     * @param {ICastAddBody} message CastAddBody message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    CastAddBody.encode = function encode(message, writer) {
        if (!writer)
            writer = $Writer.create();
        if (message.embedsDeprecated != null && message.embedsDeprecated.length)
            for (var i = 0; i < message.embedsDeprecated.length; ++i)
                writer.uint32(/* id 1, wireType 2 =*/10).string(message.embedsDeprecated[i]);
        if (message.mentions != null && message.mentions.length) {
            writer.uint32(/* id 2, wireType 2 =*/18).fork();
            for (var i = 0; i < message.mentions.length; ++i)
                writer.uint64(message.mentions[i]);
            writer.ldelim();
        }
        if (message.parentCastId != null && Object.hasOwnProperty.call(message, "parentCastId"))
            $root.CastId.encode(message.parentCastId, writer.uint32(/* id 3, wireType 2 =*/26).fork()).ldelim();
        if (message.text != null && Object.hasOwnProperty.call(message, "text"))
            writer.uint32(/* id 4, wireType 2 =*/34).string(message.text);
        if (message.mentionsPositions != null && message.mentionsPositions.length) {
            writer.uint32(/* id 5, wireType 2 =*/42).fork();
            for (var i = 0; i < message.mentionsPositions.length; ++i)
                writer.uint32(message.mentionsPositions[i]);
            writer.ldelim();
        }
        if (message.embeds != null && message.embeds.length)
            for (var i = 0; i < message.embeds.length; ++i)
                $root.Embed.encode(message.embeds[i], writer.uint32(/* id 6, wireType 2 =*/50).fork()).ldelim();
        if (message.parentUrl != null && Object.hasOwnProperty.call(message, "parentUrl"))
            writer.uint32(/* id 7, wireType 2 =*/58).string(message.parentUrl);
        if (message.type != null && Object.hasOwnProperty.call(message, "type"))
            writer.uint32(/* id 8, wireType 0 =*/64).int32(message.type);
        return writer;
    };

    /**
     * Encodes the specified CastAddBody message, length delimited. Does not implicitly {@link CastAddBody.verify|verify} messages.
     * @function encodeDelimited
     * @memberof CastAddBody
     * @static
     * @param {ICastAddBody} message CastAddBody message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    CastAddBody.encodeDelimited = function encodeDelimited(message, writer) {
        return this.encode(message, writer).ldelim();
    };

    /**
     * Decodes a CastAddBody message from the specified reader or buffer.
     * @function decode
     * @memberof CastAddBody
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @param {number} [length] Message length if known beforehand
     * @returns {CastAddBody} CastAddBody
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    CastAddBody.decode = function decode(reader, length) {
        if (!(reader instanceof $Reader))
            reader = $Reader.create(reader);
        var end = length === undefined ? reader.len : reader.pos + length, message = new $root.CastAddBody();
        while (reader.pos < end) {
            var tag = reader.uint32();
            switch (tag >>> 3) {
            case 1: {
                    if (!(message.embedsDeprecated && message.embedsDeprecated.length))
                        message.embedsDeprecated = [];
                    message.embedsDeprecated.push(reader.string());
                    break;
                }
            case 2: {
                    if (!(message.mentions && message.mentions.length))
                        message.mentions = [];
                    if ((tag & 7) === 2) {
                        var end2 = reader.uint32() + reader.pos;
                        while (reader.pos < end2)
                            message.mentions.push(reader.uint64());
                    } else
                        message.mentions.push(reader.uint64());
                    break;
                }
            case 3: {
                    message.parentCastId = $root.CastId.decode(reader, reader.uint32());
                    break;
                }
            case 7: {
                    message.parentUrl = reader.string();
                    break;
                }
            case 4: {
                    message.text = reader.string();
                    break;
                }
            case 5: {
                    if (!(message.mentionsPositions && message.mentionsPositions.length))
                        message.mentionsPositions = [];
                    if ((tag & 7) === 2) {
                        var end2 = reader.uint32() + reader.pos;
                        while (reader.pos < end2)
                            message.mentionsPositions.push(reader.uint32());
                    } else
                        message.mentionsPositions.push(reader.uint32());
                    break;
                }
            case 6: {
                    if (!(message.embeds && message.embeds.length))
                        message.embeds = [];
                    message.embeds.push($root.Embed.decode(reader, reader.uint32()));
                    break;
                }
            case 8: {
                    message.type = reader.int32();
                    break;
                }
            default:
                reader.skipType(tag & 7);
                break;
            }
        }
        return message;
    };

    /**
     * Decodes a CastAddBody message from the specified reader or buffer, length delimited.
     * @function decodeDelimited
     * @memberof CastAddBody
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @returns {CastAddBody} CastAddBody
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    CastAddBody.decodeDelimited = function decodeDelimited(reader) {
        if (!(reader instanceof $Reader))
            reader = new $Reader(reader);
        return this.decode(reader, reader.uint32());
    };

    /**
     * Verifies a CastAddBody message.
     * @function verify
     * @memberof CastAddBody
     * @static
     * @param {Object.<string,*>} message Plain object to verify
     * @returns {string|null} `null` if valid, otherwise the reason why it is not
     */
    CastAddBody.verify = function verify(message) {
        if (typeof message !== "object" || message === null)
            return "object expected";
        var properties = {};
        if (message.embedsDeprecated != null && message.hasOwnProperty("embedsDeprecated")) {
            if (!Array.isArray(message.embedsDeprecated))
                return "embedsDeprecated: array expected";
            for (var i = 0; i < message.embedsDeprecated.length; ++i)
                if (!$util.isString(message.embedsDeprecated[i]))
                    return "embedsDeprecated: string[] expected";
        }
        if (message.mentions != null && message.hasOwnProperty("mentions")) {
            if (!Array.isArray(message.mentions))
                return "mentions: array expected";
            for (var i = 0; i < message.mentions.length; ++i)
                if (!$util.isInteger(message.mentions[i]) && !(message.mentions[i] && $util.isInteger(message.mentions[i].low) && $util.isInteger(message.mentions[i].high)))
                    return "mentions: integer|Long[] expected";
        }
        if (message.parentCastId != null && message.hasOwnProperty("parentCastId")) {
            properties.parent = 1;
            {
                var error = $root.CastId.verify(message.parentCastId);
                if (error)
                    return "parentCastId." + error;
            }
        }
        if (message.parentUrl != null && message.hasOwnProperty("parentUrl")) {
            if (properties.parent === 1)
                return "parent: multiple values";
            properties.parent = 1;
            if (!$util.isString(message.parentUrl))
                return "parentUrl: string expected";
        }
        if (message.text != null && message.hasOwnProperty("text"))
            if (!$util.isString(message.text))
                return "text: string expected";
        if (message.mentionsPositions != null && message.hasOwnProperty("mentionsPositions")) {
            if (!Array.isArray(message.mentionsPositions))
                return "mentionsPositions: array expected";
            for (var i = 0; i < message.mentionsPositions.length; ++i)
                if (!$util.isInteger(message.mentionsPositions[i]))
                    return "mentionsPositions: integer[] expected";
        }
        if (message.embeds != null && message.hasOwnProperty("embeds")) {
            if (!Array.isArray(message.embeds))
                return "embeds: array expected";
            for (var i = 0; i < message.embeds.length; ++i) {
                var error = $root.Embed.verify(message.embeds[i]);
                if (error)
                    return "embeds." + error;
            }
        }
        if (message.type != null && message.hasOwnProperty("type"))
            switch (message.type) {
            default:
                return "type: enum value expected";
            case 0:
            case 1:
                break;
            }
        return null;
    };

    /**
     * Creates a CastAddBody message from a plain object. Also converts values to their respective internal types.
     * @function fromObject
     * @memberof CastAddBody
     * @static
     * @param {Object.<string,*>} object Plain object
     * @returns {CastAddBody} CastAddBody
     */
    CastAddBody.fromObject = function fromObject(object) {
        if (object instanceof $root.CastAddBody)
            return object;
        var message = new $root.CastAddBody();
        if (object.embedsDeprecated) {
            if (!Array.isArray(object.embedsDeprecated))
                throw TypeError(".CastAddBody.embedsDeprecated: array expected");
            message.embedsDeprecated = [];
            for (var i = 0; i < object.embedsDeprecated.length; ++i)
                message.embedsDeprecated[i] = String(object.embedsDeprecated[i]);
        }
        if (object.mentions) {
            if (!Array.isArray(object.mentions))
                throw TypeError(".CastAddBody.mentions: array expected");
            message.mentions = [];
            for (var i = 0; i < object.mentions.length; ++i)
                if ($util.Long)
                    (message.mentions[i] = $util.Long.fromValue(object.mentions[i])).unsigned = true;
                else if (typeof object.mentions[i] === "string")
                    message.mentions[i] = parseInt(object.mentions[i], 10);
                else if (typeof object.mentions[i] === "number")
                    message.mentions[i] = object.mentions[i];
                else if (typeof object.mentions[i] === "object")
                    message.mentions[i] = new $util.LongBits(object.mentions[i].low >>> 0, object.mentions[i].high >>> 0).toNumber(true);
        }
        if (object.parentCastId != null) {
            if (typeof object.parentCastId !== "object")
                throw TypeError(".CastAddBody.parentCastId: object expected");
            message.parentCastId = $root.CastId.fromObject(object.parentCastId);
        }
        if (object.parentUrl != null)
            message.parentUrl = String(object.parentUrl);
        if (object.text != null)
            message.text = String(object.text);
        if (object.mentionsPositions) {
            if (!Array.isArray(object.mentionsPositions))
                throw TypeError(".CastAddBody.mentionsPositions: array expected");
            message.mentionsPositions = [];
            for (var i = 0; i < object.mentionsPositions.length; ++i)
                message.mentionsPositions[i] = object.mentionsPositions[i] >>> 0;
        }
        if (object.embeds) {
            if (!Array.isArray(object.embeds))
                throw TypeError(".CastAddBody.embeds: array expected");
            message.embeds = [];
            for (var i = 0; i < object.embeds.length; ++i) {
                if (typeof object.embeds[i] !== "object")
                    throw TypeError(".CastAddBody.embeds: object expected");
                message.embeds[i] = $root.Embed.fromObject(object.embeds[i]);
            }
        }
        switch (object.type) {
        default:
            if (typeof object.type === "number") {
                message.type = object.type;
                break;
            }
            break;
        case "CAST":
        case 0:
            message.type = 0;
            break;
        case "LONG_CAST":
        case 1:
            message.type = 1;
            break;
        }
        return message;
    };

    /**
     * Creates a plain object from a CastAddBody message. Also converts values to other types if specified.
     * @function toObject
     * @memberof CastAddBody
     * @static
     * @param {CastAddBody} message CastAddBody
     * @param {$protobuf.IConversionOptions} [options] Conversion options
     * @returns {Object.<string,*>} Plain object
     */
    CastAddBody.toObject = function toObject(message, options) {
        if (!options)
            options = {};
        var object = {};
        if (options.arrays || options.defaults) {
            object.embedsDeprecated = [];
            object.mentions = [];
            object.mentionsPositions = [];
            object.embeds = [];
        }
        if (options.defaults) {
            object.text = "";
            object.type = options.enums === String ? "CAST" : 0;
        }
        if (message.embedsDeprecated && message.embedsDeprecated.length) {
            object.embedsDeprecated = [];
            for (var j = 0; j < message.embedsDeprecated.length; ++j)
                object.embedsDeprecated[j] = message.embedsDeprecated[j];
        }
        if (message.mentions && message.mentions.length) {
            object.mentions = [];
            for (var j = 0; j < message.mentions.length; ++j)
                if (typeof message.mentions[j] === "number")
                    object.mentions[j] = options.longs === String ? String(message.mentions[j]) : message.mentions[j];
                else
                    object.mentions[j] = options.longs === String ? $util.Long.prototype.toString.call(message.mentions[j]) : options.longs === Number ? new $util.LongBits(message.mentions[j].low >>> 0, message.mentions[j].high >>> 0).toNumber(true) : message.mentions[j];
        }
        if (message.parentCastId != null && message.hasOwnProperty("parentCastId")) {
            object.parentCastId = $root.CastId.toObject(message.parentCastId, options);
            if (options.oneofs)
                object.parent = "parentCastId";
        }
        if (message.text != null && message.hasOwnProperty("text"))
            object.text = message.text;
        if (message.mentionsPositions && message.mentionsPositions.length) {
            object.mentionsPositions = [];
            for (var j = 0; j < message.mentionsPositions.length; ++j)
                object.mentionsPositions[j] = message.mentionsPositions[j];
        }
        if (message.embeds && message.embeds.length) {
            object.embeds = [];
            for (var j = 0; j < message.embeds.length; ++j)
                object.embeds[j] = $root.Embed.toObject(message.embeds[j], options);
        }
        if (message.parentUrl != null && message.hasOwnProperty("parentUrl")) {
            object.parentUrl = message.parentUrl;
            if (options.oneofs)
                object.parent = "parentUrl";
        }
        if (message.type != null && message.hasOwnProperty("type"))
            object.type = options.enums === String ? $root.CastType[message.type] === undefined ? message.type : $root.CastType[message.type] : message.type;
        return object;
    };

    /**
     * Converts this CastAddBody to JSON.
     * @function toJSON
     * @memberof CastAddBody
     * @instance
     * @returns {Object.<string,*>} JSON object
     */
    CastAddBody.prototype.toJSON = function toJSON() {
        return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
    };

    /**
     * Gets the default type url for CastAddBody
     * @function getTypeUrl
     * @memberof CastAddBody
     * @static
     * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
     * @returns {string} The default type url
     */
    CastAddBody.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
        if (typeUrlPrefix === undefined) {
            typeUrlPrefix = "type.googleapis.com";
        }
        return typeUrlPrefix + "/CastAddBody";
    };

    return CastAddBody;
})();

$root.CastRemoveBody = (function() {

    /**
     * Properties of a CastRemoveBody.
     * @exports ICastRemoveBody
     * @interface ICastRemoveBody
     * @property {Uint8Array|null} [targetHash] CastRemoveBody targetHash
     */

    /**
     * Constructs a new CastRemoveBody.
     * @exports CastRemoveBody
     * @classdesc Removes an existing Cast
     * @implements ICastRemoveBody
     * @constructor
     * @param {ICastRemoveBody=} [properties] Properties to set
     */
    function CastRemoveBody(properties) {
        if (properties)
            for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                if (properties[keys[i]] != null)
                    this[keys[i]] = properties[keys[i]];
    }

    /**
     * CastRemoveBody targetHash.
     * @member {Uint8Array} targetHash
     * @memberof CastRemoveBody
     * @instance
     */
    CastRemoveBody.prototype.targetHash = $util.newBuffer([]);

    /**
     * Creates a new CastRemoveBody instance using the specified properties.
     * @function create
     * @memberof CastRemoveBody
     * @static
     * @param {ICastRemoveBody=} [properties] Properties to set
     * @returns {CastRemoveBody} CastRemoveBody instance
     */
    CastRemoveBody.create = function create(properties) {
        return new CastRemoveBody(properties);
    };

    /**
     * Encodes the specified CastRemoveBody message. Does not implicitly {@link CastRemoveBody.verify|verify} messages.
     * @function encode
     * @memberof CastRemoveBody
     * @static
     * @param {ICastRemoveBody} message CastRemoveBody message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    CastRemoveBody.encode = function encode(message, writer) {
        if (!writer)
            writer = $Writer.create();
        if (message.targetHash != null && Object.hasOwnProperty.call(message, "targetHash"))
            writer.uint32(/* id 1, wireType 2 =*/10).bytes(message.targetHash);
        return writer;
    };

    /**
     * Encodes the specified CastRemoveBody message, length delimited. Does not implicitly {@link CastRemoveBody.verify|verify} messages.
     * @function encodeDelimited
     * @memberof CastRemoveBody
     * @static
     * @param {ICastRemoveBody} message CastRemoveBody message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    CastRemoveBody.encodeDelimited = function encodeDelimited(message, writer) {
        return this.encode(message, writer).ldelim();
    };

    /**
     * Decodes a CastRemoveBody message from the specified reader or buffer.
     * @function decode
     * @memberof CastRemoveBody
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @param {number} [length] Message length if known beforehand
     * @returns {CastRemoveBody} CastRemoveBody
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    CastRemoveBody.decode = function decode(reader, length) {
        if (!(reader instanceof $Reader))
            reader = $Reader.create(reader);
        var end = length === undefined ? reader.len : reader.pos + length, message = new $root.CastRemoveBody();
        while (reader.pos < end) {
            var tag = reader.uint32();
            switch (tag >>> 3) {
            case 1: {
                    message.targetHash = reader.bytes();
                    break;
                }
            default:
                reader.skipType(tag & 7);
                break;
            }
        }
        return message;
    };

    /**
     * Decodes a CastRemoveBody message from the specified reader or buffer, length delimited.
     * @function decodeDelimited
     * @memberof CastRemoveBody
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @returns {CastRemoveBody} CastRemoveBody
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    CastRemoveBody.decodeDelimited = function decodeDelimited(reader) {
        if (!(reader instanceof $Reader))
            reader = new $Reader(reader);
        return this.decode(reader, reader.uint32());
    };

    /**
     * Verifies a CastRemoveBody message.
     * @function verify
     * @memberof CastRemoveBody
     * @static
     * @param {Object.<string,*>} message Plain object to verify
     * @returns {string|null} `null` if valid, otherwise the reason why it is not
     */
    CastRemoveBody.verify = function verify(message) {
        if (typeof message !== "object" || message === null)
            return "object expected";
        if (message.targetHash != null && message.hasOwnProperty("targetHash"))
            if (!(message.targetHash && typeof message.targetHash.length === "number" || $util.isString(message.targetHash)))
                return "targetHash: buffer expected";
        return null;
    };

    /**
     * Creates a CastRemoveBody message from a plain object. Also converts values to their respective internal types.
     * @function fromObject
     * @memberof CastRemoveBody
     * @static
     * @param {Object.<string,*>} object Plain object
     * @returns {CastRemoveBody} CastRemoveBody
     */
    CastRemoveBody.fromObject = function fromObject(object) {
        if (object instanceof $root.CastRemoveBody)
            return object;
        var message = new $root.CastRemoveBody();
        if (object.targetHash != null)
            if (typeof object.targetHash === "string")
                $util.base64.decode(object.targetHash, message.targetHash = $util.newBuffer($util.base64.length(object.targetHash)), 0);
            else if (object.targetHash.length >= 0)
                message.targetHash = object.targetHash;
        return message;
    };

    /**
     * Creates a plain object from a CastRemoveBody message. Also converts values to other types if specified.
     * @function toObject
     * @memberof CastRemoveBody
     * @static
     * @param {CastRemoveBody} message CastRemoveBody
     * @param {$protobuf.IConversionOptions} [options] Conversion options
     * @returns {Object.<string,*>} Plain object
     */
    CastRemoveBody.toObject = function toObject(message, options) {
        if (!options)
            options = {};
        var object = {};
        if (options.defaults)
            if (options.bytes === String)
                object.targetHash = "";
            else {
                object.targetHash = [];
                if (options.bytes !== Array)
                    object.targetHash = $util.newBuffer(object.targetHash);
            }
        if (message.targetHash != null && message.hasOwnProperty("targetHash"))
            object.targetHash = options.bytes === String ? $util.base64.encode(message.targetHash, 0, message.targetHash.length) : options.bytes === Array ? Array.prototype.slice.call(message.targetHash) : message.targetHash;
        return object;
    };

    /**
     * Converts this CastRemoveBody to JSON.
     * @function toJSON
     * @memberof CastRemoveBody
     * @instance
     * @returns {Object.<string,*>} JSON object
     */
    CastRemoveBody.prototype.toJSON = function toJSON() {
        return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
    };

    /**
     * Gets the default type url for CastRemoveBody
     * @function getTypeUrl
     * @memberof CastRemoveBody
     * @static
     * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
     * @returns {string} The default type url
     */
    CastRemoveBody.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
        if (typeUrlPrefix === undefined) {
            typeUrlPrefix = "type.googleapis.com";
        }
        return typeUrlPrefix + "/CastRemoveBody";
    };

    return CastRemoveBody;
})();

$root.CastId = (function() {

    /**
     * Properties of a CastId.
     * @exports ICastId
     * @interface ICastId
     * @property {number|Long|null} [fid] CastId fid
     * @property {Uint8Array|null} [hash] CastId hash
     */

    /**
     * Constructs a new CastId.
     * @exports CastId
     * @classdesc Identifier used to look up a Cast
     * @implements ICastId
     * @constructor
     * @param {ICastId=} [properties] Properties to set
     */
    function CastId(properties) {
        if (properties)
            for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                if (properties[keys[i]] != null)
                    this[keys[i]] = properties[keys[i]];
    }

    /**
     * CastId fid.
     * @member {number|Long} fid
     * @memberof CastId
     * @instance
     */
    CastId.prototype.fid = $util.Long ? $util.Long.fromBits(0,0,true) : 0;

    /**
     * CastId hash.
     * @member {Uint8Array} hash
     * @memberof CastId
     * @instance
     */
    CastId.prototype.hash = $util.newBuffer([]);

    /**
     * Creates a new CastId instance using the specified properties.
     * @function create
     * @memberof CastId
     * @static
     * @param {ICastId=} [properties] Properties to set
     * @returns {CastId} CastId instance
     */
    CastId.create = function create(properties) {
        return new CastId(properties);
    };

    /**
     * Encodes the specified CastId message. Does not implicitly {@link CastId.verify|verify} messages.
     * @function encode
     * @memberof CastId
     * @static
     * @param {ICastId} message CastId message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    CastId.encode = function encode(message, writer) {
        if (!writer)
            writer = $Writer.create();
        if (message.fid != null && Object.hasOwnProperty.call(message, "fid"))
            writer.uint32(/* id 1, wireType 0 =*/8).uint64(message.fid);
        if (message.hash != null && Object.hasOwnProperty.call(message, "hash"))
            writer.uint32(/* id 2, wireType 2 =*/18).bytes(message.hash);
        return writer;
    };

    /**
     * Encodes the specified CastId message, length delimited. Does not implicitly {@link CastId.verify|verify} messages.
     * @function encodeDelimited
     * @memberof CastId
     * @static
     * @param {ICastId} message CastId message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    CastId.encodeDelimited = function encodeDelimited(message, writer) {
        return this.encode(message, writer).ldelim();
    };

    /**
     * Decodes a CastId message from the specified reader or buffer.
     * @function decode
     * @memberof CastId
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @param {number} [length] Message length if known beforehand
     * @returns {CastId} CastId
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    CastId.decode = function decode(reader, length) {
        if (!(reader instanceof $Reader))
            reader = $Reader.create(reader);
        var end = length === undefined ? reader.len : reader.pos + length, message = new $root.CastId();
        while (reader.pos < end) {
            var tag = reader.uint32();
            switch (tag >>> 3) {
            case 1: {
                    message.fid = reader.uint64();
                    break;
                }
            case 2: {
                    message.hash = reader.bytes();
                    break;
                }
            default:
                reader.skipType(tag & 7);
                break;
            }
        }
        return message;
    };

    /**
     * Decodes a CastId message from the specified reader or buffer, length delimited.
     * @function decodeDelimited
     * @memberof CastId
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @returns {CastId} CastId
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    CastId.decodeDelimited = function decodeDelimited(reader) {
        if (!(reader instanceof $Reader))
            reader = new $Reader(reader);
        return this.decode(reader, reader.uint32());
    };

    /**
     * Verifies a CastId message.
     * @function verify
     * @memberof CastId
     * @static
     * @param {Object.<string,*>} message Plain object to verify
     * @returns {string|null} `null` if valid, otherwise the reason why it is not
     */
    CastId.verify = function verify(message) {
        if (typeof message !== "object" || message === null)
            return "object expected";
        if (message.fid != null && message.hasOwnProperty("fid"))
            if (!$util.isInteger(message.fid) && !(message.fid && $util.isInteger(message.fid.low) && $util.isInteger(message.fid.high)))
                return "fid: integer|Long expected";
        if (message.hash != null && message.hasOwnProperty("hash"))
            if (!(message.hash && typeof message.hash.length === "number" || $util.isString(message.hash)))
                return "hash: buffer expected";
        return null;
    };

    /**
     * Creates a CastId message from a plain object. Also converts values to their respective internal types.
     * @function fromObject
     * @memberof CastId
     * @static
     * @param {Object.<string,*>} object Plain object
     * @returns {CastId} CastId
     */
    CastId.fromObject = function fromObject(object) {
        if (object instanceof $root.CastId)
            return object;
        var message = new $root.CastId();
        if (object.fid != null)
            if ($util.Long)
                (message.fid = $util.Long.fromValue(object.fid)).unsigned = true;
            else if (typeof object.fid === "string")
                message.fid = parseInt(object.fid, 10);
            else if (typeof object.fid === "number")
                message.fid = object.fid;
            else if (typeof object.fid === "object")
                message.fid = new $util.LongBits(object.fid.low >>> 0, object.fid.high >>> 0).toNumber(true);
        if (object.hash != null)
            if (typeof object.hash === "string")
                $util.base64.decode(object.hash, message.hash = $util.newBuffer($util.base64.length(object.hash)), 0);
            else if (object.hash.length >= 0)
                message.hash = object.hash;
        return message;
    };

    /**
     * Creates a plain object from a CastId message. Also converts values to other types if specified.
     * @function toObject
     * @memberof CastId
     * @static
     * @param {CastId} message CastId
     * @param {$protobuf.IConversionOptions} [options] Conversion options
     * @returns {Object.<string,*>} Plain object
     */
    CastId.toObject = function toObject(message, options) {
        if (!options)
            options = {};
        var object = {};
        if (options.defaults) {
            if ($util.Long) {
                var long = new $util.Long(0, 0, true);
                object.fid = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
            } else
                object.fid = options.longs === String ? "0" : 0;
            if (options.bytes === String)
                object.hash = "";
            else {
                object.hash = [];
                if (options.bytes !== Array)
                    object.hash = $util.newBuffer(object.hash);
            }
        }
        if (message.fid != null && message.hasOwnProperty("fid"))
            if (typeof message.fid === "number")
                object.fid = options.longs === String ? String(message.fid) : message.fid;
            else
                object.fid = options.longs === String ? $util.Long.prototype.toString.call(message.fid) : options.longs === Number ? new $util.LongBits(message.fid.low >>> 0, message.fid.high >>> 0).toNumber(true) : message.fid;
        if (message.hash != null && message.hasOwnProperty("hash"))
            object.hash = options.bytes === String ? $util.base64.encode(message.hash, 0, message.hash.length) : options.bytes === Array ? Array.prototype.slice.call(message.hash) : message.hash;
        return object;
    };

    /**
     * Converts this CastId to JSON.
     * @function toJSON
     * @memberof CastId
     * @instance
     * @returns {Object.<string,*>} JSON object
     */
    CastId.prototype.toJSON = function toJSON() {
        return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
    };

    /**
     * Gets the default type url for CastId
     * @function getTypeUrl
     * @memberof CastId
     * @static
     * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
     * @returns {string} The default type url
     */
    CastId.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
        if (typeUrlPrefix === undefined) {
            typeUrlPrefix = "type.googleapis.com";
        }
        return typeUrlPrefix + "/CastId";
    };

    return CastId;
})();

$root.ReactionBody = (function() {

    /**
     * Properties of a ReactionBody.
     * @exports IReactionBody
     * @interface IReactionBody
     * @property {ReactionType|null} [type] ReactionBody type
     * @property {ICastId|null} [targetCastId] ReactionBody targetCastId
     * @property {string|null} [targetUrl] ReactionBody targetUrl
     */

    /**
     * Constructs a new ReactionBody.
     * @exports ReactionBody
     * @classdesc Adds or removes a Reaction from a Cast
     * @implements IReactionBody
     * @constructor
     * @param {IReactionBody=} [properties] Properties to set
     */
    function ReactionBody(properties) {
        if (properties)
            for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                if (properties[keys[i]] != null)
                    this[keys[i]] = properties[keys[i]];
    }

    /**
     * ReactionBody type.
     * @member {ReactionType} type
     * @memberof ReactionBody
     * @instance
     */
    ReactionBody.prototype.type = 0;

    /**
     * ReactionBody targetCastId.
     * @member {ICastId|null|undefined} targetCastId
     * @memberof ReactionBody
     * @instance
     */
    ReactionBody.prototype.targetCastId = null;

    /**
     * ReactionBody targetUrl.
     * @member {string|null|undefined} targetUrl
     * @memberof ReactionBody
     * @instance
     */
    ReactionBody.prototype.targetUrl = null;

    // OneOf field names bound to virtual getters and setters
    var $oneOfFields;

    /**
     * ReactionBody target.
     * @member {"targetCastId"|"targetUrl"|undefined} target
     * @memberof ReactionBody
     * @instance
     */
    Object.defineProperty(ReactionBody.prototype, "target", {
        get: $util.oneOfGetter($oneOfFields = ["targetCastId", "targetUrl"]),
        set: $util.oneOfSetter($oneOfFields)
    });

    /**
     * Creates a new ReactionBody instance using the specified properties.
     * @function create
     * @memberof ReactionBody
     * @static
     * @param {IReactionBody=} [properties] Properties to set
     * @returns {ReactionBody} ReactionBody instance
     */
    ReactionBody.create = function create(properties) {
        return new ReactionBody(properties);
    };

    /**
     * Encodes the specified ReactionBody message. Does not implicitly {@link ReactionBody.verify|verify} messages.
     * @function encode
     * @memberof ReactionBody
     * @static
     * @param {IReactionBody} message ReactionBody message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    ReactionBody.encode = function encode(message, writer) {
        if (!writer)
            writer = $Writer.create();
        if (message.type != null && Object.hasOwnProperty.call(message, "type"))
            writer.uint32(/* id 1, wireType 0 =*/8).int32(message.type);
        if (message.targetCastId != null && Object.hasOwnProperty.call(message, "targetCastId"))
            $root.CastId.encode(message.targetCastId, writer.uint32(/* id 2, wireType 2 =*/18).fork()).ldelim();
        if (message.targetUrl != null && Object.hasOwnProperty.call(message, "targetUrl"))
            writer.uint32(/* id 3, wireType 2 =*/26).string(message.targetUrl);
        return writer;
    };

    /**
     * Encodes the specified ReactionBody message, length delimited. Does not implicitly {@link ReactionBody.verify|verify} messages.
     * @function encodeDelimited
     * @memberof ReactionBody
     * @static
     * @param {IReactionBody} message ReactionBody message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    ReactionBody.encodeDelimited = function encodeDelimited(message, writer) {
        return this.encode(message, writer).ldelim();
    };

    /**
     * Decodes a ReactionBody message from the specified reader or buffer.
     * @function decode
     * @memberof ReactionBody
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @param {number} [length] Message length if known beforehand
     * @returns {ReactionBody} ReactionBody
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    ReactionBody.decode = function decode(reader, length) {
        if (!(reader instanceof $Reader))
            reader = $Reader.create(reader);
        var end = length === undefined ? reader.len : reader.pos + length, message = new $root.ReactionBody();
        while (reader.pos < end) {
            var tag = reader.uint32();
            switch (tag >>> 3) {
            case 1: {
                    message.type = reader.int32();
                    break;
                }
            case 2: {
                    message.targetCastId = $root.CastId.decode(reader, reader.uint32());
                    break;
                }
            case 3: {
                    message.targetUrl = reader.string();
                    break;
                }
            default:
                reader.skipType(tag & 7);
                break;
            }
        }
        return message;
    };

    /**
     * Decodes a ReactionBody message from the specified reader or buffer, length delimited.
     * @function decodeDelimited
     * @memberof ReactionBody
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @returns {ReactionBody} ReactionBody
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    ReactionBody.decodeDelimited = function decodeDelimited(reader) {
        if (!(reader instanceof $Reader))
            reader = new $Reader(reader);
        return this.decode(reader, reader.uint32());
    };

    /**
     * Verifies a ReactionBody message.
     * @function verify
     * @memberof ReactionBody
     * @static
     * @param {Object.<string,*>} message Plain object to verify
     * @returns {string|null} `null` if valid, otherwise the reason why it is not
     */
    ReactionBody.verify = function verify(message) {
        if (typeof message !== "object" || message === null)
            return "object expected";
        var properties = {};
        if (message.type != null && message.hasOwnProperty("type"))
            switch (message.type) {
            default:
                return "type: enum value expected";
            case 0:
            case 1:
            case 2:
                break;
            }
        if (message.targetCastId != null && message.hasOwnProperty("targetCastId")) {
            properties.target = 1;
            {
                var error = $root.CastId.verify(message.targetCastId);
                if (error)
                    return "targetCastId." + error;
            }
        }
        if (message.targetUrl != null && message.hasOwnProperty("targetUrl")) {
            if (properties.target === 1)
                return "target: multiple values";
            properties.target = 1;
            if (!$util.isString(message.targetUrl))
                return "targetUrl: string expected";
        }
        return null;
    };

    /**
     * Creates a ReactionBody message from a plain object. Also converts values to their respective internal types.
     * @function fromObject
     * @memberof ReactionBody
     * @static
     * @param {Object.<string,*>} object Plain object
     * @returns {ReactionBody} ReactionBody
     */
    ReactionBody.fromObject = function fromObject(object) {
        if (object instanceof $root.ReactionBody)
            return object;
        var message = new $root.ReactionBody();
        switch (object.type) {
        default:
            if (typeof object.type === "number") {
                message.type = object.type;
                break;
            }
            break;
        case "REACTION_TYPE_NONE":
        case 0:
            message.type = 0;
            break;
        case "REACTION_TYPE_LIKE":
        case 1:
            message.type = 1;
            break;
        case "REACTION_TYPE_RECAST":
        case 2:
            message.type = 2;
            break;
        }
        if (object.targetCastId != null) {
            if (typeof object.targetCastId !== "object")
                throw TypeError(".ReactionBody.targetCastId: object expected");
            message.targetCastId = $root.CastId.fromObject(object.targetCastId);
        }
        if (object.targetUrl != null)
            message.targetUrl = String(object.targetUrl);
        return message;
    };

    /**
     * Creates a plain object from a ReactionBody message. Also converts values to other types if specified.
     * @function toObject
     * @memberof ReactionBody
     * @static
     * @param {ReactionBody} message ReactionBody
     * @param {$protobuf.IConversionOptions} [options] Conversion options
     * @returns {Object.<string,*>} Plain object
     */
    ReactionBody.toObject = function toObject(message, options) {
        if (!options)
            options = {};
        var object = {};
        if (options.defaults)
            object.type = options.enums === String ? "REACTION_TYPE_NONE" : 0;
        if (message.type != null && message.hasOwnProperty("type"))
            object.type = options.enums === String ? $root.ReactionType[message.type] === undefined ? message.type : $root.ReactionType[message.type] : message.type;
        if (message.targetCastId != null && message.hasOwnProperty("targetCastId")) {
            object.targetCastId = $root.CastId.toObject(message.targetCastId, options);
            if (options.oneofs)
                object.target = "targetCastId";
        }
        if (message.targetUrl != null && message.hasOwnProperty("targetUrl")) {
            object.targetUrl = message.targetUrl;
            if (options.oneofs)
                object.target = "targetUrl";
        }
        return object;
    };

    /**
     * Converts this ReactionBody to JSON.
     * @function toJSON
     * @memberof ReactionBody
     * @instance
     * @returns {Object.<string,*>} JSON object
     */
    ReactionBody.prototype.toJSON = function toJSON() {
        return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
    };

    /**
     * Gets the default type url for ReactionBody
     * @function getTypeUrl
     * @memberof ReactionBody
     * @static
     * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
     * @returns {string} The default type url
     */
    ReactionBody.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
        if (typeUrlPrefix === undefined) {
            typeUrlPrefix = "type.googleapis.com";
        }
        return typeUrlPrefix + "/ReactionBody";
    };

    return ReactionBody;
})();

/**
 * Type of Reaction
 * @exports ReactionType
 * @enum {number}
 * @property {number} REACTION_TYPE_NONE=0 REACTION_TYPE_NONE value
 * @property {number} REACTION_TYPE_LIKE=1 REACTION_TYPE_LIKE value
 * @property {number} REACTION_TYPE_RECAST=2 REACTION_TYPE_RECAST value
 */
$root.ReactionType = (function() {
    var valuesById = {}, values = Object.create(valuesById);
    values[valuesById[0] = "REACTION_TYPE_NONE"] = 0;
    values[valuesById[1] = "REACTION_TYPE_LIKE"] = 1;
    values[valuesById[2] = "REACTION_TYPE_RECAST"] = 2;
    return values;
})();

/**
 * Type of Protocol to disambiguate verification addresses
 * @exports Protocol
 * @enum {number}
 * @property {number} PROTOCOL_ETHEREUM=0 PROTOCOL_ETHEREUM value
 * @property {number} PROTOCOL_SOLANA=1 PROTOCOL_SOLANA value
 */
$root.Protocol = (function() {
    var valuesById = {}, values = Object.create(valuesById);
    values[valuesById[0] = "PROTOCOL_ETHEREUM"] = 0;
    values[valuesById[1] = "PROTOCOL_SOLANA"] = 1;
    return values;
})();

$root.VerificationAddAddressBody = (function() {

    /**
     * Properties of a VerificationAddAddressBody.
     * @exports IVerificationAddAddressBody
     * @interface IVerificationAddAddressBody
     * @property {Uint8Array|null} [address] VerificationAddAddressBody address
     * @property {Uint8Array|null} [claimSignature] VerificationAddAddressBody claimSignature
     * @property {Uint8Array|null} [blockHash] VerificationAddAddressBody blockHash
     * @property {number|null} [verificationType] VerificationAddAddressBody verificationType
     * @property {number|null} [chainId] VerificationAddAddressBody chainId
     * @property {Protocol|null} [protocol] VerificationAddAddressBody protocol
     */

    /**
     * Constructs a new VerificationAddAddressBody.
     * @exports VerificationAddAddressBody
     * @classdesc Adds a Verification of ownership of an Address based on Protocol
     * @implements IVerificationAddAddressBody
     * @constructor
     * @param {IVerificationAddAddressBody=} [properties] Properties to set
     */
    function VerificationAddAddressBody(properties) {
        if (properties)
            for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                if (properties[keys[i]] != null)
                    this[keys[i]] = properties[keys[i]];
    }

    /**
     * VerificationAddAddressBody address.
     * @member {Uint8Array} address
     * @memberof VerificationAddAddressBody
     * @instance
     */
    VerificationAddAddressBody.prototype.address = $util.newBuffer([]);

    /**
     * VerificationAddAddressBody claimSignature.
     * @member {Uint8Array} claimSignature
     * @memberof VerificationAddAddressBody
     * @instance
     */
    VerificationAddAddressBody.prototype.claimSignature = $util.newBuffer([]);

    /**
     * VerificationAddAddressBody blockHash.
     * @member {Uint8Array} blockHash
     * @memberof VerificationAddAddressBody
     * @instance
     */
    VerificationAddAddressBody.prototype.blockHash = $util.newBuffer([]);

    /**
     * VerificationAddAddressBody verificationType.
     * @member {number} verificationType
     * @memberof VerificationAddAddressBody
     * @instance
     */
    VerificationAddAddressBody.prototype.verificationType = 0;

    /**
     * VerificationAddAddressBody chainId.
     * @member {number} chainId
     * @memberof VerificationAddAddressBody
     * @instance
     */
    VerificationAddAddressBody.prototype.chainId = 0;

    /**
     * VerificationAddAddressBody protocol.
     * @member {Protocol} protocol
     * @memberof VerificationAddAddressBody
     * @instance
     */
    VerificationAddAddressBody.prototype.protocol = 0;

    /**
     * Creates a new VerificationAddAddressBody instance using the specified properties.
     * @function create
     * @memberof VerificationAddAddressBody
     * @static
     * @param {IVerificationAddAddressBody=} [properties] Properties to set
     * @returns {VerificationAddAddressBody} VerificationAddAddressBody instance
     */
    VerificationAddAddressBody.create = function create(properties) {
        return new VerificationAddAddressBody(properties);
    };

    /**
     * Encodes the specified VerificationAddAddressBody message. Does not implicitly {@link VerificationAddAddressBody.verify|verify} messages.
     * @function encode
     * @memberof VerificationAddAddressBody
     * @static
     * @param {IVerificationAddAddressBody} message VerificationAddAddressBody message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    VerificationAddAddressBody.encode = function encode(message, writer) {
        if (!writer)
            writer = $Writer.create();
        if (message.address != null && Object.hasOwnProperty.call(message, "address"))
            writer.uint32(/* id 1, wireType 2 =*/10).bytes(message.address);
        if (message.claimSignature != null && Object.hasOwnProperty.call(message, "claimSignature"))
            writer.uint32(/* id 2, wireType 2 =*/18).bytes(message.claimSignature);
        if (message.blockHash != null && Object.hasOwnProperty.call(message, "blockHash"))
            writer.uint32(/* id 3, wireType 2 =*/26).bytes(message.blockHash);
        if (message.verificationType != null && Object.hasOwnProperty.call(message, "verificationType"))
            writer.uint32(/* id 4, wireType 0 =*/32).uint32(message.verificationType);
        if (message.chainId != null && Object.hasOwnProperty.call(message, "chainId"))
            writer.uint32(/* id 5, wireType 0 =*/40).uint32(message.chainId);
        if (message.protocol != null && Object.hasOwnProperty.call(message, "protocol"))
            writer.uint32(/* id 7, wireType 0 =*/56).int32(message.protocol);
        return writer;
    };

    /**
     * Encodes the specified VerificationAddAddressBody message, length delimited. Does not implicitly {@link VerificationAddAddressBody.verify|verify} messages.
     * @function encodeDelimited
     * @memberof VerificationAddAddressBody
     * @static
     * @param {IVerificationAddAddressBody} message VerificationAddAddressBody message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    VerificationAddAddressBody.encodeDelimited = function encodeDelimited(message, writer) {
        return this.encode(message, writer).ldelim();
    };

    /**
     * Decodes a VerificationAddAddressBody message from the specified reader or buffer.
     * @function decode
     * @memberof VerificationAddAddressBody
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @param {number} [length] Message length if known beforehand
     * @returns {VerificationAddAddressBody} VerificationAddAddressBody
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    VerificationAddAddressBody.decode = function decode(reader, length) {
        if (!(reader instanceof $Reader))
            reader = $Reader.create(reader);
        var end = length === undefined ? reader.len : reader.pos + length, message = new $root.VerificationAddAddressBody();
        while (reader.pos < end) {
            var tag = reader.uint32();
            switch (tag >>> 3) {
            case 1: {
                    message.address = reader.bytes();
                    break;
                }
            case 2: {
                    message.claimSignature = reader.bytes();
                    break;
                }
            case 3: {
                    message.blockHash = reader.bytes();
                    break;
                }
            case 4: {
                    message.verificationType = reader.uint32();
                    break;
                }
            case 5: {
                    message.chainId = reader.uint32();
                    break;
                }
            case 7: {
                    message.protocol = reader.int32();
                    break;
                }
            default:
                reader.skipType(tag & 7);
                break;
            }
        }
        return message;
    };

    /**
     * Decodes a VerificationAddAddressBody message from the specified reader or buffer, length delimited.
     * @function decodeDelimited
     * @memberof VerificationAddAddressBody
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @returns {VerificationAddAddressBody} VerificationAddAddressBody
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    VerificationAddAddressBody.decodeDelimited = function decodeDelimited(reader) {
        if (!(reader instanceof $Reader))
            reader = new $Reader(reader);
        return this.decode(reader, reader.uint32());
    };

    /**
     * Verifies a VerificationAddAddressBody message.
     * @function verify
     * @memberof VerificationAddAddressBody
     * @static
     * @param {Object.<string,*>} message Plain object to verify
     * @returns {string|null} `null` if valid, otherwise the reason why it is not
     */
    VerificationAddAddressBody.verify = function verify(message) {
        if (typeof message !== "object" || message === null)
            return "object expected";
        if (message.address != null && message.hasOwnProperty("address"))
            if (!(message.address && typeof message.address.length === "number" || $util.isString(message.address)))
                return "address: buffer expected";
        if (message.claimSignature != null && message.hasOwnProperty("claimSignature"))
            if (!(message.claimSignature && typeof message.claimSignature.length === "number" || $util.isString(message.claimSignature)))
                return "claimSignature: buffer expected";
        if (message.blockHash != null && message.hasOwnProperty("blockHash"))
            if (!(message.blockHash && typeof message.blockHash.length === "number" || $util.isString(message.blockHash)))
                return "blockHash: buffer expected";
        if (message.verificationType != null && message.hasOwnProperty("verificationType"))
            if (!$util.isInteger(message.verificationType))
                return "verificationType: integer expected";
        if (message.chainId != null && message.hasOwnProperty("chainId"))
            if (!$util.isInteger(message.chainId))
                return "chainId: integer expected";
        if (message.protocol != null && message.hasOwnProperty("protocol"))
            switch (message.protocol) {
            default:
                return "protocol: enum value expected";
            case 0:
            case 1:
                break;
            }
        return null;
    };

    /**
     * Creates a VerificationAddAddressBody message from a plain object. Also converts values to their respective internal types.
     * @function fromObject
     * @memberof VerificationAddAddressBody
     * @static
     * @param {Object.<string,*>} object Plain object
     * @returns {VerificationAddAddressBody} VerificationAddAddressBody
     */
    VerificationAddAddressBody.fromObject = function fromObject(object) {
        if (object instanceof $root.VerificationAddAddressBody)
            return object;
        var message = new $root.VerificationAddAddressBody();
        if (object.address != null)
            if (typeof object.address === "string")
                $util.base64.decode(object.address, message.address = $util.newBuffer($util.base64.length(object.address)), 0);
            else if (object.address.length >= 0)
                message.address = object.address;
        if (object.claimSignature != null)
            if (typeof object.claimSignature === "string")
                $util.base64.decode(object.claimSignature, message.claimSignature = $util.newBuffer($util.base64.length(object.claimSignature)), 0);
            else if (object.claimSignature.length >= 0)
                message.claimSignature = object.claimSignature;
        if (object.blockHash != null)
            if (typeof object.blockHash === "string")
                $util.base64.decode(object.blockHash, message.blockHash = $util.newBuffer($util.base64.length(object.blockHash)), 0);
            else if (object.blockHash.length >= 0)
                message.blockHash = object.blockHash;
        if (object.verificationType != null)
            message.verificationType = object.verificationType >>> 0;
        if (object.chainId != null)
            message.chainId = object.chainId >>> 0;
        switch (object.protocol) {
        default:
            if (typeof object.protocol === "number") {
                message.protocol = object.protocol;
                break;
            }
            break;
        case "PROTOCOL_ETHEREUM":
        case 0:
            message.protocol = 0;
            break;
        case "PROTOCOL_SOLANA":
        case 1:
            message.protocol = 1;
            break;
        }
        return message;
    };

    /**
     * Creates a plain object from a VerificationAddAddressBody message. Also converts values to other types if specified.
     * @function toObject
     * @memberof VerificationAddAddressBody
     * @static
     * @param {VerificationAddAddressBody} message VerificationAddAddressBody
     * @param {$protobuf.IConversionOptions} [options] Conversion options
     * @returns {Object.<string,*>} Plain object
     */
    VerificationAddAddressBody.toObject = function toObject(message, options) {
        if (!options)
            options = {};
        var object = {};
        if (options.defaults) {
            if (options.bytes === String)
                object.address = "";
            else {
                object.address = [];
                if (options.bytes !== Array)
                    object.address = $util.newBuffer(object.address);
            }
            if (options.bytes === String)
                object.claimSignature = "";
            else {
                object.claimSignature = [];
                if (options.bytes !== Array)
                    object.claimSignature = $util.newBuffer(object.claimSignature);
            }
            if (options.bytes === String)
                object.blockHash = "";
            else {
                object.blockHash = [];
                if (options.bytes !== Array)
                    object.blockHash = $util.newBuffer(object.blockHash);
            }
            object.verificationType = 0;
            object.chainId = 0;
            object.protocol = options.enums === String ? "PROTOCOL_ETHEREUM" : 0;
        }
        if (message.address != null && message.hasOwnProperty("address"))
            object.address = options.bytes === String ? $util.base64.encode(message.address, 0, message.address.length) : options.bytes === Array ? Array.prototype.slice.call(message.address) : message.address;
        if (message.claimSignature != null && message.hasOwnProperty("claimSignature"))
            object.claimSignature = options.bytes === String ? $util.base64.encode(message.claimSignature, 0, message.claimSignature.length) : options.bytes === Array ? Array.prototype.slice.call(message.claimSignature) : message.claimSignature;
        if (message.blockHash != null && message.hasOwnProperty("blockHash"))
            object.blockHash = options.bytes === String ? $util.base64.encode(message.blockHash, 0, message.blockHash.length) : options.bytes === Array ? Array.prototype.slice.call(message.blockHash) : message.blockHash;
        if (message.verificationType != null && message.hasOwnProperty("verificationType"))
            object.verificationType = message.verificationType;
        if (message.chainId != null && message.hasOwnProperty("chainId"))
            object.chainId = message.chainId;
        if (message.protocol != null && message.hasOwnProperty("protocol"))
            object.protocol = options.enums === String ? $root.Protocol[message.protocol] === undefined ? message.protocol : $root.Protocol[message.protocol] : message.protocol;
        return object;
    };

    /**
     * Converts this VerificationAddAddressBody to JSON.
     * @function toJSON
     * @memberof VerificationAddAddressBody
     * @instance
     * @returns {Object.<string,*>} JSON object
     */
    VerificationAddAddressBody.prototype.toJSON = function toJSON() {
        return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
    };

    /**
     * Gets the default type url for VerificationAddAddressBody
     * @function getTypeUrl
     * @memberof VerificationAddAddressBody
     * @static
     * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
     * @returns {string} The default type url
     */
    VerificationAddAddressBody.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
        if (typeUrlPrefix === undefined) {
            typeUrlPrefix = "type.googleapis.com";
        }
        return typeUrlPrefix + "/VerificationAddAddressBody";
    };

    return VerificationAddAddressBody;
})();

$root.VerificationRemoveBody = (function() {

    /**
     * Properties of a VerificationRemoveBody.
     * @exports IVerificationRemoveBody
     * @interface IVerificationRemoveBody
     * @property {Uint8Array|null} [address] VerificationRemoveBody address
     * @property {Protocol|null} [protocol] VerificationRemoveBody protocol
     */

    /**
     * Constructs a new VerificationRemoveBody.
     * @exports VerificationRemoveBody
     * @classdesc Removes a Verification of a given protocol
     * @implements IVerificationRemoveBody
     * @constructor
     * @param {IVerificationRemoveBody=} [properties] Properties to set
     */
    function VerificationRemoveBody(properties) {
        if (properties)
            for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                if (properties[keys[i]] != null)
                    this[keys[i]] = properties[keys[i]];
    }

    /**
     * VerificationRemoveBody address.
     * @member {Uint8Array} address
     * @memberof VerificationRemoveBody
     * @instance
     */
    VerificationRemoveBody.prototype.address = $util.newBuffer([]);

    /**
     * VerificationRemoveBody protocol.
     * @member {Protocol} protocol
     * @memberof VerificationRemoveBody
     * @instance
     */
    VerificationRemoveBody.prototype.protocol = 0;

    /**
     * Creates a new VerificationRemoveBody instance using the specified properties.
     * @function create
     * @memberof VerificationRemoveBody
     * @static
     * @param {IVerificationRemoveBody=} [properties] Properties to set
     * @returns {VerificationRemoveBody} VerificationRemoveBody instance
     */
    VerificationRemoveBody.create = function create(properties) {
        return new VerificationRemoveBody(properties);
    };

    /**
     * Encodes the specified VerificationRemoveBody message. Does not implicitly {@link VerificationRemoveBody.verify|verify} messages.
     * @function encode
     * @memberof VerificationRemoveBody
     * @static
     * @param {IVerificationRemoveBody} message VerificationRemoveBody message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    VerificationRemoveBody.encode = function encode(message, writer) {
        if (!writer)
            writer = $Writer.create();
        if (message.address != null && Object.hasOwnProperty.call(message, "address"))
            writer.uint32(/* id 1, wireType 2 =*/10).bytes(message.address);
        if (message.protocol != null && Object.hasOwnProperty.call(message, "protocol"))
            writer.uint32(/* id 2, wireType 0 =*/16).int32(message.protocol);
        return writer;
    };

    /**
     * Encodes the specified VerificationRemoveBody message, length delimited. Does not implicitly {@link VerificationRemoveBody.verify|verify} messages.
     * @function encodeDelimited
     * @memberof VerificationRemoveBody
     * @static
     * @param {IVerificationRemoveBody} message VerificationRemoveBody message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    VerificationRemoveBody.encodeDelimited = function encodeDelimited(message, writer) {
        return this.encode(message, writer).ldelim();
    };

    /**
     * Decodes a VerificationRemoveBody message from the specified reader or buffer.
     * @function decode
     * @memberof VerificationRemoveBody
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @param {number} [length] Message length if known beforehand
     * @returns {VerificationRemoveBody} VerificationRemoveBody
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    VerificationRemoveBody.decode = function decode(reader, length) {
        if (!(reader instanceof $Reader))
            reader = $Reader.create(reader);
        var end = length === undefined ? reader.len : reader.pos + length, message = new $root.VerificationRemoveBody();
        while (reader.pos < end) {
            var tag = reader.uint32();
            switch (tag >>> 3) {
            case 1: {
                    message.address = reader.bytes();
                    break;
                }
            case 2: {
                    message.protocol = reader.int32();
                    break;
                }
            default:
                reader.skipType(tag & 7);
                break;
            }
        }
        return message;
    };

    /**
     * Decodes a VerificationRemoveBody message from the specified reader or buffer, length delimited.
     * @function decodeDelimited
     * @memberof VerificationRemoveBody
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @returns {VerificationRemoveBody} VerificationRemoveBody
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    VerificationRemoveBody.decodeDelimited = function decodeDelimited(reader) {
        if (!(reader instanceof $Reader))
            reader = new $Reader(reader);
        return this.decode(reader, reader.uint32());
    };

    /**
     * Verifies a VerificationRemoveBody message.
     * @function verify
     * @memberof VerificationRemoveBody
     * @static
     * @param {Object.<string,*>} message Plain object to verify
     * @returns {string|null} `null` if valid, otherwise the reason why it is not
     */
    VerificationRemoveBody.verify = function verify(message) {
        if (typeof message !== "object" || message === null)
            return "object expected";
        if (message.address != null && message.hasOwnProperty("address"))
            if (!(message.address && typeof message.address.length === "number" || $util.isString(message.address)))
                return "address: buffer expected";
        if (message.protocol != null && message.hasOwnProperty("protocol"))
            switch (message.protocol) {
            default:
                return "protocol: enum value expected";
            case 0:
            case 1:
                break;
            }
        return null;
    };

    /**
     * Creates a VerificationRemoveBody message from a plain object. Also converts values to their respective internal types.
     * @function fromObject
     * @memberof VerificationRemoveBody
     * @static
     * @param {Object.<string,*>} object Plain object
     * @returns {VerificationRemoveBody} VerificationRemoveBody
     */
    VerificationRemoveBody.fromObject = function fromObject(object) {
        if (object instanceof $root.VerificationRemoveBody)
            return object;
        var message = new $root.VerificationRemoveBody();
        if (object.address != null)
            if (typeof object.address === "string")
                $util.base64.decode(object.address, message.address = $util.newBuffer($util.base64.length(object.address)), 0);
            else if (object.address.length >= 0)
                message.address = object.address;
        switch (object.protocol) {
        default:
            if (typeof object.protocol === "number") {
                message.protocol = object.protocol;
                break;
            }
            break;
        case "PROTOCOL_ETHEREUM":
        case 0:
            message.protocol = 0;
            break;
        case "PROTOCOL_SOLANA":
        case 1:
            message.protocol = 1;
            break;
        }
        return message;
    };

    /**
     * Creates a plain object from a VerificationRemoveBody message. Also converts values to other types if specified.
     * @function toObject
     * @memberof VerificationRemoveBody
     * @static
     * @param {VerificationRemoveBody} message VerificationRemoveBody
     * @param {$protobuf.IConversionOptions} [options] Conversion options
     * @returns {Object.<string,*>} Plain object
     */
    VerificationRemoveBody.toObject = function toObject(message, options) {
        if (!options)
            options = {};
        var object = {};
        if (options.defaults) {
            if (options.bytes === String)
                object.address = "";
            else {
                object.address = [];
                if (options.bytes !== Array)
                    object.address = $util.newBuffer(object.address);
            }
            object.protocol = options.enums === String ? "PROTOCOL_ETHEREUM" : 0;
        }
        if (message.address != null && message.hasOwnProperty("address"))
            object.address = options.bytes === String ? $util.base64.encode(message.address, 0, message.address.length) : options.bytes === Array ? Array.prototype.slice.call(message.address) : message.address;
        if (message.protocol != null && message.hasOwnProperty("protocol"))
            object.protocol = options.enums === String ? $root.Protocol[message.protocol] === undefined ? message.protocol : $root.Protocol[message.protocol] : message.protocol;
        return object;
    };

    /**
     * Converts this VerificationRemoveBody to JSON.
     * @function toJSON
     * @memberof VerificationRemoveBody
     * @instance
     * @returns {Object.<string,*>} JSON object
     */
    VerificationRemoveBody.prototype.toJSON = function toJSON() {
        return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
    };

    /**
     * Gets the default type url for VerificationRemoveBody
     * @function getTypeUrl
     * @memberof VerificationRemoveBody
     * @static
     * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
     * @returns {string} The default type url
     */
    VerificationRemoveBody.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
        if (typeUrlPrefix === undefined) {
            typeUrlPrefix = "type.googleapis.com";
        }
        return typeUrlPrefix + "/VerificationRemoveBody";
    };

    return VerificationRemoveBody;
})();

$root.LinkBody = (function() {

    /**
     * Properties of a LinkBody.
     * @exports ILinkBody
     * @interface ILinkBody
     * @property {string|null} [type] LinkBody type
     * @property {number|null} [displayTimestamp] LinkBody displayTimestamp
     * @property {number|Long|null} [targetFid] LinkBody targetFid
     */

    /**
     * Constructs a new LinkBody.
     * @exports LinkBody
     * @classdesc Adds or removes a Link
     * @implements ILinkBody
     * @constructor
     * @param {ILinkBody=} [properties] Properties to set
     */
    function LinkBody(properties) {
        if (properties)
            for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                if (properties[keys[i]] != null)
                    this[keys[i]] = properties[keys[i]];
    }

    /**
     * LinkBody type.
     * @member {string} type
     * @memberof LinkBody
     * @instance
     */
    LinkBody.prototype.type = "";

    /**
     * LinkBody displayTimestamp.
     * @member {number|null|undefined} displayTimestamp
     * @memberof LinkBody
     * @instance
     */
    LinkBody.prototype.displayTimestamp = null;

    /**
     * LinkBody targetFid.
     * @member {number|Long|null|undefined} targetFid
     * @memberof LinkBody
     * @instance
     */
    LinkBody.prototype.targetFid = null;

    // OneOf field names bound to virtual getters and setters
    var $oneOfFields;

    // Virtual OneOf for proto3 optional field
    Object.defineProperty(LinkBody.prototype, "_displayTimestamp", {
        get: $util.oneOfGetter($oneOfFields = ["displayTimestamp"]),
        set: $util.oneOfSetter($oneOfFields)
    });

    /**
     * LinkBody target.
     * @member {"targetFid"|undefined} target
     * @memberof LinkBody
     * @instance
     */
    Object.defineProperty(LinkBody.prototype, "target", {
        get: $util.oneOfGetter($oneOfFields = ["targetFid"]),
        set: $util.oneOfSetter($oneOfFields)
    });

    /**
     * Creates a new LinkBody instance using the specified properties.
     * @function create
     * @memberof LinkBody
     * @static
     * @param {ILinkBody=} [properties] Properties to set
     * @returns {LinkBody} LinkBody instance
     */
    LinkBody.create = function create(properties) {
        return new LinkBody(properties);
    };

    /**
     * Encodes the specified LinkBody message. Does not implicitly {@link LinkBody.verify|verify} messages.
     * @function encode
     * @memberof LinkBody
     * @static
     * @param {ILinkBody} message LinkBody message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    LinkBody.encode = function encode(message, writer) {
        if (!writer)
            writer = $Writer.create();
        if (message.type != null && Object.hasOwnProperty.call(message, "type"))
            writer.uint32(/* id 1, wireType 2 =*/10).string(message.type);
        if (message.displayTimestamp != null && Object.hasOwnProperty.call(message, "displayTimestamp"))
            writer.uint32(/* id 2, wireType 0 =*/16).uint32(message.displayTimestamp);
        if (message.targetFid != null && Object.hasOwnProperty.call(message, "targetFid"))
            writer.uint32(/* id 3, wireType 0 =*/24).uint64(message.targetFid);
        return writer;
    };

    /**
     * Encodes the specified LinkBody message, length delimited. Does not implicitly {@link LinkBody.verify|verify} messages.
     * @function encodeDelimited
     * @memberof LinkBody
     * @static
     * @param {ILinkBody} message LinkBody message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    LinkBody.encodeDelimited = function encodeDelimited(message, writer) {
        return this.encode(message, writer).ldelim();
    };

    /**
     * Decodes a LinkBody message from the specified reader or buffer.
     * @function decode
     * @memberof LinkBody
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @param {number} [length] Message length if known beforehand
     * @returns {LinkBody} LinkBody
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    LinkBody.decode = function decode(reader, length) {
        if (!(reader instanceof $Reader))
            reader = $Reader.create(reader);
        var end = length === undefined ? reader.len : reader.pos + length, message = new $root.LinkBody();
        while (reader.pos < end) {
            var tag = reader.uint32();
            switch (tag >>> 3) {
            case 1: {
                    message.type = reader.string();
                    break;
                }
            case 2: {
                    message.displayTimestamp = reader.uint32();
                    break;
                }
            case 3: {
                    message.targetFid = reader.uint64();
                    break;
                }
            default:
                reader.skipType(tag & 7);
                break;
            }
        }
        return message;
    };

    /**
     * Decodes a LinkBody message from the specified reader or buffer, length delimited.
     * @function decodeDelimited
     * @memberof LinkBody
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @returns {LinkBody} LinkBody
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    LinkBody.decodeDelimited = function decodeDelimited(reader) {
        if (!(reader instanceof $Reader))
            reader = new $Reader(reader);
        return this.decode(reader, reader.uint32());
    };

    /**
     * Verifies a LinkBody message.
     * @function verify
     * @memberof LinkBody
     * @static
     * @param {Object.<string,*>} message Plain object to verify
     * @returns {string|null} `null` if valid, otherwise the reason why it is not
     */
    LinkBody.verify = function verify(message) {
        if (typeof message !== "object" || message === null)
            return "object expected";
        var properties = {};
        if (message.type != null && message.hasOwnProperty("type"))
            if (!$util.isString(message.type))
                return "type: string expected";
        if (message.displayTimestamp != null && message.hasOwnProperty("displayTimestamp")) {
            properties._displayTimestamp = 1;
            if (!$util.isInteger(message.displayTimestamp))
                return "displayTimestamp: integer expected";
        }
        if (message.targetFid != null && message.hasOwnProperty("targetFid")) {
            properties.target = 1;
            if (!$util.isInteger(message.targetFid) && !(message.targetFid && $util.isInteger(message.targetFid.low) && $util.isInteger(message.targetFid.high)))
                return "targetFid: integer|Long expected";
        }
        return null;
    };

    /**
     * Creates a LinkBody message from a plain object. Also converts values to their respective internal types.
     * @function fromObject
     * @memberof LinkBody
     * @static
     * @param {Object.<string,*>} object Plain object
     * @returns {LinkBody} LinkBody
     */
    LinkBody.fromObject = function fromObject(object) {
        if (object instanceof $root.LinkBody)
            return object;
        var message = new $root.LinkBody();
        if (object.type != null)
            message.type = String(object.type);
        if (object.displayTimestamp != null)
            message.displayTimestamp = object.displayTimestamp >>> 0;
        if (object.targetFid != null)
            if ($util.Long)
                (message.targetFid = $util.Long.fromValue(object.targetFid)).unsigned = true;
            else if (typeof object.targetFid === "string")
                message.targetFid = parseInt(object.targetFid, 10);
            else if (typeof object.targetFid === "number")
                message.targetFid = object.targetFid;
            else if (typeof object.targetFid === "object")
                message.targetFid = new $util.LongBits(object.targetFid.low >>> 0, object.targetFid.high >>> 0).toNumber(true);
        return message;
    };

    /**
     * Creates a plain object from a LinkBody message. Also converts values to other types if specified.
     * @function toObject
     * @memberof LinkBody
     * @static
     * @param {LinkBody} message LinkBody
     * @param {$protobuf.IConversionOptions} [options] Conversion options
     * @returns {Object.<string,*>} Plain object
     */
    LinkBody.toObject = function toObject(message, options) {
        if (!options)
            options = {};
        var object = {};
        if (options.defaults)
            object.type = "";
        if (message.type != null && message.hasOwnProperty("type"))
            object.type = message.type;
        if (message.displayTimestamp != null && message.hasOwnProperty("displayTimestamp")) {
            object.displayTimestamp = message.displayTimestamp;
            if (options.oneofs)
                object._displayTimestamp = "displayTimestamp";
        }
        if (message.targetFid != null && message.hasOwnProperty("targetFid")) {
            if (typeof message.targetFid === "number")
                object.targetFid = options.longs === String ? String(message.targetFid) : message.targetFid;
            else
                object.targetFid = options.longs === String ? $util.Long.prototype.toString.call(message.targetFid) : options.longs === Number ? new $util.LongBits(message.targetFid.low >>> 0, message.targetFid.high >>> 0).toNumber(true) : message.targetFid;
            if (options.oneofs)
                object.target = "targetFid";
        }
        return object;
    };

    /**
     * Converts this LinkBody to JSON.
     * @function toJSON
     * @memberof LinkBody
     * @instance
     * @returns {Object.<string,*>} JSON object
     */
    LinkBody.prototype.toJSON = function toJSON() {
        return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
    };

    /**
     * Gets the default type url for LinkBody
     * @function getTypeUrl
     * @memberof LinkBody
     * @static
     * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
     * @returns {string} The default type url
     */
    LinkBody.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
        if (typeUrlPrefix === undefined) {
            typeUrlPrefix = "type.googleapis.com";
        }
        return typeUrlPrefix + "/LinkBody";
    };

    return LinkBody;
})();

$root.LinkCompactStateBody = (function() {

    /**
     * Properties of a LinkCompactStateBody.
     * @exports ILinkCompactStateBody
     * @interface ILinkCompactStateBody
     * @property {string|null} [type] LinkCompactStateBody type
     * @property {Array.<number|Long>|null} [targetFids] LinkCompactStateBody targetFids
     */

    /**
     * Constructs a new LinkCompactStateBody.
     * @exports LinkCompactStateBody
     * @classdesc A Compaction message for the Link Store
     * @implements ILinkCompactStateBody
     * @constructor
     * @param {ILinkCompactStateBody=} [properties] Properties to set
     */
    function LinkCompactStateBody(properties) {
        this.targetFids = [];
        if (properties)
            for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                if (properties[keys[i]] != null)
                    this[keys[i]] = properties[keys[i]];
    }

    /**
     * LinkCompactStateBody type.
     * @member {string} type
     * @memberof LinkCompactStateBody
     * @instance
     */
    LinkCompactStateBody.prototype.type = "";

    /**
     * LinkCompactStateBody targetFids.
     * @member {Array.<number|Long>} targetFids
     * @memberof LinkCompactStateBody
     * @instance
     */
    LinkCompactStateBody.prototype.targetFids = $util.emptyArray;

    /**
     * Creates a new LinkCompactStateBody instance using the specified properties.
     * @function create
     * @memberof LinkCompactStateBody
     * @static
     * @param {ILinkCompactStateBody=} [properties] Properties to set
     * @returns {LinkCompactStateBody} LinkCompactStateBody instance
     */
    LinkCompactStateBody.create = function create(properties) {
        return new LinkCompactStateBody(properties);
    };

    /**
     * Encodes the specified LinkCompactStateBody message. Does not implicitly {@link LinkCompactStateBody.verify|verify} messages.
     * @function encode
     * @memberof LinkCompactStateBody
     * @static
     * @param {ILinkCompactStateBody} message LinkCompactStateBody message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    LinkCompactStateBody.encode = function encode(message, writer) {
        if (!writer)
            writer = $Writer.create();
        if (message.type != null && Object.hasOwnProperty.call(message, "type"))
            writer.uint32(/* id 1, wireType 2 =*/10).string(message.type);
        if (message.targetFids != null && message.targetFids.length) {
            writer.uint32(/* id 2, wireType 2 =*/18).fork();
            for (var i = 0; i < message.targetFids.length; ++i)
                writer.uint64(message.targetFids[i]);
            writer.ldelim();
        }
        return writer;
    };

    /**
     * Encodes the specified LinkCompactStateBody message, length delimited. Does not implicitly {@link LinkCompactStateBody.verify|verify} messages.
     * @function encodeDelimited
     * @memberof LinkCompactStateBody
     * @static
     * @param {ILinkCompactStateBody} message LinkCompactStateBody message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    LinkCompactStateBody.encodeDelimited = function encodeDelimited(message, writer) {
        return this.encode(message, writer).ldelim();
    };

    /**
     * Decodes a LinkCompactStateBody message from the specified reader or buffer.
     * @function decode
     * @memberof LinkCompactStateBody
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @param {number} [length] Message length if known beforehand
     * @returns {LinkCompactStateBody} LinkCompactStateBody
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    LinkCompactStateBody.decode = function decode(reader, length) {
        if (!(reader instanceof $Reader))
            reader = $Reader.create(reader);
        var end = length === undefined ? reader.len : reader.pos + length, message = new $root.LinkCompactStateBody();
        while (reader.pos < end) {
            var tag = reader.uint32();
            switch (tag >>> 3) {
            case 1: {
                    message.type = reader.string();
                    break;
                }
            case 2: {
                    if (!(message.targetFids && message.targetFids.length))
                        message.targetFids = [];
                    if ((tag & 7) === 2) {
                        var end2 = reader.uint32() + reader.pos;
                        while (reader.pos < end2)
                            message.targetFids.push(reader.uint64());
                    } else
                        message.targetFids.push(reader.uint64());
                    break;
                }
            default:
                reader.skipType(tag & 7);
                break;
            }
        }
        return message;
    };

    /**
     * Decodes a LinkCompactStateBody message from the specified reader or buffer, length delimited.
     * @function decodeDelimited
     * @memberof LinkCompactStateBody
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @returns {LinkCompactStateBody} LinkCompactStateBody
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    LinkCompactStateBody.decodeDelimited = function decodeDelimited(reader) {
        if (!(reader instanceof $Reader))
            reader = new $Reader(reader);
        return this.decode(reader, reader.uint32());
    };

    /**
     * Verifies a LinkCompactStateBody message.
     * @function verify
     * @memberof LinkCompactStateBody
     * @static
     * @param {Object.<string,*>} message Plain object to verify
     * @returns {string|null} `null` if valid, otherwise the reason why it is not
     */
    LinkCompactStateBody.verify = function verify(message) {
        if (typeof message !== "object" || message === null)
            return "object expected";
        if (message.type != null && message.hasOwnProperty("type"))
            if (!$util.isString(message.type))
                return "type: string expected";
        if (message.targetFids != null && message.hasOwnProperty("targetFids")) {
            if (!Array.isArray(message.targetFids))
                return "targetFids: array expected";
            for (var i = 0; i < message.targetFids.length; ++i)
                if (!$util.isInteger(message.targetFids[i]) && !(message.targetFids[i] && $util.isInteger(message.targetFids[i].low) && $util.isInteger(message.targetFids[i].high)))
                    return "targetFids: integer|Long[] expected";
        }
        return null;
    };

    /**
     * Creates a LinkCompactStateBody message from a plain object. Also converts values to their respective internal types.
     * @function fromObject
     * @memberof LinkCompactStateBody
     * @static
     * @param {Object.<string,*>} object Plain object
     * @returns {LinkCompactStateBody} LinkCompactStateBody
     */
    LinkCompactStateBody.fromObject = function fromObject(object) {
        if (object instanceof $root.LinkCompactStateBody)
            return object;
        var message = new $root.LinkCompactStateBody();
        if (object.type != null)
            message.type = String(object.type);
        if (object.targetFids) {
            if (!Array.isArray(object.targetFids))
                throw TypeError(".LinkCompactStateBody.targetFids: array expected");
            message.targetFids = [];
            for (var i = 0; i < object.targetFids.length; ++i)
                if ($util.Long)
                    (message.targetFids[i] = $util.Long.fromValue(object.targetFids[i])).unsigned = true;
                else if (typeof object.targetFids[i] === "string")
                    message.targetFids[i] = parseInt(object.targetFids[i], 10);
                else if (typeof object.targetFids[i] === "number")
                    message.targetFids[i] = object.targetFids[i];
                else if (typeof object.targetFids[i] === "object")
                    message.targetFids[i] = new $util.LongBits(object.targetFids[i].low >>> 0, object.targetFids[i].high >>> 0).toNumber(true);
        }
        return message;
    };

    /**
     * Creates a plain object from a LinkCompactStateBody message. Also converts values to other types if specified.
     * @function toObject
     * @memberof LinkCompactStateBody
     * @static
     * @param {LinkCompactStateBody} message LinkCompactStateBody
     * @param {$protobuf.IConversionOptions} [options] Conversion options
     * @returns {Object.<string,*>} Plain object
     */
    LinkCompactStateBody.toObject = function toObject(message, options) {
        if (!options)
            options = {};
        var object = {};
        if (options.arrays || options.defaults)
            object.targetFids = [];
        if (options.defaults)
            object.type = "";
        if (message.type != null && message.hasOwnProperty("type"))
            object.type = message.type;
        if (message.targetFids && message.targetFids.length) {
            object.targetFids = [];
            for (var j = 0; j < message.targetFids.length; ++j)
                if (typeof message.targetFids[j] === "number")
                    object.targetFids[j] = options.longs === String ? String(message.targetFids[j]) : message.targetFids[j];
                else
                    object.targetFids[j] = options.longs === String ? $util.Long.prototype.toString.call(message.targetFids[j]) : options.longs === Number ? new $util.LongBits(message.targetFids[j].low >>> 0, message.targetFids[j].high >>> 0).toNumber(true) : message.targetFids[j];
        }
        return object;
    };

    /**
     * Converts this LinkCompactStateBody to JSON.
     * @function toJSON
     * @memberof LinkCompactStateBody
     * @instance
     * @returns {Object.<string,*>} JSON object
     */
    LinkCompactStateBody.prototype.toJSON = function toJSON() {
        return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
    };

    /**
     * Gets the default type url for LinkCompactStateBody
     * @function getTypeUrl
     * @memberof LinkCompactStateBody
     * @static
     * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
     * @returns {string} The default type url
     */
    LinkCompactStateBody.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
        if (typeUrlPrefix === undefined) {
            typeUrlPrefix = "type.googleapis.com";
        }
        return typeUrlPrefix + "/LinkCompactStateBody";
    };

    return LinkCompactStateBody;
})();

$root.FrameActionBody = (function() {

    /**
     * Properties of a FrameActionBody.
     * @exports IFrameActionBody
     * @interface IFrameActionBody
     * @property {Uint8Array|null} [url] FrameActionBody url
     * @property {number|null} [buttonIndex] FrameActionBody buttonIndex
     * @property {ICastId|null} [castId] FrameActionBody castId
     * @property {Uint8Array|null} [inputText] FrameActionBody inputText
     * @property {Uint8Array|null} [state] FrameActionBody state
     * @property {Uint8Array|null} [transactionId] FrameActionBody transactionId
     * @property {Uint8Array|null} [address] FrameActionBody address
     */

    /**
     * Constructs a new FrameActionBody.
     * @exports FrameActionBody
     * @classdesc A Farcaster Frame action
     * @implements IFrameActionBody
     * @constructor
     * @param {IFrameActionBody=} [properties] Properties to set
     */
    function FrameActionBody(properties) {
        if (properties)
            for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                if (properties[keys[i]] != null)
                    this[keys[i]] = properties[keys[i]];
    }

    /**
     * FrameActionBody url.
     * @member {Uint8Array} url
     * @memberof FrameActionBody
     * @instance
     */
    FrameActionBody.prototype.url = $util.newBuffer([]);

    /**
     * FrameActionBody buttonIndex.
     * @member {number} buttonIndex
     * @memberof FrameActionBody
     * @instance
     */
    FrameActionBody.prototype.buttonIndex = 0;

    /**
     * FrameActionBody castId.
     * @member {ICastId|null|undefined} castId
     * @memberof FrameActionBody
     * @instance
     */
    FrameActionBody.prototype.castId = null;

    /**
     * FrameActionBody inputText.
     * @member {Uint8Array} inputText
     * @memberof FrameActionBody
     * @instance
     */
    FrameActionBody.prototype.inputText = $util.newBuffer([]);

    /**
     * FrameActionBody state.
     * @member {Uint8Array} state
     * @memberof FrameActionBody
     * @instance
     */
    FrameActionBody.prototype.state = $util.newBuffer([]);

    /**
     * FrameActionBody transactionId.
     * @member {Uint8Array} transactionId
     * @memberof FrameActionBody
     * @instance
     */
    FrameActionBody.prototype.transactionId = $util.newBuffer([]);

    /**
     * FrameActionBody address.
     * @member {Uint8Array} address
     * @memberof FrameActionBody
     * @instance
     */
    FrameActionBody.prototype.address = $util.newBuffer([]);

    /**
     * Creates a new FrameActionBody instance using the specified properties.
     * @function create
     * @memberof FrameActionBody
     * @static
     * @param {IFrameActionBody=} [properties] Properties to set
     * @returns {FrameActionBody} FrameActionBody instance
     */
    FrameActionBody.create = function create(properties) {
        return new FrameActionBody(properties);
    };

    /**
     * Encodes the specified FrameActionBody message. Does not implicitly {@link FrameActionBody.verify|verify} messages.
     * @function encode
     * @memberof FrameActionBody
     * @static
     * @param {IFrameActionBody} message FrameActionBody message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    FrameActionBody.encode = function encode(message, writer) {
        if (!writer)
            writer = $Writer.create();
        if (message.url != null && Object.hasOwnProperty.call(message, "url"))
            writer.uint32(/* id 1, wireType 2 =*/10).bytes(message.url);
        if (message.buttonIndex != null && Object.hasOwnProperty.call(message, "buttonIndex"))
            writer.uint32(/* id 2, wireType 0 =*/16).uint32(message.buttonIndex);
        if (message.castId != null && Object.hasOwnProperty.call(message, "castId"))
            $root.CastId.encode(message.castId, writer.uint32(/* id 3, wireType 2 =*/26).fork()).ldelim();
        if (message.inputText != null && Object.hasOwnProperty.call(message, "inputText"))
            writer.uint32(/* id 4, wireType 2 =*/34).bytes(message.inputText);
        if (message.state != null && Object.hasOwnProperty.call(message, "state"))
            writer.uint32(/* id 5, wireType 2 =*/42).bytes(message.state);
        if (message.transactionId != null && Object.hasOwnProperty.call(message, "transactionId"))
            writer.uint32(/* id 6, wireType 2 =*/50).bytes(message.transactionId);
        if (message.address != null && Object.hasOwnProperty.call(message, "address"))
            writer.uint32(/* id 7, wireType 2 =*/58).bytes(message.address);
        return writer;
    };

    /**
     * Encodes the specified FrameActionBody message, length delimited. Does not implicitly {@link FrameActionBody.verify|verify} messages.
     * @function encodeDelimited
     * @memberof FrameActionBody
     * @static
     * @param {IFrameActionBody} message FrameActionBody message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    FrameActionBody.encodeDelimited = function encodeDelimited(message, writer) {
        return this.encode(message, writer).ldelim();
    };

    /**
     * Decodes a FrameActionBody message from the specified reader or buffer.
     * @function decode
     * @memberof FrameActionBody
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @param {number} [length] Message length if known beforehand
     * @returns {FrameActionBody} FrameActionBody
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    FrameActionBody.decode = function decode(reader, length) {
        if (!(reader instanceof $Reader))
            reader = $Reader.create(reader);
        var end = length === undefined ? reader.len : reader.pos + length, message = new $root.FrameActionBody();
        while (reader.pos < end) {
            var tag = reader.uint32();
            switch (tag >>> 3) {
            case 1: {
                    message.url = reader.bytes();
                    break;
                }
            case 2: {
                    message.buttonIndex = reader.uint32();
                    break;
                }
            case 3: {
                    message.castId = $root.CastId.decode(reader, reader.uint32());
                    break;
                }
            case 4: {
                    message.inputText = reader.bytes();
                    break;
                }
            case 5: {
                    message.state = reader.bytes();
                    break;
                }
            case 6: {
                    message.transactionId = reader.bytes();
                    break;
                }
            case 7: {
                    message.address = reader.bytes();
                    break;
                }
            default:
                reader.skipType(tag & 7);
                break;
            }
        }
        return message;
    };

    /**
     * Decodes a FrameActionBody message from the specified reader or buffer, length delimited.
     * @function decodeDelimited
     * @memberof FrameActionBody
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @returns {FrameActionBody} FrameActionBody
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    FrameActionBody.decodeDelimited = function decodeDelimited(reader) {
        if (!(reader instanceof $Reader))
            reader = new $Reader(reader);
        return this.decode(reader, reader.uint32());
    };

    /**
     * Verifies a FrameActionBody message.
     * @function verify
     * @memberof FrameActionBody
     * @static
     * @param {Object.<string,*>} message Plain object to verify
     * @returns {string|null} `null` if valid, otherwise the reason why it is not
     */
    FrameActionBody.verify = function verify(message) {
        if (typeof message !== "object" || message === null)
            return "object expected";
        if (message.url != null && message.hasOwnProperty("url"))
            if (!(message.url && typeof message.url.length === "number" || $util.isString(message.url)))
                return "url: buffer expected";
        if (message.buttonIndex != null && message.hasOwnProperty("buttonIndex"))
            if (!$util.isInteger(message.buttonIndex))
                return "buttonIndex: integer expected";
        if (message.castId != null && message.hasOwnProperty("castId")) {
            var error = $root.CastId.verify(message.castId);
            if (error)
                return "castId." + error;
        }
        if (message.inputText != null && message.hasOwnProperty("inputText"))
            if (!(message.inputText && typeof message.inputText.length === "number" || $util.isString(message.inputText)))
                return "inputText: buffer expected";
        if (message.state != null && message.hasOwnProperty("state"))
            if (!(message.state && typeof message.state.length === "number" || $util.isString(message.state)))
                return "state: buffer expected";
        if (message.transactionId != null && message.hasOwnProperty("transactionId"))
            if (!(message.transactionId && typeof message.transactionId.length === "number" || $util.isString(message.transactionId)))
                return "transactionId: buffer expected";
        if (message.address != null && message.hasOwnProperty("address"))
            if (!(message.address && typeof message.address.length === "number" || $util.isString(message.address)))
                return "address: buffer expected";
        return null;
    };

    /**
     * Creates a FrameActionBody message from a plain object. Also converts values to their respective internal types.
     * @function fromObject
     * @memberof FrameActionBody
     * @static
     * @param {Object.<string,*>} object Plain object
     * @returns {FrameActionBody} FrameActionBody
     */
    FrameActionBody.fromObject = function fromObject(object) {
        if (object instanceof $root.FrameActionBody)
            return object;
        var message = new $root.FrameActionBody();
        if (object.url != null)
            if (typeof object.url === "string")
                $util.base64.decode(object.url, message.url = $util.newBuffer($util.base64.length(object.url)), 0);
            else if (object.url.length >= 0)
                message.url = object.url;
        if (object.buttonIndex != null)
            message.buttonIndex = object.buttonIndex >>> 0;
        if (object.castId != null) {
            if (typeof object.castId !== "object")
                throw TypeError(".FrameActionBody.castId: object expected");
            message.castId = $root.CastId.fromObject(object.castId);
        }
        if (object.inputText != null)
            if (typeof object.inputText === "string")
                $util.base64.decode(object.inputText, message.inputText = $util.newBuffer($util.base64.length(object.inputText)), 0);
            else if (object.inputText.length >= 0)
                message.inputText = object.inputText;
        if (object.state != null)
            if (typeof object.state === "string")
                $util.base64.decode(object.state, message.state = $util.newBuffer($util.base64.length(object.state)), 0);
            else if (object.state.length >= 0)
                message.state = object.state;
        if (object.transactionId != null)
            if (typeof object.transactionId === "string")
                $util.base64.decode(object.transactionId, message.transactionId = $util.newBuffer($util.base64.length(object.transactionId)), 0);
            else if (object.transactionId.length >= 0)
                message.transactionId = object.transactionId;
        if (object.address != null)
            if (typeof object.address === "string")
                $util.base64.decode(object.address, message.address = $util.newBuffer($util.base64.length(object.address)), 0);
            else if (object.address.length >= 0)
                message.address = object.address;
        return message;
    };

    /**
     * Creates a plain object from a FrameActionBody message. Also converts values to other types if specified.
     * @function toObject
     * @memberof FrameActionBody
     * @static
     * @param {FrameActionBody} message FrameActionBody
     * @param {$protobuf.IConversionOptions} [options] Conversion options
     * @returns {Object.<string,*>} Plain object
     */
    FrameActionBody.toObject = function toObject(message, options) {
        if (!options)
            options = {};
        var object = {};
        if (options.defaults) {
            if (options.bytes === String)
                object.url = "";
            else {
                object.url = [];
                if (options.bytes !== Array)
                    object.url = $util.newBuffer(object.url);
            }
            object.buttonIndex = 0;
            object.castId = null;
            if (options.bytes === String)
                object.inputText = "";
            else {
                object.inputText = [];
                if (options.bytes !== Array)
                    object.inputText = $util.newBuffer(object.inputText);
            }
            if (options.bytes === String)
                object.state = "";
            else {
                object.state = [];
                if (options.bytes !== Array)
                    object.state = $util.newBuffer(object.state);
            }
            if (options.bytes === String)
                object.transactionId = "";
            else {
                object.transactionId = [];
                if (options.bytes !== Array)
                    object.transactionId = $util.newBuffer(object.transactionId);
            }
            if (options.bytes === String)
                object.address = "";
            else {
                object.address = [];
                if (options.bytes !== Array)
                    object.address = $util.newBuffer(object.address);
            }
        }
        if (message.url != null && message.hasOwnProperty("url"))
            object.url = options.bytes === String ? $util.base64.encode(message.url, 0, message.url.length) : options.bytes === Array ? Array.prototype.slice.call(message.url) : message.url;
        if (message.buttonIndex != null && message.hasOwnProperty("buttonIndex"))
            object.buttonIndex = message.buttonIndex;
        if (message.castId != null && message.hasOwnProperty("castId"))
            object.castId = $root.CastId.toObject(message.castId, options);
        if (message.inputText != null && message.hasOwnProperty("inputText"))
            object.inputText = options.bytes === String ? $util.base64.encode(message.inputText, 0, message.inputText.length) : options.bytes === Array ? Array.prototype.slice.call(message.inputText) : message.inputText;
        if (message.state != null && message.hasOwnProperty("state"))
            object.state = options.bytes === String ? $util.base64.encode(message.state, 0, message.state.length) : options.bytes === Array ? Array.prototype.slice.call(message.state) : message.state;
        if (message.transactionId != null && message.hasOwnProperty("transactionId"))
            object.transactionId = options.bytes === String ? $util.base64.encode(message.transactionId, 0, message.transactionId.length) : options.bytes === Array ? Array.prototype.slice.call(message.transactionId) : message.transactionId;
        if (message.address != null && message.hasOwnProperty("address"))
            object.address = options.bytes === String ? $util.base64.encode(message.address, 0, message.address.length) : options.bytes === Array ? Array.prototype.slice.call(message.address) : message.address;
        return object;
    };

    /**
     * Converts this FrameActionBody to JSON.
     * @function toJSON
     * @memberof FrameActionBody
     * @instance
     * @returns {Object.<string,*>} JSON object
     */
    FrameActionBody.prototype.toJSON = function toJSON() {
        return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
    };

    /**
     * Gets the default type url for FrameActionBody
     * @function getTypeUrl
     * @memberof FrameActionBody
     * @static
     * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
     * @returns {string} The default type url
     */
    FrameActionBody.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
        if (typeUrlPrefix === undefined) {
            typeUrlPrefix = "type.googleapis.com";
        }
        return typeUrlPrefix + "/FrameActionBody";
    };

    return FrameActionBody;
})();

module.exports = $root;
