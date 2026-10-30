
let form = document.querySelector("#loginForm");

form.addEventListener("submit", function(event) {

    event.preventDefault();

    let username = document.querySelector("#username").value;
    let password = document.querySelector("#password").value;

    let message = document.querySelector("#message");

    if (/^[A-Za-z]+$/.test(username) && /^[0-9]{8}$/.test(password)) {
        message.textContent = "Login successful!";
    } 
    else {
        message.textContent = "Invalid username or password";
    }
});















