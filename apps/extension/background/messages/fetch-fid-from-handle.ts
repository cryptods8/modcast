import type { PlasmoMessaging } from "@plasmohq/messaging"

async function fetchFid(handle: string): Promise<FidResponse> {
  const apiBaseUrl =
    process.env.PLASMO_PUBLIC_PROXY_URL || "http://localhost:3000"
  const apiKey = process.env.PLASMO_PUBLIC_PROXY_KEY
  if (!apiKey) {
    throw new Error("PLASMO_PUBLIC_PROXY_KEY not set")
  }
  const params = new URLSearchParams()
  params.set("handle", handle)
  const resp = await fetch(`${apiBaseUrl}/api/v1/fids?${params.toString()}`, {
    headers: { "x-me-api-key": apiKey }
  })
  if (!resp.ok) {
    throw new Error(`Failed to fetch fid data!`)
  }
  const fidData = await resp.json()

  return fidData as FidResponse
}

export interface FidData {
  fid: number | null
}

interface FidResponse {
  data: FidData
  timestamp: number
}

const handler: PlasmoMessaging.MessageHandler = async (req, res) => {
  try {
    const { handle } = req.body
    const { data } = await fetchFid(handle)
    return res.send({ data })
  } catch (e) {
    console.error(e)
    return res.send({ error: (e as any).message })
  }
}

export default handler
