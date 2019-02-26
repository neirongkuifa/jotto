import { guessWord } from './redux/actions'
import { getLetterMatchCount } from './helpers/index'
import { storeFactory } from '../test/testUtils'
import thunk from 'redux-thunk'

describe('guessWord action dispatcher', () => {
  const secretWord = 'Herbal'
  const failedGuess = 'Hey'
  describe('no guessed word', () => {
    let store
    beforeEach(() => {
      store = storeFactory({ secretWord }, thunk)
    })
    it('updates state correctly when guess failed', () => {
      store.dispatch(guessWord(failedGuess))
      const expectedState = {
        secretWord,
        success: false,
        guessedWords: [
          {
            guessedWord: failedGuess,
            letterMatchCount: getLetterMatchCount(failedGuess, secretWord)
          }
        ]
      }
      expect(store.getState()).toEqual(expectedState)
    })
    it('updates state correctly when guess succeed', () => {
      store.dispatch(guessWord(secretWord))
      const expectedState = {
        secretWord,
        success: true,
        guessedWords: [
          {
            guessedWord: secretWord,
            letterMatchCount: getLetterMatchCount(secretWord, secretWord)
          }
        ]
      }
      expect(store.getState()).toEqual(expectedState)
    })
  })
  describe('some guessed word', () => {
    let store
    beforeEach(() => {
      store = storeFactory(
        {
          success: false,
          secretWord,
          guessedWords: [
            {
              guessedWord: 'Hero',
              letterMatchCount: getLetterMatchCount('Hero', secretWord)
            }
          ]
        },
        thunk
      )
    })
    it('updates state correctly when guess failed', () => {
      store.dispatch(guessWord(failedGuess))
      const expectedState = {
        secretWord,
        success: false,
        guessedWords: [
          {
            guessedWord: 'Hero',
            letterMatchCount: getLetterMatchCount('Hero', secretWord)
          },
          {
            guessedWord: failedGuess,
            letterMatchCount: getLetterMatchCount(failedGuess, secretWord)
          }
        ]
      }
      expect(store.getState()).toEqual(expectedState)
    })
    it('updates state correctly when guess succeed', () => {
      store.dispatch(guessWord(secretWord))
      const expectedState = {
        secretWord,
        success: true,
        guessedWords: [
          {
            guessedWord: 'Hero',
            letterMatchCount: getLetterMatchCount('Hero', secretWord)
          },
          {
            guessedWord: secretWord,
            letterMatchCount: getLetterMatchCount(secretWord, secretWord)
          }
        ]
      }
      expect(store.getState()).toEqual(expectedState)
    })
  })
})
