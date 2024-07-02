/*
 * @Author: wusimin 
 * @Date: 2024-06-26 20:20:42
 * @LastEditors: wusimin wusimin@kuaishou.com
 * @LastEditTime: 2024-07-03 05:30:15
 * @FilePath: /kwaida/packages/kwaida-charts/packages/hook/useCharthandle.ts
 * @Description: 监听数据变化
 */
import { merge } from 'lodash-es';
import { computed, ref, unref, watchEffect } from 'vue';

export function useWatchChartData(PieHelper, props) {
  const chartOption = ref();

  watchEffect(() => {
    const chart = new PieHelper(props);
    const baseOption = chart.getChartOption();
    chartOption.value = merge(baseOption, props.option);
  })

  const isHasData = computed(() => props.data && props.data.length);

  return { ...unref(chartOption.value), isHasData: isHasData.value };
}