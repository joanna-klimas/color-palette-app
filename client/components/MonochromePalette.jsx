import React, {useState, useEffect } from 'react'

import ColorSquare from './ColorSquare'
import { getMono } from '../api'

const MonochromePalette = ({ chosenColor }) => {

  const [colorOne, setColorOne] = useState(null)
  const [colorTwo, setColorTwo] = useState(null)
  const [colorThree, setColorThree] = useState(null)

  const callbackFn = (err, data) => {
    if (err) {
      console.log(err)
    } else {
      setColorOne(data.body.colorOne)
      setColorTwo(data.body.colorTwo)
      setColorThree(data.body.colorThree)
    }
  }

  useEffect(() => {
    getMono(callbackFn, chosenColor.slice(1))
  }, chosenColor)

  return (
    <div className="section">
      <div className="column"> <ColorSquare chosenColor={chosenColor} nextColor={colorOne} /></div>
      <div className="column"> <ColorSquare chosenColor={chosenColor} nextColor={colorTwo} /></div>
      <div className="column"> <ColorSquare chosenColor={chosenColor} nextColor={colorThree} /></div>
    </div>
  )
}

export default MonochromePalette
