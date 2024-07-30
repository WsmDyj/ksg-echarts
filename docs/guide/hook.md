# useKsgChart方式

ksg-echarts 组件还提供了 hooks 的使用方式，方便用户手动设置图表的一些属性。

## 用法
```
import { useKsgChart } from 'ksg-echarts'
```

### useKsgChart介绍
useKsgChart 是一个基础的hook，对所有的图表都适用，其中返回两个函数 setChartData, setOptions
* **setChartData**：设置图表的值
* **setOptions**：设置图表的配置options

useKsgChart 接收两个参数，一个是**组件的实例**（必填），另一个是初始化图表的配置（可选）
```js
const { setChartData, setOptions } = useKsgChart(chartRef, {
  title: {
    text: '初始化title',
  }
})
```
注意：第二个参数不具备依赖响应，尽量避开响应式数据，如果有动态需求，请使用setOptions

> setOptions 是在组件初始化之后调用 Echarts 的 setOption 方法，所以使用之前确保图表实例已经生成，另外setOptions参数只支持 Echarts 的配置项，无法解析各组件自定义的api

## 案例
:::demo
```vue
<template>
  <ksg-line-chart ref="chartRef" />
</template>
<script setup>
import { ref, onMounted, nextTick } from 'vue';
import { useKsgChart } from 'ksg-echarts'
const chartRef = ref()
const { setChartData, setOptions } = useKsgChart(chartRef)

onMounted(() => {
  setChartData([
    { week: 'Mon', pv: 30, },
    { week: 'Tue', pv: 40 },
    { week: 'Wed', pv: 35 },
    { week: 'Thu', pv: 50 },
    { week: 'Fir', pv: 49 },
    { week: 'Sat', pv: 70 },
    { week: 'Sun', pv: 90 }
  ]);
  // 确保图表实例已经生成
  nextTick(() => {
    setOptions({
      title: {
        text: '手动设置title',
      }
    })
  })
})
</script>
```