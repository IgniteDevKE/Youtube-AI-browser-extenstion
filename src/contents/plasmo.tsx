import { Extension } from "@/src/components/extension"
import cssText from "data-text:~style.css"
import type { PlasmoCSConfig, PlasmoGetInlineAnchor } from "plasmo"

import { Providers } from "~components/provider"

const INJECTED_ELEMENT_ID = "#secondary.style-scope.ytd-watch-flexy"

export const getStyle = () => {
  const baseFontSize = 12
  let updatedCssText = cssText.replaceAll(":root", ":host(plasmo-csui)")
  const remRegex = /([\d.]+)rem/g
  updatedCssText = updatedCssText.replace(remRegex, (match, remValue) => {
    const pixels = parseFloat(remValue) * baseFontSize
    return `${pixels}px`
  })
  const style = document.createElement("style")
  style.textContent = updatedCssText
  return style
}

export const config: PlasmoCSConfig = {
  matches: ["https://www.youtube.com/*"]
}

export const getInlineAnchor: PlasmoGetInlineAnchor = async () => ({
  element: document.querySelector(INJECTED_ELEMENT_ID),
  insertPosition: "afterbegin"
})

export const getShadowHostId = () => "plasmo-inline"

function PlasmoMainUI() {
  return (
    <Providers>
      <Extension />
    </Providers>
  )
}

export default PlasmoMainUI
