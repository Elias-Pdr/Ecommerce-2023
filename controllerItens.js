let nomeProdutoSelecionado = document.querySelectorAll(".nomeProdutoSelecionado")
let precoProdutoSelecionado = document.querySelectorAll(".precoProdutoSelecionado")
let parcelaProdutoSelecionado = document.querySelectorAll(".parcelaProdutoSelecionado")
let descricaoCurtaProdutoSelecionado = document.querySelectorAll(".descricaoCurtaProdutoSelecionado")
let imgProdutoSelecionado = document.querySelectorAll(".imgProdutoSelecionado")
let boxEspecificacoesTitle =  document.querySelectorAll(".titleEspecificacoes")
let boxEspecificacoesValue =  document.querySelectorAll(".valorEspecificaocoes")
let cntrMain3Caracter = document.querySelectorAll(".cntrMainCaracter")
let descricaoCompletaProdutoSelecionado = document.querySelector(".descricaoCompleta")
let estoqueProdutoSelecionado = document.querySelectorAll(".estoqueNumber")
let clasificacaoNumero = document.querySelector(".clasificacaoNumero")
let clasificacaoQuantidade = document.querySelector(".clasificacaoQuantidade")
let avaliacaoCaractProdutoSelecionado =  document.querySelector(".cntrAvaliacaoCaract")
let resenha1ProdutoSelecionado =  document.querySelector(".resenha1")
let resenha2ProdutoSelecionado =  document.querySelector(".resenha2")
let likeResenha1 = document.querySelector(".likeResenha1")
let likeResenha2 = document.querySelector(".likeResenha2")
let diaDaResenha1 = document.querySelector(".diaDaResenha1")
let diaDaResenha2 = document.querySelector(".diaDaResenha2")

let cntrMaisImg = document.querySelectorAll(".cntrMaisImg")

let barraClassificacao1 = document.querySelector(".barra1")
let barraClassificacao2 = document.querySelector(".barra2")
let barraClassificacao3 = document.querySelector(".barra3")
let barraClassificacao4 = document.querySelector(".barra4")
let barraClassificacao5 = document.querySelector(".barra5")
let ultimaEstrelaMain = document.querySelector(".cntrUltimaEstrelaMain")
let ultimaEstrelaReseha1 = document.querySelector(".cntrUltimaEstrelaResenha1")
let ultimaEstrelaReseha2 = document.querySelector(".cntrUltimaEstrelaResenha2")

let fixa_nomeProduto = ['Notebook Asus Premium X515JA']
fixa_nomeProduto.push('Kit 2x Whey Protein + 2x Bcaa + 2x Creatina + Coqueteleira')

let fixa_precoProduto = ['111.11']
fixa_precoProduto.push('222.22')

let fixa_descricaoCurtaProduto = ['Desfrute da combina????o perfeita de desempenho e design com este notebook Asus Premium X515JA. Uma excelente ferramenta para o seu trabalho di??rio e para os seus momentos de entretenimento.']
fixa_descricaoCurtaProduto.push("Aumento da massa magra, ganho de forca, alto ??ndice de efici??ncia proteica, acelera a recupera????o muscular, manuten????o muscular, aumento de energia, ress??ntese das fontes energ??ticas (ATP)")

let fixa_imgProduto = ['imagens/notebook.png']
fixa_imgProduto.push('imagens/whey.png')

let fixa_estoqueProduto = ['123']
fixa_estoqueProduto.push('321')

let fixa_clasificacaoNumeroProduto = ['4.1']
fixa_clasificacaoNumeroProduto.push('4.8')

let fixa_clasificacaoQuantidadeProduto = ['123']
fixa_clasificacaoQuantidadeProduto.push('231')


let fixa_resenha1Produto = ["1.0. Uma boa real????o custo benef??cio. Tenho rodado alguns softwares n??o muito usuais e pesados e tem atendido superbem. Talvez um ponto negativo seja a aus??ncia de uma entrada de rede. Talvez seja tend??ncia de mercado mas para quem usa o produto para trabalho corporativo, esse pode ser um obst??culo."]
fixa_resenha1Produto.push("1.1. Uma boa real????o custo benef??cio. Tenho rodado alguns softwares n??o muito usuais e pesados e tem atendido superbem. Talvez um ponto negativo seja a aus??ncia de uma entrada de rede. Talvez seja tend??ncia de mercado mas para quem usa o produto para trabalho corporativo, esse pode ser um obst??culo.")

