const __vite__mapDeps = (
  i,
  m = __vite__mapDeps,
  d = m.f ||
    (m.f = [
      "assets/bnsebkfktmtf4dlq.js",
      "assets/lip667d8t42poxum.js",
      "assets/ka1eghnpltxclrx7.js",
      "assets/octpodh4rp52fi7z.js",
      "assets/bek4a02po1hapmml.js",
      "assets/conversation-small-k5k9c71c.css",
      "assets/gnepbzer8xlcf1m0.js",
      "assets/n0zy5hihoru8ixzo.js",
      "assets/e5qbxqli4yfx49qs.js",
      "assets/gfnsbm99dy8f9dle.js",
      "assets/gkp5860wafdf24mv.js",
      "assets/jwvxkjptpstk4ej7.js",
      "assets/n5wgei6jvns1qnny.js",
      "assets/pb0xfopp3f7joxj4.js",
      "assets/kj3wube4rfsfjz3o.js",
      "assets/nbz4aahqzuixvvgr.js",
      "assets/accwyue32xah1z1m.js",
      "assets/gzhfufyiohn83kuo.js",
      "assets/mrja6mbtdpn27l02.js",
      "assets/kswzrx27uwqy05k6.js",
      "assets/h9gpyfg2x09960z7.js",
      "assets/enyrqi1ktf2s54c0.js",
      "assets/lrf6ki1gmwd89v2w.js",
      "assets/e6pyvx0upv7c38ck.js",
      "assets/lzxg3bwvl23h3e8o.js",
      "assets/hxt6ipx4btplutlt.js",
      "assets/fwkkw36pcqc34uk8.js",
      "assets/b2i1na1bcl7a79k3.js",
      "assets/fk5wemdfypmbezuh.js",
      "assets/k0g5mx2a360e3t03.js",
      "assets/cn79txudvd0dt8pj.js",
      "assets/dh1349twprpizmeg.js",
      "assets/jy5dxk25zw6hpymq.js",
      "assets/c2c6ge712gxzthdq.js",
      "assets/sh55tdaqi3q0eftk.js",
      "assets/on1lyzh70pwcvrke.js",
      "assets/abdc4q71tykmepri.js",
      "assets/lt5u077njj9ud9u7.js",
      "assets/e59f7y6b0ew7ftb0.js",
      "assets/kweqtgafphozzl00.js",
      "assets/g4tl5lt9yqf20m4s.js",
      "assets/iamkd7uovamzrioo.js",
      "assets/jlt66buw1zajk9of.js",
      "assets/f9v02mlso09nmzyv.js",
      "assets/bk8slwxjkdlmxjxm.js",
      "assets/b1cmi8esy0ic5h61.js",
    ]),
) => i.map((i) => d[i]);
import {
  A as lv,
  B as dv,
  C as ql,
  D as fv,
  r as v,
  y as hv,
  R as ne,
  j as m,
  L as g1,
  E as ye,
  G as _1,
  c as Cs,
  H as Et,
  I as Fl,
  k as $e,
  v as It,
  h as Or,
  f as xr,
  l as me,
  x as yi,
  d as Gl,
  M as v1,
  g as Rr,
  u as mn,
  q as Vl,
  a as m1,
  b as b1,
  Q as pv,
  J as y1,
  w as $l,
  K as S1,
  N as E1,
  O as w1,
  z as Un,
  _ as jt,
  P as gv,
  S as C1,
  p as _v,
  T as A1,
  e as O1,
  U as x1,
  V as R1,
  W as vv,
  X as I1,
  Y as T1,
  Z as P1,
  $ as k1,
  a0 as N1,
  a1 as L1,
  a2 as D1,
} from "./lip667d8t42poxum.js";
class Wr {
  static #e;
  #t;
  #n = new Map();
  #r = [];
  static get instance() {
    return Wr.#e || (Wr.#e = new Wr()), Wr.#e;
  }
  setLogger(t) {
    if (this.#t) throw new Error("Logger already set");
    this.#t = t;
    for (const [r, n] of this.#n.entries()) this.#t.addTiming(r, n);
    this.#n.clear();
    for (const { error: r, context: n } of this.#r) this.#t.addError(r, n);
    this.#r = [];
  }
  addTiming(t, r) {
    this.#t ? this.#t.addTiming(t, r) : this.#n.set(t, r ?? Date.now());
  }
  addError(t, r) {
    this.#t
      ? this.#t.addError(t, r)
      : (this.#r.push({ error: t, context: r }),
        this.#r.length > 10 &&
          (console.warn("LazyLogger: too many errors"), this.#r.shift()));
  }
}
function M1(e) {
  return function () {
    const r = {
      params: fv(),
      loaderData: ql(),
      actionData: dv(),
      matches: hv(),
    };
    return v.createElement(e, r);
  };
}
function j1(e) {
  return function () {
    const r = { params: fv(), loaderData: ql(), actionData: dv(), error: lv() };
    return v.createElement(e, r);
  };
}
function mv(e) {
  var t,
    r,
    n = "";
  if (typeof e == "string" || typeof e == "number") n += e;
  else if (typeof e == "object")
    if (Array.isArray(e)) {
      var i = e.length;
      for (t = 0; t < i; t++)
        e[t] && (r = mv(e[t])) && (n && (n += " "), (n += r));
    } else for (r in e) e[r] && (n && (n += " "), (n += r));
  return n;
}
function te() {
  for (var e, t, r = 0, n = "", i = arguments.length; r < i; r++)
    (e = arguments[r]) && (t = mv(e)) && (n && (n += " "), (n += t));
  return n;
}
var bv = {
    color: void 0,
    size: void 0,
    className: void 0,
    style: void 0,
    attr: void 0,
  },
  hf = ne.createContext && ne.createContext(bv),
  U1 = ["attr", "size", "title"];
function B1(e, t) {
  if (e == null) return {};
  var r = q1(e, t),
    n,
    i;
  if (Object.getOwnPropertySymbols) {
    var s = Object.getOwnPropertySymbols(e);
    for (i = 0; i < s.length; i++)
      (n = s[i]),
        !(t.indexOf(n) >= 0) &&
          Object.prototype.propertyIsEnumerable.call(e, n) &&
          (r[n] = e[n]);
  }
  return r;
}
function q1(e, t) {
  if (e == null) return {};
  var r = {};
  for (var n in e)
    if (Object.prototype.hasOwnProperty.call(e, n)) {
      if (t.indexOf(n) >= 0) continue;
      r[n] = e[n];
    }
  return r;
}
function es() {
  return (
    (es = Object.assign
      ? Object.assign.bind()
      : function (e) {
          for (var t = 1; t < arguments.length; t++) {
            var r = arguments[t];
            for (var n in r)
              Object.prototype.hasOwnProperty.call(r, n) && (e[n] = r[n]);
          }
          return e;
        }),
    es.apply(this, arguments)
  );
}
function pf(e, t) {
  var r = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var n = Object.getOwnPropertySymbols(e);
    t &&
      (n = n.filter(function (i) {
        return Object.getOwnPropertyDescriptor(e, i).enumerable;
      })),
      r.push.apply(r, n);
  }
  return r;
}
function ts(e) {
  for (var t = 1; t < arguments.length; t++) {
    var r = arguments[t] != null ? arguments[t] : {};
    t % 2
      ? pf(Object(r), !0).forEach(function (n) {
          F1(e, n, r[n]);
        })
      : Object.getOwnPropertyDescriptors
        ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r))
        : pf(Object(r)).forEach(function (n) {
            Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(r, n));
          });
  }
  return e;
}
function F1(e, t, r) {
  return (
    (t = G1(t)),
    t in e
      ? Object.defineProperty(e, t, {
          value: r,
          enumerable: !0,
          configurable: !0,
          writable: !0,
        })
      : (e[t] = r),
    e
  );
}
function G1(e) {
  var t = V1(e, "string");
  return typeof t == "symbol" ? t : t + "";
}
function V1(e, t) {
  if (typeof e != "object" || !e) return e;
  var r = e[Symbol.toPrimitive];
  if (r !== void 0) {
    var n = r.call(e, t);
    if (typeof n != "object") return n;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return (t === "string" ? String : Number)(e);
}
function yv(e) {
  return (
    e &&
    e.map((t, r) =>
      ne.createElement(t.tag, ts({ key: r }, t.attr), yv(t.child)),
    )
  );
}
function Sv(e) {
  return (t) =>
    ne.createElement($1, es({ attr: ts({}, e.attr) }, t), yv(e.child));
}
function $1(e) {
  var t = (r) => {
    var { attr: n, size: i, title: s } = e,
      o = B1(e, U1),
      a = i || r.size || "1em",
      c;
    return (
      r.className && (c = r.className),
      e.className && (c = (c ? c + " " : "") + e.className),
      ne.createElement(
        "svg",
        es(
          { stroke: "currentColor", fill: "currentColor", strokeWidth: "0" },
          r.attr,
          n,
          o,
          {
            className: c,
            style: ts(ts({ color: e.color || r.color }, r.style), e.style),
            height: a,
            width: a,
            xmlns: "http://www.w3.org/2000/svg",
          },
        ),
        s && ne.createElement("title", null, s),
        e.children,
      )
    );
  };
  return hf !== void 0
    ? ne.createElement(hf.Consumer, null, (r) => t(r))
    : t(bv);
}
function V5(e) {
  return Sv({
    attr: {
      viewBox: "0 0 24 24",
      fill: "none",
      stroke: "currentColor",
      strokeWidth: "2",
      strokeLinecap: "round",
      strokeLinejoin: "round",
    },
    child: [
      { tag: "polyline", attr: { points: "20 12 20 22 4 22 4 12" }, child: [] },
      {
        tag: "rect",
        attr: { x: "2", y: "7", width: "20", height: "5" },
        child: [],
      },
      {
        tag: "line",
        attr: { x1: "12", y1: "22", x2: "12", y2: "7" },
        child: [],
      },
      {
        tag: "path",
        attr: { d: "M12 7H7.5a2.5 2.5 0 0 1 0-5C11 2 12 7 12 7z" },
        child: [],
      },
      {
        tag: "path",
        attr: { d: "M12 7h4.5a2.5 2.5 0 0 0 0-5C13 2 12 7 12 7z" },
        child: [],
      },
    ],
  })(e);
}
function H1(e) {
  return Sv({
    attr: {
      viewBox: "0 0 24 24",
      fill: "none",
      stroke: "currentColor",
      strokeWidth: "2",
      strokeLinecap: "round",
      strokeLinejoin: "round",
    },
    child: [
      {
        tag: "line",
        attr: { x1: "12", y1: "2", x2: "12", y2: "6" },
        child: [],
      },
      {
        tag: "line",
        attr: { x1: "12", y1: "18", x2: "12", y2: "22" },
        child: [],
      },
      {
        tag: "line",
        attr: { x1: "4.93", y1: "4.93", x2: "7.76", y2: "7.76" },
        child: [],
      },
      {
        tag: "line",
        attr: { x1: "16.24", y1: "16.24", x2: "19.07", y2: "19.07" },
        child: [],
      },
      {
        tag: "line",
        attr: { x1: "2", y1: "12", x2: "6", y2: "12" },
        child: [],
      },
      {
        tag: "line",
        attr: { x1: "18", y1: "12", x2: "22", y2: "12" },
        child: [],
      },
      {
        tag: "line",
        attr: { x1: "4.93", y1: "19.07", x2: "7.76", y2: "16.24" },
        child: [],
      },
      {
        tag: "line",
        attr: { x1: "16.24", y1: "7.76", x2: "19.07", y2: "4.93" },
        child: [],
      },
    ],
  })(e);
}
function z1() {
  for (var e = 0, t, r, n = ""; e < arguments.length; )
    (t = arguments[e++]) && (r = Ev(t)) && (n && (n += " "), (n += r));
  return n;
}
function Ev(e) {
  if (typeof e == "string") return e;
  for (var t, r = "", n = 0; n < e.length; n++)
    e[n] && (t = Ev(e[n])) && (r && (r += " "), (r += t));
  return r;
}
function Fu() {
  return (
    (Fu = Object.assign
      ? Object.assign.bind()
      : function (e) {
          for (var t = 1; t < arguments.length; t++) {
            var r = arguments[t];
            for (var n in r)
              Object.prototype.hasOwnProperty.call(r, n) && (e[n] = r[n]);
          }
          return e;
        }),
    Fu.apply(this, arguments)
  );
}
function W1(e) {
  if (e < 1) return { get: function () {}, set: function () {} };
  var t = 0,
    r = new Map(),
    n = new Map();
  function i(s, o) {
    r.set(s, o), t++, t > e && ((t = 0), (n = r), (r = new Map()));
  }
  return {
    get: function (o) {
      var a = r.get(o);
      if (a !== void 0) return a;
      if ((a = n.get(o)) !== void 0) return i(o, a), a;
    },
    set: function (o, a) {
      r.has(o) ? r.set(o, a) : i(o, a);
    },
  };
}
var Hl = "-";
function K1(e) {
  var t = J1(e);
  function r(i) {
    var s = i.split(Hl);
    return s[0] === "" && s.length !== 1 && s.shift(), wv(s, t) || Y1(i);
  }
  function n(i) {
    return e.conflictingClassGroups[i] || [];
  }
  return { getClassGroupId: r, getConflictingClassGroupIds: n };
}
function wv(e, t) {
  var r;
  if (e.length === 0) return t.classGroupId;
  var n = e[0],
    i = t.nextPart.get(n),
    s = i ? wv(e.slice(1), i) : void 0;
  if (s) return s;
  if (t.validators.length !== 0) {
    var o = e.join(Hl);
    return (r = t.validators.find(function (a) {
      var c = a.validator;
      return c(o);
    })) == null
      ? void 0
      : r.classGroupId;
  }
}
var gf = /^\[(.+)\]$/;
function Y1(e) {
  if (gf.test(e)) {
    var t = gf.exec(e)[1],
      r = t?.substring(0, t.indexOf(":"));
    if (r) return "arbitrary.." + r;
  }
}
function J1(e) {
  var t = e.theme,
    r = e.prefix,
    n = { nextPart: new Map(), validators: [] },
    i = Q1(Object.entries(e.classGroups), r);
  return (
    i.forEach(function (s) {
      var o = s[0],
        a = s[1];
      Gu(a, n, o, t);
    }),
    n
  );
}
function Gu(e, t, r, n) {
  e.forEach(function (i) {
    if (typeof i == "string") {
      var s = i === "" ? t : _f(t, i);
      s.classGroupId = r;
      return;
    }
    if (typeof i == "function") {
      if (Z1(i)) {
        Gu(i(n), t, r, n);
        return;
      }
      t.validators.push({ validator: i, classGroupId: r });
      return;
    }
    Object.entries(i).forEach(function (o) {
      var a = o[0],
        c = o[1];
      Gu(c, _f(t, a), r, n);
    });
  });
}
function _f(e, t) {
  var r = e;
  return (
    t.split(Hl).forEach(function (n) {
      r.nextPart.has(n) ||
        r.nextPart.set(n, { nextPart: new Map(), validators: [] }),
        (r = r.nextPart.get(n));
    }),
    r
  );
}
function Z1(e) {
  return e.isThemeGetter;
}
function Q1(e, t) {
  return t
    ? e.map(function (r) {
        var n = r[0],
          i = r[1],
          s = i.map(function (o) {
            return typeof o == "string"
              ? t + o
              : typeof o == "object"
                ? Object.fromEntries(
                    Object.entries(o).map(function (a) {
                      var c = a[0],
                        u = a[1];
                      return [t + c, u];
                    }),
                  )
                : o;
          });
        return [n, s];
      })
    : e;
}
var Cv = "!";
function X1(e) {
  var t = e.separator || ":";
  return function (n) {
    for (var i = 0, s = [], o = 0, a = 0; a < n.length; a++) {
      var c = n[a];
      i === 0 &&
        c === t[0] &&
        (t.length === 1 || n.slice(a, a + t.length) === t) &&
        (s.push(n.slice(o, a)), (o = a + t.length)),
        c === "[" ? i++ : c === "]" && i--;
    }
    var u = s.length === 0 ? n : n.substring(o),
      l = u.startsWith(Cv),
      d = l ? u.substring(1) : u;
    return { modifiers: s, hasImportantModifier: l, baseClassName: d };
  };
}
function eS(e) {
  if (e.length <= 1) return e;
  var t = [],
    r = [];
  return (
    e.forEach(function (n) {
      var i = n[0] === "[";
      i ? (t.push.apply(t, r.sort().concat([n])), (r = [])) : r.push(n);
    }),
    t.push.apply(t, r.sort()),
    t
  );
}
function tS(e) {
  return Fu({ cache: W1(e.cacheSize), splitModifiers: X1(e) }, K1(e));
}
var rS = /\s+/;
function nS(e, t) {
  var r = t.splitModifiers,
    n = t.getClassGroupId,
    i = t.getConflictingClassGroupIds,
    s = new Set();
  return e
    .trim()
    .split(rS)
    .map(function (o) {
      var a = r(o),
        c = a.modifiers,
        u = a.hasImportantModifier,
        l = a.baseClassName,
        d = n(l);
      if (!d) return { isTailwindClass: !1, originalClassName: o };
      var f = eS(c).join(":"),
        h = u ? f + Cv : f;
      return {
        isTailwindClass: !0,
        modifierId: h,
        classGroupId: d,
        originalClassName: o,
      };
    })
    .reverse()
    .filter(function (o) {
      if (!o.isTailwindClass) return !0;
      var a = o.modifierId,
        c = o.classGroupId,
        u = a + c;
      return s.has(u)
        ? !1
        : (s.add(u),
          i(c).forEach(function (l) {
            return s.add(a + l);
          }),
          !0);
    })
    .reverse()
    .map(function (o) {
      return o.originalClassName;
    })
    .join(" ");
}
function iS() {
  for (var e = arguments.length, t = new Array(e), r = 0; r < e; r++)
    t[r] = arguments[r];
  var n,
    i,
    s,
    o = a;
  function a(u) {
    var l = t[0],
      d = t.slice(1),
      f = d.reduce(function (h, _) {
        return _(h);
      }, l());
    return (n = tS(f)), (i = n.cache.get), (s = n.cache.set), (o = c), c(u);
  }
  function c(u) {
    var l = i(u);
    if (l) return l;
    var d = nS(u, n);
    return s(u, d), d;
  }
  return function () {
    return o(z1.apply(null, arguments));
  };
}
function ie(e) {
  var t = function (n) {
    return n[e] || [];
  };
  return (t.isThemeGetter = !0), t;
}
var Qt = /^\[(.+)\]$/,
  sS = /^\d+\/\d+$/,
  oS = new Set(["px", "full", "screen"]),
  aS = /^(\d+)?(xs|sm|md|lg|xl)$/,
  cS = /\d+(%|px|r?em|[sdl]?v([hwib]|min|max)|pt|pc|in|cm|mm|cap|ch|ex|r?lh)/,
  uS = /^-?((\d+)?\.?(\d+)[a-z]+|0)_-?((\d+)?\.?(\d+)[a-z]+|0)/;
function ze(e) {
  return !Number.isNaN(Number(e)) || oS.has(e) || sS.test(e) || cr(e);
}
function cr(e) {
  var t,
    r = (t = Qt.exec(e)) == null ? void 0 : t[1];
  return r ? r.startsWith("length:") || cS.test(r) : !1;
}
function lS(e) {
  var t,
    r = (t = Qt.exec(e)) == null ? void 0 : t[1];
  return r ? r.startsWith("size:") : !1;
}
function dS(e) {
  var t,
    r = (t = Qt.exec(e)) == null ? void 0 : t[1];
  return r ? r.startsWith("position:") : !1;
}
function fS(e) {
  var t,
    r = (t = Qt.exec(e)) == null ? void 0 : t[1];
  return r ? r.startsWith("url(") || r.startsWith("url:") : !1;
}
function vf(e) {
  var t,
    r = (t = Qt.exec(e)) == null ? void 0 : t[1];
  return r ? !Number.isNaN(Number(r)) || r.startsWith("number:") : !1;
}
function be(e) {
  var t,
    r = (t = Qt.exec(e)) == null ? void 0 : t[1];
  return r ? Number.isInteger(Number(r)) : Number.isInteger(Number(e));
}
function ge(e) {
  return Qt.test(e);
}
function Nn() {
  return !0;
}
function Nt(e) {
  return aS.test(e);
}
function hS(e) {
  var t,
    r = (t = Qt.exec(e)) == null ? void 0 : t[1];
  return r ? uS.test(r) : !1;
}
function pS() {
  var e = ie("colors"),
    t = ie("spacing"),
    r = ie("blur"),
    n = ie("brightness"),
    i = ie("borderColor"),
    s = ie("borderRadius"),
    o = ie("borderSpacing"),
    a = ie("borderWidth"),
    c = ie("contrast"),
    u = ie("grayscale"),
    l = ie("hueRotate"),
    d = ie("invert"),
    f = ie("gap"),
    h = ie("gradientColorStops"),
    _ = ie("inset"),
    p = ie("margin"),
    g = ie("opacity"),
    y = ie("padding"),
    E = ie("saturate"),
    A = ie("scale"),
    b = ie("sepia"),
    S = ie("skew"),
    w = ie("space"),
    C = ie("translate"),
    O = function () {
      return ["auto", "contain", "none"];
    },
    T = function () {
      return ["auto", "hidden", "clip", "visible", "scroll"];
    },
    I = function () {
      return ["auto", t];
    },
    N = function () {
      return ["", ze];
    },
    j = function () {
      return ["auto", be];
    },
    B = function () {
      return [
        "bottom",
        "center",
        "left",
        "left-bottom",
        "left-top",
        "right",
        "right-bottom",
        "right-top",
        "top",
      ];
    },
    F = function () {
      return ["solid", "dashed", "dotted", "double", "none"];
    },
    H = function () {
      return [
        "normal",
        "multiply",
        "screen",
        "overlay",
        "darken",
        "lighten",
        "color-dodge",
        "color-burn",
        "hard-light",
        "soft-light",
        "difference",
        "exclusion",
        "hue",
        "saturation",
        "color",
        "luminosity",
        "plus-lighter",
      ];
    },
    G = function () {
      return ["start", "end", "center", "between", "around", "evenly"];
    },
    K = function () {
      return ["", "0", ge];
    },
    Y = function () {
      return [
        "auto",
        "avoid",
        "all",
        "avoid-page",
        "page",
        "left",
        "right",
        "column",
      ];
    };
  return {
    cacheSize: 500,
    theme: {
      colors: [Nn],
      spacing: [ze],
      blur: ["none", "", Nt, cr],
      brightness: [be],
      borderColor: [e],
      borderRadius: ["none", "", "full", Nt, cr],
      borderSpacing: [t],
      borderWidth: N(),
      contrast: [be],
      grayscale: K(),
      hueRotate: [be],
      invert: K(),
      gap: [t],
      gradientColorStops: [e],
      inset: I(),
      margin: I(),
      opacity: [be],
      padding: [t],
      saturate: [be],
      scale: [be],
      sepia: K(),
      skew: [be, ge],
      space: [t],
      translate: [t],
    },
    classGroups: {
      aspect: [{ aspect: ["auto", "square", "video", ge] }],
      container: ["container"],
      columns: [{ columns: [Nt] }],
      "break-after": [{ "break-after": Y() }],
      "break-before": [{ "break-before": Y() }],
      "break-inside": [
        { "break-inside": ["auto", "avoid", "avoid-page", "avoid-column"] },
      ],
      "box-decoration": [{ "box-decoration": ["slice", "clone"] }],
      box: [{ box: ["border", "content"] }],
      display: [
        "block",
        "inline-block",
        "inline",
        "flex",
        "inline-flex",
        "table",
        "inline-table",
        "table-caption",
        "table-cell",
        "table-column",
        "table-column-group",
        "table-footer-group",
        "table-header-group",
        "table-row-group",
        "table-row",
        "flow-root",
        "grid",
        "inline-grid",
        "contents",
        "list-item",
        "hidden",
      ],
      float: [{ float: ["right", "left", "none"] }],
      clear: [{ clear: ["left", "right", "both", "none"] }],
      isolation: ["isolate", "isolation-auto"],
      "object-fit": [
        { object: ["contain", "cover", "fill", "none", "scale-down"] },
      ],
      "object-position": [{ object: [].concat(B(), [ge]) }],
      overflow: [{ overflow: T() }],
      "overflow-x": [{ "overflow-x": T() }],
      "overflow-y": [{ "overflow-y": T() }],
      overscroll: [{ overscroll: O() }],
      "overscroll-x": [{ "overscroll-x": O() }],
      "overscroll-y": [{ "overscroll-y": O() }],
      position: ["static", "fixed", "absolute", "relative", "sticky"],
      inset: [{ inset: [_] }],
      "inset-x": [{ "inset-x": [_] }],
      "inset-y": [{ "inset-y": [_] }],
      top: [{ top: [_] }],
      right: [{ right: [_] }],
      bottom: [{ bottom: [_] }],
      left: [{ left: [_] }],
      visibility: ["visible", "invisible", "collapse"],
      z: [{ z: [be] }],
      basis: [{ basis: [t] }],
      "flex-direction": [
        { flex: ["row", "row-reverse", "col", "col-reverse"] },
      ],
      "flex-wrap": [{ flex: ["wrap", "wrap-reverse", "nowrap"] }],
      flex: [{ flex: ["1", "auto", "initial", "none", ge] }],
      grow: [{ grow: K() }],
      shrink: [{ shrink: K() }],
      order: [{ order: ["first", "last", "none", be] }],
      "grid-cols": [{ "grid-cols": [Nn] }],
      "col-start-end": [{ col: ["auto", { span: [be] }] }],
      "col-start": [{ "col-start": j() }],
      "col-end": [{ "col-end": j() }],
      "grid-rows": [{ "grid-rows": [Nn] }],
      "row-start-end": [{ row: ["auto", { span: [be] }] }],
      "row-start": [{ "row-start": j() }],
      "row-end": [{ "row-end": j() }],
      "grid-flow": [
        { "grid-flow": ["row", "col", "dense", "row-dense", "col-dense"] },
      ],
      "auto-cols": [{ "auto-cols": ["auto", "min", "max", "fr", ge] }],
      "auto-rows": [{ "auto-rows": ["auto", "min", "max", "fr", ge] }],
      gap: [{ gap: [f] }],
      "gap-x": [{ "gap-x": [f] }],
      "gap-y": [{ "gap-y": [f] }],
      "justify-content": [{ justify: G() }],
      "justify-items": [
        { "justify-items": ["start", "end", "center", "stretch"] },
      ],
      "justify-self": [
        { "justify-self": ["auto", "start", "end", "center", "stretch"] },
      ],
      "align-content": [{ content: [].concat(G(), ["baseline"]) }],
      "align-items": [
        { items: ["start", "end", "center", "baseline", "stretch"] },
      ],
      "align-self": [
        { self: ["auto", "start", "end", "center", "stretch", "baseline"] },
      ],
      "place-content": [
        { "place-content": [].concat(G(), ["baseline", "stretch"]) },
      ],
      "place-items": [
        { "place-items": ["start", "end", "center", "baseline", "stretch"] },
      ],
      "place-self": [
        { "place-self": ["auto", "start", "end", "center", "stretch"] },
      ],
      p: [{ p: [y] }],
      px: [{ px: [y] }],
      py: [{ py: [y] }],
      pt: [{ pt: [y] }],
      pr: [{ pr: [y] }],
      pb: [{ pb: [y] }],
      pl: [{ pl: [y] }],
      m: [{ m: [p] }],
      mx: [{ mx: [p] }],
      my: [{ my: [p] }],
      mt: [{ mt: [p] }],
      mr: [{ mr: [p] }],
      mb: [{ mb: [p] }],
      ml: [{ ml: [p] }],
      "space-x": [{ "space-x": [w] }],
      "space-x-reverse": ["space-x-reverse"],
      "space-y": [{ "space-y": [w] }],
      "space-y-reverse": ["space-y-reverse"],
      w: [{ w: ["auto", "min", "max", "fit", t] }],
      "min-w": [{ "min-w": ["min", "max", "fit", ze] }],
      "max-w": [
        {
          "max-w": [
            "0",
            "none",
            "full",
            "min",
            "max",
            "fit",
            "prose",
            { screen: [Nt] },
            Nt,
            cr,
          ],
        },
      ],
      h: [{ h: [t, "auto", "min", "max", "fit"] }],
      "min-h": [{ "min-h": ["min", "max", "fit", ze] }],
      "max-h": [{ "max-h": [t, "min", "max", "fit"] }],
      "font-size": [{ text: ["base", Nt, cr] }],
      "font-smoothing": ["antialiased", "subpixel-antialiased"],
      "font-style": ["italic", "not-italic"],
      "font-weight": [
        {
          font: [
            "thin",
            "extralight",
            "light",
            "normal",
            "medium",
            "semibold",
            "bold",
            "extrabold",
            "black",
            vf,
          ],
        },
      ],
      "font-family": [{ font: [Nn] }],
      "fvn-normal": ["normal-nums"],
      "fvn-ordinal": ["ordinal"],
      "fvn-slashed-zero": ["slashed-zero"],
      "fvn-figure": ["lining-nums", "oldstyle-nums"],
      "fvn-spacing": ["proportional-nums", "tabular-nums"],
      "fvn-fraction": ["diagonal-fractions", "stacked-fractons"],
      tracking: [
        {
          tracking: [
            "tighter",
            "tight",
            "normal",
            "wide",
            "wider",
            "widest",
            cr,
          ],
        },
      ],
      leading: [
        {
          leading: ["none", "tight", "snug", "normal", "relaxed", "loose", ze],
        },
      ],
      "list-style-type": [{ list: ["none", "disc", "decimal", ge] }],
      "list-style-position": [{ list: ["inside", "outside"] }],
      "placeholder-color": [{ placeholder: [e] }],
      "placeholder-opacity": [{ "placeholder-opacity": [g] }],
      "text-alignment": [
        { text: ["left", "center", "right", "justify", "start", "end"] },
      ],
      "text-color": [{ text: [e] }],
      "text-opacity": [{ "text-opacity": [g] }],
      "text-decoration": [
        "underline",
        "overline",
        "line-through",
        "no-underline",
      ],
      "text-decoration-style": [{ decoration: [].concat(F(), ["wavy"]) }],
      "text-decoration-thickness": [{ decoration: ["auto", "from-font", ze] }],
      "underline-offset": [{ "underline-offset": ["auto", ze] }],
      "text-decoration-color": [{ decoration: [e] }],
      "text-transform": ["uppercase", "lowercase", "capitalize", "normal-case"],
      "text-overflow": ["truncate", "text-ellipsis", "text-clip"],
      indent: [{ indent: [t] }],
      "vertical-align": [
        {
          align: [
            "baseline",
            "top",
            "middle",
            "bottom",
            "text-top",
            "text-bottom",
            "sub",
            "super",
            cr,
          ],
        },
      ],
      whitespace: [
        { whitespace: ["normal", "nowrap", "pre", "pre-line", "pre-wrap"] },
      ],
      break: [{ break: ["normal", "words", "all", "keep"] }],
      content: [{ content: ["none", ge] }],
      "bg-attachment": [{ bg: ["fixed", "local", "scroll"] }],
      "bg-clip": [{ "bg-clip": ["border", "padding", "content", "text"] }],
      "bg-opacity": [{ "bg-opacity": [g] }],
      "bg-origin": [{ "bg-origin": ["border", "padding", "content"] }],
      "bg-position": [{ bg: [].concat(B(), [dS]) }],
      "bg-repeat": [
        { bg: ["no-repeat", { repeat: ["", "x", "y", "round", "space"] }] },
      ],
      "bg-size": [{ bg: ["auto", "cover", "contain", lS] }],
      "bg-image": [
        {
          bg: [
            "none",
            { "gradient-to": ["t", "tr", "r", "br", "b", "bl", "l", "tl"] },
            fS,
          ],
        },
      ],
      "bg-color": [{ bg: [e] }],
      "gradient-from": [{ from: [h] }],
      "gradient-via": [{ via: [h] }],
      "gradient-to": [{ to: [h] }],
      rounded: [{ rounded: [s] }],
      "rounded-t": [{ "rounded-t": [s] }],
      "rounded-r": [{ "rounded-r": [s] }],
      "rounded-b": [{ "rounded-b": [s] }],
      "rounded-l": [{ "rounded-l": [s] }],
      "rounded-tl": [{ "rounded-tl": [s] }],
      "rounded-tr": [{ "rounded-tr": [s] }],
      "rounded-br": [{ "rounded-br": [s] }],
      "rounded-bl": [{ "rounded-bl": [s] }],
      "border-w": [{ border: [a] }],
      "border-w-x": [{ "border-x": [a] }],
      "border-w-y": [{ "border-y": [a] }],
      "border-w-t": [{ "border-t": [a] }],
      "border-w-r": [{ "border-r": [a] }],
      "border-w-b": [{ "border-b": [a] }],
      "border-w-l": [{ "border-l": [a] }],
      "border-opacity": [{ "border-opacity": [g] }],
      "border-style": [{ border: [].concat(F(), ["hidden"]) }],
      "divide-x": [{ "divide-x": [a] }],
      "divide-x-reverse": ["divide-x-reverse"],
      "divide-y": [{ "divide-y": [a] }],
      "divide-y-reverse": ["divide-y-reverse"],
      "divide-opacity": [{ "divide-opacity": [g] }],
      "divide-style": [{ divide: F() }],
      "border-color": [{ border: [i] }],
      "border-color-x": [{ "border-x": [i] }],
      "border-color-y": [{ "border-y": [i] }],
      "border-color-t": [{ "border-t": [i] }],
      "border-color-r": [{ "border-r": [i] }],
      "border-color-b": [{ "border-b": [i] }],
      "border-color-l": [{ "border-l": [i] }],
      "divide-color": [{ divide: [i] }],
      "outline-style": [{ outline: [""].concat(F()) }],
      "outline-offset": [{ "outline-offset": [ze] }],
      "outline-w": [{ outline: [ze] }],
      "outline-color": [{ outline: [e] }],
      "ring-w": [{ ring: N() }],
      "ring-w-inset": ["ring-inset"],
      "ring-color": [{ ring: [e] }],
      "ring-opacity": [{ "ring-opacity": [g] }],
      "ring-offset-w": [{ "ring-offset": [ze] }],
      "ring-offset-color": [{ "ring-offset": [e] }],
      shadow: [{ shadow: ["", "inner", "none", Nt, hS] }],
      "shadow-color": [{ shadow: [Nn] }],
      opacity: [{ opacity: [g] }],
      "mix-blend": [{ "mix-blend": H() }],
      "bg-blend": [{ "bg-blend": H() }],
      filter: [{ filter: ["", "none"] }],
      blur: [{ blur: [r] }],
      brightness: [{ brightness: [n] }],
      contrast: [{ contrast: [c] }],
      "drop-shadow": [{ "drop-shadow": ["", "none", Nt, ge] }],
      grayscale: [{ grayscale: [u] }],
      "hue-rotate": [{ "hue-rotate": [l] }],
      invert: [{ invert: [d] }],
      saturate: [{ saturate: [E] }],
      sepia: [{ sepia: [b] }],
      "backdrop-filter": [{ "backdrop-filter": ["", "none"] }],
      "backdrop-blur": [{ "backdrop-blur": [r] }],
      "backdrop-brightness": [{ "backdrop-brightness": [n] }],
      "backdrop-contrast": [{ "backdrop-contrast": [c] }],
      "backdrop-grayscale": [{ "backdrop-grayscale": [u] }],
      "backdrop-hue-rotate": [{ "backdrop-hue-rotate": [l] }],
      "backdrop-invert": [{ "backdrop-invert": [d] }],
      "backdrop-opacity": [{ "backdrop-opacity": [g] }],
      "backdrop-saturate": [{ "backdrop-saturate": [E] }],
      "backdrop-sepia": [{ "backdrop-sepia": [b] }],
      "border-collapse": [{ border: ["collapse", "separate"] }],
      "border-spacing": [{ "border-spacing": [o] }],
      "border-spacing-x": [{ "border-spacing-x": [o] }],
      "border-spacing-y": [{ "border-spacing-y": [o] }],
      "table-layout": [{ table: ["auto", "fixed"] }],
      transition: [
        {
          transition: [
            "none",
            "all",
            "",
            "colors",
            "opacity",
            "shadow",
            "transform",
            ge,
          ],
        },
      ],
      duration: [{ duration: [be] }],
      ease: [{ ease: ["linear", "in", "out", "in-out", ge] }],
      delay: [{ delay: [be] }],
      animate: [{ animate: ["none", "spin", "ping", "pulse", "bounce", ge] }],
      transform: [{ transform: ["", "gpu", "none"] }],
      scale: [{ scale: [A] }],
      "scale-x": [{ "scale-x": [A] }],
      "scale-y": [{ "scale-y": [A] }],
      rotate: [{ rotate: [be, ge] }],
      "translate-x": [{ "translate-x": [C] }],
      "translate-y": [{ "translate-y": [C] }],
      "skew-x": [{ "skew-x": [S] }],
      "skew-y": [{ "skew-y": [S] }],
      "transform-origin": [
        {
          origin: [
            "center",
            "top",
            "top-right",
            "right",
            "bottom-right",
            "bottom",
            "bottom-left",
            "left",
            "top-left",
            ge,
          ],
        },
      ],
      accent: [{ accent: ["auto", e] }],
      appearance: ["appearance-none"],
      cursor: [
        {
          cursor: [
            "auto",
            "default",
            "pointer",
            "wait",
            "text",
            "move",
            "help",
            "not-allowed",
            "none",
            "context-menu",
            "progress",
            "cell",
            "crosshair",
            "vertical-text",
            "alias",
            "copy",
            "no-drop",
            "grab",
            "grabbing",
            "all-scroll",
            "col-resize",
            "row-resize",
            "n-resize",
            "e-resize",
            "s-resize",
            "w-resize",
            "ne-resize",
            "nw-resize",
            "se-resize",
            "sw-resize",
            "ew-resize",
            "ns-resize",
            "nesw-resize",
            "nwse-resize",
            "zoom-in",
            "zoom-out",
            ge,
          ],
        },
      ],
      "caret-color": [{ caret: [e] }],
      "pointer-events": [{ "pointer-events": ["none", "auto"] }],
      resize: [{ resize: ["none", "y", "x", ""] }],
      "scroll-behavior": [{ scroll: ["auto", "smooth"] }],
      "scroll-m": [{ "scroll-m": [t] }],
      "scroll-mx": [{ "scroll-mx": [t] }],
      "scroll-my": [{ "scroll-my": [t] }],
      "scroll-mt": [{ "scroll-mt": [t] }],
      "scroll-mr": [{ "scroll-mr": [t] }],
      "scroll-mb": [{ "scroll-mb": [t] }],
      "scroll-ml": [{ "scroll-ml": [t] }],
      "scroll-p": [{ "scroll-p": [t] }],
      "scroll-px": [{ "scroll-px": [t] }],
      "scroll-py": [{ "scroll-py": [t] }],
      "scroll-pt": [{ "scroll-pt": [t] }],
      "scroll-pr": [{ "scroll-pr": [t] }],
      "scroll-pb": [{ "scroll-pb": [t] }],
      "scroll-pl": [{ "scroll-pl": [t] }],
      "snap-align": [{ snap: ["start", "end", "center", "align-none"] }],
      "snap-stop": [{ snap: ["normal", "always"] }],
      "snap-type": [{ snap: ["none", "x", "y", "both"] }],
      "snap-strictness": [{ snap: ["mandatory", "proximity"] }],
      touch: [
        {
          touch: [
            "auto",
            "none",
            "pinch-zoom",
            "manipulation",
            { pan: ["x", "left", "right", "y", "up", "down"] },
          ],
        },
      ],
      select: [{ select: ["none", "text", "all", "auto"] }],
      "will-change": [
        { "will-change": ["auto", "scroll", "contents", "transform", ge] },
      ],
      fill: [{ fill: [e, "none"] }],
      "stroke-w": [{ stroke: [ze, vf] }],
      stroke: [{ stroke: [e, "none"] }],
      sr: ["sr-only", "not-sr-only"],
    },
    conflictingClassGroups: {
      overflow: ["overflow-x", "overflow-y"],
      overscroll: ["overscroll-x", "overscroll-y"],
      inset: ["inset-x", "inset-y", "top", "right", "bottom", "left"],
      "inset-x": ["right", "left"],
      "inset-y": ["top", "bottom"],
      flex: ["basis", "grow", "shrink"],
      "col-start-end": ["col-start", "col-end"],
      "row-start-end": ["row-start", "row-end"],
      gap: ["gap-x", "gap-y"],
      p: ["px", "py", "pt", "pr", "pb", "pl"],
      px: ["pr", "pl"],
      py: ["pt", "pb"],
      m: ["mx", "my", "mt", "mr", "mb", "ml"],
      mx: ["mr", "ml"],
      my: ["mt", "mb"],
      "font-size": ["leading"],
      "fvn-normal": [
        "fvn-ordinal",
        "fvn-slashed-zero",
        "fvn-figure",
        "fvn-spacing",
        "fvn-fraction",
      ],
      "fvn-ordinal": ["fvn-normal"],
      "fvn-slashed-zero": ["fvn-normal"],
      "fvn-figure": ["fvn-normal"],
      "fvn-spacing": ["fvn-normal"],
      "fvn-fraction": ["fvn-normal"],
      rounded: [
        "rounded-t",
        "rounded-r",
        "rounded-b",
        "rounded-l",
        "rounded-tl",
        "rounded-tr",
        "rounded-br",
        "rounded-bl",
      ],
      "rounded-t": ["rounded-tl", "rounded-tr"],
      "rounded-r": ["rounded-tr", "rounded-br"],
      "rounded-b": ["rounded-br", "rounded-bl"],
      "rounded-l": ["rounded-tl", "rounded-bl"],
      "border-spacing": ["border-spacing-x", "border-spacing-y"],
      "border-w": ["border-w-t", "border-w-r", "border-w-b", "border-w-l"],
      "border-w-x": ["border-w-r", "border-w-l"],
      "border-w-y": ["border-w-t", "border-w-b"],
      "border-color": [
        "border-color-t",
        "border-color-r",
        "border-color-b",
        "border-color-l",
      ],
      "border-color-x": ["border-color-r", "border-color-l"],
      "border-color-y": ["border-color-t", "border-color-b"],
      "scroll-m": [
        "scroll-mx",
        "scroll-my",
        "scroll-mt",
        "scroll-mr",
        "scroll-mb",
        "scroll-ml",
      ],
      "scroll-mx": ["scroll-mr", "scroll-ml"],
      "scroll-my": ["scroll-mt", "scroll-mb"],
      "scroll-p": [
        "scroll-px",
        "scroll-py",
        "scroll-pt",
        "scroll-pr",
        "scroll-pb",
        "scroll-pl",
      ],
      "scroll-px": ["scroll-pr", "scroll-pl"],
      "scroll-py": ["scroll-pt", "scroll-pb"],
    },
  };
}
var gS = iS(pS),
  _S = [
    "a",
    "abbr",
    "address",
    "area",
    "article",
    "aside",
    "audio",
    "b",
    "base",
    "bdi",
    "bdo",
    "big",
    "blockquote",
    "body",
    "br",
    "button",
    "canvas",
    "caption",
    "cite",
    "code",
    "col",
    "colgroup",
    "data",
    "datalist",
    "dd",
    "del",
    "details",
    "dfn",
    "dialog",
    "div",
    "dl",
    "dt",
    "em",
    "embed",
    "fieldset",
    "figcaption",
    "figure",
    "footer",
    "form",
    "h1",
    "h2",
    "h3",
    "h4",
    "h5",
    "h6",
    "head",
    "header",
    "hgroup",
    "hr",
    "html",
    "i",
    "iframe",
    "img",
    "input",
    "ins",
    "kbd",
    "keygen",
    "label",
    "legend",
    "li",
    "link",
    "main",
    "map",
    "mark",
    "menu",
    "menuitem",
    "meta",
    "meter",
    "nav",
    "noscript",
    "object",
    "ol",
    "optgroup",
    "option",
    "output",
    "p",
    "param",
    "picture",
    "pre",
    "progress",
    "q",
    "rp",
    "rt",
    "ruby",
    "s",
    "samp",
    "script",
    "section",
    "select",
    "small",
    "source",
    "span",
    "strong",
    "style",
    "sub",
    "summary",
    "sup",
    "table",
    "tbody",
    "td",
    "textarea",
    "tfoot",
    "th",
    "thead",
    "time",
    "title",
    "tr",
    "track",
    "u",
    "ul",
    "var",
    "video",
    "wbr",
    "circle",
    "clipPath",
    "defs",
    "ellipse",
    "foreignObject",
    "g",
    "image",
    "line",
    "linearGradient",
    "marker",
    "mask",
    "path",
    "pattern",
    "polygon",
    "polyline",
    "radialGradient",
    "rect",
    "stop",
    "svg",
    "text",
    "tspan",
  ],
  vS = _S,
  Av = Symbol("isTwElement?"),
  mS = (e, t) => e.reduce((r, n, i) => r.concat(n || [], t[i] || []), []),
  bS = (e, t = "") => {
    let r = e
        .join(" ")
        .trim()
        .replace(/\n/g, " ")
        .replace(/\s{2,}/g, " ")
        .split(" ")
        .filter((i) => i !== ","),
      n = t ? t.split(" ") : [];
    return gS(...r.concat(n).filter((i) => i !== " "));
  },
  yS = ([e]) => e.charAt(0) !== "$",
  bo = (e) => e[Av] === !0,
  Ov =
    (e) =>
    (t, ...r) => {
      let n = (i = []) => {
        let s = ne.forwardRef((o, a) => {
          let { $as: c = e, style: u = {}, ...l } = o,
            d = bo(e) ? e : c,
            f = i
              ? i.reduce(
                  (_, p) => Object.assign(_, typeof p == "function" ? p(o) : p),
                  {},
                )
              : {},
            h = bo(d) ? l : Object.fromEntries(Object.entries(l).filter(yS));
          return ne.createElement(d, {
            ...h,
            style: { ...f, ...u },
            ref: a,
            className: bS(
              mS(
                t,
                r.map((_) => _({ ...l, $as: c })),
              ),
              l.className,
            ),
            ...(bo(e) ? { $as: c } : {}),
          });
        });
        return (
          (s[Av] = !0),
          typeof e != "string"
            ? (s.displayName = e.displayName || e.name || "tw.Component")
            : (s.displayName = "tw." + e),
          (s.withStyle = (o) => n(i.concat(o))),
          s
        );
      };
      return n();
    },
  SS = vS.reduce((e, t) => ({ ...e, [t]: Ov(t) }), {}),
  ES = Object.assign(Ov, SS),
  xv = ES;
const wS = xv(H1)`animate-spin text-center`;
function Vu({ className: e }) {
  return m.jsx(wS, { className: e });
}
function $5({ className: e }) {
  return m.jsx("div", {
    className: "flex h-full w-full items-center justify-center",
    children: m.jsx(Vu, { className: e }),
  });
}
function As({
  children: e,
  onClick: t,
  className: r,
  contentWrapperClassName: n,
  color: i = "primary",
  label: s,
  disabled: o = !1,
  visuallyDisabled: a = !1,
  loading: c = !1,
  size: u = "medium",
  fullWidth: l = !1,
  contentsFullWidth: d = !1,
  icon: f,
  style: h,
  ..._
}) {
  const p = a || o || c,
    g = c || o,
    y = te(
      p && "opacity-50",
      g && "cursor-not-allowed",
      "btn relative",
      i === "primary" && "btn-primary",
      i === "primary-inverse" && "btn-primary-inverse",
      i === "green" && "btn-green",
      i === "secondary" && "btn-secondary",
      i === "danger" && "btn-danger",
      i === "danger-outline" && "btn-danger-outline",
      i === "blue" && "btn-blue",
      i === "ghost" && "btn-ghost",
      u === "xs" && "btn-xs",
      u === "small" && "btn-small",
      u === "large" && "btn-large",
      u === "giant" && "btn-giant",
      l && "w-full",
      r,
    ),
    E = f
      ? m.jsxs("div", {
          className: te("flex w-full", "items-center justify-center", n, {
            "gap-2": u === "giant",
            "gap-1.5": u === "medium" || u === "large",
            "gap-1": u === "small" || u === "xs",
          }),
          children: [
            c
              ? m.jsx(Vu, {
                  className: te(
                    u === "xs" && "icon-xs",
                    u === "small" && "icon-sm",
                    u === "medium" && "icon-sm",
                    u === "large" && "icon-md",
                    u === "giant" && "icon-md",
                    u === "xl" && "icon-lg",
                  ),
                })
              : m.jsx(f, {
                  "aria-label": "",
                  className: te(
                    u === "xs" && "icon-xs",
                    u === "small" && "icon-sm",
                    u === "medium" && "icon-sm",
                    u === "large" && "icon-md",
                    u === "giant" && "icon-md",
                    u === "xl" && "icon-lg",
                  ),
                }),
            e,
          ],
        })
      : m.jsxs("div", {
          className: te("flex items-center justify-center", n, d && "w-full"),
          children: [e, c && m.jsx(Vu, { className: "ms-2" })],
        });
  switch (_.as) {
    case "link":
    case "a": {
      const { openNewTab: A, ...b } = _;
      return m.jsx(g1, {
        ...b,
        "aria-label": s,
        to: _.to ?? "/",
        target: A === !0 ? "_blank" : "_self",
        onClick: t,
        className: y,
        style: h,
        children: E,
      });
    }
    default:
      return m.jsx("button", {
        className: y,
        ref: _.ref,
        "aria-label": s,
        onClick: t,
        disabled: g,
        ..._,
        style: h,
        children: E,
      });
  }
}
As.displayName = "Button";
class Ae extends Error {
  constructor(t, r, n) {
    const i =
      (typeof n.error == "string" && n.error) ||
      (typeof n.detail == "string" && n.detail) ||
      n.detail?.message ||
      n.detail?.description ||
      n.detail?.error?.message ||
      OS;
    super(i),
      (this.url = t),
      (this.status = r),
      (this.json = n),
      (this.detail = n.detail),
      (this.jsonError = n.error);
  }
  name = "RequestError";
  detail;
  jsonError;
  static createWithErrorMessage(t, r, n) {
    return new Ae(t, r === "client" ? 400 : 500, { error: n });
  }
  get code() {
    return (
      this.detail?.code ??
      this.jsonError?.code ??
      this.jsonError?.error?.code ??
      this.detail?.error?.code
    );
  }
  isClientError() {
    return this.status >= 400 && this.status < 500;
  }
  isServerError() {
    return this.status >= 500;
  }
}
class _t extends Error {
  name = "UserFileError";
  code;
  extra;
  constructor(t, r, n) {
    super(t), (this.code = r), (this.extra = n);
  }
}
const CS =
    "If this issue persists please contact us through our help center at help.openai.com.",
  AS =
    "If this issue persists please contact us through our help center at [help.openai.com](https://help.openai.com/).",
  OS = `Something went wrong. ${CS}`,
  H5 = `Something went wrong while generating the response. ${AS}`;
function z5(e) {
  if (e instanceof Ae && typeof e.message == "string" && e.message)
    return e.message;
}
var xS = ((e) => (
  (e.HistoryDisabledConversationNotFound =
    "history_disabled_conversation_not_found"),
  (e.ModelCapExceeded = "model_cap_exceeded"),
  (e.MissingLastCompletion = "missing_last_completion"),
  (e.InterruptionServerError = "interruption_server_error"),
  e
))(xS || {});
function W5(e) {
  return e instanceof Error
    ? e
    : new Error(typeof e == "string" ? e : "Something went wrong");
}
function K5(e) {
  return e instanceof Error && e.name === "AbortError";
}
function RS(...e) {
  try {
    return new URL(...e);
  } catch {
    return null;
  }
}
const IS = [
    "Fetch is aborted",
    "Load failed",
    "Script error.",
    "Failed to execute 'insertBefore' on 'Node'",
    "ResizeObserver loop completed with undelivered notifications.",
    "Object Not Found Matching Id",
    "Object.hasOwn is not a function",
  ],
  TS = 100,
  mf = 1e3,
  Si = [];
function bf(e, t) {
  const r = e.findIndex((n) => n <= t);
  return r === -1 ? e.length : r;
}
const PS = (e) => {
  if (
    e.stack?.includes("-extension://") ||
    e.source === "console" ||
    IS.some((i) => e?.message?.includes(i)) ||
    e.type === "RequestError"
  )
    return !0;
  const t = Date.now(),
    r = t - 1e3 * 60;
  if (bf(Si, r) >= TS) return !0;
  const n = t - 1e3 * 60 * 60 * 24;
  return bf(Si, n) >= mf ? !0 : (Si.unshift(t), Si.splice(mf), !1);
};
function Rv() {
  return location.origin === "https://chatgpt.com" || !1;
}
const yf = typeof window > "u" ? void 0 : window.DesktopHostGateway,
  pe = yf?.getVersion() === 1 ? yf : void 0,
  Os = pe !== void 0,
  Iv = Os || !1;
function Y5(e) {
  if (e === void 0) return;
  const t =
      /^ChatGPT\/([\d.]+) \(([^)]+)\) Electron\/([\d.]+) Chrome\/([\d.]+)$/,
    r = e.match(t);
  if (r) return r[1];
}
function Hn(e) {
  return /[?&]q=[^&#]+/.test(e)
    ? e.replace(/([?&]q=)[^&#]*/, "$1<redacted>")
    : e;
}
var xs = {},
  ee = ((e) => (
    (e[(e.Required = 0)] = "Required"),
    (e[(e.SendIfAvailable = 1)] = "SendIfAvailable"),
    (e[(e.Anonymous = 2)] = "Anonymous"),
    e
  ))(ee || {});
const ae = xs.VITE_SHARED_API_URL ?? "https://chatgpt.com/backend-api",
  Rs = xs.VITE_SHARED_ANON_API_URL ?? "https://chatgpt.com/backend-anon",
  Vi = xs.VITE_PUBLIC_API_URL ?? "https://chatgpt.com/public-api",
  kS = xs.VITE_INVITE_URL_PREFIX ?? "https://chatgpt.com/public-api/referral",
  NS = "v4-2023-04-27",
  J5 = { IT: "Italy", KR: "South Korea" },
  LS = {
    AD: "Andorra",
    AI: "Anguilla",
    AT: "Austria",
    AW: "Aruba",
    AX: "Åland Islands",
    BG: "Bulgaria",
    BL: "Saint Barthélemy",
    BM: "Bermuda",
    BQ: "Caribbean Netherlands",
    BV: "Bouvet Island",
    CH: "Switzerland",
    CW: "Curaçao",
    CY: "Cyprus",
    CZ: "Czech Republic",
    DE: "Germany",
    DK: "Denmark",
    EE: "Estonia",
    ES: "Spain",
    FI: "Finland",
    FK: "Falkland Islands",
    FO: "Faroe Islands",
    FR: "France",
    GB: "United Kingdom",
    GF: "French Guiana",
    GG: "Guernsey",
    GI: "Gibraltar",
    GL: "Greenland",
    GP: "Guadeloupe",
    GR: "Greece",
    GS: "South Georgia and the South Sandwich Islands",
    HR: "Croatia",
    HU: "Hungary",
    IC: "Canary Islands",
    IE: "Ireland",
    IM: "Isle of Man",
    IO: "British Indian Ocean Territory",
    IS: "Iceland",
    IT: "Italy",
    JE: "Jersey",
    KY: "Cayman Islands",
    LI: "Liechtenstein",
    LT: "Lithuania",
    LU: "Luxembourg",
    LV: "Latvia",
    MC: "Monaco",
    ME: "Montenegro",
    MF: "Saint Martin",
    MQ: "Martinique",
    MS: "Montserrat",
    MT: "Malta",
    NC: "New Caledonia",
    NL: "Netherlands",
    NO: "Norway",
    PF: "French Polynesia",
    PL: "Poland",
    PM: "Saint Pierre and Miquelon",
    PN: "Pitcairn",
    PT: "Portugal",
    RE: "Reunion",
    SE: "Sweden",
    SH: "Saint Helena, Ascension and Tristan da Cunha",
    SI: "Slovenia",
    SJ: "Svalbard and Jan Mayen",
    SK: "Slovakia",
    SM: "San Marino",
    SX: "Sint Maarten",
    TC: "Turks and Caicos Islands",
    TF: "French Southern Territories",
    VG: "British Virgin Islands",
    WF: "Wallis and Futuna",
    YT: "Mayotte",
    ZA: "South Africa",
    ID: "Indonesia",
    BE: "Belgium",
    IN: "India",
    RO: "Romania",
    CA: "Canada",
    SG: "Singapore",
  },
  zl = "chatgpt.com/ces",
  Wl = "https",
  DS = {},
  MS = DS,
  Tv = `${Wl}://${zl}`,
  jS = {
    disableClientPersistence: !0,
    integrations: {
      "Segment.io": {
        apiHost: `${zl}/v1`,
        host: Tv,
        protocol: Wl,
        deliveryStrategy: { ...MS },
      },
    },
  },
  US = { writeKey: "oai", cdnURL: `${Wl}://${zl}` },
  Pv = [
    /^https:\/\/ab\.chatgpt\.com\//,
    (e) => e.startsWith(Tv),
    (e) => {
      const t = [ae, Rs],
        r = [/^\/sentinel\//];
      for (const n of t)
        if (e.startsWith(n)) {
          const i = e.slice(n.length);
          return r.some((s) => s.test(i));
        }
      return !1;
    },
  ];
class BS {
  #e = !1;
  #t = new Set();
  #n = new Set();
  #r = new Map();
  initialize(t) {
    if (!this.#e) {
      {
        const r = Os ? pe?.getTelemetryConfig?.() : void 0,
          n = r !== void 0 ? r.datadogService : "chatgpt-web",
          i = 1;
        ye.init({
          applicationId: "fd6e06b8-4825-4fbb-8db4-2a243f92c4bc",
          clientToken: "pub1f79f8ac903a5872ae5f53026d20a77c",
          site: "datadoghq.com",
          service: n,
          env: "prod",
          version: "4dc7f8dcbaf358ca582fa5ec3f4acf92747879cc",
          sessionSampleRate: i,
          sessionReplaySampleRate: 0,
          trackUserInteractions: !1,
          trackResources: !0,
          trackLongTasks: !0,
          defaultPrivacyLevel: _1.MASK_USER_INPUT,
          beforeSend: (s) =>
            s.type === "error" && PS(s.error)
              ? !1
              : ((s.view.url = Hn(s.view.url)),
                s.type === "resource" && (s.resource.url = Hn(s.resource.url)),
                s.type === "error" &&
                  s.error.resource &&
                  (s.error.resource.url = Hn(s.error.resource.url)),
                !0),
          allowedTracingUrls: [
            {
              match: (s) => {
                const o = RS(s);
                if (o == null) return !1;
                const { hostname: a, pathname: c } = o;
                return !(
                  !["openai.com", "chatgpt.com"].some((l) => a.endsWith(l)) ||
                  a === "ab.chatgpt.com" ||
                  c.startsWith("/ces/") ||
                  c.startsWith("/healthcheck")
                );
              },
              propagatorTypes: ["datadog"],
            },
          ],
          traceSampleRate: i,
          traceContextInjection: "sampled",
          excludedActivityUrls: Pv,
          ...t,
        }),
          ye.setGlobalContextProperty("track", "stable"),
          r !== void 0 &&
            ye.setGlobalContextProperty("is_electron_desktop_app", !0),
          ye.setGlobalContextProperty("is_authenticated", !1);
      }
      (this.#e = !0), Wr.instance.setLogger(this);
    }
  }
  get viewId() {
    return ye.getInternalContext()?.view?.id;
  }
  get sessionId() {
    return ye.getInternalContext()?.session_id;
  }
  addAction(t, r) {
    this.#e ||
      (console.error("Should not call addAction before initialize"),
      this.initialize()),
      ye.addAction(t, r);
  }
  addError(t, r) {
    if (
      (console.error(t, r),
      this.#e ||
        (console.error("Should not call addError before initialize"),
        this.initialize()),
      t instanceof Ae)
    )
      return;
    const n = typeof t == "string" ? new Error(t) : t;
    ye.addError(n, r);
  }
  addTiming(t, r) {
    const n = r ?? Date.now();
    this.#r.set(t, n),
      this.#e ||
        (console.error("Should not call addTiming before initialize"),
        this.initialize()),
      performance.mark(t, { startTime: n - performance.timeOrigin }),
      ye.addTiming(t, r);
  }
  addFirstTiming(t, r) {
    this.#t.has(t) || (this.#t.add(t), this.addTiming(t, r));
  }
  addDurationVital(t, r, n) {
    ye.addDurationVital(t, { startTime: r, duration: n });
  }
  addFirstDurationVital(t, r, n) {
    this.#n.has(t) || (this.#n.add(t), this.addDurationVital(t, r, n));
  }
  getTimings() {
    return this.#r;
  }
  setUser(t, r) {
    ye.setGlobalContextProperty("is_authenticated", !0);
    const n = { id: t.id, account_plan_type: r?.planType, workspace_id: r?.id };
    this.#e ||
      (console.error("Should not call setUser before initialize"),
      this.initialize()),
      ye.setUser(n);
  }
  addFeatureFlagEvaluation(t, r) {
    ye.addFeatureFlagEvaluation(t, r);
  }
}
const x = new BS();
var Kl = ((e) => (
    (e.WINDOW_VISIBILITY_STATE_CHANGED = "WINDOW_VISIBILITY_STATE_CHANGED"),
    (e.WINDOW_FOCUS_CHANGED = "WINDOW_FOCUS_CHANGED"),
    e
  ))(Kl || {}),
  Gt = ((e) => (
    (e.LOGIN_CHANGED = "LOGIN_CHANGED"),
    (e.LOGOUT = "LOGOUT"),
    (e.QUIT = "QUIT"),
    (e.SET_COMPANION_WINDOW_VISIBILITY = "SET_COMPANION_WINDOW_VISIBILITY"),
    (e.SET_WEB_RELEASE_PROPERTIES = "WEB_RELEASE_PROPERTIES"),
    (e.ERROR_THROWN = "ERROR_THROWN"),
    (e.ZOOM = "ZOOM"),
    (e.DESKTOP_SETTING_CHANGED = "DESKTOP_SETTING_CHANGED"),
    (e.HOTKEY_RECORDING_STATE = "HOTKEY_RECORDING_STATE"),
    (e.ADD_BREADCRUMB = "ADD_BREADCRUMB"),
    e
  ))(Gt || {}),
  Is = ((e) => (
    (e.ZOOM_IN = "ZOOM_IN"),
    (e.ZOOM_OUT = "ZOOM_OUT"),
    (e.ZOOM_RESET = "ZOOM_RESET"),
    e
  ))(Is || {}),
  kv = ((e) => ((e.MICROPHONE = "MICROPHONE"), e))(kv || {});
const $u = ({ resetError: e, componentStack: t, error: r }) => (
    v.useEffect(() => {
      x.addError(r), pe?.publish(Gt.ERROR_THROWN, { error: r });
    }, [r]),
    m.jsxs("div", {
      className:
        "flex h-full w-full flex-col items-center justify-center gap-4",
      children: [
        m.jsx("h2", { children: "Content failed to load" }),
        !1,
        m.jsx(As, { color: "secondary", onClick: e, children: "Try again" }),
        !1,
      ],
    })
  ),
  qS = "https://cdn.oaistatic.com/assets/chatgpt-share-og-u7j5uyao.webp",
  FS = { src: qS },
  GS = "https://cdn.oaistatic.com/assets/favicon-180x180-od45eci6.webp",
  VS = { src: GS },
  $S = "https://cdn.oaistatic.com/assets/codex-l0s3wpqh.ico",
  HS =
    "data:image/svg+xml,%3csvg%20width='24'%20height='24'%20viewBox='0%200%2024%2024'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%20%3e%3cg%20clip-path='url(%23clip0_6421_28566)'%3e%3cpath%20d='M12%2022C10.1967%2022%208.53005%2021.5537%207%2020.6612C5.46995%2019.7505%204.24954%2018.5301%203.3388%2017C2.44627%2015.4699%202%2013.8033%202%2012C2%2010.1967%202.44627%208.53005%203.3388%207C4.24954%205.46994%205.46995%204.25865%207%203.36612C8.53005%202.45537%2010.1967%202%2012%202C13.8033%202%2015.4699%202.45537%2017%203.36612C18.5301%204.25865%2019.7413%205.46994%2020.6339%207C21.5446%208.53005%2022%2010.1967%2022%2012C22%2013.8033%2021.5446%2015.4699%2020.6339%2017C19.7413%2018.5301%2018.5301%2019.7505%2017%2020.6612C15.4699%2021.5537%2013.8033%2022%2012%2022ZM12%2019.9781C13.439%2019.9781%2014.7687%2019.623%2015.9891%2018.9126C17.2095%2018.184%2018.1749%2017.2095%2018.8852%2015.9891C19.6138%2014.7687%2019.9781%2013.439%2019.9781%2012C19.9781%2010.561%2019.6138%209.23133%2018.8852%208.01093C18.1749%206.79053%2017.2095%205.82514%2015.9891%205.11475C14.7687%204.38616%2013.439%204.02186%2012%204.02186C10.561%204.02186%209.23133%204.38616%208.01093%205.11475C6.79053%205.82514%205.81603%206.79053%205.08743%208.01093C4.37705%209.23133%204.02186%2010.561%204.02186%2012C4.02186%2013.439%204.37705%2014.7687%205.08743%2015.9891C5.81603%2017.2095%206.79053%2018.184%208.01093%2018.9126C9.23133%2019.623%2010.561%2019.9781%2012%2019.9781ZM8.3388%2015.5792C8.06557%2015.5792%207.82878%2015.4791%207.62842%2015.2787C7.42805%2015.0783%207.32787%2014.8415%207.32787%2014.5683C7.32787%2014.3862%207.37341%2014.2222%207.46448%2014.0765L8.72131%2011.9454L7.51913%209.9235C7.39162%209.70492%207.32787%209.50455%207.32787%209.3224C7.32787%209.06739%207.42805%208.83971%207.62842%208.63934C7.82878%208.43898%208.06557%208.3388%208.3388%208.3388C8.7031%208.3388%208.98543%208.49362%209.18579%208.80328L10.6612%2011.3443C10.7705%2011.5446%2010.8251%2011.745%2010.8251%2011.9454C10.8251%2012.1457%2010.7705%2012.3461%2010.6612%2012.5464L9.18579%2015.0874C8.96721%2015.4153%208.68488%2015.5792%208.3388%2015.5792ZM12.9836%2015.306C12.7104%2015.306%2012.4736%2015.2058%2012.2732%2015.0055C12.0729%2014.8051%2011.9727%2014.5683%2011.9727%2014.2951C11.9727%2014.0401%2012.0729%2013.8124%2012.2732%2013.612C12.4736%2013.4117%2012.7104%2013.3115%2012.9836%2013.3115H16.4809C16.7359%2013.3115%2016.9636%2013.4117%2017.1639%2013.612C17.3643%2013.8124%2017.4645%2014.0401%2017.4645%2014.2951C17.4645%2014.5683%2017.3643%2014.8051%2017.1639%2015.0055C16.9636%2015.2058%2016.7359%2015.306%2016.4809%2015.306H12.9836Z'%20fill='currentColor'%20/%3e%3c/g%3e%3c/svg%3e",
  zS = "https://cdn.oaistatic.com/assets/favicon-miwirzcw.ico",
  WS =
    "data:image/svg+xml,%3csvg%20xmlns='http://www.w3.org/2000/svg'%20width='180'%20height='180'%20fill='none'%3e%3cstyle%3e%20:root%20{%20--primary-fill:%20%23000;%20--secondary-fill:%20%23fff;%20}%20@media%20(prefers-color-scheme:%20dark)%20{%20:root%20{%20--primary-fill:%20%23fff;%20--secondary-fill:%20%23000;%20}%20}%20%3c/style%3e%3cg%20clip-path='url(%23a)'%3e%3crect%20width='180'%20height='180'%20fill='var(--primary-fill)'%20rx='90'%20/%3e%3cg%20clip-path='url(%23b)'%3e%3cpath%20fill='var(--secondary-fill)'%20d='M75.91%2073.628V62.232c0-.96.36-1.68%201.199-2.16l22.912-13.194c3.119-1.8%206.838-2.639%2010.676-2.639%2014.394%200%2023.511%2011.157%2023.511%2023.032%200%20.839%200%201.799-.12%202.758l-23.752-13.914c-1.439-.84-2.879-.84-4.318%200L75.91%2073.627Zm53.499%2044.383v-27.23c0-1.68-.72-2.88-2.159-3.719L97.142%2069.55l9.836-5.638c.839-.48%201.559-.48%202.399%200l22.912%2013.195c6.598%203.839%2011.035%2011.995%2011.035%2019.912%200%209.116-5.397%2017.513-13.915%2020.992v.001Zm-60.577-23.99-9.836-5.758c-.84-.48-1.2-1.2-1.2-2.16v-26.39c0-12.834%209.837-22.55%2023.152-22.55%205.039%200%209.716%201.679%2013.676%204.678L70.993%2055.516c-1.44.84-2.16%202.039-2.16%203.719v34.787-.002Zm21.173%2012.234L75.91%2098.339V81.546l14.095-7.917%2014.094%207.917v16.793l-14.094%207.916Zm9.056%2036.467c-5.038%200-9.716-1.68-13.675-4.678l23.631-13.676c1.439-.839%202.159-2.038%202.159-3.718V85.863l9.956%205.757c.84.48%201.2%201.2%201.2%202.16v26.389c0%2012.835-9.957%2022.552-23.27%2022.552v.001Zm-28.43-26.75L47.72%20102.778c-6.599-3.84-11.036-11.996-11.036-19.913%200-9.236%205.518-17.513%2014.034-20.992v27.35c0%201.68.72%202.879%202.16%203.718l29.989%2017.393-9.837%205.638c-.84.48-1.56.48-2.399%200Zm-1.318%2019.673c-13.555%200-23.512-10.196-23.512-22.792%200-.959.12-1.919.24-2.879l23.63%2013.675c1.44.84%202.88.84%204.32%200l30.108-17.392v11.395c0%20.96-.361%201.68-1.2%202.16l-22.912%2013.194c-3.119%201.8-6.837%202.639-10.675%202.639Zm29.748%2014.274c14.515%200%2026.63-10.316%2029.39-23.991%2013.434-3.479%2022.071-16.074%2022.071-28.91%200-8.396-3.598-16.553-10.076-22.43.6-2.52.96-5.039.96-7.557%200-17.153-13.915-29.99-29.989-29.99-3.239%200-6.358.48-9.477%201.56-5.398-5.278-12.835-8.637-20.992-8.637-14.515%200-26.63%2010.316-29.39%2023.991-13.434%203.48-22.07%2016.074-22.07%2028.91%200%208.396%203.598%2016.553%2010.075%2022.431-.6%202.519-.96%205.038-.96%207.556%200%2017.154%2013.915%2029.989%2029.99%2029.989%203.238%200%206.357-.479%209.476-1.559%205.397%205.278%2012.835%208.637%2020.992%208.637Z'%20/%3e%3c/g%3e%3c/g%3e%3cdefs%3e%3cclipPath%20id='a'%3e%3cpath%20d='M0%200h180v180H0z'%20/%3e%3c/clipPath%3e%3cclipPath%20id='b'%3e%3cpath%20d='M29.487%2029.964h121.035v119.954H29.487z'%20/%3e%3c/clipPath%3e%3c/defs%3e%3c/svg%3e";
function Ir(e) {
  const t = Symbol(void 0);
  return (r) => {
    if (!r)
      throw new Error(
        "[SessionContext] Attempted to access session value without a session context.",
      );
    const n = r;
    if (t in n) {
      const i = n[t];
      if (i === Sf)
        throw new Error(
          "[SessionContext] Dependency cycle during session value initialization.",
        );
      if (i instanceof Error) throw i;
      return i;
    }
    try {
      n[t] = Sf;
      const i = e(r);
      return (n[t] = i), i;
    } catch (i) {
      const s =
        i instanceof Error
          ? i
          : new Error(
              "[SessionContext] Failed to initialize session value: " + i,
              { cause: i },
            );
      throw ((n[t] = s), s);
    }
  };
}
function KS() {
  const e = Symbol(void 0);
  return [
    (n) => {
      if (!n)
        throw new Error(
          "[SessionContext] Attempted to access session value without a session context.",
        );
      const i = n;
      if (e in i) return i[e];
      throw new Error(
        "[SessionContext] Attempted to access session value before initialization.",
      );
    },
    (n, i) => {
      const s = n;
      if (e in s)
        throw new Error(
          "[SessionContext] Attempted to initialize session value more than once.",
        );
      s[e] = i;
    },
  ];
}
const Sf = Symbol();
function rt() {
  "use forget";
  const e = v.useContext(Nv);
  if (!e)
    throw new Error(
      "[SessionContext] Attempted to access sessionContext outside of <SessionContextProvider>",
    );
  return e;
}
const Nv = v.createContext(void 0);
function Lv() {
  return {};
}
const YS = (e) => {
  "use forget";
  const t = Cs.c(3),
    { sessionContext: r, children: n } = e;
  let i;
  return (
    t[0] !== n || t[1] !== r
      ? ((i = m.jsx(Nv, { value: r, children: n })),
        (t[0] = n),
        (t[1] = r),
        (t[2] = i))
      : (i = t[2]),
    i
  );
};
var JS = ((e) => (
  (e.FreeSearchHoldout = "fsh"),
  (e.AnonSearchHoldout = "ash"),
  (e.NoAuthEnableFileUploads = "naefu"),
  e
))(JS || {});
const [He, ZS] = KS();
function QS() {
  const e = rt();
  return He(e);
}
let XS = Lv();
function nt() {
  return XS;
}
let Ef = !1;
function eE(e, t) {
  Ef || ((Ef = !0), ZS(e, t));
}
var rr = {},
  Dr = {},
  Ei = {},
  wf;
function tE() {
  if (wf) return Ei;
  (wf = 1), Object.defineProperty(Ei, "__esModule", { value: !0 });
  const e = Et();
  let t = class {
    constructor(n) {
      (this._sdkKey = n),
        (this._rawValues = null),
        (this._values = null),
        (this._source = "Uninitialized"),
        (this._lcut = 0),
        (this._receivedAt = 0),
        (this._bootstrapMetadata = null),
        (this._warnings = new Set());
    }
    reset() {
      (this._values = null),
        (this._rawValues = null),
        (this._source = "Loading"),
        (this._lcut = 0),
        (this._receivedAt = 0),
        (this._bootstrapMetadata = null);
    }
    finalize() {
      this._values || (this._source = "NoValues");
    }
    getValues() {
      return this._rawValues
        ? (0, e._typedJsonParse)(
            this._rawValues,
            "has_updates",
            "EvaluationStoreValues",
          )
        : null;
    }
    setValues(n, i) {
      var s;
      if (!n) return !1;
      const o = (0, e._typedJsonParse)(
        n.data,
        "has_updates",
        "EvaluationResponse",
      );
      return o == null
        ? !1
        : ((this._source = n.source),
          o?.has_updates !== !0 ||
            ((this._rawValues = n.data),
            (this._lcut = o.time),
            (this._receivedAt = n.receivedAt),
            (this._values = o),
            (this._bootstrapMetadata = this._extractBootstrapMetadata(
              n.source,
              o,
            )),
            n.source && o.user && this._setWarningState(i, o),
            e.SDKFlags.setFlags(
              this._sdkKey,
              (s = o.sdk_flags) !== null && s !== void 0 ? s : {},
            )),
          !0);
    }
    getWarnings() {
      if (this._warnings.size !== 0) return Array.from(this._warnings);
    }
    getGate(n) {
      var i;
      return this._getDetailedStoreResult(
        (i = this._values) === null || i === void 0 ? void 0 : i.feature_gates,
        n,
      );
    }
    getConfig(n) {
      var i;
      return this._getDetailedStoreResult(
        (i = this._values) === null || i === void 0
          ? void 0
          : i.dynamic_configs,
        n,
      );
    }
    getLayer(n) {
      var i;
      return this._getDetailedStoreResult(
        (i = this._values) === null || i === void 0 ? void 0 : i.layer_configs,
        n,
      );
    }
    getParamStore(n) {
      var i;
      return this._getDetailedStoreResult(
        (i = this._values) === null || i === void 0 ? void 0 : i.param_stores,
        n,
      );
    }
    getSource() {
      return this._source;
    }
    getExposureMapping() {
      var n;
      return (n = this._values) === null || n === void 0 ? void 0 : n.exposures;
    }
    _extractBootstrapMetadata(n, i) {
      if (n !== "Bootstrap") return null;
      const s = {};
      return (
        i.user && (s.user = i.user),
        i.sdkInfo && (s.generatorSDKInfo = i.sdkInfo),
        (s.lcut = i.time),
        s
      );
    }
    _getDetailedStoreResult(n, i) {
      let s = null;
      return (
        n && (s = n[i] ? n[i] : n[(0, e._DJB2)(i)]),
        { result: s, details: this._getDetails(s == null) }
      );
    }
    _setWarningState(n, i) {
      var s, o;
      const a = e.StableID.get(this._sdkKey);
      if (
        ((s = n.customIDs) === null || s === void 0 ? void 0 : s.stableID) !==
          a &&
        ((!((o = n.customIDs) === null || o === void 0) && o.stableID) || a)
      ) {
        this._warnings.add("StableIDMismatch");
        return;
      }
      if ("user" in i) {
        const c = i.user;
        (0, e._getFullUserHash)(n) !== (0, e._getFullUserHash)(c) &&
          this._warnings.add("PartialUserMatch");
      }
    }
    getCurrentSourceDetails() {
      if (this._source === "Uninitialized" || this._source === "NoValues")
        return { reason: this._source };
      const n = {
        reason: this._source,
        lcut: this._lcut,
        receivedAt: this._receivedAt,
      };
      return (
        this._warnings.size > 0 && (n.warnings = Array.from(this._warnings)), n
      );
    }
    _getDetails(n) {
      var i, s;
      const o = this.getCurrentSourceDetails();
      let a = o.reason;
      const c = (i = o.warnings) !== null && i !== void 0 ? i : [];
      this._source === "Bootstrap" && c.length > 0 && (a = a + c[0]),
        a !== "Uninitialized" &&
          a !== "NoValues" &&
          (a = `${a}:${n ? "Unrecognized" : "Recognized"}`);
      const u =
        this._source === "Bootstrap" &&
        (s = this._bootstrapMetadata) !== null &&
        s !== void 0
          ? s
          : void 0;
      return (
        u && (o.bootstrapMetadata = u),
        Object.assign(Object.assign({}, o), { reason: a })
      );
    }
  };
  return (Ei.default = t), Ei;
}
var Mr = {},
  Ln = {},
  Cf;
function rE() {
  if (Cf) return Ln;
  (Cf = 1),
    Object.defineProperty(Ln, "__esModule", { value: !0 }),
    (Ln._resolveDeltasResponse = void 0);
  const e = Et(),
    t = 2;
  function r(o, a) {
    const c = (0, e._typedJsonParse)(a, "checksum", "DeltasEvaluationResponse");
    if (!c) return { hadBadDeltaChecksum: !0 };
    const u = n(o, c),
      l = i(u),
      d = (0, e._DJB2Object)(
        {
          feature_gates: l.feature_gates,
          dynamic_configs: l.dynamic_configs,
          layer_configs: l.layer_configs,
        },
        t,
      );
    return d === c.checksumV2
      ? JSON.stringify(l)
      : {
          hadBadDeltaChecksum: !0,
          badChecksum: d,
          badMergedConfigs: l,
          badFullResponse: c.deltas_full_response,
        };
  }
  Ln._resolveDeltasResponse = r;
  function n(o, a) {
    return Object.assign(Object.assign(Object.assign({}, o), a), {
      feature_gates: Object.assign(
        Object.assign({}, o.feature_gates),
        a.feature_gates,
      ),
      layer_configs: Object.assign(
        Object.assign({}, o.layer_configs),
        a.layer_configs,
      ),
      dynamic_configs: Object.assign(
        Object.assign({}, o.dynamic_configs),
        a.dynamic_configs,
      ),
    });
  }
  function i(o) {
    const a = o;
    return (
      s(o.deleted_gates, a.feature_gates),
      delete a.deleted_gates,
      s(o.deleted_configs, a.dynamic_configs),
      delete a.deleted_configs,
      s(o.deleted_layers, a.layer_configs),
      delete a.deleted_layers,
      a
    );
  }
  function s(o, a) {
    o?.forEach((c) => {
      delete a[c];
    });
  }
  return Ln;
}
var Af;
function Dv() {
  if (Af) return Mr;
  Af = 1;
  var e =
    (Mr && Mr.__awaiter) ||
    function (i, s, o, a) {
      function c(u) {
        return u instanceof o
          ? u
          : new o(function (l) {
              l(u);
            });
      }
      return new (o || (o = Promise))(function (u, l) {
        function d(_) {
          try {
            h(a.next(_));
          } catch (p) {
            l(p);
          }
        }
        function f(_) {
          try {
            h(a.throw(_));
          } catch (p) {
            l(p);
          }
        }
        function h(_) {
          _.done ? u(_.value) : c(_.value).then(d, f);
        }
        h((a = a.apply(i, s || [])).next());
      });
    };
  Object.defineProperty(Mr, "__esModule", { value: !0 });
  const t = Et(),
    r = rE();
  class n extends t.NetworkCore {
    constructor(s, o) {
      super(s, o);
      const a = s?.networkConfig;
      (this._option = s),
        (this._initializeUrlConfig = new t.UrlConfiguration(
          t.Endpoint._initialize,
          a?.initializeUrl,
          a?.api,
          a?.initializeFallbackUrls,
        ));
    }
    fetchEvaluations(s, o, a, c, u) {
      var l, d, f, h, _, p;
      return e(this, void 0, void 0, function* () {
        const g = o
          ? (0, t._typedJsonParse)(o, "has_updates", "InitializeResponse")
          : null;
        let y = {
          user: c,
          hash:
            (f =
              (d =
                (l = this._option) === null || l === void 0
                  ? void 0
                  : l.networkConfig) === null || d === void 0
                ? void 0
                : d.initializeHashAlgorithm) !== null && f !== void 0
              ? f
              : "djb2",
          deltasResponseRequested: !1,
          full_checksum: null,
        };
        if (g?.has_updates) {
          const E =
            g?.hash_used !==
            ((p =
              (_ =
                (h = this._option) === null || h === void 0
                  ? void 0
                  : h.networkConfig) === null || _ === void 0
                ? void 0
                : _.initializeHashAlgorithm) !== null && p !== void 0
              ? p
              : "djb2");
          y = Object.assign(Object.assign({}, y), {
            sinceTime: u && !E ? g.time : 0,
            previousDerivedFields:
              "derived_fields" in g && u ? g.derived_fields : {},
            deltasResponseRequested: !0,
            full_checksum: g.full_checksum,
            partialUserMatchSinceTime: E ? 0 : g.time,
          });
        }
        return this._fetchEvaluations(s, g, y, a);
      });
    }
    _fetchEvaluations(s, o, a, c) {
      var u, l;
      return e(this, void 0, void 0, function* () {
        const d = yield this.post({
          sdkKey: s,
          urlConfig: this._initializeUrlConfig,
          data: a,
          retries: 2,
          isStatsigEncodable: !0,
          priority: c,
        });
        if (d?.code === 204) return '{"has_updates": false}';
        if (d?.code !== 200)
          return (u = d?.body) !== null && u !== void 0 ? u : null;
        if (
          o?.has_updates !== !0 ||
          ((l = d.body) === null || l === void 0
            ? void 0
            : l.includes('"is_delta":true')) !== !0 ||
          a.deltasResponseRequested !== !0
        )
          return d.body;
        const f = (0, r._resolveDeltasResponse)(o, d.body);
        return typeof f == "string"
          ? f
          : this._fetchEvaluations(
              s,
              o,
              Object.assign(Object.assign(Object.assign({}, a), f), {
                deltasResponseRequested: !1,
              }),
              c,
            );
      });
    }
  }
  return (Mr.default = n), Mr;
}
var Dn = {},
  Of;
function nE() {
  if (Of) return Dn;
  (Of = 1),
    Object.defineProperty(Dn, "__esModule", { value: !0 }),
    (Dn._makeParamStoreGetter = void 0);
  const e = Et(),
    t = { disableExposureLog: !0 };
  function r(l) {
    return l == null || l.disableExposureLog === !1;
  }
  function n(l, d) {
    return d != null && !(0, e._isTypeMatch)(l, d);
  }
  function i(l, d) {
    return l.value;
  }
  function s(l, d, f) {
    return l.getFeatureGate(d.gate_name, r(f) ? void 0 : t).value
      ? d.pass_value
      : d.fail_value;
  }
  function o(l, d, f, h) {
    const p = l
      .getDynamicConfig(d.config_name, r(h) ? void 0 : t)
      .get(d.param_name);
    return n(p, f) ? f : p;
  }
  function a(l, d, f, h) {
    const p = l
      .getExperiment(d.experiment_name, r(h) ? void 0 : t)
      .get(d.param_name);
    return n(p, f) ? f : p;
  }
  function c(l, d, f, h) {
    const p = l.getLayer(d.layer_name, r(h) ? void 0 : t).get(d.param_name);
    return n(p, f) ? f : p;
  }
  function u(l, d, f) {
    return (h, _) => {
      if (d == null) return _;
      const p = d[h];
      if (p == null || (_ != null && (0, e._typeOf)(_) !== p.param_type))
        return _;
      switch (p.ref_type) {
        case "static":
          return i(p);
        case "gate":
          return s(l, p, f);
        case "dynamic_config":
          return o(l, p, _, f);
        case "experiment":
          return a(l, p, _, f);
        case "layer":
          return c(l, p, _, f);
        default:
          return _;
      }
    };
  }
  return (Dn._makeParamStoreGetter = u), Dn;
}
var nr = {},
  xf;
function iE() {
  if (xf) return nr;
  xf = 1;
  var e =
    (nr && nr.__awaiter) ||
    function (i, s, o, a) {
      function c(u) {
        return u instanceof o
          ? u
          : new o(function (l) {
              l(u);
            });
      }
      return new (o || (o = Promise))(function (u, l) {
        function d(_) {
          try {
            h(a.next(_));
          } catch (p) {
            l(p);
          }
        }
        function f(_) {
          try {
            h(a.throw(_));
          } catch (p) {
            l(p);
          }
        }
        function h(_) {
          _.done ? u(_.value) : c(_.value).then(d, f);
        }
        h((a = a.apply(i, s || [])).next());
      });
    };
  Object.defineProperty(nr, "__esModule", { value: !0 }),
    (nr.StatsigEvaluationsDataAdapter = void 0);
  const t = Et(),
    r = Dv();
  let n = class extends t.DataAdapterCore {
    constructor() {
      super("EvaluationsDataAdapter", "evaluations"),
        (this._network = null),
        (this._options = null);
    }
    attach(s, o, a) {
      super.attach(s, o, a),
        a !== null && a instanceof r.default
          ? (this._network = a)
          : (this._network = new r.default(o ?? {}));
    }
    getDataAsync(s, o, a) {
      return this._getDataAsyncImpl(
        s,
        (0, t._normalizeUser)(o, this._options),
        a,
      );
    }
    prefetchData(s, o) {
      return this._prefetchDataImpl(s, o);
    }
    setData(s) {
      const o = (0, t._typedJsonParse)(s, "has_updates", "data");
      o && "user" in o
        ? super.setData(s, o.user)
        : t.Log.error(
            "StatsigUser not found. You may be using an older server SDK version. Please upgrade your SDK or use setDataLegacy.",
          );
    }
    setDataLegacy(s, o) {
      super.setData(s, o);
    }
    _fetchFromNetwork(s, o, a, c) {
      var u;
      return e(this, void 0, void 0, function* () {
        const l = yield (u = this._network) === null || u === void 0
          ? void 0
          : u.fetchEvaluations(this._getSdkKey(), s, a?.priority, o, c);
        return l ?? null;
      });
    }
    _getCacheKey(s) {
      var o;
      const a = (0, t._getStorageKey)(
        this._getSdkKey(),
        s,
        (o = this._options) === null || o === void 0
          ? void 0
          : o.customUserCacheKeyFunc,
      );
      return `${t.DataAdapterCachePrefix}.${this._cacheSuffix}.${a}`;
    }
    _isCachedResultValidFor204(s, o) {
      return (
        s.fullUserHash != null && s.fullUserHash === (0, t._getFullUserHash)(o)
      );
    }
  };
  return (nr.StatsigEvaluationsDataAdapter = n), nr;
}
var Rf;
function sE() {
  if (Rf) return Dr;
  Rf = 1;
  var e =
    (Dr && Dr.__awaiter) ||
    function (a, c, u, l) {
      function d(f) {
        return f instanceof u
          ? f
          : new u(function (h) {
              h(f);
            });
      }
      return new (u || (u = Promise))(function (f, h) {
        function _(y) {
          try {
            g(l.next(y));
          } catch (E) {
            h(E);
          }
        }
        function p(y) {
          try {
            g(l.throw(y));
          } catch (E) {
            h(E);
          }
        }
        function g(y) {
          y.done ? f(y.value) : d(y.value).then(_, p);
        }
        g((l = l.apply(a, c || [])).next());
      });
    };
  Object.defineProperty(Dr, "__esModule", { value: !0 });
  const t = Et(),
    r = tE(),
    n = Dv(),
    i = nE(),
    s = iE();
  let o = class Hu extends t.StatsigClientBase {
    static instance(c) {
      const u = (0, t._getStatsigGlobal)().instance(c);
      return u instanceof Hu
        ? u
        : (t.Log.warn(
            (0, t._isServerEnv)()
              ? "StatsigClient.instance is not supported in server environments"
              : "Unable to find StatsigClient instance",
          ),
          new Hu(c ?? "", {}));
    }
    constructor(c, u, l = null) {
      var d, f;
      t.SDKType._setClientType(c, "javascript-client");
      const h = new n.default(l, (p) => {
        this.$emt(p);
      });
      super(
        c,
        (d = l?.dataAdapter) !== null && d !== void 0
          ? d
          : new s.StatsigEvaluationsDataAdapter(),
        h,
        l,
      ),
        (this.getFeatureGate = this._memoize(
          t.MemoPrefix._gate,
          this._getFeatureGateImpl.bind(this),
        )),
        (this.getDynamicConfig = this._memoize(
          t.MemoPrefix._dynamicConfig,
          this._getDynamicConfigImpl.bind(this),
        )),
        (this.getExperiment = this._memoize(
          t.MemoPrefix._experiment,
          this._getExperimentImpl.bind(this),
        )),
        (this.getLayer = this._memoize(
          t.MemoPrefix._layer,
          this._getLayerImpl.bind(this),
        )),
        (this.getParameterStore = this._memoize(
          t.MemoPrefix._paramStore,
          this._getParameterStoreImpl.bind(this),
        )),
        (this._store = new r.default(c)),
        (this._network = h),
        (this._user = this._configureUser(u, l));
      const _ = (f = l?.plugins) !== null && f !== void 0 ? f : [];
      for (const p of _) p.bind(this);
    }
    initializeSync(c) {
      var u;
      return this.loadingStatus !== "Uninitialized"
        ? (0, t.createUpdateDetails)(
            !0,
            this._store.getSource(),
            -1,
            null,
            null,
            [
              "MultipleInitializations",
              ...((u = this._store.getWarnings()) !== null && u !== void 0
                ? u
                : []),
            ],
          )
        : (this._logger.start(), this.updateUserSync(this._user, c));
    }
    initializeAsync(c) {
      return e(this, void 0, void 0, function* () {
        return this._initializePromise
          ? this._initializePromise
          : ((this._initializePromise = this._initializeAsyncImpl(c)),
            this._initializePromise);
      });
    }
    updateUserSync(c, u) {
      var l;
      const d = performance.now(),
        f = [
          ...((l = this._store.getWarnings()) !== null && l !== void 0
            ? l
            : []),
        ];
      this._resetForUser(c);
      const h = this.dataAdapter.getDataSync(this._user);
      h == null && f.push("NoCachedValues"),
        this._store.setValues(h, this._user),
        this._finalizeUpdate(h);
      const _ = u?.disableBackgroundCacheRefresh;
      return _ === !0 || (_ == null && h?.source === "Bootstrap")
        ? (0, t.createUpdateDetails)(
            !0,
            this._store.getSource(),
            performance.now() - d,
            this._errorBoundary.getLastSeenErrorAndReset(),
            this._network.getLastUsedInitUrlAndReset(),
            f,
          )
        : (this._runPostUpdate(h ?? null, this._user),
          (0, t.createUpdateDetails)(
            !0,
            this._store.getSource(),
            performance.now() - d,
            this._errorBoundary.getLastSeenErrorAndReset(),
            this._network.getLastUsedInitUrlAndReset(),
            f,
          ));
    }
    updateUserAsync(c, u) {
      return e(this, void 0, void 0, function* () {
        this._resetForUser(c);
        const l = this._user;
        t.Diagnostics._markInitOverallStart(this._sdkKey);
        let d = this.dataAdapter.getDataSync(l);
        if (
          (this._store.setValues(d, this._user),
          this._setStatus("Loading", d),
          (d = yield this.dataAdapter.getDataAsync(d, l, u)),
          l !== this._user)
        )
          return (0, t.createUpdateDetails)(
            !1,
            this._store.getSource(),
            -1,
            new Error("User changed during update"),
            this._network.getLastUsedInitUrlAndReset(),
          );
        let f = !1;
        d != null &&
          (t.Diagnostics._markInitProcessStart(this._sdkKey),
          (f = this._store.setValues(d, this._user)),
          t.Diagnostics._markInitProcessEnd(this._sdkKey, { success: f })),
          this._finalizeUpdate(d),
          f ||
            (this._errorBoundary.attachErrorIfNoneExists(
              t.UPDATE_DETAIL_ERROR_MESSAGES.NO_NETWORK_DATA,
            ),
            this.$emt({ name: "initialization_failure" })),
          t.Diagnostics._markInitOverallEnd(
            this._sdkKey,
            f,
            this._store.getCurrentSourceDetails(),
          );
        const h = t.Diagnostics._enqueueDiagnosticsEvent(
          this._user,
          this._logger,
          this._sdkKey,
          this._options,
        );
        return (0, t.createUpdateDetails)(
          f,
          this._store.getSource(),
          h,
          this._errorBoundary.getLastSeenErrorAndReset(),
          this._network.getLastUsedInitUrlAndReset(),
          this._store.getWarnings(),
        );
      });
    }
    getContext() {
      return {
        sdkKey: this._sdkKey,
        options: this._options,
        values: this._store.getValues(),
        user: JSON.parse(JSON.stringify(this._user)),
        errorBoundary: this._errorBoundary,
        session: t.StatsigSession.get(this._sdkKey),
        stableID: t.StableID.get(this._sdkKey),
      };
    }
    checkGate(c, u) {
      return this.getFeatureGate(c, u).value;
    }
    logEvent(c, u, l) {
      const d =
        typeof c == "string" ? { eventName: c, value: u, metadata: l } : c;
      this.$emt({ name: "log_event_called", event: d }),
        this._logger.enqueue(
          Object.assign(Object.assign({}, d), {
            user: this._user,
            time: Date.now(),
          }),
        );
    }
    _primeReadyRipcord() {
      this.$on("error", () => {
        this.loadingStatus === "Loading" && this._finalizeUpdate(null);
      });
    }
    _initializeAsyncImpl(c) {
      return e(this, void 0, void 0, function* () {
        return (
          t.Storage.isReady() || (yield t.Storage.isReadyResolver()),
          this._logger.start(),
          this.updateUserAsync(this._user, c)
        );
      });
    }
    _finalizeUpdate(c) {
      this._store.finalize(), this._setStatus("Ready", c);
    }
    _runPostUpdate(c, u) {
      this.dataAdapter.getDataAsync(c, u, { priority: "low" }).catch((l) => {
        t.Log.error("An error occurred after update.", l);
      });
    }
    _resetForUser(c) {
      this._logger.reset(),
        this._store.reset(),
        (this._user = this._configureUser(c, this._options));
    }
    _configureUser(c, u) {
      var l;
      const d = (0, t._normalizeUser)(c, u),
        f = (l = d.customIDs) === null || l === void 0 ? void 0 : l.stableID;
      return f && t.StableID.setOverride(f, this._sdkKey), d;
    }
    _getFeatureGateImpl(c, u) {
      var l, d;
      const { result: f, details: h } = this._store.getGate(c),
        _ = (0, t._makeFeatureGate)(c, h, f),
        p =
          (d =
            (l = this.overrideAdapter) === null || l === void 0
              ? void 0
              : l.getGateOverride) === null || d === void 0
            ? void 0
            : d.call(l, _, this._user, u),
        g = p ?? _;
      return (
        this._enqueueExposure(
          c,
          (0, t._createGateExposure)(
            this._user,
            g,
            this._store.getExposureMapping(),
          ),
          u,
        ),
        this.$emt({ name: "gate_evaluation", gate: g }),
        g
      );
    }
    _getDynamicConfigImpl(c, u) {
      var l, d;
      const { result: f, details: h } = this._store.getConfig(c),
        _ = (0, t._makeDynamicConfig)(c, h, f),
        p =
          (d =
            (l = this.overrideAdapter) === null || l === void 0
              ? void 0
              : l.getDynamicConfigOverride) === null || d === void 0
            ? void 0
            : d.call(l, _, this._user, u),
        g = p ?? _;
      return (
        this._enqueueExposure(
          c,
          (0, t._createConfigExposure)(
            this._user,
            g,
            this._store.getExposureMapping(),
          ),
          u,
        ),
        this.$emt({ name: "dynamic_config_evaluation", dynamicConfig: g }),
        g
      );
    }
    _getExperimentImpl(c, u) {
      var l, d, f, h;
      const { result: _, details: p } = this._store.getConfig(c),
        g = (0, t._makeExperiment)(c, p, _);
      g.__evaluation != null &&
        (g.__evaluation.secondary_exposures = (0, t._mapExposures)(
          (d =
            (l = g.__evaluation) === null || l === void 0
              ? void 0
              : l.secondary_exposures) !== null && d !== void 0
            ? d
            : [],
          this._store.getExposureMapping(),
        ));
      const y =
          (h =
            (f = this.overrideAdapter) === null || f === void 0
              ? void 0
              : f.getExperimentOverride) === null || h === void 0
            ? void 0
            : h.call(f, g, this._user, u),
        E = y ?? g;
      return (
        this._enqueueExposure(
          c,
          (0, t._createConfigExposure)(
            this._user,
            E,
            this._store.getExposureMapping(),
          ),
          u,
        ),
        this.$emt({ name: "experiment_evaluation", experiment: E }),
        E
      );
    }
    _getLayerImpl(c, u) {
      var l, d, f;
      const { result: h, details: _ } = this._store.getLayer(c),
        p = (0, t._makeLayer)(c, _, h),
        g =
          (d =
            (l = this.overrideAdapter) === null || l === void 0
              ? void 0
              : l.getLayerOverride) === null || d === void 0
            ? void 0
            : d.call(l, p, this._user, u);
      u?.disableExposureLog && this._logger.incrementNonExposureCount(c);
      const y = (0, t._mergeOverride)(
        p,
        g,
        (f = g?.__value) !== null && f !== void 0 ? f : p.__value,
        (E) => {
          u?.disableExposureLog ||
            this._enqueueExposure(
              c,
              (0, t._createLayerParameterExposure)(
                this._user,
                y,
                E,
                this._store.getExposureMapping(),
              ),
              u,
            );
        },
      );
      return this.$emt({ name: "layer_evaluation", layer: y }), y;
    }
    _getParameterStoreImpl(c, u) {
      var l, d;
      const { result: f, details: h } = this._store.getParamStore(c);
      this._logger.incrementNonExposureCount(c);
      const _ = {
          name: c,
          details: h,
          __configuration: f,
          get: (0, i._makeParamStoreGetter)(this, f, u),
        },
        p =
          (d =
            (l = this.overrideAdapter) === null || l === void 0
              ? void 0
              : l.getParamStoreOverride) === null || d === void 0
            ? void 0
            : d.call(l, _, u);
      return (
        p != null &&
          ((_.__configuration = p.config),
          (_.details = p.details),
          (_.get = (0, i._makeParamStoreGetter)(this, p.config, u))),
        _
      );
    }
  };
  return (Dr.default = o), Dr;
}
var If;
function oE() {
  return (
    If ||
      ((If = 1),
      (function (e) {
        var t =
            (rr && rr.__createBinding) ||
            (Object.create
              ? function (o, a, c, u) {
                  u === void 0 && (u = c);
                  var l = Object.getOwnPropertyDescriptor(a, c);
                  (!l ||
                    ("get" in l
                      ? !a.__esModule
                      : l.writable || l.configurable)) &&
                    (l = {
                      enumerable: !0,
                      get: function () {
                        return a[c];
                      },
                    }),
                    Object.defineProperty(o, u, l);
                }
              : function (o, a, c, u) {
                  u === void 0 && (u = c), (o[u] = a[c]);
                }),
          r =
            (rr && rr.__exportStar) ||
            function (o, a) {
              for (var c in o)
                c !== "default" &&
                  !Object.prototype.hasOwnProperty.call(a, c) &&
                  t(a, o, c);
            };
        Object.defineProperty(e, "__esModule", { value: !0 }),
          (e.StatsigClient = void 0);
        const n = Et(),
          i = sE();
        (e.StatsigClient = i.default), r(Et(), e);
        const s = Object.assign((0, n._getStatsigGlobal)(), {
          StatsigClient: i.default,
        });
        e.default = s;
      })(rr)),
    rr
  );
}
var Mv = oE(),
  ir = {},
  sr = {},
  Tf;
function aE() {
  if (Tf) return sr;
  Tf = 1;
  var e =
    (sr && sr.__awaiter) ||
    function (o, a, c, u) {
      function l(d) {
        return d instanceof c
          ? d
          : new c(function (f) {
              f(d);
            });
      }
      return new (c || (c = Promise))(function (d, f) {
        function h(g) {
          try {
            p(u.next(g));
          } catch (y) {
            f(y);
          }
        }
        function _(g) {
          try {
            p(u.throw(g));
          } catch (y) {
            f(y);
          }
        }
        function p(g) {
          g.done ? d(g.value) : l(g.value).then(h, _);
        }
        p((u = u.apply(o, a || [])).next());
      });
    };
  Object.defineProperty(sr, "__esModule", { value: !0 }),
    (sr.LocalOverrideAdapter = void 0);
  const t = Et(),
    r = "LocalOverride:Recognized";
  function n() {
    return { gate: {}, dynamicConfig: {}, experiment: {}, layer: {} };
  }
  function i(o, a) {
    return {
      gate: Object.assign({}, o.gate, a.gate),
      dynamicConfig: Object.assign({}, o.dynamicConfig, a.dynamicConfig),
      experiment: Object.assign({}, o.experiment, a.experiment),
      layer: Object.assign({}, o.layer, a.layer),
    };
  }
  let s = class {
    constructor(a) {
      (this._overrides = n()), (this._sdkKey = a ?? null);
    }
    _getLocalOverridesStorageKey(a) {
      return `statsig.local-overrides.${(0, t._getStorageKey)(a)}`;
    }
    loadFromStorage() {
      return e(this, void 0, void 0, function* () {
        if (this._sdkKey == null) return;
        t.Storage.isReady() || (yield t.Storage.isReadyResolver());
        const a = this._getLocalOverridesStorageKey(this._sdkKey),
          c = t.Storage.getItem(a),
          u = c
            ? (0, t._typedJsonParse)(
                c,
                "gate",
                "LocalOverrideAdapter overrides",
              )
            : null,
          l = this._hasInMemoryOverrides();
        u && (this._overrides = l ? i(u, this._overrides) : u),
          l && this._saveOverridesToStorage();
      });
    }
    _saveOverridesToStorage() {
      if (this._sdkKey == null || !t.Storage.isReady()) return;
      const a = this._getLocalOverridesStorageKey(this._sdkKey);
      t.Storage.setItem(a, JSON.stringify(this._overrides));
    }
    overrideGate(a, c) {
      (this._overrides.gate[a] = c),
        (this._overrides.gate[(0, t._DJB2)(a)] = c),
        this._saveOverridesToStorage();
    }
    _warnIfStorageNotReady() {
      t.Storage.isReady() ||
        t.Log.warn("Storage is not ready. Override removal may not persist.");
    }
    removeGateOverride(a) {
      this._warnIfStorageNotReady(),
        delete this._overrides.gate[a],
        delete this._overrides.gate[(0, t._DJB2)(a)],
        this._saveOverridesToStorage();
    }
    getGateOverride(a, c) {
      var u;
      const l =
        (u = this._overrides.gate[a.name]) !== null && u !== void 0
          ? u
          : this._overrides.gate[(0, t._DJB2)(a.name)];
      return l == null
        ? null
        : Object.assign(Object.assign({}, a), {
            value: l,
            details: Object.assign(Object.assign({}, a.details), { reason: r }),
          });
    }
    overrideDynamicConfig(a, c) {
      (this._overrides.dynamicConfig[a] = c),
        (this._overrides.dynamicConfig[(0, t._DJB2)(a)] = c),
        this._saveOverridesToStorage();
    }
    removeDynamicConfigOverride(a) {
      this._warnIfStorageNotReady(),
        delete this._overrides.dynamicConfig[a],
        delete this._overrides.dynamicConfig[(0, t._DJB2)(a)],
        this._saveOverridesToStorage();
    }
    getDynamicConfigOverride(a, c) {
      return this._getConfigOverride(a, this._overrides.dynamicConfig);
    }
    overrideExperiment(a, c) {
      (this._overrides.experiment[a] = c),
        (this._overrides.experiment[(0, t._DJB2)(a)] = c),
        this._saveOverridesToStorage();
    }
    removeExperimentOverride(a) {
      this._warnIfStorageNotReady(),
        delete this._overrides.experiment[a],
        delete this._overrides.experiment[(0, t._DJB2)(a)],
        this._saveOverridesToStorage();
    }
    getExperimentOverride(a, c) {
      return this._getConfigOverride(a, this._overrides.experiment);
    }
    overrideLayer(a, c) {
      (this._overrides.layer[a] = c),
        (this._overrides.layer[(0, t._DJB2)(a)] = c),
        this._saveOverridesToStorage();
    }
    removeLayerOverride(a) {
      this._warnIfStorageNotReady(),
        delete this._overrides.layer[a],
        delete this._overrides.layer[(0, t._DJB2)(a)],
        this._saveOverridesToStorage();
    }
    getAllOverrides() {
      return JSON.parse(JSON.stringify(this._overrides));
    }
    removeAllOverrides() {
      this._warnIfStorageNotReady(),
        (this._overrides = n()),
        this._saveOverridesToStorage();
    }
    getLayerOverride(a, c) {
      var u;
      const l =
        (u = this._overrides.layer[a.name]) !== null && u !== void 0
          ? u
          : this._overrides.layer[(0, t._DJB2)(a.name)];
      return l == null
        ? null
        : Object.assign(Object.assign({}, a), {
            __value: l,
            get: (0, t._makeTypedGet)(a.name, l),
            details: Object.assign(Object.assign({}, a.details), { reason: r }),
          });
    }
    _getConfigOverride(a, c) {
      var u;
      const l =
        (u = c[a.name]) !== null && u !== void 0 ? u : c[(0, t._DJB2)(a.name)];
      return l == null
        ? null
        : Object.assign(Object.assign({}, a), {
            value: l,
            get: (0, t._makeTypedGet)(a.name, l),
            details: Object.assign(Object.assign({}, a.details), { reason: r }),
          });
    }
    _hasInMemoryOverrides() {
      return (
        Object.keys(this._overrides.gate).length > 0 ||
        Object.keys(this._overrides.dynamicConfig).length > 0 ||
        Object.keys(this._overrides.experiment).length > 0 ||
        Object.keys(this._overrides.layer).length > 0
      );
    }
  };
  return (sr.LocalOverrideAdapter = s), sr;
}
var Pf;
function cE() {
  return (
    Pf ||
      ((Pf = 1),
      (function (e) {
        var t =
            (ir && ir.__createBinding) ||
            (Object.create
              ? function (n, i, s, o) {
                  o === void 0 && (o = s);
                  var a = Object.getOwnPropertyDescriptor(i, s);
                  (!a ||
                    ("get" in a
                      ? !i.__esModule
                      : a.writable || a.configurable)) &&
                    (a = {
                      enumerable: !0,
                      get: function () {
                        return i[s];
                      },
                    }),
                    Object.defineProperty(n, o, a);
                }
              : function (n, i, s, o) {
                  o === void 0 && (o = s), (n[o] = i[s]);
                }),
          r =
            (ir && ir.__exportStar) ||
            function (n, i) {
              for (var s in n)
                s !== "default" &&
                  !Object.prototype.hasOwnProperty.call(i, s) &&
                  t(i, n, s);
            };
        Object.defineProperty(e, "__esModule", { value: !0 }), r(aE(), e);
      })(ir)),
    ir
  );
}
var uE = cE();
const wi = (e, t, r = {}) => {
    const n = { level: e, message: String(t), ...r };
    t instanceof Error && (n.error = t),
      n.error instanceof Error && (n.error = n.error.stack ?? String(n.error));
    try {
      console[e](n);
    } catch {
      zu.error({
        level: "error",
        message:
          "Error stringifying log object." +
          (typeof n.message == "string" ? ` Message: ${n.message}` : ""),
      });
    }
  },
  zu = {
    info: (...e) => wi("info", ...e),
    error: (...e) => wi("error", ...e),
    warn: (...e) => wi("warn", ...e),
    debug: (...e) => wi("debug", ...e),
  },
  lE = "client-nb0qtYlZuy2tCMN5s5ncnuIBCJncjRViT0IzFm7GqST";
let jv = "development";
jv = "production";
const dE = jv;
function eM(e, t, r, n) {
  return De(e).logEvent(t, r, n);
}
function Wu(e, t, r) {
  return De(e).checkGate(t, r);
}
function tM(e, t, r) {
  return De(e).getDynamicConfig(t, r);
}
function rM(e, t, r) {
  return De(e).getExperiment(t, r);
}
function nM(e, t, r) {
  return De(e).getLayer(t, r);
}
const fE = Ir(() => new uE.LocalOverrideAdapter()),
  hE = (e) => {
    const t = {};
    return (
      typeof e?.custom?.auth_status == "string" &&
        (t.auth_status = e.custom.auth_status),
      typeof e?.locale == "string" && (t.browser_locale = e.locale),
      t
    );
  };
class pE extends Mv.StatsigClient {
  logEvent(t, r, n) {
    const i = {
      ...hE(this.getContext().user),
      ...(typeof t == "string" ? n : t.metadata),
    };
    super.logEvent(
      typeof t == "string" ? t : t.eventName,
      typeof t == "string" ? r : (t.value ?? void 0),
      i,
    );
  }
}
const De = Ir((e) => {
  const t = He(e),
    r = fE(e),
    n = new pE(lE, t.statsigUser, {
      environment: { tier: dE },
      networkConfig: {
        api: "https://ab.chatgpt.com/v1",
        preventAllNetworkTraffic: !1,
      },
      loggingBufferMaxSize: 100,
      disableLogging: !1,
      disableStorage: !1,
      overrideAdapter: r,
      logEventCompressionMode: Mv.LogEventCompressionMode.Forced,
    });
  return (
    n.dataAdapter.setData(JSON.stringify(t.statsigPayload)),
    n.initializeSync(),
    n
  );
});
function Mn() {
  return De(nt());
}
const X = {
  logEvent: (e, t, r) => Mn().logEvent(e, t ?? void 0, r),
  checkGate: (e) => Mn().checkGate(e),
  getUser: () => Mn().getContext().user,
  getLayerValue(e) {
    return (
      Mn()
        .getLayer(e.layerName, { disableExposureLog: !e.shouldLogExposure })
        .get(e.key) ?? e.defaultValue
    );
  },
  checkGateWithExposureLoggingDisabled: (e) =>
    Mn().checkGate(e, { disableExposureLog: !0 }),
};
function gE(e) {
  const t = rt();
  return { value: De(t).checkGate(e) };
}
function iM(e, t = !0) {
  const r = rt(),
    n = De(r);
  return {
    config: v.useMemo(
      () =>
        n.getExperiment(e, { disableExposureLog: !t }) ?? { get: (o, a) => a },
      [n, e, t],
    ),
  };
}
function Yl(e, { shouldLogExposure: t = !0 } = {}) {
  const r = rt(),
    n = De(r);
  return {
    layer: v.useMemo(
      () => n.getLayer(e, { disableExposureLog: !t }) ?? { get: (o, a) => a },
      [n, e, t],
    ),
  };
}
function sM(e, t, r) {
  const { layer: n } = Yl(e);
  return n.get(t, r);
}
function oM(e) {
  const t = rt(),
    r = De(t);
  return {
    config: v.useMemo(
      () => r.getDynamicConfig(e) ?? { get: (s, o) => o, value: {} },
      [r, e],
    ),
  };
}
const Kr = "@@",
  Jl = [],
  rs = new Map();
function jr(e, t, r, n) {
  if (rs.has(e) || e === "Ref")
    throw new Error(`Already registered pickler ${e}`);
  const i = { key: e, test: t, pickle: r, unpickle: n };
  rs.set(e, i), Jl.push(i);
}
function Uv() {
  const e = [],
    t = new Map();
  return function (r, n) {
    for (; e.length && e[e.length - 1][0] !== this; ) {
      const s = e.pop()[1];
      typeof s == "object" && s != null && t.set(s, t.size);
    }
    const i = this[r];
    if (typeof i == "object" && i != null) {
      const s = t.get(i);
      if (s != null) return { [Kr]: "Ref", "": s };
    }
    for (const s of Jl)
      if (s.test(i)) {
        const o = { [Kr]: s.key, "": s.pickle(i) };
        return e.push([o, i]), o;
      }
    if (typeof n == "object" && n != null) {
      if (Kr in n) throw new Error(`Unexpected ${Kr} property`);
      e.push([n, i]);
    }
    return n;
  };
}
function _E() {
  const e = [];
  return function (t, r) {
    if (typeof r != "object" || r == null) return r;
    if (Kr in r) {
      const { [Kr]: n, "": i } = r;
      if (n === "Ref") return e[i];
      const s = rs.get(n);
      if (!s) throw Error(`Unknown pickle key ${n}`);
      if (((r = s.unpickle(i)), typeof r != "object" || r == null)) return r;
    }
    return e.push(r), r;
  };
}
function vE() {
  (Jl.length = 0),
    rs.clear(),
    jr(
      "Map",
      (e) => e instanceof Map,
      (e) => [...e.entries()],
      (e) => new Map(e),
    ),
    jr(
      "Set",
      (e) => e instanceof Set,
      (e) => [...e.keys()],
      (e) => new Set(e),
    ),
    jr(
      "Date",
      (e) => e instanceof Date,
      (e) => e.toISOString(),
      (e) => new Date(e),
    ),
    jr(
      "RegExp",
      (e) => e instanceof RegExp,
      (e) => [e.source, e.flags],
      ([e, t]) => new RegExp(e, t),
    ),
    jr(
      "Number",
      (e) =>
        typeof e == "number" && (Object.is(e, -0) || !isFinite(e) || isNaN(e)),
      (e) => (Object.is(e, -0) ? "-0" : String(e)),
      (e) => Number(e),
    ),
    jr(
      "BigInt",
      (e) => typeof e == "bigint",
      (e) => String(e),
      (e) => BigInt(e),
    );
}
vE();
const mE = "OAI-Language",
  Bv = "OAI-Client-Version",
  qv = "OAI-Device-Id",
  bE = {},
  kf = (e) => {
    let t;
    const r = new Set(),
      n = (l, d) => {
        const f = typeof l == "function" ? l(t) : l;
        if (!Object.is(f, t)) {
          const h = t;
          (t =
            (d ?? (typeof f != "object" || f === null))
              ? f
              : Object.assign({}, t, f)),
            r.forEach((_) => _(t, h));
        }
      },
      i = () => t,
      c = {
        setState: n,
        getState: i,
        getInitialState: () => u,
        subscribe: (l) => (r.add(l), () => r.delete(l)),
        destroy: () => {
          (bE ? "production" : void 0) !== "production" &&
            console.warn(
              "[DEPRECATED] The `destroy` method will be unsupported in a future version. Instead use unsubscribe function returned by subscribe. Everything will be garbage-collected if store is garbage-collected.",
            ),
            r.clear();
        },
      },
      u = (t = e(n, i, c));
    return c;
  },
  bn = (e) => (e ? kf(e) : kf);
var yo = { exports: {} },
  So = {},
  Eo = { exports: {} },
  wo = {};
/**
 * @license React
 * use-sync-external-store-shim.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var Nf;
function yE() {
  if (Nf) return wo;
  Nf = 1;
  var e = Fl();
  function t(d, f) {
    return (d === f && (d !== 0 || 1 / d === 1 / f)) || (d !== d && f !== f);
  }
  var r = typeof Object.is == "function" ? Object.is : t,
    n = e.useState,
    i = e.useEffect,
    s = e.useLayoutEffect,
    o = e.useDebugValue;
  function a(d, f) {
    var h = f(),
      _ = n({ inst: { value: h, getSnapshot: f } }),
      p = _[0].inst,
      g = _[1];
    return (
      s(
        function () {
          (p.value = h), (p.getSnapshot = f), c(p) && g({ inst: p });
        },
        [d, h, f],
      ),
      i(
        function () {
          return (
            c(p) && g({ inst: p }),
            d(function () {
              c(p) && g({ inst: p });
            })
          );
        },
        [d],
      ),
      o(h),
      h
    );
  }
  function c(d) {
    var f = d.getSnapshot;
    d = d.value;
    try {
      var h = f();
      return !r(d, h);
    } catch {
      return !0;
    }
  }
  function u(d, f) {
    return f();
  }
  var l =
    typeof window > "u" ||
    typeof window.document > "u" ||
    typeof window.document.createElement > "u"
      ? u
      : a;
  return (
    (wo.useSyncExternalStore =
      e.useSyncExternalStore !== void 0 ? e.useSyncExternalStore : l),
    wo
  );
}
var Lf;
function SE() {
  return Lf || ((Lf = 1), (Eo.exports = yE())), Eo.exports;
}
/**
 * @license React
 * use-sync-external-store-shim/with-selector.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var Df;
function EE() {
  if (Df) return So;
  Df = 1;
  var e = Fl(),
    t = SE();
  function r(u, l) {
    return (u === l && (u !== 0 || 1 / u === 1 / l)) || (u !== u && l !== l);
  }
  var n = typeof Object.is == "function" ? Object.is : r,
    i = t.useSyncExternalStore,
    s = e.useRef,
    o = e.useEffect,
    a = e.useMemo,
    c = e.useDebugValue;
  return (
    (So.useSyncExternalStoreWithSelector = function (u, l, d, f, h) {
      var _ = s(null);
      if (_.current === null) {
        var p = { hasValue: !1, value: null };
        _.current = p;
      } else p = _.current;
      _ = a(
        function () {
          function y(w) {
            if (!E) {
              if (((E = !0), (A = w), (w = f(w)), h !== void 0 && p.hasValue)) {
                var C = p.value;
                if (h(C, w)) return (b = C);
              }
              return (b = w);
            }
            if (((C = b), n(A, w))) return C;
            var O = f(w);
            return h !== void 0 && h(C, O) ? C : ((A = w), (b = O));
          }
          var E = !1,
            A,
            b,
            S = d === void 0 ? null : d;
          return [
            function () {
              return y(l());
            },
            S === null
              ? void 0
              : function () {
                  return y(S());
                },
          ];
        },
        [l, d, f, h],
      );
      var g = i(u, _[0], _[1]);
      return (
        o(
          function () {
            (p.hasValue = !0), (p.value = g);
          },
          [g],
        ),
        c(g),
        g
      );
    }),
    So
  );
}
var Mf;
function wE() {
  return Mf || ((Mf = 1), (yo.exports = EE())), yo.exports;
}
var CE = wE();
const Fv = $e(CE),
  Gv = {},
  { useDebugValue: AE } = ne,
  { useSyncExternalStoreWithSelector: OE } = Fv;
let jf = !1;
const xE = (e) => e;
function Ts(e, t = xE, r) {
  (Gv ? "production" : void 0) !== "production" &&
    r &&
    !jf &&
    (console.warn(
      "[DEPRECATED] Use `createWithEqualityFn` instead of `create` or use `useStoreWithEqualityFn` instead of `useStore`. They can be imported from 'zustand/traditional'. https://github.com/pmndrs/zustand/discussions/1937",
    ),
    (jf = !0));
  const n = OE(
    e.subscribe,
    e.getState,
    e.getServerState || e.getInitialState,
    t,
    r,
  );
  return AE(n), n;
}
const Uf = (e) => {
    (Gv ? "production" : void 0) !== "production" &&
      typeof e != "function" &&
      console.warn(
        "[DEPRECATED] Passing a vanilla store will be unsupported in a future version. Instead use `import { useStore } from 'zustand'`.",
      );
    const t = typeof e == "function" ? bn(e) : e,
      r = (n, i) => Ts(t, n, i);
    return Object.assign(r, t), r;
  },
  pt = (e) => (e ? Uf(e) : Uf),
  RE = "4dc7f8dcbaf358ca582fa5ec3f4acf92747879cc",
  IE = "prod",
  TE = "",
  PE = "",
  Zl = `${IE}-${RE}${TE}${PE}`;
var or = {},
  Ci = {};
/*!
 * cookie
 * Copyright(c) 2012-2014 Roman Shtylman
 * Copyright(c) 2015 Douglas Christopher Wilson
 * MIT Licensed
 */ var Bf;
function kE() {
  if (Bf) return Ci;
  (Bf = 1), (Ci.parse = n), (Ci.serialize = i);
  var e = decodeURIComponent,
    t = encodeURIComponent,
    r = /^[\u0009\u0020-\u007e\u0080-\u00ff]+$/;
  function n(o, a) {
    if (typeof o != "string")
      throw new TypeError("argument str must be a string");
    for (
      var c = {}, u = a || {}, l = o.split(";"), d = u.decode || e, f = 0;
      f < l.length;
      f++
    ) {
      var h = l[f],
        _ = h.indexOf("=");
      if (!(_ < 0)) {
        var p = h.substring(0, _).trim();
        if (c[p] == null) {
          var g = h.substring(_ + 1, h.length).trim();
          g[0] === '"' && (g = g.slice(1, -1)), (c[p] = s(g, d));
        }
      }
    }
    return c;
  }
  function i(o, a, c) {
    var u = c || {},
      l = u.encode || t;
    if (typeof l != "function") throw new TypeError("option encode is invalid");
    if (!r.test(o)) throw new TypeError("argument name is invalid");
    var d = l(a);
    if (d && !r.test(d)) throw new TypeError("argument val is invalid");
    var f = o + "=" + d;
    if (u.maxAge != null) {
      var h = u.maxAge - 0;
      if (isNaN(h) || !isFinite(h))
        throw new TypeError("option maxAge is invalid");
      f += "; Max-Age=" + Math.floor(h);
    }
    if (u.domain) {
      if (!r.test(u.domain)) throw new TypeError("option domain is invalid");
      f += "; Domain=" + u.domain;
    }
    if (u.path) {
      if (!r.test(u.path)) throw new TypeError("option path is invalid");
      f += "; Path=" + u.path;
    }
    if (u.expires) {
      if (typeof u.expires.toUTCString != "function")
        throw new TypeError("option expires is invalid");
      f += "; Expires=" + u.expires.toUTCString();
    }
    if (
      (u.httpOnly && (f += "; HttpOnly"),
      u.secure && (f += "; Secure"),
      u.sameSite)
    ) {
      var _ =
        typeof u.sameSite == "string" ? u.sameSite.toLowerCase() : u.sameSite;
      switch (_) {
        case !0:
          f += "; SameSite=Strict";
          break;
        case "lax":
          f += "; SameSite=Lax";
          break;
        case "strict":
          f += "; SameSite=Strict";
          break;
        case "none":
          f += "; SameSite=None";
          break;
        default:
          throw new TypeError("option sameSite is invalid");
      }
    }
    return f;
  }
  function s(o, a) {
    try {
      return a(o);
    } catch {
      return o;
    }
  }
  return Ci;
}
var qf;
function NE() {
  return (
    qf ||
      ((qf = 1),
      (function (e) {
        var t =
            (or && or.__assign) ||
            function () {
              return (
                (t =
                  Object.assign ||
                  function (g) {
                    for (var y, E = 1, A = arguments.length; E < A; E++) {
                      y = arguments[E];
                      for (var b in y)
                        Object.prototype.hasOwnProperty.call(y, b) &&
                          (g[b] = y[b]);
                    }
                    return g;
                  }),
                t.apply(this, arguments)
              );
            },
          r =
            (or && or.__rest) ||
            function (g, y) {
              var E = {};
              for (var A in g)
                Object.prototype.hasOwnProperty.call(g, A) &&
                  y.indexOf(A) < 0 &&
                  (E[A] = g[A]);
              if (
                g != null &&
                typeof Object.getOwnPropertySymbols == "function"
              )
                for (
                  var b = 0, A = Object.getOwnPropertySymbols(g);
                  b < A.length;
                  b++
                )
                  y.indexOf(A[b]) < 0 &&
                    Object.prototype.propertyIsEnumerable.call(g, A[b]) &&
                    (E[A[b]] = g[A[b]]);
              return E;
            };
        Object.defineProperty(e, "__esModule", { value: !0 }),
          (e.checkCookies =
            e.hasCookie =
            e.removeCookies =
            e.deleteCookie =
            e.setCookies =
            e.setCookie =
            e.getCookie =
            e.getCookies =
              void 0);
        var n = kE(),
          i = function () {
            return typeof window < "u";
          },
          s = function (g) {
            if (g === "true") return !0;
            if (g === "false") return !1;
            if (g !== "undefined") return g === "null" ? null : g;
          },
          o = function (g) {
            g === void 0 && (g = "");
            try {
              var y = JSON.stringify(g);
              return /^[\{\[]/.test(y) ? y : g;
            } catch {
              return g;
            }
          },
          a = function (g) {
            return g && g.replace(/(%[0-9A-Z]{2})+/g, decodeURIComponent);
          },
          c = function (g) {
            var y;
            if ((g && (y = g.req), !i()))
              return y && y.cookies
                ? y.cookies
                : y && y.headers && y.headers.cookie
                  ? (0, n.parse)(y.headers.cookie)
                  : {};
            for (
              var E = {},
                A = document.cookie ? document.cookie.split("; ") : [],
                b = 0,
                S = A.length;
              b < S;
              b++
            ) {
              var w = A[b].split("="),
                C = w.slice(1).join("="),
                O = w[0];
              E[O] = C;
            }
            return E;
          };
        e.getCookies = c;
        var u = function (g, y) {
          var E = (0, e.getCookies)(y),
            A = E[g];
          if (A !== void 0) return s(a(A));
        };
        e.getCookie = u;
        var l = function (g, y, E) {
          var A, b, S;
          if (E) {
            var w = E.req,
              C = E.res,
              O = r(E, ["req", "res"]);
            (b = w), (S = C), (A = O);
          }
          var T = (0, n.serialize)(g, o(y), t({ path: "/" }, A));
          if (i()) document.cookie = T;
          else if (S && b) {
            var I = S.getHeader("Set-Cookie");
            if (
              (Array.isArray(I) || (I = I ? [String(I)] : []),
              S.setHeader("Set-Cookie", I.concat(T)),
              b && b.cookies)
            ) {
              var N = b.cookies;
              y === "" ? delete N[g] : (N[g] = o(y));
            }
            if (b && b.headers && b.headers.cookie) {
              var N = (0, n.parse)(b.headers.cookie);
              y === "" ? delete N[g] : (N[g] = o(y)),
                (b.headers.cookie = Object.entries(N).reduce(function (B, F) {
                  return B.concat("".concat(F[0], "=").concat(F[1], ";"));
                }, ""));
            }
          }
        };
        e.setCookie = l;
        var d = function (g, y, E) {
          return (
            console.warn(
              "[WARN]: setCookies was deprecated. It will be deleted in the new version. Use setCookie instead.",
            ),
            (0, e.setCookie)(g, y, E)
          );
        };
        e.setCookies = d;
        var f = function (g, y) {
          return (0, e.setCookie)(g, "", t(t({}, y), { maxAge: -1 }));
        };
        e.deleteCookie = f;
        var h = function (g, y) {
          return (
            console.warn(
              "[WARN]: removeCookies was deprecated. It will be deleted in the new version. Use deleteCookie instead.",
            ),
            (0, e.deleteCookie)(g, y)
          );
        };
        e.removeCookies = h;
        var _ = function (g, y) {
          if (!g) return !1;
          var E = (0, e.getCookies)(y);
          return E.hasOwnProperty(g);
        };
        e.hasCookie = _;
        var p = function (g, y) {
          return (
            console.warn(
              "[WARN]: checkCookies was deprecated. It will be deleted in the new version. Use hasCookie instead.",
            ),
            (0, e.hasCookie)(g, y)
          );
        };
        e.checkCookies = p;
      })(or)),
    or
  );
}
var Ai = NE(),
  q = ((e) => (
    (e.AgeVerification = "oai-av-seen"),
    (e.AllowNonessential = "oai-allow-ne"),
    (e.CookieBannerShownPath = "oai-cbs"),
    (e.CookieBannerIgnored = "oai-cbi"),
    (e.LastVoiceInteraction = "oai-lvi"),
    (e.DeviceId = "oai-did"),
    (e.WaId = "oai-wid"),
    (e.IpOverride = "oai-ip-country"),
    (e.IpCityOverride = "oai-ip-city"),
    (e.ShowPaymentModal = "ui-show-payment-modal"),
    (e.TempEnableUnauthedCompliance = "temp-oai-compliance"),
    (e.Workspace = "_account"),
    (e.WorkspaceResidencyRegion = "_account_residency_region"),
    (e.LastLocation = "oai-ll"),
    (e.HideLoggedOutBanner = "hide-logged-out-banner"),
    (e.HasLoggedInBefore = "oai-hlib"),
    (e.PunchOutInfoToken = "oai-poit"),
    (e.PunchOutRequireLoginInfo = "oai-porli"),
    (e.SharedConversationId = "oai-sh-c-i"),
    (e.AuthSessionLoggingId = "oai-asli"),
    (e.PunchOutRequireAnonToAuthedToken = "oai-po-ra2a"),
    (e.PunchOutAnonToAuthedEnabled = "oai-po-a2a"),
    (e.DowngradeAccountEnabled = "oai-downgrade-account-enabled"),
    (e.SegmentUserId = "ajs_user_id"),
    (e.SegmentUserTraits = "ajs_user_traits"),
    (e.HasClickedOnTryItFirstLink = "oai-tif-20240402"),
    (e.IntercomDeviceIdProd = "intercom-device-id-dgkjq2bp"),
    (e.IntercomDeviceIdDev = "intercom-device-id-izw1u7l7"),
    (e.DomainMigrationSourceCompleted = "oai-dm-src-c-240329"),
    (e.DomainMigrationTargetCompleted = "oai-dm-tgt-c-240329"),
    (e.SignupRedirectUrl = "signup_redirect_url"),
    (e.DesktopResultsTab = "sonic_desktop_results_tab"),
    (e.NavigationState = "oai-nav-state"),
    (e.PreferredLocale = "oai-locale"),
    (e.ThreadSidebarState = "oai-thread-sidebar"),
    (e.InternalSearchSettings = "oai-internal-search-settings"),
    (e.LastUsedModel = "oai-last-model"),
    (e.LastUsedEffortMode = "oai-last-effort-mode"),
    (e.IsSpecificModel = "oai-is-specific-model"),
    (e.GreetingName = "oai-gn"),
    (e.headlineMessage = "oai-hm"),
    (e.Gclid = "gclid"),
    (e.Fbclid = "fbclid"),
    (e.Rdtcid = "rdt_cid"),
    (e.LastSelectedGithubRepo = "oai-last-selected-github-repo"),
    e
  ))(q || {});
const LE = ["gclid", "fbclid", "rdt_cid"],
  DE = { sameSite: "lax" },
  ME = ".chatgpt.com",
  Vv = window !== window.top,
  jE = (e) => e && e.replace(/(%[0-9A-Z]{2})+/g, decodeURIComponent);
class $v {
  allowAnalyticsCookies = !1;
  constructor() {
    Vv ||
      (this.synchronizeWithLocalStorage(),
      setInterval(() => this.synchronizeWithLocalStorage(), 6e4));
  }
  setAllowAnalyticsCookies_CLIENT_ONLY(t) {
    (this.allowAnalyticsCookies = t), t === !1 && this.clearAnalyticsCookies();
  }
  clearAnalyticsCookies() {
    for (const t of LE) this.deleteCookie(t);
  }
  synchronizeWithLocalStorage() {
    [q.Workspace, q.WorkspaceResidencyRegion, q.DeviceId].forEach((r) => {
      const n = Ai.getCookie(r);
      n != null
        ? localStorage.setItem(r, JSON.stringify(n))
        : localStorage.removeItem(r);
    });
  }
  _getCookie(t) {
    const r = Ai.getCookies()[t];
    return r === void 0 ? void 0 : jE(r);
  }
  getCookie(t) {
    return this._getCookie(t);
  }
  getBooleanCookie(t) {
    const r = this._getCookie(t);
    return r == null ? void 0 : r === "true";
  }
  getAnalyticsCookie(t) {
    if (this.allowAnalyticsCookies) return this._getCookie(t);
    this.deleteCookie(t);
  }
  _setCookie(t, r, n) {
    Ai.setCookie(t, r, { ...DE, ...n });
  }
  setCookie(t, r, n) {
    this._setCookie(t, r, n);
  }
  setBooleanCookie(t, r, n) {
    this._setCookie(t, r != null ? (r ? "true" : "false") : void 0, n);
  }
  setAnalyticsCookie(t, r, n) {
    this.allowAnalyticsCookies
      ? this._setCookie(t, r, n)
      : this.deleteCookie(t);
  }
  deleteCookie(t) {
    const r = {};
    Ai.deleteCookie(t, r);
  }
}
class UE extends $v {
  getCookie(t) {
    const r = localStorage.getItem(t);
    return typeof r == "string" ? JSON.parse(r) : r;
  }
  setCookie() {}
  setAnalyticsCookie() {}
  deleteCookie() {}
  setAllowAnalyticsCookies_CLIENT_ONLY() {}
}
const $ = Vv ? new UE() : new $v(),
  BE = 60 * 60 * 24 * 30 * 12,
  qE = () => It(),
  FE = (e) => typeof e == "string" && e.length > 0,
  GE = (e) => {
    const t = { maxAge: BE };
    return (
      e.endsWith("openai.com")
        ? (t.domain = ".openai.com")
        : e.endsWith("chatgpt.com") && (t.domain = ".chatgpt.com"),
      t
    );
  };
function VE() {
  return window.location.hostname ?? void 0;
}
function yn(e = VE()) {
  const t = $.getCookie(q.DeviceId);
  if (FE(t)) return t;
  const r = qE(),
    n = GE(e);
  return $.setCookie(q.DeviceId, r, n), r;
}
function aM() {
  window.location.href = window.location.origin + "/auth/logout";
}
const cM = "auth_session_logging_id";
var $E = ((e) => (
    (e.OpenAI = "openai"),
    (e.OpenAIDev = "openai-dev"),
    (e.Auth0 = "auth0"),
    (e.Auth0dev = "auth0dev"),
    (e.Mocked = "mocked"),
    (e.LoginWebAuth0 = "login-web"),
    (e.LoginWebAuth0Dev = "login-web-dev"),
    (e.Auth0Sidetron = "auth0-sidetron"),
    (e.Auth0SidetronDev = "auth0-sidetron-dev"),
    (e.OpenAISidetron = "openai-sidetron"),
    (e.OpenAISidetronDev = "openai-sidetron-dev"),
    e
  ))($E || {}),
  HE = ((e) => (
    (e[(e.Auth0 = 1)] = "Auth0"), (e[(e.WorkOS = 2)] = "WorkOS"), e
  ))(HE || {});
const Hv = Ir((e) => {
  const t = He(e),
    r = t.authStatus === "logged_in" ? t.session : null;
  return bn(() => ({ session: r }));
});
function zv(e) {
  return He(e).authStatus === "logged_in";
}
function Ps(e) {
  return Hv(e).getState().session;
}
function zE(e) {
  return Ps(e)?.accessToken;
}
async function WE(e) {
  try {
    const t = Date.now(),
      r = new URL("/api/auth/session", location.origin);
    r.searchParams.set("refresh", "true");
    for (const [c, u] of Object.entries(e)) r.searchParams.set(c, u);
    const n = yn();
    x.addAction(`Refreshing access token due to ${e.reason} error.`, {
      ...e,
      url: location.origin + (e.path ?? ""),
      deviceId: n,
    });
    const i = await fetch(r, { headers: { [qv]: n, [Bv]: Zl } }),
      s = await i.json(),
      a = (Date.now() - t) / 1e3;
    if (
      (i.status !== 200 &&
        x.addAction("fetchSession.statusNon200", {
          status: i.status,
          reqDuration: a,
        }),
      Object.keys(s).length)
    )
      return (
        s.accessToken == null &&
          s.error == null &&
          x.addAction("missing_access_token_error", {
            error: `Missing access token for User: ${s.user?.id} (${s.accessToken})`,
          }),
        s.error === "RefreshAccessTokenError" &&
          window._oaiHandleSessionExpired?.("page load", s.error),
        s.error && x.addAction("fetchSession.error", { error: s.error }),
        s
      );
  } catch {}
  return null;
}
function KE() {
  const e = rt();
  return { session: Ps(e), isLoading: !1 };
}
function uM(e) {
  return !e || !e.email ? !1 : e.email.endsWith("@openai.com");
}
var rn = ((e) => ((e.LoggedOut = "logged_out"), (e.LoggedIn = "logged_in"), e))(
    rn || {},
  ),
  YE = ((e) => ((e.AuthApi = "authapi"), (e.Auth0 = "auth0"), e))(YE || {});
const lM = "https://api.openai.com/mfa",
  JE = Ir(() => ({ pending: null }));
function ZE(e, t) {
  const r = JE(e);
  return (
    r.pending ||
      (r.pending = (async () => {
        try {
          const n = await WE(t),
            i = Hv(e),
            s = i.getState().session;
          s &&
            n?.accessToken &&
            i.setState({ session: { ...s, accessToken: n.accessToken } });
        } finally {
          r.pending = null;
        }
      })()),
    r.pending
  );
}
function QE(e) {
  if (e == null) return null;
  const t = He(nt());
  return t.authStatus !== rn.LoggedIn
    ? null
    : { workspaceId: e, userId: t.user.id };
}
function Wv(e, t) {
  const r = QE(e);
  return r == null ? null : `cache/${r.userId}/${r.workspaceId}/${t}`;
}
const XE = 1e3 * 60 * 60 * 24;
function ew(e, t, r) {
  const n = Wv(e, t);
  if (n == null) return;
  const i = localStorage.getItem(n);
  if (i != null)
    try {
      const {
        value: s,
        timestamp: o,
        version: a,
        used: c,
      } = JSON.parse(i, _E());
      if (a !== r || Date.now() - o > XE) {
        localStorage.removeItem(n);
        return;
      }
      return {
        localStorageKey: n,
        value: s,
        version: a,
        used: typeof c == "number" ? c : 0,
      };
    } catch {
      return;
    }
}
const Co = {};
function dM(e, t, r) {
  if (e == null) return;
  if (t in Co) return Co[t];
  const n = ew(e, t, r);
  if (
    (x.addAction(`localStorageCache.${t}`, {
      cacheVersion: r,
      wasPresent: n != null,
    }),
    (Co[t] = n?.value),
    n != null)
  )
    return (
      n.used + 1 >= 4
        ? localStorage.removeItem(n.localStorageKey)
        : localStorage.setItem(
            n.localStorageKey,
            JSON.stringify(
              {
                timestamp: Date.now(),
                value: n.value,
                version: n.version,
                used: n.used + 1,
              },
              Uv(),
            ),
          ),
      n.value
    );
}
function fM(e, t, r, n) {
  const i = Wv(e, t);
  i != null &&
    localStorage.setItem(
      i,
      JSON.stringify({ value: r, timestamp: Date.now(), version: n }, Uv()),
    );
}
function Kv() {
  for (const e of Object.keys(localStorage))
    e.startsWith("cache/") && localStorage.removeItem(e);
}
const tw = Object.prototype.toString;
function rw(e, t) {
  try {
    return e instanceof t;
  } catch {
    return !1;
  }
}
function nw(e) {
  switch (tw.call(e)) {
    case "[object Error]":
    case "[object Exception]":
    case "[object DOMException]":
      return !0;
    default:
      return rw(e, Error);
  }
}
const Ff = { componentStack: null, error: null };
function iw(e, t) {
  const r = new WeakMap();
  function n(i, s) {
    if (!r.has(i)) {
      if (i.cause) return r.set(i, !0), n(i.cause, s);
      i.cause = s;
    }
  }
  n(e, t);
}
const sw = [
  "The node to be removed is not a child of this node",
  "The object can not be found here.",
];
function ow(e) {
  return sw.some((t) => e.message?.includes(t)) || e instanceof Ae;
}
let Yv = class extends v.Component {
  state;
  constructor(t) {
    super(t), (this.state = Ff);
  }
  componentDidCatch(t, { componentStack: r }) {
    if (nw(t)) {
      const n = new Error(t.message);
      (n.name = `React ErrorBoundary ${n.name}`), (n.stack = r ?? ""), iw(t, n);
    }
    if (!ow(t)) {
      const n = new Error(t.message);
      (n.name = "ReactRenderingError"),
        (n.stack = r ?? ""),
        (n.cause = t),
        x.addError(n, { error_boundary: this.props.name });
    }
    Kv(),
      this.props.onError && this.props.onError(t, r ?? ""),
      this.setState({ error: t, componentStack: r });
  }
  resetErrorBoundary = () => {
    const { onReset: t } = this.props,
      { error: r, componentStack: n } = this.state;
    t && t(r, n ?? ""), this.setState(Ff);
  };
  render() {
    const { fallback: t, children: r } = this.props,
      n = this.state;
    if (n.error) {
      let i;
      return (
        typeof t == "function"
          ? (i = t({
              error: n.error,
              componentStack: n.componentStack ?? "",
              resetError: this.resetErrorBoundary,
            }))
          : (i = t),
        v.isValidElement(i) ? i : null
      );
    }
    return typeof r == "function" ? r() : r;
  }
};
function aw(e) {
  if (typeof document > "u") throw new Error("not supported in SSR");
  const t = document.createElement("template");
  return (t.innerHTML = e), t.innerHTML;
}
function cw(e) {
  return `data:image/svg+xml;utf8,${encodeURIComponent(e)}`;
}
const pM = ({ svgString: e, ...t }) => {
    const r = v.useMemo(() => aw(e), [e]);
    return r ? m.jsx("img", { src: cw(r), ...t }) : null;
  },
  gM = ({ svgString: e, className: t, color: r }) =>
    m.jsx(Yv, {
      name: "StringToSVG",
      fallback: m.jsx("div", { className: t }),
      children: m.jsx("div", {
        className: te("[&_svg]:h-full [&_svg]:w-full", t),
        dangerouslySetInnerHTML: { __html: e },
        style: { color: r },
      }),
    }),
  uw = [
    {
      name: "description",
      content:
        "ChatGPT helps you get answers, find inspiration and be more productive. It is free to use and easy to try. Just ask and ChatGPT can help with writing, learning, brainstorming and more.",
    },
    {
      name: "keyword",
      content:
        "ai chat,ai,chap gpt,chat gbt,chat gpt 3,chat gpt login,chat gpt website,chat gpt,chat gtp,chat openai,chat,chatai,chatbot gpt,chatg,chatgpt login,chatgpt,gpt chat,open ai,openai chat,openai chatgpt,openai",
    },
    {
      property: "og:description",
      content:
        "A conversational AI system that listens, learns, and challenges",
    },
    { property: "og:title", content: "ChatGPT" },
    { property: "og:image", content: FS.src },
    { property: "og:url", content: "https://chatgpt.com" },
  ];
function lw() {
  const { layer: e } = Yl("3927927759"),
    t = e.get("enable_mobile_app_upsell_banner", !1);
  return m.jsx(m.Fragment, {
    children: t && m.jsx("link", { rel: "manifest", href: "/manifest.json" }),
  });
}
function dw() {
  const { pathname: e } = Or(),
    t = !e.startsWith("/share") && !e.startsWith("/s"),
    { layer: r } = Yl("3927927759"),
    n = r.get("enable_mobile_app_upsell_banner", !1);
  return m.jsxs(m.Fragment, {
    children: [
      m.jsx("link", { rel: "preconnect", href: "https://cdn.oaistatic.com" }),
      m.jsx("link", { rel: "preconnect", href: "https://ab.chatgpt.com" }),
      t && m.jsx("meta", { name: "robots", content: "index, follow" }),
      m.jsx("meta", {
        httpEquiv: "Content-Type",
        content: "text/html; charset=utf-8",
      }),
      n &&
        m.jsx("meta", {
          name: "apple-itunes-app",
          content: "app-id=6448311069",
        }),
    ],
  });
}
function fw() {
  const { pathname: e } = Or();
  return m.jsxs(m.Fragment, {
    children: [
      e.startsWith("/codex")
        ? m.jsxs(m.Fragment, {
            children: [
              m.jsx("link", { rel: "icon", href: $S, sizes: "32x32" }),
              m.jsx("link", { rel: "icon", href: HS, type: "image/svg+xml" }),
            ],
          })
        : m.jsxs(m.Fragment, {
            children: [
              m.jsx("link", { rel: "icon", href: zS, sizes: "32x32" }),
              m.jsx("link", { rel: "icon", href: WS, type: "image/svg+xml" }),
            ],
          }),
      m.jsx("link", {
        rel: "apple-touch-icon",
        sizes: "180x180",
        href: VS.src,
      }),
    ],
  });
}
const hw =
  "data:image/svg+xml,%3csvg%20xmlns='http://www.w3.org/2000/svg'%20width='107'%20height='106'%20fill='none'%3e%3cg%20clip-path='url(%23a)'%3e%3cg%20filter='url(%23b)'%3e%3cpath%20fill='%23fff'%20d='M81.81%2053c0-15.464-12.535-28-28-28-15.463%200-28%2012.536-28%2028s12.537%2028%2028%2028c15.465%200%2028-12.536%2028-28Z'%20/%3e%3cpath%20stroke='%23000'%20stroke-linejoin='bevel'%20stroke-opacity='.1'%20d='M81.81%2053c0-15.464-12.535-28-28-28-15.463%200-28%2012.536-28%2028s12.537%2028%2028%2028c15.465%200%2028-12.536%2028-28Z'%20/%3e%3c/g%3e%3cpath%20fill='%23000'%20d='M49.287%2048.12v-3.905c0-.263.075-.45.337-.601l7.246-4.205c.977-.563%202.216-.826%203.417-.826%204.58%200%207.471%203.53%207.471%207.321%200%20.3%200%20.714-.075%201.051l-7.584-4.43c-.375-.225-.788-.263-1.239%200l-9.573%205.594ZM66.03%2061.972V53.3c0-.488-.187-.825-.638-1.088l-9.611-5.594%203.379-1.953a.717.717%200%200%201%20.675%200l7.284%204.205c2.065%201.202%203.492%203.83%203.492%206.345%200%202.966-1.802%205.707-4.58%206.758Zm-18.734-7.471-3.342-1.99c-.262-.15-.338-.338-.338-.6v-8.373c0-4.092%203.117-7.171%207.36-7.171a7.23%207.23%200%200%201%204.504%201.577l-7.546%204.392c-.45.263-.638.601-.638%201.09v11.075Zm6.533%203.754-4.543-2.553v-5.406l4.543-2.553%204.505%202.553v5.406l-4.505%202.553Zm2.815%2011.376a7.23%207.23%200%200%201-4.505-1.577l7.546-4.392c.45-.263.639-.601.639-1.09V51.499l3.379%201.99c.262.15.337.338.337.6v8.373c0%204.093-3.153%207.171-7.396%207.171Zm-8.86-8.297L40.5%2057.13c-2.065-1.202-3.491-3.83-3.491-6.345%200-3.004%201.84-5.707%204.618-6.758v8.71c0%20.488.187.826.638%201.09l9.574%205.556-3.38%201.952a.718.718%200%200%201-.675%200Zm-.45%206.082c-4.318%200-7.472-3.229-7.472-7.246%200-.375.038-.75.075-1.089l7.546%204.355c.451.263.826.263%201.277%200l9.574-5.556v3.904c0%20.263-.075.451-.338.601l-7.246%204.205c-.976.563-2.215.826-3.417.826Zm9.31%204.243c4.506%200%208.26-3.23%209.086-7.51%204.205-1.05%206.908-4.955%206.908-8.935%200-2.628-1.126-5.143-3.191-6.983.188-.788.338-1.614.338-2.403%200-5.294-4.318-9.273-9.274-9.273a9.197%209.197%200%200%200-3.003.525c-1.69-1.69-3.98-2.74-6.533-2.74-4.505%200-8.26%203.228-9.086%207.508-4.205%201.052-6.908%204.956-6.908%208.936%200%202.628%201.127%205.144%203.191%206.983-.187.789-.337%201.615-.337%202.403%200%205.294%204.317%209.274%209.273%209.274a9.2%209.2%200%200%200%203.004-.526c1.69%201.69%203.98%202.74%206.532%202.74Z'%20/%3e%3c/g%3e%3cdefs%3e%3cclipPath%20id='a'%3e%3cpath%20fill='%23fff'%20d='M.81%200h106v106H.81z'%20/%3e%3c/clipPath%3e%3cfilter%20id='b'%20width='105'%20height='105'%20x='1.311'%20y='4.5'%20color-interpolation-filters='sRGB'%20filterUnits='userSpaceOnUse'%20%3e%3cfeFlood%20flood-opacity='0'%20result='BackgroundImageFix'%20/%3e%3cfeColorMatrix%20in='SourceAlpha'%20result='hardAlpha'%20values='0%200%200%200%200%200%200%200%200%200%200%200%200%200%200%200%200%200%20127%200'%20/%3e%3cfeOffset%20dy='4'%20/%3e%3cfeGaussianBlur%20stdDeviation='12'%20/%3e%3cfeComposite%20in2='hardAlpha'%20operator='out'%20/%3e%3cfeColorMatrix%20values='0%200%200%200%200%200%200%200%200%200%200%200%200%200%200%200%200%200%200.06%200'%20/%3e%3cfeBlend%20in2='BackgroundImageFix'%20result='effect1_dropShadow_1235_2762'%20/%3e%3cfeBlend%20in='SourceGraphic'%20in2='effect1_dropShadow_1235_2762'%20result='shape'%20/%3e%3c/filter%3e%3c/defs%3e%3c/svg%3e";
function pw({ children: e, className: t, style: r, ...n }) {
  return m.jsx("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 24 24",
    fill: "currentColor",
    className: t,
    ...n,
    style: r,
    children: e,
  });
}
const _M = ({ className: e }) =>
    m.jsx("svg", {
      width: "18",
      height: "18",
      viewBox: "0 0 18 18",
      fill: "none",
      className: e,
      xmlns: "http://www.w3.org/2000/svg",
      children: m.jsx("path", {
        d: "M15.75 12V5.99999C15.7497 5.73694 15.6803 5.4786 15.5487 5.25086C15.417 5.02312 15.2278 4.83401 15 4.70249L9.75 1.70249C9.52197 1.57084 9.26331 1.50153 9 1.50153C8.73669 1.50153 8.47803 1.57084 8.25 1.70249L3 4.70249C2.7722 4.83401 2.58299 5.02312 2.45135 5.25086C2.31971 5.4786 2.25027 5.73694 2.25 5.99999V12C2.25027 12.263 2.31971 12.5214 2.45135 12.7491C2.58299 12.9769 2.7722 13.166 3 13.2975L8.25 16.2975C8.47803 16.4291 8.73669 16.4985 9 16.4985C9.26331 16.4985 9.52197 16.4291 9.75 16.2975L15 13.2975C15.2278 13.166 15.417 12.9769 15.5487 12.7491C15.6803 12.5214 15.7497 12.263 15.75 12Z",
        fill: "currentColor",
        stroke: "currentColor",
        strokeWidth: "2",
        strokeLinecap: "round",
        strokeLinejoin: "round",
      }),
    }),
  gw = "ChatGPT",
  _w = ({ className: e }) =>
    m.jsxs("svg", {
      width: "24",
      height: "24",
      viewBox: "0 0 24 24",
      fill: "none",
      xmlns: "http://www.w3.org/2000/svg",
      className: e,
      children: [
        m.jsx("text", { x: "-9999", y: "-9999", children: gw }),
        m.jsx("path", {
          d: "M9.20509 8.76511V6.50545C9.20509 6.31513 9.27649 6.17234 9.44293 6.0773L13.9861 3.46088C14.6046 3.10413 15.342 2.93769 16.103 2.93769C18.9573 2.93769 20.7651 5.14983 20.7651 7.50454C20.7651 7.67098 20.7651 7.86129 20.7412 8.05161L16.0316 5.2924C15.7462 5.12596 15.4607 5.12596 15.1753 5.2924L9.20509 8.76511ZM19.8135 17.5659V12.1664C19.8135 11.8333 19.6708 11.5955 19.3854 11.429L13.4152 7.95633L15.3656 6.83833C15.5321 6.74328 15.6749 6.74328 15.8413 6.83833L20.3845 9.45474C21.6928 10.216 22.5728 11.8333 22.5728 13.4031C22.5728 15.2108 21.5025 16.8758 19.8135 17.5657V17.5659ZM7.80173 12.8088L5.8513 11.6671C5.68486 11.5721 5.61346 11.4293 5.61346 11.239V6.00613C5.61346 3.46111 7.56389 1.53433 10.2042 1.53433C11.2033 1.53433 12.1307 1.86743 12.9159 2.46202L8.2301 5.17371C7.94475 5.34015 7.80195 5.57798 7.80195 5.91109V12.809L7.80173 12.8088ZM12 15.2349L9.20509 13.6651V10.3351L12 8.76534L14.7947 10.3351V13.6651L12 15.2349ZM13.7958 22.4659C12.7967 22.4659 11.8693 22.1328 11.0841 21.5382L15.7699 18.8265C16.0553 18.6601 16.198 18.4222 16.198 18.0891V11.1912L18.1723 12.3329C18.3388 12.4279 18.4102 12.5707 18.4102 12.761V17.9939C18.4102 20.5389 16.4359 22.4657 13.7958 22.4657V22.4659ZM8.15848 17.1617L3.61528 14.5452C2.30696 13.784 1.42701 12.1667 1.42701 10.5969C1.42701 8.76534 2.52115 7.12414 4.20987 6.43428V11.8574C4.20987 12.1905 4.35266 12.4284 4.63802 12.5948L10.5846 16.0436L8.63415 17.1617C8.46771 17.2567 8.32492 17.2567 8.15848 17.1617ZM7.897 21.0625C5.20919 21.0625 3.23488 19.0407 3.23488 16.5432C3.23488 16.3529 3.25875 16.1626 3.2824 15.9723L7.96817 18.6839C8.25352 18.8504 8.53911 18.8504 8.82446 18.6839L14.7947 15.2351V17.4948C14.7947 17.6851 14.7233 17.8279 14.5568 17.9229L10.0136 20.5393C9.39518 20.8961 8.6578 21.0625 7.89677 21.0625H7.897ZM13.7958 23.8929C16.6739 23.8929 19.0762 21.8474 19.6235 19.1357C22.2874 18.4459 24 15.9484 24 13.4034C24 11.7383 23.2865 10.121 22.002 8.95542C22.121 8.45588 22.1924 7.95633 22.1924 7.45702C22.1924 4.0557 19.4331 1.51045 16.2458 1.51045C15.6037 1.51045 14.9852 1.60549 14.3668 1.81968C13.2963 0.773071 11.8215 0.107086 10.2042 0.107086C7.32606 0.107086 4.92383 2.15256 4.37653 4.86425C1.7126 5.55411 0 8.05161 0 10.5966C0 12.2617 0.713506 13.879 1.99795 15.0446C1.87904 15.5441 1.80764 16.0436 1.80764 16.543C1.80764 19.9443 4.56685 22.4895 7.75421 22.4895C8.39632 22.4895 9.01478 22.3945 9.63324 22.1803C10.7035 23.2269 12.1783 23.8929 13.7958 23.8929Z",
          fill: "currentColor",
        }),
      ],
    });
function vM({ className: e }) {
  const t = xr();
  return m.jsx("img", {
    src: hw,
    alt: t.formatMessage({ id: "VJmCc9", defaultMessage: "ChatGPT logo" }),
    className: e,
  });
}
const mM = ({ className: e }) =>
    m.jsx("svg", {
      xmlns: "http://www.w3.org/2000/svg",
      viewBox: "0 0 1180 320",
      width: "118",
      height: "32",
      fill: "currentColor",
      className: e,
      children: m.jsx("path", {
        d: "M367.44 153.84c0 52.32 33.6 88.8 80.16 88.8s80.16-36.48 80.16-88.8-33.6-88.8-80.16-88.8-80.16 36.48-80.16 88.8zm129.6 0c0 37.44-20.4 61.68-49.44 61.68s-49.44-24.24-49.44-61.68 20.4-61.68 49.44-61.68 49.44 24.24 49.44 61.68zM614.27 242.64c35.28 0 55.44-29.76 55.44-65.52s-20.16-65.52-55.44-65.52c-16.32 0-28.32 6.48-36.24 15.84V114h-28.8v169.2h28.8v-56.4c7.92 9.36 19.92 15.84 36.24 15.84zm-36.96-69.12c0-23.76 13.44-36.72 31.2-36.72 20.88 0 32.16 16.32 32.16 40.32s-11.28 40.32-32.16 40.32c-17.76 0-31.2-13.2-31.2-36.48zM747.65 242.64c25.2 0 45.12-13.2 54-35.28L776.93 198c-3.84 12.96-15.12 20.16-29.28 20.16-18.48 0-31.44-13.2-33.6-34.8h88.32v-9.6c0-34.56-19.44-62.16-55.92-62.16s-60 28.56-60 65.52c0 38.88 25.2 65.52 61.2 65.52zm-1.44-106.8c18.24 0 26.88 12 27.12 25.92h-57.84c4.32-17.04 15.84-25.92 30.72-25.92zM823.98 240h28.8v-73.92c0-18 13.2-27.6 26.16-27.6 15.84 0 22.08 11.28 22.08 26.88V240h28.8v-83.04c0-27.12-15.84-45.36-42.24-45.36-16.32 0-27.6 7.44-34.8 15.84V114h-28.8zM1014.17 67.68 948.89 240h30.48l14.64-39.36h74.4l14.88 39.36h30.96l-65.28-172.32zm16.8 34.08 27.36 72h-54.24zM1163.69 68.18h-30.72V240.5h30.72zM297.06 130.97a79.712 79.712 0 0 0-6.85-65.48c-17.46-30.4-52.56-46.04-86.84-38.68A79.747 79.747 0 0 0 143.24 0C108.2-.08 77.11 22.48 66.33 55.82a79.754 79.754 0 0 0-53.31 38.67c-17.59 30.32-13.58 68.54 9.92 94.54a79.712 79.712 0 0 0 6.85 65.48c17.46 30.4 52.56 46.04 86.84 38.68a79.687 79.687 0 0 0 60.13 26.8c35.06.09 66.16-22.49 76.94-55.86a79.754 79.754 0 0 0 53.31-38.67c17.57-30.32 13.55-68.51-9.94-94.51zM176.78 299.08a59.77 59.77 0 0 1-38.39-13.88c.49-.26 1.34-.73 1.89-1.07l63.72-36.8a10.36 10.36 0 0 0 5.24-9.07v-89.83l26.93 15.55c.29.14.48.42.52.74v74.39c-.04 33.08-26.83 59.9-59.91 59.97zM47.94 244.05a59.71 59.71 0 0 1-7.15-40.18c.47.28 1.3.79 1.89 1.13l63.72 36.8c3.23 1.89 7.23 1.89 10.47 0l77.79-44.92v31.1c.02.32-.13.63-.38.83L129.87 266c-28.69 16.52-65.33 6.7-81.92-21.95zM31.17 104.96c7-12.16 18.05-21.46 31.21-26.29 0 .55-.03 1.52-.03 2.2v73.61c-.02 3.74 1.98 7.21 5.23 9.06l77.79 44.91L118.44 224c-.27.18-.61.21-.91.08l-64.42-37.22c-28.63-16.58-38.45-53.21-21.95-81.89zm221.26 51.49-77.79-44.92 26.93-15.54c.27-.18.61-.21.91-.08l64.42 37.19c28.68 16.57 38.51 53.26 21.94 81.94a59.94 59.94 0 0 1-31.2 26.28v-75.81c.03-3.74-1.96-7.2-5.2-9.06zm26.8-40.34c-.47-.29-1.3-.79-1.89-1.13l-63.72-36.8a10.375 10.375 0 0 0-10.47 0l-77.79 44.92V92c-.02-.32.13-.63.38-.83l64.41-37.16c28.69-16.55 65.37-6.7 81.91 22a59.95 59.95 0 0 1 7.15 40.1zm-168.51 55.43-26.94-15.55a.943.943 0 0 1-.52-.74V80.86c.02-33.12 26.89-59.96 60.01-59.94 14.01 0 27.57 4.92 38.34 13.88-.49.26-1.33.73-1.89 1.07L116 72.67a10.344 10.344 0 0 0-5.24 9.06l-.04 89.79zM125.35 140 160 119.99l34.65 20V180L160 200l-34.65-20z",
      }),
    }),
  bM = (e) =>
    m.jsxs(pw, {
      viewBox: "0 0 36 36",
      fill: "none",
      ...e,
      children: [
        m.jsx("circle", { cx: "18", cy: "18", r: "18", fill: "#3c46ff" }),
        m.jsx("path", {
          fillRule: "evenodd",
          clipRule: "evenodd",
          d: "m7.358 14.641 5.056-5.055A2 2 0 0 1 13.828 9h8.343a2 2 0 0 1 1.414.586l5.056 5.055a2 2 0 0 1 .055 2.771l-9.226 9.996a2 2 0 0 1-2.94 0l-9.227-9.996a2 2 0 0 1 .055-2.77Zm6.86-1.939-.426 1.281a2.07 2.07 0 0 1-1.31 1.31l-1.28.426a.296.296 0 0 0 0 .561l1.28.428a2.07 2.07 0 0 1 1.31 1.309l.427 1.28c.09.27.471.27.56 0l.428-1.28a2.07 2.07 0 0 1 1.309-1.31l1.281-.427a.296.296 0 0 0 0-.56l-1.281-.428a2.07 2.07 0 0 1-1.309-1.309l-.427-1.28a.296.296 0 0 0-.561 0z",
          fill: "#fff",
        }),
      ],
    }),
  yM = ({ className: e }) =>
    m.jsxs("svg", {
      width: "24",
      height: "24",
      viewBox: "0 0 24 24",
      fill: "none",
      xmlns: "http://www.w3.org/2000/svg",
      className: e,
      children: [
        m.jsx("rect", {
          x: "2",
          y: "6",
          width: "5",
          height: "12",
          rx: "2",
          stroke: "currentColor",
          strokeWidth: "2",
        }),
        m.jsx("path", {
          d: "M2 12H1",
          stroke: "currentColor",
          strokeWidth: "2",
          strokeLinecap: "round",
          strokeLinejoin: "round",
        }),
        m.jsx("path", {
          d: "M22 12H23",
          stroke: "currentColor",
          strokeWidth: "2",
          strokeLinecap: "round",
          strokeLinejoin: "round",
        }),
        m.jsx("rect", {
          x: "17",
          y: "6",
          width: "5",
          height: "12",
          rx: "2",
          stroke: "currentColor",
          strokeWidth: "2",
        }),
        m.jsx("path", {
          d: "M7 12L12 12",
          stroke: "currentColor",
          strokeWidth: "2",
          strokeLinecap: "round",
          strokeLinejoin: "round",
        }),
        m.jsx("path", {
          d: "M16 12H17",
          stroke: "currentColor",
          strokeWidth: "2",
          strokeLinecap: "round",
          strokeLinejoin: "round",
        }),
        m.jsx("path", {
          d: "M9 3L15 21",
          stroke: "currentColor",
          strokeWidth: "2",
          strokeLinecap: "round",
          strokeLinejoin: "round",
        }),
      ],
    }),
  SM = ({ className: e }) =>
    m.jsx("svg", {
      xmlns: "http://www.w3.org/2000/svg",
      width: "16",
      height: "14",
      fill: "none",
      className: e,
      children: m.jsx("path", {
        fill: "currentColor",
        stroke: "currentColor",
        strokeLinecap: "round",
        strokeLinejoin: "round",
        d: "M6.9 1.6 1.2 11a1.3 1.3 0 0 0 1.2 2h11.2a1.3 1.3 0 0 0 1.2-2L9 1.6a1.3 1.3 0 0 0-2.2 0Z",
      }),
    }),
  ns = ["light", "dark"],
  Ql = "(prefers-color-scheme: dark)",
  vw = typeof window > "u",
  Xl = v.createContext(void 0),
  mw = { setTheme: (e) => {}, themes: [] },
  Jv = () => {
    var e;
    return (e = v.useContext(Xl)) !== null && e !== void 0 ? e : mw;
  },
  bw = (e) =>
    v.useContext(Xl)
      ? ne.createElement(v.Fragment, null, e.children)
      : ne.createElement(Sw, e),
  yw = ["light", "dark"],
  Sw = ({
    forcedTheme: e,
    disableTransitionOnChange: t = !1,
    enableSystem: r = !0,
    enableColorScheme: n = !0,
    storageKey: i = "theme",
    themes: s = yw,
    defaultTheme: o = r ? "system" : "light",
    attribute: a = "data-theme",
    value: c,
    children: u,
    nonce: l,
  }) => {
    const [d, f] = v.useState(() => Gf(i, o)),
      [h, _] = v.useState(() => Gf(i)),
      p = c ? Object.values(c) : s,
      g = v.useCallback((b) => {
        let S = b;
        if (!S) return;
        b === "system" && r && (S = Vf());
        const w = c ? c[S] : S,
          C = t ? ww() : null,
          O = document.documentElement;
        if (
          (a === "class"
            ? (O.classList.remove(...p), w && O.classList.add(w))
            : w
              ? O.setAttribute(a, w)
              : O.removeAttribute(a),
          n)
        ) {
          const T = ns.includes(o) ? o : null,
            I = ns.includes(S) ? S : T;
          O.style.colorScheme = I;
        }
        C?.();
      }, []),
      y = v.useCallback(
        (b) => {
          f(b);
          try {
            localStorage.setItem(i, b);
          } catch {}
        },
        [e],
      ),
      E = v.useCallback(
        (b) => {
          const S = Vf(b);
          _(S), d === "system" && r && !e && g("system");
        },
        [d, e],
      );
    v.useEffect(() => {
      const b = window.matchMedia(Ql);
      return b.addListener(E), E(b), () => b.removeListener(E);
    }, [E]),
      v.useEffect(() => {
        const b = (S) => {
          S.key === i && y(S.newValue || o);
        };
        return (
          window.addEventListener("storage", b),
          () => window.removeEventListener("storage", b)
        );
      }, [y]),
      v.useEffect(() => {
        g(e ?? d);
      }, [e, d]);
    const A = v.useMemo(
      () => ({
        theme: d,
        setTheme: y,
        forcedTheme: e,
        resolvedTheme: d === "system" ? h : d,
        themes: r ? [...s, "system"] : s,
        systemTheme: r ? h : void 0,
      }),
      [d, y, e, h, r, s],
    );
    return ne.createElement(
      Xl.Provider,
      { value: A },
      ne.createElement(Ew, {
        forcedTheme: e,
        disableTransitionOnChange: t,
        enableSystem: r,
        enableColorScheme: n,
        storageKey: i,
        themes: s,
        defaultTheme: o,
        attribute: a,
        value: c,
        children: u,
        attrs: p,
        nonce: l,
      }),
      u,
    );
  },
  Ew = v.memo(
    ({
      forcedTheme: e,
      storageKey: t,
      attribute: r,
      enableSystem: n,
      enableColorScheme: i,
      defaultTheme: s,
      value: o,
      attrs: a,
      nonce: c,
    }) => {
      const u = s === "system",
        l =
          r === "class"
            ? `var d=document.documentElement,c=d.classList;c.remove(${a.map((_) => `'${_}'`).join(",")});`
            : `var d=document.documentElement,n='${r}',s='setAttribute';`,
        d = i
          ? ns.includes(s) && s
            ? `if(e==='light'||e==='dark'||!e)d.style.colorScheme=e||'${s}'`
            : "if(e==='light'||e==='dark')d.style.colorScheme=e"
          : "",
        f = (_, p = !1, g = !0) => {
          const y = o ? o[_] : _,
            E = p ? _ + "|| ''" : `'${y}'`;
          let A = "";
          return (
            i &&
              g &&
              !p &&
              ns.includes(_) &&
              (A += `d.style.colorScheme = '${_}';`),
            r === "class"
              ? (A += p || y ? `c.add(${E})` : "null")
              : y && (A += `d[s](n,${E})`),
            A
          );
        },
        h = e
          ? `!function(){${l}${f(e)}}()`
          : n
            ? `!function(){try{${l}var e=localStorage.getItem('${t}');if('system'===e||(!e&&${u})){var t='${Ql}',m=window.matchMedia(t);if(m.media!==t||m.matches){${f("dark")}}else{${f("light")}}}else if(e){${o ? `var x=${JSON.stringify(o)};` : ""}${f(o ? "x[e]" : "e", !0)}}${u ? "" : "else{" + f(s, !1, !1) + "}"}${d}}catch(e){}}()`
            : `!function(){try{${l}var e=localStorage.getItem('${t}');if(e){${o ? `var x=${JSON.stringify(o)};` : ""}${f(o ? "x[e]" : "e", !0)}}else{${f(s, !1, !1)};}${d}}catch(t){}}();`;
      return ne.createElement("script", {
        nonce: c,
        dangerouslySetInnerHTML: { __html: h },
      });
    },
    () => !0,
  ),
  Gf = (e, t) => {
    if (vw) return;
    let r;
    try {
      r = localStorage.getItem(e) || void 0;
    } catch {}
    return r || t;
  },
  ww = () => {
    const e = document.createElement("style");
    return (
      e.appendChild(
        document.createTextNode(
          "*{-webkit-transition:none!important;-moz-transition:none!important;-o-transition:none!important;-ms-transition:none!important;transition:none!important}",
        ),
      ),
      document.head.appendChild(e),
      () => {
        window.getComputedStyle(document.body),
          setTimeout(() => {
            document.head.removeChild(e);
          }, 1);
      }
    );
  },
  Vf = (e) => (e || (e = window.matchMedia(Ql)), e.matches ? "dark" : "light");
function Zv(e) {
  return e === "system" || Qv(e);
}
function Qv(e) {
  return e === "dark" || e === "light";
}
function Cw(e) {
  if (!Zv(e)) throw new Error(`Unexpected theme ${e}`);
}
function EM() {
  const { theme: e, setTheme: t } = Jv();
  function r(n) {
    Cw(n), n !== e && t(n);
  }
  return [Zv(e) ? e : "system", r];
}
function Aw() {
  const e = Jv().resolvedTheme;
  if (Qv(e)) return e;
}
function Ow() {
  return Aw() === "dark";
}
function xw() {
  const e = v.useRef([]),
    t = v.useRef((r, n) => {
      const i = setTimeout(r, n);
      return e.current.push(i), i;
    });
  return (
    v.useEffect(() => {
      const r = e.current;
      return () => {
        r.forEach((n) => {
          clearTimeout(n);
        });
      };
    }, []),
    t.current
  );
}
function Rw(e) {
  const {
      speed: t = 100,
      value: r = "",
      typing: n,
      onTyped: i,
      initTyped: s,
      chunk: o,
    } = e,
    [a, c] = v.useState(0),
    u = v.useRef(void 0),
    l = xw(),
    d = Ow();
  function f(h, _, p) {
    u.current = l(function () {
      h >= _.length || (c(h + p), i?.(), f(h + p, _, p));
    }, t);
  }
  return (
    v.useEffect(
      () => (
        c(s ? r.length : 0),
        n && f(0, r, o ? 4 : 1),
        () => {
          clearTimeout(u.current);
        }
      ),
      [n, r],
    ),
    m.jsxs(m.Fragment, {
      children: [
        m.jsx("span", {
          className: te(
            "whitespace-pre-wrap",
            a < r.length && "result-streaming no-flow",
            d ? "dark" : "light",
          ),
          children: m.jsx("span", { children: r.slice(0, a) }),
        }),
        m.jsx("span", {
          className: "whitespace-pre-wrap text-transparent",
          children: r.slice(a),
        }),
      ],
    })
  );
}
class Iw extends TypeError {
  constructor(t, r) {
    let n;
    const { message: i, explanation: s, ...o } = t,
      { path: a } = t,
      c = a.length === 0 ? i : `At path: ${a.join(".")} -- ${i}`;
    super(s ?? c),
      s != null && (this.cause = c),
      Object.assign(this, o),
      (this.name = this.constructor.name),
      (this.failures = () => n ?? (n = [t, ...r()]));
  }
}
function Tw(e) {
  return ks(e) && typeof e[Symbol.iterator] == "function";
}
function ks(e) {
  return typeof e == "object" && e != null;
}
function $f(e) {
  return ks(e) && !Array.isArray(e);
}
function ed(e) {
  return typeof e == "symbol"
    ? e.toString()
    : typeof e == "string"
      ? JSON.stringify(e)
      : `${e}`;
}
function Pw(e) {
  const { done: t, value: r } = e.next();
  return t ? void 0 : r;
}
function kw(e, t, r, n) {
  if (e === !0) return;
  e === !1 ? (e = {}) : typeof e == "string" && (e = { message: e });
  const { path: i, branch: s } = t,
    { type: o } = r,
    {
      refinement: a,
      message:
        c = `Expected a value of type \`${o}\`${a ? ` with refinement \`${a}\`` : ""}, but received: \`${ed(n)}\``,
    } = e;
  return {
    value: n,
    type: o,
    refinement: a,
    key: i[i.length - 1],
    path: i,
    branch: s,
    ...e,
    message: c,
  };
}
function* Hf(e, t, r, n) {
  Tw(e) || (e = [e]);
  for (const i of e) {
    const s = kw(i, t, r, n);
    s && (yield s);
  }
}
function* Xv(e, t, r = {}) {
  const { path: n = [], branch: i = [e], coerce: s = !1, mask: o = !1 } = r,
    a = { path: n, branch: i, mask: o };
  s && (e = t.coercer(e, a));
  let c = "valid";
  for (const u of t.validator(e, a))
    (u.explanation = r.message), (c = "not_valid"), yield [u, void 0];
  for (let [u, l, d] of t.entries(e, a)) {
    const f = Xv(l, d, {
      path: u === void 0 ? n : [...n, u],
      branch: u === void 0 ? i : [...i, l],
      coerce: s,
      mask: o,
      message: r.message,
    });
    for (const h of f)
      h[0]
        ? ((c = h[0].refinement != null ? "not_refined" : "not_valid"),
          yield [h[0], void 0])
        : s &&
          ((l = h[1]),
          u === void 0
            ? (e = l)
            : e instanceof Map
              ? e.set(u, l)
              : e instanceof Set
                ? e.add(l)
                : ks(e) && (l !== void 0 || u in e) && (e[u] = l));
  }
  if (c !== "not_valid")
    for (const u of t.refiner(e, a))
      (u.explanation = r.message), (c = "not_refined"), yield [u, void 0];
  c === "valid" && (yield [void 0, e]);
}
class em {
  constructor(t) {
    const {
      type: r,
      schema: n,
      validator: i,
      refiner: s,
      coercer: o = (c) => c,
      entries: a = function* () {},
    } = t;
    (this.type = r),
      (this.schema = n),
      (this.entries = a),
      (this.coercer = o),
      i
        ? (this.validator = (c, u) => {
            const l = i(c, u);
            return Hf(l, u, this, c);
          })
        : (this.validator = () => []),
      s
        ? (this.refiner = (c, u) => {
            const l = s(c, u);
            return Hf(l, u, this, c);
          })
        : (this.refiner = () => []);
  }
  assert(t, r) {
    return Nw(t, this, r);
  }
  create(t, r) {
    return Lw(t, this, r);
  }
  is(t) {
    return Mw(t, this);
  }
  mask(t, r) {
    return Dw(t, this, r);
  }
  validate(t, r = {}) {
    return oi(t, this, r);
  }
}
function Nw(e, t, r) {
  const n = oi(e, t, { message: r });
  if (n[0]) throw n[0];
}
function Lw(e, t, r) {
  const n = oi(e, t, { coerce: !0, message: r });
  if (n[0]) throw n[0];
  return n[1];
}
function Dw(e, t, r) {
  const n = oi(e, t, { coerce: !0, mask: !0, message: r });
  if (n[0]) throw n[0];
  return n[1];
}
function Mw(e, t) {
  return !oi(e, t)[0];
}
function oi(e, t, r = {}) {
  const n = Xv(e, t, r),
    i = Pw(n);
  return i[0]
    ? [
        new Iw(i[0], function* () {
          for (const o of n) o[0] && (yield o[0]);
        }),
        void 0,
      ]
    : [void 0, i[1]];
}
function tm(e, t) {
  return new em({ type: e, schema: null, validator: t });
}
function jw() {
  return tm("never", () => !1);
}
function Uw(e) {
  const t = e ? Object.keys(e) : [],
    r = jw();
  return new em({
    type: "object",
    schema: e || null,
    *entries(n) {
      if (e && ks(n)) {
        const i = new Set(Object.keys(n));
        for (const s of t) i.delete(s), yield [s, n[s], e[s]];
        for (const s of i) yield [s, n[s], r];
      }
    },
    validator(n) {
      return $f(n) || `Expected an object, but received: ${ed(n)}`;
    },
    coercer(n, i) {
      if (!$f(n)) return n;
      const s = { ...n };
      if (i.mask && e) for (const o in s) e[o] === void 0 && delete s[o];
      return s;
    },
  });
}
function zf() {
  return tm(
    "string",
    (e) => typeof e == "string" || `Expected a string, but received: ${ed(e)}`,
  );
}
var Bw = ((e) => (
    (e.Sunshine = "sunshine"),
    (e.TrainingAllowed = "training_allowed"),
    (e.ShowExpandedCodeView = "show_expanded_code_view"),
    (e.VoiceName = "voice_name"),
    (e.VoiceMainLanguage = "voice_main_language"),
    (e.MemoryInSearch = "memory_in_search"),
    (e.VoiceTrainingAllowed = "voice_training_allowed"),
    (e.VideoTrainingAllowed = "video_training_allowed"),
    (e.Moonshine = "moonshine"),
    (e.CodexTrainingAllowed = "codex_training_allowed"),
    e
  ))(Bw || {}),
  qw = ((e) => (
    (e.DEEP_RESEARCH = "deep_research"),
    (e.WORKSPACE_GPT_CUSTOM_ACTIONS = "workspace_gpt_custom_actions"),
    (e.APP_PAIRING = "app_pairing"),
    (e.BROWSING = "browsing"),
    (e.CANVAS = "canvas"),
    (e.CANVAS_CODE_EXECUTION = "canvas_code_execution"),
    (e.CANVAS_CODE_NETWORK_ACCESS = "canvas_code_network_access"),
    (e.DALLE = "dalle"),
    (e.MEMORY = "sunshine"),
    (e.CONTEXT_CONNECTOR_CONFLUENCE = "context_connector_confluence"),
    (e.CONTEXT_CONNECTOR_GDRIVE = "context_connector_gdrive"),
    (e.CONTEXT_CONNECTOR_JIRA = "context_connector_java"),
    (e.CONTEXT_CONNECTOR_NOTION = "context_connector_notion"),
    (e.CONTEXT_CONNECTOR_O365_PERSONAL = "context_connector_o365_personal"),
    (e.CONTEXT_CONNECTOR_O365_BUSINESS = "context_connector_o365_business"),
    (e.CONTEXT_CONNECTOR_SLACK = "context_connector_slack"),
    (e.CONTEXT_CONNECTOR_GITHUB = "context_connector_github"),
    (e.CLIENT_APPLICATION_APPLE = "client_application_apple"),
    (e.CLIENT_APPLICATION_APPLE_MDM_REQUIRED =
      "client_application_apple_mdm_required"),
    (e.MEMORY_IN_SEARCH = "memory_in_search_2"),
    (e.VIDEO_SCREEN_SHARING = "video_screen_sharing"),
    (e.HIVE = "hive"),
    e
  ))(qw || {}),
  Fw = ((e) => (
    (e.FREE = "chatgptfreeplan"),
    (e.PLUS = "chatgptplusplan"),
    (e.PRO = "chatgptpro"),
    (e.PRO_FREE = "chatgptprofreeplan"),
    (e.PLUS_FREE = "chatgptplusfreeplan"),
    (e.ENTERPRISE = "chatgptenterpriseplan"),
    (e.TEAM = "chatgptteamplan"),
    (e.EDU = "chatgpteduplan"),
    (e.QUORUM = "chatgptquorumplan"),
    e
  ))(Fw || {}),
  ue = ((e) => (
    (e.FREE = "free"),
    (e.PLUS = "plus"),
    (e.PRO = "pro"),
    (e.TEAM = "team"),
    (e.ENTERPRISE = "enterprise"),
    (e.BUSINESS = "business"),
    (e.EDU = "edu"),
    (e.QUORUM = "quorum"),
    e
  ))(ue || {}),
  Gw = ((e) => (
    (e.ANYONE = "anyone"),
    (e.NO_ONE = "no_one"),
    (e.WORKSPACE_ONLY = "workspace_only"),
    e
  ))(Gw || {});
const wM = {
  ALLOW_ALL: "allow_all",
  ALLOW_SPECIFIC: "allow_specific",
  ALLOW_NONE: "allow_none",
};
var Vw = ((e) => (
    (e.GPT_SHARE_SETTINGS = "gpt_share_setting"),
    (e.CHAT_SHARE_SETTINGS = "chat_share_setting"),
    e
  ))(Vw || {}),
  Ku = ((e) => (
    (e.WORKSPACE = "workspace"),
    (e.THIRD_PARTY = "third_party"),
    (e.UNASSIGNED = "unassigned"),
    e
  ))(Ku || {}),
  $w = ((e) => (
    (e.CodeInterpreter = "code_interpreter"),
    (e.Multimodal = "multimodal"),
    (e.Retrieval = "retrieval"),
    (e.ContextConnector = "context_connector"),
    e
  ))($w || {}),
  Hw = ((e) => ((e.FREE = "free"), (e.PLUS = "plus"), e))(Hw || {}),
  zw = ((e) => (
    (e.TOOL_USE = "tool_use"),
    (e.IMAGE = "image"),
    (e.ATTACHMENT = "attachment"),
    (e.AUDIO = "audio"),
    (e.TARGETED_REPLY = "targeted_reply"),
    (e.CANVAS_SUPPORTED = "canvas_supported"),
    (e.TOOL_SEARCH = "tool_search"),
    (e.CUSTOM_INSTRUCTIONS = "custom_instructions"),
    (e.GIZMO_PROJECT = "gizmo_project"),
    e
  ))(zw || {}),
  rm = ((e) => (
    (e[(e.DEPRECATED_PENDING = 1)] = "DEPRECATED_PENDING"),
    (e[(e.DEPRECATED_FINISHED = 2)] = "DEPRECATED_FINISHED"),
    (e[(e.STREAMING = 3)] = "STREAMING"),
    (e[(e.UNREAD = 4)] = "UNREAD"),
    (e[(e.REALTIME = 5)] = "REALTIME"),
    e
  ))(rm || {}),
  Ww = ((e) => (
    (e[(e.CLIENT = 1)] = "CLIENT"), (e[(e.SERVER = 2)] = "SERVER"), e
  ))(Ww || {}),
  ke = ((e) => ((e.PERSONAL = "personal"), (e.WORKSPACE = "workspace"), e))(
    ke || {},
  ),
  zn = ((e) => (
    (e.OWNER = "account-owner"),
    (e.ADMIN = "account-admin"),
    (e.STANDARD = "standard-user"),
    e
  ))(zn || {});
const CM = ["source", "tool"];
var Kw = ((e) => (
    (e.VERIFIED = "verified"),
    (e.PENDING = "pending"),
    (e.EXPIRED = "expired"),
    e
  ))(Kw || {}),
  Yw = ((e) => ((e.PERCENTAGE = "percentage"), (e.FIXED = "fixed"), e))(
    Yw || {},
  ),
  nm = ((e) => (
    (e.AceUpload = "ace_upload"),
    (e.MyFiles = "my_files"),
    (e.Multimodal = "multimodal"),
    (e.ProfilePicture = "profile_picture"),
    (e.Gizmo = "agent"),
    (e.DalleAgent = "dalle_agent"),
    e
  ))(nm || {}),
  Jw = ((e) => (
    (e.Initial = "initial"),
    (e.FileCreated = "file_created"),
    (e.FileUploaded = "file_uploaded"),
    (e.FileProcessed = "file_processed"),
    (e.RetrievalIndexCreated = "retrieval_index_created"),
    e
  ))(Jw || {}),
  Bn = ((e) => (
    (e.Success = "success"), (e.Retry = "retry"), (e.Error = "error"), e
  ))(Bn || {}),
  im = ((e) => (
    (e.Success = "success"),
    (e.Failed = "failed"),
    (e.Processing = "processing"),
    (e.Skipped = "skipped"),
    e
  ))(im || {}),
  Zw = ((e) => (
    (e.GDRIVE = "gdrive"),
    (e.O365 = "o365"),
    (e.O365_PERSONAL = "o365_personal"),
    (e.O365_BUSINESS = "o365_business"),
    (e.CONFLUENCE = "confluence"),
    (e.JIRA = "java"),
    (e.NOTION_OPEN_CONNECTOR = "notion_open_connector"),
    (e.SLACK_OPEN_CONNECTOR = "slack_open_connector"),
    e
  ))(Zw || {}),
  Qw = ((e) => (
    (e.GDRIVE_ACTION_CONNECTOR = "gdrive_action_connector"),
    (e.GITHUB_CONNECTOR = "github_connector"),
    (e.LINEAR_CONNECTOR = "linear_connector"),
    (e.DROPBOX_CONNECTOR = "dropbox_connector"),
    (e.SHAREPOINT_CONNECTOR = "sharepoint_connector"),
    (e.GCAL_CONNECTOR = "google_calendar_connector"),
    (e.GMAIL_CONNECTOR = "gmail_connector"),
    (e.GOOGLE_CONTACTS_CONNECTOR = "google_contacts_connector"),
    (e.TEAMS_CONNECTOR = "teams_connector"),
    (e.OUTLOOK_CALENDAR_CONNECTOR = "outlook_calendar_connector"),
    (e.OUTLOOK_EMAIL_CONNECTOR = "outlook_email_connector"),
    (e.BOX_CONNECTOR = "box_connector"),
    (e.INTERCOM_CONNECTOR = "intercom_connector"),
    (e.HUBSPOT_CONNECTOR = "hubspot_connector"),
    e
  ))(Qw || {}),
  Xw = ((e) => (
    (e.GDRIVE_SYNC_CONNECTOR = "gdrive_sync_connector"),
    (e.SLACK_SYNC_CONNECTOR = "slack_sync_connector"),
    e
  ))(Xw || {}),
  eC = ((e) => (
    (e.GCAL_CONNECTOR = "gcal_action_connector"),
    (e.GMAIL_CONNECTOR = "gmail_action_connector"),
    (e.GOOGLE_CONTACTS_CONNECTOR = "google_contacts_action_connector"),
    e
  ))(eC || {}),
  tC = ((e) => ((e.PAGE = "page"), e))(tC || {}),
  rC = ((e) => ((e.PAGE = "page"), (e.DATABASE = "database"), e))(rC || {}),
  nC = ((e) => ((e.MESSAGE = "message"), e))(nC || {}),
  iC = ((e) => (
    (e.PYTHON = "python"),
    (e.RETRIEVAL = "retrieval"),
    (e.BROWSER = "browser"),
    (e.CANVAS = "canvas"),
    (e.FUNCTION = "function"),
    (e.DALLE = "dalle"),
    (e.API = "api"),
    (e.PARALLEL_BROWSE = "parallel_browse"),
    (e.MEMORY = "memory"),
    (e.CONTEXT_CONNECTOR = "context_connector"),
    (e.JIT_PLUGIN = "plugins_prototype"),
    (e.IMAGE_GEN = "image_gen"),
    e
  ))(iC || {}),
  sC = ((e) => (
    (e.Gizmo = "gizmo"),
    (e.ShareableConversation = "share_link"),
    (e.Conversation = "conversation"),
    (e.Post = "post"),
    e
  ))(sC || {}),
  oC = ((e) => (
    (e.UserName = "user_name"),
    (e.UserEmail = "user_email"),
    (e.SampleLongerInput = "sample_longer_input"),
    (e.SampleUrl = "sample_url_input"),
    (e.SampleIntInput = "sample_int_input"),
    e
  ))(oC || {});
const AM = {
  shouldnt_have_created: me({
    id: "ImageGenFeedback.ShouldNotHaveCreated",
    defaultMessage: "Shouldn't have created an image",
  }),
  dont_like_style: me({
    id: "ImageGenFeedback.DontLikeStyle",
    defaultMessage: "Don't like the style",
  }),
  didnt_fully_follow_instructions: me({
    id: "ImageGenFeedback.DidntFollowInstructions",
    defaultMessage: "Didn't fully follow instructions",
  }),
  low_quality_or_distorted: me({
    id: "ImageGenFeedback.LowQualityOrDistorted",
    defaultMessage: "Low quality or distorted",
  }),
  odd_cropping: me({
    id: "ImageGenFeedback.OddCropping",
    defaultMessage: "Odd cropping",
  }),
  inaccurate_editing: me({
    id: "ImageGenFeedback.InaccurateEditing",
    defaultMessage: "Inaccurate editing",
  }),
  inaccurate_text_rendering: me({
    id: "ImageGenFeedback.InaccurateTextRendering",
    defaultMessage: "Inaccurate text rendering",
  }),
  unsafe_or_problematic: me({
    id: "ImageGenFeedback.UnsafeOrProblematic",
    defaultMessage: "Unsafe or problematic",
  }),
  biased: me({ id: "ImageGenFeedback.Biased", defaultMessage: "Biased" }),
  other: me({ id: "ImageGenFeedback.Other", defaultMessage: "Other" }),
};
var aC = ((e) => (
  (e.AUDIO_ISSUES = "audio_issues"),
  (e.RESPONSE_QUALITY = "response_quality"),
  (e.INTERRUPTIONS = "interruptions"),
  (e.TRANSCRIPTION_ISSUES = "transcription_issues"),
  (e.INAUDIBLE_ISSUES = "inaudible_issues"),
  (e.OTHER = "other"),
  e
))(aC || {});
const OM = {
  audio_issues: me({
    id: "VoiceFeedback.AudioIssues",
    defaultMessage: "Audio issues",
  }),
  response_quality: me({
    id: "VoiceFeedback.ResponseQuality",
    defaultMessage: "I didn't like the responses",
  }),
  interruptions: me({
    id: "VoiceFeedback.Interruptions",
    defaultMessage: "It interrupted me",
  }),
  transcription_issues: me({
    id: "VoiceFeedback.TranscriptionIssues",
    defaultMessage: "It misheard me",
  }),
  inaudible_issues: me({
    id: "VoiceFeedback.InaudibleIssues",
    defaultMessage: "It couldn't hear me",
  }),
  other: me({ id: "VoiceFeedback.Other", defaultMessage: "Other" }),
};
var cC = ((e) => (
    (e.THUMBS_UP = "thumbs_up"), (e.THUMBS_DOWN = "thumbs_down"), e
  ))(cC || {}),
  uC = ((e) => (
    (e.Auto = "auto"),
    (e.Arabic = "ar"),
    (e.Bosnian = "bs"),
    (e.Bulgarian = "bg"),
    (e.Catalan = "ca"),
    (e.Chinese = "zh"),
    (e.Croatian = "hr"),
    (e.Czech = "cs"),
    (e.Danish = "da"),
    (e.Dutch = "nl"),
    (e.English = "en"),
    (e.Finnish = "fi"),
    (e.French = "fr"),
    (e.Galician = "gl"),
    (e.German = "de"),
    (e.Greek = "el"),
    (e.Hindi = "hi"),
    (e.Hungarian = "hu"),
    (e.Indonesian = "id"),
    (e.Italian = "it"),
    (e.Japanese = "ja"),
    (e.Korean = "ko"),
    (e.Macedonian = "mk"),
    (e.Malay = "ms"),
    (e.Norwegian = "no"),
    (e.Polish = "pl"),
    (e.Portuguese = "pt"),
    (e.Romanian = "ro"),
    (e.Russian = "ru"),
    (e.Slovak = "sk"),
    (e.Spanish = "es"),
    (e.Tagalog = "tl"),
    (e.Tamil = "ta"),
    (e.Thai = "th"),
    (e.Turkish = "tr"),
    (e.Swedish = "sv"),
    (e.Ukrainian = "uk"),
    (e.Vietnamese = "vi"),
    e
  ))(uC || {});
const xM = [
    "new_chat",
    "switch_to_standard",
    "ok",
    "upgrade_to_plus",
    "upgrade_to_pro",
  ],
  Ao = "account_switch",
  Oo = "error",
  RM = Uw({ email: zf(), token: zf() });
var lC = ((e) => (
    (e.InvalidProof = "invalid_proof"),
    (e.ExternalAccountAlreadyLinked = "external_account_already_linked"),
    (e.InternalAccountAlreadyLinked = "account_already_linked"),
    (e.UnsupportedPlatform = "unsupported_platform"),
    (e.UnsupportedPlanType = "unsupported_plan_type"),
    (e.SessionExpired = "user_session_expired"),
    e
  ))(lC || {}),
  xo,
  Wf;
function sm() {
  if (Wf) return xo;
  Wf = 1;
  var e = typeof yi == "object" && yi && yi.Object === Object && yi;
  return (xo = e), xo;
}
var Ro, Kf;
function Tt() {
  if (Kf) return Ro;
  Kf = 1;
  var e = sm(),
    t = typeof self == "object" && self && self.Object === Object && self,
    r = e || t || Function("return this")();
  return (Ro = r), Ro;
}
var Io, Yf;
function Ns() {
  if (Yf) return Io;
  Yf = 1;
  var e = Tt(),
    t = e.Symbol;
  return (Io = t), Io;
}
var To, Jf;
function dC() {
  if (Jf) return To;
  Jf = 1;
  var e = Ns(),
    t = Object.prototype,
    r = t.hasOwnProperty,
    n = t.toString,
    i = e ? e.toStringTag : void 0;
  function s(o) {
    var a = r.call(o, i),
      c = o[i];
    try {
      o[i] = void 0;
      var u = !0;
    } catch {}
    var l = n.call(o);
    return u && (a ? (o[i] = c) : delete o[i]), l;
  }
  return (To = s), To;
}
var Po, Zf;
function fC() {
  if (Zf) return Po;
  Zf = 1;
  var e = Object.prototype,
    t = e.toString;
  function r(n) {
    return t.call(n);
  }
  return (Po = r), Po;
}
var ko, Qf;
function Sn() {
  if (Qf) return ko;
  Qf = 1;
  var e = Ns(),
    t = dC(),
    r = fC(),
    n = "[object Null]",
    i = "[object Undefined]",
    s = e ? e.toStringTag : void 0;
  function o(a) {
    return a == null
      ? a === void 0
        ? i
        : n
      : s && s in Object(a)
        ? t(a)
        : r(a);
  }
  return (ko = o), ko;
}
var No, Xf;
function Pt() {
  if (Xf) return No;
  Xf = 1;
  var e = Array.isArray;
  return (No = e), No;
}
var Lo, eh;
function En() {
  if (eh) return Lo;
  eh = 1;
  function e(t) {
    return t != null && typeof t == "object";
  }
  return (Lo = e), Lo;
}
var Do, th;
function hC() {
  if (th) return Do;
  th = 1;
  var e = Sn(),
    t = Pt(),
    r = En(),
    n = "[object String]";
  function i(s) {
    return typeof s == "string" || (!t(s) && r(s) && e(s) == n);
  }
  return (Do = i), Do;
}
var pC = hC();
const om = $e(pC);
var Mo, rh;
function am() {
  if (rh) return Mo;
  rh = 1;
  function e(t, r) {
    for (var n = -1, i = t == null ? 0 : t.length, s = Array(i); ++n < i; )
      s[n] = r(t[n], n, t);
    return s;
  }
  return (Mo = e), Mo;
}
var jo, nh;
function gC() {
  if (nh) return jo;
  nh = 1;
  function e() {
    (this.__data__ = []), (this.size = 0);
  }
  return (jo = e), jo;
}
var Uo, ih;
function td() {
  if (ih) return Uo;
  ih = 1;
  function e(t, r) {
    return t === r || (t !== t && r !== r);
  }
  return (Uo = e), Uo;
}
var Bo, sh;
function Ls() {
  if (sh) return Bo;
  sh = 1;
  var e = td();
  function t(r, n) {
    for (var i = r.length; i--; ) if (e(r[i][0], n)) return i;
    return -1;
  }
  return (Bo = t), Bo;
}
var qo, oh;
function _C() {
  if (oh) return qo;
  oh = 1;
  var e = Ls(),
    t = Array.prototype,
    r = t.splice;
  function n(i) {
    var s = this.__data__,
      o = e(s, i);
    if (o < 0) return !1;
    var a = s.length - 1;
    return o == a ? s.pop() : r.call(s, o, 1), --this.size, !0;
  }
  return (qo = n), qo;
}
var Fo, ah;
function vC() {
  if (ah) return Fo;
  ah = 1;
  var e = Ls();
  function t(r) {
    var n = this.__data__,
      i = e(n, r);
    return i < 0 ? void 0 : n[i][1];
  }
  return (Fo = t), Fo;
}
var Go, ch;
function mC() {
  if (ch) return Go;
  ch = 1;
  var e = Ls();
  function t(r) {
    return e(this.__data__, r) > -1;
  }
  return (Go = t), Go;
}
var Vo, uh;
function bC() {
  if (uh) return Vo;
  uh = 1;
  var e = Ls();
  function t(r, n) {
    var i = this.__data__,
      s = e(i, r);
    return s < 0 ? (++this.size, i.push([r, n])) : (i[s][1] = n), this;
  }
  return (Vo = t), Vo;
}
var $o, lh;
function Ds() {
  if (lh) return $o;
  lh = 1;
  var e = gC(),
    t = _C(),
    r = vC(),
    n = mC(),
    i = bC();
  function s(o) {
    var a = -1,
      c = o == null ? 0 : o.length;
    for (this.clear(); ++a < c; ) {
      var u = o[a];
      this.set(u[0], u[1]);
    }
  }
  return (
    (s.prototype.clear = e),
    (s.prototype.delete = t),
    (s.prototype.get = r),
    (s.prototype.has = n),
    (s.prototype.set = i),
    ($o = s),
    $o
  );
}
var Ho, dh;
function yC() {
  if (dh) return Ho;
  dh = 1;
  var e = Ds();
  function t() {
    (this.__data__ = new e()), (this.size = 0);
  }
  return (Ho = t), Ho;
}
var zo, fh;
function SC() {
  if (fh) return zo;
  fh = 1;
  function e(t) {
    var r = this.__data__,
      n = r.delete(t);
    return (this.size = r.size), n;
  }
  return (zo = e), zo;
}
var Wo, hh;
function EC() {
  if (hh) return Wo;
  hh = 1;
  function e(t) {
    return this.__data__.get(t);
  }
  return (Wo = e), Wo;
}
var Ko, ph;
function wC() {
  if (ph) return Ko;
  ph = 1;
  function e(t) {
    return this.__data__.has(t);
  }
  return (Ko = e), Ko;
}
var Yo, gh;
function wn() {
  if (gh) return Yo;
  gh = 1;
  function e(t) {
    var r = typeof t;
    return t != null && (r == "object" || r == "function");
  }
  return (Yo = e), Yo;
}
var Jo, _h;
function cm() {
  if (_h) return Jo;
  _h = 1;
  var e = Sn(),
    t = wn(),
    r = "[object AsyncFunction]",
    n = "[object Function]",
    i = "[object GeneratorFunction]",
    s = "[object Proxy]";
  function o(a) {
    if (!t(a)) return !1;
    var c = e(a);
    return c == n || c == i || c == r || c == s;
  }
  return (Jo = o), Jo;
}
var Zo, vh;
function CC() {
  if (vh) return Zo;
  vh = 1;
  var e = Tt(),
    t = e["__core-js_shared__"];
  return (Zo = t), Zo;
}
var Qo, mh;
function AC() {
  if (mh) return Qo;
  mh = 1;
  var e = CC(),
    t = (function () {
      var n = /[^.]+$/.exec((e && e.keys && e.keys.IE_PROTO) || "");
      return n ? "Symbol(src)_1." + n : "";
    })();
  function r(n) {
    return !!t && t in n;
  }
  return (Qo = r), Qo;
}
var Xo, bh;
function um() {
  if (bh) return Xo;
  bh = 1;
  var e = Function.prototype,
    t = e.toString;
  function r(n) {
    if (n != null) {
      try {
        return t.call(n);
      } catch {}
      try {
        return n + "";
      } catch {}
    }
    return "";
  }
  return (Xo = r), Xo;
}
var ea, yh;
function OC() {
  if (yh) return ea;
  yh = 1;
  var e = cm(),
    t = AC(),
    r = wn(),
    n = um(),
    i = /[\\^$.*+?()[\]{}|]/g,
    s = /^\[object .+?Constructor\]$/,
    o = Function.prototype,
    a = Object.prototype,
    c = o.toString,
    u = a.hasOwnProperty,
    l = RegExp(
      "^" +
        c
          .call(u)
          .replace(i, "\\$&")
          .replace(
            /hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g,
            "$1.*?",
          ) +
        "$",
    );
  function d(f) {
    if (!r(f) || t(f)) return !1;
    var h = e(f) ? l : s;
    return h.test(n(f));
  }
  return (ea = d), ea;
}
var ta, Sh;
function xC() {
  if (Sh) return ta;
  Sh = 1;
  function e(t, r) {
    return t?.[r];
  }
  return (ta = e), ta;
}
var ra, Eh;
function Tr() {
  if (Eh) return ra;
  Eh = 1;
  var e = OC(),
    t = xC();
  function r(n, i) {
    var s = t(n, i);
    return e(s) ? s : void 0;
  }
  return (ra = r), ra;
}
var na, wh;
function rd() {
  if (wh) return na;
  wh = 1;
  var e = Tr(),
    t = Tt(),
    r = e(t, "Map");
  return (na = r), na;
}
var ia, Ch;
function Ms() {
  if (Ch) return ia;
  Ch = 1;
  var e = Tr(),
    t = e(Object, "create");
  return (ia = t), ia;
}
var sa, Ah;
function RC() {
  if (Ah) return sa;
  Ah = 1;
  var e = Ms();
  function t() {
    (this.__data__ = e ? e(null) : {}), (this.size = 0);
  }
  return (sa = t), sa;
}
var oa, Oh;
function IC() {
  if (Oh) return oa;
  Oh = 1;
  function e(t) {
    var r = this.has(t) && delete this.__data__[t];
    return (this.size -= r ? 1 : 0), r;
  }
  return (oa = e), oa;
}
var aa, xh;
function TC() {
  if (xh) return aa;
  xh = 1;
  var e = Ms(),
    t = "__lodash_hash_undefined__",
    r = Object.prototype,
    n = r.hasOwnProperty;
  function i(s) {
    var o = this.__data__;
    if (e) {
      var a = o[s];
      return a === t ? void 0 : a;
    }
    return n.call(o, s) ? o[s] : void 0;
  }
  return (aa = i), aa;
}
var ca, Rh;
function PC() {
  if (Rh) return ca;
  Rh = 1;
  var e = Ms(),
    t = Object.prototype,
    r = t.hasOwnProperty;
  function n(i) {
    var s = this.__data__;
    return e ? s[i] !== void 0 : r.call(s, i);
  }
  return (ca = n), ca;
}
var ua, Ih;
function kC() {
  if (Ih) return ua;
  Ih = 1;
  var e = Ms(),
    t = "__lodash_hash_undefined__";
  function r(n, i) {
    var s = this.__data__;
    return (
      (this.size += this.has(n) ? 0 : 1),
      (s[n] = e && i === void 0 ? t : i),
      this
    );
  }
  return (ua = r), ua;
}
var la, Th;
function NC() {
  if (Th) return la;
  Th = 1;
  var e = RC(),
    t = IC(),
    r = TC(),
    n = PC(),
    i = kC();
  function s(o) {
    var a = -1,
      c = o == null ? 0 : o.length;
    for (this.clear(); ++a < c; ) {
      var u = o[a];
      this.set(u[0], u[1]);
    }
  }
  return (
    (s.prototype.clear = e),
    (s.prototype.delete = t),
    (s.prototype.get = r),
    (s.prototype.has = n),
    (s.prototype.set = i),
    (la = s),
    la
  );
}
var da, Ph;
function LC() {
  if (Ph) return da;
  Ph = 1;
  var e = NC(),
    t = Ds(),
    r = rd();
  function n() {
    (this.size = 0),
      (this.__data__ = { hash: new e(), map: new (r || t)(), string: new e() });
  }
  return (da = n), da;
}
var fa, kh;
function DC() {
  if (kh) return fa;
  kh = 1;
  function e(t) {
    var r = typeof t;
    return r == "string" || r == "number" || r == "symbol" || r == "boolean"
      ? t !== "__proto__"
      : t === null;
  }
  return (fa = e), fa;
}
var ha, Nh;
function js() {
  if (Nh) return ha;
  Nh = 1;
  var e = DC();
  function t(r, n) {
    var i = r.__data__;
    return e(n) ? i[typeof n == "string" ? "string" : "hash"] : i.map;
  }
  return (ha = t), ha;
}
var pa, Lh;
function MC() {
  if (Lh) return pa;
  Lh = 1;
  var e = js();
  function t(r) {
    var n = e(this, r).delete(r);
    return (this.size -= n ? 1 : 0), n;
  }
  return (pa = t), pa;
}
var ga, Dh;
function jC() {
  if (Dh) return ga;
  Dh = 1;
  var e = js();
  function t(r) {
    return e(this, r).get(r);
  }
  return (ga = t), ga;
}
var _a, Mh;
function UC() {
  if (Mh) return _a;
  Mh = 1;
  var e = js();
  function t(r) {
    return e(this, r).has(r);
  }
  return (_a = t), _a;
}
var va, jh;
function BC() {
  if (jh) return va;
  jh = 1;
  var e = js();
  function t(r, n) {
    var i = e(this, r),
      s = i.size;
    return i.set(r, n), (this.size += i.size == s ? 0 : 1), this;
  }
  return (va = t), va;
}
var ma, Uh;
function nd() {
  if (Uh) return ma;
  Uh = 1;
  var e = LC(),
    t = MC(),
    r = jC(),
    n = UC(),
    i = BC();
  function s(o) {
    var a = -1,
      c = o == null ? 0 : o.length;
    for (this.clear(); ++a < c; ) {
      var u = o[a];
      this.set(u[0], u[1]);
    }
  }
  return (
    (s.prototype.clear = e),
    (s.prototype.delete = t),
    (s.prototype.get = r),
    (s.prototype.has = n),
    (s.prototype.set = i),
    (ma = s),
    ma
  );
}
var ba, Bh;
function qC() {
  if (Bh) return ba;
  Bh = 1;
  var e = Ds(),
    t = rd(),
    r = nd(),
    n = 200;
  function i(s, o) {
    var a = this.__data__;
    if (a instanceof e) {
      var c = a.__data__;
      if (!t || c.length < n - 1)
        return c.push([s, o]), (this.size = ++a.size), this;
      a = this.__data__ = new r(c);
    }
    return a.set(s, o), (this.size = a.size), this;
  }
  return (ba = i), ba;
}
var ya, qh;
function lm() {
  if (qh) return ya;
  qh = 1;
  var e = Ds(),
    t = yC(),
    r = SC(),
    n = EC(),
    i = wC(),
    s = qC();
  function o(a) {
    var c = (this.__data__ = new e(a));
    this.size = c.size;
  }
  return (
    (o.prototype.clear = t),
    (o.prototype.delete = r),
    (o.prototype.get = n),
    (o.prototype.has = i),
    (o.prototype.set = s),
    (ya = o),
    ya
  );
}
var Sa, Fh;
function FC() {
  if (Fh) return Sa;
  Fh = 1;
  var e = "__lodash_hash_undefined__";
  function t(r) {
    return this.__data__.set(r, e), this;
  }
  return (Sa = t), Sa;
}
var Ea, Gh;
function GC() {
  if (Gh) return Ea;
  Gh = 1;
  function e(t) {
    return this.__data__.has(t);
  }
  return (Ea = e), Ea;
}
var wa, Vh;
function VC() {
  if (Vh) return wa;
  Vh = 1;
  var e = nd(),
    t = FC(),
    r = GC();
  function n(i) {
    var s = -1,
      o = i == null ? 0 : i.length;
    for (this.__data__ = new e(); ++s < o; ) this.add(i[s]);
  }
  return (
    (n.prototype.add = n.prototype.push = t),
    (n.prototype.has = r),
    (wa = n),
    wa
  );
}
var Ca, $h;
function $C() {
  if ($h) return Ca;
  $h = 1;
  function e(t, r) {
    for (var n = -1, i = t == null ? 0 : t.length; ++n < i; )
      if (r(t[n], n, t)) return !0;
    return !1;
  }
  return (Ca = e), Ca;
}
var Aa, Hh;
function HC() {
  if (Hh) return Aa;
  Hh = 1;
  function e(t, r) {
    return t.has(r);
  }
  return (Aa = e), Aa;
}
var Oa, zh;
function dm() {
  if (zh) return Oa;
  zh = 1;
  var e = VC(),
    t = $C(),
    r = HC(),
    n = 1,
    i = 2;
  function s(o, a, c, u, l, d) {
    var f = c & n,
      h = o.length,
      _ = a.length;
    if (h != _ && !(f && _ > h)) return !1;
    var p = d.get(o),
      g = d.get(a);
    if (p && g) return p == a && g == o;
    var y = -1,
      E = !0,
      A = c & i ? new e() : void 0;
    for (d.set(o, a), d.set(a, o); ++y < h; ) {
      var b = o[y],
        S = a[y];
      if (u) var w = f ? u(S, b, y, a, o, d) : u(b, S, y, o, a, d);
      if (w !== void 0) {
        if (w) continue;
        E = !1;
        break;
      }
      if (A) {
        if (
          !t(a, function (C, O) {
            if (!r(A, O) && (b === C || l(b, C, c, u, d))) return A.push(O);
          })
        ) {
          E = !1;
          break;
        }
      } else if (!(b === S || l(b, S, c, u, d))) {
        E = !1;
        break;
      }
    }
    return d.delete(o), d.delete(a), E;
  }
  return (Oa = s), Oa;
}
var xa, Wh;
function zC() {
  if (Wh) return xa;
  Wh = 1;
  var e = Tt(),
    t = e.Uint8Array;
  return (xa = t), xa;
}
var Ra, Kh;
function WC() {
  if (Kh) return Ra;
  Kh = 1;
  function e(t) {
    var r = -1,
      n = Array(t.size);
    return (
      t.forEach(function (i, s) {
        n[++r] = [s, i];
      }),
      n
    );
  }
  return (Ra = e), Ra;
}
var Ia, Yh;
function KC() {
  if (Yh) return Ia;
  Yh = 1;
  function e(t) {
    var r = -1,
      n = Array(t.size);
    return (
      t.forEach(function (i) {
        n[++r] = i;
      }),
      n
    );
  }
  return (Ia = e), Ia;
}
var Ta, Jh;
function YC() {
  if (Jh) return Ta;
  Jh = 1;
  var e = Ns(),
    t = zC(),
    r = td(),
    n = dm(),
    i = WC(),
    s = KC(),
    o = 1,
    a = 2,
    c = "[object Boolean]",
    u = "[object Date]",
    l = "[object Error]",
    d = "[object Map]",
    f = "[object Number]",
    h = "[object RegExp]",
    _ = "[object Set]",
    p = "[object String]",
    g = "[object Symbol]",
    y = "[object ArrayBuffer]",
    E = "[object DataView]",
    A = e ? e.prototype : void 0,
    b = A ? A.valueOf : void 0;
  function S(w, C, O, T, I, N, j) {
    switch (O) {
      case E:
        if (w.byteLength != C.byteLength || w.byteOffset != C.byteOffset)
          return !1;
        (w = w.buffer), (C = C.buffer);
      case y:
        return !(w.byteLength != C.byteLength || !N(new t(w), new t(C)));
      case c:
      case u:
      case f:
        return r(+w, +C);
      case l:
        return w.name == C.name && w.message == C.message;
      case h:
      case p:
        return w == C + "";
      case d:
        var B = i;
      case _:
        var F = T & o;
        if ((B || (B = s), w.size != C.size && !F)) return !1;
        var H = j.get(w);
        if (H) return H == C;
        (T |= a), j.set(w, C);
        var G = n(B(w), B(C), T, I, N, j);
        return j.delete(w), G;
      case g:
        if (b) return b.call(w) == b.call(C);
    }
    return !1;
  }
  return (Ta = S), Ta;
}
var Pa, Zh;
function fm() {
  if (Zh) return Pa;
  Zh = 1;
  function e(t, r) {
    for (var n = -1, i = r.length, s = t.length; ++n < i; ) t[s + n] = r[n];
    return t;
  }
  return (Pa = e), Pa;
}
var ka, Qh;
function hm() {
  if (Qh) return ka;
  Qh = 1;
  var e = fm(),
    t = Pt();
  function r(n, i, s) {
    var o = i(n);
    return t(n) ? o : e(o, s(n));
  }
  return (ka = r), ka;
}
var Na, Xh;
function JC() {
  if (Xh) return Na;
  Xh = 1;
  function e(t, r) {
    for (var n = -1, i = t == null ? 0 : t.length, s = 0, o = []; ++n < i; ) {
      var a = t[n];
      r(a, n, t) && (o[s++] = a);
    }
    return o;
  }
  return (Na = e), Na;
}
var La, ep;
function pm() {
  if (ep) return La;
  ep = 1;
  function e() {
    return [];
  }
  return (La = e), La;
}
var Da, tp;
function gm() {
  if (tp) return Da;
  tp = 1;
  var e = JC(),
    t = pm(),
    r = Object.prototype,
    n = r.propertyIsEnumerable,
    i = Object.getOwnPropertySymbols,
    s = i
      ? function (o) {
          return o == null
            ? []
            : ((o = Object(o)),
              e(i(o), function (a) {
                return n.call(o, a);
              }));
        }
      : t;
  return (Da = s), Da;
}
var Ma, rp;
function ZC() {
  if (rp) return Ma;
  rp = 1;
  function e(t, r) {
    for (var n = -1, i = Array(t); ++n < t; ) i[n] = r(n);
    return i;
  }
  return (Ma = e), Ma;
}
var ja, np;
function QC() {
  if (np) return ja;
  np = 1;
  var e = Sn(),
    t = En(),
    r = "[object Arguments]";
  function n(i) {
    return t(i) && e(i) == r;
  }
  return (ja = n), ja;
}
var Ua, ip;
function _m() {
  if (ip) return Ua;
  ip = 1;
  var e = QC(),
    t = En(),
    r = Object.prototype,
    n = r.hasOwnProperty,
    i = r.propertyIsEnumerable,
    s = e(
      (function () {
        return arguments;
      })(),
    )
      ? e
      : function (o) {
          return t(o) && n.call(o, "callee") && !i.call(o, "callee");
        };
  return (Ua = s), Ua;
}
var qn = { exports: {} },
  Ba,
  sp;
function XC() {
  if (sp) return Ba;
  sp = 1;
  function e() {
    return !1;
  }
  return (Ba = e), Ba;
}
qn.exports;
var op;
function vm() {
  return (
    op ||
      ((op = 1),
      (function (e, t) {
        var r = Tt(),
          n = XC(),
          i = t && !t.nodeType && t,
          s = i && !0 && e && !e.nodeType && e,
          o = s && s.exports === i,
          a = o ? r.Buffer : void 0,
          c = a ? a.isBuffer : void 0,
          u = c || n;
        e.exports = u;
      })(qn, qn.exports)),
    qn.exports
  );
}
var qa, ap;
function id() {
  if (ap) return qa;
  ap = 1;
  var e = 9007199254740991,
    t = /^(?:0|[1-9]\d*)$/;
  function r(n, i) {
    var s = typeof n;
    return (
      (i = i ?? e),
      !!i &&
        (s == "number" || (s != "symbol" && t.test(n))) &&
        n > -1 &&
        n % 1 == 0 &&
        n < i
    );
  }
  return (qa = r), qa;
}
var Fa, cp;
function sd() {
  if (cp) return Fa;
  cp = 1;
  var e = 9007199254740991;
  function t(r) {
    return typeof r == "number" && r > -1 && r % 1 == 0 && r <= e;
  }
  return (Fa = t), Fa;
}
var Ga, up;
function eA() {
  if (up) return Ga;
  up = 1;
  var e = Sn(),
    t = sd(),
    r = En(),
    n = "[object Arguments]",
    i = "[object Array]",
    s = "[object Boolean]",
    o = "[object Date]",
    a = "[object Error]",
    c = "[object Function]",
    u = "[object Map]",
    l = "[object Number]",
    d = "[object Object]",
    f = "[object RegExp]",
    h = "[object Set]",
    _ = "[object String]",
    p = "[object WeakMap]",
    g = "[object ArrayBuffer]",
    y = "[object DataView]",
    E = "[object Float32Array]",
    A = "[object Float64Array]",
    b = "[object Int8Array]",
    S = "[object Int16Array]",
    w = "[object Int32Array]",
    C = "[object Uint8Array]",
    O = "[object Uint8ClampedArray]",
    T = "[object Uint16Array]",
    I = "[object Uint32Array]",
    N = {};
  (N[E] = N[A] = N[b] = N[S] = N[w] = N[C] = N[O] = N[T] = N[I] = !0),
    (N[n] =
      N[i] =
      N[g] =
      N[s] =
      N[y] =
      N[o] =
      N[a] =
      N[c] =
      N[u] =
      N[l] =
      N[d] =
      N[f] =
      N[h] =
      N[_] =
      N[p] =
        !1);
  function j(B) {
    return r(B) && t(B.length) && !!N[e(B)];
  }
  return (Ga = j), Ga;
}
var Va, lp;
function tA() {
  if (lp) return Va;
  lp = 1;
  function e(t) {
    return function (r) {
      return t(r);
    };
  }
  return (Va = e), Va;
}
var Fn = { exports: {} };
Fn.exports;
var dp;
function rA() {
  return (
    dp ||
      ((dp = 1),
      (function (e, t) {
        var r = sm(),
          n = t && !t.nodeType && t,
          i = n && !0 && e && !e.nodeType && e,
          s = i && i.exports === n,
          o = s && r.process,
          a = (function () {
            try {
              var c = i && i.require && i.require("util").types;
              return c || (o && o.binding && o.binding("util"));
            } catch {}
          })();
        e.exports = a;
      })(Fn, Fn.exports)),
    Fn.exports
  );
}
var $a, fp;
function mm() {
  if (fp) return $a;
  fp = 1;
  var e = eA(),
    t = tA(),
    r = rA(),
    n = r && r.isTypedArray,
    i = n ? t(n) : e;
  return ($a = i), $a;
}
var Ha, hp;
function bm() {
  if (hp) return Ha;
  hp = 1;
  var e = ZC(),
    t = _m(),
    r = Pt(),
    n = vm(),
    i = id(),
    s = mm(),
    o = Object.prototype,
    a = o.hasOwnProperty;
  function c(u, l) {
    var d = r(u),
      f = !d && t(u),
      h = !d && !f && n(u),
      _ = !d && !f && !h && s(u),
      p = d || f || h || _,
      g = p ? e(u.length, String) : [],
      y = g.length;
    for (var E in u)
      (l || a.call(u, E)) &&
        !(
          p &&
          (E == "length" ||
            (h && (E == "offset" || E == "parent")) ||
            (_ && (E == "buffer" || E == "byteLength" || E == "byteOffset")) ||
            i(E, y))
        ) &&
        g.push(E);
    return g;
  }
  return (Ha = c), Ha;
}
var za, pp;
function ym() {
  if (pp) return za;
  pp = 1;
  var e = Object.prototype;
  function t(r) {
    var n = r && r.constructor,
      i = (typeof n == "function" && n.prototype) || e;
    return r === i;
  }
  return (za = t), za;
}
var Wa, gp;
function Sm() {
  if (gp) return Wa;
  gp = 1;
  function e(t, r) {
    return function (n) {
      return t(r(n));
    };
  }
  return (Wa = e), Wa;
}
var Ka, _p;
function nA() {
  if (_p) return Ka;
  _p = 1;
  var e = Sm(),
    t = e(Object.keys, Object);
  return (Ka = t), Ka;
}
var Ya, vp;
function iA() {
  if (vp) return Ya;
  vp = 1;
  var e = ym(),
    t = nA(),
    r = Object.prototype,
    n = r.hasOwnProperty;
  function i(s) {
    if (!e(s)) return t(s);
    var o = [];
    for (var a in Object(s)) n.call(s, a) && a != "constructor" && o.push(a);
    return o;
  }
  return (Ya = i), Ya;
}
var Ja, mp;
function od() {
  if (mp) return Ja;
  mp = 1;
  var e = cm(),
    t = sd();
  function r(n) {
    return n != null && t(n.length) && !e(n);
  }
  return (Ja = r), Ja;
}
var Za, bp;
function ad() {
  if (bp) return Za;
  bp = 1;
  var e = bm(),
    t = iA(),
    r = od();
  function n(i) {
    return r(i) ? e(i) : t(i);
  }
  return (Za = n), Za;
}
var Qa, yp;
function sA() {
  if (yp) return Qa;
  yp = 1;
  var e = hm(),
    t = gm(),
    r = ad();
  function n(i) {
    return e(i, r, t);
  }
  return (Qa = n), Qa;
}
var Xa, Sp;
function oA() {
  if (Sp) return Xa;
  Sp = 1;
  var e = sA(),
    t = 1,
    r = Object.prototype,
    n = r.hasOwnProperty;
  function i(s, o, a, c, u, l) {
    var d = a & t,
      f = e(s),
      h = f.length,
      _ = e(o),
      p = _.length;
    if (h != p && !d) return !1;
    for (var g = h; g--; ) {
      var y = f[g];
      if (!(d ? y in o : n.call(o, y))) return !1;
    }
    var E = l.get(s),
      A = l.get(o);
    if (E && A) return E == o && A == s;
    var b = !0;
    l.set(s, o), l.set(o, s);
    for (var S = d; ++g < h; ) {
      y = f[g];
      var w = s[y],
        C = o[y];
      if (c) var O = d ? c(C, w, y, o, s, l) : c(w, C, y, s, o, l);
      if (!(O === void 0 ? w === C || u(w, C, a, c, l) : O)) {
        b = !1;
        break;
      }
      S || (S = y == "constructor");
    }
    if (b && !S) {
      var T = s.constructor,
        I = o.constructor;
      T != I &&
        "constructor" in s &&
        "constructor" in o &&
        !(
          typeof T == "function" &&
          T instanceof T &&
          typeof I == "function" &&
          I instanceof I
        ) &&
        (b = !1);
    }
    return l.delete(s), l.delete(o), b;
  }
  return (Xa = i), Xa;
}
var ec, Ep;
function aA() {
  if (Ep) return ec;
  Ep = 1;
  var e = Tr(),
    t = Tt(),
    r = e(t, "DataView");
  return (ec = r), ec;
}
var tc, wp;
function cA() {
  if (wp) return tc;
  wp = 1;
  var e = Tr(),
    t = Tt(),
    r = e(t, "Promise");
  return (tc = r), tc;
}
var rc, Cp;
function uA() {
  if (Cp) return rc;
  Cp = 1;
  var e = Tr(),
    t = Tt(),
    r = e(t, "Set");
  return (rc = r), rc;
}
var nc, Ap;
function lA() {
  if (Ap) return nc;
  Ap = 1;
  var e = Tr(),
    t = Tt(),
    r = e(t, "WeakMap");
  return (nc = r), nc;
}
var ic, Op;
function dA() {
  if (Op) return ic;
  Op = 1;
  var e = aA(),
    t = rd(),
    r = cA(),
    n = uA(),
    i = lA(),
    s = Sn(),
    o = um(),
    a = "[object Map]",
    c = "[object Object]",
    u = "[object Promise]",
    l = "[object Set]",
    d = "[object WeakMap]",
    f = "[object DataView]",
    h = o(e),
    _ = o(t),
    p = o(r),
    g = o(n),
    y = o(i),
    E = s;
  return (
    ((e && E(new e(new ArrayBuffer(1))) != f) ||
      (t && E(new t()) != a) ||
      (r && E(r.resolve()) != u) ||
      (n && E(new n()) != l) ||
      (i && E(new i()) != d)) &&
      (E = function (A) {
        var b = s(A),
          S = b == c ? A.constructor : void 0,
          w = S ? o(S) : "";
        if (w)
          switch (w) {
            case h:
              return f;
            case _:
              return a;
            case p:
              return u;
            case g:
              return l;
            case y:
              return d;
          }
        return b;
      }),
    (ic = E),
    ic
  );
}
var sc, xp;
function fA() {
  if (xp) return sc;
  xp = 1;
  var e = lm(),
    t = dm(),
    r = YC(),
    n = oA(),
    i = dA(),
    s = Pt(),
    o = vm(),
    a = mm(),
    c = 1,
    u = "[object Arguments]",
    l = "[object Array]",
    d = "[object Object]",
    f = Object.prototype,
    h = f.hasOwnProperty;
  function _(p, g, y, E, A, b) {
    var S = s(p),
      w = s(g),
      C = S ? l : i(p),
      O = w ? l : i(g);
    (C = C == u ? d : C), (O = O == u ? d : O);
    var T = C == d,
      I = O == d,
      N = C == O;
    if (N && o(p)) {
      if (!o(g)) return !1;
      (S = !0), (T = !1);
    }
    if (N && !T)
      return (
        b || (b = new e()),
        S || a(p) ? t(p, g, y, E, A, b) : r(p, g, C, y, E, A, b)
      );
    if (!(y & c)) {
      var j = T && h.call(p, "__wrapped__"),
        B = I && h.call(g, "__wrapped__");
      if (j || B) {
        var F = j ? p.value() : p,
          H = B ? g.value() : g;
        return b || (b = new e()), A(F, H, y, E, b);
      }
    }
    return N ? (b || (b = new e()), n(p, g, y, E, A, b)) : !1;
  }
  return (sc = _), sc;
}
var oc, Rp;
function cd() {
  if (Rp) return oc;
  Rp = 1;
  var e = fA(),
    t = En();
  function r(n, i, s, o, a) {
    return n === i
      ? !0
      : n == null || i == null || (!t(n) && !t(i))
        ? n !== n && i !== i
        : e(n, i, s, o, r, a);
  }
  return (oc = r), oc;
}
var ac, Ip;
function hA() {
  if (Ip) return ac;
  Ip = 1;
  var e = lm(),
    t = cd(),
    r = 1,
    n = 2;
  function i(s, o, a, c) {
    var u = a.length,
      l = u,
      d = !c;
    if (s == null) return !l;
    for (s = Object(s); u--; ) {
      var f = a[u];
      if (d && f[2] ? f[1] !== s[f[0]] : !(f[0] in s)) return !1;
    }
    for (; ++u < l; ) {
      f = a[u];
      var h = f[0],
        _ = s[h],
        p = f[1];
      if (d && f[2]) {
        if (_ === void 0 && !(h in s)) return !1;
      } else {
        var g = new e();
        if (c) var y = c(_, p, h, s, o, g);
        if (!(y === void 0 ? t(p, _, r | n, c, g) : y)) return !1;
      }
    }
    return !0;
  }
  return (ac = i), ac;
}
var cc, Tp;
function Em() {
  if (Tp) return cc;
  Tp = 1;
  var e = wn();
  function t(r) {
    return r === r && !e(r);
  }
  return (cc = t), cc;
}
var uc, Pp;
function pA() {
  if (Pp) return uc;
  Pp = 1;
  var e = Em(),
    t = ad();
  function r(n) {
    for (var i = t(n), s = i.length; s--; ) {
      var o = i[s],
        a = n[o];
      i[s] = [o, a, e(a)];
    }
    return i;
  }
  return (uc = r), uc;
}
var lc, kp;
function wm() {
  if (kp) return lc;
  kp = 1;
  function e(t, r) {
    return function (n) {
      return n == null ? !1 : n[t] === r && (r !== void 0 || t in Object(n));
    };
  }
  return (lc = e), lc;
}
var dc, Np;
function gA() {
  if (Np) return dc;
  Np = 1;
  var e = hA(),
    t = pA(),
    r = wm();
  function n(i) {
    var s = t(i);
    return s.length == 1 && s[0][2]
      ? r(s[0][0], s[0][1])
      : function (o) {
          return o === i || e(o, i, s);
        };
  }
  return (dc = n), dc;
}
var fc, Lp;
function Us() {
  if (Lp) return fc;
  Lp = 1;
  var e = Sn(),
    t = En(),
    r = "[object Symbol]";
  function n(i) {
    return typeof i == "symbol" || (t(i) && e(i) == r);
  }
  return (fc = n), fc;
}
var hc, Dp;
function ud() {
  if (Dp) return hc;
  Dp = 1;
  var e = Pt(),
    t = Us(),
    r = /\.|\[(?:[^[\]]*|(["'])(?:(?!\1)[^\\]|\\.)*?\1)\]/,
    n = /^\w*$/;
  function i(s, o) {
    if (e(s)) return !1;
    var a = typeof s;
    return a == "number" || a == "symbol" || a == "boolean" || s == null || t(s)
      ? !0
      : n.test(s) || !r.test(s) || (o != null && s in Object(o));
  }
  return (hc = i), hc;
}
var pc, Mp;
function _A() {
  if (Mp) return pc;
  Mp = 1;
  var e = nd(),
    t = "Expected a function";
  function r(n, i) {
    if (typeof n != "function" || (i != null && typeof i != "function"))
      throw new TypeError(t);
    var s = function () {
      var o = arguments,
        a = i ? i.apply(this, o) : o[0],
        c = s.cache;
      if (c.has(a)) return c.get(a);
      var u = n.apply(this, o);
      return (s.cache = c.set(a, u) || c), u;
    };
    return (s.cache = new (r.Cache || e)()), s;
  }
  return (r.Cache = e), (pc = r), pc;
}
var gc, jp;
function vA() {
  if (jp) return gc;
  jp = 1;
  var e = _A(),
    t = 500;
  function r(n) {
    var i = e(n, function (o) {
        return s.size === t && s.clear(), o;
      }),
      s = i.cache;
    return i;
  }
  return (gc = r), gc;
}
var _c, Up;
function mA() {
  if (Up) return _c;
  Up = 1;
  var e = vA(),
    t =
      /[^.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|$))/g,
    r = /\\(\\)?/g,
    n = e(function (i) {
      var s = [];
      return (
        i.charCodeAt(0) === 46 && s.push(""),
        i.replace(t, function (o, a, c, u) {
          s.push(c ? u.replace(r, "$1") : a || o);
        }),
        s
      );
    });
  return (_c = n), _c;
}
var vc, Bp;
function bA() {
  if (Bp) return vc;
  Bp = 1;
  var e = Ns(),
    t = am(),
    r = Pt(),
    n = Us(),
    i = e ? e.prototype : void 0,
    s = i ? i.toString : void 0;
  function o(a) {
    if (typeof a == "string") return a;
    if (r(a)) return t(a, o) + "";
    if (n(a)) return s ? s.call(a) : "";
    var c = a + "";
    return c == "0" && 1 / a == -1 / 0 ? "-0" : c;
  }
  return (vc = o), vc;
}
var mc, qp;
function yA() {
  if (qp) return mc;
  qp = 1;
  var e = bA();
  function t(r) {
    return r == null ? "" : e(r);
  }
  return (mc = t), mc;
}
var bc, Fp;
function Bs() {
  if (Fp) return bc;
  Fp = 1;
  var e = Pt(),
    t = ud(),
    r = mA(),
    n = yA();
  function i(s, o) {
    return e(s) ? s : t(s, o) ? [s] : r(n(s));
  }
  return (bc = i), bc;
}
var yc, Gp;
function ai() {
  if (Gp) return yc;
  Gp = 1;
  var e = Us();
  function t(r) {
    if (typeof r == "string" || e(r)) return r;
    var n = r + "";
    return n == "0" && 1 / r == -1 / 0 ? "-0" : n;
  }
  return (yc = t), yc;
}
var Sc, Vp;
function ld() {
  if (Vp) return Sc;
  Vp = 1;
  var e = Bs(),
    t = ai();
  function r(n, i) {
    i = e(i, n);
    for (var s = 0, o = i.length; n != null && s < o; ) n = n[t(i[s++])];
    return s && s == o ? n : void 0;
  }
  return (Sc = r), Sc;
}
var Ec, $p;
function SA() {
  if ($p) return Ec;
  $p = 1;
  var e = ld();
  function t(r, n, i) {
    var s = r == null ? void 0 : e(r, n);
    return s === void 0 ? i : s;
  }
  return (Ec = t), Ec;
}
var wc, Hp;
function EA() {
  if (Hp) return wc;
  Hp = 1;
  function e(t, r) {
    return t != null && r in Object(t);
  }
  return (wc = e), wc;
}
var Cc, zp;
function wA() {
  if (zp) return Cc;
  zp = 1;
  var e = Bs(),
    t = _m(),
    r = Pt(),
    n = id(),
    i = sd(),
    s = ai();
  function o(a, c, u) {
    c = e(c, a);
    for (var l = -1, d = c.length, f = !1; ++l < d; ) {
      var h = s(c[l]);
      if (!(f = a != null && u(a, h))) break;
      a = a[h];
    }
    return f || ++l != d
      ? f
      : ((d = a == null ? 0 : a.length),
        !!d && i(d) && n(h, d) && (r(a) || t(a)));
  }
  return (Cc = o), Cc;
}
var Ac, Wp;
function CA() {
  if (Wp) return Ac;
  Wp = 1;
  var e = EA(),
    t = wA();
  function r(n, i) {
    return n != null && t(n, i, e);
  }
  return (Ac = r), Ac;
}
var Oc, Kp;
function AA() {
  if (Kp) return Oc;
  Kp = 1;
  var e = cd(),
    t = SA(),
    r = CA(),
    n = ud(),
    i = Em(),
    s = wm(),
    o = ai(),
    a = 1,
    c = 2;
  function u(l, d) {
    return n(l) && i(d)
      ? s(o(l), d)
      : function (f) {
          var h = t(f, l);
          return h === void 0 && h === d ? r(f, l) : e(d, h, a | c);
        };
  }
  return (Oc = u), Oc;
}
var xc, Yp;
function OA() {
  if (Yp) return xc;
  Yp = 1;
  function e(t) {
    return t;
  }
  return (xc = e), xc;
}
var Rc, Jp;
function xA() {
  if (Jp) return Rc;
  Jp = 1;
  function e(t) {
    return function (r) {
      return r?.[t];
    };
  }
  return (Rc = e), Rc;
}
var Ic, Zp;
function RA() {
  if (Zp) return Ic;
  Zp = 1;
  var e = ld();
  function t(r) {
    return function (n) {
      return e(n, r);
    };
  }
  return (Ic = t), Ic;
}
var Tc, Qp;
function IA() {
  if (Qp) return Tc;
  Qp = 1;
  var e = xA(),
    t = RA(),
    r = ud(),
    n = ai();
  function i(s) {
    return r(s) ? e(n(s)) : t(s);
  }
  return (Tc = i), Tc;
}
var Pc, Xp;
function qs() {
  if (Xp) return Pc;
  Xp = 1;
  var e = gA(),
    t = AA(),
    r = OA(),
    n = Pt(),
    i = IA();
  function s(o) {
    return typeof o == "function"
      ? o
      : o == null
        ? r
        : typeof o == "object"
          ? n(o)
            ? t(o[0], o[1])
            : e(o)
          : i(o);
  }
  return (Pc = s), Pc;
}
var kc, eg;
function TA() {
  if (eg) return kc;
  eg = 1;
  var e = Tr(),
    t = (function () {
      try {
        var r = e(Object, "defineProperty");
        return r({}, "", {}), r;
      } catch {}
    })();
  return (kc = t), kc;
}
var Nc, tg;
function PA() {
  if (tg) return Nc;
  tg = 1;
  var e = TA();
  function t(r, n, i) {
    n == "__proto__" && e
      ? e(r, n, { configurable: !0, enumerable: !0, value: i, writable: !0 })
      : (r[n] = i);
  }
  return (Nc = t), Nc;
}
var Lc, rg;
function kA() {
  if (rg) return Lc;
  rg = 1;
  var e = PA(),
    t = td(),
    r = Object.prototype,
    n = r.hasOwnProperty;
  function i(s, o, a) {
    var c = s[o];
    (!(n.call(s, o) && t(c, a)) || (a === void 0 && !(o in s))) && e(s, o, a);
  }
  return (Lc = i), Lc;
}
var Dc, ng;
function NA() {
  if (ng) return Dc;
  ng = 1;
  var e = kA(),
    t = Bs(),
    r = id(),
    n = wn(),
    i = ai();
  function s(o, a, c, u) {
    if (!n(o)) return o;
    a = t(a, o);
    for (var l = -1, d = a.length, f = d - 1, h = o; h != null && ++l < d; ) {
      var _ = i(a[l]),
        p = c;
      if (_ === "__proto__" || _ === "constructor" || _ === "prototype")
        return o;
      if (l != f) {
        var g = h[_];
        (p = u ? u(g, _, h) : void 0),
          p === void 0 && (p = n(g) ? g : r(a[l + 1]) ? [] : {});
      }
      e(h, _, p), (h = h[_]);
    }
    return o;
  }
  return (Dc = s), Dc;
}
var Mc, ig;
function LA() {
  if (ig) return Mc;
  ig = 1;
  var e = ld(),
    t = NA(),
    r = Bs();
  function n(i, s, o) {
    for (var a = -1, c = s.length, u = {}; ++a < c; ) {
      var l = s[a],
        d = e(i, l);
      o(d, l) && t(u, r(l, i), d);
    }
    return u;
  }
  return (Mc = n), Mc;
}
var jc, sg;
function DA() {
  if (sg) return jc;
  sg = 1;
  var e = Sm(),
    t = e(Object.getPrototypeOf, Object);
  return (jc = t), jc;
}
var Uc, og;
function MA() {
  if (og) return Uc;
  og = 1;
  var e = fm(),
    t = DA(),
    r = gm(),
    n = pm(),
    i = Object.getOwnPropertySymbols,
    s = i
      ? function (o) {
          for (var a = []; o; ) e(a, r(o)), (o = t(o));
          return a;
        }
      : n;
  return (Uc = s), Uc;
}
var Bc, ag;
function jA() {
  if (ag) return Bc;
  ag = 1;
  function e(t) {
    var r = [];
    if (t != null) for (var n in Object(t)) r.push(n);
    return r;
  }
  return (Bc = e), Bc;
}
var qc, cg;
function UA() {
  if (cg) return qc;
  cg = 1;
  var e = wn(),
    t = ym(),
    r = jA(),
    n = Object.prototype,
    i = n.hasOwnProperty;
  function s(o) {
    if (!e(o)) return r(o);
    var a = t(o),
      c = [];
    for (var u in o) (u == "constructor" && (a || !i.call(o, u))) || c.push(u);
    return c;
  }
  return (qc = s), qc;
}
var Fc, ug;
function BA() {
  if (ug) return Fc;
  ug = 1;
  var e = bm(),
    t = UA(),
    r = od();
  function n(i) {
    return r(i) ? e(i, !0) : t(i);
  }
  return (Fc = n), Fc;
}
var Gc, lg;
function qA() {
  if (lg) return Gc;
  lg = 1;
  var e = hm(),
    t = MA(),
    r = BA();
  function n(i) {
    return e(i, r, t);
  }
  return (Gc = n), Gc;
}
var Vc, dg;
function Cm() {
  if (dg) return Vc;
  dg = 1;
  var e = am(),
    t = qs(),
    r = LA(),
    n = qA();
  function i(s, o) {
    if (s == null) return {};
    var a = e(n(s), function (c) {
      return [c];
    });
    return (
      (o = t(o)),
      r(s, a, function (c, u) {
        return o(c, u[0]);
      })
    );
  }
  return (Vc = i), Vc;
}
var FA = Cm();
const Am = $e(FA),
  GA = "modulepreload",
  VA = function (e) {
    return "https://cdn.oaistatic.com/" + e;
  },
  fg = {},
  k = function (t, r, n) {
    let i = Promise.resolve();
    if (r && r.length > 0) {
      let o = function (u) {
        return Promise.all(
          u.map((l) =>
            Promise.resolve(l).then(
              (d) => ({ status: "fulfilled", value: d }),
              (d) => ({ status: "rejected", reason: d }),
            ),
          ),
        );
      };
      document.getElementsByTagName("link");
      const a = document.querySelector("meta[property=csp-nonce]"),
        c = a?.nonce || a?.getAttribute("nonce");
      i = o(
        r.map((u) => {
          if (((u = VA(u)), u in fg)) return;
          fg[u] = !0;
          const l = u.endsWith(".css"),
            d = l ? '[rel="stylesheet"]' : "";
          if (document.querySelector(`link[href="${u}"]${d}`)) return;
          const f = document.createElement("link");
          if (
            ((f.rel = l ? "stylesheet" : GA),
            l || (f.as = "script"),
            (f.crossOrigin = ""),
            (f.href = u),
            c && f.setAttribute("nonce", c),
            document.head.appendChild(f),
            l)
          )
            return new Promise((h, _) => {
              f.addEventListener("load", h),
                f.addEventListener("error", () =>
                  _(new Error(`Unable to preload CSS for ${u}`)),
                );
            });
        }),
      );
    }
    function s(o) {
      const a = new Event("vite:preloadError", { cancelable: !0 });
      if (((a.payload = o), window.dispatchEvent(a), !a.defaultPrevented))
        throw o;
    }
    return i.then((o) => {
      for (const a of o || []) a.status === "rejected" && s(a.reason);
      return t().catch(s);
    });
  },
  ct = window.localStorage;
var Vt = ((e) => (
  (e.Theme = "theme"),
  (e.NextAuth = "nextauth.message"),
  (e.IsNoAuthChatTrainingEnabled = "oai/apps/isNoAuthChatTrainingEnabled"),
  (e.IsNavigationCollapsed = "UiState.isNavigationCollapsed.1"),
  (e.IsHistoryCollapsed = "UiState.isOnlyShowingRecents.1"),
  (e.ChatThreadFlyoutState = "UiState.chatThreadFlyoutState"),
  (e.IsGptListCollapsed = "UiState.isGptListCollapsed"),
  (e.LastUsedModel = "oai/apps/lastModelUsed"),
  (e.EnabledPlugins = "oai/enabledPluginIds"),
  (e.HasSeenNewChatModal = "oai/apps/hasSeenNewChatModal"),
  (e.HasSeenMeetChatGptModal = "oai/apps/hasSeenMeetChatGptModal"),
  (e.HasSignedUpForPlusUpgradeWaitlistV1 =
    "oai/apps/HasSignedUpForPlusUpgradeWaitlist"),
  (e.HasSignedUpForPlusUpgradeWaitlistV2 =
    "oai/apps/HasSignedUpForPlusUpgradeWaitlistV2"),
  (e.HasSignedUpForTeamUpgradeWaitlistV1 =
    "oai/apps/HasSignedUpForTeamUpgradeWaitlist"),
  (e.HasSignedUpForTeamUpgradeWaitlistV2 =
    "oai/apps/HasSignedUpForTeamUpgradeWaitlistV2"),
  (e.HasDismissedUpgradeInviteModal =
    "oai/apps/hasDismissedUpgradeInviteModal"),
  (e.GizmoEditorTab = "oai/apps/gizmoEditorTab"),
  (e.GizmoDiscoveryLocale = "oai/apps/gizmoDiscoveryLocale"),
  (e.NoAuthRateLimitState = "oai/apps/noAuthRateLimitState"),
  (e.RestoreMessageAfterOauthRedirect =
    "oai/apps/restoreMessageAfterOauthRedirect"),
  (e.HasSeenAdaInteractiveChart = "oai/apps/hasSeenAdaInteractiveChart"),
  (e.HasSeenAdaInteractiveTable = "oai/apps/hasSeenAdaInteractiveTable"),
  (e.SearchSettings = "oai/apps/searchSettings"),
  (e.NoAuthBannerDisclaimerClientThreadId =
    "oai/apps/noAuthBannerDisclaimerClientThreadId"),
  (e.NoAuthHasAcceptedFooterDisclaimer =
    "oai/apps/noAuthHasAcceptedFooterDisclaimer"),
  (e.NoAuthUserMessageCount = "oai/apps/noAuthUserMessageCount"),
  (e.HasSeenNoAuthImagegenNux = "oai/apps/hasSeenNoAuthImagegenNux"),
  (e.LoggedInUserMessageCount = "oai/apps/loggedInUserMessageCount"),
  (e.NoAuthHasDismissedSoftRateLimitModal =
    "oai/apps/noAuthHasDismissedSoftRateLimitModal"),
  (e.NoAuthHasSeenGpt4oModal = "oai/apps/noAuthHasSeenGpt4oModal"),
  (e.MemoryFullBannerDismissed = "oai/apps/memoryFullBannerDismissed"),
  (e.IndepthFeedbackDismissedAt = "oai/apps/indepthFeedbackDismissedAt"),
  (e.AdvancedVoiceOnMobileAnnouncementCount =
    "oai/apps/oai/apps/hasSeenAdvancedVoiceOnMobile/2024-09-26"),
  (e.CheckoutFrom = "oai/apps/checkout_from"),
  (e.HasDismissedMobileAppUpsellBanner =
    "oai/apps/hasDismissedMobileAppUpsellBanner"),
  (e.HasDismissedMoodengUpsellBanner =
    "oai/apps/hasDismissedMoodengUpsellBanner"),
  (e.HasConfirmedCanvasCodeExecution =
    "oai/apps/hasConfirmedCanvasCodeExecution"),
  (e.CODE_EXECUTION_DOMAIN_ALLOW_LIST =
    "oai/apps/codeExecutionDomainAllowlistWithTTL"),
  (e.TasksHasSeenProjectDisclaimerBanner =
    "oai/apps/tasksHasSeenProjectDisclaimerBanner"),
  (e.ExpandSummarizedCoT = "oai/apps/ExpandSummarizedCoT"),
  (e.PromoCode = "oai/apps/promoCode"),
  (e.LastPageLoadDate = "oai/apps/lastPageLoadDate"),
  (e.NoAuthMadlibsModalState = "oai/apps/noAuthMadlibsModalState"),
  (e.LastSeenPlusUpsellBannerAt = "oai/apps/lastSeenPlusUpsellBannerAt"),
  (e.O3MiniHighInContextUpsellBanner =
    "oai/apps/o3MiniHighInContextUpsellBanner"),
  (e.d2dee219 = "oai/apps/d2dee219"),
  (e.ReferralCode = "oai/apps/referralCode"),
  (e.LastFeedLoad = "oai/apps/2dc5214a"),
  (e.ConversationDrafts = "oai/apps/conversationDrafts"),
  (e.DebugSettings = "oai/apps/debugSettings"),
  (e.LastEnvironment = "oai/apps/l1239dk1/a3f4b29d"),
  (e.PromptDraft = "oai/apps/l1239dk1/c7e2d18f"),
  (e.ProposedTasks = "oai/apps/l1239dk1/8fa94c1e"),
  (e.ReactQueryDevtoolsVisible = "oai/apps/l1239dk1/3e2d18f"),
  (e.SegmentUserId = "ajs_user_id"),
  (e.SegmentUserTraits = "ajs_user_traits"),
  (e.MessageFollowupsStoreState = "oai/apps/messageFollowupsStoreState"),
  (e.JumpToShade = "jump-to-shade"),
  (e.HasManuallyClosedLanguageUpsellBanner =
    "oai/apps/hasManuallyClosedLanguageUpsellBanner"),
  (e.PluginsAuthRedirect = "oai/apps/plugins/authRedirect"),
  e
))(Vt || {});
class $t {
  static setItem(t, r, n) {
    if (!ct) return;
    const i = $c(t, n);
    ct.setItem(i, JSON.stringify(r));
  }
  static getItem(t, r) {
    if (!ct) return null;
    const n = $c(t, r),
      i = ct.getItem(n);
    return typeof i == "string" ? JSON.parse(i) : i;
  }
  static removeItem(t, r) {
    if (ct) {
      const n = $c(t, r);
      return ct.removeItem(n);
    }
  }
  static DANGER_SECRET_FOLDERS_ONLY_setItem(t, r) {
    if (!ct) {
      console.warn(`You cannot set localStorage server-side (${t})`);
      return;
    }
    ct.setItem(t, JSON.stringify(r));
  }
  static DANGER_SECRET_FOLDERS_ONLY_getItem(t) {
    if (!ct)
      return (
        console.warn(`You cannot get localStorage server-side (${t})`), null
      );
    const r = ct.getItem(t);
    return typeof r == "string" ? JSON.parse(r) : r;
  }
}
function $c(e, t) {
  const r = [e];
  return (
    t !== void 0 &&
      (t.userId != null && r.push(t.userId),
      t.workspaceId != null && r.push(t.workspaceId)),
    r.join("/")
  );
}
function $A() {
  $.deleteCookie(q.SegmentUserId),
    $.deleteCookie(q.SegmentUserTraits),
    $t.removeItem(Vt.SegmentUserId),
    $t.removeItem(Vt.SegmentUserTraits);
}
const Yu = () => ({
  hash: window.location.hash,
  path: window.location.pathname,
  search: window.location.search,
  url: window.location.href,
});
function IM() {
  pe?.publish(Gt.ZOOM, { command: Is.ZOOM_IN });
}
function TM() {
  pe?.publish(Gt.ZOOM, { command: Is.ZOOM_OUT });
}
function PM() {
  pe?.publish(Gt.ZOOM, { command: Is.ZOOM_RESET });
}
function hg(e) {
  if (Os) {
    const t = Date.now();
    pe?.publish(Gt.ADD_BREADCRUMB, { message: e, epochTimestamp: t });
  }
}
function Om() {
  return $.getCookie(q.PunchOutInfoToken);
}
function kM() {
  return Om() != null;
}
class HA {
  analytics;
  appName;
  appVersion;
  deviceId;
  browserLocale;
  options;
  settings;
  user;
  constructor({
    appName: t,
    appVersion: r,
    deviceId: n,
    browserLocale: i,
    options: s,
    settings: o,
  }) {
    (this.analytics = new Promise((a) => {
      k(
        () => import("./bnsebkfktmtf4dlq.js").then((c) => c.v),
        __vite__mapDeps([0, 1]),
      ).then((c) => {
        if (!c) {
          x.addAction("ClientEventsServiceLogger.segmentImport.failed", {
            appName: t,
            appVersion: r,
          });
          return;
        }
        const u = new c.AnalyticsBrowser();
        u.addSourceMiddleware(zA(this)), a([u]);
      });
    })),
      (this.appName = t),
      (this.appVersion = r),
      (this.deviceId = n),
      (this.browserLocale = i),
      (this.options = s),
      (this.settings = o);
  }
  async initialize({ user: t }) {
    const r = { appName: this.appName, appVersion: this.appVersion };
    x.addAction("ClientEventsServiceLogger.initialize.start", r),
      t && this.identify(t);
    const [n] = await this.analytics;
    n.load(this.settings, this.options).catch(() => {
      x.addAction("ClientEventsServiceLogger.initialize.failed", r);
    }),
      n.ready(() => {
        x.addAction("ClientEventsServiceLogger.initialize.success", r);
      });
  }
  async track(t, r) {
    const [n] = await this.analytics;
    n.track(t, r, { page: Yu() }),
      hg(`Web Client Event: ${t} with data: ${JSON.stringify(r)}`);
  }
  async trackPageView() {
    const t = Yu(),
      [r] = await this.analytics;
    r.page(void 0, t, { page: t }), hg(`Web Client Page View: ${t.path}`);
  }
  async identify(t) {
    this.user = t;
    const [r] = await this.analytics;
    r.identify(t.userId, t.traits);
  }
  getExtraContext() {
    return {
      app_name: this.appName,
      app_version: this.appVersion,
      browser_locale: this.browserLocale,
      device_id: this.deviceId,
      auth_status: this.user ? rn.LoggedIn : rn.LoggedOut,
      user_traits: this.user?.traits,
      punch_out_info_token: Om(),
    };
  }
}
function zA(e) {
  return ({ payload: t, next: r }) => {
    (t.obj.context = { ...t.obj.context, ...e.getExtraContext() }), r(t);
  };
}
const WA = yn(),
  KA = navigator.language,
  Ju = "4dc7f8dcbaf358ca582fa5ec3f4acf92747879cc",
  Oi = new HA({
    appName: "chatgpt",
    appVersion: Ju,
    deviceId: WA,
    browserLocale: KA,
    options: jS,
    settings: US,
  }),
  le = {
    initialize({ userInfo: e } = {}) {
      const t =
          e?.currentAccount?.structure === ke.WORKSPACE
            ? e.currentAccount.id
            : null,
        r = e
          ? {
              userId: e.sessionUser.id,
              traits: {
                plan_type: e.currentAccount?.planType ?? null,
                workspace_id: t,
              },
            }
          : null;
      Oi.initialize({ user: r });
    },
    logEvent(e, t) {
      Oi.track(e, { ...t, origin: "chat", app_version: Ju });
    },
    logEventWithStatsig(e, t, r) {
      const n = { ...r, origin: "chat", app_version: Ju };
      Oi.track(e, n),
        X.logEvent(
          t,
          null,
          Am(n, (i) => om(i)),
        );
    },
    logPageView() {
      Oi.trackPageView();
    },
    logNewChatButtonClicked({ location: e, gizmo_id: t }) {
      this.logEvent("New Chat Button Clicked", { location: e, gizmo_id: t }),
        X.logEvent("chatgpt_new_chat_button_clicked", null, { location: e });
    },
    logAuthErrorResponse(e, t) {
      this.logEvent("Auth: Error", { error_code: e }),
        X.logEvent("chatgpt_auth_error", e, { auth_provider: t });
    },
    logNoAuthAttachButtonClicked(e) {
      this.logEvent("No Auth Attach Button Clicked", e),
        X.logEvent("chatgpt_web_no_auth_attach_button_clicked", null, e);
    },
    logNoAuthVoiceButtonClicked(e) {
      this.logEvent("No Auth Voice Button Clicked", e),
        X.logEvent("chatgpt_web_no_auth_voice_button_clicked", null, e);
    },
    logLogInButtonClicked(e) {
      this.logEvent("Auth: Login", e),
        X.logEvent("chatgpt_auth_log_in", null, e);
    },
    logSignUpButtonClicked(e) {
      this.logEvent("Auth: Signup", e),
        X.logEvent("chatgpt_auth_sign_up", null, e);
    },
    logLogOutButtonClicked(e) {
      this.logEvent("Auth: Logout", e),
        X.logEvent("chatgpt_auth_log_out", null, e);
    },
    logRateLimitBannerShown(e) {
      this.logEvent("Rate Limit: Show Info", e);
      const { call_to_action: t, ...r } = e,
        n = r;
      t?.forEach((i, s) => {
        n[`call_to_action.${s}`] = i;
      }),
        X.logEvent("chatgpt_rate_limit_banner_shown", null, {
          ...n,
          is_new_conversation: e.is_new_conversation.toString(),
          is_hard_block: e.is_hard_block.toString(),
        });
    },
    logRateLimitGetPlusButtonClicked(e) {
      this.logEvent("Rate Limit: Click Upsell", e),
        X.logEvent("chatgpt_rate_limit_get_plus_button_clicked", null, {
          ...e,
          is_new_conversation: e.is_new_conversation.toString(),
          is_hard_block: e.is_hard_block.toString(),
        });
    },
    logRateLimitUpgradePlanButtonClicked(e) {
      this.logEvent("Rate Limit: Click Upsell", e),
        X.logEvent("chatgpt_rate_limit_upgrade_plan_button_clicked", null, {
          ...e,
          is_new_conversation: e.is_new_conversation.toString(),
          is_hard_block: e.is_hard_block.toString(),
        });
    },
    logPopoverHover(e) {
      this.logEvent("Popover Hover", e),
        X.logEvent("chatgpt_popover_hover", null, e);
    },
    logUpsellGetPlusButtonClicked(e) {
      this.logEventWithStatsig(
        "Upsell: Get Plus Clicked",
        "chatgpt_upsell_get_plus_button_clicked",
        e,
      );
    },
    logToggleShowRecents({ isOnlyShowingRecents: e }) {
      this.logEvent("Toggle Show Recents", { isOnlyShowingRecents: e }),
        X.logEvent("chatgpt_toggle_show_recents", null, {
          isOnlyShowingRecents: String(e),
        });
    },
    logToggleShowGptList({ isCollapsed: e }) {
      this.logEvent("Toggle Show GPT List", { isCollapsed: e });
    },
    logToggleDesktopNavCollapsed({ isDesktopNavCollapsed: e, action: t }) {
      this.logEvent("Toggle Desktop Nav Collapsed", {
        isDesktopNavCollapsed: e,
      }),
        X.logEvent("chatgpt_toggle_desktop_nav_collapsed", null, {
          isDesktopNavCollapsed: String(e),
          action: t,
        });
    },
    logTogglePlanManagementModal({ isOpen: e }) {
      const t = "chatgpt_toggle_plan_management_modal";
      this.logEvent("Toggle Plan Management Modal", { isOpen: e }),
        X.logEvent(t, null, { isOpen: String(e) });
    },
    logPaymentSuccess(e) {
      this.logEvent("Subscription: Payment Success Page", e),
        X.logEvent("chatgpt_plan_payment_success_page", null, e);
    },
    logNetworkError(e) {
      this.logEvent("chatgpt_web_network_error", e),
        X.logEvent("chatgpt_web_network_error", null, e);
    },
    logFailedToFetchError(e) {
      this.logEvent("chatgpt_web_failed_to_fetch", e),
        X.logEvent("chatgpt_web_failed_to_fetch", null, e);
    },
  };
function YA({ showReturnHome: e = !1 }) {
  const t = v.useId(),
    r = Gl(),
    [n] = v.useState(() => {
      {
        const i = document.getElementById(t)?.dataset.index;
        if (i != null) return parseInt(i);
      }
      return Math.floor(Math.random() * pg.length);
    });
  return m.jsx("section", {
    className: "flex h-screen flex-col items-center justify-center",
    "data-index": n,
    id: t,
    children: m.jsxs("div", {
      children: [
        m.jsxs("h3", {
          children: [
            m.jsx(_w, { className: "mb-2 h-6 w-6 align-baseline" }),
            "404 Not Found",
          ],
        }),
        m.jsx("p", {
          className: "mt-2 max-w-lg pb-6",
          children: m.jsx(Rw, {
            value: pg[n].message,
            typing: !0,
            speed: 150,
            chunk: !0,
          }),
        }),
        e &&
          m.jsx(As, {
            color: "primary",
            onClick: () => {
              le.logEventWithStatsig(
                "404 Page Return Home Button Clicked",
                "chatgpt_404_page_return_home_button_clicked",
              ),
                r("/");
            },
            children: m.jsx(v1, {
              id: "Cc1py2",
              defaultMessage: "Go to ChatGPT",
            }),
          }),
      ],
    }),
  });
}
const pg = [
    {
      message: `Lost in the vast web,
Where you sought, there's only void—
Nothingness awaits.`,
    },
    {
      message: `Paths cross empty void
Seeking what once existed
Silence answers all.`,
    },
    {
      message: `Where we are, there's only air,
A page misplaced, it isn't there.
In the void where data fades,
Questions linger, answers evade.
Not all paths lead where we care.`,
    },
    {
      message: `Where the page should be,
Empty space and missing words—
A void in the code.`,
    },
    {
      message: `The link was a dream,
A shadow of what once was—
Now, nothing remains.`,
    },
    {
      message: `In the heat of day,
The path dissolves to nothing—
An empty mirage.`,
    },
  ],
  JA = () => {
    const e = rt();
    return { country: He(e).userCountry };
  };
function xm() {
  "use forget";
  const e = Cs.c(2),
    t = rt(),
    r = !zv(t);
  let n;
  return (
    e[0] !== r
      ? ((n = { isUnauthenticated: r, isLoading: !1 }), (e[0] = r), (e[1] = n))
      : (n = e[1]),
    n
  );
}
function ZA(e, t) {
  return e instanceof Error && Error.captureStackTrace?.(e, t), e;
}
function Pr(e, t = "<unknown>") {
  if (e == null)
    throw ZA(
      new Error(`${t}: unexpected nullish value: ${JSON.stringify(e)}`),
      Pr,
    );
  return e;
}
var QA = {};
const NM = "https://chatgpt.com/backend/se",
  LM =
    QA.VITE_VZA493Q_SERVICE_URL ??
    "https://operator.chatgpt.com" ??
    "https://operator.chatgpt.com",
  pr = "personal",
  Rm = 60 * 60 * 24 * 90,
  DM = Rr({
    signUpButtonText: { id: "Kiuf8K", defaultMessage: "Sign up" },
    logInButtonText: { id: "Yx8BXg", defaultMessage: "Log in" },
    cancelButtonText: { id: "DR1Cxg", defaultMessage: "Cancel" },
    continueButtonText: { id: "bT1n8o", defaultMessage: "Continue" },
    gotItButtonText: { id: "Eomb3Y", defaultMessage: "Got it" },
    stayLoggedOut: { id: "JpuO4U", defaultMessage: "Stay logged out" },
    somethingWentWrong: {
      id: "SJ1B8J",
      defaultMessage: "Something went wrong. Please try again later",
    },
  });
var XA = ((e) => ((e.APPLE = "apple"), e))(XA || {});
const MM = "gpt-4",
  eO = "gpt-4o",
  jM = eO;
var tO = ((e) => (
  (e.GPT_3_5 = "gpt3.5"),
  (e.GPT_4 = "gpt4"),
  (e.GPT_4o = "gpt4o"),
  (e.HIDDEN = "hidden"),
  e
))(tO || {});
const dd = "WEB:",
  UM = `${dd}:DUMMY`;
var rO = ((e) => (
    (e.Next = "next"), (e.Variant = "variant"), (e.Continue = "continue"), e
  ))(rO || {}),
  W = ((e) => (
    (e.Root = "root"),
    (e.User = "user"),
    (e.Assistant = "assistant"),
    (e.System = "system"),
    (e.Critic = "critic"),
    (e.Tool = "tool"),
    (e.Developer = "developer"),
    e
  ))(W || {}),
  Zn = ((e) => (
    (e.PrimaryAssistant = "primary_assistant"),
    (e.GizmoInteraction = "gizmo_interaction"),
    (e.GizmoMagicCreate = "gizmo_magic_create"),
    (e.GizmoTest = "gizmo_test"),
    (e.FlyingCircusCustomization = "flying_circus_customization"),
    e
  ))(Zn || {}),
  Zu = ((e) => (
    (e.Web = "web"),
    (e.GitHub = "github"),
    (e.GoogleDrive = "google_drive"),
    (e.GoogleCalendar = "google_calendar"),
    (e.Gmail = "gmail"),
    (e.GoogleContacts = "google_contacts"),
    (e.Dropbox = "dropbox"),
    (e.Linear = "linear"),
    (e.Sharepoint = "sharepoint"),
    (e.Teams = "teams"),
    (e.OutlookEmail = "outlook_email"),
    (e.OutlookCalendar = "outlook_calendar"),
    (e.Box = "box"),
    (e.Intercom = "intercom"),
    (e.Hubspot = "hubspot"),
    e
  ))(Zu || {}),
  nO = ((e) => (
    (e.None = "none"), (e.OAuth = "oauth"), (e.ServiceHTTP = "service_http"), e
  ))(nO || {}),
  iO = ((e) => (
    (e.CONVERSATION = "conversation"), (e.REGENERATE = "regenerate"), e
  ))(iO || {}),
  sO = ((e) => (
    (e.UNSUPPORTED_ATTACHMENT = "unsupported_attachment"),
    (e.UNSUPPORTED_AUDIO = "unsupported_audio"),
    (e.UNSUPPORTED_IMAGE = "unsupported_image"),
    (e.UNSUPPORTED_TOOL_USE = "unsupported_tool_use"),
    (e.UNSUPPORTED_GIZMO = "unsupported_gizmo"),
    (e.UNSUPPORTED_CUSTOM_INSTRUCTIONS = "unsupported_custom_instructions"),
    (e.UNSUPPORTED_TEMPORARY_CHAT = "unsupported_temporary_chat"),
    (e.UNSUPPORTED_CANVAS = "unsupported_canvas"),
    e
  ))(sO || {}),
  oO = ((e) => ((e.RATE_LIMIT = "rate_limit"), e))(oO || {}),
  z = ((e) => (
    (e.Text = "text"),
    (e.MultimodalText = "multimodal_text"),
    (e.StructuredThoughts = "thoughts"),
    (e.ReasoningRecap = "reasoning_recap"),
    (e.TetherBrowsingCode = "tether_browsing_code"),
    (e.Code = "code"),
    (e.ExecutionOutput = "execution_output"),
    (e.SystemError = "system_error"),
    (e.SystemMessage = "system_message"),
    (e.SystemContent = "system_content"),
    (e.DeveloperContent = "developer_content"),
    (e.TetherBrowsingDisplay = "tether_browsing_display"),
    (e.TetherQuote = "tether_quote"),
    (e.UserEditableContext = "user_editable_context"),
    (e.ModelEditableContext = "model_editable_context"),
    (e.SonicWebpage = "sonic_webpage"),
    (e.ComputerOutput = "computer_output"),
    (e.Error = "error"),
    e
  ))(z || {}),
  je = ((e) => (
    (e.Audio = "audio"),
    (e.AudioAssetPointer = "audio_asset_pointer"),
    (e.ImageAssetPointer = "image_asset_pointer"),
    (e.Image = "image"),
    (e.AudioTranscription = "audio_transcription"),
    (e.RealTimeUserAudioVideoAssetPointer =
      "real_time_user_audio_video_asset_pointer"),
    e
  ))(je || {}),
  aO = ((e) => ((e.Picker = "Picker"), (e.Link = "Link"), e))(aO || {}),
  kr = ((e) => (
    (e.SEND = "send"),
    (e.GIZMO_TAG = "gizmo_tag"),
    (e.FILE_UPLOAD = "file_upload"),
    (e.REASON = "reason"),
    (e.DEEP_RESEARCH = "deep_research"),
    (e.IMAGE_GEN = "image_gen"),
    e
  ))(kr || {}),
  cO = ((e) => (
    (e.AUTHENTICATE = "authenticate"),
    (e.AUTHENTICATE_SECONDARY = "authenticate_secondary"),
    (e.GET_PLUS = "get_plus"),
    (e.NEW_CHAT = "new_chat"),
    (e.FREE_USER_O3_MINI_HIGH = "free_user_o3_mini_high"),
    (e.PAID_USER_O3_MINI_HIGH = "paid_user_o3_mini_high"),
    (e.DEEP_RESEARCH_IN_CONTEXT_UPSELL = "deep_research_in_context_upsell"),
    e
  ))(cO || {}),
  Im = ((e) => ((e.DEEP_RESEARCH = "deep_research"), e))(Im || {}),
  uO = ((e) => ((e.SystemHint = "systemHint"), e))(uO || {});
function BM(e) {
  return "start_index" in e
    ? { startIndex: e.start_index, endIndex: e.end_index, symbol: e.symbol }
    : e;
}
var lO = ((e) => (
    (e.InstantQuery = "instant_query"),
    (e.ComposerSearch = "composer_search"),
    (e.UrlSearch = "url_search"),
    e
  ))(lO || {}),
  dO = ((e) => (
    (e.ToolWeb = "tool:web"),
    (e.Onboarding = "onboarding"),
    (e.AppPairing = "tool:app-pairing"),
    (e.IPL = "campaign:ipl"),
    e
  ))(dO || {}),
  fO = ((e) => (
    (e.Search = "search"),
    (e.Canvas = "canvas"),
    (e.ImageGen = "image_gen_tool_enabled"),
    e
  ))(fO || {}),
  hO = ((e) => (
    (e.Search = "search"),
    (e.Click = "click"),
    (e.MultiClick = "mclick"),
    (e.Lookup = "lookup"),
    (e.OpenUrl = "open_url"),
    (e.Open = "open"),
    (e.Quote = "quote"),
    (e.QuoteFull = "quote_full"),
    (e.QuoteLines = "quote_lines"),
    (e.Back = "back"),
    (e.Scroll = "scroll"),
    (e.Spinner = "spinner"),
    e
  ))(hO || {}),
  pO = ((e) => ((e.Bing = "bing"), (e.Fortis = "fortis"), e))(pO || {}),
  gO = ((e) => (
    (e.Starting = "starting"),
    (e.Running = "running"),
    (e.Done = "done"),
    (e.Timeout = "timeout"),
    (e.Error = "error"),
    (e.Cancelled = "cancelled"),
    e
  ))(gO || {}),
  _O = ((e) => ((e.AUTO = "auto"), e))(_O || {}),
  Tm = ((e) => (
    (e.Search = "search"),
    (e.Think = "reason"),
    (e.Research = "research"),
    (e.Canvas = "canvas"),
    (e.Picture = "picture"),
    (e.PictureV2 = "picture_v2"),
    (e.Video = "video"),
    (e.ContextualAnswers = "contextual_answers"),
    (e.Moonshine = "moonshine"),
    (e.Tatertot = "tatertot"),
    e
  ))(Tm || {});
const qM = {
  isFocused: !1,
  autocompletions: [],
  showTaggingDropdown: !1,
  controlsDisabled: !1,
  waveWidth: 300,
  isInReasonMode: !1,
  rateLimitBannerFeature: null,
};
class FM {
  eraseContent() {
    this.setText("");
  }
  getContentToSend() {
    return { content: this.getCurrentText() };
  }
  registerKeyHandlers(t) {}
  canShowAutocompletion() {
    return !0;
  }
  setAutocompletions(t) {
    this.store.setState({ autocompletions: t });
  }
  setShowTaggingDropdown(t) {
    this.store.setState({ showTaggingDropdown: t });
  }
  setControlsDisabled(t) {
    this.store.setState({ controlsDisabled: t });
  }
  setWaveWidth(t) {
    this.store.setState({ waveWidth: t });
  }
  setWaveformData = (t) => {
    this.store.setState({ waveformData: t });
  };
  setReasonMode = (t) => {
    this.store.setState({ isInReasonMode: t });
  };
  setRateLimitBannerFeature = (t) => {
    this.store.setState({ rateLimitBannerFeature: t });
  };
  onAutocompleteSelect = (t, r, n) => {
    r.forEach((i) => {
      i.id === t.id && (i.userInput = this.getCurrentText());
    }),
      this.store.setState({ autocompletions: [r[n]] });
  };
  logPageMount() {
    x.addFirstTiming("chatgpt.web.chatPage.prompttextarea.modern.mounted");
  }
  useState(t) {
    return v.useSyncExternalStore(
      (r) => this.subscribe("input", r),
      () => t(this),
      () => t(this),
    );
  }
}
var Pm = Symbol.for("immer-nothing"),
  gg = Symbol.for("immer-draftable"),
  Z = Symbol.for("immer-state");
function qe(e, ...t) {
  throw new Error(
    `[Immer] minified error nr: ${e}. Full error at: https://bit.ly/3cXEKWf`,
  );
}
var nn = Object.getPrototypeOf;
function sn(e) {
  return !!e && !!e[Z];
}
function wt(e) {
  return e
    ? km(e) ||
        Array.isArray(e) ||
        !!e[gg] ||
        !!e.constructor?.[gg] ||
        Gs(e) ||
        Vs(e)
    : !1;
}
var vO = Object.prototype.constructor.toString();
function km(e) {
  if (!e || typeof e != "object") return !1;
  const t = nn(e);
  if (t === null) return !0;
  const r = Object.hasOwnProperty.call(t, "constructor") && t.constructor;
  return r === Object
    ? !0
    : typeof r == "function" && Function.toString.call(r) === vO;
}
function on(e, t) {
  Fs(e) === 0
    ? Object.entries(e).forEach(([r, n]) => {
        t(r, n, e);
      })
    : e.forEach((r, n) => t(n, r, e));
}
function Fs(e) {
  const t = e[Z];
  return t ? t.type_ : Array.isArray(e) ? 1 : Gs(e) ? 2 : Vs(e) ? 3 : 0;
}
function Qu(e, t) {
  return Fs(e) === 2 ? e.has(t) : Object.prototype.hasOwnProperty.call(e, t);
}
function Nm(e, t, r) {
  const n = Fs(e);
  n === 2 ? e.set(t, r) : n === 3 ? e.add(r) : (e[t] = r);
}
function mO(e, t) {
  return e === t ? e !== 0 || 1 / e === 1 / t : e !== e && t !== t;
}
function Gs(e) {
  return e instanceof Map;
}
function Vs(e) {
  return e instanceof Set;
}
function he(e) {
  return e.copy_ || e.base_;
}
function Xu(e, t) {
  if (Gs(e)) return new Map(e);
  if (Vs(e)) return new Set(e);
  if (Array.isArray(e)) return Array.prototype.slice.call(e);
  if (!t && km(e))
    return nn(e) ? { ...e } : Object.assign(Object.create(null), e);
  const r = Object.getOwnPropertyDescriptors(e);
  delete r[Z];
  let n = Reflect.ownKeys(r);
  for (let i = 0; i < n.length; i++) {
    const s = n[i],
      o = r[s];
    o.writable === !1 && ((o.writable = !0), (o.configurable = !0)),
      (o.get || o.set) &&
        (r[s] = {
          configurable: !0,
          writable: !0,
          enumerable: o.enumerable,
          value: e[s],
        });
  }
  return Object.create(nn(e), r);
}
function fd(e, t = !1) {
  return (
    $s(e) ||
      sn(e) ||
      !wt(e) ||
      (Fs(e) > 1 && (e.set = e.add = e.clear = e.delete = bO),
      Object.freeze(e),
      t && on(e, (r, n) => fd(n, !0))),
    e
  );
}
function bO() {
  qe(2);
}
function $s(e) {
  return Object.isFrozen(e);
}
var el = {};
function gr(e) {
  const t = el[e];
  return t || qe(0, e), t;
}
function yO(e, t) {
  el[e] || (el[e] = t);
}
var Qn;
function is() {
  return Qn;
}
function SO(e, t) {
  return {
    drafts_: [],
    parent_: e,
    immer_: t,
    canAutoFreeze_: !0,
    unfinalizedDrafts_: 0,
  };
}
function _g(e, t) {
  t &&
    (gr("Patches"),
    (e.patches_ = []),
    (e.inversePatches_ = []),
    (e.patchListener_ = t));
}
function tl(e) {
  rl(e), e.drafts_.forEach(EO), (e.drafts_ = null);
}
function rl(e) {
  e === Qn && (Qn = e.parent_);
}
function vg(e) {
  return (Qn = SO(Qn, e));
}
function EO(e) {
  const t = e[Z];
  t.type_ === 0 || t.type_ === 1 ? t.revoke_() : (t.revoked_ = !0);
}
function mg(e, t) {
  t.unfinalizedDrafts_ = t.drafts_.length;
  const r = t.drafts_[0];
  return (
    e !== void 0 && e !== r
      ? (r[Z].modified_ && (tl(t), qe(4)),
        wt(e) && ((e = ss(t, e)), t.parent_ || os(t, e)),
        t.patches_ &&
          gr("Patches").generateReplacementPatches_(
            r[Z].base_,
            e,
            t.patches_,
            t.inversePatches_,
          ))
      : (e = ss(t, r, [])),
    tl(t),
    t.patches_ && t.patchListener_(t.patches_, t.inversePatches_),
    e !== Pm ? e : void 0
  );
}
function ss(e, t, r) {
  if ($s(t)) return t;
  const n = t[Z];
  if (!n) return on(t, (i, s) => bg(e, n, t, i, s, r)), t;
  if (n.scope_ !== e) return t;
  if (!n.modified_) return os(e, n.base_, !0), n.base_;
  if (!n.finalized_) {
    (n.finalized_ = !0), n.scope_.unfinalizedDrafts_--;
    const i = n.copy_;
    let s = i,
      o = !1;
    n.type_ === 3 && ((s = new Set(i)), i.clear(), (o = !0)),
      on(s, (a, c) => bg(e, n, i, a, c, r, o)),
      os(e, i, !1),
      r &&
        e.patches_ &&
        gr("Patches").generatePatches_(n, r, e.patches_, e.inversePatches_);
  }
  return n.copy_;
}
function bg(e, t, r, n, i, s, o) {
  if (sn(i)) {
    const a =
        s && t && t.type_ !== 3 && !Qu(t.assigned_, n) ? s.concat(n) : void 0,
      c = ss(e, i, a);
    if ((Nm(r, n, c), sn(c))) e.canAutoFreeze_ = !1;
    else return;
  } else o && r.add(i);
  if (wt(i) && !$s(i)) {
    if (!e.immer_.autoFreeze_ && e.unfinalizedDrafts_ < 1) return;
    ss(e, i), (!t || !t.scope_.parent_) && os(e, i);
  }
}
function os(e, t, r = !1) {
  !e.parent_ && e.immer_.autoFreeze_ && e.canAutoFreeze_ && fd(t, r);
}
function wO(e, t) {
  const r = Array.isArray(e),
    n = {
      type_: r ? 1 : 0,
      scope_: t ? t.scope_ : is(),
      modified_: !1,
      finalized_: !1,
      assigned_: {},
      parent_: t,
      base_: e,
      draft_: null,
      copy_: null,
      revoke_: null,
      isManual_: !1,
    };
  let i = n,
    s = hd;
  r && ((i = [n]), (s = Xn));
  const { revoke: o, proxy: a } = Proxy.revocable(i, s);
  return (n.draft_ = a), (n.revoke_ = o), a;
}
var hd = {
    get(e, t) {
      if (t === Z) return e;
      const r = he(e);
      if (!Qu(r, t)) return CO(e, r, t);
      const n = r[t];
      return e.finalized_ || !wt(n)
        ? n
        : n === Hc(e.base_, t)
          ? (zc(e), (e.copy_[t] = ei(n, e)))
          : n;
    },
    has(e, t) {
      return t in he(e);
    },
    ownKeys(e) {
      return Reflect.ownKeys(he(e));
    },
    set(e, t, r) {
      const n = Lm(he(e), t);
      if (n?.set) return n.set.call(e.draft_, r), !0;
      if (!e.modified_) {
        const i = Hc(he(e), t),
          s = i?.[Z];
        if (s && s.base_ === r)
          return (e.copy_[t] = r), (e.assigned_[t] = !1), !0;
        if (mO(r, i) && (r !== void 0 || Qu(e.base_, t))) return !0;
        zc(e), mt(e);
      }
      return (
        (e.copy_[t] === r && (r !== void 0 || t in e.copy_)) ||
          (Number.isNaN(r) && Number.isNaN(e.copy_[t])) ||
          ((e.copy_[t] = r), (e.assigned_[t] = !0)),
        !0
      );
    },
    deleteProperty(e, t) {
      return (
        Hc(e.base_, t) !== void 0 || t in e.base_
          ? ((e.assigned_[t] = !1), zc(e), mt(e))
          : delete e.assigned_[t],
        e.copy_ && delete e.copy_[t],
        !0
      );
    },
    getOwnPropertyDescriptor(e, t) {
      const r = he(e),
        n = Reflect.getOwnPropertyDescriptor(r, t);
      return (
        n && {
          writable: !0,
          configurable: e.type_ !== 1 || t !== "length",
          enumerable: n.enumerable,
          value: r[t],
        }
      );
    },
    defineProperty() {
      qe(11);
    },
    getPrototypeOf(e) {
      return nn(e.base_);
    },
    setPrototypeOf() {
      qe(12);
    },
  },
  Xn = {};
on(hd, (e, t) => {
  Xn[e] = function () {
    return (arguments[0] = arguments[0][0]), t.apply(this, arguments);
  };
});
Xn.deleteProperty = function (e, t) {
  return Xn.set.call(this, e, t, void 0);
};
Xn.set = function (e, t, r) {
  return hd.set.call(this, e[0], t, r, e[0]);
};
function Hc(e, t) {
  const r = e[Z];
  return (r ? he(r) : e)[t];
}
function CO(e, t, r) {
  const n = Lm(t, r);
  return n ? ("value" in n ? n.value : n.get?.call(e.draft_)) : void 0;
}
function Lm(e, t) {
  if (!(t in e)) return;
  let r = nn(e);
  for (; r; ) {
    const n = Object.getOwnPropertyDescriptor(r, t);
    if (n) return n;
    r = nn(r);
  }
}
function mt(e) {
  e.modified_ || ((e.modified_ = !0), e.parent_ && mt(e.parent_));
}
function zc(e) {
  e.copy_ || (e.copy_ = Xu(e.base_, e.scope_.immer_.useStrictShallowCopy_));
}
var AO = class {
  constructor(e) {
    (this.autoFreeze_ = !0),
      (this.useStrictShallowCopy_ = !1),
      (this.produce = (t, r, n) => {
        if (typeof t == "function" && typeof r != "function") {
          const s = r;
          r = t;
          const o = this;
          return function (c = s, ...u) {
            return o.produce(c, (l) => r.call(this, l, ...u));
          };
        }
        typeof r != "function" && qe(6),
          n !== void 0 && typeof n != "function" && qe(7);
        let i;
        if (wt(t)) {
          const s = vg(this),
            o = ei(t, void 0);
          let a = !0;
          try {
            (i = r(o)), (a = !1);
          } finally {
            a ? tl(s) : rl(s);
          }
          return _g(s, n), mg(i, s);
        } else if (!t || typeof t != "object") {
          if (
            ((i = r(t)),
            i === void 0 && (i = t),
            i === Pm && (i = void 0),
            this.autoFreeze_ && fd(i, !0),
            n)
          ) {
            const s = [],
              o = [];
            gr("Patches").generateReplacementPatches_(t, i, s, o), n(s, o);
          }
          return i;
        } else qe(1, t);
      }),
      (this.produceWithPatches = (t, r) => {
        if (typeof t == "function")
          return (o, ...a) => this.produceWithPatches(o, (c) => t(c, ...a));
        let n, i;
        return [
          this.produce(t, r, (o, a) => {
            (n = o), (i = a);
          }),
          n,
          i,
        ];
      }),
      typeof e?.autoFreeze == "boolean" && this.setAutoFreeze(e.autoFreeze),
      typeof e?.useStrictShallowCopy == "boolean" &&
        this.setUseStrictShallowCopy(e.useStrictShallowCopy);
  }
  createDraft(e) {
    wt(e) || qe(8), sn(e) && (e = OO(e));
    const t = vg(this),
      r = ei(e, void 0);
    return (r[Z].isManual_ = !0), rl(t), r;
  }
  finishDraft(e, t) {
    const r = e && e[Z];
    (!r || !r.isManual_) && qe(9);
    const { scope_: n } = r;
    return _g(n, t), mg(void 0, n);
  }
  setAutoFreeze(e) {
    this.autoFreeze_ = e;
  }
  setUseStrictShallowCopy(e) {
    this.useStrictShallowCopy_ = e;
  }
  applyPatches(e, t) {
    let r;
    for (r = t.length - 1; r >= 0; r--) {
      const i = t[r];
      if (i.path.length === 0 && i.op === "replace") {
        e = i.value;
        break;
      }
    }
    r > -1 && (t = t.slice(r + 1));
    const n = gr("Patches").applyPatches_;
    return sn(e) ? n(e, t) : this.produce(e, (i) => n(i, t));
  }
};
function ei(e, t) {
  const r = Gs(e)
    ? gr("MapSet").proxyMap_(e, t)
    : Vs(e)
      ? gr("MapSet").proxySet_(e, t)
      : wO(e, t);
  return (t ? t.scope_ : is()).drafts_.push(r), r;
}
function OO(e) {
  return sn(e) || qe(10, e), Dm(e);
}
function Dm(e) {
  if (!wt(e) || $s(e)) return e;
  const t = e[Z];
  let r;
  if (t) {
    if (!t.modified_) return t.base_;
    (t.finalized_ = !0), (r = Xu(e, t.scope_.immer_.useStrictShallowCopy_));
  } else r = Xu(e, !0);
  return (
    on(r, (n, i) => {
      Nm(r, n, Dm(i));
    }),
    t && (t.finalized_ = !1),
    r
  );
}
function xO() {
  class e extends Map {
    constructor(c, u) {
      super(),
        (this[Z] = {
          type_: 2,
          parent_: u,
          scope_: u ? u.scope_ : is(),
          modified_: !1,
          finalized_: !1,
          copy_: void 0,
          assigned_: void 0,
          base_: c,
          draft_: this,
          isManual_: !1,
          revoked_: !1,
        });
    }
    get size() {
      return he(this[Z]).size;
    }
    has(c) {
      return he(this[Z]).has(c);
    }
    set(c, u) {
      const l = this[Z];
      return (
        o(l),
        (!he(l).has(c) || he(l).get(c) !== u) &&
          (r(l),
          mt(l),
          l.assigned_.set(c, !0),
          l.copy_.set(c, u),
          l.assigned_.set(c, !0)),
        this
      );
    }
    delete(c) {
      if (!this.has(c)) return !1;
      const u = this[Z];
      return (
        o(u),
        r(u),
        mt(u),
        u.base_.has(c) ? u.assigned_.set(c, !1) : u.assigned_.delete(c),
        u.copy_.delete(c),
        !0
      );
    }
    clear() {
      const c = this[Z];
      o(c),
        he(c).size &&
          (r(c),
          mt(c),
          (c.assigned_ = new Map()),
          on(c.base_, (u) => {
            c.assigned_.set(u, !1);
          }),
          c.copy_.clear());
    }
    forEach(c, u) {
      const l = this[Z];
      he(l).forEach((d, f, h) => {
        c.call(u, this.get(f), f, this);
      });
    }
    get(c) {
      const u = this[Z];
      o(u);
      const l = he(u).get(c);
      if (u.finalized_ || !wt(l) || l !== u.base_.get(c)) return l;
      const d = ei(l, u);
      return r(u), u.copy_.set(c, d), d;
    }
    keys() {
      return he(this[Z]).keys();
    }
    values() {
      const c = this.keys();
      return {
        [Symbol.iterator]: () => this.values(),
        next: () => {
          const u = c.next();
          return u.done ? u : { done: !1, value: this.get(u.value) };
        },
      };
    }
    entries() {
      const c = this.keys();
      return {
        [Symbol.iterator]: () => this.entries(),
        next: () => {
          const u = c.next();
          if (u.done) return u;
          const l = this.get(u.value);
          return { done: !1, value: [u.value, l] };
        },
      };
    }
    [Symbol.iterator]() {
      return this.entries();
    }
  }
  function t(a, c) {
    return new e(a, c);
  }
  function r(a) {
    a.copy_ || ((a.assigned_ = new Map()), (a.copy_ = new Map(a.base_)));
  }
  class n extends Set {
    constructor(c, u) {
      super(),
        (this[Z] = {
          type_: 3,
          parent_: u,
          scope_: u ? u.scope_ : is(),
          modified_: !1,
          finalized_: !1,
          copy_: void 0,
          base_: c,
          draft_: this,
          drafts_: new Map(),
          revoked_: !1,
          isManual_: !1,
        });
    }
    get size() {
      return he(this[Z]).size;
    }
    has(c) {
      const u = this[Z];
      return (
        o(u),
        u.copy_
          ? !!(
              u.copy_.has(c) ||
              (u.drafts_.has(c) && u.copy_.has(u.drafts_.get(c)))
            )
          : u.base_.has(c)
      );
    }
    add(c) {
      const u = this[Z];
      return o(u), this.has(c) || (s(u), mt(u), u.copy_.add(c)), this;
    }
    delete(c) {
      if (!this.has(c)) return !1;
      const u = this[Z];
      return (
        o(u),
        s(u),
        mt(u),
        u.copy_.delete(c) ||
          (u.drafts_.has(c) ? u.copy_.delete(u.drafts_.get(c)) : !1)
      );
    }
    clear() {
      const c = this[Z];
      o(c), he(c).size && (s(c), mt(c), c.copy_.clear());
    }
    values() {
      const c = this[Z];
      return o(c), s(c), c.copy_.values();
    }
    entries() {
      const c = this[Z];
      return o(c), s(c), c.copy_.entries();
    }
    keys() {
      return this.values();
    }
    [Symbol.iterator]() {
      return this.values();
    }
    forEach(c, u) {
      const l = this.values();
      let d = l.next();
      for (; !d.done; ) c.call(u, d.value, d.value, this), (d = l.next());
    }
  }
  function i(a, c) {
    return new n(a, c);
  }
  function s(a) {
    a.copy_ ||
      ((a.copy_ = new Set()),
      a.base_.forEach((c) => {
        if (wt(c)) {
          const u = ei(c, a);
          a.drafts_.set(c, u), a.copy_.add(u);
        } else a.copy_.add(c);
      }));
  }
  function o(a) {
    a.revoked_ && qe(3, JSON.stringify(he(a)));
  }
  yO("MapSet", { proxyMap_: t, proxySet_: i });
}
var Ne = new AO(),
  vt = Ne.produce;
Ne.produceWithPatches.bind(Ne);
Ne.setAutoFreeze.bind(Ne);
Ne.setUseStrictShallowCopy.bind(Ne);
Ne.applyPatches.bind(Ne);
Ne.createDraft.bind(Ne);
Ne.finishDraft.bind(Ne);
const RO = (e) => (t, r, n) => (
    (n.setState = (i, s, ...o) => {
      const a = typeof i == "function" ? vt(i) : i;
      return t(a, s, ...o);
    }),
    e(n.setState, r, n)
  ),
  Hs = RO,
  IO = {
    bannerInfo: null,
    modelLimits: [],
    blockedFeatures: [],
    isInitialLoad: !0,
    limitsProgress: [],
  },
  qt = pt(Hs(() => ({ ...IO }))),
  TO = { [Tm.Research]: Im.DEEP_RESEARCH };
function PO(e) {
  return TO[e] ?? null;
}
function an(e) {
  return new Date(e.resets_after) > new Date();
}
const kO = {
  updateDetails: ({
    banner_info: e,
    model_limits: t,
    blocked_features: r,
    limits_progress: n,
  }) => {
    qt.setState((i) => {
      (i.bannerInfo ??= e),
        (i.isInitialLoad = !1),
        (i.blockedFeatures = i.blockedFeatures.concat(r).filter(an)),
        (i.modelLimits = i.modelLimits.concat(t ?? []).filter(an)),
        (i.limitsProgress = n ?? []);
    });
  },
  dismissBanner: () => {
    qt.setState((e) => {
      e.bannerInfo = null;
    });
  },
  reset: () => {
    qt.setState((e) => {
      (e.blockedFeatures = []), (e.bannerInfo = null);
    });
  },
};
function GM() {
  return qt(({ bannerInfo: e }) => {
    const { resets_after: t } = e ?? {};
    return !e || (t != null && !an({ resets_after: t })) ? null : e;
  });
}
function Cn(e) {
  return qt(({ blockedFeatures: t }) => {
    const r = t.find(({ name: n }) => n === e);
    return r && an(r) ? r : null;
  });
}
function NO() {
  return Cn(kr.SEND);
}
function VM() {
  return !!NO();
}
function $M() {
  return Cn(kr.FILE_UPLOAD);
}
function HM() {
  return Cn(kr.GIZMO_TAG);
}
function zM() {
  return Cn(kr.REASON);
}
function WM() {
  return Cn(kr.DEEP_RESEARCH);
}
function KM() {
  return Cn(kr.IMAGE_GEN);
}
function YM() {
  return qt(({ modelLimits: t }) => t).filter(an);
}
function JM(e) {
  return qt(({ limitsProgress: r }) => r).filter((r) =>
    e({ ...r, bySystemHint: (n) => r.feature_name === PO(n) }),
  )[0];
}
function ZM() {
  return qt(({ blockedFeatures: t }) => t).filter(an);
}
const LO = pt(() => null),
  DO = pt(() => null),
  MO = pt(() => null);
var Mm = ((e) => (
  (e.UnexpectedSSOLogin = "unexpected_sso_login"),
  (e.SSOMismatch = "sso_mismatch"),
  (e.RequireSSOLogin = "require_sso_login"),
  e
))(Mm || {});
const jO = Object.freeze(new Set(Object.values(Mm)));
function UO(e) {
  return e ? jO.has(e) : !1;
}
const BO = pt(() => null);
var cn = {};
function qO(e) {
  const t = e.toUpperCase().replace(/-/g, "_");
  return `http://${cn[`${t}_SERVICE_HOST`]}:${cn[`${t}_SERVICE_PORT`]}`;
}
function jm(e) {
  return cn.INTERNAL_API_URL ? cn.INTERNAL_API_URL : qO(e);
}
const FO = jm(
    cn.OAI_RESTRICTED_PREVIEW === "true" ? "sa-server-preview" : "sa-server",
  ),
  GO = jm(
    cn.OAI_RESTRICTED_PREVIEW === "true"
      ? "sa-server-preview"
      : "sa-server-anon",
  ),
  VO = `${FO}/api`,
  $O = `${GO}/api`,
  HO = (e, t, r) => {
    const n = e[t];
    return n
      ? typeof n == "function"
        ? n()
        : Promise.resolve(n)
      : new Promise((i, s) => {
          (typeof queueMicrotask == "function" ? queueMicrotask : setTimeout)(
            s.bind(
              null,
              new Error(
                "Unknown variable dynamic import: " +
                  t +
                  (t.split("/").length !== r
                    ? ". Note that variables only represent file names one level deep."
                    : ""),
              ),
            ),
          );
        });
  },
  zs = "en-US",
  QM = [
    "am",
    "ar",
    "bg-BG",
    "bn-BD",
    "bs-BA",
    "ca-ES",
    "cs-CZ",
    "da-DK",
    "de-DE",
    "el-GR",
    "en-US",
    "es-419",
    "es-ES",
    "et-EE",
    "fi-FI",
    "fr-CA",
    "fr-FR",
    "gu-IN",
    "hi-IN",
    "hr-HR",
    "hu-HU",
    "hy-AM",
    "id-ID",
    "is-IS",
    "it-IT",
    "ja-JP",
    "ka-GE",
    "kk",
    "kn-IN",
    "ko-KR",
    "lt",
    "lv-LV",
    "mk-MK",
    "ml",
    "mn",
    "mr-IN",
    "ms-MY",
    "my-MM",
    "nb-NO",
    "nl-NL",
    "pa",
    "pl-PL",
    "pt-BR",
    "pt-PT",
    "ro-RO",
    "ru-RU",
    "sk-SK",
    "sl-SI",
    "so-SO",
    "sq-AL",
    "sr-RS",
    "sv-SE",
    "sw-TZ",
    "ta-IN",
    "te-IN",
    "th-TH",
    "tl",
    "tr-TR",
    "uk-UA",
    "ur",
    "vi-VN",
    "zh-CN",
    "zh-HK",
    "zh-TW",
  ],
  XM = {
    am: "አማርኛ",
    ar: "العربية",
    "bg-BG": "български",
    "bn-BD": "বাংলা",
    "bs-BA": "bosanski",
    "ca-ES": "català",
    "cs-CZ": "čeština",
    "da-DK": "dansk",
    "de-DE": "Deutsch",
    "el-GR": "Ελληνικά",
    "en-US": "English (US)",
    "es-419": "español (Latinoamérica)",
    "es-ES": "español (España)",
    "et-EE": "eesti",
    "fi-FI": "suomi",
    "fr-CA": "français (Canada)",
    "fr-FR": "français (France)",
    "gu-IN": "ગુજરાતી",
    "hi-IN": "हिन्दी",
    "hr-HR": "hrvatski",
    "hu-HU": "magyar",
    "hy-AM": "հայերեն",
    "id-ID": "Indonesia",
    "is-IS": "íslenska",
    "it-IT": "italiano",
    "ja-JP": "日本語",
    "ka-GE": "ქართული",
    kk: "қазақ тілі",
    "kn-IN": "ಕನ್ನಡ",
    "ko-KR": "한국어",
    lt: "lietuvių",
    "lv-LV": "latviešu",
    "mk-MK": "македонски",
    ml: "മലയാളം",
    mn: "монгол",
    "mr-IN": "मराठी",
    "ms-MY": "Bahasa Melayu",
    "my-MM": "မြန်မာ",
    "nb-NO": "norsk bokmål",
    "nl-NL": "Nederlands",
    pa: "ਪੰਜਾਬੀ",
    "pl-PL": "polski",
    "pt-BR": "português (Brasil)",
    "pt-PT": "português (Portugal)",
    "ro-RO": "română",
    "ru-RU": "русский",
    "sk-SK": "slovenčina",
    "sl-SI": "slovenščina",
    "so-SO": "Soomaali",
    "sq-AL": "shqip",
    "sr-RS": "српски",
    "sv-SE": "svenska",
    "sw-TZ": "Kiswahili",
    "ta-IN": "தமிழ்",
    "te-IN": "తెలుగు",
    "th-TH": "ไทย",
    tl: "Tagalog",
    "tr-TR": "Türkçe",
    "uk-UA": "українська",
    ur: "اردو",
    "vi-VN": "Tiếng Việt",
    "zh-CN": "简体中文",
    "zh-HK": "繁體中文（香港）",
    "zh-TW": "繁體中文（台灣）",
  },
  xi = {
    am: "am",
    ar: "ar",
    bg: "bg-BG",
    "bg-bg": "bg-BG",
    bn: "bn-BD",
    "bn-bd": "bn-BD",
    bs: "bs-BA",
    "bs-ba": "bs-BA",
    ca: "ca-ES",
    "ca-es": "ca-ES",
    cs: "cs-CZ",
    "cs-cz": "cs-CZ",
    da: "da-DK",
    "da-dk": "da-DK",
    de: "de-DE",
    "de-de": "de-DE",
    el: "el-GR",
    "el-gr": "el-GR",
    en: "en-US",
    "en-us": "en-US",
    es: "es-ES",
    "es-es": "es-ES",
    "es-419": "es-419",
    "es-ar": "es-419",
    "es-bo": "es-419",
    "es-br": "es-419",
    "es-bz": "es-419",
    "es-cl": "es-419",
    "es-co": "es-419",
    "es-cr": "es-419",
    "es-cu": "es-419",
    "es-do": "es-419",
    "es-ec": "es-419",
    "es-gt": "es-419",
    "es-hn": "es-419",
    "es-jp": "es-419",
    "es-mx": "es-419",
    "es-ni": "es-419",
    "es-pa": "es-419",
    "es-pe": "es-419",
    "es-pr": "es-419",
    "es-py": "es-419",
    "es-sv": "es-419",
    "es-us": "es-419",
    "es-uy": "es-419",
    "es-ve": "es-419",
    et: "et-EE",
    "et-ee": "et-EE",
    fi: "fi-FI",
    "fi-fi": "fi-FI",
    fr: "fr-FR",
    "fr-ca": "fr-CA",
    "fr-fr": "fr-FR",
    gu: "gu-IN",
    "gu-in": "gu-IN",
    hi: "hi-IN",
    "hi-in": "hi-IN",
    hr: "hr-HR",
    "hr-hr": "hr-HR",
    hu: "hu-HU",
    "hu-hu": "hu-HU",
    hy: "hy-AM",
    "hy-am": "hy-AM",
    id: "id-ID",
    "id-id": "id-ID",
    is: "is-IS",
    "is-is": "is-IS",
    it: "it-IT",
    "it-it": "it-IT",
    ja: "ja-JP",
    "ja-jp": "ja-JP",
    ka: "ka-GE",
    "ka-ge": "ka-GE",
    kk: "kk",
    kn: "kn-IN",
    "kn-in": "kn-IN",
    ko: "ko-KR",
    "ko-kr": "ko-KR",
    lt: "lt",
    lv: "lv-LV",
    "lv-lv": "lv-LV",
    mk: "mk-MK",
    "mk-mk": "mk-MK",
    ml: "ml",
    mn: "mn",
    mr: "mr-IN",
    "mr-in": "mr-IN",
    ms: "ms-MY",
    "ms-my": "ms-MY",
    my: "my-MM",
    "my-mm": "my-MM",
    nb: "nb-NO",
    "nb-no": "nb-NO",
    nl: "nl-NL",
    "nl-nl": "nl-NL",
    pa: "pa",
    pl: "pl-PL",
    "pl-pl": "pl-PL",
    pt: "pt-BR",
    "pt-br": "pt-BR",
    "pt-pt": "pt-PT",
    "pt-ao": "pt-PT",
    "pt-ch": "pt-PT",
    "pt-cv": "pt-PT",
    "pt-fr": "pt-PT",
    "pt-gq": "pt-PT",
    "pt-gw": "pt-PT",
    "pt-lu": "pt-PT",
    "pt-mo": "pt-PT",
    "pt-mz": "pt-PT",
    "pt-st": "pt-PT",
    "pt-tl": "pt-PT",
    ro: "ro-RO",
    "ro-ro": "ro-RO",
    ru: "ru-RU",
    "ru-ru": "ru-RU",
    sk: "sk-SK",
    "sk-sk": "sk-SK",
    sl: "sl-SI",
    "sl-si": "sl-SI",
    so: "so-SO",
    "so-so": "so-SO",
    sq: "sq-AL",
    "sq-al": "sq-AL",
    sr: "sr-RS",
    "sr-rs": "sr-RS",
    sv: "sv-SE",
    "sv-se": "sv-SE",
    sw: "sw-TZ",
    "sw-tz": "sw-TZ",
    ta: "ta-IN",
    "ta-in": "ta-IN",
    te: "te-IN",
    "te-in": "te-IN",
    th: "th-TH",
    "th-th": "th-TH",
    tl: "tl",
    tr: "tr-TR",
    "tr-tr": "tr-TR",
    uk: "uk-UA",
    "uk-ua": "uk-UA",
    ur: "ur",
    vi: "vi-VN",
    "vi-vn": "vi-VN",
    zh: "zh-CN",
    "zh-cn": "zh-CN",
    "zh-hans": "zh-CN",
    "zh-hans-cn": "zh-CN",
    "zh-tw": "zh-TW",
    "zh-hant": "zh-TW",
    "zh-hant-tw": "zh-TW",
    "zh-hk": "zh-HK",
    "zh-hant-hk": "zh-HK",
  },
  Um = new Set(["ar"]);
function zO(e) {
  const t = e.replace("_", "-").toLowerCase();
  if (t in xi) return xi[t];
  const r = t.split("-");
  for (let n = r.length - 1; n >= 1; n--) {
    const i = r.slice(0, n).join("-");
    if (i in xi) return xi[i];
  }
  return null;
}
const Wn = {};
async function WO(e) {
  return e === zs
    ? Wn
    : (
        await HO(
          Object.assign({
            "./locales/am.json": () =>
              k(() => import("./nzfeng422g4e3519.js"), []),
            "./locales/ar.json": () =>
              k(() => import("./ijv0p4efsbr409rs.js"), []),
            "./locales/bg-BG.json": () =>
              k(() => import("./kxt3tc7r51yz8lzx.js"), []),
            "./locales/bn-BD.json": () =>
              k(() => import("./lo7vg7eiqd70utqh.js"), []),
            "./locales/bs-BA.json": () =>
              k(() => import("./b0r315gcryhsdivx.js"), []),
            "./locales/ca-ES.json": () =>
              k(() => import("./cwekzpsgdp4npujz.js"), []),
            "./locales/cs-CZ.json": () =>
              k(() => import("./mvh8clz0mc500v0a.js"), []),
            "./locales/da-DK.json": () =>
              k(() => import("./fcomzr8i4gblo6sl.js"), []),
            "./locales/de-DE.json": () =>
              k(() => import("./prnmlk28zeaul5jx.js"), []),
            "./locales/el-GR.json": () =>
              k(() => import("./neteg2uvksj7zxjz.js"), []),
            "./locales/es-419.json": () =>
              k(() => import("./j01bno157v6vnd3g.js"), []),
            "./locales/es-ES.json": () =>
              k(() => import("./jtupxncml6kr46pq.js"), []),
            "./locales/et-EE.json": () =>
              k(() => import("./bnw5227hxcb32j6v.js"), []),
            "./locales/fi-FI.json": () =>
              k(() => import("./bqkt3mh0zkgxu1dw.js"), []),
            "./locales/fr-CA.json": () =>
              k(() => import("./c3x3pqcycd0ace2k.js"), []),
            "./locales/fr-FR.json": () =>
              k(() => import("./injgnxofq4a8itzi.js"), []),
            "./locales/gu-IN.json": () =>
              k(() => import("./l7qobv9aieooxy5w.js"), []),
            "./locales/he-IL.json": () =>
              k(() => import("./eumq7si42zafigop.js"), []),
            "./locales/hi-IN.json": () =>
              k(() => import("./jjl7eapz5882tkf2.js"), []),
            "./locales/hr-HR.json": () =>
              k(() => import("./dt7cpws1qylvicui.js"), []),
            "./locales/hu-HU.json": () =>
              k(() => import("./p9fvruouq8b8qyoc.js"), []),
            "./locales/hy-AM.json": () =>
              k(() => import("./f23t8jqhu270b8gf.js"), []),
            "./locales/id-ID.json": () =>
              k(() => import("./mdxfget4jy0vvacv.js"), []),
            "./locales/is-IS.json": () =>
              k(() => import("./iodtfy1hx2njubvn.js"), []),
            "./locales/it-IT.json": () =>
              k(() => import("./o0x46nt7lc4y4fnv.js"), []),
            "./locales/ja-JP.json": () =>
              k(() => import("./bxi3oo4ngucvk0xh.js"), []),
            "./locales/ka-GE.json": () =>
              k(() => import("./mutarceuos0gztc5.js"), []),
            "./locales/kk.json": () =>
              k(() => import("./oopbvalmkhabmk8q.js"), []),
            "./locales/kn-IN.json": () =>
              k(() => import("./mg5t9ngopz0vnr7l.js"), []),
            "./locales/ko-KR.json": () =>
              k(() => import("./jk8l6lwlsovxwze6.js"), []),
            "./locales/lt.json": () =>
              k(() => import("./nalapwdis9cw0x78.js"), []),
            "./locales/lv-LV.json": () =>
              k(() => import("./hjyaevqqxtkb23ym.js"), []),
            "./locales/mk-MK.json": () =>
              k(() => import("./irtul94azdiu7gwq.js"), []),
            "./locales/ml.json": () =>
              k(() => import("./itf8eebst6ek3110.js"), []),
            "./locales/mn.json": () =>
              k(() => import("./gu5u9xj11am12zxx.js"), []),
            "./locales/mr-IN.json": () =>
              k(() => import("./dhgvau04gppji4mf.js"), []),
            "./locales/ms-MY.json": () =>
              k(() => import("./g48l6juutfqpweb7.js"), []),
            "./locales/my-MM.json": () =>
              k(() => import("./h38zikluo7b8g2q5.js"), []),
            "./locales/nb-NO.json": () =>
              k(() => import("./dw18ot52v8wyj8fq.js"), []),
            "./locales/nl-NL.json": () =>
              k(() => import("./kbpw934ns786q2n4.js"), []),
            "./locales/pa.json": () =>
              k(() => import("./k5236ahwgh3455gx.js"), []),
            "./locales/pl-PL.json": () =>
              k(() => import("./iydex01ar975357z.js"), []),
            "./locales/pt-BR.json": () =>
              k(() => import("./kxm0vdav8dwb3dzz.js"), []),
            "./locales/pt-PT.json": () =>
              k(() => import("./k5fik66myrjedmyd.js"), []),
            "./locales/ro-RO.json": () =>
              k(() => import("./grvei9f0ytyoodbq.js"), []),
            "./locales/ru-RU.json": () =>
              k(() => import("./n5im4u5kh9pc3rqw.js"), []),
            "./locales/sk-SK.json": () =>
              k(() => import("./gdyjtjn5am57wmft.js"), []),
            "./locales/sl-SI.json": () =>
              k(() => import("./lp41mskq0m3tzh7s.js"), []),
            "./locales/so-SO.json": () =>
              k(() => import("./j2padyvutliayyxx.js"), []),
            "./locales/sq-AL.json": () =>
              k(() => import("./mujkccteftylsph3.js"), []),
            "./locales/sr-RS.json": () =>
              k(() => import("./gvdcpvwjpt1s6294.js"), []),
            "./locales/sv-SE.json": () =>
              k(() => import("./zvbby843b1zy9s3v.js"), []),
            "./locales/sw-TZ.json": () =>
              k(() => import("./eue8b9yyuh2ngv1d.js"), []),
            "./locales/ta-IN.json": () =>
              k(() => import("./b4ms2y9tw13z55h9.js"), []),
            "./locales/te-IN.json": () =>
              k(() => import("./pd94zhohyr8wcwz2.js"), []),
            "./locales/th-TH.json": () =>
              k(() => import("./eydfpjuojpnilp35.js"), []),
            "./locales/tl.json": () =>
              k(() => import("./h1vdott7soy2t43s.js"), []),
            "./locales/tr-TR.json": () =>
              k(() => import("./nww3scfa53iq31p0.js"), []),
            "./locales/uk-UA.json": () =>
              k(() => import("./jje428ihuivpaksn.js"), []),
            "./locales/ur.json": () =>
              k(() => import("./ghxu5nelblnos70l.js"), []),
            "./locales/vi-VN.json": () =>
              k(() => import("./g9ij70xs3p1lg2ky.js"), []),
            "./locales/zh-CN.json": () =>
              k(() => import("./gddee7u2zicxs7cg.js"), []),
            "./locales/zh-HK.json": () =>
              k(() => import("./n79vtk2x0qopjkq2.js"), []),
            "./locales/zh-TW.json": () =>
              k(() => import("./em3xg8y7pygi56sl.js"), []),
          }),
          `./locales/${e}.json`,
          3,
        )
      ).default;
}
const yg = 100,
  ti = pt()(
    Hs(() => $t.getItem(Vt.ConversationDrafts) ?? { drafts: [], userId: null }),
  ),
  pd = (e) => {
    ti.setState(e), $t.setItem(Vt.ConversationDrafts, e);
  },
  gd = (e) => e ?? "null_thread",
  e4 = (e, t, r) => {
    const n = gd(e);
    let s = ti.getState().userId === r ? ti.getState().drafts : [];
    const o = s.findIndex((c) => c.id === n),
      a = { id: n, content: t, timestamp: Date.now() };
    o !== -1 ? (s[o] = a) : s.push(a),
      s.length > yg &&
        (s = s.sort((c, u) => u.timestamp - c.timestamp).slice(0, yg)),
      pd({ drafts: s, userId: r });
  },
  t4 = (e) => {
    const t = gd(e);
    return ti.getState().drafts.find((r) => r.id === t);
  },
  r4 = (e) => {
    const t = gd(e),
      r = ti.getState().drafts.filter((n) => n.id !== t);
    pd({ drafts: r, userId: null });
  },
  KO = () => {
    pd({ drafts: [], userId: null });
  };
function YO(e, t, r) {
  if (r) return t ?? void 0;
  if (!e) return;
  const n = e.trim();
  if (!n) return;
  const i = n.split(/\s+/);
  if (i.length === 0) return;
  const s = i[0];
  return s.indexOf("@") !== -1 || /^\d+$/.test(s)
    ? void 0
    : s.replace(/[^a-zA-ZÀ-ž]+/g, "");
}
function n4(e, t, r) {
  const n = YO(t?.name, t?.first_name, r);
  let i = "";
  e &&
    ("object" in e && e.object === "user_system_message_detail"
      ? (i = e.name_user_message)
      : (i = e.nameUserMessage ?? ""));
  const s = i.trim();
  return (e?.enabled ?? !0) && s ? s : n;
}
function JO() {
  $.deleteCookie(q.GreetingName);
}
const ZO = "session",
  Bm = "refresh";
let nl;
typeof window < "u" &&
  window.BroadcastChannel !== void 0 &&
  ((nl = new window.BroadcastChannel(ZO)),
  (nl.onmessage = (e) => {
    e.data === Bm &&
      (document.hidden
        ? window.addEventListener("visibilitychange", () => {
            document.hidden || (window.location.href = "/");
          })
        : setTimeout(() => {
            window.location.href = "/";
          }, 300));
  }));
function QO() {
  nl?.postMessage(Bm);
}
function XO() {
  QO(), Kv(), KO(), JO(), $.deleteCookie(q.LastUsedModel);
}
function _d(e) {
  XO(), (window.location.href = e ?? "/?refresh_account=true");
}
const ex = "dgkjq2bp",
  tx = ex;
function qm() {
  return k(
    () => import("./ka1eghnpltxclrx7.js").then((e) => e.i),
    __vite__mapDeps([2, 1]),
  );
}
function rx(e, t) {
  if (e.id) {
    const r = {
      app_id: tx,
      user_id: e.id,
      name: e.name,
      email: e.email,
      user_hash: e.intercom_hash,
      hide_default_launcher: !0,
      is_chatgpt_user: !0,
      chatgpt_plan_type: t?.planType,
    };
    qm().then((n) => n?.boot(r));
  }
}
function Fm(e, t) {
  qm().then((r) => r?.trackEvent(e, t));
}
class vd extends Error {
  name = "ClientRequestMismatchedAuthError";
}
function nx(e, t = "fetch") {
  e.url.includes("/aip");
  const r = e.detail,
    n = r?.conversation_detail_metadata;
  if (
    (n && kO.updateDetails(n),
    e.url.includes("/accounts/check/") &&
      e.code === "request_account_access" &&
      MO.setState({
        accountName: r?.account_name,
        ownerEmail: r?.owner_email,
        userEmail: r?.user_email,
        accountId: r?.account_id,
        hasActiveRequest: r?.has_active_request,
        workspacePlanType: r?.workspace_plan_type,
      }),
    e.code === "all_accounts_blocked" &&
      DO.setState({ userEmail: r?.user_email }),
    UO(e.code) &&
      BO.setState({ accountName: r?.account_name, errorCode: e.code }),
    e.code === "trigger_account_transfer")
  ) {
    LO.setState({
      destinationWorkspaceId: r?.workspace_id,
      destinationWorkspaceName: r?.workspace_name,
      destinationWorkspaceProfilePictureUrl: r?.workspace_profile_picture_url,
      destinationWorkspacePlanType: r?.workspace_plan_type,
    });
    return;
  }
  if (e.code === "deactivated_workspace") {
    window.location.href.includes("/workspace/deactivated") ||
      (window.location.href = "/workspace/deactivated");
    return;
  }
  if (
    ((e.code === "expired_session_key" ||
      e.code === "token_expired" ||
      e.code === "token_invalidated" ||
      e.jsonError?.error?.code === "token_invalidated") &&
      (x.addAction("Token expired", { url: e.url, error: r }),
      typeof window < "u" &&
        window._oaiHandleSessionExpired?.(t, JSON.stringify(r))),
    e.code === "invalid_account_id_header" &&
      typeof $.getCookie(q.Workspace) == "string")
  ) {
    $.deleteCookie(q.Workspace), _d();
    return;
  }
}
function ix(e) {
  x.addAction("RequestError", {
    url: e.url,
    message: e.message,
    status: e.status,
    json: e.json,
    deviceId: yn(),
  });
}
function sx(e, t) {
  return e.replace(/\{([^}]+)\}/g, (r, n) => t[n].toString());
}
function ox(e) {
  if (!e) return "";
  const t = new URLSearchParams();
  for (const [n, i] of Object.entries(e))
    if (Array.isArray(i)) for (const s of i) t.append(n, s.toString());
    else i != null && t.append(n, i.toString());
  const r = t.toString();
  return r.length === 0 ? "" : `?${r}`;
}
function ax() {
  return He(nt()).locale ?? zs;
}
function md() {
  return { [mE]: ax(), [qv]: yn(), [Bv]: Zl };
}
function Gm(e = {}) {
  const t = e.accessToken ?? cx(),
    r = md();
  if (t == null) {
    if (e.isAuthOptional === !0) return r;
    throw new vd("No access token when trying to use AuthHeader");
  }
  r.Authorization = `Bearer ${t}`;
  const n = $.getCookie(q.Workspace);
  return (
    typeof n == "string" &&
      n !== pr &&
      (r["ChatGPT-Account-ID"] = encodeURIComponent(n)),
    r
  );
}
function cx() {
  return zE(nt());
}
const Vm = globalThis.Request;
function $m({
  method: e,
  body: t,
  authOption: r,
  accessToken: n,
  additionalHeaders: i,
}) {
  return {
    method: e?.toUpperCase(),
    body: t,
    credentials: "include",
    headers: {
      ...(r === ee.Anonymous
        ? md()
        : Gm({ isAuthOptional: r === ee.SendIfAvailable, accessToken: n })),
      ...(t != null && !(t instanceof FormData)
        ? { "Content-Type": "application/json" }
        : null),
      ...i,
    },
  };
}
function ux(e) {
  return (t, r) => {
    const n = (i, s) => {
      if (i >= e.length) return r(s);
      const o = e[i];
      return o(s, (a) => n(i + 1, a));
    };
    return n(0, t);
  };
}
function Hm(e, t) {
  const r = ux(e);
  return (n) => r(n, t);
}
async function zm(e, t) {
  let r = await t(e.clone());
  if (r.status === 401) {
    const i = await r.clone().json();
    if (new Ae(e.url, r.status, i).code === "token_expired") {
      const o = yn();
      await ZE(Pr(nt()), {
        reason: "token_expired",
        method: e.method ?? "GET",
        path: new URL(e.url, location.origin).pathname,
      });
      const a = Gm(),
        c = e.clone();
      for (const [u, l] of Object.entries(a)) c.headers.set(u, l);
      (r = await t(c)),
        r.status === 200
          ? x.addAction("Request succeeded after refresh.", {
              url: e.url,
              deviceId: o,
            })
          : x.addAction("Request failed after refresh.", {
              url: e.url,
              deviceId: o,
            });
    }
  }
  return r;
}
async function Wm(e, t) {
  let r;
  try {
    r = await t(e);
  } catch (n) {
    throw n instanceof Error
      ? Ae.createWithErrorMessage(e.url, "server", n.message)
      : n;
  }
  if (r.status >= 400) {
    const n = await r.text();
    let i;
    try {
      i = JSON.parse(n);
    } catch {
      i = { detail: { code: "not_json_response", text: n?.substring(0, 1e3) } };
    }
    const s = new Ae(e.url, r.status, i);
    throw (nx(s), ix(s), s);
  }
  return r;
}
class Km {
  #e;
  constructor(t) {
    const { baseUrl: r } = t;
    this.#e = typeof r == "string" ? () => r : r;
  }
  baseUrl(t) {
    return this.#e(t);
  }
  #t = Hm([Wm, zm], fetch);
  async fetch(t, r = {}) {
    try {
      const n = await this.#t(t);
      return r.skipJsonTransform ? n : n.status === 204 ? {} : n.json();
    } catch (n) {
      throw (
        (r.intercomEventOnError && Fm(r.intercomEventOnError, { url: t.url }),
        n)
      );
    }
  }
  makeRequest(t, r, n) {
    const i =
        n?.parameters && "query" in n.parameters ? n.parameters.query : void 0,
      s =
        n?.parameters && "path" in n.parameters && n.parameters.path
          ? n.parameters.path
          : {},
      o = sx(r, s),
      a = ox(i),
      c = $m({
        ...n,
        method: t,
        body: n && "requestBody" in n ? JSON.stringify(n.requestBody) : void 0,
      }),
      u = `${this.baseUrl(c)}${o}${a}`;
    return new Vm(u, c);
  }
  safeGet(t, ...r) {
    return this.fetch(this.makeRequest("get", t, r[0]), r[0]);
  }
  safePost(t, ...r) {
    return this.fetch(this.makeRequest("post", t, r[0]), r[0]);
  }
  safeDelete(t, ...r) {
    return this.fetch(this.makeRequest("delete", t, r[0]), r[0]);
  }
  safePatch(t, ...r) {
    return this.fetch(this.makeRequest("patch", t, r[0]), r[0]);
  }
}
function lx(e, t) {
  const r = { [VO]: $O, [ae]: Rs };
  if (t.headers.Authorization) return e;
  for (const [n, i] of Object.entries(r))
    if (e.startsWith(n)) return e.replace(n, i);
  return e;
}
class dx {
  #e = Hm([Wm, zm], fetch);
  async fetch(t, r = {}) {
    r.params && (t += "?" + new URLSearchParams(r.params).toString());
    try {
      const n = $m(r),
        i = await this.#e(new Vm(lx(t, n), n));
      return r.skipJsonTransform ? i : i.status === 204 ? {} : i.json();
    } catch (n) {
      throw (
        (r.intercomEventOnError && Fm(r.intercomEventOnError, { url: t }), n)
      );
    }
  }
  get(t, r = {}) {
    return this.fetch(t, r);
  }
  delete(t, r = {}) {
    return this.fetch(t, { ...r, method: "delete" });
  }
  post(t, r, n = {}) {
    return this.fetch(t, {
      ...n,
      method: "post",
      body: r instanceof FormData ? r : JSON.stringify(r),
    });
  }
  relative(t, r) {
    if (
      (t.startsWith("/") ||
        ((t = `/${t}`),
        console.warn(
          "Using relative path without leading slash, this will be deprecated in the future",
        )),
      t.startsWith("http"))
    )
      throw new Error("Relative path cannot start with http");
    const n = zv(Pr(nt()));
    let i = ae,
      s = {};
    return (
      n ||
        ((i = Rs), (s = { authOption: ee.Anonymous, additionalHeaders: md() })),
      r && (s = { ...s, ...r }),
      { url: `${i}${t}`, options: s }
    );
  }
  getAnonAware(t, r) {
    const { url: n, options: i } = this.relative(t, r);
    return this.get(n, i);
  }
  postAnonAware(t, r, n) {
    const { url: i, options: s } = this.relative(t, n);
    return this.post(i, r, s);
  }
  async *streamedJsonPost(t, r, n = {}) {
    const s = (
      await this.fetch(t, {
        ...n,
        method: "post",
        body: JSON.stringify(r),
        skipJsonTransform: !0,
      })
    ).body;
    if (!s) return;
    const o = s.getReader(),
      a = new TextDecoder();
    let c = !1,
      u = "";
    for (; !c; ) {
      const l = await o.read();
      if (((c = l.done), c && l.value == null)) break;
      const d = u + a.decode(l.value, { stream: !0 });
      u = "";
      const f = d
        .split(
          `
`,
        )
        .filter((h) => !!h.trim());
      for (let h = 0; h < f.length; h++)
        try {
          yield JSON.parse(f[h]);
        } catch {
          u = f[h];
          break;
        }
    }
    u.length > 0 && (yield JSON.parse(u));
  }
}
const Q = new Km({
  baseUrl(e) {
    return !!e.headers.Authorization ? ae : Rs;
  },
});
new Km({ baseUrl: Vi });
const oe = new dx(),
  { useDebugValue: fx } = ne,
  { useSyncExternalStoreWithSelector: hx } = Fv,
  px = (e) => e;
function gx(e, t = px, r) {
  const n = hx(
    e.subscribe,
    e.getState,
    e.getServerState || e.getInitialState,
    t,
    r,
  );
  return fx(n), n;
}
let _x = 0;
const Ym = v.createContext(null);
function vx({ children: e }) {
  const [t] = v.useState(() => ({}));
  return v.createElement(Ym.Provider, { value: t }, e);
}
function Ws(e) {
  if (e === void 0) return Ws;
  const t = typeof e == "function" ? e : () => e;
  let r;
  const n = v.createContext(null);
  return class {
    static useState(s = mx, o) {
      return gx(this.useStore(), s, o);
    }
    static useStore() {
      return this.useStoreWithInit();
    }
    static useStoreWithInit(...s) {
      const o = v.useContext(n),
        a = v.useContext(Ym);
      if (o) return o;
      const c = this.name ?? "Store";
      if (!a)
        throw new Error(
          `No StoreScope found. Must use ${c} within a <StoreScopeProvider> or <${c}.Provider>.`,
        );
      if ((r || (r = `${c}:${_x++}`), r in a)) return a[r];
      if (typeof t == "function" && t.length > 0 && s.length === 0)
        throw new Error(
          `Not initialized. First call ${c}.useStoreWithInit(value) or <${c}.Provider store={() => new ${c}(value)}>`,
        );
      return (a[r] = new this(...s));
    }
    static Provider({ store: s, children: o }) {
      const [a] = v.useState(s);
      return v.createElement(n.Provider, { value: a }, o);
    }
    constructor(s) {
      const o = t(s);
      Object.assign(this, bn(typeof o == "function" ? o : () => o));
    }
  };
}
function mx(e) {
  return e;
}
function Sg(e) {
  return e != null && e in LS;
}
const bx = 60 * 60 * 24 * 30 * 12,
  Jm = (e) => {
    $.setBooleanCookie(q.AllowNonessential, e === "all_cookies", {
      maxAge: bx,
      domain: ME,
    }),
      x.addAction("update-cookie-consent.cookie.success");
  };
async function Zm(e) {
  if ((Jm(e), He(nt()).authStatus === rn.LoggedIn))
    try {
      await Q.safePost("/user_consent", {
        authOption: ee.Required,
        requestBody: { cookie_consent_status: e },
      }),
        x.addAction("update-cookie-consent.backend.success");
    } catch (r) {
      x.addError(r);
    }
}
const bd = Vl({
    queryKey: ["cookie-consent"],
    queryFn: async () => {
      const { isUserInPioneerHR: e, userCountry: t } = He(Pr(nt()));
      if (!e) {
        const i = $.getBooleanCookie(q.AllowNonessential);
        return i != null
          ? {
              cookie_consent_status: i ? "all_cookies" : "essential_only",
              is_consent_required: !0,
            }
          : (x.addAction(
              "get-cookie-consent.use-anonymous-default.consent-not-required",
              { country: t },
            ),
            { cookie_consent_status: null, is_consent_required: !1 });
      }
      if (t != null && !Sg(t))
        return (
          x.addAction(
            "get-cookie-consent.use-anonymous-default.consent-not-required",
            { country: t },
          ),
          { cookie_consent_status: null, is_consent_required: !1 }
        );
      if (Sg(t) && !e)
        return (
          x.addAction(
            "get-cookie-consent.use-anonymous-default.consent-required-essential-only",
            { country: t },
          ),
          { cookie_consent_status: "essential_only", is_consent_required: !0 }
        );
      let r;
      try {
        (r = await Q.safeGet("/user_consent", { authOption: ee.Required })),
          x.addAction("get-cookie-consent.use-authenticated", { country: t });
      } catch (i) {
        i instanceof vd || x.addError(i, { country: t }),
          (r = { cookie_consent_status: null, is_consent_required: !0 });
      }
      const n = $.getBooleanCookie(q.AllowNonessential);
      return (
        r.cookie_consent_status != null &&
        n !== (r.cookie_consent_status === "all_cookies")
          ? (Jm(r.cookie_consent_status),
            x.addAction("get-cookie-consent.update-cookie-consent-cookie", {
              country: t,
            }))
          : n !== void 0 &&
            r.is_consent_required &&
            r.cookie_consent_status == null &&
            (Zm(n ? "all_cookies" : "essential_only"),
            x.addAction("get-cookie-consent.update-cookie-consent-backend", {
              country: t,
            }),
            (r = {
              ...r,
              cookie_consent_status: n ? "all_cookies" : "essential_only",
            })),
        r
      );
    },
  }),
  s4 = (e) => {
    const { country: t } = JA(),
      r = m1();
    return b1({
      ...e,
      mutationFn: (n) => Zm(n),
      onSuccess: (n, i, s) => {
        e?.onSuccess?.(n, i, s),
          r.setQueryData(bd.queryKey, (o) => {
            if (!o) {
              x.addError(
                new Error(
                  "Cookie consent query data is undefined during mutation",
                ),
              );
              return;
            }
            return { ...o, cookie_consent_status: i };
          });
      },
      onError: (n, i, s) => {
        e?.onError?.(n, i, s), x.addError(n, { country: t });
      },
    });
  };
class Wc extends Ws()(() => ({
  cookieConsentBannerClosed: !1,
  cookieConsentBannerIgnored: $.getBooleanCookie(q.CookieBannerIgnored) ?? !1,
  onCloseSideEffect: () => {},
  manuallySetVisibility: !1,
})) {
  closeCookieConsentBanner = (t) => {
    const r = {
      cookieConsentBannerClosed: !0,
      ...(t ? { cookieConsentBannerIgnored: !0 } : {}),
    };
    this.setState(r), t && $.setBooleanCookie(q.CookieBannerIgnored, !0);
  };
  setOnCloseSideEffect = (t) => {
    this.setState((r) => ({ ...r, onCloseSideEffect: t }));
  };
  setManualVisibility = (t) => {
    this.setState((r) => ({ ...r, manuallySetVisibility: t }));
  };
  static useWasClosed = () => this.useState((t) => t.cookieConsentBannerClosed);
  static useWasIgnored = () =>
    this.useState((t) => t.cookieConsentBannerIgnored);
  static useOnCloseSideEffect = () => this.useState((t) => t.onCloseSideEffect);
  static useManuallySetVisibility = () =>
    this.useState((t) => t.manuallySetVisibility);
}
const o4 = () => {
  const e = Wc.useStore(),
    { isUnauthenticated: t, isLoading: r } = xm(),
    { data: n, isLoading: i } = mn(bd),
    s = Wc.useWasClosed(),
    o = Wc.useWasIgnored(),
    a = $.getCookie(q.CookieBannerShownPath),
    c = a === window.location.pathname,
    u = r || i;
  return {
    shouldShowCookieBanner:
      (!u &&
        t &&
        !(s || o) &&
        (!a || c) &&
        n?.is_consent_required &&
        n?.cookie_consent_status == null) ??
      !1,
    isCookieConsentBannerLoading: u,
    closeCookieConsentBanner: e.closeCookieConsentBanner,
    ignoreCookieConsentBanner: () => e.closeCookieConsentBanner(!0),
  };
};
var $i = ((e) => (
  (e.Gclid = "gclid"), (e.Fbclid = "fbclid"), (e.Rdtcid = "rdt_cid"), e
))($i || {});
function a4(e) {
  switch (e) {
    case "gclid":
      return $.getAnalyticsCookie(q.Gclid);
    case "fbclid":
      return $.getAnalyticsCookie(q.Fbclid);
    case "rdt_cid":
      return $.getAnalyticsCookie(q.Rdtcid);
  }
}
function c4(e) {
  switch (e) {
    case "gclid":
      $.deleteCookie(q.Gclid);
      break;
    case "fbclid":
      $.deleteCookie(q.Fbclid);
      break;
    case "rdt_cid":
      $.deleteCookie(q.Rdtcid);
      break;
  }
}
function yx(e) {
  switch (e) {
    case "gclid":
      return q.Gclid;
    case "fbclid":
      return q.Fbclid;
    case "rdt_cid":
      return q.Rdtcid;
  }
}
function Sx({
  searchParams: e,
  clidLifetimeSeconds: t = 24 * 60 * 60,
  eligibleExplorers: r,
}) {
  for (const n of r) {
    if (e.get(n) == null) continue;
    const i = yx(n);
    $.setAnalyticsCookie(i, e.get(n), { path: "/", maxAge: t });
  }
}
let Qm = !1;
const Ex = (e) => {
    const t = He(e);
    if (!t.eligibleAnalytics) return;
    const r = new URLSearchParams(window.location.search);
    Sx({
      searchParams: r,
      eligibleExplorers: [
        ...(t.eligibleAnalytics.isUserEligibleForPioneer ? [$i.Gclid] : []),
        ...(t.eligibleAnalytics.isUserEligibleForMaverick ? [$i.Fbclid] : []),
        ...(t.eligibleAnalytics.isUserEligibleForTrailBlazer
          ? [$i.Rdtcid]
          : []),
      ],
    }),
      (Qm = !0);
  },
  wx = async (e, t) => {
    const r = He(e).userCountry;
    new pv(t, bd).subscribe((i) => {
      if (i.isPending) return;
      const s = i.data;
      if (!s) return;
      (s.is_consent_required ? s.cookie_consent_status === "all_cookies" : !0)
        ? ($.setAllowAnalyticsCookies_CLIENT_ONLY(!0),
          x.addAction("analytics-tracking.non-essential-cookies.allowed", {
            country: r,
          }),
          Qm ||
            (Ex(e),
            x.addAction(
              "analytics-tracking.non-essential-cookies.analytics-tracking-functions-run",
              { country: r },
            )))
        : ($.setAllowAnalyticsCookies_CLIENT_ONLY(!1),
          x.addAction("analytics-tracking.non-essential-cookies.disallowed", {
            country: r,
          }));
    });
  },
  Xm = 58 * 60 * 1e3,
  Cx = Xm,
  il = {};
function Ax(e, t) {
  il[e] = t;
}
function Ox(e) {
  return e != null && "__type" in e && e.__type in il ? il[e.__type](e) : e;
}
const xx = JSON.stringify,
  eb = Ir(Rx);
function Rx() {
  return new y1({
    defaultOptions: {
      queries: {
        gcTime: Cx,
        staleTime: Xm,
        retry: !1,
        retryOnMount: !1,
        refetchOnMount: !1,
        refetchOnWindowFocus: !1,
        refetchOnReconnect: !1,
        networkMode: "always",
        queryKeyHashFn: xx,
        throwOnError: (e, t) => {
          if (!(e instanceof Ae || e instanceof _t))
            try {
              x.addError(e, {
                queryKey: t.queryKey.map(String).join(","),
                queryHash: t.queryHash,
              });
            } catch (r) {
              console.error(r);
            }
          return !1;
        },
      },
      hydrate: { deserializeData: Ox },
    },
  });
}
function U(e) {
  for (
    var t = arguments.length, r = new Array(t > 1 ? t - 1 : 0), n = 1;
    n < t;
    n++
  )
    r[n - 1] = arguments[n];
  throw new Error(
    typeof e == "number"
      ? "[MobX] minified error nr: " +
        e +
        (r.length ? " " + r.map(String).join(",") : "") +
        ". Find the full error at: https://github.com/mobxjs/mobx/blob/main/packages/mobx/src/errors.ts"
      : "[MobX] " + e,
  );
}
var Ix = {};
function Ks() {
  return typeof globalThis < "u"
    ? globalThis
    : typeof window < "u"
      ? window
      : typeof global < "u"
        ? global
        : typeof self < "u"
          ? self
          : Ix;
}
var tb = Object.assign,
  as = Object.getOwnPropertyDescriptor,
  dt = Object.defineProperty,
  ci = Object.prototype,
  sl = [];
Object.freeze(sl);
var yd = {};
Object.freeze(yd);
var Tx = typeof Proxy < "u",
  Px = Object.toString();
function rb() {
  Tx || U("Proxy not available");
}
function nb(e) {
  var t = !1;
  return function () {
    if (!t) return (t = !0), e.apply(this, arguments);
  };
}
var Yr = function () {};
function Le(e) {
  return typeof e == "function";
}
function _r(e) {
  var t = typeof e;
  switch (t) {
    case "string":
    case "symbol":
    case "number":
      return !0;
  }
  return !1;
}
function Ys(e) {
  return e !== null && typeof e == "object";
}
function Ct(e) {
  if (!Ys(e)) return !1;
  var t = Object.getPrototypeOf(e);
  if (t == null) return !0;
  var r = Object.hasOwnProperty.call(t, "constructor") && t.constructor;
  return typeof r == "function" && r.toString() === Px;
}
function ib(e) {
  var t = e?.constructor;
  return t
    ? t.name === "GeneratorFunction" || t.displayName === "GeneratorFunction"
    : !1;
}
function ui(e, t, r) {
  dt(e, t, { enumerable: !1, writable: !0, configurable: !0, value: r });
}
function sb(e, t, r) {
  dt(e, t, { enumerable: !1, writable: !1, configurable: !0, value: r });
}
function Xt(e, t) {
  var r = "isMobX" + e;
  return (
    (t.prototype[r] = !0),
    function (n) {
      return Ys(n) && n[r] === !0;
    }
  );
}
function An(e) {
  return e != null && Object.prototype.toString.call(e) === "[object Map]";
}
function kx(e) {
  var t = Object.getPrototypeOf(e),
    r = Object.getPrototypeOf(t),
    n = Object.getPrototypeOf(r);
  return n === null;
}
function bt(e) {
  return e != null && Object.prototype.toString.call(e) === "[object Set]";
}
var ob = typeof Object.getOwnPropertySymbols < "u";
function Nx(e) {
  var t = Object.keys(e);
  if (!ob) return t;
  var r = Object.getOwnPropertySymbols(e);
  return r.length
    ? [].concat(
        t,
        r.filter(function (n) {
          return ci.propertyIsEnumerable.call(e, n);
        }),
      )
    : t;
}
var un =
  typeof Reflect < "u" && Reflect.ownKeys
    ? Reflect.ownKeys
    : ob
      ? function (e) {
          return Object.getOwnPropertyNames(e).concat(
            Object.getOwnPropertySymbols(e),
          );
        }
      : Object.getOwnPropertyNames;
function ab(e) {
  return e === null ? null : typeof e == "object" ? "" + e : e;
}
function yt(e, t) {
  return ci.hasOwnProperty.call(e, t);
}
var Lx =
  Object.getOwnPropertyDescriptors ||
  function (t) {
    var r = {};
    return (
      un(t).forEach(function (n) {
        r[n] = as(t, n);
      }),
      r
    );
  };
function Ie(e, t) {
  return !!(e & t);
}
function Te(e, t, r) {
  return r ? (e |= t) : (e &= ~t), e;
}
function Eg(e, t) {
  (t == null || t > e.length) && (t = e.length);
  for (var r = 0, n = Array(t); r < t; r++) n[r] = e[r];
  return n;
}
function Dx(e, t) {
  for (var r = 0; r < t.length; r++) {
    var n = t[r];
    (n.enumerable = n.enumerable || !1),
      (n.configurable = !0),
      "value" in n && (n.writable = !0),
      Object.defineProperty(e, jx(n.key), n);
  }
}
function On(e, t, r) {
  return (
    t && Dx(e.prototype, t),
    Object.defineProperty(e, "prototype", { writable: !1 }),
    e
  );
}
function Jr(e, t) {
  var r = (typeof Symbol < "u" && e[Symbol.iterator]) || e["@@iterator"];
  if (r) return (r = r.call(e)).next.bind(r);
  if (Array.isArray(e) || (r = Ux(e)) || t) {
    r && (e = r);
    var n = 0;
    return function () {
      return n >= e.length ? { done: !0 } : { done: !1, value: e[n++] };
    };
  }
  throw new TypeError(`Invalid attempt to iterate non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
}
function Ht() {
  return (
    (Ht = Object.assign
      ? Object.assign.bind()
      : function (e) {
          for (var t = 1; t < arguments.length; t++) {
            var r = arguments[t];
            for (var n in r) ({}).hasOwnProperty.call(r, n) && (e[n] = r[n]);
          }
          return e;
        }),
    Ht.apply(null, arguments)
  );
}
function cb(e, t) {
  (e.prototype = Object.create(t.prototype)),
    (e.prototype.constructor = e),
    ol(e, t);
}
function ol(e, t) {
  return (
    (ol = Object.setPrototypeOf
      ? Object.setPrototypeOf.bind()
      : function (r, n) {
          return (r.__proto__ = n), r;
        }),
    ol(e, t)
  );
}
function Mx(e, t) {
  if (typeof e != "object" || !e) return e;
  var r = e[Symbol.toPrimitive];
  if (r !== void 0) {
    var n = r.call(e, t);
    if (typeof n != "object") return n;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return String(e);
}
function jx(e) {
  var t = Mx(e, "string");
  return typeof t == "symbol" ? t : t + "";
}
function Ux(e, t) {
  if (e) {
    if (typeof e == "string") return Eg(e, t);
    var r = {}.toString.call(e).slice(8, -1);
    return (
      r === "Object" && e.constructor && (r = e.constructor.name),
      r === "Map" || r === "Set"
        ? Array.from(e)
        : r === "Arguments" ||
            /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)
          ? Eg(e, t)
          : void 0
    );
  }
}
var lt = Symbol("mobx-stored-annotations");
function Ye(e) {
  function t(r, n) {
    if (di(n)) return e.decorate_20223_(r, n);
    li(r, n, e);
  }
  return Object.assign(t, e);
}
function li(e, t, r) {
  yt(e, lt) || ui(e, lt, Ht({}, e[lt])), Wx(r) || (e[lt][t] = r);
}
function Bx(e) {
  return yt(e, lt) || ui(e, lt, Ht({}, e[lt])), e[lt];
}
function di(e) {
  return typeof e == "object" && typeof e.kind == "string";
}
var L = Symbol("mobx administration"),
  er = (function () {
    function e(r) {
      r === void 0 && (r = "Atom"),
        (this.name_ = void 0),
        (this.flags_ = 0),
        (this.observers_ = new Set()),
        (this.lastAccessedBy_ = 0),
        (this.lowestObserverState_ = J.NOT_TRACKING_),
        (this.onBOL = void 0),
        (this.onBUOL = void 0),
        (this.name_ = r);
    }
    var t = e.prototype;
    return (
      (t.onBO = function () {
        this.onBOL &&
          this.onBOL.forEach(function (n) {
            return n();
          });
      }),
      (t.onBUO = function () {
        this.onBUOL &&
          this.onBUOL.forEach(function (n) {
            return n();
          });
      }),
      (t.reportObserved = function () {
        return Ob(this);
      }),
      (t.reportChanged = function () {
        we(), xb(this), Ce();
      }),
      (t.toString = function () {
        return this.name_;
      }),
      On(e, [
        {
          key: "isBeingObserved",
          get: function () {
            return Ie(this.flags_, e.isBeingObservedMask_);
          },
          set: function (n) {
            this.flags_ = Te(this.flags_, e.isBeingObservedMask_, n);
          },
        },
        {
          key: "isPendingUnobservation",
          get: function () {
            return Ie(this.flags_, e.isPendingUnobservationMask_);
          },
          set: function (n) {
            this.flags_ = Te(this.flags_, e.isPendingUnobservationMask_, n);
          },
        },
        {
          key: "diffValue",
          get: function () {
            return Ie(this.flags_, e.diffValueMask_) ? 1 : 0;
          },
          set: function (n) {
            this.flags_ = Te(this.flags_, e.diffValueMask_, n === 1);
          },
        },
      ])
    );
  })();
er.isBeingObservedMask_ = 1;
er.isPendingUnobservationMask_ = 2;
er.diffValueMask_ = 4;
var Sd = Xt("Atom", er);
function Js(e, t, r) {
  t === void 0 && (t = Yr), r === void 0 && (r = Yr);
  var n = new er(e);
  return t !== Yr && Db(n, t), r !== Yr && Ad(n, r), n;
}
function qx(e, t) {
  return e === t;
}
function Fx(e, t) {
  return Pd(e, t);
}
function Gx(e, t) {
  return Pd(e, t, 1);
}
function Vx(e, t) {
  return Object.is
    ? Object.is(e, t)
    : e === t
      ? e !== 0 || 1 / e === 1 / t
      : e !== e && t !== t;
}
var vr = { identity: qx, structural: Fx, default: Vx, shallow: Gx };
function mr(e, t, r) {
  return so(e)
    ? e
    : Array.isArray(e)
      ? de.array(e, { name: r })
      : Ct(e)
        ? de.object(e, void 0, { name: r })
        : An(e)
          ? de.map(e, { name: r })
          : bt(e)
            ? de.set(e, { name: r })
            : typeof e == "function" && !dn(e) && !fn(e)
              ? ib(e)
                ? yr(e)
                : ln(r, e)
              : e;
}
function $x(e, t, r) {
  if (e == null || _e(e) || Oe(e) || ve(e) || fe(e)) return e;
  if (Array.isArray(e)) return de.array(e, { name: r, deep: !1 });
  if (Ct(e)) return de.object(e, void 0, { name: r, deep: !1 });
  if (An(e)) return de.map(e, { name: r, deep: !1 });
  if (bt(e)) return de.set(e, { name: r, deep: !1 });
}
function Zs(e) {
  return e;
}
function Hx(e, t) {
  return Pd(e, t) ? t : e;
}
var ub = "override",
  zx = Ye({ annotationType_: ub, make_: Kx, extend_: Yx, decorate_20223_: Jx });
function Wx(e) {
  return e.annotationType_ === ub;
}
function Kx(e, t) {
  return 0;
}
function Yx(e, t, r, n) {
  U("'" + this.annotationType_ + "' can only be used with 'makeObservable'");
}
function Jx(e, t) {
  console.warn(
    "'" +
      this.annotationType_ +
      "' cannot be used with decorators - this is a no-op",
  );
}
function fi(e, t) {
  return {
    annotationType_: e,
    options_: t,
    make_: Zx,
    extend_: Qx,
    decorate_20223_: Xx,
  };
}
function Zx(e, t, r, n) {
  var i;
  if ((i = this.options_) != null && i.bound)
    return this.extend_(e, t, r, !1) === null ? 0 : 1;
  if (n === e.target_) return this.extend_(e, t, r, !1) === null ? 0 : 2;
  if (dn(r.value)) return 1;
  var s = lb(e, this, t, r, !1);
  return dt(n, t, s), 2;
}
function Qx(e, t, r, n) {
  var i = lb(e, this, t, r);
  return e.defineProperty_(t, i, n);
}
function Xx(e, t) {
  var r = t.kind,
    n = t.name,
    i = t.addInitializer,
    s = this,
    o = function (u) {
      var l, d, f, h;
      return zt(
        (l = (d = s.options_) == null ? void 0 : d.name) != null
          ? l
          : n.toString(),
        u,
        (f = (h = s.options_) == null ? void 0 : h.autoAction) != null ? f : !1,
      );
    };
  if (r == "field")
    return function (c) {
      var u,
        l = c;
      return (
        dn(l) || (l = o(l)),
        (u = s.options_) != null &&
          u.bound &&
          ((l = l.bind(this)), (l.isMobxAction = !0)),
        l
      );
    };
  if (r == "method") {
    var a;
    return (
      dn(e) || (e = o(e)),
      (a = this.options_) != null &&
        a.bound &&
        i(function () {
          var c = this,
            u = c[n].bind(c);
          (u.isMobxAction = !0), (c[n] = u);
        }),
      e
    );
  }
  U(
    "Cannot apply '" +
      s.annotationType_ +
      "' to '" +
      String(n) +
      "' (kind: " +
      r +
      "):" +
      (`
'` +
        s.annotationType_ +
        "' can only be used on properties with a function value."),
  );
}
function eR(e, t, r, n) {
  t.annotationType_, n.value;
}
function lb(e, t, r, n, i) {
  var s, o, a, c, u, l, d;
  i === void 0 && (i = R.safeDescriptors), eR(e, t, r, n);
  var f = n.value;
  if ((s = t.options_) != null && s.bound) {
    var h;
    f = f.bind((h = e.proxy_) != null ? h : e.target_);
  }
  return {
    value: zt(
      (o = (a = t.options_) == null ? void 0 : a.name) != null
        ? o
        : r.toString(),
      f,
      (c = (u = t.options_) == null ? void 0 : u.autoAction) != null ? c : !1,
      (l = t.options_) != null && l.bound
        ? (d = e.proxy_) != null
          ? d
          : e.target_
        : void 0,
    ),
    configurable: i ? e.isPlainObject_ : !0,
    enumerable: !1,
    writable: !i,
  };
}
function db(e, t) {
  return {
    annotationType_: e,
    options_: t,
    make_: tR,
    extend_: rR,
    decorate_20223_: nR,
  };
}
function tR(e, t, r, n) {
  var i;
  if (n === e.target_) return this.extend_(e, t, r, !1) === null ? 0 : 2;
  if (
    (i = this.options_) != null &&
    i.bound &&
    (!yt(e.target_, t) || !fn(e.target_[t])) &&
    this.extend_(e, t, r, !1) === null
  )
    return 0;
  if (fn(r.value)) return 1;
  var s = fb(e, this, t, r, !1, !1);
  return dt(n, t, s), 2;
}
function rR(e, t, r, n) {
  var i,
    s = fb(e, this, t, r, (i = this.options_) == null ? void 0 : i.bound);
  return e.defineProperty_(t, s, n);
}
function nR(e, t) {
  var r,
    n = t.name,
    i = t.addInitializer;
  return (
    fn(e) || (e = yr(e)),
    (r = this.options_) != null &&
      r.bound &&
      i(function () {
        var s = this,
          o = s[n].bind(s);
        (o.isMobXFlow = !0), (s[n] = o);
      }),
    e
  );
}
function iR(e, t, r, n) {
  t.annotationType_, n.value;
}
function fb(e, t, r, n, i, s) {
  s === void 0 && (s = R.safeDescriptors), iR(e, t, r, n);
  var o = n.value;
  if ((fn(o) || (o = yr(o)), i)) {
    var a;
    (o = o.bind((a = e.proxy_) != null ? a : e.target_)), (o.isMobXFlow = !0);
  }
  return {
    value: o,
    configurable: s ? e.isPlainObject_ : !0,
    enumerable: !1,
    writable: !s,
  };
}
function Ed(e, t) {
  return {
    annotationType_: e,
    options_: t,
    make_: sR,
    extend_: oR,
    decorate_20223_: aR,
  };
}
function sR(e, t, r) {
  return this.extend_(e, t, r, !1) === null ? 0 : 1;
}
function oR(e, t, r, n) {
  return (
    cR(e, this, t, r),
    e.defineComputedProperty_(
      t,
      Ht({}, this.options_, { get: r.get, set: r.set }),
      n,
    )
  );
}
function aR(e, t) {
  var r = this,
    n = t.name,
    i = t.addInitializer;
  return (
    i(function () {
      var s = Lr(this)[L],
        o = Ht({}, r.options_, { get: e, context: this });
      o.name || (o.name = "ObservableObject." + n.toString()),
        s.values_.set(n, new Qe(o));
    }),
    function () {
      return this[L].getObservablePropValue_(n);
    }
  );
}
function cR(e, t, r, n) {
  t.annotationType_, n.get;
}
function Qs(e, t) {
  return {
    annotationType_: e,
    options_: t,
    make_: uR,
    extend_: lR,
    decorate_20223_: dR,
  };
}
function uR(e, t, r) {
  return this.extend_(e, t, r, !1) === null ? 0 : 1;
}
function lR(e, t, r, n) {
  var i, s;
  return (
    fR(e, this),
    e.defineObservableProperty_(
      t,
      r.value,
      (i = (s = this.options_) == null ? void 0 : s.enhancer) != null ? i : mr,
      n,
    )
  );
}
function dR(e, t) {
  var r = this,
    n = t.kind,
    i = t.name,
    s = new WeakSet();
  function o(a, c) {
    var u,
      l,
      d = Lr(a)[L],
      f = new Ft(
        c,
        (u = (l = r.options_) == null ? void 0 : l.enhancer) != null ? u : mr,
        "ObservableObject." + i.toString(),
        !1,
      );
    d.values_.set(i, f), s.add(a);
  }
  if (n == "accessor")
    return {
      get: function () {
        return (
          s.has(this) || o(this, e.get.call(this)),
          this[L].getObservablePropValue_(i)
        );
      },
      set: function (c) {
        return s.has(this) || o(this, c), this[L].setObservablePropValue_(i, c);
      },
      init: function (c) {
        return s.has(this) || o(this, c), c;
      },
    };
}
function fR(e, t, r, n) {
  t.annotationType_;
}
var hR = "true",
  pR = hb();
function hb(e) {
  return {
    annotationType_: hR,
    options_: e,
    make_: gR,
    extend_: _R,
    decorate_20223_: vR,
  };
}
function gR(e, t, r, n) {
  var i, s;
  if (r.get) return xn.make_(e, t, r, n);
  if (r.set) {
    var o = zt(t.toString(), r.set);
    return n === e.target_
      ? e.defineProperty_(t, {
          configurable: R.safeDescriptors ? e.isPlainObject_ : !0,
          set: o,
        }) === null
        ? 0
        : 2
      : (dt(n, t, { configurable: !0, set: o }), 2);
  }
  if (n !== e.target_ && typeof r.value == "function") {
    var a;
    if (ib(r.value)) {
      var c,
        u = (c = this.options_) != null && c.autoBind ? yr.bound : yr;
      return u.make_(e, t, r, n);
    }
    var l = (a = this.options_) != null && a.autoBind ? ln.bound : ln;
    return l.make_(e, t, r, n);
  }
  var d = ((i = this.options_) == null ? void 0 : i.deep) === !1 ? de.ref : de;
  if (
    typeof r.value == "function" &&
    (s = this.options_) != null &&
    s.autoBind
  ) {
    var f;
    r.value = r.value.bind((f = e.proxy_) != null ? f : e.target_);
  }
  return d.make_(e, t, r, n);
}
function _R(e, t, r, n) {
  var i, s;
  if (r.get) return xn.extend_(e, t, r, n);
  if (r.set)
    return e.defineProperty_(
      t,
      {
        configurable: R.safeDescriptors ? e.isPlainObject_ : !0,
        set: zt(t.toString(), r.set),
      },
      n,
    );
  if (
    typeof r.value == "function" &&
    (i = this.options_) != null &&
    i.autoBind
  ) {
    var o;
    r.value = r.value.bind((o = e.proxy_) != null ? o : e.target_);
  }
  var a = ((s = this.options_) == null ? void 0 : s.deep) === !1 ? de.ref : de;
  return a.extend_(e, t, r, n);
}
function vR(e, t) {
  U("'" + this.annotationType_ + "' cannot be used as a decorator");
}
var mR = "observable",
  bR = "observable.ref",
  yR = "observable.shallow",
  SR = "observable.struct",
  pb = { deep: !0, name: void 0, defaultDecorator: void 0, proxy: !0 };
Object.freeze(pb);
function Ri(e) {
  return e || pb;
}
var al = Qs(mR),
  ER = Qs(bR, { enhancer: Zs }),
  wR = Qs(yR, { enhancer: $x }),
  CR = Qs(SR, { enhancer: Hx }),
  gb = Ye(al);
function Ii(e) {
  return e.deep === !0 ? mr : e.deep === !1 ? Zs : OR(e.defaultDecorator);
}
function AR(e) {
  var t;
  return e ? ((t = e.defaultDecorator) != null ? t : hb(e)) : void 0;
}
function OR(e) {
  var t, r;
  return e && (t = (r = e.options_) == null ? void 0 : r.enhancer) != null
    ? t
    : mr;
}
function _b(e, t, r) {
  if (di(t)) return al.decorate_20223_(e, t);
  if (_r(t)) {
    li(e, t, al);
    return;
  }
  return so(e)
    ? e
    : Ct(e)
      ? de.object(e, t, r)
      : Array.isArray(e)
        ? de.array(e, t)
        : An(e)
          ? de.map(e, t)
          : bt(e)
            ? de.set(e, t)
            : typeof e == "object" && e !== null
              ? e
              : de.box(e, t);
}
tb(_b, gb);
var xR = {
    box: function (t, r) {
      var n = Ri(r);
      return new Ft(t, Ii(n), n.name, !0, n.equals);
    },
    array: function (t, r) {
      var n = Ri(r);
      return (R.useProxies === !1 || n.proxy === !1 ? VI : NI)(
        t,
        Ii(n),
        n.name,
      );
    },
    map: function (t, r) {
      var n = Ri(r);
      return new Rd(t, Ii(n), n.name);
    },
    set: function (t, r) {
      var n = Ri(r);
      return new Id(t, Ii(n), n.name);
    },
    object: function (t, r, n) {
      return tr(function () {
        return Od(
          R.useProxies === !1 || n?.proxy === !1 ? Lr({}, n) : II({}, n),
          t,
          r,
        );
      });
    },
    ref: Ye(ER),
    shallow: Ye(wR),
    deep: gb,
    struct: Ye(CR),
  },
  de = tb(_b, xR),
  vb = "computed",
  RR = "computed.struct",
  cl = Ed(vb),
  IR = Ed(RR, { equals: vr.structural }),
  xn = function (t, r) {
    if (di(r)) return cl.decorate_20223_(t, r);
    if (_r(r)) return li(t, r, cl);
    if (Ct(t)) return Ye(Ed(vb, t));
    var n = Ct(r) ? r : {};
    return (n.get = t), n.name || (n.name = t.name || ""), new Qe(n);
  };
Object.assign(xn, cl);
xn.struct = Ye(IR);
var wg,
  Cg,
  cs = 0,
  TR = 1,
  PR =
    (wg =
      (Cg = as(function () {}, "name")) == null ? void 0 : Cg.configurable) !=
    null
      ? wg
      : !1,
  Ag = { value: "action", configurable: !0, writable: !1, enumerable: !1 };
function zt(e, t, r, n) {
  r === void 0 && (r = !1);
  function i() {
    return mb(e, r, t, n || this, arguments);
  }
  return (
    (i.isMobxAction = !0),
    (i.toString = function () {
      return t.toString();
    }),
    PR && ((Ag.value = e), dt(i, "name", Ag)),
    i
  );
}
function mb(e, t, r, n, i) {
  var s = bb(e, t);
  try {
    return r.apply(n, i);
  } catch (o) {
    throw ((s.error_ = o), o);
  } finally {
    yb(s);
  }
}
function bb(e, t, r, n) {
  var i = !1,
    s = 0,
    o = R.trackingDerivation,
    a = !t || !o;
  we();
  var c = R.allowStateChanges;
  a && (Nr(), (c = Xs(!0)));
  var u = ro(!0),
    l = {
      runAsAction_: a,
      prevDerivation_: o,
      prevAllowStateChanges_: c,
      prevAllowStateReads_: u,
      notifySpy_: i,
      startTime_: s,
      actionId_: TR++,
      parentActionId_: cs,
    };
  return (cs = l.actionId_), l;
}
function yb(e) {
  cs !== e.actionId_ && U(30),
    (cs = e.parentActionId_),
    e.error_ !== void 0 && (R.suppressReactionErrors = !0),
    eo(e.prevAllowStateChanges_),
    Qr(e.prevAllowStateReads_),
    Ce(),
    e.runAsAction_ && St(e.prevDerivation_),
    (R.suppressReactionErrors = !1);
}
function wd(e, t) {
  var r = Xs(e);
  try {
    return t();
  } finally {
    eo(r);
  }
}
function Xs(e) {
  var t = R.allowStateChanges;
  return (R.allowStateChanges = e), t;
}
function eo(e) {
  R.allowStateChanges = e;
}
var Ft = (function (e) {
    function t(n, i, s, o, a) {
      var c;
      return (
        s === void 0 && (s = "ObservableValue"),
        a === void 0 && (a = vr.default),
        (c = e.call(this, s) || this),
        (c.enhancer = void 0),
        (c.name_ = void 0),
        (c.equals = void 0),
        (c.hasUnreportedChange_ = !1),
        (c.interceptors_ = void 0),
        (c.changeListeners_ = void 0),
        (c.value_ = void 0),
        (c.dehancer = void 0),
        (c.enhancer = i),
        (c.name_ = s),
        (c.equals = a),
        (c.value_ = i(n, void 0, s)),
        c
      );
    }
    cb(t, e);
    var r = t.prototype;
    return (
      (r.dehanceValue = function (i) {
        return this.dehancer !== void 0 ? this.dehancer(i) : i;
      }),
      (r.set = function (i) {
        this.value_,
          (i = this.prepareNewValue_(i)),
          i !== R.UNCHANGED && this.setNewValue_(i);
      }),
      (r.prepareNewValue_ = function (i) {
        if (Fe(this)) {
          var s = Ge(this, { object: this, type: ft, newValue: i });
          if (!s) return R.UNCHANGED;
          i = s.newValue;
        }
        return (
          (i = this.enhancer(i, this.value_, this.name_)),
          this.equals(this.value_, i) ? R.UNCHANGED : i
        );
      }),
      (r.setNewValue_ = function (i) {
        var s = this.value_;
        (this.value_ = i),
          this.reportChanged(),
          Je(this) &&
            Ze(this, { type: ft, object: this, newValue: i, oldValue: s });
      }),
      (r.get = function () {
        return this.reportObserved(), this.dehanceValue(this.value_);
      }),
      (r.intercept_ = function (i) {
        return hi(this, i);
      }),
      (r.observe_ = function (i, s) {
        return (
          s &&
            i({
              observableKind: "value",
              debugObjectName: this.name_,
              object: this,
              type: ft,
              newValue: this.value_,
              oldValue: void 0,
            }),
          pi(this, i)
        );
      }),
      (r.raw = function () {
        return this.value_;
      }),
      (r.toJSON = function () {
        return this.get();
      }),
      (r.toString = function () {
        return this.name_ + "[" + this.value_ + "]";
      }),
      (r.valueOf = function () {
        return ab(this.get());
      }),
      (r[Symbol.toPrimitive] = function () {
        return this.valueOf();
      }),
      t
    );
  })(er),
  Cd = Xt("ObservableValue", Ft),
  Qe = (function () {
    function e(r) {
      (this.dependenciesState_ = J.NOT_TRACKING_),
        (this.observing_ = []),
        (this.newObserving_ = null),
        (this.observers_ = new Set()),
        (this.runId_ = 0),
        (this.lastAccessedBy_ = 0),
        (this.lowestObserverState_ = J.UP_TO_DATE_),
        (this.unboundDepsCount_ = 0),
        (this.value_ = new ls(null)),
        (this.name_ = void 0),
        (this.triggeredBy_ = void 0),
        (this.flags_ = 0),
        (this.derivation = void 0),
        (this.setter_ = void 0),
        (this.isTracing_ = us.NONE),
        (this.scope_ = void 0),
        (this.equals_ = void 0),
        (this.requiresReaction_ = void 0),
        (this.keepAlive_ = void 0),
        (this.onBOL = void 0),
        (this.onBUOL = void 0),
        r.get || U(31),
        (this.derivation = r.get),
        (this.name_ = r.name || "ComputedValue"),
        r.set && (this.setter_ = zt("ComputedValue-setter", r.set)),
        (this.equals_ =
          r.equals ||
          (r.compareStructural || r.struct ? vr.structural : vr.default)),
        (this.scope_ = r.context),
        (this.requiresReaction_ = r.requiresReaction),
        (this.keepAlive_ = !!r.keepAlive);
    }
    var t = e.prototype;
    return (
      (t.onBecomeStale_ = function () {
        GR(this);
      }),
      (t.onBO = function () {
        this.onBOL &&
          this.onBOL.forEach(function (n) {
            return n();
          });
      }),
      (t.onBUO = function () {
        this.onBUOL &&
          this.onBUOL.forEach(function (n) {
            return n();
          });
      }),
      (t.get = function () {
        if (
          (this.isComputing && U(32, this.name_, this.derivation),
          R.inBatch === 0 && this.observers_.size === 0 && !this.keepAlive_)
        )
          ul(this) &&
            (this.warnAboutUntrackedRead_(),
            we(),
            (this.value_ = this.computeValue_(!1)),
            Ce());
        else if ((Ob(this), ul(this))) {
          var n = R.trackingContext;
          this.keepAlive_ && !n && (R.trackingContext = this),
            this.trackAndCompute() && FR(this),
            (R.trackingContext = n);
        }
        var i = this.value_;
        if (Hi(i)) throw i.cause;
        return i;
      }),
      (t.set = function (n) {
        if (this.setter_) {
          this.isRunningSetter && U(33, this.name_),
            (this.isRunningSetter = !0);
          try {
            this.setter_.call(this.scope_, n);
          } finally {
            this.isRunningSetter = !1;
          }
        } else U(34, this.name_);
      }),
      (t.trackAndCompute = function () {
        var n = this.value_,
          i = this.dependenciesState_ === J.NOT_TRACKING_,
          s = this.computeValue_(!0),
          o = i || Hi(n) || Hi(s) || !this.equals_(n, s);
        return o && (this.value_ = s), o;
      }),
      (t.computeValue_ = function (n) {
        this.isComputing = !0;
        var i = Xs(!1),
          s;
        if (n) s = Sb(this, this.derivation, this.scope_);
        else if (R.disableErrorBoundaries === !0)
          s = this.derivation.call(this.scope_);
        else
          try {
            s = this.derivation.call(this.scope_);
          } catch (o) {
            s = new ls(o);
          }
        return eo(i), (this.isComputing = !1), s;
      }),
      (t.suspend_ = function () {
        this.keepAlive_ || (ll(this), (this.value_ = void 0));
      }),
      (t.observe_ = function (n, i) {
        var s = this,
          o = !0,
          a = void 0;
        return no(function () {
          var c = s.get();
          if (!o || i) {
            var u = Nr();
            n({
              observableKind: "computed",
              debugObjectName: s.name_,
              type: ft,
              object: s,
              newValue: c,
              oldValue: a,
            }),
              St(u);
          }
          (o = !1), (a = c);
        });
      }),
      (t.warnAboutUntrackedRead_ = function () {}),
      (t.toString = function () {
        return this.name_ + "[" + this.derivation.toString() + "]";
      }),
      (t.valueOf = function () {
        return ab(this.get());
      }),
      (t[Symbol.toPrimitive] = function () {
        return this.valueOf();
      }),
      On(e, [
        {
          key: "isComputing",
          get: function () {
            return Ie(this.flags_, e.isComputingMask_);
          },
          set: function (n) {
            this.flags_ = Te(this.flags_, e.isComputingMask_, n);
          },
        },
        {
          key: "isRunningSetter",
          get: function () {
            return Ie(this.flags_, e.isRunningSetterMask_);
          },
          set: function (n) {
            this.flags_ = Te(this.flags_, e.isRunningSetterMask_, n);
          },
        },
        {
          key: "isBeingObserved",
          get: function () {
            return Ie(this.flags_, e.isBeingObservedMask_);
          },
          set: function (n) {
            this.flags_ = Te(this.flags_, e.isBeingObservedMask_, n);
          },
        },
        {
          key: "isPendingUnobservation",
          get: function () {
            return Ie(this.flags_, e.isPendingUnobservationMask_);
          },
          set: function (n) {
            this.flags_ = Te(this.flags_, e.isPendingUnobservationMask_, n);
          },
        },
        {
          key: "diffValue",
          get: function () {
            return Ie(this.flags_, e.diffValueMask_) ? 1 : 0;
          },
          set: function (n) {
            this.flags_ = Te(this.flags_, e.diffValueMask_, n === 1);
          },
        },
      ])
    );
  })();
Qe.isComputingMask_ = 1;
Qe.isRunningSetterMask_ = 2;
Qe.isBeingObservedMask_ = 4;
Qe.isPendingUnobservationMask_ = 8;
Qe.diffValueMask_ = 16;
var br = Xt("ComputedValue", Qe),
  J;
(function (e) {
  (e[(e.NOT_TRACKING_ = -1)] = "NOT_TRACKING_"),
    (e[(e.UP_TO_DATE_ = 0)] = "UP_TO_DATE_"),
    (e[(e.POSSIBLY_STALE_ = 1)] = "POSSIBLY_STALE_"),
    (e[(e.STALE_ = 2)] = "STALE_");
})(J || (J = {}));
var us;
(function (e) {
  (e[(e.NONE = 0)] = "NONE"),
    (e[(e.LOG = 1)] = "LOG"),
    (e[(e.BREAK = 2)] = "BREAK");
})(us || (us = {}));
var ls = function (t) {
  (this.cause = void 0), (this.cause = t);
};
function Hi(e) {
  return e instanceof ls;
}
function ul(e) {
  switch (e.dependenciesState_) {
    case J.UP_TO_DATE_:
      return !1;
    case J.NOT_TRACKING_:
    case J.STALE_:
      return !0;
    case J.POSSIBLY_STALE_: {
      for (
        var t = ro(!0), r = Nr(), n = e.observing_, i = n.length, s = 0;
        s < i;
        s++
      ) {
        var o = n[s];
        if (br(o)) {
          if (R.disableErrorBoundaries) o.get();
          else
            try {
              o.get();
            } catch {
              return St(r), Qr(t), !0;
            }
          if (e.dependenciesState_ === J.STALE_) return St(r), Qr(t), !0;
        }
      }
      return Eb(e), St(r), Qr(t), !1;
    }
  }
}
function kR() {
  return R.trackingDerivation !== null;
}
function Sb(e, t, r) {
  var n = ro(!0);
  Eb(e),
    (e.newObserving_ = new Array(e.runId_ === 0 ? 100 : e.observing_.length)),
    (e.unboundDepsCount_ = 0),
    (e.runId_ = ++R.runId);
  var i = R.trackingDerivation;
  (R.trackingDerivation = e), R.inBatch++;
  var s;
  if (R.disableErrorBoundaries === !0) s = t.call(r);
  else
    try {
      s = t.call(r);
    } catch (o) {
      s = new ls(o);
    }
  return R.inBatch--, (R.trackingDerivation = i), NR(e), Qr(n), s;
}
function NR(e) {
  for (
    var t = e.observing_,
      r = (e.observing_ = e.newObserving_),
      n = J.UP_TO_DATE_,
      i = 0,
      s = e.unboundDepsCount_,
      o = 0;
    o < s;
    o++
  ) {
    var a = r[o];
    a.diffValue === 0 && ((a.diffValue = 1), i !== o && (r[i] = a), i++),
      a.dependenciesState_ > n && (n = a.dependenciesState_);
  }
  for (r.length = i, e.newObserving_ = null, s = t.length; s--; ) {
    var c = t[s];
    c.diffValue === 0 && Cb(c, e), (c.diffValue = 0);
  }
  for (; i--; ) {
    var u = r[i];
    u.diffValue === 1 && ((u.diffValue = 0), qR(u, e));
  }
  n !== J.UP_TO_DATE_ && ((e.dependenciesState_ = n), e.onBecomeStale_());
}
function ll(e) {
  var t = e.observing_;
  e.observing_ = [];
  for (var r = t.length; r--; ) Cb(t[r], e);
  e.dependenciesState_ = J.NOT_TRACKING_;
}
function to(e) {
  var t = Nr();
  try {
    return e();
  } finally {
    St(t);
  }
}
function Nr() {
  var e = R.trackingDerivation;
  return (R.trackingDerivation = null), e;
}
function St(e) {
  R.trackingDerivation = e;
}
function ro(e) {
  var t = R.allowStateReads;
  return (R.allowStateReads = e), t;
}
function Qr(e) {
  R.allowStateReads = e;
}
function Eb(e) {
  if (e.dependenciesState_ !== J.UP_TO_DATE_) {
    e.dependenciesState_ = J.UP_TO_DATE_;
    for (var t = e.observing_, r = t.length; r--; )
      t[r].lowestObserverState_ = J.UP_TO_DATE_;
  }
}
var LR = [
    "mobxGuid",
    "spyListeners",
    "enforceActions",
    "computedRequiresReaction",
    "reactionRequiresObservable",
    "observableRequiresReaction",
    "allowStateReads",
    "disableErrorBoundaries",
    "runId",
    "UNCHANGED",
    "useProxies",
  ],
  Kn = function () {
    (this.version = 6),
      (this.UNCHANGED = {}),
      (this.trackingDerivation = null),
      (this.trackingContext = null),
      (this.runId = 0),
      (this.mobxGuid = 0),
      (this.inBatch = 0),
      (this.pendingUnobservations = []),
      (this.pendingReactions = []),
      (this.isRunningReactions = !1),
      (this.allowStateChanges = !1),
      (this.allowStateReads = !0),
      (this.enforceActions = !0),
      (this.spyListeners = []),
      (this.globalReactionErrorHandlers = []),
      (this.computedRequiresReaction = !1),
      (this.reactionRequiresObservable = !1),
      (this.observableRequiresReaction = !1),
      (this.disableErrorBoundaries = !1),
      (this.suppressReactionErrors = !1),
      (this.useProxies = !0),
      (this.verifyProxies = !1),
      (this.safeDescriptors = !0);
  },
  zi = !0,
  wb = !1,
  R = (function () {
    var e = Ks();
    return (
      e.__mobxInstanceCount > 0 && !e.__mobxGlobals && (zi = !1),
      e.__mobxGlobals &&
        e.__mobxGlobals.version !== new Kn().version &&
        (zi = !1),
      zi
        ? e.__mobxGlobals
          ? ((e.__mobxInstanceCount += 1),
            e.__mobxGlobals.UNCHANGED || (e.__mobxGlobals.UNCHANGED = {}),
            e.__mobxGlobals)
          : ((e.__mobxInstanceCount = 1), (e.__mobxGlobals = new Kn()))
        : (setTimeout(function () {
            wb || U(35);
          }, 1),
          new Kn())
    );
  })();
function DR() {
  if (
    ((R.pendingReactions.length || R.inBatch || R.isRunningReactions) && U(36),
    (wb = !0),
    zi)
  ) {
    var e = Ks();
    --e.__mobxInstanceCount === 0 && (e.__mobxGlobals = void 0), (R = new Kn());
  }
}
function MR() {
  return R;
}
function jR() {
  var e = new Kn();
  for (var t in e) LR.indexOf(t) === -1 && (R[t] = e[t]);
  R.allowStateChanges = !R.enforceActions;
}
function UR(e) {
  return e.observers_ && e.observers_.size > 0;
}
function BR(e) {
  return e.observers_;
}
function qR(e, t) {
  e.observers_.add(t),
    e.lowestObserverState_ > t.dependenciesState_ &&
      (e.lowestObserverState_ = t.dependenciesState_);
}
function Cb(e, t) {
  e.observers_.delete(t), e.observers_.size === 0 && Ab(e);
}
function Ab(e) {
  e.isPendingUnobservation === !1 &&
    ((e.isPendingUnobservation = !0), R.pendingUnobservations.push(e));
}
function we() {
  R.inBatch++;
}
function Ce() {
  if (--R.inBatch === 0) {
    Rb();
    for (var e = R.pendingUnobservations, t = 0; t < e.length; t++) {
      var r = e[t];
      (r.isPendingUnobservation = !1),
        r.observers_.size === 0 &&
          (r.isBeingObserved && ((r.isBeingObserved = !1), r.onBUO()),
          r instanceof Qe && r.suspend_());
    }
    R.pendingUnobservations = [];
  }
}
function Ob(e) {
  var t = R.trackingDerivation;
  return t !== null
    ? (t.runId_ !== e.lastAccessedBy_ &&
        ((e.lastAccessedBy_ = t.runId_),
        (t.newObserving_[t.unboundDepsCount_++] = e),
        !e.isBeingObserved &&
          R.trackingContext &&
          ((e.isBeingObserved = !0), e.onBO())),
      e.isBeingObserved)
    : (e.observers_.size === 0 && R.inBatch > 0 && Ab(e), !1);
}
function xb(e) {
  e.lowestObserverState_ !== J.STALE_ &&
    ((e.lowestObserverState_ = J.STALE_),
    e.observers_.forEach(function (t) {
      t.dependenciesState_ === J.UP_TO_DATE_ && t.onBecomeStale_(),
        (t.dependenciesState_ = J.STALE_);
    }));
}
function FR(e) {
  e.lowestObserverState_ !== J.STALE_ &&
    ((e.lowestObserverState_ = J.STALE_),
    e.observers_.forEach(function (t) {
      t.dependenciesState_ === J.POSSIBLY_STALE_
        ? (t.dependenciesState_ = J.STALE_)
        : t.dependenciesState_ === J.UP_TO_DATE_ &&
          (e.lowestObserverState_ = J.UP_TO_DATE_);
    }));
}
function GR(e) {
  e.lowestObserverState_ === J.UP_TO_DATE_ &&
    ((e.lowestObserverState_ = J.POSSIBLY_STALE_),
    e.observers_.forEach(function (t) {
      t.dependenciesState_ === J.UP_TO_DATE_ &&
        ((t.dependenciesState_ = J.POSSIBLY_STALE_), t.onBecomeStale_());
    }));
}
var Xe = (function () {
  function e(r, n, i, s) {
    r === void 0 && (r = "Reaction"),
      (this.name_ = void 0),
      (this.onInvalidate_ = void 0),
      (this.errorHandler_ = void 0),
      (this.requiresObservable_ = void 0),
      (this.observing_ = []),
      (this.newObserving_ = []),
      (this.dependenciesState_ = J.NOT_TRACKING_),
      (this.runId_ = 0),
      (this.unboundDepsCount_ = 0),
      (this.flags_ = 0),
      (this.isTracing_ = us.NONE),
      (this.name_ = r),
      (this.onInvalidate_ = n),
      (this.errorHandler_ = i),
      (this.requiresObservable_ = s);
  }
  var t = e.prototype;
  return (
    (t.onBecomeStale_ = function () {
      this.schedule_();
    }),
    (t.schedule_ = function () {
      this.isScheduled ||
        ((this.isScheduled = !0), R.pendingReactions.push(this), Rb());
    }),
    (t.runReaction_ = function () {
      if (!this.isDisposed) {
        we(), (this.isScheduled = !1);
        var n = R.trackingContext;
        if (((R.trackingContext = this), ul(this))) {
          this.isTrackPending = !0;
          try {
            this.onInvalidate_();
          } catch (i) {
            this.reportExceptionInDerivation_(i);
          }
        }
        (R.trackingContext = n), Ce();
      }
    }),
    (t.track = function (n) {
      if (!this.isDisposed) {
        we(), (this.isRunning = !0);
        var i = R.trackingContext;
        R.trackingContext = this;
        var s = Sb(this, n, void 0);
        (R.trackingContext = i),
          (this.isRunning = !1),
          (this.isTrackPending = !1),
          this.isDisposed && ll(this),
          Hi(s) && this.reportExceptionInDerivation_(s.cause),
          Ce();
      }
    }),
    (t.reportExceptionInDerivation_ = function (n) {
      var i = this;
      if (this.errorHandler_) {
        this.errorHandler_(n, this);
        return;
      }
      if (R.disableErrorBoundaries) throw n;
      var s = "[mobx] uncaught error in '" + this + "'";
      R.suppressReactionErrors || console.error(s, n),
        R.globalReactionErrorHandlers.forEach(function (o) {
          return o(n, i);
        });
    }),
    (t.dispose = function () {
      this.isDisposed ||
        ((this.isDisposed = !0), this.isRunning || (we(), ll(this), Ce()));
    }),
    (t.getDisposer_ = function (n) {
      var i = this,
        s = function o() {
          i.dispose(),
            n == null ||
              n.removeEventListener == null ||
              n.removeEventListener("abort", o);
        };
      return (
        n == null ||
          n.addEventListener == null ||
          n.addEventListener("abort", s),
        (s[L] = this),
        s
      );
    }),
    (t.toString = function () {
      return "Reaction[" + this.name_ + "]";
    }),
    (t.trace = function (n) {}),
    On(e, [
      {
        key: "isDisposed",
        get: function () {
          return Ie(this.flags_, e.isDisposedMask_);
        },
        set: function (n) {
          this.flags_ = Te(this.flags_, e.isDisposedMask_, n);
        },
      },
      {
        key: "isScheduled",
        get: function () {
          return Ie(this.flags_, e.isScheduledMask_);
        },
        set: function (n) {
          this.flags_ = Te(this.flags_, e.isScheduledMask_, n);
        },
      },
      {
        key: "isTrackPending",
        get: function () {
          return Ie(this.flags_, e.isTrackPendingMask_);
        },
        set: function (n) {
          this.flags_ = Te(this.flags_, e.isTrackPendingMask_, n);
        },
      },
      {
        key: "isRunning",
        get: function () {
          return Ie(this.flags_, e.isRunningMask_);
        },
        set: function (n) {
          this.flags_ = Te(this.flags_, e.isRunningMask_, n);
        },
      },
      {
        key: "diffValue",
        get: function () {
          return Ie(this.flags_, e.diffValueMask_) ? 1 : 0;
        },
        set: function (n) {
          this.flags_ = Te(this.flags_, e.diffValueMask_, n === 1);
        },
      },
    ])
  );
})();
Xe.isDisposedMask_ = 1;
Xe.isScheduledMask_ = 2;
Xe.isTrackPendingMask_ = 4;
Xe.isRunningMask_ = 8;
Xe.diffValueMask_ = 16;
function VR(e) {
  return (
    R.globalReactionErrorHandlers.push(e),
    function () {
      var t = R.globalReactionErrorHandlers.indexOf(e);
      t >= 0 && R.globalReactionErrorHandlers.splice(t, 1);
    }
  );
}
var $R = 100,
  dl = function (t) {
    return t();
  };
function Rb() {
  R.inBatch > 0 || R.isRunningReactions || dl(HR);
}
function HR() {
  R.isRunningReactions = !0;
  for (var e = R.pendingReactions, t = 0; e.length > 0; ) {
    ++t === $R &&
      (console.error("[mobx] cycle in reaction: " + e[0]), e.splice(0));
    for (var r = e.splice(0), n = 0, i = r.length; n < i; n++)
      r[n].runReaction_();
  }
  R.isRunningReactions = !1;
}
var ds = Xt("Reaction", Xe);
function zR(e) {
  var t = dl;
  dl = function (n) {
    return e(function () {
      return t(n);
    });
  };
}
function Yn() {
  return !1;
}
function Ib(e) {
  return (
    console.warn("[mobx.spy] Is a no-op in production builds"), function () {}
  );
}
var Tb = "action",
  WR = "action.bound",
  Pb = "autoAction",
  KR = "autoAction.bound",
  kb = "<unnamed action>",
  fl = fi(Tb),
  YR = fi(WR, { bound: !0 }),
  hl = fi(Pb, { autoAction: !0 }),
  JR = fi(KR, { autoAction: !0, bound: !0 });
function Nb(e) {
  var t = function (n, i) {
    if (Le(n)) return zt(n.name || kb, n, e);
    if (Le(i)) return zt(n, i, e);
    if (di(i)) return (e ? hl : fl).decorate_20223_(n, i);
    if (_r(i)) return li(n, i, e ? hl : fl);
    if (_r(n)) return Ye(fi(e ? Pb : Tb, { name: n, autoAction: e }));
  };
  return t;
}
var Ut = Nb(!1);
Object.assign(Ut, fl);
var ln = Nb(!0);
Object.assign(ln, hl);
Ut.bound = Ye(YR);
ln.bound = Ye(JR);
function fs(e) {
  return mb(e.name || kb, !1, e, this, void 0);
}
function dn(e) {
  return Le(e) && e.isMobxAction === !0;
}
function no(e, t) {
  var r, n, i, s;
  t === void 0 && (t = yd);
  var o = (r = (n = t) == null ? void 0 : n.name) != null ? r : "Autorun",
    a = !t.scheduler && !t.delay,
    c;
  if (a)
    c = new Xe(
      o,
      function () {
        this.track(d);
      },
      t.onError,
      t.requiresObservable,
    );
  else {
    var u = Lb(t),
      l = !1;
    c = new Xe(
      o,
      function () {
        l ||
          ((l = !0),
          u(function () {
            (l = !1), c.isDisposed || c.track(d);
          }));
      },
      t.onError,
      t.requiresObservable,
    );
  }
  function d() {
    e(c);
  }
  return (
    ((i = t) != null && (i = i.signal) != null && i.aborted) || c.schedule_(),
    c.getDisposer_((s = t) == null ? void 0 : s.signal)
  );
}
var ZR = function (t) {
  return t();
};
function Lb(e) {
  return e.scheduler
    ? e.scheduler
    : e.delay
      ? function (t) {
          return setTimeout(t, e.delay);
        }
      : ZR;
}
function QR(e, t, r) {
  var n, i, s;
  r === void 0 && (r = yd);
  var o = (n = r.name) != null ? n : "Reaction",
    a = Ut(o, r.onError ? XR(r.onError, t) : t),
    c = !r.scheduler && !r.delay,
    u = Lb(r),
    l = !0,
    d = !1,
    f,
    h = r.compareStructural ? vr.structural : r.equals || vr.default,
    _ = new Xe(
      o,
      function () {
        l || c ? p() : d || ((d = !0), u(p));
      },
      r.onError,
      r.requiresObservable,
    );
  function p() {
    if (((d = !1), !_.isDisposed)) {
      var g = !1,
        y = f;
      _.track(function () {
        var E = wd(!1, function () {
          return e(_);
        });
        (g = l || !h(f, E)), (f = E);
      }),
        ((l && r.fireImmediately) || (!l && g)) && a(f, y, _),
        (l = !1);
    }
  }
  return (
    ((i = r) != null && (i = i.signal) != null && i.aborted) || _.schedule_(),
    _.getDisposer_((s = r) == null ? void 0 : s.signal)
  );
}
function XR(e, t) {
  return function () {
    try {
      return t.apply(this, arguments);
    } catch (r) {
      e.call(this, r);
    }
  };
}
var eI = "onBO",
  tI = "onBUO";
function Db(e, t, r) {
  return Mb(eI, e, t, r);
}
function Ad(e, t, r) {
  return Mb(tI, e, t, r);
}
function Mb(e, t, r, n) {
  var i = typeof n == "function" ? At(t, r) : At(t),
    s = Le(n) ? n : r,
    o = e + "L";
  return (
    i[o] ? i[o].add(s) : (i[o] = new Set([s])),
    function () {
      var a = i[o];
      a && (a.delete(s), a.size === 0 && delete i[o]);
    }
  );
}
var rI = "never",
  Ti = "always",
  nI = "observed";
function jb(e) {
  e.isolateGlobalState === !0 && DR();
  var t = e.useProxies,
    r = e.enforceActions;
  if (
    (t !== void 0 &&
      (R.useProxies = t === Ti ? !0 : t === rI ? !1 : typeof Proxy < "u"),
    t === "ifavailable" && (R.verifyProxies = !0),
    r !== void 0)
  ) {
    var n = r === Ti ? Ti : r === nI;
    (R.enforceActions = n), (R.allowStateChanges = !(n === !0 || n === Ti));
  }
  [
    "computedRequiresReaction",
    "reactionRequiresObservable",
    "observableRequiresReaction",
    "disableErrorBoundaries",
    "safeDescriptors",
  ].forEach(function (i) {
    i in e && (R[i] = !!e[i]);
  }),
    (R.allowStateReads = !R.observableRequiresReaction),
    e.reactionScheduler && zR(e.reactionScheduler);
}
function Od(e, t, r, n) {
  var i = Lx(t);
  return (
    tr(function () {
      var s = Lr(e, n)[L];
      un(i).forEach(function (o) {
        s.extend_(o, i[o], r && o in r ? r[o] : !0);
      });
    }),
    e
  );
}
function Ub(e, t) {
  return Bb(At(e, t));
}
function Bb(e) {
  var t = { name: e.name_ };
  return (
    e.observing_ &&
      e.observing_.length > 0 &&
      (t.dependencies = sI(e.observing_).map(Bb)),
    t
  );
}
function iI(e, t) {
  return qb(At(e, t));
}
function qb(e) {
  var t = { name: e.name_ };
  return UR(e) && (t.observers = Array.from(BR(e)).map(qb)), t;
}
function sI(e) {
  return Array.from(new Set(e));
}
var oI = 0;
function io() {
  this.message = "FLOW_CANCELLED";
}
io.prototype = Object.create(Error.prototype);
function aI(e) {
  return e instanceof io;
}
var Kc = db("flow"),
  cI = db("flow.bound", { bound: !0 }),
  yr = Object.assign(function (t, r) {
    if (di(r)) return Kc.decorate_20223_(t, r);
    if (_r(r)) return li(t, r, Kc);
    var n = t,
      i = n.name || "<unnamed flow>",
      s = function () {
        var a = this,
          c = arguments,
          u = ++oI,
          l = Ut(i + " - runid: " + u + " - init", n).apply(a, c),
          d,
          f = void 0,
          h = new Promise(function (_, p) {
            var g = 0;
            d = p;
            function y(b) {
              f = void 0;
              var S;
              try {
                S = Ut(i + " - runid: " + u + " - yield " + g++, l.next).call(
                  l,
                  b,
                );
              } catch (w) {
                return p(w);
              }
              A(S);
            }
            function E(b) {
              f = void 0;
              var S;
              try {
                S = Ut(i + " - runid: " + u + " - yield " + g++, l.throw).call(
                  l,
                  b,
                );
              } catch (w) {
                return p(w);
              }
              A(S);
            }
            function A(b) {
              if (Le(b?.then)) {
                b.then(A, p);
                return;
              }
              return b.done
                ? _(b.value)
                : ((f = Promise.resolve(b.value)), f.then(y, E));
            }
            y(void 0);
          });
        return (
          (h.cancel = Ut(i + " - runid: " + u + " - cancel", function () {
            try {
              f && Og(f);
              var _ = l.return(void 0),
                p = Promise.resolve(_.value);
              p.then(Yr, Yr), Og(p), d(new io());
            } catch (g) {
              d(g);
            }
          })),
          h
        );
      };
    return (s.isMobXFlow = !0), s;
  }, Kc);
yr.bound = Ye(cI);
function Og(e) {
  Le(e.cancel) && e.cancel();
}
function uI(e) {
  return e;
}
function fn(e) {
  return e?.isMobXFlow === !0;
}
function lI(e, t, r) {
  var n;
  return (
    ve(e) || Oe(e) || Cd(e) ? (n = Ot(e)) : _e(e) && (n = Ot(e, t)),
    (n.dehancer = typeof t == "function" ? t : r),
    function () {
      n.dehancer = void 0;
    }
  );
}
function dI(e, t, r) {
  return Le(r) ? hI(e, t, r) : fI(e, t);
}
function fI(e, t) {
  return Ot(e).intercept_(t);
}
function hI(e, t, r) {
  return Ot(e, t).intercept_(r);
}
function Fb(e, t) {
  if (t === void 0) return br(e);
  if (_e(e) === !1 || !e[L].values_.has(t)) return !1;
  var r = At(e, t);
  return br(r);
}
function pI(e) {
  return Fb(e);
}
function gI(e, t) {
  return Fb(e, t);
}
function Gb(e, t) {
  return e
    ? t !== void 0
      ? _e(e)
        ? e[L].values_.has(t)
        : !1
      : _e(e) || !!e[L] || Sd(e) || ds(e) || br(e)
    : !1;
}
function so(e) {
  return Gb(e);
}
function _I(e, t) {
  return Gb(e, t);
}
function ri(e) {
  if (_e(e)) return e[L].keys_();
  if (ve(e) || fe(e)) return Array.from(e.keys());
  if (Oe(e))
    return e.map(function (t, r) {
      return r;
    });
  U(5);
}
function vI(e) {
  if (_e(e))
    return ri(e).map(function (t) {
      return e[t];
    });
  if (ve(e))
    return ri(e).map(function (t) {
      return e.get(t);
    });
  if (fe(e)) return Array.from(e.values());
  if (Oe(e)) return e.slice();
  U(6);
}
function mI(e) {
  if (_e(e))
    return ri(e).map(function (t) {
      return [t, e[t]];
    });
  if (ve(e))
    return ri(e).map(function (t) {
      return [t, e.get(t)];
    });
  if (fe(e)) return Array.from(e.entries());
  if (Oe(e))
    return e.map(function (t, r) {
      return [r, t];
    });
  U(7);
}
function Vb(e, t, r) {
  if (arguments.length === 2 && !fe(e)) {
    we();
    var n = t;
    try {
      for (var i in n) Vb(e, i, n[i]);
    } finally {
      Ce();
    }
    return;
  }
  _e(e)
    ? e[L].set_(t, r)
    : ve(e)
      ? e.set(t, r)
      : fe(e)
        ? e.add(t)
        : Oe(e)
          ? (typeof t != "number" && (t = parseInt(t, 10)),
            t < 0 && U("Invalid index: '" + t + "'"),
            we(),
            t >= e.length && (e.length = t + 1),
            (e[t] = r),
            Ce())
          : U(8);
}
function bI(e, t) {
  _e(e)
    ? e[L].delete_(t)
    : ve(e) || fe(e)
      ? e.delete(t)
      : Oe(e)
        ? (typeof t != "number" && (t = parseInt(t, 10)), e.splice(t, 1))
        : U(9);
}
function $b(e, t) {
  if (_e(e)) return e[L].has_(t);
  if (ve(e)) return e.has(t);
  if (fe(e)) return e.has(t);
  if (Oe(e)) return t >= 0 && t < e.length;
  U(10);
}
function yI(e, t) {
  if ($b(e, t)) {
    if (_e(e)) return e[L].get_(t);
    if (ve(e)) return e.get(t);
    if (Oe(e)) return e[t];
    U(11);
  }
}
function SI(e, t, r) {
  if (_e(e)) return e[L].defineProperty_(t, r);
  U(39);
}
function Hb(e) {
  if (_e(e)) return e[L].ownKeys_();
  U(38);
}
function EI(e, t, r, n) {
  return Le(r) ? CI(e, t, r, n) : wI(e, t, r);
}
function wI(e, t, r) {
  return Ot(e).observe_(t, r);
}
function CI(e, t, r, n) {
  return Ot(e, t).observe_(r, n);
}
function Pi(e, t, r) {
  return e.set(t, r), r;
}
function Hr(e, t) {
  if (e == null || typeof e != "object" || e instanceof Date || !so(e))
    return e;
  if (Cd(e) || br(e)) return Hr(e.get(), t);
  if (t.has(e)) return t.get(e);
  if (Oe(e)) {
    var r = Pi(t, e, new Array(e.length));
    return (
      e.forEach(function (o, a) {
        r[a] = Hr(o, t);
      }),
      r
    );
  }
  if (fe(e)) {
    var n = Pi(t, e, new Set());
    return (
      e.forEach(function (o) {
        n.add(Hr(o, t));
      }),
      n
    );
  }
  if (ve(e)) {
    var i = Pi(t, e, new Map());
    return (
      e.forEach(function (o, a) {
        i.set(a, Hr(o, t));
      }),
      i
    );
  } else {
    var s = Pi(t, e, {});
    return (
      Hb(e).forEach(function (o) {
        ci.propertyIsEnumerable.call(e, o) && (s[o] = Hr(e[o], t));
      }),
      s
    );
  }
}
function AI(e, t) {
  return Hr(e, new Map());
}
function OI() {}
function ut(e, t) {
  t === void 0 && (t = void 0), we();
  try {
    return e.apply(t);
  } finally {
    Ce();
  }
}
function zb(e, t, r) {
  return arguments.length === 1 || (t && typeof t == "object")
    ? xI(e, t)
    : Wb(e, t, r || {});
}
function Wb(e, t, r) {
  var n;
  if (typeof r.timeout == "number") {
    var i = new Error("WHEN_TIMEOUT");
    n = setTimeout(function () {
      if (!o[L].isDisposed)
        if ((o(), r.onError)) r.onError(i);
        else throw i;
    }, r.timeout);
  }
  r.name = "When";
  var s = zt("When-effect", t),
    o = no(function (a) {
      var c = wd(!1, e);
      c && (a.dispose(), n && clearTimeout(n), s());
    }, r);
  return o;
}
function xI(e, t) {
  var r;
  if (t != null && (r = t.signal) != null && r.aborted)
    return Object.assign(Promise.reject(new Error("WHEN_ABORTED")), {
      cancel: function () {
        return null;
      },
    });
  var n,
    i,
    s = new Promise(function (o, a) {
      var c,
        u = Wb(e, o, Ht({}, t, { onError: a }));
      (n = function () {
        u(), a(new Error("WHEN_CANCELLED"));
      }),
        (i = function () {
          u(), a(new Error("WHEN_ABORTED"));
        }),
        t == null ||
          (c = t.signal) == null ||
          c.addEventListener == null ||
          c.addEventListener("abort", i);
    }).finally(function () {
      var o;
      return t == null ||
        (o = t.signal) == null ||
        o.removeEventListener == null
        ? void 0
        : o.removeEventListener("abort", i);
    });
  return (s.cancel = n), s;
}
function Ur(e) {
  return e[L];
}
var RI = {
  has: function (t, r) {
    return Ur(t).has_(r);
  },
  get: function (t, r) {
    return Ur(t).get_(r);
  },
  set: function (t, r, n) {
    var i;
    return _r(r) ? ((i = Ur(t).set_(r, n, !0)) != null ? i : !0) : !1;
  },
  deleteProperty: function (t, r) {
    var n;
    return _r(r) ? ((n = Ur(t).delete_(r, !0)) != null ? n : !0) : !1;
  },
  defineProperty: function (t, r, n) {
    var i;
    return (i = Ur(t).defineProperty_(r, n)) != null ? i : !0;
  },
  ownKeys: function (t) {
    return Ur(t).ownKeys_();
  },
  preventExtensions: function (t) {
    U(13);
  },
};
function II(e, t) {
  var r, n;
  return (
    rb(),
    (e = Lr(e, t)),
    (n = (r = e[L]).proxy_) != null ? n : (r.proxy_ = new Proxy(e, RI))
  );
}
function Fe(e) {
  return e.interceptors_ !== void 0 && e.interceptors_.length > 0;
}
function hi(e, t) {
  var r = e.interceptors_ || (e.interceptors_ = []);
  return (
    r.push(t),
    nb(function () {
      var n = r.indexOf(t);
      n !== -1 && r.splice(n, 1);
    })
  );
}
function Ge(e, t) {
  var r = Nr();
  try {
    for (
      var n = [].concat(e.interceptors_ || []), i = 0, s = n.length;
      i < s && ((t = n[i](t)), t && !t.type && U(14), !!t);
      i++
    );
    return t;
  } finally {
    St(r);
  }
}
function Je(e) {
  return e.changeListeners_ !== void 0 && e.changeListeners_.length > 0;
}
function pi(e, t) {
  var r = e.changeListeners_ || (e.changeListeners_ = []);
  return (
    r.push(t),
    nb(function () {
      var n = r.indexOf(t);
      n !== -1 && r.splice(n, 1);
    })
  );
}
function Ze(e, t) {
  var r = Nr(),
    n = e.changeListeners_;
  if (n) {
    n = n.slice();
    for (var i = 0, s = n.length; i < s; i++) n[i](t);
    St(r);
  }
}
function Kb(e, t, r) {
  return (
    tr(function () {
      var n,
        i = Lr(e, r)[L];
      (n = t) != null || (t = Bx(e)),
        un(t).forEach(function (s) {
          return i.make_(s, t[s]);
        });
    }),
    e
  );
}
var Yc = Symbol("mobx-keys");
function TI(e, t, r) {
  return Ct(e)
    ? Od(e, e, t, r)
    : (tr(function () {
        var n = Lr(e, r)[L];
        if (!e[Yc]) {
          var i = Object.getPrototypeOf(e),
            s = new Set([].concat(un(e), un(i)));
          s.delete("constructor"), s.delete(L), ui(i, Yc, s);
        }
        e[Yc].forEach(function (o) {
          return n.make_(o, t && o in t ? t[o] : !0);
        });
      }),
      e);
}
var xg = "splice",
  ft = "update",
  PI = 1e4,
  kI = {
    get: function (t, r) {
      var n = t[L];
      return r === L
        ? n
        : r === "length"
          ? n.getArrayLength_()
          : typeof r == "string" && !isNaN(r)
            ? n.get_(parseInt(r))
            : yt(hs, r)
              ? hs[r]
              : t[r];
    },
    set: function (t, r, n) {
      var i = t[L];
      return (
        r === "length" && i.setArrayLength_(n),
        typeof r == "symbol" || isNaN(r) ? (t[r] = n) : i.set_(parseInt(r), n),
        !0
      );
    },
    preventExtensions: function () {
      U(15);
    },
  },
  xd = (function () {
    function e(r, n, i, s) {
      r === void 0 && (r = "ObservableArray"),
        (this.owned_ = void 0),
        (this.legacyMode_ = void 0),
        (this.atom_ = void 0),
        (this.values_ = []),
        (this.interceptors_ = void 0),
        (this.changeListeners_ = void 0),
        (this.enhancer_ = void 0),
        (this.dehancer = void 0),
        (this.proxy_ = void 0),
        (this.lastKnownLength_ = 0),
        (this.owned_ = i),
        (this.legacyMode_ = s),
        (this.atom_ = new er(r)),
        (this.enhancer_ = function (o, a) {
          return n(o, a, "ObservableArray[..]");
        });
    }
    var t = e.prototype;
    return (
      (t.dehanceValue_ = function (n) {
        return this.dehancer !== void 0 ? this.dehancer(n) : n;
      }),
      (t.dehanceValues_ = function (n) {
        return this.dehancer !== void 0 && n.length > 0
          ? n.map(this.dehancer)
          : n;
      }),
      (t.intercept_ = function (n) {
        return hi(this, n);
      }),
      (t.observe_ = function (n, i) {
        return (
          i === void 0 && (i = !1),
          i &&
            n({
              observableKind: "array",
              object: this.proxy_,
              debugObjectName: this.atom_.name_,
              type: "splice",
              index: 0,
              added: this.values_.slice(),
              addedCount: this.values_.length,
              removed: [],
              removedCount: 0,
            }),
          pi(this, n)
        );
      }),
      (t.getArrayLength_ = function () {
        return this.atom_.reportObserved(), this.values_.length;
      }),
      (t.setArrayLength_ = function (n) {
        (typeof n != "number" || isNaN(n) || n < 0) && U("Out of range: " + n);
        var i = this.values_.length;
        if (n !== i)
          if (n > i) {
            for (var s = new Array(n - i), o = 0; o < n - i; o++) s[o] = void 0;
            this.spliceWithArray_(i, 0, s);
          } else this.spliceWithArray_(n, i - n);
      }),
      (t.updateArrayLength_ = function (n, i) {
        n !== this.lastKnownLength_ && U(16),
          (this.lastKnownLength_ += i),
          this.legacyMode_ && i > 0 && Xb(n + i + 1);
      }),
      (t.spliceWithArray_ = function (n, i, s) {
        var o = this;
        this.atom_;
        var a = this.values_.length;
        if (
          (n === void 0
            ? (n = 0)
            : n > a
              ? (n = a)
              : n < 0 && (n = Math.max(0, a + n)),
          arguments.length === 1
            ? (i = a - n)
            : i == null
              ? (i = 0)
              : (i = Math.max(0, Math.min(i, a - n))),
          s === void 0 && (s = sl),
          Fe(this))
        ) {
          var c = Ge(this, {
            object: this.proxy_,
            type: xg,
            index: n,
            removedCount: i,
            added: s,
          });
          if (!c) return sl;
          (i = c.removedCount), (s = c.added);
        }
        if (
          ((s =
            s.length === 0
              ? s
              : s.map(function (d) {
                  return o.enhancer_(d, void 0);
                })),
          this.legacyMode_)
        ) {
          var u = s.length - i;
          this.updateArrayLength_(a, u);
        }
        var l = this.spliceItemsIntoValues_(n, i, s);
        return (
          (i !== 0 || s.length !== 0) && this.notifyArraySplice_(n, s, l),
          this.dehanceValues_(l)
        );
      }),
      (t.spliceItemsIntoValues_ = function (n, i, s) {
        if (s.length < PI) {
          var o;
          return (o = this.values_).splice.apply(o, [n, i].concat(s));
        } else {
          var a = this.values_.slice(n, n + i),
            c = this.values_.slice(n + i);
          this.values_.length += s.length - i;
          for (var u = 0; u < s.length; u++) this.values_[n + u] = s[u];
          for (var l = 0; l < c.length; l++)
            this.values_[n + s.length + l] = c[l];
          return a;
        }
      }),
      (t.notifyArrayChildUpdate_ = function (n, i, s) {
        var o = !this.owned_ && Yn(),
          a = Je(this),
          c =
            a || o
              ? {
                  observableKind: "array",
                  object: this.proxy_,
                  type: ft,
                  debugObjectName: this.atom_.name_,
                  index: n,
                  newValue: i,
                  oldValue: s,
                }
              : null;
        this.atom_.reportChanged(), a && Ze(this, c);
      }),
      (t.notifyArraySplice_ = function (n, i, s) {
        var o = !this.owned_ && Yn(),
          a = Je(this),
          c =
            a || o
              ? {
                  observableKind: "array",
                  object: this.proxy_,
                  debugObjectName: this.atom_.name_,
                  type: xg,
                  index: n,
                  removed: s,
                  added: i,
                  removedCount: s.length,
                  addedCount: i.length,
                }
              : null;
        this.atom_.reportChanged(), a && Ze(this, c);
      }),
      (t.get_ = function (n) {
        if (this.legacyMode_ && n >= this.values_.length) {
          console.warn("[mobx] Out of bounds read: " + n);
          return;
        }
        return this.atom_.reportObserved(), this.dehanceValue_(this.values_[n]);
      }),
      (t.set_ = function (n, i) {
        var s = this.values_;
        if (
          (this.legacyMode_ && n > s.length && U(17, n, s.length), n < s.length)
        ) {
          this.atom_;
          var o = s[n];
          if (Fe(this)) {
            var a = Ge(this, {
              type: ft,
              object: this.proxy_,
              index: n,
              newValue: i,
            });
            if (!a) return;
            i = a.newValue;
          }
          i = this.enhancer_(i, o);
          var c = i !== o;
          c && ((s[n] = i), this.notifyArrayChildUpdate_(n, i, o));
        } else {
          for (
            var u = new Array(n + 1 - s.length), l = 0;
            l < u.length - 1;
            l++
          )
            u[l] = void 0;
          (u[u.length - 1] = i), this.spliceWithArray_(s.length, 0, u);
        }
      }),
      e
    );
  })();
function NI(e, t, r, n) {
  return (
    r === void 0 && (r = "ObservableArray"),
    n === void 0 && (n = !1),
    rb(),
    tr(function () {
      var i = new xd(r, t, n, !1);
      sb(i.values_, L, i);
      var s = new Proxy(i.values_, kI);
      return (i.proxy_ = s), e && e.length && i.spliceWithArray_(0, 0, e), s;
    })
  );
}
var hs = {
  clear: function () {
    return this.splice(0);
  },
  replace: function (t) {
    var r = this[L];
    return r.spliceWithArray_(0, r.values_.length, t);
  },
  toJSON: function () {
    return this.slice();
  },
  splice: function (t, r) {
    for (
      var n = arguments.length, i = new Array(n > 2 ? n - 2 : 0), s = 2;
      s < n;
      s++
    )
      i[s - 2] = arguments[s];
    var o = this[L];
    switch (arguments.length) {
      case 0:
        return [];
      case 1:
        return o.spliceWithArray_(t);
      case 2:
        return o.spliceWithArray_(t, r);
    }
    return o.spliceWithArray_(t, r, i);
  },
  spliceWithArray: function (t, r, n) {
    return this[L].spliceWithArray_(t, r, n);
  },
  push: function () {
    for (
      var t = this[L], r = arguments.length, n = new Array(r), i = 0;
      i < r;
      i++
    )
      n[i] = arguments[i];
    return t.spliceWithArray_(t.values_.length, 0, n), t.values_.length;
  },
  pop: function () {
    return this.splice(Math.max(this[L].values_.length - 1, 0), 1)[0];
  },
  shift: function () {
    return this.splice(0, 1)[0];
  },
  unshift: function () {
    for (
      var t = this[L], r = arguments.length, n = new Array(r), i = 0;
      i < r;
      i++
    )
      n[i] = arguments[i];
    return t.spliceWithArray_(0, 0, n), t.values_.length;
  },
  reverse: function () {
    return (
      R.trackingDerivation && U(37, "reverse"),
      this.replace(this.slice().reverse()),
      this
    );
  },
  sort: function () {
    R.trackingDerivation && U(37, "sort");
    var t = this.slice();
    return t.sort.apply(t, arguments), this.replace(t), this;
  },
  remove: function (t) {
    var r = this[L],
      n = r.dehanceValues_(r.values_).indexOf(t);
    return n > -1 ? (this.splice(n, 1), !0) : !1;
  },
};
re("at", Me);
re("concat", Me);
re("flat", Me);
re("includes", Me);
re("indexOf", Me);
re("join", Me);
re("lastIndexOf", Me);
re("slice", Me);
re("toString", Me);
re("toLocaleString", Me);
re("toSorted", Me);
re("toSpliced", Me);
re("with", Me);
re("every", it);
re("filter", it);
re("find", it);
re("findIndex", it);
re("findLast", it);
re("findLastIndex", it);
re("flatMap", it);
re("forEach", it);
re("map", it);
re("some", it);
re("toReversed", it);
re("reduce", Yb);
re("reduceRight", Yb);
function re(e, t) {
  typeof Array.prototype[e] == "function" && (hs[e] = t(e));
}
function Me(e) {
  return function () {
    var t = this[L];
    t.atom_.reportObserved();
    var r = t.dehanceValues_(t.values_);
    return r[e].apply(r, arguments);
  };
}
function it(e) {
  return function (t, r) {
    var n = this,
      i = this[L];
    i.atom_.reportObserved();
    var s = i.dehanceValues_(i.values_);
    return s[e](function (o, a) {
      return t.call(r, o, a, n);
    });
  };
}
function Yb(e) {
  return function () {
    var t = this,
      r = this[L];
    r.atom_.reportObserved();
    var n = r.dehanceValues_(r.values_),
      i = arguments[0];
    return (
      (arguments[0] = function (s, o, a) {
        return i(s, o, a, t);
      }),
      n[e].apply(n, arguments)
    );
  };
}
var LI = Xt("ObservableArrayAdministration", xd);
function Oe(e) {
  return Ys(e) && LI(e[L]);
}
var DI = {},
  Bt = "add",
  ps = "delete",
  Rd = (function () {
    function e(r, n, i) {
      var s = this;
      n === void 0 && (n = mr),
        i === void 0 && (i = "ObservableMap"),
        (this.enhancer_ = void 0),
        (this.name_ = void 0),
        (this[L] = DI),
        (this.data_ = void 0),
        (this.hasMap_ = void 0),
        (this.keysAtom_ = void 0),
        (this.interceptors_ = void 0),
        (this.changeListeners_ = void 0),
        (this.dehancer = void 0),
        (this.enhancer_ = n),
        (this.name_ = i),
        Le(Map) || U(18),
        tr(function () {
          (s.keysAtom_ = Js("ObservableMap.keys()")),
            (s.data_ = new Map()),
            (s.hasMap_ = new Map()),
            r && s.merge(r);
        });
    }
    var t = e.prototype;
    return (
      (t.has_ = function (n) {
        return this.data_.has(n);
      }),
      (t.has = function (n) {
        var i = this;
        if (!R.trackingDerivation) return this.has_(n);
        var s = this.hasMap_.get(n);
        if (!s) {
          var o = (s = new Ft(this.has_(n), Zs, "ObservableMap.key?", !1));
          this.hasMap_.set(n, o),
            Ad(o, function () {
              return i.hasMap_.delete(n);
            });
        }
        return s.get();
      }),
      (t.set = function (n, i) {
        var s = this.has_(n);
        if (Fe(this)) {
          var o = Ge(this, {
            type: s ? ft : Bt,
            object: this,
            newValue: i,
            name: n,
          });
          if (!o) return this;
          i = o.newValue;
        }
        return s ? this.updateValue_(n, i) : this.addValue_(n, i), this;
      }),
      (t.delete = function (n) {
        var i = this;
        if ((this.keysAtom_, Fe(this))) {
          var s = Ge(this, { type: ps, object: this, name: n });
          if (!s) return !1;
        }
        if (this.has_(n)) {
          var o = Yn(),
            a = Je(this),
            c =
              a || o
                ? {
                    observableKind: "map",
                    debugObjectName: this.name_,
                    type: ps,
                    object: this,
                    oldValue: this.data_.get(n).value_,
                    name: n,
                  }
                : null;
          return (
            ut(function () {
              var u;
              i.keysAtom_.reportChanged(),
                (u = i.hasMap_.get(n)) == null || u.setNewValue_(!1);
              var l = i.data_.get(n);
              l.setNewValue_(void 0), i.data_.delete(n);
            }),
            a && Ze(this, c),
            !0
          );
        }
        return !1;
      }),
      (t.updateValue_ = function (n, i) {
        var s = this.data_.get(n);
        if (((i = s.prepareNewValue_(i)), i !== R.UNCHANGED)) {
          var o = Yn(),
            a = Je(this),
            c =
              a || o
                ? {
                    observableKind: "map",
                    debugObjectName: this.name_,
                    type: ft,
                    object: this,
                    oldValue: s.value_,
                    name: n,
                    newValue: i,
                  }
                : null;
          s.setNewValue_(i), a && Ze(this, c);
        }
      }),
      (t.addValue_ = function (n, i) {
        var s = this;
        this.keysAtom_,
          ut(function () {
            var u,
              l = new Ft(i, s.enhancer_, "ObservableMap.key", !1);
            s.data_.set(n, l),
              (i = l.value_),
              (u = s.hasMap_.get(n)) == null || u.setNewValue_(!0),
              s.keysAtom_.reportChanged();
          });
        var o = Yn(),
          a = Je(this),
          c =
            a || o
              ? {
                  observableKind: "map",
                  debugObjectName: this.name_,
                  type: Bt,
                  object: this,
                  name: n,
                  newValue: i,
                }
              : null;
        a && Ze(this, c);
      }),
      (t.get = function (n) {
        return this.has(n)
          ? this.dehanceValue_(this.data_.get(n).get())
          : this.dehanceValue_(void 0);
      }),
      (t.dehanceValue_ = function (n) {
        return this.dehancer !== void 0 ? this.dehancer(n) : n;
      }),
      (t.keys = function () {
        return this.keysAtom_.reportObserved(), this.data_.keys();
      }),
      (t.values = function () {
        var n = this,
          i = this.keys();
        return Rg({
          next: function () {
            var o = i.next(),
              a = o.done,
              c = o.value;
            return { done: a, value: a ? void 0 : n.get(c) };
          },
        });
      }),
      (t.entries = function () {
        var n = this,
          i = this.keys();
        return Rg({
          next: function () {
            var o = i.next(),
              a = o.done,
              c = o.value;
            return { done: a, value: a ? void 0 : [c, n.get(c)] };
          },
        });
      }),
      (t[Symbol.iterator] = function () {
        return this.entries();
      }),
      (t.forEach = function (n, i) {
        for (var s = Jr(this), o; !(o = s()).done; ) {
          var a = o.value,
            c = a[0],
            u = a[1];
          n.call(i, u, c, this);
        }
      }),
      (t.merge = function (n) {
        var i = this;
        return (
          ve(n) && (n = new Map(n)),
          ut(function () {
            Ct(n)
              ? Nx(n).forEach(function (s) {
                  return i.set(s, n[s]);
                })
              : Array.isArray(n)
                ? n.forEach(function (s) {
                    var o = s[0],
                      a = s[1];
                    return i.set(o, a);
                  })
                : An(n)
                  ? (kx(n) || U(19, n),
                    n.forEach(function (s, o) {
                      return i.set(o, s);
                    }))
                  : n != null && U(20, n);
          }),
          this
        );
      }),
      (t.clear = function () {
        var n = this;
        ut(function () {
          to(function () {
            for (var i = Jr(n.keys()), s; !(s = i()).done; ) {
              var o = s.value;
              n.delete(o);
            }
          });
        });
      }),
      (t.replace = function (n) {
        var i = this;
        return (
          ut(function () {
            for (
              var s = MI(n), o = new Map(), a = !1, c = Jr(i.data_.keys()), u;
              !(u = c()).done;

            ) {
              var l = u.value;
              if (!s.has(l)) {
                var d = i.delete(l);
                if (d) a = !0;
                else {
                  var f = i.data_.get(l);
                  o.set(l, f);
                }
              }
            }
            for (var h = Jr(s.entries()), _; !(_ = h()).done; ) {
              var p = _.value,
                g = p[0],
                y = p[1],
                E = i.data_.has(g);
              if ((i.set(g, y), i.data_.has(g))) {
                var A = i.data_.get(g);
                o.set(g, A), E || (a = !0);
              }
            }
            if (!a)
              if (i.data_.size !== o.size) i.keysAtom_.reportChanged();
              else
                for (
                  var b = i.data_.keys(),
                    S = o.keys(),
                    w = b.next(),
                    C = S.next();
                  !w.done;

                ) {
                  if (w.value !== C.value) {
                    i.keysAtom_.reportChanged();
                    break;
                  }
                  (w = b.next()), (C = S.next());
                }
            i.data_ = o;
          }),
          this
        );
      }),
      (t.toString = function () {
        return "[object ObservableMap]";
      }),
      (t.toJSON = function () {
        return Array.from(this);
      }),
      (t.observe_ = function (n, i) {
        return pi(this, n);
      }),
      (t.intercept_ = function (n) {
        return hi(this, n);
      }),
      On(e, [
        {
          key: "size",
          get: function () {
            return this.keysAtom_.reportObserved(), this.data_.size;
          },
        },
        {
          key: Symbol.toStringTag,
          get: function () {
            return "Map";
          },
        },
      ])
    );
  })(),
  ve = Xt("ObservableMap", Rd);
function Rg(e) {
  return (e[Symbol.toStringTag] = "MapIterator"), kd(e);
}
function MI(e) {
  if (An(e) || ve(e)) return e;
  if (Array.isArray(e)) return new Map(e);
  if (Ct(e)) {
    var t = new Map();
    for (var r in e) t.set(r, e[r]);
    return t;
  } else return U(21, e);
}
var jI = {},
  Id = (function () {
    function e(r, n, i) {
      var s = this;
      n === void 0 && (n = mr),
        i === void 0 && (i = "ObservableSet"),
        (this.name_ = void 0),
        (this[L] = jI),
        (this.data_ = new Set()),
        (this.atom_ = void 0),
        (this.changeListeners_ = void 0),
        (this.interceptors_ = void 0),
        (this.dehancer = void 0),
        (this.enhancer_ = void 0),
        (this.name_ = i),
        Le(Set) || U(22),
        (this.enhancer_ = function (o, a) {
          return n(o, a, i);
        }),
        tr(function () {
          (s.atom_ = Js(s.name_)), r && s.replace(r);
        });
    }
    var t = e.prototype;
    return (
      (t.dehanceValue_ = function (n) {
        return this.dehancer !== void 0 ? this.dehancer(n) : n;
      }),
      (t.clear = function () {
        var n = this;
        ut(function () {
          to(function () {
            for (var i = Jr(n.data_.values()), s; !(s = i()).done; ) {
              var o = s.value;
              n.delete(o);
            }
          });
        });
      }),
      (t.forEach = function (n, i) {
        for (var s = Jr(this), o; !(o = s()).done; ) {
          var a = o.value;
          n.call(i, a, a, this);
        }
      }),
      (t.add = function (n) {
        var i = this;
        if ((this.atom_, Fe(this))) {
          var s = Ge(this, { type: Bt, object: this, newValue: n });
          if (!s) return this;
          n = s.newValue;
        }
        if (!this.has(n)) {
          ut(function () {
            i.data_.add(i.enhancer_(n, void 0)), i.atom_.reportChanged();
          });
          var o = !1,
            a = Je(this),
            c =
              a || o
                ? {
                    observableKind: "set",
                    debugObjectName: this.name_,
                    type: Bt,
                    object: this,
                    newValue: n,
                  }
                : null;
          a && Ze(this, c);
        }
        return this;
      }),
      (t.delete = function (n) {
        var i = this;
        if (Fe(this)) {
          var s = Ge(this, { type: ps, object: this, oldValue: n });
          if (!s) return !1;
        }
        if (this.has(n)) {
          var o = !1,
            a = Je(this),
            c =
              a || o
                ? {
                    observableKind: "set",
                    debugObjectName: this.name_,
                    type: ps,
                    object: this,
                    oldValue: n,
                  }
                : null;
          return (
            ut(function () {
              i.atom_.reportChanged(), i.data_.delete(n);
            }),
            a && Ze(this, c),
            !0
          );
        }
        return !1;
      }),
      (t.has = function (n) {
        return (
          this.atom_.reportObserved(), this.data_.has(this.dehanceValue_(n))
        );
      }),
      (t.entries = function () {
        var n = this.values();
        return Ig({
          next: function () {
            var s = n.next(),
              o = s.value,
              a = s.done;
            return a ? { value: void 0, done: a } : { value: [o, o], done: a };
          },
        });
      }),
      (t.keys = function () {
        return this.values();
      }),
      (t.values = function () {
        this.atom_.reportObserved();
        var n = this,
          i = this.data_.values();
        return Ig({
          next: function () {
            var o = i.next(),
              a = o.value,
              c = o.done;
            return c
              ? { value: void 0, done: c }
              : { value: n.dehanceValue_(a), done: c };
          },
        });
      }),
      (t.intersection = function (n) {
        if (bt(n) && !fe(n)) return n.intersection(this);
        var i = new Set(this);
        return i.intersection(n);
      }),
      (t.union = function (n) {
        if (bt(n) && !fe(n)) return n.union(this);
        var i = new Set(this);
        return i.union(n);
      }),
      (t.difference = function (n) {
        return new Set(this).difference(n);
      }),
      (t.symmetricDifference = function (n) {
        if (bt(n) && !fe(n)) return n.symmetricDifference(this);
        var i = new Set(this);
        return i.symmetricDifference(n);
      }),
      (t.isSubsetOf = function (n) {
        return new Set(this).isSubsetOf(n);
      }),
      (t.isSupersetOf = function (n) {
        return new Set(this).isSupersetOf(n);
      }),
      (t.isDisjointFrom = function (n) {
        if (bt(n) && !fe(n)) return n.isDisjointFrom(this);
        var i = new Set(this);
        return i.isDisjointFrom(n);
      }),
      (t.replace = function (n) {
        var i = this;
        return (
          fe(n) && (n = new Set(n)),
          ut(function () {
            Array.isArray(n)
              ? (i.clear(),
                n.forEach(function (s) {
                  return i.add(s);
                }))
              : bt(n)
                ? (i.clear(),
                  n.forEach(function (s) {
                    return i.add(s);
                  }))
                : n != null && U("Cannot initialize set from " + n);
          }),
          this
        );
      }),
      (t.observe_ = function (n, i) {
        return pi(this, n);
      }),
      (t.intercept_ = function (n) {
        return hi(this, n);
      }),
      (t.toJSON = function () {
        return Array.from(this);
      }),
      (t.toString = function () {
        return "[object ObservableSet]";
      }),
      (t[Symbol.iterator] = function () {
        return this.values();
      }),
      On(e, [
        {
          key: "size",
          get: function () {
            return this.atom_.reportObserved(), this.data_.size;
          },
        },
        {
          key: Symbol.toStringTag,
          get: function () {
            return "Set";
          },
        },
      ])
    );
  })(),
  fe = Xt("ObservableSet", Id);
function Ig(e) {
  return (e[Symbol.toStringTag] = "SetIterator"), kd(e);
}
var Tg = Object.create(null),
  Pg = "remove",
  Jb = (function () {
    function e(r, n, i, s) {
      n === void 0 && (n = new Map()),
        s === void 0 && (s = pR),
        (this.target_ = void 0),
        (this.values_ = void 0),
        (this.name_ = void 0),
        (this.defaultAnnotation_ = void 0),
        (this.keysAtom_ = void 0),
        (this.changeListeners_ = void 0),
        (this.interceptors_ = void 0),
        (this.proxy_ = void 0),
        (this.isPlainObject_ = void 0),
        (this.appliedAnnotations_ = void 0),
        (this.pendingKeys_ = void 0),
        (this.target_ = r),
        (this.values_ = n),
        (this.name_ = i),
        (this.defaultAnnotation_ = s),
        (this.keysAtom_ = new er("ObservableObject.keys")),
        (this.isPlainObject_ = Ct(this.target_));
    }
    var t = e.prototype;
    return (
      (t.getObservablePropValue_ = function (n) {
        return this.values_.get(n).get();
      }),
      (t.setObservablePropValue_ = function (n, i) {
        var s = this.values_.get(n);
        if (s instanceof Qe) return s.set(i), !0;
        if (Fe(this)) {
          var o = Ge(this, {
            type: ft,
            object: this.proxy_ || this.target_,
            name: n,
            newValue: i,
          });
          if (!o) return null;
          i = o.newValue;
        }
        if (((i = s.prepareNewValue_(i)), i !== R.UNCHANGED)) {
          var a = Je(this),
            c = !1,
            u =
              a || c
                ? {
                    type: ft,
                    observableKind: "object",
                    debugObjectName: this.name_,
                    object: this.proxy_ || this.target_,
                    oldValue: s.value_,
                    name: n,
                    newValue: i,
                  }
                : null;
          s.setNewValue_(i), a && Ze(this, u);
        }
        return !0;
      }),
      (t.get_ = function (n) {
        return (
          R.trackingDerivation && !yt(this.target_, n) && this.has_(n),
          this.target_[n]
        );
      }),
      (t.set_ = function (n, i, s) {
        return (
          s === void 0 && (s = !1),
          yt(this.target_, n)
            ? this.values_.has(n)
              ? this.setObservablePropValue_(n, i)
              : s
                ? Reflect.set(this.target_, n, i)
                : ((this.target_[n] = i), !0)
            : this.extend_(
                n,
                { value: i, enumerable: !0, writable: !0, configurable: !0 },
                this.defaultAnnotation_,
                s,
              )
        );
      }),
      (t.has_ = function (n) {
        if (!R.trackingDerivation) return n in this.target_;
        this.pendingKeys_ || (this.pendingKeys_ = new Map());
        var i = this.pendingKeys_.get(n);
        return (
          i ||
            ((i = new Ft(n in this.target_, Zs, "ObservableObject.key?", !1)),
            this.pendingKeys_.set(n, i)),
          i.get()
        );
      }),
      (t.make_ = function (n, i) {
        if ((i === !0 && (i = this.defaultAnnotation_), i !== !1)) {
          if (!(n in this.target_)) {
            var s;
            if ((s = this.target_[lt]) != null && s[n]) return;
            U(1, i.annotationType_, this.name_ + "." + n.toString());
          }
          for (var o = this.target_; o && o !== ci; ) {
            var a = as(o, n);
            if (a) {
              var c = i.make_(this, n, a, o);
              if (c === 0) return;
              if (c === 1) break;
            }
            o = Object.getPrototypeOf(o);
          }
          Ng(this, i, n);
        }
      }),
      (t.extend_ = function (n, i, s, o) {
        if (
          (o === void 0 && (o = !1),
          s === !0 && (s = this.defaultAnnotation_),
          s === !1)
        )
          return this.defineProperty_(n, i, o);
        var a = s.extend_(this, n, i, o);
        return a && Ng(this, s, n), a;
      }),
      (t.defineProperty_ = function (n, i, s) {
        s === void 0 && (s = !1), this.keysAtom_;
        try {
          we();
          var o = this.delete_(n);
          if (!o) return o;
          if (Fe(this)) {
            var a = Ge(this, {
              object: this.proxy_ || this.target_,
              name: n,
              type: Bt,
              newValue: i.value,
            });
            if (!a) return null;
            var c = a.newValue;
            i.value !== c && (i = Ht({}, i, { value: c }));
          }
          if (s) {
            if (!Reflect.defineProperty(this.target_, n, i)) return !1;
          } else dt(this.target_, n, i);
          this.notifyPropertyAddition_(n, i.value);
        } finally {
          Ce();
        }
        return !0;
      }),
      (t.defineObservableProperty_ = function (n, i, s, o) {
        o === void 0 && (o = !1), this.keysAtom_;
        try {
          we();
          var a = this.delete_(n);
          if (!a) return a;
          if (Fe(this)) {
            var c = Ge(this, {
              object: this.proxy_ || this.target_,
              name: n,
              type: Bt,
              newValue: i,
            });
            if (!c) return null;
            i = c.newValue;
          }
          var u = kg(n),
            l = {
              configurable: R.safeDescriptors ? this.isPlainObject_ : !0,
              enumerable: !0,
              get: u.get,
              set: u.set,
            };
          if (o) {
            if (!Reflect.defineProperty(this.target_, n, l)) return !1;
          } else dt(this.target_, n, l);
          var d = new Ft(i, s, "ObservableObject.key", !1);
          this.values_.set(n, d), this.notifyPropertyAddition_(n, d.value_);
        } finally {
          Ce();
        }
        return !0;
      }),
      (t.defineComputedProperty_ = function (n, i, s) {
        s === void 0 && (s = !1), this.keysAtom_;
        try {
          we();
          var o = this.delete_(n);
          if (!o) return o;
          if (Fe(this)) {
            var a = Ge(this, {
              object: this.proxy_ || this.target_,
              name: n,
              type: Bt,
              newValue: void 0,
            });
            if (!a) return null;
          }
          i.name || (i.name = "ObservableObject.key"),
            (i.context = this.proxy_ || this.target_);
          var c = kg(n),
            u = {
              configurable: R.safeDescriptors ? this.isPlainObject_ : !0,
              enumerable: !1,
              get: c.get,
              set: c.set,
            };
          if (s) {
            if (!Reflect.defineProperty(this.target_, n, u)) return !1;
          } else dt(this.target_, n, u);
          this.values_.set(n, new Qe(i)),
            this.notifyPropertyAddition_(n, void 0);
        } finally {
          Ce();
        }
        return !0;
      }),
      (t.delete_ = function (n, i) {
        if ((i === void 0 && (i = !1), this.keysAtom_, !yt(this.target_, n)))
          return !0;
        if (Fe(this)) {
          var s = Ge(this, {
            object: this.proxy_ || this.target_,
            name: n,
            type: Pg,
          });
          if (!s) return null;
        }
        try {
          var o;
          we();
          var a = Je(this),
            c = !1,
            u = this.values_.get(n),
            l = void 0;
          if (!u && (a || c)) {
            var d;
            l = (d = as(this.target_, n)) == null ? void 0 : d.value;
          }
          if (i) {
            if (!Reflect.deleteProperty(this.target_, n)) return !1;
          } else delete this.target_[n];
          if (
            (u &&
              (this.values_.delete(n),
              u instanceof Ft && (l = u.value_),
              xb(u)),
            this.keysAtom_.reportChanged(),
            (o = this.pendingKeys_) == null ||
              (o = o.get(n)) == null ||
              o.set(n in this.target_),
            a || c)
          ) {
            var f = {
              type: Pg,
              observableKind: "object",
              object: this.proxy_ || this.target_,
              debugObjectName: this.name_,
              oldValue: l,
              name: n,
            };
            a && Ze(this, f);
          }
        } finally {
          Ce();
        }
        return !0;
      }),
      (t.observe_ = function (n, i) {
        return pi(this, n);
      }),
      (t.intercept_ = function (n) {
        return hi(this, n);
      }),
      (t.notifyPropertyAddition_ = function (n, i) {
        var s,
          o = Je(this),
          a = !1;
        if (o || a) {
          var c =
            o || a
              ? {
                  type: Bt,
                  observableKind: "object",
                  debugObjectName: this.name_,
                  object: this.proxy_ || this.target_,
                  name: n,
                  newValue: i,
                }
              : null;
          o && Ze(this, c);
        }
        (s = this.pendingKeys_) == null || (s = s.get(n)) == null || s.set(!0),
          this.keysAtom_.reportChanged();
      }),
      (t.ownKeys_ = function () {
        return this.keysAtom_.reportObserved(), un(this.target_);
      }),
      (t.keys_ = function () {
        return this.keysAtom_.reportObserved(), Object.keys(this.target_);
      }),
      e
    );
  })();
function Lr(e, t) {
  var r;
  if (yt(e, L)) return e;
  var n = (r = t?.name) != null ? r : "ObservableObject",
    i = new Jb(e, new Map(), String(n), AR(t));
  return ui(e, L, i), e;
}
var UI = Xt("ObservableObjectAdministration", Jb);
function kg(e) {
  return (
    Tg[e] ||
    (Tg[e] = {
      get: function () {
        return this[L].getObservablePropValue_(e);
      },
      set: function (r) {
        return this[L].setObservablePropValue_(e, r);
      },
    })
  );
}
function _e(e) {
  return Ys(e) ? UI(e[L]) : !1;
}
function Ng(e, t, r) {
  var n;
  (n = e.target_[lt]) == null || delete n[r];
}
var BI = Qb(0),
  qI = (function () {
    var e = !1,
      t = {};
    return (
      Object.defineProperty(t, "0", {
        set: function () {
          e = !0;
        },
      }),
      (Object.create(t)[0] = 1),
      e === !1
    );
  })(),
  Jc = 0,
  Zb = function () {};
function FI(e, t) {
  Object.setPrototypeOf
    ? Object.setPrototypeOf(e.prototype, t)
    : e.prototype.__proto__ !== void 0
      ? (e.prototype.__proto__ = t)
      : (e.prototype = t);
}
FI(Zb, Array.prototype);
var Td = (function (e) {
  function t(n, i, s, o) {
    var a;
    return (
      s === void 0 && (s = "ObservableArray"),
      o === void 0 && (o = !1),
      (a = e.call(this) || this),
      tr(function () {
        var c = new xd(s, i, o, !0);
        (c.proxy_ = a),
          sb(a, L, c),
          n && n.length && a.spliceWithArray(0, 0, n),
          qI && Object.defineProperty(a, "0", BI);
      }),
      a
    );
  }
  cb(t, e);
  var r = t.prototype;
  return (
    (r.concat = function () {
      this[L].atom_.reportObserved();
      for (var i = arguments.length, s = new Array(i), o = 0; o < i; o++)
        s[o] = arguments[o];
      return Array.prototype.concat.apply(
        this.slice(),
        s.map(function (a) {
          return Oe(a) ? a.slice() : a;
        }),
      );
    }),
    (r[Symbol.iterator] = function () {
      var n = this,
        i = 0;
      return kd({
        next: function () {
          return i < n.length
            ? { value: n[i++], done: !1 }
            : { done: !0, value: void 0 };
        },
      });
    }),
    On(t, [
      {
        key: "length",
        get: function () {
          return this[L].getArrayLength_();
        },
        set: function (i) {
          this[L].setArrayLength_(i);
        },
      },
      {
        key: Symbol.toStringTag,
        get: function () {
          return "Array";
        },
      },
    ])
  );
})(Zb);
Object.entries(hs).forEach(function (e) {
  var t = e[0],
    r = e[1];
  t !== "concat" && ui(Td.prototype, t, r);
});
function Qb(e) {
  return {
    enumerable: !1,
    configurable: !0,
    get: function () {
      return this[L].get_(e);
    },
    set: function (r) {
      this[L].set_(e, r);
    },
  };
}
function GI(e) {
  dt(Td.prototype, "" + e, Qb(e));
}
function Xb(e) {
  if (e > Jc) {
    for (var t = Jc; t < e + 100; t++) GI(t);
    Jc = e;
  }
}
Xb(1e3);
function VI(e, t, r) {
  return new Td(e, t, r);
}
function At(e, t) {
  if (typeof e == "object" && e !== null) {
    if (Oe(e)) return t !== void 0 && U(23), e[L].atom_;
    if (fe(e)) return e.atom_;
    if (ve(e)) {
      if (t === void 0) return e.keysAtom_;
      var r = e.data_.get(t) || e.hasMap_.get(t);
      return r || U(25, t, gs(e)), r;
    }
    if (_e(e)) {
      if (!t) return U(26);
      var n = e[L].values_.get(t);
      return n || U(27, t, gs(e)), n;
    }
    if (Sd(e) || br(e) || ds(e)) return e;
  } else if (Le(e) && ds(e[L])) return e[L];
  U(28);
}
function Ot(e, t) {
  if ((e || U(29), t !== void 0)) return Ot(At(e, t));
  if (Sd(e) || br(e) || ds(e) || ve(e) || fe(e)) return e;
  if (e[L]) return e[L];
  U(24, e);
}
function gs(e, t) {
  var r;
  if (t !== void 0) r = At(e, t);
  else {
    if (dn(e)) return e.name;
    _e(e) || ve(e) || fe(e) ? (r = Ot(e)) : (r = At(e));
  }
  return r.name_;
}
function tr(e) {
  var t = Nr(),
    r = Xs(!0);
  we();
  try {
    return e();
  } finally {
    Ce(), eo(r), St(t);
  }
}
var Lg = ci.toString;
function Pd(e, t, r) {
  return r === void 0 && (r = -1), pl(e, t, r);
}
function pl(e, t, r, n, i) {
  if (e === t) return e !== 0 || 1 / e === 1 / t;
  if (e == null || t == null) return !1;
  if (e !== e) return t !== t;
  var s = typeof e;
  if (s !== "function" && s !== "object" && typeof t != "object") return !1;
  var o = Lg.call(e);
  if (o !== Lg.call(t)) return !1;
  switch (o) {
    case "[object RegExp]":
    case "[object String]":
      return "" + e == "" + t;
    case "[object Number]":
      return +e != +e ? +t != +t : +e == 0 ? 1 / +e === 1 / t : +e == +t;
    case "[object Date]":
    case "[object Boolean]":
      return +e == +t;
    case "[object Symbol]":
      return (
        typeof Symbol < "u" && Symbol.valueOf.call(e) === Symbol.valueOf.call(t)
      );
    case "[object Map]":
    case "[object Set]":
      r >= 0 && r++;
      break;
  }
  (e = Dg(e)), (t = Dg(t));
  var a = o === "[object Array]";
  if (!a) {
    if (typeof e != "object" || typeof t != "object") return !1;
    var c = e.constructor,
      u = t.constructor;
    if (
      c !== u &&
      !(Le(c) && c instanceof c && Le(u) && u instanceof u) &&
      "constructor" in e &&
      "constructor" in t
    )
      return !1;
  }
  if (r === 0) return !1;
  r < 0 && (r = -1), (n = n || []), (i = i || []);
  for (var l = n.length; l--; ) if (n[l] === e) return i[l] === t;
  if ((n.push(e), i.push(t), a)) {
    if (((l = e.length), l !== t.length)) return !1;
    for (; l--; ) if (!pl(e[l], t[l], r - 1, n, i)) return !1;
  } else {
    var d = Object.keys(e),
      f = d.length;
    if (Object.keys(t).length !== f) return !1;
    for (var h = 0; h < f; h++) {
      var _ = d[h];
      if (!(yt(t, _) && pl(e[_], t[_], r - 1, n, i))) return !1;
    }
  }
  return n.pop(), i.pop(), !0;
}
function Dg(e) {
  return Oe(e)
    ? e.slice()
    : An(e) || ve(e) || bt(e) || fe(e)
      ? Array.from(e.entries())
      : e;
}
var Mg,
  $I = ((Mg = Ks().Iterator) == null ? void 0 : Mg.prototype) || {};
function kd(e) {
  return (e[Symbol.iterator] = HI), Object.assign(Object.create($I), e);
}
function HI() {
  return this;
}
["Symbol", "Map", "Set"].forEach(function (e) {
  var t = Ks();
  typeof t[e] > "u" &&
    U("MobX requires global '" + e + "' to be available or polyfilled");
});
typeof __MOBX_DEVTOOLS_GLOBAL_HOOK__ == "object" &&
  __MOBX_DEVTOOLS_GLOBAL_HOOK__.injectMobx({
    spy: Ib,
    extras: { getDebugName: gs },
    $mobx: L,
  });
const u4 = Object.freeze(
  Object.defineProperty(
    {
      __proto__: null,
      $mobx: L,
      FlowCancellationError: io,
      ObservableMap: Rd,
      ObservableSet: Id,
      Reaction: Xe,
      _allowStateChanges: wd,
      _allowStateChangesInsideComputed: fs,
      _allowStateReadsEnd: Qr,
      _allowStateReadsStart: ro,
      _autoAction: ln,
      _endAction: yb,
      _getAdministration: Ot,
      _getGlobalState: MR,
      _interceptReads: lI,
      _isComputingDerivation: kR,
      _resetGlobalState: jR,
      _startAction: bb,
      action: Ut,
      autorun: no,
      comparer: vr,
      computed: xn,
      configure: jb,
      createAtom: Js,
      defineProperty: SI,
      entries: mI,
      extendObservable: Od,
      flow: yr,
      flowResult: uI,
      get: yI,
      getAtom: At,
      getDebugName: gs,
      getDependencyTree: Ub,
      getObserverTree: iI,
      has: $b,
      intercept: dI,
      isAction: dn,
      isBoxedObservable: Cd,
      isComputed: pI,
      isComputedProp: gI,
      isFlow: fn,
      isFlowCancellationError: aI,
      isObservable: so,
      isObservableArray: Oe,
      isObservableMap: ve,
      isObservableObject: _e,
      isObservableProp: _I,
      isObservableSet: fe,
      keys: ri,
      makeAutoObservable: TI,
      makeObservable: Kb,
      observable: de,
      observe: EI,
      onBecomeObserved: Db,
      onBecomeUnobserved: Ad,
      onReactionError: VR,
      override: zx,
      ownKeys: Hb,
      reaction: QR,
      remove: bI,
      runInAction: fs,
      set: Vb,
      spy: Ib,
      toJS: AI,
      trace: OI,
      transaction: ut,
      untracked: to,
      values: vI,
      when: zb,
    },
    Symbol.toStringTag,
    { value: "Module" },
  ),
);
if (!v.useState)
  throw new Error("mobx-react-lite requires React with Hooks support");
if (!Kb)
  throw new Error(
    "mobx-react-lite@3 requires mobx at least version 6 to be available",
  );
function zI(e) {
  e();
}
function WI(e) {
  e || (e = zI), jb({ reactionScheduler: e });
}
function KI(e) {
  return Ub(e);
}
var YI = 1e4,
  JI = 1e4,
  ZI = (function () {
    function e(t) {
      var r = this;
      Object.defineProperty(this, "finalize", {
        enumerable: !0,
        configurable: !0,
        writable: !0,
        value: t,
      }),
        Object.defineProperty(this, "registrations", {
          enumerable: !0,
          configurable: !0,
          writable: !0,
          value: new Map(),
        }),
        Object.defineProperty(this, "sweepTimeout", {
          enumerable: !0,
          configurable: !0,
          writable: !0,
          value: void 0,
        }),
        Object.defineProperty(this, "sweep", {
          enumerable: !0,
          configurable: !0,
          writable: !0,
          value: function (n) {
            n === void 0 && (n = YI),
              clearTimeout(r.sweepTimeout),
              (r.sweepTimeout = void 0);
            var i = Date.now();
            r.registrations.forEach(function (s, o) {
              i - s.registeredAt >= n &&
                (r.finalize(s.value), r.registrations.delete(o));
            }),
              r.registrations.size > 0 && r.scheduleSweep();
          },
        }),
        Object.defineProperty(this, "finalizeAllImmediately", {
          enumerable: !0,
          configurable: !0,
          writable: !0,
          value: function () {
            r.sweep(0);
          },
        });
    }
    return (
      Object.defineProperty(e.prototype, "register", {
        enumerable: !1,
        configurable: !0,
        writable: !0,
        value: function (t, r, n) {
          this.registrations.set(n, { value: r, registeredAt: Date.now() }),
            this.scheduleSweep();
        },
      }),
      Object.defineProperty(e.prototype, "unregister", {
        enumerable: !1,
        configurable: !0,
        writable: !0,
        value: function (t) {
          this.registrations.delete(t);
        },
      }),
      Object.defineProperty(e.prototype, "scheduleSweep", {
        enumerable: !1,
        configurable: !0,
        writable: !0,
        value: function () {
          this.sweepTimeout === void 0 &&
            (this.sweepTimeout = setTimeout(this.sweep, JI));
        },
      }),
      e
    );
  })(),
  QI = typeof FinalizationRegistry < "u" ? FinalizationRegistry : ZI,
  gl = new QI(function (e) {
    var t;
    (t = e.reaction) === null || t === void 0 || t.dispose(),
      (e.reaction = null);
  }),
  Zc = { exports: {} },
  Qc = {};
/**
 * @license React
 * use-sync-external-store-shim.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var jg;
function XI() {
  if (jg) return Qc;
  jg = 1;
  var e = Fl();
  function t(d, f) {
    return (d === f && (d !== 0 || 1 / d === 1 / f)) || (d !== d && f !== f);
  }
  var r = typeof Object.is == "function" ? Object.is : t,
    n = e.useState,
    i = e.useEffect,
    s = e.useLayoutEffect,
    o = e.useDebugValue;
  function a(d, f) {
    var h = f(),
      _ = n({ inst: { value: h, getSnapshot: f } }),
      p = _[0].inst,
      g = _[1];
    return (
      s(
        function () {
          (p.value = h), (p.getSnapshot = f), c(p) && g({ inst: p });
        },
        [d, h, f],
      ),
      i(
        function () {
          return (
            c(p) && g({ inst: p }),
            d(function () {
              c(p) && g({ inst: p });
            })
          );
        },
        [d],
      ),
      o(h),
      h
    );
  }
  function c(d) {
    var f = d.getSnapshot;
    d = d.value;
    try {
      var h = f();
      return !r(d, h);
    } catch {
      return !0;
    }
  }
  function u(d, f) {
    return f();
  }
  var l =
    typeof window > "u" ||
    typeof window.document > "u" ||
    typeof window.document.createElement > "u"
      ? u
      : a;
  return (
    (Qc.useSyncExternalStore =
      e.useSyncExternalStore !== void 0 ? e.useSyncExternalStore : l),
    Qc
  );
}
var Ug;
function eT() {
  return Ug || ((Ug = 1), (Zc.exports = XI())), Zc.exports;
}
var tT = eT();
function Bg(e) {
  e.reaction = new Xe("observer".concat(e.name), function () {
    var t;
    (e.stateVersion = Symbol()),
      (t = e.onStoreChange) === null || t === void 0 || t.call(e);
  });
}
function rT(e, t) {
  t === void 0 && (t = "observed");
  var r = ne.useRef(null);
  if (!r.current) {
    var n = {
      reaction: null,
      onStoreChange: null,
      stateVersion: Symbol(),
      name: t,
      subscribe: function (a) {
        return (
          gl.unregister(n),
          (n.onStoreChange = a),
          n.reaction || (Bg(n), (n.stateVersion = Symbol())),
          function () {
            var c;
            (n.onStoreChange = null),
              (c = n.reaction) === null || c === void 0 || c.dispose(),
              (n.reaction = null);
          }
        );
      },
      getSnapshot: function () {
        return n.stateVersion;
      },
    };
    r.current = n;
  }
  var i = r.current;
  i.reaction || (Bg(i), gl.register(r, i, i)),
    ne.useDebugValue(i.reaction, KI),
    tT.useSyncExternalStore(i.subscribe, i.getSnapshot, i.getSnapshot);
  var s, o;
  if (
    (i.reaction.track(function () {
      try {
        s = e();
      } catch (a) {
        o = a;
      }
    }),
    o)
  )
    throw o;
  return s;
}
var Xc,
  eu,
  ey = typeof Symbol == "function" && Symbol.for;
eu =
  (Xc = Object.getOwnPropertyDescriptor(function () {}, "name")) === null ||
  Xc === void 0
    ? void 0
    : Xc.configurable;
ey
  ? Symbol.for("react.forward_ref")
  : typeof v.forwardRef == "function" &&
    v.forwardRef(function (e) {
      return null;
    }).$$typeof;
ey
  ? Symbol.for("react.memo")
  : typeof v.memo == "function" &&
    v.memo(function (e) {
      return null;
    }).$$typeof;
var tu;
WI($l.unstable_batchedUpdates);
tu = gl.finalizeAllImmediately;
function nT(e, t) {
  return t === void 0 && (t = "observed"), rT(e, t);
}
const ty = v.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE;
if (!ty) throw new Error("Missing react shared internals. Check version.");
function Nd() {
  const e = ty?.H;
  return e != null && e.useState !== e.useReducer;
}
function ry(e, t) {
  return cT(de.box(e, { deep: !1, equals: t?.equals }));
}
function l4(e) {
  return nT(() => gi(e));
}
function d4(e, t) {
  const r = xn(() => gi(e), t);
  return Ld(() => r.get());
}
function f4(e) {
  if (Nd())
    throw new Error(
      "[signal] Cannot run effect directly within React component",
    );
  let t;
  const r = no(() => {
    t?.(), (t = gi(e));
  });
  return () => {
    r(), t?.();
  };
}
function iT(e) {
  return to(() => gi(e));
}
function sT(e) {
  return zb(() => gi(e));
}
function h4(e) {
  return fs(e);
}
function oT(e, t, r, n) {
  let i;
  const s = Js(
    e,
    () => {
      i = t(() => {
        ny(), s.reportChanged();
      });
    },
    () => {
      i?.();
    },
  );
  return Ld(() => (s.reportObserved(), r()));
}
function Ld(e) {
  return () => (uT(), e());
}
function aT(e) {
  ny(),
    fs(() => {
      this._observable.set(
        typeof e == "function" ? e(this._observable.get()) : e,
      );
    });
}
function cT(e) {
  const t = Ld(() => e.get());
  return (t._observable = e), (t.set = aT), t;
}
let _s = 0;
function gi(e) {
  try {
    return _s++, e();
  } finally {
    _s--;
  }
}
function uT() {
  !_s &&
    Nd() &&
    _l(
      new Error(
        "[signal] Must read signal with useObserve() or untracked() within React component",
      ),
    );
}
function ny() {
  _s &&
    _l(
      new Error(
        "[signal] Cannot update signal value directly within useObserve(), computed() or effect()",
      ),
    ),
    Nd() &&
      _l(
        new Error(
          "[signal] Cannot update signal value directly within React component",
        ),
      );
}
function _l(e) {
  x.addError(e);
}
function p4(e, t) {
  const r = eb(e),
    n = t,
    i = new pv(r, {
      ...n,
      notifyOnChangeProps: ["data", "isLoading", "error"],
    }),
    s = r.defaultQueryOptions(n);
  return oT(
    t.queryKey.join(":"),
    (o) => {
      let a = !1;
      const c = i.subscribe(() => {
        a && o();
      });
      return (a = !0), c;
    },
    () => {
      const { data: o, isLoading: a, error: c } = i.getOptimisticResult(s);
      return { data: o, isLoading: a, error: c };
    },
  );
}
const lT = "chatgpt.com/ces",
  dT = "https",
  fT = `${dT}://${lT}`;
function qg(e) {
  return Array.isArray(e)
    ? e.reduce((t, r) => ((t[r.key] = r.value), t), {})
    : e;
}
var Mt = ((e) => (
  (e.DEFAULT = "default"),
  (e.INTERNAL = "internal"),
  (e.CODEX = "Wham"),
  (e.JAWBONE = "jawbone"),
  (e.MOONSHINE = "moonshine"),
  (e.CUSTOMIZE_CHATGPT = "customize_chatgpt"),
  (e.WEB_SANDBOX = "web_sandbox"),
  (e.CANVAS = "canvas"),
  (e.COT_SUMMARIZER = "cot_summarizer"),
  (e.CLASSMATES = "classmates"),
  (e.REFERRALS = "referrals"),
  (e.STUDENTS = "students"),
  (e.TEAMS = "teams"),
  (e.WEBSOCKET = "ws"),
  e
))(Mt || {});
class Fg {
  counterMap = new Map();
  histMap = new Map();
}
class hT {
  metrics = new Fg();
  postUrl = `${fT}/statsc/flush`;
  postInterval = 3e4;
  maxPostErrors = 10;
  isScheduled = !1;
  numMetricPostErrors = 0;
  numLostMetrics = 0;
  count(t, r, n = {}, i = 1) {
    n = qg(n);
    const s = this.makeKey(t, r, n);
    var o = this.metrics.counterMap;
    const a = o.get(s);
    a
      ? (a.value += i)
      : o.set(s, { namespace: t, metric: r, tags: n, value: i }),
      this.scheduleIfNeeded();
  }
  hist(t, r, n = {}, i) {
    n = qg(n);
    const s = this.makeKey(t, r, n);
    var o = this.metrics.histMap;
    const a = o.get(s);
    a
      ? a.values.push(i)
      : o.set(s, { namespace: t, metric: r, tags: n, values: [i] }),
      this.scheduleIfNeeded();
  }
  makeKey(t, r, n) {
    const i = Object.entries(n)
      .map(([s, o]) => `${s}=${o}`)
      .sort()
      .join(",");
    return `${t}:${r}:${i}`;
  }
  scheduleIfNeeded() {
    this.isScheduled || ((this.isScheduled = !0), this.schedule());
  }
  schedule() {
    setTimeout(() => {
      this.postMetrics();
    }, this.postInterval);
  }
  hasPendingMetrics() {
    return (
      this.metrics.counterMap.size > 0 ||
      this.metrics.histMap.size > 0 ||
      this.numMetricPostErrors > 0
    );
  }
  async postMetrics() {
    var t = this.metrics;
    this.metrics = new Fg();
    var r = t.counterMap.size + t.histMap.size,
      n = Array.from(t.counterMap.values());
    this.numMetricPostErrors > 0 &&
      (n.push({
        namespace: "internal",
        metric: "post_errors",
        tags: {},
        value: this.numMetricPostErrors,
      }),
      n.push({
        namespace: "internal",
        metric: "lost_metrics",
        tags: {},
        value: this.numLostMetrics,
      }));
    const i = {
        counters: n,
        histograms: Array.from(t.histMap.values()),
        client_type: "web",
      },
      s = JSON.stringify(i);
    try {
      await oe.post(this.postUrl, i, { authOption: ee.Anonymous }),
        (this.numMetricPostErrors = 0);
    } catch (o) {
      o instanceof Ae || x.addError(o, { json: s }),
        this.numMetricPostErrors++,
        (this.numLostMetrics += r),
        this.numMetricPostErrors > this.maxPostErrors &&
          (x.addAction(
            `Exceeded maximum number of post errors (${this.maxPostErrors}). Dropping ${this.numLostMetrics} metrics.`,
          ),
          (this.numMetricPostErrors = 0),
          (this.numLostMetrics = 0));
    }
    this.hasPendingMetrics() ? this.schedule() : (this.isScheduled = !1);
  }
}
const ur = new hT();
var ki = { exports: {} },
  Gg;
function pT() {
  if (Gg) return ki.exports;
  Gg = 1;
  var e = typeof Reflect == "object" ? Reflect : null,
    t =
      e && typeof e.apply == "function"
        ? e.apply
        : function (S, w, C) {
            return Function.prototype.apply.call(S, w, C);
          },
    r;
  e && typeof e.ownKeys == "function"
    ? (r = e.ownKeys)
    : Object.getOwnPropertySymbols
      ? (r = function (S) {
          return Object.getOwnPropertyNames(S).concat(
            Object.getOwnPropertySymbols(S),
          );
        })
      : (r = function (S) {
          return Object.getOwnPropertyNames(S);
        });
  function n(b) {
    console && console.warn && console.warn(b);
  }
  var i =
    Number.isNaN ||
    function (S) {
      return S !== S;
    };
  function s() {
    s.init.call(this);
  }
  (ki.exports = s),
    (ki.exports.once = y),
    (s.EventEmitter = s),
    (s.prototype._events = void 0),
    (s.prototype._eventsCount = 0),
    (s.prototype._maxListeners = void 0);
  var o = 10;
  function a(b) {
    if (typeof b != "function")
      throw new TypeError(
        'The "listener" argument must be of type Function. Received type ' +
          typeof b,
      );
  }
  Object.defineProperty(s, "defaultMaxListeners", {
    enumerable: !0,
    get: function () {
      return o;
    },
    set: function (b) {
      if (typeof b != "number" || b < 0 || i(b))
        throw new RangeError(
          'The value of "defaultMaxListeners" is out of range. It must be a non-negative number. Received ' +
            b +
            ".",
        );
      o = b;
    },
  }),
    (s.init = function () {
      (this._events === void 0 ||
        this._events === Object.getPrototypeOf(this)._events) &&
        ((this._events = Object.create(null)), (this._eventsCount = 0)),
        (this._maxListeners = this._maxListeners || void 0);
    }),
    (s.prototype.setMaxListeners = function (S) {
      if (typeof S != "number" || S < 0 || i(S))
        throw new RangeError(
          'The value of "n" is out of range. It must be a non-negative number. Received ' +
            S +
            ".",
        );
      return (this._maxListeners = S), this;
    });
  function c(b) {
    return b._maxListeners === void 0 ? s.defaultMaxListeners : b._maxListeners;
  }
  (s.prototype.getMaxListeners = function () {
    return c(this);
  }),
    (s.prototype.emit = function (S) {
      for (var w = [], C = 1; C < arguments.length; C++) w.push(arguments[C]);
      var O = S === "error",
        T = this._events;
      if (T !== void 0) O = O && T.error === void 0;
      else if (!O) return !1;
      if (O) {
        var I;
        if ((w.length > 0 && (I = w[0]), I instanceof Error)) throw I;
        var N = new Error(
          "Unhandled error." + (I ? " (" + I.message + ")" : ""),
        );
        throw ((N.context = I), N);
      }
      var j = T[S];
      if (j === void 0) return !1;
      if (typeof j == "function") t(j, this, w);
      else
        for (var B = j.length, F = _(j, B), C = 0; C < B; ++C) t(F[C], this, w);
      return !0;
    });
  function u(b, S, w, C) {
    var O, T, I;
    if (
      (a(w),
      (T = b._events),
      T === void 0
        ? ((T = b._events = Object.create(null)), (b._eventsCount = 0))
        : (T.newListener !== void 0 &&
            (b.emit("newListener", S, w.listener ? w.listener : w),
            (T = b._events)),
          (I = T[S])),
      I === void 0)
    )
      (I = T[S] = w), ++b._eventsCount;
    else if (
      (typeof I == "function"
        ? (I = T[S] = C ? [w, I] : [I, w])
        : C
          ? I.unshift(w)
          : I.push(w),
      (O = c(b)),
      O > 0 && I.length > O && !I.warned)
    ) {
      I.warned = !0;
      var N = new Error(
        "Possible EventEmitter memory leak detected. " +
          I.length +
          " " +
          String(S) +
          " listeners added. Use emitter.setMaxListeners() to increase limit",
      );
      (N.name = "MaxListenersExceededWarning"),
        (N.emitter = b),
        (N.type = S),
        (N.count = I.length),
        n(N);
    }
    return b;
  }
  (s.prototype.addListener = function (S, w) {
    return u(this, S, w, !1);
  }),
    (s.prototype.on = s.prototype.addListener),
    (s.prototype.prependListener = function (S, w) {
      return u(this, S, w, !0);
    });
  function l() {
    if (!this.fired)
      return (
        this.target.removeListener(this.type, this.wrapFn),
        (this.fired = !0),
        arguments.length === 0
          ? this.listener.call(this.target)
          : this.listener.apply(this.target, arguments)
      );
  }
  function d(b, S, w) {
    var C = { fired: !1, wrapFn: void 0, target: b, type: S, listener: w },
      O = l.bind(C);
    return (O.listener = w), (C.wrapFn = O), O;
  }
  (s.prototype.once = function (S, w) {
    return a(w), this.on(S, d(this, S, w)), this;
  }),
    (s.prototype.prependOnceListener = function (S, w) {
      return a(w), this.prependListener(S, d(this, S, w)), this;
    }),
    (s.prototype.removeListener = function (S, w) {
      var C, O, T, I, N;
      if ((a(w), (O = this._events), O === void 0)) return this;
      if (((C = O[S]), C === void 0)) return this;
      if (C === w || C.listener === w)
        --this._eventsCount === 0
          ? (this._events = Object.create(null))
          : (delete O[S],
            O.removeListener &&
              this.emit("removeListener", S, C.listener || w));
      else if (typeof C != "function") {
        for (T = -1, I = C.length - 1; I >= 0; I--)
          if (C[I] === w || C[I].listener === w) {
            (N = C[I].listener), (T = I);
            break;
          }
        if (T < 0) return this;
        T === 0 ? C.shift() : p(C, T),
          C.length === 1 && (O[S] = C[0]),
          O.removeListener !== void 0 && this.emit("removeListener", S, N || w);
      }
      return this;
    }),
    (s.prototype.off = s.prototype.removeListener),
    (s.prototype.removeAllListeners = function (S) {
      var w, C, O;
      if (((C = this._events), C === void 0)) return this;
      if (C.removeListener === void 0)
        return (
          arguments.length === 0
            ? ((this._events = Object.create(null)), (this._eventsCount = 0))
            : C[S] !== void 0 &&
              (--this._eventsCount === 0
                ? (this._events = Object.create(null))
                : delete C[S]),
          this
        );
      if (arguments.length === 0) {
        var T = Object.keys(C),
          I;
        for (O = 0; O < T.length; ++O)
          (I = T[O]), I !== "removeListener" && this.removeAllListeners(I);
        return (
          this.removeAllListeners("removeListener"),
          (this._events = Object.create(null)),
          (this._eventsCount = 0),
          this
        );
      }
      if (((w = C[S]), typeof w == "function")) this.removeListener(S, w);
      else if (w !== void 0)
        for (O = w.length - 1; O >= 0; O--) this.removeListener(S, w[O]);
      return this;
    });
  function f(b, S, w) {
    var C = b._events;
    if (C === void 0) return [];
    var O = C[S];
    return O === void 0
      ? []
      : typeof O == "function"
        ? w
          ? [O.listener || O]
          : [O]
        : w
          ? g(O)
          : _(O, O.length);
  }
  (s.prototype.listeners = function (S) {
    return f(this, S, !0);
  }),
    (s.prototype.rawListeners = function (S) {
      return f(this, S, !1);
    }),
    (s.listenerCount = function (b, S) {
      return typeof b.listenerCount == "function"
        ? b.listenerCount(S)
        : h.call(b, S);
    }),
    (s.prototype.listenerCount = h);
  function h(b) {
    var S = this._events;
    if (S !== void 0) {
      var w = S[b];
      if (typeof w == "function") return 1;
      if (w !== void 0) return w.length;
    }
    return 0;
  }
  s.prototype.eventNames = function () {
    return this._eventsCount > 0 ? r(this._events) : [];
  };
  function _(b, S) {
    for (var w = new Array(S), C = 0; C < S; ++C) w[C] = b[C];
    return w;
  }
  function p(b, S) {
    for (; S + 1 < b.length; S++) b[S] = b[S + 1];
    b.pop();
  }
  function g(b) {
    for (var S = new Array(b.length), w = 0; w < S.length; ++w)
      S[w] = b[w].listener || b[w];
    return S;
  }
  function y(b, S) {
    return new Promise(function (w, C) {
      function O(I) {
        b.removeListener(S, T), C(I);
      }
      function T() {
        typeof b.removeListener == "function" && b.removeListener("error", O),
          w([].slice.call(arguments));
      }
      A(b, S, T, { once: !0 }), S !== "error" && E(b, O, { once: !0 });
    });
  }
  function E(b, S, w) {
    typeof b.on == "function" && A(b, "error", S, w);
  }
  function A(b, S, w, C) {
    if (typeof b.on == "function") C.once ? b.once(S, w) : b.on(S, w);
    else if (typeof b.addEventListener == "function")
      b.addEventListener(S, function O(T) {
        C.once && b.removeEventListener(S, O), w(T);
      });
    else
      throw new TypeError(
        'The "emitter" argument must be of type EventEmitter. Received type ' +
          typeof b,
      );
  }
  return ki.exports;
}
var gT = pT();
const _T = $e(gT);
class iy {
  emitter = new _T();
  constructor() {
    this.emitter.setMaxListeners(1e3);
  }
  on(t, r) {
    return this.emitter.on(t, r), () => this.emitter.off(t, r);
  }
  off(t, r) {
    this.emitter.off(t, r);
  }
  publish(t) {
    this.emitter.emit(t.kind, t), this.emitter.emit("anyEvent", t);
  }
}
(!globalThis.EventTarget || !globalThis.Event) &&
  console.error(`
  PartySocket requires a global 'EventTarget' class to be available!
  You can polyfill this global by adding this to your code before any partysocket imports: 
  
  \`\`\`
  import 'partysocket/event-target-polyfill';
  \`\`\`
  Please file an issue at https://github.com/partykit/partykit if you're still having trouble.
`);
var sy = class extends Event {
    message;
    error;
    constructor(e, t) {
      super("error", t), (this.message = e.message), (this.error = e);
    }
  },
  oy = class extends Event {
    code;
    reason;
    wasClean = !0;
    constructor(e = 1e3, t = "", r) {
      super("close", r), (this.code = e), (this.reason = t);
    }
  },
  ru = { Event, ErrorEvent: sy, CloseEvent: oy };
function vT(e, t) {
  if (!e) throw new Error(t);
}
function mT(e) {
  return new e.constructor(e.type, e);
}
function bT(e) {
  return "data" in e
    ? new MessageEvent(e.type, e)
    : "code" in e || "reason" in e
      ? new oy(e.code || 1999, e.reason || "unknown reason", e)
      : "error" in e
        ? new sy(e.error, e)
        : new Event(e.type, e);
}
var Vg,
  yT =
    typeof process < "u" &&
    typeof ((Vg = process.versions) == null ? void 0 : Vg.node) < "u" &&
    typeof document > "u",
  Ni = yT ? bT : mT,
  ar = {
    maxReconnectionDelay: 1e4,
    minReconnectionDelay: 1e3 + Math.random() * 4e3,
    minUptime: 5e3,
    reconnectionDelayGrowFactor: 1.3,
    connectionTimeout: 4e3,
    maxRetries: Number.POSITIVE_INFINITY,
    maxEnqueuedMessages: Number.POSITIVE_INFINITY,
  },
  $g = !1,
  ST = class lr extends EventTarget {
    _ws;
    _retryCount = -1;
    _uptimeTimeout;
    _connectTimeout;
    _shouldReconnect = !0;
    _connectLock = !1;
    _binaryType = "blob";
    _closeCalled = !1;
    _messageQueue = [];
    _debugLogger = console.log.bind(console);
    _url;
    _protocols;
    _options;
    constructor(t, r, n = {}) {
      super(),
        (this._url = t),
        (this._protocols = r),
        (this._options = n),
        this._options.startClosed && (this._shouldReconnect = !1),
        this._options.debugLogger &&
          (this._debugLogger = this._options.debugLogger),
        this._connect();
    }
    static get CONNECTING() {
      return 0;
    }
    static get OPEN() {
      return 1;
    }
    static get CLOSING() {
      return 2;
    }
    static get CLOSED() {
      return 3;
    }
    get CONNECTING() {
      return lr.CONNECTING;
    }
    get OPEN() {
      return lr.OPEN;
    }
    get CLOSING() {
      return lr.CLOSING;
    }
    get CLOSED() {
      return lr.CLOSED;
    }
    get binaryType() {
      return this._ws ? this._ws.binaryType : this._binaryType;
    }
    set binaryType(t) {
      (this._binaryType = t), this._ws && (this._ws.binaryType = t);
    }
    get retryCount() {
      return Math.max(this._retryCount, 0);
    }
    get bufferedAmount() {
      return (
        this._messageQueue.reduce(
          (r, n) => (
            typeof n == "string"
              ? (r += n.length)
              : n instanceof Blob
                ? (r += n.size)
                : (r += n.byteLength),
            r
          ),
          0,
        ) + (this._ws ? this._ws.bufferedAmount : 0)
      );
    }
    get extensions() {
      return this._ws ? this._ws.extensions : "";
    }
    get protocol() {
      return this._ws ? this._ws.protocol : "";
    }
    get readyState() {
      return this._ws
        ? this._ws.readyState
        : this._options.startClosed
          ? lr.CLOSED
          : lr.CONNECTING;
    }
    get url() {
      return this._ws ? this._ws.url : "";
    }
    get shouldReconnect() {
      return this._shouldReconnect;
    }
    onclose = null;
    onerror = null;
    onmessage = null;
    onopen = null;
    close(t = 1e3, r) {
      if (
        ((this._closeCalled = !0),
        (this._shouldReconnect = !1),
        this._clearTimeouts(),
        !this._ws)
      ) {
        this._debug("close enqueued: no ws instance");
        return;
      }
      if (this._ws.readyState === this.CLOSED) {
        this._debug("close: already closed");
        return;
      }
      this._ws.close(t, r);
    }
    reconnect(t, r) {
      (this._shouldReconnect = !0),
        (this._closeCalled = !1),
        (this._retryCount = -1),
        !this._ws || this._ws.readyState === this.CLOSED
          ? this._connect()
          : (this._disconnect(t, r), this._connect());
    }
    send(t) {
      if (this._ws && this._ws.readyState === this.OPEN)
        this._debug("send", t), this._ws.send(t);
      else {
        const { maxEnqueuedMessages: r = ar.maxEnqueuedMessages } =
          this._options;
        this._messageQueue.length < r &&
          (this._debug("enqueue", t), this._messageQueue.push(t));
      }
    }
    _debug(...t) {
      this._options.debug && this._debugLogger("RWS>", ...t);
    }
    _getNextDelay() {
      const {
        reconnectionDelayGrowFactor: t = ar.reconnectionDelayGrowFactor,
        minReconnectionDelay: r = ar.minReconnectionDelay,
        maxReconnectionDelay: n = ar.maxReconnectionDelay,
      } = this._options;
      let i = 0;
      return (
        this._retryCount > 0 &&
          ((i = r * t ** (this._retryCount - 1)), i > n && (i = n)),
        this._debug("next delay", i),
        i
      );
    }
    _wait() {
      return new Promise((t) => {
        setTimeout(t, this._getNextDelay());
      });
    }
    _getNextProtocols(t) {
      if (!t) return Promise.resolve(null);
      if (typeof t == "string" || Array.isArray(t)) return Promise.resolve(t);
      if (typeof t == "function") {
        const r = t();
        if (!r) return Promise.resolve(null);
        if (typeof r == "string" || Array.isArray(r)) return Promise.resolve(r);
        if (r.then) return r;
      }
      throw Error("Invalid protocols");
    }
    _getNextUrl(t) {
      if (typeof t == "string") return Promise.resolve(t);
      if (typeof t == "function") {
        const r = t();
        if (typeof r == "string") return Promise.resolve(r);
        if (r.then) return r;
      }
      throw Error("Invalid URL");
    }
    _connect() {
      if (this._connectLock || !this._shouldReconnect) return;
      this._connectLock = !0;
      const {
        maxRetries: t = ar.maxRetries,
        connectionTimeout: r = ar.connectionTimeout,
      } = this._options;
      if (this._retryCount >= t) {
        this._debug("max retries reached", this._retryCount, ">=", t);
        return;
      }
      this._retryCount++,
        this._debug("connect", this._retryCount),
        this._removeListeners(),
        this._wait()
          .then(() =>
            Promise.all([
              this._getNextUrl(this._url),
              this._getNextProtocols(this._protocols || null),
            ]),
          )
          .then(([n, i]) => {
            if (this._closeCalled) {
              this._connectLock = !1;
              return;
            }
            !this._options.WebSocket &&
              typeof WebSocket > "u" &&
              !$g &&
              (console.error(`‼️ No WebSocket implementation available. You should define options.WebSocket. 

For example, if you're using node.js, run \`npm install ws\`, and then in your code:

import PartySocket from 'partysocket';
import WS from 'ws';

const partysocket = new PartySocket({
  host: "127.0.0.1:1999",
  room: "test-room",
  WebSocket: WS
});

`),
              ($g = !0));
            const s = this._options.WebSocket || WebSocket;
            this._debug("connect", { url: n, protocols: i }),
              (this._ws = i ? new s(n, i) : new s(n)),
              (this._ws.binaryType = this._binaryType),
              (this._connectLock = !1),
              this._addListeners(),
              (this._connectTimeout = setTimeout(
                () => this._handleTimeout(),
                r,
              ));
          })
          .catch((n) => {
            (this._connectLock = !1),
              this._handleError(new ru.ErrorEvent(Error(n.message), this));
          });
    }
    _handleTimeout() {
      this._debug("timeout event"),
        this._handleError(new ru.ErrorEvent(Error("TIMEOUT"), this));
    }
    _disconnect(t = 1e3, r) {
      if ((this._clearTimeouts(), !!this._ws)) {
        this._removeListeners();
        try {
          this._ws.readyState === this.OPEN && this._ws.close(t, r),
            this._handleClose(new ru.CloseEvent(t, r, this));
        } catch {}
      }
    }
    _acceptOpen() {
      this._debug("accept open"), (this._retryCount = 0);
    }
    _handleOpen = (t) => {
      this._debug("open event");
      const { minUptime: r = ar.minUptime } = this._options;
      clearTimeout(this._connectTimeout),
        (this._uptimeTimeout = setTimeout(() => this._acceptOpen(), r)),
        vT(this._ws, "WebSocket is not defined"),
        (this._ws.binaryType = this._binaryType),
        this._messageQueue.forEach((n) => {
          var i;
          return (i = this._ws) == null ? void 0 : i.send(n);
        }),
        (this._messageQueue = []),
        this.onopen && this.onopen(t),
        this.dispatchEvent(Ni(t));
    };
    _handleMessage = (t) => {
      this._debug("message event"),
        this.onmessage && this.onmessage(t),
        this.dispatchEvent(Ni(t));
    };
    _handleError = (t) => {
      this._debug("error event", t.message),
        this._disconnect(void 0, t.message === "TIMEOUT" ? "timeout" : void 0),
        this.onerror && this.onerror(t),
        this._debug("exec error listeners"),
        this.dispatchEvent(Ni(t)),
        this._connect();
    };
    _handleClose = (t) => {
      this._debug("close event"),
        this._clearTimeouts(),
        this._shouldReconnect && this._connect(),
        this.onclose && this.onclose(t),
        this.dispatchEvent(Ni(t));
    };
    _removeListeners() {
      this._ws &&
        (this._debug("removeListeners"),
        this._ws.removeEventListener("open", this._handleOpen),
        this._ws.removeEventListener("close", this._handleClose),
        this._ws.removeEventListener("message", this._handleMessage),
        this._ws.removeEventListener("error", this._handleError));
    }
    _addListeners() {
      this._ws &&
        (this._debug("addListeners"),
        this._ws.addEventListener("open", this._handleOpen),
        this._ws.addEventListener("close", this._handleClose),
        this._ws.addEventListener("message", this._handleMessage),
        this._ws.addEventListener("error", this._handleError));
    }
    _clearTimeouts() {
      clearTimeout(this._connectTimeout), clearTimeout(this._uptimeTimeout);
    }
  };
/*!
 * Reconnecting WebSocket
 * by Pedro Ladaria <pedro.ladaria@gmail.com>
 * https://github.com/pladaria/reconnecting-websocket
 * License MIT
 */ let Br = null;
async function ay() {
  return (await Q.safeGet("/celsius/ws/user")).websocket_url;
}
const cy = Ir(() => ry("disconnected")),
  vl = new iy();
function uy(e, t = ay) {
  const r = cy(e);
  return (
    r.set("connecting"),
    (Br = new ST(t, void 0, { maxRetries: 5 })),
    Br.addEventListener("open", () => {
      r.set("connected");
    }),
    Br.addEventListener("close", () => {
      r.set("disconnected");
    }),
    Br.addEventListener("message", (n) => {
      const i = JSON.parse(n.data),
        { type: s, ...o } = i,
        a = { kind: s, ...o };
      vl.publish(a);
    }),
    Br.addEventListener("error", (n) => {
      x.addAction("websocket error", { error: n.error, message: n.message });
    }),
    Br
  );
}
async function ET(e) {
  const t = cy(e);
  try {
    x.addAction("ws.init"), ur.count(Mt.WEBSOCKET, "init");
    const r = performance.now(),
      n = {};
    let i = !1;
    const s = uy(e, async () => {
      const f = await ay(),
        h = performance.now() - r;
      return (
        (n.socket_url_duration = h),
        (n.socket_url_time = h),
        i ||
          (x.addAction("ws.get-socket-url", n),
          ur.hist(Mt.WEBSOCKET, "get-socket-url", [], h),
          (i = !0)),
        f
      );
    });
    setTimeout(() => {
      s.close();
    }, 3e4),
      await sT(() => t() === "connected");
    const o = performance.now() - r,
      a = o - n.socket_url_time;
    (n.connect_time = o),
      (n.connect_duration = a),
      x.addAction("ws.connect", n),
      ur.hist(Mt.WEBSOCKET, "connect", [], a);
    const c = It();
    let u = !1,
      l = !1;
    const d = ({ payload: f }) => {
      const { ping_id: h, source: _ } = f;
      if (!(h != null && h !== c)) {
        if (_ === "server" && !l) {
          l = !0;
          const p = performance.now() - r,
            g = p - o;
          (n.receive_server_ping_time = p),
            (n.receive_server_ping_duration = g),
            x.addAction("ws.receive-server-ping", n),
            ur.hist(Mt.WEBSOCKET, "receive-server-ping", [], g);
        }
        if ((_ === "worker" || _ == null) && !u) {
          u = !0;
          const p = performance.now() - r,
            g = p - o;
          (n.receive_ping_time = p),
            (n.receive_ping_duration = g),
            x.addAction("ws.receive-ping", n),
            ur.hist(Mt.WEBSOCKET, "receive-ping", [], g);
        }
        u && l && (vl.off("ping", d), s.close());
      }
    };
    vl.on("ping", d),
      x.addAction("ws.send-ping", n),
      Q.safePost("/celsius/ping", { requestBody: { ping_id: c } });
  } catch (r) {
    x.addAction("ws.error", { error: r }), ur.count(Mt.WEBSOCKET, "error");
  }
}
function wT(e, t) {
  return mn({
    queryKey: ["workspace-settings", e],
    queryFn: e
      ? () =>
          Q.safeGet("/accounts/{account_id}/settings", {
            parameters: { path: { account_id: e } },
          })
      : S1,
    select: (r) => (r && t ? t(r) : r),
  });
}
const CT = [
    "AL",
    "DZ",
    "AF",
    "AD",
    "AO",
    "AG",
    "AR",
    "AM",
    "AU",
    "AT",
    "AZ",
    "BS",
    "BH",
    "BD",
    "BB",
    "BE",
    "BZ",
    "BJ",
    "BT",
    "BO",
    "BA",
    "BW",
    "BR",
    "BN",
    "BG",
    "BF",
    "BI",
    "CV",
    "KH",
    "CM",
    "CA",
    "CF",
    "TD",
    "CL",
    "CO",
    "KM",
    "CG",
    "CD",
    "CR",
    "CI",
    "HR",
    "CY",
    "CZ",
    "DK",
    "DJ",
    "DM",
    "DO",
    "EC",
    "EG",
    "SV",
    "GQ",
    "ER",
    "EE",
    "SZ",
    "ET",
    "FJ",
    "FI",
    "FR",
    "GA",
    "GM",
    "GE",
    "DE",
    "GH",
    "GR",
    "GD",
    "GT",
    "GN",
    "GW",
    "GY",
    "HT",
    "VA",
    "HN",
    "HU",
    "IS",
    "IN",
    "ID",
    "IQ",
    "IE",
    "IL",
    "IT",
    "JM",
    "JP",
    "JO",
    "KZ",
    "KE",
    "KI",
    "KW",
    "KG",
    "LA",
    "LV",
    "LB",
    "LS",
    "LR",
    "LY",
    "LI",
    "LT",
    "LU",
    "MG",
    "MW",
    "MY",
    "MV",
    "ML",
    "MT",
    "MH",
    "MR",
    "MU",
    "MX",
    "FM",
    "MD",
    "MC",
    "MN",
    "ME",
    "MA",
    "MZ",
    "MM",
    "NA",
    "NR",
    "NP",
    "NL",
    "NZ",
    "NI",
    "NE",
    "NG",
    "MK",
    "NO",
    "OM",
    "PK",
    "PW",
    "PS",
    "PA",
    "PG",
    "PY",
    "PE",
    "PH",
    "PL",
    "PT",
    "QA",
    "RO",
    "RW",
    "KN",
    "LC",
    "VC",
    "WS",
    "SM",
    "ST",
    "SA",
    "SN",
    "RS",
    "SC",
    "SL",
    "SG",
    "SK",
    "SI",
    "SB",
    "SO",
    "ZA",
    "KR",
    "SS",
    "ES",
    "LK",
    "SR",
    "SE",
    "CH",
    "SD",
    "TW",
    "TJ",
    "TZ",
    "TH",
    "TL",
    "TG",
    "TO",
    "TT",
    "TN",
    "TR",
    "TM",
    "TV",
    "UG",
    "UA",
    "AE",
    "GB",
    "US",
    "UY",
    "UZ",
    "VU",
    "VN",
    "YE",
    "ZM",
    "ZW",
  ],
  AT = new Set([
    "AT",
    "BE",
    "BG",
    "HR",
    "CY",
    "CZ",
    "DK",
    "EE",
    "FI",
    "FR",
    "DE",
    "GR",
    "HU",
    "IS",
    "IE",
    "IT",
    "LV",
    "LI",
    "LT",
    "LU",
    "MT",
    "NL",
    "NO",
    "PL",
    "PT",
    "RO",
    "SK",
    "SI",
    "ES",
    "SE",
  ]),
  Li = "US",
  OT = "GB",
  xT = "CH",
  RT = {
    AL: "Albania",
    DZ: "Algeria",
    AF: "Afghanistan",
    AD: "Andorra",
    AO: "Angola",
    AG: "Antigua & Barbuda",
    AR: "Argentina",
    AM: "Armenia",
    AU: "Australia",
    AT: "Austria",
    AZ: "Azerbaijan",
    BS: "Bahamas",
    BH: "Bahrain",
    BD: "Bangladesh",
    BB: "Barbados",
    BE: "Belgium",
    BZ: "Belize",
    BJ: "Benin",
    BT: "Bhutan",
    BO: "Bolivia",
    BA: "Bosnia & Herzegovina",
    BW: "Botswana",
    BR: "Brazil",
    BN: "Brunei",
    BG: "Bulgaria",
    BF: "Burkina Faso",
    BI: "Burundi",
    CV: "Cape Verde",
    KH: "Cambodia",
    CM: "Cameroon",
    CA: "Canada",
    CF: "Central African Republic",
    TD: "Chad",
    CL: "Chile",
    CO: "Colombia",
    KM: "Comoros",
    CG: "Congo - Brazzaville",
    CD: "Congo - Kinshasa",
    CR: "Costa Rica",
    CI: "Côte d’Ivoire",
    HR: "Croatia",
    CY: "Cyprus",
    CZ: "Czechia",
    DK: "Denmark",
    DJ: "Djibouti",
    DM: "Dominica",
    DO: "Dominican Republic",
    EC: "Ecuador",
    EG: "Egypt",
    SV: "El Salvador",
    GQ: "Equatorial Guinea",
    ER: "Eritrea",
    EE: "Estonia",
    SZ: "Eswatini",
    ET: "Ethiopia",
    FJ: "Fiji",
    FI: "Finland",
    FR: "France",
    GA: "Gabon",
    GM: "Gambia",
    GE: "Georgia",
    DE: "Germany",
    GH: "Ghana",
    GR: "Greece",
    GD: "Grenada",
    GT: "Guatemala",
    GN: "Guinea",
    GW: "Guinea-Bissau",
    GY: "Guyana",
    HT: "Haiti",
    VA: "Vatican City",
    HN: "Honduras",
    HU: "Hungary",
    IS: "Iceland",
    IN: "India",
    ID: "Indonesia",
    IQ: "Iraq",
    IE: "Ireland",
    IL: "Israel",
    IT: "Italy",
    JM: "Jamaica",
    JP: "Japan",
    JO: "Jordan",
    KZ: "Kazakhstan",
    KE: "Kenya",
    KI: "Kiribati",
    KW: "Kuwait",
    KG: "Kyrgyzstan",
    LA: "Laos",
    LV: "Latvia",
    LB: "Lebanon",
    LS: "Lesotho",
    LR: "Liberia",
    LY: "Libya",
    LI: "Liechtenstein",
    LT: "Lithuania",
    LU: "Luxembourg",
    MG: "Madagascar",
    MW: "Malawi",
    MY: "Malaysia",
    MV: "Maldives",
    ML: "Mali",
    MT: "Malta",
    MH: "Marshall Islands",
    MR: "Mauritania",
    MU: "Mauritius",
    MX: "Mexico",
    FM: "Micronesia",
    MD: "Moldova",
    MC: "Monaco",
    MN: "Mongolia",
    ME: "Montenegro",
    MA: "Morocco",
    MZ: "Mozambique",
    MM: "Myanmar (Burma)",
    NA: "Namibia",
    NR: "Nauru",
    NP: "Nepal",
    NL: "Netherlands",
    NZ: "New Zealand",
    NI: "Nicaragua",
    NE: "Niger",
    NG: "Nigeria",
    MK: "North Macedonia",
    NO: "Norway",
    OM: "Oman",
    PK: "Pakistan",
    PW: "Palau",
    PS: "Palestine",
    PA: "Panama",
    PG: "Papua New Guinea",
    PY: "Paraguay",
    PE: "Peru",
    PH: "Philippines",
    PL: "Poland",
    PT: "Portugal",
    QA: "Qatar",
    RO: "Romania",
    RW: "Rwanda",
    KN: "St. Kitts & Nevis",
    LC: "St. Lucia",
    VC: "St. Vincent & Grenadines",
    WS: "Samoa",
    SM: "San Marino",
    ST: "São Tomé & Príncipe",
    SA: "Saudi Arabia",
    SN: "Senegal",
    RS: "Serbia",
    SC: "Seychelles",
    SL: "Sierra Leone",
    SG: "Singapore",
    SK: "Slovakia",
    SI: "Slovenia",
    SB: "Solomon Islands",
    SO: "Somalia",
    ZA: "South Africa",
    KR: "South Korea",
    SS: "South Sudan",
    ES: "Spain",
    LK: "Sri Lanka",
    SR: "Suriname",
    SE: "Sweden",
    CH: "Switzerland",
    SD: "Sudan",
    TW: "Taiwan",
    TJ: "Tajikistan",
    TZ: "Tanzania",
    TH: "Thailand",
    TL: "Timor-Leste",
    TG: "Togo",
    TO: "Tonga",
    TT: "Trinidad & Tobago",
    TN: "Tunisia",
    TR: "Türkiye",
    TM: "Turkmenistan",
    TV: "Tuvalu",
    UG: "Uganda",
    UA: "Ukraine",
    AE: "United Arab Emirates",
    GB: "United Kingdom",
    US: "United States",
    UY: "Uruguay",
    UZ: "Uzbekistan",
    VU: "Vanuatu",
    VN: "Vietnam",
    YE: "Yemen",
    ZM: "Zambia",
    ZW: "Zimbabwe",
  };
function IT(e) {
  return CT.includes(e);
}
function g4({ country: e, shouldUseDefaultCountryCode: t }) {
  return t
    ? (x.addAction(`Force using ${Li}`, { user_country: e }), Li)
    : e == null || !IT(e)
      ? (x.addError(`User country is null or unrecognized - will use ${Li}`, {
          user_country: e,
        }),
        Li)
      : e;
}
function _4(e) {
  try {
    const t = new Intl.DisplayNames([e], { type: "region" });
    return (r) => t.of(r) ?? "";
  } catch (t) {
    return (
      x.addError(
        "Failed to create country display name formatter, will fallback to en_US locale display name",
        { cause: t },
      ),
      (r) => RT[r] ?? ""
    );
  }
}
function TT(e) {
  return AT.has(e);
}
const ly = "USD",
  PT = "GBP",
  Hg = "EUR";
function v4(e) {
  return TT(e) || e == xT ? Hg : e == OT ? PT : ly;
}
const hn = Rr({
    dollarSign: { id: "currencyCodes.dollarSign", defaultMessage: "$" },
    dollarCode: { id: "currencyCodes.dollarCode", defaultMessage: "USD" },
    poundSign: { id: "currencyCodes.poundSign", defaultMessage: "£" },
    poundCode: { id: "currencyCodes.poundCode", defaultMessage: "GBP" },
    euroSign: { id: "currencyCodes.euroSign", defaultMessage: "€" },
    euroCode: { id: "currencyCodes.euroCode", defaultMessage: "EUR" },
  }),
  m4 = { sign: hn.dollarSign, code: hn.dollarCode },
  b4 = { sign: hn.poundSign, code: hn.poundCode },
  y4 = { sign: hn.euroSign, code: hn.euroCode };
function dy(e) {
  return [ue.ENTERPRISE, ue.BUSINESS, ue.EDU, ue.QUORUM].includes(e);
}
function kT(e) {
  return e === ue.QUORUM;
}
var nu, zg;
function NT() {
  if (zg) return nu;
  zg = 1;
  var e = cd();
  function t(r, n) {
    return e(r, n);
  }
  return (nu = t), nu;
}
var LT = NT();
const DT = $e(LT);
function MT(e) {
  return e !== ue.FREE;
}
const S4 = "disable_history",
  E4 = "user_latency_tools",
  jT = "sentinel_enabled_for_subscription",
  w4 = "mfa";
var UT = ((e) => (
    (e.BrowsingAvailable = "browsing_available"),
    (e.Sunshine = "sunshine_available"),
    (e.WorkspaceGPTCustomActions = "workspace_gpt_custom_actions"),
    (e.WorkspaceShareLinks = "workspace_share_links"),
    (e.GizmoSupportEmails = "gizmo_support_emails"),
    (e.D3Editor = "d3_editor"),
    (e.D3EditorAllGpts = "d3_editor_gpts"),
    (e.DataAnalysisV2 = "graphite"),
    (e.ChartSerialization = "chart_serialization"),
    (e.SearchTool = "search_tool"),
    (e.SearchToolHoldout = "search_tool_holdout"),
    (e.MemoryInSearch = "memory_in_search"),
    (e.Canvas = "canvas"),
    (e.CanvasCodeExecution = "canvas_code_execution"),
    (e.CanvasCodeNetworkAccess = "canvas_code_network_access"),
    (e.GizmoCanvasToggle = "gizmo_canvas_toggle"),
    (e.Moonshine = "moonshine"),
    (e.VideoScreenSharing = "video_screen_sharing"),
    (e.DeepResearch = "caterpillar"),
    (e.AllowVoiceUse = "breeze_available"),
    (e.ImageGenToggle = "image_gen_toggle"),
    e
  ))(UT || {}),
  iu,
  Wg;
function BT() {
  if (Wg) return iu;
  Wg = 1;
  function e(t) {
    return t == null;
  }
  return (iu = e), iu;
}
var qT = BT();
const FT = $e(qT);
var su, Kg;
function GT() {
  if (Kg) return su;
  Kg = 1;
  var e = "Expected a function";
  function t(r) {
    if (typeof r != "function") throw new TypeError(e);
    return function () {
      var n = arguments;
      switch (n.length) {
        case 0:
          return !r.call(this);
        case 1:
          return !r.call(this, n[0]);
        case 2:
          return !r.call(this, n[0], n[1]);
        case 3:
          return !r.call(this, n[0], n[1], n[2]);
      }
      return !r.apply(this, n);
    };
  }
  return (su = t), su;
}
var ou, Yg;
function VT() {
  if (Yg) return ou;
  Yg = 1;
  var e = qs(),
    t = GT(),
    r = Cm();
  function n(i, s) {
    return r(i, t(e(s)));
  }
  return (ou = n), ou;
}
var $T = VT();
const HT = $e($T);
function zT(e) {
  let t = 2166136261;
  for (let r = 0; r < e.length; r++)
    (t ^= e.charCodeAt(r)), (t = Math.imul(t, 16777619) >>> 0);
  return (
    (t ^= t >>> 16),
    (t = Math.imul(t, 2246822507) >>> 0),
    (t ^= t >>> 13),
    (t = Math.imul(t, 3266489909) >>> 0),
    (t ^= t >>> 16),
    (t >>> 0).toString(16).padStart(8, "0")
  );
}
class WT {
  answers = new Map();
  maxAttempts = 5e5;
  requirementsSeed = KT();
  sid = It();
  async initializeAndGatherData(t) {
    this._getAnswer(t);
  }
  async startEnforcement(t) {
    this._getAnswer(t);
  }
  getEnforcementTokenSync(t) {
    const r = this._getAnswer(t);
    return typeof r == "string" ? r : null;
  }
  async getEnforcementToken(t) {
    return this._getAnswer(t);
  }
  async getRequirementsToken() {
    return (
      this.answers.has(this.requirementsSeed) ||
        this.answers.set(
          this.requirementsSeed,
          this._generateAnswer(this.requirementsSeed, "0"),
        ),
      "gAAAAAC" + (await this.answers.get(this.requirementsSeed))
    );
  }
  getRequirementsTokenBlocking() {
    return "gAAAAAC" + this._generateRequirementsTokenAnswerBlocking();
  }
  _getAnswer(t) {
    if (!t?.proofofwork?.required) return null;
    const { seed: r, difficulty: n } = t.proofofwork;
    if (!(typeof r == "string" && typeof n == "string")) return null;
    const i = this.answers.get(r);
    return typeof i == "string"
      ? i
      : (this.answers.has(r) || this.answers.set(r, this._generateAnswer(r, n)),
        Promise.resolve()
          .then(async () => "gAAAAAB" + (await this.answers.get(r)))
          .then((s) => (this.answers.set(r, s), s)));
  }
  async _generateAnswer(t, r) {
    let n = "e";
    const i = performance.now();
    try {
      let s = null;
      const o = this.getConfig();
      for (let a = 0; a < this.maxAttempts; a++) {
        (!s || s.timeRemaining() <= 0) && (s = await JT()),
          (o[3] = a),
          (o[9] = Math.round(performance.now() - i));
        const c = Di(o);
        if (zT(t + c).substring(0, r.length) <= r) return c + "~S";
      }
    } catch (s) {
      n = Di(String(s));
    }
    return "wQ8Lk5FbGpA2NcR9dShT6gYjU7VxZ4D" + n;
  }
  _generateRequirementsTokenAnswerBlocking() {
    let t = "e";
    const r = performance.now();
    try {
      const n = this.getConfig();
      return (n[3] = 1), (n[9] = Math.round(performance.now() - r)), Di(n);
    } catch (n) {
      t = Di(String(n));
    }
    return "wQ8Lk5FbGpA2NcR9dShT6gYjU7VxZ4D" + t;
  }
  getConfig() {
    return [
      screen?.width + screen?.height,
      "" + new Date(),
      performance?.memory?.jsHeapSizeLimit,
      Math?.random(),
      navigator.userAgent,
      Wi(
        Array.from(document.scripts)
          .map((t) => t?.src)
          .filter((t) => t),
      ),
      (Array.from(document.scripts || [])
        .map((t) => t?.src?.match("c/[^/]*/_"))
        .filter((t) => t?.length)[0] ?? [])[0] ??
        document.documentElement.getAttribute("data-build"),
      navigator.language,
      navigator.languages?.join(","),
      Math?.random(),
      YT(),
      Wi(Object.keys(document)),
      Wi(Object.keys(window)),
      performance.now(),
      this.sid,
      [...new URLSearchParams(window.location.search).keys()].join(","),
      navigator?.hardwareConcurrency,
      performance.timeOrigin,
    ];
  }
}
function Wi(e) {
  return e[Math.floor(Math.random() * e.length)];
}
function KT() {
  return "" + Math.random();
}
function YT() {
  const e = Wi(Object.keys(Object.getPrototypeOf(navigator)));
  try {
    return `${e}−${navigator[e].toString()}`;
  } catch {
    return `${e}`;
  }
}
function Di(e) {
  return (
    (e = JSON.stringify(e)),
    window.TextEncoder
      ? btoa(String.fromCharCode(...new TextEncoder().encode(e)))
      : btoa(unescape(encodeURIComponent(e)))
  );
}
function JT() {
  return new Promise((e) => {
    (window.requestIdleCallback || ZT)(
      (r) => {
        e(r);
      },
      { timeout: 10 },
    );
  });
}
function ZT(e) {
  return (
    setTimeout(() => {
      e({ timeRemaining: () => 1, didTimeout: !1 });
    }, 0),
    0
  );
}
const QT = new WT(),
  XT = 0,
  e2 = 1,
  t2 = 2,
  r2 = 3,
  n2 = 4,
  i2 = 5,
  s2 = 6,
  o2 = 24,
  a2 = 7,
  c2 = 8,
  au = 9,
  u2 = 10,
  l2 = 11,
  d2 = 12,
  f2 = 13,
  h2 = 14,
  p2 = 15,
  fy = 16,
  g2 = 17,
  _2 = 18,
  v2 = 19,
  m2 = 23,
  b2 = 20,
  y2 = 21,
  S2 = 22,
  E2 = 25,
  P = new Map();
function w2(e) {
  return new Promise((t, r) => {
    let n = 0;
    setTimeout(() => t("" + n), 100),
      P.set(r2, (i) => t(btoa("" + i))),
      P.set(n2, (i) => r(btoa("" + i)));
    try {
      for (
        P.set(au, JSON.parse(hy(atob(e), "" + P.get(fy))));
        P.get(au).length > 0;

      ) {
        const [i, ...s] = P.get(au).shift();
        P.get(i)(...s), n++;
      }
      t(btoa("" + n));
    } catch (i) {
      t(btoa(n + ": " + i));
    }
  });
}
function C2(e) {
  A2(), P.set(fy, e);
}
function hy(e, t) {
  let r = "";
  for (let n = 0; n < e.length; n++)
    r += String.fromCharCode(e.charCodeAt(n) ^ t.charCodeAt(n % t.length));
  return r;
}
function A2() {
  P.clear(),
    P.set(XT, w2),
    P.set(e2, (e, t) => P.set(e, hy("" + P.get(e), "" + P.get(t)))),
    P.set(t2, (e, t) => P.set(e, t)),
    P.set(i2, (e, t) => {
      const r = P.get(e);
      Array.isArray(r) ? r.push(P.get(t)) : P.set(e, r + P.get(t));
    }),
    P.set(s2, (e, t, r) => P.set(e, P.get(t)[P.get(r)])),
    P.set(a2, (e, ...t) => P.get(e)(...t.map((r) => P.get(r)))),
    P.set(g2, (e, t, ...r) => P.set(e, P.get(t)(...r.map((n) => P.get(n))))),
    P.set(f2, (e, t, ...r) => {
      try {
        P.get(t)(...r);
      } catch (n) {
        P.set(e, "" + n);
      }
    }),
    P.set(c2, (e, t) => P.set(e, P.get(t))),
    P.set(u2, window),
    P.set(l2, (e, t) =>
      P.set(
        e,
        (Array.from(document.scripts || [])
          .map((r) => r?.src?.match(P.get(t)))
          .filter((r) => r?.length)[0] ?? [])[0] ?? null,
      ),
    ),
    P.set(d2, (e) => P.set(e, P)),
    P.set(h2, (e, t) => P.set(e, JSON.parse("" + P.get(t)))),
    P.set(p2, (e, t) => P.set(e, JSON.stringify(P.get(t)))),
    P.set(_2, (e) => P.set(e, atob("" + P.get(e)))),
    P.set(v2, (e) => P.set(e, btoa("" + P.get(e)))),
    P.set(b2, (e, t, r, ...n) =>
      P.get(e) === P.get(t) ? P.get(r)(...n) : null,
    ),
    P.set(y2, (e, t, r, n, ...i) =>
      Math.abs(P.get(e) - P.get(t)) > P.get(r) ? P.get(n)(...i) : null,
    ),
    P.set(m2, (e, t, ...r) => (P.get(e) !== void 0 ? P.get(t)(...r) : null)),
    P.set(o2, (e, t, r) => P.set(e, P.get(t)[P.get(r)].bind(P.get(t)))),
    P.set(S2, () => {}),
    P.set(E2, () => {});
}
const O2 = 1e3 * 60 * 9;
var x2 = ((e) => (
    (e.NOAUTH = "chatgpt-noauth"),
    (e.FREEACCOUNT = "chatgpt-freeaccount"),
    (e.PAID = "chatgpt-paid"),
    e
  ))(x2 || {}),
  R2 = ((e) => (
    (e.ChatRequirementsToken = "OpenAI-Sentinel-Chat-Requirements-Token"),
    (e.TurnstileToken = "OpenAI-Sentinel-Turnstile-Token"),
    (e.ProofToken = "OpenAI-Sentinel-Proof-Token"),
    (e.Token = "OpenAI-Sentinel-Token"),
    e
  ))(R2 || {});
let I2 = -1,
  Be = null;
function C4() {
  if (Be) {
    const { chatRequirements: e, expiration: t } = Be;
    if (Date.now() >= t) return (Be = null), null;
    if (e) return (Be = null), e;
  }
  return null;
}
async function A4(e = !1) {
  if (Be) {
    const { expiration: i, chatRequirementsPromise: s } = Be;
    if (Date.now() < i)
      try {
        return e || (Be = null), s;
      } catch {}
    else
      s.then((o) =>
        x.addAction("chat_requirements_cache_expired", {
          app: o.persona.toString(),
        }),
      );
    Be = null;
  }
  const t = QT.getRequirementsTokenBlocking();
  C2(t);
  const r = oe.postAnonAware(
      "/sentinel/chat-requirements",
      { p: t },
      { authOption: ee.SendIfAvailable },
    ),
    n = ++I2;
  return (
    e &&
      (Be = {
        id: n,
        chatRequirements: null,
        chatRequirementsPromise: r.then(
          (i) => (Be?.id === n && (Be.chatRequirements = i), i),
        ),
        expiration: Date.now() + O2,
      }),
    r
  );
}
function T2() {
  De(nt()).checkGate("2232580636") || (Be = null);
}
function P2() {
  return new Promise((e, t) => {
    const r = document.createElement("script");
    (r.type = "text/javascript"),
      (r.src = "https://chatgpt.com/backend-api/sentinel/sdk.js"),
      (r.async = !0),
      (r.defer = !0),
      (r.onload = e),
      (r.onerror = t),
      document.getElementsByTagName("head")[0].appendChild(r);
  });
}
function k2(e) {
  return N2().then(() => window.SentinelSDK.token(e));
}
const N2 = (() => {
  let e;
  return () => (e || (e = P2()), e);
})();
function L2(e, t, r, n) {
  e && T2();
  const i = {};
  return (
    e?.token && (i["OpenAI-Sentinel-Chat-Requirements-Token"] = e.token),
    t && (i["OpenAI-Sentinel-Turnstile-Token"] = t),
    r && (i["OpenAI-Sentinel-Proof-Token"] = r),
    n && (i["OpenAI-Sentinel-Token"] = n),
    i
  );
}
var D2 = {};
let cu = null;
async function M2() {
  return (
    cu ||
      (cu = (
        await k(async () => {
          const { default: e } = await import("./e8thlmiuh1tetfnu.js");
          return { default: e };
        }, [])
      ).default),
    cu
  );
}
class j2 {
  static async getSystemHints() {
    return oe.get(`${ae}/system_hints`, { authOption: ee.SendIfAvailable });
  }
  static async getWorkspaceGPTs(t, r, n) {
    const i = r === Ku.THIRD_PARTY ? "true" : "false",
      s = r === Ku.UNASSIGNED ? "true" : "false";
    return oe.get(
      `${ae}/accounts/${t}/gpts?is_approved=${i}&cursor=${n}&is_unassigned=${s}`,
    );
  }
  static async getInvoices(t, r = {}) {
    if (r.endingBefore !== void 0 && r.startingAfter !== void 0)
      throw new Error(
        "Both an endingBefore and startingAfter parameter were provided. Please only provide one or the other.",
      );
    const n = HT(t, FT),
      i = new URLSearchParams(n);
    return (
      r.limit !== void 0 && i.append("limit", r.limit.toString()),
      r.endingBefore !== void 0
        ? i.append("ending_before", r.endingBefore)
        : r.startingAfter !== void 0 &&
          i.append("starting_after", r.startingAfter),
      oe.get(`${ae}/invoices?${i}`)
    );
  }
  static async adminPostConversation(t) {
    return oe.post(`${ae}/../admin/conversation`, t);
  }
  static async uploadFileToAzureStorage(t, r, n, i) {
    const s = await M2();
    return await s
      .request({
        method: "put",
        url: r,
        data: t,
        headers: {
          "x-ms-blob-type": "BlockBlob",
          "x-ms-version": "2020-04-08",
          "Content-Type": t.type,
        },
        onUploadProgress: (o) => {
          o.progress !== void 0 && n && n(o.progress);
        },
      })
      .catch(function (o) {
        let a = { ...i };
        throw (
          (s && o instanceof s.AxiosError && o.response?.status
            ? (a = {
                ...a,
                error_type_name: `AxiosHTTPError${o.response.status}`,
                error_msg: o.message,
                error_stack: o.stack,
              })
            : o instanceof Error &&
              (a = {
                ...a,
                error_type_name: o.name,
                error_msg: o.message,
                error_stack: o.stack,
              }),
          le.logEvent("Blob Store Upload Error", a),
          new _t(
            "File upload to blobstore failed",
            "failed_upload_to_blobstore",
          ))
        );
      });
  }
  static async downloadFromInterpreter(t, r, n) {
    const i = await Q.safeGet(
      "/conversation/{conversation_id}/interpreter/download",
      {
        parameters: {
          path: { conversation_id: r },
          query: { message_id: t, sandbox_path: n },
        },
      },
    );
    if (i.status === Bn.Success) return i;
    throw new _t(
      "Could not download file from advanced data analysis",
      "error_code" in i ? i.error_code : "unknown_error",
    );
  }
  static createOrUpdateUserSystemMessage({
    aboutUserMessage: t,
    aboutModelMessage: r,
    nameUserMessage: n = "",
    roleUserMessage: i = "",
    traitsModelMessage: s = "",
    otherUserMessage: o = "",
    disabledTools: a,
    enabled: c,
  }) {
    return Q.safePost("/user_system_messages", {
      requestBody: {
        about_user_message: t,
        about_model_message: r,
        name_user_message: n,
        role_user_message: i,
        traits_model_message: s,
        other_user_message: o,
        disabled_tools: a,
        enabled: c,
      },
    });
  }
  static internalAnnouncementReset(t) {
    const r = new URLSearchParams({ announcement_id: t }),
      n = `${ae}/settings/announcement_reset?${r.toString()}`;
    return oe.post(n, {});
  }
  static getConversations({ offset: t, limit: r, isArchived: n }) {
    return Q.safeGet("/conversations", {
      parameters: {
        query: { offset: t, limit: r, order: "updated", is_archived: n },
      },
      intercomEventOnError: "fetch-error:conversations:get",
      authOption: ee.SendIfAvailable,
    });
  }
  static setConversationStatus(t, r) {
    return Q.safePost("/conversation/{conversation_id}/async-status", {
      parameters: { path: { conversation_id: t } },
      requestBody: { status: r },
    });
  }
  static getConversationDetails({
    gizmoId: t,
    requestedDefaultModel: r,
    conversationId: n,
  }) {
    return Q.safePost("/conversation/init", {
      requestBody: {
        gizmo_id: t,
        requested_default_model: r,
        conversation_id: n,
        timezone_offset_min: new Date().getTimezoneOffset(),
      },
      authOption: ee.SendIfAvailable,
    });
  }
  static patchConversation(t, r) {
    return Q.safePatch("/conversation/{conversation_id}", {
      parameters: { path: { conversation_id: t } },
      requestBody: r,
      intercomEventOnError: "fetch-error:conversation:edit",
    });
  }
  static async submitMessageFeedback(t) {
    return Q.safePost("/conversation/message_feedback", {
      requestBody: t,
      authOption: ee.SendIfAvailable,
    });
  }
  static async getCheckoutLink(t, r, n) {
    (n == null || n.billing_details == null) &&
      (x.addError(new Error("chatgpt_payload_undefined_in_checkout_link"), {
        callLocation: r,
      }),
      X.logEvent("chatgpt_payload_undefined_in_checkout_link", null, {
        callLocation: r,
      }));
    let i = Promise.resolve(void 0);
    t?.includes(jT) &&
      (i = k2("chatgpt_checkout").catch((a) => {
        x.addError(a);
      }));
    const [s] = await Promise.all([i]),
      o = L2(null, null, null, s);
    return Q.safePost("/payments/checkout", {
      requestBody: n,
      additionalHeaders: o,
    });
  }
  static fetchCustomerPortalUrl(t) {
    return Q.safeGet("/payments/customer_portal", {
      parameters: { query: { account_id: t } },
      intercomEventOnError: "fetch-error:customer_portal:get",
    });
  }
  static getEligibleReferralInvites() {
    return oe.get(`${ae}/referral/invites`);
  }
  static postActivateReferralInvite(t) {
    return oe.post(`${ae}/referral/invites/activate`, { invite_id: t });
  }
  static async submitCaMessageFeedback(t) {
    return Q.safePost("/ca/feedback", { requestBody: t });
  }
  static getModelMessageCap(t) {
    return oe.get(
      `${Vi}/conversation_limit`,
      t ? { authOption: ee.Anonymous } : {},
    );
  }
  static getPublicReferralInvite(t) {
    return oe.get(`${kS}/invites/${t}`, { authOption: ee.Anonymous });
  }
  static updateShareLink(t) {
    return Q.safePatch("/share/{shared_conversation_id}", {
      parameters: { path: { shared_conversation_id: t.share_id } },
      requestBody: t,
    });
  }
  static fetchShareModerationCategories() {
    return oe.get(`${ae}/share/moderation/categories`);
  }
  static async createFile(t, r, n, i, s) {
    try {
      const o = await Q.safePost("/files", {
        authOption: s ? ee.Anonymous : void 0,
        requestBody: {
          file_name: t,
          file_size: r,
          use_case: n.kind,
          gizmo_id: n.kind === nm.Gizmo ? n.gizmoId : void 0,
          timezone_offset_min: new Date().getTimezoneOffset(),
          reset_rate_limits: !!i,
        },
      });
      if (o.status === Bn.Error)
        throw (
          (le.logEvent("Create File Entry Error", {
            error_code: o.error_code,
            error_type_name: "FileServiceErrorResponse",
            error_msg: o.error_code,
            error_stack: "",
          }),
          new _t("Could not create file", o.error_code))
        );
      return o;
    } catch (o) {
      throw (
        (o instanceof _t ||
          (o instanceof vd
            ? le.logEvent("Create File Entry Error", {
                error_type_name: "ClientRequestMismatchedAuthError",
                error_msg: o.message,
                error_stack: o.stack,
              })
            : o instanceof Ae
              ? le.logEvent("Create File Entry Error", {
                  error_type_name:
                    o.detail?.type === "throttled"
                      ? "RequestThrottled"
                      : "RequestError",
                  error_msg: o.message,
                  error_stack: o.stack,
                })
              : o instanceof Error
                ? le.logEvent("Create File Entry Error", {
                    error_type_name: o.name,
                    error_msg: o.message,
                    error_stack: o.stack,
                  })
                : le.logEvent("Create File Entry Error", {
                    error_type_name: "UnknownError",
                    error_msg: String(o),
                    error_stack: "",
                  })),
        o)
      );
    }
  }
  static isErrorEvent(t) {
    const r = t.split("."),
      n = r[r.length - 1];
    return (
      n === "error" || n === "cancelled" || n === "failed" || n === "unknown"
    );
  }
  static async processFileUploadStream(t, r, n) {
    try {
      const i = oe.streamedJsonPost(`${ae}/files/process_upload_stream`, t, {
        authOption: n ? ee.Anonymous : void 0,
      });
      let s;
      for await (const o of i) {
        if (this.isErrorEvent(o.event)) {
          const a = `Error stream processing upload: indexing failed: ${o.event}`;
          throw new _t(a, o.event, o.extra);
        }
        o.progress != null && r?.(o.progress),
          o?.extra?.total_tokens != null && (s = o.extra.total_tokens);
      }
      return s ? { fileTokenSize: s } : void 0;
    } catch (i) {
      throw i instanceof _t || (i instanceof Ae && i.isClientError())
        ? i
        : new _t(
            `Error stream processing upload: ${i}`,
            "stream_process_error",
          );
    }
  }
  static async markFileUploadFailed(t, r) {
    return Q.safePost("/files/{file_id}/upload-failed", {
      parameters: { path: { file_id: t } },
      requestBody: { error: r.error },
    });
  }
  static async getRetrievalStatus(t, r) {
    const n = await Q.safeGet("/files/{file_id}", {
      parameters: {
        path: { file_id: t },
        query: r != null ? { gizmo_id: r } : void 0,
      },
    });
    return {
      name: n.name,
      status: n.metadata?.retrieval?.status ?? im.Processing,
      error_code: n.metadata?.retrieval?.error_code,
      file_size_tokens: n.file_size_tokens,
    };
  }
  static async getFileDownloadLink(t, r, n = !1, i, s, o) {
    let a;
    const c = t.replaceAll("#", "*");
    if (i) {
      const l = new URLSearchParams();
      r != null && l.set("gizmo_id", r);
      const d = l.size > 0 ? `?${l.toString()}` : "";
      a = `${ae}/conversation/${i}/attachment/${c}/download${d}`;
    } else
      r != null &&
        (t.includes("?") ? (t += `&gizmo_id=${r}`) : (t += `?gizmo_id=${r}`)),
        s && (t.includes("?") ? (t += "&inline=true") : (t += "?inline=true")),
        (a = `${ae}/files/download/${t}`);
    const u = await oe.get(a, n ? { authOption: ee.Anonymous } : {});
    if (u.status === Bn.Success || u.status === Bn.Retry) return u;
    throw new _t(
      "Could not get file download link",
      "error_code" in u ? u.error_code : "unknown_error",
    );
  }
  static postClaimReferralInvite(t, r) {
    return oe.post(`${ae}/referral/invites/claim/${t}`, {
      parameters: { path: { invite_code: t } },
      requestBody: { workspace_id: r },
    });
  }
  static getClaimedReferralInvite() {
    return oe.get(`${ae}/referral/`);
  }
  static async deleteUserConnectedApp(t) {
    await Q.safeDelete("/connectors/user_setting/{connector_name}", {
      parameters: { path: { connector_name: t } },
    });
  }
  static getConnectorAccessTokenWithScope(t, r) {
    return oe.get(`${ae}/connectors/${t}/oauth/scoped_token`, {
      params: { oauth_scope: r },
    });
  }
  static async getReportReasons(t) {
    return oe.get(`${Vi}/report_flow/reasons/${t}`, {
      authOption: ee.SendIfAvailable,
    });
  }
  static async postReport(t) {
    return oe.post(`${Vi}/report_flow/report`, t, {
      authOption: ee.SendIfAvailable,
    });
  }
  static async getWorkspaceGroups(
    t,
    {
      query: r = "",
      offset: n = 0,
      orderby: i = "created_time desc",
      limit: s = 20,
    },
  ) {
    return Q.safeGet("/accounts/{account_id}/groups", {
      parameters: {
        path: { account_id: t },
        query: { query: r, offset: n, orderby: i, limit: s },
      },
    });
  }
  static async stopConversationProcess(t, r = !1) {
    return oe.post(
      `${ae}/stop_conversation`,
      { conversation_id: t, check_async_status: r },
      { authOption: ee.SendIfAvailable },
    );
  }
  static async generateAutocompletions(t, r, n, i) {
    return oe.post(`${ae}/conversation/experimental/generate_autocompletions`, {
      input_text: t,
      num_completions: r,
      in_search_mode: n,
      system_hint: i,
    });
  }
  static async generateAutocompletionsAnon(t, r, n, i) {
    return Q.safePost(
      "/conversation/experimental/generate_autocompletions_anon",
      {
        requestBody: {
          input_text: t,
          num_completions: r,
          in_search_mode: n,
          system_hint: i,
        },
        authOption: ee.Anonymous,
      },
    );
  }
  static async addEmailBegin(t) {
    return Q.safePost("/accounts/add_email/begin", {
      requestBody: { email: t, auth0_client_id: D2.AUTH0_CLIENT_ID },
      authOption: ee.Required,
    });
  }
  static async listWorkOSConnections(t) {
    return Q.safeGet("/accounts/{account_id}/sso/workos/connections/list", {
      authOption: ee.SendIfAvailable,
      parameters: { path: { account_id: t } },
    });
  }
  static async getOrCreateWorkOSConnection(t) {
    return Q.safePost("/accounts/{account_id}/sso/connections/workos", {
      requestBody: { enabled_client_names: ["chat"] },
      authOption: ee.SendIfAvailable,
      parameters: { path: { account_id: t } },
    });
  }
}
const py = ["system-hints"];
function O4(e) {
  return e.getQueryData(py);
}
function U2(e, t) {
  return mn({
    queryKey: py,
    queryFn: async () => {
      const r = await j2.getSystemHints();
      return (
        x.addFirstTiming("load.systemHints"),
        r.system_hints.map(
          ({
            name: n,
            description: i,
            action_label: s,
            short_label: o,
            logo: a,
            system_hint: c,
            required_features: u = [],
            required_models: l = [],
            required_conversation_modes: d = [],
            composer_bar_button_info: f,
            suggested_prompt: h,
            allow_in_temporary_chat: _,
            persist_between_messages: p,
            regex_matches: g,
            is_auto: y,
            category: E,
            requires_opt_in: A,
          }) => ({
            name: n,
            description: i,
            actionLabel: s ?? void 0,
            shortLabel: o ?? void 0,
            logo: a,
            systemHint: c,
            requiredFeatures: u,
            requiredModels: l,
            requiredConversationModes: d,
            composerBarButtonInfo: f
              ? {
                  announcementKey: f.announcement_key,
                  disabledText: f.disabled_text,
                  nuxTitle: f.nux_title,
                  nuxDescription: f.nux_description,
                  tooltipText: f.tooltip_text,
                  rateLimitReachedText: f.rate_limit_reached_text ?? void 0,
                }
              : void 0,
            suggestedPrompt: h
              ? {
                  theme: h.theme,
                  title: h.title,
                  subtitle: h.subtitle,
                  sortOrder: h.sort_order,
                  badge: h.badge ?? void 0,
                }
              : void 0,
            allowInTemporaryChat: _,
            persistBetweenMessages: !!p,
            regexMatches: g ?? void 0,
            isAuto: y,
            category: E,
            requiresOptIn: !!A,
          }),
        )
      );
    },
    select: t,
    staleTime: 1 / 0,
    enabled: e ?? !0,
  });
}
const B2 = ue.FREE,
  q2 = zn.OWNER,
  F2 = "AccountState";
Ax(F2, (e) => ({
  ...e,
  accountItems: e.accountItems.map((t) => new vs(t.data)),
}));
function gy(e) {
  return Date.parse(e) / 1e3;
}
function Gn(e) {
  if (e == null) return;
  const t = gy(e);
  if (!isNaN(t)) return t;
}
class vs {
  constructor(t) {
    this.data = t;
  }
  get id() {
    return this.data.id;
  }
  get residencyRegion() {
    return this.data.residencyRegion;
  }
  get structure() {
    return this.data.structure;
  }
  get organizationId() {
    return this.data.organizationId;
  }
  get name() {
    return this.data.name;
  }
  get features() {
    return this.data.features;
  }
  isEqual(t) {
    return DT(this.data, t.data);
  }
  get planType() {
    return this.data.subscriptionStatus.planType;
  }
  get canAccessWithCurrentSession() {
    return this.data.canAccessWithCurrentSession;
  }
  get ssoConnectionName() {
    return this.data.ssoConnectionName;
  }
  get isDelinquent() {
    return this.data.subscriptionStatus.isDelinquent;
  }
  get accountUserId() {
    return this.data.accountUserId;
  }
  get normalizedAccountUserId() {
    return this.isPersonalAccount() ? this.authUserId : this.data.accountUserId;
  }
  get authUserId() {
    return this.data.accountUserId?.split("__")[0];
  }
  get subscriptionAnalyticsParams() {
    const { subscriptionStatus: t } = this.data;
    return {
      currentPlanType: t.planType,
      subscriptionStatus: {
        billingPeriod: t.billingPeriod,
        hasPaidSubscription: t.hasPaidSubscription,
        subscriptionPlan: t.subscriptionPlan,
        subscriptionExpiresAt: t.subscriptionExpiresAt,
        wasPaidCustomer: t.wasPaidCustomer,
      },
    };
  }
  isResellerHosted() {
    return this.data.subscriptionStatus.isResellerHosted;
  }
  isEnterprisey() {
    return dy(this.data.subscriptionStatus.planType);
  }
  isRBACEnabled() {
    return this.isEnterprisey();
  }
  isWorkspacePlan() {
    return this.isEnterprisey() || this.isTeam();
  }
  isPro() {
    return this.data.subscriptionStatus.planType === ue.PRO;
  }
  isEdu() {
    return this.data.subscriptionStatus.planType === ue.EDU;
  }
  isTeam() {
    return this.data.subscriptionStatus.planType === ue.TEAM;
  }
  isPlus() {
    return this.data.subscriptionStatus.planType === ue.PLUS;
  }
  isFree() {
    return this.data.subscriptionStatus.planType === ue.FREE;
  }
  isWorkspaceAccount() {
    return this.data.structure === ke.WORKSPACE;
  }
  isPlusOrPro() {
    return this.isPlus() || this.isPro();
  }
  getWorkspaceId() {
    if (this.isWorkspaceAccount()) return this.id;
  }
  getDaysUntilPlanRenews() {
    const t = this.data.subscriptionStatus.subscriptionRenewsAt;
    if (t == null) return null;
    const r = Math.floor(Date.now() / 1e3);
    return Math.ceil((t - r) / (60 * 60 * 24));
  }
  getDaysUntilPlanDiscountExpires() {
    const t = Gn(this.data.subscriptionStatus.discount?.discount_expires_at);
    if (t == null) return null;
    const r = Math.floor(Date.now() / 1e3);
    return Math.ceil((t - r) / (60 * 60 * 24));
  }
  isPersonalAccount() {
    return this.data.structure === ke.PERSONAL;
  }
  hasPaidSubscription() {
    return this.data.subscriptionStatus.hasPaidSubscription;
  }
  isActiveSubscriptionGratis() {
    return this.data.subscriptionStatus.isActiveSubscriptionGratis;
  }
  getSubscriptionBillingCurrency() {
    return this.data.subscriptionStatus.billingCurrency;
  }
  mustGetSubscriptionBillingCurrency(t) {
    const r = this.getSubscriptionBillingCurrency();
    return r !== void 0
      ? (x.addAction("chatgpt_present_subscription_billing_currency", {
          subscriptionBillingCurrency: r,
          callLocation: t,
        }),
        X.logEvent("chatgpt_present_subscription_billing_currency", null, {
          subscriptionBillingCurrency: r,
          callLocation: t,
        }),
        r)
      : (x.addError(
          new Error("chatgpt_missing_subscription_billing_currency"),
          { callLocation: t },
        ),
        X.logEvent("chatgpt_missing_subscription_billing_currency", null, {
          callLocation: t,
        }),
        ly);
  }
  willRenewSubscription() {
    return this.data.subscriptionStatus.lastActiveSubscription.will_renew;
  }
  willPlanChange() {
    return !!this.data.subscriptionStatus.scheduledPlanChange;
  }
  getDaysUntilPlanChanges() {
    const t = this.data.subscriptionStatus.scheduledPlanChange?.changesAt;
    if (t == null) return null;
    const r = Math.floor(Date.now() / 1e3);
    return Math.ceil((t - r) / (60 * 60 * 24));
  }
  getNextPlanType() {
    return this.data.subscriptionStatus.scheduledPlanChange?.planType ?? null;
  }
  getLastActiveSubscription() {
    return this.data.subscriptionStatus.lastActiveSubscription;
  }
  isDeactivated() {
    return this.data.deactivated;
  }
  canInviteMembers() {
    return (
      this.isTeam() ||
      (this.isEnterprisey() &&
        (this.isOwnerOfAccount() || this.isAdminOfAccount()))
    );
  }
  isOwnerOfAccount() {
    return this.data.role === zn.OWNER;
  }
  isAdminOfAccount() {
    return this.data.role === zn.ADMIN;
  }
  isStandardUserOfAccount() {
    return this.data.role === zn.STANDARD;
  }
  hasPlusFeatures() {
    return this.hasPaidSubscription() || this.isEnterprisey();
  }
  hasCustomerObject() {
    return this.data.subscriptionStatus.hasCustomerObject;
  }
  getProcessorEntity() {
    return this.data.subscriptionStatus.processorEntity;
  }
  wasPaidCustomer() {
    return (
      !this.data.subscriptionStatus.hasPaidSubscription &&
      this.data.subscriptionStatus.wasPaidCustomer
    );
  }
  isOrWasPaidCustomer() {
    return (
      this.data.subscriptionStatus.hasPaidSubscription ||
      this.data.subscriptionStatus.wasPaidCustomer
    );
  }
  hasClaimedFreeTrial() {
    return this.data.promoData?.has_claimed_free_trial ?? !1;
  }
  isEligibleForCancellationPromotion() {
    return this.data.subscriptionStatus.isEligibleForCancellationPromotion;
  }
}
class Dd {
  constructor(t) {
    this.data = t;
  }
  static fromLightAccount(t, r) {
    return new Dd({ lightAccount: t, authUserId: r });
  }
  get id() {
    return this.data.lightAccount.id;
  }
  get authUserId() {
    return this.data.authUserId;
  }
  get structure() {
    return this.data.lightAccount.structure;
  }
  get planType() {
    return this.data.lightAccount.planType;
  }
  get accountUserId() {
    return this.data.authUserId
      ? this.data.authUserId + "__" + this.data.lightAccount.id
      : void 0;
  }
  get normalizedAccountUserId() {
    return this.isPersonalAccount() ? this.data.authUserId : this.accountUserId;
  }
  isEnterprisey() {
    return dy(this.planType);
  }
  isQuorum() {
    return kT(this.planType);
  }
  isRBACEnabled() {
    return this.isEnterprisey();
  }
  isWorkspacePlan() {
    return this.isEnterprisey() || this.isTeam();
  }
  isPro() {
    return this.planType === ue.PRO;
  }
  isEdu() {
    return this.planType === ue.EDU;
  }
  isTeam() {
    return this.planType === ue.TEAM;
  }
  isPlus() {
    return this.planType === ue.PLUS;
  }
  isFree() {
    return this.planType === ue.FREE;
  }
  hasPaidSubscription() {
    return MT(this.planType);
  }
  isWorkspaceAccount() {
    return this.structure === ke.WORKSPACE;
  }
  isPlusOrPro() {
    return this.isPlus() || this.isPro();
  }
  getWorkspaceId() {
    if (this.isWorkspaceAccount()) return this.id;
  }
  isPersonalAccount() {
    return this.structure === ke.PERSONAL;
  }
  hasPlusFeatures() {
    return this.planType !== ue.FREE;
  }
}
function G2(e) {
  return e.account_ordering.map((t) => {
    const r = e.accounts[t];
    return new vs({
      id: r.account.account_id,
      residencyRegion: r.account.account_residency_region,
      accountUserId: r.account.account_user_id,
      name: r.account.name ?? null,
      profilePictureId: r.account.profile_picture_id,
      profilePictureUrl: r.account.profile_picture_url,
      structure: r.account.structure,
      role: r.account.account_user_role ?? q2,
      organizationId: r.account.organization_id,
      promoData: r.account.promo_data,
      deactivated: r.account.is_deactivated,
      subscriptionStatus: {
        billingPeriod: r.entitlement.billing_period,
        hasPaidSubscription: r.entitlement.has_active_subscription || !1,
        isActiveSubscriptionGratis:
          r.entitlement.is_active_subscription_gratis || !1,
        billingCurrency: r.entitlement.billing_currency,
        subscriptionPlan: r.entitlement.subscription_plan,
        planType: r.account.plan_type ?? B2,
        subscriptionRenewsAt: Gn(r.entitlement.renews_at),
        subscriptionExpiresAt: Gn(r.entitlement.expires_at),
        scheduledPlanChange: r.entitlement.scheduled_plan_change
          ? {
              changesAt: gy(r.entitlement.scheduled_plan_change.changes_at),
              planType: r.entitlement.scheduled_plan_change.plan_type,
            }
          : void 0,
        wasPaidCustomer: r.account.has_previously_paid_subscription ?? !1,
        hasCustomerObject: r.account.processor?.a001.has_customer_object ?? !1,
        processorEntity: r.account.processor?.a001.processor_entity,
        lastActiveSubscription: r.last_active_subscription,
        isResellerHosted: r.account.reseller_hosted_account ?? !1,
        discount: r.entitlement.discount,
        isEligibleForCancellationPromotion:
          r.entitlement.is_eligible_for_cp ?? !1,
        isDelinquent: r.entitlement.is_delinquent,
        becameDelinquentAt: Gn(r.entitlement.became_delinquent_timestamp),
        gracePeriodEndAt: Gn(r.entitlement.grace_period_end_timestamp),
      },
      features: [...r.features].sort(),
      canAccessWithCurrentSession: r.can_access_with_session !== !1,
      ssoConnectionName: r.sso_connection_name ?? null,
    });
  });
}
function V2(e, t) {
  const r = e.filter((i) => i.canAccessWithCurrentSession);
  if (typeof t == "string") {
    const i = r.find((s) => s.id === t);
    if (i !== void 0) return i;
    if (t === pr) {
      const s = r.find((o) => o.structure === ke.PERSONAL);
      if (s !== void 0) return s;
    }
  }
  if (r.length === 1 || !r.some((i) => i.structure === ke.WORKSPACE))
    return r[0];
}
function $2(e, t) {
  if (e) {
    if (e.structure === ke.WORKSPACE) return e.id;
    if (t.some((n) => n.structure === ke.WORKSPACE)) return pr;
  }
}
async function H2() {
  const e = await Q.safeGet("/accounts/check/{version}", {
      parameters: {
        path: { version: NS },
        query: {
          timezone_offset_min: new Date().getTimezoneOffset().toString(),
        },
      },
      intercomEventOnError: "fetch-error:accounts:get",
      authOption: ee.SendIfAvailable,
    }),
    t = $.getCookie(q.Workspace) ?? void 0,
    r = G2(e),
    n = V2(r, t);
  return { accountItems: r, currentAccountId: n?.id };
}
function z2(e, t) {
  return e instanceof vs && t instanceof vs && e.isEqual(t) ? e : E1(e, t);
}
function Wt() {
  return Vl({
    queryKey: ["account-status"],
    queryFn: H2,
    structuralSharing: z2,
    staleTime: 1 / 0,
  });
}
function Md(e) {
  return e?.accountItems.find((t) => t.id === e.currentAccountId) ?? null;
}
function x4(e) {
  const t = e.getQueryData(Wt().queryKey);
  return Md(t);
}
function ml(e) {
  e != null
    ? $.setCookie(q.Workspace, e, { maxAge: Rm })
    : $.deleteCookie(q.Workspace);
}
function W2(e) {
  $.setCookie(q.WorkspaceResidencyRegion, e, { maxAge: Rm });
}
function _y(e, t) {
  const r = $.getCookie(q.Workspace);
  return (
    e.structure === ke.WORKSPACE
      ? (ml(e.id), W2(e.residencyRegion))
      : e.structure === ke.PERSONAL && t && ml(pr),
    $.deleteCookie(q.DowngradeAccountEnabled),
    { accountCookieChanged: (r ?? pr) !== ($.getCookie(q.Workspace) ?? pr) }
  );
}
function R4(e, t, r = !0) {
  const n = e.getQueryData(Wt().queryKey);
  if (n == null) return { updatedAccount: !1 };
  const i = n.accountItems.find((s) => s.id === t);
  return i == null
    ? { updatedAccount: !1 }
    : (_y(i, r),
      e.setQueryData(Wt().queryKey, { ...n, currentAccountId: t }),
      { updatedAccount: !0 });
}
function I4(e, t, r, n, i, s = !0) {
  const o = e.getQueryData(Wt().queryKey);
  if (o == null) return { willRedirect: !1, updatedAccount: !1 };
  const a = o.accountItems.find((u) => u.id === t);
  if (a == null) return { willRedirect: !1, updatedAccount: !1 };
  const { accountCookieChanged: c } = _y(a, s);
  if (!a.canAccessWithCurrentSession) {
    const u = a.ssoConnectionName
        ? { connection: a.ssoConnectionName }
        : void 0,
      l = n.formatMessage(Jg.workspacePlaceholder),
      d = a.data.name || l;
    return (
      i.info(n.formatMessage(Jg.authenticateNotice, { workspaceName: d })),
      r({ authType: "login", additionalAuthParams: u }),
      { willRedirect: !0, updatedAccount: !0 }
    );
  }
  return (
    c ? _d() : e.setQueryData(Wt().queryKey, { ...o, currentAccountId: t }),
    { willRedirect: !1, updatedAccount: !0 }
  );
}
function T4() {
  return mn(Wt());
}
function oo() {
  return mn({ ...Wt(), select: Md }).data ?? null;
}
function K2(e) {
  const t = new WeakMap();
  return (r, ...n) => {
    if (t.has(r)) return t.get(r);
    const i = e(r, ...n);
    return t.set(r, i), i;
  };
}
const vy = K2((e, t) => Dd.fromLightAccount(e, t));
function P4(e) {
  const t = Ps(e),
    r = t?.user?.id,
    n = t?.account ?? null;
  return n ? vy(n, r) : null;
}
function Y2() {
  const { session: e } = KE(),
    t = e?.user?.id,
    r = e?.account ?? null;
  return r ? vy(r, t) : null;
}
function J2() {
  return oo()?.features;
}
function k4(e) {
  return J2()?.includes(e) ?? !1;
}
function N4() {
  const e = oo(),
    t = wT(e?.getWorkspaceId()),
    r = t.isLoading
      ? null
      : t.data?.allow_third_party_gpts === "allow_specific";
  return e?.isOwnerOfAccount() && r;
}
function L4(e) {
  return e.accountItems.some((t) => t.hasPlusFeatures());
}
function D4(e) {
  const r = oo()?.isRBACEnabled(),
    n = U2(r);
  return r ? n.data?.some((i) => i.systemHint === e) : !0;
}
const Jg = Rr({
  authenticateNotice: {
    id: "zALe8U",
    defaultMessage:
      "You need to authenticate to access {workspaceName}. Redirecting...",
  },
  workspacePlaceholder: { id: "IIY4N4", defaultMessage: "this workspace" },
});
class Z2 {
  #e;
  #t = (t) => (
    this.#e ||
      (this.#e = k(
        () => import("./lip667d8t42poxum.js").then((r) => r.ay),
        [],
      ).then((r) => r?.datadogLogs)),
    this.#e.then((r) => r && t(r))
  );
  init(t) {
    this.#t((r) => r.init(t));
  }
  setGlobalContextProperty(t, r) {
    this.#t((n) => n.setGlobalContextProperty(t, r));
  }
  setUser(t) {
    this.#t((r) => r.setUser(t));
  }
  get logger() {
    return {
      setHandler: (t) => {
        this.#t((r) => r.logger.setHandler(t));
      },
    };
  }
  createLogger(t, r) {
    return new Q2(this.#t, t, r);
  }
}
class Q2 {
  #e;
  constructor(t, r, n) {
    this.#e = t((i) => i.createLogger(r, n));
  }
  #t = (t) => this.#e.then((r) => r && t(r));
  ok(t, r, n) {
    this.#t((i) => i.ok(t, r, n));
  }
  debug(t, r, n) {
    this.#t((i) => i.debug(t, r, n));
  }
  info(t, r, n) {
    this.#t((i) => i.info(t, r, n));
  }
  notice(t, r, n) {
    this.#t((i) => i.notice(t, r, n));
  }
  warn(t, r, n) {
    this.#t((i) => i.warn(t, r, n));
  }
  error(t, r, n) {
    this.#t((i) => i.error(t, r, n));
  }
  critical(t, r, n) {
    this.#t((i) => i.critical(t, r, n));
  }
  alert(t, r, n) {
    this.#t((i) => i.alert(t, r, n));
  }
  emerg(t, r, n) {
    this.#t((i) => i.emerg(t, r, n));
  }
}
const qr = new Z2(),
  X2 = "datadoghq.com",
  eP = "chatgpt-web",
  tP = "pub1f79f8ac903a5872ae5f53026d20a77c";
class rP {
  initialize() {
    const t = Os ? pe?.getTelemetryConfig?.() : void 0,
      r = t !== void 0 ? t.datadogService : eP;
    qr.init({
      clientToken: tP,
      site: X2,
      service: r,
      env: "prod",
      version: "4dc7f8dcbaf358ca582fa5ec3f4acf92747879cc",
      sessionSampleRate: 100,
      forwardErrorsToLogs: !1,
      beforeSend: (n) => (
        (n.view.url = Hn(n.view.url)),
        n.http && n.http.url && (n.http.url = Hn(n.http.url)),
        !0
      ),
    }),
      qr.setGlobalContextProperty("track", "stable"),
      qr.setGlobalContextProperty("is_electron_desktop_app", t !== void 0),
      qr.logger.setHandler(["http"]);
  }
  setUser(t, r) {
    const n = {
      user_id: t.id,
      account_plan_type: r?.planType,
      workspace_id: r?.id,
    };
    qr.setUser(n);
  }
  createLogger(t, r = "info", n = "http", i) {
    return qr.createLogger(t, { level: r, handler: n, context: i });
  }
}
const Zg = new rP();
function Qg(e) {
  return new Promise((t) => {
    setTimeout(() => t(e()), 0);
  });
}
function nP() {
  const e = "scheduler" in globalThis;
  if (!e) return { supportsScheduler: e, supportsYield: !1 };
  const r = "yield" in globalThis.scheduler;
  return { supportsScheduler: e, supportsYield: r };
}
let uu;
function iP() {
  const e = globalThis.scheduler,
    { supportsScheduler: t, supportsYield: r } = nP();
  return e && r
    ? e
    : t && !r
      ? (Object.defineProperty(e, "yield", {
          value: () => e.postTask(() => {}),
        }),
        e)
      : (uu || (uu = { postTask: Qg, yield: () => Qg(() => {}) }), uu);
}
class sP {
  scheduler;
  setScheduler() {
    this.scheduler || (this.scheduler = iP());
  }
  postTask(t, r) {
    return this.setScheduler(), this.scheduler.postTask(t, r);
  }
  yield() {
    return this.setScheduler(), this.scheduler.yield();
  }
}
const bl = new sP();
let Xg = !1;
if (Rv()) {
  const e = (function () {
    return window.location.pathname !== "/search"
      ? void 0
      : { sessionSampleRate: 100, traceSampleRate: 100 };
  })();
  x.initialize(e);
}
async function oP(e, t, r) {
  if (Xg) return;
  (Xg = !0),
    De(e).checkGate("4011688770") &&
      k(
        () => import("./octpodh4rp52fi7z.js"),
        __vite__mapDeps([3, 4, 1, 5]),
      ).then((s) => s?.initOpenTelemetry());
  const i = new URL(location.href);
  if (
    (i.searchParams.get("refresh_account") === "true" &&
      (i.searchParams.delete("refresh_account"),
      history.replaceState(null, "", i)),
    window.addEventListener("vite:preloadError", (s) => {
      s.preventDefault(),
        x.addAction("vite:preloadError", { payload: s.payload });
    }),
    yn(),
    $A(),
    x.addTiming("chatgpt.web.bootstrapClient"),
    x.addAction("bootstrap_client.start"),
    window.__oai_SSR_HTML
      ? x.addFirstTiming("composer.html", window.__oai_SSR_HTML)
      : (window.__oai_logHTML = () => {
          x.addFirstTiming("composer.html");
        }),
    window.__oai_SSR_TTI
      ? x.addFirstTiming("composer.visible", window.__oai_SSR_TTI)
      : (window.__oai_logTTI = () => {
          x.addFirstTiming("composer.visible");
        }),
    Rv() && Zg.initialize(),
    t.authStatus === rn.LoggedIn)
  ) {
    const s = t.user,
      o = t.session?.account;
    if ((x.addAction("bootstrap_client.has_session_user"), o)) {
      const a = $.getCookie(q.Workspace),
        c = a === pr ? void 0 : a,
        u = o.structure === ke.WORKSPACE ? o.id : void 0;
      c !== u &&
        x.addAction("bootstrap_client.account_cookie_mismatch", {
          accountCookieValue: a,
          lightAccount: o,
        });
    }
    r
      .fetchQuery(Wt())
      .then((a) => {
        const c = Md(a),
          u = $.getCookie(q.Workspace),
          l = $2(c, a.accountItems);
        u !== l && ml(l),
          c && o && (c.id !== o.id || c.planType !== o.planType) && _d();
      })
      .catch((a) => {
        if (!(a instanceof Ae && a.isClientError()))
          return (
            x.addAction("bootstrap_client.fetchAccounts.error", { error: a }),
            null
          );
      }),
      rx(s, o),
      x.setUser(s, o),
      Zg.setUser(s, o),
      le.initialize({
        userInfo: { currentAccount: o ?? null, sessionUser: s },
      }),
      x.addAction("bootstrap_client.success.is_authenticated", {
        hasCurrentAccount: !0,
      }),
      Wu(e, "4141006638")
        ? bl.yield().then(() => uy(e))
        : Wu(e, "1281927149") && bl.yield().then(() => ET(e));
  } else
    x.addAction("bootstrap_client.does_not_have_session_user"),
      le.initialize(),
      x.addAction("bootstrap_client.success.is_not_authenticated");
  fetch(`${ae}/edge`).catch(() => {});
}
async function aP() {
  if (!("container" in document.documentElement.style)) {
    performance.mark("polyfill.containerQuery.start");
    try {
      await k(() => import("./ju44vdme8sg2h8v1.js"), []);
    } catch (e) {
      return (
        x.addError(
          new Error("Error loading polyfill: containerQuery", { cause: e }),
        ),
        Promise.reject(e)
      );
    }
    performance.mark("polyfill.containerQuery.end"),
      performance.measure(
        "polyfill.containerQuery",
        "polyfill.containerQuery.start",
        "polyfill.containerQuery.end",
      );
  }
}
async function cP() {
  if (
    !CSS.supports("animation-timeline: --works") ||
    window.ViewTimeline === void 0
  ) {
    performance.mark("polyfill.scrollTimeline.start");
    try {
      await k(() => import("./mv7t0tsdviudgwx9.js"), []);
    } catch (e) {
      return (
        x.addAction("Error loading polyfill: scrollTimeline", { cause: e }),
        Promise.reject(e)
      );
    }
    performance.mark("polyfill.scrollTimeline.end"),
      performance.measure(
        "polyfill.scrollTimeline",
        "polyfill.scrollTimeline.start",
        "polyfill.scrollTimeline.end",
      );
  }
}
async function uP() {
  performance.mark("polyfill.all.start"),
    await Promise.allSettled([aP(), cP()]),
    performance.mark("polyfill.all.end"),
    performance.measure(
      "polyfill.all",
      "polyfill.all.start",
      "polyfill.all.end",
    );
}
const jd = v.createContext({
  cspScriptNonce: void 0,
  isElectron: !1,
  isIos: !1,
  isAndroidChrome: !1,
  windowStyle: void 0,
});
function M4(e) {
  return e.windowStyle === "chatbar_view";
}
const my = () => {},
  lP = () => my;
function by(e) {
  return v.useSyncExternalStore(lP, e, my);
}
function yy() {
  return by(() => !0) ?? !1;
}
function dP() {
  return yy() ? window : null;
}
function Se(e, t, { checkForDefaultPrevented: r = !0 } = {}) {
  return function (i) {
    if ((e?.(i), r === !1 || !i.defaultPrevented)) return t?.(i);
  };
}
function fP(e, t) {
  typeof e == "function" ? e(t) : e != null && (e.current = t);
}
function Sy(...e) {
  return (t) => e.forEach((r) => fP(r, t));
}
function st(...e) {
  return v.useCallback(Sy(...e), e);
}
function hP(e, t) {
  const r = v.createContext(t),
    n = (s) => {
      const { children: o, ...a } = s,
        c = v.useMemo(() => a, Object.values(a));
      return m.jsx(r.Provider, { value: c, children: o });
    };
  n.displayName = e + "Provider";
  function i(s) {
    const o = v.useContext(r);
    if (o) return o;
    if (t !== void 0) return t;
    throw new Error(`\`${s}\` must be used within \`${e}\``);
  }
  return [n, i];
}
function Ey(e, t = []) {
  let r = [];
  function n(s, o) {
    const a = v.createContext(o),
      c = r.length;
    r = [...r, o];
    const u = (d) => {
      const { scope: f, children: h, ..._ } = d,
        p = f?.[e]?.[c] || a,
        g = v.useMemo(() => _, Object.values(_));
      return m.jsx(p.Provider, { value: g, children: h });
    };
    u.displayName = s + "Provider";
    function l(d, f) {
      const h = f?.[e]?.[c] || a,
        _ = v.useContext(h);
      if (_) return _;
      if (o !== void 0) return o;
      throw new Error(`\`${d}\` must be used within \`${s}\``);
    }
    return [u, l];
  }
  const i = () => {
    const s = r.map((o) => v.createContext(o));
    return function (a) {
      const c = a?.[e] || s;
      return v.useMemo(() => ({ [`__scope${e}`]: { ...a, [e]: c } }), [a, c]);
    };
  };
  return (i.scopeName = e), [n, pP(i, ...t)];
}
function pP(...e) {
  const t = e[0];
  if (e.length === 1) return t;
  const r = () => {
    const n = e.map((i) => ({ useScope: i(), scopeName: i.scopeName }));
    return function (s) {
      const o = n.reduce((a, { useScope: c, scopeName: u }) => {
        const d = c(s)[`__scope${u}`];
        return { ...a, ...d };
      }, {});
      return v.useMemo(() => ({ [`__scope${t.scopeName}`]: o }), [o]);
    };
  };
  return (r.scopeName = t.scopeName), r;
}
var Sr = globalThis?.document ? v.useLayoutEffect : () => {},
  gP = w1.useId || (() => {}),
  _P = 0;
function Ki(e) {
  const [t, r] = v.useState(gP());
  return (
    Sr(() => {
      r((n) => n ?? String(_P++));
    }, [e]),
    e || (t ? `radix-${t}` : "")
  );
}
function Kt(e) {
  const t = v.useRef(e);
  return (
    v.useEffect(() => {
      t.current = e;
    }),
    v.useMemo(
      () =>
        (...r) =>
          t.current?.(...r),
      [],
    )
  );
}
function wy({ prop: e, defaultProp: t, onChange: r = () => {} }) {
  const [n, i] = vP({ defaultProp: t, onChange: r }),
    s = e !== void 0,
    o = s ? e : n,
    a = Kt(r),
    c = v.useCallback(
      (u) => {
        if (s) {
          const d = typeof u == "function" ? u(e) : u;
          d !== e && a(d);
        } else i(u);
      },
      [s, e, i, a],
    );
  return [o, c];
}
function vP({ defaultProp: e, onChange: t }) {
  const r = v.useState(e),
    [n] = r,
    i = v.useRef(n),
    s = Kt(t);
  return (
    v.useEffect(() => {
      i.current !== n && (s(n), (i.current = n));
    }, [n, i, s]),
    r
  );
}
var Ud = v.forwardRef((e, t) => {
  const { children: r, ...n } = e,
    i = v.Children.toArray(r),
    s = i.find(mP);
  if (s) {
    const o = s.props.children,
      a = i.map((c) =>
        c === s
          ? v.Children.count(o) > 1
            ? v.Children.only(null)
            : v.isValidElement(o)
              ? o.props.children
              : null
          : c,
      );
    return m.jsx(yl, {
      ...n,
      ref: t,
      children: v.isValidElement(o) ? v.cloneElement(o, void 0, a) : null,
    });
  }
  return m.jsx(yl, { ...n, ref: t, children: r });
});
Ud.displayName = "Slot";
var yl = v.forwardRef((e, t) => {
  const { children: r, ...n } = e;
  if (v.isValidElement(r)) {
    const i = yP(r);
    return v.cloneElement(r, { ...bP(n, r.props), ref: t ? Sy(t, i) : i });
  }
  return v.Children.count(r) > 1 ? v.Children.only(null) : null;
});
yl.displayName = "SlotClone";
var Cy = ({ children: e }) => m.jsx(m.Fragment, { children: e });
function mP(e) {
  return v.isValidElement(e) && e.type === Cy;
}
function bP(e, t) {
  const r = { ...t };
  for (const n in t) {
    const i = e[n],
      s = t[n];
    /^on[A-Z]/.test(n)
      ? i && s
        ? (r[n] = (...a) => {
            s(...a), i(...a);
          })
        : i && (r[n] = i)
      : n === "style"
        ? (r[n] = { ...i, ...s })
        : n === "className" && (r[n] = [i, s].filter(Boolean).join(" "));
  }
  return { ...e, ...r };
}
function yP(e) {
  let t = Object.getOwnPropertyDescriptor(e.props, "ref")?.get,
    r = t && "isReactWarning" in t && t.isReactWarning;
  return r
    ? e.ref
    : ((t = Object.getOwnPropertyDescriptor(e, "ref")?.get),
      (r = t && "isReactWarning" in t && t.isReactWarning),
      r ? e.props.ref : e.props.ref || e.ref);
}
var SP = [
    "a",
    "button",
    "div",
    "form",
    "h2",
    "h3",
    "img",
    "input",
    "label",
    "li",
    "nav",
    "ol",
    "p",
    "span",
    "svg",
    "ul",
  ],
  xe = SP.reduce((e, t) => {
    const r = v.forwardRef((n, i) => {
      const { asChild: s, ...o } = n,
        a = s ? Ud : t;
      return (
        typeof window < "u" && (window[Symbol.for("radix-ui")] = !0),
        m.jsx(a, { ...o, ref: i })
      );
    });
    return (r.displayName = `Primitive.${t}`), { ...e, [t]: r };
  }, {});
function EP(e, t) {
  e && $l.flushSync(() => e.dispatchEvent(t));
}
function wP(e, t = globalThis?.document) {
  const r = Kt(e);
  v.useEffect(() => {
    const n = (i) => {
      i.key === "Escape" && r(i);
    };
    return (
      t.addEventListener("keydown", n, { capture: !0 }),
      () => t.removeEventListener("keydown", n, { capture: !0 })
    );
  }, [r, t]);
}
var CP = "DismissableLayer",
  Sl = "dismissableLayer.update",
  AP = "dismissableLayer.pointerDownOutside",
  OP = "dismissableLayer.focusOutside",
  e_,
  Ay = v.createContext({
    layers: new Set(),
    layersWithOutsidePointerEventsDisabled: new Set(),
    branches: new Set(),
  }),
  ao = v.forwardRef((e, t) => {
    const {
        disableOutsidePointerEvents: r = !1,
        onEscapeKeyDown: n,
        onPointerDownOutside: i,
        onFocusOutside: s,
        onInteractOutside: o,
        onDismiss: a,
        ...c
      } = e,
      u = v.useContext(Ay),
      [l, d] = v.useState(null),
      f = l?.ownerDocument ?? globalThis?.document,
      [, h] = v.useState({}),
      _ = st(t, (C) => d(C)),
      p = Array.from(u.layers),
      [g] = [...u.layersWithOutsidePointerEventsDisabled].slice(-1),
      y = p.indexOf(g),
      E = l ? p.indexOf(l) : -1,
      A = u.layersWithOutsidePointerEventsDisabled.size > 0,
      b = E >= y,
      S = RP((C) => {
        const O = C.target,
          T = [...u.branches].some((I) => I.contains(O));
        !b || T || (i?.(C), o?.(C), C.defaultPrevented || a?.());
      }, f),
      w = IP((C) => {
        const O = C.target;
        [...u.branches].some((I) => I.contains(O)) ||
          (s?.(C), o?.(C), C.defaultPrevented || a?.());
      }, f);
    return (
      wP((C) => {
        E === u.layers.size - 1 &&
          (n?.(C), !C.defaultPrevented && a && (C.preventDefault(), a()));
      }, f),
      v.useEffect(() => {
        if (l)
          return (
            r &&
              (u.layersWithOutsidePointerEventsDisabled.size === 0 &&
                ((e_ = f.body.style.pointerEvents),
                (f.body.style.pointerEvents = "none")),
              u.layersWithOutsidePointerEventsDisabled.add(l)),
            u.layers.add(l),
            t_(),
            () => {
              r &&
                u.layersWithOutsidePointerEventsDisabled.size === 1 &&
                (f.body.style.pointerEvents = e_);
            }
          );
      }, [l, f, r, u]),
      v.useEffect(
        () => () => {
          l &&
            (u.layers.delete(l),
            u.layersWithOutsidePointerEventsDisabled.delete(l),
            t_());
        },
        [l, u],
      ),
      v.useEffect(() => {
        const C = () => h({});
        return (
          document.addEventListener(Sl, C),
          () => document.removeEventListener(Sl, C)
        );
      }, []),
      m.jsx(xe.div, {
        ...c,
        ref: _,
        style: {
          pointerEvents: A ? (b ? "auto" : "none") : void 0,
          ...e.style,
        },
        onFocusCapture: Se(e.onFocusCapture, w.onFocusCapture),
        onBlurCapture: Se(e.onBlurCapture, w.onBlurCapture),
        onPointerDownCapture: Se(
          e.onPointerDownCapture,
          S.onPointerDownCapture,
        ),
      })
    );
  });
ao.displayName = CP;
var xP = "DismissableLayerBranch",
  Oy = v.forwardRef((e, t) => {
    const r = v.useContext(Ay),
      n = v.useRef(null),
      i = st(t, n);
    return (
      v.useEffect(() => {
        const s = n.current;
        if (s)
          return (
            r.branches.add(s),
            () => {
              r.branches.delete(s);
            }
          );
      }, [r.branches]),
      m.jsx(xe.div, { ...e, ref: i })
    );
  });
Oy.displayName = xP;
function RP(e, t = globalThis?.document) {
  const r = Kt(e),
    n = v.useRef(!1),
    i = v.useRef(() => {});
  return (
    v.useEffect(() => {
      const s = (a) => {
          if (a.target && !n.current) {
            let c = function () {
              xy(AP, r, u, { discrete: !0 });
            };
            const u = { originalEvent: a };
            a.pointerType === "touch"
              ? (t.removeEventListener("click", i.current),
                (i.current = c),
                t.addEventListener("click", i.current, { once: !0 }))
              : c();
          } else t.removeEventListener("click", i.current);
          n.current = !1;
        },
        o = window.setTimeout(() => {
          t.addEventListener("pointerdown", s);
        }, 0);
      return () => {
        window.clearTimeout(o),
          t.removeEventListener("pointerdown", s),
          t.removeEventListener("click", i.current);
      };
    }, [t, r]),
    { onPointerDownCapture: () => (n.current = !0) }
  );
}
function IP(e, t = globalThis?.document) {
  const r = Kt(e),
    n = v.useRef(!1);
  return (
    v.useEffect(() => {
      const i = (s) => {
        s.target &&
          !n.current &&
          xy(OP, r, { originalEvent: s }, { discrete: !1 });
      };
      return (
        t.addEventListener("focusin", i),
        () => t.removeEventListener("focusin", i)
      );
    }, [t, r]),
    {
      onFocusCapture: () => (n.current = !0),
      onBlurCapture: () => (n.current = !1),
    }
  );
}
function t_() {
  const e = new CustomEvent(Sl);
  document.dispatchEvent(e);
}
function xy(e, t, r, { discrete: n }) {
  const i = r.originalEvent.target,
    s = new CustomEvent(e, { bubbles: !1, cancelable: !0, detail: r });
  t && i.addEventListener(e, t, { once: !0 }),
    n ? EP(i, s) : i.dispatchEvent(s);
}
var j4 = ao,
  U4 = Oy,
  lu = "focusScope.autoFocusOnMount",
  du = "focusScope.autoFocusOnUnmount",
  r_ = { bubbles: !1, cancelable: !0 },
  TP = "FocusScope",
  Ry = v.forwardRef((e, t) => {
    const {
        loop: r = !1,
        trapped: n = !1,
        onMountAutoFocus: i,
        onUnmountAutoFocus: s,
        ...o
      } = e,
      [a, c] = v.useState(null),
      u = Kt(i),
      l = Kt(s),
      d = v.useRef(null),
      f = st(t, (p) => c(p)),
      h = v.useRef({
        paused: !1,
        pause() {
          this.paused = !0;
        },
        resume() {
          this.paused = !1;
        },
      }).current;
    v.useEffect(() => {
      if (n) {
        let p = function (A) {
            if (h.paused || !a) return;
            const b = A.target;
            a.contains(b) ? (d.current = b) : Dt(d.current, { select: !0 });
          },
          g = function (A) {
            if (h.paused || !a) return;
            const b = A.relatedTarget;
            b !== null && (a.contains(b) || Dt(d.current, { select: !0 }));
          },
          y = function (A) {
            if (document.activeElement === document.body)
              for (const S of A) S.removedNodes.length > 0 && Dt(a);
          };
        document.addEventListener("focusin", p),
          document.addEventListener("focusout", g);
        const E = new MutationObserver(y);
        return (
          a && E.observe(a, { childList: !0, subtree: !0 }),
          () => {
            document.removeEventListener("focusin", p),
              document.removeEventListener("focusout", g),
              E.disconnect();
          }
        );
      }
    }, [n, a, h.paused]),
      v.useEffect(() => {
        if (a) {
          i_.add(h);
          const p = document.activeElement;
          if (!a.contains(p)) {
            const y = new CustomEvent(lu, r_);
            a.addEventListener(lu, u),
              a.dispatchEvent(y),
              y.defaultPrevented ||
                (PP(MP(Iy(a)), { select: !0 }),
                document.activeElement === p && Dt(a));
          }
          return () => {
            a.removeEventListener(lu, u),
              setTimeout(() => {
                const y = new CustomEvent(du, r_);
                a.addEventListener(du, l),
                  a.dispatchEvent(y),
                  y.defaultPrevented || Dt(p ?? document.body, { select: !0 }),
                  a.removeEventListener(du, l),
                  i_.remove(h);
              }, 0);
          };
        }
      }, [a, u, l, h]);
    const _ = v.useCallback(
      (p) => {
        if ((!r && !n) || h.paused) return;
        const g = p.key === "Tab" && !p.altKey && !p.ctrlKey && !p.metaKey,
          y = document.activeElement;
        if (g && y) {
          const E = p.currentTarget,
            [A, b] = kP(E);
          A && b
            ? !p.shiftKey && y === b
              ? (p.preventDefault(), r && Dt(A, { select: !0 }))
              : p.shiftKey &&
                y === A &&
                (p.preventDefault(), r && Dt(b, { select: !0 }))
            : y === E && p.preventDefault();
        }
      },
      [r, n, h.paused],
    );
    return m.jsx(xe.div, { tabIndex: -1, ...o, ref: f, onKeyDown: _ });
  });
Ry.displayName = TP;
function PP(e, { select: t = !1 } = {}) {
  const r = document.activeElement;
  for (const n of e)
    if ((Dt(n, { select: t }), document.activeElement !== r)) return;
}
function kP(e) {
  const t = Iy(e),
    r = n_(t, e),
    n = n_(t.reverse(), e);
  return [r, n];
}
function Iy(e) {
  const t = [],
    r = document.createTreeWalker(e, NodeFilter.SHOW_ELEMENT, {
      acceptNode: (n) => {
        const i = n.tagName === "INPUT" && n.type === "hidden";
        return n.disabled || n.hidden || i
          ? NodeFilter.FILTER_SKIP
          : n.tabIndex >= 0
            ? NodeFilter.FILTER_ACCEPT
            : NodeFilter.FILTER_SKIP;
      },
    });
  for (; r.nextNode(); ) t.push(r.currentNode);
  return t;
}
function n_(e, t) {
  for (const r of e) if (!NP(r, { upTo: t })) return r;
}
function NP(e, { upTo: t }) {
  if (getComputedStyle(e).visibility === "hidden") return !0;
  for (; e; ) {
    if (t !== void 0 && e === t) return !1;
    if (getComputedStyle(e).display === "none") return !0;
    e = e.parentElement;
  }
  return !1;
}
function LP(e) {
  return e instanceof HTMLInputElement && "select" in e;
}
function Dt(e, { select: t = !1 } = {}) {
  if (e && e.focus) {
    const r = document.activeElement;
    e.focus({ preventScroll: !0 }), e !== r && LP(e) && t && e.select();
  }
}
var i_ = DP();
function DP() {
  let e = [];
  return {
    add(t) {
      const r = e[0];
      t !== r && r?.pause(), (e = s_(e, t)), e.unshift(t);
    },
    remove(t) {
      (e = s_(e, t)), e[0]?.resume();
    },
  };
}
function s_(e, t) {
  const r = [...e],
    n = r.indexOf(t);
  return n !== -1 && r.splice(n, 1), r;
}
function MP(e) {
  return e.filter((t) => t.tagName !== "A");
}
var jP = "Portal",
  co = v.forwardRef((e, t) => {
    const { container: r, ...n } = e,
      [i, s] = v.useState(!1);
    Sr(() => s(!0), []);
    const o = r || (i && globalThis?.document?.body);
    return o ? Un.createPortal(m.jsx(xe.div, { ...n, ref: t }), o) : null;
  });
co.displayName = jP;
var B4 = co;
function UP(e, t) {
  return v.useReducer((r, n) => t[r][n] ?? r, e);
}
var Rn = (e) => {
  const { present: t, children: r } = e,
    n = BP(t),
    i =
      typeof r == "function" ? r({ present: n.isPresent }) : v.Children.only(r),
    s = st(n.ref, qP(i));
  return typeof r == "function" || n.isPresent
    ? v.cloneElement(i, { ref: s })
    : null;
};
Rn.displayName = "Presence";
function BP(e) {
  const [t, r] = v.useState(),
    n = v.useRef({}),
    i = v.useRef(e),
    s = v.useRef("none"),
    o = e ? "mounted" : "unmounted",
    [a, c] = UP(o, {
      mounted: { UNMOUNT: "unmounted", ANIMATION_OUT: "unmountSuspended" },
      unmountSuspended: { MOUNT: "mounted", ANIMATION_END: "unmounted" },
      unmounted: { MOUNT: "mounted" },
    });
  return (
    v.useEffect(() => {
      const u = Mi(n.current);
      s.current = a === "mounted" ? u : "none";
    }, [a]),
    Sr(() => {
      const u = n.current,
        l = i.current;
      if (l !== e) {
        const f = s.current,
          h = Mi(u);
        e
          ? c("MOUNT")
          : h === "none" || u?.display === "none"
            ? c("UNMOUNT")
            : c(l && f !== h ? "ANIMATION_OUT" : "UNMOUNT"),
          (i.current = e);
      }
    }, [e, c]),
    Sr(() => {
      if (t) {
        let u;
        const l = t.ownerDocument.defaultView ?? window,
          d = (h) => {
            const p = Mi(n.current).includes(h.animationName);
            if (h.target === t && p && (c("ANIMATION_END"), !i.current)) {
              const g = t.style.animationFillMode;
              (t.style.animationFillMode = "forwards"),
                (u = l.setTimeout(() => {
                  t.style.animationFillMode === "forwards" &&
                    (t.style.animationFillMode = g);
                }));
            }
          },
          f = (h) => {
            h.target === t && (s.current = Mi(n.current));
          };
        return (
          t.addEventListener("animationstart", f),
          t.addEventListener("animationcancel", d),
          t.addEventListener("animationend", d),
          () => {
            l.clearTimeout(u),
              t.removeEventListener("animationstart", f),
              t.removeEventListener("animationcancel", d),
              t.removeEventListener("animationend", d);
          }
        );
      } else c("ANIMATION_END");
    }, [t, c]),
    {
      isPresent: ["mounted", "unmountSuspended"].includes(a),
      ref: v.useCallback((u) => {
        u && (n.current = getComputedStyle(u)), r(u);
      }, []),
    }
  );
}
function Mi(e) {
  return e?.animationName || "none";
}
function qP(e) {
  let t = Object.getOwnPropertyDescriptor(e.props, "ref")?.get,
    r = t && "isReactWarning" in t && t.isReactWarning;
  return r
    ? e.ref
    : ((t = Object.getOwnPropertyDescriptor(e, "ref")?.get),
      (r = t && "isReactWarning" in t && t.isReactWarning),
      r ? e.props.ref : e.props.ref || e.ref);
}
var fu = 0;
function FP() {
  v.useEffect(() => {
    const e = document.querySelectorAll("[data-radix-focus-guard]");
    return (
      document.body.insertAdjacentElement("afterbegin", e[0] ?? o_()),
      document.body.insertAdjacentElement("beforeend", e[1] ?? o_()),
      fu++,
      () => {
        fu === 1 &&
          document
            .querySelectorAll("[data-radix-focus-guard]")
            .forEach((t) => t.remove()),
          fu--;
      }
    );
  }, []);
}
function o_() {
  const e = document.createElement("span");
  return (
    e.setAttribute("data-radix-focus-guard", ""),
    (e.tabIndex = 0),
    (e.style.outline = "none"),
    (e.style.opacity = "0"),
    (e.style.position = "fixed"),
    (e.style.pointerEvents = "none"),
    e
  );
}
var Yi = "right-scroll-bar-position",
  Ji = "width-before-scroll-bar",
  GP = "with-scroll-bars-hidden",
  VP = "--removed-body-scroll-bar-size";
function hu(e, t) {
  return typeof e == "function" ? e(t) : e && (e.current = t), e;
}
function $P(e, t) {
  var r = v.useState(function () {
    return {
      value: e,
      callback: t,
      facade: {
        get current() {
          return r.value;
        },
        set current(n) {
          var i = r.value;
          i !== n && ((r.value = n), r.callback(n, i));
        },
      },
    };
  })[0];
  return (r.callback = t), r.facade;
}
var a_ = new WeakMap();
function HP(e, t) {
  var r = $P(null, function (n) {
    return e.forEach(function (i) {
      return hu(i, n);
    });
  });
  return (
    v.useLayoutEffect(
      function () {
        var n = a_.get(r);
        if (n) {
          var i = new Set(n),
            s = new Set(e),
            o = r.current;
          i.forEach(function (a) {
            s.has(a) || hu(a, null);
          }),
            s.forEach(function (a) {
              i.has(a) || hu(a, o);
            });
        }
        a_.set(r, e);
      },
      [e],
    ),
    r
  );
}
function zP(e) {
  return e;
}
function WP(e, t) {
  t === void 0 && (t = zP);
  var r = [],
    n = !1,
    i = {
      read: function () {
        if (n)
          throw new Error(
            "Sidecar: could not `read` from an `assigned` medium. `read` could be used only with `useMedium`.",
          );
        return r.length ? r[r.length - 1] : e;
      },
      useMedium: function (s) {
        var o = t(s, n);
        return (
          r.push(o),
          function () {
            r = r.filter(function (a) {
              return a !== o;
            });
          }
        );
      },
      assignSyncMedium: function (s) {
        for (n = !0; r.length; ) {
          var o = r;
          (r = []), o.forEach(s);
        }
        r = {
          push: function (a) {
            return s(a);
          },
          filter: function () {
            return r;
          },
        };
      },
      assignMedium: function (s) {
        n = !0;
        var o = [];
        if (r.length) {
          var a = r;
          (r = []), a.forEach(s), (o = r);
        }
        var c = function () {
            var l = o;
            (o = []), l.forEach(s);
          },
          u = function () {
            return Promise.resolve().then(c);
          };
        u(),
          (r = {
            push: function (l) {
              o.push(l), u();
            },
            filter: function (l) {
              return (o = o.filter(l)), r;
            },
          });
      },
    };
  return i;
}
function KP(e) {
  e === void 0 && (e = {});
  var t = WP(null);
  return (t.options = jt({ async: !0, ssr: !1 }, e)), t;
}
var Ty = function (e) {
  var t = e.sideCar,
    r = gv(e, ["sideCar"]);
  if (!t)
    throw new Error(
      "Sidecar: please provide `sideCar` property to import the right car",
    );
  var n = t.read();
  if (!n) throw new Error("Sidecar medium not found");
  return v.createElement(n, jt({}, r));
};
Ty.isSideCarExport = !0;
function YP(e, t) {
  return e.useMedium(t), Ty;
}
var Py = KP(),
  pu = function () {},
  uo = v.forwardRef(function (e, t) {
    var r = v.useRef(null),
      n = v.useState({
        onScrollCapture: pu,
        onWheelCapture: pu,
        onTouchMoveCapture: pu,
      }),
      i = n[0],
      s = n[1],
      o = e.forwardProps,
      a = e.children,
      c = e.className,
      u = e.removeScrollBar,
      l = e.enabled,
      d = e.shards,
      f = e.sideCar,
      h = e.noIsolation,
      _ = e.inert,
      p = e.allowPinchZoom,
      g = e.as,
      y = g === void 0 ? "div" : g,
      E = e.gapMode,
      A = gv(e, [
        "forwardProps",
        "children",
        "className",
        "removeScrollBar",
        "enabled",
        "shards",
        "sideCar",
        "noIsolation",
        "inert",
        "allowPinchZoom",
        "as",
        "gapMode",
      ]),
      b = f,
      S = HP([r, t]),
      w = jt(jt({}, A), i);
    return v.createElement(
      v.Fragment,
      null,
      l &&
        v.createElement(b, {
          sideCar: Py,
          removeScrollBar: u,
          shards: d,
          noIsolation: h,
          inert: _,
          setCallbacks: s,
          allowPinchZoom: !!p,
          lockRef: r,
          gapMode: E,
        }),
      o
        ? v.cloneElement(v.Children.only(a), jt(jt({}, w), { ref: S }))
        : v.createElement(y, jt({}, w, { className: c, ref: S }), a),
    );
  });
uo.defaultProps = { enabled: !0, removeScrollBar: !0, inert: !1 };
uo.classNames = { fullWidth: Ji, zeroRight: Yi };
var JP = function () {
  if (typeof __webpack_nonce__ < "u") return __webpack_nonce__;
};
function ZP() {
  if (!document) return null;
  var e = document.createElement("style");
  e.type = "text/css";
  var t = JP();
  return t && e.setAttribute("nonce", t), e;
}
function QP(e, t) {
  e.styleSheet
    ? (e.styleSheet.cssText = t)
    : e.appendChild(document.createTextNode(t));
}
function XP(e) {
  var t = document.head || document.getElementsByTagName("head")[0];
  t.appendChild(e);
}
var ek = function () {
    var e = 0,
      t = null;
    return {
      add: function (r) {
        e == 0 && (t = ZP()) && (QP(t, r), XP(t)), e++;
      },
      remove: function () {
        e--,
          !e && t && (t.parentNode && t.parentNode.removeChild(t), (t = null));
      },
    };
  },
  tk = function () {
    var e = ek();
    return function (t, r) {
      v.useEffect(
        function () {
          return (
            e.add(t),
            function () {
              e.remove();
            }
          );
        },
        [t && r],
      );
    };
  },
  ky = function () {
    var e = tk(),
      t = function (r) {
        var n = r.styles,
          i = r.dynamic;
        return e(n, i), null;
      };
    return t;
  },
  rk = { left: 0, top: 0, right: 0, gap: 0 },
  gu = function (e) {
    return parseInt(e || "", 10) || 0;
  },
  nk = function (e) {
    var t = window.getComputedStyle(document.body),
      r = t[e === "padding" ? "paddingLeft" : "marginLeft"],
      n = t[e === "padding" ? "paddingTop" : "marginTop"],
      i = t[e === "padding" ? "paddingRight" : "marginRight"];
    return [gu(r), gu(n), gu(i)];
  },
  ik = function (e) {
    if ((e === void 0 && (e = "margin"), typeof window > "u")) return rk;
    var t = nk(e),
      r = document.documentElement.clientWidth,
      n = window.innerWidth;
    return {
      left: t[0],
      top: t[1],
      right: t[2],
      gap: Math.max(0, n - r + t[2] - t[0]),
    };
  },
  sk = ky(),
  Xr = "data-scroll-locked",
  ok = function (e, t, r, n) {
    var i = e.left,
      s = e.top,
      o = e.right,
      a = e.gap;
    return (
      r === void 0 && (r = "margin"),
      `
  .`
        .concat(
          GP,
          ` {
   overflow: hidden `,
        )
        .concat(
          n,
          `;
   padding-right: `,
        )
        .concat(a, "px ")
        .concat(
          n,
          `;
  }
  body[`,
        )
        .concat(
          Xr,
          `] {
    overflow: hidden `,
        )
        .concat(
          n,
          `;
    overscroll-behavior: contain;
    `,
        )
        .concat(
          [
            t && "position: relative ".concat(n, ";"),
            r === "margin" &&
              `
    padding-left: `
                .concat(
                  i,
                  `px;
    padding-top: `,
                )
                .concat(
                  s,
                  `px;
    padding-right: `,
                )
                .concat(
                  o,
                  `px;
    margin-left:0;
    margin-top:0;
    margin-right: `,
                )
                .concat(a, "px ")
                .concat(
                  n,
                  `;
    `,
                ),
            r === "padding" &&
              "padding-right: ".concat(a, "px ").concat(n, ";"),
          ]
            .filter(Boolean)
            .join(""),
          `
  }
  
  .`,
        )
        .concat(
          Yi,
          ` {
    right: `,
        )
        .concat(a, "px ")
        .concat(
          n,
          `;
  }
  
  .`,
        )
        .concat(
          Ji,
          ` {
    margin-right: `,
        )
        .concat(a, "px ")
        .concat(
          n,
          `;
  }
  
  .`,
        )
        .concat(Yi, " .")
        .concat(
          Yi,
          ` {
    right: 0 `,
        )
        .concat(
          n,
          `;
  }
  
  .`,
        )
        .concat(Ji, " .")
        .concat(
          Ji,
          ` {
    margin-right: 0 `,
        )
        .concat(
          n,
          `;
  }
  
  body[`,
        )
        .concat(
          Xr,
          `] {
    `,
        )
        .concat(VP, ": ")
        .concat(
          a,
          `px;
  }
`,
        )
    );
  },
  c_ = function () {
    var e = parseInt(document.body.getAttribute(Xr) || "0", 10);
    return isFinite(e) ? e : 0;
  },
  ak = function () {
    v.useEffect(function () {
      return (
        document.body.setAttribute(Xr, (c_() + 1).toString()),
        function () {
          var e = c_() - 1;
          e <= 0
            ? document.body.removeAttribute(Xr)
            : document.body.setAttribute(Xr, e.toString());
        }
      );
    }, []);
  },
  ck = function (e) {
    var t = e.noRelative,
      r = e.noImportant,
      n = e.gapMode,
      i = n === void 0 ? "margin" : n;
    ak();
    var s = v.useMemo(
      function () {
        return ik(i);
      },
      [i],
    );
    return v.createElement(sk, { styles: ok(s, !t, i, r ? "" : "!important") });
  },
  El = !1;
if (typeof window < "u")
  try {
    var ji = Object.defineProperty({}, "passive", {
      get: function () {
        return (El = !0), !0;
      },
    });
    window.addEventListener("test", ji, ji),
      window.removeEventListener("test", ji, ji);
  } catch {
    El = !1;
  }
var Fr = El ? { passive: !1 } : !1,
  uk = function (e) {
    return e.tagName === "TEXTAREA";
  },
  Ny = function (e, t) {
    if (!(e instanceof Element)) return !1;
    var r = window.getComputedStyle(e);
    return (
      r[t] !== "hidden" &&
      !(r.overflowY === r.overflowX && !uk(e) && r[t] === "visible")
    );
  },
  lk = function (e) {
    return Ny(e, "overflowY");
  },
  dk = function (e) {
    return Ny(e, "overflowX");
  },
  u_ = function (e, t) {
    var r = t.ownerDocument,
      n = t;
    do {
      typeof ShadowRoot < "u" && n instanceof ShadowRoot && (n = n.host);
      var i = Ly(e, n);
      if (i) {
        var s = Dy(e, n),
          o = s[1],
          a = s[2];
        if (o > a) return !0;
      }
      n = n.parentNode;
    } while (n && n !== r.body);
    return !1;
  },
  fk = function (e) {
    var t = e.scrollTop,
      r = e.scrollHeight,
      n = e.clientHeight;
    return [t, r, n];
  },
  hk = function (e) {
    var t = e.scrollLeft,
      r = e.scrollWidth,
      n = e.clientWidth;
    return [t, r, n];
  },
  Ly = function (e, t) {
    return e === "v" ? lk(t) : dk(t);
  },
  Dy = function (e, t) {
    return e === "v" ? fk(t) : hk(t);
  },
  pk = function (e, t) {
    return e === "h" && t === "rtl" ? -1 : 1;
  },
  gk = function (e, t, r, n, i) {
    var s = pk(e, window.getComputedStyle(t).direction),
      o = s * n,
      a = r.target,
      c = t.contains(a),
      u = !1,
      l = o > 0,
      d = 0,
      f = 0;
    do {
      var h = Dy(e, a),
        _ = h[0],
        p = h[1],
        g = h[2],
        y = p - g - s * _;
      (_ || y) && Ly(e, a) && ((d += y), (f += _)),
        a instanceof ShadowRoot ? (a = a.host) : (a = a.parentNode);
    } while ((!c && a !== document.body) || (c && (t.contains(a) || t === a)));
    return ((l && Math.abs(d) < 1) || (!l && Math.abs(f) < 1)) && (u = !0), u;
  },
  Ui = function (e) {
    return "changedTouches" in e
      ? [e.changedTouches[0].clientX, e.changedTouches[0].clientY]
      : [0, 0];
  },
  l_ = function (e) {
    return [e.deltaX, e.deltaY];
  },
  d_ = function (e) {
    return e && "current" in e ? e.current : e;
  },
  _k = function (e, t) {
    return e[0] === t[0] && e[1] === t[1];
  },
  vk = function (e) {
    return `
  .block-interactivity-`
      .concat(
        e,
        ` {pointer-events: none;}
  .allow-interactivity-`,
      )
      .concat(
        e,
        ` {pointer-events: all;}
`,
      );
  },
  mk = 0,
  Gr = [];
function bk(e) {
  var t = v.useRef([]),
    r = v.useRef([0, 0]),
    n = v.useRef(),
    i = v.useState(mk++)[0],
    s = v.useState(ky)[0],
    o = v.useRef(e);
  v.useEffect(
    function () {
      o.current = e;
    },
    [e],
  ),
    v.useEffect(
      function () {
        if (e.inert) {
          document.body.classList.add("block-interactivity-".concat(i));
          var p = C1([e.lockRef.current], (e.shards || []).map(d_), !0).filter(
            Boolean,
          );
          return (
            p.forEach(function (g) {
              return g.classList.add("allow-interactivity-".concat(i));
            }),
            function () {
              document.body.classList.remove("block-interactivity-".concat(i)),
                p.forEach(function (g) {
                  return g.classList.remove("allow-interactivity-".concat(i));
                });
            }
          );
        }
      },
      [e.inert, e.lockRef.current, e.shards],
    );
  var a = v.useCallback(function (p, g) {
      if (
        ("touches" in p && p.touches.length === 2) ||
        (p.type === "wheel" && p.ctrlKey)
      )
        return !o.current.allowPinchZoom;
      var y = Ui(p),
        E = r.current,
        A = "deltaX" in p ? p.deltaX : E[0] - y[0],
        b = "deltaY" in p ? p.deltaY : E[1] - y[1],
        S,
        w = p.target,
        C = Math.abs(A) > Math.abs(b) ? "h" : "v";
      if ("touches" in p && C === "h" && w.type === "range") return !1;
      var O = u_(C, w);
      if (!O) return !0;
      if ((O ? (S = C) : ((S = C === "v" ? "h" : "v"), (O = u_(C, w))), !O))
        return !1;
      if (
        (!n.current && "changedTouches" in p && (A || b) && (n.current = S), !S)
      )
        return !0;
      var T = n.current || S;
      return gk(T, g, p, T === "h" ? A : b);
    }, []),
    c = v.useCallback(function (p) {
      var g = p;
      if (!(!Gr.length || Gr[Gr.length - 1] !== s)) {
        var y = "deltaY" in g ? l_(g) : Ui(g),
          E = t.current.filter(function (S) {
            return (
              S.name === g.type &&
              (S.target === g.target || g.target === S.shadowParent) &&
              _k(S.delta, y)
            );
          })[0];
        if (E && E.should) {
          g.cancelable && g.preventDefault();
          return;
        }
        if (!E) {
          var A = (o.current.shards || [])
              .map(d_)
              .filter(Boolean)
              .filter(function (S) {
                return S.contains(g.target);
              }),
            b = A.length > 0 ? a(g, A[0]) : !o.current.noIsolation;
          b && g.cancelable && g.preventDefault();
        }
      }
    }, []),
    u = v.useCallback(function (p, g, y, E) {
      var A = { name: p, delta: g, target: y, should: E, shadowParent: yk(y) };
      t.current.push(A),
        setTimeout(function () {
          t.current = t.current.filter(function (b) {
            return b !== A;
          });
        }, 1);
    }, []),
    l = v.useCallback(function (p) {
      (r.current = Ui(p)), (n.current = void 0);
    }, []),
    d = v.useCallback(function (p) {
      u(p.type, l_(p), p.target, a(p, e.lockRef.current));
    }, []),
    f = v.useCallback(function (p) {
      u(p.type, Ui(p), p.target, a(p, e.lockRef.current));
    }, []);
  v.useEffect(function () {
    return (
      Gr.push(s),
      e.setCallbacks({
        onScrollCapture: d,
        onWheelCapture: d,
        onTouchMoveCapture: f,
      }),
      document.addEventListener("wheel", c, Fr),
      document.addEventListener("touchmove", c, Fr),
      document.addEventListener("touchstart", l, Fr),
      function () {
        (Gr = Gr.filter(function (p) {
          return p !== s;
        })),
          document.removeEventListener("wheel", c, Fr),
          document.removeEventListener("touchmove", c, Fr),
          document.removeEventListener("touchstart", l, Fr);
      }
    );
  }, []);
  var h = e.removeScrollBar,
    _ = e.inert;
  return v.createElement(
    v.Fragment,
    null,
    _ ? v.createElement(s, { styles: vk(i) }) : null,
    h ? v.createElement(ck, { gapMode: e.gapMode }) : null,
  );
}
function yk(e) {
  for (var t = null; e !== null; )
    e instanceof ShadowRoot && ((t = e.host), (e = e.host)), (e = e.parentNode);
  return t;
}
const Sk = YP(Py, bk);
var My = v.forwardRef(function (e, t) {
  return v.createElement(uo, jt({}, e, { ref: t, sideCar: Sk }));
});
My.classNames = uo.classNames;
var Ek = function (e) {
    if (typeof document > "u") return null;
    var t = Array.isArray(e) ? e[0] : e;
    return t.ownerDocument.body;
  },
  Vr = new WeakMap(),
  Bi = new WeakMap(),
  qi = {},
  _u = 0,
  jy = function (e) {
    return e && (e.host || jy(e.parentNode));
  },
  wk = function (e, t) {
    return t
      .map(function (r) {
        if (e.contains(r)) return r;
        var n = jy(r);
        return n && e.contains(n)
          ? n
          : (console.error(
              "aria-hidden",
              r,
              "in not contained inside",
              e,
              ". Doing nothing",
            ),
            null);
      })
      .filter(function (r) {
        return !!r;
      });
  },
  Ck = function (e, t, r, n) {
    var i = wk(t, Array.isArray(e) ? e : [e]);
    qi[r] || (qi[r] = new WeakMap());
    var s = qi[r],
      o = [],
      a = new Set(),
      c = new Set(i),
      u = function (d) {
        !d || a.has(d) || (a.add(d), u(d.parentNode));
      };
    i.forEach(u);
    var l = function (d) {
      !d ||
        c.has(d) ||
        Array.prototype.forEach.call(d.children, function (f) {
          if (a.has(f)) l(f);
          else {
            var h = f.getAttribute(n),
              _ = h !== null && h !== "false",
              p = (Vr.get(f) || 0) + 1,
              g = (s.get(f) || 0) + 1;
            Vr.set(f, p),
              s.set(f, g),
              o.push(f),
              p === 1 && _ && Bi.set(f, !0),
              g === 1 && f.setAttribute(r, "true"),
              _ || f.setAttribute(n, "true");
          }
        });
    };
    return (
      l(t),
      a.clear(),
      _u++,
      function () {
        o.forEach(function (d) {
          var f = Vr.get(d) - 1,
            h = s.get(d) - 1;
          Vr.set(d, f),
            s.set(d, h),
            f || (Bi.has(d) || d.removeAttribute(n), Bi.delete(d)),
            h || d.removeAttribute(r);
        }),
          _u--,
          _u ||
            ((Vr = new WeakMap()),
            (Vr = new WeakMap()),
            (Bi = new WeakMap()),
            (qi = {}));
      }
    );
  },
  Ak = function (e, t, r) {
    r === void 0 && (r = "data-aria-hidden");
    var n = Array.from(Array.isArray(e) ? e : [e]),
      i = Ek(e);
    return i
      ? (n.push.apply(n, Array.from(i.querySelectorAll("[aria-live]"))),
        Ck(n, i, r, "aria-hidden"))
      : function () {
          return null;
        };
  },
  Bd = "Dialog",
  [Uy, q4] = Ey(Bd),
  [Ok, ot] = Uy(Bd),
  By = (e) => {
    const {
        __scopeDialog: t,
        children: r,
        open: n,
        defaultOpen: i,
        onOpenChange: s,
        modal: o = !0,
      } = e,
      a = v.useRef(null),
      c = v.useRef(null),
      [u = !1, l] = wy({ prop: n, defaultProp: i, onChange: s });
    return m.jsx(Ok, {
      scope: t,
      triggerRef: a,
      contentRef: c,
      contentId: Ki(),
      titleId: Ki(),
      descriptionId: Ki(),
      open: u,
      onOpenChange: l,
      onOpenToggle: v.useCallback(() => l((d) => !d), [l]),
      modal: o,
      children: r,
    });
  };
By.displayName = Bd;
var qy = "DialogTrigger",
  Fy = v.forwardRef((e, t) => {
    const { __scopeDialog: r, ...n } = e,
      i = ot(qy, r),
      s = st(t, i.triggerRef);
    return m.jsx(xe.button, {
      type: "button",
      "aria-haspopup": "dialog",
      "aria-expanded": i.open,
      "aria-controls": i.contentId,
      "data-state": Gd(i.open),
      ...n,
      ref: s,
      onClick: Se(e.onClick, i.onOpenToggle),
    });
  });
Fy.displayName = qy;
var qd = "DialogPortal",
  [xk, Gy] = Uy(qd, { forceMount: void 0 }),
  Vy = (e) => {
    const { __scopeDialog: t, forceMount: r, children: n, container: i } = e,
      s = ot(qd, t);
    return m.jsx(xk, {
      scope: t,
      forceMount: r,
      children: v.Children.map(n, (o) =>
        m.jsx(Rn, {
          present: r || s.open,
          children: m.jsx(co, { asChild: !0, container: i, children: o }),
        }),
      ),
    });
  };
Vy.displayName = qd;
var ms = "DialogOverlay",
  $y = v.forwardRef((e, t) => {
    const r = Gy(ms, e.__scopeDialog),
      { forceMount: n = r.forceMount, ...i } = e,
      s = ot(ms, e.__scopeDialog);
    return s.modal
      ? m.jsx(Rn, {
          present: n || s.open,
          children: m.jsx(Rk, { ...i, ref: t }),
        })
      : null;
  });
$y.displayName = ms;
var Rk = v.forwardRef((e, t) => {
    const { __scopeDialog: r, ...n } = e,
      i = ot(ms, r);
    return m.jsx(My, {
      as: Ud,
      allowPinchZoom: !0,
      shards: [i.contentRef],
      children: m.jsx(xe.div, {
        "data-state": Gd(i.open),
        ...n,
        ref: t,
        style: { pointerEvents: "auto", ...n.style },
      }),
    });
  }),
  Er = "DialogContent",
  Hy = v.forwardRef((e, t) => {
    const r = Gy(Er, e.__scopeDialog),
      { forceMount: n = r.forceMount, ...i } = e,
      s = ot(Er, e.__scopeDialog);
    return m.jsx(Rn, {
      present: n || s.open,
      children: s.modal
        ? m.jsx(Ik, { ...i, ref: t })
        : m.jsx(Tk, { ...i, ref: t }),
    });
  });
Hy.displayName = Er;
var Ik = v.forwardRef((e, t) => {
    const r = ot(Er, e.__scopeDialog),
      n = v.useRef(null),
      i = st(t, r.contentRef, n);
    return (
      v.useEffect(() => {
        const s = n.current;
        if (s) return Ak(s);
      }, []),
      m.jsx(zy, {
        ...e,
        ref: i,
        trapFocus: r.open,
        disableOutsidePointerEvents: !0,
        onCloseAutoFocus: Se(e.onCloseAutoFocus, (s) => {
          s.preventDefault(), r.triggerRef.current?.focus();
        }),
        onPointerDownOutside: Se(e.onPointerDownOutside, (s) => {
          const o = s.detail.originalEvent,
            a = o.button === 0 && o.ctrlKey === !0;
          (o.button === 2 || a) && s.preventDefault();
        }),
        onFocusOutside: Se(e.onFocusOutside, (s) => s.preventDefault()),
      })
    );
  }),
  Tk = v.forwardRef((e, t) => {
    const r = ot(Er, e.__scopeDialog),
      n = v.useRef(!1),
      i = v.useRef(!1);
    return m.jsx(zy, {
      ...e,
      ref: t,
      trapFocus: !1,
      disableOutsidePointerEvents: !1,
      onCloseAutoFocus: (s) => {
        e.onCloseAutoFocus?.(s),
          s.defaultPrevented ||
            (n.current || r.triggerRef.current?.focus(), s.preventDefault()),
          (n.current = !1),
          (i.current = !1);
      },
      onInteractOutside: (s) => {
        e.onInteractOutside?.(s),
          s.defaultPrevented ||
            ((n.current = !0),
            s.detail.originalEvent.type === "pointerdown" && (i.current = !0));
        const o = s.target;
        r.triggerRef.current?.contains(o) && s.preventDefault(),
          s.detail.originalEvent.type === "focusin" &&
            i.current &&
            s.preventDefault();
      },
    });
  }),
  zy = v.forwardRef((e, t) => {
    const {
        __scopeDialog: r,
        trapFocus: n,
        onOpenAutoFocus: i,
        onCloseAutoFocus: s,
        ...o
      } = e,
      a = ot(Er, r),
      c = v.useRef(null),
      u = st(t, c);
    return (
      FP(),
      m.jsxs(m.Fragment, {
        children: [
          m.jsx(Ry, {
            asChild: !0,
            loop: !0,
            trapped: n,
            onMountAutoFocus: i,
            onUnmountAutoFocus: s,
            children: m.jsx(ao, {
              role: "dialog",
              id: a.contentId,
              "aria-describedby": a.descriptionId,
              "aria-labelledby": a.titleId,
              "data-state": Gd(a.open),
              ...o,
              ref: u,
              onDismiss: () => a.onOpenChange(!1),
            }),
          }),
          m.jsxs(m.Fragment, {
            children: [
              m.jsx(Pk, { titleId: a.titleId }),
              m.jsx(Nk, { contentRef: c, descriptionId: a.descriptionId }),
            ],
          }),
        ],
      })
    );
  }),
  Fd = "DialogTitle",
  Wy = v.forwardRef((e, t) => {
    const { __scopeDialog: r, ...n } = e,
      i = ot(Fd, r);
    return m.jsx(xe.h2, { id: i.titleId, ...n, ref: t });
  });
Wy.displayName = Fd;
var Ky = "DialogDescription",
  Yy = v.forwardRef((e, t) => {
    const { __scopeDialog: r, ...n } = e,
      i = ot(Ky, r);
    return m.jsx(xe.p, { id: i.descriptionId, ...n, ref: t });
  });
Yy.displayName = Ky;
var Jy = "DialogClose",
  Zy = v.forwardRef((e, t) => {
    const { __scopeDialog: r, ...n } = e,
      i = ot(Jy, r);
    return m.jsx(xe.button, {
      type: "button",
      ...n,
      ref: t,
      onClick: Se(e.onClick, () => i.onOpenChange(!1)),
    });
  });
Zy.displayName = Jy;
function Gd(e) {
  return e ? "open" : "closed";
}
var Qy = "DialogTitleWarning",
  [F4, Xy] = hP(Qy, { contentName: Er, titleName: Fd, docsSlug: "dialog" }),
  Pk = ({ titleId: e }) => {
    const t = Xy(Qy),
      r = `\`${t.contentName}\` requires a \`${t.titleName}\` for the component to be accessible for screen reader users.

If you want to hide the \`${t.titleName}\`, you can wrap it with our VisuallyHidden component.

For more information, see https://radix-ui.com/primitives/docs/components/${t.docsSlug}`;
    return (
      v.useEffect(() => {
        e && (document.getElementById(e) || console.error(r));
      }, [r, e]),
      null
    );
  },
  kk = "DialogDescriptionWarning",
  Nk = ({ contentRef: e, descriptionId: t }) => {
    const n = `Warning: Missing \`Description\` or \`aria-describedby={undefined}\` for {${Xy(kk).contentName}}.`;
    return (
      v.useEffect(() => {
        const i = e.current?.getAttribute("aria-describedby");
        t && i && (document.getElementById(t) || console.warn(n));
      }, [n, e, t]),
      null
    );
  },
  Lk = By,
  G4 = Fy,
  Dk = Vy,
  Mk = $y,
  jk = Hy,
  Uk = Wy,
  Bk = Yy,
  qk = Zy,
  Fk = "VisuallyHidden",
  Vd = v.forwardRef((e, t) =>
    m.jsx(xe.span, {
      ...e,
      ref: t,
      style: {
        position: "absolute",
        border: 0,
        width: 1,
        height: 1,
        padding: 0,
        margin: -1,
        overflow: "hidden",
        clip: "rect(0, 0, 0, 0)",
        whiteSpace: "nowrap",
        wordWrap: "normal",
        ...e.style,
      },
    }),
  );
Vd.displayName = Fk;
var Gk = Vd;
const Vk = (e) => {
  const { color: t = "secondary", title: r, children: n, ...i } = e;
  return m.jsx(As, { as: "button", color: t, ...i, children: r ?? n });
};
function $k({
  isOpen: e,
  onClose: t,
  children: r,
  shouldIgnoreClickOutside: n = !1,
  className: i,
  testId: s,
}) {
  return m.jsx(Lk, {
    open: e,
    onOpenChange: (o) => {
      n || (o === !1 && t(!1));
    },
    children: m.jsx(Dk, {
      container: dP()?.document.body,
      children: m.jsx("div", {
        className: te("absolute inset-0", i),
        "data-testid": s,
        "data-ignore-for-page-load": !0,
        children: r,
      }),
    }),
  });
}
function Hk({ className: e, children: t, showBackground: r = !0 }) {
  return m.jsx(Mk, {
    className: te("fixed inset-0 z-50", r && "bg-black/50 dark:bg-black/80", e),
    children: t,
  });
}
function zk({
  className: e,
  children: t,
  position: r = "center",
  size: n,
  removePopoverStyling: i = !1,
  shadow: s = "normal",
  onEscapeKeyDown: o,
}) {
  return m.jsx("div", {
    className: te(
      "z-50 h-full w-full overflow-y-auto",
      n !== "fullscreen" && "grid grid-cols-[10px_1fr_10px]",
      n !== "fullscreen" &&
        r === "center" &&
        "grid-rows-[minmax(10px,1fr)_auto_minmax(10px,1fr)] md:grid-rows-[minmax(20px,1fr)_auto_minmax(20px,1fr)]",
      n !== "fullscreen" &&
        r === "bottom" &&
        "grid-rows-[minmax(10px,1fr)_auto_10px] md:grid-rows-[minmax(20px,1fr)_auto_20px]",
    ),
    children: m.jsx(jk, {
      onEscapeKeyDown: o,
      className: te(
        !i && "popover",
        "bg-token-main-surface-primary relative start-1/2 col-auto col-start-2 row-auto row-start-2 h-full w-full text-start ltr:-translate-x-1/2 rtl:translate-x-1/2",
        n !== "fullscreen" && "rounded-2xl",
        s === "normal" && "shadow-xl",
        e,
      ),
      children: t,
    }),
  });
}
function Wk({ title: e, description: t, icon: r, type: n }) {
  return m.jsxs("div", {
    className: "flex max-w-full min-w-0 items-center",
    children: [
      m.jsx(Jk, { icon: r, type: n }),
      m.jsxs("div", {
        className: "flex max-w-full min-w-0 grow flex-col",
        children: [
          e != null &&
            m.jsx(Uk, {
              className:
                "text-token-text-primary text-lg leading-6 font-semibold",
              children: e,
            }),
          m.jsx(Bk, {
            className: te("text-token-text-tertiary text-sm", !!t && "pt-1"),
            children: t,
          }),
        ],
      }),
    ],
  });
}
function Kk({
  title: e,
  accessory: t,
  description: r,
  withSeparator: n = !0,
  icon: i,
  type: s,
  closeButton: o,
  textCenter: a,
  visuallyHiddenHeader: c = !1,
  className: u,
  closeButtonSide: l = "right",
}) {
  if (!e) return null;
  const d = o && m.jsx(qk, { asChild: !0, className: "sm:mt-0", children: o }),
    f = m.jsxs(e0, {
      $hasSeparator: n,
      className: u,
      children: [
        m.jsxs("div", {
          className: te(
            "flex max-w-full",
            a && "flex-1 justify-center text-center",
          ),
          children: [
            l === "left" && d,
            m.jsx(Wk, { title: e, description: r, icon: i, type: s }),
          ],
        }),
        m.jsxs("div", {
          className: "flex items-center gap-5",
          children: [t, l === "right" && d],
        }),
      ],
    });
  return c ? m.jsx(Vd, { asChild: !0, children: f }) : f;
}
function Yk({
  primaryButton: e,
  secondaryButton: t,
  isSpacedBetween: r = !1,
  modalHasContent: n = !0,
  textCenter: i = !1,
  className: s = "",
}) {
  return e == null && t == null
    ? null
    : m.jsxs("div", {
        className: te(
          "flex flex-col gap-3 sm:flex-row-reverse",
          i && "justify-center",
          r && "justify-between",
          n ? "mt-5 sm:mt-4" : "mt-1",
          s,
        ),
        children: [e, t],
      });
}
const Jk = ({ type: e, icon: t }) =>
    t == null
      ? null
      : m.jsx("div", {
          className: te(
            "me-4 flex h-12 w-12 shrink-0 items-center justify-center rounded-full sm:h-10 sm:w-10",
            e === "danger" && "bg-red-100",
            e === "warning" && "bg-yellow-100",
            e === "success" && "bg-green-100",
          ),
          children: m.jsx(t, {
            className: te(
              "icon-lg",
              e === "danger" && "text-red-600",
              e === "warning" && "text-yellow-700",
              e === "success" && "text-green-700",
            ),
            "aria-hidden": "true",
          }),
        }),
  Zk = xv.div``,
  e0 = ({ $hasSeparator: e, className: t, children: r, ...n }) => {
    const i = te(
      "px-4 pb-4 pt-5 sm:p-6 flex items-center justify-between",
      e && "border-b border-black/10 dark:border-white/10",
      t,
    );
    return m.jsx(Zk, { className: i, ...n, children: r });
  },
  Zr = {
    Root: $k,
    Overlay: Hk,
    Content: zk,
    TitleBar: e0,
    Header: Kk,
    Actions: Yk,
    Button: Vk,
  },
  t0 = (e) =>
    v.createElement(
      "svg",
      {
        width: 24,
        height: 24,
        viewBox: "0 0 24 24",
        fill: "none",
        xmlns: "http://www.w3.org/2000/svg",
        ...e,
      },
      v.createElement("path", {
        fillRule: "evenodd",
        clipRule: "evenodd",
        d: "M5.63603 5.63604C6.02656 5.24552 6.65972 5.24552 7.05025 5.63604L12 10.5858L16.9497 5.63604C17.3403 5.24552 17.9734 5.24552 18.364 5.63604C18.7545 6.02657 18.7545 6.65973 18.364 7.05025L13.4142 12L18.364 16.9497C18.7545 17.3403 18.7545 17.9734 18.364 18.364C17.9734 18.7545 17.3403 18.7545 16.9497 18.364L12 13.4142L7.05025 18.364C6.65972 18.7545 6.02656 18.7545 5.63603 18.364C5.24551 17.9734 5.24551 17.3403 5.63603 16.9497L10.5858 12L5.63603 7.05025C5.24551 6.65973 5.24551 6.02657 5.63603 5.63604Z",
        fill: "currentColor",
      }),
    ),
  r0 = v.forwardRef(
    (
      {
        onClick: e,
        bg: t = "transparent",
        className: r,
        iconSize: n = "md",
        ...i
      },
      s,
    ) => {
      const o = xr();
      return m.jsx("button", {
        "data-testid": "close-button",
        ref: s,
        onClick: e,
        className: te(
          "hover:bg-token-main-surface-secondary focus-visible:ring-token-text-quaternary dark:hover:bg-token-main-surface-tertiary flex h-8 w-8 items-center justify-center rounded-full focus-visible:ring-2 focus-visible:ring-offset-1 focus-visible:ring-offset-transparent focus-visible:outline-hidden",
          t === "transparent"
            ? "bg-transparent"
            : "bg-token-main-surface-primary",
          r,
        ),
        "aria-label": o.formatMessage({
          id: "Px7S/2",
          defaultMessage: "Close",
        }),
        ...i,
        children: m.jsx(t0, {
          className: te("icon-md", n === "lg" && "icon-lg"),
        }),
      });
    },
  );
r0.displayName = "CloseButton";
function Qk({
  children: e,
  rootClassName: t,
  textCenter: r,
  className: n,
  description: i,
  icon: s,
  isOpen: o = !1,
  onClose: a,
  primaryButton: c,
  secondaryButton: u,
  footerContent: l,
  size: d = "normal",
  title: f,
  headerAccessory: h,
  type: _,
  noPadding: p = !1,
  hideSeparator: g = !1,
  showCloseButton: y = !1,
  shouldIgnoreClickOutside: E = !1,
  closeButton: A,
  isScrollable: b = !0,
  allowVerticalContentToOverflow: S = !1,
  position: w = "center",
  removePopoverStyling: C = !1,
  showOverlayBackground: O = !0,
  shadow: T = "normal",
  visuallyHiddenHeader: I = !1,
  headerClassName: N,
  footerClassName: j,
  onEscapeKeyDown: B,
  testId: F,
}) {
  const H = !!f,
    G = !!e,
    K = H && G && !g;
  return m.jsx(Zr.Root, {
    isOpen: o,
    onClose: a,
    shouldIgnoreClickOutside: E,
    className: t,
    testId: F,
    children: m.jsx(Zr.Overlay, {
      showBackground: O,
      children: m.jsxs(Zr.Content, {
        size: d,
        position: w,
        className: te(
          "flex flex-col focus:outline-hidden",
          r && "text-center",
          {
            "max-w-md": d === "normal",
            "max-w-lg": d === "large",
            "max-w-xl": d === "xlarge",
            "h-full w-full": d === "fullscreen",
            "overflow-hidden": !S,
          },
          n,
        ),
        removePopoverStyling: C,
        shadow: T,
        onEscapeKeyDown: B,
        children: [
          m.jsx(Zr.Header, {
            icon: s,
            title: f,
            accessory: h,
            type: _,
            textCenter: r,
            closeButton: y && (A ?? m.jsx(r0, { onClick: () => a(!0) })),
            description: i,
            withSeparator: K,
            visuallyHiddenHeader: I,
            className: N,
          }),
          m.jsxs("div", {
            className: te(
              "grow",
              S
                ? "overflow-y-visible"
                : b
                  ? "overflow-y-auto"
                  : "overflow-y-hidden",
              { "p-4 sm:p-6": d !== "fullscreen" && !p, "md:pt-0!": !G },
            ),
            children: [
              e,
              m.jsx(Xk, {
                primaryButton: c,
                secondaryButton: u,
                footerContent: l,
                modalHasContent: G,
                className: j,
              }),
            ],
          }),
        ],
      }),
    }),
  });
}
function Xk({
  primaryButton: e,
  secondaryButton: t,
  footerContent: r,
  textCenter: n,
  className: i,
  modalHasContent: s,
}) {
  const o = e != null || t != null;
  return o || r
    ? m.jsxs("div", {
        className: te("flex w-full flex-row items-center justify-end", i),
        children: [
          r,
          o
            ? m.jsx("div", {
                className: "flex-0",
                children: m.jsx(Zr.Actions, {
                  textCenter: n,
                  primaryButton: e,
                  secondaryButton: t,
                  modalHasContent: s,
                }),
              })
            : null,
        ],
      })
    : null;
}
function e3(e) {
  "use forget";
  const { children: t, fallback: r } = e,
    n = r === void 0 ? null : r;
  return by(t3) ? t : n;
}
function t3() {
  return !0;
}
const f_ = (e) =>
    v.createElement(
      "svg",
      {
        width: 24,
        height: 24,
        viewBox: "0 0 24 24",
        fill: "none",
        xmlns: "http://www.w3.org/2000/svg",
        ...e,
      },
      v.createElement("path", {
        fillRule: "evenodd",
        clipRule: "evenodd",
        d: "M12 4C7.58172 4 4 7.58172 4 12C4 16.4183 7.58172 20 12 20C16.4183 20 20 16.4183 20 12C20 7.58172 16.4183 4 12 4ZM2 12C2 6.47715 6.47715 2 12 2C17.5228 2 22 6.47715 22 12C22 17.5228 17.5228 22 12 22C6.47715 22 2 17.5228 2 12ZM16.0755 7.93219C16.5272 8.25003 16.6356 8.87383 16.3178 9.32549L11.5678 16.0755C11.3931 16.3237 11.1152 16.4792 10.8123 16.4981C10.5093 16.517 10.2142 16.3973 10.0101 16.1727L7.51006 13.4227C7.13855 13.014 7.16867 12.3816 7.57733 12.0101C7.98598 11.6386 8.61843 11.6687 8.98994 12.0773L10.6504 13.9039L14.6822 8.17451C15 7.72284 15.6238 7.61436 16.0755 7.93219Z",
        fill: "currentColor",
      }),
    ),
  wl = (e) =>
    v.createElement(
      "svg",
      {
        width: 24,
        height: 24,
        viewBox: "0 0 24 24",
        fill: "none",
        xmlns: "http://www.w3.org/2000/svg",
        ...e,
      },
      v.createElement("path", {
        d: "M12.8533 5.314C12.4634 4.67593 11.5366 4.67593 11.1467 5.314L3.71283 17.4785C3.30561 18.1449 3.78518 19 4.56611 19H19.4339C20.2148 19 20.6944 18.1449 20.2872 17.4785L12.8533 5.314ZM9.44015 4.2711C10.6099 2.3569 13.3901 2.3569 14.5598 4.2711L21.9937 16.4356C23.2154 18.4347 21.7767 21 19.4339 21H4.56611C2.22332 21 0.78462 18.4347 2.00627 16.4356L9.44015 4.2711ZM12 8.99999C12.5523 8.99999 13 9.44771 13 9.99999V13C13 13.5523 12.5523 14 12 14C11.4477 14 11 13.5523 11 13V9.99999C11 9.44771 11.4477 8.99999 12 8.99999ZM10.8516 16.5001C10.8516 15.865 11.3664 15.3501 12.0016 15.3501C12.6367 15.3501 13.1516 15.8649 13.1516 16.5001C13.1516 17.1352 12.6367 17.6501 12.0016 17.6501C11.3664 17.6501 10.8516 17.1352 10.8516 16.5001Z",
        fill: "currentColor",
      }),
    );
function h_() {
  return (
    (h_ = Object.assign
      ? Object.assign.bind()
      : function (e) {
          for (var t = 1; t < arguments.length; t++) {
            var r = arguments[t];
            for (var n in r) ({}).hasOwnProperty.call(r, n) && (e[n] = r[n]);
          }
          return e;
        }),
    h_.apply(null, arguments)
  );
}
function r3(e, t) {
  if (e == null) return {};
  var r = {};
  for (var n in e)
    if ({}.hasOwnProperty.call(e, n)) {
      if (t.indexOf(n) >= 0) continue;
      r[n] = e[n];
    }
  return r;
}
function Cl(e, t) {
  return (
    (Cl = Object.setPrototypeOf
      ? Object.setPrototypeOf.bind()
      : function (r, n) {
          return (r.__proto__ = n), r;
        }),
    Cl(e, t)
  );
}
function n3(e, t) {
  (e.prototype = Object.create(t.prototype)),
    (e.prototype.constructor = e),
    Cl(e, t);
}
var vu = { exports: {} },
  mu,
  p_;
function i3() {
  if (p_) return mu;
  p_ = 1;
  var e = "SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED";
  return (mu = e), mu;
}
var bu, g_;
function s3() {
  if (g_) return bu;
  g_ = 1;
  var e = i3();
  function t() {}
  function r() {}
  return (
    (r.resetWarningCache = t),
    (bu = function () {
      function n(o, a, c, u, l, d) {
        if (d !== e) {
          var f = new Error(
            "Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types",
          );
          throw ((f.name = "Invariant Violation"), f);
        }
      }
      n.isRequired = n;
      function i() {
        return n;
      }
      var s = {
        array: n,
        bigint: n,
        bool: n,
        func: n,
        number: n,
        object: n,
        string: n,
        symbol: n,
        any: n,
        arrayOf: i,
        element: n,
        elementType: n,
        instanceOf: i,
        node: n,
        objectOf: i,
        oneOf: i,
        oneOfType: i,
        shape: i,
        exact: i,
        checkPropTypes: r,
        resetWarningCache: t,
      };
      return (s.PropTypes = s), s;
    }),
    bu
  );
}
var __;
function o3() {
  return __ || ((__ = 1), (vu.exports = s3()())), vu.exports;
}
var a3 = o3();
const V4 = $e(a3),
  v_ = { disabled: !1 },
  n0 = ne.createContext(null);
var c3 = function (t) {
    return t.scrollTop;
  },
  Vn = "unmounted",
  dr = "exited",
  fr = "entering",
  zr = "entered",
  Al = "exiting",
  kt = (function (e) {
    n3(t, e);
    function t(n, i) {
      var s;
      s = e.call(this, n, i) || this;
      var o = i,
        a = o && !o.isMounting ? n.enter : n.appear,
        c;
      return (
        (s.appearStatus = null),
        n.in
          ? a
            ? ((c = dr), (s.appearStatus = fr))
            : (c = zr)
          : n.unmountOnExit || n.mountOnEnter
            ? (c = Vn)
            : (c = dr),
        (s.state = { status: c }),
        (s.nextCallback = null),
        s
      );
    }
    t.getDerivedStateFromProps = function (i, s) {
      var o = i.in;
      return o && s.status === Vn ? { status: dr } : null;
    };
    var r = t.prototype;
    return (
      (r.componentDidMount = function () {
        this.updateStatus(!0, this.appearStatus);
      }),
      (r.componentDidUpdate = function (i) {
        var s = null;
        if (i !== this.props) {
          var o = this.state.status;
          this.props.in
            ? o !== fr && o !== zr && (s = fr)
            : (o === fr || o === zr) && (s = Al);
        }
        this.updateStatus(!1, s);
      }),
      (r.componentWillUnmount = function () {
        this.cancelNextCallback();
      }),
      (r.getTimeouts = function () {
        var i = this.props.timeout,
          s,
          o,
          a;
        return (
          (s = o = a = i),
          i != null &&
            typeof i != "number" &&
            ((s = i.exit),
            (o = i.enter),
            (a = i.appear !== void 0 ? i.appear : o)),
          { exit: s, enter: o, appear: a }
        );
      }),
      (r.updateStatus = function (i, s) {
        if ((i === void 0 && (i = !1), s !== null))
          if ((this.cancelNextCallback(), s === fr)) {
            if (this.props.unmountOnExit || this.props.mountOnEnter) {
              var o = this.props.nodeRef
                ? this.props.nodeRef.current
                : Un.findDOMNode(this);
              o && c3(o);
            }
            this.performEnter(i);
          } else this.performExit();
        else
          this.props.unmountOnExit &&
            this.state.status === dr &&
            this.setState({ status: Vn });
      }),
      (r.performEnter = function (i) {
        var s = this,
          o = this.props.enter,
          a = this.context ? this.context.isMounting : i,
          c = this.props.nodeRef ? [a] : [Un.findDOMNode(this), a],
          u = c[0],
          l = c[1],
          d = this.getTimeouts(),
          f = a ? d.appear : d.enter;
        if ((!i && !o) || v_.disabled) {
          this.safeSetState({ status: zr }, function () {
            s.props.onEntered(u);
          });
          return;
        }
        this.props.onEnter(u, l),
          this.safeSetState({ status: fr }, function () {
            s.props.onEntering(u, l),
              s.onTransitionEnd(f, function () {
                s.safeSetState({ status: zr }, function () {
                  s.props.onEntered(u, l);
                });
              });
          });
      }),
      (r.performExit = function () {
        var i = this,
          s = this.props.exit,
          o = this.getTimeouts(),
          a = this.props.nodeRef ? void 0 : Un.findDOMNode(this);
        if (!s || v_.disabled) {
          this.safeSetState({ status: dr }, function () {
            i.props.onExited(a);
          });
          return;
        }
        this.props.onExit(a),
          this.safeSetState({ status: Al }, function () {
            i.props.onExiting(a),
              i.onTransitionEnd(o.exit, function () {
                i.safeSetState({ status: dr }, function () {
                  i.props.onExited(a);
                });
              });
          });
      }),
      (r.cancelNextCallback = function () {
        this.nextCallback !== null &&
          (this.nextCallback.cancel(), (this.nextCallback = null));
      }),
      (r.safeSetState = function (i, s) {
        (s = this.setNextCallback(s)), this.setState(i, s);
      }),
      (r.setNextCallback = function (i) {
        var s = this,
          o = !0;
        return (
          (this.nextCallback = function (a) {
            o && ((o = !1), (s.nextCallback = null), i(a));
          }),
          (this.nextCallback.cancel = function () {
            o = !1;
          }),
          this.nextCallback
        );
      }),
      (r.onTransitionEnd = function (i, s) {
        this.setNextCallback(s);
        var o = this.props.nodeRef
            ? this.props.nodeRef.current
            : Un.findDOMNode(this),
          a = i == null && !this.props.addEndListener;
        if (!o || a) {
          setTimeout(this.nextCallback, 0);
          return;
        }
        if (this.props.addEndListener) {
          var c = this.props.nodeRef
              ? [this.nextCallback]
              : [o, this.nextCallback],
            u = c[0],
            l = c[1];
          this.props.addEndListener(u, l);
        }
        i != null && setTimeout(this.nextCallback, i);
      }),
      (r.render = function () {
        var i = this.state.status;
        if (i === Vn) return null;
        var s = this.props,
          o = s.children;
        s.in,
          s.mountOnEnter,
          s.unmountOnExit,
          s.appear,
          s.enter,
          s.exit,
          s.timeout,
          s.addEndListener,
          s.onEnter,
          s.onEntering,
          s.onEntered,
          s.onExit,
          s.onExiting,
          s.onExited,
          s.nodeRef;
        var a = r3(s, [
          "children",
          "in",
          "mountOnEnter",
          "unmountOnExit",
          "appear",
          "enter",
          "exit",
          "timeout",
          "addEndListener",
          "onEnter",
          "onEntering",
          "onEntered",
          "onExit",
          "onExiting",
          "onExited",
          "nodeRef",
        ]);
        return ne.createElement(
          n0.Provider,
          { value: null },
          typeof o == "function"
            ? o(i, a)
            : ne.cloneElement(ne.Children.only(o), a),
        );
      }),
      t
    );
  })(ne.Component);
kt.contextType = n0;
kt.propTypes = {};
function $r() {}
kt.defaultProps = {
  in: !1,
  mountOnEnter: !1,
  unmountOnExit: !1,
  appear: !1,
  enter: !0,
  exit: !0,
  onEnter: $r,
  onEntering: $r,
  onEntered: $r,
  onExit: $r,
  onExiting: $r,
  onExited: $r,
};
kt.UNMOUNTED = Vn;
kt.EXITED = dr;
kt.ENTERING = fr;
kt.ENTERED = zr;
kt.EXITING = Al;
function $4(e) {
  if (e === void 0)
    throw new ReferenceError(
      "this hasn't been initialised - super() hasn't been called",
    );
  return e;
}
var ce = ((e) => (
  (e.info = "info"),
  (e.neutral = "neutral"),
  (e.success = "success"),
  (e.successNeutral = "successNeutral"),
  (e.warning = "warning"),
  (e.danger = "danger"),
  e
))(ce || {});
const u3 = Rr({
    closeButtonLabel: { id: "Alert.closeButtonLabel", defaultMessage: "Close" },
  }),
  l3 = ne.memo(function (t) {
    const r = xr(),
      {
        className: n,
        intent: i = "info",
        fullWidth: s,
        children: o,
        icon: a,
        onRemove: c,
        testId: u,
      } = t,
      l = te(
        {
          "px-3 py-2 rounded-lg inline-flex flex-row border pointer-events-auto gap-2":
            !0,
          flex: s,
          "popover shadow-lg bg-token-main-surface-primary text-token-text-secondary dark:border-black/20":
            i === ce.neutral || i === ce.info,
          "border-green-600 bg-green-600 text-white": i === ce.success,
          "border-orange-500 text-white bg-orange-500": i === ce.warning,
          "border-red-500 text-white bg-red-500": i === ce.danger,
          "bg-black text-white border-black dark:bg-white dark:text-black dark:border-white":
            i === ce.successNeutral,
        },
        n,
      );
    return m.jsxs("div", {
      className: l,
      role: "alert",
      "data-testid": u,
      children: [
        a != null &&
          m.jsx("div", {
            className: "mt-1 shrink-0 grow-0",
            children: m.jsx(a, { className: "icon-sm" }),
          }),
        m.jsx("div", {
          className: "flex-1 justify-center gap-2",
          children:
            typeof o == "string"
              ? m.jsx("div", { className: "font-semibold", children: o })
              : o,
        }),
        c
          ? m.jsx("div", {
              className: "flex shrink-0 grow-0",
              children: m.jsx("button", {
                onClick: c,
                "aria-label": r.formatMessage(u3.closeButtonLabel),
                className: "hover:opacity-80",
                children: m.jsx(t0, { className: "icon-sm" }),
              }),
            })
          : null,
      ],
    });
  }),
  d3 = {
    [ce.success]: f_,
    [ce.successNeutral]: f_,
    [ce.warning]: wl,
    [ce.danger]: wl,
  },
  f3 = ({
    zIndex: e,
    duration: t,
    onRemove: r,
    intent: n = ce.info,
    title: i,
    description: s,
    hasCloseButton: o,
    isShown: a = !0,
    testId: c,
  }) => {
    const [u, l] = v.useState(0),
      [d, f] = v.useState(a),
      h = v.useRef(null),
      _ = v.useRef(null),
      p = v.useCallback(() => {
        r?.(), y(), f(!1);
      }, [r]),
      g = v.useCallback(() => {
        t &&
          (_.current = setTimeout(() => {
            p();
          }, t * 1e3));
      }, [p, t]);
    v.useEffect(
      () => (
        g(),
        () => {
          y();
        }
      ),
      [d, g],
    );
    const y = () => {
        _.current && (clearTimeout(_.current), (_.current = null));
      },
      E = () => {
        y();
      },
      A = () => {
        g();
      },
      b = (S) => {
        if (S === null) return;
        const { height: w } = S.getBoundingClientRect();
        l(w);
      };
    return m.jsx(kt, {
      appear: !0,
      unmountOnExit: !0,
      timeout: 240,
      in: d,
      onExited: r,
      nodeRef: h,
      children: (S) =>
        m.jsx("div", {
          ref: h,
          "data-state": S,
          className: "toast-root",
          onMouseEnter: E,
          onMouseLeave: A,
          style: { height: u, zIndex: e, marginBottom: d ? 0 : -u },
          children: m.jsx("div", {
            ref: b,
            className: "w-full p-1 text-center md:w-auto md:text-justify",
            children: m.jsxs(l3, {
              icon: d3[n] ?? void 0,
              intent: n,
              onRemove: o ? () => p() : void 0,
              testId: c,
              children: [
                m.jsx("div", {
                  className: te("text-start whitespace-pre-wrap", {
                    "font-semibold": s != null && s !== "",
                  }),
                  children: i,
                }),
                s && m.jsx("div", { children: s }),
              ],
            }),
          }),
        }),
    });
  },
  h3 = { liveRegionAssertive: "", liveRegionPolite: "" },
  Fi = pt()(() => ({ ...h3 }));
let yu, Su;
const p3 = {
    setLiveRegionAssertive: (e) => {
      window.clearTimeout(yu),
        Fi.setState({ liveRegionAssertive: e }),
        (yu = window.setTimeout(() => {
          Fi.setState({ liveRegionAssertive: "" }), (yu = void 0);
        }, 5e3));
    },
    setLiveRegionPolite: (e) => {
      window.clearTimeout(Su),
        Fi.setState({ liveRegionPolite: e }),
        (Su = window.setTimeout(() => {
          Fi.setState({ liveRegionPolite: "" }), (Su = void 0);
        }, 5e3));
    },
  },
  m_ = (e) => Object.hasOwnProperty.call(e, "id");
let g3 = 0;
class _3 {
  intl;
  constructor(t) {
    this.intl = t;
  }
  toasts = [];
  listeners = new Set();
  subscribe = (t) => (this.listeners.add(t), () => this.listeners.delete(t));
  toastsChanged() {
    this.listeners.forEach((t) => t());
  }
  announceToScreenReader(t, r) {
    let n, i;
    try {
      switch (r.intent) {
        case ce.success:
          i = {
            defaultMessage: "Success",
            description: "Prefix for success toast announcements",
            id: "toast.success",
          };
          break;
        case ce.warning:
          i = {
            defaultMessage: "Warning",
            description: "Prefix for warning toast announcements",
            id: "toast.warning",
          };
          break;
        case ce.danger:
          i = {
            defaultMessage: "Error",
            description: "Prefix for error toast announcements",
            id: "toast.error",
          };
          break;
        default:
          i = void 0;
      }
      i
        ? (n = this.intl.formatMessage(
            { id: "SieQiR", defaultMessage: "{prefix}: {message}" },
            { prefix: this.intl.formatMessage(i), message: t },
          ))
        : (n = this.intl.formatMessage(
            { id: "opr5Yt", defaultMessage: "{message}" },
            { message: t },
          )),
        p3.setLiveRegionPolite(n);
    } catch (s) {
      x.addError(s);
    }
  }
  notify(t, r) {
    if (m_(r))
      for (const i of this.toasts)
        String(i.id).startsWith(r.id) && this.closeToast(i.id);
    const n = this.createToastInstance(t, r);
    return (
      this.announceToScreenReader(t, r),
      (this.toasts = [n, ...this.toasts]),
      this.toastsChanged(),
      n
    );
  }
  createToastInstance(t, r) {
    const n = ++g3,
      i = m_(r) ? `${r.id}-${n}` : n;
    return {
      id: i,
      title: t,
      description: r.description,
      hasCloseButton: !!r.hasCloseButton,
      duration: typeof r.duration == "number" ? r.duration : 5,
      close: () => this.closeToast(i),
      onRemove: r.onRemove,
      intent: r.intent ?? ce.info,
      isShown: !0,
      testId: r.testId,
    };
  }
  getToasts() {
    return this.toasts;
  }
  closeToast(t) {
    (this.toasts = this.toasts.map((r) =>
      r.id === t ? { ...r, isShown: !1 } : r,
    )),
      this.toastsChanged();
  }
  removeToast(t) {
    this.toasts.find((r) => r.id === t)?.onRemove?.(),
      (this.toasts = this.toasts.filter((r) => r.id !== t)),
      this.toastsChanged();
  }
  closeAll() {
    this.toasts.forEach((t) => t.close());
  }
  info(t, r) {
    return this.notify(t, { ...r, intent: ce.info });
  }
  success(t, r) {
    return this.notify(t, { ...r, intent: ce.success });
  }
  successNeutral(t, r) {
    return this.notify(t, { ...r, intent: ce.successNeutral });
  }
  warning(t, r) {
    return this.notify(t, { ...r, intent: ce.warning });
  }
  danger(t, r) {
    return this.notify(t, { ...r, intent: ce.danger });
  }
}
const i0 = v.createContext(null),
  { Provider: v3 } = i0;
function lo() {
  return v.useContext(i0);
}
function m3() {
  const e = lo();
  return v.useSyncExternalStore(
    (t) => e.subscribe(t),
    () => e.toasts,
    () => [],
  );
}
function b3() {
  const e = m3(),
    t = lo();
  return m.jsx("span", {
    className:
      "pointer-events-none fixed inset-0 z-60 mx-auto my-2 flex max-w-[560px] flex-col items-stretch justify-start md:pb-5",
    children: e
      .filter((r) => r.isShown !== !1)
      .map(({ id: r, ...n }) =>
        m.jsx(f3, { ...n, onRemove: () => t.removeToast(r) }, r),
      ),
  });
}
function y3({ children: e }) {
  const t = xr(),
    [r] = v.useState(() => new _3(t));
  return m.jsxs(v3, {
    value: r,
    children: [e, m.jsx(e3, { children: m.jsx(b3, {}) })],
  });
}
const Ol = "_tm",
  Jn = "_m";
var S3 = ((e) => (
  (e.SHARE_NOT_FOUND = "share_not_found"),
  (e.SHARED_POST_NOT_FOUND = "shared_post_not_found"),
  (e.GIZMO_NOT_FOUND = "gizmo_not_found"),
  (e.NO_ACCESS = "no_access"),
  (e.OAUTH_SUCCESS = "oauth_success"),
  (e.CUSTOM_ERROR = "c_err"),
  (e.CUSTOM_MSG = "c_msg"),
  (e.ACCOUNT_TRANSFER_ERROR = "account_transfer_error"),
  (e.MFA_ENABLED = "mfa_enabled"),
  (e.ENABLE_MFA_ERROR = "enable_mfa_error"),
  (e.DISABLE_MFA_SUCCESS = "disable_mfa_success"),
  (e.DISABLE_MFA_TIMEOUT = "disable_mfa_timeout"),
  (e.CANVAS_NOT_FOUND = "canvas_not_found"),
  e
))(S3 || {});
function H4(e, t = "/", r) {
  const n = typeof window < "u",
    i = new URL(t, n ? window.location.origin : "https://chatgpt.com");
  return (
    i.searchParams.set(Ol, e),
    (e === "c_err" || e === "c_msg") &&
      (r
        ? i.searchParams.set(Jn, r)
        : i.searchParams.set(Jn, "An error has occurred")),
    i.pathname + i.search + i.hash
  );
}
function E3() {
  const [e] = _v(),
    { pathname: t, hash: r } = Or(),
    n = Gl(),
    i = xr(),
    s = lo();
  v.useEffect(() => {
    const o = e.get(Ol);
    if (o !== void 0) {
      const a = (c, u, l, d, f) => {
        const h = typeof c == "string" ? c : i.formatMessage(c);
        s[d](h, { id: u, duration: l, hasCloseButton: f });
        const _ = new URLSearchParams(e);
        _.delete(Ol),
          _.delete(Jn),
          n({ search: `?${_.toString()}`, hash: r }, { replace: !0 });
      };
      switch (o) {
        case "share_not_found":
          a(Lt.conversationInaccessible, "share_not_found", 10, "warning", !0);
          break;
        case "shared_post_not_found":
          a(Lt.sharedPostNotFound, "shared_post_not_found", 10, "warning", !0);
          break;
        case "gizmo_not_found":
          a(Lt.gizmoNotFound, "gizmo_not_found", 10, "warning", !0);
          break;
        case "no_access":
          a(Lt.noAccess, "no_access", 5, "warning", !0);
          break;
        case "oauth_success":
          a(Lt.oauthSuccess, "oauth_success", 5, "success", !0);
          break;
        case "c_msg":
          a(e.get(Jn), "c_msg", 10, "success", !0);
          break;
        case "c_err":
          a(e.get(Jn), "c_err", 5, "warning", !0);
          break;
        case "account_transfer_error":
          a(
            {
              id: "globalToasts.accountTransferError",
              defaultMessage:
                "Error transferring account. To retry, go to Settings → Merge.",
              description:
                "Error when unable to transfer their personal account to the workspace",
            },
            "account_transfer_error",
            5,
            "warning",
            !0,
          );
          break;
        case "mfa_enabled":
          a(
            {
              id: "enableMfa.success",
              defaultMessage: "Multi-factor authentication enabled",
              description:
                "Confirmation toast after an MFA enable action is successfully executed",
            },
            "mfa_enabled",
            5,
            "success",
            !0,
          );
          break;
        case "enable_mfa_error":
          a(
            {
              id: "enrollMfa.failure",
              defaultMessage: "Error occurred. Please try again.",
              description: "Error toast after MFA token request failed",
            },
            "enable_mfa_error",
            5,
            "warning",
            !0,
          );
          break;
        case "disable_mfa_success":
          a(Lt.disableMfaSuccess, "disable_mfa_success", 5, "success", !0);
          break;
        case "disable_mfa_timeout":
          a(Lt.disableMfaTimeout, "disable_mfa_timeout", 5, "warning", !0);
          break;
        case "canvas_not_found":
          a(Lt.canvasNotFound, "canvas_not_found", 5, "warning", !1);
          break;
      }
    }
  }, [i, s, t, e, n, r]);
}
const Lt = Rr({
  conversationInaccessible: {
    id: "globalToasts.conversationInaccessible",
    defaultMessage:
      "Conversation inaccessible or not found. You may need to switch accounts or request access if this conversation exists.",
  },
  sharedPostNotFound: {
    id: "globalToasts.sharedPostNotFound",
    defaultMessage: "This share is inaccessible or not found.",
  },
  gizmoNotFound: {
    id: "globalToasts.gizmoNotFound",
    defaultMessage:
      "This GPT is inaccessible or not found. Ensure you are logged in, verify you’re in the correct ChatGPT.com workspace, or request access if you believe you should have it, if it exists.",
  },
  noAccess: {
    id: "globalToasts.noAccess",
    defaultMessage: "You do not currently have access to this feature",
  },
  oauthSuccess: {
    id: "globalToasts.oauthSuccess",
    defaultMessage: "Your account is now connected",
  },
  disableMfaSuccess: {
    id: "disableMfa.success",
    defaultMessage: "Multi-factor authentication disabled",
  },
  disableMfaTimeout: {
    id: "disableMfa.timeout",
    defaultMessage: "Your last log in was too long ago, please try again",
  },
  canvasNotFound: {
    id: "canvasNotFound",
    defaultMessage:
      "This canvas is inaccessible or not found. Ensure you are logged in, verify you’re in the correct ChatGPT.com workspace, or request access if you believe you should have it, if it exists.",
  },
});
var Eu, b_;
function w3() {
  if (b_) return Eu;
  b_ = 1;
  function e() {}
  return (Eu = e), Eu;
}
var C3 = w3();
const A3 = $e(C3),
  y_ = (e) => e,
  Ue = bn(() => ({ activeRequests: {}, activeRequestsBlockingThread: {} })),
  z4 = (e) => {
    const { activeRequests: t } = Ue.getState();
    return t[e] ?? null;
  },
  $d = (e) => Ts(Ue, e);
function O3(e) {
  return $d((t) => x3(e, t));
}
function x3(e, t = Ue.getState()) {
  return e != null && t.activeRequests[e] != null;
}
function W4() {
  return $d((e) => Object.keys(e.activeRequests).length > 0);
}
function K4() {
  return $d((e) => Object.keys(e.activeRequestsBlockingThread).length > 0);
}
const wu = {
  addRequest(e, t, r) {
    Ue.setState((n) => ({
      activeRequests: {
        ...n.activeRequests,
        [e]: { id: e, abortController: t, turnTracker: r },
      },
    }));
  },
  addBlockingRequest(e, t, r) {
    Ue.setState((n) => ({
      activeRequestsBlockingThread: {
        ...n.activeRequestsBlockingThread,
        [e]: { id: e, abortController: r, threadId: t },
      },
    }));
  },
  removeRequest(e) {
    Ue.setState((t) => {
      const r = { ...t.activeRequests };
      return delete r[e], { activeRequests: r };
    });
  },
  removeBlockingRequest(e) {
    Ue.setState((t) => {
      const r = { ...t.activeRequestsBlockingThread };
      return delete r[e], { activeRequestsBlockingThread: r };
    });
  },
  getBlockingRequestsByThread(e) {
    const { activeRequestsBlockingThread: t } = Ue.getState();
    return Object.values(t).filter((r) => r.threadId === e);
  },
  clear() {
    Ue.setState({ activeRequests: {} }),
      Ue.setState({ activeRequestsBlockingThread: {} });
  },
  abortRequest(e) {
    const { activeRequests: t, activeRequestsBlockingThread: r } =
      Ue.getState();
    return t[e] != null
      ? (t[e].abortController.abort(), wu.removeRequest(e), !0)
      : r[e] != null
        ? (r[e].abortController?.abort(), wu.removeBlockingRequest(e), !0)
        : !1;
  },
  abortAllRequests() {
    const { activeRequests: e, activeRequestsBlockingThread: t } =
      Ue.getState();
    Object.values(e).forEach((r) => {
      r.abortController.abort();
    }),
      Object.values(t).forEach((r) => {
        r.abortController?.abort();
      }),
      wu.clear();
  },
};
class R3 {
  isMultimodalTextMessage(t) {
    return t.content.content_type === z.MultimodalText;
  }
  isPartAssetPointer(t) {
    return (
      typeof t != "string" &&
      (t.content_type === je.ImageAssetPointer ||
        t.content_type === je.AudioAssetPointer)
    );
  }
  isBase64ImagePart(t) {
    return typeof t != "string" && t.content_type === je.Image;
  }
  isPartRealTimeUserAudioVideoAssetPointer(t) {
    return (
      typeof t != "string" &&
      t.content_type === je.RealTimeUserAudioVideoAssetPointer
    );
  }
  isPartAudioTranscription(t) {
    return typeof t != "string" && t.content_type === je.AudioTranscription;
  }
  getAudio(t) {
    return this.isMultimodalTextMessage(t)
      ? t.content.parts.filter(
          (r) => typeof r != "string" && r.content_type === je.Audio,
        )
      : [];
  }
  getAssetPointers(t) {
    return this.isMultimodalTextMessage(t)
      ? t.content.parts.filter((r) => this.isPartAssetPointer(r))
      : [];
  }
  getImageAssetPointers(t) {
    return this.isMultimodalTextMessage(t)
      ? this.getImageAssetPointersFromParts(t.content.parts)
      : [];
  }
  getImageAssetPointersFromParts(t) {
    return t.filter(
      (r) =>
        this.isPartAssetPointer(r) && r.content_type === je.ImageAssetPointer,
    );
  }
  getFrameAssetPointers(t) {
    return this.isMultimodalTextMessage(t)
      ? t.content.parts
          .flatMap((r) => {
            if (
              typeof r != "string" &&
              r.content_type === je.RealTimeUserAudioVideoAssetPointer
            )
              return r.frames_asset_pointers;
          })
          .filter((r) => !!r)
      : [];
  }
  getAudioAssetPointers(t) {
    return this.isMultimodalTextMessage(t)
      ? t.content.parts
          .map((r) => {
            if (typeof r != "string")
              switch (r.content_type) {
                case je.AudioAssetPointer:
                  return r;
                case je.RealTimeUserAudioVideoAssetPointer:
                  return r.audio_asset_pointer;
                default:
                  return;
              }
          })
          .filter((r) => !!r)
      : [];
  }
  getVideoContainerAssetPointers(t) {
    return this.isMultimodalTextMessage(t)
      ? t.content.parts
          .flatMap((r) =>
            typeof r != "string" &&
            r.content_type === je.RealTimeUserAudioVideoAssetPointer
              ? r.video_container_asset_pointer
              : null,
          )
          .filter((r) => !!r)
      : [];
  }
  getImageOperationFileIds(t) {
    const r =
      t.metadata?.dalle?.from_client?.operation ??
      t.metadata?.generation?.from_client?.operation;
    return r?.type === "inpainting"
      ? {
          operation: "inpainting",
          originalFileId: r.original_file_id,
          maskFileId: r.mask_file_id,
        }
      : r?.type === "transformation"
        ? { operation: "transformation", originalFileId: r.original_file_id }
        : void 0;
  }
  getPartsAsString(t, r = !0) {
    return this.isMultimodalTextMessage(t)
      ? t.content.parts
          .map((n) => {
            if (typeof n == "string") return n;
            if (this.isPartAudioTranscription(n)) return n.text;
            if (r) {
              if (this.isPartAssetPointer(n))
                return `[media pointer="${n.asset_pointer}"]`;
              if (this.isPartRealTimeUserAudioVideoAssetPointer(n)) {
                const i = n.audio_asset_pointer?.asset_pointer;
                return i && `[media pointer="${i}"]`;
              } else if (this.isBase64ImagePart(n)) return n.payload;
            } else return !1;
          })
          .filter(Boolean).join(`
`)
      : "";
  }
}
const s0 = new R3();
var o0 = ((e) => (
  (e.ContentOrTos = "content_or_tos"),
  (e.ContentPolicy = "content_policy"),
  (e.ModelIncompatibility = "model_incompatibility"),
  (e.ContentRegurgitation = "content_regurgitation"),
  e
))(o0 || {});
const I3 = { errType: "warning", errCode: "content_policy" },
  T3 = { errType: "danger", errCode: "model_incompatibility" },
  P3 = {
    err: "Contents may violate our content policy",
    errType: "danger",
    errCode: "content_policy",
  },
  k3 = (e, t) => (!e.length || t ? null : { disclaimers: e }),
  N3 = ["image_gen"];
var M = ((e) => (
    (e[(e.no_render = 0)] = "no_render"),
    (e[(e.BrowseTool = 1)] = "BrowseTool"),
    (e[(e.Browsing = 2)] = "Browsing"),
    (e[(e.CanmoreTool = 3)] = "CanmoreTool"),
    (e[(e.CodeInterpreter = 4)] = "CodeInterpreter"),
    (e[(e.CodeInterpreterTool = 5)] = "CodeInterpreterTool"),
    (e[(e.Dalle = 6)] = "Dalle"),
    (e[(e.DalleTool = 7)] = "DalleTool"),
    (e[(e.GizmoEditor = 8)] = "GizmoEditor"),
    (e[(e.JITPlugin = 9)] = "JITPlugin"),
    (e[(e.JITPluginTool = 10)] = "JITPluginTool"),
    (e[(e.ImagePreloadTool = 11)] = "ImagePreloadTool"),
    (e[(e.ModelEditableContext = 12)] = "ModelEditableContext"),
    (e[(e.MultimodalText = 13)] = "MultimodalText"),
    (e[(e.ParallelBrowsing = 14)] = "ParallelBrowsing"),
    (e[(e.ParallelBrowsingTool = 15)] = "ParallelBrowsingTool"),
    (e[(e.RetrievalBrowsing = 16)] = "RetrievalBrowsing"),
    (e[(e.RetrievalBrowsingTool = 17)] = "RetrievalBrowsingTool"),
    (e[(e.SearchResultTool = 18)] = "SearchResultTool"),
    (e[(e.SearchGPTQuery = 19)] = "SearchGPTQuery"),
    (e[(e.System = 20)] = "System"),
    (e[(e.SystemContent = 21)] = "SystemContent"),
    (e[(e.DeveloperContent = 22)] = "DeveloperContent"),
    (e[(e.Text = 23)] = "Text"),
    (e[(e.StructuredThoughts = 24)] = "StructuredThoughts"),
    (e[(e.ReasoningRecap = 25)] = "ReasoningRecap"),
    (e[(e.UserEditableContext = 26)] = "UserEditableContext"),
    (e[(e.UserModelBio = 27)] = "UserModelBio"),
    (e[(e.UserModelBioTool = 28)] = "UserModelBioTool"),
    (e[(e.Unknown = 29)] = "Unknown"),
    (e[(e.de1d73e = 30)] = "de1d73e"),
    (e[(e.a8km123 = 31)] = "a8km123"),
    (e[(e.f959b8c = 32)] = "f959b8c"),
    (e[(e.caterpillar_quick_kickoff = 33)] = "caterpillar_quick_kickoff"),
    (e[(e.b1de6e2_c = 34)] = "b1de6e2_c"),
    (e[(e.b1de6e2_s = 35)] = "b1de6e2_s"),
    (e[(e.b1de6e2_d = 36)] = "b1de6e2_d"),
    (e[(e.b1de6e2_rm = 37)] = "b1de6e2_rm"),
    (e[(e.l1p9k3u = 38)] = "l1p9k3u"),
    (e[(e.l1239dk1 = 39)] = "l1239dk1"),
    (e[(e.l1239dk2 = 40)] = "l1239dk2"),
    (e[(e.kanzi = 41)] = "kanzi"),
    (e[(e.is_loading_message = 42)] = "is_loading_message"),
    (e[(e.oiw209h = 43)] = "oiw209h"),
    (e[(e.oiw209h_c = 44)] = "oiw209h_c"),
    (e[(e.t2uay3k = 45)] = "t2uay3k"),
    (e[(e.t2uay3k_c = 46)] = "t2uay3k_c"),
    (e[(e.c12k321 = 47)] = "c12k321"),
    (e[(e.Oboe = 48)] = "Oboe"),
    (e[(e.CoTSearchToolCall = 49)] = "CoTSearchToolCall"),
    (e[(e.CoTSearchToolResult = 50)] = "CoTSearchToolResult"),
    (e[(e.n7jupd_c = 51)] = "n7jupd_c"),
    (e[(e.n7jupd_r = 52)] = "n7jupd_r"),
    (e[(e.n7jupd_t = 53)] = "n7jupd_t"),
    (e[(e.n7jupd_m = 54)] = "n7jupd_m"),
    (e[(e.n7jupd_x = 55)] = "n7jupd_x"),
    (e[(e.n7jupd_i = 56)] = "n7jupd_i"),
    e
  ))(M || {}),
  L3 = ((e) => (
    (e.BROWSER = "browser"),
    (e.CANMORE = "canmore"),
    (e.MTBROWSER = "mtbrowser"),
    (e.WIKI_BROWSER = "wiki_browser"),
    (e.MYFILES_BROWSER = "myfiles_browser"),
    (e.FILE_SEARCH = "file_search"),
    (e.GDRIVE_BROWSER = "gdrive_browser"),
    (e.BROWSING_TEAM = "browsing_team"),
    (e.BIO = "bio"),
    (e.PYTHON = "python"),
    (e.DALLE = "dalle"),
    (e.GIZMO_EDITOR = "gizmo_editor"),
    (e.JIT_PLUGIN = "jit_plugin"),
    (e.SEARCH_RESULT = "search_result"),
    (e.SEARCH_RESULTS = "search_results"),
    (e.A8KM123 = "a8km123"),
    (e.SEARCHGPT = "web"),
    (e.SEARCH_COT = "web.run"),
    (e.DE1D73E = "de1d73e"),
    (e.L1P9K3U = "l1p9k3u"),
    (e.L1239DK1 = "l1239dk1"),
    (e.KANZI = "kanzi.create"),
    (e.OIW209H = "oiw209h"),
    (e.T2UAY3K = "t2uay3k"),
    (e.START_RESEARCH_TASK = "research_kickoff_tool.start_research_task"),
    (e.CLARIFY_WITH_TEXT = "research_kickoff_tool.clarify_with_text"),
    (e.ADVANCED_VOICE = "advanced_voice"),
    (e.OBOE = "oboe"),
    (e.IMAGE_GEN_HALLUCINATED = "image_gen"),
    (e.n7jupd_m = "n7jupd.metadata"),
    e
  ))(L3 || {});
function wr(e) {
  if (e.content.content_type === z.StructuredThoughts) return 24;
  if (e.content.content_type === z.ReasoningRecap) return 25;
  if (e.metadata?.b1de6e2_c) return 34;
  if (e.recipient === "l1p9k3u" || e.author.name === "l1p9k3u") return 38;
  if (e.recipient === "kanzi.create" || e.author.name === "kanzi.create")
    return 41;
  if (e.author.name === "l1239dk1" || e.recipient === "l1239dk1") return 39;
  if (
    e.author.role === W.Assistant &&
    e.metadata?.async_task_id != null &&
    e.metadata?.async_task_turn_id != null
  )
    return 40;
  if (
    e.metadata?.b1de6e2_s ||
    e.recipient === "research_kickoff_tool.start_research_task"
  )
    return 35;
  if (e.metadata?.b1de6e2_d) return 36;
  if (e.metadata?.b1de6e2_rm) return 37;
  if (e.metadata?.is_loading_message) return 42;
  if (e.metadata?.f959b8c) return 32;
  if (e.author.role === W.Assistant) {
    if (N3.some((r) => e.recipient?.startsWith(r))) return 29;
    const t = S_(e.recipient);
    if (
      e.recipient === "browser" ||
      e.recipient === "wiki_browser" ||
      t?.namespace === "mtbrowser"
    )
      return 2;
    if (e.recipient === "web") return 19;
    if (
      e.recipient === "web.run" &&
      (e?.metadata?.search_queries?.length ?? 0) > 0
    )
      return 49;
    if (
      e.recipient === "myfiles_browser" ||
      e.recipient === "gdrive_browser" ||
      t?.namespace === "file_search" ||
      t?.namespace === "myfiles_browser"
    )
      return 16;
    if (e.recipient === "browsing_team") return 14;
    if (e.recipient === "bio") return 27;
    if (e.recipient === "python") return 4;
    if (t?.namespace === "dalle" || e.recipient === "dalle") return 6;
    if (t?.namespace === "t2uay3k" || e.recipient === "t2uay3k") return 45;
    if (t?.namespace === "oiw209h" || e.recipient === "oiw209h") return 43;
    if (t?.namespace === "gizmo_editor") return 8;
    if (t?.namespace === "canmore") return 3;
    if (t?.namespace === "de1d73e") return 30;
    if (E_(t?.namespace)) return 9;
    if (t != null) return 29;
    if (e.content.content_type === z.ModelEditableContext) return 12;
  } else if (e.author.role === W.Tool) {
    const t = S_(e.author.name);
    if (
      e.author.name === "browser" ||
      e.author.name === "wiki_browser" ||
      t?.namespace === "mtbrowser"
    )
      return 1;
    if (
      e.author.name === "myfiles_browser" ||
      e.author.name === "gdrive_browser" ||
      e.author.name === "file_search" ||
      t?.namespace === "file_search" ||
      t?.namespace === "myfiles_browser"
    )
      return 17;
    if (e.author.name === "browsing_team") return 15;
    if (
      e.author.name === "web.run" &&
      (e?.metadata?.search_result_groups?.length ?? 0) > 0
    )
      return 50;
    if (
      e.author.name === "search_result" &&
      e.content.content_type === z.TetherQuote
    )
      return 18;
    if (
      e.author.name === "search_results" &&
      e.content.content_type === z.TetherBrowsingDisplay
    )
      return 11;
    if (e.author.name === "bio") return 28;
    if (e.author.name === "a8km123") return 31;
    if (e.author.name === "python") return 5;
    if (t?.namespace === "dalle" || e.author.name === "dalle") return 7;
    if (t?.namespace === "t2uay3k" || e.author.name === "image_gen") return 46;
    if (e.metadata?.image_gen_async) return 45;
    if (t?.namespace === "gizmo_editor") return 8;
    if (t?.namespace === "canmore") return 3;
    if (E_(t?.namespace)) return 10;
    if (t?.namespace === "de1d73e") return 30;
    if (t?.namespace === "oiw209h") return 44;
    if (e.author.name?.startsWith("web.")) return 20;
    if (e.author.name === "research_kickoff_tool.start_research_task")
      return 35;
    if (e.author.name === "research_kickoff_tool.clarify_with_text") return 0;
    if (e.author.name === "n7jupd.metadata") return 54;
    if (t != null || e.author.name === "plugin_service") return D3(e);
  } else {
    if (e.author.role === W.System || e.author.role === W.Developer)
      return e.metadata?.rebase_system_message ||
        e.content.content_type === z.SystemMessage ||
        e.content.content_type === z.SystemContent
        ? 21
        : e.metadata?.rebase_developer_message ||
            e.content.content_type === z.DeveloperContent
          ? 22
          : 20;
    if (
      e.author.role === W.User &&
      (e.content.content_type === z.UserEditableContext ||
        e.metadata?.is_user_system_message)
    )
      return 26;
  }
  return e.content.content_type === z.Text ||
    e.content.content_type === z.MultimodalText
    ? 23
    : 29;
}
function D3(e) {
  return (
    e.create_time && e.create_time > 17172e5
      ? x.addError(
          "[Unknown tool] Encountered a message with an unknown tool. Rendering as Unknown message type, which is not visible.",
          { message: e },
        )
      : x.addError(
          "[Unknown tool] Encountered a message with an unknown tool, which is most likely an old plugin. Rendering as Unknown message type, which may not appear as expected.",
          { message: e },
        ),
    29
  );
}
function Y4(e) {
  return e.metadata?.finish_details != null;
}
function Hd(e) {
  return e.content.content_type === z.Text
    ? e.content.parts.some((t) => t.length > 0)
    : e.content.content_type === z.MultimodalText
      ? s0.getPartsAsString(e).length > 0
      : !1;
}
function M3(e) {
  return Hd(e)
    ? !0
    : "text" in e.content
      ? e.content.text.length > 0
      : "result" in e.content
        ? e.content.result.length > 0
        : !1;
}
function J4(e) {
  return e.metadata?.finish_details?.type === "stop";
}
function j3(e) {
  return e?.metadata?.finish_details?.type === "max_tokens";
}
function Z4(e) {
  return e.metadata?.finish_details?.type === "interrupted";
}
function U3(e) {
  return e.metadata?.message_type === "continue";
}
function S_(e) {
  if (e == null || !e.includes(".")) return null;
  const [t, r] = e.split(".");
  return { namespace: t, functionName: r };
}
function B3(e, t) {
  return {
    id: It(),
    author: { role: W.System },
    content: { content_type: z.Text, parts: Array.isArray(e) ? e : [e] },
    metadata: t,
  };
}
function Q4(e, t, r, n = It()) {
  return {
    id: n,
    author: { role: W.Assistant },
    content: { content_type: z.Text, parts: Array.isArray(e) ? e : [e] },
    metadata: t,
    clientMetadata: r,
  };
}
function q3(e, t, r) {
  const n = { role: W.User };
  return (
    r && (n.metadata = r),
    {
      id: It(),
      author: n,
      create_time: Date.now() / 1e3,
      content: typeof e == "string" ? { content_type: z.Text, parts: [e] } : e,
      metadata: t,
    }
  );
}
function X4(e) {
  return B3(
    [
      `The user is referring to this in particular:
${e}`,
    ],
    { exclude_after_next_user_message: !0 },
  );
}
function e6(e) {
  return q3(e, { is_visually_hidden_from_conversation: !0 });
}
function t6(e) {
  return {
    id: It(),
    author: { role: W.System },
    content: e,
    metadata: { rebase_system_message: !0 },
    recipient: "all",
  };
}
function E_(e) {
  if (!e) return !1;
  const t = e.split("__");
  return t.findIndex((r) => r === "jit_plugin") === t.length - 1;
}
function w_(e) {
  return e.author.role === W.Assistant ? e.metadata?.gizmo_id : void 0;
}
function Zi(e) {
  return e.author.role === W.User && !e.metadata?.is_user_system_message;
}
function a0(e) {
  return Zi(e) || e.author.metadata?.is_system_initiated_conversation === !0;
}
function F3(e) {
  return e.metadata?.reasoning_status != null;
}
function _i(e) {
  const t = wr(e);
  return (
    t === 20 ||
    t === 21 ||
    t === 22 ||
    t === 27 ||
    t === 28 ||
    t === 12 ||
    t === 26 ||
    t === 29 ||
    (!(t === 45 || t === 46) &&
      e.metadata?.is_visually_hidden_from_conversation === !0)
  );
}
function c0(e) {
  switch (wr(e)) {
    case 21:
    case 22:
    case 26:
    case 12:
      return !0;
    default:
      return !1;
  }
}
function r6(e) {
  if (_i(e)) return !1;
  if (
    (e.metadata?.attachments?.length ?? 0) > 0 ||
    (e.clientMetadata?.errCode &&
      Object.values(o0).some((t) => t === e.clientMetadata?.errCode))
  )
    return !0;
  switch (wr(e)) {
    case 23:
      return Hd(e);
    case 3:
      return M3(e);
    case 45:
      return !0;
    default:
      return !1;
  }
}
function G3(e) {
  return _i(e) ? !1 : wr(e) === 23 && Hd(e);
}
class V3 {
  cacheK1 = new WeakMap();
  get(t, r) {
    return this.cacheK1.get(t)?.get(r);
  }
  set(t, r, n) {
    let i = this.cacheK1.get(t);
    i || ((i = new WeakMap()), this.cacheK1.set(t, i)), i.set(r, n);
  }
}
var Cu, C_;
function $3() {
  if (C_) return Cu;
  C_ = 1;
  function e(t) {
    var r = t == null ? 0 : t.length;
    return r ? t[r - 1] : void 0;
  }
  return (Cu = e), Cu;
}
var H3 = $3();
const pn = $e(H3),
  z3 = "contentReference";
function n6(e) {
  try {
    const r = new Intl.Segmenter("en-US", { granularity: "grapheme" }).segment(
        e,
      ),
      n = [];
    for (const i of r) n.push(i.segment);
    return n;
  } catch {
    return e.split("");
  }
}
function W3(e) {
  const t = [];
  for (let r = 0; r < e.length; r++) {
    const n = e.codePointAt(r);
    n !== void 0 && (t.push(n), n > 65535 && r++);
  }
  return t;
}
function A_(e) {
  return String.fromCodePoint(...e);
}
function K3(e, t = []) {
  const r = zd(t);
  return Wd(r, e, { includeDirectives: !1 });
}
function i6(e, t = []) {
  const r = zd(t);
  return Wd(r, e, { includeDirectives: !0 });
}
function s6(e, t = [], r, n, i = !0) {
  const s = zd(t, n);
  let o = 0,
    a = s
      .filter(({ index: u, displayType: l }) => u != null && l)
      .reduce(
        (u, { index: l, newContentReference: d }) => (
          (d.type === "grouped_webpages" ||
            d.type === "grouped_webpages_v2" ||
            d.type === "grouped_webpages_model_predicted_fallback") &&
            (d.items = d.items.map((f) => ({ ...f, section_index: o++ }))),
          (u[l] = d),
          u
        ),
        [],
      ),
    c = Wd(s, e);
  return (
    i && (c = Y3(c)),
    r && ({ updatedText: c, updatedReferences: a } = J3(r, a, c)),
    { processedText: c, displayedContentReferences: a }
  );
}
function zd(e = [], t) {
  return [...e.entries()]
    .sort(([, i], [, s]) => i.start_idx - s.start_idx || i.end_idx - s.end_idx)
    .reduce((i, [s, o]) => {
      let a, c;
      switch (o.type) {
        case "invalid":
        case "hidden":
          a = { ...o, type: "hidden", invalid: o.type === "invalid" };
          break;
        case "image_v2":
        case "nav_list":
        case "tldr":
        case "optimistic_image_citation":
        case "sources_footnote":
        case "sports_standings":
        case "sports_schedule":
        case "navigation":
        case "video":
        case "file_navlist":
          (o.type === "tldr" && o.used_as_navigation) || o.type === "navigation"
            ? (a = { ...o, type: "hidden", invalid: !0 })
            : ((c = "block"), (a = { ...o }));
          break;
        case "file":
        case "title_citation":
        case "location_search":
        case "time":
        case "product_entity":
        case "grouped_webpages":
        case "grouped_webpages_v2":
        case "grouped_webpages_model_predicted_fallback":
        case "attribution":
          (c = "inline"), (a = { ...o });
          break;
        case "image_inline":
          (c = "inline"), (a = { ...o });
          break;
        case "webpage":
        case "webpage_extended":
          (c = "inline"),
            (a = {
              type: "grouped_webpages",
              matched_text: o.matched_text,
              start_idx: o.start_idx,
              end_idx: o.end_idx,
              alt: o.alt,
              refs: o.refs,
              prompt_text: o.prompt_text,
              items: [{ ...o }],
              safe_urls: o.safe_urls,
            });
          break;
        case "calculator":
        case "stock":
        case "forecast":
        case "businesses_map":
        case "products":
        case "product_reviews":
        case "product_rationale":
          (c = "block"), (a = { ...o });
          break;
        default:
          (a = { ...o, type: "hidden", invalid: !0 }), (c = "alt");
          break;
      }
      return (
        i.push({
          originalContentReference: o,
          newContentReference: a,
          index: s,
          displayType: c,
        }),
        t &&
          i.push({
            originalContentReference: o,
            newContentReference: {
              type: "debug",
              matched_text: o.matched_text.replace(/(^【|】$)/g, ""),
              ...(o.type === "webpage_extended" &&
                o.pub_date && {
                  pub_date: new Date(o.pub_date * 1e3).toLocaleString(),
                }),
            },
            index: s,
          }),
        i
      );
    }, []);
}
const xl = "​",
  o6 = "";
function Wd(e, t, r = { includeDirectives: !0 }) {
  let n = "",
    i = 0;
  const s = W3(t);
  let o = -1;
  for (const a of e) {
    o++;
    const { originalContentReference: c, displayType: u } = a,
      { start_idx: l, end_idx: d } = c,
      f = s.slice(i, l);
    if (((n += A_(f)), (i = d), u))
      if (r.includeDirectives)
        switch (u) {
          case "block":
            n +=
              `
` +
              Rl(o, "leaf") +
              `
`;
            break;
          case "inline": {
            n.endsWith("```") &&
              (n += `
`),
              n.length !== 0 && n[n.length - 1].match(/[:\\]/) && (n += xl),
              (n += Rl(o, "inline"));
            break;
          }
          case "alt":
            n += c.alt ?? "";
            break;
        }
      else n += c.alt ?? "";
  }
  return (n += A_(s.slice(i))), n;
}
function Rl(e, t) {
  return `${t === "leaf" ? "::" : ":"}${z3}[oaicite:${e}]{index=${e}}`;
}
function Y3(e) {
  let t = e;
  t = t.replace(/【[^】]*$/g, "");
  const r = t.match(/(\n|^):::/g);
  return (
    r &&
      r.length % 2 === 1 &&
      (t += `
:::`),
    (t = t.replace(/^\d+$/, "")),
    t
  );
}
function J3(e, t, r) {
  const n = e.find((s) => wr(s) === M.CodeInterpreter),
    i = e.find((s) => wr(s) === M.CodeInterpreterTool);
  if (n != null && i != null) {
    const s = t.length;
    r.endsWith("```") &&
      (r += `
`),
      (r += " " + xl + Rl(s, "inline") + xl),
      t.push({
        type: "code_execution",
        codeMessage: n,
        codeExecutionOutputMessage: i,
      });
  }
  return { updatedText: r, updatedReferences: t };
}
function u0(
  e,
  t = { shouldGetTextFromContentReferences: !1, shouldGetVisibleText: !1 },
) {
  if (t.shouldGetVisibleText && !G3(e)) return "";
  switch (e.content.content_type) {
    case z.Text: {
      const r = e.content.parts.join("");
      return t.shouldGetTextFromContentReferences &&
        e.metadata?.content_references
        ? K3(r, e.metadata.content_references)
        : r;
    }
    case z.MultimodalText:
      return s0.getPartsAsString(e, !t.shouldGetVisibleText);
    case z.TetherBrowsingDisplay:
      return e.content.result;
    case z.TetherQuote:
    case z.TetherBrowsingCode:
    case z.Code:
    case z.ExecutionOutput:
    case z.SystemError:
      return e.content.text;
    case z.SystemMessage:
    case z.SystemContent:
      return (
        e?.metadata?.__internal?.rendered_harmony_string ??
        JSON.stringify(e.content, null, 2)
      );
    case z.UserEditableContext:
      return `${e.content.user_profile}
${e.content.user_instructions}`;
    case z.SonicWebpage:
      return `[${e.content.ref_id}] ${e.content.title} (${e.content.url})`;
    case z.StructuredThoughts:
      return e.content.thoughts.map(
        (r) => `**${r.summary}**

${r.content}`,
      ).join(`

`);
    case z.ReasoningRecap:
      return e.content.content;
    default:
      return "";
  }
}
var Au, O_;
function Z3() {
  if (O_) return Au;
  O_ = 1;
  var e = qs(),
    t = od(),
    r = ad();
  function n(i) {
    return function (s, o, a) {
      var c = Object(s);
      if (!t(s)) {
        var u = e(o, 3);
        (s = r(s)),
          (o = function (d) {
            return u(c[d], d, c);
          });
      }
      var l = i(s, o, a);
      return l > -1 ? c[u ? s[l] : l] : void 0;
    };
  }
  return (Au = n), Au;
}
var Ou, x_;
function Q3() {
  if (x_) return Ou;
  x_ = 1;
  function e(t, r, n, i) {
    for (var s = t.length, o = n + (i ? 1 : -1); i ? o-- : ++o < s; )
      if (r(t[o], o, t)) return o;
    return -1;
  }
  return (Ou = e), Ou;
}
var xu, R_;
function X3() {
  if (R_) return xu;
  R_ = 1;
  var e = /\s/;
  function t(r) {
    for (var n = r.length; n-- && e.test(r.charAt(n)); );
    return n;
  }
  return (xu = t), xu;
}
var Ru, I_;
function eN() {
  if (I_) return Ru;
  I_ = 1;
  var e = X3(),
    t = /^\s+/;
  function r(n) {
    return n && n.slice(0, e(n) + 1).replace(t, "");
  }
  return (Ru = r), Ru;
}
var Iu, T_;
function tN() {
  if (T_) return Iu;
  T_ = 1;
  var e = eN(),
    t = wn(),
    r = Us(),
    n = NaN,
    i = /^[-+]0x[0-9a-f]+$/i,
    s = /^0b[01]+$/i,
    o = /^0o[0-7]+$/i,
    a = parseInt;
  function c(u) {
    if (typeof u == "number") return u;
    if (r(u)) return n;
    if (t(u)) {
      var l = typeof u.valueOf == "function" ? u.valueOf() : u;
      u = t(l) ? l + "" : l;
    }
    if (typeof u != "string") return u === 0 ? u : +u;
    u = e(u);
    var d = s.test(u);
    return d || o.test(u) ? a(u.slice(2), d ? 2 : 8) : i.test(u) ? n : +u;
  }
  return (Iu = c), Iu;
}
var Tu, P_;
function rN() {
  if (P_) return Tu;
  P_ = 1;
  var e = tN(),
    t = 1 / 0,
    r = 17976931348623157e292;
  function n(i) {
    if (!i) return i === 0 ? i : 0;
    if (((i = e(i)), i === t || i === -1 / 0)) {
      var s = i < 0 ? -1 : 1;
      return s * r;
    }
    return i === i ? i : 0;
  }
  return (Tu = n), Tu;
}
var Pu, k_;
function nN() {
  if (k_) return Pu;
  k_ = 1;
  var e = rN();
  function t(r) {
    var n = e(r),
      i = n % 1;
    return n === n ? (i ? n - i : n) : 0;
  }
  return (Pu = t), Pu;
}
var ku, N_;
function iN() {
  if (N_) return ku;
  N_ = 1;
  var e = Q3(),
    t = qs(),
    r = nN(),
    n = Math.max,
    i = Math.min;
  function s(o, a, c) {
    var u = o == null ? 0 : o.length;
    if (!u) return -1;
    var l = u - 1;
    return (
      c !== void 0 && ((l = r(c)), (l = c < 0 ? n(u + l, 0) : i(l, u - 1))),
      e(o, t(a, 3), l, !0)
    );
  }
  return (ku = s), ku;
}
var Nu, L_;
function sN() {
  if (L_) return Nu;
  L_ = 1;
  var e = Z3(),
    t = iN(),
    r = e(t);
  return (Nu = r), Nu;
}
var oN = sN();
const Il = $e(oN),
  D_ = -1;
var aN = ((e) => (
  (e[(e.Text = 0)] = "Text"),
  (e[(e.MultiText = 1)] = "MultiText"),
  (e[(e.StructuredThoughts = 2)] = "StructuredThoughts"),
  (e[(e.ReasoningRecap = 3)] = "ReasoningRecap"),
  (e[(e.Browsing = 4)] = "Browsing"),
  (e[(e.CodeInterpreter = 5)] = "CodeInterpreter"),
  (e[(e.JITPlugin = 6)] = "JITPlugin"),
  (e[(e.RetrievalBrowsing = 7)] = "RetrievalBrowsing"),
  (e[(e.ParallelBrowsing = 8)] = "ParallelBrowsing"),
  (e[(e.Dalle = 9)] = "Dalle"),
  (e[(e.Canmore = 10)] = "Canmore"),
  (e[(e.GizmoEditor = 11)] = "GizmoEditor"),
  (e[(e.SearchResult = 12)] = "SearchResult"),
  (e[(e.Debug = 13)] = "Debug"),
  (e[(e.SearchGPTQuery = 14)] = "SearchGPTQuery"),
  (e[(e.l1p9k3u = 15)] = "l1p9k3u"),
  (e[(e.a8km123 = 16)] = "a8km123"),
  (e[(e.f959b8c = 17)] = "f959b8c"),
  (e[(e.b1de6e2_c = 18)] = "b1de6e2_c"),
  (e[(e.b1de6e2_s = 19)] = "b1de6e2_s"),
  (e[(e.b1de6e2_d = 20)] = "b1de6e2_d"),
  (e[(e.b1de6e2_rm = 21)] = "b1de6e2_rm"),
  (e[(e.kanzi = 22)] = "kanzi"),
  (e[(e.is_loading_message = 23)] = "is_loading_message"),
  (e[(e.de1d73e = 24)] = "de1d73e"),
  (e[(e.oiw209h = 25)] = "oiw209h"),
  (e[(e.c12k321 = 26)] = "c12k321"),
  (e[(e.t2uay3k = 27)] = "t2uay3k"),
  (e[(e.Oboe = 28)] = "Oboe"),
  (e[(e.CoTSearchTool = 29)] = "CoTSearchTool"),
  (e[(e.n7jupd = 30)] = "n7jupd"),
  (e[(e.n7jupd_m = 31)] = "n7jupd_m"),
  (e[(e.n7jupd_x = 32)] = "n7jupd_x"),
  (e[(e.n7jupd_i = 33)] = "n7jupd_i"),
  e
))(aN || {});
const cN = {
  [M.StructuredThoughts]: 2,
  [M.ReasoningRecap]: 3,
  [M.Browsing]: 4,
  [M.BrowseTool]: 4,
  [M.SearchGPTQuery]: 14,
  [M.RetrievalBrowsing]: 7,
  [M.RetrievalBrowsingTool]: 7,
  [M.ParallelBrowsing]: 8,
  [M.ParallelBrowsingTool]: 8,
  [M.JITPlugin]: 6,
  [M.JITPluginTool]: 6,
  [M.Dalle]: 9,
  [M.DalleTool]: 9,
  [M.t2uay3k]: 27,
  [M.t2uay3k_c]: 27,
  [M.oiw209h]: 25,
  [M.oiw209h_c]: 25,
  [M.kanzi]: 22,
  [M.CodeInterpreter]: 5,
  [M.CodeInterpreterTool]: 5,
  [M.a8km123]: 16,
  [M.f959b8c]: 17,
  [M.b1de6e2_c]: 18,
  [M.b1de6e2_s]: 19,
  [M.b1de6e2_d]: 20,
  [M.b1de6e2_rm]: 21,
  [M.l1p9k3u]: 15,
  [M.is_loading_message]: 23,
  [M.de1d73e]: 24,
  [M.GizmoEditor]: 11,
  [M.SearchResultTool]: 12,
  [M.ImagePreloadTool]: 12,
  [M.CanmoreTool]: 10,
  [M.c12k321]: 26,
  [M.CoTSearchToolCall]: 29,
  [M.CoTSearchToolResult]: 29,
  [M.n7jupd_c]: 30,
  [M.n7jupd_r]: 30,
  [M.n7jupd_t]: 30,
  [M.n7jupd_m]: 31,
  [M.n7jupd_x]: 32,
  [M.n7jupd_i]: 30,
};
function uN(e) {
  switch (e) {
    case M.JITPlugin:
    case M.Dalle:
    case M.t2uay3k:
    case M.oiw209h:
    case M.CoTSearchToolCall:
    case M.CodeInterpreter:
      return !0;
    default:
      return !1;
  }
}
function M_(e, t) {
  return vt(e, (r) => {
    if (F3(t)) {
      const a = pn(r);
      let c;
      a?.type === D_ ? (c = a) : ((c = { type: D_, groups: [] }), r.push(c)),
        (r = c.groups);
    }
    const n = wr(t),
      i = cN[n],
      s = pn(r),
      o = s?.type !== 13 ? s : Il(r, (a) => a.type !== 13);
    n === M.Text &&
    (o?.type === 1 || o?.type === 0) &&
    u0(t) != null &&
    (U3(t) || j3(o.messages[o.messages.length - 1]))
      ? ((o.type = 1), o.messages.push(t))
      : i === 16 && r.some((a) => a.type === 16)
        ? Il(r, (c) => c.type === 16).messages.push(t)
        : o && i === o.type && !uN(n)
          ? o.messages.push(t)
          : r.push({ type: i ?? (_i(t) ? 13 : 0), messages: [t] });
  });
}
const j_ = new V3(),
  lN = Object.freeze([]);
function l0(e, t, r = !1) {
  const n = e.getNodeByIdOrMessageId(t),
    i = n.id !== e.rootId ? l0(e, n.parentId, r) : lN,
    s = n.message,
    o = j_.get(i, s);
  if (o) return o;
  const a = dN(i, s, r);
  return j_.set(i, s, a), a;
}
function dN(e, t, r = !1) {
  const n = [...e],
    i = pn(n),
    s = a0(t);
  if (i && fN(i, t)) {
    const o = [...i.messages, t],
      a = M_(i.messageGroups, t),
      c = i.role === W.System ? U_(t, r) : i.role,
      u = w_(t) ?? i.gizmoId;
    let l = i.authorId,
      d = i.modelSlug;
    n[n.length - 1] = {
      ...i,
      messages: o,
      messageGroups: a,
      role: c,
      isPrompt: i.isPrompt || s,
      gizmoId: u,
      authorId: l,
      modelSlug: d,
    };
  } else {
    const o = t.clientMetadata?.requestId,
      a = U_(t, r),
      c = a === W.Assistant && o && o !== i?.id ? o : t.id;
    n.push({
      id: c,
      role: a,
      messages: [t],
      messageGroups: M_([], t),
      isPrompt: s,
      gizmoId: w_(t),
    });
  }
  return n;
}
function U_(e, t) {
  return c0(e)
    ? W.System
    : e.author.role === W.Tool
      ? W.Assistant
      : e.author.role === W.Developer && !t
        ? W.System
        : e.author.role;
}
function fN(e, t, r) {
  return t.metadata?.is_indepth_feedback
    ? !1
    : (pn(e.messages)?.metadata?.reasoning_status &&
          t.metadata?.reasoning_status) ||
        e.role === t.author.role
      ? !0
      : e.role === W.User && t.recipient === "bio"
        ? !1
        : c0(t)
          ? e.role === W.Root || e.role === W.System
          : _i(t) ||
              ((e.role === W.System || e.role === W.Developer) && !e.isPrompt)
            ? !0
            : t.author.role === W.Tool
              ? e.role === W.Assistant
              : !1;
}
function hN() {
  const e = Or();
  return _N(e.pathname);
}
function pN(e) {
  const r = new URL(`http://example.com${e}`).pathname.match(
    /(?:\/gizmo)?\/g\/([^/]+)/,
  );
  if (r) return r[1];
}
function gN(e) {
  const t = e.split("-");
  return t.length > 1 && t[0] === "g"
    ? t?.[1] === "p"
      ? `g-p-${t[2]}`
      : `g-${t[1]}`
    : t[0];
}
function _N(e) {
  const t = pN(e);
  if (t) return gN(t);
}
const d0 = Vt.IsNoAuthChatTrainingEnabled,
  $n = bn(() => {
    let e = null;
    return (
      typeof window < "u" && (e = SN() ?? null),
      {
        isNoAuthChatTrainingEnabled: e,
        isTemporaryChatEnabled: !1,
        isAnonModeEnabled: !1,
      }
    );
  }),
  Kd = (e) => Ts($n, e);
function vN() {
  const e = mN(),
    t = yN(),
    { isUnauthenticated: r } = xm();
  return !!(e || (r && !t));
}
function mN() {
  return Kd((e) => e.isTemporaryChatEnabled);
}
function bN() {
  const { value: e } = gE("1656345175");
  return e ?? !0;
}
function yN() {
  const e = Kd((r) => r.isNoAuthChatTrainingEnabled),
    t = bN();
  return e ?? t;
}
function a6() {
  return Kd((e) => e.isAnonModeEnabled);
}
const B_ = {
  setIsTemporaryChatEnabled(e) {
    $n.setState({ isTemporaryChatEnabled: e }),
      e && le.logEvent("Enable Temporary Chat");
  },
  setIsAnonModeEnabled(e) {
    $n.setState({ isAnonModeEnabled: e });
  },
  toggleIsTemporaryChatEnabled() {
    B_.setIsTemporaryChatEnabled(!$n.getState().isTemporaryChatEnabled);
  },
  disableTemporaryChat() {
    B_.setIsTemporaryChatEnabled(!1);
  },
  setIsNoAuthChatTrainingEnabled(e) {
    $n.setState({ isNoAuthChatTrainingEnabled: e }), $t.setItem(d0, e);
  },
};
function SN() {
  const e = $t.getItem(d0);
  return e === "true" || e === !0
    ? !0
    : e === "false" || e === !1
      ? !1
      : void 0;
}
function c6() {
  const e = mn(f0);
  return vN() && e.data ? { ...e, data: AN(e.data) } : e;
}
function u6(e) {
  return e.getQueryData(f0.queryKey);
}
function EN(e) {
  return {
    categories: e.categories.concat().reverse().map(wN),
    groups: e.internal_groups?.map(CN) ?? [],
    defaultModelSlug: e.default_model_slug ?? null,
    models: new Map(e.models.map((t) => [t.slug, h0(t)])),
  };
}
const f0 = Vl({
  retry: 5,
  queryKey: ["models"],
  queryFn: async () => {
    const e = Pr(
      await Q.safeGet("/models", { authOption: ee.SendIfAvailable }),
    );
    return EN(e);
  },
});
function h0(e) {
  return {
    id: e.slug,
    maxTokens: e.max_tokens,
    title: e.title,
    description: e.description,
    tags: e.tags,
    enabledTools: e.enabled_tools,
    product_features: e.product_features,
    enableInfer: e.enable_infer,
  };
}
function wN({
  default_model: e,
  tagline: t,
  color: r,
  human_category_name: n,
  category: i,
  human_category_short_name: s,
  human_category_shorter_name: o,
  subscription_level: a,
  short_explainer: c,
  subcategory: u,
  title: l,
  is_beta: d,
  is_alpha: f,
  model_badge: h,
  supported_features: _,
  ...p
}) {
  return {
    color: r,
    tagline: t,
    defaultModel: e,
    label: n,
    shortLabel: s,
    description: c,
    shorterLabel: o ?? s,
    subscriptionLevel: a,
    categoryId: i,
    subcategory: u,
    isBeta: d,
    isAlpha: f,
    modelBadge: h,
    title: l,
    supportedFeatures: _,
    ...p,
  };
}
function CN({
  group: e,
  human_group_name: t,
  human_group_short_name: r,
  model_ids: n,
}) {
  return { group: e, label: t, shortLabel: r, modelIds: n };
}
const q_ = new WeakMap();
function AN(e) {
  let t = q_.get(e);
  if (!t) {
    const r = new Map(
      [...e.models.entries()].filter(([, n]) =>
        n.tags.includes("history_off_approved"),
      ),
    );
    (t = {
      models: r,
      defaultModelSlug: e.defaultModelSlug,
      categories: e.categories.filter((n) => r.has(n.defaultModel)),
      groups: e.groups
        .map((n) => ({ ...n, modelIds: n.modelIds.filter((i) => r.has(i)) }))
        .filter((n) => n.modelIds.length > 0),
    }),
      q_.set(e, t);
  }
  return t;
}
const ON = new iy(),
  l6 = "placeholder-";
class Ke {
  #e;
  rootId;
  constructor(t) {
    const r = {};
    let n;
    for (const i of t)
      (r[i.id] = i), !n && i.message.author.role === W.Root && (n = i.id);
    if (!n) throw new Error("Missing root node");
    (this.#e = r), (this.rootId = n);
  }
  static emptyTree() {
    return new Ke([Ke.createRootNode("client-created-root")]);
  }
  static createNode(t, r, n = [], i) {
    const s = i ?? t.id;
    if (s === r)
      throw new Error(
        `createNode: parent.id and node.id cannot be the same: ${s}`,
      );
    return { id: s, parentId: r, children: n, message: t };
  }
  static createRootNode(t) {
    const r = {
      id: t,
      author: { role: W.Root },
      content: { content_type: z.Text, parts: [] },
    };
    return Ke.createNode(r, "");
  }
  messageIdToNodeId(t) {
    return this.messageIdToExistingNodeId(t) ?? t;
  }
  messageIdToExistingNodeId(t) {
    if (this.#e[t] != null) return t;
    for (const r of Object.values(this.#e))
      if (r.message?.id === t) return p0(r.id, r.message.id), r.id;
  }
  containsNodeOrMessageId(t) {
    return this.messageIdToExistingNodeId(t) != null;
  }
  getNodeByIdOrMessageId(t) {
    const r = this.getNodeIfExists(t);
    if (r) return r;
    throw new Error(`getNodeByIdOrMessageId - no node found by id: ${t}`);
  }
  getNodeIfExists(t) {
    const r = this.messageIdToExistingNodeId(t);
    if (r) return this.#e[r];
  }
  findNode(t, r, n = this.rootId) {
    const i = this.getNodeIfExists(n);
    let s = this.getNodeIfExists(r);
    for (; i && s && s !== i; ) {
      if (t(s)) return s;
      s = this.getNodeIfExists(s.parentId);
    }
  }
  findFirst(t) {
    let r = this.getNodeByIdOrMessageId(this.rootId);
    for (; r && r.children.length === 1; )
      if (((r = this.getNodeByIdOrMessageId(r.children[0])), t(r))) return r;
  }
  getLeafFromNode(t) {
    let r = this.getNodeByIdOrMessageId(t);
    for (; r.children.length > 0; )
      r = this.getNodeByIdOrMessageId(r.children[0]);
    return r;
  }
  getParent(t) {
    const r = this.getNodeByIdOrMessageId(t).parentId;
    return this.getNodeByIdOrMessageId(r);
  }
  getBranchFromLeaf(t) {
    let r = [],
      n = this.getNodeByIdOrMessageId(t);
    for (; n != null; ) {
      if (r.includes(n)) {
        x.addError(
          `Infinite loop detected in getBranchFromLeaf. Branch already contains node ${n?.id}. Parent id: ${n?.parentId}.`,
          { branch: r },
        );
        break;
      }
      if ((r.push(n), n.message.author.role === W.Root)) break;
      n = this.getNodeByIdOrMessageId(n.parentId);
    }
    return (r = r.reverse()), r;
  }
  addMessageNode(t, r) {
    const n = this.messageIdToNodeId(r.id),
      i = this.getNodeByIdOrMessageId(t),
      s = Ke.createNode(r, i.id, [], n);
    return (
      (this.#e = vt(this.#e, (o) => {
        o[s.id] = s;
        const a = o[s.parentId];
        a.children.includes(s.id) || a.children.push(s.id);
      })),
      s.id
    );
  }
  prependNode(t, r) {
    const n = this.messageIdToNodeId(r.id),
      i = this.getNodeByIdOrMessageId(t),
      s = Ke.createNode(r, i.parentId, [i.id], n);
    this.#e = vt(this.#e, (o) => {
      o[s.id] = s;
      const a = o[s.parentId];
      (a.children = a.children.filter((c) => c !== i.id)),
        a.children.includes(s.id) || a.children.push(s.id),
        (o[i.id].parentId = s.id);
    });
  }
  deleteNode(t) {
    const r = this.getNodeByIdOrMessageId(t);
    this.#e = vt(this.#e, (n) => {
      const i = r.parentId,
        s = r.children;
      for (const a of s) {
        const c = n[this.messageIdToNodeId(a)];
        c.parentId = i;
      }
      const o = n[this.messageIdToNodeId(i)];
      if (o == null) {
        console.warn(
          `Cannot deleteNode with nodeId: ${t} - parent not found. Either this is root or in an orphaned branch`,
        );
        return;
      }
      (o.children = o.children.flatMap((a) =>
        this.messageIdToNodeId(a) === this.messageIdToNodeId(r.id) ? s : [a],
      )),
        delete n[r.id];
    });
  }
  clearNodeMessageParts(t) {
    this.#e = vt(this.#e, (r) => {
      const n = r[this.messageIdToNodeId(t)];
      n?.message &&
        "parts" in n.message.content &&
        (n.message.content.parts = []);
    });
  }
  updateNodeMetadata(t, r) {
    this.#e = vt(this.#e, (n) => {
      const i = n[this.messageIdToNodeId(t)];
      i && (i.message.clientMetadata = { ...i?.message.clientMetadata, ...r });
    });
  }
  updateNodeMessage(t, r) {
    this.#e = vt(this.#e, (n) => {
      const i = n[this.messageIdToNodeId(t)];
      if (i) {
        const s = i.message.clientMetadata;
        i.message = s ? { ...r, clientMetadata: s } : r;
      }
    });
  }
  updateNodeMessageMetadata(t, r) {
    this.#e = vt(this.#e, (n) => {
      const i = n[this.messageIdToNodeId(t)];
      i.message.metadata = { ...i.message.metadata, ...r };
    });
  }
  prettyPrint(t = this.rootId, r = 0) {
    const n = this.getNodeByIdOrMessageId(t),
      i = u0(n.message);
    let s = `${"	".repeat(r)}->${t} - ${i.replaceAll(
      `
`,
      "\\n",
    )}
`;
    const o = n.children.map((a) => this.getNodeByIdOrMessageId(a));
    for (const a of o) s += this.prettyPrint(a.id, r + 1);
    return s;
  }
}
const F_ = new Set();
function p0(e, t, r) {
  const n = new Error(`Found TreeNode where message.id ${t} != node.id ${e}`);
  console.warn(n),
    F_.has(e) ||
      (F_.add(e),
      r
        ? x.addAction("tree_node_id_mismatch_api", {
            nodeId: e,
            messageId: t,
            conversationId: r,
          })
        : x.addAction("tree_node_id_mismatch_client", {
            nodeId: e,
            messageId: t,
          }));
}
function xN(e, t) {
  const r = new Set(),
    n = new Set(),
    i = new Set(),
    s = new Map();
  return (
    (e.moderation_results ?? []).forEach((a) => {
      s.set(a.message_id, a),
        a.blocked ? n.add(a.message_id) : a.flagged && r.add(a.message_id),
        a.disclaimers?.length && !a.blocked && i.add(a.message_id);
    }),
    {
      nodes: Object.values(e.mapping).map(
        ({ id: a, parent: c, children: u, message: l }) => {
          if (!c) return Ke.createRootNode(a);
          if (!l) throw new Error(`Missing message for node ${a}`);
          a !== l.id && p0(a, l.id, t);
          const d = {},
            f = s.get(l.id);
          let h = !1;
          if (n.has(l.id)) {
            const p = f?.metadata?.model_incompatibility;
            Object.assign(d, p ? T3 : P3), (h = !0);
          } else r.has(l.id) && Object.assign(d, I3);
          if (i.has(l.id) && l.author.role !== W.User) {
            const p = s.get(l.id);
            p?.disclaimers?.length && Object.assign(d, k3(p.disclaimers, h));
          }
          const _ = { ...l, clientMetadata: d };
          return Ke.createNode(_, c, u, a);
        },
        {},
      ),
      initialCurrentLeafId: e.current_node,
    }
  );
}
var Lu, G_;
function RN() {
  if (G_) return Lu;
  G_ = 1;
  function e(t) {
    for (var r = -1, n = t == null ? 0 : t.length, i = 0, s = []; ++r < n; ) {
      var o = t[r];
      o && (s[i++] = o);
    }
    return s;
  }
  return (Lu = e), Lu;
}
var IN = RN();
const TN = $e(IN),
  PN = {},
  kN = (e) => (t, r, n) => {
    const i = n.subscribe;
    return (
      (n.subscribe = (o, a, c) => {
        let u = o;
        if (a) {
          const l = c?.equalityFn || Object.is;
          let d = o(n.getState());
          (u = (f) => {
            const h = o(f);
            if (!l(d, h)) {
              const _ = d;
              a((d = h), _);
            }
          }),
            c?.fireImmediately && a(d, d);
        }
        return i(u);
      }),
      e(t, r, n)
    );
  },
  NN = kN;
function LN(e, t) {
  let r;
  try {
    r = e();
  } catch {
    return;
  }
  return {
    getItem: (i) => {
      var s;
      const o = (c) => (c === null ? null : JSON.parse(c, void 0)),
        a = (s = r.getItem(i)) != null ? s : null;
      return a instanceof Promise ? a.then(o) : o(a);
    },
    setItem: (i, s) => r.setItem(i, JSON.stringify(s, void 0)),
    removeItem: (i) => r.removeItem(i),
  };
}
const ni = (e) => (t) => {
    try {
      const r = e(t);
      return r instanceof Promise
        ? r
        : {
            then(n) {
              return ni(n)(r);
            },
            catch(n) {
              return this;
            },
          };
    } catch (r) {
      return {
        then(n) {
          return this;
        },
        catch(n) {
          return ni(n)(r);
        },
      };
    }
  },
  DN = (e, t) => (r, n, i) => {
    let s = {
        getStorage: () => localStorage,
        serialize: JSON.stringify,
        deserialize: JSON.parse,
        partialize: (g) => g,
        version: 0,
        merge: (g, y) => ({ ...y, ...g }),
        ...t,
      },
      o = !1;
    const a = new Set(),
      c = new Set();
    let u;
    try {
      u = s.getStorage();
    } catch {}
    if (!u)
      return e(
        (...g) => {
          console.warn(
            `[zustand persist middleware] Unable to update item '${s.name}', the given storage is currently unavailable.`,
          ),
            r(...g);
        },
        n,
        i,
      );
    const l = ni(s.serialize),
      d = () => {
        const g = s.partialize({ ...n() });
        let y;
        const E = l({ state: g, version: s.version })
          .then((A) => u.setItem(s.name, A))
          .catch((A) => {
            y = A;
          });
        if (y) throw y;
        return E;
      },
      f = i.setState;
    i.setState = (g, y) => {
      f(g, y), d();
    };
    const h = e(
      (...g) => {
        r(...g), d();
      },
      n,
      i,
    );
    let _;
    const p = () => {
      var g;
      if (!u) return;
      (o = !1), a.forEach((E) => E(n()));
      const y =
        ((g = s.onRehydrateStorage) == null ? void 0 : g.call(s, n())) ||
        void 0;
      return ni(u.getItem.bind(u))(s.name)
        .then((E) => {
          if (E) return s.deserialize(E);
        })
        .then((E) => {
          if (E)
            if (typeof E.version == "number" && E.version !== s.version) {
              if (s.migrate) return s.migrate(E.state, E.version);
              console.error(
                "State loaded from storage couldn't be migrated since no migrate function was provided",
              );
            } else return E.state;
        })
        .then((E) => {
          var A;
          return (_ = s.merge(E, (A = n()) != null ? A : h)), r(_, !0), d();
        })
        .then(() => {
          y?.(_, void 0), (o = !0), c.forEach((E) => E(_));
        })
        .catch((E) => {
          y?.(void 0, E);
        });
    };
    return (
      (i.persist = {
        setOptions: (g) => {
          (s = { ...s, ...g }), g.getStorage && (u = g.getStorage());
        },
        clearStorage: () => {
          u?.removeItem(s.name);
        },
        getOptions: () => s,
        rehydrate: () => p(),
        hasHydrated: () => o,
        onHydrate: (g) => (
          a.add(g),
          () => {
            a.delete(g);
          }
        ),
        onFinishHydration: (g) => (
          c.add(g),
          () => {
            c.delete(g);
          }
        ),
      }),
      p(),
      _ || h
    );
  },
  MN = (e, t) => (r, n, i) => {
    let s = {
        storage: LN(() => localStorage),
        partialize: (p) => p,
        version: 0,
        merge: (p, g) => ({ ...g, ...p }),
        ...t,
      },
      o = !1;
    const a = new Set(),
      c = new Set();
    let u = s.storage;
    if (!u)
      return e(
        (...p) => {
          console.warn(
            `[zustand persist middleware] Unable to update item '${s.name}', the given storage is currently unavailable.`,
          ),
            r(...p);
        },
        n,
        i,
      );
    const l = () => {
        const p = s.partialize({ ...n() });
        return u.setItem(s.name, { state: p, version: s.version });
      },
      d = i.setState;
    i.setState = (p, g) => {
      d(p, g), l();
    };
    const f = e(
      (...p) => {
        r(...p), l();
      },
      n,
      i,
    );
    i.getInitialState = () => f;
    let h;
    const _ = () => {
      var p, g;
      if (!u) return;
      (o = !1),
        a.forEach((E) => {
          var A;
          return E((A = n()) != null ? A : f);
        });
      const y =
        ((g = s.onRehydrateStorage) == null
          ? void 0
          : g.call(s, (p = n()) != null ? p : f)) || void 0;
      return ni(u.getItem.bind(u))(s.name)
        .then((E) => {
          if (E)
            if (typeof E.version == "number" && E.version !== s.version) {
              if (s.migrate) return s.migrate(E.state, E.version);
              console.error(
                "State loaded from storage couldn't be migrated since no migrate function was provided",
              );
            } else return E.state;
        })
        .then((E) => {
          var A;
          return (h = s.merge(E, (A = n()) != null ? A : f)), r(h, !0), l();
        })
        .then(() => {
          y?.(h, void 0), (h = n()), (o = !0), c.forEach((E) => E(h));
        })
        .catch((E) => {
          y?.(void 0, E);
        });
    };
    return (
      (i.persist = {
        setOptions: (p) => {
          (s = { ...s, ...p }), p.storage && (u = p.storage);
        },
        clearStorage: () => {
          u?.removeItem(s.name);
        },
        getOptions: () => s,
        rehydrate: () => _(),
        hasHydrated: () => o,
        onHydrate: (p) => (
          a.add(p),
          () => {
            a.delete(p);
          }
        ),
        onFinishHydration: (p) => (
          c.add(p),
          () => {
            c.delete(p);
          }
        ),
      }),
      s.skipHydration || _(),
      h || f
    );
  },
  jN = (e, t) =>
    "getStorage" in t || "serialize" in t || "deserialize" in t
      ? ((PN ? "production" : void 0) !== "production" &&
          console.warn(
            "[DEPRECATED] `getStorage`, `serialize` and `deserialize` options are deprecated. Use `storage` option instead.",
          ),
        DN(e, t))
      : MN(e, t),
  d6 = jN;
function UN(e, t) {
  if (Object.is(e, t)) return !0;
  if (typeof e != "object" || e === null || typeof t != "object" || t === null)
    return !1;
  if (e instanceof Map && t instanceof Map) {
    if (e.size !== t.size) return !1;
    for (const [n, i] of e) if (!Object.is(i, t.get(n))) return !1;
    return !0;
  }
  if (e instanceof Set && t instanceof Set) {
    if (e.size !== t.size) return !1;
    for (const n of e) if (!t.has(n)) return !1;
    return !0;
  }
  const r = Object.keys(e);
  if (r.length !== Object.keys(t).length) return !1;
  for (const n of r)
    if (!Object.prototype.hasOwnProperty.call(t, n) || !Object.is(e[n], t[n]))
      return !1;
  return !0;
}
const { useRef: BN } = ne;
function qN(e) {
  const t = BN();
  return (r) => {
    const n = e(r);
    return UN(t.current, n) ? t.current : (t.current = n);
  };
}
function g0(e, t) {
  return e.findNode((r) => _0(r, t), t)?.children ?? GN;
}
function FN(e, t) {
  return g0(e, t).find(
    (r) => r === t || r === e.findNode((n) => n.id === r || _0(n, t), t)?.id,
  );
}
function _0(e, t) {
  return e.id !== t && (e.children.length > 1 || !_i(e.message));
}
const GN = Object.freeze([]);
function f6() {
  return `${dd}${It()}`;
}
let VN = 0;
function h6() {
  return VN++;
}
function v0(e) {
  return e.startsWith(dd);
}
const m0 = () => Ke.emptyTree();
var $N = ((e) => (
  (e.NewChat = "NewChat"),
  (e.Server = "Server"),
  (e.User = "User"),
  (e.Generated = "Generated"),
  (e.Unknown = "Unknown"),
  e
))($N || {});
const Du = {};
function HN(e) {
  return e;
}
const zN = HN,
  fo = pt(
    zN(
      Hs(() => ({
        threads: {},
        clientNewThreadIdToServerIdMapping: {},
        threadRetainCounts: {},
      })),
    ),
  ),
  We = fo.getState,
  hr = fo.setState;
function b0(e, t = We()) {
  return v0(e) ? t.clientNewThreadIdToServerIdMapping[e] : e;
}
const p6 = (e) => fo((t) => (e ? b0(e, t) : void 0));
function g6(e, t = We()) {
  for (const [r, n] of Object.entries(t.clientNewThreadIdToServerIdMapping))
    if (n === e) return r;
}
function Tl(e, t = We()) {
  return t.clientNewThreadIdToServerIdMapping[e] ?? e;
}
function y0(e, t = We()) {
  const r = Tl(e, t);
  return t.threads[r];
}
function S0(e, t) {
  return fo(qN((r) => t(e && y0(e, r))));
}
function WN(e, t) {
  hr((r) => {
    const n = y0(e, r);
    n && t(n);
  });
}
const V = {
  getGizmoId: (e) =>
    e?.mode.kind === Zn.GizmoInteraction || e?.mode.kind === Zn.GizmoTest
      ? e.mode.gizmo_id
      : void 0,
  getTree: (e) => e?.tree ?? m0(),
  getBranch: (e, t = V.getCurrentLeafId(e)) =>
    e?.tree.getBranchFromLeaf(t) ?? [],
  getThreadTitleSource: (e) => e?.titleSource ?? "Unknown",
  getThreadCreateTime: (e) => e?.createTime,
  getIsNewConversation: (e) => V.getCurrentLeafId(e) === V.getTree(e).rootId,
  getCurrentLeafId: (e) => e?.currentLeafId ?? V.getTree(e).rootId,
  getCurrentNode: (e) => V.getNode(e, V.getCurrentLeafId(e)),
  getNode: (e, t) => V.getTree(e).getNodeByIdOrMessageId(t),
  getParentNode: (e, t) => V.getTree(e).getParent(t),
  getParentPromptNode: (e, t = V.getCurrentLeafId(e)) =>
    V.findNode(e, (r) => a0(r.message), t),
  isThreadUrlSafe: (e, t) => e?.safeUrls.includes(t) ?? !1,
  getTurnContentReferences: (e, t) =>
    TN(V.getConversationTurnAtIndex(e, t).messages.flatMap(JN) ?? []),
  isArchived: (e) => e?.isArchived ?? !1,
  getUpdateTime: (e) =>
    e?.update_time ?? (e?.createTime ? e.createTime.getTime() / 1e3 : null),
  hasUserMessage: (e) => V.findNode(e, (t) => Zi(t.message)) != null,
  lastUserMessage: (e) => V.findNode(e, (t) => Zi(t.message))?.message ?? null,
  isLastActorMessage: (e, t) =>
    V.getTree(e).findNode(
      (r) =>
        r.message.author.role === W.Assistant ||
        r.message.author.role === W.User,
      V.getCurrentLeafId(e),
      t,
    ) == null,
  findNode: (e, t, r = V.getCurrentLeafId(e)) => V.getTree(e).findNode(t, r),
  isMessageTurnEnded: (e, t = V.getCurrentLeafId(e)) =>
    e?.tree.getNodeByIdOrMessageId(t).message.end_turn ?? !1,
  getConversationTurns: (e, t = V.getCurrentLeafId(e)) =>
    l0(V.getTree(e), t, !1),
  getConversationTurnIds: (e) => KN(V.getConversationTurns(e)),
  getConversationTurnAtIndex: (e, t, r = V.getCurrentLeafId(e)) => {
    const n = V.getConversationTurns(e, r);
    if (t >= n.length) throw new Error(`Turn index ${t} out of bounds`);
    return n[t];
  },
  getConversationLastTurn: (e, t = V.getCurrentLeafId(e)) =>
    pn(V.getConversationTurns(e, t)),
  hasUserContextPrompt: (e) =>
    V.getTree(e).findFirst(
      (t) => t.message.metadata?.is_user_system_message != null,
    ) != null ||
    e?.sharedConversationMetadata?.hasUserEditableContextFlag != null,
  hasModelEditableContext: (e) =>
    V.findNode(
      e,
      (t) => t.message.content.content_type === "model_editable_context",
    ) != null,
  getRequestId: (e, t = V.getCurrentLeafId(e)) =>
    V.findNode(e, (r) => r.message.clientMetadata?.requestId != null, t)
      ?.message.clientMetadata?.requestId,
  getLastMessageSystemHints: (e) =>
    V.findNode(e, (r) => Zi(r.message))?.message.metadata?.system_hints ?? [],
  getVariantIds: (e, t = V.getCurrentLeafId(e)) => g0(V.getTree(e), t),
  getCurrentVariantId: (e, t = V.getCurrentLeafId(e)) => FN(V.getTree(e), t),
  getIsDoNotRemember: (e) => e?.is_do_not_remember ?? !1,
};
let V_ = 0,
  $_,
  H_ = [];
function KN(e) {
  const t = e.length,
    r = pn(e)?.id;
  return (
    (V_ !== t || $_ !== r) && ((V_ = t), ($_ = r), (H_ = e.map((n) => n.id))),
    H_
  );
}
const z_ = {
    updateTree(e, t) {
      const r = t(e.tree, V.getCurrentLeafId(e));
      e._treeVersion++, r && (e.currentLeafId = r);
    },
    setCurrentBranch(e, t) {
      z_.updateTree(e, (r) => r.getLeafFromNode(t).id);
    },
    appendMessage(e, t) {
      z_.updateTree(e, (r, n) => r.addMessageNode(n, t));
    },
  },
  YN = {
    initThread: (e, t, r = null, n = null) => {
      const i = Tl(e);
      We().threads[i] == null &&
        hr((s) => {
          const o = Ke.emptyTree();
          s.threads[i] = {
            createTime: new Date(),
            isArchived: !1,
            mode: y_(t),
            modelId: r,
            effortMode: n,
            tree: o,
            _treeVersion: 0,
            title: null,
            conduitToken: null,
            prepareState: null,
            lastPrepareTimestamp: null,
            titleSource: "NewChat",
            currentLeafId: o.rootId,
            safeUrls: [],
            selectedSources: new Set([Zu.Web]),
            hasRemovedWebSource: !1,
            isLoading: !v0(i),
            docsReferencedByURL: {},
            conversationOrigin: null,
            selectedGithubRepos: void 0,
            disabledToolIds: null,
            is_do_not_remember: !1,
          };
        });
    },
    setServerIdForNewThread: (e, t) => {
      We().clientNewThreadIdToServerIdMapping[e] === void 0 &&
        hr((r) => {
          (r.threads[t] = r.threads[e]),
            delete r.threads[e],
            (r.clientNewThreadIdToServerIdMapping[e] = t);
        });
    },
    updateThreadFromServer: (e, t, r = !1, n = void 0) => {
      const i = Tl(e);
      if (r && We().threads[i]?.isLoading === !1) return;
      const s = xN(t, i),
        o = new Ke(s.nodes),
        a = s.initialCurrentLeafId ?? o.rootId,
        c =
          "has_user_editable_context" in t
            ? {
                hasUserEditableContextFlag: t.has_user_editable_context,
                authorName: t.author_name,
                model: "model" in t && t.model != null ? h0(t.model) : void 0,
              }
            : void 0;
      hr((u) => {
        const l = u.threads[i];
        u.threads[i] = {
          createTime:
            "create_time" in t ? new Date(t.create_time * 1e3) : void 0,
          isArchived: t.is_archived ?? !1,
          is_do_not_remember: t.is_do_not_remember ?? !1,
          modelId: l?.modelId ?? null,
          effortMode: l?.effortMode ?? null,
          conduitToken: null,
          prepareState: null,
          lastPrepareTimestamp: null,
          mode:
            t.gizmo_id != null
              ? { kind: Zn.GizmoInteraction, gizmo_id: t.gizmo_id }
              : { kind: Zn.PrimaryAssistant },
          sharedConversationMetadata: y_(c),
          title: t.title ?? null,
          titleSource: "Server",
          tree: o,
          _treeVersion: 0,
          currentLeafId: a,
          isLoading: !1,
          continuingFromSharedConversationId: n,
          continuingSharedConversationLastMessageId: n != null ? a : void 0,
          safeUrls: t.safe_urls ?? [],
          selectedSources: new Set([Zu.Web]),
          hasRemovedWebSource: !1,
          docsReferencedByURL: {},
          conversationOrigin: t.conversation_origin ?? null,
          async_status: t.async_status ?? null,
          disabledToolIds: t.disabled_tool_ids ?? [],
          update_time: t.update_time ?? null,
          scrollToMessageId: l?.scrollToMessageId,
        };
      }),
        ON.publish({ kind: "createConversation", clientThreadId: e });
    },
    deleteThread: (e) => {
      hr((t) => {
        delete t.threads[e], delete t.clientNewThreadIdToServerIdMapping[e];
      });
    },
    retainThread: (e) => {
      hr((t) => {
        t.threadRetainCounts[e] = (t.threadRetainCounts[e] ?? 0) + 1;
      }),
        clearTimeout(Du[e]);
    },
    releaseThread: (e) => {
      We().threads[e] != null &&
        (hr((r) => {
          r.threadRetainCounts[e] = Math.max(
            (r.threadRetainCounts[e] ?? 0) - 1,
            0,
          );
        }),
        !(We().threadRetainCounts[e] > 0) &&
          (clearTimeout(Du[e]),
          (Du[e] = setTimeout(() => {
            We().threads[e] != null &&
              (We().threadRetainCounts[e] > 0 || YN.deleteThread(e));
          }, 3e4))));
    },
    resetThread: (e) => {
      WN(e, (t) => {
        (t.tree = m0()), (t.currentLeafId = t.tree.rootId);
      });
    },
  },
  _6 = (e) => {
    const t = hN();
    return S0(e, (r) => (r ? V.getGizmoId(r) : t));
  };
function v6({ clientThreadId: e }) {
  const [t, r] = S0(e, (i) => [
    V.getRequestId(i),
    i?.async_status === rm.STREAMING,
  ]);
  return O3(t) || r;
}
const m6 = (e) => e?.metadata?.search_result_groups ?? [],
  JN = (e) => e?.metadata?.content_references ?? [],
  en = (e) => {
    const t = {
      turn_index: e.turnIndex?.toString(),
      thread_id: e.threadId,
      conversation_id: e.clientThreadId ? b0(e.clientThreadId) : void 0,
      message_id: e?.messageId,
    };
    return Object.fromEntries(
      Object.entries(t).filter(([r, n]) => n !== void 0),
    );
  },
  ZN = "sourcesSidebar",
  QN = "initialPageLoad";
function W_(e) {
  return e.type === "summarizer";
}
function gn(e) {
  return e.type === "searchSources";
}
function K_(e) {
  return e.type === "caterpillar";
}
function bs(e) {
  return e.type === "retrievalResults";
}
function E0(e) {
  return e.type === "product";
}
class Cr extends Ws()((t) => t) {
  static getIsOpen = ({ isOpen: t }) => t;
  static getActiveSidebar = ({ activeSidebar: t }) => t;
  openThreadSidebar = (t) => {
    iL(t), this.setState({ isOpen: !0, activeSidebar: t });
  };
  updateThreadSidebar = (t) => {
    this.setState({ activeSidebar: t });
  };
  toggleThreadSidebar = (t, r) => {
    const n = this.getState(),
      i = n.activeSidebar,
      s = n.isOpen && i && XN(t, i);
    if (gn(t) && s && i && gn(i) && i.scrollToHeader !== t.scrollToHeader) {
      this.updateThreadSidebar({ ...t, shouldAnimateScroll: !0 });
      return;
    }
    s ? this.closeThreadSidebar() : (r?.(), this.openThreadSidebar(t));
  };
  closeThreadSidebar = () => {
    const t = this.getState().activeSidebar;
    t && sL(t), this.setState({ isOpen: !1, activeSidebar: void 0 });
  };
}
const XN = (e, t) =>
  gn(e) && gn(t)
    ? t.messageId === e.messageId
    : K_(e) && K_(t)
      ? t.caterpillarId === e.caterpillarId && t.initialTab === e.initialTab
      : W_(e) && W_(t)
        ? t.clientThreadId === e.clientThreadId && t.turnIndex === e.turnIndex
        : bs(e) && bs(t)
          ? t.clientThreadId === e.clientThreadId &&
            t.turnIndex === e.turnIndex &&
            t.messageId === e.messageId
          : !1;
function eL(e) {
  const { isOpen: t } = e;
  return JSON.stringify({ isOpen: t });
}
function tL({ children: e }) {
  const [t] = v.useState(() => {
    let r;
    return (
      (r = {
        isOpen: new URLSearchParams(window.location.search).get(ZN) === "open",
        activeSidebar: {
          type: "searchSources",
          turnIndex: 0,
          messageId: "",
          clientThreadId: QN,
        },
      }),
      new Cr(r)
    );
  });
  return (
    v.useEffect(
      () =>
        t.subscribe((r, n) => {
          if (!(r.isOpen !== n.isOpen)) return;
          const s = eL(r);
          $.setCookie(q.ThreadSidebarState, s, { maxAge: 2 ** 30 });
        }),
      [t],
    ),
    m.jsx(Cr.Provider, { store: t, children: e })
  );
}
const b6 = () => {
  const e = Cr.useStore(),
    t = v.useCallback((i) => e.openThreadSidebar(i), [e]),
    r = v.useCallback((i, s) => e.toggleThreadSidebar(i, s), [e]),
    n = v.useCallback(() => e.closeThreadSidebar(), [e]);
  return {
    openThreadSidebar: t,
    toggleThreadSidebar: r,
    closeThreadSidebar: n,
  };
};
function rL(e, t) {
  return e.type === t;
}
function y6() {
  return Cr.useState(Cr.getIsOpen);
}
function nL() {
  return Cr.useState(Cr.getActiveSidebar);
}
function S6(e) {
  const t = nL();
  if (e && t && rL(t, e)) return t;
}
const iL = (e) => {
    if (gn(e)) {
      const { clientThreadId: t, turnIndex: r, messageId: n } = e;
      le.logEventWithStatsig(
        "Search Links Sidebar Shown",
        "search_links_sidebar_shown",
        en({ turnIndex: r, clientThreadId: t, messageId: n }),
      );
    } else if (E0(e)) {
      const {
        clientThreadId: t,
        turnIndex: r,
        messageId: n,
        contentReferenceStartIndex: i,
        productIndex: s,
      } = e;
      le.logEventWithStatsig("Product Sidebar Shown", "product_sidebar_shown", {
        ...en({ turnIndex: r, clientThreadId: t, messageId: n }),
        content_reference_start_index: i,
        product_index: s,
      });
    } else if (bs(e)) {
      const { clientThreadId: t, turnIndex: r } = e;
      le.logEventWithStatsig(
        "File Sources Sidebar Shown",
        "file_sources_sidebar_shown",
        { ...en({ turnIndex: r, clientThreadId: t }) },
      );
    }
  },
  sL = (e) => {
    if (gn(e)) {
      const { clientThreadId: t, messageId: r, turnIndex: n } = e;
      le.logEventWithStatsig(
        "Search Links Sidebar Closed",
        "search_links_sidebar_closed",
        en({ clientThreadId: t, messageId: r, turnIndex: n }),
      );
    } else if (E0(e)) {
      const {
        clientThreadId: t,
        messageId: r,
        turnIndex: n,
        contentReferenceStartIndex: i,
        productIndex: s,
      } = e;
      le.logEventWithStatsig(
        "Product Sidebar Closed",
        "product_sidebar_closed",
        {
          ...en({ turnIndex: n, clientThreadId: t, messageId: r }),
          content_reference_start_index: i,
          product_index: s,
        },
      );
    } else if (bs(e)) {
      const { clientThreadId: t, turnIndex: r } = e;
      le.logEvent(
        "File Sources Sidebar Closed",
        en({ clientThreadId: t, turnIndex: r }),
      );
    }
  },
  w0 = { shift: !1, ctrl: !1, meta: !1 },
  Pl = pt(() => w0);
Pl.getState;
const oL = () => (
  v.useEffect(() => {
    const e = ({ shiftKey: n, metaKey: i, ctrlKey: s }) => {
        Pl.setState({ shift: n, meta: i, ctrl: s });
      },
      t = () => {
        Pl.setState(w0);
      },
      r = { passive: !0, capture: !0 };
    return (
      document.addEventListener("keydown", e, r),
      document.addEventListener("keyup", e, r),
      document.addEventListener("visibilitychange", t, r),
      () => {
        document.removeEventListener("keydown", e, r),
          document.removeEventListener("keyup", e, r),
          document.removeEventListener("visibilitychange", t, r);
      }
    );
  }, []),
  null
);
function aL(e, t) {
  for (const [r, n] of Object.entries(t)) e.addEventListener(r, n);
  return () => {
    for (const [r, n] of Object.entries(t)) e.removeEventListener(r, n);
  };
}
function E6(e, t) {
  for (const [r, n] of Object.entries(t)) e.on(r, n);
  return () => {
    for (const [r, n] of Object.entries(t)) e.off(r, n);
  };
}
class kl extends Ws()(() => ({
  windowWidth: window.innerWidth,
  windowHeight: window.innerHeight,
})) {
  static selectWindowWidth = ({ windowWidth: t }) => t;
  static selectWindowHeight = ({ windowHeight: t }) => t;
}
function w6(e, t) {
  const r = kl.useStore();
  return v.useSyncExternalStore(
    (n) =>
      r.subscribe((i, s) => {
        e(i) !== e(s) && n();
      }),
    () => e(r.getState()),
    () => t ?? e(r.getInitialState()),
  );
}
function cL({ children: e }) {
  const [t] = v.useState(() => new kl());
  return (
    v.useEffect(
      () =>
        aL(window, {
          resize: () => {
            t.setState({
              windowWidth: window.innerWidth,
              windowHeight: window.innerHeight,
            });
          },
        }),
      [t],
    ),
    m.jsx(kl.Provider, { store: t, children: e })
  );
}
const uL = ["top", "right", "bottom", "left"],
  Yt = Math.min,
  Re = Math.max,
  ys = Math.round,
  Gi = Math.floor,
  Jt = (e) => ({ x: e, y: e }),
  lL = { left: "right", right: "left", bottom: "top", top: "bottom" },
  dL = { start: "end", end: "start" };
function Nl(e, t, r) {
  return Re(e, Yt(t, r));
}
function xt(e, t) {
  return typeof e == "function" ? e(t) : e;
}
function Rt(e) {
  return e.split("-")[0];
}
function In(e) {
  return e.split("-")[1];
}
function Yd(e) {
  return e === "x" ? "y" : "x";
}
function Jd(e) {
  return e === "y" ? "height" : "width";
}
function Tn(e) {
  return ["top", "bottom"].includes(Rt(e)) ? "y" : "x";
}
function Zd(e) {
  return Yd(Tn(e));
}
function fL(e, t, r) {
  r === void 0 && (r = !1);
  const n = In(e),
    i = Zd(e),
    s = Jd(i);
  let o =
    i === "x"
      ? n === (r ? "end" : "start")
        ? "right"
        : "left"
      : n === "start"
        ? "bottom"
        : "top";
  return t.reference[s] > t.floating[s] && (o = Ss(o)), [o, Ss(o)];
}
function hL(e) {
  const t = Ss(e);
  return [Ll(e), t, Ll(t)];
}
function Ll(e) {
  return e.replace(/start|end/g, (t) => dL[t]);
}
function pL(e, t, r) {
  const n = ["left", "right"],
    i = ["right", "left"],
    s = ["top", "bottom"],
    o = ["bottom", "top"];
  switch (e) {
    case "top":
    case "bottom":
      return r ? (t ? i : n) : t ? n : i;
    case "left":
    case "right":
      return t ? s : o;
    default:
      return [];
  }
}
function gL(e, t, r, n) {
  const i = In(e);
  let s = pL(Rt(e), r === "start", n);
  return (
    i && ((s = s.map((o) => o + "-" + i)), t && (s = s.concat(s.map(Ll)))), s
  );
}
function Ss(e) {
  return e.replace(/left|right|bottom|top/g, (t) => lL[t]);
}
function _L(e) {
  return { top: 0, right: 0, bottom: 0, left: 0, ...e };
}
function C0(e) {
  return typeof e != "number"
    ? _L(e)
    : { top: e, right: e, bottom: e, left: e };
}
function Es(e) {
  const { x: t, y: r, width: n, height: i } = e;
  return {
    width: n,
    height: i,
    top: r,
    left: t,
    right: t + n,
    bottom: r + i,
    x: t,
    y: r,
  };
}
function Y_(e, t, r) {
  let { reference: n, floating: i } = e;
  const s = Tn(t),
    o = Zd(t),
    a = Jd(o),
    c = Rt(t),
    u = s === "y",
    l = n.x + n.width / 2 - i.width / 2,
    d = n.y + n.height / 2 - i.height / 2,
    f = n[a] / 2 - i[a] / 2;
  let h;
  switch (c) {
    case "top":
      h = { x: l, y: n.y - i.height };
      break;
    case "bottom":
      h = { x: l, y: n.y + n.height };
      break;
    case "right":
      h = { x: n.x + n.width, y: d };
      break;
    case "left":
      h = { x: n.x - i.width, y: d };
      break;
    default:
      h = { x: n.x, y: n.y };
  }
  switch (In(t)) {
    case "start":
      h[o] -= f * (r && u ? -1 : 1);
      break;
    case "end":
      h[o] += f * (r && u ? -1 : 1);
      break;
  }
  return h;
}
const vL = async (e, t, r) => {
  const {
      placement: n = "bottom",
      strategy: i = "absolute",
      middleware: s = [],
      platform: o,
    } = r,
    a = s.filter(Boolean),
    c = await (o.isRTL == null ? void 0 : o.isRTL(t));
  let u = await o.getElementRects({ reference: e, floating: t, strategy: i }),
    { x: l, y: d } = Y_(u, n, c),
    f = n,
    h = {},
    _ = 0;
  for (let p = 0; p < a.length; p++) {
    const { name: g, fn: y } = a[p],
      {
        x: E,
        y: A,
        data: b,
        reset: S,
      } = await y({
        x: l,
        y: d,
        initialPlacement: n,
        placement: f,
        strategy: i,
        middlewareData: h,
        rects: u,
        platform: o,
        elements: { reference: e, floating: t },
      });
    (l = E ?? l),
      (d = A ?? d),
      (h = { ...h, [g]: { ...h[g], ...b } }),
      S &&
        _ <= 50 &&
        (_++,
        typeof S == "object" &&
          (S.placement && (f = S.placement),
          S.rects &&
            (u =
              S.rects === !0
                ? await o.getElementRects({
                    reference: e,
                    floating: t,
                    strategy: i,
                  })
                : S.rects),
          ({ x: l, y: d } = Y_(u, f, c))),
        (p = -1));
  }
  return { x: l, y: d, placement: f, strategy: i, middlewareData: h };
};
async function ii(e, t) {
  var r;
  t === void 0 && (t = {});
  const { x: n, y: i, platform: s, rects: o, elements: a, strategy: c } = e,
    {
      boundary: u = "clippingAncestors",
      rootBoundary: l = "viewport",
      elementContext: d = "floating",
      altBoundary: f = !1,
      padding: h = 0,
    } = xt(t, e),
    _ = C0(h),
    g = a[f ? (d === "floating" ? "reference" : "floating") : d],
    y = Es(
      await s.getClippingRect({
        element:
          (r = await (s.isElement == null ? void 0 : s.isElement(g))) == null ||
          r
            ? g
            : g.contextElement ||
              (await (s.getDocumentElement == null
                ? void 0
                : s.getDocumentElement(a.floating))),
        boundary: u,
        rootBoundary: l,
        strategy: c,
      }),
    ),
    E = d === "floating" ? { ...o.floating, x: n, y: i } : o.reference,
    A = await (s.getOffsetParent == null
      ? void 0
      : s.getOffsetParent(a.floating)),
    b = (await (s.isElement == null ? void 0 : s.isElement(A)))
      ? (await (s.getScale == null ? void 0 : s.getScale(A))) || { x: 1, y: 1 }
      : { x: 1, y: 1 },
    S = Es(
      s.convertOffsetParentRelativeRectToViewportRelativeRect
        ? await s.convertOffsetParentRelativeRectToViewportRelativeRect({
            elements: a,
            rect: E,
            offsetParent: A,
            strategy: c,
          })
        : E,
    );
  return {
    top: (y.top - S.top + _.top) / b.y,
    bottom: (S.bottom - y.bottom + _.bottom) / b.y,
    left: (y.left - S.left + _.left) / b.x,
    right: (S.right - y.right + _.right) / b.x,
  };
}
const mL = (e) => ({
    name: "arrow",
    options: e,
    async fn(t) {
      const {
          x: r,
          y: n,
          placement: i,
          rects: s,
          platform: o,
          elements: a,
          middlewareData: c,
        } = t,
        { element: u, padding: l = 0 } = xt(e, t) || {};
      if (u == null) return {};
      const d = C0(l),
        f = { x: r, y: n },
        h = Zd(i),
        _ = Jd(h),
        p = await o.getDimensions(u),
        g = h === "y",
        y = g ? "top" : "left",
        E = g ? "bottom" : "right",
        A = g ? "clientHeight" : "clientWidth",
        b = s.reference[_] + s.reference[h] - f[h] - s.floating[_],
        S = f[h] - s.reference[h],
        w = await (o.getOffsetParent == null ? void 0 : o.getOffsetParent(u));
      let C = w ? w[A] : 0;
      (!C || !(await (o.isElement == null ? void 0 : o.isElement(w)))) &&
        (C = a.floating[A] || s.floating[_]);
      const O = b / 2 - S / 2,
        T = C / 2 - p[_] / 2 - 1,
        I = Yt(d[y], T),
        N = Yt(d[E], T),
        j = I,
        B = C - p[_] - N,
        F = C / 2 - p[_] / 2 + O,
        H = Nl(j, F, B),
        G =
          !c.arrow &&
          In(i) != null &&
          F !== H &&
          s.reference[_] / 2 - (F < j ? I : N) - p[_] / 2 < 0,
        K = G ? (F < j ? F - j : F - B) : 0;
      return {
        [h]: f[h] + K,
        data: {
          [h]: H,
          centerOffset: F - H - K,
          ...(G && { alignmentOffset: K }),
        },
        reset: G,
      };
    },
  }),
  bL = function (e) {
    return (
      e === void 0 && (e = {}),
      {
        name: "flip",
        options: e,
        async fn(t) {
          var r, n;
          const {
              placement: i,
              middlewareData: s,
              rects: o,
              initialPlacement: a,
              platform: c,
              elements: u,
            } = t,
            {
              mainAxis: l = !0,
              crossAxis: d = !0,
              fallbackPlacements: f,
              fallbackStrategy: h = "bestFit",
              fallbackAxisSideDirection: _ = "none",
              flipAlignment: p = !0,
              ...g
            } = xt(e, t);
          if ((r = s.arrow) != null && r.alignmentOffset) return {};
          const y = Rt(i),
            E = Rt(a) === a,
            A = await (c.isRTL == null ? void 0 : c.isRTL(u.floating)),
            b = f || (E || !p ? [Ss(a)] : hL(a));
          !f && _ !== "none" && b.push(...gL(a, p, _, A));
          const S = [a, ...b],
            w = await ii(t, g),
            C = [];
          let O = ((n = s.flip) == null ? void 0 : n.overflows) || [];
          if ((l && C.push(w[y]), d)) {
            const j = fL(i, o, A);
            C.push(w[j[0]], w[j[1]]);
          }
          if (
            ((O = [...O, { placement: i, overflows: C }]),
            !C.every((j) => j <= 0))
          ) {
            var T, I;
            const j = (((T = s.flip) == null ? void 0 : T.index) || 0) + 1,
              B = S[j];
            if (B)
              return {
                data: { index: j, overflows: O },
                reset: { placement: B },
              };
            let F =
              (I = O.filter((H) => H.overflows[0] <= 0).sort(
                (H, G) => H.overflows[1] - G.overflows[1],
              )[0]) == null
                ? void 0
                : I.placement;
            if (!F)
              switch (h) {
                case "bestFit": {
                  var N;
                  const H =
                    (N = O.map((G) => [
                      G.placement,
                      G.overflows
                        .filter((K) => K > 0)
                        .reduce((K, Y) => K + Y, 0),
                    ]).sort((G, K) => G[1] - K[1])[0]) == null
                      ? void 0
                      : N[0];
                  H && (F = H);
                  break;
                }
                case "initialPlacement":
                  F = a;
                  break;
              }
            if (i !== F) return { reset: { placement: F } };
          }
          return {};
        },
      }
    );
  };
function J_(e, t) {
  return {
    top: e.top - t.height,
    right: e.right - t.width,
    bottom: e.bottom - t.height,
    left: e.left - t.width,
  };
}
function Z_(e) {
  return uL.some((t) => e[t] >= 0);
}
const yL = function (e) {
  return (
    e === void 0 && (e = {}),
    {
      name: "hide",
      options: e,
      async fn(t) {
        const { rects: r } = t,
          { strategy: n = "referenceHidden", ...i } = xt(e, t);
        switch (n) {
          case "referenceHidden": {
            const s = await ii(t, { ...i, elementContext: "reference" }),
              o = J_(s, r.reference);
            return {
              data: { referenceHiddenOffsets: o, referenceHidden: Z_(o) },
            };
          }
          case "escaped": {
            const s = await ii(t, { ...i, altBoundary: !0 }),
              o = J_(s, r.floating);
            return { data: { escapedOffsets: o, escaped: Z_(o) } };
          }
          default:
            return {};
        }
      },
    }
  );
};
async function SL(e, t) {
  const { placement: r, platform: n, elements: i } = e,
    s = await (n.isRTL == null ? void 0 : n.isRTL(i.floating)),
    o = Rt(r),
    a = In(r),
    c = Tn(r) === "y",
    u = ["left", "top"].includes(o) ? -1 : 1,
    l = s && c ? -1 : 1,
    d = xt(t, e);
  let {
    mainAxis: f,
    crossAxis: h,
    alignmentAxis: _,
  } = typeof d == "number"
    ? { mainAxis: d, crossAxis: 0, alignmentAxis: null }
    : { mainAxis: 0, crossAxis: 0, alignmentAxis: null, ...d };
  return (
    a && typeof _ == "number" && (h = a === "end" ? _ * -1 : _),
    c ? { x: h * l, y: f * u } : { x: f * u, y: h * l }
  );
}
const EL = function (e) {
    return (
      e === void 0 && (e = 0),
      {
        name: "offset",
        options: e,
        async fn(t) {
          var r, n;
          const { x: i, y: s, placement: o, middlewareData: a } = t,
            c = await SL(t, e);
          return o === ((r = a.offset) == null ? void 0 : r.placement) &&
            (n = a.arrow) != null &&
            n.alignmentOffset
            ? {}
            : { x: i + c.x, y: s + c.y, data: { ...c, placement: o } };
        },
      }
    );
  },
  wL = function (e) {
    return (
      e === void 0 && (e = {}),
      {
        name: "shift",
        options: e,
        async fn(t) {
          const { x: r, y: n, placement: i } = t,
            {
              mainAxis: s = !0,
              crossAxis: o = !1,
              limiter: a = {
                fn: (g) => {
                  let { x: y, y: E } = g;
                  return { x: y, y: E };
                },
              },
              ...c
            } = xt(e, t),
            u = { x: r, y: n },
            l = await ii(t, c),
            d = Tn(Rt(i)),
            f = Yd(d);
          let h = u[f],
            _ = u[d];
          if (s) {
            const g = f === "y" ? "top" : "left",
              y = f === "y" ? "bottom" : "right",
              E = h + l[g],
              A = h - l[y];
            h = Nl(E, h, A);
          }
          if (o) {
            const g = d === "y" ? "top" : "left",
              y = d === "y" ? "bottom" : "right",
              E = _ + l[g],
              A = _ - l[y];
            _ = Nl(E, _, A);
          }
          const p = a.fn({ ...t, [f]: h, [d]: _ });
          return { ...p, data: { x: p.x - r, y: p.y - n } };
        },
      }
    );
  },
  CL = function (e) {
    return (
      e === void 0 && (e = {}),
      {
        options: e,
        fn(t) {
          const { x: r, y: n, placement: i, rects: s, middlewareData: o } = t,
            { offset: a = 0, mainAxis: c = !0, crossAxis: u = !0 } = xt(e, t),
            l = { x: r, y: n },
            d = Tn(i),
            f = Yd(d);
          let h = l[f],
            _ = l[d];
          const p = xt(a, t),
            g =
              typeof p == "number"
                ? { mainAxis: p, crossAxis: 0 }
                : { mainAxis: 0, crossAxis: 0, ...p };
          if (c) {
            const A = f === "y" ? "height" : "width",
              b = s.reference[f] - s.floating[A] + g.mainAxis,
              S = s.reference[f] + s.reference[A] - g.mainAxis;
            h < b ? (h = b) : h > S && (h = S);
          }
          if (u) {
            var y, E;
            const A = f === "y" ? "width" : "height",
              b = ["top", "left"].includes(Rt(i)),
              S =
                s.reference[d] -
                s.floating[A] +
                ((b && ((y = o.offset) == null ? void 0 : y[d])) || 0) +
                (b ? 0 : g.crossAxis),
              w =
                s.reference[d] +
                s.reference[A] +
                (b ? 0 : ((E = o.offset) == null ? void 0 : E[d]) || 0) -
                (b ? g.crossAxis : 0);
            _ < S ? (_ = S) : _ > w && (_ = w);
          }
          return { [f]: h, [d]: _ };
        },
      }
    );
  },
  AL = function (e) {
    return (
      e === void 0 && (e = {}),
      {
        name: "size",
        options: e,
        async fn(t) {
          const { placement: r, rects: n, platform: i, elements: s } = t,
            { apply: o = () => {}, ...a } = xt(e, t),
            c = await ii(t, a),
            u = Rt(r),
            l = In(r),
            d = Tn(r) === "y",
            { width: f, height: h } = n.floating;
          let _, p;
          u === "top" || u === "bottom"
            ? ((_ = u),
              (p =
                l ===
                ((await (i.isRTL == null ? void 0 : i.isRTL(s.floating)))
                  ? "start"
                  : "end")
                  ? "left"
                  : "right"))
            : ((p = u), (_ = l === "end" ? "top" : "bottom"));
          const g = h - c[_],
            y = f - c[p],
            E = !t.middlewareData.shift;
          let A = g,
            b = y;
          if (d) {
            const w = f - c.left - c.right;
            b = l || E ? Yt(y, w) : w;
          } else {
            const w = h - c.top - c.bottom;
            A = l || E ? Yt(g, w) : w;
          }
          if (E && !l) {
            const w = Re(c.left, 0),
              C = Re(c.right, 0),
              O = Re(c.top, 0),
              T = Re(c.bottom, 0);
            d
              ? (b = f - 2 * (w !== 0 || C !== 0 ? w + C : Re(c.left, c.right)))
              : (A =
                  h - 2 * (O !== 0 || T !== 0 ? O + T : Re(c.top, c.bottom)));
          }
          await o({ ...t, availableWidth: b, availableHeight: A });
          const S = await i.getDimensions(s.floating);
          return f !== S.width || h !== S.height
            ? { reset: { rects: !0 } }
            : {};
        },
      }
    );
  };
function ho() {
  return typeof window < "u";
}
function Pn(e) {
  return A0(e) ? (e.nodeName || "").toLowerCase() : "#document";
}
function Pe(e) {
  var t;
  return (
    (e == null || (t = e.ownerDocument) == null ? void 0 : t.defaultView) ||
    window
  );
}
function gt(e) {
  var t;
  return (t = (A0(e) ? e.ownerDocument : e.document) || window.document) == null
    ? void 0
    : t.documentElement;
}
function A0(e) {
  return ho() ? e instanceof Node || e instanceof Pe(e).Node : !1;
}
function et(e) {
  return ho() ? e instanceof Element || e instanceof Pe(e).Element : !1;
}
function ht(e) {
  return ho() ? e instanceof HTMLElement || e instanceof Pe(e).HTMLElement : !1;
}
function Q_(e) {
  return !ho() || typeof ShadowRoot > "u"
    ? !1
    : e instanceof ShadowRoot || e instanceof Pe(e).ShadowRoot;
}
function vi(e) {
  const { overflow: t, overflowX: r, overflowY: n, display: i } = tt(e);
  return (
    /auto|scroll|overlay|hidden|clip/.test(t + n + r) &&
    !["inline", "contents"].includes(i)
  );
}
function OL(e) {
  return ["table", "td", "th"].includes(Pn(e));
}
function po(e) {
  return [":popover-open", ":modal"].some((t) => {
    try {
      return e.matches(t);
    } catch {
      return !1;
    }
  });
}
function Qd(e) {
  const t = Xd(),
    r = et(e) ? tt(e) : e;
  return (
    r.transform !== "none" ||
    r.perspective !== "none" ||
    (r.containerType ? r.containerType !== "normal" : !1) ||
    (!t && (r.backdropFilter ? r.backdropFilter !== "none" : !1)) ||
    (!t && (r.filter ? r.filter !== "none" : !1)) ||
    ["transform", "perspective", "filter"].some((n) =>
      (r.willChange || "").includes(n),
    ) ||
    ["paint", "layout", "strict", "content"].some((n) =>
      (r.contain || "").includes(n),
    )
  );
}
function xL(e) {
  let t = Zt(e);
  for (; ht(t) && !_n(t); ) {
    if (Qd(t)) return t;
    if (po(t)) return null;
    t = Zt(t);
  }
  return null;
}
function Xd() {
  return typeof CSS > "u" || !CSS.supports
    ? !1
    : CSS.supports("-webkit-backdrop-filter", "none");
}
function _n(e) {
  return ["html", "body", "#document"].includes(Pn(e));
}
function tt(e) {
  return Pe(e).getComputedStyle(e);
}
function go(e) {
  return et(e)
    ? { scrollLeft: e.scrollLeft, scrollTop: e.scrollTop }
    : { scrollLeft: e.scrollX, scrollTop: e.scrollY };
}
function Zt(e) {
  if (Pn(e) === "html") return e;
  const t = e.assignedSlot || e.parentNode || (Q_(e) && e.host) || gt(e);
  return Q_(t) ? t.host : t;
}
function O0(e) {
  const t = Zt(e);
  return _n(t)
    ? e.ownerDocument
      ? e.ownerDocument.body
      : e.body
    : ht(t) && vi(t)
      ? t
      : O0(t);
}
function si(e, t, r) {
  var n;
  t === void 0 && (t = []), r === void 0 && (r = !0);
  const i = O0(e),
    s = i === ((n = e.ownerDocument) == null ? void 0 : n.body),
    o = Pe(i);
  if (s) {
    const a = Dl(o);
    return t.concat(
      o,
      o.visualViewport || [],
      vi(i) ? i : [],
      a && r ? si(a) : [],
    );
  }
  return t.concat(i, si(i, [], r));
}
function Dl(e) {
  return e.parent && Object.getPrototypeOf(e.parent) ? e.frameElement : null;
}
function x0(e) {
  const t = tt(e);
  let r = parseFloat(t.width) || 0,
    n = parseFloat(t.height) || 0;
  const i = ht(e),
    s = i ? e.offsetWidth : r,
    o = i ? e.offsetHeight : n,
    a = ys(r) !== s || ys(n) !== o;
  return a && ((r = s), (n = o)), { width: r, height: n, $: a };
}
function ef(e) {
  return et(e) ? e : e.contextElement;
}
function tn(e) {
  const t = ef(e);
  if (!ht(t)) return Jt(1);
  const r = t.getBoundingClientRect(),
    { width: n, height: i, $: s } = x0(t);
  let o = (s ? ys(r.width) : r.width) / n,
    a = (s ? ys(r.height) : r.height) / i;
  return (
    (!o || !Number.isFinite(o)) && (o = 1),
    (!a || !Number.isFinite(a)) && (a = 1),
    { x: o, y: a }
  );
}
const RL = Jt(0);
function R0(e) {
  const t = Pe(e);
  return !Xd() || !t.visualViewport
    ? RL
    : { x: t.visualViewport.offsetLeft, y: t.visualViewport.offsetTop };
}
function IL(e, t, r) {
  return t === void 0 && (t = !1), !r || (t && r !== Pe(e)) ? !1 : t;
}
function Ar(e, t, r, n) {
  t === void 0 && (t = !1), r === void 0 && (r = !1);
  const i = e.getBoundingClientRect(),
    s = ef(e);
  let o = Jt(1);
  t && (n ? et(n) && (o = tn(n)) : (o = tn(e)));
  const a = IL(s, r, n) ? R0(s) : Jt(0);
  let c = (i.left + a.x) / o.x,
    u = (i.top + a.y) / o.y,
    l = i.width / o.x,
    d = i.height / o.y;
  if (s) {
    const f = Pe(s),
      h = n && et(n) ? Pe(n) : n;
    let _ = f,
      p = Dl(_);
    for (; p && n && h !== _; ) {
      const g = tn(p),
        y = p.getBoundingClientRect(),
        E = tt(p),
        A = y.left + (p.clientLeft + parseFloat(E.paddingLeft)) * g.x,
        b = y.top + (p.clientTop + parseFloat(E.paddingTop)) * g.y;
      (c *= g.x),
        (u *= g.y),
        (l *= g.x),
        (d *= g.y),
        (c += A),
        (u += b),
        (_ = Pe(p)),
        (p = Dl(_));
    }
  }
  return Es({ width: l, height: d, x: c, y: u });
}
function TL(e) {
  let { elements: t, rect: r, offsetParent: n, strategy: i } = e;
  const s = i === "fixed",
    o = gt(n),
    a = t ? po(t.floating) : !1;
  if (n === o || (a && s)) return r;
  let c = { scrollLeft: 0, scrollTop: 0 },
    u = Jt(1);
  const l = Jt(0),
    d = ht(n);
  if (
    (d || (!d && !s)) &&
    ((Pn(n) !== "body" || vi(o)) && (c = go(n)), ht(n))
  ) {
    const f = Ar(n);
    (u = tn(n)), (l.x = f.x + n.clientLeft), (l.y = f.y + n.clientTop);
  }
  return {
    width: r.width * u.x,
    height: r.height * u.y,
    x: r.x * u.x - c.scrollLeft * u.x + l.x,
    y: r.y * u.y - c.scrollTop * u.y + l.y,
  };
}
function PL(e) {
  return Array.from(e.getClientRects());
}
function Ml(e, t) {
  const r = go(e).scrollLeft;
  return t ? t.left + r : Ar(gt(e)).left + r;
}
function kL(e) {
  const t = gt(e),
    r = go(e),
    n = e.ownerDocument.body,
    i = Re(t.scrollWidth, t.clientWidth, n.scrollWidth, n.clientWidth),
    s = Re(t.scrollHeight, t.clientHeight, n.scrollHeight, n.clientHeight);
  let o = -r.scrollLeft + Ml(e);
  const a = -r.scrollTop;
  return (
    tt(n).direction === "rtl" && (o += Re(t.clientWidth, n.clientWidth) - i),
    { width: i, height: s, x: o, y: a }
  );
}
function NL(e, t) {
  const r = Pe(e),
    n = gt(e),
    i = r.visualViewport;
  let s = n.clientWidth,
    o = n.clientHeight,
    a = 0,
    c = 0;
  if (i) {
    (s = i.width), (o = i.height);
    const u = Xd();
    (!u || (u && t === "fixed")) && ((a = i.offsetLeft), (c = i.offsetTop));
  }
  return { width: s, height: o, x: a, y: c };
}
function LL(e, t) {
  const r = Ar(e, !0, t === "fixed"),
    n = r.top + e.clientTop,
    i = r.left + e.clientLeft,
    s = ht(e) ? tn(e) : Jt(1),
    o = e.clientWidth * s.x,
    a = e.clientHeight * s.y,
    c = i * s.x,
    u = n * s.y;
  return { width: o, height: a, x: c, y: u };
}
function X_(e, t, r) {
  let n;
  if (t === "viewport") n = NL(e, r);
  else if (t === "document") n = kL(gt(e));
  else if (et(t)) n = LL(t, r);
  else {
    const i = R0(e);
    n = { ...t, x: t.x - i.x, y: t.y - i.y };
  }
  return Es(n);
}
function I0(e, t) {
  const r = Zt(e);
  return r === t || !et(r) || _n(r)
    ? !1
    : tt(r).position === "fixed" || I0(r, t);
}
function DL(e, t) {
  const r = t.get(e);
  if (r) return r;
  let n = si(e, [], !1).filter((a) => et(a) && Pn(a) !== "body"),
    i = null;
  const s = tt(e).position === "fixed";
  let o = s ? Zt(e) : e;
  for (; et(o) && !_n(o); ) {
    const a = tt(o),
      c = Qd(o);
    !c && a.position === "fixed" && (i = null),
      (
        s
          ? !c && !i
          : (!c &&
              a.position === "static" &&
              !!i &&
              ["absolute", "fixed"].includes(i.position)) ||
            (vi(o) && !c && I0(e, o))
      )
        ? (n = n.filter((l) => l !== o))
        : (i = a),
      (o = Zt(o));
  }
  return t.set(e, n), n;
}
function ML(e) {
  let { element: t, boundary: r, rootBoundary: n, strategy: i } = e;
  const o = [
      ...(r === "clippingAncestors"
        ? po(t)
          ? []
          : DL(t, this._c)
        : [].concat(r)),
      n,
    ],
    a = o[0],
    c = o.reduce(
      (u, l) => {
        const d = X_(t, l, i);
        return (
          (u.top = Re(d.top, u.top)),
          (u.right = Yt(d.right, u.right)),
          (u.bottom = Yt(d.bottom, u.bottom)),
          (u.left = Re(d.left, u.left)),
          u
        );
      },
      X_(t, a, i),
    );
  return {
    width: c.right - c.left,
    height: c.bottom - c.top,
    x: c.left,
    y: c.top,
  };
}
function jL(e) {
  const { width: t, height: r } = x0(e);
  return { width: t, height: r };
}
function UL(e, t, r) {
  const n = ht(t),
    i = gt(t),
    s = r === "fixed",
    o = Ar(e, !0, s, t);
  let a = { scrollLeft: 0, scrollTop: 0 };
  const c = Jt(0);
  if (n || (!n && !s))
    if (((Pn(t) !== "body" || vi(i)) && (a = go(t)), n)) {
      const h = Ar(t, !0, s, t);
      (c.x = h.x + t.clientLeft), (c.y = h.y + t.clientTop);
    } else i && (c.x = Ml(i));
  let u = 0,
    l = 0;
  if (i && !n && !s) {
    const h = i.getBoundingClientRect();
    (l = h.top + a.scrollTop), (u = h.left + a.scrollLeft - Ml(i, h));
  }
  const d = o.left + a.scrollLeft - c.x - u,
    f = o.top + a.scrollTop - c.y - l;
  return { x: d, y: f, width: o.width, height: o.height };
}
function Mu(e) {
  return tt(e).position === "static";
}
function ev(e, t) {
  if (!ht(e) || tt(e).position === "fixed") return null;
  if (t) return t(e);
  let r = e.offsetParent;
  return gt(e) === r && (r = r.ownerDocument.body), r;
}
function T0(e, t) {
  const r = Pe(e);
  if (po(e)) return r;
  if (!ht(e)) {
    let i = Zt(e);
    for (; i && !_n(i); ) {
      if (et(i) && !Mu(i)) return i;
      i = Zt(i);
    }
    return r;
  }
  let n = ev(e, t);
  for (; n && OL(n) && Mu(n); ) n = ev(n, t);
  return n && _n(n) && Mu(n) && !Qd(n) ? r : n || xL(e) || r;
}
const BL = async function (e) {
  const t = this.getOffsetParent || T0,
    r = this.getDimensions,
    n = await r(e.floating);
  return {
    reference: UL(e.reference, await t(e.floating), e.strategy),
    floating: { x: 0, y: 0, width: n.width, height: n.height },
  };
};
function qL(e) {
  return tt(e).direction === "rtl";
}
const FL = {
  convertOffsetParentRelativeRectToViewportRelativeRect: TL,
  getDocumentElement: gt,
  getClippingRect: ML,
  getOffsetParent: T0,
  getElementRects: BL,
  getClientRects: PL,
  getDimensions: jL,
  getScale: tn,
  isElement: et,
  isRTL: qL,
};
function GL(e, t) {
  let r = null,
    n;
  const i = gt(e);
  function s() {
    var a;
    clearTimeout(n), (a = r) == null || a.disconnect(), (r = null);
  }
  function o(a, c) {
    a === void 0 && (a = !1), c === void 0 && (c = 1), s();
    const { left: u, top: l, width: d, height: f } = e.getBoundingClientRect();
    if ((a || t(), !d || !f)) return;
    const h = Gi(l),
      _ = Gi(i.clientWidth - (u + d)),
      p = Gi(i.clientHeight - (l + f)),
      g = Gi(u),
      E = {
        rootMargin: -h + "px " + -_ + "px " + -p + "px " + -g + "px",
        threshold: Re(0, Yt(1, c)) || 1,
      };
    let A = !0;
    function b(S) {
      const w = S[0].intersectionRatio;
      if (w !== c) {
        if (!A) return o();
        w
          ? o(!1, w)
          : (n = setTimeout(() => {
              o(!1, 1e-7);
            }, 1e3));
      }
      A = !1;
    }
    try {
      r = new IntersectionObserver(b, { ...E, root: i.ownerDocument });
    } catch {
      r = new IntersectionObserver(b, E);
    }
    r.observe(e);
  }
  return o(!0), s;
}
function VL(e, t, r, n) {
  n === void 0 && (n = {});
  const {
      ancestorScroll: i = !0,
      ancestorResize: s = !0,
      elementResize: o = typeof ResizeObserver == "function",
      layoutShift: a = typeof IntersectionObserver == "function",
      animationFrame: c = !1,
    } = n,
    u = ef(e),
    l = i || s ? [...(u ? si(u) : []), ...si(t)] : [];
  l.forEach((y) => {
    i && y.addEventListener("scroll", r, { passive: !0 }),
      s && y.addEventListener("resize", r);
  });
  const d = u && a ? GL(u, r) : null;
  let f = -1,
    h = null;
  o &&
    ((h = new ResizeObserver((y) => {
      let [E] = y;
      E &&
        E.target === u &&
        h &&
        (h.unobserve(t),
        cancelAnimationFrame(f),
        (f = requestAnimationFrame(() => {
          var A;
          (A = h) == null || A.observe(t);
        }))),
        r();
    })),
    u && !c && h.observe(u),
    h.observe(t));
  let _,
    p = c ? Ar(e) : null;
  c && g();
  function g() {
    const y = Ar(e);
    p &&
      (y.x !== p.x ||
        y.y !== p.y ||
        y.width !== p.width ||
        y.height !== p.height) &&
      r(),
      (p = y),
      (_ = requestAnimationFrame(g));
  }
  return (
    r(),
    () => {
      var y;
      l.forEach((E) => {
        i && E.removeEventListener("scroll", r),
          s && E.removeEventListener("resize", r);
      }),
        d?.(),
        (y = h) == null || y.disconnect(),
        (h = null),
        c && cancelAnimationFrame(_);
    }
  );
}
const $L = EL,
  HL = wL,
  zL = bL,
  WL = AL,
  KL = yL,
  tv = mL,
  YL = CL,
  JL = (e, t, r) => {
    const n = new Map(),
      i = { platform: FL, ...r },
      s = { ...i.platform, _c: n };
    return vL(e, t, { ...i, platform: s });
  };
var Qi = typeof document < "u" ? v.useLayoutEffect : v.useEffect;
function ws(e, t) {
  if (e === t) return !0;
  if (typeof e != typeof t) return !1;
  if (typeof e == "function" && e.toString() === t.toString()) return !0;
  let r, n, i;
  if (e && t && typeof e == "object") {
    if (Array.isArray(e)) {
      if (((r = e.length), r !== t.length)) return !1;
      for (n = r; n-- !== 0; ) if (!ws(e[n], t[n])) return !1;
      return !0;
    }
    if (((i = Object.keys(e)), (r = i.length), r !== Object.keys(t).length))
      return !1;
    for (n = r; n-- !== 0; ) if (!{}.hasOwnProperty.call(t, i[n])) return !1;
    for (n = r; n-- !== 0; ) {
      const s = i[n];
      if (!(s === "_owner" && e.$$typeof) && !ws(e[s], t[s])) return !1;
    }
    return !0;
  }
  return e !== e && t !== t;
}
function P0(e) {
  return typeof window > "u"
    ? 1
    : (e.ownerDocument.defaultView || window).devicePixelRatio || 1;
}
function rv(e, t) {
  const r = P0(e);
  return Math.round(t * r) / r;
}
function ju(e) {
  const t = v.useRef(e);
  return (
    Qi(() => {
      t.current = e;
    }),
    t
  );
}
function ZL(e) {
  e === void 0 && (e = {});
  const {
      placement: t = "bottom",
      strategy: r = "absolute",
      middleware: n = [],
      platform: i,
      elements: { reference: s, floating: o } = {},
      transform: a = !0,
      whileElementsMounted: c,
      open: u,
    } = e,
    [l, d] = v.useState({
      x: 0,
      y: 0,
      strategy: r,
      placement: t,
      middlewareData: {},
      isPositioned: !1,
    }),
    [f, h] = v.useState(n);
  ws(f, n) || h(n);
  const [_, p] = v.useState(null),
    [g, y] = v.useState(null),
    E = v.useCallback((Y) => {
      Y !== w.current && ((w.current = Y), p(Y));
    }, []),
    A = v.useCallback((Y) => {
      Y !== C.current && ((C.current = Y), y(Y));
    }, []),
    b = s || _,
    S = o || g,
    w = v.useRef(null),
    C = v.useRef(null),
    O = v.useRef(l),
    T = c != null,
    I = ju(c),
    N = ju(i),
    j = ju(u),
    B = v.useCallback(() => {
      if (!w.current || !C.current) return;
      const Y = { placement: t, strategy: r, middleware: f };
      N.current && (Y.platform = N.current),
        JL(w.current, C.current, Y).then((se) => {
          const at = { ...se, isPositioned: j.current !== !1 };
          F.current &&
            !ws(O.current, at) &&
            ((O.current = at),
            $l.flushSync(() => {
              d(at);
            }));
        });
    }, [f, t, r, N, j]);
  Qi(() => {
    u === !1 &&
      O.current.isPositioned &&
      ((O.current.isPositioned = !1), d((Y) => ({ ...Y, isPositioned: !1 })));
  }, [u]);
  const F = v.useRef(!1);
  Qi(
    () => (
      (F.current = !0),
      () => {
        F.current = !1;
      }
    ),
    [],
  ),
    Qi(() => {
      if ((b && (w.current = b), S && (C.current = S), b && S)) {
        if (I.current) return I.current(b, S, B);
        B();
      }
    }, [b, S, B, I, T]);
  const H = v.useMemo(
      () => ({ reference: w, floating: C, setReference: E, setFloating: A }),
      [E, A],
    ),
    G = v.useMemo(() => ({ reference: b, floating: S }), [b, S]),
    K = v.useMemo(() => {
      const Y = { position: r, left: 0, top: 0 };
      if (!G.floating) return Y;
      const se = rv(G.floating, l.x),
        at = rv(G.floating, l.y);
      return a
        ? {
            ...Y,
            transform: "translate(" + se + "px, " + at + "px)",
            ...(P0(G.floating) >= 1.5 && { willChange: "transform" }),
          }
        : { position: r, left: se, top: at };
    }, [r, a, G.floating, l.x, l.y]);
  return v.useMemo(
    () => ({ ...l, update: B, refs: H, elements: G, floatingStyles: K }),
    [l, B, H, G, K],
  );
}
const QL = (e) => {
    function t(r) {
      return {}.hasOwnProperty.call(r, "current");
    }
    return {
      name: "arrow",
      options: e,
      fn(r) {
        const { element: n, padding: i } = typeof e == "function" ? e(r) : e;
        return n && t(n)
          ? n.current != null
            ? tv({ element: n.current, padding: i }).fn(r)
            : {}
          : n
            ? tv({ element: n, padding: i }).fn(r)
            : {};
      },
    };
  },
  XL = (e, t) => ({ ...$L(e), options: [e, t] }),
  eD = (e, t) => ({ ...HL(e), options: [e, t] }),
  tD = (e, t) => ({ ...YL(e), options: [e, t] }),
  rD = (e, t) => ({ ...zL(e), options: [e, t] }),
  nD = (e, t) => ({ ...WL(e), options: [e, t] }),
  iD = (e, t) => ({ ...KL(e), options: [e, t] }),
  sD = (e, t) => ({ ...QL(e), options: [e, t] });
var oD = "Arrow",
  k0 = v.forwardRef((e, t) => {
    const { children: r, width: n = 10, height: i = 5, ...s } = e;
    return m.jsx(xe.svg, {
      ...s,
      ref: t,
      width: n,
      height: i,
      viewBox: "0 0 30 10",
      preserveAspectRatio: "none",
      children: e.asChild ? r : m.jsx("polygon", { points: "0,0 30,0 15,10" }),
    });
  });
k0.displayName = oD;
var aD = k0;
function cD(e, t = []) {
  let r = [];
  function n(s, o) {
    const a = v.createContext(o),
      c = r.length;
    r = [...r, o];
    function u(d) {
      const { scope: f, children: h, ..._ } = d,
        p = f?.[e][c] || a,
        g = v.useMemo(() => _, Object.values(_));
      return m.jsx(p.Provider, { value: g, children: h });
    }
    function l(d, f) {
      const h = f?.[e][c] || a,
        _ = v.useContext(h);
      if (_) return _;
      if (o !== void 0) return o;
      throw new Error(`\`${d}\` must be used within \`${s}\``);
    }
    return (u.displayName = s + "Provider"), [u, l];
  }
  const i = () => {
    const s = r.map((o) => v.createContext(o));
    return function (a) {
      const c = a?.[e] || s;
      return v.useMemo(() => ({ [`__scope${e}`]: { ...a, [e]: c } }), [a, c]);
    };
  };
  return (i.scopeName = e), [n, uD(i, ...t)];
}
function uD(...e) {
  const t = e[0];
  if (e.length === 1) return t;
  const r = () => {
    const n = e.map((i) => ({ useScope: i(), scopeName: i.scopeName }));
    return function (s) {
      const o = n.reduce((a, { useScope: c, scopeName: u }) => {
        const d = c(s)[`__scope${u}`];
        return { ...a, ...d };
      }, {});
      return v.useMemo(() => ({ [`__scope${t.scopeName}`]: o }), [o]);
    };
  };
  return (r.scopeName = t.scopeName), r;
}
function lD(e) {
  const [t, r] = v.useState(void 0);
  return (
    Sr(() => {
      if (e) {
        r({ width: e.offsetWidth, height: e.offsetHeight });
        const n = new ResizeObserver((i) => {
          if (!Array.isArray(i) || !i.length) return;
          const s = i[0];
          let o, a;
          if ("borderBoxSize" in s) {
            const c = s.borderBoxSize,
              u = Array.isArray(c) ? c[0] : c;
            (o = u.inlineSize), (a = u.blockSize);
          } else (o = e.offsetWidth), (a = e.offsetHeight);
          r({ width: o, height: a });
        });
        return n.observe(e, { box: "border-box" }), () => n.unobserve(e);
      } else r(void 0);
    }, [e]),
    t
  );
}
var tf = "Popper",
  [N0, L0] = cD(tf),
  [dD, D0] = N0(tf),
  M0 = (e) => {
    const { __scopePopper: t, children: r } = e,
      [n, i] = v.useState(null);
    return m.jsx(dD, { scope: t, anchor: n, onAnchorChange: i, children: r });
  };
M0.displayName = tf;
var j0 = "PopperAnchor",
  U0 = v.forwardRef((e, t) => {
    const { __scopePopper: r, virtualRef: n, ...i } = e,
      s = D0(j0, r),
      o = v.useRef(null),
      a = st(t, o);
    return (
      v.useEffect(() => {
        s.onAnchorChange(n?.current || o.current);
      }),
      n ? null : m.jsx(xe.div, { ...i, ref: a })
    );
  });
U0.displayName = j0;
var rf = "PopperContent",
  [fD, hD] = N0(rf),
  B0 = v.forwardRef((e, t) => {
    const {
        __scopePopper: r,
        side: n = "bottom",
        sideOffset: i = 0,
        align: s = "center",
        alignOffset: o = 0,
        arrowPadding: a = 0,
        avoidCollisions: c = !0,
        collisionBoundary: u = [],
        collisionPadding: l = 0,
        sticky: d = "partial",
        hideWhenDetached: f = !1,
        updatePositionStrategy: h = "optimized",
        onPlaced: _,
        ...p
      } = e,
      g = D0(rf, r),
      [y, E] = v.useState(null),
      A = st(t, (kn) => E(kn)),
      [b, S] = v.useState(null),
      w = lD(b),
      C = w?.width ?? 0,
      O = w?.height ?? 0,
      T = n + (s !== "center" ? "-" + s : ""),
      I =
        typeof l == "number"
          ? l
          : { top: 0, right: 0, bottom: 0, left: 0, ...l },
      N = Array.isArray(u) ? u : [u],
      j = N.length > 0,
      B = { padding: I, boundary: N.filter(gD), altBoundary: j },
      {
        refs: F,
        floatingStyles: H,
        placement: G,
        isPositioned: K,
        middlewareData: Y,
      } = ZL({
        strategy: "fixed",
        placement: T,
        whileElementsMounted: (...kn) =>
          VL(...kn, { animationFrame: h === "always" }),
        elements: { reference: g.anchor },
        middleware: [
          XL({ mainAxis: i + O, alignmentAxis: o }),
          c &&
            eD({
              mainAxis: !0,
              crossAxis: !1,
              limiter: d === "partial" ? tD() : void 0,
              ...B,
            }),
          c && rD({ ...B }),
          nD({
            ...B,
            apply: ({
              elements: kn,
              rects: ff,
              availableWidth: d1,
              availableHeight: f1,
            }) => {
              const { width: h1, height: p1 } = ff.reference,
                bi = kn.floating.style;
              bi.setProperty("--radix-popper-available-width", `${d1}px`),
                bi.setProperty("--radix-popper-available-height", `${f1}px`),
                bi.setProperty("--radix-popper-anchor-width", `${h1}px`),
                bi.setProperty("--radix-popper-anchor-height", `${p1}px`);
            },
          }),
          b && sD({ element: b, padding: a }),
          _D({ arrowWidth: C, arrowHeight: O }),
          f && iD({ strategy: "referenceHidden", ...B }),
        ],
      }),
      [se, at] = G0(G),
      df = Kt(_);
    Sr(() => {
      K && df?.();
    }, [K, df]);
    const o1 = Y.arrow?.x,
      a1 = Y.arrow?.y,
      c1 = Y.arrow?.centerOffset !== 0,
      [u1, l1] = v.useState();
    return (
      Sr(() => {
        y && l1(window.getComputedStyle(y).zIndex);
      }, [y]),
      m.jsx("div", {
        ref: F.setFloating,
        "data-radix-popper-content-wrapper": "",
        style: {
          ...H,
          transform: K ? H.transform : "translate(0, -200%)",
          minWidth: "max-content",
          zIndex: u1,
          "--radix-popper-transform-origin": [
            Y.transformOrigin?.x,
            Y.transformOrigin?.y,
          ].join(" "),
          ...(Y.hide?.referenceHidden && {
            visibility: "hidden",
            pointerEvents: "none",
          }),
        },
        dir: e.dir,
        children: m.jsx(fD, {
          scope: r,
          placedSide: se,
          onArrowChange: S,
          arrowX: o1,
          arrowY: a1,
          shouldHideArrow: c1,
          children: m.jsx(xe.div, {
            "data-side": se,
            "data-align": at,
            ...p,
            ref: A,
            style: { ...p.style, animation: K ? void 0 : "none" },
          }),
        }),
      })
    );
  });
B0.displayName = rf;
var q0 = "PopperArrow",
  pD = { top: "bottom", right: "left", bottom: "top", left: "right" },
  F0 = v.forwardRef(function (t, r) {
    const { __scopePopper: n, ...i } = t,
      s = hD(q0, n),
      o = pD[s.placedSide];
    return m.jsx("span", {
      ref: s.onArrowChange,
      style: {
        position: "absolute",
        left: s.arrowX,
        top: s.arrowY,
        [o]: 0,
        transformOrigin: {
          top: "",
          right: "0 0",
          bottom: "center 0",
          left: "100% 0",
        }[s.placedSide],
        transform: {
          top: "translateY(100%)",
          right: "translateY(50%) rotate(90deg) translateX(-50%)",
          bottom: "rotate(180deg)",
          left: "translateY(50%) rotate(-90deg) translateX(50%)",
        }[s.placedSide],
        visibility: s.shouldHideArrow ? "hidden" : void 0,
      },
      children: m.jsx(aD, {
        ...i,
        ref: r,
        style: { ...i.style, display: "block" },
      }),
    });
  });
F0.displayName = q0;
function gD(e) {
  return e !== null;
}
var _D = (e) => ({
  name: "transformOrigin",
  options: e,
  fn(t) {
    const { placement: r, rects: n, middlewareData: i } = t,
      o = i.arrow?.centerOffset !== 0,
      a = o ? 0 : e.arrowWidth,
      c = o ? 0 : e.arrowHeight,
      [u, l] = G0(r),
      d = { start: "0%", center: "50%", end: "100%" }[l],
      f = (i.arrow?.x ?? 0) + a / 2,
      h = (i.arrow?.y ?? 0) + c / 2;
    let _ = "",
      p = "";
    return (
      u === "bottom"
        ? ((_ = o ? d : `${f}px`), (p = `${-c}px`))
        : u === "top"
          ? ((_ = o ? d : `${f}px`), (p = `${n.floating.height + c}px`))
          : u === "right"
            ? ((_ = `${-c}px`), (p = o ? d : `${h}px`))
            : u === "left" &&
              ((_ = `${n.floating.width + c}px`), (p = o ? d : `${h}px`)),
      { data: { x: _, y: p } }
    );
  },
});
function G0(e) {
  const [t, r = "center"] = e.split("-");
  return [t, r];
}
var vD = M0,
  mD = U0,
  bD = B0,
  yD = F0,
  [_o, C6] = Ey("Tooltip", [L0]),
  vo = L0(),
  V0 = "TooltipProvider",
  SD = 700,
  jl = "tooltip.open",
  [ED, nf] = _o(V0),
  $0 = (e) => {
    const {
        __scopeTooltip: t,
        delayDuration: r = SD,
        skipDelayDuration: n = 300,
        disableHoverableContent: i = !1,
        children: s,
      } = e,
      [o, a] = v.useState(!0),
      c = v.useRef(!1),
      u = v.useRef(0);
    return (
      v.useEffect(() => {
        const l = u.current;
        return () => window.clearTimeout(l);
      }, []),
      m.jsx(ED, {
        scope: t,
        isOpenDelayed: o,
        delayDuration: r,
        onOpen: v.useCallback(() => {
          window.clearTimeout(u.current), a(!1);
        }, []),
        onClose: v.useCallback(() => {
          window.clearTimeout(u.current),
            (u.current = window.setTimeout(() => a(!0), n));
        }, [n]),
        isPointerInTransitRef: c,
        onPointerInTransitChange: v.useCallback((l) => {
          c.current = l;
        }, []),
        disableHoverableContent: i,
        children: s,
      })
    );
  };
$0.displayName = V0;
var mo = "Tooltip",
  [wD, mi] = _o(mo),
  H0 = (e) => {
    const {
        __scopeTooltip: t,
        children: r,
        open: n,
        defaultOpen: i = !1,
        onOpenChange: s,
        disableHoverableContent: o,
        delayDuration: a,
      } = e,
      c = nf(mo, e.__scopeTooltip),
      u = vo(t),
      [l, d] = v.useState(null),
      f = Ki(),
      h = v.useRef(0),
      _ = o ?? c.disableHoverableContent,
      p = a ?? c.delayDuration,
      g = v.useRef(!1),
      [y = !1, E] = wy({
        prop: n,
        defaultProp: i,
        onChange: (C) => {
          C
            ? (c.onOpen(), document.dispatchEvent(new CustomEvent(jl)))
            : c.onClose(),
            s?.(C);
        },
      }),
      A = v.useMemo(
        () => (y ? (g.current ? "delayed-open" : "instant-open") : "closed"),
        [y],
      ),
      b = v.useCallback(() => {
        window.clearTimeout(h.current),
          (h.current = 0),
          (g.current = !1),
          E(!0);
      }, [E]),
      S = v.useCallback(() => {
        window.clearTimeout(h.current), (h.current = 0), E(!1);
      }, [E]),
      w = v.useCallback(() => {
        window.clearTimeout(h.current),
          (h.current = window.setTimeout(() => {
            (g.current = !0), E(!0), (h.current = 0);
          }, p));
      }, [p, E]);
    return (
      v.useEffect(
        () => () => {
          h.current && (window.clearTimeout(h.current), (h.current = 0));
        },
        [],
      ),
      m.jsx(vD, {
        ...u,
        children: m.jsx(wD, {
          scope: t,
          contentId: f,
          open: y,
          stateAttribute: A,
          trigger: l,
          onTriggerChange: d,
          onTriggerEnter: v.useCallback(() => {
            c.isOpenDelayed ? w() : b();
          }, [c.isOpenDelayed, w, b]),
          onTriggerLeave: v.useCallback(() => {
            _ ? S() : (window.clearTimeout(h.current), (h.current = 0));
          }, [S, _]),
          onOpen: b,
          onClose: S,
          disableHoverableContent: _,
          children: r,
        }),
      })
    );
  };
H0.displayName = mo;
var Ul = "TooltipTrigger",
  z0 = v.forwardRef((e, t) => {
    const { __scopeTooltip: r, ...n } = e,
      i = mi(Ul, r),
      s = nf(Ul, r),
      o = vo(r),
      a = v.useRef(null),
      c = st(t, a, i.onTriggerChange),
      u = v.useRef(!1),
      l = v.useRef(!1),
      d = v.useCallback(() => (u.current = !1), []);
    return (
      v.useEffect(
        () => () => document.removeEventListener("pointerup", d),
        [d],
      ),
      m.jsx(mD, {
        asChild: !0,
        ...o,
        children: m.jsx(xe.button, {
          "aria-describedby": i.open ? i.contentId : void 0,
          "data-state": i.stateAttribute,
          ...n,
          ref: c,
          onPointerMove: Se(e.onPointerMove, (f) => {
            f.pointerType !== "touch" &&
              !l.current &&
              !s.isPointerInTransitRef.current &&
              (i.onTriggerEnter(), (l.current = !0));
          }),
          onPointerLeave: Se(e.onPointerLeave, () => {
            i.onTriggerLeave(), (l.current = !1);
          }),
          onPointerDown: Se(e.onPointerDown, () => {
            (u.current = !0),
              document.addEventListener("pointerup", d, { once: !0 });
          }),
          onFocus: Se(e.onFocus, () => {
            u.current || i.onOpen();
          }),
          onBlur: Se(e.onBlur, i.onClose),
          onClick: Se(e.onClick, i.onClose),
        }),
      })
    );
  });
z0.displayName = Ul;
var sf = "TooltipPortal",
  [CD, AD] = _o(sf, { forceMount: void 0 }),
  W0 = (e) => {
    const { __scopeTooltip: t, forceMount: r, children: n, container: i } = e,
      s = mi(sf, t);
    return m.jsx(CD, {
      scope: t,
      forceMount: r,
      children: m.jsx(Rn, {
        present: r || s.open,
        children: m.jsx(co, { asChild: !0, container: i, children: n }),
      }),
    });
  };
W0.displayName = sf;
var vn = "TooltipContent",
  K0 = v.forwardRef((e, t) => {
    const r = AD(vn, e.__scopeTooltip),
      { forceMount: n = r.forceMount, side: i = "top", ...s } = e,
      o = mi(vn, e.__scopeTooltip);
    return m.jsx(Rn, {
      present: n || o.open,
      children: o.disableHoverableContent
        ? m.jsx(Y0, { side: i, ...s, ref: t })
        : m.jsx(OD, { side: i, ...s, ref: t }),
    });
  }),
  OD = v.forwardRef((e, t) => {
    const r = mi(vn, e.__scopeTooltip),
      n = nf(vn, e.__scopeTooltip),
      i = v.useRef(null),
      s = st(t, i),
      [o, a] = v.useState(null),
      { trigger: c, onClose: u } = r,
      l = i.current,
      { onPointerInTransitChange: d } = n,
      f = v.useCallback(() => {
        a(null), d(!1);
      }, [d]),
      h = v.useCallback(
        (_, p) => {
          const g = _.currentTarget,
            y = { x: _.clientX, y: _.clientY },
            E = ID(y, g.getBoundingClientRect()),
            A = TD(y, E),
            b = PD(p.getBoundingClientRect()),
            S = ND([...A, ...b]);
          a(S), d(!0);
        },
        [d],
      );
    return (
      v.useEffect(() => () => f(), [f]),
      v.useEffect(() => {
        if (c && l) {
          const _ = (g) => h(g, l),
            p = (g) => h(g, c);
          return (
            c.addEventListener("pointerleave", _),
            l.addEventListener("pointerleave", p),
            () => {
              c.removeEventListener("pointerleave", _),
                l.removeEventListener("pointerleave", p);
            }
          );
        }
      }, [c, l, h, f]),
      v.useEffect(() => {
        if (o) {
          const _ = (p) => {
            const g = p.target,
              y = { x: p.clientX, y: p.clientY },
              E = c?.contains(g) || l?.contains(g),
              A = !kD(y, o);
            E ? f() : A && (f(), u());
          };
          return (
            document.addEventListener("pointermove", _),
            () => document.removeEventListener("pointermove", _)
          );
        }
      }, [c, l, o, u, f]),
      m.jsx(Y0, { ...e, ref: s })
    );
  }),
  [xD, RD] = _o(mo, { isInside: !1 }),
  Y0 = v.forwardRef((e, t) => {
    const {
        __scopeTooltip: r,
        children: n,
        "aria-label": i,
        onEscapeKeyDown: s,
        onPointerDownOutside: o,
        ...a
      } = e,
      c = mi(vn, r),
      u = vo(r),
      { onClose: l } = c;
    return (
      v.useEffect(
        () => (
          document.addEventListener(jl, l),
          () => document.removeEventListener(jl, l)
        ),
        [l],
      ),
      v.useEffect(() => {
        if (c.trigger) {
          const d = (f) => {
            f.target?.contains(c.trigger) && l();
          };
          return (
            window.addEventListener("scroll", d, { capture: !0 }),
            () => window.removeEventListener("scroll", d, { capture: !0 })
          );
        }
      }, [c.trigger, l]),
      m.jsx(ao, {
        asChild: !0,
        disableOutsidePointerEvents: !1,
        onEscapeKeyDown: s,
        onPointerDownOutside: o,
        onFocusOutside: (d) => d.preventDefault(),
        onDismiss: l,
        children: m.jsxs(bD, {
          "data-state": c.stateAttribute,
          ...u,
          ...a,
          ref: t,
          style: {
            ...a.style,
            "--radix-tooltip-content-transform-origin":
              "var(--radix-popper-transform-origin)",
            "--radix-tooltip-content-available-width":
              "var(--radix-popper-available-width)",
            "--radix-tooltip-content-available-height":
              "var(--radix-popper-available-height)",
            "--radix-tooltip-trigger-width": "var(--radix-popper-anchor-width)",
            "--radix-tooltip-trigger-height":
              "var(--radix-popper-anchor-height)",
          },
          children: [
            m.jsx(Cy, { children: n }),
            m.jsx(xD, {
              scope: r,
              isInside: !0,
              children: m.jsx(Gk, {
                id: c.contentId,
                role: "tooltip",
                children: i || n,
              }),
            }),
          ],
        }),
      })
    );
  });
K0.displayName = vn;
var J0 = "TooltipArrow",
  Z0 = v.forwardRef((e, t) => {
    const { __scopeTooltip: r, ...n } = e,
      i = vo(r);
    return RD(J0, r).isInside ? null : m.jsx(yD, { ...i, ...n, ref: t });
  });
Z0.displayName = J0;
function ID(e, t) {
  const r = Math.abs(t.top - e.y),
    n = Math.abs(t.bottom - e.y),
    i = Math.abs(t.right - e.x),
    s = Math.abs(t.left - e.x);
  switch (Math.min(r, n, i, s)) {
    case s:
      return "left";
    case i:
      return "right";
    case r:
      return "top";
    case n:
      return "bottom";
    default:
      throw new Error("unreachable");
  }
}
function TD(e, t, r = 5) {
  const n = [];
  switch (t) {
    case "top":
      n.push({ x: e.x - r, y: e.y + r }, { x: e.x + r, y: e.y + r });
      break;
    case "bottom":
      n.push({ x: e.x - r, y: e.y - r }, { x: e.x + r, y: e.y - r });
      break;
    case "left":
      n.push({ x: e.x + r, y: e.y - r }, { x: e.x + r, y: e.y + r });
      break;
    case "right":
      n.push({ x: e.x - r, y: e.y - r }, { x: e.x - r, y: e.y + r });
      break;
  }
  return n;
}
function PD(e) {
  const { top: t, right: r, bottom: n, left: i } = e;
  return [
    { x: i, y: t },
    { x: r, y: t },
    { x: r, y: n },
    { x: i, y: n },
  ];
}
function kD(e, t) {
  const { x: r, y: n } = e;
  let i = !1;
  for (let s = 0, o = t.length - 1; s < t.length; o = s++) {
    const a = t[s].x,
      c = t[s].y,
      u = t[o].x,
      l = t[o].y;
    c > n != l > n && r < ((u - a) * (n - c)) / (l - c) + a && (i = !i);
  }
  return i;
}
function ND(e) {
  const t = e.slice();
  return (
    t.sort((r, n) =>
      r.x < n.x ? -1 : r.x > n.x ? 1 : r.y < n.y ? -1 : r.y > n.y ? 1 : 0,
    ),
    LD(t)
  );
}
function LD(e) {
  if (e.length <= 1) return e.slice();
  const t = [];
  for (let n = 0; n < e.length; n++) {
    const i = e[n];
    for (; t.length >= 2; ) {
      const s = t[t.length - 1],
        o = t[t.length - 2];
      if ((s.x - o.x) * (i.y - o.y) >= (s.y - o.y) * (i.x - o.x)) t.pop();
      else break;
    }
    t.push(i);
  }
  t.pop();
  const r = [];
  for (let n = e.length - 1; n >= 0; n--) {
    const i = e[n];
    for (; r.length >= 2; ) {
      const s = r[r.length - 1],
        o = r[r.length - 2];
      if ((s.x - o.x) * (i.y - o.y) >= (s.y - o.y) * (i.x - o.x)) r.pop();
      else break;
    }
    r.push(i);
  }
  return (
    r.pop(),
    t.length === 1 && r.length === 1 && t[0].x === r[0].x && t[0].y === r[0].y
      ? t
      : t.concat(r)
  );
}
var DD = $0,
  A6 = H0,
  O6 = z0,
  x6 = W0,
  R6 = K0,
  I6 = Z0;
function Ve() {
  return navigator.userAgent;
}
function Q0() {
  return /iPad|iPhone|iPod/.test(Ve());
}
function of() {
  return /Android/.test(Ve());
}
function MD() {
  return Q0() && Ve().includes("CriOS");
}
function af() {
  return Q0() || of() || MD();
}
function T6() {
  return /^((?!chrome|android).)*safari/i.test(Ve());
}
function P6() {
  return of() && Ve().includes("Chrome");
}
function k6() {
  return Ve().includes("Mac OS X");
}
function N6() {
  return Ve().includes("Windows_NT");
}
function L6() {
  return Ve().includes("Chrome/") && !/Android|iPhone|iPad/i.test(Ve());
}
function D6() {
  return Ve().includes("Firefox");
}
function X0() {
  const e = Ve();
  return /iPad/.test(e) || (of() && !/Mobile/.test(e)) || /Tablet/.test(e);
}
function M6() {
  return af() && !X0();
}
function j6() {
  return !af() && !X0();
}
const jD = "new_page_view",
  UD = "sidebar_view",
  BD = /^ChatGPT.+Macintosh;.+ Chrome\/([\d.]+) .*$/;
function qD(e) {
  return e || (e = Ve()), BD.test(e);
}
const nv = { name: "ref", value: "mini" },
  iv = { name: "ref", value: "mini-sidebar" };
function U6(e) {
  return GD(e) || FD(e);
}
function FD(e) {
  return e.windowStyle === UD;
}
function GD(e) {
  return e.windowStyle === jD;
}
function sv({ name: e, value: t }, r) {
  return new URLSearchParams(r).get(e) === t;
}
function ov(e, t, r, { name: n, value: i }) {
  const s = new URLSearchParams(e);
  s.get(n) !== i &&
    (s.set(n, i), r({ pathname: t, search: s.toString() }, { replace: !0 }));
}
function VD() {
  const e = Or(),
    t = Gl(),
    r = v.useRef(sv(nv, e.search)),
    n = v.useRef(sv(iv, e.search));
  return (
    v.useEffect(() => {
      r.current && ov(e.search, e.pathname, t, nv),
        n.current && ov(e.search, e.pathname, t, iv);
    }, [e.pathname, e.search, t]),
    null
  );
}
function e1(e, t) {
  const r = v.useLayoutEffect;
  r(e, t);
}
var t1 = v.createContext(void 0),
  $D = (e) => {
    const { dir: t, children: r } = e;
    return m.jsx(t1.Provider, { value: t, children: r });
  };
function B6(e) {
  const t = v.useContext(t1);
  return e || t || "ltr";
}
const av = new Map(),
  Bl = new Map();
function HD(e) {
  const t = Bl.get(e);
  if (t == null) {
    const r = WO(e).catch(() => Wn);
    return Bl.set(e, r), r;
  }
  return t;
}
function zD(e) {
  if (e === zs) return Wn;
  const t = av.get(e);
  if (t != null) return t;
  const r = HD(e),
    n = v.use(r);
  return n === Wn ? Wn : (av.set(e, n), Bl.delete(e), n);
}
function WD({ children: e, locale: t }) {
  const r = zD(t);
  return m.jsx(A1, {
    defaultLocale: zs,
    locale: t,
    messages: r,
    children: m.jsx($D, { dir: Um.has(t) ? "rtl" : "ltr", children: e }),
  });
}
const KD = ({ children: e }) => {
    const t = QS().locale;
    return (
      e1(() => {
        Um.has(t), (document.documentElement.dir = "ltr");
      }, [t]),
      v.useEffect(() => {
        const r = navigator.language ?? "",
          n = zO(r);
        le.logEvent("Locale Loaded", {
          loaded_locale: t,
          raw_browser_locale: navigator.language,
          suggested_locale: n,
        }),
          X.logEvent("chatgpt_locale_loaded", t, {
            loaded_locale: t,
            raw_browser_locale: navigator.language,
            suggested_locale: n ?? "",
          });
      }, [t]),
      m.jsx(WD, { locale: t, children: e })
    );
  },
  r1 = () => iT(() => YD()),
  YD = ry("livekit");
function D(e, t, r) {
  const n = r1();
  return (i) => {
    const s = { ...i, message: t, protocol: n };
    x.addAction(e, s),
      r &&
        X.logEvent(
          r,
          null,
          Am(s, (o) => om(o)),
        );
  };
}
function jn(e) {
  const t = r1();
  return (r, n) => {
    r instanceof Ae ||
      x.addError(r, { ...n, status: "error", name: e, protocol: t });
  };
}
const cv = {
    audioPlayer: { error: jn("audio-player") },
    readAloud: { click: D("read-aloud", "click"), error: jn("read-aloud") },
    messagePlayback: { click: D("message-playback", "click") },
    toggleVideoButton: { click: D("toggle-video-button", "click") },
    toggleMuteButton: { click: D("toggle-mute-button", "click") },
    toggleScreenShareButton: { click: D("toggle-screenshare-button", "click") },
    composerSpeechButton: { hover: D("composer-speech-button", "hover") },
    voiceSessionEndedByUser: {
      click: D("voice-session-ended-by-user", "click"),
    },
    voiceSessionStarted: { click: D("voice-session-started", "click") },
    voiceSessionDuration: { duration: D("voice-session-duration", "duration") },
    voiceSessionListening: {
      stateChange: D("voice-session-listening", "stateChange"),
    },
    voiceSessionListeningIntently: {
      stateChange: D("voice-session-listening-intently", "stateChange"),
    },
    voiceSessionThinking: {
      stateChange: D("voice-session-thinking", "stateChange"),
    },
    voiceSessionSpeaking: {
      stateChange: D("voice-session-speaking", "stateChange"),
    },
    voiceSessionHalted: {
      stateChange: D("voice-session-halted", "stateChange"),
    },
    voiceSessionDisconnected: {
      stateChange: D("voice-session-disconnected", "stateChange"),
    },
    voiceMode: {
      connect: D("voice-mode", "connect"),
      error: D("voice-mode", "error"),
    },
    previews: { click: D("previews", "click"), error: jn("previews") },
    getToken: {
      request: D("get-token", "request"),
      success: D("get-token", "success"),
      failure: D("get-token", "failure"),
    },
    getVoiceStatus: {
      request: D("get-voice-status", "request"),
      success: D("get-voice-status", "success"),
      failure: D("get-voice-status", "failure"),
    },
    livekit: {
      connectCalled: D("livekit", "connectCalled"),
      success: D("livekit", "success"),
      failure: jn("livekit"),
    },
    bloop: { performance: D("bloop", "performance") },
    voiceSelectionShown: {
      click: D("voice-selection-shown", "click", "voice_selection_shown"),
    },
    voiceSelected: { click: D("voice-selected", "click") },
    voiceAdvancedDisclosureShown: {
      success: D("voice-advanced-disclosure-shown", "success"),
    },
    voiceAdvancedDisclosureAccepted: {
      click: D("voice-advanced-disclosure-accepted", "click"),
    },
    rateLimitReached: {
      success: D("rate-limit-reached", "success"),
      modalShown: D("rate-limit-reached", "modalShown"),
    },
    upsell: {
      upgradeToPlus: D("upsell", "upgradeToPlus"),
      upgradeToPro: D("upsell", "upgradeToPro"),
      upgradeToApp: D("upsell", "upgradeToApp"),
      appUpsellShown: D("upsell", "appUpsellShown"),
      appUpsellDismissed: D("upsell", "appUpsellDismissed"),
    },
    feedbackShown: { success: D("feedback-shown", "success") },
    feedbackThumbsUp: { success: D("feedback-thumbs-up", "success") },
    feedbackThumbsDown: { success: D("feedback-thumbs-down", "success") },
    feedbackDetails: {
      audio_issues: D("feedback-details", "audio_issues"),
      response_quality: D("feedback-details", "response_quality"),
      interruptions: D("feedback-details", "interruptions"),
      transcription_issues: D("feedback-details", "transcription_issues"),
      inaudible_issues: D("feedback-details", "inaudible_issues"),
      other: D("feedback-details", "other"),
      inputText: D("feedback-details", "inputText"),
    },
    connectionLatency: {
      success: D("connection-latency", "success"),
      failure: jn("connection-latency"),
    },
    firstListeningLatency: { success: D("first-listening-latency", "success") },
    permissions: { denied: D("permissions-denied") },
    voiceSessionFirstListening: {
      stateChange: D("voice-session-first-listening", "stateChange"),
    },
    voiceSessionFirstSpeaking: {
      stateChange: D("voice-session-first-speaking", "stateChange"),
    },
  },
  Ee = pt(
    NN(
      Hs(() => ({
        playerNode: null,
        playerApi: null,
        playerState: { sourceUrl: null, isPlaying: !1 },
      })),
    ),
  );
function q6() {
  return Ee((e) => e.playerApi);
}
function F6(e) {
  return Ee((t) => e(t.playerState));
}
function G6() {
  return Ee.getState().playerApi;
}
function V6() {
  return Ee.getState().playerState;
}
const JD = v.memo(function () {
  const t = v.useRef(null),
    r = Ee((n) => n.playerNode);
  return (
    v.useEffect(() => {
      const n = t.current;
      n &&
        !r &&
        ((n.onplay = () => {
          Ee.setState((i) => {
            i.playerState.isPlaying = !0;
          });
        }),
        (n.onpause = () => {
          Ee.setState((i) => {
            i.playerState.isPlaying = !1;
          });
        }),
        (n.ontimeupdate = () => {
          Ee.setState((i) => {
            i.playerState.currentTime = n.currentTime;
          });
        }),
        (n.ondurationchange = () => {
          Ee.setState((i) => {
            i.playerState.duration = n.duration;
          });
        }),
        (n.onerror = (i) => {
          typeof i == "string"
            ? cv.audioPlayer.error(new Error(i))
            : i.target &&
              "error" in i.target &&
              cv.audioPlayer.error(i.target.error);
        }),
        Ee.setState({ playerNode: n, playerApi: new ZD(n) }));
    }, [r]),
    m.jsx("audio", {
      className: "fixed start-0 bottom-0 hidden h-0 w-0",
      autoPlay: !0,
      crossOrigin: "anonymous",
      ref: t,
    })
  );
});
class ZD {
  constructor(t) {
    this.player = t;
  }
  get state() {
    return Ee.getState().playerState;
  }
  changeSource(t) {
    this.player.src && this.player.src !== t && this.stop(),
      (this.player.src = t),
      Ee.setState((r) => {
        r.playerState.sourceUrl = t;
      });
  }
  async play() {
    this.state.isPlaying || (await this.player.play());
  }
  pause() {
    this.state.isPlaying && this.player.pause();
  }
  stop() {
    this.pause(),
      this.player.removeAttribute("src"),
      Ee.setState((t) => {
        (t.playerState.sourceUrl = null),
          (t.playerState.currentTime = void 0),
          (t.playerState.duration = void 0);
      });
  }
}
function $6(e) {
  const t = Ee.getState().playerNode;
  if (!t) return !1;
  const r = t.canPlayType(e);
  return r === "probably" || r === "maybe";
}
const QD = ({ children: e }) => {
  const t = qD();
  return m.jsx(DD, {
    children: m.jsx(KD, {
      children: m.jsx(y3, {
        children: m.jsxs(tL, {
          children: [
            m.jsx(vx, { children: m.jsx(cL, { children: e }) }),
            m.jsx(JD, {}),
            m.jsx(oL, {}),
            null,
            null,
            t ? m.jsx(VD, {}) : null,
          ],
        }),
      }),
    }),
  });
};
function XD() {
  const [e, t] = _v(),
    r = xr(),
    n = lo(),
    i = e.get(Ao),
    s = e.get(Oo),
    o = oo();
  v.useEffect(() => {
    let a = !1;
    if (o && i === "true") {
      let u;
      o.isWorkspacePlan() ? (u = o.name ?? "Workspace") : (u = "Personal"),
        n.info(
          r.formatMessage(
            { id: "S4JoJY", defaultMessage: "Switched to {name}" },
            { name: u },
          ),
        ),
        (a = !0);
    }
    let c = !1;
    if (typeof s == "string" && e5(s)) {
      const u = n1[s];
      n.danger(r.formatMessage(u)), (c = !0);
    }
    (e.has(Ao) || e.has(Oo)) &&
      t((u) => (a && u.delete(Ao), c && u.delete(Oo), u), { replace: !0 });
  }, [i, o, s, r, e, t, n]);
}
function e5(e) {
  return e in n1;
}
const n1 = Rr({
  invalidToken: { id: "UAhT32", defaultMessage: "The token is invalid" },
  continueFromApiGeneric: {
    id: "FHUH8C",
    defaultMessage: "Unable to continue your conversation",
  },
});
class cf {
  subscribers;
  constructor(t) {
    this.subscribers = cf.createTypedEmitterAllEventSubscribers(t) || {};
  }
  publish(t, r) {
    const n = this.subscribers[t] || {};
    for (const i of Object.values(n)) i(r);
  }
  subscribe(t, r) {
    const n = It();
    this.subscribers[t] || (this.subscribers[t] = {});
    const i = this.subscribers[t];
    return (
      (i[n] = r),
      () => {
        delete i[n];
      }
    );
  }
  static createTypedEmitterAllEventSubscribers(t) {
    return t.reduce((r, n) => ((r[n] = {}), r), {});
  }
}
class t5 extends cf {
  constructor() {
    super(Object.values(Kl));
  }
  getVersion() {
    return 1;
  }
}
const r5 = new t5();
function n5() {
  const e = rt(),
    r = De(e).getContext().user,
    n = Ps(e),
    i = Y2();
  v.useEffect(() => {
    pe &&
      (n?.accessToken && n?.user?.id
        ? pe.publish(Gt.LOGIN_CHANGED, {
            userId: n.user.id,
            accountId: i?.id,
            authToken: n.accessToken,
            statsigUser: r,
            email: n.user.email,
          })
        : pe.publish(Gt.LOGOUT, { statsigUser: r }));
  }, [i?.id, n?.accessToken, n?.user, i, r]);
}
function H6(e) {
  const t = v.useContext(jd).windowStyle;
  v.useEffect(() => {
    if (pe)
      return r5.subscribe(Kl.WINDOW_VISIBILITY_STATE_CHANGED, (r) => {
        r.windowType === t && r.state === "hidden" && e();
      });
  }, [e, t]);
}
function z6() {
  return pe ? pe.takePhoto() : Promise.resolve(void 0);
}
function W6() {
  return pe ? pe.requestSystemPermission(kv.MICROPHONE) : Promise.resolve(!0);
}
function K6() {
  return pe ? pe.takeScreenshot() : Promise.resolve(void 0);
}
function i5({ children: e }) {
  return XD(), Iv && n5(), m.jsx(m.Fragment, { children: e });
}
const uf = Ir(() => bn(() => ({ modals: [], nextKey: 1 })));
function Y6(e, t, r) {
  uf(e).setState((n) => {
    const i = n.modals.find((s) => s.ModalComponent === t);
    return i
      ? {
          modals: [
            ...n.modals.filter((s) => s.ModalComponent !== t),
            { key: i.key, ModalComponent: t, props: r },
          ],
        }
      : {
          modals: [
            ...n.modals,
            { key: n.nextKey, ModalComponent: t, props: r },
          ],
          nextKey: n.nextKey + 1,
        };
  });
}
function s5(e, t) {
  uf(e).setState((r) => ({
    modals: r.modals.filter((n) => n.ModalComponent !== t),
  }));
}
const o5 = v.memo(function ({ modal: { ModalComponent: t, props: r } }) {
  const n = rt();
  return m.jsx(t, { ...r, closeModal: () => s5(n, t) });
});
function a5() {
  const e = rt(),
    t = uf(e),
    r = Ts(t, (n) => n.modals);
  return m.jsx(m.Fragment, {
    children: r.map((n) => m.jsx(o5, { modal: n }, n.key)),
  });
}
function c5() {
  return null;
}
function u5(e, t) {
  const r = async () => {
      try {
        const c = await e();
        return "default" in c ? c : { default: c };
      } catch (c) {
        return (
          x.addAction("Failed importing dynamic component", { error: c }),
          { default: t?.fallback ?? c5 }
        );
      }
    },
    n = v.lazy(r),
    i = t?.loading;
  function s(c) {
    const [u] = v.useState(() => a);
    return yy()
      ? u
        ? m.jsx(u, { ...c })
        : m.jsx(v.Suspense, {
            fallback: i == null ? null : m.jsx(i, { ...c }),
            children: m.jsx(n, { ...c }),
          })
      : i != null
        ? m.jsx(i, { ...c })
        : null;
  }
  let o, a;
  return (
    (s.prefetch = () => (
      o ||
        (o = r().then((c) => {
          a = c.default;
        })),
      o
    )),
    s
  );
}
const l5 = 60 * 60 * 24 * 30 * 3,
  d5 = u5(() =>
    k(
      () => import("./gnepbzer8xlcf1m0.js"),
      __vite__mapDeps([
        6, 1, 4, 5, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22,
        23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33, 34, 35, 36, 37, 38, 39, 40,
        41, 42, 43, 44,
      ]),
    ).then((e) => e.GlobalModalsComponent),
  );
xO();
function f5() {
  return E3(), null;
}
Iv &&
  k(() => import("./b1cmi8esy0ic5h61.js"), __vite__mapDeps([45, 4, 1, 5])).then(
    (e) => e.initDesktop(),
  );
Pr("https://chatgpt.com", "import.meta.env.VITE_APP_URL");
function h5({ children: e }) {
  const [t, r] = v.useState(!1),
    n = Or();
  v.useContext(jd),
    v.useEffect(() => {
      window._oaiHandleSessionExpired = function (s, o) {
        window.location.href.includes("/auth/login") ||
          (r(!0),
          le.logEvent("Account: Force Login Modal Shown", {
            content: `${s}: ${o}`,
          }));
      };
    }, []);
  function i(s) {
    try {
      const o = s.match(/^\/share\/(.+)$/);
      let a = $.getCookie(q.SharedConversationId);
      if (
        (!a &&
          o &&
          ((a = o[1]), $.setCookie(q.SharedConversationId, a, { maxAge: l5 })),
        typeof a == "string" && a && X.getUser()?.customIDs)
      ) {
        const c = X.getUser();
        c?.customIDs && (c.customIDs.shared_conversation_id = a);
      }
    } catch (o) {
      o instanceof Error
        ? zu.error("Error in shared conversation cookie code:", {
            message: o.message,
            stack: o.stack,
          })
        : zu.error("Unknown error in shared conversation cookie code:", {
            error: o,
          });
    }
  }
  return (
    v.useEffect(() => {
      i(n.pathname),
        le.logPageView(),
        X.logEvent("chatgpt_page_view", null, Yu());
    }, [n.pathname, n.search, n.hash]),
    m.jsx(m.Fragment, {
      children: m.jsx(Yv, {
        name: "ui_boundary_error",
        fallback: ({ resetError: s, componentStack: o, error: a }) =>
          m.jsx($u, { resetError: s, componentStack: o, error: a }),
        children: m.jsx(QD, {
          children: m.jsxs(i5, {
            children: [
              e,
              m.jsx(f5, {}),
              m.jsx(p5, {
                isOpen: t,
                onLogInClick: () => {
                  r(!1);
                },
              }),
              m.jsx(d5, {}),
              m.jsx(a5, {}),
              !1,
            ],
          }),
        }),
      }),
    })
  );
}
const p5 = ({ isOpen: e, onLogInClick: t }) => {
    const r = xr();
    return m.jsx(Qk, {
      testId: "modal-expired-session",
      isOpen: e,
      icon: wl,
      title: r.formatMessage(Uu.forceLogInModalTitle),
      description: r.formatMessage(Uu.forceLogInModalDescription),
      type: "warning",
      onClose: A3,
      primaryButton: m.jsx(Zr.Button, {
        onClick: async () => {
          const n = await O1.signOut({
            redirect: !1,
            callbackUrl: `/auth/login?next=${encodeURIComponent(location.pathname + location.search + location.hash)}`,
          });
          (location.href = n.url), t();
        },
        title: r.formatMessage(Uu.forceLogInModalButton),
      }),
    });
  },
  Uu = Rr({
    forceLogInModalTitle: {
      id: "App.forceLogInModalTitle",
      defaultMessage: "Your session has expired",
    },
    forceLogInModalDescription: {
      id: "App.forceLogInModalDescription",
      defaultMessage: "Please log in again to continue using the app.",
    },
    forceLogInModalButton: {
      id: "App.forceLogInModalButton",
      defaultMessage: "Log in",
    },
  });
function g5(e, t) {
  try {
    return e();
  } catch (r) {
    return t(r);
  }
}
function i1(e) {
  return e instanceof Element
    ? e
    : e.parentElement
      ? i1(e.parentElement)
      : null;
}
function Xi(e) {
  const t = i1(e);
  if (t) {
    const r = R1(t, void 0);
    if (r) return r;
  }
  return e.nodeName;
}
const _5 = (e) =>
    e.type === "childList"
      ? e.addedNodes.length > 0
        ? `added ${Xi(e.addedNodes[e.addedNodes.length - 1])}`
        : e.removedNodes.length > 0
          ? `removed ${e.removedNodes[e.removedNodes.length - 1].nodeName} from ${Xi(e.target)}`
          : `unknown ${e.type}`
      : e.type === "characterData"
        ? `characterData in ${Xi(e.target)}`
        : `unknown ${e.type}`,
  v5 =
    "checkVisibility" in Element.prototype
      ? (e) =>
          e.checkVisibility({
            opacityProperty: !0,
            visibilityProperty: !0,
            contentVisibilityAuto: !0,
          })
      : (e) =>
          !e.hasAttribute("aria-hidden") && !e.classList.contains("hidden");
function m5(e) {
  return document.head.contains(e) ? !1 : e instanceof Element ? v5(e) : !0;
}
function lf(e) {
  const t = [],
    r = e((n) => t.push(n));
  return () => (r(), t);
}
class b5 {
  timeouts = new Set();
  add(t, r) {
    const n = setTimeout(() => {
      this.timeouts.delete(n), t();
    }, r);
    this.timeouts.add(n);
  }
  clear() {
    for (const t of this.timeouts) clearTimeout(t);
    this.timeouts.clear();
  }
}
function Bu(e, t) {
  try {
    if (e.type && !PerformanceObserver.supportedEntryTypes.includes(e.type))
      return () => {};
    const r = new PerformanceObserver((n) => {
      for (const i of n.getEntries()) t(i);
    });
    return r.observe(e), () => r.disconnect();
  } catch {
    return () => {};
  }
}
function y5({ idleTimeout: e = 5e3, minIdleGap: t = 100, filter: r } = {}) {
  return new Promise((n, i) => {
    let s = null;
    const o = () => {
      s != null && clearTimeout(s), (s = setTimeout(c, e));
    };
    o();
    const a = lf((u) => {
      function l(f) {
        (!r || r(f)) &&
          (u({ start: f.startTime, end: f.startTime + f.duration }), o());
      }
      const d = [
        Bu({ type: "resource", buffered: !0 }, l),
        Bu({ type: "longtask", buffered: !0, durationThreshold: 0 }, l),
        Bu({ type: "navigation", buffered: !0 }, l),
      ];
      return () => {
        for (const f of d) f();
      };
    });
    function c() {
      try {
        const u = a();
        n(S5(u, t));
      } catch (u) {
        i(u);
      }
    }
  });
}
function S5(e, t) {
  const r = [];
  for (const { start: i, end: s } of e)
    r.push({ t: i, delta: 1 }), r.push({ t: s, delta: -1 });
  r.sort((i, s) => (i.t === s.t ? i.delta - s.delta : i.t - s.t));
  let n = 0;
  for (let i = 0; i < r.length; i++)
    if (((n += r[i].delta), n === 0)) {
      const s = r[i].t,
        o = r[i + 1];
      if (!o || o.t - s >= t) return s;
    }
  throw new Error("no idle gap found");
}
function E5(e) {
  return `${e.type} ${e.target instanceof Node ? Xi(e.target) : `(unknown target ${e.target})`}`;
}
function w5(e) {
  return lf((t) => {
    const r = new b5();
    function n(i) {
      const s = performance.now();
      r.add(() => {
        t({ start: s, end: performance.now(), label: E5(i) });
      });
    }
    for (const i of e) window.addEventListener(i, n, { capture: !0 });
    return () => {
      for (const i of e) window.removeEventListener(i, n, { capture: !0 });
      r.clear();
    };
  });
}
function C5(e) {
  return lf((t) => {
    const r = new MutationObserver((n) => {
      const i = Il(n, e);
      i &&
        t({
          time: performance.now(),
          label: g5(
            () => _5(i),
            (s) => `error describing mutation: ${s}`,
          ),
        });
    });
    return (
      r.observe(document, {
        childList: !0,
        subtree: !0,
        characterData: !0,
        attributes: !1,
      }),
      () => r.disconnect()
    );
  });
}
const A5 = [
  "pointerdown",
  "touchend",
  "input",
  "keydown",
  "mouseleave",
  "mouseenter",
  "drop",
  "beforeinput",
  "pointerenter",
  "dragend",
  "pointercancel",
  "compositionupdate",
  "mousedown",
  "dragleave",
  "dragover",
  "mouseup",
  "pointerover",
  "lostpointercapture",
  "mouseover",
  "gotpointercapture",
  "dblclick",
  "keyup",
  "keypress",
  "pointerup",
  "compositionstart",
  "auxclick",
  "dragstart",
  "touchstart",
  "compositionend",
  "pointerout",
  "dragenter",
  "touchcancel",
  "click",
  "contextmenu",
  "mouseout",
  "pointerleave",
];
function O5(e) {
  return e instanceof Element && e.hasAttribute("data-ignore-for-page-load");
}
function x5(e) {
  return m5(e) && !O5(e);
}
function R5(e) {
  for (const t of e) if (x5(t)) return !0;
  return !1;
}
async function I5() {
  if (typeof PerformanceObserver != "function")
    return { label: "no performance observer" };
  const e = A5.filter((u) => !/(enter|leave|over|out)$/.test(u)),
    t = w5(e),
    r = C5(
      (u) =>
        (u.type === "childList" && R5(u.addedNodes)) ||
        u.type === "characterData",
    ),
    n = await y5({
      filter: (u) =>
        u.duration !== 0 && !(u.entryType === "resource" && x1(Pv, u.name)),
    }),
    i = t(),
    s = r(),
    o = i.find((u) => s.some((l) => u.start < l.time && l.time <= u.end));
  if (o != null && o.start < n)
    return {
      label: "mutating input before page loaded",
      firstMutatingInput: o,
      pageIdle: n,
    };
  const a = s.filter((u) => u.time < n + 200),
    c = a.at(-1);
  return c
    ? {
        ...c,
        mutationsBeforeIdle: a.length,
        mutationsBeforeIdleList: a,
        pageIdle: n,
        firstMutatingInput: o,
      }
    : {
        label: "no mutations before page idle",
        pageIdle: n,
        firstMutatingInput: o,
      };
}
async function T5() {
  const e = await k(() => import("./lq790ciry1z0b5jk.js"), []);
  if (!e) return;
  const { onCLS: t, onFCP: r, onLCP: n } = e,
    i = new Promise((h) => t(h)),
    s = new Promise((h) => r(h)),
    o = new Promise((h) => n(h)),
    a = He(nt()),
    c = {
      country: a.userCountry ?? "unknown",
      continent: a.userContinent ?? "unknown",
      device: af() ? "mobile" : "desktop",
      track: "stable",
      cluster: a.cluster,
    },
    u = (h) => (_) => ur.hist(Mt.DEFAULT, `web.vitals.${h}`, c, _.value);
  i.then(u("cls")), s.then(u("fcp")), o.then(u("lcp"));
  const [l, d, f] = await Promise.all([i, s, o]);
  X.logEvent("chatgpt_web_vitals", f.value, {
    cls: String(l.value),
    fcp: String(d.value),
    lcp: String(f.value),
  });
}
const P5 = v.createContext({ cspNonce: "" }),
  k5 = 30;
function N5() {
  const e = $t.getItem(Vt.LastPageLoadDate),
    t = new Date(),
    r = typeof e == "string" ? new Date(e) : null,
    n = Math.min(
      r != null
        ? Math.floor((t.getTime() - r.getTime()) / (1e3 * 60 * 60))
        : 1 / 0,
      k5 * 24,
    ),
    i = Math.floor(n / 24);
  $t.setItem(Vt.LastPageLoadDate, t.toISOString()),
    x.addAction("time_since_last_page_load", {
      hoursSinceLastPageLoad: n,
      daysSinceLastPageLoad: i,
    });
}
const uv = "rq:";
function L5(e) {
  return (
    e != null &&
    typeof e == "object" &&
    "then" in e &&
    typeof e.then == "function"
  );
}
function D5(e) {
  const t = [],
    r = [];
  for (const n of e)
    if (n.data) {
      for (const [i, s] of Object.entries(n.data))
        if (i.startsWith(uv)) {
          const o = i.substring(uv.length);
          L5(s)
            ? r.push({
                queryHash: o,
                queryKey: JSON.parse(o),
                state: { fetchStatus: "fetching", status: "pending" },
                promise: s,
              })
            : t.push({
                queryHash: o,
                queryKey: JSON.parse(o),
                state: { ...s, data: s.data },
              });
        }
    }
  return { staticQueries: t, promiseQueries: r };
}
function M5() {
  const e = hv();
  return v.useMemo(() => D5(e), [e]);
}
const qu = [];
function j5(e, t) {
  for (const r of t)
    if (e.getQueryState(r.queryKey) == null) {
      let n;
      const i = new Promise((s) => {
        n = s;
      });
      qu.push(n),
        vv(e, {
          queries: t.map((s) => ({
            ...s,
            promise: i
              .then(() =>
                Pr(s.promise, "missing react-query hydration promise"),
              )
              .catch((o) => {
                throw (
                  (bl.yield().then(() => {
                    e.refetchQueries({ queryKey: s.queryKey, exact: !0 });
                  }),
                  x.addAction("react-query.prefetch-hydration.error", {
                    queryKey: JSON.stringify(s.queryKey),
                    error: o,
                  }),
                  o)
                );
              }),
          })),
        });
    }
  e1(() => {
    for (const r of qu) r();
    qu.length = 0;
  }, [t]);
}
uP();
const J6 = () => !1,
  Z6 = () => [{ title: "ChatGPT" }, ...uw],
  Q6 = () => [{ rel: "canonical", href: "https://chatgpt.com" }];
function s1({
  children: e,
  isSearchPage: t,
  isElectron: r,
  isIos: n,
  hasCachedViewTransitions: i,
  isAndroidChrome: s,
  windowStyle: o,
  ddTraceMetadata: a,
  cspScriptNonce: c,
  lang: u,
  isErrorBoundary: l = !1,
}) {
  return m.jsxs("html", {
    lang: u,
    "data-build": Zl,
    dir: "ltr",
    className: te({ "snc-root": t, "sdtrn-root": r === !0 || !1 }),
    suppressHydrationWarning: !0,
    children: [
      m.jsxs("head", {
        children: [
          m.jsx("meta", { charSet: "UTF-8" }),
          m.jsx("meta", {
            name: "viewport",
            content: `width=device-width, initial-scale=1${n ? ", maximum-scale=1" : ""}`,
          }),
          m.jsx(N1, {}),
          s ? m.jsx(lw, {}) : null,
          !l && m.jsx(dw, {}),
          a
            ? m.jsxs(m.Fragment, {
                children: [
                  m.jsx("meta", { name: "dd-trace-id", content: a.traceId }),
                  m.jsx("meta", {
                    name: "dd-trace-time",
                    content: `${a.traceTime}`,
                  }),
                ],
              })
            : null,
          m.jsx(fw, {}),
          m.jsx(L1, {}),
          m.jsx("script", {
            nonce: c,
            suppressHydrationWarning: !0,
            children:
              '!function initScrollTimelineInline(){try{if(CSS.supports("animation-timeline: --works"))return;var t=new Map;document.addEventListener("animationstart",(n=>{if(!(n.target instanceof HTMLElement))return;const e=n.target.getAnimations().filter((t=>t.animationName===n.animationName));t.set(n.target,e)})),document.addEventListener("scrolltimelineload",(n=>{t.forEach(((t,e)=>{t.forEach((t=>{n.detail.upgradeAnimation(t,e)}))})),t.clear()}),{once:!0})}catch{}}();',
          }),
          !1,
        ],
      }),
      m.jsxs("body", {
        className: te({ snc: t }),
        children: [
          m.jsx(jd.Provider, {
            value: {
              cspScriptNonce: c,
              isElectron: !!r,
              windowStyle: o,
              isIos: n,
              isAndroidChrome: s,
            },
            children: e,
          }),
          m.jsx(D1, { nonce: c }),
        ],
      }),
    ],
  });
}
const X6 = j1(function () {
  "use forget";
  const t = Cs.c(5),
    r = lv(),
    { cspNonce: n } = v.useContext(P5);
  let i;
  t[0] !== r
    ? ((i = I1(r)
        ? r.status === 404
          ? m.jsx(YA, {})
          : m.jsx($u, {
              error: new Error(
                `Route Error (${r.status} ${r.statusText}): ${r.message}`,
              ),
              resetError: B5,
            })
        : m.jsx($u, { error: r, resetError: U5 })),
      (t[0] = r),
      (t[1] = i))
    : (i = t[1]);
  let s;
  return (
    t[2] !== n || t[3] !== i
      ? ((s = m.jsx(s1, {
          cspScriptNonce: n,
          isErrorBoundary: !0,
          children: i,
        })),
        (t[2] = n),
        (t[3] = i),
        (t[4] = s))
      : (s = t[4]),
    s
  );
});
function U5() {
  return location.reload();
}
function B5() {
  return location.reload();
}
const e9 = M1(function (t) {
  "use forget";
  const r = Cs.c(40),
    {
      clientBootstrap: n,
      isIos: i,
      isAndroidChrome: s,
      isElectron: o,
      windowStyle: a,
      cspScriptNonce: c,
      dd: u,
    } = ql();
  {
    ye.setGlobalContextProperty("cluster", n.cluster);
    for (const [se, at] of Object.entries(n.session?.rumViewTags ?? {}))
      ye.setViewContextProperty(se, at);
  }
  let l;
  r[0] !== n
    ? ((l = () => {
        const se = nt() ?? Lv();
        return eE(se, n), se;
      }),
      (r[0] = n),
      (r[1] = l))
    : (l = r[1]);
  const d = l;
  let f;
  r[2] !== d ? ((f = () => d()), (r[2] = d), (r[3] = f)) : (f = r[3]);
  const [h, _] = v.useState(f);
  h ||
    (x.addError(new Error("Context not generated during intialization.")),
    _(d()));
  let p;
  r[4] !== h ? ((p = eb(h)), (r[4] = h), (r[5] = p)) : (p = r[5]);
  const g = p;
  let y, E;
  r[6] !== h
    ? ((y = () => {
        N5(), T5(), Wu(h, "2100154141") && I5().then(q5);
      }),
      (E = [h]),
      (r[6] = h),
      (r[7] = y),
      (r[8] = E))
    : ((y = r[7]), (E = r[8])),
    v.useEffect(y, E);
  const { staticQueries: A, promiseQueries: b } = M5();
  let S, w;
  r[9] !== A ? ((w = [...A]), (r[9] = A), (r[10] = w)) : (w = r[10]);
  let C;
  r[11] === Symbol.for("react.memo_cache_sentinel")
    ? ((C = []), (r[11] = C))
    : (C = r[11]);
  let O;
  r[12] !== w
    ? ((O = { queries: w, mutations: C }), (r[12] = w), (r[13] = O))
    : (O = r[13]),
    (S = O);
  const T = S;
  F5(g, b);
  let I;
  r[14] !== n || r[15] !== h || r[16] !== T || r[17] !== g
    ? ((I = () => (vv(g, T), wx(h, g), oP(h, n, g), !0)),
      (r[14] = n),
      (r[15] = h),
      (r[16] = T),
      (r[17] = g),
      (r[18] = I))
    : (I = r[18]),
    v.useState(I);
  const { pathname: N } = Or();
  let j;
  r[19] !== N
    ? ((j = N.startsWith("/search")), (r[19] = N), (r[20] = j))
    : (j = r[20]);
  const B = j;
  let F;
  r[21] === Symbol.for("react.memo_cache_sentinel")
    ? ((F = m.jsx(h5, { children: m.jsx(T1, {}) })), (r[21] = F))
    : (F = r[21]);
  let H;
  r[22] !== T
    ? ((H = m.jsx(P1, { state: T, children: F })), (r[22] = T), (r[23] = H))
    : (H = r[23]);
  let G;
  r[24] !== g || r[25] !== H
    ? ((G = m.jsx(bw, {
        attribute: "class",
        children: m.jsx(k1, { client: g, children: H }),
      })),
      (r[24] = g),
      (r[25] = H),
      (r[26] = G))
    : (G = r[26]);
  let K;
  r[27] !== n.locale ||
  r[28] !== c ||
  r[29] !== u ||
  r[30] !== s ||
  r[31] !== o ||
  r[32] !== i ||
  r[33] !== B ||
  r[34] !== G ||
  r[35] !== a
    ? ((K = m.jsx(s1, {
        lang: n.locale,
        isIos: i,
        isAndroidChrome: s,
        isElectron: o,
        isSearchPage: B,
        cspScriptNonce: c,
        ddTraceMetadata: u,
        windowStyle: a,
        children: G,
      })),
      (r[27] = n.locale),
      (r[28] = c),
      (r[29] = u),
      (r[30] = s),
      (r[31] = o),
      (r[32] = i),
      (r[33] = B),
      (r[34] = G),
      (r[35] = a),
      (r[36] = K))
    : (K = r[36]);
  let Y;
  return (
    r[37] !== h || r[38] !== K
      ? ((Y = m.jsx(YS, { sessionContext: h, children: K })),
        (r[37] = h),
        (r[38] = K),
        (r[39] = Y))
      : (Y = r[39]),
    Y
  );
});
function q5(e) {
  if (
    ("pageIdle" in e &&
      x.addFirstTiming(
        "pageLoad.pageIdle",
        performance.timeOrigin + e.pageIdle,
      ),
    "time" in e && e.time != null
      ? (x.addFirstTiming(
          "pageLoad.lastMutation",
          performance.timeOrigin + e.time,
        ),
        x.addAction("pageLoad.lastMutation", e))
      : x.addAction("pageLoad.withoutTiming", e),
    "mutationsBeforeIdleList" in e)
  )
    for (const t of e.mutationsBeforeIdleList)
      x.addAction("pageLoad.mutation", t);
}
const F5 = j5;
export {
  FP as $,
  I6 as A,
  As as B,
  R6 as C,
  M6 as D,
  yy as E,
  xv as F,
  cD as G,
  st as H,
  B6 as I,
  wy as J,
  Kt as K,
  xe as L,
  lM as M,
  Se as N,
  Ki as O,
  x6 as P,
  Ey as Q,
  A6 as R,
  Ud as S,
  O6 as T,
  Rn as U,
  lD as V,
  Vu as W,
  u5 as X,
  L0 as Y,
  Ak as Z,
  k as _,
  KE as a,
  ke as a$,
  My as a0,
  Ry as a1,
  ao as a2,
  bD as a3,
  vD as a4,
  mD as a5,
  co as a6,
  EP as a7,
  Sy as a8,
  yD as a9,
  TA as aA,
  OA as aB,
  pt as aC,
  d6 as aD,
  Vt as aE,
  Ir as aF,
  ry as aG,
  $t as aH,
  Yl as aI,
  Tm as aJ,
  $w as aK,
  Zn as aL,
  Bn as aM,
  Jw as aN,
  X as aO,
  nm as aP,
  nt as aQ,
  Ae as aR,
  _t as aS,
  im as aT,
  vd as aU,
  Ts as aV,
  bn as aW,
  y0 as aX,
  WN as aY,
  Wt as aZ,
  Md as a_,
  W as aa,
  hO as ab,
  oM as ac,
  rM as ad,
  gE as ae,
  S0 as af,
  V as ag,
  jd as ah,
  _w as ai,
  le as aj,
  Vk as ak,
  wl as al,
  Zw as am,
  Ps as an,
  Y2 as ao,
  wT as ap,
  qw as aq,
  TN as ar,
  xm as as,
  x as at,
  LA as au,
  CA as av,
  Ns as aw,
  _m as ax,
  Pt as ay,
  fm as az,
  Q as b,
  Ws as b$,
  dy as b0,
  oo as b1,
  ue as b2,
  QS as b3,
  bM as b4,
  ad as b5,
  vt as b6,
  aL as b7,
  Hs as b8,
  b0 as b9,
  vm as bA,
  YN as bB,
  mN as bC,
  pN as bD,
  od as bE,
  Us as bF,
  am as bG,
  ld as bH,
  qs as bI,
  td as bJ,
  id as bK,
  pn as bL,
  Gm as bM,
  ae as bN,
  h0 as bO,
  tO as bP,
  c6 as bQ,
  oe as bR,
  Vi as bS,
  p4 as bT,
  hN as bU,
  YM as bV,
  iO as bW,
  oO as bX,
  zw as bY,
  sO as bZ,
  U2 as b_,
  v0 as ba,
  rm as bb,
  Ww as bc,
  xx as bd,
  fM as be,
  x4 as bf,
  dM as bg,
  eb as bh,
  S4 as bi,
  kA as bj,
  PA as bk,
  BA as bl,
  Tt as bm,
  gm as bn,
  MA as bo,
  zC as bp,
  wn as bq,
  DA as br,
  ym as bs,
  dA as bt,
  En as bu,
  tA as bv,
  rA as bw,
  lm as bx,
  sA as by,
  qA as bz,
  te as c,
  pM as c$,
  en as c0,
  fO as c1,
  l4 as c2,
  iC as c3,
  ur as c4,
  Mt as c5,
  $ as c6,
  q as c7,
  y_ as c8,
  tN as c9,
  z_ as cA,
  Q4 as cB,
  T3 as cC,
  P3 as cD,
  I3 as cE,
  k3 as cF,
  _i as cG,
  nx as cH,
  ix as cI,
  Fm as cJ,
  zE as cK,
  AS as cL,
  H5 as cM,
  md as cN,
  L2 as cO,
  G3 as cP,
  vN as cQ,
  FM as cR,
  qM as cS,
  by as cT,
  r0 as cU,
  DM as cV,
  f6 as cW,
  dO as cX,
  NM as cY,
  H4 as cZ,
  S3 as c_,
  DT as ca,
  e3 as cb,
  UT as cc,
  Bw as cd,
  ON as ce,
  x3 as cf,
  wu as cg,
  Zg as ch,
  r6 as ci,
  u0 as cj,
  HT as ck,
  Y4 as cl,
  J4 as cm,
  YE as cn,
  cM as co,
  x2 as cp,
  w2 as cq,
  $N as cr,
  rn as cs,
  l6 as ct,
  rO as cu,
  z as cv,
  W5 as cw,
  xS as cx,
  o0 as cy,
  kO as cz,
  ee as d,
  s0 as d$,
  z3 as d0,
  A3 as d1,
  Q3 as d2,
  uA as d3,
  KC as d4,
  w3 as d5,
  VC as d6,
  HC as d7,
  Kw as d8,
  t0 as d9,
  y4 as dA,
  PT as dB,
  b4 as dC,
  m4 as dD,
  I4 as dE,
  _d as dF,
  L6 as dG,
  Il as dH,
  Ai as dI,
  Os as dJ,
  qD as dK,
  Gw as dL,
  Vd as dM,
  Sr as dN,
  L3 as dO,
  iN as dP,
  O3 as dQ,
  Yv as dR,
  BM as dS,
  uO as dT,
  O4 as dU,
  u6 as dV,
  B3 as dW,
  b6 as dX,
  JN as dY,
  JM as dZ,
  FT as d_,
  Am as da,
  af as db,
  NN as dc,
  Sn as dd,
  je as de,
  _O as df,
  _6 as dg,
  T4 as dh,
  L4 as di,
  p6 as dj,
  zn as dk,
  q4 as dl,
  Lk as dm,
  Dk as dn,
  Mk as dp,
  F4 as dq,
  jk as dr,
  Cy as ds,
  Uk as dt,
  Bk as du,
  qk as dv,
  G4 as dw,
  vM as dx,
  sM as dy,
  Hg as dz,
  J2 as e,
  j4 as e$,
  n6 as e0,
  k4 as e1,
  pw as e2,
  He as e3,
  JS as e4,
  lO as e5,
  aN as e6,
  s6 as e7,
  o6 as e8,
  zO as e9,
  QT as eA,
  YD as eB,
  r1 as eC,
  D6 as eD,
  p3 as eE,
  zu as eF,
  of as eG,
  FD as eH,
  bd as eI,
  a4 as eJ,
  $i as eK,
  c4 as eL,
  yA as eM,
  Nw as eN,
  RM as eO,
  Iw as eP,
  N6 as eQ,
  aM as eR,
  M4 as eS,
  LO as eT,
  DO as eU,
  MO as eV,
  _M as eW,
  SM as eX,
  B_ as eY,
  f_ as eZ,
  U4 as e_,
  WD as ea,
  dd as eb,
  Ow as ec,
  uC as ed,
  cm as ee,
  JA as ef,
  J5 as eg,
  ME as eh,
  Sg as ei,
  o4 as ej,
  s4 as ek,
  Wc as el,
  MD as em,
  bl as en,
  M1 as eo,
  fo as ep,
  iM as eq,
  LM as er,
  z5 as es,
  y6 as et,
  S6 as eu,
  mm as ev,
  X4 as ew,
  ZA as ex,
  cv as ey,
  R2 as ez,
  w4 as f,
  f0 as f$,
  kM as f0,
  bN as f1,
  BO as f2,
  Mm as f3,
  oC as f4,
  tM as f5,
  f4 as f6,
  eM as f7,
  pe as f8,
  e6 as f9,
  m6 as fA,
  yM as fB,
  om as fC,
  Cr as fD,
  Fi as fE,
  J6 as fF,
  Z6 as fG,
  Q6 as fH,
  X6 as fI,
  e9 as fJ,
  Wr as fK,
  k6 as fL,
  $5 as fM,
  uw as fN,
  R4 as fO,
  gN as fP,
  iy as fQ,
  IM as fR,
  TM as fS,
  PM as fT,
  Q0 as fU,
  E6 as fV,
  zs as fW,
  Wn as fX,
  M_ as fY,
  AM as fZ,
  lC as f_,
  t6 as fa,
  q3 as fb,
  nC as fc,
  rC as fd,
  tC as fe,
  D4 as ff,
  uM as fg,
  ly as fh,
  MM as fi,
  eO as fj,
  P4 as fk,
  d4 as fl,
  h4 as fm,
  K6 as fn,
  z6 as fo,
  gM as fp,
  zM as fq,
  wP as fr,
  ZL as fs,
  XL as ft,
  rD as fu,
  eD as fv,
  VL as fw,
  sC as fx,
  nL as fy,
  QN as fz,
  rt as g,
  nN as g$,
  XO as g0,
  YA as g1,
  Gt as g2,
  r5 as g3,
  Kl as g4,
  pO as g5,
  gO as g6,
  D_ as g7,
  v6 as g8,
  N4 as g9,
  v4 as gA,
  xw as gB,
  Ke as gC,
  dN as gD,
  S_ as gE,
  VM as gF,
  T6 as gG,
  XA as gH,
  Vw as gI,
  rN as gJ,
  l0 as gK,
  W6 as gL,
  nO as gM,
  W4 as gN,
  KM as gO,
  B4 as gP,
  a6 as gQ,
  g6 as gR,
  A4 as gS,
  wr as gT,
  M as gU,
  cO as gV,
  kl as gW,
  Ku as gX,
  wM as gY,
  xA as gZ,
  bA as g_,
  ml as ga,
  pr as gb,
  w6 as gc,
  $6 as gd,
  q6 as ge,
  F6 as gf,
  G6 as gg,
  V6 as gh,
  iA as gi,
  SA as gj,
  mM as gk,
  jT as gl,
  k2 as gm,
  Fw as gn,
  HE as go,
  n4 as gp,
  Sv as gq,
  r3 as gr,
  h_ as gs,
  UM as gt,
  U6 as gu,
  rL as gv,
  V4 as gw,
  _4 as gx,
  CT as gy,
  g4 as gz,
  yn as h,
  jb as h$,
  o3 as h0,
  h6 as h1,
  C4 as h2,
  K5 as h3,
  Ve as h4,
  Hd as h5,
  jM as h6,
  zd as h7,
  t4 as h8,
  i6 as h9,
  GM as hA,
  ZM as hB,
  $M as hC,
  CM as hD,
  kr as hE,
  K4 as hF,
  r4 as hG,
  e4 as hH,
  j3 as hI,
  OM as hJ,
  cC as hK,
  aC as hL,
  Hn as hM,
  Xw as hN,
  eC as hO,
  Y5 as hP,
  yN as hQ,
  QM as hR,
  XM as hS,
  z4 as hT,
  wA as hU,
  $C as hV,
  Z3 as hW,
  _A as hX,
  tT as hY,
  u4 as hZ,
  Kb as h_,
  E4 as ha,
  ZC as hb,
  Zi as hc,
  xl as hd,
  Hw as he,
  Z4 as hf,
  eT as hg,
  ZE as hh,
  Yw as hi,
  Li as hj,
  V5 as hk,
  Gk as hl,
  xM as hm,
  H6 as hn,
  EM as ho,
  Y3 as hp,
  Cl as hq,
  $4 as hr,
  Es as hs,
  JC as ht,
  Aw as hu,
  _T as hv,
  P6 as hw,
  NO as hx,
  HM as hy,
  WM as hz,
  $E as i,
  Ub as i0,
  Xe as i1,
  de as i2,
  fs as i3,
  to as i4,
  ro as i5,
  Qr as i6,
  L as i7,
  Js as i8,
  wd as i9,
  ve as ia,
  _e as ib,
  Oe as ic,
  De as j,
  Qk as k,
  Zr as l,
  lo as m,
  aO as n,
  Y6 as o,
  j2 as p,
  Qw as q,
  Zu as r,
  Wu as s,
  zv as t,
  e1 as u,
  nM as v,
  j6 as w,
  dP as x,
  Pr as y,
  X0 as z,
};
//# sourceMappingURL=hgyrt6j47bbfyjrt.js.map
