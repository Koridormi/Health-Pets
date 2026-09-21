let ultimoElementoActivo = null;
let modalKeydownHandler = null;

function generarGaleria() {
    const galeriaSite = document.querySelector('.section__div');

    const imagenes = [
        {src: 1, alt: 'Collares para perros en diferentes colores'},
        {src: 2, alt: 'Cama acolchada verde para mascotas'},
        {src: 3, alt: 'Comederos de cerámica para mascotas'},
        {src: 4, alt: 'Perro jugando con una cuerda azul'},
        {src: 5, alt: 'Rascadores y torres de juego para gatos'},
        {src: 6, alt: 'Gato jugando con una varita de plumas'},
        {src: 7, alt: 'Alimentos envasados para mascotas'},
        {src: 8, alt: 'Transportadora rígida para mascotas'},
        {src: 9, alt: 'Pelotas y juguetes de goma para mascotas'},
        {src: 10, alt: 'Arnés rosado para perro'},
        {src: 11, alt: 'Arenero azul con pala para gatos'},
        {src: 12, alt: 'Productos líquidos de higiene para mascotas'},
        {src: 13, alt: 'Cachorro jugando con un juguete amarillo'},
        {src: 14, alt: 'Bolsas de alimento balanceado para mascotas'},
        {src: 15, alt: 'Cama redonda acolchada para mascotas'},
        {src: 16, alt: 'Ave en una jaula equipada'},
        {src: 17, alt: 'Correa retráctil verde para perros'},
        {src: 18, alt: 'Acuario plantado para peces'},
        {src: 19, alt: 'Conejo junto a un túnel de madera'},
        {src: 20, alt: 'Abrigos de diferentes colores para mascotas'}
    ];

    const galeriaDiv = document.createElement('div');
    galeriaDiv.classList.add('div__galeria');

    imagenes.forEach( (imagenData, index) => {
        const boton = document.createElement('button');
        const imagen = document.createElement('img');

        boton.type = 'button';
        boton.classList.add('galeria__boton');
        boton.setAttribute('aria-label', `Ampliar imagen: ${imagenData.alt}`);

        imagen.src = `../../public/assets/home/galeria/${imagenData.src}.webp`;
        imagen.alt = imagenData.alt;
        imagen.loading = 'lazy';
        imagen.decoding = 'async';

        boton.appendChild(imagen);
        galeriaDiv.appendChild(boton);
        boton.addEventListener('click', () => mostrarImagen(index, imagenData.alt));
    });

    galeriaSite.appendChild(galeriaDiv);
};

function mostrarImagen(index, descripcion) {
    if (document.querySelector('.modal')) {
        return;
    };

    ultimoElementoActivo = document.activeElement;

    const imagenDiv = document.createElement('div');
    const imagen = document.createElement('img');
    const modal = document.createElement('div');
    const cerrarModalBtn = document.createElement('button');

    imagenDiv.classList.add('imagenDiv');

    imagen.src = `../../public/assets/home/galeria/${index + 1}.webp`;
    imagen.alt = descripcion;

    modal.classList.add('modal');
    modal.setAttribute('role', 'dialog');
    modal.setAttribute('aria-modal', 'true');
    modal.setAttribute('aria-label', `Vista ampliada: ${descripcion}`);
    modal.addEventListener('click', (event) => {
        if (event.target === modal) {
            cerrarModal();
        };
    });

    cerrarModalBtn.classList.add('modalBoton');
    cerrarModalBtn.type = 'button';
    cerrarModalBtn.textContent = 'Cerrar';
    cerrarModalBtn.addEventListener('click', cerrarModal);

    imagenDiv.appendChild(imagen);
    imagenDiv.appendChild(cerrarModalBtn);
    modal.appendChild(imagenDiv);

    const html = document.querySelector('html');
    html.classList.add('overflow-hidden');
    html.appendChild(modal);

    modalKeydownHandler = (event) => {
        if (event.key === 'Escape') {
            cerrarModal();
        };

        if (event.key === 'Tab') {
            event.preventDefault();
            cerrarModalBtn.focus();
        };
    };

    document.addEventListener('keydown', modalKeydownHandler);
    cerrarModalBtn.focus();
};

function cerrarModal() {
    const modal = document.querySelector('.modal');

    if (!modal || modal.classList.contains('modal-fadeout')) {
        return;
    };

    modal.classList.add('modal-fadeout');
    document.removeEventListener('keydown', modalKeydownHandler);

    setTimeout( () => {
        const html = document.querySelector('html');

        modal.remove();
        html.classList.remove('overflow-hidden');
        ultimoElementoActivo?.focus();
    }, 250);
};

export {generarGaleria};
