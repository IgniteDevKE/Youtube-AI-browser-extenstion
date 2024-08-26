import { ChatAction } from "./chat-actions"
import { ChatList } from "./chat-list"
import PromptForm from "./chat-prompt-form"

export const Chat = () => {
  return (
    <div className="w-full h-[498px] relative bg-white dark:bg-[#0f0f0f]">
      <ChatAction />
      <ChatList />
      <PromptForm />
    </div>
  )
}
