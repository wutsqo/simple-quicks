import { IChat, IChatListItem } from "../types/inbox"
import request from "./AxiosBaseService"

export default class InboxService {
  static getChatItems(): Promise<IChatListItem[]> {
    return request({
      url: "/inbox/chats",
      method: "GET",
    })
  }

  static getChat(id: string): Promise<IChat> {
    return request({
      url: `/inbox/chats/${id}`,
      method: "GET",
    })
  }

  static sendMessage(id: string, message: string): Promise<IChat> {
    return request({
      url: `/inbox/chats/${id}`,
      method: "POST",
      data: {
        message,
      },
    })
  }
}
