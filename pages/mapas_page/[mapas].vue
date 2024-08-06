<template>
    <ComponentHeader></ComponentHeader>
    <div class="all_mapa">
        <div class="container_mapa">
            <img :src="map.stylizedBackgroundImage" alt="">

            <div class="escrita_mapa">
                <div class="fala_mapa">
                    <h2>{{ map.displayName }}</h2>
                    <p>{{ map.tacticalDescription }}</p>
                    <p>COORDENADAS: {{ map.coordinates }}</p>
                </div>

                <img :src="map.displayIcon" alt="">
            </div>
        </div>
    </div>



</template>

<script setup>

let route = useRoute();
const uuid = route.params.mapas;

const store = useTest();
const { map } = storeToRefs(store);

onMounted(() => {
    store.getMap(uuid);
})


</script>

<style>

.all_mapa {
    width: 100%;
    height: auto;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    background-size: cover;
    background-color: #212121;
}

.all_mapa img {
    width: 100%;
}

.container_mapa{
    width: 80%;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    background-size: cover;
}

.container_mapa img {
    max-width: 100%;
    height: 300px;
}


.escrita_mapa {
    width: 100%;
    height: 500px;
    display: flex;
    justify-content: space-around;
    align-items: center;
}

.escrita_mapa img {
    width: 400px;
    height: 350px;
}

.escrita_mapa h2 {
    color: #F20530;
    font-size: 40px;
}
.escrita_mapa p {
    color: white;
}


</style>
