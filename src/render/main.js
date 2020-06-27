import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import ElementUI from 'element-ui'
import client from './utils/ipcRender'
import 'element-ui/lib/theme-chalk/index.css'
import './assets/css/common.scss'
Vue.config.productionTip = false
Vue.use(ElementUI)
Vue.prototype.$client = client
new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
