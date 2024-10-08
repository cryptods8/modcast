import cssText from "data-text:~style.css"
import type { PlasmoCSConfig, PlasmoRender } from "plasmo"
import { createRoot } from "react-dom/client"

import { FramesContainer } from "~components/frames/frames-container"
import { MiniAppsContainer } from "~components/mini-apps/mini-apps-container"
import { getSidePanelAnchorList, setAsideStyle } from "~utils/anchor-lists"
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

export const getInlineAnchorList = getSidePanelAnchorList

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

  setAsideStyle(anchor)

  root.render(
    <InlineCSUIContainer anchor={anchor}>
      <div className={`w-full ${theme}`} style={{ fontFamily: "Inter" }}>
        <MiniAppsContainer />
        <FramesContainer theme={theme} />
      </div>
    </InlineCSUIContainer>
  )
}
