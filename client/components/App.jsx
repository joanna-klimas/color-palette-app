import React from 'react'
import { connect } from 'react-redux'
import { CssBaseline } from '@material-ui/core'

import Home from './Home'
import WaitIndicator from './WaitIndicator'

const App = ({ pending }) => {
  return (
    <>
      <CssBaseline />
      <Home/>
      {pending && <WaitIndicator />}
    </>
  )
}

const mapStateToProps = (state) => {
  return ({
    pending: state.pageInfo.pending
  })
}

export default connect(mapStateToProps)(App)
