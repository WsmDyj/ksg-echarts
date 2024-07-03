# 属性配置

## 图表loading
通过配置 **loading** 字段，展示图表加载状态，常用于远程获取数据。

并且可以配置 **loading-options** 来设置加载动画的配置项。请参阅echartsInstance.showLoading此处的 [opts参数 ->](https://echarts.apache.org/en/api.html#echartsInstance.showLoading)
> 通过 provide 可全局设置 loadingOptions, Injection key: LOADING_OPTIONS_KEY
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

## 数据为空
当图表组件数据为空是会展示一个空状态，可以通过 emptyText 来设置空状态文案， 默认值为 '暂无数据'
:::demo

```vue
<template>
  <ksg-line-chart :data="chartData" emptyText="这是一个空的数据" />
</template>
<script setup>
import { reactive, ref } from 'vue';
const chartData = ref([]);
</script>
```
:::

当然也可以自定义空数据组件，通过默认插槽的形式
:::demo

```vue
<template>
  <ksg-line-chart :data="chartData">
    <div class="ksgchart-empty">
      <div class="ksgchart-empty-description">数据请求发生错误</div>
    </div>
  </ksg-line-chart>
</template>
<script setup>
import { reactive, ref } from 'vue';
const chartData = ref([]);
</script>
```
:::

## 获取图表实例
通过 getInstance 可获取当前表格的实例

:::demo

```vue
<template>
  <ksg-bar-chart ref="ksgbarRef" :data="chartData" />
</template>
<script setup>
import { ref, onMounted, inject } from 'vue';
const chartData = ref([
  { week: 'Mon', pv: 256, },
  { week: 'Tue', pv: 767 },
  { week: 'Wed', pv: 1356 },
  { week: 'Thu', pv: 2087 },
  { week: 'Fir', pv: 803 },
  { week: 'Sat', pv: 582 },
  { week: 'Sun', pv: 432 }
]);
const ksgbarRef = ref()

onMounted(() => {
  const chartInstance = ksgbarRef.value.getInstance()
  chartInstance.setOption({
    title: {
      text: '手动设置title',
      subtext: `宽：${chartInstance.getWidth()} / 高：${chartInstance.getHeight()}`
    }
  })
})
</script>
```
:::

## 自定义宽高
通过传入height，width 设置图标的宽/高，默认是100%，继承父级高度
:::demo

```vue
<template>
  <ksg-bar-chart :data="chartData" :height="300" width="300px" />
</template>
<script setup>
import { ref } from 'vue';
const chartData = ref([
  { week: 'Mon', pv: 256, },
  { week: 'Tue', pv: 767 },
  { week: 'Wed', pv: 356 },
  { week: 'Thu', pv: 587 },
  { week: 'Fir', pv: 603 },
  { week: 'Sat', pv: 582 },
  { week: 'Sun', pv: 432 }
]);
</script>
```
:::


## svg渲染图表
通过配置参数 initOptions 可使用svg方式渲染图表。
更多的图表初始化配置。请参阅此处的 echarts.init 的 [opts 参数 ->](https://echarts.apache.org/zh/api.html#echarts.init)

> 通过 provide 可全局设置 initOptions， Injection key: INIT_OPTIONS_KEY

:::demo

```vue
<template>
  <ksg-bar-chart 
    :data="chartData"
    :initOptions="initOptions" 
  />
</template>
<script setup>
import { ref, shallowRef } from 'vue';
import { use } from 'echarts/core';
import { SVGRenderer } from 'echarts/renderers';
use([SVGRenderer]) // 加载echarts svg渲染插件
// import { INIT_OPTIONS_KEY } from 'ksg-echarts';
const chartData = ref([
  { week: 'Mon', pv: 256, },
  { week: 'Tue', pv: 767 },
  { week: 'Wed', pv: 1356 },
  { week: 'Thu', pv: 2087 },
  { week: 'Fir', pv: 803 },
  { week: 'Sat', pv: 582 },
  { week: 'Sun', pv: 432 }
]);
const initOptions = shallowRef({
  renderer: 'svg',
  // ...其他配置项
})
// provide(INIT_OPTIONS_KEY, { renderer: 'svg' })
</script>
```
:::

