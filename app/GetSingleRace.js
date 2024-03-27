async function getSingleRace(access_token, race_id) {
    const url = 'https://test3.runsignup.com/rest/race/:race_id';
    const params = new URLSearchParams({
        race_id: race_id,
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
        return responseData;
    } catch (error) {
        console.error('Error:', error);
    }
}

export default getSingleRace;
