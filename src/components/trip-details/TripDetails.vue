<template>
    <div v-if="distance && duration"
        class="trip-container column">
        <div class="col">Distancia: <strong>{{ distance }} Kms.</strong></div>
        <div class="col">Tiempo Estimado: <strong>{{ duration }} Mins.</strong></div>
    </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import { useMapStore } from '@/composables';

export default defineComponent({
    setup() {
        
        const { distance, duration } = useMapStore();

        return {
            distance,
            duration
        }

    },
});

</script>

<style scoped>

.trip-container {
    background-color: white;
    border-radius: 10px;
    bottom: 40px;
    box-shadow: 0px 10px 10px rgba(0, 0, 0, 0.2);
    font-size: 20px;
    left: 10px;
    padding: 10px;
    position: fixed;
    width: 300px;
}

strong {
    color: #42b983;
}

</style>