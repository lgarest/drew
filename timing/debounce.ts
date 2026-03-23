/**
 * Creates a debounced version of the provided function.
 *
 * The debounced function will only invoke the original function after `delay` milliseconds.
 * If the debounced function is called again before the delay has passed, the call is ignored and the timer resets.
 *
 * @param fn - The function to throttle.
 * @param delay - The number of milliseconds to wait before allowing another call.
 * @returns A debounced function that returns the result of `fn` or `undefined` if throttled.
 */
export function debounce<A extends unknown[], R>(
  fn: (...args: A) => R,
  delay: number
): (...args: A) => Promise<R | undefined> {
  /**
   * Debounce needs to:
   * 1. cancel the previous call
   * 2. reset the timer when a new call comes in
   * 3. execute the fn after the delay and return its result
   * we need promises to propagate the return value of the function to the caller
   */
  let timer: Timer | null = null
  let resolveCurrentPromise: ((value: R | undefined) => void) | null = null

  return (...args: A): Promise<R | undefined> => {
    // 1. settle the previous pending Promise with undefined (cancels the previous call)
    resolveCurrentPromise?.(undefined)

    // 2. reset timer when a new call comes in
    timer && clearTimeout(timer)

    return new Promise<R | undefined>((resolve) => {
      // update current promise resolve and timer values with new call info
      resolveCurrentPromise = resolve
      timer = setTimeout(() => {
        resolveCurrentPromise = timer = null
        // 3. execute the fn after the delay and resolve its result
        resolve(fn(...args))
      }, delay)
    })
  }
}
