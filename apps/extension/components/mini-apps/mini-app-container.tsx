import { useEffect, useState } from "react"

import { sendToBackground } from "@plasmohq/messaging"

import { Button } from "~components/button"
import { XIcon } from "~components/icons/x-icon"
import { LoadingIndicator } from "~components/loading-indicator"
import { useFarcasterIdentity } from "~hooks/use-farcaster-identity"
import { MiniApp } from "~hooks/use-miniapps-storage"

function DockIcon() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="100%"
      height="100%"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round">
      <rect width="18" height="18" x="3" y="3" rx="2" />
      <path d="M15 3v18" />
      <path d="m8 9 3 3-3 3" />
    </svg>
  )
}

function UndockIcon() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="100%"
      height="100%"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round">
      <rect width="18" height="18" x="3" y="3" rx="2" />
      <path d="M15 3v18" />
      <path d="m10 15-3-3 3-3" />
    </svg>
  )
}

export function MiniAppContainer({
  url,
  app,
  onClose,
  onDockToggle,
  docked
}: {
  url?: string
  app?: MiniApp
  onClose: () => void
  onDockToggle: () => void
  docked: boolean
}) {
  const [iframeData, setIframeData] = useState<{
    url: string
    title: string
  } | null>(null)
  const [isLoading, setIsLoading] = useState(false)
  const [error, setError] = useState<string | null>(null)

  const { signer, hasSigner, isLoadingSigner, onSignerlessFramePress } =
    useFarcasterIdentity()

  const handleClose = () => {
    setIframeData(null)
    setIsLoading(false)
    setError(null)
    onClose()
  }

  useEffect(() => {
    if (!url || !signer?.privateKey) {
      return
    }

    setIsLoading(true)
    setError(null)
    sendToBackground({
      name: "fetch-miniapp-launch-data",
      body: { signer, url }
    })
      .then(({ data }) => {
        if (!data?.url) {
          throw new Error("Invalid data")
        }
        setIframeData(data)
      })
      .catch((e) => {
        setError(e.message)
        console.error(e)
      })
      .finally(() => setIsLoading(false))
  }, [signer?.privateKey, url])

  const domainUrl = iframeData?.url ?? url
  const domain = domainUrl
    ? new URL(domainUrl).hostname.replace("www.", "")
    : null
  const title =
    iframeData?.title ?? app?.name ?? (isLoading ? "Loading..." : "")

  return (
    <div className="text-default" style={{ fontFamily: "Inter, sans-serif" }}>
      <div className="flex p-4 justify-between">
        <div className="font-semibold text-lg py-[1px]">{title}</div>
        <div className="flex gap-2 items-center">
          <button
            onClick={onDockToggle}
            className="rounded-lg px-2 py-1 font-semibold text-sm hover:opacity-80 gap-2 flex items-center bg-black/[.04] dark:bg-white/[.04] transition-all duration-150 h-7">
            {docked ? <UndockIcon /> : <DockIcon />}
            <span>{docked ? "Undock" : "Dock"}</span>
          </button>
          <button
            onClick={handleClose}
            className="rounded-full p-1 h-8 w-8 flex items-center justify-center">
            <XIcon />
          </button>
        </div>
      </div>
      <div
        className="w-full border-y border-default"
        style={{ height: `${docked ? 600 : 620}px` }}>
        {!hasSigner ? (
          <div className="w-full h-full flex items-center justify-center">
            <Button
              isLoading={isLoadingSigner}
              disabled={isLoadingSigner}
              onClick={onSignerlessFramePress}>
              Login
            </Button>
          </div>
        ) : isLoading ? (
          <div className="w-full h-full flex items-center justify-center">
            <LoadingIndicator />
          </div>
        ) : error ? (
          <div className="w-full h-full flex items-center justify-center">
            <div>Error loading app</div>
          </div>
        ) : (
          iframeData?.url && (
            <div className="w-full h-full relative">
              <iframe
                src={iframeData.url}
                width="100%"
                height="100%"
                sandbox="allow-forms allow-scripts allow-same-origin"
                title={title}
              />
            </div>
          )
        )}
      </div>
      <div className="flex px-4 py-2 justify-end max-w-[420px] overflow-hidden">
        <span className="text-xs text-muted text-right line-clamp-1">
          {domain}
        </span>
      </div>
    </div>
  )
}
