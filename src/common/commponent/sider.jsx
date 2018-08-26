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
            <span>队伍与装备</span>
          </Menu.Item>
          <Menu.Item key="2">
            <Icon type="api" />
            <span>应急专家</span>
          </Menu.Item>
          <Menu.Item key="3">
            <Icon type="disconnect" />
            <span>危险源</span>
          </Menu.Item>
          <Menu.Item key="4">
            <Icon type="fork" />
            <span>重点路线</span>
          </Menu.Item>
          <Menu.Item key="5">
            <Icon type="global" />
            <span>重点区域</span>
          </Menu.Item>
          <Menu.Item key="6">
            <Icon type="share-alt" />
            <span>渠道信息</span>
          </Menu.Item>
          <Menu.Item key="7">
            <Icon type="usergroup-add" />
            <span>人力热力</span>
          </Menu.Item>
          <Menu.Item key="8">
            <Icon type="cloud" />
            <span>天气实况</span>
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
