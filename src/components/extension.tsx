import { useEffect } from "react"

import { useExtesion } from "~contexts/extension-context"
import { getVideoData } from "~utils/function"

import { ExtensionActions } from "./extension-actions"
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
