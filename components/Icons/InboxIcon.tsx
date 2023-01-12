import { IconProps } from "./interface"
import { FC } from "react"

export const InboxIcon: FC<IconProps> = ({ className }) => {
  return (
    <svg
      width="26"
      height="26"
      viewBox="0 0 26 26"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M17.8187 0.514526H1.47368C0.782159 0.514526 0.21637 1.08032 0.21637 1.77184V19.3742L5.24561 14.3449H17.8187C18.5102 14.3449 19.076 13.7791 19.076 13.0876V1.77184C19.076 1.08032 18.5102 0.514526 17.8187 0.514526ZM16.5614 3.02908V11.8302H4.20201L3.46019 12.5721L2.73095 13.3013V3.02908H16.5614ZM21.5907 5.54381H24.1053C24.7968 5.54381 25.3626 6.10959 25.3626 6.80112V25.6608L20.3334 20.6315H6.50296C5.81144 20.6315 5.24565 20.0657 5.24565 19.3742V16.8596H21.5907V5.54381Z"
      />
    </svg>
  )
}
