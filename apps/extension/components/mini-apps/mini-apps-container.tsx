import { useState } from "react"

import { Checkbox } from "~components/checkbox"
import { XIcon } from "~components/icons/x-icon"
import { LoadingIndicator } from "~components/loading-indicator"
import { MiniAppContainer } from "~components/mini-apps/mini-app-container"
import { SidePanelContainer } from "~components/side-panel-container"
import { useFetch } from "~hooks/use-fetch"
import { MiniApp, useMiniAppsStorage } from "~hooks/use-miniapps-storage"

const MiniAppInput = ({ onSubmit }: { onSubmit: (value: string) => void }) => {
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
            e.stopPropagation()
          }}
          placeholder="Enter a mini app URL"
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

function isValidMiniApp(miniApp?: MiniApp) {
  return (
    miniApp && miniApp.imageUrl && miniApp.name && miniApp.type === "composer"
  )
}

const MiniAppLauncher = ({
  url,
  onRemove,
  onLaunch,
  editMode,
  compact,
  active
}: {
  url: string
  onRemove: () => void
  onLaunch: (app: MiniApp) => void
  editMode: boolean
  compact: boolean
  active: boolean
}) => {
  const { data, isLoading, error } = useFetch<MiniApp>({ url, proxy: true })

  if (isLoading) {
    return (
      <div className="w-full bg-black/[.04] dark:bg-white/[.04] aspect-square rounded-lg flex items-center justify-center">
        <LoadingIndicator />
      </div>
    )
  }

  const isValid = data && isValidMiniApp(data)

  return (
    <div
      className={`w-full flex flex-col items-center ${isValid ? "group hover:cursor-pointer " : ""}`}
      onClick={isValid ? () => onLaunch(data) : undefined}
      role={isValid ? "button" : undefined}>
      <div
        className={`w-full aspect-square flex items-center justify-center relative ${compact ? "" : "p-2"}`}>
        {(editMode || !isValid) && (
          <div className="absolute top-0 right-0">
            <button
              className="bg-white text-neutral-900 rounded-full p-1 h-8 w-8 shadow-md"
              onClick={(e) => {
                e.stopPropagation()
                onRemove()
              }}>
              <XIcon />
            </button>
          </div>
        )}
        {isValid ? (
          <img
            src={data.imageUrl}
            alt={data.name}
            className={`w-full h-full rounded-lg border outline outline-0 group-hover:outline-2 transition-all duration-100 ${
              active
                ? "outline-primary outline-2 border-primary"
                : "outline-0 border-default outline-default"
            }`}
          />
        ) : (
          <div className="w-full h-full bg-black/[.04] dark:bg-white/[.04] rounded-lg flex items-center justify-center p-2 overflow-hidden">
            <p className="text-xs text-muted line-clamp-4 text-center break-all">
              {url}
            </p>
          </div>
        )}
      </div>
      {isValid && !compact && (
        <div className="text-sm text-muted line-clamp-3 rounded-full px-2 py-0.5 group-hover:opacity-100 group-hover:bg-black/10 dark:group-hover:bg-white/10 transition-all duration-150">
          {data.name}
        </div>
      )}
    </div>
  )
}

export function MiniAppsContainer() {
  const [editMode, setEditMode] = useState(false)
  const {
    urls,
    addUrl,
    removeUrl,
    active,
    setActive,
    isLoading,
    docked,
    setDocked
  } = useMiniAppsStorage()
  if (isLoading) {
    return null
  }
  return (
    <SidePanelContainer
      panelKey="miniApps"
      title="Mini apps"
      editing={editMode}
      onEditToggle={() => setEditMode((editMode) => !editMode)}>
      {editMode && (
        <div className="pb-1 px-2 pt-3 flex flex-col gap-2">
          <MiniAppInput onSubmit={(url) => addUrl(url)} />
          <div className="flex px-2 text-muted">
            <Checkbox
              checked={docked}
              onChange={() => setDocked(!docked)}
              label="Dock apps to sidepanel"
            />
          </div>
        </div>
      )}
      <div>
        <div
          className={`px-2 pt-3 pb-2 flex flex-col gap-2 ${docked && !!active ? "hidden" : ""}`}>
          <div
            className={`grid ${docked && !!active ? "grid-cols-8 gap-3" : "grid-cols-4 gap-4"} transition-all duration-150`}>
            {urls.map((url) => (
              <MiniAppLauncher
                key={url}
                url={url}
                onRemove={() => removeUrl(url)}
                onLaunch={(app) => setActive({ url, app })}
                editMode={editMode}
                compact={docked && !!active}
                active={active?.url === url}
              />
            ))}
          </div>
        </div>
        {active && docked && (
          <div className="py-2">
            <div className="bg-white dark:bg-default-dark rounded-lg border border-default">
              <MiniAppContainer
                url={active.url}
                app={active.app}
                docked={docked}
                onClose={() => setActive(null)}
                onDockToggle={() => setDocked(!docked)}
              />
            </div>
          </div>
        )}
      </div>
    </SidePanelContainer>
  )
}
