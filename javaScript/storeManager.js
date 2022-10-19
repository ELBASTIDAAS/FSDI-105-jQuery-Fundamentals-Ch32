function saveUser(newUser) {
    console.log(newUser);
    let val = JSON.stringify(newUser);
    console.log(val);
    localStorage.setItem("user", val);
}