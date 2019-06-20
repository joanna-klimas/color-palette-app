import React from 'react'
import { Link } from 'react-router-dom'

class Home extends React.Component {
  constructor() {
    super()

    this.state = {
      height: '500px',
      width: '500px',
      backgroundColor: this.randomHexColor()
    }
  }

  randomHexColor = () =>
    `#${Math.floor(Math.random() * 0x1000000).toString(16).padStart(6, 0)}`

  render() {
    return (
      <React.Fragment>
        <div className="section">
          <h1 className="title is-1">AppName</h1>
          <h2 className="title is-3">Pick a colour:</h2>
          <form>
            <input className="input" type="text" placeholder="type your colour -> format #123456" name="userColor"></input>
            <Link to={'/monochrome'}><button className="button is-light is-medium is-warning">Go!</button></Link>
          </form>

          <div style={this.state}>
          </div>

        </div>
      </React.Fragment>
    )
  }
}

export default Home