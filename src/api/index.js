import requests from './request'


//三级联动
export const reqCategoryList = () => requests({url:'/product/getBaseCategoryList', method:'get'})
export const reqGetCode = (phone) => requests({url:`/user/passport/sendCode/${phone}`, method:'get'})
export const reqRegister = (data) => requests({url:'/user/passport/register', data, method:'post'})
export const reqLogin = (data) => requests({url:'/user/passport/login', data, method:'post'})
export const reqUserInfo = () => requests({url:'/user/passport/auth/getUserInfo', method:'get'})
export const reqLogout = () => requests({url:'/user/passport/logout', method:'get'})    