import React from 'react'
import { mount, shallow } from 'enzyme'
import Inputs, { Input } from './Input'
import { Provider } from 'react-redux'
import { findByTestAttr, storeFactory } from '../test/testUtils'

const defaultProps = {}
const setup = (initialState = {}) => {
  const store = storeFactory(initialState)
  const wrapper = mount(
    <Provider store={store}>
      <Inputs />
    </Provider>
  )
  return wrapper
}

describe('Input Component', () => {
  describe('render', () => {
    it('renders without crashing', () => {
      const wrapper = setup()
      expect(findByTestAttr(wrapper, 'input-cpn').length).toBe(1)
    })

    it('renders nothing when success is true', () => {
      const wrapper = setup({ success: true })
      expect(findByTestAttr(wrapper, 'input-text').length).toBe(0)
      expect(findByTestAttr(wrapper, 'input-btn').length).toBe(0)
    })

    it('renders input box and button when success is false', () => {
      const wrapper = setup({ success: false })
      expect(findByTestAttr(wrapper, 'input-text').length).toBe(1)
      expect(findByTestAttr(wrapper, 'input-btn').length).toBe(1)
    })

    it('calls guessWord when click button', () => {
      const guessWordMock = jest.fn()
      const wrapper = shallow(<Input guessWord={guessWordMock} />)
      wrapper.instance().inputBox.current = { value: 'Hello' }
      findByTestAttr(wrapper, 'input-btn').simulate('click', {
        preventDefault: () => null
      })
      expect(guessWordMock.mock.calls.length).toBe(1)
    })

    it('passes correct args to guessWord', () => {
      const guessWordMock = jest.fn()
      const wrapper = shallow(<Input guessWord={guessWordMock} />)
      wrapper.instance().inputBox.current = { value: 'Hello' }
      findByTestAttr(wrapper, 'input-btn').simulate('click', {
        preventDefault: () => null
      })
      expect(guessWordMock.mock.calls[0][0]).toBe('Hello')
    })

    it('clears inputbox after submit', () => {
      const guessWordMock = jest.fn()
      const wrapper = shallow(<Input guessWord={guessWordMock} />)
      wrapper.instance().inputBox.current = { value: 'Hello' }
      findByTestAttr(wrapper, 'input-btn').simulate('click', {
        preventDefault: () => null
      })
      expect(wrapper.instance().inputBox.current.value).toEqual('')
    })
  })
})

describe('redux props', () => {
  it('receives redux state as props successfully', () => {
    const wrapper = setup({ success: true })
    expect(wrapper.find('Input').instance().props.success).toBe(true)
  })

  it('receives redux action creators as props successfully', () => {
    const wrapper = setup()
    expect(typeof wrapper.find('Input').instance().props.guessWord).toEqual(
      'function'
    )
  })
})
