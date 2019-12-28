firebase.auth().onAuthStateChanged(function(user) {
    if (user) {
     show('signout')
     hide('regsign')
     hide('signup')
     hide('login')
    } else {
        show('regsign','flex')
        hide('signout')
    }
  });
const registerUser = () => {
    let email = document.getElementById('regemail').value
    let password = document.getElementById('regpass').value
    if(!validateEmail(email)){regalert('invalid email'); return 0}
    else if(!validatePassword(password)){regalert('invalid password'); return 0}
    else{
        firebase.auth().createUserWithEmailAndPassword(email, password).catch(function (error) {
            var errorCode = error.code;
            var errorMessage = error.message;
            regalert(errorMessage)
        });
        console.log(firebase.auth().currentUser)
    }
   
}
const loginUser = ()=>{
    let email = document.getElementById('logemail').value
    let password = document.getElementById('logpass').value
    if(!validateEmail(email)){logalert('invalid email'); return 0}
    else if(!validatePassword(password)){logalert('invalid password'); return 0}
    else{
    firebase.auth().signInWithEmailAndPassword(email, password).catch(function (error) {
        var errorCode = error.code;
        var errorMessage = error.message;

        logalert(errorMessage)
    });
    console.log(firebase.auth().currentUser)


}
}
const signout=()=>{
    firebase.auth().signOut()
}