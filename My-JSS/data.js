const PLAYER = 'player';
let mobiles= loadData();

function saveData() {
    localStorage.setItem(PLAYER, JSON.stringify(club.mobiles));
}

function loadData() {
    return localStorage.hasOwnProperty(PLAYER)? JSON.parse(localStorage.getItem(PLAYER)): [];
}