/*
 * @Author: wusimin 
 * @Date: 2024-07-02 18:59:42
 * @LastEditors: wusimin wusimin@kuaishou.com
 * @LastEditTime: 2024-07-02 20:36:34
 * @FilePath: /ksg-echarts/packages/bar/src/computed.ts
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
import { merge } from 'lodash-es';
import { useComputeDataset } from '../../hook/useComputeDataset';
import { Option, KsgChartsData, KsgChartsProps, ChartCommonOption } from '../../types';
import { BarSeriesOption } from 'echarts/charts';
import { ComposeOption } from 'echarts/core';

type BarChartOptions = ComposeOption<BarSeriesOption | ChartCommonOption>;

export default class BarComputed {
  public $props: KsgChartsProps;
  public data: KsgChartsData;
  public option: Option;

  constructor(props) {
    this.$props = props;
    this.data = this.$props.data;
    this.option = this.$props.option;
  }

  percentage(num, total) {
		return (Math.round(num / total * 10000) / 100.00);// 小数点后两位百分比
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
    return { ...dataset, source: this.data };
  }

  getPieSeries() {
    let series: Array<BarChartOptions> = [];
    const { dimensions } = useComputeDataset(this.data);
    series = dimensions.slice(1, dimensions.length).map((item, idx) => {
      let seriesItem = this.$props?.option?.series?.[idx] || this.$props?.option?.series || {};
      const percentage = this.option?.percentage;
      if (percentage) {
        seriesItem = merge(seriesItem, {
          tooltip: {
            formatter: function (params) {
              const { dimensionNames, value } = params;
              const name = value[dimensionNames.slice(0, 1)];
              const tooltipContent = dimensionNames
                .slice(1, dimensionNames.length)
                ?.filter((it) => it)
                ?.map((v) => {
                  return `${v}：${value[v]} %`;
                })
                .join('<br/>');
              return name + '<br/>' + tooltipContent;
            }
          }
        });
      }
      return merge(
        {
          type: 'bar',
          name: item,
          encode: {
            x: dimensions[0], // 表示维度映射到x轴。
            y: item // 表示维度映射到 y 轴。
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
        // 声明一个 X 轴，类目轴（category）。默认情况下，类目轴对应到 dataset 第一列。
        xAxis: { type: 'category' },
        // 声明一个 Y 轴，数值轴。
        yAxis: { type: 'value', label: { type: 'percentage' } },
        dataset: this.getPieDataset(),
        series: this.getPieSeries()
      },
      this.option
    );
    return option as Option;
  }
}