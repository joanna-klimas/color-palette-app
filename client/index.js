import React from 'react'
import ReactDOM from 'react-dom'

import App from './components/App'

document.addEventListener('DOMContentLoaded', () => {
  ReactDOM.render(
      <App />,
    document.getElementById('app')
  )
})

const color = document.getElementById('aska')
console.log(color)