async function logout(accessToken) {
        const revocationEndpoint = 'https://test3.runsignup.com/Rest/v2/auth/auth-code-redemption.json'; // Replace with the actual revocation endpoint
      
        const params = new URLSearchParams();
        params.append('token', accessToken);
        params.append('token_type_hint', 'access_token');
      
        try {
          const response = await fetch(revocationEndpoint, {
            method: 'POST',
            headers: {
              'Content-Type': 'application/x-www-form-urlencoded',
              // Add any necessary authentication headers
            },
            body: params,
          });
      
          if (response.ok) {
            console.log('Access token revoked successfully');
            return true;
          } else {
            console.error('Failed to revoke access token');
          }
        } catch (error) {
          console.error('Error revoking access token:', error);
        }
      };
    
export default logout;
