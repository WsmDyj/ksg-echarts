# ksg-Echarts 基本属性

`ksg-Echarts` 组件的基本属性包括 **数据** 与 **配置项**。数据配置可参考 [echarts 数据集介绍](https://echarts.apache.org/handbook/zh/concepts/dataset)

```vue
<ksg-pie-chart
  :data="chartData"           // 数据
  :option="chartoption"       // echarts图表配置
/>
```

## 数据集
> 可以参考 [echarts 数据集 介绍 -> ](https://echarts.apache.org/handbook/zh/concepts/dataset)

`ksg-Echarts` 的数据设计采用数据分析的基础概念，用**维度**和**度量**的组合提供可视化和数据。`ksg-Echarts` 接收的数据格式为数组对象。内部会初始化并且兼容各种类型的数据

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

### 什么是维度与度量？

### 维度

维度确定如何对可视化内容数据分组，通常呈现在条形图的 X 轴上或饼图的切片上，例如时间、区域、产品类型等。

### 度量

度量是在可视化中使用的计算，结果为具体的参考数值，通常呈现在条形图的 Y 轴上或表格的列中。度量通过由聚合函数（例如 Sum 或 Max）组成的与一个或多个字段组合的表达式创建，例如蒸发量、降水量、销售额等。
