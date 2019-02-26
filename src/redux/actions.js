import { getLetterMatchCount } from '../helpers/index'
import { storeFactory } from '../../test/testUtils'

export const UPDATE_SUCCESS = 'UPDATE_SUCCESS'
export const GUESS_WORD = 'GUESS_WORD'

export const guessWord = guessedWord => (dispatch, getState) => {
  const { secretWord } = getState()
  const letterMatchCount = getLetterMatchCount(guessedWord, secretWord)
  const guessAction = {
    type: GUESS_WORD,
    payload: {
      guessedWord,
      letterMatchCount
    }
  }
  dispatch(guessAction)
  if (guessedWord === secretWord) {
    const successAction = {
      type: UPDATE_SUCCESS
    }
    dispatch(successAction)
  }
}
