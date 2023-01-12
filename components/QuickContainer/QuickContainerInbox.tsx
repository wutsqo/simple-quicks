import classNames from "classnames"
import { FC } from "react"

interface QuickContainerInboxProps {
  className?: string
}

export const QuickContainerInbox: FC<QuickContainerInboxProps> = ({
  className,
  ...props
}) => {
  return (
    <div className={classNames("")} {...props}>
      ini inbox
    </div>
  )
}
