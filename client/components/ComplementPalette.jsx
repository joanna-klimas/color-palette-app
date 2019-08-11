import React, { useState, useEffect } from 'react'

import ColorSquare from './ColorSquare'
import { getComplement } from '../api'

const ContrastPalette = ({ chosenColor }) => {

  const [colorOne, setColorOne] = useState(null)
  const [colorTwo, setColorTwo] = useState(null)
  const [colorThree, setColorThree] = useState(null)

  const callbackFn = (err, data) => {
    if (err) {
      console.log(err)
    } else {
      setColorOne(data.body.colorComplementOne)
      setColorTwo(data.body.colorComplementTwo)
      setColorThree(data.body.colorComplementThree)
    }
  }

  useEffect(() => {
    getComplement(callbackFn, chosenColor.slice(1))
  }, chosenColor)

  return (
    <div className="section">
      <div className="column"><ColorSquare chosenColor={chosenColor} nextColor={colorOne} /></div>
      <div className="column"><ColorSquare chosenColor={chosenColor} nextColor={colorTwo} /></div>
      <div className="column"><ColorSquare chosenColor={chosenColor} nextColor={colorThree} /></div>
    </div>
  )
}

export default ContrastPalette
