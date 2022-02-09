import { Actions } from './store.types'

export class MissingActionError extends Error {
  constructor(action: string, actions: Actions) {
    super(`Can't find '${action}' action in the defined actions:
    defined actions names are: ${Object.keys(actions).map(
      action => `'${action}'`
    )}
    `)
    this.name = this.constructor.name
  }
}
