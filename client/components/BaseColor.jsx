import React from 'react'

const BaseColor = props => {
  return (
    <div style={{
      height: '500px',
      width: '500px',
      backgroundColor: props.userInput
    }}>
    </div>
  )
}

export default BaseColor