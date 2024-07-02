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
  yAxis: [
    {  
      max : 100,// 设置最大值是多少
      splitNumber: 5,// 设置分几段显示
      axisLabel: {  
        formatter: '{value} %'  // 给每个数值添加%
      },  
    }  
  ],
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
```
:::

## 条形图

:::demo

```vue
<template>
  <ksg-bar-chart :data="chartData" :option="option"/>
</template>
<script setup>
import { ref } from 'vue';
const chartData = ref([
  { Repo: 'Vue.js', star: 40000, },
  { Repo: 'React', star: 27800 },
  { Repo: 'Create RA', star: 22500 },
  { Repo: 'Puppteer', star: 22000 },
  { Repo: 'Axios', star: 21900 },
  { Repo: 'Prettier', star: 14800 },
  { Repo: 'VS Code', star: 20200 },
  { Repo: 'RN', star: 17700 },
  { Repo: 'Element', star: 15600 },
  { Repo: 'Electron', star: 14900 },
]);
const option = ref({
  direction: 'row'
})
</script>
```
:::

## 分组条形图

:::demo

```vue
<template>
  <ksg-bar-chart :data="chartData" :option="option"/>
</template>
<script setup>
import { ref } from 'vue';
const chartData = ref([
  { channel: 'APP', pv: 256, uv: 287 },
  { channel: 'PC', pv: 767, uv: 707 },
  { channel: 'M端', pv: 1356, uv: 1756},
  { channel: '微信', pv: 2087, uv: 1822 },
  { channel: '手Q', pv: 803, uv: 987 },
  { channel: '小程序', pv: 582, uv: 432 },
]);
const option = ref({
  direction: 'row',
})
</script>
```
:::