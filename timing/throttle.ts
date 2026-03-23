/**
 * Creates a throttled version of the provided function.
 *
 * The throttled function will only invoke the original function at most once every `delay` milliseconds.
 * If the throttled function is called again before the delay has passed, the call is ignored.
 *
 * @param fn - The function to throttle.
 * @param delay - The number of milliseconds to wait before allowing another call.
 * @returns A throttled version of the function that returns the result of `fn` or `undefined` if throttled.
 */
export const throttle = <A extends unknown[], R>(
  fn: (...args: A) => R,
  delay: number
): ((...args: A) => R | undefined) => {
  let isThrottling = false

  return (...args: A): R | undefined => {
    if (isThrottling) return undefined
    isThrottling = true
    const result = fn(...args)
    setTimeout(() => {
      isThrottling = false
    }, delay)
    return result
  }
}
