function validasi(){
    let name = document.getElementById("name").value.trim()
    let email = document.getElementById("email").value.trim()
    let gender = ""

    
    if(document.getElementById("male").checked){ 
        gender = document.getElementById("male").value
    }
    else if(document.getElementById("female").checked){
        gender = document.getElementById("female").value
    }

    let password = document.getElementById("password").value.trim();
    let confirmpassword = document.getElementById("confirmpassword").value.trim()

    if(name == ""){
        alert("Name can not be empty!")
        return false
    }

    if(email == ""){
        alert("Email should not be empty")
        return false
    }


    else if(email.split("@").length !== 2){
        alert("Invalid email address, the format should be: email@address.com")
        return false
    }
    else if(email.split("@")[0].length === 0){
        alert("Invalid email address, the format should be: email@address.com")
        return false
    }
    else if(email.split("@")[1].length === 0){
        alert("Invalid email address, the format should be: email@address.com")
        return false
    }
    
    else if(!email.split("@")[1].includes(".")){
        alert("Invalid email address, the format should be: email@address.com")
        return false
    }
    else if(email.split("@")[1][0] === '.'){
        alert("Invalid email address, the format should be: email@address.com")
        return false
    }

    if(gender == ""){
        alert("Jenis Kelamin harus dipilih!")
        return false
    }


    if(password == ""){
        alert("Password should not be empty")
        return false
    }

    else if(password.length < 8 || password.length > 15){
        alert("Password should contain at least 8 characters and no longer than 15 characters")
        return false
    }

    else if(password.search(/[a-z]/i) < 0){
        alert("Password should at least contain 1 lower case character")
        return false
    }

    else if(password.search(/[0-9]/i) < 0){
        alert("Password should at least contain 1 number")
        return false
    }
    else if(password.search(/[!@#$%^&*()]/i) < 0){
        alert("Password should at least contain 1 special character")
        return false
    }

    else if(password.search(/[A-Z]/) == -1){
        alert("Password should at least contain 1 upper case character")
        return false
    }

    if(password !== confirmpassword){
        alert("Password and Confirm password is different!")
        return false
    }

alert("Thanks for registering, now use your email and password to login")
return true
}

// login.html

function validasi2(){

    let email1 = document.getElementById("email1").value.trim()
    let password1 = document.getElementById("password1").value.trim()



    if(email1 == ""){
        alert("Please input your email address")
        return false
    }

    else if(email1.split("@").length !== 2){
        alert("Invalid email address, the format should be: email@address.com")
        return false
    }
    else if(email1.split("@")[0].length === 0){
        alert("Invalid email address, the format should be: email@address.com")
        return false
    }
    else if(email1.split("@")[1].length === 0){
        alert("Invalid email address, the format should be: email@address.com")
        return false
    }
    
    else if(!email1.split("@")[1].includes(".")){
        alert("Invalid email address, the format should be: email@address.com")
        return false
    }
    else if(email1.split("@")[1][0] === '.'){
        alert("Invalid email address, the format should be: email@address.com")
        return false
    }

    if(password1 == ""){
        alert("Please input your password")
        return false
    }

    else if(password1.search(/[0-9]/) < 0){
        alert("Wrong password, please make sure you enter the password you have registered before")
        return false
    }

    else if(password1.search(/[a-z]/) < 0){
        alert("Wrong password, please make sure you enter the password you have registered before")
        return false
    }

    else if(password1.search(/[[!@#$%^&*()]/) < 0){
        alert("Wrong password, please make sure you enter the password you have registered before")
        return false
    }

    else if(password1.search(/[A-Z]/) == -1){
        alert("Wrong password, please make sure you enter the password you have registered before")
        return false
    }
    
 
alert("Thanks for logging in")
return true
}