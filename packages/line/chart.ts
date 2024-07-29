import { PropType, defineComponent, h, } from 'vue';
import { LineChart } from 'echarts/charts';
import { use } from 'echarts/core';
import { GridComponent } from 'echarts/components';

import { KsgBaseChart, basicProps } from '../base';
import { KsgChartsData } from '../types';
import { useLineChart} from './useLineChart';
import useBaseChart from '../base/hooks/useBaseChart';

export default defineComponent({
  name: 'KsgLineChart',
  props: {
    ...basicProps,
    data: Array as PropType<KsgChartsData>
  },
  setup() {
    use([LineChart, GridComponent]);
    const { ksgBaseChartRef, options } = useBaseChart(useLineChart);
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
    return h(KsgBaseChart, attrs, this.$slots.default);
  }
});
