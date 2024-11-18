function comprar(){
    let ingressoEscolhido = document.getElementById('tipo-ingresso');
    let quantidadeEscolhida = parseInt(document.getElementById('qtd').value);

    if(ingressoEscolhido.value == 'pista') {
        comprarPista(quantidadeEscolhida);
    } else if (ingressoEscolhido.value == 'superior') {
        comprarSuperior(quantidadeEscolhida);
    } else {
        comprarInferior(quantidadeEscolhida);
    }
}

function comprarPista(quantidadeEscolhida){
    let pista = parseInt(document.getElementById('qtd-pista').textContent);
    
    if (quantidadeEscolhida > pista) {
        alert('Quantidade indisponível para tipo pista');
    } else if (isNaN(quantidadeEscolhida) || quantidadeEscolhida <=0) {
        alert('Erro! Insira uma quantidade válida!');
        return;
    } else {
        pista = pista - quantidadeEscolhida;
        document.getElementById('qtd-pista').textContent = pista;
        alert('Compra realizada com sucesso!');
    }
}

function comprarSuperior(quantidadeEscolhida){
    let superior = parseInt(document.getElementById('qtd-superior').textContent);

    if(quantidadeEscolhida > superior) {
        alert('Quantidade indisponível para tipo superior');
    } else if (isNaN(quantidadeEscolhida) || quantidadeEscolhida <=0) {
        alert('Erro! Insira uma quantidade válida!');
        return;
    } else {
        superior = superior - quantidadeEscolhida;
        document.getElementById('qtd-superior').textContent = superior;
        alert('Compra realizada com sucesso!');       
    }
}

function comprarInferior(quantidadeEscolhida){
    let inferior = parseInt(document.getElementById('qtd-inferior').textContent);

    if(quantidadeEscolhida > inferior){
        alert('Quantidade indisponível para tipo inferior');
    } else if (isNaN(quantidadeEscolhida) || quantidadeEscolhida <=0) {
        alert('Erro! Insira uma quantidade válida!');
        return; 
    } else {
        inferior = inferior - quantidadeEscolhida;
        document.getElementById('qtd-inferior').textContent = inferior;
        alert('Compra realizada com sucesso!'); 
    }
}