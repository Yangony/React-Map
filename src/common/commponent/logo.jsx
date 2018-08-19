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
    console.log(fontSize)
    return (
      <div className="logo" style={{width:boxWidth+'px'}}>
        <img src="assest/KDpgvguMpGfqaHPjicRK.svg" alt="" style={{width:logoSize + 'px'}}/>
        <h3 style={{fontSize:parseInt(fontSize) + 'px',lineHeight:parseInt(logoSize) + 'px',paddingLeft:parseInt(logoSize) + 5 + 'px'}}>军工驱鸟控制系统</h3>
      </div>
    )
  }
}
