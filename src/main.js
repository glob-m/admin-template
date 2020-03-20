import Vue from 'vue'
import App from './App.vue'
import router from './router/index'
import store from './store/index'
import '@/assets/style/public.scss'
import '@/assets/style/quill.snow.css'
import '@/assets/style/font_class.css'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
import '@/assets/style/element-theme.scss'
import '@/plugins'

Vue.use(ElementUI)

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
