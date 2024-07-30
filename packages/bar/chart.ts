import { BarChart } from 'echarts/charts';
import { use } from 'echarts/core';
import { PropType, defineComponent, h } from 'vue';
import { basicProps, KsgBaseChart } from '../base';
import { KsgChartsData } from '../types';
import useBarChart from './useBarChart';
import useBaseChart from '../base/hooks/useBaseChart';
import { GridComponent } from 'echarts/components';
export default defineComponent({
  name: 'KsgBarChart',
  props: {
    ...basicProps,
    data: Array as PropType<KsgChartsData>
  },
  setup() {
    use([BarChart, GridComponent]);
    const { ksgBaseChartRef, options } = useBaseChart(useBarChart);
    return {
      ksgBaseChartRef,
      options
    };
  },
  render() {
    const attrs = {
      ...this.options,
      ref: (el) => (this.ksgBaseChartRef = el)
    };
    return h(KsgBaseChart, attrs, this.$slots.default);
  }
});
