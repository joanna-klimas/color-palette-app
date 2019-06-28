import React from 'react'

import Monochrome from './Monochrome'
import { getMono } from '../api'

export default class MonochromePalette extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      height: 30,
      width: 60,
      backgroundColor: this.props.chosenColor
    }
  }

  callbackFn = (err, data) => {
    if (err) {
      console.log(err)
    } else {
      console.log('reached monochrome palette component')
      console.log(data.body)
    }
  }

  componentDidMount() {
    getMono(this.callbackFn)
  }

  render() {
    return (
      <div className="section">
        <button className="button is-light is-medium is-warning">Monochrome palette</button>
        <div className="columns is-gapless">
          <div className="column"><Monochrome chosenColor={this.props.chosenColor} /></div>
          <div className="column"><Monochrome chosenColor={this.props.chosenColor} /></div>
          <div className="column"><Monochrome chosenColor={this.props.chosenColor} /></div>
        </div>
      </div>
    )
  }
}
