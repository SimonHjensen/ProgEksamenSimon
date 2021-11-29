const express = require("express");
const router = express.Router();
const userModel = require("../server/models/user")
const db = require("./../server/db")


router.post("/create", (req, res) => {
    const user = new userModel(req.body.email, req.body.password, req.body.id);
    db.saveUser(user);
    res.status(200).send(true);
});

router.delete("/delete", (req, res) => {
    const user = new userModel(req.body.email, req.body.password, req.body.id);
    db.deleteUser(user);
    res.status(200).send(true)
});

router.post("/login", (req, res) => {
    const user = new userModel(req.body.email, req.body.password);
    const found = db.findUser(user);
    console.log(found)
    if (found) {
        if (user.password == found.password) {
            res.status(200).json(found)
        } else {
            res.status(401).send(false)
        }
    } else {
        res.status(404).send(false)
    };


});


module.exports = router;