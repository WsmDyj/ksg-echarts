import "./index.css.js";
import { KsgBaseChart as t } from "./base/index.js";
import { INIT_OPTIONS_KEY as I, LOADING_OPTIONS_KEY as P, PALETTE_KEY as c, THEME_KEY as h, UPDATE_OPTIONS_KEY as N } from "./base/index.js";
import { KsgBarChart as m } from "./bar/index.js";
import { KsgPieChart as a } from "./pie/index.js";
import { KsgLineChart as s } from "./line/index.js";
const E = [a, s, t, m], e = (r) => {
  E.forEach((o) => {
    r.component(o.name, o);
  });
}, _ = {
  install: e
};
export {
  I as INIT_OPTIONS_KEY,
  m as KsgBarChart,
  t as KsgBaseChart,
  a as KsgPieChart,
  P as LOADING_OPTIONS_KEY,
  c as PALETTE_KEY,
  h as THEME_KEY,
  N as UPDATE_OPTIONS_KEY,
  _ as default
};
