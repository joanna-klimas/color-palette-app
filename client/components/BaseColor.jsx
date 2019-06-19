import React from 'react'
import MonochromePalette from './MonochromePalette'
import ContrastPalette from './ContrastPalette'

class BaseColor extends React.Component {
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
   
        <h3>monochrome:</h3>
        <MonochromePalette />
        <MonochromePalette />
        <MonochromePalette />
        <h3>contrast:</h3>
        <ContrastPalette />
        <ContrastPalette />
        <ContrastPalette />
      </React.Fragment>
    )
  }
}

export default BaseColor