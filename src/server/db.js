const fs = require("fs");

const PATH = __dirname + "../../database" // Kan ændre i de to konstanter her for at redefinere filstien til min users database
const USER_FILE = "/users.json"

class DB {
    constructor() {
        this.users = this.openFile();
    }

    saveFile() { // Funktion der kan skrive i users.json fil
        fs.writeFileSync(PATH + USER_FILE, this.users);
    }

    openFile() { // Funktion der kan åbne og returnere vores users.json fil
        const file = fs.readFileSync(PATH + USER_FILE);
        return JSON.parse(file);
    }

    saveUser(user) {
        this.users.push(user);
        this.saveFile();
    }

    findUser(user) {
        return this.users.find((x) => user.email == x.email);
    }
}

console.log(new DB().openFile())

module.exports = new DB();

