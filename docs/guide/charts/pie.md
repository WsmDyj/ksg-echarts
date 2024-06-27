# 饼图

## 示例

<!-- <iframe width="100%" height="470" src="//jsfiddle.net/vecharts/u9p0kvkq/embedded/result,html,js/?bodyColor=fff" allowfullscreen="allowfullscreen" frameborder="0"></iframe> -->

## 基础饼图


## settings 配置项

| 配置项 | 简介 | 类型 | 用法 |
| --- | --- | --- | --- |
| smooth | 设置图形上的文本标签，可用于说明图形的一些数据信息，比如值，名称等 | Object | 参见[文档](https://echarts.apache.org/zh/option.html#series-line.smooth) |
| stack | 设置数据堆叠，区别于并排显示分类的分组柱状图，将每个柱子进行分割以显示相同类型下各个数据的大小情况 | Object | 指定哪些度量堆叠展示，例如: 指定`React`与`Angular`以`lang`堆叠 |
| roseType | 是否展示成南丁格尔图，通过半径区分数据大小。| Boolean, String | 参见[文档](https://echarts.apache.org/zh/option.html#series-pie.roseType) |
| offsetY | 饼图的中心（圆心）纵向坐标（Y轴偏移） | String | 支持设置为百分比，默认：'50%' |
