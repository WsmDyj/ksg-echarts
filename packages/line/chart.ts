import { PropType, defineComponent, h } from 'vue';
import { KsgBaseChart } from '../base';
import { LineChart } from 'echarts/charts';
import { use } from 'echarts/core';
import { KsgChartsData } from '../types';
import { GridComponent } from 'echarts/components';
import useLineChart from './useLineChart';
import useBaseChart from '../base/useBaseChart';

export default defineComponent({
  name: 'KsgLineChart',
  extends: KsgBaseChart,
  props: {
    data: Array as PropType<KsgChartsData>
  },
  setup(props, ctx) {
    use([LineChart, GridComponent]);
    const { ksgBaseChartRef, options } = useBaseChart(props, ctx, useLineChart);
    return { ksgBaseChartRef, options };
  },
  render() {
    return h(KsgBaseChart, {
      ...this.options,
      ref: el => this.ksgBaseChartRef = el
    });
  }
});
