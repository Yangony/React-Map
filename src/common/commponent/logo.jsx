import React, { Component } from 'react'
export default class Login extends Component {
  constructor (props) {
    super(props)
    this.state = {
    }
  }

  componentDidMount () {

  }

  render () {
    let { fontSize, logoSize, boxWidth } = this.props
    return (
      <div className="logo" style={{width:boxWidth+'px'}}>
        <img src="assest/KDpgvguMpGfqaHPjicRK.svg" alt="" style={{width:logoSize + 'px'}}/>
        <h3 style={{fontSize:parseInt(fontSize, 10) + 'px',lineHeight:parseInt(logoSize, 10) + 'px',paddingLeft:parseInt(logoSize, 10) + 5 + 'px'}}>军工驱鸟控制系统</h3>
      </div>
    )
  }
}
