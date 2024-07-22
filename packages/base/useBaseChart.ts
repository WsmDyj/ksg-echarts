import { shallowRef, unref, watch } from "vue";
import KsgBaseChart from ".";
import { KsgBaseChartExpose } from "./chart";

export default function useBaseChart(props, ctx, hook) {
  const ksgBaseChartRef = shallowRef<InstanceType<typeof KsgBaseChart> & KsgBaseChartExpose>();
  const { option, initOptions } = hook();
  watch(
    () => props,
    () => {
      initOptions(props);
    },
    { immediate: true, deep: true }
  );

  ctx.expose({
    getInstance: () => ksgBaseChartRef.value?.getInstance(),
    getOptions: () => unref(option)
  });

  return {
    ksgBaseChartRef,
    option
  };
}