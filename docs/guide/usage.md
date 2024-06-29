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

```html
<ksg-pie-chart :data="chartData" />
```

```js
export default {
  const chartData = {
    dimensions: {
      name: 'Week',
      data: ['Mon.', 'Tue.', 'Wed.', 'Thu.', 'Fir.', 'Sat.', 'Sun.']
    },
    measures: [{
      name: 'PV',
      data: [256, 767, 1356, 2087, 803, 582, 432]
    }, {
      name: 'UV',
      data: [287, 707, 1756, 1822, 987, 432, 322]
    }]
  }
}
```

目前支持的单个引入图表列表如下：

| 图表 | 组件 |
| --- | --- |
| 折线图 | VeLineChart |
| 柱状图 | VeBarChart |
| 饼图 | VePieChart |