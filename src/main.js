import Vue from 'vue'
import App from './App.vue'

// 引入axios
import axios from '@/utils/http.js'
// 引入element
import 'element-ui/lib/theme-chalk/index.css'
import element from '@/plugins/element'

// mock
import '../mock/index.js'

import * as echarts from 'echarts'
Vue.prototype.$echarts = echarts

Vue.config.productionTip = false

Vue.prototype.$http = axios
Vue.use(element)

new Vue({
  render: h => h(App)
}).$mount('#app')
