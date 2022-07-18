
// Login Pop-up 
function toggleLogin() {
    document.getElementById("login-window").style.display = "flex";
    document.getElementById("hero").style.display = "none";
    document.getElementById("about-prysm").style.display = "none";
    document.getElementById("login-btn").style.display = "none";
    document.getElementById("founders").style.display = "none";
};

// Close button
function closeLoginWindow() {
    document.getElementById("login-window").style.display = "none";
    document.getElementById("hero").style.display = "flex";
    document.getElementById("about-prysm").style.display = "flex";
    document.getElementById("login-btn").style.display = "block";
    document.getElementById("founders").style.display = "flex";
}
