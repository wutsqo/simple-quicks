import { InboxIcon } from "../Icons"
import { QuickTabWrapper } from "./QuickTabWrapper"
import { QuickTabProps } from "./interface"
import { FC } from "react"

export const QuickInbox: FC<QuickTabProps> = ({ onClick, state, onClose }) => {
  const translateTo = (): string => {
    switch (state) {
      case "initial":
        return "translate-x-0"
      case "expanded":
        return "-translate-x-[180px]"
      case "inbox":
        return "translate-x-0"
      case "task":
        return "-translate-x-[94px]"
    }
  }

  return (
    <QuickTabWrapper
      onClick={onClick}
      onClose={onClose}
      activeClassname="bg-indicator-orange fill-white"
      inactiveClassname="bg-white fill-indicator-orange text-white"
      title="Inbox"
      state={state}
      active={state === "inbox"}
      translateTo={translateTo()}
    >
      <InboxIcon />
    </QuickTabWrapper>
  )
}
