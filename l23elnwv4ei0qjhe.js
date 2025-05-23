const __vite__mapDeps = (
  i,
  m = __vite__mapDeps,
  d = m.f ||
    (m.f = [
      "assets/9snq3ozjmlxv7u7n.js",
      "assets/lip667d8t42poxum.js",
      "assets/bek4a02po1hapmml.js",
      "assets/hgyrt6j47bbfyjrt.js",
      "assets/root-nsehtib5.css",
      "assets/conversation-small-k5k9c71c.css",
      "assets/imxvx5fflgp7b780.js",
      "assets/jy1u8exw8iz2slve.js",
      "assets/ltfattuf7qy8hfqt.js",
      "assets/jy5dxk25zw6hpymq.js",
      "assets/glin8sqjw0f6znku.js",
      "assets/kweqtgafphozzl00.js",
      "assets/ids1x0zqamf6ahba.js",
      "assets/l5e8sk6z3i8aaal6.js",
      "assets/gy64pge8qevmvg7e.js",
      "assets/fgib8os5mzfls06e.js",
      "assets/gfnsbm99dy8f9dle.js",
      "assets/gkp5860wafdf24mv.js",
      "assets/jwvxkjptpstk4ej7.js",
      "assets/d5srgqurg48kxugz.js",
      "assets/j1lsvoc2k14t9qu3.js",
      "assets/eef33l65z4kyipsv.js",
      "assets/e5qbxqli4yfx49qs.js",
      "assets/onc52ija8qy6u5wt.js",
      "assets/d7qhj0hizrl5q10d.js",
      "assets/bk8slwxjkdlmxjxm.js",
      "assets/n5wgei6jvns1qnny.js",
      "assets/pb0xfopp3f7joxj4.js",
      "assets/ew9hb9iurj3kpkmu.js",
      "assets/accwyue32xah1z1m.js",
      "assets/gzhfufyiohn83kuo.js",
      "assets/mrja6mbtdpn27l02.js",
      "assets/iamkd7uovamzrioo.js",
      "assets/j4mmgxghl8b1mh10.js",
      "assets/kx9sak1ife31wz46.js",
      "assets/bszrilswpsf8hziz.js",
      "assets/gydkbc6xtfcf9567.js",
      "assets/btagl6w1gub4aw61.js",
      "assets/nwof8l1z8ocfds4h.js",
      "assets/o309sy720yv7u68s.js",
      "assets/cjhj1879hzl80r7q.js",
    ]),
) => i.map((i) => d[i]);
import {
  c as S,
  gt as F,
  B as I,
  g as v,
  j as y,
  aj as D,
  X as M,
  _,
  af as B,
  ah as T,
  gu as z,
  fy as O,
  et as G,
  gv as V,
  ag as W,
} from "./hgyrt6j47bbfyjrt.js";
import { f as K, j as e, M as U, r as u } from "./lip667d8t42poxum.js";
import {
  b as j,
  F as X,
  N as Y,
  C as q,
  a as Q,
  c as Z,
  d as $,
} from "./c47vptqflf6emf1m.js";
import { C as J } from "./mrja6mbtdpn27l02.js";
import {
  gQ as N,
  gR as w,
  ae as ee,
  gS as ae,
  gT as se,
  gU as te,
  gV as oe,
  gW as re,
  gX as ne,
  gY as ie,
  e1 as ce,
  d5 as le,
  gZ as de,
  g_ as me,
  M as ge,
  g$ as xe,
  P as ue,
  h0 as he,
  h1 as pe,
  h2 as fe,
  h3 as b,
  fN as Ce,
} from "./bek4a02po1hapmml.js";
import "./nhyrayi3co1h1g32.js";
import "./jy5dxk25zw6hpymq.js";
import { I as je, M as be } from "./cn71vg7u1hry7wvg.js";
import { N as Se, L as ve } from "./ew9hb9iurj3kpkmu.js";
import { a as ye } from "./accwyue32xah1z1m.js";
function L({ isMobile: a = !1, includeArchived: s, setIncludeArchived: t }) {
  const { data: o } = N(),
    i = !!o?.archived_images_count,
    r = K().formatMessage({ id: "vMAtK7", defaultMessage: "Create image" }),
    l = w();
  return e.jsxs("header", {
    "data-landing-page-load-target": !0,
    className: S(
      "flex w-full items-center justify-between",
      a && "px-2",
      !a &&
        "h-header-height bg-token-main-surface-primary sticky top-0 z-20 px-3 py-3 max-md:hidden",
    ),
    children: [
      e.jsxs("div", {
        className: "flex items-center gap-1",
        children: [
          e.jsx(Se, { clientThreadId: F }),
          e.jsx("h1", {
            className:
              "text-lg font-normal tracking-[-0.28px] [text-box-trim:trim-both] [view-transition-name:var(--vt-tool-page-title)] md:px-3.5",
            children: e.jsx(U, { id: "Az9rja", defaultMessage: "My Library" }),
          }),
        ],
      }),
      e.jsxs("div", {
        className: "flex items-center gap-2",
        children: [
          e.jsxs(I, {
            type: "button",
            color: "ghost",
            className:
              "border-token-border-default border max-md:aspect-square max-md:w-10",
            onClick: l,
            children: [
              e.jsx(ee, {
                "aria-label": "",
                className: "icon-md max-md:icon-sm",
              }),
              e.jsx("span", { className: "max-md:sr-only", children: r }),
            ],
          }),
          i && e.jsx(ae, { includeArchived: s, setIncludeArchived: t }),
          e.jsx(ve, {}),
        ],
      }),
    ],
  });
}
function Me({ includeArchived: a, setIncludeArchived: s }) {
  const {
      images: t,
      hasNextPage: o,
      isLoading: i,
      isFetchingNextPage: c,
      fetchNextPage: r,
    } = se(a),
    { data: l, isLoading: h } = N(),
    p = v(),
    n = y(p).checkGate("2980121290"),
    g = w();
  if (
    (u.useEffect(() => {
      D.logEventWithStatsig(
        "chatgpt_web_image_library_page_viewed",
        "chatgpt_web_image_library_page_viewed",
      );
    }, []),
    !n)
  )
    return null;
  const x = h,
    d = l?.images_count ?? 0,
    m = !x && !d;
  return e.jsxs("div", {
    className:
      "flex w-full flex-1 flex-col items-center gap-4 justify-self-center",
    children: [
      e.jsx(L, { includeArchived: a, setIncludeArchived: s }),
      e.jsxs("div", {
        className: S(
          "w-full max-w-3xl px-8 max-md:px-0 md:mt-10",
          m ? "pt-8" : "max-md:pt-0",
        ),
        children: [
          m && e.jsx(te, { borderless: !0, onClick: g }),
          !m &&
            e.jsx(oe, {
              children: e.jsx(je, {
                count: d,
                images: t,
                includeArchived: a,
                hasMoreImages: o,
                isFetchingMore: c || i,
                onScrollToEnd: r,
              }),
            }),
        ],
      }),
    ],
  });
}
const _e = M(() =>
    _(
      () => import("./9snq3ozjmlxv7u7n.js"),
      __vite__mapDeps([
        0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19,
        20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33, 34, 35, 36, 37,
      ]),
    ).then((a) => a.CanvasFocusedViewManager),
  ),
  Ne = M(() =>
    _(
      () => import("./nwof8l1z8ocfds4h.js"),
      __vite__mapDeps([38, 1, 3, 4, 39, 2, 5, 40]),
    ).then((a) => a.SearchResultsModal),
  );
