import { merge as s } from "lodash-es";
import { ref as h, shallowRef as f, watchEffect as i } from "vue";
function p(o, e, r) {
  const a = h(), n = f();
  return i(() => {
    const c = new o(e).getChartOption();
    a.value = s(c, e.option);
  }), r({
    getInstance: () => {
      var t;
      return (t = n.value) == null ? void 0 : t.getInstance();
    }
  }), [a, n];
}
export {
  p as useWatchChartData
};
