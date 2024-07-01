import { defineComponent as o, createVNode as a, mergeProps as m } from "vue";
import { KsgBaseChart as r } from "../../base/index.js";
import p from "./helper.js";
import { useWatchChartData as i } from "../../hook/useWatchChartData.js";
import { install as n } from "../../node_modules/echarts/lib/chart/pie/install.js";
import { use as s } from "../../node_modules/echarts/lib/extension.js";
s([n]);
const C = /* @__PURE__ */ o({
  name: "KsgPieChart",
  extends: r,
  props: {
    data: [Object, Array]
  },
  setup(e) {
    const t = i(p, e);
    return () => a(r, m(e, {
      option: t.value
    }), null);
  }
});
export {
  C as default
};
