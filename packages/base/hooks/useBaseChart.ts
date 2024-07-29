import {
  shallowRef,
  unref,
  ref, computed,
  getCurrentInstance,
  ComponentInternalInstance,
  watch
} from 'vue';
import { KsgBaseChartExpose } from "../chart";
import KsgBaseChart from '..';
import { Option } from '../../types'
import { merge } from 'lodash-es';

export default function useBaseChart(assemblyHook) {
  const instance = getCurrentInstance() as ComponentInternalInstance;
  if (!instance || !assemblyHook) return {};
  // 初始化静态配置
  const initOption = ref<Option | null>(null);

  const ksgBaseChartRef = shallowRef<InstanceType<typeof KsgBaseChart> & KsgBaseChartExpose>();
  const { option, setOptions } = assemblyHook();

  watch(() => instance.props, () => {
    setOptions(merge({ option: initOption.value }, instance.props));
  }, { deep: true, immediate: true});

  const options = computed(() => {
    return {
      ...instance.attrs,
      ...instance.props,
      option: unref(option)
    };
  });

  // Mount the method onto the instance and expose it to the public
  if (instance.proxy) {
    Object.assign(instance.proxy, {
      getInstance: () => ksgBaseChartRef.value?.getInstance(),
      getOptions: () => unref(option),
      setOptions: (config) => setOptions(config),
      setInitOptions: (option) => (initOption.value = option)
    });
  }
  
  return {
    ksgBaseChartRef,
    options
  };
}