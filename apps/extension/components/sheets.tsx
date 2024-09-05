import { AnimatePresence, motion, MotionStyle } from "framer-motion"
import React, { useCallback, useEffect, useMemo, useRef, useState } from "react"

interface SheetStackProps {
  children: React.ReactNode[]
  childrenKeys?: string[]
  activeIndex: number
  onActiveIndexChange: (index: number) => void
  flatten?: boolean
}

const Y_OFFSET = 20
const SCALE_OFFSET = 0.05

export function SheetStack({
  children,
  childrenKeys,
  activeIndex,
  onActiveIndexChange,
  flatten
}: SheetStackProps) {
  const [containerHeight, setContainerHeight] = useState(200)
  const childRefs = useRef<Record<string, HTMLDivElement | null>>({})
  const observerRef = useRef<ResizeObserver | null>(null)
  const count = React.Children.count(children)
  const childKeys = useMemo(
    () =>
      childrenKeys ||
      React.Children.map(
        children,
        (child, index) => (child as any).key || index.toString()
      ) ||
      [],
    [children, childrenKeys]
  )

  const updateHeight = useCallback(() => {
    const activeChild = childRefs.current[childKeys[activeIndex]]
    if (activeChild) {
      setContainerHeight(activeChild.offsetHeight)
    } else {
      setContainerHeight(200)
    }
  }, [activeIndex, childKeys])

  useEffect(() => {
    const currentActiveChild = childRefs.current[childKeys[activeIndex]]
    if (React.Children.count(children) === 0 || !currentActiveChild) {
      updateHeight()
      return
    }
    observerRef.current = new ResizeObserver(() => {
      updateHeight()
    })
    observerRef.current.observe(currentActiveChild)
    return () => {
      observerRef.current?.disconnect()
    }
  }, [activeIndex, children, updateHeight])

  return (
    <div
      className="relative w-full"
      style={{
        height: flatten ? "auto" : containerHeight + Y_OFFSET * (count - 1)
      }}>
      <AnimatePresence>
        {React.Children.map(children, (child, index) => {
          const childKey = childKeys[index]!
          const order = count > 0 ? (count + (activeIndex - index)) % count : 0
          const scale = 1 / Math.pow(1 + SCALE_OFFSET, order)
          const style: MotionStyle = {
            zIndex: count - order,
            transformOrigin: "top"
          }
          if (flatten) {
            style.maxHeight = "68px"
            style.overflow = "hidden"
            if (index < count - 1) {
              style.marginBottom = "0.5rem"
            }
          } else if (order > 0) {
            style.maxHeight = "200px"
            style.overflow = "hidden"
          }
          return (
            <motion.div
              key={childKey}
              className={`top-0 left-0 w-full rounded-lg shadow-lg transition-[top] duration-200 ${order > 0 ? "hover:-top-1" : ""} ${flatten ? "" : "absolute"}`}
              style={style}
              initial={{ scale: 1, y: flatten ? 0 : index * Y_OFFSET }}
              animate={{
                scale: flatten ? 1 : scale,
                y: flatten ? 0 : Y_OFFSET * (count - order - 1) * scale
              }}
              transition={{ type: "spring", stiffness: 300, damping: 30 }}>
              <div ref={(el) => (childRefs.current[childKey] = el)}>
                {child}
              </div>
              {index !== activeIndex && !flatten && (
                <motion.div
                  className="absolute top-0 left-0 bottom-0 right-0 bg-black rounded-lg hover:bg-black/80 transition-all duration-200 cursor-pointer"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 - scale }}
                  onClick={(e: React.MouseEvent<HTMLDivElement>) => {
                    if (activeIndex !== index) {
                      e.stopPropagation()
                      e.preventDefault()
                      onActiveIndexChange(index)
                    }
                  }}
                />
              )}
            </motion.div>
          )
        })}
      </AnimatePresence>
    </div>
  )
}
