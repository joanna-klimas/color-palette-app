import React from 'react'
import { Route } from 'react-router-dom'

import Home from './Home'
import MonochromePalette from './MonochromePallette';

const App = () => {
  return (
    <React.Fragment>
      <Route path='/' component={Home} />
      <Route path='/monochrome' component={MonochromePalette}/>
    </React.Fragment>
  )
}

export default App
