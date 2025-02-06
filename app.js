let friends = [];

// Essa função é responsável por adicionar um amigo na lista de amigos
function addFriend() {
    let name = document.querySelector('input').value;

    if (name == '') {
        alert('Por favor, insira um nome');
        return;

    } else {

        // Adiciona um amigo na lista de amigos e implementa o uso de vírgulas para separar os nomes/
        let namesArray = name.split(',').map(name => name.trim());
        namesArray = namesArray.filter(name => name !== '');
        friends.push(...namesArray);
        friendsList();
        let list = document.getElementById('resultado');
        list.innerHTML = '';
    };
};

// Essa função é responsável por listar os amigos adicionados
function friendsList() {
    let list = document.querySelector('ul');
    list.innerHTML = '';

    let i = 0;
    while (i < friends.length) {
        if (friends[i] !=='') {let item = document.createElement('li');
        item.textContent = friends[i];
        list.appendChild(item);
        }
        i++;
    }
}

// essa função é responsável por limpar o campo de input
function clearField() {
    document.querySelector('input').value = '';
};

// essa função é responsável por sortear um amigo na lista de amigos
function sortFriend() {

   // trecho de alerta para caso a lista de amigos seja menor que 2
    if (friends.length < 2) {
        alert('Adicione pelos menos 2 amigos para sortear!');
        return;
    };
   

    let friendsList = Math.floor(Math.random() * friends.length);
    let selectedFriend = friends[friendsList];


    document.getElementById('resultado').innerHTML = `Amigo sorteado: ${selectedFriend}`;

    confetti({
        particleCount: 100,
        spread: 70,
        origin: { y: 0.6 }
    });
};

function reset() {
    friends = [''];
    friendsList();
    document.getElementById('resultado').innerHTML = '';
    document.getElementById('listaAmigos').innerHTML = '';
    clearField();
}

