import { isNull } from "../index";

describe('isNull', () => {
  it('should return true if value is null', () => {
    const result = isNull(null)
    expect(result).toBe(true)
  })
  it('should return false if value is null', () => {
    const result = isNull('bala bala')
    expect(result).toBe(false)
  })
})