let fixa_resenha2Produto = ["2.0. Uma boa real????o custo benef??cio. Tenho rodado alguns softwares n??o muito usuais e pesados e tem atendido superbem. Talvez um ponto negativo seja a aus??ncia de uma entrada de rede. Talvez seja tend??ncia de mercado mas para quem usa o produto para trabalho corporativo, esse pode ser um obst??culo."]
fixa_resenha2Produto.push("2.1. Uma boa real????o custo benef??cio. Tenho rodado alguns softwares n??o muito usuais e pesados e tem atendido superbem. Talvez um ponto negativo seja a aus??ncia de uma entrada de rede. Talvez seja tend??ncia de mercado mas para quem usa o produto para trabalho corporativo, esse pode ser um obst??culo.")

let fixa_likeResenha1 = ['1']
fixa_likeResenha1.push('46')

let fixa_diaDaResenha1 = ['23 jan 2023']
fixa_diaDaResenha1.push('3 fev 2023')

let fixa_diaDaResenha2 = ['23 jan 2023']
fixa_diaDaResenha2.push('12 fev 2023')




function produtoSelecionado(idKey) {

    localStorage.setItem("idKeyProdutoSelecionado", idKey)

    window.location.href = "produtoSelecionado.html"
}

carregarDadosProduto()

