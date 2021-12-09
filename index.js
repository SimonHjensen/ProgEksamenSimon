const express = require("express"); // Benytter mig at npm til at hente express og derefter kræver jeg at det det bliver kørt
const app = express(); // Express gør det muligt for mig at oprette min "server"

const userController = require("./src/controllers/user-controller.js"); // For at gøre det mere overskueligt for mig selv, har jeg lavet mine middleware filer seperat.
const lotController = require("./src/controllers/lot-controller"); // --||-- ved at gøre brug af module.exports, i de givne filer, gør det muligt at hente dem i min index fil.

const PORT = process.env.PORT || 3000; /* I stedet for bare at kalde PORT = XXXX, som er statisk, så bruger jeg process.env.PORT || 3000. Det vil sige at hvis ikke der er
pre-defineret en port, så vil den så benytte sig af port 3000.
*/

app.listen(PORT, console.log("The server is running")); // Fortæller mit program at det skal lytte til min port jeg lige har defineret, og fortælle i konsollen "The server is running"


app.use(express.static("./src/client/"));  // Her fortæller jeg min app, at jeg gerne vil køre alle min client side filer statisk (altså at de ikke ændrer sig når min app kører).

app.use(express.json()); // En metode der gør det muligt for appen at registrere indkommende data som et JSON objekt.


app.use("/users", userController); // Her definerer jeg filstien for min localhost:3000/users/xxxx, altså alt efter "users/" definerer et endpoint eller en handling
app.use("/lots", lotController) // Gør det samme her for mine annoncer
app.use("/database/images", express.static("./database/images")); // Her gør definerer jeg den filsti der gør det muligt at kunne gemme billeder i min database.




