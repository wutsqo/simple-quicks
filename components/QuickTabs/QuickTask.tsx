import { TaskIcon } from "../Icons"
import { QuickTabWrapper } from "./QuickTabWrapper"
import { QuickTabProps } from "./interface"
import { FC } from "react"

export const QuickTask: FC<QuickTabProps> = ({ onClick, onClose, state }) => {
  const translateTo = (): string => {
    switch (state) {
      case "initial":
        return "translate-x-0"
      case "expanded":
        return "-translate-x-[94px]"
      case "inbox":
        return "-translate-x-[94px]"
      case "task":
        return "translate-x-0"
    }
  }

  return (
    <QuickTabWrapper
      state={state}
      onClick={onClick}
      onClose={onClose}
      activeClassname="bg-indicator-blue fill-white"
      inactiveClassname="bg-white fill-indicator-blue text-white"
      title="Task"
      active={state === "task"}
      translateTo={translateTo()}
    >
      <TaskIcon />
    </QuickTabWrapper>
  )
}
