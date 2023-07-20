import { reqUserInfo,reqLogout } from "@/api"
import {removeToken} from '@/utils/token'
import store from '../login'
const state = {
    userInfo:{}

}
const mutations = {
    GETUSERINFO(state, data){
        state.userInfo = data
    },
    LOGOUT(state){
        store.state.token = ''
        state.userInfo = {}
        removeToken()
    }
}
const actions = {
    async getUserInfo({commit}){
        let result = await reqUserInfo()
        if(result.code == 200){ 
            commit('GETUSERINFO', result.data)
            return 'ok'
        }else{
            return Promise.reject(new Error('faile'));
        }
    },
    async Logout({commit}){
        let result = await reqLogout()
        if(result.code == 200){
            commit('LOGOUT')
            return 'ok'
        }else{
            return Promise.reject(new Error('faile'))
        }
    }
}
const getters = {

}
export default {
    state, mutations, actions, getters
}