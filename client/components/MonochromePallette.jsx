import React from 'react'
import { Link } from 'react-router-dom'

import Monochrome from './Monochrome'

class MonochromePalette extends React.Component {
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
   
        <h3>monochrome:</h3>
        <Monochrome />
        <Monochrome />
        <Monochrome />
        <Link to={'monochrome/contrast'}><button>More?</button></Link>
      </React.Fragment>
    )
  }
}

export default MonochromePalette