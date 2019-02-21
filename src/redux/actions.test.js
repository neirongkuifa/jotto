import jest from 'jest'
import store from './store'
import * as ACTIONS from './actions'

//What action test does is to check if action creators return correct actions
describe('updateSuccess action', () => {
  it('returns an action with type UPDATE_SUCCESS', () => {
    const action = ACTIONS.updateSuccess()
    expect(action).toEqual({ type: ACTIONS.UPDATE_SUCCESS })
  })
})
