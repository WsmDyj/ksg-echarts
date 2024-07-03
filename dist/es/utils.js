import { isRef as r, unref as o } from "vue";
const c = (e) => {
  const n = e;
  return n.install = (t) => {
    t.component(n.name, n);
  }, n;
};
function s(e, n) {
  const t = r(e) ? o(e) : e;
  return t && typeof t == "object" && "value" in t ? t.value || n : t || n;
}
export {
  s as unwrapInjected,
  c as withInstall
};
