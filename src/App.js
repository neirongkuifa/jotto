import React, { Component } from 'react'
import './App.css'
import Input from './Input'
import Congrats from './Congrats'
import GuessedWords from './GuessedWords'
import { Provider } from 'react-redux'
import store from './redux/store'

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <div className='container'>
          <h1 className='text-center'>Jotto</h1>
          <Input />
          <Congrats success={false} />
          <GuessedWords
            guessedWords={[
              { guessedWord: 'Hello', letterMatchCount: 2 },
              { guessedWord: 'Hero', letterMatchCount: 3 }
            ]}
          />
        </div>
      </Provider>
    )
  }
}

export default App
