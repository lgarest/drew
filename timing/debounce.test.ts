import { describe, expect, it, mock } from 'bun:test'

import { debounce } from './debounce'

describe('GIVEN: a function that takes a delay in milliseconds', () => {
  describe('WHEN: we call the debounced function', () => {
    it('THEN: the function is called after the specified delay', async () => {
      // arrange
      const delay = 100
      const func = mock((s) => `${s} bye`)
      const debouncedFunc = debounce(func, delay)

      // act
      const actual1 = debouncedFunc('foo')
      const actual2 = debouncedFunc('bar')

      // assert
      expect(func).toHaveBeenCalledTimes(0)
      await Bun.sleep(50)
      expect(func).toHaveBeenCalledTimes(0)

      // assert
      await Bun.sleep(50)
      expect(func).toHaveBeenCalledTimes(1)
      expect(func).toHaveBeenLastCalledWith('bar')
      expect(await actual1).toBeUndefined()
      expect(await actual2).toEqual('bar bye')
    })
  })
})
