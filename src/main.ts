import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

import mapboxgl from 'mapbox-gl';
mapboxgl.accessToken = 'pk.eyJ1IjoiZ2lnaW94eCIsImEiOiJja3plaXg3NDAyZ3hyMnVwcXZscGpwYml2In0.WX8De1C_vIrQRvErolbqwQ';

if ( !navigator.geolocation ) {
    alert('Tu navegador no soporta el GeoLocation')
    throw new Error('Tu navegador no soporta el GeoLocation')
}

createApp(App)
        .use(store)
        .use(router)
        .mount('#app')
