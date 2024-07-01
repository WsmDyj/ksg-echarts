import { cloneDeep as E, zip as I, sum as K, round as M } from "lodash-es";
const T = (r) => {
  const m = r;
  return m.install = (a) => {
    a.component(m.name, m);
  }, m;
}, y = (r) => !isNaN(parseFloat(r)) && isFinite(r) && Number(r) === r, V = (r, m, a) => {
  var A, z, l;
  const e = E(r);
  if (!e)
    return;
  const c = Array.isArray(e == null ? void 0 : e.dimensions) ? "" : e == null ? void 0 : e.dimensions.name, i = Array.isArray(e == null ? void 0 : e.dimensions) ? [] : (A = e == null ? void 0 : e.dimensions) == null ? void 0 : A.data, o = (m == null ? void 0 : m.stack) || null, N = (m == null ? void 0 : m.percentage) || !1;
  if (!(a != null && a.isEmptyData) && i === void 0)
    return;
  const F = `${c}`, $ = i.length > 0 && i[0], j = y($) && (a == null ? void 0 : a.chartType) === "pie" ? i.map((s, t) => t === 0 ? `${s}` : s) : i, k = {
    [F]: j
  }, b = {};
  let f = [];
  if (o && N && (e == null ? void 0 : e.measures.length) > 0) {
    const s = e == null ? void 0 : e.measures.map((d) => d.data);
    f = I(...s).map((d) => {
      const p = d.map((n) => y(n) ? n : parseFloat(n));
      return K(p);
    });
  }
  (z = e == null ? void 0 : e.measures) == null || z.map((s) => {
    const d = y(s.name) ? `${s.name} ` : s.name;
    Object.assign(b, {
      [d]: o && N ? s.data.map((p, n) => M(p / f[n], 4)) : s.data
    });
  });
  let u = [];
  const O = c === void 0 ? "dimension" : c;
  u.push(O), u = [...u, ...(l = e == null ? void 0 : e.measures) == null ? void 0 : l.map((s) => s.name)];
  const x = Object.assign({}, k, b), h = {
    dimensions: u,
    source: x
  };
  return console.log(h), h;
};
export {
  V as getDataset,
  T as withInstall
};
