import { nextTick, Ref, watchEffect } from 'vue';
import { KsgChartsData, Option } from '../../types'
import { merge } from 'lodash-es'

 interface UseKsgChart {
   setChartData: (data: KsgChartsData) => void;
   setOptions: (option: Option) => void;
 }

export default function useKsgChart(elRef: Ref<any>, option?: Option): UseKsgChart {
  
  watchEffect(() => {
    if (option && elRef.value) {
      nextTick(() => {
        const previousOpt = elRef.value?.getOptions();
        elRef.value?.setInitOptions(merge(previousOpt, option));
      });
    }
  });
  
  function setChartData(data: KsgChartsData) {
    if (!elRef.value) {
      console.warn('get chart ref is error');
      return;
    }
    nextTick(() => {
      const previousOpt = elRef.value?.getOptions();
      elRef.value?.setOptions(merge(previousOpt, { data, option }));
    });
  }

  function setOptions(option: Option) {
    if (!elRef.value) {
      console.warn('get chart ref is error');
      return;
    }
    nextTick(() => {
      const previousOpt = elRef.value?.getOptions();
      // 计算series变成数组，方便统一设置多条数据
      if (option.series && !Array.isArray(option.series) && Array.isArray(previousOpt.series)) {
        option.series = new Array(previousOpt.series?.length).fill(option.series);
      }
      elRef.value?.getInstance()?.setOption(merge(previousOpt, option));
    });
  }
  return { setOptions, setChartData };
}