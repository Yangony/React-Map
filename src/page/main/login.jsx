import React, { Component } from 'react'

import { Button, Row, Col, message, Icon } from 'antd'
import Loading, {closeLoading} from '@/common/commponent/loading'

import Logo from '@/common/commponent/logo'

import API from '@/tools/api'

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
    API.post('login', null, r=> {
      
    })
    message.error('请输入您的登录账号！');
    setTimeout(function () {
      closeLoading()
    }, 3000);
  }

  render () {
    return (
      <div className="page login">
        <div className="login_main" id="login">
          <Logo></Logo>
          <div className="login_box">
            <div className="form_list">
              <div className="form_item">
                <label><Icon type="user" /></label>
                <input placeholder="请输入您的登录账号"/>
              </div>
              <div className="form_item">
                <label><Icon type="lock" /></label>
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
