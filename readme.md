<h1 align="center">Ksg-ECharts</h1>
<p align="center">Vue.js <sup>(v3)</sup> component for Apache ECharts™ <sup>(v5)</sup>.</p>
<p align="center"><a href="https://ksg-echarts.vercel.app/">文档地址 →</a></p>


> ksg-echarts 是基于 Vue3.x 与 ECharts5.x 构建封装的组件库，用以解决繁杂的 ECharts 配置项以及数据转化带来的烦恼。用户只需关心 **数据** 与 **配置项**，甚至无需配置项，即可生成一个默认的图表，使用 ksg-Echarts 助你快捷、高效地构建图表。

# 开始使用

## 通过 npm 安装

我们提供了 `ksg-echarts` npm 包，通过下面命令即可完成安装，`ksg-echarts` 依赖于 `echarts`，所以不要忘记安装依赖包。


```bash
npm i ksg-echarts echarts -S
```

## 引入 ksg-echarts

安装完成后，在项目中即可使用 `import` 导入ksg-echarts。

完整引入 `ksg-echarts`

```js
import Vue from 'vue'
import KsgEcharts from 'ksg-echarts'

Vue.use(KsgEcharts)
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
## 全局配置项

| 配置项 | 说明 | 类型 | 可选值 | 用法 |
| --- | --- | --- | --- | --- |
| loading | 加载动画 | booble | false/true | 默认 false |
| loading-options | loading配置 | object | - | [echarts配置参考->](https://echarts.apache.org/zh/api.html#echartsInstance.showLoading)  |
| autoresize | 自动重置 | `boolean/{ throttle?: number, onResize?: () => void }` | - | 默认 true |
| init-options | 图表初始化配置 | object | - | [echarts配置参考->](https://echarts.apache.org/zh/api.html#echarts.init) |
| update-options | 图表设置项 | object | - | [echarts配置参考->](https://echarts.apache.org/zh/api.html#echartsInstance.setOption) |
| width | 图表宽度 | string/number | - | 500 |
| height | 图表高度 | string/number | - | 500px |
| emptyText | 图表空状态文案 | string | 暂无数据 | - |
| theme | 表格主题 | string/object | dark/light | [echarts配置参考-> ](https://echarts.apache.org/handbook/zh/concepts/style/) |
| palette | 主题样式表 | string[] | - | `['#FF6B3B', ...]` |



ksg-echarts 提供了五个 Injection key，通过 provide 可全局设置图表的参数：
 
 1. loading-options =>  **LOADING_OPTIONS_KEY**
 2. init-options => **INIT_OPTIONS_KEY**
 3. theme => **THEME_KEY**
 4. palette => **PALETTE_KEY**
 5. update-options => **UPDATE_OPTIONS_KEY**
 
 ```js
provide(INIT_OPTIONS_KEY, { renderer: 'svg' })
provide(THEME_KEY, 'dark')
... // 其他设置
 ```
