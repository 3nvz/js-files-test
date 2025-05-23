import {
  f as E,
  j as e,
  d as V,
  M as C,
  g as $,
  r as x,
  a6 as G,
  a5 as w,
} from "./lip667d8t42poxum.js";
import {
  ek as z,
  kS as H,
  an as R,
  lz as S,
  bJ as q,
  kJ as W,
  g_ as J,
  b_ as Q,
  fO as y,
  lA as K,
  lB as Y,
  eu as Z,
  d2 as F,
  lC as X,
  g0 as ee,
  lD as te,
  eP as oe,
  eQ as ne,
  ia as O,
  iq as N,
  lE as se,
  lF as ae,
  lG as re,
  eR as ie,
} from "./bek4a02po1hapmml.js";
import {
  af as le,
  ao as I,
  cV as A,
  R as ce,
  T as ue,
  P as de,
  C as pe,
  aj as h,
  gV as _,
  B as M,
  ag as ge,
  c as T,
} from "./hgyrt6j47bbfyjrt.js";
import { F as fe } from "./nfdnm3mrc4aegs7e.js";
import { u as me } from "./j5maet6kh5o0bu61.js";
const xe = ({
  clientThreadId: o,
  rateLimitPopup: i,
  children: t,
  disabled: n,
  highlightTooltip: a = !1,
  disabledReason: l,
  currentModelName: r,
}) => {
  const s = E(),
    u = le(o, ge.getIsNewConversation),
    d = I(),
    p = (m) => {
      i != null &&
        m &&
        h.logPopoverHover({
          type: "rate_limit",
          location: "file_upload",
          plan_type: d?.planType ?? "unknown",
        });
    },
    c = z(A.signUpButtonText),
    { isEligible: f } = me(o),
    v = !!i;
  return e.jsx(e.Fragment, {
    children: v
      ? e.jsx("div", {
          className: "h-8",
          children: e.jsxs(ce, {
            delayDuration: 150,
            onOpenChange: p,
            children: [
              e.jsx(ue, { asChild: !0, children: t }),
              e.jsx(de, {
                children: e.jsx(H, {
                  $as: pe,
                  side: "left",
                  sideOffset: 0,
                  align: "start",
                  alignOffset: -12,
                  className: "max-w-[320px]",
                  children: e.jsx(be, {
                    isNewConversation: u,
                    rateLimitPopup: i,
                    signUpButtonText: c,
                  }),
                }),
              }),
            ],
          }),
        })
      : !n && f
        ? e.jsx(fe, { clientThreadId: o, children: t })
        : e.jsx(R, {
            label: ve(s, n, l, r),
            className: "flex",
            open: a ? !0 : void 0,
            side: "bottom",
            children: t,
          }),
  });
};
function ve(o, i, t, n) {
  if (!i)
    return o.formatMessage({
      id: "composer.add.label",
      defaultMessage: "Add photos and files",
    });
  switch (t) {
    case S.ModelNotSupported:
      if (!n) break;
      return o.formatMessage(
        { id: "xPEzDr", defaultMessage: "Add files disabled for {modelName}" },
        { modelName: n ?? "model" },
      );
    case S.ThinkModeInUse:
      return o.formatMessage({
        id: "s8j69s",
        defaultMessage: "Add files disabled in Reason mode",
      });
    case S.SearchModeInUse:
      return o.formatMessage({
        id: "EQF2Gd",
        defaultMessage: "Add files disabled in Search mode",
      });
  }
  return o.formatMessage({
    id: "MeW0HZ",
    defaultMessage: "Add files is unavailable",
  });
}
const be = ({
    isNewConversation: o = !1,
    rateLimitPopup: i,
    signUpButtonText: t,
  }) => {
    const n = I(),
      a = V(),
      l = q(),
      r = W(),
      s = J();
    if (i == null) return null;
    const { call_to_action: u, description: d } = i,
      p = d || e.jsx(C, { ...B.defaultDescription }),
      c = u?.includes(_.GET_PLUS),
      f = u?.includes(_.AUTHENTICATE),
      v = f && s;
    return e.jsxs("div", {
      className: "text-token-text-primary p-2 text-sm",
      children: [
        e.jsx("div", { className: "mb-3", children: p }),
        c
          ? e.jsx(M, {
              size: "small",
              color: "secondary",
              onClick: () => {
                Q(a, "Rate limited file upload popover"),
                  h.logRateLimitGetPlusButtonClicked({
                    type: "file_upload",
                    location: "popover",
                    plan_type: n?.planType ?? "unknown",
                    is_hard_block: !1,
                    is_new_conversation: o,
                    hard_block_reason: "",
                  });
              },
              children: e.jsx(C, { ...B.getPlus }),
            })
          : null,
        f
          ? e.jsx(M, {
              size: "small",
              color: "primary",
              onClick: () => {
                l({
                  authType: r ? "login" : "signup",
                  callback: (m) => {
                    r
                      ? h.logLogInButtonClicked({
                          location: "File picker rate limit tooltip",
                          provider: m,
                        })
                      : h.logSignUpButtonClicked({
                          location: "File picker rate limit tooltip",
                          provider: m,
                        });
                  },
                });
              },
              children: r
                ? e.jsx(C, { ...A.logInButtonText })
                : e.jsx(C, { ...t }),
            })
          : null,
        v
          ? e.jsx(M, {
              size: "small",
              color: "secondary",
              className: "ms-2",
              onClick: () => {
                l({
                  authType: r ? "signup" : "login",
                  callback: (m) => {
                    r
                      ? h.logSignUpButtonClicked({
                          location: "File picker rate limit tooltip",
                          provider: m,
                        })
                      : h.logLogInButtonClicked({
                          location: "File picker rate limit tooltip",
                          provider: m,
                        });
                  },
                });
              },
              children: r
                ? e.jsx(C, { ...t })
                : e.jsx(C, { ...A.logInButtonText }),
            })
          : null,
      ],
    });
  },
  B = $({
    defaultDescription: {
      id: "U5qAWP",
      defaultMessage:
        "You've reached your daily upload limit. Get ChatGPT Plus to unlock more.",
    },
    getPlus: { id: "TeyLcp", defaultMessage: "Get Plus" },
  });
