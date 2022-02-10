import axios from "axios";


const directionsApi = axios.create({
    baseURL: 'https://api.mapbox.com/directions/v5/mapbox/driving',
    params: {
        alternatives: false,
        geometries: 'geojson',
        overview: 'simplified',
        steps: false,
        access_token: 'pk.eyJ1IjoiZ2lnaW94eCIsImEiOiJja3plaXg3NDAyZ3hyMnVwcXZscGpwYml2In0.WX8De1C_vIrQRvErolbqwQ'
    }
});

export default directionsApi;