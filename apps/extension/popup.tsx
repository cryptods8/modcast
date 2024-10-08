import { useFarcasterIdentity } from "~hooks/use-farcaster-identity"

import "./style.css"
import "./fonts.css"

import { useStorage } from "@plasmohq/storage/hook"

import { Button } from "~components/button"
import { Checkbox } from "~components/checkbox"
import { FarcasterAuthUI } from "~components/farcaster-auth-ui"
import { ModcastIcon } from "~components/modcast-icon"

function SettingsPanel() {
  const [pinnedFramesEnabled, setPinnedFramesEnabled] = useStorage(
    "pinnedFramesEnabled",
    true
  )
  const [miniAppsEnabled, setMiniAppsEnabled] = useStorage(
    "miniAppsEnabled",
    true
  )

  return (
    <div className="w-full flex flex-col gap-2">
      <div className="text-xs font-semibold">Settings</div>
      <div>
        <div className="flex flex-col gap-2">
          <Checkbox
            checked={pinnedFramesEnabled}
            onChange={() => setPinnedFramesEnabled(!pinnedFramesEnabled)}
            label="Enable Pinned Frames"
          />
          <Checkbox
            checked={miniAppsEnabled}
            onChange={() => setMiniAppsEnabled(!miniAppsEnabled)}
            label="Enable Mini Apps"
          />
        </div>
      </div>
    </div>
  )
}

export default function IndexPopup() {
  const { signer, hasSigner, isLoadingSigner, logout, onSignerlessFramePress } =
    useFarcasterIdentity({
      enablePolling: true
    })

  const handleClick = hasSigner ? logout : onSignerlessFramePress

  const shownAuthUi =
    signer?.status === "pending_approval" && !!signer?.signerApprovalUrl
  const showLoggedOutUi = !signer

  return (
    <div
      className="p-4 flex flex-col justify-between items-center bg-gradient-to-r from-violet-100 to-purple-100 text-violet-950 min-w-96 text-base gap-7"
      style={{ fontFamily: "Inter, sans-serif" }}>
      <div className="p-4 text-center flex flex-col gap-5">
        <div className="flex flex-col items-center">
          <div className="flex items-center h-10 w-10 mb-2">
            <ModcastIcon />
          </div>
          <h2 className="text-2xl font-bold">Modcast</h2>
          <span className="text-sm text-slate-500">Welcome to Modcast</span>
        </div>
        {shownAuthUi ? (
          <div className="p-6 bg-white border border-violet-300/50 rounded">
            <FarcasterAuthUI signer={signer} logout={logout} />
          </div>
        ) : (
          showLoggedOutUi && (
            <div className="text-slate-700">
              Log in with your Farcaster account and start your enhanced frames
              experience
            </div>
          )
        )}
      </div>
      <div className="text-slate-500 w-full px-6 py-4 mb-4 border-y border-slate-500/20">
        <SettingsPanel />
      </div>
      <div className="flex flex-col gap-5 items-center">
        {!shownAuthUi && (
          <div>
            <Button
              isLoading={isLoadingSigner}
              disabled={isLoadingSigner}
              onClick={handleClick}>
              {hasSigner ? "Logout" : "Login"}
            </Button>
          </div>
        )}
        <span className="text-xs text-slate-500">
          Powered by{" "}
          <a
            href="https://framesjs.org"
            target="_blank"
            rel="noopener noreferrer nofollow"
            className="underline hover:text-slate-700">
            frames.js
          </a>
          {", "}
          <a
            href="https://openframes.xyz"
            target="_blank"
            rel="noopener noreferrer nofollow"
            className="underline hover:text-slate-700">
            Open Frames
          </a>{" "}
          and{" "}
          <a
            href="https://warpcast.com/ds8"
            target="_blank"
            rel="noopener noreferrer nofollow"
            className="underline hover:text-slate-700">
            ds8
          </a>
        </span>
      </div>
    </div>
  )
}
