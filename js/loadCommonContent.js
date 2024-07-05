class Load {
  // Elemento <body> do documento HTML
  #body = document.querySelector('body');

  // Carrega o conteúdo de um arquivo através de uma URL
  async loadFile(file) {
    try {
      const response = await fetch(file);

      // Verifica se a resposta da requisição está ok
      if (!response.ok) {
        throw new Error('Erro ao carregar o arquivo: ' + response.status);
      }

      // Retorna o texto do arquivo como uma string
      return await response.text();
    } catch (error) {
      console.error('Erro ao carregar arquivo:', error);
      throw error; // Propaga o erro para quem chamar loadFile
    }
  }

  // Cria um elemento HTML com base no conteúdo de um arquivo
  async createElement(fileText, elementToCreate) {
    try {
      // Carrega o conteúdo do arquivo especificado
      const fileContent = await this.loadFile(fileText);

      // Cria um novo elemento HTML do tipo especificado (por exemplo, 'header' ou 'footer')
      const element = document.createElement(elementToCreate);

      // Define o conteúdo do elemento com o texto do arquivo carregado
      element.innerHTML = fileContent;

      // Retorna o elemento HTML criado e preenchido
      return element;
    } catch (error) {
      console.error('Erro ao criar elemento:', error);
      throw error; // Propaga o erro para quem chamar createElement
    }
  }

  // Insere um header no início do elemento <body> do documento
  async header() {
    try {
      // Cria um novo elemento 'header' com base no conteúdo do arquivo 'header.html'
      const headerElement = await this.createElement('../partials/header.html', 'header');
      // Insere o elemento 'header' no início do elemento <body> do documento
      this.#body.prepend(headerElement);
    } catch (error) {
      console.error('Erro ao inserir header:', error);
    }
  }

  // Insere um footer no final do elemento <body> do documento
  async footer() {
    try {
      // Cria um novo elemento 'footer' com base no conteúdo do arquivo 'footer.html'
      const footerElement = await this.createElement('../partials/footer.html', 'footer');

      // Insere o elemento 'footer' no final do elemento <body> do documento
      this.#body.append(footerElement);
    } catch (error) {
      console.error('Erro ao inserir footer:', error);
    }
  }
}

// Exporta uma instância da classe Load para ser utilizada em outros módulos
export const load = new Load();
