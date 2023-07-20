import {reqLogin} from '@/api'
import {setToken, getToken} from '@/utils/token'
const state = {
    token:getToken(),
}
const mutations = {
    LOGIN(state, token){
        state.token = token;
    }
}
const actions = {
    async Login({commit}, data){
        let result = await reqLogin(data)
        if(result.code == 200){
            setToken(result.data.token)
            commit('LOGIN', result.data.token)
        }
    }
}
const getters = {

}
export default {
    state, mutations, actions, getters
}