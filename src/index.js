import React from 'react'
import ReactDOM from 'react-dom'
// import 'antd-mobile/dist/antd-mobile.css'
import 'antd/dist/antd.css';
import './style/theme/theme.less'
import './style/style.scss'
import App from './router/App'
import registerServiceWorker from './registerServiceWorker'
ReactDOM.render(<App />, document.getElementById('root'))
registerServiceWorker()
