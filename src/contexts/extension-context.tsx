import { createContext, useContext, useState } from "react"

interface ExtensionState {
  extensionContainer: any
  extensionisOpen: boolean
  extensionTheme: string | null
  extensionLoading: boolean
  extensionPanel: string
  extensionVideoId: string
  extensionData: any
}

const initialState: ExtensionState = {
  extensionContainer: null,
  extensionisOpen: false,
  extensionTheme: null,
  extensionLoading: false,
  extensionPanel: "Summary",
  extensionVideoId: "",
  extensionData: null
}

interface ExtensionActions {
  setExtensionContainer: (container: any) => void
  setExtensionisOpen: (isOpen: boolean) => void
  setExtensionTheme: (theme: string | null) => void
  setExtensionLoading: (loading: boolean) => void
  setExtensionPanel: (panel: string) => void
  setExtensionVideoId: (videoId: string) => void
  setExtensionData: (data: any) => void
  resetExtension: () => void
}

interface ExtensionProviderProps {
  children: React.ReactNode
}

interface ExtensionContext extends ExtensionState, ExtensionActions {}

const ExtensionContext = createContext<ExtensionContext | undefined>(undefined)

export function useExtesion() {
  const context = useContext(ExtensionContext)
  if (!context) {
    throw new Error("useExtension must be used within a ExtensionProvider")
  }
  return context
}

export function ExtensionProvider({ children }: ExtensionProviderProps) {
  const [extensionContainer, setExtensionContainer] = useState<any>(
    initialState.extensionContainer
  )
  const [extensionisOpen, setExtensionisOpen] = useState<boolean>(
    initialState.extensionisOpen
  )
  const [extensionTheme, setExtensionTheme] = useState<string | null>(
    initialState.extensionTheme
  )
  const [extensionLoading, setExtensionLoading] = useState<boolean>(
    initialState.extensionLoading
  )
  const [extensionPanel, setExtensionPanel] = useState<string>(
    initialState.extensionPanel
  )
  const [extensionVideoId, setExtensionVideoId] = useState<string>(
    initialState.extensionVideoId
  )
  const [extensionData, setExtensionData] = useState<any>(
    initialState.extensionData
  )

  function resetExtension() {
    setExtensionContainer(initialState.extensionContainer)
    setExtensionData(initialState.extensionData)
    setExtensionLoading(initialState.extensionLoading)
    setExtensionPanel(initialState.extensionPanel)
    setExtensionTheme(initialState.extensionTheme)
    setExtensionVideoId(initialState.extensionVideoId)
    setExtensionisOpen(initialState.extensionisOpen)
  }

  const value = {
    extensionContainer,
    extensionData,
    extensionLoading,
    extensionPanel,
    extensionTheme,
    extensionVideoId,
    extensionisOpen,
    setExtensionContainer,
    setExtensionData,
    setExtensionLoading,
    setExtensionPanel,
    setExtensionTheme,
    setExtensionVideoId,
    setExtensionisOpen,
    resetExtension
  }

  return (
    <ExtensionContext.Provider value={value}>
      {children}
    </ExtensionContext.Provider>
  )
}
