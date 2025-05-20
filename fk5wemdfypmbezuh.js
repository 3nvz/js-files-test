import { f as T, d as B, r as D, j as g, g as N } from "./lip667d8t42poxum.js";
import {
  b8 as _,
  aZ as O,
  bx as x,
  B as Y,
  by as h,
  bz as M,
  bA as P,
  bB as A,
  bC as v,
} from "./bek4a02po1hapmml.js";
import { u as L } from "./hxt6ipx4btplutlt.js";
import {
  aH as f,
  aE as p,
  b1 as I,
  aj as b,
  aO as y,
  fh as R,
  dB as U,
  dz as k,
} from "./hgyrt6j47bbfyjrt.js";
const S = O.hasDismissedPromoRedemption,
  C = "month",
  F = "year";
function Z() {
  const { eligible: e } = _(S);
  return f.getItem(p.PromoCode) ? e : !1;
}
function $() {
  const e = T(),
    { markAsViewed: t } = _(S),
    n = B(),
    o = I(),
    { initialBillingDetails: r } = L(o, !0),
    l = f.getItem(p.PromoCode),
    { promoMetadata: a } = x(l),
    i = a != null;
  if (
    (D.useEffect(() => {
      i &&
        (b.logEvent("Promo Redemption Banner Shown", { promoCode: l }),
        y.logEvent("chatgpt_promo_redemption_banner_shown"));
    }, [i, l]),
    !i)
  )
    return null;
  const d = w(e, r, a),
    m = j(e, r, a),
    s = g.jsxs("div", {
      className: "grow",
      children: [
        g.jsx("div", { className: "mb-0.5 font-semibold", children: d }),
        g.jsx("span", { className: "text-token-text-secondary", children: m }),
      ],
    });
  return g.jsx(Y, {
    onPrimaryCtaClick: () => {
      const u = f.getItem(p.PromoCode);
      f.removeItem(p.PromoCode),
        t(),
        n(`/p/${u}#pricing`),
        b.logEvent("Promo Redemption Banner Redeem Button Clicked", {
          promoCode: u,
        }),
        y.logEvent("chatgpt_promo_redemption_banner_redeem_button_clicked");
    },
    primaryCtaText: e.formatMessage(c.bannerPrimaryCta),
    onDismiss: t,
    content: s,
  });
}
function G(e) {
  const t = e.currency;
  let n;
  switch (t) {
    case k:
      n = A;
      break;
    case U:
      n = P;
      break;
    default:
      n = P;
  }
  return n;
}
function E(e, t) {
  const { discount: n } = t;
  let o = G(e);
  if ("percentage" in n) o = (1 - n?.percentage / 100) * v;
  else if ("value" in n) {
    const r = n?.value;
    o -= r;
  }
  return o;
}
function w(e, t, n) {
  const { discount: o, duration: r } = n,
    { currencySymbol: l } = h(M(), t.currency),
    a = r ? r.period : C,
    i = r ? r.num_periods : 1;
  if ("percentage" in o) {
    const d = o?.percentage;
    return e.formatMessage(c.bannerTitleForPercentageDiscount, { discount: d });
  } else if ("value" in o) {
    const d = E(t, n),
      m = l.code.defaultMessage?.toString() ?? R,
      s = e.formatNumber(d, {
        style: "currency",
        currency: m,
        minimumFractionDigits: 0,
        maximumFractionDigits: 2,
      });
    let u;
    switch (a) {
      case C:
        i === 1
          ? (u = e.formatMessage(c.bannerTitleForSingleMonth, { cost: s }))
          : (u = e.formatMessage(c.bannerTitleForPluralMonths, {
              cost: s,
              num_months: i,
            }));
        break;
      case F:
        i === 1
          ? (u = e.formatMessage(c.bannerTitleForSingleYear, { cost: s }))
          : (u = e.formatMessage(c.bannerTitleForPluralYears, {
              cost: s,
              num_years: i,
            }));
        break;
    }
    return u;
  }
}
function j(e, t, n) {
  const { duration: o } = n,
    { currencySymbol: r } = h(M(), t.currency),
    l = o ? o.period : C,
    a = o ? o.num_periods : 1,
    i = r.code.defaultMessage?.toString() ?? R,
    d = E(t, n),
    m = e.formatNumber(d, {
      style: "currency",
      currency: i,
      minimumFractionDigits: 0,
      maximumFractionDigits: 2,
    });
  let s;
  switch (l) {
    case C:
      a === 1
        ? (s = e.formatMessage(c.bannerContentForSingleMonth, { cost: m }))
        : (s = e.formatMessage(c.bannerContentForPluralMonths, {
            num_months: a,
            cost: m,
          }));
      break;
    case F:
      a === 1
        ? (s = e.formatMessage(c.bannerContentForSingleYear, { cost: m }))
        : (s = e.formatMessage(c.bannerContentForPluralYears, {
            num_years: a,
            cost: m,
          }));
      break;
  }
  return s;
}
const c = N({
  bannerTitleForPluralMonths: {
    id: "promoRedemptionBannerTitleForPluralMonths",
    defaultMessage:
      "Get Plus for {cost}/month for the first {num_months} months",
  },
  bannerTitleForSingleMonth: {
    id: "promoRedemptionBannerTitleForSingleMonth",
    defaultMessage: "Get Plus for {cost}/month for the first month",
  },
  bannerTitleForPluralYears: {
    id: "promoRedemptionBannerTitleForPluralYears",
    defaultMessage: "Get Plus for {cost}/year for the first {num_years} years",
  },
  bannerTitleForSingleYear: {
    id: "promoRedemptionBannerTitleForSingleYear",
    defaultMessage: "Get Plus for {cost}/year for the first year",
  },
  bannerTitleForPercentageDiscount: {
    id: "promoRedemptionBannerTitleForPercentageDiscount",
    defaultMessage: "Finish redeeming your {discount}% off code for Plus",
  },
  bannerContentForPluralMonths: {
    id: "promoRedemptionBannerContentForPluralMonths",
    defaultMessage:
      "Get {num_months} months of expanded access for only {cost} per month.",
  },
  bannerContentForSingleMonth: {
    id: "promoRedemptionBannerContentForSingleMonth",
    defaultMessage: "Get 1 month of expanded access for only {cost} per month.",
  },
  bannerContentForPluralYears: {
    id: "promoRedemptionBannerContentForPluralYears",
    defaultMessage:
      "Get {num_years} years of expanded access for only {cost} per year.",
  },
  bannerContentForSingleYear: {
    id: "promoRedemptionBannerContentForSingleYear",
    defaultMessage: "Get 1 year of expanded access for only {cost} per year.",
  },
  bannerPrimaryCta: {
    id: "promoRedemptionBannerPrimaryCta",
    defaultMessage: "Redeem",
  },
});
export { $ as P, S as a, Z as u };
//# sourceMappingURL=fk5wemdfypmbezuh.js.map
