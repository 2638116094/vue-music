/* eslint-disable */

// 引入eventsource-polufill模块
// 监听dev-serve.js中webpack-hot-middleware 发布的事件并做相应的处理
require('eventsource-polyfill')
var hotClient = require('webpack-hot-middleware/client?noInfo=true&reload=true')

// 监听dev-serve.js中webpack-hotmiddleware发布的事件,当event.action为reload的时候重新刷新页面
hotClient.subscribe(function (event) {
  if (event.action === 'reload') {
    console.log('dev-client: event.action= ',event.action)
    window.location.reload()
  }
})
