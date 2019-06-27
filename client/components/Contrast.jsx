import React from 'react'

class Contrast extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      height: 30,
      width: 60,
      backgroundColor: props.chosenColor
    }
    console.log(props)
  }

  // randomHexColor = () =>
  //   `#${Math.floor(Math.random() * 0x1000000).toString(16).padStart(6, 0)}`

  render () {
    return (
      <React.Fragment>
        <div style={this.state}>
        </div>
      </React.Fragment>
    )
  }
}

export default Contrast
