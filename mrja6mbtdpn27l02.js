import {
  op as W,
  oq as ie,
  hG as le,
  d5 as ce,
  jO as pe,
  fq as ue,
  A as de,
  hK as fe,
  e1 as me,
  ob as ge,
  or as he,
  V as ve,
  d9 as Ce,
  os as ke,
  ot as we,
  ou as xe,
  ov as V,
  ow as _e,
  ox as ye,
  oy as z,
  oz as Me,
  oA as Se,
  oB as Ee,
  oC as be,
  oD as Te,
  oE as Ie,
  cL as E,
  oF as Le,
  oG as Pe,
  oH as P,
  oI as q,
  oJ as Ne,
  oK as De,
  oL as Re,
  oc as Oe,
  am as je,
} from "./bek4a02po1hapmml.js";
import {
  dJ as Ue,
  dK as Ae,
  y as Fe,
  g as Y,
  h8 as He,
  b9 as Ke,
  bQ as Ge,
  af as Be,
  as as We,
  c0 as Ve,
  aj as x,
  k as ze,
  l as qe,
  B as Ye,
  at as Xe,
  dj as $e,
  ad as Je,
  c as Qe,
  o as Ze,
  c4 as et,
  c5 as tt,
  aL as nt,
  fb as st,
  ae as rt,
  d0 as X,
  h9 as at,
} from "./hgyrt6j47bbfyjrt.js";
import { r as C, j as g, f as ot, M as O, R as $ } from "./lip667d8t42poxum.js";
import {
  s as it,
  a as lt,
  t as ct,
  m as pt,
  p as ut,
  b as dt,
  k as ft,
  c as mt,
  d as gt,
  g as ht,
  P as vt,
  u as J,
} from "./gfnsbm99dy8f9dle.js";
import {
  P as Ct,
  a as Q,
  M as kt,
  k as N,
  d as j,
  S as wt,
  E as xt,
  e as _t,
  n as yt,
  i as Mt,
  g as St,
  h as Et,
  j as U,
  r as bt,
} from "./gkp5860wafdf24mv.js";
const Tt = 500;
class v {
  constructor(e, t) {
    (this.items = e), (this.eventCount = t);
  }
  popEvent(e, t) {
    if (this.eventCount == 0) return null;
    let a = this.items.length;
    for (; ; a--)
      if (this.items.get(a - 1).selection) {
        --a;
        break;
      }
    let s, r;
    t && ((s = this.remapping(a, this.items.length)), (r = s.maps.length));
    let o = e.tr,
      i,
      l,
      p = [],
      d = [];
    return (
      this.items.forEach(
        (c, u) => {
          if (!c.step) {
            s || ((s = this.remapping(a, u + 1)), (r = s.maps.length)),
              r--,
              d.push(c);
            return;
          }
          if (s) {
            d.push(new w(c.map));
            let f = c.step.map(s.slice(r)),
              m;
            f &&
              o.maybeStep(f).doc &&
              ((m = o.mapping.maps[o.mapping.maps.length - 1]),
              p.push(new w(m, void 0, void 0, p.length + d.length))),
              r--,
              m && s.appendMap(m, r);
          } else o.maybeStep(c.step);
          if (c.selection)
            return (
              (i = s ? c.selection.map(s.slice(r)) : c.selection),
              (l = new v(
                this.items.slice(0, a).append(d.reverse().concat(p)),
                this.eventCount - 1,
              )),
              !1
            );
        },
        this.items.length,
        0,
      ),
      { remaining: l, transform: o, selection: i }
    );
  }
  addTransform(e, t, a, s) {
    let r = [],
      o = this.eventCount,
      i = this.items,
      l = !s && i.length ? i.get(i.length - 1) : null;
    for (let d = 0; d < e.steps.length; d++) {
      let c = e.steps[d].invert(e.docs[d]),
        u = new w(e.mapping.maps[d], c, t),
        f;
      (f = l && l.merge(u)) &&
        ((u = f), d ? r.pop() : (i = i.slice(0, i.length - 1))),
        r.push(u),
        t && (o++, (t = void 0)),
        s || (l = u);
    }
    let p = o - a.depth;
    return p > Lt && ((i = It(i, p)), (o -= p)), new v(i.append(r), o);
  }
  remapping(e, t) {
    let a = new kt();
    return (
      this.items.forEach(
        (s, r) => {
          let o =
            s.mirrorOffset != null && r - s.mirrorOffset >= e
              ? a.maps.length - s.mirrorOffset
              : void 0;
          a.appendMap(s.map, o);
        },
        e,
        t,
      ),
      a
    );
  }
  addMaps(e) {
    return this.eventCount == 0
      ? this
      : new v(this.items.append(e.map((t) => new w(t))), this.eventCount);
  }
  rebased(e, t) {
    if (!this.eventCount) return this;
    let a = [],
      s = Math.max(0, this.items.length - t),
      r = e.mapping,
      o = e.steps.length,
      i = this.eventCount;
    this.items.forEach((u) => {
      u.selection && i--;
    }, s);
    let l = t;
    this.items.forEach((u) => {
      let f = r.getMirror(--l);
      if (f == null) return;
      o = Math.min(o, f);
      let m = r.maps[f];
      if (u.step) {
        let k = e.steps[f].invert(e.docs[f]),
          h = u.selection && u.selection.map(r.slice(l + 1, f));
        h && i++, a.push(new w(m, k, h));
      } else a.push(new w(m));
    }, s);
    let p = [];
    for (let u = t; u < o; u++) p.push(new w(r.maps[u]));
    let d = this.items.slice(0, s).append(p).append(a),
      c = new v(d, i);
    return (
      c.emptyItemCount() > Tt && (c = c.compress(this.items.length - a.length)),
      c
    );
  }
  emptyItemCount() {
    let e = 0;
    return (
      this.items.forEach((t) => {
        t.step || e++;
      }),
      e
    );
  }
  compress(e = this.items.length) {
    let t = this.remapping(0, e),
      a = t.maps.length,
      s = [],
      r = 0;
    return (
      this.items.forEach(
        (o, i) => {
          if (i >= e) s.push(o), o.selection && r++;
          else if (o.step) {
            let l = o.step.map(t.slice(a)),
              p = l && l.getMap();
            if ((a--, p && t.appendMap(p, a), l)) {
              let d = o.selection && o.selection.map(t.slice(a));
              d && r++;
              let c = new w(p.invert(), l, d),
                u,
                f = s.length - 1;
              (u = s.length && s[f].merge(c)) ? (s[f] = u) : s.push(c);
            }
          } else o.map && a--;
        },
        this.items.length,
        0,
      ),
      new v(W.from(s.reverse()), r)
    );
  }
}
v.empty = new v(W.empty, 0);
function It(n, e) {
  let t;
  return (
    n.forEach((a, s) => {
      if (a.selection && e-- == 0) return (t = s), !1;
    }),
    n.slice(t)
  );
}
class w {
  constructor(e, t, a, s) {
    (this.map = e),
      (this.step = t),
      (this.selection = a),
      (this.mirrorOffset = s);
  }
  merge(e) {
    if (this.step && e.step && !e.selection) {
      let t = e.step.merge(this.step);
      if (t) return new w(t.getMap().invert(), t, this.selection);
    }
  }
}
class M {
  constructor(e, t, a, s, r) {
    (this.done = e),
      (this.undone = t),
      (this.prevRanges = a),
      (this.prevTime = s),
      (this.prevComposition = r);
  }
}
const Lt = 20;
function Pt(n, e, t, a) {
  let s = t.getMeta(S),
    r;
  if (s) return s.historyState;
  t.getMeta(Rt) && (n = new M(n.done, n.undone, null, 0, -1));
  let o = t.getMeta("appendedTransaction");
  if (t.steps.length == 0) return n;
  if (o && o.getMeta(S))
    return o.getMeta(S).redo
      ? new M(
          n.done.addTransform(t, void 0, a, b(e)),
          n.undone,
          A(t.mapping.maps),
          n.prevTime,
          n.prevComposition,
        )
      : new M(
          n.done,
          n.undone.addTransform(t, void 0, a, b(e)),
          null,
          n.prevTime,
          n.prevComposition,
        );
  if (
    t.getMeta("addToHistory") !== !1 &&
    !(o && o.getMeta("addToHistory") === !1)
  ) {
    let i = t.getMeta("composition"),
      l =
        n.prevTime == 0 ||
        (!o &&
          n.prevComposition != i &&
          (n.prevTime < (t.time || 0) - a.newGroupDelay ||
            !Nt(t, n.prevRanges))),
      p = o ? I(n.prevRanges, t.mapping) : A(t.mapping.maps);
    return new M(
      n.done.addTransform(t, l ? e.selection.getBookmark() : void 0, a, b(e)),
      v.empty,
      p,
      t.time,
      i ?? n.prevComposition,
    );
  } else
    return (r = t.getMeta("rebased"))
      ? new M(
          n.done.rebased(t, r),
          n.undone.rebased(t, r),
          I(n.prevRanges, t.mapping),
          n.prevTime,
          n.prevComposition,
        )
      : new M(
          n.done.addMaps(t.mapping.maps),
          n.undone.addMaps(t.mapping.maps),
          I(n.prevRanges, t.mapping),
          n.prevTime,
          n.prevComposition,
        );
}
function Nt(n, e) {
  if (!e) return !1;
  if (!n.docChanged) return !0;
  let t = !1;
  return (
    n.mapping.maps[0].forEach((a, s) => {
      for (let r = 0; r < e.length; r += 2)
        a <= e[r + 1] && s >= e[r] && (t = !0);
    }),
    t
  );
}
function A(n) {
  let e = [];
  for (let t = n.length - 1; t >= 0 && e.length == 0; t--)
    n[t].forEach((a, s, r, o) => e.push(r, o));
  return e;
}
function I(n, e) {
  if (!n) return null;
  let t = [];
  for (let a = 0; a < n.length; a += 2) {
    let s = e.map(n[a], 1),
      r = e.map(n[a + 1], -1);
    s <= r && t.push(s, r);
  }
  return t;
}
function Dt(n, e, t) {
  let a = b(e),
    s = S.get(e).spec.config,
    r = (t ? n.undone : n.done).popEvent(e, a);
  if (!r) return null;
  let o = r.selection.resolve(r.transform.doc),
    i = (t ? n.done : n.undone).addTransform(
      r.transform,
      e.selection.getBookmark(),
      s,
      a,
    ),
    l = new M(t ? i : r.remaining, t ? r.remaining : i, null, 0, -1);
  return r.transform.setSelection(o).setMeta(S, { redo: t, historyState: l });
}
let L = !1,
  F = null;
