/*
 * @Author: wusimin wusimin@kuaishou.com
 * @Date: 2024-06-26 15:49:20
 * @LastEditors: wusimin wusimin@kuaishou.com
 * @LastEditTime: 2024-06-29 22:30:07
 * @FilePath: /kwaida/packages/kwaida-charts/packages/bar/src/index.tsx
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
import { PropType, defineComponent } from 'vue';
import { BaseChart } from '../../base';
import { PieChart } from 'echarts/charts';
import { use } from 'echarts/core';
import { KsgChartsData } from '../../types';
import PieHelper from './helper';
import { useWatchChartData } from '../../hook/useWatchChartData';

use([PieChart]);

export default defineComponent({
  name: 'KsgPieChart',
  extends: BaseChart,
  props: {
    data: [Object, Array] as PropType<KsgChartsData>,
  },
  setup(props) {
    const mergedOption = useWatchChartData(PieHelper, props);
    return () => (
      <>
        <BaseChart {...props} option={mergedOption.value} />
      </>
    );
  }
});