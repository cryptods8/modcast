import * as storage from "~utils/storage"

interface CachedData<T> {
  data?: T
  timestamp: number
}

export async function cachedGet<T>(
  key: string,
  fetcher: () => Promise<T>,
  {
    expiryInSeconds,
    keepNulls,
    force
  }: { expiryInSeconds: number; keepNulls?: boolean; force?: boolean }
) {
  try {
    const cachedData = force ? null : await storage.get<CachedData<T>>(key)
    if (
      cachedData &&
      cachedData.timestamp > Date.now() - 1000 * expiryInSeconds
    ) {
      return cachedData.data
    }
    const data = await fetcher()
    if (data === null && !keepNulls) {
      return null
    }
    await storage.set<CachedData<T>>(key, { data, timestamp: Date.now() })
    return data
  } catch (e) {
    console.error("ERROR", e)
    return null
  }
}
