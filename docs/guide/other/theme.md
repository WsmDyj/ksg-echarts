# 图表主题
## 主题设置
通过配置参数 **theme** 可使用不同主题。light ｜ dark，更多的主题可以参考 [echarts 颜色主题 ->](https://echarts.apache.org/handbook/zh/concepts/style/)

> 通过 provide 可全局设置 initOptions， Injection key: THEME_KEY


:::demo

```vue
<template>
  <ksg-bar-chart :data="chartData" theme="dark" />
</template>
<script setup>
import { ref, provide } from 'vue';
// import { THEME_KEY } from 'ksg-echarts';
const chartData = ref([
  { week: 'Mon', pv: 256, },
  { week: 'Tue', pv: 767 },
  { week: 'Wed', pv: 1356 },
  { week: 'Thu', pv: 2087 },
  { week: 'Fir', pv: 803 },
  { week: 'Sat', pv: 582 },
  { week: 'Sun', pv: 432 }
]);
// provide(THEME_KEY, 'dark')
</script>
```
:::

## 主题样式表
通过配置参数 **palette** 设置图标的主题样式

> 通过 provide 可全局设置 palette， Injection key: PALETTE_KEY

:::demo

```vue
<template>
  <ksg-pie-chart :palette="palette"  :data="chartData" />
</template>
<script setup>
import { ref, provide } from 'vue';
// import { PALETTE_KEY } from 'ksg-echarts';
const palette = ['#FF6B3B', '#626681', '#FFC100', '#9FB40F', '#76523B', '#DAD5B5', '#0E8E89', '#E19348', '#F383A2', '#247FEA']
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
// provide(PALETTE_KEY, palette)
</script>
```
:::
