
/*
 * @Date: 2024-06-26 17:07:36
 * @LastEditTime: 2024-07-02 19:09:15
 * @Description: 统一数据格式
 */
import { Option, KsgChartsData, KsgChartsProps, ChartCommonOption } from '../../types';
import { PieSeriesOption } from 'echarts/charts';
import { ComposeOption } from 'echarts/core';
import { useComputeDataset } from '../../hook/useComputeDataset';
import { merge } from 'lodash-es';

type PieChartOptions = ComposeOption<PieSeriesOption | ChartCommonOption>;

export default class PieComputed {
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
    const { dataset } = useComputeDataset(this.data);
    return dataset;
  }

  getPieSeries() {
    let series: Array<PieChartOptions> = [];
    const isSolid = this.option?.variant === 'solid';

    const { dimensions } = useComputeDataset(this.data);
    series = dimensions.slice(1, dimensions.length).map((item, idx) => {
      const seriesItem = this.$props?.option?.series?.[idx] || this.$props?.option?.series || {};
      return merge(
        {
          type: 'pie',
          name: item,
          radius: isSolid ? [0, '60%'] : ['35%', '60%'],
          encode: {
            itemName: dimensions[0], // 数据标题名
            value: item // 数据键值
          }
        },
        seriesItem
      );
    });
    return series;
  }
  getChartOption() {
    const option = merge(
      {
        dataset: this.getPieDataset(),
        series: this.getPieSeries()
      },
      this.option
    );
    return option as Option;
  }
}