import React from 'react'

class Monochrome extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      height: 30,
      width: 60,
      backgroundColor: 'transparent'
    }
    //console.log(props)
  }

  render () {
    return (
      <React.Fragment>
        <div style={this.state}>
        </div>
      </React.Fragment>
    )
  }
}

export default Monochrome
