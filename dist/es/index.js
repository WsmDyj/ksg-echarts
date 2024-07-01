import { PieChart as o } from "./pie/index.js";
const a = [o], e = (n) => {
  a.forEach((t) => {
    n.component(t.name, t);
  });
}, r = {
  install: e,
  KsgPieChart: o
};
export {
  o as PieChart,
  r as default
};
