import { useEffect } from "react"

import { useExtesion } from "~contexts/extension-context"

import { Collapsible } from "./ui/collapsible"

export const Extension = () => {
  const {
    setExtensionContainer,
    setExtensionData,
    setExtensionLoading,
    setExtensionPanel,
    setExtensionTheme,
    setExtensionVideoId,
    setExtensionisOpen,
    extensionTheme,
    extensionisOpen,
    extensionVideoId
  } = useExtesion()

  useEffect(() => {
    console.log("Fetches Theme")
    const getCssVariable = (name: string) => {
      const rootStyle = getComputedStyle(document.documentElement)
      return rootStyle.getPropertyValue(name).trim()
    }
    const backgroundColor = getCssVariable("--yt-spec-base-background")
    if (backgroundColor === "#fff") {
      setExtensionTheme("light")
    } else {
      setExtensionTheme("dark")
    }
  }, [])
  if (!extensionTheme) return null

  return (
    <main className="antialised w-full mb-3 z-10">
      <div className="w-full">
        <Collapsible className="space-y-3">
          <h1>Extension Actions</h1>
          <div className="flex flex-col space-y-3">
            <button className="btn">Action 1</button>
            <button className="btn">Action 2</button>
            <button className="btn">Action 3</button>
          </div>
        </Collapsible>
      </div>
    </main>
  )
}
