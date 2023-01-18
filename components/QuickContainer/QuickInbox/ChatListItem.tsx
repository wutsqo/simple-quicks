import { IChatListItem } from "../../../types/inbox"
import { Avatar } from "./Avatar"
import moment from "moment"
import { FC } from "react"

interface ChatListItemProps extends IChatListItem {
  onClick: () => void
}

export const ChatListItem: FC<ChatListItemProps> = (props) => {
  const {
    name,
    type,
    lastMessage,
    lastMessageSender,
    lastMessageTime,
    onClick,
    isUnread,
  } = props

  return (
    <button
      className="flex gap-3 py-4 text-left hover:bg-gray-100 relative"
      onClick={onClick}
    >
      <div className="shrink-0 w-14 flex justify-center">
        <Avatar name={name} type={type} />
      </div>

      <div className="w-full">
        <div className="flex gap-4">
          <div className="font-bold text-primary text-sm">{name}</div>
          <div className="shrink-0 text-xs text-dark-gray mt-0.5">
            {moment(lastMessageTime).format("L HH:mm")}
          </div>
        </div>

        <div className="text-xs mt-0.5 w-full">
          {type === "group" && (
            <div className="font-bold">{lastMessageSender}:</div>
          )}

          <div className="truncate max-w-lg">{lastMessage}</div>
        </div>
      </div>

      {isUnread && (
        <div className="absolute right-0 h-2 w-2 bg-indicator-read rounded-full top-1/2 -translate-y-1/2" />
      )}
    </button>
  )
}
