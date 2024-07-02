/*
 * @Author: wusimin 
 * @Date: 2024-07-02 18:59:42
 * @LastEditors: wusimin wusimin@kuaishou.com
 * @LastEditTime: 2024-07-03 04:08:15
 * @FilePath: /ksg-echarts/packages/bar/src/computed.ts
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
import { get, merge } from 'lodash-es';
import { useComputeDataset } from '../../hook/useComputeDataset';
import { Option, KsgChartsData, KsgChartsProps, ChartCommonOption } from '../../types';
import { BarSeriesOption } from 'echarts/charts';
import { ComposeOption } from 'echarts/core';

type BarChartOptions = ComposeOption<BarSeriesOption | ChartCommonOption>;

export default class LineComputed {
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
    return dataset;
  }

  getPieSeries() {
    let series: Array<BarChartOptions> = [];
    const dimensions = useComputeDataset(this.data)?.dimensions;
    series = dimensions.slice(1, dimensions.length).map((item, idx) => {
      const seriesItem = this.$props?.option?.series?.[idx] || this.$props?.option?.series || {};
      return merge(
        {
          type: 'line',
          name: item
        },
        seriesItem
      );
    });
    return series;
  }

  getBarMeatAxis() {
    return {
      type: 'category',
    };
  }
  getBarDimAxis() {
    return {
      type: 'value',
    };
  }

  getBarTooltip() {
    return {
      trigger: 'axis',
      axisPointer: {
        // 坐标轴指示器，坐标轴触发有效
        type: 'line' // 默认为直线，可选为：'line' | 'shadow'
      }
    };
  }


  getChartOption() {
    const option = merge(
      {
        // 声明一个 X 轴，类目轴（category）。默认情况下，类目轴对应到 dataset 第一列。
        xAxis: this.getBarMeatAxis(),
        // 声明一个 Y 轴，数值轴。
        yAxis: this.getBarDimAxis(),
        dataset: this.getPieDataset(),
        series: this.getPieSeries(),
        tooltip: this.getBarTooltip(),
      },
      this.option
    );
    return option as Option;
  }
}