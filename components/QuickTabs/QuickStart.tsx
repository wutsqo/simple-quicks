import { LightningIcon } from "../Icons"
import { QuickStartProps } from "./interface"
import classNames from "classnames"
import { FC } from "react"

export const QuickStart: FC<QuickStartProps> = ({ onClick, hidden }) => {
  return (
    <button
      title="Quick Start"
      className={classNames(
        "h-quick-start w-quick-start rounded-full bg-primary flex justify-center \
        items-center z-10 absolute",
        hidden ? "hidden" : ""
      )}
      onClick={onClick}
    >
      <LightningIcon className="fill-white" />
    </button>
  )
}
