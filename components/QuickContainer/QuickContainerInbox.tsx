import { InboxContext } from "../../context"
import InboxService from "../../services/InboxService"
import { LoadingSpinner } from "../LoadingSpinner"
import { QuickContainerChat } from "./QuickContainerChat"
import { ChatListItem, SearchBox } from "./QuickInbox"
import { FC, useContext, useState } from "react"
import { useQuery } from "react-query"

interface QuickContainerInboxProps {
  className?: string
}

export const QuickContainerInbox: FC<QuickContainerInboxProps> = ({
  className,
  ...props
}) => {
  const { status, data } = useQuery("chats", InboxService.getChatItems)
  const [search, setSearch] = useState<string>("")

  const { activeChatId, setActiveChatId } = useContext(InboxContext)

  const onSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearch(e.target.value)
  }

  const filteredData = data?.filter((item) =>
    item.name.toLowerCase().includes(search.toLowerCase())
  )

  const onClickItem = (id: string) => setActiveChatId(id)

  if (activeChatId) return <QuickContainerChat />

  return (
    <div
      className="min-h-[calc(100%-24px)] flex flex-col px-[32px] py-[24px]"
      {...props}
    >
      <SearchBox value={search} onChange={onSearchChange} />

      {status === "loading" && <LoadingSpinner text="Loading Chats..." />}
      {status === "error" && <div>Error</div>}
      {status === "success" && (
        <div className="flex flex-col divide-y divide-light-gray mt-2">
          {filteredData?.map((item) => (
            <ChatListItem
              onClick={() => onClickItem(item.id)}
              key={item.id}
              {...item}
            />
          ))}

          {filteredData?.length === 0 && (
            <div className="font-bold text-center text-dark-gray mt-4">
              No Chats Found
            </div>
          )}
        </div>
      )}
    </div>
  )
}
