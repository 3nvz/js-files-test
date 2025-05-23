import {
  f as Se,
  r,
  j as e,
  M as u,
  g as xe,
  h as ce,
} from "./lip667d8t42poxum.js";
import {
  b8 as be,
  aZ as Ce,
  cR as ve,
  is as Pe,
  it as We,
  iu as Ee,
  iv as ue,
  iw as _e,
  b9 as Re,
  ix as Te,
  bJ as Ue,
  hq as Ge,
  ek as ze,
  iy as Ve,
  iz as Fe,
  bd as w,
  be as ke,
  bb as He,
  iA as qe,
  iB as Qe,
  fv as Ke,
  iC as Je,
  iD as Ye,
  iE as Ze,
  iF as $e,
  iG as Xe,
  iH as et,
  iI as tt,
  iJ as st,
  iK as ot,
  iL as at,
  iM as nt,
  iN as it,
  iO as lt,
  iP as rt,
  iQ as dt,
  iR as ct,
  iS as ut,
  iT as gt,
  iU as mt,
  iV as ft,
  iW as ht,
  iX as pt,
  iY as Mt,
  iZ as St,
  i_ as xt,
  i$ as bt,
  j0 as Ct,
  j1 as kt,
  j2 as At,
  j3 as Nt,
  j4 as Ot,
  j5 as jt,
  j6 as yt,
  j7 as wt,
  j8 as Dt,
  P as Lt,
  y as Bt,
  H as j,
  U as ge,
  j9 as me,
  ja as It,
  jb as vt,
} from "./bek4a02po1hapmml.js";
import {
  aj as S,
  k as D,
  cU as Pt,
  c as Wt,
  B as C,
  aI as Et,
  as as _t,
  aO as fe,
  d1 as Ae,
  eV as Rt,
  eU as Tt,
  eT as Ut,
  af as Gt,
  dh as zt,
  a_ as Vt,
  ae as Ft,
  ej as Ht,
  gH as he,
  el as qt,
} from "./hgyrt6j47bbfyjrt.js";
import { b as Qt } from "./jy5dxk25zw6hpymq.js";
import { u as Kt, a as Jt, N as Yt, I as Zt } from "./kx9sak1ife31wz46.js";
import { b as $t } from "./bszrilswpsf8hziz.js";
const Xt = () => {
    const { isLoading: s, eligible: t } = be(
        Ce.hasSeenContextualAnswerGoogleSyncFinished,
      ),
      o = ve(),
      { connectionInstanceData: a, isLoading: n } = Pe({
        skip: !o,
      }),
      i = We(a?.connection_statuses ?? []);
    return s || n ? "loading" : t && o && i ? "show" : "hide";
  },
  es = ({ onClose: s }) => {
    const t = Se(),
      { markAsViewed: o } = be(Ce.hasSeenContextualAnswerGoogleSyncFinished);
    r.useEffect(() => {
      S.logEvent("Contextual Answers User Fully Synced Modal");
    }, []);
    const a = () => {
        o(), s(), _e();
      },
      n = () => {
        o(), s();
      },
      i = e.jsx(C, {
        color: "secondary",
        onClick: n,
        children: e.jsx(u, {
          id: "341zvt",
          defaultMessage: "Maybe later",
        }),
      }),
      g = e.jsx(C, {
        color: "primary",
        onClick: () => a(),
        children: e.jsx(u, {
          id: "mfjqem",
          defaultMessage: "Try now",
        }),
      });
    return e.jsx(D, {
      isOpen: !0,
      noPadding: !0,
      onClose: n,
      shouldIgnoreClickOutside: !0,
      size: "xlarge",
      type: "success",
      testId: "modal-ca-synced-nux",
      children: e.jsxs("div", {
        className: "relative px-2 py-8",
        children: [
          e.jsx(Pt, {
            onClick: n,
            className: "absolute end-0 top-0 z-10 me-2 mt-2 text-black",
          }),
          e.jsx("div", {
            className: "text-heading-3 text-center",
            children: e.jsx(u, {
              id: "cB19NT",
              defaultMessage:
                "Ask ChatGPT anything,{br}even about information in your Google Drive.",
              values: {
                br: e.jsx("br", {}),
              },
            }),
          }),
          e.jsx("div", {
            className:
              "border-token-border-light text-token-text-tertiary text-body-small-regular mx-auto mt-5 mb-5 w-max rounded-4xl border px-6 py-3 text-center italic",
            children: e.jsx(u, {
              id: "6cGGS5",
              defaultMessage: "What's the latest status on project widgets?",
            }),
          }),
          e.jsxs("div", {
            className: "flex justify-center",
            children: [
              e.jsx(y, {
                Logo: Ee,
                title: t.formatMessage({
                  id: "E7Iqah",
                  defaultMessage: "Project Widgets Budget",
                }),
                className:
                  "z-10 translate-x-[2.5rem] translate-y-[2rem] rotate-[-4deg]",
              }),
              e.jsx(y, {
                Logo: ue,
                title: t.formatMessage({
                  id: "cVbcSP",
                  defaultMessage: "Project Widgets PRD",
                }),
                className: "z-20",
              }),
              e.jsx(y, {
                Logo: ue,
                title: t.formatMessage({
                  id: "QbnI4s",
                  defaultMessage: "Project Widgets Presentation",
                }),
                className:
                  "z-10 translate-x-[-2.5rem] translate-y-[2rem] rotate-[4deg]",
              }),
            ],
          }),
          e.jsxs("div", {
            className: "mt-12 flex justify-center gap-3",
            children: [i, g],
          }),
        ],
      }),
    });
  },
  y = ({ Logo: s, title: t, className: o }) =>
    e.jsxs("div", {
      className: Wt(
        "border-token-border-light bg-token-bg-primary w-[14rem] rounded-2xl border p-3 shadow-sm",
        o,
      ),
      children: [
        e.jsxs("div", {
          className: "mb-3 flex items-center",
          children: [
            e.jsx(s, {}),
            e.jsx("span", {
              className:
                "text-body-small-regular text-token-interactive-label-accent-default ms-2",
              children: t,
            }),
          ],
        }),
        e.jsx("div", {
          children: e.jsx(Qt, {
            lines: 5,
            size: "sm",
          }),
        }),
      ],
    }),
  pe = "has-dismissed-welcome-back-modal",
  Ne = () => {
    const [s, t] = r.useState(() => sessionStorage.getItem(pe) != null),
      { layer: o } = Et("3637408529"),
      a = o.get("is_no_auth_welcome_back_modal_enabled", !1),
      n = Re(),
      { isUnauthenticated: i, isLoading: g } = _t(),
      d = Te(),
      k = $t(),
      x = () => {
        t(!0), sessionStorage.setItem(pe, "true");
      };
    return g
      ? {
          isLoading: !0,
          isOpen: null,
          onClose: null,
        }
      : {
          isLoading: !1,
          isOpen: i && a && !s && d && !n && !k,
          onClose: x,
        };
  },
  ts = ({ onClose: s }) => {
    const t = Ue(),
      o = Ge(),
      a = ze(M.signUpCta),
      n = o ? "center" : "bottom",
      { isOpen: i, onClose: g } = Ne();
    return (
      r.useEffect(() => {
        i &&
          (S.logEvent("No Auth Welcome Back Modal Shown"),
          fe.logEvent("chatgpt_no_auth_welcome_back_modal_shown"));
      }, [i]),
      i
        ? e.jsx(D, {
            testId: "modal-no-auth-welcome-back",
            isOpen: !0,
            onClose: Ae,
            shouldIgnoreClickOutside: !0,
            showCloseButton: !1,
            type: "success",
            noPadding: !0,
            size: "custom",
            className: "max-w-[373px] sm:max-w-[400px]",
            position: n,
            children: e.jsxs("div", {
              className:
                "flex flex-col items-center justify-center px-6 py-8 sm:p-10",
              children: [
                e.jsx("p", {
                  className: "mb-1 text-center text-2xl font-semibold",
                  children: e.jsx(u, {
                    ...M.title,
                  }),
                }),
                e.jsx("p", {
                  className:
                    "text-token-text-secondary mb-6 text-center text-lg",
                  children: e.jsx(u, {
                    ...M.subtitle,
                  }),
                }),
                e.jsx(C, {
                  as: "button",
                  size: "large",
                  color: "primary",
                  fullWidth: !0,
                  className: "mb-2 sm:mb-3",
                  "data-testid": "welcome-login-button",
                  onClick: () => {
                    t({
                      authType: "login",
                      callback: (d) => {
                        S.logLogInButtonClicked({
                          provider: d,
                          location: "No Auth Welcome Back Modal",
                        });
                      },
                    });
                  },
                  children: e.jsx(u, {
                    ...M.logInCta,
                  }),
                }),
                e.jsx(C, {
                  as: "button",
                  size: "large",
                  color: "secondary",
                  fullWidth: !0,
                  className: "mb-5",
                  onClick: () => {
                    t({
                      authType: "signup",
                      callback: (d) => {
                        S.logSignUpButtonClicked({
                          provider: d,
                          location: "No Auth Welcome Back Modal",
                        });
                      },
                    });
                  },
                  children: e.jsx(u, {
                    ...a,
                  }),
                }),
                e.jsx("a", {
                  href: "#",
                  className:
                    "text-token-text-secondary cursor-pointer font-semibold underline sm:text-sm",
                  onClick: (d) => {
                    d.preventDefault(),
                      S.logEvent(
                        "No Auth Welcome Modal Stay Logged Out Link Clicked",
                      ),
                      fe.logEvent(
                        "chatgpt_no_auth_welcome_back_modal_stay_logged_out_link_clicked",
                      ),
                      s(),
                      g();
                  },
                  "data-testid": "dismiss-welcome",
                  children: e.jsx(u, {
                    ...M.stayLoggedOutLink,
                  }),
                }),
              ],
            }),
          })
        : null
    );
  },
  M = xe({
    title: {
      id: "NoAuthWelcomeBackModal.title",
      defaultMessage: "Welcome back",
    },
    subtitle: {
      id: "7WQi5y",
      defaultMessage:
        "Log in or sign up to get smarter responses, upload files and images, and more.",
    },
    signUpCta: {
      id: "NoAuthWelcomeBackModal.signUpCta",
      defaultMessage: "Sign up",
    },
    logInCta: {
      id: "NoAuthWelcomeBackModal.logInCta",
      defaultMessage: "Log in",
    },
    stayLoggedOutLink: {
      id: "NoAuthWelcomeBackModal.stayLoggedOut",
      defaultMessage: "Stay logged out",
    },
  }),
  ss = ({ onClose: s }) => {
    const t = Se(),
      o = w(ke.isBusinessWorkspace),
      a = w((i) => i.currentWorkspace),
      n = o
        ? t.formatMessage(Me.workspaceWelcome, {
            workspaceName: a?.name,
          })
        : "ChatGPT";
    return e.jsx(D, {
      testId: "modal-onboarding",
      isOpen: !0,
      onClose: Ae,
      type: "success",
      title: n,
      size: "custom",
      noPadding: !0,
      className: "max-w-3xl",
      description: t.formatMessage(Me.personalOnboardingSubheading),
      children: e.jsx(It, {
        onClose: s,
        scope: vt.Personal,
      }),
    });
  },
  os = ({ onClose: s }) => {
    const t = qt.useStore();
    return (
      r.useEffect(
        () => (
          t.setOnCloseSideEffect(s),
          t.setManualVisibility(!0),
          () => {
            t.setManualVisibility(!1);
          }
        ),
        [s, t],
      ),
      null
    );
  };

