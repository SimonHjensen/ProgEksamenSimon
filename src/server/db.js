var fs = require("fs");

const PATH = __dirname + "/../../database" // Kan ændre i de to konstanter her for at redefinere filstien til min users database
const USER_FILE = "/users.json"

class DB {
    constructor() {
        this.users = this.openFile(USER_FILE);
    }

    saveFile(fileName, contentString) { // Funktion der kan skrive i users.json fil
        fs.writeFileSync(PATH + fileName, contentString);
    }

    openFile(fileName) { // Funktion der kan åbne og returnere vores users.json fil
        const file = fs.readFileSync(PATH + fileName);
        return JSON.parse(file);
    }

    saveUser(user) { // Bruger saveFile funktionen til at pushe den oprettede bruger ind i databasen
        this.users.push(user);
        this.saveFile(USER_FILE, JSON.stringify(this.users));
    }

    findUser(user) {
        return this.users.find((x) => user.email == x.email);
    }

    deleteUser(user) {
        this.users = this.users.filter((x) => x.id != user.id);
        this.saveFile(USER_FILE, JSON.stringify(this.users));
    }

}


module.exports = new DB();