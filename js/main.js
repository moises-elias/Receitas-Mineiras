// Importando a classe headManipulator do módulo headManipulator.js

import { headManipulator } from './headManipulator.js';

// Importando função 'header' e 'footer' do módulo loadCommonContent.js
import { load } from './loadCommonContent.js';

// Array contendo os links de folhas de estilo a serem adicionados dinamicamente
const links = [
  './css/styles.css',
  'https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@24,400,0,0'
];

// Adiciona os links de folhas de estilo ao <head>
headManipulator.appendMultipleStylesheetLinks(links);

//Adiciona Favicon no <head>
headManipulator.appendFavicon('../imgs/favicon_transparent_32x32.png');

// Carrega o conteúdo comum do header
load.header();

// Carrega o conteúdo comum do footer
load.footer();
