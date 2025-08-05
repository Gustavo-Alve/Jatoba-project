
function send() {
const url = 'http://192.168.22.184:5000/equipments/5';
const teste = document.getElementById('container')

fetch(url) //faz requisição na variavel "url" que criamos
  .then(response => {
    if (!response.ok) {
      throw new error(`Deu ruim: ${response.status}`);
    }
    return response.json();
  })
  .then(data => {
    let content = data;
    teste.innerHTML = `
     <p class = "names">Nome:</p> ${content.id}<br>
     <p class = "names">Nome:</p> ${content.name}<br>
     <p class = "names">Nome:</p> ${content.model}<br>
     <img src="${data.image_url}" alt="Imagem do dispositivo">
  
    `
  })
  .catch(error => {
    console.log('nao carregou', error.message)
  })

}
