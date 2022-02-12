const login = {
    log:"",
    password: "",
}
const user ={
    name:"",
    email:"",
    pass:"",
}
function cadastrar (botao) {
    let name = document.getElementById("name")
    let email = document.getElementById("email")
    let pass = document.getElementById("pass")
    user.name = name.value
    user.email = email.value
    user.password = pass.value
    console.log(login)
}
