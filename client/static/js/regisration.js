const form = document.querySelector('.registration-form');

form.addEventListener('submit', register);

async function register(e) {
  e.preventDefault();
  try {
    const options = {
        method: 'POST',
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(Object.fromEntries(new FormData(e.target)))
    }
   const response = await fetch('http://localhost:3000/register', options);

  } catch (error) {
    console.warn(error);
  }

}
