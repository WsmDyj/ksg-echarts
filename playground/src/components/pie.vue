<template>
  <ksg-base-chart :option="options" />
</template>
<script setup>
import { onMounted, ref } from 'vue';
import { FunnelChart } from 'echarts/charts';
import { use } from 'echarts/core';
use([FunnelChart]);
import { useComputeDataset } from '../../../packages/base'

const chartData = ref([
  { name: "访问", value: 60, },
  { name: "咨询", value: 40,  },
  { name: "订单", value: 20,  },
  { name: "点击", value: 80, },
  { name: "展现", value: 100,  },
])

const options = ref({
  ...useComputeDataset(chartData.value),
  series: [{
    type: 'funnel',
  }]
})

// onMounted(() => {
//   setTimeout(() => {
//     chartData.value = [
//       { value: 60, name: "访问" },
//       { value: 40, name: "咨询" },
//       { value: 20, name: "订单" },
//       { value: 80, name: "点击" },
//       { value: 100, name: "展现" },
//     ]
//   }, 1000);
// })
</script>