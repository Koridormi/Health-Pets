export {generarGaleria}

// Functions
function generarGaleria() {
    const galeriaSite = document.querySelector('.section__div');

    const imagenes = [
        '../../public/assets/home/galeria/1.webp',
        '../../public/assets/home/galeria/2.webp',
        '../../public/assets/home/galeria/3.webp',
        '../../public/assets/home/galeria/4.webp',
        '../../public/assets/home/galeria/5.webp',
        '../../public/assets/home/galeria/6.webp',
        '../../public/assets/home/galeria/7.webp',
        '../../public/assets/home/galeria/8.webp',
        '../../public/assets/home/galeria/9.webp',
        '../../public/assets/home/galeria/10.webp',
        '../../public/assets/home/galeria/11.webp',
        '../../public/assets/home/galeria/12.webp',
        '../../public/assets/home/galeria/13.webp',
        '../../public/assets/home/galeria/14.webp',
        '../../public/assets/home/galeria/15.webp',
        '../../public/assets/home/galeria/16.webp',
        '../../public/assets/home/galeria/17.webp',
        '../../public/assets/home/galeria/18.webp',
        '../../public/assets/home/galeria/19.webp',
        '../../public/assets/home/galeria/20.webp'
    ];

    const galeriaDiv = document.createElement('DIV');
    galeriaDiv.classList.add('div__galeria');

    const galeriaImg = imagenes.forEach( (src, index) => {
        const imagen = document.createElement('IMG');

        imagen.src = src;
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

    imagen.src = `../../public/assets/home/galeria/${index}.webp`;
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
};

function cerrarModal() {
    console.log('X');
};