import { merge as e } from "lodash-es";
import { ref as n, watchEffect as c } from "vue";
function m(r, t) {
  const o = n();
  return c(() => {
    const a = new r(t).getChartOption();
    o.value = e(a, t.option);
  }), o;
}
export {
  m as useWatchChartData
};
