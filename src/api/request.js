import axios from "axios";
import nprogress from "nprogress";
import store from '@/store';
import 'nprogress/nprogress.css';
const requests = axios.create({
    baseURL:'http://gmall-h5-api.atguigu.cn/api',
    timeout:5000,
})

requests.interceptors.request.use((config)=>{
    if(store.state.login.token){
        config.headers.token = store.state.login.token;
    }
    nprogress.start();
    return config
})

requests.interceptors.response.use((res)=>{
    nprogress.done();
    return res.data
},(error)=>{
    return Promise.reject(error);
})

export default requests