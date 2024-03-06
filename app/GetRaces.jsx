async function getRaces(tmp_key, tmp_secret) {
    const url = 'https://test3.runsignup.com/rest/races';
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
        return responseData.races;
    } catch (error) {
        console.error('Error:', error);
    }
}

export default getRaces;

