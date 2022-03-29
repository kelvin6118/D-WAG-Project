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
    console.log(options.body)
    const data = await response.json();
    console.log(data)
    if(err) {
      throw Error(err)
    } else {
      console.log(`${data.id} has been created`)
      requestLogin(e);
    }

  } catch (error) {
    console.warn(error);
  }

}
