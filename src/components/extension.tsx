import { useEffect } from "react"

import { useExtension } from "~contexts/extension-context"
import { getVideoData } from "~utils/function"

import { ExtensionActions } from "./extension-actions"
import { ExtensionPanels } from "./extension-panels"
import { Collapsible, CollapsibleContent } from "./ui/collapsible"

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
  } = useExtension()

  useEffect(() => {
    const getVideoId = () => {
      return new URLSearchParams(window.location.search).get("v")
    }
    const fetchVideoData = async () => {
      const id = getVideoId()
      if (id && id !== extensionVideoId) {
        setExtensionVideoId(id)
        setExtensionLoading(true)
        const data = await getVideoData(id)
        console.log("Data")
        console.log(data)
        setExtensionData(data)
        setExtensionLoading(false)
      }
    }
    fetchVideoData()
    const intervalId = setInterval(fetchVideoData, 2000)
    return () => clearInterval(intervalId)
  }, [extensionVideoId])

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
    <main
      ref={setExtensionContainer}
      className={`antialised w-full mb-3 z-10 ${extensionTheme}`}>
      <div className="w-full">
        <Collapsible
          open={extensionisOpen}
          onOpenChange={setExtensionisOpen}
          className="space-y-3">
          <ExtensionActions />
          <CollapsibleContent className="w-full h-fit max-h-[500px] border border-zinc-200 rounded-md overflow-auto">
            <ExtensionPanels />
          </CollapsibleContent>
        </Collapsible>
      </div>
    </main>
  )
}
