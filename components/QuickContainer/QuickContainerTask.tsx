import classNames from "classnames"
import { FC } from "react"

interface QuickContainerTaskProps {
  className?: string
}

export const QuickContainerTask: FC<QuickContainerTaskProps> = ({
  className,
  ...props
}) => {
  return (
    <div className={classNames("")} {...props}>
      ini task
    </div>
  )
}
