import React from 'react'
import jest from 'jest'
import Enzyme from 'enzyme'
import Adaptor from 'enzyme-adapter-react-16'
import checkPropTypes from 'check-prop-types'

export const checkProps = (cpn, props) => {
  return checkPropTypes(cpn.propTypes, props, 'prop', cpn.name)
}

export const findByTestAttr = (wrapper, attrVal) => {
  return wrapper.find(`[data-test='${attrVal}']`)
}
