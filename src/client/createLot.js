
    document.getElementById("createLot").addEventListener("submit", (event) => {

        event.preventDefault();

        const formData = new FormData(document.getElementById('createLot'));
        formData.append("id", Math.floor(Math.random() * 1000000));
       
        fetch("http://localhost:3000/lots/create", {
            method: "POST",
            body: formData
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