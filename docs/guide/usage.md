# 开始使用

## 通过 npm 安装

我们提供了 `ksg-echarts` npm 包，通过下面命令即可完成安装，`ksg-echarts` 依赖于 `echarts`，所以不要忘记安装依赖包。


```bash
npm i ksg-echarts echarts -S
```

## 引入 ksg-echarts

安装完成后，即可使用 `import` 或 `require` 使用。

完整引入 `ksg-echarts`

```js
import Vue from 'vue'
import KsgCharts from 'ksg-echarts'

Vue.use(KsgCharts)
```

按需引入 `ksg-echarts`

```js
import Vue from 'vue'
import { KsgPieChart } from 'ksg-echarts'  // 引入单个图表

Vue.component('KsgPieChart', KsgPieChart)
```

## 创建图表
在 ksg-echarts 引入页面后，我们就已经做好了创建第一个图表的准备了，下面以一个基础饼图为例开始我们第一个图表的创建。大部分 demos 使用了父容器宽高，请确保父容器宽高或者手动设置图表宽高。
```html
<ksg-pie-chart :data="chartData" />
```

```js
export default {
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
}
```

目前支持的单个引入图表列表如下：

| 图表 | 组件 |
| --- | --- |
| 折线图 | KsgLineChart |
| 柱状图 | KsgBarChart |
| 饼图 | KsgPieChart |