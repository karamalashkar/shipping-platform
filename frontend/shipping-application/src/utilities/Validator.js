export const passwordValidation = (password) =>{
    var pattern=  /^[A-Za-z]\w{7,14}$/;
    if(!password || !password.match(pattern)){
        return false
    }
    return true
}
