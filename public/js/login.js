
const loginFormHandler = async (event) => {
    // Stop the browser from submitting the form so we can do so with JavaScript
    event.preventDefault();
  
    // Gather the data from the form elements on the page
    const email = document.querySelector('#email-login').value.trim();
    const password = document.querySelector('#password-login').value.trim();
    const {OAuth2Client} = require('google-auth-library');
 
    const client = new OAuth2Client(CLIENT_ID);

    if (email && password) {
      // Send the e-mail and password to the server
      const response = await fetch('/api/users/login', {
        method: 'POST',
        body: JSON.stringify({ email, password }),
        headers: { 'Content-Type': 'application/json' },
      });
  
      if (response.ok) {
        document.location.replace('/');
      } 
      
      if (client) {
        async function verify() {
          const ticket = await client.verifyIdToken({
              idToken: token,
              audience: CLIENT_ID,  // Specify the CLIENT_ID of the app that accesses the backend
              // Or, if multiple clients access the backend:
              //[CLIENT_ID_1, CLIENT_ID_2, CLIENT_ID_3]
          });
          const payload = ticket.getPayload();
          const userid = payload['sub'];
          // If request specified a G Suite domain:
          // const domain = payload['hd'];
        }
        verify().catch(console.error);
      }else {
        alert('Failed to log in');
      }
    }
  };

 
  
  document
    .querySelector('.login-form')
    .addEventListener('submit', loginFormHandler);
   
    
  