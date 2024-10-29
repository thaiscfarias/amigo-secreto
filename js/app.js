let amigos = [];

function adicionar(){
    let amigo = document.getElementById('nome-amigo');

    if(amigo.value == ''){
        alert('Informe o nome do amigo!')
        return;
    }

    let nomeMaiusculo = amigo.value.toUpperCase(); // conversão para maiúsculo
    if (amigos.includes(nomeMaiusculo)){ 
    alert('Amigo já adicionado')
        return;
    }
    amigos.push(nomeMaiusculo); //adicionar ao array

    let lista = document.getElementById('lista-amigos');

    if(amigos.includes(amigo.value)){
        alert('Nome já adicionado!')
        return;
    }
    
    amigos.push(amigo.value);
    
    // Se o lista.textContent estiver vazio, colocamos o nome do amigo. 
    if (lista.textContent == '') {
    lista.textContent = amigo.value; 
    } // Senão, adicionamos uma vírgula para separar os nomes e adicionamos outro nome. 
    else {
        lista.textContent = lista.textContent + ', ' + amigo.value; 
    }
    // Limpa o campo depois de adicionar um nome, sem precisar apagar o anterior manualmente.
    amigo.value = '';

    atualizarLista();
    atualizarSorteio();
}

function sortear() {

    if (amigos.length < 4) {
        alert('O número de amigos precisa ser pelo menos 4!')
        return;
    }

    embaralha(amigos);
    let sorteio = document.getElementById('lista-sorteio');
    
    for (let i = 0; i < amigos.length; i++) {
        if (i == amigos.length - 1){
            sorteio.innerHTML = sorteio.innerHTML + amigos[i] + ' --> ' + amigos[0] + '<br>';
        } else { 
            sorteio.innerHTML = sorteio.innerHTML + amigos[i] + ' --> ' + amigos[i+1] + '<br>'; 
        }  
    }
}

function excluirAmigo(index) {
    amigos.splice(index, 1);
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

function reiniciar() {
    amigos = [];
    document.getElementById('lista-amigos').innerHTML = '';
    document.getElementById('lista-sorteio').innerHTML = ''; 
}