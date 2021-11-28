const express = require("express");
const router = express.Router();
const Lot = require("../server/models/lot")
const db = require("./../server/dblot")



router.post("/create", (req, res) => {
    const lot = new Lot(req.body.name, req.body.tlf, req.body.city, req.body.category, req.body.good, req.body.image, req.body.description);
    db.saveLot(lot);
    res.status(200).send(true);
});



router.delete("/delete", (req, res) => {
    const lot = new Lot(req.body.name, req.body.tlf, req.body.city, req.body.category, req.body.good, req.body.image, req.body.description);
    db.deleteLot(lot);
    res.status(200).send(true)
});

router.get("get", (req, res =>{
    const lot = new Lot(req.body.name, req.body.tlf, req.body.city, req.body.category, req.body.good, req.body.image, req.body.description);
    db.openFile(lot);
    res.status(200).send(true)


}))

module.exports = router;