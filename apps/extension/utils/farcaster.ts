import { blake3 } from "@noble/hashes/blake3"

import {
  FrameActionBody,
  HashScheme,
  Message,
  MessageData,
  MessageType,
  SignatureScheme
} from "~proto/message"

import { Signer } from "./signer"

type MessageBodyOptions = Pick<
  MessageData,
  | "castAddBody"
  | "castRemoveBody"
  | "reactionBody"
  | "verificationAddAddressBody"
  | "verificationRemoveBody"
  | "userDataBody"
  | "linkBody"
  | "linkCompactStateBody"
  | "usernameProofBody"
  | "frameActionBody"
>

type MessageDataOptions = Pick<MessageData, "fid" | "network"> & {
  timestamp?: number // Farcaster timestamp
}

const FARCASTER_EPOCH = 1609459200000 // January 1, 2021 UTC

const getFarcasterTime = (): number => {
  return toFarcasterTime(Date.now())
}

export const toFarcasterTime = (time: number): number => {
  if (time < FARCASTER_EPOCH) {
    throw new Error(
      "bad_request.invalid_param: time must be after Farcaster epoch (01/01/2022)"
    )
  }
  const secondsSinceEpoch = Math.round((time - FARCASTER_EPOCH) / 1000)
  if (secondsSinceEpoch > 2 ** 32 - 1) {
    throw new Error("bad_request.invalid_param: time too far in future")
  }
  return secondsSinceEpoch
}

export type FrameActionData = MessageData & {
  type: MessageType.MESSAGE_TYPE_FRAME_ACTION
  frameActionBody: FrameActionBody
}

export type FrameActionMessage = Message & {
  data: FrameActionData
  signatureScheme: SignatureScheme.SIGNATURE_SCHEME_ED25519
}

export const makeFrameAction = async (
  body: FrameActionBody,
  dataOptions: MessageDataOptions,
  signer: Signer
): Promise<FrameActionMessage> => {
  const data = await makeFrameActionData(body, dataOptions)
  return makeMessage(data, signer)
}

export const makeFrameActionData = (
  body: FrameActionBody,
  dataOptions: MessageDataOptions
): Promise<FrameActionData> => {
  return makeMessageData(
    { frameActionBody: body },
    MessageType.MESSAGE_TYPE_FRAME_ACTION,
    dataOptions
  )
}

const makeMessageData = async <TData extends MessageData>(
  bodyOptions: MessageBodyOptions,
  messageType: MessageType,
  dataOptions: MessageDataOptions
): Promise<TData> => {
  if (!dataOptions.timestamp) {
    dataOptions.timestamp = getFarcasterTime()
  }

  const data = MessageData.create({
    ...bodyOptions,
    type: messageType,
    ...dataOptions
  })

  return data as TData
}

export const makeMessage = async <TMessage extends Message>(
  messageData: MessageData,
  signer: Signer
): Promise<TMessage> => {
  const dataBytes = MessageData.encode(messageData).finish()

  const hash = blake3(dataBytes, { dkLen: 20 })

  const signature = await signer.signMessageHash(hash)

  const signerKey = await signer.getSignerKey()

  const message = Message.create({
    data: messageData,
    hash,
    hashScheme: HashScheme.HASH_SCHEME_BLAKE3,
    signature: signature,
    signatureScheme: signer.scheme,
    signer: signerKey
  })

  return message as TMessage
}
