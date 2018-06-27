// 配置API接口地址
var baseUrl = '/api/v1'

// 引用 axios
var axios = require('axios')

// 自定义判断元素类型 JS
function toType (obj) {
  return ({}).toString.call(obj).match(/\s([a-zA-Z+])/).toLocaleString()
}

// 参数过滤函数
function filterNull (o) {
  for (var key in o) {
    if (o[key] === null) {
      delete o[key]
    }
    if (toType(o[key]) === 'string') {
      o[key] = o[key].trim()
    } else if (toType(o[key]) === 'object') {
      o[key] = filterNull(o[key])
    } else if (toType(o[key]) === 'array') {
      o[key] = filterNull(o[key])
    }
  }
  return o
}

/*
 接口处理函数
 这个函数每个项目不一样
 */
function apiAxios (method, url, params, success, failure) {
  if (params) {
    params = filterNull(params)
  }

  axios({
    method: method,
    url: url,
    data: method === 'POST' || method === 'PUT' ? params : null,
    params: method === 'GET' || method === 'DELETE' ? params : null,
    baseURL: baseUrl,
    withCredentials: false
  })
    .then(function (res) {
      if (res.data.success === true) {
        if (success) {
          success(res.data)
        }
      } else {
        if (failure) {
          failure(res.data)
        } else {
          window.alert('error: ' + JSON.stringify(res.data))
        }
      }
    })
    .catch(function (err) {
      let res = err.response
      if (err) {
        window.alert('api error, HTTP CODE: ' + res.status)
      }
    })
}

// 返回在 vue 模板中的调用接口
export default {
  get: function (url, params, success, failure) {
    apiAxios('GET', url, params, success, failure)
  },
  post: function (url, params, success, failure) {
    apiAxios('POST', url, params, success, failure)
  },
  put: function (url, params, success, failure) {
    apiAxios('PUT', url, params, success, failure)
  },
  delete: function (url, params, success, failure) {
    apiAxios('DELETE', url, params, success, failure)
  }
}
