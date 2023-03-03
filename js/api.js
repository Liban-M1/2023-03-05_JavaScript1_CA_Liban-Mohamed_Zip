const requestUrl = "https://api.unsplash.com/search/photos?query=landmark&client_id=Xe5ZOVQDnEw6ksMMsanWY9E2OGfTqhGJpu3HAaVNXMg";

const getBtn = document.querySelector(".homebtn");
const landmarkDisplay = document.querySelector(".content img");

getBtn.addEventListener("click", async () => {
    let randomLandmark = await getNewLandmark();
    landmarkDisplay.src = randomLandmark;
});

async function getNewLandmark() {
    let ranNum = Math.floor(Math.random() * 10);
    return fetch(requestUrl)
    .then((Response) => Response.json())
    .then((data) => {
        let postCard = data.results[ranNum];
        return postCard.urls.regular;
    });
}