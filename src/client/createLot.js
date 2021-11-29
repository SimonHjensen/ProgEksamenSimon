
    document.getElementById("createLot").addEventListener("submit", (event) => {

        event.preventDefault();

        const name = document.getElementById("name").value
        const tlf = document.getElementById("tlf").value
        const city = document.getElementById("city").value
        const category = document.getElementById("category").value
        const good = document.getElementById("good").value
        // const image = document.getElementById("image").value
        const price = document.getElementById("price").value
        const description = document.getElementById("description").value


        const lot = {
            name: name,
            tlf: tlf,
            city: city,
            category: category,
            good: good,
            //image: image,
            price: price,
            description: description,
        }
        
        fetch("http://localhost:3000/lots/create", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(lot),
        })
        .then((response) => response.json())
        .then((response) => {
            if (response) {
                location.href = "/lots.html";
            }
            })
        .catch(() => {
            window.alert("Din annonce kunne ikke oprettes.");
        
        });  
    }); 