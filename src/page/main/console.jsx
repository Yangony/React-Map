import React, { Component } from 'react'

import { Button, Row, Col, message, Icon, Layout, Menu } from 'antd'
import Logo from '@/common/commponent/logo'
import Sider from '@/common/commponent/sider'

const { Header, Content } = Layout


export default class Login extends Component {
  constructor (props) {
    super(props)
    this.state = {
      collapsed: false,
    }
  }

  componentDidMount () {

  }

  toggle = () => {
   this.setState({
     collapsed: !this.state.collapsed,
   });
   console.log(!this.state.collapsed)
 }

  render () {
    return (
      <div className="page layout">
        <Layout>
          <Sider collapsed={this.state.collapsed}></Sider>
          <Layout>
            <Header style={{ background: '#fff', padding: 0 }}>
              <Icon
                className="trigger"
                type={this.state.collapsed ? 'menu-unfold' : 'menu-fold'}
                onClick={this.toggle}
              />
            </Header>
            <Content style={{ margin: '24px 16px', padding: 24, background: '#fff', minHeight: 280 }}>
              Content
            </Content>
          </Layout>
        </Layout>
      </div>
    )
  }
}
