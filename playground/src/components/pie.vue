<template>
   <ksg-pie-chart :palette="palette"  :data="chartData" />
</template>
<script setup lang="ts">
import { ref } from 'vue';
const chartData = ref([
  { Repo: 'Vue.js', star: 40000, },
  { Repo: 'React', star: 27800 },
  { Repo: 'Create RA', star: 22500 },
  { Repo: 'Puppteer', star: 22000 },
  { Repo: 'Axios', star: 21900 },
  { Repo: 'Prettier', star: 14800 },
  { Repo: 'VS Code', star: 20200 },
  { Repo: 'RN', star: 17700 },
  { Repo: 'Element', star: 15600 },
  { Repo: 'Electron', star: 14900 },
]);
</script>