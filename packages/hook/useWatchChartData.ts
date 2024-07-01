/*
 * @Author: wusimin wusimin@kuaishou.com
 * @Date: 2024-06-26 20:20:42
 * @LastEditors: wusimin wusimin@kuaishou.com
 * @LastEditTime: 2024-07-01 11:56:36
 * @FilePath: /kwaida/packages/kwaida-charts/packages/hook/useCharthandle.ts
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
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