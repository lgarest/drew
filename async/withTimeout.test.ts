import { describe, expect, it } from 'bun:test'
// import { PromiseTimeoutError, retry, withTimeout } from './promises'

describe('withTimeout', () => {
  it('resolves if promise completes before timeout', async () => {
    const fastPromise = new Promise<string>((res) => setTimeout(() => res('done'), 100))
    const result = await withTimeout(fastPromise, 500, 'Timeout')
    const expected = 'done'

    expect(result).toBe(expected)
  })

  it('rejects if promise does not complete before timeout', async () => {
    const slowPromise = new Promise<string>((res) => setTimeout(() => res('done'), 1000))
    const expected = 'Timeout error'

    expect(withTimeout(slowPromise, 200, 'Timeout error')).rejects.toThrow(expected)
  })

  it('uses default timeout if not specified', async () => {
    const slowPromise = new Promise<string>((res) => setTimeout(() => res('done'), 1000))
    const expected = 'Promise timed out'

    expect(withTimeout(slowPromise)).rejects.toThrow(expected)
  })
})

describe('retry', () => {
  it('succeeds on first try', async () => {
    const curriedPromise = () => Promise.resolve('success')
    const expected = 'success'
    const result = await retry(curriedPromise, 3)

    expect(result).toBe(expected)
  })

  it('retries on matching error and eventually resolves', async () => {
    const expectedResult = 'success'
    const expectedAttempts = 4

    let attempts = 0
    const curriedPromise = () => {
      attempts++
      if (attempts < 4) return Promise.reject(new PromiseTimeoutError('timeout'))
      return Promise.resolve('success')
    }
    const result = await retry(curriedPromise, 5, PromiseTimeoutError)

    expect(result).toBe(expectedResult)
    expect(attempts).toBe(expectedAttempts)
  })

  it('stops retrying after n attempts and rejects', async () => {
    const expectedResult = 'timeout'
    const expectedAttempts = 3

    let attempts = 0
    const curriedPromise = () => {
      attempts++
      return Promise.reject(new PromiseTimeoutError('timeout'))
    }
    expect(retry(curriedPromise, 3, PromiseTimeoutError)).rejects.toThrow(expectedResult)
    expect(attempts).toBe(expectedAttempts)
  })

  it('does not retry on non-matching error', async () => {
    const expectedAttempts = 1
    const expectedResult = 'different error'

    let attempts = 0
    const curriedPromise = () => {
      attempts++
      return Promise.reject(new Error('different error'))
    }
    expect(retry(curriedPromise, 3, PromiseTimeoutError)).rejects.toThrow(expectedResult)

    expect(attempts).toBe(expectedAttempts)
  })
})
