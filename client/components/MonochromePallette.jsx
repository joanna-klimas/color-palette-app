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
      <div className="section">
        <h3>monochrome:</h3>
        <div className="columns is-gapless">
          <div className="column"><Monochrome /></div>
          <div className="column"><Monochrome /></div>
          <div className="column"><Monochrome /></div>
        </div>
        <Link to={'monochrome/contrast'}><button className="button is-light">More?</button></Link>
      </div>
    )
  }
}

export default MonochromePalette