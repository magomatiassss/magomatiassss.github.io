let miImage = document.querySelector('img');
miImage.onclick = function () {
    let miSrc = miImage.getAttribute('src');
    if (miSrc === 'images/lola.jpeg') {
      miImage.setAttribute('src','images/lola2.jpeg');
    } else {
      miImage.setAttribute('src', 'images/lola.jpeg');
    }
}

let miBoton = document.querySelector('button');
let miTitulo = document.querySelector( 'h1');

function estableceNombreUsuario() {
  let miNombre = prompt('Introduzca su nombre.');
  if(!miNombre) {
    estableceNombreUsuario();
  } else {
    localStorage.setItem('nombre', miNombre);
    miTitulo.innerHTML = 'Hola ' + miNombre + ', soy Lola';
  }
}
miBoton.onclick = function() {
    estableceNombreUsuario();
}