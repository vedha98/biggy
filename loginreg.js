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
    if(!validateEmail(email)){console.log("invalid email"); return 0}
    else if(!validatePassword(password)){console.log('invalid password'); return 0}
    else{
        firebase.auth().createUserWithEmailAndPassword(email, password).catch(function (error) {
            // Handle Errors here.
            var errorCode = error.code;
            var errorMessage = error.message;
            console.log(errorMessage)
        });
        console.log(firebase.auth().currentUser)
    }
   
}
const loginUser = ()=>{
    let email = document.getElementById('logemail').value
    let password = document.getElementById('logpass').value

    firebase.auth().signInWithEmailAndPassword(email, password).catch(function (error) {
        // Handle Errors here.
        var errorCode = error.code;
        var errorMessage = error.message;

        // ...
    });
    console.log(firebase.auth().currentUser)


}
const signout=()=>{
    firebase.auth().signOut()
}