# 属性配置

## 图表loading
通过配置 **loading** 字段，展示图表加载状态，常用于远程获取数据。

并且可以配置 **loading-options** 来设置加载动画的配置项。请参阅echartsInstance.showLoading此处的opts参数 [->](https://echarts.apache.org/en/api.html#echartsInstance.showLoading)


:::demo

```vue
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
```
:::

## 数据项为空

:::demo

```vue
<template>
  <ksg-line-chart :data="chartData">
  </ksg-line-chart>
</template>
<script setup>
import { reactive, ref } from 'vue';
const chartData = ref([]);
</script>
```
:::