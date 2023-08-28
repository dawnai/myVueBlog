import Vue from 'vue'
import App from './App.vue'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css';
import router from '@/router' //引入路由配置


Vue.use(ElementUI);

Vue.config.productionTip = false

new Vue({
   // 将路由配置应用于Vue实例
  render: h => h(App),
  router
}).$mount('#app')