function Me({ setOpen: o, open: i, ...t }) {
  return e.jsxs(e.Fragment, {
    children: [
      e.jsx(Z.Trigger, {
        className: "m-0 h-0 w-0 border-none bg-transparent p-0",
      }),
      e.jsx(D, { ...t, onClick: () => o(!0), open: i }),
    ],
  });
}
function D({
  clientThreadId: o,
  icon: i,
  isDisabled: t = !1,
  showLabel: n = !1,
  highlightTooltip: a = !1,
  hideBorder: l = !1,
  isSmall: r = !1,
  disabledReason: s,
  currentModelName: u,
  visualTreatment: d,
  onClick: p,
  open: c,
  hasPopoverTrigger: f = !1,
  showGlowingBorder: v,
  rateLimit: m,
}) {
  const k = E(),
    P = e.jsxs(e.Fragment, { children: [i, n && e.jsx(Y, {})] }),
    j = {
      disabled: t,
      "aria-disabled": t,
      "aria-label": t
        ? k.formatMessage({
            id: "NTwThg",
            defaultMessage: "Attach files is unavailable",
          })
        : k.formatMessage({
            id: "ixBxc3",
            defaultMessage: "Upload files and more",
          }),
      onClick: (g) => {
        g.preventDefault(), p();
      },
    },
    b =
      d === "composer-btn"
        ? e.jsx("button", {
            ...j,
            className: "composer-btn",
            "data-is-open": c || void 0,
            children: P,
          })
        : e.jsx(K, {
            ...j,
            $open: c,
            $showLabel: n,
            $showGlowingBorder: v,
            $hideBorder: l,
            $isSmall: r,
            $visualTreatment: d,
            children: P,
          });
  return e.jsx(xe, {
    clientThreadId: o,
    rateLimitPopup: m,
    highlightTooltip: a,
    disabled: t,
    disabledReason: s,
    currentModelName: u,
    children: f ? e.jsx(y, { asChild: !0, children: b }) : b,
  });
}
function he({
  isLoading: o,
  handleLocalFileUploadClick: i,
  noAvailableConnectors: t,
  showMenuForNoAuth: n,
  announcement: a,
  ...l
}) {
  const { openPopover: r, isOpen: s } = F(),
    { openMenu: u, confirmMenuOpened: d } = X();
  x.useEffect(() => {
    u && (r(), d());
  }, [u, d, r]);
  const p = () => {
    if (t && !o && !n) {
      i();
      return;
    }
    r(),
      a.eligible && a.markAsViewed(),
      h.logEventWithStatsig(
        "Composer: Open Context Connector Picker",
        "chatgpt_composer_open_context_connector_picker",
      );
  };
  return e.jsx(D, { ...l, onClick: p, open: s, hasPopoverTrigger: !0 });
}
const U = ({ children: o, sideOffset: i = -35, ...t }) => {
    const n = ee(),
      { isOpen: a, closePopover: l, popoverContentRef: r } = F();
    return (
      x.useEffect(() => {
        if (a) return te(l, r);
      }, [a, r, l]),
      x.useEffect(() => {
        if (!a) return;
        const s = (u) => {
          u.key === "Escape" && l();
        };
        return (
          document.addEventListener("keydown", s, { capture: !0, passive: !0 }),
          () => document.removeEventListener("keydown", s, { capture: !0 })
        );
      }, [a, l]),
      e.jsx(oe, {
        forceMount: !0,
        children: e.jsx(ne, {
          forceMount: !0,
          asChild: !0,
          align: "center",
          sideOffset: i,
          onClick: (s) => {
            s.stopPropagation(), s.preventDefault();
          },
          onOpenAutoFocus: (s) => {
            s.preventDefault();
          },
          ...t,
          children: e.jsx("div", {
            ref: r,
            className: T(!a && "pointer-events-none"),
            children: e.jsx(G, {
              mode: "sync",
              children:
                a &&
                e.jsx(w.div, {
                  className: T(
                    "border-token-border-xlight origin-radix-popover dark:bg-token-main-surface-secondary flex overflow-clip rounded-2xl border bg-white shadow-2xl dark:border-white/5 dark:shadow-[0px_24px_64px_rgba(0,0,0,0.32)]",
                  ),
                  variants: {
                    open: {
                      scale: [0.7, 1],
                      opacity: 1,
                      transition: n ? O : N,
                    },
                    closed: {
                      opacity: 0,
                      scale: 0.8,
                      transition: n ? O : { ...N, duration: 0.2 },
                    },
                  },
                  initial: "closed",
                  animate: "open",
                  exit: "closed",
                  children: o,
                }),
            }),
          }),
        }),
      })
    );
  },
  ke = ({
    as: o = "div",
    children: i,
    className: t,
    isSelected: n = !1,
    shape: a = "rectangle",
    spacing: l = "normal",
    disableHover: r = !1,
    isLegacyStyle: s = !1,
    borderVisible: u = !1,
    visualTreatment: d = "composer-btn",
    ...p
  }) => {
    const c = o === "div" ? w.div : w.button,
      f =
        !r &&
        "hover:border-black/0 hover:bg-black/5 motion-safe:transition-colors dark:hover:bg-white/5",
      v = !r && "hover:bg-black/[0.075]! dark:hover:bg-white/10!";
    return e.jsx(c, {
      "data-is-selected": n || void 0,
      "data-pill": !0,
      className:
        d === "composer-btn"
          ? "composer-btn"
          : T(
              "relative -ms-1 flex cursor-pointer flex-row items-center justify-center gap-1 rounded-3xl border py-1 font-medium whitespace-nowrap select-none *:pointer-events-none",
              "[font-size:var(--pill-font-size,14px)]",
              l === "compact" && a === "round" && "px-1.5",
              l === "compact" && a === "rectangle" && "px-2.5",
              l === "normal" && a === "rectangle" && "px-3.5",
              s ? "min-h-9" : "min-h-8",
              u ? "border-token-border-default" : "border-transparent",
              n
                ? s
                  ? "text-token-interactive-label-accent-default bg-token-composer-blue-bg hover:bg-[#BDDCF4] focus-visible:outline-black dark:bg-[#2A4A6D] dark:text-[#48AAFF] dark:hover:bg-[#1A416A] dark:focus-visible:outline-white"
                  : T(
                      "dark:text-token-composer-blue-text bg-black/[0.045] dark:bg-white/5",
                      v,
                    )
                : s
                  ? "hover:bg-token-main-surface-secondary"
                  : T("[color:var(--pill-color,var(--text-secondary))]", f),
              t,
            ),
      ...p,
      children: i,
    });
  },
  L = ({
    children: o,
    className: i,
    isSelected: t = !1,
    onClick: n,
    tooltipLabel: a,
    ...l
  }) => {
    const { isOpen: r, openPopover: s, popoverTriggerRef: u } = F(),
      d = x.useCallback(
        (c) => {
          (c.key === "Enter" || c.key === " ") && (c.preventDefault(), s());
        },
        [s],
      ),
      p = x.useCallback(
        (c) => {
          n?.(c), !c.defaultPrevented && s();
        },
        [n, s],
      );
    return e.jsx(R, {
      label: a,
      children: e.jsx(y, {
        asChild: !0,
        onFocusCapture: (c) => {
          c.stopPropagation();
        },
        children: e.jsx(ke, {
          animate: r ? "inactive" : "active",
          as: "div",
          role: "button",
          className: T(
            "group motion-safe:[transition:border-color_0.1s_ease-in-out]",
            i,
          ),
          isSelected: t,
          "data-reasoning-popover-action": !0,
          onClick: p,
          onKeyDown: d,
          ref: u,
          tabIndex: 0,
          ...l,
          children: o,
        }),
      }),
    });
  };
