import { QuickTabWrapperProps } from "./interface"
import classNames from "classnames"
import { FC } from "react"

export const QuickTabWrapper: FC<QuickTabWrapperProps> = ({
  onClick,
  onClose,
  children,
  activeClassname,
  inactiveClassname,
  title,
  state,
  active,
  translateTo,
}) => {
  const hideTitle = !(state === "expanded")

  return (
    <div
      className={classNames(
        "absolute transition-all duration-300 ease-in-out z-0",
        translateTo
      )}
    >
      <div
        className={classNames(
          "absolute -top-7 text-white text-center w-full transition-all duration-150",
          hideTitle ? "opacity-0" : "bg-opacity-100 delay-300"
        )}
      >
        {title}
      </div>
      <button
        title="Close"
        className={classNames(
          "h-quick-start w-quick-start bg-dark-gray rounded-full absolute\
          transition-all duration-300 ease-in-out",
          active ? "-translate-x-4 scale-100" : "translate-x-0 scale-90"
        )}
        onClick={onClose}
      />

      <button
        className={classNames(
          "rounded-full bg-white flex justify-center items-center\
          transition-all duration-300 ease-in-out h-quick-start w-quick-start",
          active ? activeClassname : inactiveClassname,
          active ? "scale-100" : "scale-90"
        )}
        onClick={onClick}
      >
        {children}
      </button>
    </div>
  )
}
