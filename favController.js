let coracaoBrancoItens = document.querySelectorAll(".coracaoBrancoItens")
let coracaoVermelhoItens = document.querySelectorAll(".coracaoVermelhoItens")

let precos = localStorage.getItem("listaPrecos").split(',')
let nomes = localStorage.getItem("listaNomes").split(',')
let imgs = localStorage.getItem("listaImgs").split(',') 
//
atualizarFav()




function atualizarFav() {



    let listaFav = document.querySelector(".cntrItensFavo")

    //localStorage.setItem("idKeyAddFav", '')

    let indice2 = localStorage.getItem("idKeyAddFav")

    let splittedString2 = indice2.split(/,(?! )/)

    if(splittedString2.indexOf("") != -1){
        splittedString2.splice(splittedString2.indexOf(""), 1)
    }

    console.log(splittedString2);

    if (indice2 == null || indice2 == "") {
        listaFav.innerHTML = "Lista de favoritos vazia"
    }
    else{
        listaFav.innerHTML = ""
        for (let i = 0; i < splittedString2.length; i++) {
            listaFav.innerHTML += '<div class="itemFavorito"><div class="cntrBtnFavoritoInFavo"> <svg onclick="exclusao(' + splittedString2[i] + ')" class="coracaoVermelhoInFavo" xmlns="http://www.w3.org/2000/svg" version="1.1" xmlns:xlink="http://www.w3.org/1999/xlink" xmlns:svgjs="http://svgjs.com/svgjs" width="512" height="512" x="0" y="0" viewBox="0 0 512 512" style="enable-background:new 0 0 512 512" xml:space="preserve"><g><path d="M471.383 44.578C444.879 15.832 408.512 0 368.973 0c-29.555 0-56.621 9.344-80.45 27.77C276.5 37.07 265.605 48.45 256 61.73c-9.602-13.277-20.5-24.66-32.527-33.96C199.648 9.344 172.582 0 143.027 0c-39.539 0-75.91 15.832-102.414 44.578C14.426 72.988 0 111.801 0 153.871c0 43.3 16.137 82.938 50.781 124.742 30.992 37.395 75.535 75.356 127.117 119.313 17.614 15.012 37.579 32.027 58.309 50.152A30.023 30.023 0 0 0 256 455.516c7.285 0 14.316-2.641 19.785-7.43 20.73-18.129 40.707-35.152 58.328-50.172 51.575-43.95 96.117-81.906 127.11-119.305C495.867 236.81 512 197.172 512 153.867c0-42.066-14.426-80.879-40.617-109.289zm0 0" fill="#d93737" data-original="#000000" class=""></path></g></svg> </div><div class="cntrInfosItem"><img src=' + imgs[splittedString2[i]-1] +' alt=""><span><p class="nomeInFavo">'+ nomes[splittedString2[i]-1] +'</p><p class="precosInFavo">' + precos[splittedString2[i]-1].replace(".", ",") + '</p></span></div></div>'
        }
    }

    for (let i = 0; i < coracaoBrancoItens.length; i++) {

        for (let i = 0; i < splittedString2.length; i++) {
            document.getElementById("coracaoWhite"+splittedString2[i]).style.display = "none"
            document.getElementById("coracaoRed"+splittedString2[i]).style.display = "block"
        }
        
    }
}



function exclusao(id) {

    document.getElementById("coracaoWhite"+id).style.display = "block"
    document.getElementById("coracaoRed"+id).style.display = "none"


    if (localStorage.getItem("idKeyAddFav").indexOf(id.toString()) > -1) {

        console.log("temos");
        console.log(localStorage.getItem("idKeyAddFav"));

        localStorage.setItem("idKeyAddFav", localStorage.getItem("idKeyAddFav").replace(","+ id.toString(), ""))

        console.log("new " + localStorage.getItem("idKeyAddFav"));
        
        indice = localStorage.getItem("idKeyAddFav")

        splittedString2 = indice.split(/,(?! )/)
    
        if(splittedString2.indexOf("") != -1){
            splittedString2.splice(splittedString2.indexOf(""), 1)
        }
        atualizarFav()

    }else{
        console.log("não temos");
    }
}





// controller coração
function coracao(color, id){
    exclusao(id)
    if (color == 'vermelho') {

        document.getElementById("coracaoRed" + id).style.display = "none"
        document.getElementById("coracaoWhite" + id).style.display = "block"

    } else if(color == 'branco'){

        document.getElementById("coracaoRed" + id).style.display = "block"
        document.getElementById("coracaoWhite" + id).style.display = "none"

        //add item no fav
        localStorage.setItem("idKeyAddFav", localStorage.getItem("idKeyAddFav") + "," + id)
        atualizarFav()
    }
}