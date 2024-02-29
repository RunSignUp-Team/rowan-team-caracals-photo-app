async function login(username, password) {
  const url = 'https://test3.runsignup.com/Rest/login';
  const params = new URLSearchParams({
    format: 'json',
    supports_nb: 'F'
  });
  const formData = new FormData();
  formData.append('email', username);
  formData.append('password', password);

  try {
    const response = await fetch(`${url}?${params}`, {
      method: 'POST',
      body: formData,
    });

    if (!response.ok) {
      throw new Error(`HTTP error! Status: ${response.status}`);
    }
    const responseText = await response.json();

    if(responseText.error) {
      throw new Error(responseText.error.error_msg); 
    }
    // console.log('Request successful. JSON:');
    // console.log(responseText.user.user.first_name);

    return responseText.user.user.first_name;
  } catch (error) {
   // console.error('Come on.', error);
    throw new Error('Login failed');
  }
}

export default login;