function b(n) {
  let e = n.plugins;
  if (F != e) {
    (L = !1), (F = e);
    for (let t = 0; t < e.length; t++)
      if (e[t].spec.historyPreserveItems) {
        L = !0;
        break;
      }
  }
  return L;
}
const S = new Q("history"),
  Rt = new Q("closeHistory");
function Ot(n = {}) {
  return (
    (n = { depth: n.depth || 100, newGroupDelay: n.newGroupDelay || 500 }),
    new Ct({
      key: S,
      state: {
        init() {
          return new M(v.empty, v.empty, null, 0, -1);
        },
        apply(e, t, a) {
          return Pt(t, a, e, n);
        },
      },
      config: n,
      props: {
        handleDOMEvents: {
          beforeinput(e, t) {
            let a = t.inputType,
              s = a == "historyUndo" ? ee : a == "historyRedo" ? D : null;
            return s ? (t.preventDefault(), s(e.state, e.dispatch)) : !1;
          },
        },
      },
    })
  );
}
function Z(n, e) {
  return (t, a) => {
    let s = S.getState(t);
    if (!s || (n ? s.undone : s.done).eventCount == 0) return !1;
    if (a) {
      let r = Dt(s, t, n);
      r && a(e ? r.scrollIntoView() : r);
    }
    return !0;
  };
}
const ee = Z(!1, !0),
  D = Z(!0, !0);
