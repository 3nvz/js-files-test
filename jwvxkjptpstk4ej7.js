import { r as d, u as m, q as g, j as p, a5 as _ } from "./lip667d8t42poxum.js";
import {
  a3 as f,
  a4 as w,
  a5 as I,
  a6 as u,
  a7 as h,
  a8 as T,
  a9 as x,
  aa as y,
  ab as R,
} from "./bek4a02po1hapmml.js";
import { ar as P } from "./hgyrt6j47bbfyjrt.js";
function O() {
  const { imageResults: t } = b();
  R([...t.map((e) => c(e))]);
}
const S = f((...t) => w(...t), 5e3);
function b(t = !1) {
  const e = x(["image_results", "image_try_hard_status", "execution_status"]),
    a = u(h.threadId),
    s = P(e.toReversed().flatMap((r) => r.image_results?.entries)).map((r) => ({
      ...r,
      thumbnail_url: r.thumbnail_url.replace(/^http:\/\//, "https://"),
      content_url: r.content_url.replace(/^http:\/\//, "https://"),
    })),
    n = u(h.hasModelResponseText),
    o = e.some((r) => y(r));
  let i = s.length === 0 && !n;
  return (
    a != null &&
      t &&
      !i &&
      s.length === 0 &&
      e[0]?.image_try_hard_status === "not_attempted" &&
      (S(a, 0), (i = !0)),
    t && e[0]?.image_try_hard_status === "in_progress" && (i = !0),
    { imageResults: s, isLoading: i, isErrored: s.length === 0 && o }
  );
}
function z() {
  const t = I(),
    e = u(h.hasTurnError),
    a = u(h.hasModelResponseText),
    s = T(t);
  return {
    imageResults: s,
    isLoading: s.length === 0 && !a,
    isErrored: s.length === 0 && e,
  };
}
function E(t) {
  return g({
    queryKey: ["downloadImage", { imageUrl: t }],
    queryFn: () =>
      new Promise((e, a) => {
        const s = new Image();
        (s.onload = () => {
          e({ width: s.width, height: s.height });
        }),
          (s.onerror = () => {
            a();
          }),
          (s.src = t);
      }),
    enabled: !!t,
  });
}
function H(t) {
  return m(E(t));
}
const l = { width: 474, square: !0 };
function c(t, e = l) {
  if (t == null || t.is_proxied_image) return;
  const a = new URL(t.thumbnail_url);
  if (a.hostname.indexOf(".bing.") === -1) return t.thumbnail_url;
  const s = Math.min(e.width, t.content_size.width),
    n =
      e.height ??
      Math.floor((s * t.content_size.height) / t.content_size.width);
  if ((a.searchParams.delete("pid"), e.square)) {
    const o = Math.min(s, n);
    a.searchParams.set("w", o.toString()),
      a.searchParams.set("h", o.toString());
  } else
    a.searchParams.set("w", s.toString()),
      a.searchParams.set("h", n.toString());
  return a.searchParams.set("c", "7"), a.toString();
}
function L(t, e = l) {
  return d.useMemo(() => c(t, e), [t, e]);
}
const M = { type: "spring", stiffness: 700, damping: 82 };
function j({ children: t, className: e }) {
  return p.jsx(_.div, {
    animate: { opacity: 1 },
    initial: {
      width: "100%",
      height: "100%",
      translateX: 0,
      translateY: 0,
      opacity: 0,
    },
    whileHover: {
      width: "103%",
      height: "103%",
      translateX: "-1.5%",
      translateY: "-1.5%",
    },
    transition: M,
    className: e,
    children: t,
  });
}
export { j as I, b as a, H as b, L as c, O as d, E as g, M as i, z as u };
//# sourceMappingURL=jwvxkjptpstk4ej7.js.map
