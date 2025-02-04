let friends = [''];


function addFriend() {
    let name = document.querySelector('input').value;

    if (name == '') {
        alert('Por favor, insira um nome');
        return;

    } else {
        friends.push(name);
        clearField();
        friendsList();
        let list = document.getElementById('resultado');
        list.innerHTML = '';
    };
};

function friendsList() {
    let list = document.querySelector('ul');
    list.innerHTML = '';

    let i = 0;
    while (i < friends.length) {
        let item = document.createElement('li');
        item.textContent = friends[i];
        list.appendChild(item);
        i++;
    }
}

function clearField() {
    document.querySelector('input').value = '';
};

function sortFriend() {

    let listF = document.getElementById('listaAmigos');
    listF.innerHTML = '';

   
    if (friends.length < 2) {
        alert('Adione pelos menos 2 amigos para sortear!');
        return;
    };
   

    let friendsList = Math.floor(Math.random() * friends.length);
    let selectedFriend = friends[friendsList];


    document.getElementById('resultado').innerHTML = `Amigo sorteado: ${selectedFriend}`;

    friends = [];
};


