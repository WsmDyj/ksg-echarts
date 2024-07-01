import { ref as c, watchEffect as r } from "vue";
function i(n, t) {
  const a = c();
  return r(() => {
    const o = new n(t).getChartOption();
    a.value = { ...o, ...t.option };
  }), a;
}
export {
  i as useWatchChartData
};
