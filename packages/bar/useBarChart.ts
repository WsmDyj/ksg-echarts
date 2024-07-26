import { Option, KsgChartsData, ChartCommonOption } from '../types';
import { ref } from 'vue';
import { useComputeDataset } from '../base/hooks/useComputeDataset';
import { get, merge } from 'lodash-es';
import { BarSeriesOption } from 'echarts/charts';
import { ComposeOption } from 'echarts/core';
import { computePercentage } from '../utils';

export type BarChartOptions = ComposeOption<BarSeriesOption | ChartCommonOption>;

/**
 * 自定义的一些配置api
 */
export interface KsgBarOptions extends Option {
  percentage?: boolean; //开启百分比
}

export interface BarOptions extends Option {
  data?: KsgChartsData;
  option?: KsgBarOptions;
}

export default function useBarChart() {
  const option = ref<Option | undefined>(undefined);

  // 配置数据集
  function getDataset(props: BarOptions, isRowBar: boolean) {
    const { dataset, dimensions } = useComputeDataset(props.data);
    const keys = dimensions.slice(1, dimensions.length);
    // 开启百分比模式
    let data = props.data;
    const percentage = props.option?.percentage;
    if (percentage) {
      data = data.map((item) => {
        const sum = keys.reduce(
          (acc: number, cur: keyof typeof item) => acc + parseFloat(item[cur]),
          0
        );
        keys.forEach((it: keyof typeof item) => {
          item[it] = computePercentage(item[it], sum);
        });
        return item;
      });
    }
    if (isRowBar) {
      data = data.map((item) => {
        const reverseKeys = dimensions.reverse();
        const newItem = {};
        reverseKeys.forEach((key: string) => {
          Reflect.set(newItem, key, get(item, key));
        });
        return newItem;
      });
    }
    return { ...dataset, source: data };
  }

  function getSeries(props: BarOptions, isRowBar: boolean) {
    let series: Array<BarChartOptions> = [];
    const dimensions = useComputeDataset(props.data)?.dimensions;
    const seriesDim = isRowBar
      ? dimensions.slice(0, dimensions.length - 1)
      : dimensions.slice(1, dimensions.length);
    series = seriesDim.map((item, idx) => {
      const seriesItem = props?.option?.series?.[idx] || props?.option?.series || {};
      return merge(
        {
          type: 'bar',
          name: item
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

  function getMeatAxis() {
    return {
      type: 'category',
      axisLine: {
        show: true
      }
    };
  }

  function getDimAxis() {
    return {
      type: 'value',
      axisLine: {
        show: true
      }
    };
  }

  function getGrid(isRowBar: boolean) {
    return isRowBar
      ? {
          right: 30,
          left: 30,
          containLabel: true
        }
      : {};
  }

  function setOptions(props: BarOptions) {
    // 判断坐标方向
    const direction = props.option?.direction || 'column';
    const isRowBar = direction !== 'column' && direction === 'row';
    const mergeOption = merge(
      {
        // 声明一个 X 轴，类目轴（category）。默认情况下，类目轴对应到 dataset 第一列。
        xAxis: isRowBar ? getDimAxis() : getMeatAxis(),
        // 声明一个 Y 轴，数值轴。
        yAxis: isRowBar ? getMeatAxis() : getDimAxis(),
        dataset: getDataset(props, isRowBar),
        series: getSeries(props, isRowBar),
        tooltip: getTooltip(),
        grid: getGrid(isRowBar)
      },
      props.option
    );
    option.value = mergeOption;
  }

  return { option, setOptions };
}
