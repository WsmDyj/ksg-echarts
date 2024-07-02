<template>
  <ksg-bar-chart :data="chartData" :option="option"/>
</template>
<script setup>
import { ref } from 'vue';
const chartData = ref([
  { channel: 'APP', pv: 256, uv: 287 },
  { channel: 'PC', pv: 767, uv: 707 },
  { channel: 'M端', pv: 1356, uv: 1756},
  { channel: '微信', pv: 2087, uv: 1822 },
  { channel: '手Q', pv: 803, uv: 987 },
  { channel: '小程序', pv: 582, uv: 432 },
]);
const option = ref({
  direction: 'row',
})
</script>