
// Login Pop-up 
function toggleLogin() {
    document.getElementById("login-window").style.display = "flex";
    document.getElementById("hero").style.display = "none";
};

// Close button
function closeLoginWindow() {
    document.getElementById("login-window").style.display = "none";
    document.getElementById("hero").style.display = "flex";
}
