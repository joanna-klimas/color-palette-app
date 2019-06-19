import React from 'react'
import { Route } from 'react-router-dom'

import Home from './Home'
import MonochromePalette from './MonochromePallette';
import ContrastPalette from './ContrastPalette';

const App = () => {
  return (
    <div className="container">
      <div className="box">
        <Route path='/' component={Home} />
        <Route path='/monochrome' component={MonochromePalette} />
        <Route path='/monochrome/contrast' exact component={ContrastPalette} />
      </div>
    </div>
  )
}

export default App
