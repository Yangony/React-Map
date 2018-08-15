import React, { Component } from 'react'

import Loading from '@/common/commponent/loading'
// import Map from '@/common/map'
export default class Index extends Component {
  constructor (props) {
    super(props)
    this.state = {
    }
  }

  componentDidMount () {
    Loading({type: 'full'})
  }

  render () {
    return (
      <div id="allmap" className="page home">
        {/* <Map></Map> */}
      </div>
    )
  }
}
