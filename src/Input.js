import React from 'react'
import { connect } from 'react-redux'

class Input extends React.Component {
  render() {
    return (
      <div data-test='input-cpn' className='mb-2'>
        {this.props.success ? null : (
          <form>
            <div className='form-row'>
              <div className='col'>
                <input
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
                  data-test='input-btn'>
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
export default connect(
  mapState,
  null
)(Input)
