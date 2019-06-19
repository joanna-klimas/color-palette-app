import React from 'react'
import { Link } from 'react-router-dom'

class Home extends React.Component {
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
        <h1>AppName</h1>
        <h2>Pick a colour:</h2>
        <div style={this.state}>
        </div>
        <Link to={'/monochrome'}><button>Go!</button></Link>
        <Link to={'/monochrome'}><button>More?</button></Link>
      </React.Fragment>
    )
  }
}

export default Home