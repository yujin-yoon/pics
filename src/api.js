import axios from 'axios';

const searchImages = async (term) => {
    const response = await axios.get('https://api.unsplash.com/search/photos', { //async/await to wait for the request to finish before moving on
    headers: {
        Authorization: 'Client-ID zw7xnsElv_uI9M7Svlwv_GQwoV-lHkQQPuyGqIvuTbE'
    },
    params: {
        query: term,
    },
    });

    console.log(response.data.results);
    return response;
};

export default searchImages;