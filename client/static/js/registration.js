async function register(e) {
  e.preventDefault();
  try {
    const options = {
      method: 'POST',
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(Object.fromEntries(new FormData(e.target)))
    }
    // console.log(options.body)
    const response = await fetch('http://localhost:3000/users', options);
    const data = await response.json();
    if(data.err) {
      throw Error(data.err)
    } else {
      console.log(`${data.id} has been created`)
      location.hash = '#login'
    }

  } catch (error) {
    console.warn(error);
  }

}

module.exports = { register }
