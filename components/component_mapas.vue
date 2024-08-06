<template>

    <div class="mapas" v-for="item in mapas.data" :key="item">

        <img :src="item.displayIcon" alt="">
        <div class="escrita_mapas">
            <a :href="`/mapas_page/${item.uuid}`">{{ item.displayName }}</a>

        </div>

    </div>

</template>

<script setup>


const store = useTest();
const { mapas } = storeToRefs(store);

onMounted(() => {
    store.getMapas();
});

</script>

<style>
.mapas {
    width: 450px;
    height: auto;
    background-color: rgba(41, 41, 41, 0.253);
    display: flex;
    justify-content: space-between;
    align-items: center;
    flex-direction: column;
    margin: 5px;
    background-size: cover;
}

.mapas img {
    width: 400px;
    height: 100%;
    margin: 10px
}

.escrita_mapas {
    width: 100%;
    height: 60px;
    display: flex;
    justify-content: left;
    align-items: center;
    background-color: #F20530;
}

.escrita_mapas a {
    margin-left: 50px;
    color: white;
    font-weight: 500;
    font-size: 20px
}
</style>