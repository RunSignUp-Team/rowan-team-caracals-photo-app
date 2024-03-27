async function getRegRaces(access_token) {
    const url = 'https://test3.runsignup.com/rest/user/registered-races';
    const params = new URLSearchParams({
        format: 'json'
    });

    const headers = {
        'Authorization': `Bearer ${access_token}`,
    }


    try {
        const response = await fetch(`${url}?${params}`, {
            method: 'GET',
            headers: headers,
        });

        if (!response.ok) {
            throw new Error(`HTTP error! Status: ${response.status}`);
        }

        const responseData = await response.json();

        // console.log('Request successful. JSON for Races Registered:');
        // console.log(responseData);

        return responseData; // Return the response data
    } catch (error) {
        console.error('Error:', error);
        throw error; // Rethrow the error for handling at the higher level
    }
}

export default getRegRaces;
