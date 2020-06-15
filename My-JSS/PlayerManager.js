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

    getHtml() {
        let table = `<table border="0px solid black" cellspacing="0" class="table table-striped">
                        <tr>
                            <th>Image</th>
                            <th>Name</th>
                            <th>Age</th>
                            <th>Position</th>
                            <th>Country</th>
                            <th>Transfer Price</th>
                            <th colspan="2">Action</th>
                        </tr>`;
        for (let i = 0; i < this.players.length; i++) {
            table += "<tr>" + this.players[i].getHtml() + this.getAction(i) + '</tr>';
        }
        table += `</table>`;
        return table;
    }

    getAction(index) {
        let action = `<td><button class="btn btn-warning" onclick="edit(${index})">Edit</button></td>
                        <td><button class="btn btn-danger" onclick="del(${index})">Delete</button></td>`;
        return action;
    }

    getProductByIndex(index) {
        return this.players[index];
    }
}