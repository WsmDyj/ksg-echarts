## 柱状图

:::demo

```vue
<template>
  <ksg-bar-chart :data="chartData" />
</template>
<script setup>
import { ref } from 'vue';
const chartData = ref([
  { week: 'Mon', pv: 256, },
  { week: 'Tue', pv: 767 },
  { week: 'Wed', pv: 1356 },
  { week: 'Thu', pv: 2087 },
  { week: 'Fir', pv: 803 },
  { week: 'Sat', pv: 582 },
  { week: 'Sun', pv: 432 }
]);
</script>
```
:::

## 分组柱状图
多个度量构成分组柱状图，用于展示各个分类下的不同分组

:::demo

```vue
<template>
  <ksg-bar-chart :data="chartData" />
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
</script>
```
:::


## 堆叠柱状图
配置需要堆叠的度量，下例为将不同分组下的 PV、UV 堆叠
:::demo

```vue
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
  }
})
</script>
```
:::

## 百分比柱状图
堆叠柱状图基础上配置 percentage 为 true 开启百分比模式，指定 Y 轴标签格式化为百分比
:::demo

```vue
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
  series: {
    // 开启百分比模式
  percentage: true,
  // 设置Y轴数字标签格式
  yAxisLabelType: ['percentage'],
  tooltipFormatter: function(params) {
    let [tar] = params
    const tooltipContent = params
      .map(v => {
        return `${v.seriesName}：${(
          v.value[v.seriesIndex + 1] * 100
        ).toFixed(2)} %`
      })
      .join('<br/>')
    return tar.name + '<br/>' + tooltipContent
  }
  },
  
})
</script>
```
:::