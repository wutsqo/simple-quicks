import { IChat } from "../../../../types/inbox"
import { NotFoundError } from "../../../../types/response"
import { DUMMY_CHATS } from "../../../../utils/constant"
import { NextApiHandler, NextApiRequest, NextApiResponse } from "next"

const GET = (
  req: NextApiRequest,
  res: NextApiResponse<IChat | NotFoundError>
) => {
  const { id } = req.query
  const chat = DUMMY_CHATS.find((chat) => chat.id === id)

  if (!chat) {
    res.status(404).send({ message: "Chat not found" })
    return
  }

  setTimeout(() => {
    res.send(chat)
  }, 500)
}

const handler: NextApiHandler = (
  req: NextApiRequest,
  res: NextApiResponse<IChat | NotFoundError>
) => {
  switch (req.method) {
    case "GET":
      GET(req, res)
      break
    default:
      res.status(405).send({ message: "Method not allowed" })
      break
  }
}

export default handler
