async function getRegRaces(tmp_key, tmp_secret) {
    const url = 'https://test3.runsignup.com/rest/user/registered-races';
    const params = new URLSearchParams({
        tmp_key: tmp_key,
        tmp_secret: tmp_secret,
        format: 'json'
    });

    try {
        const response = await fetch(`${url}?${params}`, {
            method: 'GET'
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
