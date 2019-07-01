import React from 'react'

import MonochromePalette from './MonochromePalette'
import ComplementPalette from './ComplementPalette'
import TriadPalette from './TriadPalette'

class Home extends React.Component {
  constructor () {
    super()

    this.state = {
      height: '350px',
      width: '350px',
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

  render () {
    return (
      <React.Fragment>
        <div className="box">
          <div style={{ display: 'inline-flex' }}>
            <img style={{ height: 80 }} src='/unicorn-01_300x.png'></img>
            <h1 className="title is-1">unicorn</h1>
          </div>
          <div className="columns">
            <div className="column is-one-fifth">
              <h2 className="title is-3">pick a colour:</h2>
            </div>
            <div className="column is-one-fifth">
              <form>
                <input
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
              </form>
            </div>
          </div>

          <button style={{ marginBottom: '2em' }} onClick={this.changeRandomColor} className="button is-light is-medium is-warning">feeling lucky?</button>

          {/*
          <div className="tabs is-toggle">
            <ul>
              <li className="is-active">
                <a>
                  <span className="icon is-small"><i className="fas fa-image" aria-hidden="true"></i></span>
                  <h4 className="title is-4">monochrome</h4>
                </a>
              </li>
              <li>
                <a>
                  <span className="icon is-small"><i className="fas fa-music" aria-hidden="true"></i></span>
                  <h4 className="title is-4">complement</h4>
                </a>
              </li>
              <li>
                <a>
                  <span className="icon is-small"><i className="fas fa-film" aria-hidden="true"></i></span>
                  <h4 className="title is-4">triad</h4>
                </a>
              </li>
            </ul>
          </div> */}
          <div className="columns">
            <div className="column">
              <h4 className="title is-4">monochrome</h4>
              <div style={this.state}>
                <MonochromePalette chosenColor={this.state.backgroundColor} />
              </div>
            </div>
            <div className="column">
              <h3 className="title is-4">complement</h3>
              <div style={this.state}>
                <ComplementPalette chosenColor={this.state.backgroundColor} />
              </div>
            </div>

            <div className="column">
              <h3 className="title is-4">triad</h3>
              <div style={this.state}>
                <TriadPalette chosenColor={this.state.backgroundColor} />
              </div>
            </div>
          </div>

        </div>
      </React.Fragment>
    )
  }
}

export default Home
