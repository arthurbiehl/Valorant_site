<template>
        <div class="arma" v-for="item in armas" :key="item">

            <img :src="item.displayIcon" alt="">
            <div class="escrita_arma">
                <a :href="`/armas_page/${item.uuid}`">{{ item.displayName }}</a>
                <p>{{ item.fireRate }}</p>
            </div>
            

        </div>

</template>

<script setup>


const store = useTest();
const { armas } = storeToRefs(store);

onMounted(() => {
    store.getArmas();
});

</script>

<style>

.arma {
    width: 430px;
    height: auto;
    margin: 20px;
    background-color: rgba(41, 41, 41, 0.253);
    display: flex;
    justify-content: space-between;
    align-items: center;
    flex-direction: column;
    margin: 5px;
    background-size: cover;
}

.arma img {
    width: 400px;
    height: 100%;
    margin: 10px
}

.escrita_arma {
    width: 100%;
    height: 60px;
    display: flex;
    justify-content: left;
    align-items: center;
    background-color: #F20530;
}

.escrita_arma a {
    margin-left: 50px;
    color: white;
    font-weight: 500;
    font-size: 20px;
}


</style>