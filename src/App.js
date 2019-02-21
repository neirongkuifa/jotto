import React, { Component } from 'react'
import './App.css'
import Congrats from './Congrats'
import GuessedWords from './GuessedWords'

class App extends Component {
  render() {
    return (
      <div className='container'>
        <h1>Jotto</h1>
        <Congrats success={true} />
        <GuessedWords
          guessedWords={[
            { guessedWord: 'Hello', letterMatchCount: 2 },
            { guessedWord: 'Hero', letterMatchCount: 3 }
          ]}
        />
      </div>
    )
  }
}

export default App
