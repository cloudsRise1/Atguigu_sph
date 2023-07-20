import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '@/pages/Home';
import Search from '@/pages/Search';
import Login from '@/pages/Login';
import Register from '@/pages/Register';
import store from '@/store';
let orginpush = VueRouter.prototype.push
let orignreplace = VueRouter.prototype.replace
VueRouter.prototype.push = function(location, resolve, reject){
    if(resolve && reject){
        orginpush.call(this, location, resolve, reject)
    }
    else{
        orignreplace.call(this, location, ()=>{}, ()=>{})
    }
}
Vue.use(VueRouter)  
const router =  new VueRouter({
    mode: 'history',// 没有#的模式
    routes:[
        {
            path: "/home",
            component:Home,
            meta:{
                show:true
            }
        },
        {
            path: '/search/:keyword?',
            name:'search',
            component: Search,
            meta:{
                show:true
            }
        },
        {
            path: '/register',
            component: Register,
            meta:{
                show:false
            }
        },
        {
            path: '/login',
            component: Login,
            meta:{
                show:false
            }
        },
        {
            path:'*',
            redirect:'/home'
        }
    ],

})
router.beforeEach(async (to, from, next) =>{
    let token = store.state.login.token
    let name = store.state.home.userInfo.name
    if(token){
        if(to.path=='/login'){
            next('/home')
        }else{
            if(name){
                next()
            }else{
                try{
                    await store.dispatch('getUserInfo');
                    next()
                }catch(error){
                    await store.dispatch('Logout')
                    next('/login')
                }
            }
        }
    }else{
        next()
    }
})
export default router