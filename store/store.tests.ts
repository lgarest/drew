import { describe, it, expect } from '../utils/test'

import { MissingActionError } from './store.errors'
import Store from './store'

describe('GIVEN: a generic store', () => {
  describe('WHEN: it is in the initial state', () => {
    const counterInitialState = 0
    const counterStore = new Store(
      { n: counterInitialState },
      {
        actions: {
          increment: state => state.n++,
        },
      }
    )
    it('THEN: its values should be the initial ones', () => {
      // arrange
      const expected = 0

      // assert
      expect(counterStore.state.n).toEqual(expected)
    })
    it('AND: its history should be empty', () => {
      expect(counterStore.history).toBeEmpty()
    })
  })
  describe('WHEN: it is in whichever state', () => {
    const counterStore = new Store(
      { n: 288 },
      {
        actions: {
          increment: state => state.n++,
        },
      }
    )

    it('THEN: its values can be modified dispatching actions', () => {
      // arrange
      const expected = 290

      // act
      counterStore.dispatch('increment')
      counterStore.dispatch('increment')

      // assert
      expect(counterStore.state.n).toEqual(expected)
    })
    it('AND: its history is modified accordingly', () => {
      // arrange
      const expected = ['increment', 'increment']

      // assert
      expected.every(expectedAction =>
        expect(counterStore.history).toContain(expectedAction)
      )
      expect(counterStore.history.length).toEqual(2)
    })
    it('AND: it throws a MissingActionError when dispatching non existing actions', () => {
      // act
      try {
        counterStore.dispatch('this should blow up')
      } catch (error) {
        expect(error instanceof MissingActionError).toBeTruthy()
      }

      // assert
      expect(counterStore.history).toNotContain('this should blow up')
    })
  })
})

describe('GIVEN: a store with the observer pattern', () => {
  const broadcastStore = new Store(
    {},
    {
      actions: {
        broadcastMessage: (state, ..._messages) => state,
      },
    }
  )
  let counter = 0

  const adderWorker = (actionName: string, message: string) => {
    if (message === 'addOne') counter++
  }

  const resetStore = () => {
    broadcastStore.listeners = []
    broadcastStore.history = []
  }

  describe('WHEN: there are no listeners', () => {
    resetStore()

    it('THEN: the listeners list is empty', () => {
      // assert
      expect(broadcastStore.listeners).toBeEmpty()
      expect(broadcastStore.history).toBeEmpty()
      expect(counter).toEqual(0)
    })
  })

  describe('WHEN: there are no listeners AND we dispatch an action', () => {
    resetStore()

    it('THEN: the action is added, but no listener acts', () => {
      // act
      broadcastStore.dispatch('broadcastMessage', 'addOne')

      // assert
      expect(broadcastStore.listeners).toBeEmpty()
      expect(broadcastStore.history).toContain('broadcastMessage')
      expect(broadcastStore.history.length).toEqual(1)
      expect(counter).toEqual(0)
    })
  })

  describe('WHEN: there is a listener AND we dispatch an action', () => {

    it('THEN: if the action matches what a listener expects, that listener acts', () => {
      // assert
      resetStore()
      expect(broadcastStore.listeners).toBeEmpty()
      expect(broadcastStore.history).toBeEmpty()

      // act
      broadcastStore.subscribe(adderWorker)
      broadcastStore.dispatch('broadcastMessage', 'addOne')

      // assert
      expect(broadcastStore.listeners.length).toEqual(1)
      expect(broadcastStore.history.length).toEqual(1)
      expect(counter).toEqual(1)
    })

    it('THEN: if the action does not match what a listener expects, no listener acts', () => {
      // arrange
      resetStore()
      counter = 0
      broadcastStore.subscribe(adderWorker)

      // assert
      expect(broadcastStore.listeners.length).toEqual(1)
      expect(broadcastStore.history).toBeEmpty()

      // act
      broadcastStore.dispatch('broadcastMessage', 'noListener')

      // assert
      expect(broadcastStore.listeners.length).toEqual(1)
      expect(broadcastStore.history.length).toEqual(1)
      expect(counter).toEqual(0)
    })
  })

  describe('WHEN: there is a listener AND we unsubscribe it before dispatching its matching action', () => {

    it('THEN: there are no listeners that can act', () => {
      // arrange 
      resetStore()
      counter = 0
      broadcastStore.subscribe(adderWorker)

      // assert
      expect(broadcastStore.listeners.length).toEqual(1)
      expect(broadcastStore.history).toBeEmpty()

      // act
      broadcastStore.unsubscribe(adderWorker)
      broadcastStore.dispatch('broadcastMessage', 'addOne')

      // assert
      expect(broadcastStore.listeners).toBeEmpty()
      expect(broadcastStore.history.length).toEqual(1)
      expect(counter).toEqual(0)
    })
  })
})
