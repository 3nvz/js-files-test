import {
  eo as l,
  m as g,
  aH as u,
  aE as i,
  aO as f,
  aj as _,
  er as y,
} from "./hgyrt6j47bbfyjrt.js";
import { pc as C, pF as d } from "./bek4a02po1hapmml.js";
import {
  d as E,
  p as h,
  f as P,
  a as v,
  r as R,
  g as S,
} from "./lip667d8t42poxum.js";
var T = {};
const p = {
    oiw216z: `${T.VITE_OIW216Z_SERVICE_URL ?? "https://sora.com"}/subscription`,
    vza493q: y,
    students: d(!0),
  },
  F = l(function () {
    const a = E(),
      [o] = h(),
      n = g(),
      c = P(),
      r = v(),
      s = u.getItem(i.CheckoutFrom);
    return (
      R.useEffect(() => {
        const e = o.get("plan_type") ?? "plus",
          m = C(e);
        e === "plus" && f.logEvent("chatgpt_plus_payment_success_page"),
          _.logPaymentSuccess({ plan_type: e }),
          r.invalidateQueries({ queryKey: ["account-status"] });
        let t = c.formatMessage(I.paymentConfirmationToastMessage, {
          planName: m,
        });
        s && p[s]
          ? (u.removeItem(i.CheckoutFrom),
            s === "students" && (t = null),
            (window.location.href = p[s]))
          : a("/#pricing"),
          t && n.success(t, { duration: 5 });
      }, [a, o, n, c, r, s]),
      null
    );
  }),
  I = S({
    paymentConfirmationToastMessage: {
      id: "Payments.success.toast",
      defaultMessage: "You're now subscribed to ChatGPT {planName}",
    },
  });
export { p as C, F as p };
//# sourceMappingURL=lzxg3bwvl23h3e8o.js.map
