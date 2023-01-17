import {
  _ as u,
  o as c,
  c as m,
  p as y,
  a as P,
  b as s,
  d as f,
  r as d,
  w as _,
  v as b,
  t as g,
  e as p,
  f as v,
  g as h,
} from "../chunks/vendor-bd802837.js";
const $ = { name: "FooterComponent" },
  w = (o) => (y("data-v-28a1cbd2"), (o = o()), P(), o),
  V = w(() =>
    s(
      "div",
      { class: "attribution fs-200" },
      [
        f(" Challenge by "),
        s(
          "a",
          { href: "https://www.frontendmentor.io?ref=challenge", target: "_blank" },
          "Frontend Mentor",
        ),
        f(". Coded by "),
        s("a", { href: "https://github.com/evrendev", target: "_blank" }, "Evren Yeniev"),
        f(". "),
      ],
      -1,
    ),
  ),
  k = [V];
function T(o, e, a, n, r, i) {
  return c(), m("footer", null, k);
}
const j = u($, [
    ["render", T],
    ["__scopeId", "data-v-28a1cbd2"],
  ]),
  F = {
    name: "HeaderComponent",
    setup() {
      let o = d(1);
      return {
        theme: o,
        changeTheme: () => {
          let a = document.querySelector("body");
          (a.className = ""), a.classList.add(`theme${o.value}`);
        },
      };
    },
  },
  K = { class: "flex justify-content-space-between align-items-flex-end" },
  E = s("div", null, [s("h1", { class: "fs-700" }, "calc")], -1),
  N = { class: "theme-changer flex align-items-flex-end" },
  S = s("h3", { class: "fs-200" }, "THEME", -1),
  D = { class: "option-group" },
  A = s(
    "div",
    { class: "labels flex justify-content-space-between" },
    [
      s("span", { class: "fs-200" }, "1"),
      s("span", { class: "fs-200" }, "2"),
      s("span", { class: "fs-200" }, "3"),
    ],
    -1,
  ),
  I = { class: "inputs flex justify-content-space-between" },
  B = s("label", { for: "theme1", class: "fs-200" }, null, -1),
  H = s("label", { for: "theme2", class: "fs-200" }, null, -1),
  M = s("label", { for: "theme3", class: "fs-200" }, null, -1);
function U(o, e, a, n, r, i) {
  return (
    c(),
    m("header", K, [
      E,
      s("div", null, [
        s("div", N, [
          S,
          s("div", D, [
            A,
            s("div", I, [
              _(
                s(
                  "input",
                  {
                    type: "radio",
                    name: "theme",
                    id: "theme1",
                    value: "1",
                    "onUpdate:modelValue": e[0] || (e[0] = (t) => (n.theme = t)),
                    onChange: e[1] || (e[1] = (...t) => n.changeTheme && n.changeTheme(...t)),
                  },
                  null,
                  544,
                ),
                [[b, n.theme]],
              ),
              B,
              _(
                s(
                  "input",
                  {
                    type: "radio",
                    name: "theme",
                    id: "theme2",
                    value: "2",
                    "onUpdate:modelValue": e[2] || (e[2] = (t) => (n.theme = t)),
                    onChange: e[3] || (e[3] = (...t) => n.changeTheme && n.changeTheme(...t)),
                  },
                  null,
                  544,
                ),
                [[b, n.theme]],
              ),
              H,
              _(
                s(
                  "input",
                  {
                    type: "radio",
                    name: "theme",
                    id: "theme3",
                    value: "3",
                    "onUpdate:modelValue": e[4] || (e[4] = (t) => (n.theme = t)),
                    onChange: e[5] || (e[5] = (...t) => n.changeTheme && n.changeTheme(...t)),
                  },
                  null,
                  544,
                ),
                [[b, n.theme]],
              ),
              M,
            ]),
          ]),
        ]),
      ]),
    ])
  );
}
const L = u(F, [["render", U]]),
  R = { name: "DisplayComponent", props: { display: { type: Number, value: null } } },
  q = { class: "display fs-900" };
function Y(o, e, a, n, r, i) {
  return c(), m("section", q, g(a.display), 1);
}
const z = u(R, [["render", Y]]),
  G = {
    name: "KeypadComponent",
    emits: ["numericValue", "processValue"],
    setup(o, { emit: e }) {
      return {
        processPressed: (r) => {
          e("processValue", r);
        },
        numPressed: (r) => {
          e("numericValue", r);
        },
      };
    },
  },
  J = { class: "keypad fs-800" },
  O = { class: "flex justify-content-space-between align-items-flex-center" },
  Q = { class: "flex justify-content-space-between align-items-flex-center" },
  W = { class: "flex justify-content-space-between align-items-flex-center" },
  X = { class: "flex justify-content-space-between align-items-flex-center" },
  Z = { class: "flex justify-content-space-between align-items-flex-center" };
