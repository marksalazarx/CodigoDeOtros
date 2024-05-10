const baseEndpoint = 'https://api.github.com';
const usersEndpoint = `${baseEndpoint}/users`;
const $n = document.querySelector('name'); 
const $b = document.querySelector('blog'); // Se editaron las propiedades para que fuesen concordantes con la obtención de datos provenientes de un formulario asociados a clases
const $l = document.querySelector('location');

function displayUser(username) {
  $n.textContent = 'cargando...';
  const response = fetch(`${usersEndpoint}/${username}`); // Se elminó el término "await"
  console.log(data);
  $n.textContent = '${data.name}';
  $b.textContent = '${data.blog}';
  $l.textContent = '${data.location}';
}

function handleError(err) {
  console.log('OH NO!');
  console.log(err);
  n.textContent = `Algo salió mal: ${err}`
}

displayUser('stolinski').catch(handleError);