import { k as w } from "./lip667d8t42poxum.js";
import {
  dd as D,
  bu as G,
  bv as P,
  bw as H,
  gZ as J,
  g_ as V,
  bq as Z,
  g$ as $,
  eM as W,
  F as B,
} from "./hgyrt6j47bbfyjrt.js";
import { mj as M, mk as K, ml as Q } from "./bek4a02po1hapmml.js";
var m, k;
function X() {
  if (k) return m;
  k = 1;
  var r = D(),
    a = G(),
    s = "[object RegExp]";
  function f(i) {
    return a(i) && r(i) == s;
  }
  return (m = f), m;
}
var I, C;
function Y() {
  if (C) return I;
  C = 1;
  var r = X(),
    a = P(),
    s = H(),
    f = s && s.isRegExp,
    i = f ? a(f) : r;
  return (I = i), I;
}
var z, y;
function ee() {
  if (y) return z;
  y = 1;
  var r = J(),
    a = r("length");
  return (z = a), z;
}
var T, A;
function re() {
  if (A) return T;
  A = 1;
  var r = "\\ud800-\\udfff",
    a = "\\u0300-\\u036f",
    s = "\\ufe20-\\ufe2f",
    f = "\\u20d0-\\u20ff",
    i = a + s + f,
    S = "\\ufe0e\\ufe0f",
    h = "[" + r + "]",
    l = "[" + i + "]",
    v = "\\ud83c[\\udffb-\\udfff]",
    E = "(?:" + l + "|" + v + ")",
    R = "[^" + r + "]",
    x = "(?:\\ud83c[\\udde6-\\uddff]){2}",
    _ = "[\\ud800-\\udbff][\\udc00-\\udfff]",
    u = "\\u200d",
    o = E + "?",
    c = "[" + S + "]?",
    d = "(?:" + u + "(?:" + [R, x, _].join("|") + ")" + c + o + ")*",
    e = c + o + d,
    q = "(?:" + [R + l + "?", l, x, _, h].join("|") + ")",
    g = RegExp(v + "(?=" + v + ")|" + q + e, "g");
  function n(t) {
    for (var b = (g.lastIndex = 0); g.test(t); ) ++b;
    return b;
  }
  return (T = n), T;
}
var p, F;
function ie() {
  if (F) return p;
  F = 1;
  var r = ee(),
    a = M(),
    s = re();
  function f(i) {
    return a(i) ? s(i) : r(i);
  }
  return (p = f), p;
}
var U, L;
function ae() {
  if (L) return U;
  L = 1;
  var r = V(),
    a = K(),
    s = M(),
    f = Z(),
    i = Y(),
    S = ie(),
    h = Q(),
    l = $(),
    v = W(),
    E = 30,
    R = "...",
    x = /\w*$/;
  function _(u, o) {
    var c = E,
      d = R;
    if (f(o)) {
      var e = "separator" in o ? o.separator : e;
      (c = "length" in o ? l(o.length) : c),
        (d = "omission" in o ? r(o.omission) : d);
    }
    u = v(u);
    var q = u.length;
    if (s(u)) {
      var g = h(u);
      q = g.length;
    }
    if (c >= q) return u;
    var n = c - S(d);
    if (n < 1) return d;
    var t = g ? a(g, 0, n).join("") : u.slice(0, n);
    if (e === void 0) return t + d;
    if ((g && (n += t.length - n), i(e))) {
      if (u.slice(n).search(e)) {
        var b,
          N = t;
        for (
          e.global || (e = RegExp(e.source, v(x.exec(e)) + "g")),
            e.lastIndex = 0;
          (b = e.exec(N));

        )
          var j = b.index;
        t = t.slice(0, j === void 0 ? n : j);
      }
    } else if (u.indexOf(r(e), n) != n) {
      var O = t.lastIndexOf(e);
      O > -1 && (t = t.slice(0, O));
    }
    return t + d;
  }
  return (U = _), U;
}
var ue = ae();
const fe = w(ue);
B.div`flex h-full items-center justify-center pb-8 text-sm text-token-text-tertiary rounded-lg border border-token-border-default`;
export { fe as t };
//# sourceMappingURL=jlt66buw1zajk9of.js.map
