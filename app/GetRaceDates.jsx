async function getRaceDates(tmp_key, tmp_secret, race_id) {
    const url = 'https://test3.runsignup.com/rest/race?';
    const params = new URLSearchParams({
        tmp_key: tmp_key,
        tmp_secret: tmp_secret,
        race_id: race_id,
        race_event_days_id: race_event_days_id,
        last_date: last_date,
        next_date: next_date,
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

export default getRaceDates;
