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
    let pass = document.getElementById("password")
    user.log = name.value
    user.password = pass.value
    console.log(login)
}
