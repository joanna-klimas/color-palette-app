import React from 'react'

class Monochrome extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      height: 30,
      width: 60,
      backgroundColor: 'transparent'
    }
    console.log(props)
  }

  componentDidUpdate(prevProps) {
    // Typical usage (don't forget to compare props):
    if (this.props !== prevProps) {
      this.setState({
        backgroundColor: this.props.nextColor
      })
    }
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
