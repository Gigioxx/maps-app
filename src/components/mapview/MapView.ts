import { defineComponent, onMounted, ref, watch } from 'vue'
import Mapboxgl from 'mapbox-gl';

import { usePlacesStore, useMapStore } from '@/composables';

export default defineComponent({
    name: 'MapView',
    setup() {

        const mapElement = ref<HTMLDivElement>();
        const { userLocation, isUserLocationReady } = usePlacesStore();
        const { setMap } = useMapStore();

        const initMap = async() => {
            if ( !mapElement.value ) throw new Error('Div element does not exist');
            if ( !userLocation.value ) throw new Error('user location does not exist');

            await Promise.resolve();
            
            const map = new Mapboxgl.Map({
                container: mapElement.value, // container ID
                style: 'mapbox://styles/mapbox/light-v10', // style URL
                center: userLocation.value,
                zoom: 15 // starting zoom
            });

            const myLocationPopup = new Mapboxgl.Popup()
                .setLngLat( userLocation.value )
                .setHTML(`
                    <h4>Aquí estoy</h4>
                    <p>Actualmente en La Florida</p>
                `);

            const myLocationMarker = new Mapboxgl.Marker()
                .setLngLat( userLocation.value )
                .setPopup( myLocationPopup )
                .addTo( map );

            //Todo establecer el mapa en vuex
            setMap( map );

        }

        onMounted(() => {
           if ( isUserLocationReady.value )
            return initMap();
        });

        watch( isUserLocationReady, ( newVal ) => {
            if ( userLocation.value ) initMap();
        })

        return {
            isUserLocationReady,
            mapElement

        }
    }
});