import React from 'react'
import ReactDOM from 'react-dom'
// import 'antd-mobile/dist/antd-mobile.css'
import './style/style.scss'
import App from './router/App'
import registerServiceWorker from './registerServiceWorker'
ReactDOM.render(<App />, document.getElementById('root'))
registerServiceWorker()
