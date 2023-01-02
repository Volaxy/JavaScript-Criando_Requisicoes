async function getVideos() {
    const connection = await fetch("http://localhost:3000/videos");
    const convertedConnection = await connection.json();
    
    return convertedConnection;
}

async function createVideo(titulo, descricao, url, imagem) {
    const connection = await fetch("http://localhost:3000/video", {
        method: "POST",

        headers: {
            "Content-type": "application/json"
        },

        body: JSON.stringify({
            titulo: titulo,
            descricao: `${descricao} mil visualizações`,
            url: url,
            imagem: imagem
        }),
    });

    const convertedConnection = await connection.json();

    return convertedConnection;
}

export const apiConnection = {
    getVideos,
    createVideo
}