function us({ clientThreadId: s }) {
  const [t, o] = r.useState(0),
    { hasSeenOnboardingDate: a } = Ve(),
    { hasSeenTeamOwnerOnboardingDate: n } = Fe(),
    i = w(ke.isBusinessWorkspace),
    [g, d] = r.useState(!1),
    k = ce(),
    x = He(k),
    { data: Oe, isPending: je, isEnabled: ye } = qe(),
    L = Qe(Oe, je && ye),
    B = Rt(),
    I = Tt(),
    v = Ut(),
    [we, A] = Gt(s, (l) => [!l || l.isLoading, l?.conversationOrigin]),
    N = we && !!s,
    { data: c, isError: p } = zt(),
    O = Vt(c),
    f = c != null,
    P = c && c?.accountItems.length > 1 && c.currentAccountId == null,
    W = c?.accountItems.some((l) => l.isPersonalAccount()),
    E =
      !!c?.accountItems &&
      c.accountItems.length > 0 &&
      c.accountItems.every(({ canAccessWithCurrentSession: l }) => !l),
    { eligible: _, isLoading: R } = Ke(),
    { value: T } = Ft("1542198993"),
    { punchOutRequireLoginInfo: U } = Je(),
    { state: G } = Ye(),
    { isOpen: z, isLoading: V } = Ze(),
    { isOpen: F, isLoading: H } = $e(),
    { isOpen: q, isLoading: Q } = Xe(),
    { isOpen: K, isLoading: J } = Ne(),
    { state: Y } = et(),
    Z = tt(),
    $ = Kt(),
    X = Jt(),
    ee = st(),
    te = ot(),
    se = Xt(),
    oe = at(),
    ae = nt(),
    { isOpen: ne, isLoading: ie } = it(),
    De = lt(s),
    { shouldShowCookieBanner: le, isCookieConsentBannerLoading: re } = Ht(),
    h = r.useMemo(
      () => [
        {
          Component: rt,
          getModalState: () => (U ? "show" : "hide"),
          isDeferrable: !1,
        },
        {
          Component: dt,
          getModalState: () => G,
          isDeferrable: !1,
        },
        {
          Component: ct,
          getModalState: () => Y,
          isDeferrable: !1,
        },
        {
          Component: ut,
          getModalState: () => (ie ? "loading" : ne ? "show" : "hide"),
          isDeferrable: !1,
        },
        {
          Component: Yt,
          getModalState: () => X,
          isDeferrable: !0,
        },
        {
          Component: gt,
          getModalState: () =>
            V || N ? "loading" : A === he.APPLE ? "hide" : z ? "show" : "hide",
          isDeferrable: !0,
        },
        {
          Component: ts,
          getModalState: () =>
            J || N ? "loading" : A === he.APPLE ? "hide" : K ? "show" : "hide",
          isDeferrable: !0,
        },
        {
          Component: os,
          getModalState: () => (re ? "loading" : le ? "show" : "hide"),
          isDeferrable: !1,
        },
        {
          Component: ss,
          getModalState: () =>
            i || x
              ? "hide"
              : a === null
                ? "loading"
                : a === !1
                  ? "show"
                  : "hide",
          isDeferrable: !0,
        },
        {
          Component: mt,
          getModalState: () =>
            p ? "hide" : P ? "show" : f ? "hide" : "loading",
          isDeferrable: !1,
        },
        {
          Component: ft,
          getModalState: () =>
            B !== null ? "show" : p || f ? "hide" : "loading",
          isDeferrable: !1,
        },
        {
          Component: ht,
          getModalState: () =>
            I !== null ? "show" : p || f ? "hide" : "loading",
          isDeferrable: !1,
        },
        {
          Component: pt,
          getModalState: () =>
            v != null ? "show" : p || f ? "hide" : "loading",
          isDeferrable: !1,
        },
        {
          Component: Mt,
          getModalState: () => (f ? (E ? "show" : "hide") : "loading"),
          isDeferrable: !1,
        },
        {
          Component: St,
          getModalState: () => (H ? "loading" : F ? "show" : "hide"),
          isDeferrable: !1,
        },
        {
          Component: xt,
          getModalState: () => (Q ? "loading" : q ? "show" : "hide"),
          isDeferrable: !1,
        },
        {
          Component: bt,
          getModalState: () => "hide",
          isDeferrable: !1,
        },
        {
          Component: Ct,
          getModalState: () =>
            !O?.isTeam() || !O?.isOwnerOfAccount() || !W
              ? "hide"
              : !f || n === null
                ? "loading"
                : n === !1
                  ? "show"
                  : "hide",
          isDeferrable: !1,
        },
        {
          Component: kt,
          getModalState: () =>
            i ? (a === null ? "loading" : a === !1 ? "show" : "hide") : "hide",
          isDeferrable: !0,
        },
        {
          Component: At,
          getModalState: () => (R ? "loading" : _ && T ? "show" : "hide"),
          isDeferrable: !1,
        },
        {
          Component: Nt,
          getModalState: () => L,
          isDeferrable: !1,
        },
        {
          Component: Ot,
          getModalState: () => Z,
          isDeferrable: !1,
        },
        {
          Component: (l) =>
            s &&
            e.jsx(Lt, {
              clientThreadId: s,
              children: e.jsx(Zt, {
                clientThreadId: s,
                ...l,
              }),
            }),
          getModalState: () => $,
          isDeferrable: !1,
        },
        {
          Component: es,
          getModalState: () => se,
          isDeferrable: !1,
        },
        {
          Component: jt,
          getModalState: () => ee,
          isDeferrable: !1,
        },
        {
          Component: yt,
          getModalState: () => te,
          isDeferrable: !1,
        },
        {
          Component: wt,
          getModalState: () => oe,
          isDeferrable: !0,
        },
        {
          Component: Dt,
          getModalState: () => ae,
          isDeferrable: !1,
        },
      ],
      [
        U,
        G,
        Y,
        ie,
        ne,
        X,
        V,
        N,
        A,
        z,
        J,
        K,
        re,
        le,
        i,
        x,
        a,
        p,
        P,
        f,
        B,
        I,
        v,
        E,
        H,
        F,
        Q,
        q,
        O,
        W,
        n,
        R,
        _,
        T,
        L,
        Z,
        s,
        $,
        se,
        ee,
        te,
        oe,
        ae,
      ],
    )[t],
    Le = g || De;
  let m;
  h &&
    (h.isDeferrable && Le
      ? (m = "hide")
      : h.Component
        ? (m = h.getModalState())
        : (m = "hide")),
    r.useEffect(() => {
      m === "hide" && o(t + 1);
    }, [t, m]);
  const { pathname: b } = ce(),
    de = r.useRef(b);
  if (
    (r.useEffect(() => {
      de.current !== b && ((de.current = b), o(0));
    }, [b]),
    r.useEffect(() => {
      const l = m === "show",
        Ie = Bt.getState().activeModals.has(j.BlockingInitialComponent);
      l !== Ie &&
        (l
          ? ge.openModal(j.BlockingInitialComponent)
          : ge.closeModal(j.BlockingInitialComponent));
    }, [m]),
    h == null)
  )
    return (
      me.trackNamespace(me.NS_COMPOSER),
      e.jsx("span", {
        "data-testid": "blocking-initial-modals-done",
        className: "hidden",
      })
    );
  if (m !== "show") return null;
  const Be = h.Component;
  return e.jsx(Be, {
    onClose: () => {
      d(!0), o((l) => l + 1);
    },
  });
}
const Me = xe({
  workspaceWelcome: {
    id: "BlockingInitialModals.workspaceWelcome",
    defaultMessage: "Welcome to the {workspaceName} workspace",
  },
  personalOnboardingSubheading: {
    id: "BlockingInitialModals.personalOnboardingSubheading",
    defaultMessage: "Tips for getting started",
  },
});
export { us as B };
//# sourceMappingURL=b5uo0f0fgo5ycbhb.js.map
