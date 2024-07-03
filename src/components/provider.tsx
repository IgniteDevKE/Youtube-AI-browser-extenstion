import { ExtensionProvider } from "~contexts/extension-context"

export const Providers = ({ children }) => {
  return <ExtensionProvider>{children}</ExtensionProvider>
}