function carregarDadosProduto() {
    produtoSelecionadoId = localStorage.getItem("idKeyProdutoSelecionado")
    
    for (let i = 0; i < nomeProdutoSelecionado.length; i++) {
        nomeProdutoSelecionado[i].innerHTML = fixa_nomeProduto[produtoSelecionadoId-1]
        precoProdutoSelecionado[i].innerHTML = "R$ " + fixa_precoProduto[produtoSelecionadoId-1].replace('.', ',')
        parcelaProdutoSelecionado[i].innerHTML = (parseFloat(fixa_precoProduto[produtoSelecionadoId-1]) / 12).toFixed(2).replace('.', ',')
        descricaoCurtaProdutoSelecionado[i].innerHTML = fixa_descricaoCurtaProduto[produtoSelecionadoId-1]
        imgProdutoSelecionado[i].src = fixa_imgProduto[produtoSelecionadoId-1]
    }
    for (let i = 0; i < estoqueProdutoSelecionado.length; i++) {
        estoqueProdutoSelecionado[i].innerHTML = fixa_estoqueProduto[produtoSelecionadoId-1]
    }

    clasificacaoNumero.innerHTML = fixa_clasificacaoNumeroProduto[produtoSelecionadoId-1]
    clasificacaoQuantidade.innerHTML = fixa_clasificacaoQuantidadeProduto[produtoSelecionadoId-1]

    resenha1ProdutoSelecionado.innerHTML = fixa_resenha1Produto[produtoSelecionadoId-1]
    resenha2ProdutoSelecionado.innerHTML = fixa_resenha2Produto[produtoSelecionadoId-1]

    likeResenha1.innerHTML = fixa_likeResenha1[produtoSelecionadoId-1]

    diaDaResenha1.innerHTML = fixa_diaDaResenha1[produtoSelecionadoId-1]
    diaDaResenha2.innerHTML = fixa_diaDaResenha2[produtoSelecionadoId-1]
    
    if (parseInt(fixa_likeResenha1[produtoSelecionadoId-1])/2 > 1) {
        likeResenha2.innerHTML = parseInt(parseInt(fixa_likeResenha1[produtoSelecionadoId-1])/1.5)
    }else{
        likeResenha2.innerHTML = "0"
    }

    // Autimatiza????o das estrelas main
    if (parseFloat(fixa_clasificacaoNumeroProduto[produtoSelecionadoId-1]) >= 4.0) {
        ultimaEstrelaMain.innerHTML = '<svg class="estrelabranca" aria-hidden="true" width="16.8" height="16" viewBox="0 0 10 10"><path fill="#3483FA" fill-rule="evenodd" d="M5.056 8L1.931 9.648l.597-3.49L0 3.684l3.494-.509L5.056 0l1.562 3.176 3.494.51-2.528 2.471.597 3.491z"></path></svg>'
        console.log("Maior ou igual a 4.0");

    }

    if (parseFloat(fixa_clasificacaoNumeroProduto[produtoSelecionadoId-1]) >= 4.5) {
        ultimaEstrelaMain.innerHTML = '<svg aria-hidden="true" width="16.8" height="16" viewBox="0 0 10 10"><g><path class="metadeBanca" d="M5.256 8L2.131 9.648l.597-3.49L.2 3.684l3.494-.509L5.256 0l1.562 3.176 3.494.51-2.528 2.471.597 3.491z" stoke-width="1" stroke="rgba(0, 0, 0, 0.25)" vector-effect="non-scaling-stroke"></path><path fill="#3483FA" d="M5.272 8.026L2.137 9.679l.6-3.502L.2 3.697l3.505-.51L5.272 0z" stoke-width="1" stroke="#3483FA" vector-effect="non-scaling-stroke"></path></g></svg>'
        console.log("Maior ou igual a 4.5");

    } 

    if (parseFloat(fixa_clasificacaoNumeroProduto[produtoSelecionadoId-1]) == 5.0) {
        ultimaEstrelaMain.innerHTML = '<svg class="meiaEstela" aria-hidden="true" width="16.8" height="16" viewBox="0 0 10 10"><path fill="#3483FA" fill-rule="evenodd" d="M5.056 8L1.931 9.648l.597-3.49L0 3.684l3.494-.509L5.056 0l1.562 3.176 3.494.51-2.528 2.471.597 3.491z"></path></svg>'
        console.log("Igual a 5.0");

    }

            
    let _4_8_estrela = '<div class="containerEstrelasAvaliacaoCaract"><svg aria-hidden="true" width="16.8" height="16" viewBox="0 0 10 10"><path fill="#3483FA" fill-rule="evenodd" d="M5.056 8L1.931 9.648l.597-3.49L0 3.684l3.494-.509L5.056 0l1.562 3.176 3.494.51-2.528 2.471.597 3.491z"></path></svg><svg aria-hidden="true" width="16.8" height="16" viewBox="0 0 10 10"><path fill="#3483FA" fill-rule="evenodd" d="M5.056 8L1.931 9.648l.597-3.49L0 3.684l3.494-.509L5.056 0l1.562 3.176 3.494.51-2.528 2.471.597 3.491z"></path></svg><svg aria-hidden="true" width="16.8" height="16" viewBox="0 0 10 10"><path fill="#3483FA" fill-rule="evenodd" d="M5.056 8L1.931 9.648l.597-3.49L0 3.684l3.494-.509L5.056 0l1.562 3.176 3.494.51-2.528 2.471.597 3.491z"></path></svg><svg aria-hidden="true" width="16.8" height="16" viewBox="0 0 10 10"><path fill="#3483FA" fill-rule="evenodd" d="M5.056 8L1.931 9.648l.597-3.49L0 3.684l3.494-.509L5.056 0l1.562 3.176 3.494.51-2.528 2.471.597 3.491z"></path></svg><svg aria-hidden="true" width="16.8" height="16" viewBox="0 0 10 10"><g fill="none" fill-rule="evenodd"><path fill="transparent" d="M5.256 8L2.131 9.648l.597-3.49L.2 3.684l3.494-.509L5.256 0l1.562 3.176 3.494.51-2.528 2.471.597 3.491z" stoke-width="1" stroke="rgba(0, 0, 0, 0.25)" vector-effect="non-scaling-stroke"></path><path fill="#3483FA" d="M5.272 8.026L2.137 9.679l.6-3.502L.2 3.697l3.505-.51L5.272 0z" stoke-width="1" stroke="#3483FA" vector-effect="non-scaling-stroke"></path></g></svg></div>'
            
    let estrelaCompleta = '<svg  aria-hidden="true" width="16.8" estrelaCompletaheight="16" viewBox="0 0 10 10"><path fill="#3483FA" fill-rule="evenodd" d="M5.056 8L1.931 9.648l.597-3.49L0 3.684l3.494-.509L5.056 0l1.562 3.176 3.494.51-2.528 2.471.597 3.491z"></path></svg>'
    let estrelaMeia = '<svg aria-hidden="true" width="16.8" height="16" viewBox="0 0 10 10"><g><path class="metadeBanca" d="M5.256 8L2.131 9.648l.597-3.49L.2 3.684l3.494-.509L5.256 0l1.562 3.176 3.494.51-2.528 2.471.597 3.491z" stoke-width="1" stroke="rgba(0, 0, 0, 0.25)" vector-effect="non-scaling-stroke"></path><path fill="#3483FA" d="M5.272 8.026L2.137 9.679l.6-3.502L.2 3.697l3.505-.51L5.272 0z" stoke-width="1" stroke="#3483FA" vector-effect="non-scaling-stroke"></path></g></svg>'
    let estrelaBranca = '<svg class="estrelabranca" aria-hidden="true" width="16.8" height="16" viewBox="0 0 10 10"><path fill="#3483FA" fill-rule="evenodd" d="M5.056 8L1.931 9.648l.597-3.49L0 3.684l3.494-.509L5.056 0l1.562 3.176 3.494.51-2.528 2.471.597 3.491z"></path></svg>'
    let _4estrelas = estrelaCompleta+estrelaCompleta+estrelaCompleta+estrelaCompleta



    switch (produtoSelecionadoId) {
        case '1':

            // simula????o de avalia????es
            barraClassificacao5.style.width = "60%" //  5 estrelas
            barraClassificacao4.style.width = "70%"
            barraClassificacao3.style.width = "80%"
            barraClassificacao2.style.width = "90%"
            barraClassificacao1.style.width = "100%" // 1 estrela
        
            cntrMain3Caracter[0].style.display = "block"
                

            let indice1 = 0;
                

            while (indice1 < 12) {


                boxEspecificacoesTitle[indice1 + 0].innerHTML = "Armazenamento"
                boxEspecificacoesTitle[indice1 + 1].innerHTML = "Mem??ria RAM"
                boxEspecificacoesTitle[indice1 + 2].innerHTML = "Processador"
                boxEspecificacoesTitle[indice1 + 3].innerHTML = "Tamanho da tela"

                boxEspecificacoesValue[indice1 + 0].innerHTML = "256 Gb"
                boxEspecificacoesValue[indice1 + 1].innerHTML = "8 Gb"
                boxEspecificacoesValue[indice1 + 2].innerHTML = "Core I5"
                boxEspecificacoesValue[indice1 + 3].innerHTML = '15.6"'

                indice1 += 4;

            }

            document.querySelector(".cntrCaractOneCollun").style.display = "none"


            descricaoCompletaProdutoSelecionado.innerHTML = '<p>O kit ?? composto pelos seguintes produtos:</p>'

            descricaoCompletaProdutoSelecionado.innerHTML += '2x WHEY PROTEIN - pote de 900g cada<br>'
            descricaoCompletaProdutoSelecionado.innerHTML += '2x BCAA - pote de 100g cada no sabor tangerina<br>'
            descricaoCompletaProdutoSelecionado.innerHTML += '2x CREATINA - pote de 100g cada no sabor tangerina<br>'
            descricaoCompletaProdutoSelecionado.innerHTML += '1x COQUETELEIRA - 600ml<br>'
            descricaoCompletaProdutoSelecionado.innerHTML += '<p>BENEF??CIOS:</p>'
            descricaoCompletaProdutoSelecionado.innerHTML += 'a) Aumento da MASSA MAGRA<br>'
            descricaoCompletaProdutoSelecionado.innerHTML += 'b) Ganho de FOR??A<br>'
            descricaoCompletaProdutoSelecionado.innerHTML += 'c) Alto ??ndice de EFICI??NCIA PROTEICA<br>'
            descricaoCompletaProdutoSelecionado.innerHTML += 'd) Acelera a RECUPERA????O MUSCULAR<br>'
            descricaoCompletaProdutoSelecionado.innerHTML += 'e) MANUTEN????O MUSCULAR<br>'
            descricaoCompletaProdutoSelecionado.innerHTML += 'f) Aumento de ENERGIA<br>'
            descricaoCompletaProdutoSelecionado.innerHTML += 'g) RESS??NTESE das FONTES ENERG??TICAS (ATP)<br>'
            descricaoCompletaProdutoSelecionado.innerHTML += "<p>WHEY PROTEIN Giant Whey Bodybuilders ?? um suplemento de alto valor biol??gico, composto pela prote??na concentrada do soro do leite, prote??na isolada da soja e a prote??na hidrolisada do trigo, prote??nas de alto valor biol??gico, rica em BCAA's (amino??cidos de cadeia ramificada). Aumentando o ganho de massa magra quando associada a uma rotina de exerc??cios e um alimenta????o balanceada.</p>"
            descricaoCompletaProdutoSelecionado.innerHTML += "<p>BCAA ?? uma combina????o perfeita de tr??s amino??cidos essenciais para o corpo, sendo eles: leucina, isoleucina e valina. Auxilia na diminui????o das dores musculares e fadiga, gerando assim maior energia e for??a, reduzindo a sensa????o de cansa??o no p??s-treino.</p>"
            descricaoCompletaProdutoSelecionado.innerHTML += "<p>CREATINA ?? respons??vel pela produ????o de energia em c??lulas musculares, fornecendo um elevado n??vel de disposi????o durante os treinos. Que funciona como um repositor de energia.</p>"
            descricaoCompletaProdutoSelecionado.innerHTML += "<p>COQUETELEIRA possui um material refor??ado, sendo o ideal para a dissolu????o do produto. Enviada de acordo com a disponibilidade em estoque.</p>"
            descricaoCompletaProdutoSelecionado.innerHTML += "MODO DE PREPARO:<br>"
            descricaoCompletaProdutoSelecionado.innerHTML += "<p>1. Whey Protein (Giant Whey) : Diluir 4 colheres de sopa rasa (40g) em 350 ml de ??gua e bater em liquidificador ou mixer at?? a dilui????o total do produto.</p>"
            descricaoCompletaProdutoSelecionado.innerHTML += "<p>2. BCAA: Diluir 1 colher de ch?? (5g) em 200 ml de ??gua e bater em liquidificador ou coqueteleira at?? a dilui????o total do produto.</p>"
            descricaoCompletaProdutoSelecionado.innerHTML += "<p>3. Creatina: Diluir 2 colheres de ch?? rasa (10g) em 100 ml de ??gua e bater em liquidificador ou coqueteleira at?? a dilui????o total do produto.</p>"
            descricaoCompletaProdutoSelecionado.innerHTML += "<p>Produtos com validade de 18 a 24 meses.</p>"

            var primeiraCaract = "primeiraCaract"
            var segundaCaract = "segundaCaract"
            var terceiraCaract = "segundaCaract"

            avaliacaoCaractProdutoSelecionado.innerHTML = '<span><p>' + primeiraCaract + '</p>' + _4estrelas + estrelaCompleta
            avaliacaoCaractProdutoSelecionado.innerHTML += '<span><p>' + segundaCaract + '</p>' + _4estrelas + estrelaMeia
            avaliacaoCaractProdutoSelecionado.innerHTML += '<span><p>' + terceiraCaract + '</p>' + _4estrelas + estrelaBranca
        

            ultimaEstrelaReseha1.innerHTML = estrelaCompleta
            ultimaEstrelaReseha2.innerHTML = estrelaCompleta

            cntrMaisImgSrc1 = 'https://http2.mlstatic.com/D_NQ_NP_794271-MLA52891058403_122022-O.webp'
            cntrMaisImgSrc2 = 'https://http2.mlstatic.com/D_NQ_NP_794271-MLA52891058403_122022-O.webp'
            cntrMaisImgSrc3 = 'https://http2.mlstatic.com/D_NQ_NP_794271-MLA52891058403_122022-O.webp'
            cntrMaisImgSrc4 = 'https://http2.mlstatic.com/D_NQ_NP_794271-MLA52891058403_122022-O.webp'
            cntrMaisImgSrc5 = 'https://http2.mlstatic.com/D_NQ_NP_794271-MLA52891058403_122022-O.webp'


            for (let i = 0; i < 2; i++) {
                cntrMaisImg[i].innerHTML = '<img class="maisImgProduto" src="'+ cntrMaisImgSrc1 + '" alt="">'
                cntrMaisImg[i].innerHTML += '<img class="maisImgProduto" src="'+ cntrMaisImgSrc2 + '" alt="">'
                cntrMaisImg[i].innerHTML += '<img class="maisImgProduto" src="'+ cntrMaisImgSrc3 + '" alt="">'
                cntrMaisImg[i].innerHTML += '<img class="maisImgProduto" src="'+ cntrMaisImgSrc4 + '" alt="">'
                cntrMaisImg[i].innerHTML += '<img class="maisImgProduto" src="'+ cntrMaisImgSrc5 + '" alt="">'
            }



        break;

        case '2':

            // simula????o de avalia????es
            barraClassificacao5.style.width = "60%" //  5 estrelas
            barraClassificacao4.style.width = "70%"
            barraClassificacao3.style.width = "80%"
            barraClassificacao2.style.width = "90%"
            barraClassificacao1.style.width = "100%" // 1 estrela




            for (let i = 0; i < cntrMain3Caracter.length; i++) {
                cntrMain3Caracter[i].style.display = "none"
            }

            let indice2 = 0;
            

            while (indice2 < 12) {

                boxEspecificacoesTitle[indice2].innerHTML = "900g cada"
                boxEspecificacoesTitle[indice2 + 1].innerHTML = "100g cada"
                boxEspecificacoesTitle[indice2 + 2].innerHTML = "100g cada"
                boxEspecificacoesTitle[indice2 + 3].innerHTML = '600ml'

                boxEspecificacoesValue[indice2].innerHTML = "2x WHEY PROTEIN"
                boxEspecificacoesValue[indice2 + 1].innerHTML = "2x BCAA"
                boxEspecificacoesValue[indice2 + 2].innerHTML = "2x CREATINA"
                boxEspecificacoesValue[indice2 + 3].innerHTML = "1x COQUETELEIRA"

                indice2 += 4;

            }

            document.querySelector(".cntrCaractOneCollun").style.display = "block"

            let cntrCaractOneCollunTitle = document.getElementById("caractOneCollunTitle")
            let cntrCaractOneCollun = document.querySelector(".cntrCaractOneCollun")

            let collunTitle = ['Marca', 'Linha', 'Suplemento principal', 'Nome do suplemento', 'Formato do suplemento', 'Tipo de embalagem', 'Formato de venda', 'Unidades por embalagem', 'Peso l??quido', 'Volume l??quido']
            let collunValue = ['Bodybuilders', 'Suplementos', 'Prote??na', 'Whey Protein', 'P??', 'Pote', 'Kit', '7', '7', '2500 g', '2500 ml']
            let indiceCollun = 0

            cntrCaractOneCollun.innerHTML = '<div class ="cntrColuna"><p class="caractOneCollunTitle">' + collunTitle[indiceCollun] + '</p><p class="caractOneCollunValue">' + collunValue[indiceCollun] + '</p></div>'
            indiceCollun++;
            cntrCaractOneCollun.innerHTML += '<div class ="cntrColuna"><p class="caractOneCollunTitle par">' + collunTitle[indiceCollun] + '</p><p class="caractOneCollunValue">' + collunValue[indiceCollun] + '</p></div>'
            indiceCollun++;
            cntrCaractOneCollun.innerHTML += '<div class ="cntrColuna"><p class="caractOneCollunTitle">' + collunTitle[indiceCollun] + '</p><p class="caractOneCollunValue">' + collunValue[indiceCollun] + '</p></div>'
            indiceCollun++;
            cntrCaractOneCollun.innerHTML += '<div class ="cntrColuna"><p class="caractOneCollunTitle par">' + collunTitle[indiceCollun] + '</p><p class="caractOneCollunValue">' + collunValue[indiceCollun] + '</p></div>'
            indiceCollun++;
            cntrCaractOneCollun.innerHTML += '<div class ="cntrColuna"><p class="caractOneCollunTitle">' + collunTitle[indiceCollun] + '</p><p class="caractOneCollunValue">' + collunValue[indiceCollun] + '</p></div>'
            indiceCollun++;
            cntrCaractOneCollun.innerHTML += '<div class ="cntrColuna"><p class="caractOneCollunTitle par">' + collunTitle[indiceCollun] + '</p><p class="caractOneCollunValue">' + collunValue[indiceCollun] + '</p></div>'
            indiceCollun++;
            cntrCaractOneCollun.innerHTML += '<div class ="cntrColuna"><p class="caractOneCollunTitle">' + collunTitle[indiceCollun] + '</p><p class="caractOneCollunValue">' + collunValue[indiceCollun] + '</p></div>'
            indiceCollun++;
            cntrCaractOneCollun.innerHTML += '<div class ="cntrColuna"><p class="caractOneCollunTitle par">' + collunTitle[indiceCollun] + '</p><p class="caractOneCollunValue">' + collunValue[indiceCollun] + '</p></div>'
            indiceCollun++;
            cntrCaractOneCollun.innerHTML += '<div class ="cntrColuna"><p class="caractOneCollunTitle">' + collunTitle[indiceCollun] + '</p><p class="caractOneCollunValue">' + collunValue[indiceCollun] + '</p></div>'
            indiceCollun++;
            cntrCaractOneCollun.innerHTML += '<div class ="cntrColuna"><p class="caractOneCollunTitle par">' + collunTitle[indiceCollun] + '</p><p class="caractOneCollunValue">' + collunValue[indiceCollun] + '</p></div>'
            indiceCollun++;




            descricaoCompletaProdutoSelecionado.innerHTML = '<p>O kit ?? composto pelos seguintes produtos:</p>'

            descricaoCompletaProdutoSelecionado.innerHTML += '2x WHEY PROTEIN - pote de 900g cada<br>'
            descricaoCompletaProdutoSelecionado.innerHTML += '2x BCAA - pote de 100g cada no sabor tangerina<br>'
            descricaoCompletaProdutoSelecionado.innerHTML += '2x CREATINA - pote de 100g cada no sabor tangerina<br>'
            descricaoCompletaProdutoSelecionado.innerHTML += '1x COQUETELEIRA - 600ml<br>'
            descricaoCompletaProdutoSelecionado.innerHTML += '<p>BENEF??CIOS:</p>'
            descricaoCompletaProdutoSelecionado.innerHTML += 'a) Aumento da MASSA MAGRA<br>'
            descricaoCompletaProdutoSelecionado.innerHTML += 'b) Ganho de FOR??A<br>'
            descricaoCompletaProdutoSelecionado.innerHTML += 'c) Alto ??ndice de EFICI??NCIA PROTEICA<br>'
            descricaoCompletaProdutoSelecionado.innerHTML += 'd) Acelera a RECUPERA????O MUSCULAR<br>'
            descricaoCompletaProdutoSelecionado.innerHTML += 'e) MANUTEN????O MUSCULAR<br>'
            descricaoCompletaProdutoSelecionado.innerHTML += 'f) Aumento de ENERGIA<br>'
            descricaoCompletaProdutoSelecionado.innerHTML += 'g) RESS??NTESE das FONTES ENERG??TICAS (ATP)<br>'
            descricaoCompletaProdutoSelecionado.innerHTML += "<p>WHEY PROTEIN Giant Whey Bodybuilders ?? um suplemento de alto valor biol??gico, composto pela prote??na concentrada do soro do leite, prote??na isolada da soja e a prote??na hidrolisada do trigo, prote??nas de alto valor biol??gico, rica em BCAA's (amino??cidos de cadeia ramificada). Aumentando o ganho de massa magra quando associada a uma rotina de exerc??cios e um alimenta????o balanceada.</p>"
            descricaoCompletaProdutoSelecionado.innerHTML += "<p>BCAA ?? uma combina????o perfeita de tr??s amino??cidos essenciais para o corpo, sendo eles: leucina, isoleucina e valina. Auxilia na diminui????o das dores musculares e fadiga, gerando assim maior energia e for??a, reduzindo a sensa????o de cansa??o no p??s-treino.</p>"
            descricaoCompletaProdutoSelecionado.innerHTML += "<p>CREATINA ?? respons??vel pela produ????o de energia em c??lulas musculares, fornecendo um elevado n??vel de disposi????o durante os treinos. Que funciona como um repositor de energia.</p>"
            descricaoCompletaProdutoSelecionado.innerHTML += "<p>COQUETELEIRA possui um material refor??ado, sendo o ideal para a dissolu????o do produto. Enviada de acordo com a disponibilidade em estoque.</p>"
            descricaoCompletaProdutoSelecionado.innerHTML += "MODO DE PREPARO:<br>"
            descricaoCompletaProdutoSelecionado.innerHTML += "<p>1. Whey Protein (Giant Whey) : Diluir 4 colheres de sopa rasa (40g) em 350 ml de ??gua e bater em liquidificador ou mixer at?? a dilui????o total do produto.</p>"
            descricaoCompletaProdutoSelecionado.innerHTML += "<p>2. BCAA: Diluir 1 colher de ch?? (5g) em 200 ml de ??gua e bater em liquidificador ou coqueteleira at?? a dilui????o total do produto.</p>"
            descricaoCompletaProdutoSelecionado.innerHTML += "<p>3. Creatina: Diluir 2 colheres de ch?? rasa (10g) em 100 ml de ??gua e bater em liquidificador ou coqueteleira at?? a dilui????o total do produto.</p>"
            descricaoCompletaProdutoSelecionado.innerHTML += "<p>Produtos com validade de 18 a 24 meses.</p>"

            var primeiraCaract = "primeiraCaract"
            var segundaCaract = "segundaCaract"
            var terceiraCaract = "segundaCaract"

            avaliacaoCaractProdutoSelecionado.innerHTML = '<span><p>' + primeiraCaract + '</p>' + _4estrelas + estrelaCompleta
            avaliacaoCaractProdutoSelecionado.innerHTML += '<span><p>' + segundaCaract + '</p>' + _4estrelas + estrelaMeia
            avaliacaoCaractProdutoSelecionado.innerHTML += '<span><p>' + terceiraCaract + '</p>' + _4estrelas + estrelaBranca
        

            ultimaEstrelaReseha1.innerHTML = estrelaCompleta
            ultimaEstrelaReseha2.innerHTML = estrelaCompleta

            cntrMaisImgSrc1 = 'https://http2.mlstatic.com/D_NQ_NP_794271-MLA52891058403_122022-O.webp'
            cntrMaisImgSrc2 = 'https://http2.mlstatic.com/D_NQ_NP_794271-MLA52891058403_122022-O.webp'
            cntrMaisImgSrc3 = 'https://http2.mlstatic.com/D_NQ_NP_794271-MLA52891058403_122022-O.webp'
            cntrMaisImgSrc4 = 'https://http2.mlstatic.com/D_NQ_NP_794271-MLA52891058403_122022-O.webp'
            cntrMaisImgSrc5 = 'https://http2.mlstatic.com/D_NQ_NP_794271-MLA52891058403_122022-O.webp'


            for (let i = 0; i < 2; i++) {
                cntrMaisImg[i].innerHTML = '<img class="maisImgProduto" src="'+ cntrMaisImgSrc1 + '" alt="">'
                cntrMaisImg[i].innerHTML += '<img class="maisImgProduto" src="'+ cntrMaisImgSrc2 + '" alt="">'
                cntrMaisImg[i].innerHTML += '<img class="maisImgProduto" src="'+ cntrMaisImgSrc3 + '" alt="">'
                cntrMaisImg[i].innerHTML += '<img class="maisImgProduto" src="'+ cntrMaisImgSrc4 + '" alt="">'
                cntrMaisImg[i].innerHTML += '<img class="maisImgProduto" src="'+ cntrMaisImgSrc5 + '" alt="">'
            }



        break;
    
        default:
            break;
    }

}


