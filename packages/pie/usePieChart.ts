import { Option, KsgChartsData, ChartCommonOption, AnyRecord } from '../types';
import { Ref, ref } from 'vue';
import useComputeDataset from '../base/hooks/useComputeDataset';
import { merge } from 'lodash-es';
import type { PieSeriesOption } from 'echarts/charts';
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

export default function usePieChart(): {
  option: Ref<AnyRecord | null>;
  setOptions: (arg: PieOptions) => void;
} {
  const option = ref<PieOptions | null>(null);
  // 配置数据集
  function getDataset(data?: KsgChartsData) {
    if (!data || !data?.length) return;
    const { dataset } = useComputeDataset(data);
    return dataset;
  }

  function getSeries(props: PieOptions) {
    let series: Array<PieChartOptions> = [];
    const isSolid = props.option?.variant === 'solid';
    const dimensions = useComputeDataset(props.data)?.dimensions;
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

  function getTooltip() {
    return {
      trigger: 'item',
      confine: true
    };
  }

  function setOptions(props: PieOptions) {
    const mergeOption = merge(
      {
        dataset: getDataset(props.data),
        series: getSeries(props),
        tooltip: getTooltip()
      },
      props.option
    );
    option.value = mergeOption;
  }

  return { option, setOptions };
}
