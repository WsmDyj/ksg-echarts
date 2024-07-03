# 事件处理

## vue方式
通过直接绑定事件即可监听图表的事件
:::demo

```vue
<template>
  <ksg-bar-chart @click="handleClick" ref="ksgbarRef" :data="chartData" />
</template>
<script setup lang="ts">
import { ref } from 'vue';
const ksgbarRef = ref()
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
function handleClick(params) {
  const chartInstance = ksgbarRef.value.getInstance()
  chartInstance.setOption({
    title: {
      text: `选中维度：${params.name}`
    }
  })
}
</script>
```
:::

## echarts方式
通过echarts的on事件，监听用户的点击行为
:::demo

```vue
<template>
  <ksg-bar-chart ref="ksgbarChart" :data="chartData" />
</template>
<script setup lang="ts">
import { ref, onMounted } from 'vue';
const ksgbarChart = ref()
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
onMounted(() => {
  const chartInstance = ksgbarChart.value.getInstance()
  chartInstance.on('click', function (params) {
    chartInstance.setOption({
      title: {
        text: `选中维度：${params.name}`
      }
    })
  });
})
</script>
```
:::

## 事件方法汇总
Ksg-ECharts支持的方法名，可以点击查看具体在echarts中的用法

> **Note**
>
> 由于其他修饰符与DOM事件系统紧密耦合，因此仅支持.one事件修饰符。

- `highlight` [→](https://echarts.apache.org/en/api.html#events.highlight)
- `downplay` [→](https://echarts.apache.org/en/api.html#events.downplay)
- `selectchanged` [→](https://echarts.apache.org/en/api.html#events.selectchanged)
- `legendselectchanged` [→](https://echarts.apache.org/en/api.html#events.legendselectchanged)
- `legendselected` [→](https://echarts.apache.org/en/api.html#events.legendselected)
- `legendunselected` [→](https://echarts.apache.org/en/api.html#events.legendunselected)
- `legendselectall` [→](https://echarts.apache.org/en/api.html#events.legendselectall)
- `legendinverseselect` [→](https://echarts.apache.org/en/api.html#events.legendinverseselect)
- `legendscroll` [→](https://echarts.apache.org/en/api.html#events.legendscroll)
- `datazoom` [→](https://echarts.apache.org/en/api.html#events.datazoom)
- `datarangeselected` [→](https://echarts.apache.org/en/api.html#events.datarangeselected)
- `timelinechanged` [→](https://echarts.apache.org/en/api.html#events.timelinechanged)
- `timelineplaychanged` [→](https://echarts.apache.org/en/api.html#events.timelineplaychanged)
- `restore` [→](https://echarts.apache.org/en/api.html#events.restore)
- `dataviewchanged` [→](https://echarts.apache.org/en/api.html#events.dataviewchanged)
- `magictypechanged` [→](https://echarts.apache.org/en/api.html#events.magictypechanged)
- `geoselectchanged` [→](https://echarts.apache.org/en/api.html#events.geoselectchanged)
- `geoselected` [→](https://echarts.apache.org/en/api.html#events.geoselected)
- `geounselected` [→](https://echarts.apache.org/en/api.html#events.geounselected)
- `axisareaselected` [→](https://echarts.apache.org/en/api.html#events.axisareaselected)
- `brush` [→](https://echarts.apache.org/en/api.html#events.brush)
- `brushEnd` [→](https://echarts.apache.org/en/api.html#events.brushEnd)
- `brushselected` [→](https://echarts.apache.org/en/api.html#events.brushselected)
- `globalcursortaken` [→](https://echarts.apache.org/en/api.html#events.globalcursortaken)
- `rendered` [→](https://echarts.apache.org/en/api.html#events.rendered)
- `finished` [→](https://echarts.apache.org/en/api.html#events.finished)
- Mouse events
  - `click` [→](https://echarts.apache.org/en/api.html#events.Mouse%20events.click)
  - `dblclick` [→](https://echarts.apache.org/en/api.html#events.Mouse%20events.dblclick)
  - `mouseover` [→](https://echarts.apache.org/en/api.html#events.Mouse%20events.mouseover)
  - `mouseout` [→](https://echarts.apache.org/en/api.html#events.Mouse%20events.mouseout)
  - `mousemove` [→](https://echarts.apache.org/en/api.html#events.Mouse%20events.mousemove)
  - `mousedown` [→](https://echarts.apache.org/en/api.html#events.Mouse%20events.mousedown)
  - `mouseup` [→](https://echarts.apache.org/en/api.html#events.Mouse%20events.mouseup)
  - `globalout` [→](https://echarts.apache.org/en/api.html#events.Mouse%20events.globalout)
  - `contextmenu` [→](https://echarts.apache.org/en/api.html#events.Mouse%20events.contextmenu)
- ZRender events
  - `zr:click`
  - `zr:mousedown`
  - `zr:mouseup`
  - `zr:mousewheel`
  - `zr:dblclick`
  - `zr:contextmenu`

See supported events [here →](https://echarts.apache.org/en/api.html#events)