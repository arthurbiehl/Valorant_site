<template>

    <ComponentHeader></ComponentHeader>

    <div class="weapons">
        <div class="escrita_weapons">
            <h1>Armas</h1>
            <div class="linha"></div>
        </div>
        <div class="container_weapons">
            <ComponentArmasCard></ComponentArmasCard>
        </div>
    </div>


</template>

<script setup>

useHead({
    title: 'VALORANT - Armas'
});

</script>

<style>
.weapons {
    width: 100%;
    height: auto;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    background-color: #212121;

}

.escrita_weapons {
    width: 80%;
    height: auto;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: left;
    color: white;
    font-weight: 500;
    font-size: 20px
}

.container_weapons {
    width: 80%;
    height: auto;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-wrap: wrap;
}
</style>