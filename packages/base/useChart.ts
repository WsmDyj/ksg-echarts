import { nextTick } from 'vue';
import { Option } from '../types'
import { merge } from 'lodash-es'

export default function useChart(elRef?: any) {

  function setOptions(option: Option) {
    if (!elRef.value) {
      console.warn('get chart ref is error')
      return
    }
    nextTick(() => {
      const previous = elRef.value?.getOptions();
      // 计算series变成数组，方便统一设置多条数据
      if (option.series && !Array.isArray(option.series)) {
        option.series = new Array(previous.series?.length).fill(option.series);
      }
      elRef.value?.getInstance()?.setOption(merge(previous, option));
    })
  }
  return {setOptions}
}