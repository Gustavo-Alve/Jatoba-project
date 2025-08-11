function send() {
const url = 'http://192.168.22.184:5000/equipments/';  // lista todos os documentos //curl http://127.0.0.1:5000/equipments/
const content = document.getElementById('container')
//Criar um botao que monstra todos os documentos
fetch(url) //faz requisição na variavel "url" que criamos
  .then(response => {
    if (!response.ok) {
      throw new Error(`Error: ${response.status}`);
    }
    return response.json();
  })
  .then(data => {
    content.innerHTML = '';
    const equipments = Array.isArray(data) ? data : [data];

      equipments.forEach(item => {
      const section = document.createElement('section');
      section.classList.add('modelo');
      section.innerHTML = `
              <h3>${item.name}</h3>
              <img src="${item.image_url}" alt= "Imagem do dispositivo">
              <div class="botoes">
                  <a href="./downloads/AX-300.pdf" download>
                      <button class="download">
                          <img src="./imgs/download-svg.svg" alt="Ícone de download"> Baixar
                      </button>
                  </a>
              </div>
      `;
      content.appendChild(section) // Adiciona a section criada dentro da nossa div / variavel content
    })
  })
  .catch(error => {
    console.log('API fora do ar', error.message)
  })
}
