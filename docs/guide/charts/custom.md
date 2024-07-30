# 自定义图表
对于复杂或者 ksg-echarts 组件库无法满足的图表，可以使用自定义图表功能。

ksg-echarts 提供了基础图表 KsgBaseChart 组件，各图表组件也是基于这基础上进一步封装 options。因此，可以通过配置option的参数来自定义图表实现自己的效果。

```
import { KsgBaseChart } from 'ksg-echarts'
```

## 案例
如下案例中是自定义漏斗图代码，其中我们只需要传递给 echarts 的配置 option 即可渲染自定义图表。

:::demo

```vue
<template>
  <ksg-base-chart :option="option" />
</template>
<script setup>
import { ref } from 'vue';
import { FunnelChart } from 'echarts/charts';
import { use } from 'echarts/core';
// 注册漏斗图
use([FunnelChart]);
const option = ref({
  series: [{
    name: 'Funnel',
    type: 'funnel',
    data: [
      { value: 60, name: 'Visit' },
      { value: 40, name: 'Inquiry' },
      { value: 20, name: 'Order' },
      { value: 80, name: 'Click' },
      { value: 100, name: 'Show' }
    ]
  }]
})
</script>
```