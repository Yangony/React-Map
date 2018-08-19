import React, { Component } from 'react'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'

import Index from '@/page/main/login'
import Dashboard from '@/page/main/console'
import Region from '@/page/birdnotified/region'

export default class App extends Component {
  render () {
    return (
      <Router basename="/">
        <Switch>
        <Route exact path='/' component={Index} />
        <Route exact path='/dashboard' component={Dashboard} />
        <Route exact path='/region' component={Region} />
        </Switch>
      </Router>
    )
  }
}
