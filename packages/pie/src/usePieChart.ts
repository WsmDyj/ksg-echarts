import { Option, KsgChartsData, ChartCommonOption, KsgChartsProps } from '../../types';
import { nextTick, ref } from 'vue';
import { useComputeDataset } from '../../hook/useComputeDataset';
import { merge } from 'lodash-es';
import { PieSeriesOption } from 'echarts/charts';
import { ComposeOption } from 'echarts/core';
export type PieChartOptions = ComposeOption<PieSeriesOption | ChartCommonOption>;

export interface PieOptions extends Option, KsgChartsProps {
  variant?: 'pie' | 'donut' | 'solid';
}

export default function usePieChart(elRef?: any) {
  const option = ref<Option | undefined>(undefined);
  const presets = ref()
  // 配置数据集
  function getPieDataset(data: KsgChartsData) {
    if (!data || !data?.length) return;
    const { dataset } = useComputeDataset(data);
    return dataset;
  }

  function getPieSeries(props: PieOptions) {
    let series: Array<PieChartOptions> = [];
    const isSolid = props.variant === 'solid';
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
    console.log(presets.value);
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

  function setOptions(option: Option) {
    presets.value = option
    elRef.value?.getInstance()?.setOptions(merge(option.value, option));
  }

  return { option, initOptions, setOptions };
}
