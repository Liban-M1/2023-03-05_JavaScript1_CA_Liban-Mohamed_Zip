



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

