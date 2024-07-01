import { defineComponent as o, createVNode as r, resolveComponent as e, mergeProps as i } from "vue";
import a from "../node_modules/vue-echarts/dist/index.esm.min.js";
import { loadingProps as n } from "../composables/loading.js";
import { autoresizeProps as s } from "../composables/autoresize.js";
import { use as l } from "../node_modules/echarts/lib/extension.js";
import { install as p } from "../node_modules/echarts/lib/renderer/installCanvasRenderer.js";
import { install as m } from "../node_modules/echarts/lib/component/dataset/install.js";
import { install as f } from "../node_modules/echarts/lib/component/transform/install.js";
import { install as u } from "../node_modules/echarts/lib/component/title/install.js";
import { install as c } from "../node_modules/echarts/lib/component/tooltip/install.js";
import { install as h } from "../node_modules/echarts/lib/component/legend/install.js";
l([p, m, f, u, c, h]);
const B = /* @__PURE__ */ o({
  components: {
    VChart: a
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
    ...s,
    ...n
  },
  setup(t) {
    return () => r(e("v-chart"), i({
      style: {
        height: "100vh"
      },
      "update-options": {
        notMerge: !0
      }
    }, t, {
      autoresize: !0
    }), null);
  }
});
export {
  B as default
};
