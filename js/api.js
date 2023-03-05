
// Unsplash API
const requestUrl = "https://api.unsplash.com/search/photos?query=landmark&client_id=Xe5ZOVQDnEw6ksMMsanWY9E2OGfTqhGJpu3HAaVNXMg";

const getBtn = document.querySelector(".homebtn");
const landmarkDisplay = document.querySelector(".content img");
const landmarkDesc = document.querySelector(".landmark-desc");
const photographerName = document.querySelector(".photographer-name");
const photoLink = document.querySelector(".photo-link");


photoLink.style.display = "none";

getBtn.addEventListener("click", async () => {
    let randomLandmark = await getNewLandmark();
    landmarkDisplay.src = randomLandmark.url;
    landmarkDesc.textContent = "Description:" + " " + randomLandmark.description || "";
    photographerName.textContent = "Photographer:" + " " + randomLandmark.photographer || "";
    photoLink.href = randomLandmark.link || "#";
    photoLink.style.display = "block";
    
});

async function getNewLandmark() {
    let ranNum = Math.floor(Math.random() * 10);
    return fetch(requestUrl)
    .then((Response) => Response.json())
    .then((data) => {
        let postCard = data.results[ranNum];
        return {
            url: postCard.urls.regular,
            description: postCard.alt_description,
            photographer: postCard.user.name,
            link: postCard.links.html
        };
    });
}