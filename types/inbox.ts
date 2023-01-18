export type TChatType = "private" | "group"

export interface IChatListItem {
  id: string
  name: string
  type: TChatType
  lastMessage: string
  lastMessageTime: string
  lastMessageSender: string
  isUnread: boolean
}

export interface IChatMessage {
  id: string
  sender: string
  message: string
  time: string
  isMine: boolean
  isRead: boolean
  isReply: boolean
  replyTo?: string
}

export interface IChat {
  id: string
  name: string
  type: TChatType
  messages: IChatMessage[]
  participants: string[]
}
