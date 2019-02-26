import { getLetterMatchCount } from './index'

describe('getLetterMatchCount function', () => {
  it('returns correct match count when partially match', () => {
    const count = getLetterMatchCount('Hero', 'Herbal')
    expect(count).toEqual(3)
  })
  it('returns correct match count when fully match', () => {
    const count = getLetterMatchCount('Herbal', 'Herbal')
    expect(count).toEqual(6)
  })

  it('returns correct match count when match failed', () => {
    const count = getLetterMatchCount('xyz', 'Herbal')
    expect(count).toEqual(0)
  })
})
