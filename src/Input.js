import React from 'react'
import { connect } from 'react-redux'
import { guessWord } from './redux/actions'

export class Input extends React.Component {
  inputBox = React.createRef()
  handleSubmit = evt => {
    evt.preventDefault()
    const guessWord = this.inputBox.current.value
    if (guessWord && guessWord.length > 0) {
      this.props.guessWord(guessWord)
      this.inputBox.current.value = ''
    }
  }
  render() {
    return (
      <div data-test='input-cpn' className='mb-2'>
        {this.props.success ? null : (
          <form>
            <div className='form-row'>
              <div className='col'>
                <input
                  ref={this.inputBox}
                  type='text'
                  className='form-control'
                  data-test='input-text'
                  placeholder='Guess a word!~'
                />
              </div>
              <div className='col'>
                <button
                  type='submit'
                  className='btn btn-primary'
                  data-test='input-btn'
                  onClick={this.handleSubmit}>
                  Check
                </button>
              </div>
            </div>
          </form>
        )}
      </div>
    )
  }
}

const mapState = state => ({ success: state.success })
const mapDispatch = { guessWord }
export default connect(
  mapState,
  mapDispatch
)(Input)
