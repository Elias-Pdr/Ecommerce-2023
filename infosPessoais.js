// verificar sem tem os campos
// nome
// numero
// endereco

if (document.querySelectorAll(".nomeDaPessoa")) {
    let nomeCompleto = document.querySelectorAll(".nomeDaPessoa")
    for (let i = 0; i < nomeCompleto.length; i++) {
        nomeCompleto[i].innerHTML = localStorage.getItem("NomeCompleto")
        
    }
}
if (document.querySelectorAll(".numeroDaPessoa")) {
    let numeroDaPessoa = document.querySelectorAll(".numeroDaPessoa")
    for (let i = 0; i < numeroDaPessoa.length; i++) {
        numeroDaPessoa[i].innerHTML = localStorage.getItem("Celular")
        
    }
}
if (document.querySelectorAll(".enderecoDaPessoa")) {
    let enderecoDaPessoa = document.querySelectorAll(".enderecoDaPessoa")
    for (let i = 0; i < enderecoDaPessoa.length; i++) {
        enderecoDaPessoa[i].innerHTML = localStorage.getItem("CEP") + ", " + localStorage.getItem("Estado") + ", " + localStorage.getItem("Cidade")+ ", " + localStorage.getItem("bairro")+ ", " + localStorage.getItem("NomeRua") + ", Nº" + localStorage.getItem("NumeroCasa")
        
    }
}