import React, { Component } from 'react'
import AMap from 'AMap'

import Map from '@/common/map'
export default class Index extends Component {
  constructor (props) {
    super(props)
    this.state = {
    }
  }

  componentDidMount () {

  }

  render () {
    return (
      <div id="allmap" className="outer home">
        <Map></Map>
      </div>
    )
  }
}
