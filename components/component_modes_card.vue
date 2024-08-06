<template>
  <div class="modos" v-for="item in modes.data" :key="item"@mouseover="item.showText = true" @mouseleave="item.showText = false">
    <div class="modos_escrita" v-if="item.showText">
      <h2>{{ item.displayName }}</h2>
      <p>{{ item.description }}</p>
      <p class="duracao">DURACION: {{ item.duration }}</p>
    </div>
    
    <img :src="item.listViewIconTall" alt="">
  </div>
</template>

<script setup>

const store = useTest()
const { modes } = storeToRefs(store)

onMounted(() => {
  store.getModes()
})
</script>

<style>
.modos {
  position: relative;
  display: inline-block;
  overflow: hidden; 
  margin: 10px

}

.modos_escrita {
  position: absolute;
  bottom: -100%;
  left: 0;
  background: #F20530;;
  color: white;
  width: 100%;
  padding: 10px;
}

.modos_escrita h2 {
  color: white;
  font-size: 30px;
}

.duracao {
  color: black;
  font-size: 17px;
  font-weight: 600;
}

.modos img {
  display: block;
  width: 350px;
}

.modos:hover .modos_escrita {
  bottom: 0;
}

</style>