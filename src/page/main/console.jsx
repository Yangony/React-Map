import React, { Component } from 'react'
// import {Link} from "react-router-dom";
import { Icon, Layout } from 'antd'
// import Logo from '@/common/commponent/logo'
import Sider from '@/common/commponent/sider'
import ConsoleHeader from '@/common/commponent/page/console/header'
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
 }

  render () {
    return (
      <div className="page layout console">
        <Layout>
          <Sider collapsed={this.state.collapsed}></Sider>
          <Layout>
            <Header>
              <div className="sider_tig"><Icon className="trigger" type={this.state.collapsed ? 'menu-unfold' : 'menu-fold'} onClick={this.toggle} /></div>
              <div className="console_userinfo">
                <ConsoleHeader></ConsoleHeader>
              </div>
            </Header>
            <Content style={{padding: 24, background: '#fff', minHeight: 280 }}>
            </Content>
          </Layout>
        </Layout>
      </div>
    )
  }
}
