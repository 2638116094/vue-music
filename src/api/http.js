import axios from 'axios'

axios.interceptors.request.use(config => {
    console.log('请求拦截config---', config)
    
    console.log('requset', config)
    return config
}, err => {
    console.log(err)
    return Promise.reject(err)
})

axios.interceptors.response.use(response => {
    console.log('请求响应', response)
    return response
}, err => {
    console.log(err)
    return Promise.reject(err)
})

export default axios

