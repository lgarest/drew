import { describe, expect, it, mock, test } from 'bun:test'

import { throttle } from './throttle'

describe('GIVEN: a function that takes a delay in milliseconds', () => {
  describe('WHEN: we call the throttle function', () => {
    it('THEN: the function is called only once every specified delay', async () => {
      // arrange
      const delay = 100
      // const func = mock((s) => `${s} hey`)
      const func = mock((s: string) => `${s} received`)
      const throttleFunc = throttle(func, delay)

      // act (as if a user where typing Batman)
      const actual1 = throttleFunc('B') // ms elapsed: 0 -> called
      await Bun.sleep(50)
      const actual2 = throttleFunc('a') // ms elapsed: 50
      await Bun.sleep(50)
      const actual3 = throttleFunc('t') // ms elapsed: 100 -> called
      await Bun.sleep(50)
      const actual4 = throttleFunc('m') // ms elapsed: 150
      await Bun.sleep(50)
      const actual5 = throttleFunc('a') // ms elapsed: 200 --> called
      await Bun.sleep(50)
      const actual6 = throttleFunc('n') // ms elapsed: 250

      // assert
      expect(func).toHaveBeenCalledTimes(3)
      expect(func).toHaveBeenNthCalledWith(1, 'B')
      expect(func).toHaveBeenNthCalledWith(2, 't')
      expect(func).toHaveBeenNthCalledWith(3, 'a')

      // assert
      expect(func).toHaveBeenLastCalledWith('a')
      expect(actual1).toEqual('B received')
      expect(actual2).toBeUndefined()
      expect(actual3).toEqual('t received')
      expect(actual4).toBeUndefined()
      expect(actual5).toEqual('a received')
      expect(actual6).toBeUndefined()
    })
  })
})
