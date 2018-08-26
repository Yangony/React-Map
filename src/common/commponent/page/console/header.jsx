import React, { Component } from 'react'
import { Avatar, Menu, Dropdown, Icon } from 'antd'

export default class Login extends Component {
  constructor (props) {
    super(props)
    this.state = {
    }
  }

  componentDidMount () {

  }

  render () {
    let { boxWidth } = this.props
    const menu = (
      <Menu>
        <Menu.Item key="0">
          <a href="http://www.alipay.com/">个人设置</a>
        </Menu.Item>
        <Menu.Item key="1">
          <a href="http://www.taobao.com/">安全中心</a>
        </Menu.Item>
        <Menu.Item key="3">帮助中心</Menu.Item>
        <Menu.Divider />
        <Menu.Item key="4">退出登录</Menu.Item>
      </Menu>
    );
    return (
      <div className="header_right" style={{width:boxWidth+'px'}}>
        <div className="top_nav">
          <ul>
            <li>帮助中心</li>
            <li>常见问题</li>
            <li>系统设置</li>
          </ul>
        </div>
        <div className="avatar">
          <div className="user_name">杨建信<p>超级管理员</p></div>
          <Dropdown overlay={menu} trigger={['click']}>
            <div className="avatar_img" href="#">
              <Avatar src="https://img2.woyaogexing.com/2018/03/27/4d5eb81c428237b6!400x400_big.jpg" size="large" style={{  backgroundColor: '#87d068' }} icon="user" />
              <Icon type="caret-down" style={{fontSize:'14px', verticalAlign:' middle', marginLeft: '5px'}} />
            </div>
          </Dropdown>
        </div>
      </div>
    )
  }
}
