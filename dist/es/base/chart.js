import { defineComponent as m, computed as p, createVNode as a, resolveComponent as s, mergeProps as u } from "vue";
import c from "../node_modules/vue-echarts/dist/index.esm.min.js";
import { loadingProps as f } from "../composables/loading.js";
import { autoresizeProps as g } from "../composables/autoresize.js";
import { merge as o } from "lodash-es";
import { use as d } from "../node_modules/echarts/lib/extension.js";
import { install as h } from "../node_modules/echarts/lib/renderer/installCanvasRenderer.js";
import { install as b } from "../node_modules/echarts/lib/component/dataset/install.js";
import { install as O } from "../node_modules/echarts/lib/component/transform/install.js";
import { install as C } from "../node_modules/echarts/lib/component/title/install.js";
import { install as $ } from "../node_modules/echarts/lib/component/tooltip/install.js";
import { install as j } from "../node_modules/echarts/lib/component/legend/install.js";
d([h, b, O, C, $, j]);
const N = /* @__PURE__ */ m({
  components: {
    VChart: c
  },
  name: "BaseChart",
  props: {
    option: Object,
    theme: {
      type: [Object, String]
    },
    initOptions: Object,
    updateOptions: Object,
    group: String,
    manualUpdate: Boolean,
    ...g,
    ...f
  },
  setup(t) {
    const e = p(() => {
      const {
        legend: r = {},
        tooltip: i = {}
      } = t.option, n = {
        type: "scroll",
        orient: "horizontal",
        bottom: "bottom"
      }, l = {
        trigger: "item",
        confine: !0
      };
      return {
        ...t.option,
        legend: o(n, r),
        tooltip: o(l, i)
      };
    });
    return () => a(s("v-chart"), u({
      style: {
        height: "100%",
        width: "100%"
      },
      "update-options": {
        notMerge: !0
      }
    }, t, {
      option: e.value,
      autoresize: !0
    }), null);
  }
});
export {
  N as default
};
