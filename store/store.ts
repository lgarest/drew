import { Actions } from './store.types'
import { Listener } from './store.types'
import { Listeners } from './store.types'
import { State } from './store.types'
import { MissingActionError } from './store.errors'

class Store {
  state: State
  actions: Actions
  listeners: Listeners
  history: Array<string>
  constructor(initialState: State, { actions }: { actions: Actions }) {
    this.state = initialState
    this.actions = actions
    this.listeners = []
    this.history = []
    /*
      Another option instead of pasing the state to the actions is:
      bind the Store to the actions so they have access to the store through 'this'
      for (const action in this.actions) {
        this.actions[action] = this.actions[action].bind(this)
      }
      and then define the actions as:
      { increment: function() { this.state.counter++ } }
    */
  }
  dispatch(actionName: string, ...args: any): any {
    if (!(actionName in this.actions)) {
      throw new MissingActionError(actionName, this.actions)
    }
    const toBeReturned = this.actions[actionName](this.state, ...args)
    this.history.push(actionName)
    this.listeners.forEach(listener => listener(actionName, ...args))
    return toBeReturned
  }
  subscribe(listener: Listener) {
    if (!this.listeners.includes(listener)) this.listeners.push(listener)
  }
  unsubscribe(listener: Listener) {
    const indexOfListener = this.listeners.indexOf(listener)
    if (indexOfListener >= 0) this.listeners.splice(indexOfListener, 1)
  }
}

export default Store
