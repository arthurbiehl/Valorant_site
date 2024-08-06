<template>

    <div class="personagem">
    
        <div class="container_personagem" v-for=" item in persona.data" :key="item" :style=" `background: url(${ item.background});  background-position: center; background-size: cover; background-repeat: no-repeat;` ">
            <img :src="item.bustPortrait" alt="">
            <a :href="`/agente_page/${item.uuid}`">{{ item.displayName }}</a>
        </div>


    </div>

</template>


<script setup>

const store = useTest();
const { persona } = storeToRefs(store);

onMounted(() => {
    store.getPersona();
});


</script>


<style>

.container_personagem {
    width: 300px;
    height: 600px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    flex-direction: column;
    z-index: 1;
    margin: 7px;
    background-size: cover;
    background-repeat: no-repeat;
    background-position: center;

}

.container_personagem a {
    width: 100%;
    height: 50px;
    display: flex;
    justify-content: center;
    align-items: center;
    color: white;
    font-size: 18px;
    background-color: #F20530;

}

.container_personagem img {
    width: 550px;
    height: 550px;
    transition: 0.5s;

}

.container_personagem img:hover {
    width: 550px;
    height: 600px;
}

</style>