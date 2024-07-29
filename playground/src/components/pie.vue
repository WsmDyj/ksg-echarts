<template>
  <ksg-line-chart ref="chartRef" />
</template>
<script setup>
import { onMounted, ref, nextTick } from 'vue';
import { useKsgChart } from '../../../packages'
const chartRef = ref()
const { setChartData, setOptions } = useKsgChart(chartRef, {
  title: {
    text: '初始化title',
  }
})

onMounted(async () => {
  setChartData([
    { week: 'Mon', pv: 31, },
    { week: 'Tue', pv: 40 },
    { week: 'Wed', pv: 35 },
    { week: 'Thu', pv: 50 },
    { week: 'Fir', pv: 49 },
    { week: 'Sat', pv: 70 },
    { week: 'Sun', pv: 90 }
  ]);
  nextTick(() => {
    setOptions({
    title: {
      text: '手动设置title1',
    }
  })
  })
})
</script>