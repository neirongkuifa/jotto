import jest from 'jest'
import React from 'react'
import { mount } from 'enzyme'
import Input from './Input'
import { Provider } from 'react-redux'
import { findByTestAttr, storeFactory } from '../test/testUtils'

const defaultProps = {}
const setup = (initialState = {}) => {
  const store = storeFactory(initialState)
  const wrapper = mount(
    <Provider store={store}>
      <Input />
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
  })
})
