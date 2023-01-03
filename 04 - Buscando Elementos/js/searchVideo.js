import { apiConnection } from "./connectApi.js";
import createCard from "./showVideos.js";

async function searchVideo(event) {
    event.preventDefault();

    const searchValue = document.querySelector("[data-search]").value;
    const search = await apiConnection.getVideo(searchValue);

    const list = document.querySelector("[data-list]");

    while(list.firstChild) {
        list.removeChild(list.firstChild);
    }

    search.forEach(item => list.appendChild(createCard(item.titulo, item.descricao, item.url, item.imagem)));
}

const $searchButton = document.querySelector("[data-search-button]");
$searchButton.addEventListener("click", event => searchVideo(event));