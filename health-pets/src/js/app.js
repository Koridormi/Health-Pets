import {generarGaleria} from './home/galeria.js';
import {obtenerProductos} from './shop/tienda.js';

// Home
if (document.title === 'Health Pets | Cuidado y bienestar para mascotas') {
    generarGaleria();
};

// Shop
if (document.title === 'Tienda para mascotas | Health Pets') {
    obtenerProductos();
};
