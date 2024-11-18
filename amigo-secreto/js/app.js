let amigos = [];

function adicionar(){
    let nomeAmigo = document.getElementById('nome-amigo');
    
    if(nomeAmigo.value == ''){
        alert('Preencha o campo "Nome do amigo".');
        return;
    }

    if(amigos.includes(nomeAmigo.value)){
        alert('Nome já adicionado!');
        return;
    }
    
    let lista = document.getElementById('lista-amigos');
    amigos.push(nomeAmigo.value);
    if (lista.textContent == ''){
        lista.textContent = nomeAmigo.value;
    } else {
        lista.textContent = lista.textContent + ', ' + nomeAmigo.value;
    }
    
    nomeAmigo.value = '';

    atualizarLista();
    atualizarSorteio();
}

function sortear(){
    if(amigos.length < 4){
        alert('Adicione pelo menos 4 pessoas!');
        return;
    }
    
    embaralha(amigos);
    let listaAmigos = document.getElementById('lista-sorteio');

    for (let i = 0; i < amigos.length; i++){
        if(i == amigos.length - 1){
            listaAmigos.innerHTML = listaAmigos.innerHTML + amigos[i] + ' --> ' + amigos[0] + '<br>';
        } else {
            listaAmigos.innerHTML = listaAmigos.innerHTML + amigos[i] + ' --> ' + amigos[i + 1] + '<br>';
        }
    }
}

function excluirAmigo(indice){
    amigos.splice(indice, 1);
    atualizarLista();
    atualizarSorteio();
}

function embaralha(lista) {

    for (let indice = lista.length; indice; indice--) {

        const indiceAleatorio = Math.floor(Math.random() * indice);

        // atribuição via destructuring
        [lista[indice - 1], lista[indiceAleatorio]] = 
            [lista[indiceAleatorio], lista[indice - 1]];
    }
}

function atualizarSorteio(){
    let listaAmigos = document.getElementById('lista-sorteio');
    listaAmigos.innerHTML = '';
}

function atualizarLista(){
    let lista = document.getElementById('lista-amigos');
    lista.innerHTML = '';

    for (let i = 0; i < amigos.length; i++){
        let paragrafo = document.createElement('p');
        paragrafo.textContent = amigos[i];

        paragrafo.addEventListener('click', function(event) {
            let indice = amigos.indexOf(event.target.textContent);
            excluirAmigo(indice);
        })

        lista.appendChild(paragrafo);
    }
}

function reiniciar(){
    amigos = [];
    document.getElementById('lista-amigos').innerHTML = '';
    document.getElementById('lista-sorteio').innerHTML = '';
}