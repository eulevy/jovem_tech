function buscarFilme() { const input = document.getElementById('input-filme').value 
     apiGet(input) 
}
async function apiGet(filme) { 
    let dados = await fetch(`https://www.omdbapi.com/?apikey=d4938800&t=${filme}`)
     let resposta = await dados.json()  
     apresentarDados(resposta) }

     function apresentarDados(resposta) { 
        document.getElementById('poster').src = resposta.Poster; 
        document.getElementById('titulo').innerHTML = resposta.Title; 
        document.getElementById('ano').innerHTML = resposta.Year; 
        document.getElementById('diretor').innerHTML = resposta.Director; 
        document.getElementById('genero').innerHTML = resposta.Genre; 
        document.getElementById('nota-IMDb').innerHTML = resposta.imdbRating; 
    }