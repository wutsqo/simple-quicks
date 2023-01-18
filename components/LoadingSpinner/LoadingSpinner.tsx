import { SpinnerIcon } from "../Icons"
import classNames from "classnames"
import { FC } from "react"

interface LoadingSpinnerProps {
  className?: string
  text?: string
}

export const LoadingSpinner: FC<LoadingSpinnerProps> = ({
  className,
  text = "Loading",
  ...props
}) => {
  return (
    <div className="w-full flex flex-col h-full justify-center items-center grow">
      <SpinnerIcon />
      <span className="mt-2 font-bold text-sm">{text}</span>
    </div>
  )
}
