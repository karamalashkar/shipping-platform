//getting token from localstorage
export const getToken = ()=>{
    let token=localStorage.getItem('token')
    return token
}