import React from 'react'
import PropTypes from 'prop-types'

function Congrats(props) {
  if (props.success) {
    return (
      <div data-test='congrats-cpn'>
        <span>Congradulations! You guess is correct!</span>
      </div>
    )
  } else {
    return null
  }
}
Congrats.propTypes = {
  success: PropTypes.bool.isRequired
}
export default Congrats
