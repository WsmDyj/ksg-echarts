import { PropType, defineComponent } from 'vue';
import { KsgBaseChart } from '../../base';
import { LineChart } from 'echarts/charts';
import { use } from 'echarts/core';
import { KsgChartsData } from '../../types';
import LineComputed from './computed';
import { useWatchChartData } from '../../hook/useWatchChartData';
import { GridComponent } from 'echarts/components';

use([LineChart, GridComponent]);

export default defineComponent({
  name: 'KsgLineChart',
  extends: KsgBaseChart,
  props: {
    data: Array as PropType<KsgChartsData>
  },
  setup(props, { slots, expose, attrs }) {
    const [mergedOption, ksgBaseChartRef] = useWatchChartData(LineComputed, props, expose);
    return () => (
      <KsgBaseChart
        {...attrs}
        ref={ksgBaseChartRef}
        v-slots={slots}
        {...props}
        option={mergedOption.value}
      />
    );
  }
});