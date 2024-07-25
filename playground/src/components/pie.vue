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
  // series: {
  //   smooth: true
  // }
})
const loading = ref(false)
onMounted(() => {
  loading.value = true
  setTimeout(() => {
    chartData.value = [
      { week: 'Mon', vue: 3000, react: 2000, Angular: 827 },
  { week: 'Tue', vue: 3500, react: 2000, Angular: 949 },
  { week: 'Wed', vue: 3900, react: 2600, Angular: 1400 },
  { week: 'Thu', vue: 3100, react: 2300, Angular: 1000 },
  { week: 'Fir', vue: 3200, react: 2300, Angular: 884 },
  { week: 'Sat', vue: 3100, react: 2000, Angular: 911 },
  { week: 'Sun', vue: 3600, react: 2600 , Angular: 983 }
    ]
    loading.value = false
setOptions({
  title: {
    text: '自动设置title',
  },
  series: {
    smooth: true
  }
})
  }, 2000);
})
</script>