import React from 'react'

class Triad extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      height: 60,
      width: 60,
      backgroundColor: 'transparent'
    }
  }

  componentDidUpdate(prevProps) {
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

export default Triad