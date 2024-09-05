import cssText from "data-text:~style.css"
import type {
  PlasmoCSConfig,
  PlasmoGetInlineAnchorList,
  PlasmoRender
} from "plasmo"
import { useEffect, useRef, useState } from "react"
import { createRoot } from "react-dom/client"

import { sendToBackground } from "@plasmohq/messaging"

import {
  CastIdentifier,
  CastType,
  EmbedsData
} from "~background/messages/fetch-embeds"
import { LoadingIndicator } from "~components/loading-indicator"
import { useFramesStorage } from "~hooks/use-frames-storage"
import { cachedGet } from "~utils/cached-get"
import { determineTheme } from "~utils/determine-theme"

export const config: PlasmoCSConfig = {
  matches: ["https://warpcast.com/*"],
  css: ["inter-font.css"]
}

export const getStyle = () => {
  const style = document.createElement("style")
  style.textContent = cssText
  return style
}

const selectors = [
  "#root > div > div > div > main > div > div > div > div > div > div > div > div > div > div > div > span > div.relative.w-full.overflow-hidden.bg-transparent",
  "#root > div > div > div > main > div > div > div > div > div > div > div > div > span > div.relative.w-full.overflow-hidden.bg-transparent"
] as const

export const getInlineAnchorList: PlasmoGetInlineAnchorList = async () => {
  const fullSelectors = selectors.join(", ")
  const anchors = document.querySelectorAll(fullSelectors)
  return Array.from(anchors).map((element) => ({
    element
  }))
}

function extractCastType(elem: Element): CastType {
  const { pathname } = window.location
  const isCastContext =
    /^\/[^\/]+\/[^\/]+/.test(pathname) &&
    !pathname.startsWith("/~/") &&
    pathname.search("/quotes") === -1
  const isCurrent = isCastContext && elem.tagName.toLowerCase() === "div"

  // 1) we're in the cast context and the cast has a previous sibling
  // 2) contains "replying to" container
  // 3) does not have the border-faint class and has a previous sibling
  const rootCastElem = isCurrent
    ? elem.parentElement?.parentElement?.parentElement?.parentElement
        ?.parentElement?.parentElement?.parentElement
    : elem.parentElement?.parentElement?.parentElement?.parentElement
        ?.parentElement?.parentElement?.parentElement?.parentElement

  const hasPrevSibling = rootCastElem?.previousElementSibling != null
  let isReply: boolean
  if (isCastContext) {
    isReply = hasPrevSibling
  } else {
    const isNotifReply = !!rootCastElem?.querySelector(
      "div.flex.flex-row.space-x-1.pb-1.text-xs.text-muted"
    )
    const elemContainer =
      elem.parentElement?.parentElement?.parentElement?.parentElement
    const isCastReply =
      elemContainer != null &&
      elemContainer.matches(".relative.cursor-pointer.px-4.py-2") &&
      !elemContainer.matches(".border-faint") &&
      hasPrevSibling
    isReply = isNotifReply || isCastReply
  }

  return isReply ? "reply" : "cast"
}

async function fetchEmbeds(castId: CastIdentifier, force: boolean) {
  const key = "url" in castId ? castId.url : `byHash/${castId.hash}`
  return await cachedGet(
    `embeds/${key}`,
    async () => {
      const resp = await sendToBackground({
        name: "fetch-embeds",
        body: { castId }
      })
      const data = resp?.data as EmbedsData | undefined
      return data || null
    },
    { expiryInSeconds: 60 * 60 * 24, force, keepNulls: false }
  )
}

function FrameControls({ castId }: { castId: CastIdentifier }) {
  const { addUrl } = useFramesStorage()
  const [loading, setLoading] = useState(false)
  const [message, setMessage] = useState<{
    text: string
    type: "error" | "success"
  } | null>(null)
  const handlePin = async (e: React.MouseEvent<HTMLButtonElement>) => {
    e.stopPropagation()
    e.preventDefault()
    setLoading(true)
    try {
      const data = await fetchEmbeds(castId, false)
      const embeds = data?.embeds
      if (embeds?.length !== 1 || !embeds[0].url) {
        setMessage({ text: "Failed to fetch frame URL :(", type: "error" })
      } else {
        const status = addUrl(embeds[0].url)
        if (status === "SUCCESS" || status === "ALREADY_ADDED") {
          setMessage({ text: "Pinned!", type: "success" })
        } else if (status === "MAX_REACHED") {
          setMessage({ text: "Max pinned frames reached", type: "error" })
        } else {
          setMessage({ text: "Failed to pin :(", type: "error" })
        }
      }
    } catch (e) {
      setMessage({ text: "Failed to pin :(", type: "error" })
    } finally {
      setLoading(false)
    }
  }
  useEffect(() => {
    if (message) {
      const timeout = setTimeout(() => {
        setMessage(null)
      }, 3000)
      return () => clearTimeout(timeout)
    }
  }, [message])
  return (
    <div className="w-full rounded-t-lg p-4 flex items-center gap-2 h-[68px] opacity-0 hover:opacity-100 bg-gradient-to-b from-black/20 justify-between items-center">
      <div>
        {message && (
          <div
            className={`text-sm text-white rounded-full px-3 py-1 ${
              message.type === "error" ? "bg-red-500" : "bg-green-500"
            }`}>
            {message.text}
          </div>
        )}
      </div>
      <button
        className="bg-white text-neutral-900 rounded-full px-3 py-1 font-semibold text-sm disabled:text-black/40 flex items-center gap-2"
        onClick={handlePin}
        disabled={loading}>
        {loading && <LoadingIndicator />}
        <span>Pin</span>
      </button>
    </div>
  )
}

export const render: PlasmoRender<any> = async (
  { anchor, createRootContainer },
  InlineCSUIContainer
) => {
  if (!anchor || !createRootContainer) {
    return
  }
  const rootContainer = await createRootContainer(anchor)
  const root = createRoot(rootContainer)
  const rootContainerStyle = (rootContainer as HTMLElement).style
  rootContainerStyle.position = "absolute"
  rootContainerStyle.top = "0"
  rootContainerStyle.right = "0"
  rootContainerStyle.left = "0"
  rootContainerStyle.zIndex = "1"

  const theme = determineTheme(window)

  const parentStyle = anchor.element.parentElement?.style
  if (parentStyle) {
    parentStyle.position = "relative"
  }

  const castElem =
    anchor.element.parentElement?.parentElement?.parentElement?.parentElement
  const timestampElemSelectors = [
    ':scope > div > div > div > div:not([role="menuitem"]) > div:last-child',
    ':scope > div.flex.flex-row.justify-between.gap-2 > div:not([role="menuitem"]) > a'
  ]
  const timestampElem = castElem?.querySelectorAll(
    timestampElemSelectors.join(",")
  )?.[0]
  const linkElem =
    timestampElem && timestampElem.tagName.toLowerCase() === "a"
      ? timestampElem
      : null
  const castUrl = linkElem
    ? (linkElem as HTMLAnchorElement).href
    : window.location.href

  console.log("tsel", timestampElem)
  const castType = timestampElem ? extractCastType(timestampElem) : null

  root.render(
    <InlineCSUIContainer anchor={anchor}>
      <div
        className={`flex w-full p-[1.5px] ${theme}`}
        style={{ fontFamily: "Inter" }}>
        {castType && castUrl && (
          <FrameControls castId={{ url: castUrl, type: castType }} />
        )}
      </div>
    </InlineCSUIContainer>
  )
}
