# ksg-Echarts

`ksg-echarts` 是基于 `Vue3.x` 与 `ECharts5.x` 构建封装的组件库，用以解决繁杂的 ECharts 配置项以及数据转化带来的烦恼。`KsgEcharts` 生成一个 ECharts 图表时，用户只需关心 **数据** 与 **配置项**，甚至无需配置项，即可生成一个默认的图表，使用 `ksg-Echarts` 助你快捷、高效地构建图表。

## 示例
可以点击 [codesandbox](https://codesandbox.io/p/devbox/ksg-echarts-q97rrk?file=%2Fsrc%2FApp.vue%3A6%2C28) 进行调试

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