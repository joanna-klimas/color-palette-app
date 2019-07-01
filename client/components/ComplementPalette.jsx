import React from 'react'

import ColorSquare from './ColorSquare'
import { getComplement } from '../api'

export default class ContrastPalette extends React.Component {
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
      colorThree: null,
      isVisible: 'details-hidden'
    }
  }

  callbackFn = (err, data) => {
    if (err) {
      console.log(err)
    } else {
      this.setState({
        colorOne: data.body.colorComplementOne,
        colorTwo: data.body.colorComplementTwo,
        colorThree: data.body.colorComplementThree
      })
    }
  }

  componentDidMount () {
    getComplement(this.callbackFn, this.props.chosenColor.slice(1))
  }

  componentDidUpdate (prevProps) {
    if (this.props !== prevProps) {
      getComplement(this.callbackFn, this.props.chosenColor.slice(1))
    }
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
