<template>

  <ComponentHeader></ComponentHeader>
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="500 0 900 320">
        <path fill="#212121" fill-opacity="1" d="M0,128L1440,288L1440,0L0,0Z"></path>
    </svg>

  <ComponentAbout></ComponentAbout>

</template>

<script setup>

  useHead({
    title: 'VALORANT - Início'
  });

</script>

<style>

  main {
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
  }

  svg {
    position: absolute;
    z-index: 0;
}

</style>