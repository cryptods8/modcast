import { useStateStorage } from "./use-state-storage"

export interface MiniApp {
  aboutUrl?: string
  description: string
  icon: string
  imageUrl: string
  name: string
  type: string
}

export function useMiniAppsStorage() {
  const [urls, setUrls, { isLoading: isUrlsLoading }] = useStateStorage(
    "miniApps",
    [
      "https://flappycaster.com/api/composer",
      "https://www.fctrivia.xyz/api/composer",
      "https://api.alpha.payflow.me/api/farcaster/composer/pay?action=useful",
      "https://stories.steer.fun/frames/actions/post",
    ]
  )
  const [active, setActive] = useStateStorage<{
    url: string
    app: MiniApp
  } | null>("miniAppsActive", null)
  const [docked, setDocked] = useStateStorage<boolean>("miniAppsDocked", false)

  return {
    urls,
    setUrls,
    isLoading: isUrlsLoading,
    addUrl: (url: string) => {
      if (!url) {
        return "INVALID_URL"
      }
      if (urls.length >= 8) {
        return "MAX_REACHED"
      }
      if (urls.includes(url)) {
        return "ALREADY_ADDED"
      }
      const newUrls = [...urls, url]
      setUrls(newUrls)
      return "SUCCESS"
    },
    active,
    setActive,
    removeUrl: (url: string) => {
      const newUrls = urls.filter((u) => u !== url)
      setUrls(newUrls)
      return "SUCCESS"
    },
    docked,
    setDocked
  }
}
