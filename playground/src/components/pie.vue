<template>
  <ksg-bar-chart :data="chartData" :option="option"/>
</template>
<script setup>
import { ref } from 'vue';
const chartData = ref([
  { week: 'Mon', pv: 256, uv: 287 },
  { week: 'Tue', pv: 767, uv: 707 },
  { week: 'Wed', pv: 1356, uv: 1756},
  { week: 'Thu', pv: 2087, uv: 1822 },
  { week: 'Fir', pv: 803, uv: 987 },
  { week: 'Sat', pv: 582, uv: 432 },
  { week: 'Sun', pv: 432, uv: 322 }
]);
const option = ref({
  stack: {
    sum: [ 'PV', 'UV' ]
  },
  yAxis: {  
    max : 100,// 设置最大值是多少
    splitNumber: 5,// 设置分几段显示
    axisLabel: {  
      formatter: '{value} %'  // 给每个数值添加%
    },
  }  
  ,
  // 开启百分比模式
  percentage: true,
  series: {
    tooltip: {
      formatter: function(params) {
        const {dimensionNames, value } = params
        const name = value[dimensionNames.slice(0, 1)]
        const tooltipContent = dimensionNames.slice(1, dimensionNames.length)?.filter(it => it)?.map(v => {
          return `${v}：${value[v]} %`
        }).join('<br/>')
        return name + '<br/>' + tooltipContent
      }
    }
  }
})
</script>