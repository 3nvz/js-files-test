import { r as i, j as e, a5 as x } from "./lip667d8t42poxum.js";
import { M as h, N as p, O as g, Q as j } from "./bek4a02po1hapmml.js";
import { ai as y, c as v } from "./hgyrt6j47bbfyjrt.js";
function z({
  isFirstParty: s,
  gizmoId: r,
  src: a,
  alt: o,
  className: t,
  showLoading: n,
}) {
  const l = h(r),
    [c, d] = i.useState(!1),
    [m, u] = i.useState(!0);
  if (c || !a) {
    const f = s || l;
    return e.jsx("div", {
      className: t,
      children: e.jsx("div", {
        className:
          "gizmo-shadow-stroke bg-token-main-surface-primary text-token-text-primary relative flex h-full items-center justify-center rounded-full",
        children: e.jsx(x.div, {
          className: "flex h-full w-full items-center justify-center",
          initial: { opacity: 0 },
          animate: { opacity: 1, transition: { duration: 0.1 } },
          children: f
            ? e.jsx(y, { className: "h-2/3 w-2/3" })
            : e.jsx(p, { className: "h-2/3 w-2/3 text-gray-400" }),
        }),
      }),
    });
  }
  return e.jsx("div", {
    className: t,
    children: e.jsx("div", {
      className: v(
        "gizmo-shadow-stroke overflow-hidden rounded-full",
        n && m && "animate-pulse",
      ),
      children: e.jsx("img", {
        src: a,
        className: "bg-token-main-surface-secondary h-full w-full",
        alt: o ?? "GPT Icon",
        width: 80,
        height: 80,
        onError: () => d(!0),
        onLoad: () => u(!1),
      }),
    }),
  });
}
function N({ gizmoId: s, className: r }) {
  const { data: a } = g(s);
  return e.jsx(z, {
    src: a?.gizmo.display.profile_picture_url,
    gizmoId: s,
    isFirstParty: a?.gizmo.tags?.includes(j.FirstParty) ?? !1,
    className: r,
  });
}
export { z as G, N as a };
//# sourceMappingURL=iamkd7uovamzrioo.js.map
