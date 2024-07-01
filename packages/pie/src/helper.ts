
/*
 * @Author: wusimin wusimin@kuaishou.com
 * @Date: 2024-06-26 17:07:36
 * @LastEditors: wusimin wusimin@kuaishou.com
 * @LastEditTime: 2024-07-01 18:36:38
 * @FilePath: /kwaida/packages/kwaida-charts/packages/base/helper.ts
 * @Description: 统一数据格式
 */
import { ChartCommonOption } from '../../types/echarts';
import { Option, KsgChartsData, KsgChartsProps } from '../../types';
import { PieSeriesOption } from 'echarts/charts';
import { ComposeOption } from 'echarts/core';
import { getDataset } from '../../utils';
import { merge } from 'lodash-es';

type PieChartOptions = ComposeOption<PieSeriesOption | ChartCommonOption>;

export default class PieHelper {
  public $props: KsgChartsProps;
  public data: KsgChartsData;
  public option: Option;

  constructor(props) {
    this.$props = props;
    this.data = this.$props.data;
    this.option = this.$props.option;
  }

  // 配置数据集
  getPieDataset() {
    const dataset = [];
    const data = this.data;
    const option = this.option;
    if (!Array.isArray(data)) {
      dataset.push(getDataset(data, option, { chartType: 'pie' }));
    } else if (Array.isArray(data) && data.length > 1) {
      for (const element of data) {
        dataset.push(getDataset(element, option, { chartType: 'pie' }));
      }
    }
    return dataset;
  }
  getPieSeries() {
    let series: Array<PieChartOptions> = [];
    // 是否圆环
    const isDonut = this.option?.variant === 'donut';
    series = this.data?.measures.map(({ name }, idx) => {
      const seriesItem = Array.isArray(this?.option?.series) ? this?.option?.series?.[idx] : this.$props?.option?.series || {}
      return {
        type: 'pie',
        name,
        radius: isDonut ? ['35%', '60%'] : [0, '60%'],
        ...seriesItem
      };
    });
    return series;
  }



  getChartOption() {
    const option = merge({
      dataset: this.getPieDataset(),
      series: this.getPieSeries(),
    }, this.option)
    return option as Option;
  }
}