<template>
  <ksg-line-chart :loading-options="loadingOptions" loading :data="chartData" />
</template>
<script setup>
import { reactive, ref } from 'vue';
const chartData = ref([
  { week: 'Mon', pv: 30, },
  { week: 'Tue', pv: 40 },
  { week: 'Wed', pv: 35 },
  { week: 'Thu', pv: 50 },
  { week: 'Fir', pv: 49 },
  { week: 'Sat', pv: 70 },
  { week: 'Sun', pv: 90 }
]);
const loadingOptions = reactive({
  color: '#c23531',
})

</script>