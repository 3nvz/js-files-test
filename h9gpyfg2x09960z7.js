import { f as c, j as e, M as x, a5 as g } from "./lip667d8t42poxum.js";
import { R as f, I as p } from "./enyrqi1ktf2s54c0.js";
import { c as r } from "./hgyrt6j47bbfyjrt.js";
function k({
  ariaLabel: n,
  isCompact: t = !1,
  className: l,
  leftItem: s,
  onChange: i,
  rightItem: o,
  value: a,
}) {
  const m = c(),
    u = a === s.value;
  return e.jsx(f, {
    type: "single",
    "aria-label": m.formatMessage(n),
    onClick: () => {
      i(u ? o.value : s.value);
    },
    value: a,
    className: r(
      "bg-token-main-surface-tertiary cursor-pointer rounded-full p-1 select-none",
      l,
    ),
    children: e.jsxs("div", {
      className: "relative grid grid-cols-2 gap-1",
      children: [
        e.jsx(d, { ...s, isCompact: t, isSelected: a === s.value }),
        e.jsx(d, { ...o, isCompact: t, isSelected: a === o.value }),
      ],
    }),
  });
}
function d({
  ariaLabel: n,
  isSelected: t,
  label: l,
  value: s,
  isCompact: i = !1,
  className: o,
}) {
  const a = c();
  return e.jsxs("div", {
    className: r(
      "relative z-10 px-3 text-center font-medium",
      i ? "py-1 text-xs" : "py-1.5 text-sm",
    ),
    children: [
      e.jsx(p, {
        "aria-label": n ? a.formatMessage(n) : void 0,
        className: r({
          "text-token-text-primary": t,
          "text-token-text-tertiary": !t,
        }),
        value: s,
        children: e.jsx(x, { ...l }),
      }),
      t
        ? e.jsx(g.div, {
            transition: { duration: 0.05 },
            layoutId: "SegmentedControlToggleItem-selectedBackground",
            className: r(
              "bg-token-main-surface-primary absolute inset-0 -z-10 rounded-full shadow-sm",
              o,
            ),
          })
        : null,
    ],
  });
}
export { k as S };
//# sourceMappingURL=h9gpyfg2x09960z7.js.map
