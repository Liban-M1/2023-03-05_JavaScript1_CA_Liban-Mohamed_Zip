



// Home Button
document.addEventListener("DOMContentLoaded", function() {


    var btn = document.getElementById("btn");
    var newBtnCreated = false;

    btn.addEventListener("click", function() {
    if (!newBtnCreated) {
    var newBtn = document.createElement("button");

    newBtn.id = 'newBtn';
    newBtn.className = "homebtn";
    newBtn.textContent = "Details";
    newBtn.classList.add("homebtn");

    document.body.appendChild(newBtn);

    var postCardDiv = document.querySelector(".post-card .content");
    postCardDiv.appendChild(newBtn)

    newBtnCreated = true;
    }
    });
});