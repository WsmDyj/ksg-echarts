import { Option, KsgChartsData, ChartCommonOption } from '../types';
import { ref } from 'vue';
import { useComputeDataset } from '../hook/useComputeDataset';
import { merge } from 'lodash-es';
import { LineSeriesOption } from 'echarts/charts';
import { ComposeOption } from 'echarts/core';

type LineChartOptions = ComposeOption<LineSeriesOption | ChartCommonOption>;

/**
 * 自定义的一些配置api
 */
export interface KsgLineOptions extends Option {
}

export interface LineOptions extends Option {
  data?: KsgChartsData;
  option?: KsgLineOptions;
}

export default function useLineChart() {
  const option = ref<Option | undefined>(undefined);
  // 配置数据集
  function getPieDataset(data: KsgChartsData) {
    if (!data || !data?.length) return;
    const { dataset } = useComputeDataset(data);
    return dataset;
  }

  function getLineSeries(props: LineOptions) {
    let series: Array<LineChartOptions> = [];
    const dimensions = useComputeDataset(props?.data)?.dimensions;
    series = dimensions.slice(1, dimensions.length).map((item, idx) => {
      const seriesItem = props.option?.series?.[idx] || props.option?.series || {};
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

  // 声明一个 X 轴，类目轴（category）。默认情况下，类目轴对应到 dataset 第一列。
  function getBarMeatAxis() {
    return {
      type: 'category',
    };
  }

  // 声明一个 Y 轴，数值轴。
  function getBarDimAxis() {
    return {
      type: 'value'
    };
  }

  function getBarTooltip() {
    return {
      trigger: 'axis',
      axisPointer: {
        // 坐标轴指示器，坐标轴触发有效
        type: 'line' // 默认为直线，可选为：'line' | 'shadow'
      }
    };
  }

  function initOptions(props: LineOptions) {
    const mergeOption = merge(
      {
        dataset: getPieDataset(props.data),
        series: getLineSeries(props),
        tooltip: getBarTooltip(),
        xAxis: getBarMeatAxis(),
        yAxis: getBarDimAxis()
      },
      props.option
    );
    option.value = mergeOption;
  }

  return { option, initOptions };
}