function jt() {
  return N({
    "Shift-Enter": (n, e) => j(n, e),
    Enter: (n, e) =>
      window.innerWidth > ie[le.Medium] || Ue || Ae() ? !1 : j(n, e),
  });
}
const Ut = ["p", 0],
  At = ["br"],
  Ft = new wt({
    nodes: {
      paragraph: {
        content: "inline*",
        group: "block",
        parseDOM: [{ tag: "p", preserveWhitespace: "full" }],
        toDOM() {
          return Ut;
        },
      },
      text: { group: "inline" },
      hard_break: {
        inline: !0,
        group: "inline",
        selectable: !1,
        parseDOM: [{ tag: "br" }],
        toDOM() {
          return At;
        },
      },
      [lt]: it,
      doc: { content: "block+" },
    },
    marks: {},
  });
function Ht(n = null, e) {
  const t = new EventTarget(),
    a = ht(e),
    s = new xt(null, {
      state: _t.create({
        schema: Ft,
        plugins: [
          Ot(),
          pt(),
          ut(""),
          dt(),
          ...(a.enabled && a.trackingKeywords.length > 0
            ? [ft(a.trackingKeywords)]
            : []),
          jt(),
          N({ "Mod-z": ee, "Mod-y": D, "Mod-Shift-z": D }),
          mt(),
          N(Et),
          gt(t),
          St(),
        ],
      }),
      dispatchTransaction(r) {
        const o = s.state.apply(r);
        s.updateState(o), r.docChanged && t.dispatchEvent(new Event(ct));
      },
      handlePaste(r, o) {
        const i = o.clipboardData?.getData("text/plain");
        return i === void 0 ? !1 : (o.defaultPrevented || Mt(r, i), !0);
      },
      clipboardTextSerializer(r) {
        return yt(r.content).content;
      },
    });
  return (
    n != null &&
      s.state.doc.textContent.trim().length === 0 &&
      s.dispatch(s.state.tr.insertText(n)),
    s
  );
}
const R = C.createContext(null),
  Kt = ({
    children: n,
    clientThreadId: e,
    ignoreParentComposerController: t = !1,
  }) => {
    const a = C.useContext(R),
      s = Y(),
      r = C.useMemo(
        () =>
          a && !t ? a : new vt(Ht(e ? (He(Ke(e))?.content ?? null) : null, s)),
        [a, e],
      );
    return g.jsx(R.Provider, { value: r, children: n });
  },
  fn = () => Fe(C.useContext(R));
