import React from 'react'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'

export function Congrats(props) {
  if (props.success) {
    return (
      <div data-test='congrats-cpn' className='alert alert-success'>
        <span>Congradulations! Your guess is correct!</span>
      </div>
    )
  } else {
    return null
  }
}
Congrats.propTypes = {
  success: PropTypes.bool.isRequired
}
const mapState = state => ({ success: state.success })

export default connect(
  mapState,
  null
)(Congrats)
