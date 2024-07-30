# 组合图表
在开发过程中，我们往往会经常将多个图表绘制在一起，这就需要采用组合图表的方式。

组合图表并不需要其他特俗的设置，一般通过设置 options 的 series 即可做到，可以参考下面几个案例：


## 案例一
折线图和柱状图结合，案例中我们在 ksg-line-chart 设置了一个柱状图，所以需要先 use([BarChart]) 才能用，series 是一个数组，根据 data 的数据自定生成的，用户可以自定义每一个 series，这样就可以将多个图表整合在一起。如案例中设置了Angular的 type: 'bar' 即可展示柱状图

:::demo

```vue
<template>
  <ksg-line-chart :data="chartData" :option="option" />
</template>
<script setup>
import { onMounted, ref, nextTick } from 'vue';
import { BarChart } from 'echarts/charts';
import { use } from 'echarts/core';
use([BarChart]);
const chartData = ref([
  { week: 'Mon', vue: 3000, react: 2000, Angular: 827 },
  { week: 'Tue', vue: 3500, react: 2000, Angular: 949 },
  { week: 'Wed', vue: 3900, react: 2600, Angular: 1400 },
  { week: 'Thu', vue: 3100, react: 2300, Angular: 1000 },
  { week: 'Fir', vue: 3200, react: 2300, Angular: 884 },
  { week: 'Sat', vue: 3100, react: 2000, Angular: 911 },
  { week: 'Sun', vue: 3600, react: 2600 , Angular: 983 }
])
const option = ref({
  series: [
    {
      itemStyle: { color: 'green' },
    }, 
    {
      showSymbol: false,
      lineStyle: { type: 'dotted' }
    },
    {
      type: 'bar'
    }
  ]
})
</script>
```