function te() {
  return {
    clientThreadId: "",
    isLoggedInUser: !1,
    focusedObject: null,
    currentModelId: "",
    isModelLoaded: !1,
    isEmbeddedInFocusedView: !1,
    isInstalledApp: !1,
    onNewThread: () => {
      throw new Error("onNewThread not implemented");
    },
    onRequestCompletion: () => {
      throw new Error("onRequestCompletion not implemented");
    },
    resetThread: () => {
      throw new Error("resetThread not implemented");
    },
  };
}
const ne = C.createContext(te());
function Gt() {
  try {
    return C.use(ne);
  } catch {
    return te();
  }
}
function mn({
  children: n,
  clientThreadId: e,
  setClientThreadId: t,
  routeType: a,
  prefetchSearchPromises: s,
}) {
  const { createNewThread: r, resetThread: o } = ce({
      clientThreadId: e,
      setClientThreadId: t,
    }),
    { data: i } = Ge(),
    l = pe(i),
    p = Be(e, (T) => T?.modelId),
    d = ue(),
    c = l.id,
    u = p ?? c,
    f = de(),
    m = fe(),
    { isUnauthenticated: k } = We(),
    h = !k,
    _ = J(e),
    y = C.useMemo(
      () => ({
        clientThreadId: e,
        currentModelId: u,
        isModelLoaded: !!p,
        isEmbeddedInFocusedView: d,
        isInstalledApp: f,
        isLoggedInUser: h,
        focusedObject: m,
        onNewThread: r,
        onRequestCompletion: _,
        resetThread: o,
        prefetchSearchPromises: s,
        routeType: a,
      }),
      [e, u, p, d, f, h, m, r, _, o, s, a],
    );
  return g.jsx(ne.Provider, {
    value: y,
    children: g.jsx(Kt, { clientThreadId: e, children: n }),
  });
}
function Bt({ closeModal: n, url: e, onAction: t, onActionAborted: a }) {
  const s = C.useRef(!1),
    r = ot(),
    { clientThreadId: o } = Gt(),
    l = {
      ...Ve({ clientThreadId: o }),
      url: e,
      link_type: "text",
      section: "safe-link-modal",
    };
  C.useEffect(() => {
    x.logEventWithStatsig(
      "Safe Link Warning Modal Shown",
      "chatgpt_safe_link_warning_modal_shown",
    );
  }, []);
  const p = async () => {
      s.current = !0;
      try {
        await navigator.clipboard.writeText(e),
          x.logEventWithStatsig(
            "Safe Link Warning Modal Copy Clicked",
            "chatgpt_safe_link_warning_modal_copy_clicked",
          ),
          x.logEventWithStatsig("link_action", "link_action", {
            ...l,
            action: "copy",
          });
      } catch (k) {
        Xe.addError(k);
      }
      t?.("copy"), n();
    },
    d = () => {
      (s.current = !0),
        x.logEventWithStatsig(
          "Safe Link Warning Modal Open Clicked",
          "chatgpt_safe_link_warning_modal_open_clicked",
        ),
        x.logEventWithStatsig("link_action", "link_action", {
          ...l,
          action: "click",
        }),
        t?.("open"),
        n();
    },
    c = () => {
      s.current ||
        (x.logEventWithStatsig(
          "Safe Link Warning Modal Canceled",
          "chatgpt_safe_link_warning_modal_canceled",
        ),
        a?.()),
        (s.current = !1),
        n();
    };
  let u = "",
    f = e,
    m = "";
  try {
    f = new URL(e).hostname;
    const h = e.indexOf(f);
    h !== -1 && ((u = e.substring(0, h)), (m = e.substring(h + f.length)));
  } catch {}
  return g.jsxs(ze, {
    testId: "modal-safe-link-warning",
    isOpen: !0,
    hideSeparator: !0,
    onClose: c,
    showCloseButton: !0,
    type: "warning",
    title: g.jsx("div", {
      className: "flex items-center gap-2",
      children: r.formatMessage({
        id: "KXMlta",
        defaultMessage: "This link isn't verified",
      }),
    }),
    primaryButton: g.jsx(Ye, {
      as: "link",
      openNewTab: !0,
      rel: "noopener noreferer",
      color: "primary",
      onClick: d,
      to: e,
      children: r.formatMessage({ id: "gMzmDW", defaultMessage: "Open link" }),
    }),
    secondaryButton: g.jsx(qe.Button, {
      title: r.formatMessage({ id: "YGLt71", defaultMessage: "Copy link" }),
      color: "secondary",
      onClick: p,
    }),
    children: [
      g.jsxs("p", {
        className:
          "text-token-text-secondary -mt-4 mb-6 text-sm text-pretty sm:-mt-7",
        children: [
          g.jsx(O, {
            defaultMessage:
              "Make sure you trust this link before proceeding. If you don't recognize the URL, don't open the link to access the site.",
            id: "safe-link-warning-modal-description",
          }),
          g.jsx("a", {
            className:
              "can-hover:hover:text-token-link-hover ps-1 underline underline-offset-1",
            href: "https://help.openai.com/en/articles/10984597-chatgpt-generated-links",
            target: "_blank",
            rel: "noopener noreferrer",
            children: g.jsx(O, { id: "xNvPsR", defaultMessage: "Learn more" }),
          }),
        ],
      }),
      g.jsxs("div", {
        className: "mb-2 text-sm break-all",
        children: [
          g.jsx("span", {
            className: "text-token-text-secondary",
            children: u,
          }),
          g.jsx("span", {
            className: "text-token-text-primary font-medium",
            children: f,
          }),
          g.jsx("span", {
            className: "text-token-text-secondary",
            children: m,
          }),
        ],
      }),
    ],
  });
}
const H = {},
  K = {},
  G = {};
