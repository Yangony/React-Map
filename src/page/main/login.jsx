import React, { Component } from 'react'

import { Button, Row, Col, message } from 'antd'
import Loading from '@/common/commponent/loading'

import Logo from '@/common/commponent/logo'
export default class Login extends Component {
  constructor (props) {
    super(props)
    this.state = {
    }
  }

  componentDidMount () {

  }

  login () {
    Loading({type: 'full'})
    message.error('请输入您的登录账号！');
  }

  render () {
    return (
      <div className="page login">
        <div className="login_main" id="login">
          <Logo></Logo>
          <div className="login_box">
            <div className="form_list">
              <div className="form_item">
                <label>帐号：</label>
                <input placeholder="请输入您的登录账号"/>
              </div>
              <div className="form_item">
                <label>密码：</label>
                <input placeholder="请输入您的登录密码"/>
              </div>
              <div className="form_item">
                <Row type="flex" justify="space-around">
                  <Col  span={8}>
                    <Button type="primary" block={true} onClick={() => this.login()}>登   录</Button>
                  </Col>
                  <Col  span={8} offset={2}>
                    <Button block={true}>取消</Button>
                  </Col>
                </Row>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
}
