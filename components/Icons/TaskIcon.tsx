import { IconProps } from "./interface"
import { FC } from "react"

export const TaskIcon: FC<IconProps> = ({ className }) => {
  return (
    <svg
      width="29"
      height="22"
      viewBox="0 0 29 22"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M2.92984 0.400635H25.5614C26.9445 0.400635 28.076 1.53221 28.076 2.91526V19.2603C28.076 20.6433 26.9445 21.7749 25.5614 21.7749H2.92984C1.5468 21.7749 0.415222 20.6433 0.415222 19.2603V2.91526C0.415222 1.53221 1.5468 0.400635 2.92984 0.400635ZM2.9298 2.91528V19.2603H12.9883V2.91528H2.9298ZM25.5614 19.2603H15.5029V2.91528H25.5614V19.2603ZM24.3042 7.31582H16.7603V9.20178H24.3042V7.31582ZM16.7603 10.4591H24.3042V12.3451H16.7603V10.4591ZM24.3042 13.6024H16.7603V15.4883H24.3042V13.6024Z"
      />
    </svg>
  )
}
