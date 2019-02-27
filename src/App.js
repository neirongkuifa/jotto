import React, { Component } from 'react'
import './App.css'
import Input from './Input'
import Congrats from './Congrats'
import GuessedWords from './GuessedWords'
import { getSecretWord } from './redux/actions'
import { connect } from 'react-redux'

export class App extends Component {
  componentDidMount() {
    this.props.getSecretWord()
  }
  render() {
    return (
      <div className='container'>
        <h1 className='text-center'>Jotto</h1>

        <Input />
        <Congrats success={this.props.success} />
        <GuessedWords guessedWords={this.props.guessedWords} />
      </div>
    )
  }
}

const mapState = state => ({ ...state })
const mapDispatch = { getSecretWord }

export default connect(
  mapState,
  mapDispatch
)(App)
