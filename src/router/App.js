import React, { Component } from 'react'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'

import SiteIndex from '@/page/index.jsx'

export default class App extends Component {
  render () {
    return (
      <Router basename = "h5">
        <Switch>
          <Route exact path='/' component={SiteIndex} />
        </Switch>
      </Router>
    )
  }
}
