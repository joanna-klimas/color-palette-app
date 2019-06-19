import React from 'react'
import { Link } from 'react-router-dom'

import Contrast from './Contrast'

class ContrastPalette extends React.Component {
  constructor() {
    super()

    this.state = {
      height: 60,
      width: 120,
      backgroundColor: this.randomHexColor()
    }
  }
  randomHexColor = () =>
    `#${Math.floor(Math.random() * 0x1000000).toString(16).padStart(6, 0)}`

  render() {
    return (
      <div className="section">
        <h3>contrast:</h3>
          <div className="columns is-gapless">
            <div className="column"><Contrast /></div>
            <div className="column"><Contrast /></div>
            <div className="column"><Contrast /></div>
          </div>
        <Link to={'/'}><button className="button is-light">Try again!</button></Link>
      </div>
    )
  }
}

export default ContrastPalette