import {generarGaleria} from './home/galeria.js';
import {obtenerProductos} from './shop/tienda.js';

// Home
if (document.title === 'Health Pets | Home') {
    generarGaleria();
};

// Shop
if (document.title === 'Health Pets | Shop') {
    obtenerProductos();
};