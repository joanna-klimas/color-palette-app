import React from 'react'

import ColorSquare from './ColorSquare'
import { getTriad } from '../api'

export default class MonochromePalette extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      style: {
        height: 120,
        width: 120,
        backgroundColor: this.props.chosenColor
      },
      colorOne: null,
      colorTwo: null,
      colorThree: null
    }
  }

  callbackFn = (err, data) => {
    if (err) {
      console.log(err)
    } else {
      this.setState({
        colorOne: data.body.colorTriadOne,
        colorTwo: data.body.colorTriadTwo,
        colorThree: data.body.colorTriadThree
      })
    }
  }

  componentDidMount () {
    getTriad(this.callbackFn, this.props.chosenColor.slice(1))
  }

  render () {
    return (
      <div className="section">
        <div className="column"><ColorSquare chosenColor={this.props.chosenColor} nextColor={this.state.colorOne} /></div>
        <div className="column"><ColorSquare chosenColor={this.props.chosenColor} nextColor={this.state.colorTwo} /></div>
        <div className="column"><ColorSquare chosenColor={this.props.chosenColor} nextColor={this.state.colorThree} /></div>
      </div>
    )
  }
}
