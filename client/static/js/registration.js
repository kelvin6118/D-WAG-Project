url = "http://localhost:3000"

async function register(e) {
  e.preventDefault();
  try {
    const options = {
      method: 'POST',
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(Object.fromEntries(new FormData(e.target)))
    }
    // console.log(options.body)
    const response = await fetch(`${url}/users`, options);
    console.log(options.body)
    const data = await response.json();
    console.log(data)
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

