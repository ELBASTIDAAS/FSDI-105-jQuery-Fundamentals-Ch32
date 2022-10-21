function saveUser(newUser) {
    console.log(newUser);
    let val = JSON.stringify(newUser);//convert the object to a string
    console.log(val);
    localStorage.setItem("user", val);
}
function readUser(){
    let users = localStorage.getItem("user");//getting the user from local storage
    console.log(users);
}