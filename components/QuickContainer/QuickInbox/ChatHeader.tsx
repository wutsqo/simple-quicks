import { ContainerContext, InboxContext } from "../../../context"
import { TChatType } from "../../../types/inbox"
import { ArrowLeft, CloseIcon } from "../../Icons"
import { FC, useContext } from "react"

interface ChatHeaderProps {
  name: string
  participantsCount: number
  type: TChatType
}

export const ChatHeader: FC<ChatHeaderProps> = ({
  name,
  participantsCount,
  type,
}) => {
  const { removeActiveChatId } = useContext(InboxContext)
  const { setContainerState } = useContext(ContainerContext)

  return (
    <div className="px-8 py-4 flex gap-4 items-center sticky top-0 bg-white z-10 border-b border-[#BDBDBD]">
      <button title="back" onClick={removeActiveChatId}>
        <ArrowLeft className="h-4 w-4" />
      </button>

      <div className="w-full">
        <div className="text-primary font-bold text-base">{name}</div>
        {type === "group" && (
          <div className="text-xs text-dark-gray">
            {participantsCount} Participants
          </div>
        )}
      </div>

      <button title="close" onClick={() => setContainerState("initial")}>
        <CloseIcon className="h-4 w-4" />
      </button>
    </div>
  )
}