function Te({
  clientThreadId: a,
  setClientThreadId: s,
  urlThreadId: t,
  threadContent: o,
}) {
  const i = ce(),
    { createNewThread: c, resetThread: r } = le({
      clientThreadId: a,
      setClientThreadId: s,
    }),
    { pageType: l } = de(),
    h = me(),
    p = v(),
    n = l?.type === "library" && y(p).checkGate("2980121290"),
    [g, x] = u.useState(!1),
    d = !1,
    m =
      o ??
      (n ? e.jsx(Me, { includeArchived: g, setIncludeArchived: x }) : null),
    f = B(a, (k) => W.getGizmoId(k)),
    P = ge(f),
    E = u.useContext(T),
    C = z(E),
    H = i || C,
    A = C,
    R =
      !h && (P || !f)
        ? e.jsx(fe, {
            children: e.jsx(b, { clientThreadId: a, inMobileHeader: !0 }),
          })
        : e.jsx(b, { clientThreadId: a, inMobileHeader: !0 });
  return e.jsxs(e.Fragment, {
    children: [
      e.jsx(we, { clientThreadId: a, resetThread: r }),
      e.jsx(xe, { clientThreadId: a, urlThreadId: t }),
      e.jsx(ue, {
        clientThreadId: a,
        children: e.jsx(J, {
          clientThreadId: a,
          children: e.jsxs(j, {
            hideNavigation: H,
            mobileHeaderRightContentExpanded: n || d,
            mobileHeaderContent: n || d ? null : R,
            mobileHeaderBottomContent: e.jsx(pe, { clientThreadId: a }),
            mobileHeaderLeftContent: e.jsx($, { onNewChatButtonClick: r }),
            mobileHeaderRightContent: n
              ? e.jsx(L, {
                  isMobile: !0,
                  includeArchived: g,
                  setIncludeArchived: x,
                })
              : e.jsx(Z, { clientThreadId: a, onNewChatButtonClick: r }),
            renderNavSidebar: () =>
              e.jsx(Y, {
                navHeader: a
                  ? e.jsx(Q, {
                      className: "h-header-height flex items-center",
                      onNewThread: c,
                    })
                  : null,
                children: e.jsx(q, { clientThreadId: a, onNewThread: c }),
              }),
            threadFlyout: e.jsx(X, { clientThreadId: a }),
            children: [
              e.jsx(he, {}),
              m ?? e.jsx(be, { clientThreadId: a, hideHeader: A }, a),
              e.jsxs(j.Sidebars, {
                children: [e.jsx(_e, { clientThreadId: a }), !1, !1, !1],
              }),
            ],
          }),
        }),
      }),
      e.jsx(Le, { clientThreadId: a }),
    ],
  });
}
const we = u.memo(function ({ clientThreadId: s, resetThread: t }) {
  re({ clientThreadId: s }),
    ne(s),
    ye({ resetThreadAction: t, clientThreadId: s });
  const o = ie(s);
  return e.jsx(e.Fragment, { children: o });
});
function Le({ clientThreadId: a }) {
  const s = O(),
    t = G(),
    o = Ce();
  return !s || !t || o
    ? null
    : e.jsxs(e.Fragment, {
        children: [
          V(s, "searchSources") && e.jsx(Ne, { clientThreadId: a }),
          !1,
        ],
      });
}
export { Te as C };
//# sourceMappingURL=l23elnwv4ei0qjhe.js.map
