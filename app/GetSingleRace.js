async function getSingleRace(tmp_key, tmp_secret, race_id) {
    const url = 'https://test3.runsignup.com/rest/race/:race_id';
    const params = new URLSearchParams({
        tmp_key: tmp_key,
        tmp_secret: tmp_secret,
        race_id: race_id,
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
        return responseData;
    } catch (error) {
        console.error('Error:', error);
    }
}

export default getSingleRace;
