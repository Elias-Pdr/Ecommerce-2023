let cntrListaProdutosCarrinho = document.getElementById("cntrListaProdutosCarrinho")

//localStorage.setItem("idKeyAddCard", '')
let indice = localStorage.getItem("idKeyAddCard")

let splittedString = indice.split(/,(?! )/)

if(splittedString.indexOf("") != -1){
    splittedString.splice(splittedString.indexOf(""), 1)
}


let subitracao = "subitracao"
let adicao = "adicao"

let precos = localStorage.getItem("listaPrecos").split(',')
let nomes = localStorage.getItem("listaNomes").split(',')
let imgs = localStorage.getItem("listaImgs").split(',')



atualizarCar()
function atualizarCar() {

    if (indice == null || indice == "") {
        cntrListaProdutosCarrinho.innerHTML = "Carrinho vazio"
    }else{
        cntrListaProdutosCarrinho.innerHTML = ""
        for (let i = 0; i < splittedString.length; i++) {
            cntrListaProdutosCarrinho.innerHTML += '<div class="cntrProduto"><label for="checkbox' + splittedString[i] + '" class="cntrQuadrado"><input id="checkbox' + splittedString[i] + '" type="checkbox" class="checkboxProduto" onclick="checkBox(' + splittedString[i] + ')"></label><div class="cntrImg"><img src="'+ imgs[splittedString[i]-1] +'" alt=""></div><span id="cntrNomePrecoQuantidade' + splittedString[i] + '"><p id="nomeProduto' + splittedString[i] + '" class="nomeProduto">'+ nomes[splittedString[i]-1] +'</p><p id="precoProduto' + splittedString[i] + '"  class="precoProduto">' + precos[splittedString[i]-1] + '</p><div class="cntrQuantidade"><div class="btnMenos" onclick="cnttlrQuantidade(' + subitracao + ', ' + splittedString[i] + ')">-</div><div class="cntrTxtQuantidade"><p class="txtQuantidade" id="txtQuantidade' + splittedString[i] + '">1</p></div><div class="btnMais" onclick="cnttlrQuantidade(' + adicao +', '+ splittedString[i] +')">+</div></div></span><span class="cntrExcluirItemCarrinho" id="cntrExcluirItemCarrinho'+ splittedString[i] +'"><p>Deseja excluir esse item do carrinho?</p><span class="cntrBtnExcluirCarrinho"><button onclick="cancelarExclusao('+ splittedString[i] +')">Cancelar</button><button onclick="exclusao('+ splittedString[i] +')"><svg xmlns="http://www.w3.org/2000/svg" version="1.1" xmlns:xlink="http://www.w3.org/1999/xlink" xmlns:svgjs="http://svgjs.com/svgjs" width="512" height="512" x="0" y="0" viewBox="0 0 512 512" style="enable-background:new 0 0 512 512" xml:space="preserve" class=""><g><path d="m353.574 176.526-40.078-1.47-8.689 237.284 40.078 1.464zM235.948 175.791h40.104v237.285h-40.104zM207.186 412.334l-8.689-237.285-40.078 1.471 8.69 237.284z" fill="#ffffff" data-original="#000000" class=""></path><path d="M17.379 76.867v40.104h41.789L92.32 493.706c.909 10.353 9.579 18.294 19.972 18.294h286.74c10.394 0 19.07-7.947 19.972-18.301l33.153-376.728h42.464V76.867H17.379zm363.286 395.029H130.654L99.426 116.971H411.9l-31.235 354.925z" fill="#ffffff" data-original="#000000" class=""></path><path d="M321.504 0H190.496c-18.428 0-33.42 14.992-33.42 33.42v63.499h40.104V40.104h117.64v56.815h40.104V33.42c0-18.428-14.992-33.42-33.42-33.42z" fill="#ffffff" data-original="#000000" class=""></path></g></svg>Excluir</button></span></span></div>'
        }
    }
    let numItensCarrinho = document.getElementById("numItensCarrinho")
    if (splittedString.length == 1) {
        numItensCarrinho.innerHTML = "o único item"
    }else{
        numItensCarrinho.innerHTML = splittedString.length + " itens"
    }
}
function exclusao(id) {

    console.log(splittedString);

    if (localStorage.getItem("idKeyAddCard").indexOf(id.toString()) > -1) {

        //splittedString.splice(splittedString.indexOf(id.toString()), 1);

        console.log("temos");
        console.log(localStorage.getItem("idKeyAddCard"));

        localStorage.setItem("idKeyAddCard", localStorage.getItem("idKeyAddCard").replace(","+ id.toString(), ""))

        console.log("new " + localStorage.getItem("idKeyAddCard"));
        
        indice = localStorage.getItem("idKeyAddCard")

        splittedString = indice.split(/,(?! )/)
    
        if(splittedString.indexOf("") != -1){
            splittedString.splice(splittedString.indexOf(""), 1)
        }
        atualizarCar()

    }else{
        console.log("não temos");
    }
}





// trabalhando com precos

let valorTotal_txt = document.getElementById("totalNumber")
let valorTotal_number = parseFloat(valorTotal_txt.innerHTML.replace("R$ ", "").replace(",", ".")).toFixed(2)

