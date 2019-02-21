import React from 'react'
import PropTypes from 'prop-types'

export default class GussedWords extends React.Component {
  render() {
    return (
      <div data-test='guessedWords-cpn'>
        {this.props.guessedWords.length === 0 ? (
          <div data-test='instruction'>
            <span>Try guess the answer!</span>
          </div>
        ) : (
          <div data-test='wordsTable'>
            <table />
          </div>
        )}
      </div>
    )
  }
}

GussedWords.propTypes = {
  guessedWords: PropTypes.arrayOf(
    PropTypes.shape({
      guessedWord: PropTypes.string.isRequired,
      letterMatchCount: PropTypes.number.isRequired
    })
  ).isRequired
}
