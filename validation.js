validateEmail=(email)=> {
    if(email){
        var re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        return re.test(String(email).toLowerCase());
    }else{
        return false
    }
 
}
validatePassword=(pass)=> {
    if(pass){
        var re = /^.{8,}$/;
        return re.test(String(pass).toLowerCase());
    }else{
        return false
    }
 
}