const express = require ("express");
const router = express.Router();
const userModel = require("../server/models/user")
const db = require("../server/db")


router.post("/create", (req,res) => {
    const user = new userModel(req.body.email, req.body.password);
    db.saveUser(user);
    res.status(200).send(true);
});

router.post("/login", (req,res) => {
    const user = new userModel(req.body.email, req.body.password);
    const found = db.findUser(user);
    if (found) {
        if (user.password == found.password) {
            res.status(200).send(true)
        }
    else {
        res.status(401).send(false)
    }
    }
    else {
        res.status(404).send(false)
    }
});

module.exports = router;