import { IChatListItem } from "../../../types/inbox"
import { NextApiHandler, NextApiRequest, NextApiResponse } from "next"

const DUMMY_DATA: IChatListItem[] = [
  {
    id: "95516c1c-4711-4e6f-b01d-ce1678b73cce",
    name: "109220-Naturalization",
    type: "group",
    lastMessage: "Please check this out!",
    lastMessageTime: "2021-05-20T12:00:00.000Z",
    lastMessageSender: "Cameron Smith",
    isUnread: true,
  },
  {
    id: "83189af3-402c-45e5-8979-2fcc64e1b5bf",
    name: "Jeannette Moraima Guaman Chamba (Hutto I-589) [Hutto Follow Up - Brief Service]",
    type: "group",
    lastMessage: "Hey, Please read this!",
    lastMessageTime: "2021-05-20T12:00:00.000Z",
    lastMessageSender: "Ellen",
    isUnread: false,
  },
  {
    id: "3b33403c-629f-4fee-b397-eb252699e0a7",
    name: "Cameron Smith Group",
    type: "group",
    lastMessage:
      "Orang yang ngetawain dan ngejokes Gilang mungkin dia blm ketemu langsung. Sebaik dan sehumble itu dia sama orang baru, salah satunya ke gw yg awalnya gw fans sama dia malah bisa jadi temen. Semua yg udh ketemu dia pasti sependapat sama gw.",
    lastMessageTime: "2021-05-20T12:00:00.000Z",
    lastMessageSender: "Hahahihi",
    isUnread: false,
  },
  {
    id: "b6bc377e-c0a6-4c79-a95c-12f2efbf6098",
    name: "Cameron Smith",
    type: "private",
    lastMessage: "ngakak abieezzz ☝️😡",
    lastMessageTime: "2021-05-20T12:00:00.000Z",
    lastMessageSender: "Cameron Smith",
    isUnread: false,
  },
  {
    id: "5c90f18e-714f-4f3b-82ad-166ae45978b3",
    name: "Zhang Purnama",
    type: "private",
    lastMessage: "Halo",
    lastMessageTime: "2021-05-20T12:00:00.000Z",
    lastMessageSender: "Zhang Purnama",
    isUnread: false,
  },
]

const handler: NextApiHandler = (
  req: NextApiRequest,
  res: NextApiResponse<IChatListItem[]>
) => {
  setTimeout(() => {
    res.send(DUMMY_DATA)
  }, 500)
}

export default handler
