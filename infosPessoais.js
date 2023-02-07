// verificar sem tem os campos
// nome
// numero
// endereco

// esse parte vai ser feita na tela de criação de conta
localStorage.setItem("nomeCompleto", "Pedro Elias Jerusaleno Calabianqui")
localStorage.setItem("numeroDaPessoa", "(+55) 24 99842-8760")
localStorage.setItem("enderecoDaPessoa", "R Antoun Affif, 15a, Mercearia MGG, Nova Angra (Cunhambebe)<br><br>Angra dos Reis, Rio de Janeiro, 239333180")
//


if (document.querySelectorAll(".nomeDaPessoa")) {
    let nomeCompleto = document.querySelectorAll(".nomeDaPessoa")
    for (let i = 0; i < nomeCompleto.length; i++) {
        nomeCompleto[i].innerHTML = localStorage.getItem("nomeCompleto")
        
    }
}
if (document.querySelectorAll(".numeroDaPessoa")) {
    let numeroDaPessoa = document.querySelectorAll(".numeroDaPessoa")
    for (let i = 0; i < numeroDaPessoa.length; i++) {
        numeroDaPessoa[i].innerHTML = localStorage.getItem("numeroDaPessoa")
        
    }
}
if (document.querySelectorAll(".enderecoDaPessoa")) {
    let enderecoDaPessoa = document.querySelectorAll(".enderecoDaPessoa")
    for (let i = 0; i < enderecoDaPessoa.length; i++) {
        enderecoDaPessoa[i].innerHTML = localStorage.getItem("enderecoDaPessoa")
        
    }
}