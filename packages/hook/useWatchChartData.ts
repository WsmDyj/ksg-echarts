/*
 * @Author: wusimin 
 * @Date: 2024-06-26 20:20:42
 * @LastEditors: wusimin 
 * @LastEditTime: 2024-07-02 14:32:04
 * @FilePath: /kwaida/packages/kwaida-charts/packages/hook/useCharthandle.ts
 * @Description: 监听数据变化
 */
import { merge } from 'lodash-es';
import { ref, watchEffect } from 'vue';

export function useWatchChartData(PieHelper, props) {
  const chartOption = ref();

  watchEffect(() => {
    const chart = new PieHelper(props);
    const baseOption = chart.getChartOption();
    chartOption.value = merge(baseOption, props.option);
  })

  return chartOption;
}