
document.addEventListener("DOMContentLoaded", (event) =>{
    document.getElementById("submitForm").addEventListener("submit", () => {
        event.preventDefault();

        const email = document.getElementById("email").value
        const password = document.getElementById("password").value

        const user = {
            email: email,
            password: password
        }

        fetch("http://localhost:3000/users/create", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(user),
        })
        .then((response) => response.json())
        .then((response) => {
            if (response) {
                location.href = "/login.html";
            }
            })
        .catch(() => {
            window.alert("Der er sgu råd i soklen, noget går galt her.");
        
        });  
    }); 
});