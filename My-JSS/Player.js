class Player {
    get img() {
        return this._img;
    }

    set img(value) {
        this._img = value;
    }

    get name() {
        return this._name;
    }

    set name(value) {
        this._name = value;
    }

    get age() {
        return this._age;
    }

    set age(value) {
        this._age = value;
    }

    get position() {
        return this._position;
    }

    set position(value) {
        this._position = value;
    }

    get country() {
        return this._country;
    }

    set country(value) {
        this._country = value;
    }

    get price() {
        return this._price;
    }

    set price(value) {
        this._price = value;
    }

    constructor(img, name, age, position, country, price) {
        this._img = img;
        this._name = name;
        this._age = age;
        this._position = position;
        this._country = country;
        this._price = price;
    }

    edit(img, name, age, position, country, price) {
        this.img = img;
        this.name = name;
        this.age = age;
        this.position = position;
        this.country = country;
        this.price = price;
    }

    getHtml() {
        let html = `<td><img src="${this.img}"></td>
                    <td>${this.name}</td>
                    <td>${this.age}</td>
                    <td>${this.position}</td>
                    <td>${this.country}</td>
                    <td>${this.price}</td>`;
        return html;
    }

    getHtmlView() {
        let html = `
                      <img src="${this.img}" alt="">
                      <div id="display">
                        <p id="p1">Name: ${this.name}</p>
                        <p id="id2">Age: ${this.age}</p>
                      </div>
                  `;
        return html;
    }
}