function ee(o, e, a, n, r, i) {
  return (
    c(),
    m("section", J, [
      s("div", O, [
        s("button", { onClick: e[0] || (e[0] = (t) => n.numPressed(7)) }, "7"),
        s("button", { onClick: e[1] || (e[1] = (t) => n.numPressed(8)) }, "8"),
        s("button", { onClick: e[2] || (e[2] = (t) => n.numPressed(9)) }, "9"),
        s(
          "button",
          {
            onClick: e[3] || (e[3] = (t) => n.processPressed("del")),
            class: "fs-600 keys-200 text-200",
          },
          "DEL",
        ),
      ]),
      s("div", Q, [
        s("button", { onClick: e[4] || (e[4] = (t) => n.numPressed(4)) }, "4"),
        s("button", { onClick: e[5] || (e[5] = (t) => n.numPressed(5)) }, "5"),
        s("button", { onClick: e[6] || (e[6] = (t) => n.numPressed(6)) }, "6"),
        s("button", { onClick: e[7] || (e[7] = (t) => n.processPressed("+")) }, "+"),
      ]),
      s("div", W, [
        s("button", { onClick: e[8] || (e[8] = (t) => n.numPressed(1)) }, "1"),
        s("button", { onClick: e[9] || (e[9] = (t) => n.numPressed(2)) }, "2"),
        s("button", { onClick: e[10] || (e[10] = (t) => n.numPressed(3)) }, "3"),
        s("button", { onClick: e[11] || (e[11] = (t) => n.processPressed("-")) }, "-"),
      ]),
      s("div", X, [
        s("button", { onClick: e[12] || (e[12] = (t) => n.numPressed(".")) }, "."),
        s("button", { onClick: e[13] || (e[13] = (t) => n.numPressed(0)) }, "0"),
        s("button", { onClick: e[14] || (e[14] = (t) => n.processPressed("/")) }, "/"),
        s("button", { onClick: e[15] || (e[15] = (t) => n.processPressed("*")) }, "x"),
      ]),
      s("div", Z, [
        s(
          "button",
          {
            onClick: e[16] || (e[16] = (t) => n.processPressed("reset")),
            class: "w-2x fs-600 keys-200 text-200",
          },
          "RESET",
        ),
        s(
          "button",
          {
            onClick: e[17] || (e[17] = (t) => n.processPressed("=")),
            class: "w-2x fs-600 keys-400 text-400",
          },
          "=",
        ),
      ]),
    ])
  );
}
const ne = u(G, [["render", ee]]);
const se = {
  name: "App",
  components: { FooterComponent: j, HeaderComponent: L, DisplayComponent: z, KeypadComponent: ne },
  setup() {
    let o = d(0),
      e = d(0),
      a = d(null),
      n = d(0);
    const r = {
      "+": () => o.value + e.value,
      "-": () => o.value - e.value,
      "/": () => o.value / e.value,
      "*": () => o.value * e.value,
      "=": () => o.value,
    };
    return {
      numericKeyPressed: (l) => {
        a.value
          ? ((e.value = parseFloat(`${e.value}${l}`)), (n.value = e.value))
          : ((o.value = parseFloat(`${o.value}${l}`)), (n.value = o.value));
      },
      processKeyPressed: (l) => {
        (l == "+" || l == "-" || l == "*" || l == "/" || l == "=") && e.value > 0
          ? ((o.value = r[a.value ?? l]()), (e.value = 0), (a.value = l))
          : (l == "+" || l == "-" || l == "*" || l == "/" || l == "=") && e.value == 0
          ? (a.value = l)
          : l == "del" && e.value > 0
          ? (e.value = e.value > 9 ? parseFloat(`${e.value}`.slice(0, -1)) : 0)
          : l == "del" && e.value == 0
          ? (o.value = o.value > 9 ? parseFloat(`${o.value}`.slice(0, -1)) : 0)
          : l == "reset" && ((o.value = 0), (e.value = 0), (a.value = null)),
          (n.value = e.value > 0 ? e.value : o.value);
      },
      display: n,
    };
  },
};
function te(o, e, a, n, r, i) {
  const t = v("header-component"),
    l = v("display-component"),
    C = v("keypad-component"),
    x = v("footer-component");
  return (
    c(),
    m("main", null, [
      p(t),
      p(l, { display: n.display }, null, 8, ["display"]),
      p(C, { onNumericValue: n.numericKeyPressed, onProcessValue: n.processKeyPressed }, null, 8, [
        "onNumericValue",
        "onProcessValue",
      ]),
      p(x),
    ])
  );
}
const oe = u(se, [["render", te]]),
  le = h(oe);
le.mount("#app");
