const form = document.getElementById('myForm');
const response = document.getElementById('response');

form.addEventListener('submit', function(event) {
  event.preventDefault();

  const name = document.getElementById('name').value;
  const email = document.getElementById('email').value;
  const message = document.getElementById('message').value;

  if (name && email && message) {
    response.textContent = 'Enviado Correctamente!';
    response.style.color = 'green';
  } else {
    response.textContent = 'Por favor rellene todos los campos';
    response.style.color = 'red';
  }
});