import { getLetterMatchCount } from '../helpers/index'
import axios from 'axios'

export const UPDATE_SUCCESS = 'UPDATE_SUCCESS'
export const GUESS_WORD = 'GUESS_WORD'
export const SET_SECRET_WORD = 'SET_SECRET_WORD'

export const getSecretWord = () => (dispatch, getState) => {
  return axios
    .get('http://localhost:3030')
    .then(response =>
      dispatch({ type: SET_SECRET_WORD, payload: response.data })
    )
}

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
