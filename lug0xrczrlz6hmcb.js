import {
  r as b,
  c as p,
  j as n,
  f as Y,
  M as u,
  g as $,
} from "./lip667d8t42poxum.js";
import {
  dX as E,
  dY as S,
  dZ as k,
  d_ as F,
  d$ as O,
} from "./bek4a02po1hapmml.js";
import { H as D } from "./b3f39kp9psoxk5co.js";
function H(c) {
  "use forget";
  const e = p.c(10),
    {
      className: d,
      elementRef: t,
      item: s,
      isActive: i,
      testId: a,
      hideOverflowMenu: l,
    } = c,
    r = l === void 0 ? !1 : l;
  let o;
  e[0] !== d ||
  e[1] !== t ||
  e[2] !== r ||
  e[3] !== i ||
  e[4] !== s ||
  e[5] !== a
    ? ((o = n.jsx(D, {
        className: d,
        conversation: s,
        isActive: i,
        elementRef: t,
        testId: a,
        hideOverflowMenu: r,
      })),
      (e[0] = d),
      (e[1] = t),
      (e[2] = r),
      (e[3] = i),
      (e[4] = s),
      (e[5] = a),
      (e[6] = o))
    : (o = e[6]);
  let m;
  return (
    e[7] !== o || e[8] !== a
      ? ((m = n.jsx("li", {
          className: "relative",
          "data-testid": a,
          children: o,
        })),
        (e[7] = o),
        (e[8] = a),
        (e[9] = m))
      : (m = e[9]),
    m
  );
}
const L = b.memo(H),
  f = $({
    historyBucketToday: { id: "history.bucket.today", defaultMessage: "Today" },
    historyBucketYesterday: {
      id: "history.bucket.yesterday",
      defaultMessage: "Yesterday",
    },
    historyBucketLastSeven: {
      id: "history.bucket.lastSeven",
      defaultMessage: "Previous 7 Days",
    },
    historyBucketLastThirty: {
      id: "history.bucket.lastThirty",
      defaultMessage: "Previous 30 Days",
    },
  }),
  R = 5;
function P(c, e) {
  "use forget";
  const d = Y();
  return b.useMemo(
    () =>
      c.reduce(
        (t, s) => {
          const i = new Date(s.update_time ?? s.create_time ?? 0),
            a = E(new Date(), i);
          if (a === 0) t.recent.today.items.push(s);
          else if (a <= 1) t.recent.yesterday.items.push(s);
          else if (a <= 7) t.recent.lastSeven.items.push(s);
          else if (a <= 30) t.recent.lastThirty.items.push(s);
          else if (S(i)) {
            const l = k(i),
              r = F(i),
              o = `${l}-${r}`;
            t.dynamicMonths[o]
              ? t.dynamicMonths[o].items.push(s)
              : (t.dynamicMonths[o] = {
                  label: d.formatDate(i, { month: "long" }),
                  items: [s],
                });
          } else {
            const r = `${k(i)}-`;
            t.dynamicYears[r]
              ? t.dynamicYears[r].items.push(s)
              : (t.dynamicYears[r] = {
                  label: d.formatDate(i, { year: "numeric" }),
                  items: [s],
                });
          }
          return t;
        },
        {
          recent: {
            today: { label: n.jsx(u, { ...f.historyBucketToday }), items: [] },
            yesterday: {
              label: n.jsx(u, { ...f.historyBucketYesterday }),
              items: [],
            },
            lastSeven: {
              label: n.jsx(u, { ...f.historyBucketLastSeven }),
              items: [],
            },
            lastThirty: {
              label: n.jsx(u, { ...f.historyBucketLastThirty }),
              items: [],
            },
          },
          dynamicMonths: {},
          dynamicYears: {},
        },
      ),
    [e, c],
  );
}
function z(c) {
  "use forget";
  const e = p.c(9),
    {
      activeId: d,
      bucketedItems: t,
      items: s,
      hasNextPage: i,
      infiniteScrollTriggerElementRef: a,
      hideOverflowMenu: l,
    } = c;
  let r;
  return (
    e[0] !== d ||
    e[1] !== t.dynamicMonths ||
    e[2] !== t.dynamicYears ||
    e[3] !== t.recent ||
    e[4] !== i ||
    e[5] !== l ||
    e[6] !== a ||
    e[7] !== s
      ? ((r = n.jsx(n.Fragment, {
          children: [t.recent, t.dynamicMonths, t.dynamicYears].flatMap(
            (o, m) =>
              n.jsx(
                b.Fragment,
                {
                  children: Object.entries(o).map((v, x) => {
                    const [g, I] = v,
                      { items: h, label: T } = I;
                    if (g !== "today" && !h.length) return null;
                    const j = !!h.find(
                      (y) => s.length > 0 && y.id === s[0]?.id,
                    );
                    return (
                      h.length > 0 &&
                      n.jsxs(
                        "div",
                        {
                          className: "relative mt-5 first:mt-0 last:mb-5",
                          children: [
                            n.jsx("div", {
                              className:
                                "bg-token-bg-elevated-secondary top-header-height sticky z-20",
                              children: n.jsx("span", {
                                className: "flex h-9 items-center",
                                children: n.jsx(O, { children: T }),
                              }),
                            }),
                            n.jsx("ol", {
                              children: h.map((y, M) => {
                                const B = j && M === 0,
                                  N =
                                    i && s[s.length - R - 1]?.id === y.id
                                      ? a
                                      : void 0;
                                return n.jsx(
                                  L,
                                  {
                                    item: y,
                                    hideOverflowMenu: l,
                                    isActive: d === y.id,
                                    isFirstItem: B,
                                    elementRef: N,
                                    testId: `history-item-${M}`,
                                  },
                                  `history-item-${y.id}-${g}`,
                                );
                              }),
                            }),
                          ],
                        },
                        `${g}-${m}-${x}`,
                      )
                    );
                  }),
                },
                `category-${m}`,
              ),
          ),
        })),
        (e[0] = d),
        (e[1] = t.dynamicMonths),
        (e[2] = t.dynamicYears),
        (e[3] = t.recent),
        (e[4] = i),
        (e[5] = l),
        (e[6] = a),
        (e[7] = s),
        (e[8] = r))
      : (r = e[8]),
    r
  );
}
export { z as H, L as a, P as u };
//# sourceMappingURL=lug0xrczrlz6hmcb.js.map
