<template>
    <ComponentHeader></ComponentHeader>
    <div class="all_agente">
        <div class="container_agente">
            <div class="escrita1">
                <div class="fala">
                    <h2>{{ agent.displayName }}</h2>
                    <p>{{ agent.description }}</p>
                </div>
                <img :src="agent.bustPortrait" alt="">

            </div>
            <div class="escrita2">
            </div>
        </div>
    </div>



</template>

<script setup>

let route = useRoute();
const agente = route.params.agente;

const store = useTest();
const { agent } = storeToRefs(store);

onMounted(() => {
    store.getAgent(agente);
})


</script>

<style>
.all_agente {
    width: 100%;
    height: auto;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    background-color: #212121;
}

.container_agente {
    width: 80%;
    height: auto;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
}

.escrita1 {
    width: 100%;
    height: auto;
    display: flex;
    align-items: center;
    justify-content: center;

}

.escrita1 h2 {
    font-size: 30px;
    color: #df0930;
    font-weight: 700;
}

.escrita1 p {
    color: white;
    width: 500px;
    bottom: 10px;
}

.escrita1 img {
    width: 700px;
    height: 700px
}

.agente {
    display: flex;
    justify-content: center;
    align-items: center;
}

.agente img {
    width: 40px
}
</style>