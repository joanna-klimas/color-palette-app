import React from 'react'
import { Link } from 'react-router-dom'

class Home extends React.Component {
  constructor () {
    super()

    this.state = {
      height: '500px',
      width: '500px',
      backgroundColor: this.randomHexColor()
    }
  }

  randomHexColor = () =>
    `#${Math.floor(Math.random() * 0x1000000).toString(16).padStart(6, 0)}`

  changeRandomColor = () => {
    this.setState({
      backgroundColor: this.randomHexColor()
    })
  }

  render () {
    return (
      <React.Fragment>
        <div className="box">

          <h1 className="title is-1">AppName</h1>
          <h2 className="title is-3">Pick a colour:</h2>

          <div className="columns">

            <form>
              <div className="column is-three-quarters">
                <input
                  className="input"
                  type="text"
                  placeholder={this.state.backgroundColor}
                  name="userColor"
                  onChange = {(e) => {
                    const chosenColor = e.target.value
                    e.preventDefault()
                    this.setState({
                      backgroundColor: chosenColor
                    })
                  }}>
                </input>
              </div>
              <div className="column">
                <button onClick={this.changeRandomColor} className="button is-light is-medium is-warning">Feeling lucky?</button>
              </div>
            </form>

          </div>
          <div style={this.state}>
          </div>

        </div>
      </React.Fragment>
    )
  }
}

export default Home
