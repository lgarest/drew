import { describe, expect, it } from 'bun:test'
// import { formatDateSimple, formatDateTime } from './dates'

describe('formatDateSimple', () => {
  it('formats a date as YYYY-MM-DD', () => {
    const date = new Date('2023-06-15T12:34:56.789Z')
    expect(formatDateSimple(date)).toBe('2023-06-15')
  })

  it('handles dates with single-digit months and days', () => {
    const date = new Date('2023-01-05T00:00:00.000Z')
    expect(formatDateSimple(date)).toBe('2023-01-05')
  })
})

describe('formatDateTime', () => {
  it('formats a date as ISO string', () => {
    const date = new Date('2023-06-15T12:34:56.789Z')
    expect(formatDateTime(date)).toBe('2023-06-15T12:34:56.789Z')
  })
})
