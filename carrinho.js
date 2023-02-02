let cntrListaProdutosCarrinho = document.querySelector(".cntrListaProdutosCarrinho")
cntrListaProdutosCarrinho.innerHTML = '
<div class="cntrProduto">
<label for="checkbox1" class="cntrQuadrado">
<input id="checkbox1" type="checkbox" class="checkboxProduto" onclick="checkBox('1')">
</label>
<div class="cntrImg">
<img src="https://http2.mlstatic.com/D_Q_NP_796646-MLA52890992841_122022-AB.webp" alt="">
</div>
<span id="cntrNomePrecoQuantidade1">
<p id="nomeProduto1" class="nomeProduto">1.Notebook X515ja-ej1792w 256 Gb 8 Gb Ram Core I5 Cinza Asus</p>
<p id="precoProduto1"  class="precoProduto">R$ 100,00</p>
<div class="cntrQuantidade">
<div class="btnMenos" onclick="cnttlrQuantidade('subitracao', '1')">-</div>
<div class="cntrTxtQuantidade">
<p class="txtQuantidade" id="txtQuantidade1">1</p>
</div>
<div class="btnMais" onclick="cnttlrQuantidade('adicao', '1')">+</div>
</div>
</span>
<span class="cntrExcluirItemCarrinho" id="cntrExcluirItemCarrinho1">
<p>Deseja excluir esse item do carrinho?</p>
<span class="cntrBtnExcluirCarrinho">
<button onclick="cancelarExclusao('1')">Cancelar</button>
<button>
<svg xmlns="http://www.w3.org/2000/svg" version="1.1" xmlns:xlink="http://www.w3.org/1999/xlink" xmlns:svgjs="http://svgjs.com/svgjs" width="512" height="512" x="0" y="0" viewBox="0 0 512 512" style="enable-background:new 0 0 512 512" xml:space="preserve" class=""><g><path d="m353.574 176.526-40.078-1.47-8.689 237.284 40.078 1.464zM235.948 175.791h40.104v237.285h-40.104zM207.186 412.334l-8.689-237.285-40.078 1.471 8.69 237.284z" fill="#ffffff" data-original="#000000" class=""></path><path d="M17.379 76.867v40.104h41.789L92.32 493.706c.909 10.353 9.579 18.294 19.972 18.294h286.74c10.394 0 19.07-7.947 19.972-18.301l33.153-376.728h42.464V76.867H17.379zm363.286 395.029H130.654L99.426 116.971H411.9l-31.235 354.925z" fill="#ffffff" data-original="#000000" class=""></path><path d="M321.504 0H190.496c-18.428 0-33.42 14.992-33.42 33.42v63.499h40.104V40.104h117.64v56.815h40.104V33.42c0-18.428-14.992-33.42-33.42-33.42z" fill="#ffffff" data-original="#000000" class=""></path></g></svg>
Excluir
</button>
</span>  
</span>
</div>'