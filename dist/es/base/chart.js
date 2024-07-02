import { defineComponent as p, computed as m, createVNode as s, resolveComponent as a } from "vue";
import u from "../node_modules/vue-echarts/dist/index.esm.min.js";
import { loadingProps as c } from "../composables/loading.js";
import { autoresizeProps as f } from "../composables/autoresize.js";
import { merge as o } from "lodash-es";
import { use as g } from "../node_modules/echarts/lib/extension.js";
import { install as d } from "../node_modules/echarts/lib/renderer/installCanvasRenderer.js";
import { install as h } from "../node_modules/echarts/lib/component/dataset/install.js";
import { install as O } from "../node_modules/echarts/lib/component/transform/install.js";
import { install as b } from "../node_modules/echarts/lib/component/title/install.js";
import { install as C } from "../node_modules/echarts/lib/component/tooltip/install.js";
import { install as $ } from "../node_modules/echarts/lib/component/legend/install.js";
const K = /* @__PURE__ */ p({
  components: {
    VChart: u
  },
  name: "KsgBaseChart",
  props: {
    option: Object,
    theme: {
      type: [Object, String]
    },
    initOptions: Object,
    updateOptions: Object,
    group: String,
    manualUpdate: Boolean,
    ...f,
    ...c
  },
  setup(t) {
    g([d, h, O, b, C, $]);
    const e = m(() => {
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
        autoresize: !0,
        updateOptions: {
          notMerge: !0
        },
        ...t.option,
        legend: o(n, r),
        tooltip: o(l, i)
      };
    });
    return () => s(a("v-chart"), {
      style: {
        height: "100%",
        width: "100%"
      },
      option: e.value
    }, null);
  }
});
export {
  K as default
};
