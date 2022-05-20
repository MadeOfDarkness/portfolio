const contactForm = document.querySelector('.fondoForm');
let nombre = document.getElementById('nombre');
let email = document.getElementById('email');
let comentarios = document.getElementById('comentarios');

contactForm.addEventListener('submit', (e) => {
  e.preventDefault();

  let formData = {
    name: nombre.value,
    email: email.value,
    message: comentarios.value
  }

  let xhr = new XMLHttpRequest();
  xhr.open('POST', '/');
  xhr.setRequestHeader('content-type', 'application/json');
  xhr.onload = function () {
    console.log(xhr.responseText);
    if (xhr.responseText == 'success') {
      alert('Mensaje enviado');
      nombre.value = '';
      email.value = '';
      comentarios.value = '';
    }else{
      alert('Ha ocurrido algo inesperado');
    }

  }

  xhr.send(JSON.stringify(formData));

});