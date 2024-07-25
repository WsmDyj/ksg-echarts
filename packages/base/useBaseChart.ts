import { shallowRef, unref, watch, computed } from 'vue';
import KsgBaseChart from ".";
import { KsgBaseChartExpose } from "./chart";

export default function useBaseChart(props, ctx, chartHook) {
  const ksgBaseChartRef = shallowRef<InstanceType<typeof KsgBaseChart> & KsgBaseChartExpose>();
  const { option, initOptions } = chartHook();
  watch(
    () => props,
    () => {
      initOptions(props);
    },
    { immediate: true, deep: true }
  );

   const options = computed(() => {
     return {
       ...ctx.attrs,
       ...props,
       option: unref(option)
     };
   });
  
  ctx.expose({
    getInstance: () => ksgBaseChartRef.value?.getInstance(),
    getOptions: () => unref(option)
  });
  return {
    ksgBaseChartRef,
    options
  };
}