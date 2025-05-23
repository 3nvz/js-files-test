import {
  at as _,
  aO as h,
  gl as d,
  gm as g,
  cO as C,
  b as u,
  g as E,
  f7 as i,
  v as k,
  gn as r,
} from "./hgyrt6j47bbfyjrt.js";
import { d as m } from "./lip667d8t42poxum.js";
class S {
  static async getCheckoutLink(t, o, s) {
    if (s == null || s.billing_details == null) {
      const n = new Error("chatgpt_payload_undefined_in_checkout_link");
      throw (
        (_.addError(n, { callLocation: o }),
        h.logEvent("chatgpt_payload_undefined_in_checkout_link", null, {
          callLocation: o,
        }),
        n)
      );
    }
    let e = Promise.resolve(void 0);
    t?.includes(d) &&
      (e = g("chatgpt_checkout").catch((n) => {
        _.addError(n);
      }));
    const c = C(null, null, null, await e);
    return await u.safePost("/payments/checkout", {
      requestBody: s,
      additionalHeaders: c,
    });
  }
  static async fetchExistingCheckoutSession(t, o) {
    return await u.safeGet(
      "/payments/checkout/{processor_entity}/{checkout_session_id}",
      { parameters: { path: { processor_entity: t, checkout_session_id: o } } },
    );
  }
}
const T = "3950229590",
  f = "enabled_custom_checkout_for_plus",
  O = "enabled_custom_checkout_for_pro",
  w = "enabled_custom_checkout_for_team",
  l = "chatgpt_web_checkout_navigate_to_checkout",
  N = "chatgpt_web_checkout_prepare_checkout_session";
function p(a) {
  switch (a) {
    case r.PLUS:
      return f;
    case r.PRO:
      return O;
    case r.TEAM:
      return w;
    default:
      return null;
  }
}
function v(a, t) {
  const o = p(t);
  return o == null ? "redirect" : k(a, T).get(o, !1) ? "custom" : "redirect";
}
function H() {
  const a = m(),
    t = E();
  async function o(e, c, n) {
    return (
      (e.checkout_ui_mode = v(t, e.plan_name)),
      i(t, { eventName: N, metadata: { ui_mode: e.checkout_ui_mode } }),
      await S.getCheckoutLink(n, c, e)
    );
  }
  async function s(e) {
    if ("tag" in e)
      switch ((i(t, { eventName: l, metadata: { tag: e.tag } }), e.tag)) {
        case "hosted_checkout_session":
        case "redirect_to_portal": {
          window.location.href = e.url;
          break;
        }
        case "custom_checkout_session": {
          const c = e.processor_entity,
            n = e.checkout_session_id;
          await a({ pathname: `/checkout/${c}/${n}`, search: "", hash: "" });
          break;
        }
      }
    else if (e.url)
      i(t, { eventName: l, metadata: { tag: "missing_tag" } }),
        (window.location.href = e.url);
    else throw new Error("Received invalid response from /checkout");
  }
  return { prepareCheckoutSession: o, navigateToCheckout: s };
}
export { H as u };
//# sourceMappingURL=lrf6ki1gmwd89v2w.js.map