function B(n, e) {
  return `${n}::${e}`;
}
function se({
  node: n,
  onClick: e,
  children: t,
  clientThreadId: a,
  messageId: s,
  href: r,
  disableSafeURLs: o,
  ...i
}) {
  let l = e;
  const p = n?.properties?.href,
    d = me(),
    c = C.useContext(ge),
    u = Y(),
    f = $e(a),
    m = he(f, r, c?.useSafeUrls && !o),
    k = Je(u, "387775177"),
    h = !o && m === void 0 && k.get("enable-copy-and-open", !1);
  return (
    s != null &&
      typeof p == "string" &&
      p.includes("/bing/redirect") &&
      (H[s] ||
        (x.logEvent("Browsing Show Bing Link", { id: s, content: p }),
        (H[s] = !0)),
      (l = (_) => {
        K[s] ||
          (x.logEvent("Browsing Click Bing Link", { id: s, content: p }),
          (K[s] = !0)),
          e?.(_);
      })),
    (l = (_) => {
      const y = "" + p;
      if (s && !G[B(s, y)]) {
        const T = m || h ? "URL Clicked Allowed" : "URL Clicked Blocked";
        x.logEvent(T, { id: s, content: y }), (G[B(s, y)] = !0);
      }
      e?.(_), h && r && Ze(u, Bt, { url: r });
    }),
    g.jsx(g.Fragment, {
      children: g.jsx("a", {
        onClick: l,
        ...i,
        className: Qe(i.className, h && "cursor-pointer"),
        href: m,
        rel: d ? "noopener noreferrer" : "noopener",
        children: t,
      }),
    })
  );
}
const Wt = "w";
function Vt({ messageId: n, clientThreadId: e, text: t, children: a, ...s }) {
  const r = J(e),
    o = ve(),
    i = Ce(e),
    p = `${window.location.origin}?q=${encodeURIComponent(t)}`,
    d = C.useCallback(
      async (c) => {
        c.preventDefault(),
          et.count(tt.DEFAULT, "instant_follow_up_anchor_clicked"),
          x.logEventWithStatsig(
            "Instant Follow Up Anchor Clicked",
            "chatgpt_instant_follow_up_anchor_clicked",
            { clientThreadId: e, messageId: n },
          ),
          r({
            sourceEvent: c,
            promptMessage: st(t),
            completionMetadata: {
              systemHints: [...o],
              conversationMode: i ?? { kind: nt.PrimaryAssistant },
            },
          });
      },
      [e, i, n, o, r, t],
    );
  return g.jsx(se, {
    ...s,
    href: p,
    disableSafeURLs: !0,
    clientThreadId: e,
    messageId: n,
    className: "cursor-pointer",
    onClick: d,
    children: a,
  });
}
const zt = $.memo(Vt);
function qt({ messageId: n, clientThreadId: e, text: t, children: a, ...s }) {
  const { value: r } = rt("374768818");
  return r
    ? g.jsx(zt, { messageId: n, clientThreadId: e, text: t, children: a, ...s })
    : g.jsx(se, { messageId: n, clientThreadId: e, children: a, ...s });
}
const gn = $.memo(qt),
  Yt = {},
  Xt = [];
