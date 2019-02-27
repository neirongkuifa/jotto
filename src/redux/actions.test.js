import moxios from 'moxios'
import { storeFactory } from '../../test/testUtils'
import { getSecretWord } from './actions'
import thunk from 'redux-thunk'
import jest from 'jest'

describe('getSecretWord function', () => {
  beforeEach(() => {
    moxios.install()
  })
  afterEach(() => {
    moxios.uninstall()
  })
  it('adds response word to the state', async () => {
    const secretWord = 'Herbal'
    const store = storeFactory({}, thunk)
    const initState = store.getState()

    moxios.wait(() => {
      const request = moxios.requests.mostRecent()
      request.respondWith({
        status: 200,
        response: secretWord
      })
    })

    await store.dispatch(getSecretWord())
    const newState = store.getState()
    expect(newState).toEqual({
      ...initState,
      secretWord
    })
  })
})
