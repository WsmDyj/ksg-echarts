var g = Object.defineProperty;
var f = (e, t, s) => t in e ? g(e, t, { enumerable: !0, configurable: !0, writable: !0, value: s }) : e[t] = s;
var o = (e, t, s) => (f(e, typeof t != "symbol" ? t + "" : t, s), s);
import { getDataset as u } from "../../utils.js";
import { merge as l } from "lodash-es";
class D {
  constructor(t) {
    o(this, "$props");
    o(this, "data");
    o(this, "option");
    this.$props = t, this.data = this.$props.data, this.option = this.$props.option;
  }
  // 配置数据集
  getPieDataset() {
    const t = [], s = this.data, i = this.option;
    if (!Array.isArray(s))
      t.push(u(s, i, { chartType: "pie" }));
    else if (Array.isArray(s) && s.length > 1)
      for (const r of s)
        t.push(u(r, i, { chartType: "pie" }));
    return t;
  }
  getPieSeries() {
    var i, r;
    let t = [];
    const s = ((i = this.option) == null ? void 0 : i.variant) === "donut";
    return t = (r = this.data) == null ? void 0 : r.measures.map(({ name: d }, m) => {
      var a, p, n, h, c;
      const y = Array.isArray((a = this == null ? void 0 : this.option) == null ? void 0 : a.series) ? (n = (p = this == null ? void 0 : this.option) == null ? void 0 : p.series) == null ? void 0 : n[m] : ((c = (h = this.$props) == null ? void 0 : h.option) == null ? void 0 : c.series) || {};
      return {
        type: "pie",
        name: d,
        radius: s ? ["35%", "60%"] : [0, "60%"],
        ...y
      };
    }), t;
  }
  getChartOption() {
    return l({
      dataset: this.getPieDataset(),
      series: this.getPieSeries()
    }, this.option);
  }
}
export {
  D as default
};
