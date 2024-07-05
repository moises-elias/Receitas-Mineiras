class HeadManipulator {
  // Seleciona o elemento <head> do documento uma vez, usando campo privado
  #head = document.querySelector("head");

  // Método para adicionar um único link de folha de estilo ao <head>
  appendStylesheetLink(href) {
    const linkElement = document.createElement("link");
    linkElement.rel = "stylesheet"; // Define o tipo de link como folha de estilo
    linkElement.href = href; // Define o URL do link fornecido
    this.#head.appendChild(linkElement); // Adiciona o elemento link ao final do <head>
  }

  // Método para adicionar vários links de folha de estilo ao <head>
  appendMultipleStylesheetLinks(links) {
    links.forEach((href) => {
      this.appendStylesheetLink(href); // Para cada link no array, chama o método appendStylesheetLink
    });
  }

  // Método para adicionar um único link de Favicon ao <head>
  appendFavicon(href) {
    const linkElement = document.createElement("link");
    linkElement.rel = "shortcut icon"; // Define o tipo de link como folha de estilo
    linkElement.href = href; // Define o URL da Favicon fornecido
    this.#head.appendChild(linkElement); // Adiciona o elemento link ao final do <head>
  }
}

// Exemplo de uso da classe HeadManipulator
export const headManipulator = new HeadManipulator(); // Cria uma instância da classe HeadManipulator
