import React, { Component } from 'react'
import Logo from '@/common/commponent/logo'
export default class Login extends Component {
  constructor (props) {
    super(props)
    this.state = {
    }
  }

  componentDidMount () {

  }

  render () {
    return (
      <div className="page login">
        <div className="login_main">
          <Logo></Logo>
        </div>
      </div>
    )
  }
}
