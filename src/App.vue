<script setup>
import Region from "./components/Region.vue";
import Weather from "./components/Weather.vue";
</script>

<template>
  <div
    class="container h-[90%] m-auto app grid sm:grid-cols-2 md:grid-cols-3 w-full gap-4"
  >
    <Weather class="w-full border-2 md:col-span-2 min-h-screen" />
    <Region class="w-full border-2 min-h-screen" />
  </div>
</template>

<style scoped>
/* .app {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(25rem, 1fr));
} */
</style>
