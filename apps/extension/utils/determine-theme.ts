export function determineTheme(window?: Window): "dark" | "light" {
  const doc = window?.document
  if (doc) {
    const rootNode = doc.querySelector("html")
    const colorScheme = rootNode?.style.colorScheme
    if (colorScheme === "dark" || colorScheme === "light") {
      return colorScheme
    }
  }
  return typeof window !== "undefined" &&
    window.matchMedia("(prefers-color-scheme: dark)").matches
    ? "dark"
    : "light"
}
