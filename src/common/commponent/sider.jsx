import React, { Component } from 'react'

import { Button, Row, Col, message, Icon, Layout, Menu } from 'antd'
import Logo from '@/common/commponent/logo'

const { Header, Sider, Content } = Layout


export default class Login extends Component {
  constructor (props) {
    super(props)
    this.state = {
    }
  }

  componentDidMount () {
    console.log(this.props)
  }


  render () {
    return (
      <Sider
        trigger={null}
        collapsible
        collapsed={this.props.collapsed}
      >
        <div className="logo_index">
          <Logo logoSize='40' boxWidth='180' fontSize='16'></Logo>
        </div>
        <Menu theme="tehm" mode="inline" defaultSelectedKeys={['1']}>
          <Menu.Item key="1">
            <Icon type="user" />
            <span>nav 1</span>
          </Menu.Item>
          <Menu.Item key="2">
            <Icon type="video-camera" />
            <span>nav 2</span>
          </Menu.Item>
          <Menu.Item key="3">
            <Icon type="upload" />
            <span>nav 3</span>
          </Menu.Item>
        </Menu>
      </Sider>
    )
  }
}
