document.addEventListener("DOMContentLoaded", () => {
    const user = localStorage.getItem("user")
    if (user) {
        location.href = "/";
    }

    document.getElementById("loginForm").addEventListener("submit", (event) => {
        event.preventDefault();

        const email = document.getElementById("email").value
        const password = document.getElementById("password").value

        const user = {
            email: email,
            password: password,
        };

        fetch("http://localhost:3000/users/login", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(user),
            })
            .then(response => response.json())
            .then((response) => {
                if (response) {
                    console.log(response)
                    localStorage.setItem("user", JSON.stringify(response)) // Gemmer oplysninger så man forbliver logget ind
                    location.href = "/";
                } else {
                    window.alert("Wrong email or password")
                }
            })
            .catch(() => {
                window.alert("Der er sgu råd i soklen, noget går galt her.");

            });
    });
});