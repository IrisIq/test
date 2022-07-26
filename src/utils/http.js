import axios from 'axios'

// axios.defaults.baseURL = 'http://127.0.0.1:8888/api/private/v1'
axios.defaults.baseURL = 'http://localhost:8080'

axios.interceptors.request.use(
  config => {
    // console.log(config)
    // 在request 拦截器 展示进度条
    // NProgress.start()
    // config.headers.authorization = window.sessionStorage.getItem('token')
    return config
  },
  error => {
    // Do something with request error

    return Promise.reject(error)
  }
)
// response 拦截器 展示进度条
axios.interceptors.response.use(config => {
  return config
})

export default axios
