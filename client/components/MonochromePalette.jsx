import React from 'react'
// import { Link } from 'react-router-dom'

import Monochrome from './Monochrome'
//import { newMonochromePalette } from '../api'

class MonochromePalette extends React.Component {
  constructor (props) {
    super(props)

    this.state = {
      height: 30,
      width: 60,
      backgroundColor: this.props.chosenColor
    }
    // console.log(props)
  }

  handleClick = (e) => {
    e.preventDefault()
    // that method takes results of calling an api, passes value of the colours as props to componenets below.
    // Compoments take that value and change state based on it
    newMonochromePalette()
      .then(data => {
        console.log(data)
        // return
        // const monochromePalette = {
        //   color1: 'something',
        //   color2: 'something',
        //   color3: 'something'
        // }
      })
  }

  render () {
    return (
      <div className="section">
        <button onClick={this.handleClick} className="button is-light is-medium is-warning">Monochrome palette</button>
        <div className="columns is-gapless">
          <div className="column"><Monochrome chosenColor={this.props.chosenColor}/></div>
          <div className="column"><Monochrome chosenColor={this.props.chosenColor}/></div>
          <div className="column"><Monochrome chosenColor={this.props.chosenColor}/></div>
        </div>
        {/* <Link to={'monochrome/contrast'}><button className="button is-light">More?</button></Link> */}
      </div>
    )
  }
}

export default MonochromePalette
