var form = document.getElementById("signpF");

form.addEventListener("submit", function (event) {
    event.preventDefault();

    validateForm();
});

function validateForm() {
    const username = document.getElementById("username").value;
    const email = document.getElementById("email").value;
    const password = document.getElementById("password").value;
    const terms = document.getElementById("terms").checked;

    const username_error = document.getElementById("username_error");
    const email_error = document.getElementById("email_error");
    const password_error = document.getElementById("password_error");
    const terms_error = document.getElementById("terms_error");

    username_error.textContent = "";
    email_error.textContent = "";
    password_error.textContent = "";
    terms_error.textContent = "";

    let isValid = true;

    if (username.trim() === "") {
        username_error.textContent = "Username is required.";
        isValid = false;
    }

    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (email.trim() === "") {
        email_error.textContent = "Email is required.";
        isValid = false;
    } else if (!emailPattern.test(email)) {
        email_error.textContent = "Please enter a valid email address.";
        isValid = false;
    }

    if (password.trim() === "") {
        password_error.textContent = "Password is required.";
        isValid = false;
    } else if (password.length < 8) {
        password_error.textContent = "Password must be at least 8 characters long.";
        isValid = false;
    }

    if (!terms) {
        terms_error.textContent = "You must accept the terms and conditions.";
        isValid = false;
    }

    if (isValid) {
        document.getElementById("success_message").style.display = "block";

    } else {
        document.getElementById("success_message").style.display = "none";
    }

}

let resend_btn = document.getElementById("resend_btn");

let countDown = 10;

let timer = setInterval(function () {
    countDown--;

    if (countDown > 0) {
        resend_btn.textContent = "Resend in " + countDown + "s";
    } else {

        clearInterval(timer);
        resend_btn.disabled = false;
        resend_btn.textContent = "Resend Verification";
    }
},1000);
