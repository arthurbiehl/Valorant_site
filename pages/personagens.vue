<template>

    <ComponentHeader></ComponentHeader>

    <div class="all">
        <div class="escrita_personagens">
            <h1>AGENTES</h1>
            <div class="linha"></div>

        </div>

        <div class="personagem">
            <div class="persom">
                <ComponentPersonagensCard></ComponentPersonagensCard>

            </div>
        </div>

    </div>

</template>

<script setup>

useHead({
  title: 'VALORANT - Agents'
});

</script>


<style>

.all {
    width: 100%;
    height: auto;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    background-color: #212121;
    
}

.linha  {
    width: 150px;
    height: 2px;

    background-color: #F20530;
}

.escrita_personagens {
    width: 80%;
    height: 150px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: left;
    color: white;
    font-weight: 500;
    font-size: 20px

}

.escrita_personagens h1 {
    margin: 0px;
}
.personagem {
    width: 90%;
    height: auto;
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    align-items: center;

}

.persom {
    display: flex;
    justify-content: center;
    align-items: center;
}
</style>