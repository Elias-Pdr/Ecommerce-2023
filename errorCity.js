let errorCity  = document.querySelector(".errorCity")
let boxErrorCity = document.querySelector(".boxErrorCity")
let informCity = document.querySelector(".informCity")

let inputCEP = document.getElementById("cepErrorCity")
let inputEstado = document.getElementById("estadoErrorCity")
let inputCidade = document.getElementById("cidadeErrorCity")
let cepTxt = document.querySelector(".cep")
 
inputCEP.value = localStorage.getItem("CEP")
cepTxt.innerHTML = localStorage.getItem("CEP")

errorCity.style.display = "none"
boxErrorCity.style.display = "none"
informCity.style.display = "none"

// so aparecer se localS city for vazio

if (localStorage.getItem("Cidade") == null || localStorage.getItem("Cidade") == '') {
    boxErrorCity.style.display = "flex"
    errorCity.style.display = "flex"
}
else{
    errorCity.style.display = "none"
}

function preenchManual(){
    boxErrorCity.style.display = "none"
    informCity.style.display = "flex"
}
function cancelar(){
    errorCity.style.display = "none"
}
function salvar(href){
    // verificar os campos
    if(inputCEP.value == ''){
        window.alert("Preencha corretamente")
    }
    else if(inputEstado.value.length < 2){
        window.alert("Preencha corretamente")
    }
    else if(inputCidade.value == ''){
        window.alert("Preencha corretamente")
    }
    else{
        localStorage.setItem("Estado", inputEstado.value)
        localStorage.setItem("Cidade", inputCidade.value)
        // mensagem de Tudo certo :)
        errorCity.style.display = "none"
        window.locationbar.href = href
    }
}