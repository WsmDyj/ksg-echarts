/*
 * @Author: wusimin 
 * @Date: 2024-07-02 18:59:42
 * @LastEditors: wusimin wusimin@kuaishou.com
 * @LastEditTime: 2024-07-03 00:05:05
 * @FilePath: /ksg-echarts/packages/bar/src/computed.ts
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
import { get, merge } from 'lodash-es';
import { useComputeDataset } from '../../hook/useComputeDataset';
import { Option, KsgChartsData, KsgChartsProps, ChartCommonOption } from '../../types';
import { BarSeriesOption } from 'echarts/charts';
import { ComposeOption } from 'echarts/core';

type BarChartOptions = ComposeOption<BarSeriesOption | ChartCommonOption>;

export default class BarComputed {
  public $props: KsgChartsProps;
  public data: KsgChartsData;
  public option: Option;
  public isRowBar: Boolean;

  constructor(props) {
    this.$props = props;
    this.data = this.$props.data;
    this.option = this.$props.option;

    const direction = this.$props.option?.direction || 'column';
    // true代表是条形图，false是柱图
    this.isRowBar = direction !== 'column' && direction === 'row';
  }

  percentage(num, total) {
    return Math.round((num / total) * 10000) / 100.0; // 小数点后两位百分比
  }

  // 配置数据集
  getPieDataset() {
    const { dataset, dimensions } = useComputeDataset(this.data);
    const keys = dimensions.slice(1, dimensions.length);
    // 开启百分比模式
    const percentage = this.option?.percentage;
    if (percentage) {
      this.data = this.data.map((item) => {
        const sum = keys.reduce(
          (acc: number, cur: keyof typeof item) => acc + parseFloat(item[cur]),
          0
        );
        keys.forEach((it: keyof typeof item) => {
          item[it] = this.percentage(item[it], sum);
        });
        return item;
      });
    }
    if (this.isRowBar) {
      this.data = this.data.map((item) => {
        const reverseKeys = dimensions.reverse();
        const newItem = {};
        reverseKeys.forEach((key: string) => {
          Reflect.set(newItem, key, get(item, key));
        });
        return newItem;
      });
    }
    return { ...dataset, source: this.data };
  }

  getPieSeries() {
    let series: Array<BarChartOptions> = [];
    const dimensions = useComputeDataset(this.data)?.dimensions;
    const seriesDim = this.isRowBar
      ? dimensions.slice(0, dimensions.length-1)
      : dimensions.slice(1, dimensions.length);
    series = seriesDim.map((item, idx) => {
      const seriesItem = this.$props?.option?.series?.[idx] || this.$props?.option?.series || {};
      return merge(
        {
          type: 'bar',
          name: item,
        },
        seriesItem
      );
    });
    return series;
  }

  getBarMeatAxis() {
    return { type: 'category' };
  }
  getBarDimAxis() {
    return { type: 'value' };
  }

  getBarTooltip() {
    return {
      trigger: 'axis',
      axisPointer: {
        // 坐标轴指示器，坐标轴触发有效
        type: 'shadow' // 默认为直线，可选为：'line' | 'shadow'
      }
    };
  }

  getBarGrid() {
    return {
      right: 30,
      left: 30,
      containLabel: true
    };
  }

  getChartOption() {
    const option = merge(
      {
        // 声明一个 X 轴，类目轴（category）。默认情况下，类目轴对应到 dataset 第一列。
        xAxis: this.isRowBar ? this.getBarDimAxis() : this.getBarMeatAxis(),
        // 声明一个 Y 轴，数值轴。
        yAxis: this.isRowBar ? this.getBarMeatAxis() : this.getBarDimAxis(),
        dataset: this.getPieDataset(),
        series: this.getPieSeries(),
        tooltip: this.getBarTooltip(),
        grid: this.getBarGrid()
      },
      this.option
    );
    return option as Option;
  }
}