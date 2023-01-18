import { QuickContainerInbox } from "./QuickContainerInbox"
import { QuickContainerTask } from "./QuickContainerTask"
import { QuickContainerProps } from "./interface"
import classNames from "classnames"
import { FC } from "react"

export const QuickContainer: FC<QuickContainerProps> = ({
  children,
  className,
  state,
  ...props
}) => {
  return (
    <div
      className={classNames(
        "w-176 absolute bg-white bottom-24 right-0 rounded transition-all duration-300 ease-in-out overflow-x-auto",
        state === "initial" || state === "expanded" ? "h-0" : "h-176"
      )}
      {...props}
    >
      {state === "inbox" && <QuickContainerInbox />}
      {state === "task" && <QuickContainerTask />}
    </div>
  )
}
