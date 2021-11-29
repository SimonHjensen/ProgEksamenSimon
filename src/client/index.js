document.addEventListener("DOMContentLoaded", (event) => {
  const user = localStorage.getItem("user");
  if (!user) {
    location.href = "/login.html";
  }

  document.getElementById("deleteUser").addEventListener("submit", (event) => {
    event.preventDefault();
    const user = JSON.parse(localStorage.getItem("user"));

    console.log(user)

    fetch("http://localhost:3000/users/delete", {
        method: "DELETE",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(user),
      })

      .then((response) => response.json())
      .then((response) => {
        if (response) {
          localStorage.removeItem("user");
          location.href = "/login.html";
        }
      })

      .catch(() => {
        window.alert("Der skete en fejl");
      });

  });

  document.getElementById("logoutUser").addEventListener("submit", (event) => {
    event.preventDefault();

    if (user) {
      localStorage.removeItem("user");
      location.href = "/login.html";
    };
  });

});