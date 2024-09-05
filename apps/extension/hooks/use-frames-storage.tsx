import { useStateStorage } from "./use-state-storage"

export function useFramesStorage() {
  const [activeIndex, setActiveIndex, { isLoading: isActiveIndexLoading }] =
    useStateStorage("activeIndex", 2)
  const [urls, setUrls, { isLoading: isUrlsLoading }] = useStateStorage(
    "urls",
    [
      "https://stats-frame.degen.tips",
      "https://farguessr.vercel.app",
      "https://framedl.xyz"
    ]
  )
  return {
    activeIndex,
    setActiveIndex,
    urls,
    setUrls,
    isLoading: isActiveIndexLoading || isUrlsLoading,
    addUrl: (url: string) => {
      if (!url) {
        return "INVALID_URL"
      }
      const index = urls.indexOf(url)
      if (index !== -1) {
        setActiveIndex(index)
        return "ALREADY_ADDED"
      }
      if (urls.length >= 8) {
        return "MAX_REACHED"
      }
      const newUrls = [...urls, url]
      setUrls(newUrls)
      setActiveIndex(newUrls.length - 1)
      return "SUCCESS"
    },
    removeUrl: (url: string) => {
      const newUrls = urls.filter((u) => u !== url)
      setUrls(newUrls)
      setActiveIndex(Math.max(newUrls.length - 1, 0))
      return "SUCCESS"
    }
  }
}
