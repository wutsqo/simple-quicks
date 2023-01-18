import { InboxContext } from "../../context"
import InboxService from "../../services/InboxService"
import { IChatMessage } from "../../types/inbox"
import { LoadingSpinner } from "../LoadingSpinner"
import { ChatBubble, ChatDateSeparator, ChatHeader } from "./QuickInbox"
import { FC, useCallback, useContext, useEffect, useRef } from "react"
import { useQuery } from "react-query"

interface QuickContainerChatProps {}

export const QuickContainerChat: FC<QuickContainerChatProps> = () => {
  const { activeChatId } = useContext(InboxContext)
  const { status, data } = useQuery(["chat", activeChatId], () => {
    if (!activeChatId) return null
    return InboxService.getChat(activeChatId)
  })

  const messagesByDate = useCallback(() => {
    const result: { [key: string]: IChatMessage[] } = {}

    data?.messages.forEach((message) => {
      const date = new Date(message.time).toLocaleDateString()
      if (!result[date]) result[date] = []
      result[date].push(message)
    })

    return result
  }, [data?.messages])

  const bottomRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    if (!bottomRef.current) return
    bottomRef.current.scrollIntoView({ behavior: "smooth" })
  })

  if (status === "loading") return <LoadingSpinner text="Loading Chat..." />
  if (status === "error") return <div>Error</div>

  return (
    <>
      <ChatHeader
        name={data?.name ?? ""}
        participantsCount={data?.participants.length ?? 0}
        type={data?.type ?? "group"}
      />

      <div className="px-[32px] py-[8px]">
        {Object.entries(messagesByDate())
          .slice(0)
          .reverse()
          .map(([date, messages]) => (
            <div key={date} className="flex flex-col gap-4">
              <ChatDateSeparator date={date} />

              {messages
                .slice(0)
                .reverse()
                .map((message) => (
                  <ChatBubble chat={message} key={message.id} />
                ))}
            </div>
          ))}
      </div>

      <div ref={bottomRef} className="h-0" />
    </>
  )
}
