



// Home Buttons
document.addEventListener("DOMContentLoaded", function() {

    const btn = document.getElementById("btn");
    let newBtnCreated = false;

    btn.addEventListener("click", function() {
    if (!newBtnCreated) {
    const newBtn = document.createElement("button");

    newBtn.id = "newBtn";
    newBtn.className = "homebtn";
    newBtn.textContent = "Explore more";
    newBtn.classList.add("homebtn");

    const link = document.createElement("a");
    link.href = "feed.html";
    link.appendChild(newBtn);


    document.body.appendChild(link);

    const postCardDiv = document.querySelector(".post-card .content");
    postCardDiv.appendChild(link)

    newBtnCreated = true;
    }
    });
});

