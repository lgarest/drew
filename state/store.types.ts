export type State = Record<string, any>

export type Action = (arg0: State, ...args: any) => void

export type Actions = Record<string, Action>

export type Listener = (arg0: string, ...args: any) => any

export type Listeners = Array<Listener>