function re(n) {
  const e = n || Yt;
  return function (t, a) {
    ke(t, "element", function (s, r) {
      const o = Array.isArray(s.properties.className)
          ? s.properties.className
          : Xt,
        i = o.includes("language-math"),
        l = o.includes("math-display"),
        p = o.includes("math-inline");
      let d = l;
      if (!i && !l && !p) return;
      let c = r[r.length - 1],
        u = s;
      if (
        (s.tagName === "code" &&
          i &&
          c &&
          c.type === "element" &&
          c.tagName === "pre" &&
          ((u = c), (c = r[r.length - 2]), (d = !0)),
        !c)
      )
        return;
      const f = we(u, { whitespace: "pre" });
      let m;
      try {
        m = U.renderToString(f, { ...e, displayMode: d, throwOnError: !0 });
      } catch (h) {
        const _ = h,
          y = _.name.toLowerCase();
        a.message("Could not render math with KaTeX", {
          ancestors: [...r, s],
          cause: _,
          place: s.position,
          ruleId: y,
          source: "rehype-katex",
        }),
          y === "parseerror"
            ? (m = U.renderToString(f, {
                ...e,
                displayMode: d,
                strict: "ignore",
                throwOnError: !1,
              }))
            : (m = [
                {
                  type: "element",
                  tagName: "span",
                  properties: {
                    className: ["katex-error"],
                    style: "color:" + (e.errorColor || "#cc0000"),
                    title: String(h),
                  },
                  children: [{ type: "text", value: f }],
                },
              ]);
      }
      typeof m == "string" && (m = xe(m).children);
      const k = c.children.indexOf(u);
      return c.children.splice(k, 1, ...m), V;
    });
  };
}
const hn = (n) => (n.startsWith(Le) || n === Wt ? n : Pe(n));
function $t() {
  return (n) => {
    E(n, "list", (e) => {
      for (const t of e.children) t.spread = !0;
    });
  };
}
function vn(n) {
  return (e) => {
    E(e, (t) => {
      Object.defineProperties(t, {
        markdownSource: {
          get() {
            return n.slice(
              this.position.start.offset,
              this.position.end.offset,
            );
          },
        },
      });
    });
  };
}
const ae = [
  Me,
  Se,
  $t,
  [Ee, { singleDollarTextMath: !1 }],
  be,
  Te,
  bt,
  Ie,
  Jt,
  Zt,
];
function Jt() {
  return (n) => {
    E(n, "textDirective", (e) => {
      e.name !== X && ((e.type = "text"), (e.value = `:${e.name}`));
    });
  };
}
const Qt = /\u200b/g;
function Zt() {
  return (n) => {
    E(n, "text", (e) => {
      e.value = e.value.replace(Qt, "");
    });
  };
}
function en() {
  return (n) => {
    const e = n.position?.end.offset;
    E(n, "element", (t, a) => {
      const { position: s } = t;
      if (!s) return;
      const { start: r, end: o } = s,
        i = r.offset,
        l = o.offset;
      (t.properties ??= {}),
        i != null && (t.properties["data-start"] = i),
        l != null &&
          ((t.properties["data-end"] = l),
          e === l && (t.properties["data-is-last-node"] = ""),
          a === n.children.length - 1 &&
            (t.properties["data-is-only-node"] = ""));
    });
  };
}
const Cn = [
    re,
    en,
    _e,
    [ye, { target: "_new", rel: "noopener noreferrer" }],
    z,
  ],
  tn = [[re, { output: "mathml" }], z];
