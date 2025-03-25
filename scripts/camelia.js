import { generateProductsHTML } from './productUtils.js';
import { loadHeader } from './header.js';

document.addEventListener('DOMContentLoaded', function () {
  loadHeader();
});

generateProductsHTML('camelia');
