import '../css/componentes.css';
import pcell from '../assets/img/pcell.gif';

export const saludar = (nombre) => {
    console.log('Creando etiqueta h1');

    const h1 = document.createElement('h1');
    h1.innerText = `Hola, ${nombre}`;

    document.body.append(h1);

    //imagen
    const img = document.createElement('img');
    img.src = pcell;
    document.body.append(img);
}