import React from 'react'
import { Route } from 'react-router-dom'

import Home from './Home'
import BaseColor from './BaseColor'

const App = () => {
  return (
    <React.Fragment>
      <Route path="/" exact component={Home} />
      {/* <BaseColor /> */}
    </React.Fragment>
  )
}

export default App
