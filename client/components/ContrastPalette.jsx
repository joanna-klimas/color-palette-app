import React from 'react'
import { Link } from 'react-router-dom'

import Contrast from './Contrast'

class ContrastPalette extends React.Component {
  constructor() {
    super()

    this.state = {
      height: 30,
      width: 60,
      backgroundColor: this.randomHexColor()
    }
  }
  randomHexColor = () =>
    `#${Math.floor(Math.random() * 0x1000000).toString(16).padStart(6, 0)}`

  render() {
    return (
      <React.Fragment>
   
        <h3>contrast:</h3>
        <Contrast />
        <Contrast />
        <Contrast />
        <Link to={'/'}><button>Try again!</button></Link>
      </React.Fragment>
    )
  }
}

export default ContrastPalette