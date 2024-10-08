import { useEffect, useState } from "react"

import { sendToBackground } from "@plasmohq/messaging"

interface UseFetchProps {
  url: string
  options?: RequestInit
  proxy?: boolean
}

export function useFetch<T>({ url, options, proxy = false }: UseFetchProps) {
  const [data, setData] = useState<T | null>(null)
  const [isLoading, setIsLoading] = useState(false)
  const [error, setError] = useState<Error | null>(null)
  useEffect(() => {
    setIsLoading(true)
    sendToBackground({
      name: "fetch",
      body: { url, options, proxy }
    })
      .then((data) => {
        if (data.json) {
          setData(data.json)
        }
        if (data.error) {
          throw new Error(data.error)
        }
      })
      .catch((error) => {
        setError(error)
      })
      .finally(() => setIsLoading(false))
  }, [url, options])

  return { data, isLoading, error }
}
