import React from 'react'
import jest from 'jest'
import { shallow } from 'enzyme'
import connectedCongrats, { Congrats } from './Congrats'
import { findByTestAttr, checkProps } from '../test/testUtils'
import checkPropTypes from 'check-prop-types'

const defaultProps = { success: false }

const setup = (props = {}) => {
  const setupProps = { ...defaultProps, ...props }
  return shallow(<Congrats {...setupProps} />)
}

describe('congrats component', () => {
  it('renders without crashing', () => {
    const wrapper = setup({ success: true })
    expect(wrapper).toBeTruthy()
  })
  it('renders congrats info when succeed', () => {
    const wrapper = setup({ success: true })
    expect(wrapper.text()).toContain('Congradulations')
  })

  it('renders nothing when failed', () => {
    const wrapper = setup({ success: false })
    expect(findByTestAttr(wrapper, 'congrats-cpn').length).toBe(0)
  })

  it('validates prop types ', () => {
    const expectedProps = { success: false }
    expect(checkProps(Congrats, expectedProps)).toBeUndefined()
  })
})
