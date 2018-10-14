import request from 'superagent'
import {closeLoading} from '@/common/commponent/loading'

// import Rsa from '@/tool/rsa'

// 设置接口请求前缀，与老版本差异是，最后追加了斜杠
const root = '/api/'
const rootTwo = 'http://9fbank.huanqiu-v2.dev.congred.com:65080/rest/'

/*
    增加本地存储加速数据返回版 api.js 说明
  2018-07-04 13:43:46
    调整写法为 es6 写法
    所有 get 方法默认全部使用本地存储加速
    特殊接口不需要使用加速的，在 params 中设置 api_use_store 为 false 即可
*/

// 获取数据类型
const dataType = data => {
  return ({}).toString.call(data).match(/\s([a-zA-Z]+)/)[1].toLowerCase()
}

// 过滤值为null的请求参数数据
const filterNull = o => {
  for (let key in o) {
    if (o[key] === null) delete o[key]
    if (dataType(o[key]) === 'string') {
      o[key] = o[key].trim()
      if (key === 'asset_id') o[key] = +o[key]
      if (o[key].length === 0) delete o[key]
    } else if (dataType(o[key]) === 'object') {
      o[key] = filterNull(o[key])
    } else if (dataType(o[key]) === 'array') {
      o[key] = filterNull(o[key])
    }
  }
  return o
}

// 写入本地存储，当本地存储失败时，清空存储后继续存储
// 判断是否是列表，是列表追加存储，否则直接存储

// 判断请求是否使用本地存储缓存数据
const isUseStore = params => {
  if (
    params &&
    params.api_use_store !== undefined &&
    params.api_use_store === false
  ) {
    return false
  }
  return true
}

// post 请求参数加密
// const postRsa = params => {
//   let o = JSON.parse(params)
//   o.timestamp = new Date().getTime()  // 每一个POST请求增加时间戳验证
//   console.log(o)
//   for (let key in o) {
//     o[key] = Rsa(o[key])
//   }
//   return o
// }

const objKeySort = params => {
  let o = JSON.parse(params)
  o.timestamp = new Date().getTime() // 增加时间戳
  let newkey = Object.keys(o).sort();　　
  var newObj = {}; //创建一个新的对象，用于存放排好序的键值对
  for(var i = 0; i < newkey.length; i++) {
      //遍历newkey数组
      newObj[newkey[i]] = o[newkey[i]];
      //向新创建的对象中按照排好的顺序依次增加键值对
  }
  return newObj; //返回排好序的新对象
}

// 发送请求并得到响应
const ajaxAgent = (method, url, params, success, failure) => {
  // 自定义本地缓存存储名
  let name = 'API_' + url
  let UseStore = isUseStore(params)
  // 处理断网
  if (!navigator.onLine) return

  // 开始组织接口请求方法
  let r = request(method, url).type('application/json').withCredentials()
  if (params) {
    params = filterNull(params)
    // 删除前端自定义的参数
    delete params.api_use_store
    if (method === 'POST' || method === 'PUT') {
      if (dataType(params) === 'object') {
        params = JSON.stringify(params)
      }
      params = objKeySort(params) // 参数加密
      r = r.send(params)
    } else if (method === 'GET' || method === 'DELETE') {
      r = r.query(params)
    }

    if (params['datetime'] !== undefined) {
      name += '_' + params['datetime']
    }
  }

  // 得到请求是否使用本地存储
  r.end(function (err, response) {
    if (response === undefined) return
    if (err) {
      if (response.status !== 401 && response.status !== 200) {
        closeLoading()
        return
      }
      if (response.status === 401 && response.req.method === 'POST') {
        closeLoading()
        return
      }
      if (failure) {
        failure({ data: err.name + ': ' + err.message, http_status: response.status }, response, 'HTTP_ERROR') // err, res, esta
      }
    } else {
      if (success) {
        success(response.body, response) // rdata, res
      }
      if (failure) {
        failure(response.body, response, 'STATUS_ERROR') // err:, res, esta
      }
    }
  })
}

const checkTypeErr = (tip, data) => {
  try {
    throw new Error(tip + dataType(data))
  } catch (e) {
    console.error(e); return
  }
}

// 验证请求时，传递的参数
const checkParams = (method, url, params, success, failure) => {
  // 检查成功执行入参
  if (dataType(success) !== 'function') {
    checkTypeErr('成功的回调函数位置接受的是一个Function,但是却得到一个', success)
  }
  // 检查失败执行入参
  if (failure && dataType(failure) !== 'function') {
    checkTypeErr('失败的回调函数位置接受的是一个Function,但是却得到一个', failure)
  }
  // 检查请求参数入参
  if (dataType(params) === 'object' || params === null) {
    ajaxAgent(method, url, params, success, failure)
  } else {
    checkTypeErr('接受的是一个对象或者为空(即null),但是却得到一个', params)
  }
}

export default {
  get (name, params, success, failure) {
    checkParams('GET', root + name, params, success, failure)
  },
  post (name, params, success, failure) {
    checkParams('POST', root + name, params, success, failure)
  },
  put (name, params, success, failure) {
    checkParams('PUT', root + name, params, success, failure)
  },
  delete (name, params, success, failure) {
    checkParams('DELETE', root + name, params, success, failure)
  },
  getTwo (name, params, success, failure) {
    checkParams('GET', rootTwo + name, params, success, failure)
  },
  root () {
    return root
  },
  filterNull
}
