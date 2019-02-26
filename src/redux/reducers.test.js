import jest from 'jest'
import * as REDUCERS from './reducers'
import * as ACTIONS from './actions'

describe('successReducer', () => {
  it('returns default state if action type is not related', () => {
    expect(REDUCERS.successRducer(undefined, {})).toBeFalsy()
  })

  it('returns updated state if action type is related', () => {
    expect(
      REDUCERS.successRducer(undefined, { type: ACTIONS.UPDATE_SUCCESS })
    ).toBeTruthy()
  })
})
/*
describe('guessedWordsReducer', () => {
  it('returns default state if action type is not related', () => {
    expect(REDUCERS.guessedWordsReducer(undefined, {})).toEqual([])
  })

  it('returns updated state if action type is related', () => {
    expect(
      REDUCERS.guessedWordsReducer(undefined, {
        type: ACTIONS.INSERT_GUESSEDWORDS,
        payload: { gussedWord: 'Hero', letterMatchCount: 3 }
      })
    ).toEqual([{ gussedWord: 'Hero', letterMatchCount: 3 }])
  })
})
*/
