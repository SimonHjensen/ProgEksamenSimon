const express = require("express");
const app = express();

const userController = require("./src/controllers/user-controller.js"); 
const PORT = process.env.PORT || 3000;

app.use(express.static("./src/client/")); 

app.use(express.json());

app.use("/users", userController); 

app.listen(PORT, console.log("The server is running"));



