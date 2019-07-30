import React, { useState, useEffect } from 'react'

const Contrast = ({ nextColor }) => {
  const [backgroundColor, setBackgroundColor] = useState('transparent')

  useEffect(() => {
    setBackgroundColor(nextColor)
  }, [nextColor])

  return (
      <div style={{height: 60, width: 60, backgroundColor: backgroundColor}}>
      </div>
  )
}

export default Contrast
