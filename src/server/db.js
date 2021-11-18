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

    saveUser(user) { // Login
        this.users.push(user);
        this.saveFile(USER_FILE, JSON.stringify(this.users));
    }

    findUser(user) {
        return this.users.find((x) => user.email == x.email);
    }
}


module.exports = new DB();

