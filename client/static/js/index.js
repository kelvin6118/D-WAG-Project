const form = document.querySelector('.registration-form');

form.addEventListener('submit', register);

async function register(e) {
  e.preventDefault();
  let input = JSON.stringify(Object.fromEntries(new FormData(e.target)));
  console.log(input);

}
