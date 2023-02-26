



// Home Button
document.addEventListener("DOMContentLoaded", function() {

    const btn = document.getElementById("btn");
    let newBtnCreated = false;

    btn.addEventListener("click", function() {
    if (!newBtnCreated) {
    const newBtn = document.createElement("button");

    newBtn.id = 'newBtn';
    newBtn.className = "homebtn";
    newBtn.textContent = "Details";
    newBtn.classList.add("homebtn");

    document.body.appendChild(newBtn);

    const postCardDiv = document.querySelector(".post-card .content");
    postCardDiv.appendChild(newBtn)

    newBtnCreated = true;
    }
    });
});

// Contact.html Form Validation 
/*
const form = document.querySelector("#submitButton");
const firstName = document.querySelector("#firstName");
const subject = document.querySelector("#subject");
const email = document.querySelector("#email");
const address = document.querySelector("#address");

const nameError = document.querySelector("#nameError");
const subjectError = document.querySelector("#subjectError");
const emailError = document.querySelector("#emailError");
const addressError = document.querySelector("#addressError");

const sendButton = document.querySelector("button[type='submit']");

form.addEventListener("submit", function(event) {
    event.preventDefault();

    // First-Name
    if (firstName.value.trim() === "") {
        nameError.style.display = "block";
    } else {
        nameError.style.display = "none";
    }

    // Subject
    if (subject.value.trim().length < 10) {
        subjectError.style.display = "block";
    } else {
        subjectError.style.display = "none";
    }

    // Email
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (email.value.trim() === "" || !emailRegex.test(email.value.trim())) {
        emailError.style.display = "block"; 
    } else {
        emailError.style.display = "none";
    }

    // Address
    if (address.value.trim().length < 25) {
        addressError.style.display = "block";
    } else {
        addressError.style.display = "none";
    }

    // submit if no errors
    if (!nameError.style.display && !subjectError.style.display && !emailError.style.display && !addressError.style.display) {
        alert("Message sent!");
        return true;
    } else {
        return false;
    }
});

form.addEventListener("input", function() {
    sendButton.disabled = !form.checkValidity();
});

*/


// Random Postcard Generator


