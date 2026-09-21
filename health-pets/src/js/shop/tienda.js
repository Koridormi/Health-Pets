// Selectors
const productosDiv = document.querySelector('.main__div');
const carritoButton = document.querySelector('.divCarrito__boton');
const carritoDrawer = document.querySelector('.divCarrito__div');

// Events
if (carritoButton && carritoDrawer) {
    carritoButton.addEventListener('click', () => {
        const carritoAbierto = !carritoDrawer.hasAttribute('hidden');

        carritoDrawer.toggleAttribute('hidden', carritoAbierto);
        carritoButton.setAttribute('aria-expanded', String(!carritoAbierto));
    });
};

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

            agregarAlCarrito(data);
        })
        .catch( () => loading.loadingText.textContent = 'Error al cargar los productos')
        .finally( () => {
            const divProducto = document.querySelectorAll('.product-card');

            if (divProducto.length > 0) {
                productosDiv.removeChild(loading.loadingDiv);
            };
        });
};

function loadingProductos() {
    const loadingDiv = document.createElement('div');
    const loadingText = document.createElement('p');

    loadingText.textContent = 'Cargando Productos...';
    loadingDiv.classList.add('shop__status');
    loadingDiv.setAttribute('role', 'status');

    productosDiv.appendChild(loadingDiv);
    loadingDiv.appendChild(loadingText);

    return {loadingDiv, loadingText};
};

function mostrarProductos(id, titulo, imagen, descripcion, precio) {
    const articleProducto = document.createElement('article');
    const contenidoProducto = document.createElement('div');
    const accionesProducto = document.createElement('div');
    const tituloProducto = document.createElement('h3');
    const imagenProducto = document.createElement('img');
    const descripcionProducto = document.createElement('p');
    const precioProducto = document.createElement('p');
    const comprarProducto = document.createElement('button');

    articleProducto.classList.add('product-card');

    contenidoProducto.classList.add('product-card__content');

    accionesProducto.classList.add('product-card__actions');

    tituloProducto.classList.add('product-card__title');
    tituloProducto.textContent = titulo;

    imagenProducto.classList.add('product-card__image');
    imagenProducto.src = imagen;
    imagenProducto.alt = titulo;
    imagenProducto.width = 1254;
    imagenProducto.height = 1254;
    imagenProducto.loading = 'lazy';
    imagenProducto.decoding = 'async';

    descripcionProducto.classList.add('product-card__description');
    descripcionProducto.textContent = descripcion;

    precioProducto.classList.add('product-card__price');
    precioProducto.textContent = `$${precio.toLocaleString('es-AR')}`;

    comprarProducto.classList.add('product-card__button');
    comprarProducto.type = 'button';
    comprarProducto.textContent = 'Comprar';
    comprarProducto.dataset.id = id;
    comprarProducto.setAttribute('aria-label', `Comprar ${titulo}`);

    productosDiv.appendChild(articleProducto);
    articleProducto.appendChild(imagenProducto);
    articleProducto.appendChild(contenidoProducto);
    contenidoProducto.appendChild(tituloProducto);
    contenidoProducto.appendChild(descripcionProducto);
    contenidoProducto.appendChild(accionesProducto);
    accionesProducto.appendChild(precioProducto);
    accionesProducto.appendChild(comprarProducto);
};

// Carrito Desplegable Codigo

function carritoShop() {
    const carritoBox = [];

    return carritoBox;
};

function agregarAlCarrito(data) {
    const productos = data;
    const carrito = carritoShop();

    productosDiv.addEventListener('click', (e) => {
        const button = e.target.closest('.product-card__button');

        if (!button) return;

        const id = Number(button.dataset.id);
        const producto = productos.find( (producto) => producto.id === id);

        if (producto) {
            carrito.push(producto);
            crearListadoCarrito(carrito);
        };
    });
};

function crearListadoCarrito(carrito) {
    const carritoItems = document.querySelector('#div__carrito');
    const carritoVacio = document.querySelector('#carrito__vacio');

    const productos = carrito;

    console.log(productos);

    if (productos.length > 0) carritoVacio.hidden = true;

    carrito.forEach( (producto) => {
        const carritoListItem = document.createElement('li');
        const itemTitulo = document.createElement('p');
        const itemImagen = document.createElement('img');
        const itemDesc = document.createElement('p');
        const itemPrecio = document.createElement('p');
    
        itemTitulo.textContent = producto.titulo;
        itemImagen.src = producto.imagen;
        itemImagen.alt = producto.titulo;
        itemDesc.textContent = producto.descripcion;
        itemPrecio.textContent = `$${producto.precio.toLocaleString('es-AR')}`;
    
        carritoItems.appendChild(carritoListItem);
        carritoListItem.appendChild(itemTitulo);
        carritoListItem.appendChild(itemImagen);
        carritoListItem.appendChild(itemDesc);
        carritoListItem.appendChild(itemPrecio);
    });
};

export {obtenerProductos};