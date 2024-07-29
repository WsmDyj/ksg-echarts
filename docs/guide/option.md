# ksg-Echarts 基本属性

ksg-Echarts 组件的基本属性包括 **数据** 与 **配置项**。采用数据与配置相互隔离的概念, 因为配置项基本是保持不变的，而经常改变的是数据，将这两者分开，更好的方便用户只关心数据。这在业务实际开发中是比较重要的一点。另一方面组件内置了很多默认的配置，这可以减少echarts过多的配置，增加用户上手难度，当然配置也是可以在外部通过option重新设置，覆盖式更新，这样能实现一些定制化的业务场景。

数据配置可参考 [echarts 数据集介绍 -> ](https://echarts.apache.org/handbook/zh/concepts/dataset)

配置项和 echarts 配置保持一致 [echarts配置项 -> ](https://echarts.apache.org/zh/option.html#title)

```vue
<ksg-pie-chart
  :data="chartData"           // 数据
  :option="chartoption"       // echarts图表配置
/>
```

## 数据集
### 数据（source）
> 可以参考 [echarts 数据集 介绍 -> ](https://echarts.apache.org/handbook/zh/concepts/dataset)

`ksg-Echarts` 的数据设计采用对象数组的形式，这对后端来说是十分友好的。避免了过多数据聚合的逻辑，所见即所得。需要注意的一点是，对象的首字段为我们的 类目轴对应到 dataset 第一列

例如：

```js
const chartData = [
  { channel: '移动设备', pv1: 150000, },
  { channel: 'PC', pv1: 90000 },
  { channel: 'APP', pv: 40000, },
  { channel: 'PC', pv: 30000 },
  { channel: 'M端', pv: 20000 },
  { channel: '微信', pv: 50000 },
  { channel: '手Q', pv: 10000, },
  { channel: '小程序', pv: 90000 },
];
```
### 纬度（dimensions）
常用图表所描述的数据大部分是“二维表”结构，上述的例子中，我们都使用二维数组来容纳二维表。现在，当我们把系列（series）对应到“列”的时候，那么每一列就称为一个“维度（dimension）”，而每一行称为数据项（item）。反之，如果我们把系列（series）对应到表行，那么每一行就是“维度（dimension）”，每一列就是数据项（item）。

上面的数据源中从第二列开始才是正式的数据值,第一行通常被视为维度名称。

最后我们的数据会转换成：
```js
dataset: {
  "dimensions": ["channel", "pv1", "pv"], // 纬度
  "source": [ // 数据
    { channel: '移动设备', pv1: 150000, },
    { channel: 'PC', pv1: 90000 },
    { channel: 'APP', pv: 40000, },
    { channel: 'PC', pv: 30000 },
    { channel: 'M端', pv: 20000 },
    { channel: '微信', pv: 50000 },
    { channel: '手Q', pv: 10000, },
    { channel: '小程序', pv: 90000 }
  ]
}
```

## 配置项

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



ksg-echarts 还提供了五个 Injection key，通过 provide 可全局设置图表的参数：

## Injection key

| key | 说明 |
| --- | --- | 
| LOADING_OPTIONS_KEY | 配置loading-options
| INIT_OPTIONS_KEY | 初始化图表配置init-options
| THEME_KEY | 初始化图表主题theme
| PALETTE_KEY | 初始化图表配色， 默认echarts颜色palette
| UPDATE_OPTIONS_KEY | 更新配置文件pdate-options

**具体用法**
```js
provide(INIT_OPTIONS_KEY, { renderer: 'svg' })
provide(THEME_KEY, 'dark')
... // 其他设置
```