import Vue from 'vue'
import App from './App.vue'
import router from './router'
import TypeNav from '@/components/TypeNav'
import {reqCategoryList} from '@/api'
import store from '@/store'
Vue.config.productionTip = false
Vue.component(TypeNav.name, TypeNav) //全局组件
reqCategoryList()

new Vue({
  el:'#app',
  render: h => h(App),
  router,
  store
})
