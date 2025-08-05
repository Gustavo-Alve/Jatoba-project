//settimeout
function intelbras() {
const url = 'http://192.168.22.184:5000/equipments/5';

fetch(url) //faz requisição na variavel "url" que criamos
  .then(response => {
    if (!response.ok) {
      throw new error(`Deu ruim: ${response.status}`);
    }
    return response.json();
  })
  .then(data => {
    console.log(data)
    
  })
  .catch(error => {
    console.log('nao carregou', error.message)
  })

}

//botao de voltar 