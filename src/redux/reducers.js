import { combineReducers } from 'redux'
import * as ACTIONS from './actions'

export const successRducer = (state = false, action) => {
  if (action.type === ACTIONS.UPDATE_SUCCESS) {
    return true
  }
  return state
}

export const secretWordReducer = (state = '', action) => {
  return state
}

export const guessedWordsReducer = (state = [], action) => {
  return state
}

const reducer = combineReducers({
  success: successRducer,
  secretWord: secretWordReducer,
  guessedWords: guessedWordsReducer
})

export default reducer