function Ce(o = !1) {
  const [i, t] = x.useState(o),
    [n, a] = x.useState(!1);
  return {
    isOpen: i,
    isStartingToOpen: n,
    setIsOpen: t,
    setIsStartingToOpen: a,
  };
}
function we({
  layoutMode: o,
  initialOpen: i = !1,
  forceOpen: t = !1,
  restoreFocus: n,
  children: a,
  onClose: l,
  mode: r = "default",
  modal: s,
}) {
  const {
      isOpen: u,
      isStartingToOpen: d,
      setIsOpen: p,
      setIsStartingToOpen: c,
    } = Ce(i || t),
    f = t || u,
    v = x.useRef(null),
    m = x.useRef(null),
    k = x.useCallback(
      (g = !0) => {
        f ||
          (p(!0),
          se(),
          requestAnimationFrame(() => {
            c(!0), g && ae({ root: v.current, autoFocus: !0 });
          }));
      },
      [p, c, f],
    ),
    P = x.useCallback(() => {
      (!d && !f) ||
        (p(!1),
        c(!1),
        requestAnimationFrame(() => {
          const g = new Event("focus");
          n?.(g), g.defaultPrevented || m.current?.focus();
        }),
        l?.());
    }, [l, p, c, d, f, n]),
    j = (g) => {
      g ? k() : P();
    },
    b = { Trigger: { instance: null }, Content: { instance: null } };
  return (
    x.Children.forEach(a, (g) => {
      if (x.isValidElement(g))
        if (g.type === L || g.type === y || g.type === he) {
          if (b.Trigger.instance)
            throw new Error("Only one trigger is allowed");
          b.Trigger.instance = g;
        } else g.type === U && (b.Content.instance = g);
    }),
    e.jsx(re, {
      value: {
        closePopover: P,
        isOpen: f,
        isStartingToOpen: d,
        layoutMode: o,
        openPopover: k,
        popoverContentRef: v,
        popoverTriggerRef: m,
        mode: r,
      },
      children: e.jsxs(ie, {
        open: f,
        onOpenChange: j,
        modal: s,
        children: [b.Trigger.instance, b.Content.instance],
      }),
    })
  );
}
const Ae = y,
  Fe = L,
  Oe = U;
export {
  Ae as B,
  Oe as C,
  xe as F,
  we as P,
  Fe as T,
  he as V,
  Me as a,
  ke as b,
  ve as g,
};
//# sourceMappingURL=ovkaazdtaxjvkjeq.js.map
