import React from 'react'
import ReactDOM from 'react-dom'
import Apps, { App } from './App'
import { getSecretWord } from './redux/actions'
import { Provider } from 'react-redux'
import { storeFactory } from '../test/testUtils'
import thunk from 'redux-thunk'
import { mount, shallow } from 'enzyme'

const setup = (initState = {}) => {
  const store = storeFactory(initState, thunk)
  const wrapper = mount(
    <Provider store={store}>
      <Apps />
    </Provider>
  )
  return wrapper
}
describe('App', () => {
  it('renders without crashing', () => {
    const wrapper = setup()
    expect(wrapper.find(Apps).length).toBe(1)
  })

  it('receives redux state as props succesfully', () => {
    const wrapper = setup({
      success: true,
      secretWord: 'Herbal',
      guessedWords: [
        {
          guessWord: 'Herbal',
          letterMatchCount: 6
        }
      ]
    })
    const props = wrapper.find('App').instance().props
    expect(props.success).toBe(true)
    expect(props.secretWord).toEqual('Herbal')
    expect(props.guessedWords).toEqual([
      {
        guessWord: 'Herbal',
        letterMatchCount: 6
      }
    ])
  })

  it('receives redux action as props successfully', () => {
    const wrapper = setup()
    expect(wrapper.find('App').instance().props.getSecretWord).toBeInstanceOf(
      Function
    )
  })

  it('runs getSecretWord on component mount', () => {
    const getSecretWordMock = jest.fn()
    const wrapper = shallow(<App getSecretWord={getSecretWordMock} />)
    wrapper.instance().componentDidMount()
    expect(getSecretWordMock.mock.calls.length).toBe(1)
  })
})
