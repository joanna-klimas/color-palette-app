import React from 'react'

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
        <div style={this.state}>
        </div>
      </React.Fragment>
    )
  }
}

export default MonochromePalette