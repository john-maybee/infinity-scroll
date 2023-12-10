
// Unsplash API
const count = 10;
const apiKey = '0Yq9W6hjCRUj44CzG69RIKpxJ60IuuzqxSBGhaLi36o';
const apiURL = `https://api.unsplash.com/photos/random/?client_id=${apiKey}&count=${count}`;

// Get photos from Unsplash API
async function getPhotos() {
    try {
        const response = await fetch(apiURL);
        const data = await response.json();
        console.log(data);
    } catch (error) {
        // Catch error here
    }
}

// On load
getPhotos();