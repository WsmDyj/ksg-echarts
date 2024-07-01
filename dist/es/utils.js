import { cloneDeep as x, zip as E, sum as I, round as K } from "lodash-es";
const T = (r) => {
  const m = r;
  return m.install = (a) => {
    a.component(m.name, m);
  }, m;
}, y = (r) => !isNaN(parseFloat(r)) && isFinite(r) && Number(r) === r, V = (r, m, a) => {
  var o, A, z;
  const e = x(r);
  if (!e)
    return;
  const t = Array.isArray(e == null ? void 0 : e.dimensions) ? "" : e == null ? void 0 : e.dimensions.name, i = Array.isArray(e == null ? void 0 : e.dimensions) ? [] : (o = e == null ? void 0 : e.dimensions) == null ? void 0 : o.data, N = (m == null ? void 0 : m.stack) || null, b = (m == null ? void 0 : m.percentage) || !1;
  if (!(a != null && a.isEmptyData) && i === void 0)
    return;
  const F = `${t}`, $ = i.length > 0 && i[0], j = y($) && (a == null ? void 0 : a.chartType) === "pie" ? i.map((s, c) => c === 0 ? `${s}` : s) : i, k = {
    [F]: j
  }, f = {};
  let h = [];
  if (N && b && (e == null ? void 0 : e.measures.length) > 0) {
    const s = e == null ? void 0 : e.measures.map((d) => d.data);
    h = E(...s).map((d) => {
      const p = d.map((n) => y(n) ? n : parseFloat(n));
      return I(p);
    });
  }
  (A = e == null ? void 0 : e.measures) == null || A.map((s) => {
    const d = y(s.name) ? `${s.name} ` : s.name;
    Object.assign(f, {
      [d]: N && b ? s.data.map((p, n) => K(p / h[n], 4)) : s.data
    });
  });
  let u = [];
  const O = t === void 0 ? "dimension" : t;
  u.push(O), u = [...u, ...(z = e == null ? void 0 : e.measures) == null ? void 0 : z.map((s) => s.name)];
  const l = Object.assign({}, k, f);
  return {
    dimensions: u,
    source: l
  };
};
export {
  V as getDataset,
  T as withInstall
};
