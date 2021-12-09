class Lot {
    constructor(name, tlf, city, category, good, image, price, description, id) {
        this.name = name;
        this.tlf = tlf;
        this.city = city;
        this.category = category;
        this.good = good;
        this.price = price;
        this.description = description;
        this.id = id;
        this.image = image;

    };
}

module.exports = Lot;

