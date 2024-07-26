import { PieChart } from 'echarts/charts';
import { use } from 'echarts/core';
import { PropType, defineComponent, h } from 'vue';
import { basicProps, KsgBaseChart } from '../base';
import { KsgChartsData } from '../types';
import usePieChart from './usePieChart';
import useBaseChart from '../base/hooks/useBaseChart';

export default defineComponent({
  name: 'KsgPieChart',
  props: {
    ...basicProps,
    data: Array as PropType<KsgChartsData>
  },
  setup() {
    use([PieChart]);
    const { ksgBaseChartRef, options } = useBaseChart(usePieChart);
    return {
      ksgBaseChartRef,
      options,
    };
  },
  render() {
    const attrs = {
      ...this.options,
      ref: (el) => this.ksgBaseChartRef = el
    };
    return h(KsgBaseChart, attrs);
  }
});
