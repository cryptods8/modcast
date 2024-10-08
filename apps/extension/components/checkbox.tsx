export function Checkbox({
  checked,
  onChange,
  label
}: {
  checked: boolean
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void
  label: string
}) {
  return (
    <label className="flex items-center gap-2">
      <input type="checkbox" checked={checked} onChange={(e) => onChange(e)} />
      <span className="text-sm">{label}</span>
    </label>
  )
}
