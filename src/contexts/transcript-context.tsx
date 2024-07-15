import { createContext, useContext, useMemo, useState } from "react"

import type { Transcript } from "~lib/constants"
import { cleanJsonTranscript } from "~utils/function"

import { useExtension } from "./extension-context"

interface TranscriptContext {
  transcriptSearch: string
  setTranscriptSearch: (search: string) => void
  transcriptJson: Transcript[]
}

const TranscriptContext = createContext<TranscriptContext | undefined>(
  undefined
)

export const useTranscript = () => {
  const context = useContext(TranscriptContext)
  if (!context) {
    throw new Error("useTranscript must be used within a TranscriptProvider")
  }
  return context
}

interface TranscriptProviderProps {
  children: React.ReactNode
}

export function TranscriptProvider({ children }: TranscriptProviderProps) {
  const [transcriptSearch, setTranscriptSearch] = useState<string>("")
  const { extensionLoading, extensionData } = useExtension()
  const transcriptJson = useMemo(() => {
    if (!extensionLoading && extensionData && extensionData.transcript) {
      return cleanJsonTranscript(extensionData.transcript)
    }
    return []
  }, [extensionData, extensionLoading])
  const value = { transcriptSearch, setTranscriptSearch, transcriptJson }
  return (
    <TranscriptContext.Provider value={value}>
      {children}
    </TranscriptContext.Provider>
  )
}
