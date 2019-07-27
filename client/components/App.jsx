import React from 'react'
import { connect } from 'react-redux'

import Home from './Home'
import WaitIndicator from './WaitIndicator'

const App = ({ pending }) => {
  return pending ? <WaitIndicator />
    : <div className="container">
      <Home/>
    </div>
}

const mapStateToProps = (state) => {
  return ({
    pending: state.pageInfo.pending
  })
}

export default connect(mapStateToProps)(App)
