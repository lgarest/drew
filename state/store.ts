import type { Actions, Listener, Listeners, State } from './store.types'
import { MissingActionError } from './store.errors'

/**
 * Creates a simple state management store using the observer pattern.
 *
 * The store holds the application state, a set of actions to mutate the state,
 * and allows listeners to subscribe to state changes via closures.
 *
 * - Actions are functions that receive the current state and any arguments, and can mutate the state.
 * - Listeners are notified whenever an action is dispatched.
 * - The history of dispatched actions is recorded.
 *
 * @param initialState - The initial state object
 * @param actions - An object containing action functions
 * @returns A store object with state, dispatch, subscribe, unsubscribe, listeners, and history
 */
function createStore(
  initialState: State,
  { actions }: { actions: Actions }
) {
  // Private state via closure
  let state = initialState
  const listeners: Listeners = []
  const history: Array<string> = []

  /**
   * Dispatches an action by name, passing the state and any additional arguments.
   * Notifies all listeners and records the action in history.
   * @param actionName - The name of the action to dispatch.
   * @param args - Additional arguments to pass to the action.
   * @returns The result of the action function.
   * @throws {MissingActionError} If the action does not exist.
   */
  const dispatch = (actionName: string, ...args: any): any => {
    if (!(actionName in actions)) {
      throw new MissingActionError(actionName, actions)
    }
    const result = actions[actionName]!(state, ...args)
    history.push(actionName)
    listeners.forEach((listener) => listener(actionName, ...args))
    return result
  }

  /**
   * Subscribes a listener to be notified on every dispatched action.
   * @param listener - The listener function to add.
   */
  const subscribe = (listener: Listener) => {
    if (!listeners.includes(listener)) listeners.push(listener)
  }

  /**
   * Unsubscribes a listener.
   * @param listener - The listener function to remove.
   */
  const unsubscribe = (listener: Listener) => {
    const indexOfListener = listeners.indexOf(listener)
    if (indexOfListener >= 0) listeners.splice(indexOfListener, 1)
  }

  /**
   * Internal helper to clear listeners and history (for testing).
   * Modifies arrays in-place to maintain closure invariants.
   */
  const _reset = () => {
    listeners.length = 0
    history.length = 0
  }

  // Return public API
  return {
    state,
    dispatch,
    subscribe,
    unsubscribe,
    listeners,
    history,
    _reset,
  }
}

export default createStore
