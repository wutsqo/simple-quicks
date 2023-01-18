import { IChat, IChatMessage } from "../types/inbox"

export const MY_NAME = "Cameron Smith"

const DUMMY_GROUP_MESSAGES: IChatMessage[] = [
  {
    id: "16e610d7-15ed-43ea-b7dd-3aa2cc212c15",
    sender: "Mary Hilda",
    message:
      "Hi Cameron, nice to meet you too. I hope we can be friends too. :D",
    time: "2023-01-15T12:00:00.000Z",
    isMine: false,
    isRead: true,
    isReply: false,
  },
  {
    id: "595e240e-8ae9-4b0d-8e22-cedc75d3b6ad",
    sender: "Zhang Purnama",
    message: "Hi Mary, nice to meet you too. I hope we can be friends too. :D",
    time: "2023-01-15T12:00:00.000Z",
    isMine: false,
    isRead: true,
    isReply: false,
  },
  {
    id: "da492633-9d82-4fb1-b111-a78d682faee8",
    sender: "Cameron Smith",
    message: "Hi Mary, nice to meet you too. I hope we can be friends too. :D",
    time: "2023-01-15T12:00:00.000Z",
    isMine: true,
    isRead: true,
    isReply: false,
  },
  {
    id: "208ba38f-e95b-4a29-839b-c5119e8f0efb",
    sender: "Mary Hilda",
    message:
      "Hello, I'm Mary. Nice to meet you. I'm a new member of this group. I hope we can be friends. Thank you. Have a nice day. Bye. :D",
    time: "2023-01-14T12:00:00.000Z",
    isMine: false,
    isRead: true,
    isReply: false,
  },
  {
    id: "0406fe4e-f75b-4fcc-8843-0456b739227d",
    sender: "Zhang Purnama",
    message: "No worries, I'll be there",
    time: "2023-01-14T12:00:00.000Z",
    isMine: false,
    isRead: true,
    isReply: false,
  },
  {
    id: "06b9c081-26f1-4c73-9314-4dc4b9757d91",
    sender: "Cameron Smith",
    message: "Just a reminder that we have a meeting today at 2pm",
    time: "2023-01-13T12:00:00.000Z",
    isMine: true,
    isRead: true,
    isReply: false,
  },
]

const DUMMY_GROUP_PARTICIPANTS = [
  "Cameron Smith",
  "Zhang Purnama",
  "Mary Hilda",
]

export const DUMMY_CHATS: IChat[] = [
  {
    id: "95516c1c-4711-4e6f-b01d-ce1678b73cce",
    name: "109220-Naturalization",
    type: "group",
    messages: DUMMY_GROUP_MESSAGES,
    participants: DUMMY_GROUP_PARTICIPANTS,
  },
  {
    id: "83189af3-402c-45e5-8979-2fcc64e1b5bf",
    name: "Jeannette Moraima Guaman Chamba (Hutto I-589) [Hutto Follow Up - Brief Service]",
    type: "group",
    messages: DUMMY_GROUP_MESSAGES,
    participants: DUMMY_GROUP_PARTICIPANTS,
  },
  {
    id: "3b33403c-629f-4fee-b397-eb252699e0a7",
    name: "Cameron Smith Group",
    type: "group",
    messages: DUMMY_GROUP_MESSAGES,
    participants: DUMMY_GROUP_PARTICIPANTS,
  },
  {
    id: "b6bc377e-c0a6-4c79-a95c-12f2efbf6098",
    name: "Cameron Smith",
    type: "private",
    messages: [],
    participants: [],
  },
  {
    id: "5c90f18e-714f-4f3b-82ad-166ae45978b3",
    name: "Zhang Purnama",
    type: "private",
    messages: [],
    participants: [],
  },
]
