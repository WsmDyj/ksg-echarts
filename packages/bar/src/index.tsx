import { PropType, defineComponent } from 'vue';
import { KsgBaseChart } from '../../base';
import { BarChart } from 'echarts/charts';
import { use } from 'echarts/core';
import { KsgChartsData } from '../../types';
import BarComputed from './computed';
import { useWatchChartData } from '../../hook/useWatchChartData';
import { GridComponent } from 'echarts/components';

use([BarChart, GridComponent]);

export default defineComponent({
  name: 'KsgBarChart',
  extends: KsgBaseChart,
  props: {
    data: Array as PropType<KsgChartsData>
  },
  setup(props, { slots, expose, attrs }) {
    const [mergedOption, ksgBaseChartRef] = useWatchChartData(BarComputed, props, expose);
    return () => (
      <KsgBaseChart {...attrs} ref={ksgBaseChartRef} v-slots={slots} {...props} option={mergedOption.value} />
    );
  }
});