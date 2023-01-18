import moment from "moment"
import { FC } from "react"

interface ChatDateSeparatorProps {
  date: string
}

export const ChatDateSeparator: FC<ChatDateSeparatorProps> = ({ date }) => {
  return (
    <div className="relative h-8 pt-8">
      <hr className="border-dark-gray" />
      <div className="absolute top-5 bg-white px-4 mx-auto left-1/2 -translate-x-1/2 text-dark-gray text-sm font-bold flex gap-2">
        <span>{moment(date).fromNow()}</span>
        <span>{date}</span>
      </div>
    </div>
  )
}
