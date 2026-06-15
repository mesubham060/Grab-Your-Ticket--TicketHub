// Simple local login check
document.getElementById("loginForm").addEventListener("submit", function(e) {
    e.preventDefault();

    const username = document.getElementById("username").value.trim();
    const password = document.getElementById("password").value.trim();
    const errorMsg = document.getElementById("error-msg");

    // Demo credentials
    if (username === "admin" && password === "12345") {
        localStorage.setItem("isLoggedIn", "true");
        window.location.href = "index.html";
    } else {
        errorMsg.textContent = "Invalid username or password!";
    }
});

// If already logged in, redirect to main page
if (localStorage.getItem("isLoggedIn") === "true") {
    window.location.href = "index.html";
}
