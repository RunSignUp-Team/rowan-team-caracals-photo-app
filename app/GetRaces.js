async function getRaces(access_token) {
    const url = 'https://test3.runsignup.com/rest/races';
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
        return responseData.races;
    } catch (error) {
        console.error('Error:', error);
    }
}

export default getRaces;

