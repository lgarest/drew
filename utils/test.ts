
const logIndented = (indentation: number) => (msg: any) => {
  const paddingLeft = Array(indentation).fill('').join(' ')
  console.log(`${paddingLeft} ${msg}`)
}


let indentation = 0
class AssertionError extends Error {
  constructor(msg: any) {
    super(msg)
    this.name = this.constructor.name
  }
}
const testingScope = () => (description: string, fn: () => void) => {
  indentation += 2
  logIndented(indentation)(description)
  fn()
  indentation -= 2
}

const VERBOSE = true

const assertion = (inString: string, conditional: boolean) => {
  const success = conditional == true
  VERBOSE && success && logIndented(indentation + 2)('CHECK: ' + inString)
  if (!success) {
    throw new AssertionError(`FAIL: ${inString}`)
  }
}

export const expect = (value: any) => ({
  toBe: (other: typeof value) =>
    assertion(`${value} is ${other}`, value === other),
  toEqual: (other: typeof value) =>
    assertion(`${value} equals ${other}`, value == other),
  toBeGreaterThan: (other: typeof value) =>
    assertion(`${value} is greater than ${other}`, value > other),
  toBeGreaterEqualThan: (other: typeof value) =>
    assertion(`${value} is greater or equal than ${other}`, value >= other),
  toBeLessThan: (other: typeof value) =>
    assertion(`${value} is less than ${other}`, value < other),
  toBeLessEqualThan: (other: typeof value) =>
    assertion(`${value} is less or equal than ${other}`, value <= other),
  toBeInRange: (start: typeof value, end: typeof value) =>
    assertion(
      `${value} is in between ${start} and ${end} so [${start}, ${value}, ${end}]`,
      start <= value && value <= end
    ),
  toNotBeInRange: (start: typeof value, end: typeof value) =>
    assertion(
      `${value} is not in between ${start} and ${end} so ${value} is outside [${start}, ${end}]`,
      !(start <= value && value <= end)
    ),
  toNotBeEmpty: () =>
    assertion(
      `${value} is not empty`,
      !(
        (Array.isArray(value) && value.length == 0) ||
        Object.keys(value).length == 0
      )
    ),
  toBeEmpty: () =>
    assertion(
      `${value} is empty`,
      (Array.isArray(value) && value.length == 0) ||
        Object.keys(value).length == 0
    ),
  toBeTruthy: () => assertion(`${value} is truthy`, Boolean(value) == true),
  toBeFalsy: () => assertion(`${value} is falsy`, Boolean(value) == false),
  toBeDefined: () => assertion(`${value} is defined`, value !== undefined),
  toBeA: (type: string) =>
    assertion(
      `${value} has the same type as ${type}`,
      typeof value === typeof type
    ),
  toNotContain: (other: any) =>
    assertion(
      `${value} does not contain '${other}'`,
      Array.isArray(value)
        ? !value.includes(other)
        : value[other] === undefined
    ),
  toContain: (other: any) =>
    assertion(
      `${value} contains '${other}'`,
      Array.isArray(value)
        ? value.includes(other)
        : value[other] !== undefined
    ),
})

export const describe = testingScope()
export const it = testingScope()
