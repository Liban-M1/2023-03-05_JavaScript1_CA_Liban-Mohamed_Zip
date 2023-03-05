
//Feed API
document.addEventListener("DOMContentLoaded", function() {
    
    const postCardsDiv = document.querySelector(".post-cards");
    const requestUrl = "https://api.unsplash.com/search/photos?query=landmark&client_id=Xe5ZOVQDnEw6ksMMsanWY9E2OGfTqhGJpu3HAaVNXMg";


    fetch (requestUrl)
    .then((Response) => Response.json())
    .then((data) => {
        data.results.forEach((result) => {
            const postCardDiv = document.createElement("div");
            postCardDiv.className = "post-card"; 

            const contentDiv = document.createElement("div");
            contentDiv.className = "content";

            const landmarkImg = document.createElement("img");
            landmarkImg.className = "landmark-img";
            landmarkImg.src = result.urls.regular;
            landmarkImg.addEventListener("click", () => {
                window.location.href = "details.html?id=" + result.id;
            });

            const landmarkDesc = document.createElement("p");
            landmarkDesc.className = "landmark-desc";
            landmarkDesc.textContent = "description: " + result.alt_description || "";

            const photographerName = document.createElement("p");
            photographerName.className = "photographer-name";
            photographerName.textContent = "Photographer: " + result.user.name || "";

            const photoLink = document.createElement("a");
            photoLink.className = "photo-link";
            photoLink.href = result.links.html;
            photoLink.target = "_blank";
            photoLink.textContent = "View on Unsplash"; 

            contentDiv.appendChild(landmarkImg);
            contentDiv.appendChild(landmarkDesc);
            contentDiv.appendChild(photographerName);
            contentDiv.appendChild(photoLink);
            
            postCardDiv.appendChild(contentDiv);
            postCardsDiv.appendChild(postCardDiv);
            
        });
    })
    
    .catch((error) => {
        console.error(error);
        const errorDiv = document.createElement("div");
        errorDiv.className = "error";
        errorDiv.textContent = "An error occured while fetching postcards";
        if (postCardsDiv !== null) {
            postCardsDiv.appendChild(errorDiv);
        } else {
            document.body.appendChild(errorDiv);
        }
    });
    
});