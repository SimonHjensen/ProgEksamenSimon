document.getElementById("DOMContentLoaded", (event) => {

    const user = localStorage.getItem("user");
    if (!user){
        location.hred = "/login.html";
    }
    
});