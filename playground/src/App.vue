<script setup lang="ts">
import { provide } from 'vue'
import Pie from './components/pie.vue'
import { PALETTE_KEY } from '../../packages'
const palette = ['#FF6B3B', '#626681', ]
provide(PALETTE_KEY, palette)
</script>

<template>
  <div class="ksg-charts">
    <Pie />
  </div>
</template>

<style scoped>
.ksg-charts {
  width: 500px;
  height: 500px;
}
.logo {
  height: 6em;
  padding: 1.5em;
  will-change: filter;
  transition: filter 300ms;
}
.logo:hover {
  filter: drop-shadow(0 0 2em #646cffaa);
}
.logo.vue:hover {
  filter: drop-shadow(0 0 2em #42b883aa);
}
</style>
