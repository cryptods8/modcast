import type { PlasmoMessaging } from "@plasmohq/messaging"

export interface PlasmoMessageResponse<T> {
  data: T
  timestamp: number
}

export type CastType = "cast" | "reply"

type HashCastIdentifier = { hash: `0x${string}`; type?: CastType }
type UrlCastIdentifier = { url: string; type: CastType }

export type CastIdentifier = HashCastIdentifier | UrlCastIdentifier

async function fetchEarnings(
  castId: CastIdentifier
): Promise<PlasmoMessageResponse<EmbedsData>> {
  const apiBaseUrl =
    process.env.PLASMO_PUBLIC_PROXY_URL || "http://localhost:3000"
  const apiKey = process.env.PLASMO_PUBLIC_PROXY_KEY
  if (!apiKey) {
    throw new Error("PLASMO_PUBLIC_PROXY_KEY not set")
  }
  const params = new URLSearchParams()
  if ("hash" in castId) {
    params.set("castHash", castId.hash)
  } else {
    params.set("castUrl", castId.url)
  }
  if (castId.type) {
    params.set("type", castId.type)
  }
  const resp = await fetch(
    `${apiBaseUrl}/api/v1/casts/embeds?${params.toString()}`,
    {
      headers: { "x-me-api-key": apiKey }
    }
  )
  if (!resp.ok) {
    console.error(resp)
    throw new Error(`Failed to fetch cast embeds!`)
  }
  const embedsData = await resp.json()

  return embedsData as PlasmoMessageResponse<EmbedsData>
}

export interface EmbedsData {
  embeds: {
    url?: string
  }[]
}

const handler: PlasmoMessaging.MessageHandler = async (req, res) => {
  try {
    const { castId } = req.body
    const { data } = await fetchEarnings(castId)
    return res.send({ data })
  } catch (e) {
    console.error(e)
    return res.send({ error: (e as any).message })
  }
}

export default handler
