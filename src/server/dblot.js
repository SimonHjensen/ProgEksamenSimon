var fs = require("fs");

const PATH = __dirname + "/../../database" // Kan ændre i de to konstanter her for at redefinere filstien til min users database
const LOT_FILE = "/lots.json"

class DB {
    constructor() {
        this.lots = this.openFile(LOT_FILE);
    }

    saveFile(fileName, contentString) { // Funktion der kan skrive i lots.json fil
        fs.writeFileSync(PATH + fileName, contentString);
    }

    openFile(fileName) { // Funktion der kan åbne og returnere vores lots.json fil
        const file = fs.readFileSync(PATH + fileName);
        return JSON.parse(file);
    }

    saveLot(lot) { //
        this.lots.push(lot);
        this.saveFile(LOT_FILE, JSON.stringify(this.lots));
    }

    findLot(lot) {
        return this.lots.find((x) => lot.good == x.good);
    }

    deleteLot(lot) {
        this.lots = this.lots.filter((x) => x.id != lot.id);
        this.saveFile(LOT_FILE, JSON.stringify(this.lots));
      }
    
}


module.exports = new DB();

