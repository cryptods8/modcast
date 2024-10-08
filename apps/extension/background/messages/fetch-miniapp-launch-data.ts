import { hexToBytes } from "@noble/hashes/utils"

import { PlasmoMessaging } from "@plasmohq/messaging"

import { FarcasterNetwork, FrameActionBody, Message } from "~proto/message"
import { makeFrameAction } from "~utils/farcaster"
import { NobleEd25519Signer } from "~utils/signer"

interface CastId {
  fid: number
  hash: Uint8Array
}

export async function createMiniAppMessage(
  signerKey: string,
  {
    fid,
    url,
    castId,
    state
  }: {
    fid: number
    url: Uint8Array
    castId: CastId
    state: Uint8Array | undefined
  }
) {
  const signer = new NobleEd25519Signer(Buffer.from(signerKey.slice(2), "hex"))

  const messageDataOptions = {
    fid,
    network: FarcasterNetwork.FARCASTER_NETWORK_MAINNET
  }

  let message = null
  try {
    message = await makeFrameAction(
      FrameActionBody.create({
        url,
        buttonIndex: 1,
        castId,
        state
      }),
      messageDataOptions,
      signer
    )
  } catch (e) {
    console.error(e)
  }

  if (message === null) {
    return {
      message: null,
      trustedBytes: null
    }
  }

  const trustedBytes = Buffer.from(Message.encode(message).finish()).toString(
    "hex"
  )

  return {
    message,
    trustedBytes
  }
}

const handler: PlasmoMessaging.MessageHandler = async (req, res) => {
  try {
    const { signer, url } = req.body

    const messageParams = {
      fid: signer.fid,
      url,
      castId: {
        fid: 1,
        hash: "0x0000000000000000000000000000000000000000"
      },
      state:
        "%7B%22cast%22%3A%7B%22text%22%3A%22%22%2C%22embeds%22%3A%5B%5D%7D%7D"
    }

    const { message, trustedBytes } = await createMiniAppMessage(
      signer.privateKey,
      {
        ...messageParams,
        url: Buffer.from(url),
        castId: {
          fid: messageParams.castId.fid,
          hash: hexToBytes(messageParams.castId.hash.substring(2))
        },
        state: Buffer.from(messageParams.state)
      }
    )
    if (message === null) {
      throw new Error("Failed to create message")
    }

    const body = {
      untrustedData: {
        fid: messageParams.fid,
        url,
        messageHash: `0x${Buffer.from(message.hash).toString("hex")}`,
        timestamp: message.data.timestamp,
        network: 1,
        buttonIndex: 1,
        castId: messageParams.castId,
        state: messageParams.state
      },
      trustedData: { messageBytes: trustedBytes }
    }

    const apiBaseUrl =
      process.env.PLASMO_PUBLIC_PROXY_URL || "http://localhost:3000"
    const apiKey = process.env.PLASMO_PUBLIC_PROXY_KEY
    if (!apiKey) {
      throw new Error("PLASMO_PUBLIC_PROXY_KEY not set")
    }
    const params = new URLSearchParams()
    params.set("postUrl", url)
    const actionResp = await fetch(
      `${apiBaseUrl}/api/v1/frames?${params.toString()}`,
      {
        method: "POST",
        headers: { "x-me-api-key": apiKey },
        body: JSON.stringify({ body })
      }
    )
    if (!actionResp.ok) {
      throw new Error(`Failed to fetch action data!`)
    }
    const actionData = await actionResp.json()
    return res.send({ data: actionData })
  } catch (e) {
    console.error(e)
    return res.send({ error: (e as any).message })
  }
}

export default handler
