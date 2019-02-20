import React from 'react'
import jest from 'jest'
import Enzyme from 'enzyme'
import Adaptor from 'enzyme-adapter-react-16'

export const findByTestAttr = (wrapper, attrVal) => {
  return wrapper.find(`[data-test='${attrVal}']`)
}
