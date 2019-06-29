import React from 'react'
// import { Link } from 'react-router-dom'

import MonochromePalette from './MonochromePalette'

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

          <div className="columns">
            <div className="column is-one-fifth">
              <h1 className="title is-1">Unicorn</h1>
            </div>
            <div className="column is-one-fifth">
              <img style={{ height: 80 }} src='/unicorn.jpg'></img>
            </div>
            <div className="column">
            </div>
          </div>
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

          <div className="column">
            <MonochromePalette chosenColor={this.state.backgroundColor}/>
          </div>
          
        </div>
      </React.Fragment>
    )
  }
}

export default Home
