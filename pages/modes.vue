<template>

    <ComponentHeader></ComponentHeader>


    <div class="all_modes">

        <div class="modes_all">
            <ComponentModesCard></ComponentModesCard>

        </div>

    </div>

</template>

<script setup>

useHead({
    title: 'VALORANT - Modos'
});


</script>

<style>

.all_modes {
    width: 100%;
    height: auto;
    display: flex;
    justify-content: center;
    align-content: center;
    flex-direction: column;
    background-color: #212121;
}

.modes_all {
    width: 100%;
    height: auto;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-wrap: wrap;
}

</style>