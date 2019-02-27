import React from 'react'
import PropTypes from 'prop-types'

export default class GussedWords extends React.Component {
  render() {
    return (
      <div data-test='guessedWords-cpn'>
        {this.props.guessedWords.length === 0 ? (
          <div data-test='instruction' className='alert alert-primary'>
            <span>Try guess the answer!</span>
          </div>
        ) : (
          <div data-test='wordsTable'>
            <table className='table'>
              <thead className='thead-dark'>
                <tr>
                  <th>#</th>
                  <th>Guesses</th>
                  <th>Matches</th>
                </tr>
              </thead>
              <tbody className='table-striped'>
                {this.props.guessedWords.map((item, index) => {
                  return (
                    <tr key={index}>
                      <th>{index}</th>
                      <td>{item.guessedWord}</td>
                      <td>{item.letterMatchCount}</td>
                    </tr>
                  )
                })}
              </tbody>
            </table>
          </div>
        )}
      </div>
    )
  }
}

GussedWords.propTypes = {
  guessedWords: PropTypes.arrayOf(
    PropTypes.shape({
      guessedWord: PropTypes.string,
      letterMatchCount: PropTypes.number
    })
  )
}
