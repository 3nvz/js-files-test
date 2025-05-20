import { u as b } from "./mrja6mbtdpn27l02.js";
import {
  R as P,
  V as _,
  W as U,
  X as F,
  U as E,
  Y as I,
  Z as w,
  $ as O,
  a0 as A,
  a1 as G,
  a2 as R,
  E as k,
} from "./bek4a02po1hapmml.js";
import {
  ae as N,
  aJ as s,
  aX as X,
  fb as q,
  ag as D,
} from "./hgyrt6j47bbfyjrt.js";
import { r as J } from "./lip667d8t42poxum.js";
function $() {
  const { store: a } = P(),
    t = _(),
    { clearSystemHintModeTrigger: r, getSystemHintModeTrigger: o } = U(),
    { value: n } = N("1988730211"),
    i = !F.useDisabledGlobally(),
    { onRequestCompletion: c } = b();
  return J.useCallback(
    (M, e, f, d) => {
      const m = a.getSharedProps();
      if (!m) return;
      const { clientThreadId: S, onResetState: x, conversationMode: T } = m;
      E.hideThreadHeader();
      const l = t.has(s.Search),
        p = l ? o(s.Search) : void 0,
        u = X(S),
        { systemHints: H, extraStreamParams: g } = I(e)
          ? {
              systemHints: [e.categoryId],
              extraStreamParams: e.modelOverride
                ? { model: e.modelOverride }
                : {},
            }
          : n
            ? w(Array.from(t))
            : { systemHints: Array.from(t), extraStreamParams: {} };
      i && (g.enableMessageFollowups = !0);
      const h = O(),
        y = {
          is_starter_prompt: !0,
          suggestion_type: e.type,
          starter_prompt_id: "id" in e ? e.id : void 0,
        };
      h && (y.__internal = { search_settings: h });
      const v = q(A(e), y);
      c({
        promptMessage: v,
        sourceEvent: M,
        extraStreamParams: g,
        completionMetadata: {
          suggestions: f,
          suggestion: e,
          suggestionIndex: d,
          conversationMode: T ?? u?.mode,
          systemHints: H,
          searchSource: p,
        },
      });
      const C = D.getCurrentNode(u).message.id;
      x(), G(e, d, S, C), R() || k(), p && l && r(s.Search);
    },
    [a, t, o, n, i, c, r],
  );
}
export { $ as u };
//# sourceMappingURL=j4mmgxghl8b1mh10.js.map
