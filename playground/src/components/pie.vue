<template>
   <ksg-line-chart :loading="loading"  ref="chartRef" :data="chartData" :option="option"/>
</template>
<script setup lang="ts">
import { onMounted, ref, Ref } from 'vue';
import {useChart} from '../../../packages/'
 const chartRef = ref<HTMLDivElement | null>(null);
const chartData = ref([]);
const { setOptions } = useChart(chartRef)
const option = ref({
  variant: 'solid' // 实心
})
const loading = ref(false)
onMounted(() => {
  loading.value = true
  setTimeout(() => {
    chartData.value = [
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
    ]
    loading.value = false
// setOptions({
//   title: {
//     text: '自动设置title',
//   },
//   series: [{radius: ['0', '60%']}], // 实心
// })
  }, 2000);
})
</script>