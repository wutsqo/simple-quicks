import { IChatMessage } from "../../../types/inbox"
import classNames from "classnames"
import moment from "moment"
import { FC, useMemo } from "react"

interface ChatBubbleProps {
  chat: IChatMessage
}

export const ChatBubble: FC<ChatBubbleProps> = ({ chat }) => {
  const sender = chat.isMine ? "You" : chat.sender

  const bgColor = useMemo(() => {
    const colors = [
      "bg-chat-1-primary",
      "bg-chat-2-primary",
      "bg-chat-3-primary",
    ]
    const hash = chat.sender.charCodeAt(0) % colors.length
    return colors[hash]
  }, [chat.sender])

  const textColor = useMemo(() => {
    const colors = [
      "text-chat-1-secondary",
      "text-chat-2-secondary",
      "text-chat-3-secondary",
    ]
    const hash = chat.sender.charCodeAt(0) % colors.length
    return colors[hash]
  }, [chat.sender])

  return (
    <div
      className={classNames(
        "text-sm flex",
        chat.isMine ? "justify-end text-right" : "justify-start"
      )}
    >
      <div className="">
        <div
          className={classNames("font-bold text-chat-1-secondary", textColor)}
        >
          {sender}
        </div>
        <div
          className={classNames(
            "text-dark-gray rounded max-w-sm p-2.5",
            bgColor
          )}
        >
          <div>{chat.message}</div>
          <div className="text-2xs mt-1">
            {moment(chat.time).format("HH:mm")}
          </div>
        </div>
      </div>
    </div>
  )
}
