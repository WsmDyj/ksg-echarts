import { defineComponent as v, ref as y, inject as w, computed as l, shallowRef as $, createVNode as a, resolveComponent as x, mergeProps as C } from "vue";
import P from "../node_modules/vue-echarts/dist/index.esm.min.js";
import { isArray as T, merge as b, isNumber as u } from "lodash-es";
import E from "./emptyData.js";
import { basicProps as z } from "./props.js";
import { unwrapInjected as A } from "../utils.js";
import { PALETTE_KEY as R } from "./index.js";
import { use as j } from "../node_modules/echarts/lib/extension.js";
import { install as D } from "../node_modules/echarts/lib/renderer/installCanvasRenderer.js";
import { install as H } from "../node_modules/echarts/lib/component/dataset/install.js";
import { install as I } from "../node_modules/echarts/lib/component/transform/install.js";
import { install as K } from "../node_modules/echarts/lib/component/title/install.js";
import { install as N } from "../node_modules/echarts/lib/component/tooltip/install.js";
import { install as O } from "../node_modules/echarts/lib/component/legend/install.js";
j([D, H, I, K, N, O]);
const W = /* @__PURE__ */ v({
  components: {
    VChart: P
  },
  name: "KsgBaseChart",
  inheritAttrs: !1,
  props: z,
  setup(t, {
    slots: n,
    expose: c,
    attrs: f
  }) {
    const i = y(!0), h = w(R, null), o = l(() => t.palette || A(h, null)), d = l(() => {
      var m;
      const {
        legend: e = {}
      } = t.option, p = {
        type: "scroll",
        orient: "horizontal",
        bottom: "bottom"
      };
      i.value = T(t.option.dataset) ? !0 : !!((m = t.option.dataset.source) != null && m.length), console.log(o.value);
      const s = {
        ...t.option,
        legend: b(p, e)
      };
      return o.value && Reflect.set(s, "color", o.value), s;
    }), r = $(), g = l(() => ({
      height: u(t.height) ? `${t.height}px` : t.height,
      width: u(t.width) ? `${t.width}px` : t.width
    }));
    return c({
      getInstance: () => {
        var e;
        return (e = r.value) == null ? void 0 : e.chart;
      }
    }), () => a("div", {
      style: g.value,
      class: "ksgchart"
    }, [!i.value && !t.loading ? n.default ? n.default() : a(E, {
      emptyText: t.emptyText
    }, null) : a(x("v-chart"), C({
      updateOptions: {
        notMerge: !0
      }
    }, t, f, {
      ref: r,
      style: {
        height: "100%",
        width: "100%"
      },
      autoresize: t.autoresize,
      option: d.value,
      "init-options": {
        renderer: "svg"
      }
    }), null)]);
  }
});
export {
  W as default
};
