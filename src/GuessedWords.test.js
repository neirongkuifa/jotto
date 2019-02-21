import jest from 'jest'
import React from 'react'
import { shallow } from 'enzyme'
import { findByTestAttr, checkProps } from '../test/testUtils'
import GuessedWords from './GuessedWords'

const defaultProps = {
  guessedWords: [{ guessedWord: 'Hello', letterMatchCount: 2 }]
}

const setup = (props = {}) => {
  const setupProps = { ...defaultProps, ...props }
  return shallow(<GuessedWords {...setupProps} />)
}

describe('GuessedWords Component', () => {
  it('renders without crashing', () => {
    const wrapper = setup()
    expect(findByTestAttr(wrapper, 'guessedWords-cpn').length).toBe(1)
  })

  it('correctly validates props types', () => {
    const expectedProps = {
      guessedWords: [{ guessedWord: 'Hello', letterMatchCount: 2 }]
    }
    const error = checkProps(GuessedWords, expectedProps)
    expect(error).toBeUndefined()
  })

  it('shows instruction when props is empty', () => {
    const wrapper = setup({ guessedWords: [] })
    const instruction = findByTestAttr(wrapper, 'instruction')
    expect(instruction.text().length).not.toBe(0)
  })

  it('shows a table when props is nonempty and hides instruction', () => {
    const wrapper = setup()
    const instruction = findByTestAttr(wrapper, 'instruction')
    const wordsTable = findByTestAttr(wrapper, 'wordsTable')
    expect(instruction.length).toBe(0)
    expect(wordsTable.length).toBe(1)
  })

  it.skip('updates when props delivers gussedWords data', () => {
    const wrapper = setup()
  })
})
