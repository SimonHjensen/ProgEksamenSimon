const express = require("express");
const app = express();

// Controllers
const userController = require("./src/controllers/user-controller.js"); // Indsæt filst i parantesen 
const PORT = process.env.PORT || 3000;

// Middleware 
app.use(express.static("./src/client/")); 

app.use(express.json());

// Routes
app.use("/users", userController); 

// 
app.listen(PORT, console.log("The server is running"));



