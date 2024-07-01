import { KsgPieChart as s } from "./pie/index.js";
import { KsgBaseChart as a } from "./base/index.js";
const n = [s, a], r = (t) => {
  n.forEach((o) => {
    t.component(o.name, o);
  });
}, c = {
  install: r
};
export {
  a as KsgBaseChart,
  s as KsgPieChart,
  c as default
};
