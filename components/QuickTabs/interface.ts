export type QuickTabWrapperState = "task" | "inbox" | "initial" | "expanded"

export interface QuickTabProps {
  onClick: () => void
  onClose: () => void
  state: QuickTabWrapperState
}

export interface QuickTabWrapperProps extends QuickTabProps {
  activeClassname?: string
  inactiveClassname?: string
  children: React.ReactNode
  title: string
  active: boolean
  translateTo?: string
}

export interface QuickStartProps {
  onClick: () => void
  hidden: boolean
}
