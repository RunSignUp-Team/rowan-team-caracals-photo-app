// const url = 'https://test3.runsignup.com/rest/user/registered-races';
// const params = new URLSearchParams({
//   tmp_key: 'pFsK7ievvnBg3MzXDWOs4z0jjt9AQ4dF',
//   tmp_secret: '3hTDopLM8PiteYCFWXKe3BmuYSPRdeS7',
//   format: 'xml'
// });

// fetch(`${url}?${params}`, {
//   method: 'GET'
// })
// .then(response => {
//   if (!response.ok) {
//     throw new Error(`HTTP error! Status: ${response.status}`);
//   }
//   return response.text();
// })
// .then(responseText => {
//   console.log('Request successful. XML for Races Registered:');
//   console.log(responseText);
// })
// .catch(error => {
//   console.error('Error:', error);
// });
