const express = require("express");
const router = express.Router();
const Lot = require("../server/models/lot");
const db = require("./../server/dblot")

const formData = require('express-form-data');

const pictures = {
    uploadDir: './database/images'
}

router.post("/create", formData.parse(pictures), (req, res, next) => {
    let {
        name,
        tlf,
        city,
        category,
        good,
        price,
        description,
        id
    } = req.body;
    let image = req.files.image.path.replace('\\', '/');
    const lot = new Lot (name, tlf, city, category, good, image, price, description, id)
    db.saveLot(lot)
    res.status(200).send(true);
});

router.delete("/delete", (req, res, next) => {
    const lot = new Lot (req.body.name, req.body.tlf, req.body.city, req.body.category, req.body.good, req.body.image, req.body.price, req.body.description, req.body.id)
    db.deleteLot(lot);
    res.status(200).send(true)
});

router.get("/get", (req, res) => {
    const lot = db.openFile('/lots.json')
    res.send(JSON.stringify(lot))
});



module.exports = router;