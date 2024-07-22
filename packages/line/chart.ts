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
    const { ksgBaseChartRef, option } = useBaseChart(props, ctx, useLineChart);

    // return () => (
    //   <KsgBaseChart
    //     {...ctx.attrs}
    //     {...props}
    //     ref={ksgBaseChartRef}
    //     v-slots={ctx.slots}
    //     option={option.value}
    //   />
    // );
    return {
      ksgBaseChartRef, option
    }
  },
  render() {
    return h('KsgBaseChart', { 
      ...this.ctx.attrs, 
      ...this.props,
      option:this.option, 
      ref: this.ksgBaseChartRef 
    });
  }
});
