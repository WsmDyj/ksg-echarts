/*
 * @Author: wusimin 
 * @Date: 2024-06-26 20:20:42
 * @LastEditors: wusimin wusimin@kuaishou.com
 * @LastEditTime: 2024-07-03 17:12:12
 * @FilePath: /kwaida/packages/kwaida-charts/packages/hook/useCharthandle.ts
 * @Description: 监听数据变化
 */
import { merge } from 'lodash-es';
import { ref, watchEffect, shallowRef } from 'vue';
import { KsgBaseChart } from '../base';
import { KsgBaseChartExpose } from '../base/chart';

export function useWatchChartData(PieHelper, props, expose) {
  const chartOption = ref();
  const ksgBaseChartRef = shallowRef<InstanceType<typeof KsgBaseChart> & KsgBaseChartExpose>();
  watchEffect(() => {
    const chart = new PieHelper(props);
    const baseOption = chart.getChartOption();
    chartOption.value = merge(baseOption, props.option);
  });

  expose({
    getInstance: () => ksgBaseChartRef.value?.getInstance()
  });
  return [chartOption, ksgBaseChartRef];
}