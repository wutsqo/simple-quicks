import { createContext } from "react"

interface InboxContextProps {
  activeChatId: string | null
  setActiveChatId: (id: string) => void
  removeActiveChatId: () => void
}

export type QuickLauncherState = "initial" | "expanded" | "inbox" | "task"

interface QuickLauncherContextProps {
  containerState: QuickLauncherState
  setContainerState: (state: QuickLauncherState) => void
}

export const InboxContext = createContext<InboxContextProps>({
  activeChatId: null,
  setActiveChatId: (_id: string) => {},
  removeActiveChatId: () => {},
})

export const ContainerContext = createContext<QuickLauncherContextProps>({
  containerState: "initial",
  setContainerState: (_state: QuickLauncherState) => {},
})
