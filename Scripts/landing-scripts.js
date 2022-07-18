
// Login Pop-up 
function toggleLogin() {
    document.getElementById("login-window").style.display = "flex";
    document.getElementById("hero").style.display = "none";
    document.getElementById("about-prysm").style.display = "none";
    document.getElementById("login-btn").style.display = "none";
    document.getElementById("founders").style.display = "none";
};

// Signup Pop-up
function toggleSignupWindow() {
    document.getElementById("signup-window").style.display = "flex";
    document.getElementById("hero").style.display = "none";
    document.getElementById("about-prysm").style.display = "none";
    document.getElementById("login-btn").style.display = "none";
    document.getElementById("founders").style.display = "none";
}

// Add to Waitlist Button - Text Change
function toggleThankYou() {
    document.getElementById("signup-window-text").style.display = "none";
    document.getElementById("thankyou-text").style.display = "block";
}

// Close button
function closeLoginWindow() {
    document.getElementById("login-window").style.display = "none";
    document.getElementById("signup-window").style.display = "none";
    document.getElementById("hero").style.display = "flex";
    document.getElementById("about-prysm").style.display = "flex";
    document.getElementById("login-btn").style.display = "block";
    document.getElementById("founders").style.display = "flex";
};
