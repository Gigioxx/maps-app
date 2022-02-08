import { defineComponent, onMounted, ref, watch } from 'vue'
import { usePlacesStore } from '@/composables/usePlacesStore';
import Mapboxgl from 'mapbox-gl';

export default defineComponent({
    name: 'MapView',
    setup() {

        const mapElement = ref<HTMLDivElement>();

        const { userLocation, isUserLocationReady } = usePlacesStore();

        const initMap = async() => {
            if ( !mapElement.value ) throw new Error('Div element does not exist');
            if ( !userLocation.value ) throw new Error('user location does not exist');

            await Promise.resolve();
            
            const map = new Mapboxgl.Map({
                container: mapElement.value, // container ID
                style: 'mapbox://styles/mapbox/streets-v11', // style URL
                center: userLocation.value,
                zoom: 15 // starting zoom
            });
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