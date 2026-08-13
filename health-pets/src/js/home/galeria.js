export {generarGaleria}

// Functions
function generarGaleria() {
    const galeriaSite = document.querySelector('.section__div');

    const imagenes = [
        1, 2, 3, 4, 5, 6 , 7, 8, 9, 10,
        11, 12, 13, 14, 15, 16, 17, 18, 19, 20
    ];

    const galeriaDiv = document.createElement('DIV');
    galeriaDiv.classList.add('div__galeria');

    const galeriaImg = imagenes.forEach( (src, index) => {
        const imagen = document.createElement('IMG');

        imagen.src = `../../public/assets/home/galeria/${src}.webp`;
        imagen.alt = `Imagen de la Galeria - ${index + 1}`;
        imagen.loading = 'lazy';

        galeriaDiv.appendChild(imagen);

        // Event Handler
        imagen.onclick = () => mostrarImagen(index);
    });

    galeriaSite.appendChild(galeriaDiv);
};

function mostrarImagen(index) {
    const imagenDiv = document.createElement('DIV');
    const imagen = document.createElement('IMG');

    imagenDiv.classList.add('imagenDiv');

    imagen.src = `../../public/assets/home/galeria/${index + 1}.webp`;
    imagen.alt = `Imagen de la Galeria - ${index + 1}`;

    imagenDiv.appendChild(imagen);

    const modal = document.createElement('DIV');
    modal.classList.add('modal');
    modal.onclick = cerrarModal;

    modal.appendChild(imagenDiv);

    const cerrarModalBtn = document.createElement('BUTTON');
    cerrarModalBtn.classList.add('modalBoton');
    cerrarModalBtn.textContent = 'X';
    cerrarModalBtn.onclick = cerrarModal;

    imagenDiv.appendChild(cerrarModalBtn);

    const html = document.querySelector('html');
    html.classList.add('overflow-hidden');

    html.appendChild(modal);

    const imagenes = document.querySelectorAll('.modal');
    limpiarModal(imagenes);
};

function cerrarModal() {
    const modal = document.querySelector('.modal');
    modal.classList.add('modal-fadeout');

    setTimeout( () => {
        const html = document.querySelector('html');

        modal?.remove();
        html.classList.remove('overflow-hidden');
    }, 250);
};

function limpiarModal(modal) {
    if (modal.length > 1 ) {
        modal[0].remove();
    };
};