<template>

  <ComponentHeader></ComponentHeader>

  <div class="all_mapas">

    <div class="mapas_all">
      <ComponentMapas></ComponentMapas>

    </div>

  </div>


</template>

<script setup>

useHead({
  title: 'VALORANT - Início'
});

</script>

<style>
.all_mapas {
  width: 100%;
  height: auto;
  padding-top: 50px;
  padding-bottom: 50px;
  display: flex;
  justify-content: center;
  align-content: center;
  flex-direction: column;
  background-color: #212121;
}

.mapas_all {
  width: 100%;
  height: auto;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
}
</style>