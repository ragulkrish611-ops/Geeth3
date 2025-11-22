function protectPage() {
    let user = localStorage.getItem("loggedin");

    if (user !== "true") {
        window.location.href = "index.html"; // login page
    }
}

function logout() {
    localStorage.removeItem("loggedin");
    localStorage.removeItem("user");
    window.location.href = "index.html";
}
