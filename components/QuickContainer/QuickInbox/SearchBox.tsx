import { SearchIcon } from "../../Icons"
import classNames from "classnames"
import { forwardRef } from "react"

interface SearchBoxProps {
  className?: string
  value?: string
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void
  onKeyPress?: (e: React.KeyboardEvent<HTMLInputElement>) => void
}

export const SearchBox = forwardRef<HTMLInputElement, SearchBoxProps>(
  ({ className, onChange, onKeyPress, value, ...props }, ref) => {
    return (
      <div
        className={classNames("flex items-center relative", className)}
        {...props}
      >
        <input
          className="w-full bg-transparent border-light-gray border rounded-5px h-8 flex items-center px-14 focus:outline-none text-sm"
          placeholder="Search"
          ref={ref}
          value={value}
          onChange={onChange}
          onKeyPress={onKeyPress}
        />
        <SearchIcon className="absolute right-14 h-4 w-4  " />
      </div>
    )
  }
)

SearchBox.displayName = "SearchBox"
