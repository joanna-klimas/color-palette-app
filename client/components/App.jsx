import React from 'react'
import { connect } from 'react-redux'
import { CssBaseline } from '@material-ui/core'
import { ThemeProvider } from '@material-ui/styles'

import {theme } from '../styles/muiStyles'
import Home from './Home'
import Navbar from './Navbar'
import WaitIndicator from './WaitIndicator'

const App = ({ pending }) => {
  return (
    <ThemeProvider theme={theme}> 
      <CssBaseline />
      <Navbar />
      <Home/>
      {pending && <WaitIndicator />}
    </ThemeProvider>
  )
}

const mapStateToProps = (state) => {
  return ({
    pending: state.pageInfo.pending
  })
}

export default connect(mapStateToProps)(App)
