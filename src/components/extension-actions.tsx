import {
  ActivityLogIcon,
  CardStackPlusIcon,
  CaretSortIcon,
  ChatBubbleIcon,
  CheckIcon,
  Link2Icon,
  Pencil2Icon
} from "@radix-ui/react-icons"

import { useExtension } from "~contexts/extension-context"
import { useCopyToClipboard } from "~lib/hooks/use-copy-to-clipboard"

import { Button } from "./ui/button"
import { CollapsibleTrigger } from "./ui/collapsible"
import { TooltipWrapper } from "./ui/tooltip-wrapper"

export const ExtensionActions = () => {
  const { setExtensionPanel, extensionisOpen, setExtensionisOpen } =
    useExtension()
  const { isCopied, copyToClipboard } = useCopyToClipboard({ timeout: 2000 })
  const CopyVideoURL = () => {
    if (isCopied) return
    copyToClipboard(window.location.href)
  }
  return (
    <div className="p-2.5 px-3 dark:bg-[#0f0f0f] dark:text-white rounded-md flex items-center justify-between border border-zinc-200 dark:border-zinc-800">
      <CardStackPlusIcon className="w-6 h-6 opacity-50 ml-2" />
      <div className="flex justify-center items-center space-x-2">
        <div className="flex -space-x-px">
          <Button
            onClick={() => {
              setExtensionPanel("Summary")
              if (!extensionisOpen) setExtensionisOpen(true)
            }}
            variant="outline"
            className="rounded-r-none focus:z-10 bg-transparent dark:bg-transparent space-x-2 items-center">
            <Pencil2Icon className="w-4 h-4 opacity-60" />
            <span className="opacity-90">Summary</span>
          </Button>
          <Button
            onClick={() => {
              setExtensionPanel("Transcript")
              if (!extensionisOpen) setExtensionisOpen(true)
            }}
            variant="outline"
            className="rounded-none focus:z-10 bg-transparent dark:bg-transparent space-x-2 items-center">
            <ActivityLogIcon className="w-4 h-4 opacity-60" />
            <span className="opacity-90">Transcript</span>
          </Button>
          <Button
            onClick={() => {
              setExtensionPanel("Chat")
              if (!extensionisOpen) setExtensionisOpen(true)
            }}
            variant="outline"
            className="rounded-l-none focus:z-10 bg-transparent dark:bg-transparent space-x-2 items-center">
            <ChatBubbleIcon className="h-4 w-4 opacity-60" />
            <span className="opacity-90">Chat</span>
          </Button>
        </div>
      </div>

      <div className="flex items-center space-x-2">
        <TooltipWrapper text={"Copy video URL"}>
          <Button variant="outline" size="icon" onClick={() => CopyVideoURL()}>
            {isCopied ? (
              <CheckIcon className="w-4.5 h-4.5 opacity-60" />
            ) : (
              <Link2Icon className="w-4.5 h-4.5 opacity-60" />
            )}
          </Button>
        </TooltipWrapper>

        <CollapsibleTrigger asChild>
          <Button variant="outline" size="icon">
            <CaretSortIcon className="w-4.5 h-4.5 opacity-60" />
          </Button>
        </CollapsibleTrigger>
      </div>
    </div>
  )
}
