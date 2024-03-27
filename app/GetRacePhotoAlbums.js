import { get } from "react-native/Libraries/TurboModule/TurboModuleRegistry";

async function getRacePhotoAlbums(access_token, race_id, race_event_days_id) {
    const url = 'https://test3.runsignup.com/rest/v2/photos/get-race-photo-albums.json';
    const params = new URLSearchParams({
        race_id: race_id,
        race_event_days_id: race_event_days_id,
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

export default getRacePhotoAlbums;