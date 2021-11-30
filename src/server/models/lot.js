class Lot {
    constructor(name, tlf, city, category, good, price, description, id) {
        this.name = name;
        this.tlf = tlf;
        this.city = city;
        this.category = category;
        this.good = good;
        // this.image = image;
        this.price = price;
        this.description = description;
        this.id = id;
    };
}

module.exports = Lot;

