import { defineComponent as p, createVNode as i, mergeProps as n } from "vue";
import { KsgBaseChart as t } from "../../base/index.js";
import f from "./computed.js";
import { useWatchChartData as u } from "../../hook/useWatchChartData.js";
import { install as d } from "../../node_modules/echarts/lib/chart/pie/install.js";
import { use as l } from "../../node_modules/echarts/lib/extension.js";
l([d]);
const x = /* @__PURE__ */ p({
  name: "KsgPieChart",
  extends: t,
  props: {
    data: Array
  },
  setup(e, {
    slots: o,
    expose: a,
    attrs: m
  }) {
    const [r, s] = u(f, e, a);
    return console.log(r.value), () => i(t, n(m, {
      ref: s
    }, e, {
      option: r.value
    }), o);
  }
});
export {
  x as default
};
