import { openBlock as r, createElementBlock as s } from "vue";
const _ = (o, n) => {
  const c = o.__vccOpts || o;
  for (const [t, e] of n)
    c[t] = e;
  return c;
}, l = {};
function a(o, n) {
  return r(), s("div", null, " 123123123 ");
}
const f = /* @__PURE__ */ _(l, [["render", a]]), p = [f], m = (o) => {
  p.forEach((n) => {
    console.log(n), o.component(n.__name, n);
  });
}, u = {
  install: m
};
export {
  u as default,
  f as tempPc
};
