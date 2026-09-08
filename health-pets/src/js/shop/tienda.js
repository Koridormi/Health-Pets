// Selectors
const productosDiv = document.querySelector('.main__div');

// Functions
function obtenerProductos() {
    const url = '../db/productos.json';

    fetch(url)
        .then( (response) => response.json())
        .then( (data) => {
            data.forEach( (producto) => {
                mostrarProductos(producto.id, producto.titulo, producto.imagen, producto.descripcion, producto.precio);
            });
        });
};

function mostrarProductos(id, titulo, imagen, descripcion, precio) {
    const divProducto = document.createElement('div');
    const tituloProducto = document.createElement('h3');
    const imagenProducto = document.createElement('img');
    const descripcionProducto = document.createElement('p');
    const precioProducto = document.createElement('p');

    divProducto.id = `Producto: ${id}`;
    tituloProducto.textContent = titulo;
    imagenProducto.src = imagen;
    imagenProducto.alt = titulo;
    descripcionProducto.textContent = descripcion;
    precioProducto.textContent = `$${precio.toLocaleString('es-AR')}`;

    productosDiv.appendChild(divProducto);
    divProducto.appendChild(tituloProducto);
    divProducto.appendChild(imagenProducto);
    divProducto.appendChild(descripcionProducto);
    divProducto.appendChild(precioProducto);
};

export {obtenerProductos};