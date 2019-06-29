import React from 'react'

import Monochrome from './Monochrome'
import { getMono } from '../api'

export default class MonochromePalette extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      style: {
        height: '60px',
        width: '60px',
        backgroundColor: this.props.chosenColor
      },
      colorOne: null,
      colorTwo: null,
      colorThree: null
    }

    console.log(props)
  }

  callbackFn = (err, data) => {
    if (err) {
      console.log(err)
    } else {
      this.setState({
        colorOne: data.body.colorOne,
        colorTwo: data.body.colorTwo,
        colorThree: data.body.colorThree
      })
      console.log(this.state)
    }
  }

  componentDidMount() {
    getMono(this.callbackFn, this.props.chosenColor.slice(1))
   // console.log(this.state)
  }

  render() {
    return (
      <div className="section">
        {/* <button className="button is-light is-medium is-warning">Monochrome palette</button> */}
          <div className="column"><Monochrome chosenColor={this.props.chosenColor} nextColor={this.state.colorOne} /></div>
          <div className="column"><Monochrome chosenColor={this.props.chosenColor} nextColor={this.state.colorTwo} /></div>
          <div className="column"><Monochrome chosenColor={this.props.chosenColor} nextColor={this.state.colorThree} /></div>
      </div>
    )
  }
}
