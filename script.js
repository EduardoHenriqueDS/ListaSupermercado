var items = [];
//criei um objeto vazio
document.querySelector('input[type=submit]')
.addEventListener('click' ,()=>{
    var nomeProduto = document.querySelector('input[name=nome_produto]');
    var precoProduto = document.querySelector('input[name=price]');
/*acima adicionei o evento de click no meu botão chamado cadastrar, 
e criei duas variáveis recuperando os valores adicionados nos meus campos
nome_produto e valor_produto*/
    items.push({
        nome: nomeProduto.value,
        valor: precoProduto.value
    });
/*Acima comecei a alimentar minha array items, com meus objetos nome, valor
que retornam os valores cadastrados nas variáveis nomeProduto e precoProduto*/ 
    let listaProdutos = document.querySelector('.lista-produtos')
    let soma = 0;
    listaProdutos.innerHTML="";

    items.map(function(val){
        soma+=parseFloat(val.valor);
        listaProdutos.innerHTML += `
        <div class="lista-produtos-single">
                <h3>`+val.nome+`</h3>
                <h3 class="price-produto"><span>R$`+val.valor+`</span></h3>
        </div>

        `;
    })
/*map: essa função é como se fosse um loop,  e nesse caso estamos o loop no objeto de items
onde assim consigo recuperar cada valor*/
soma = soma.toFixed(2);
nomeProduto.value = "";
precoProduto.value = "";

let elementoSoma = document.querySelector('.soma-produto h1');

elementoSoma.innerHTML = 'R$'+soma;
    
});

document.querySelector('button[name=limpar]')
.addEventListener('click', function(){
    items = [];

    document.querySelector('.lista-produtos').innerHTML = "";
    document.querySelector('.soma-produto h1').innerHTML = "R$0";

})
