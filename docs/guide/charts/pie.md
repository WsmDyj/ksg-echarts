# 饼图

## 示例

<!-- <iframe width="100%" height="470" src="//jsfiddle.net/vecharts/u9p0kvkq/embedded/result,html,js/?bodyColor=fff" allowfullscreen="allowfullscreen" frameborder="0"></iframe> -->

## 基础饼图

:::demo

```vue
<template>
  <ksg-pie-chart :data="chartData" />
</template>
<script setup>
import { ref } from 'vue';
const chartData = ref({
  dimensions: {
    name: '渠道',
    data: ['APP', 'PC', 'M端', '微信', '手Q', '小程序']
  },
  measures: [{
    name: 'PV',
    data: [40000, 27800, 22000, 20200, 15600, 13600]
  }]
});
</script>
```

:::

