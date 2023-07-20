export const getToken = function(){
    return localStorage.getItem('TOKEN')
}

export const setToken = function(token){
    localStorage.setItem('TOKEN', token)
}

export const removeToken = function(){
    localStorage.removeItem('TOKEN')
}