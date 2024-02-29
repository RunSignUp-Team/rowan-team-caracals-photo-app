async function logout(tmp_key, tmp_secret) {
    const url = 'https://test3.runsignup.com/rest/logout';
    const params = new URLSearchParams({
        format: 'json',
        tmp_key: tmp_key,
        tmp_secret: tmp_secret
    });

    const formData = new FormData();
    formData.append('tmp_key', tmp_key);
    formData.append('tmp_secret', tmp_secret);

    try {
        const response = await fetch(`${url}?${params.toString()}`, {
            method: 'POST',
            body: formData,
        });

        if (!response.ok) {
            throw new Error(`HTTP error! Status: ${response.status}`);
        }

        const responseText = await response.json();

        if (responseText.error) {
            throw new Error(responseText.error.error_msg);
        }

        console.log('Request successful. JSON:');
        console.log(responseText);

        return responseText;
    } catch (error) {
        throw new Error('Logout failed');
    }
}

export default logout;
