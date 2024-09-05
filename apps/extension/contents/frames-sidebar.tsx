import cssText from "data-text:~style.css"
import type {
  PlasmoCSConfig,
  PlasmoGetInlineAnchorList,
  PlasmoRender
} from "plasmo"
import { useState } from "react"
import { createRoot } from "react-dom/client"

import FrameIFrame from "~components/frame-iframe"
import { LoadingIndicator } from "~components/loading-indicator"
import { SheetStack } from "~components/sheets"
import { useFramesStorage } from "~hooks/use-frames-storage"
import { useStateStorage } from "~hooks/use-state-storage"
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
  "#root > div > div > div > aside.h-full > div.w-full > form"
] as const

export const getInlineAnchorList: PlasmoGetInlineAnchorList = async () => {
  const fullSelectors = selectors.join(", ")
  const anchors = document.querySelectorAll(fullSelectors)
  return Array.from(anchors).map((element) => ({
    element
  }))
}

interface FrameWrapperProps {
  url: string
  frameId: string
  theme: "dark" | "light"
}

function ReloadIcon() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      strokeWidth="1.5"
      stroke="currentColor"
      className="size-4">
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M16.023 9.348h4.992v-.001M2.985 19.644v-4.992m0 0h4.992m-4.993 0 3.181 3.183a8.25 8.25 0 0 0 13.803-3.7M4.031 9.865a8.25 8.25 0 0 1 13.803-3.7l3.181 3.182m0-4.991v4.99"
      />
    </svg>
  )
}

const FrameWrapper = (props: FrameWrapperProps) => {
  const { url, frameId, theme } = props
  return (
    <div data-framewrapperurl={url} className={`w-full flex flex-col`}>
      <div onClick={(e) => e.preventDefault()}>
        {/* <div className="w-full h-full aspect-video bg-gray-500 rounded-lg flex items-center justify-center">
          <span className="text-sm text-gray-700 line-clamp-1">{url}</span>
        </div> */}
        <FrameIFrame url={url} frameId={frameId} theme={theme} />
      </div>
    </div>
  )
}

const FrameInput = ({ onSubmit }: { onSubmit: (value: string) => void }) => {
  const [value, setValue] = useState("")
  const [error, setError] = useState<string | null>(null)
  const handleSubmit = () => {
    try {
      new URL(value)
    } catch (e) {
      setError("Invalid URL")
      return
    }
    setError(null)
    setValue("")
    onSubmit(value)
  }
  return (
    <div>
      <div className="flex">
        <input
          type="url"
          className="bg-input w-full rounded-l-md border py-2 text-sm outline-none text-default px-3 border-default border border-default"
          value={value}
          onChange={(e) => setValue(e.target.value)}
          onKeyDown={(e) => {
            if (e.key === "Enter") {
              e.preventDefault()
              handleSubmit()
            }
          }}
          placeholder="Enter a frame URL"
        />
        <button
          className="bg-white rounded-r-md border border-l-0 border-default px-3 py-1 font-semibold text-sm dark:bg-black"
          onClick={handleSubmit}>
          Pin
        </button>
      </div>
      {error && <div className="text-red-500 px-2 mt-1 text-sm">{error}</div>}
    </div>
  )
}

const FramesContainer = ({ theme }: { theme: "dark" | "light" }) => {
  const [editMode, setEditMode] = useState(false)
  const [keys, setKeys] = useState<Record<string, string>>({})
  const { activeIndex, setActiveIndex, urls, addUrl, removeUrl, isLoading } =
    useFramesStorage()
  if (isLoading) {
    return null
  }
  return (
    <div className="w-full mt-3 rounded-lg px-2 py-3 pt-1.5 bg-black/[.04] dark:bg-white/[.04]">
      <div className="flex gap-3 justify-between items-center px-2">
        <div className="py-1 text-lg font-semibold">Pinned frames</div>
        <button
          className={`rounded-lg px-2 py-1 font-semibold text-sm hover:opacity-80 ${editMode ? "bg-green-800 text-white" : "text-default"}`}
          onClick={() => setEditMode((editMode) => !editMode)}>
          {editMode ? "Done" : "Edit"}
        </button>
      </div>
      <div className="px-2 pt-3 pb-2 flex flex-col gap-2">
        {editMode && (
          <div className="pb-1">
            <FrameInput onSubmit={(url) => addUrl(url)} />
          </div>
        )}
        {urls.length > 0 ? (
          <SheetStack
            activeIndex={activeIndex}
            onActiveIndexChange={setActiveIndex}
            childrenKeys={urls}
            flatten={editMode}>
            {urls.map((url) => (
              <div key={keys[url] || url} className="w-full relative">
                <FrameWrapper url={url} frameId={url} theme={theme} />
                <div
                  className={`absolute top-0 left-0 right-0 group rounded-t-lg p-4 flex items-center gap-3 transition-all duration-150 h-[68px] ${editMode ? "opacity-100 bg-black/90 justify-between" : "opacity-0 hover:opacity-100 bg-gradient-to-b from-black/20 justify-end"}`}>
                  {editMode && (
                    <span className="text-sm text-white line-clamp-2">
                      {url}
                    </span>
                  )}
                  <div className="flex gap-2">
                    {!editMode && (
                      <button
                        className="bg-white text-neutral-900 rounded-full px-3 py-1 font-semibold text-sm"
                        onClick={() => {
                          const newKey = Math.random().toString(36).substring(2)
                          setKeys((keys) => ({ ...keys, [url]: newKey }))
                        }}>
                        <ReloadIcon />
                      </button>
                    )}
                    <button
                      className="bg-white text-neutral-900 rounded-full px-3 py-1 font-semibold text-sm"
                      onClick={() => removeUrl(url)}>
                      Unpin
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </SheetStack>
        ) : (
          <div className="text-center text-sm text-muted aspect-video flex items-center justify-center rounded-lg bg-black/[.04] dark:bg-white/[.04]">
            Pin your first frame
          </div>
        )}
        <div className="flex flex-row gap-2 justify-center pt-2">
          {[0, 1, 2, 3, 4, 5, 6, 7].map((i) => (
            <button
              key={i}
              className={`rounded-full w-10 h-10 flex items-center justify-center ${
                i < urls.length ? "opacity-100" : "opacity-40"
              } ${
                i === activeIndex
                  ? "bg-action-primary text-white"
                  : "bg-white dark:bg-black text-default"
              }`}
              disabled={i >= urls.length}
              onClick={() => setActiveIndex(i)}>
              <span className="text-sm font-semibold">{i + 1}</span>
            </button>
          ))}
        </div>
      </div>
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
  rootContainerStyle.zIndex = "0"

  const theme = determineTheme(window)

  const asideStyle = anchor.element.parentElement?.parentElement?.style
  asideStyle?.setProperty("max-width", "420px")

  root.render(
    <InlineCSUIContainer anchor={anchor}>
      <div className={`flex w-full ${theme}`} style={{ fontFamily: "Inter" }}>
        <FramesContainer theme={theme} />
      </div>
    </InlineCSUIContainer>
  )
}
