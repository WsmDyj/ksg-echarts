/*
 * @Author: wusimin 
 * @Date: 2024-07-02 18:58:00
 * @LastEditors: wusimin wusimin@kuaishou.com
 * @LastEditTime: 2024-07-03 17:53:50
 * @FilePath: /ksg-echarts/packages/bar/src/index.tsx
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
import { PropType, defineComponent, shallowRef } from 'vue';
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