import cssText from "data-text:~style.css"
import type { PlasmoCSConfig, PlasmoCSUIProps } from "plasmo"
import { useEffect, useState } from "react"

import { sendToBackground } from "@plasmohq/messaging"

import { Button } from "~components/button"
import { XIcon } from "~components/icons/x-icon"
import { LoadingIndicator } from "~components/loading-indicator"
import { MiniAppContainer } from "~components/mini-apps/mini-app-container"
import { useFarcasterIdentity } from "~hooks/use-farcaster-identity"
import { useMiniAppsStorage } from "~hooks/use-miniapps-storage"
import { useStateStorage } from "~hooks/use-state-storage"
import { determineTheme } from "~utils/determine-theme"

export const getStyle = () => {
  const style = document.createElement("style")
  style.textContent =
    cssText +
    `
  #plasmo-shadow-container {
    z-index: 2147483640 !important;
  }
  `
  return style
}

export const config: PlasmoCSConfig = {
  matches: ["https://warpcast.com/*"],
  css: ["inter-font.css"]
}

interface MiniAppModalContainerProps extends React.PropsWithChildren {
  onClick?: (e: React.MouseEvent<HTMLDivElement>) => void
  shown: boolean
}

const MiniAppModalContainer: React.FC<MiniAppModalContainerProps> = ({
  children,
  onClick,
  shown
}) => {
  const theme = determineTheme(window)
  if (!shown) {
    return null
  }
  return (
    <div className={`fixed w-full h-full ${theme}`} onClick={onClick}>
      <div className="w-full h-full flex items-center justify-center bg-white/75 dark:bg-black/75">
        <div onClick={(e) => e.stopPropagation()}>{children}</div>
      </div>
    </div>
  )
}

const MiniAppModal: React.FC<PlasmoCSUIProps> = () => {
  const { setActive, active, docked, setDocked } = useMiniAppsStorage()

  const { app, url } = active || {}

  const handleClose = () => {
    setActive(null)
  }

  if (docked) {
    return null
  }

  return (
    <MiniAppModalContainer shown={!!url} onClick={handleClose}>
      <div className="bg-white dark:bg-default-dark rounded-lg border border-default shadow-lg w-[420px] ">
        <MiniAppContainer
          url={url}
          app={app}
          onClose={handleClose}
          docked={docked}
          onDockToggle={() => setDocked(!docked)}
        />
      </div>
    </MiniAppModalContainer>
  )
}

export default MiniAppModal
