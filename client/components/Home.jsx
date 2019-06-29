import React from 'react'

import MonochromePalette from './MonochromePalette'
import ComplementPalette from './ComplementPalette'
import TriadPalette from './TriadPalette'

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

  changeRandomColor = () => {
    this.setState({
      backgroundColor: this.randomHexColor()
    })
    event.preventDefault()
  }

  render() {
    return (
      <React.Fragment>
        <div className="box">
          <div style={{ display: 'inline-flex' }}>
            <img style={{ height: 80 }} src='/unicorn-01_300x.png'></img>
            <h1 className="title is-1">Unicorn</h1>
          </div>
          <h2 className="title is-3">Pick a colour:</h2>
          <div className="columns">
            <form>
              <div className="column is-three-quarters">
                <input id="aska"
                  ref={this.textInput}
                  className="input"
                  type="text"
                  placeholder={this.state.backgroundColor}
                  name="userColor"
                  onChange={(e) => {
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
          <h4 className="title is-4">monochrome</h4>
          <div className="box" style={this.state}>
            <MonochromePalette chosenColor={this.state.backgroundColor} />
          </div>

          <h3 className="title is-4">complement</h3>
          <div className="box" style={this.state}>
            <ComplementPalette chosenColor={this.state.backgroundColor} />
          </div>

          <h3 className="title is-4">triad</h3>
          <div className="box" style={this.state}>
            <TriadPalette chosenColor={this.state.backgroundColor} />
          </div>

        </div>
      </React.Fragment>
    )
  }
}

export default Home
