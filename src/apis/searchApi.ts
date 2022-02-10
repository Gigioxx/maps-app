import axios from "axios";


const searchApi = axios.create({
    baseURL: 'https://api.mapbox.com/geocoding/v5/mapbox.places',
    params: {
        limit: 5,
        language: 'es',
        access_token: 'pk.eyJ1IjoiZ2lnaW94eCIsImEiOiJja3plaXg3NDAyZ3hyMnVwcXZscGpwYml2In0.WX8De1C_vIrQRvErolbqwQ'
    }
});

export default searchApi;