import Vue from 'vue'
import Vuex from 'vuex'
import home from './home'
import search from './search'
import register from './register'
import login from './login'
//使用插件一次
Vue.use(Vuex)

export default new Vuex.Store({
    modules:{
        home, search, register, login
    }
})