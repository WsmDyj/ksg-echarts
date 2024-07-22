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
      elRef.value?.getInstance()?.setOption(merge(previous, option));
    })
  }
  return {setOptions}
}