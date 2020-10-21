import * as UI from './interfaz.js';
import API from './api.js';

UI.formularioBuscar.addEventListener('submit', buscarCancion);

function buscarCancion(e) {
    e.preventDefault();

    const artista = document.getElementById('artista').value;
    const cancion = document.getElementById('cancion').value;

    if(artista === '' || cancion === '') {
        UI.divMensaje.textContent = 'Error, todos los campos son obligatorios';
        UI.divMensaje.classList.add('error');

        setTimeout(() => {
            UI.divMensaje.textContent = '';
            UI.divMensaje.classList.remove('error');
        }, 3000);

        return;
    }

    const busqueda = new API(artista, cancion);
    busqueda.consultarAPI();

}