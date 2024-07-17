/*
 * @Author: wusimin 
 * @Date: 2024-06-26 20:20:42
 * @LastEditors: wusimin wusimin@kuaishou.com
 * @LastEditTime: 2024-07-17 17:53:12
 * @FilePath: /kwaida/packages/kwaida-charts/packages/hook/useCharthandle.ts
 * @Description: 监听数据变化
 */
import { merge } from 'lodash-es';
import { ref, watchEffect, shallowRef } from 'vue';
import { KsgBaseChart } from '../base';
import { KsgBaseChartExpose } from '../base/chart';

export function useWatchChartData(expose) {
  const ksgBaseChartRef = shallowRef<InstanceType<typeof KsgBaseChart> & KsgBaseChartExpose>();
  
  expose({
    getInstance: () => ksgBaseChartRef.value?.getInstance()
  });
  return [ksgBaseChartRef];
}