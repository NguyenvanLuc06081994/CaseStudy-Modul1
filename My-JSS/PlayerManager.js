class ProductManage {
    constructor(name) {
        this.name = name;
        this.players = [];
        this.data = [];
    }

    init() {
        for (let i = 0; i < this.data.length; i++) {
            let player = new Player(this.data[i]._img, this.data[i]._name, this.data[i]._age, this.data[i]._position, this.data[i]._country, this.data[i]._price);
            this.addProduct(player);
        }
    }

    addProduct(player) {
        this.players.push(player);
    }

    editProduct(player, img, name, age, position, country, price) {
        player.edit(img, name, age, position, country, price);
    }

    deletePlayer(index) {
        this.players.splice(index, 1);
    }
}