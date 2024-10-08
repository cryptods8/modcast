import { PlasmoCSUIAnchor, PlasmoGetInlineAnchorList } from "plasmo"

const selectors = [
  "#root > div > div > div > aside.h-full > div.w-full > form"
] as const

export const getSidePanelAnchorList: PlasmoGetInlineAnchorList = async () => {
  const fullSelectors = selectors.join(", ")
  const anchors = document.querySelectorAll(fullSelectors)
  return Array.from(anchors).map((element) => ({
    element
  }))
}

export const setAsideStyle = (anchor: PlasmoCSUIAnchor) => {
  const asideElement = anchor.element.closest("aside")
  const asideStyle = asideElement?.style
  asideStyle?.setProperty("max-width", "420px")
}
