import React, { Component } from 'react'

import { Icon, Layout, Menu } from 'antd'
import Logo from '@/common/commponent/logo'

const { Sider } = Layout


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
            <span>公告系统</span>
          </Menu.Item>
          <Menu.Item key="2">
            <Icon type="api" />
            <span>鸟情通报</span>
          </Menu.Item>
          <Menu.Item key="3">
            <Icon type="disconnect" />
            <span>鸟类信息</span>
          </Menu.Item>
          <Menu.Item key="4">
            <Icon type="fork" />
            <span>机场鸟类分布</span>
          </Menu.Item>
          <Menu.Item key="5">
            <Icon type="global" />
            <span>区域鸟类分布</span>
          </Menu.Item>
          <Menu.Item key="6">
            <Icon type="share-alt" />
            <span>岗哨管理</span>
          </Menu.Item>
          <Menu.Item key="7">
            <Icon type="usergroup-add" />
            <span>数据统计</span>
          </Menu.Item>
          <Menu.Item key="8">
            <Icon type="cloud" />
            <span>系统维护</span>
          </Menu.Item>
          <Menu.Item key="9">
            <Icon type="video-camera" />
            <span>实时监控</span>
          </Menu.Item>
          <Menu.Item key="10">
            <Icon type="environment-o" />
            <span>GPS接入</span>
          </Menu.Item>
        </Menu>
      </Sider>
    )
  }
}
