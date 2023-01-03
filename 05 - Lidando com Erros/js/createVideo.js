import { apiConnection } from "./connectApi.js";

const $form = document.querySelector("[data-form]");

async function newVideo(event) {
    event.preventDefault();

    const image = document.querySelector("[data-image]").value;
    const url = document.querySelector("[data-url]").value;
    const title = document.querySelector("[data-title]").value;
    const description = 5;

    try {
        await apiConnection.createVideo(title, description, url, image);

        window.location.href = "../pages/envio-concluido.html";
    } catch(error) {
        alert(error);
    }
}

$form.addEventListener("submit", event => newVideo(event));