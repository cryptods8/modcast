import { useMeasure } from "@uidotdev/usehooks"

import { useStorage } from "@plasmohq/storage/hook"

function ChevronDownIcon() {
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
      <path d="m6 9 6 6 6-6" />
    </svg>
  )
}

export function SidePanelContainer({
  children,
  panelKey,
  title,
  editing,
  onEditToggle
}: {
  children: React.ReactNode
  panelKey: string
  title: string
  editing: boolean
  onEditToggle: () => void
}) {
  const [panelEnabled, _, { isLoading }] = useStorage(
    `${panelKey}Enabled`,
    true
  )
  const [expanded, setExpanded, { isLoading: isLoadingExpanded }] = useStorage(
    `${panelKey}Expanded`,
    true
  )
  const handleExpandedToggle = () => {
    setExpanded(!expanded)
  }
  if (!panelEnabled || isLoading || isLoadingExpanded) {
    return null
  }
  return (
    <div
      className={`w-full mt-3 rounded-lg px-2 pt-1.5 bg-black/[.04] dark:bg-white/[.04] ${
        expanded ? "pb-3" : "pb-1.5"
      }`}>
      <div className="flex gap-3 justify-between items-center px-2">
        <div
          className="py-1 text-lg font-semibold flex items-center gap-2 group/title"
          role="button"
          onClick={handleExpandedToggle}>
          <span>{title}</span>
          <span
            data-expanded={expanded}
            className="transition-all duration-150 data-[expanded='true']:rotate-180 data-[expanded='true']:opacity-0 group-hover/title:opacity-100 size-5 text-muted">
            <ChevronDownIcon />
          </span>
        </div>
        {expanded && (
          <button
            className={`rounded-lg px-2 py-1 font-semibold text-sm hover:opacity-80 ${editing ? "bg-green-800 text-white" : "text-default"}`}
            onClick={onEditToggle}>
            {editing ? "Done" : "Edit"}
          </button>
        )}
      </div>
      <div
        data-expanded={expanded}
        className="hidden data-[expanded='true']:block">
        {children}
      </div>
    </div>
  )
}
