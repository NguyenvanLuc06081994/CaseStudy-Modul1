const PLAYER = "player";
let club = new ProductManage("Nam Dinh");
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
    club.addProduct(player);
    display(club.getHtml());
    document.getElementById('form-add').reset();
}

function saveData() {
    localStorage.setItem(PLAYER, JSON.stringify(club.players));
}

function loadData() {
    return localStorage.hasOwnProperty(PLAYER) ? JSON.parse(localStorage.getItem(PLAYER)) : [];
}