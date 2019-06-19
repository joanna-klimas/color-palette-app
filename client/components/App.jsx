import React from 'react'
import { Route } from 'react-router-dom'

import Home from './Home'
import MonochromePalette from './MonochromePallette';
import ContrastPalette from './ContrastPalette';

const App = () => {
  return (
    <React.Fragment>
      <Route path='/' component={Home} />
      <Route path='/monochrome' component={MonochromePalette}/>
      <Route path='/monochrome/contrast' exact component={ContrastPalette} />
    </React.Fragment>
  )
}

export default App
