import { useStorage } from "@plasmohq/storage/hook"

export function useStateStorage<T>(key: string, defaultValue: T) {
  return useStorage<T>(`state-${key}`, defaultValue)
}
