const user = {
    nome:"",
    senha: "",
}
function cadastrar (botao) {
    let name = document.getElementById("name")
    let pass = document.getElementById("password")
    user.nome = name.value
    user.senha = pass.value
    console.log(user)
}