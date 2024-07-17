<template>
   <ksg-pie-chart  ref="chartRef" :data="chartData"/>
</template>
<script setup lang="ts">
import { onMounted, ref, Ref } from 'vue';
import {usePieChart} from '../../../packages/pie'
 const chartRef = ref<HTMLDivElement | null>(null);
const chartData = ref();
const { setOptions } = usePieChart(chartRef)
onMounted(() => {
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
 setOptions({
  title: {
    text: '手动设置title',
  },
    variant: 'solid', // 实心
  })
  }, 1000);
})
</script>