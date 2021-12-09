var fs = require("fs"); // Et modul til node.js, der gør det muligt at arbejde med filsystemet på ens computer, gør at man kan læse, oprette, opdatere, slette og omdøbe filer.

const PATH = __dirname + "/../../database" // Kan ændre i de to konstanter her for at redefinere filstien til min users database
const LOT_FILE = "/lots.json"

class DB { // Opretter en ny klasse jeg kalder DB (database)
    constructor() { // Constructor er en metode, eller et standard sæt af handlinger ved oprettelse af nyt objekt i en klasse
        this.lots = this.openFile(LOT_FILE); // Her er det altså at gå ind i vores lots.json fil, for at gemme ting i vores annonce database.
    }

    saveFile(fileName, contentString) { // Funktion der kan skrive i lots.json fil
        fs.writeFileSync(PATH + fileName, contentString);
    }

    openFile(fileName) { // Funktion der kan åbne og returnere vores lots.json fil
        const file = fs.readFileSync(PATH + fileName);
        return JSON.parse(file);
    }

    saveLot(lot) { // Bruger saveFile funktionen til at pushe den oprettede lot ind i databasen
        this.lots.push(lot);
        this.saveFile(LOT_FILE, JSON.stringify(this.lots));
    }

    findLot(lot) { // Skulle bruges til at kunne opdatere en annonce
        return this.lots.find((x) => lot.id == x.id);
    }

    deleteLot(lot) { // Skulle bruges til at kunne slette en annonce
        this.lots = this.lots.filter((x) => x.id != lot.id);
        this.saveFile(LOT_FILE, JSON.stringify(this.lots));
      }
    
}


module.exports = new DB(); // Eksporterer en tom klasse, så det er op til brugeren at udfylde dataen.

