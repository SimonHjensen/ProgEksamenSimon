const express = require("express");
const app = express();

// const db = require("/.src/server/db.js");

// console.log(db.openfile())


// Controllers
const userController = require("./src/controllers/user-controller.js"); // Indsæt filst i parantesen 
const PORT = process.env.PORT || 3000;

// Middleware 
app.use(express.static("")); // Indsæt filsti i parantesen

app.use(express.json());

// Routes
app.use("/users", userController); // Indsæt filsti i citationstegn

// Init
app.listen(PORT, console.log("The server is running"));



