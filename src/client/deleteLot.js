document.addEventListener("DOMContentLoaded", (event) => {

    document.getElementById("deleteLot").addEventListener("submit", (event) => {
        event.preventDefault();

        const queryString = window.location.search;
        const urlParams = new URLSearchParams(queryString);
        const lot = urlParams.get('id')
        console.log(lot)
        fetch("http://localhost:3000/lots/delete", {
                method: "DELETE",
                body: formData
            })

            .then((response) => response.json())
            .then((response) => {
                if (response) {
                    location.href = "/lots.html";
                }
            })

            .catch(() => {
                window.alert("Der skete en fejl");
            });

    });

});