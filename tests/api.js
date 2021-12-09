const {expect} = require('chai');
const chai = require('chai');
const chaiHttp = require('chai-http');
const router = require("./../src/controllers/user-controller");

chai.use(chaiHttp);

describe("endpoint", () => { // 
    describe("POST /create", () => {
        it("Should return an array", (done) => { // Benytter mig af chai til at teste mit router.post endpoint
            chai
            .request(router) 
            .post('/create')
            .end((error, response) => {
                expect(error).to.be.null; // Forventer ikke der er en fejl
                expect(response.status).to.equal(200); // Forventer at statuskoden er 200 (kører som det skal)
                expect(response.body).to.be.an("array") // Forventer at indholdet rent faktisk er et array
                done(); // Kalder en ende på koden
            });
        });
    });
});