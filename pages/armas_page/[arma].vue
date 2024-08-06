<template>
    <ComponentHeader></ComponentHeader>
    <div class="all_armas">
        <div class="container_armas">
            <div class="escrita">
                <h2>{{ arma.displayName }}</h2>
                <img :src="arma.displayIcon" alt="">

            </div>

            <div class="skins">
                <img v-for=" skin in arma.skins" :key="skin" :src="skin.displayIcon" alt="">

            </div>

        </div>
    </div>



</template>

<script setup>

let route = useRoute();
const weapon = route.params.arma;

const store = useTest();
const { arma } = storeToRefs(store);

onMounted(() => {
    store.getArma(weapon);
})


</script>

<style>
.all_armas {
    width: 100%;
    height: auto;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    background-color: #212121;

}

.container_armas {
    width: 80%;
    height: auto;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
}

.escrita {
    width: 100%;
    height: 500px;
    display: flex;
    align-items: center;
    justify-content: space-around;

}

.escrita h2 {
    font-size: 30px;
    color: #df0930;
    font-weight: 700;
}

.escrita img {
    width: 450px;
    height: 200px;
}

.armas {
    display: flex;
    justify-content: center;
    align-items: center;
}

.armas img {
    width: 40px
}

.skins {
    width: 100%;
    height: auto;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-wrap: wrap;
    background-color: #212121;

}

.skins img {
    width: 350px;
    height: 100px;
    margin: 20px;
    background-color: rgba(41, 41, 41, 0.253);

}
</style>