// Selectors
const productosDiv = document.querySelector('.main__div');
const carritoButton = document.querySelector('.divCarrito__boton');
const carritoDrawer = document.querySelector('.divCarrito__div');

// Events
carritoButton.addEventListener('click', () => {
    if (carritoDrawer.hasAttribute('hidden')) {
        carritoDrawer.removeAttribute('hidden');
    } else {
        carritoDrawer.setAttribute('hidden', '');
    };
});

// Functions
function obtenerProductos() {
    const url = '../db/productos.json';
    const loading = loadingProductos();

    fetch(url)
        .then( (response) => response.json())
        .then( (data) => {
            data.forEach( (producto) => {
                mostrarProductos(producto.id, producto.titulo, producto.imagen, producto.descripcion, producto.precio);
            });
        })
        .catch( () => loading.loadingText.textContent = 'Error al cargar los productos')
        .finally( () => {
            const divProducto = document.querySelectorAll('.main__div > div');

            if (divProducto.length > 1) {
                productosDiv.removeChild(loading.loadingDiv);
            };
        });
};

function loadingProductos() {
    const loadingDiv = document.createElement('div');
    const loadingText = document.createElement('p');

    loadingText.textContent = 'Cargando Productos...';

    productosDiv.appendChild(loadingDiv);
    loadingDiv.appendChild(loadingText);

    return {loadingDiv, loadingText};
};

function mostrarProductos(id, titulo, imagen, descripcion, precio) {
    const divProducto = document.createElement('div');
    const tituloProducto = document.createElement('h3');
    const imagenProducto = document.createElement('img');
    const descripcionProducto = document.createElement('p');
    const precioProducto = document.createElement('p');
    const comprarProducto = document.createElement('button');

    divProducto.id = `Producto: ${id}`;
    tituloProducto.textContent = titulo;
    imagenProducto.src = imagen;
    imagenProducto.alt = titulo;
    descripcionProducto.textContent = descripcion;
    precioProducto.textContent = `$${precio.toLocaleString('es-AR')}`;
    comprarProducto.textContent = 'Comprar';
    comprarProducto.id = `Producto: ${id}`;

    productosDiv.appendChild(divProducto);
    divProducto.appendChild(tituloProducto);
    divProducto.appendChild(imagenProducto);
    divProducto.appendChild(descripcionProducto);
    divProducto.appendChild(precioProducto);
    divProducto.appendChild(comprarProducto);
};

function carritoShop() {
    const carritoBox = [];

    return carritoBox;
};

function agregarAlCarrito() {
    const productos = carritoShop();

    document.addEventListener('click', (e) => {
        console.log(e.target);
        productos.push(e.target);
        console.log(productos);
    });
};

agregarAlCarrito();

function crearListadoCarrito(titulo, imagen, descripcion, precio) {
    const carritoItems = document.querySelector('#div__carrito');
    const carritoVacio = document.querySelector('#carrito__vacio');

    const productos = carritoShop();

    if (carritoItems.children[0].id === 'carrito__vacio' && carritoItems.children.length > 0) {
        carritoVacio.remove();
        
        const carritoListItem = document.createElement('li');
        const itemTitulo = document.createElement('p');
        const itemImagen = document.createElement('img');
        const itemDesc = document.createElement('p');
        const itemPrecio = document.createElement('p');
    
        itemTitulo.textContent = titulo;
        // itemImagen.src = imagen;
        itemImagen.alt = titulo;
        itemDesc.textContent = descripcion;
        itemPrecio.textContent = `$${precio.toLocaleString('es-AR')}`;
    
        carritoItems.appendChild(carritoListItem);
        carritoListItem.appendChild(itemTitulo);
        carritoListItem.appendChild(itemImagen);
        carritoListItem.appendChild(itemDesc);
        carritoListItem.appendChild(itemPrecio);
    };
};

export {obtenerProductos};