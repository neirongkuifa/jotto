import jest from 'jest'
import * as REDUCERS from './reducers'
import * as ACTIONS from './actions'

describe('successReducer', () => {
  it('returns received state if action type is not related', () => {
    expect(REDUCERS.successRducer(undefined, {})).toBeFalsy()
  })

  it('returns updated state if action type is related', () => {
    expect(
      REDUCERS.successRducer(undefined, { type: ACTIONS.UPDATE_SUCCESS })
    ).toBeTruthy()
  })
})
