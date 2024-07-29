## 折线图

:::demo

```vue
<template>
  <ksg-line-chart :data="chartData" />
</template>
<script setup>
import { ref } from 'vue';
const chartData = ref([
  { week: 'Mon', pv: 30, },
  { week: 'Tue', pv: 40 },
  { week: 'Wed', pv: 35 },
  { week: 'Thu', pv: 50 },
  { week: 'Fir', pv: 49 },
  { week: 'Sat', pv: 70 },
  { week: 'Sun', pv: 90 }
]);
</script>
```
:::

## 折线图平滑

:::demo

```vue
<template>
  <ksg-line-chart :data="chartData" :option="option" />
</template>
<script setup>
import { ref } from 'vue';
const chartData = ref([
  { week: 'Mon', pv: 30, },
  { week: 'Tue', pv: 40 },
  { week: 'Wed', pv: 35 },
  { week: 'Thu', pv: 50 },
  { week: 'Fir', pv: 49 },
  { week: 'Sat', pv: 70 },
  { week: 'Sun', pv: 90 }
]);
const option = ref({
  series: {
    smooth: true
  }
})
</script>
```
:::


## 区域折线图

:::demo

```vue
<template>
  <ksg-line-chart :data="chartData" :option="option" />
</template>
<script setup>
import { ref } from 'vue';
const chartData = ref([
  { week: 'Mon', vue: 3000, react: 2000, Angular: 827 },
  { week: 'Tue', vue: 3500, react: 2000, Angular: 949 },
  { week: 'Wed', vue: 3900, react: 2600, Angular: 1400 },
  { week: 'Thu', vue: 3100, react: 2300, Angular: 1000 },
  { week: 'Fir', vue: 3200, react: 2300, Angular: 884 },
  { week: 'Sat', vue: 3100, react: 2000, Angular: 911 },
  { week: 'Sun', vue: 3600, react: 2600 , Angular: 983 }
]);
const option = ref({
  xAxis: {
    boundaryGap: false,
  },
  series: {
    areaStyle: {}
  }
})
</script>
```
:::


## 自定义Api
| 配置项 | 说明 | 类型 | 可选值 | 默认值 |
| --- | --- | --- | --- | --- |
