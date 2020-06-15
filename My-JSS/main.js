const PLAYER = "player";
let club = new PlayerManager("Nam Dinh");
club.data = loadData();
club.init();
display(club.getHtml());
let currentPlayer = 0;

function display(table) {
    document.getElementById('player-manage').innerHTML = table;
    saveData();
}

function addPlayer() {
    let name = document.getElementById("player-name").value;
    let price = document.getElementById("player-price").value;
    let age = document.getElementById("player-age").value;
    let position = document.getElementById("player-position").value;
    let country = document.getElementById("player-country").value;
    let img = document.getElementById("player-img").value;
    let player = new Player(img, name, age, position, country, price);
    if (name === '' || age === '' || img === '' || position === '' || country === '' || price === '') {
        alert("Please! Fill Full Information.");
    } else {
        club.addProduct(player);
        display(club.getHtml());
    }
    document.getElementById('form-add').reset();
}

function saveData() {
    localStorage.setItem(PLAYER, JSON.stringify(club.players));
}

function loadData() {
    return localStorage.hasOwnProperty(PLAYER) ? JSON.parse(localStorage.getItem(PLAYER)) : [];
}

function edit(index) {
    document.getElementById('form-edit').style.display = "inline-block";
    let player = club.getProductByIndex(index);
    document.getElementById('edit-name').value = player.name;
    document.getElementById('edit-price').value = player.price;
    document.getElementById('edit-age').value = player.age;
    document.getElementById('edit-position').value = player.position;
    document.getElementById('edit-country').value = player.country;
    document.getElementById('edit-img').value = player.img;
    currentPlayer = index;
}

function editPlayer() {
    let name = document.getElementById("edit-name").value;
    let price = document.getElementById("edit-price").value;
    let age = document.getElementById("edit-age").value;
    let position = document.getElementById("edit-position").value;
    let country = document.getElementById("edit-country").value;
    let img = document.getElementById("edit-img").value;
    if (name === '' || age === '' || img === '' || position === '' || country === '' || price === '') {
        alert("Please! Fill Full Information.");
    } else {
        club.players[currentPlayer].edit(img, name, age, position, country, price);
        display(club.getHtml());
    }

    document.getElementById('form-edit').reset();
    document.getElementById('form-edit').style.display = "none";
}

function del(index) {
    club.deletePlayer(index);
    display(club.getHtml());
}