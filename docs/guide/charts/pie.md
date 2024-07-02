## 饼图

:::demo

```vue
<template>
  <ksg-pie-chart :data="chartData" />
</template>
<script setup>
import { ref } from 'vue';
const chartData = ref([
  { channel: 'APP', pv: 40000, },
  { channel: 'PC', pv: 27800 },
  { channel: 'M端', pv: 22000 },
  { channel: '微信', pv: 15600 },
  { channel: '手Q', pv: 20200, },
  { channel: '小程序', pv: 13600 },
]);
</script>
```
:::

## 实心饼图

:::demo

```vue
<template>
  <ksg-pie-chart :data="chartData" :option="option" />
</template>
<script setup>
import { ref } from 'vue';
const chartData = ref([
  { channel: 'APP', pv: 40000, },
  { channel: 'PC', pv: 27800 },
  { channel: 'M端', pv: 22000 },
  { channel: '微信', pv: 15600 },
  { channel: '手Q', pv: 20200, },
  { channel: '小程序', pv: 13600 },
]);
const option = ref({
  variant: 'solid' // 实心
})
</script>
```
:::

## 南丁格尔玫瑰图（半径模式）

:::demo

```vue
<template>
  <ksg-pie-chart :data="chartData" :option="option"/>
</template>
<script setup>
import { ref } from 'vue';
const chartData = ref([
  { channel: 'APP', pv: 40000, },
  { channel: 'PC', pv: 27800 },
  { channel: 'M端', pv: 22000 },
  { channel: '微信', pv: 15600 },
  { channel: '手Q', pv: 20200, },
  { channel: '小程序', pv: 13600 },
]);
const option = ref({
  series: {
    roseType: 'radius',
    radius: [30, 110]
  },
})
</script>
```
:::


## 南丁格尔玫瑰图（面积模式）

:::demo

```vue
<template>
  <ksg-pie-chart :data="chartData" :option="option"/>
</template>
<script setup>
import { ref } from 'vue';
const chartData = ref([
  { channel: 'APP', pv: 40000, },
  { channel: 'PC', pv: 27800 },
  { channel: 'M端', pv: 22000 },
  { channel: '微信', pv: 15600 },
  { channel: '手Q', pv: 20200, },
  { channel: '小程序', pv: 13600 },
]);
const option = ref({
  series: {
    roseType: 'area',
    radius: [30, 110]
  },
})
</script>
```
:::

## 环饼图

:::demo

```vue
<template>
  <ksg-pie-chart :data="chartData" :option="option"/>
</template>
<script setup>
import { ref } from 'vue';
const chartData = ref([
  { channel: '移动设备', pv1: 150000, },
  { channel: 'PC', pv1: 90000 },
  { channel: 'APP', pv: 40000, },
  { channel: 'PC', pv: 30000 },
  { channel: 'M端', pv: 20000 },
  { channel: '微信', pv: 50000 },
  { channel: '手Q', pv: 10000, },
  { channel: '小程序', pv: 90000 },
]);
const option = ref({
  series: [
    {
      selectedMode: 'single',
      radius: [0, '30%'],
      labelLine: {
        normal: {
          show: false
        }
      },
      label: {
        normal: {
          position: 'inner'
        }
      }
    }, 
    {
      selectedMode: 'single',
      radius: ['40%', '55%']
    }
  ]
})
</script>
```
:::