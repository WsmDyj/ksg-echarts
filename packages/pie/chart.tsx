import { PieChart } from 'echarts/charts';
import { use } from 'echarts/core';
import { PropType, defineComponent, shallowRef, watch, unref } from 'vue';
import { KsgBaseChart } from '../base';
import { KsgChartsData } from '../types';
import usePieChart from './usePieChart';
import { KsgBaseChartExpose } from '../base/chart';

export default defineComponent({
  name: 'KsgPieChart',
  extends: KsgBaseChart,
  props: {
    variant: String as PropType<'pie' | 'donut'>,
    data: Array as PropType<KsgChartsData>
  },
  setup(props, { slots, expose, attrs }) {
    use([PieChart]);
    const ksgBaseChartRef = shallowRef<InstanceType<typeof KsgBaseChart> & KsgBaseChartExpose>();
    const { option, initOptions } = usePieChart();

    watch(
      () => props,
      () => {
        initOptions(props);
      },
      { immediate: true, deep: true }
    );

    expose({
      getInstance: () => ksgBaseChartRef.value?.getInstance(),
      getOptions: () => unref(option)
    });

    return () => (
      <KsgBaseChart
        {...attrs}
        {...props}
        ref={ksgBaseChartRef}
        v-slots={slots}
        option={option.value}
      />
    );
  }
});
