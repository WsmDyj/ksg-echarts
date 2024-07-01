var g = Object.defineProperty;
var l = (e, t, s) => t in e ? g(e, t, { enumerable: !0, configurable: !0, writable: !0, value: s }) : e[t] = s;
var r = (e, t, s) => (l(e, typeof t != "symbol" ? t + "" : t, s), s);
import { getDataset as h } from "../../utils.js";
class m {
  constructor(t) {
    r(this, "$props");
    r(this, "data");
    r(this, "option");
    this.$props = t, this.data = this.$props.data, this.option = this.$props.option;
  }
  // 配置数据集
  getPieDataset() {
    const t = [], s = this.data, i = this.option;
    if (!Array.isArray(s))
      t.push(h(s, i, { chartType: "pie" }));
    else if (Array.isArray(s) && s.length > 1)
      for (const o of s)
        t.push(h(o, i, { chartType: "pie" }));
    return t;
  }
  getPieSeries() {
    var i, o;
    let t = [];
    const s = ((i = this.option) == null ? void 0 : i.variant) === "donut";
    return t = (o = this.data) == null ? void 0 : o.measures.map(({ name: c }, u) => {
      var a, p, n;
      const d = ((n = (p = (a = this.$props) == null ? void 0 : a.option) == null ? void 0 : p.series) == null ? void 0 : n[u]) || {};
      return {
        type: "pie",
        name: c,
        radius: s ? ["35%", "60%"] : [0, "60%"],
        ...d
      };
    }), t;
  }
  getChartOption() {
    return {
      dataset: this.getPieDataset(),
      series: this.getPieSeries(),
      ...this.option
    };
  }
}
export {
  m as default
};
