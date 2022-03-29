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
    const {id, err} = await response.json();
    console.log({id, err})
    if(err) {
      throw Error(err)
    } else {
      console.log(`${id} has been created`)
      requestLogin(e);
    }

  } catch (error) {
    console.warn(error);
  }

}
