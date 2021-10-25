const login = {
    nome:"",
    senha: "",
}
function cadastrar (botao) {
    let name = document.getElementById("name")
    let pass = document.getElementById("password")
    login.nome = name.value
    login.senha = pass.value
    console.log(login)
}