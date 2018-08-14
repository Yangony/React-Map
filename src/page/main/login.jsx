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
          <div className="form_list">
            <div className="form_item">
              <input placeholder="请输入您的登录账号"/>
              <input placeholder="请输入您的登录账号"/>
            </div>
          </div>
        </div>
      </div>
    )
  }
}
