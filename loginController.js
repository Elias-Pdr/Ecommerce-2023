//resetar
//localStorage.setItem("sttsLogin", '');

// simular entrada
//localStorage.setItem("sttsLogin", 'entro');

// simular cadastro
//localStorage.setItem("sttsLogin", 'cadastro');

function logar(entradaOrCadastro) {
    //pegar as informacoes de login
    localStorage.setItem("sttsLogin", entradaOrCadastro);
}