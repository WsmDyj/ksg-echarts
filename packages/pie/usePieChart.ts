import { Option, KsgChartsData, ChartCommonOption } from '../types';
import { ref } from 'vue';
import { useComputeDataset } from '../hook/useComputeDataset';
import { merge } from 'lodash-es';
import { PieSeriesOption } from 'echarts/charts';
import { ComposeOption } from 'echarts/core';
export type PieChartOptions = ComposeOption<PieSeriesOption | ChartCommonOption>;

/**
 * 自定义的一些配置api
 */
export interface KsgPieOptions extends Option {
  variant?: 'donut' | 'solid'; // 是否实心
}

export interface PieOptions extends Option {
  data?: KsgChartsData;
  option?: KsgPieOptions;
}

export default function useInitChart() {
  const option = ref<Option | undefined>(undefined);
  // 配置数据集
  function getPieDataset(data: KsgChartsData) {
    if (!data || !data?.length) return;
    const { dataset } = useComputeDataset(data);
    return dataset;
  }

  function getPieSeries(props: PieOptions) {
    let series: Array<PieChartOptions> = [];
    const isSolid = props.option?.variant === 'solid';
    const { dimensions } = useComputeDataset(props.data);
    series = dimensions.slice(1, dimensions.length).map((item, idx) => {
      const seriesItem = props.option?.series?.[idx] || props.option?.series || {};
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

  function getPieTooltip() {
    return {
      trigger: 'item',
      confine: true
    };
  }

  function initOptions(props: PieOptions) {
    const mergeOption = merge(
      {
        dataset: getPieDataset(props.data),
        series: getPieSeries(props),
        tooltip: getPieTooltip()
      },
      props.option
    );
    option.value = mergeOption;
  }

  return { option, initOptions };
}
