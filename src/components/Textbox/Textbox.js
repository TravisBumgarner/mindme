import React, { Component } from 'react'
// import PropTypes from 'prop-types'

import { 
  TextArea
} from './Textbox.styles'

export default class Textbox extends Component {
  render() {
    const {
      onClick,
      children,
    } = this.props

    return (
      <TextArea/>
    )
  }
}

Textbox.propTypes = {
}