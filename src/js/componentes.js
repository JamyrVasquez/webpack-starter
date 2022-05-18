import '../css/componentes.css'; //Para que aparezcan en el "index.html" en la carpeta "dist"
// import webpacklogo from '../assets/img/webpack-logo.png';
 
export const saludar = (nombre) => {
    console.log('Creando etiqueta h1');

    const h1 = document.createElement('h1');
    h1.innerText = `Hola, ${nombre}`;

    document.body.append(h1);

    //Img
    // console.log(webpacklogo + 'Jamyr');
    // const img = document.createElement('img');
    // img.src = webpacklogo;
    // document.body.append(img)
}