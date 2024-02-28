let form = document.getElementById("login-form");
let button = document.getElementById("login-button");

form.addEventListener("submit", (event)=>{
    event.preventDefault(); // redirecciona
    location.href = "log-out.html";
});
