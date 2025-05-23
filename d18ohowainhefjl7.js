import { r as l, j as e, M as j, a5 as L } from "./lip667d8t42poxum.js";
import { W as v } from "./nhyrayi3co1h1g32.js";
import {
  ar as b,
  as as S,
  at as T,
  au as D,
  av as y,
  aw as E,
  ax as R,
  aq as z,
  ay as F,
  az as A,
  aA as H,
  aB as U,
  aC as W,
  aD as q,
  aE as O,
} from "./bek4a02po1hapmml.js";
import { P as p, a as k } from "./jy5dxk25zw6hpymq.js";
import { b9 as V, bM as X, bN as B } from "./hgyrt6j47bbfyjrt.js";
const J = { positive: R, negative: E, neutral: y, mixed: y },
  K = {
    positive: "Positive",
    negative: "Negative",
    neutral: "Mixed",
    mixed: "Mixed",
  };
function ie({
  clientThreadId: t,
  messageId: i,
  product: n,
  trackContentReferenceEvent: a,
  onProductEntityUpdated: o,
}) {
  const {
      productInfo: r,
      isLoading: s,
      isCached: f,
    } = Y({ clientThreadId: t, messageId: i, product: n }),
    [d] = l.useState(f),
    c = l.useRef(!1);
  l.useEffect(() => {
    o && r.productEntity && o(r.productEntity),
      r.productEntity &&
        !c.current &&
        ((c.current = !0),
        a(
          "Product Sidebar Entity Loaded",
          "product_sidebar_entity_loaded",
          "product_entity",
        ));
  }, [r.productEntity, o, a]);
  const { showDebugConversationTurns: h } = A();
  return e.jsx("div", {
    children: s
      ? e.jsxs("div", {
          className: "flex flex-col gap-4 px-6 pb-6",
          children: [
            e.jsx(p, { index: 0, width: 50, heightSize: "sm" }),
            e.jsxs(k, {
              children: [
                e.jsx(p, { index: 1, width: 100, heightSize: "sm" }),
                e.jsx(p, { index: 2, width: 100, heightSize: "sm" }),
                e.jsx(p, { index: 3, width: 30, heightSize: "sm" }),
              ],
            }),
          ],
        })
      : e.jsxs("div", {
          className: "bg-token-bg-primary flex flex-col",
          children: [
            e.jsx(Q, {
              contentReference: r.productRationale,
              trackContentReferenceEvent: a,
              disableAnimation: d,
            }),
            e.jsx(Z, {
              contentReference: r.productReviews,
              trackContentReferenceEvent: a,
              disableAnimation: d,
            }),
            !1,
          ],
        }),
  });
}
function Q({
  contentReference: t,
  trackContentReferenceEvent: i,
  disableAnimation: n,
}) {
  const a = l.useRef(!1);
  return (
    l.useEffect(() => {
      t &&
        !a.current &&
        ((a.current = !0),
        i(
          "Product Sidebar Rationale Loaded",
          "product_sidebar_rationale_loaded",
          "product_rationale",
        ));
    }, [t, i]),
    t
      ? e.jsx(b, {
          title: e.jsx(j, {
            id: "XgsZPF",
            defaultMessage: "Why you might like this",
          }),
          children: e.jsx("div", {
            className: "text-sm",
            children: e.jsx(S, {
              isDisabled: n,
              children: e.jsxs(T, {
                tag: "p",
                "data-start": 0,
                "data-end": t.rationale.length,
                children: [
                  e.jsx("span", { className: "me-1", children: t.rationale }),
                  t.grouped_citation &&
                    e.jsx(v, {
                      webpageItem: t.grouped_citation,
                      trackContentReferenceEvent: i,
                      analyticsMetadata: {
                        section: "product_rationale",
                        section_location: "sidebar",
                      },
                      isLastHovered: !0,
                      noMarginStart: !0,
                    }),
                ],
              }),
            }),
          }),
        })
      : null
  );
}
function Z({
  contentReference: t,
  trackContentReferenceEvent: i,
  disableAnimation: n,
}) {
  const a = l.useRef(!1);
  l.useEffect(() => {
    t &&
      !a.current &&
      ((a.current = !0),
      i(
        "Product Sidebar Reviews Loaded",
        "product_sidebar_reviews_loaded",
        "product_reviews",
      ));
  }, [t, i]);
  function o(s) {
    return new URL(s).hostname.replace(/^www\./, "");
  }
  function r(s) {
    return t ? (s.cite ? t.cite_map[s.cite]?.url : s.cite_url) : null;
  }
  return t
    ? e.jsx(b, {
        title: e.jsx(j, {
          id: "p8XHcJ",
          defaultMessage: "What people are saying",
        }),
        children: e.jsxs("div", {
          className: "flex flex-col gap-6",
          children: [
            t.summary &&
              e.jsx(S, {
                isDisabled: n,
                children: e.jsx(D, {
                  className: "-mb-2 text-sm",
                  children: t.summary,
                }),
              }),
            t.reviews.map((s, f) => {
              const d = J[s.sentiment ?? "neutral"],
                c = r(s);
              return e.jsxs(
                L.div,
                {
                  className: "relative flex flex-col gap-2",
                  ...(!n && {
                    initial: { opacity: 0 },
                    animate: { opacity: 1 },
                    transition: { duration: 0.4 },
                  }),
                  children: [
                    e.jsxs("div", {
                      className: "flex flex-row items-center gap-2",
                      children: [
                        e.jsx(z, {
                          url: c ?? "",
                          className: "h-8 w-8 rounded-full",
                          size: 128,
                          minSize: 16,
                          fallback: e.jsx(F, {
                            className: "text-token-text-tertiary",
                          }),
                        }),
                        e.jsxs("div", {
                          className: "flex flex-col",
                          children: [
                            e.jsx("div", {
                              className: "text-sm font-semibold",
                              children: s.source,
                            }),
                            e.jsxs("div", {
                              className:
                                "text-token-text-secondary flex flex-row gap-1 text-xs",
                              children: [
                                e.jsx("div", { children: c ? o(c) : "" }),
                                s.sentiment &&
                                  e.jsxs(e.Fragment, {
                                    children: [
                                      "·",
                                      e.jsx(d, {
                                        className:
                                          "icon-sm text-token-text-secondary",
                                      }),
                                      K[s.sentiment],
                                    ],
                                  }),
                              ],
                            }),
                          ],
                        }),
                      ],
                    }),
                    e.jsxs("div", {
                      className: "text-sm",
                      children: [
                        s.theme &&
                          e.jsx("div", {
                            className: "font-semibold",
                            children: s.theme,
                          }),
                        e.jsx("span", {
                          className: "me-1",
                          children: s.summary,
                        }),
                        e.jsx($, {
                          cite: s.cite,
                          contentReference: t,
                          trackContentReferenceEvent: i,
                        }),
                      ],
                    }),
                  ],
                },
                f,
              );
            }),
          ],
        }),
      })
    : null;
}
function $({
  cite: t,
  contentReference: i,
  trackContentReferenceEvent: n,
  analyticsMetadata: a,
}) {
  const { cite_map: o } = i,
    r = t ? o[t] : null;
  return r
    ? e.jsx(v, {
        webpageItem: r,
        trackContentReferenceEvent: n,
        analyticsMetadata: {
          ...a,
          section: "product_reviews",
          section_location: "sidebar",
        },
        isLastHovered: !0,
        noMarginStart: !0,
      })
    : null;
}
async function* G(
  {
    conversationId: t,
    messageId: i,
    productQuery: n,
    productLookupData: a,
    evalPreset: o,
  },
  r,
) {
  const s = W(`${B}/search/product_info`, {
      method: "POST",
      headers: {
        ...X({ isAuthOptional: !0 }),
        "Content-Type": "application/json",
      },
      body: {
        conversation_id: t,
        message_id: i,
        eval_preset: o,
        product_query: n,
        supported_encodings: [q.V1],
        ...(a ? { product_lookup_data: a } : {}),
      },
      signal: r,
    }),
    f = O(s);
  for await (const d of f) "data" in d && (yield d.data);
}
const g = new Map();
function Y({ clientThreadId: t, messageId: i, product: n }) {
  const a = V(t) ?? t,
    o = [a, i, n.title].join(":"),
    [r, s] = l.useState(
      g.get(o) ?? {
        productReviews: void 0,
        productRationale: void 0,
        productEntity: void 0,
        __debug: void 0,
      },
    ),
    [f, d] = l.useState(!1),
    c = l.useRef(!1);
  return (
    l.useEffect(() => {
      async function h({
        conversationId: _,
        messageId: P,
        productQuery: w,
        productLookupData: N,
      }) {
        if (c.current) return;
        const x = H({ namespace: U.ProductSidebar });
        try {
          (c.current = !0), d(!0);
          const I = new URLSearchParams(window.location.search).get(
              "product_reviews_eval_preset",
            ),
            M = G({
              conversationId: _,
              messageId: P,
              productQuery: w,
              productLookupData: N,
              evalPreset: I,
            });
          let u = {
            productReviews: void 0,
            productRationale: void 0,
            productEntity: void 0,
            __debug: void 0,
          };
          for await (const m of M)
            m.type === "product_reviews"
              ? ((u = { ...u, productReviews: m }),
                x.logTiming("time_to_first_review"))
              : m.type === "product_rationale"
                ? ((u = { ...u, productRationale: m }),
                  x.logTiming("time_to_rationale"))
                : m.type === "product_entity"
                  ? ((u = { ...u, productEntity: m }),
                    x.logTiming("time_to_product_entity"))
                  : m.type === "__debug" && (u = { ...u, __debug: m }),
              ["product_reviews", "product_rationale"].includes(m.type) &&
                d(!1),
              s(u);
          g.set(o, u);
        } finally {
          (c.current = !1), d(!1), x.logTiming("sidebar_loaded");
        }
      }
      (async function () {
        g.has(o) ||
          (a &&
            i &&
            (await h({
              conversationId: a,
              messageId: i,
              productQuery: n.title,
              productLookupData: n.product_lookup_data,
            })));
      })();
    }, [i, n.title, n.product_lookup_data, o, a]),
    { productInfo: r, isLoading: f, isCached: g.has(o) }
  );
}
export { ie as P, Q as a, Z as b };
//# sourceMappingURL=d18ohowainhefjl7.js.map
