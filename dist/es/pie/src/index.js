import { defineComponent as a, createVNode as r, Fragment as m, mergeProps as n } from "vue";
import { BaseChart as t } from "../../base/index.js";
import p from "./helper.js";
import { useWatchChartData as i } from "../../hook/useWatchChartData.js";
import { install as s } from "../../node_modules/echarts/lib/chart/pie/install.js";
import { use as l } from "../../node_modules/echarts/lib/extension.js";
l([s]);
const g = /* @__PURE__ */ a({
  name: "KsgPieChart",
  extends: t,
  props: {
    data: [Object, Array]
  },
  setup(e) {
    const o = i(p, e);
    return () => r(m, null, [r(t, n(e, {
      option: o.value
    }), null)]);
  }
});
export {
  g as default
};