function nn(n, e) {
  const t = at(n, e);
  return oe(t, e);
}
function oe(n, e) {
  const t = P()
      .use(q)
      .use(ae)
      .use([[an, e ?? []]])
      .use(Ne, {
        rule: "-",
        tightDefinitions: !0,
        handlers: {
          break: () => `
`,
          link: sn,
        },
      }),
    a = P().use(De).use(tn).use(Re),
    s = t.runSync(t.parse(n)),
    r = t.stringify(s),
    o = a.stringify(a.runSync(s));
  return { "text/plain": r, "text/html": o };
}
const sn = (n, e, t, a) => {
  const s = t.createTracker(a),
    r = t.enter("link"),
    o = t.enter("label");
  let i = s.move("[");
  return (
    (i += s.move(
      t.containerPhrasing(n, { before: i, after: "](", ...s.current() }),
    )),
    (i += s.move("](")),
    o(),
    (i += s.move(n.url.replace(/[\x00-\x1F\x7F-\x9F()"]/g, rn))),
    n.title && (i += s.move(" " + JSON.stringify(n.title))),
    (i += s.move(")")),
    r(),
    i
  );
};
function rn(n) {
  return "%" + n.charCodeAt(0).toString(16).toUpperCase().padStart(2, "0");
}
function an(n) {
  return (e) => {
    const t = {},
      a = (s, r) => {
        switch (r.type) {
          case "grouped_webpages": {
            const o = [];
            for (const i of r.items)
              if (i.url && i.title) {
                let l = t[i.url];
                l ||
                  (l = t[i.url] =
                    {
                      type: "definition",
                      identifier: String(Object.keys(t).length + 1),
                      url: i.url,
                      title: i.title,
                    }),
                  o.push({
                    type: "linkReference",
                    referenceType: "shortcut",
                    identifier: l.identifier,
                    children: [
                      { type: "text", value: i.attribution ?? je(i.url) },
                    ],
                  });
              }
            return o.length === 0
              ? []
              : [
                  { type: "text", value: "(" },
                  ...o.flatMap((i, l, p) =>
                    l < p.length - 1 ? [i, { type: "text", value: ", " }] : [i],
                  ),
                  { type: "text", value: ")" },
                ];
          }
          case "title_citation":
          case "location_search":
          case "time":
          case "image_v2":
          case "nav_list":
          case "file_navlist":
          case "file":
          case "grouped_webpages_model_predicted_fallback":
          case "tldr":
          case "navigation":
          case "stock":
          case "calculator":
          case "code_execution":
          case "forecast":
          case "businesses_map":
          case "video":
          case "sources_footnote":
          case "sports_standings":
          case "sports_schedule":
          case "attribution":
          case "webpage_extended":
          case "image_inline":
          case "product_entity":
          case "products":
          case "alt_text":
          case "product_reviews":
          case "product_rationale":
            if (r.alt) {
              const o = P().use(q).use(ae).parse(r.alt);
              if (s.type !== "textDirective") return o.children;
              const i = o.children[0];
              if (i.type === "paragraph") return i.children;
            }
            return [];
          case "hidden":
          case "status":
          case "optimistic_image_citation":
          case "webpage":
          case "optimistic_image_inline":
          case "invalid":
          case "attribution_footer":
          case "sports":
          case "grouped_webpages_v2":
            return [];
        }
      };
    E(e, Oe, (s, r, o) => {
      if (o == null || r == null) return;
      const i = on(s, n),
        l = i ? (a(s, i) ?? [s]) : [];
      return o.children.splice(r, 1, ...l), [V, r + l.length];
    }),
      e.children.push(...Object.values(t));
  };
}
function on(n, e) {
  if (n.name === X) {
    const t = n.attributes?.index;
    if (t) return e[parseInt(t, 10)];
  }
}
const kn = Object.freeze(
  Object.defineProperty(
    {
      __proto__: null,
      markdownToClipboardContent: oe,
      messageTextToClipboardContent: nn,
    },
    Symbol.toStringTag,
    { value: "Module" },
  ),
);
export {
  Kt as C,
  Wt as I,
  se as M,
  ae as R,
  gn as S,
  mn as a,
  Ht as b,
  R as c,
  fn as d,
  hn as e,
  Cn as f,
  oe as g,
  kn as h,
  nn as m,
  vn as r,
  Gt as u,
};
//# sourceMappingURL=mrja6mbtdpn27l02.js.map
