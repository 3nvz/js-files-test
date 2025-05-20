const __vite__mapDeps = (
  i,
  m = __vite__mapDeps,
  d = m.f ||
    (m.f = [
      "assets/ggwchwiohii07477.js",
      "assets/hgyrt6j47bbfyjrt.js",
      "assets/lip667d8t42poxum.js",
      "assets/root-nsehtib5.css",
      "assets/gfnsbm99dy8f9dle.js",
      "assets/bek4a02po1hapmml.js",
      "assets/conversation-small-k5k9c71c.css",
      "assets/gkp5860wafdf24mv.js",
      "assets/jwvxkjptpstk4ej7.js",
      "assets/mrja6mbtdpn27l02.js",
      "assets/jbvbchjopufbzcer.js",
      "assets/fk5wemdfypmbezuh.js",
      "assets/hxt6ipx4btplutlt.js",
      "assets/j4mmgxghl8b1mh10.js",
      "assets/kx9sak1ife31wz46.js",
      "assets/bszrilswpsf8hziz.js",
      "assets/iamkd7uovamzrioo.js",
      "assets/dh1349twprpizmeg.js",
      "assets/jy5dxk25zw6hpymq.js",
      "assets/ovkaazdtaxjvkjeq.js",
      "assets/nfdnm3mrc4aegs7e.js",
      "assets/j5maet6kh5o0bu61.js",
      "assets/accwyue32xah1z1m.js",
      "assets/gzhfufyiohn83kuo.js",
      "assets/jcf462ypc5hntqqf.js",
      "assets/bvff6uri7zkt0ua1.js",
      "assets/jymgi2wgtuaf5phu.js",
      "assets/eizg3cbui1uc8rqy.js",
      "assets/dcjog7s9l4t4gioj.js",
      "assets/fqs445c0g1b7r5ae.js",
      "assets/f4f0xx2jdimom9gd.js",
      "assets/hzzn4jce92ayb7my.js",
      "assets/kaaofcmgu5bddwgx.js",
      "assets/b5uo0f0fgo5ycbhb.js",
      "assets/ew9hb9iurj3kpkmu.js",
      "assets/l23elnwv4ei0qjhe.js",
      "assets/c47vptqflf6emf1m.js",
      "assets/lug0xrczrlz6hmcb.js",
      "assets/b3f39kp9psoxk5co.js",
      "assets/nhyrayi3co1h1g32.js",
      "assets/d18ohowainhefjl7.js",
      "assets/cn71vg7u1hry7wvg.js",
      "assets/d7tdwugs2quxc5yt.js",
      "assets/ltfattuf7qy8hfqt.js",
      "assets/e5qbxqli4yfx49qs.js",
      "assets/dltfzjy78tq82bxb.js",
      "assets/gf4yyo64dwfii22a.js",
      "assets/g4tl5lt9yqf20m4s.js",
    ]),
) => i.map((i) => d[i]);
import {
  aO as L,
  aj as X,
  dJ as oe,
  dj as ie,
  X as R,
  _ as F,
  de as D,
  b9 as O,
  m as J,
  as as re,
  cv as A,
  W as ne,
  fx as B,
  b as $,
  gP as le,
  bC as de,
  gQ as ce,
  gR as ue,
  cW as G,
  gS as me,
  eA as fe,
  eY as H,
  g as pe,
  t as ge,
  fV as he,
  aX as xe,
  aL as ve,
  ce as je,
} from "./hgyrt6j47bbfyjrt.js";
import {
  r,
  j as e,
  a6 as Z,
  d as U,
  a as ee,
  f as E,
  a5 as _,
  h as K,
  p as be,
} from "./lip667d8t42poxum.js";
import {
  k_ as ye,
  k$ as te,
  l0 as we,
  l1 as Ce,
  l2 as Ie,
  l3 as Q,
  d7 as Pe,
  dd as ke,
  dc as q,
  de as _e,
  e9 as Ee,
  gV as Me,
  l4 as Te,
  bT as Se,
  bU as Ne,
  bV as Re,
  bn as V,
  l5 as Fe,
  ew as Ae,
  P as Oe,
  l6 as Ve,
  hK as ze,
  dj as z,
  dk as W,
  l7 as Le,
  bd as Ue,
  be as De,
  l8 as Be,
  l9 as Ge,
  la as He,
  lb as Ke,
  lc as Qe,
  ld as qe,
  bJ as We,
  le as Ye,
  lf as Xe,
  lg as Je,
  fg as $e,
  lh as Ze,
  F as et,
  li as tt,
  lj as st,
  lk as at,
  T as Y,
  ll as ot,
  lm as it,
  ln as rt,
  lo as nt,
} from "./bek4a02po1hapmml.js";
import { c as lt, b as dt } from "./j5maet6kh5o0bu61.js";
import { B as ct } from "./b5uo0f0fgo5ycbhb.js";
import { u as ut, d as mt } from "./ew9hb9iurj3kpkmu.js";
import { a as ft, b as pt, c as gt } from "./jymgi2wgtuaf5phu.js";
import { u as ht, C as xt, a as vt } from "./mrja6mbtdpn27l02.js";
import { a as jt } from "./bszrilswpsf8hziz.js";
import { C as bt } from "./l23elnwv4ei0qjhe.js";
import { M as yt } from "./cn71vg7u1hry7wvg.js";
import { K as wt } from "./dltfzjy78tq82bxb.js";
function Ct({ clientThreadId: t }) {
  const s = ye((i) => i.notifications),
    a = r.useRef(new Set());
  return (
    r.useEffect(() => {
      s
        .filter((o) => o.clientThreadId === void 0 || t === o.clientThreadId)
        .map((o) => o.id)
        .filter((o) => o !== void 0)
        .forEach((o) => te(o)),
        s.forEach((o) => {
          o.id &&
            !a.current.has(o.id) &&
            (L.logEvent("chatgpt_notification_shown"),
            X.logEvent("Notifications: Notification Shown to User"),
            a.current.add(o.id));
        });
    }, [t, s]),
    s.length === 0 || oe
      ? null
      : e.jsx("div", {
          className:
            "pointer-events-auto fixed end-4 top-8 z-100 my-2 flex max-h-[90vh] flex-col-reverse space-y-2 space-y-reverse overflow-y-auto px-2 py-4",
          children: e.jsx(Z, {
            children: s.map((i) => e.jsx(Pt, { ...i }, i.id)),
          }),
        })
  );
}
function It({ notification: t }) {
  return t.icon
    ? e.jsx(Ce, {
        size: "medium",
        className:
          "border-token-secondary bg-token-main-surface-primary text-token-text-primary rounded-full border",
        IconComponent: t.icon,
      })
    : e.jsx(Ie, {
        iconName: "openai",
        size: "medium",
        className:
          "border-token-secondary bg-token-main-surface-primary text-token-text-primary rounded-full border",
      });
}
function Pt({ ...t }) {
  const s = U(),
    a = ee(),
    i = E(),
    o = ie(t.clientThreadId),
    c = () => {
      L.logEvent("chatgpt_notification_clicked"),
        X.logEvent("Notifications: User Clicked Notification"),
        t.onClick != null ? t.onClick() : o && we(s, a, o),
        t.id && te(t.id);
    };
  return e.jsxs(_.div, {
    onClick: c,
    className:
      "border-token-border-default bg-token-main-surface-primary z-100 inline-flex w-80 cursor-pointer items-center justify-start gap-2.5 rounded-2xl border px-3 py-3 align-middle shadow-lg",
    initial: { opacity: 0, x: 320 },
    animate: { opacity: 1, x: 0 },
    exit: { opacity: 0, x: 320 },
    transition: { duration: 0.5 },
    children: [
      e.jsx(It, { notification: t }),
      e.jsxs("div", {
        className:
          "inline-flex w-full shrink grow basis-0 flex-col items-start justify-start overflow-hidden",
        children: [
          e.jsx("div", {
            className:
              "text-token-text-primary w-full truncate text-sm font-medium",
            children:
              t.title ??
              i.formatMessage({ id: "mpXAeu", defaultMessage: "New chat" }),
          }),
          t.subtitle &&
            e.jsx("div", {
              className: "text-token-text-tertiary w-full truncate text-sm",
              children: t.subtitle,
            }),
          t.payload?.display_image_url &&
            e.jsx("img", {
              className: "mt-2 h-12 w-12 rounded-xs",
              src: t.payload.display_image_url,
              alt: t.payload.image_alt,
            }),
        ],
      }),
    ],
  });
}
const kt = R(async () =>
  F(
    () => import("./ggwchwiohii07477.js"),
    __vite__mapDeps([
      0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20,
      21, 22, 23, 24, 25, 26, 27, 28,
    ]),
  ).then((t) => t.ImageGenNewEditor),
);
function _t({ postWithProfile: t, clientThreadId: s, closeModal: a }) {
  return t.post.attachments[0]?.kind === "media_generation"
    ? e.jsx(Et, { postWithProfile: t, clientThreadId: s, closeModal: a })
    : t.post.attachments[0]?.kind === "message_slice"
      ? e.jsx(Mt, { postWithProfile: t, closeModal: a })
      : null;
}
function Et({ postWithProfile: t, clientThreadId: s, closeModal: a }) {
  const i = r.useRef(null),
    [o, c] = r.useState(!1),
    [h, x] = r.useState(!1),
    n = U(),
    { post: m } = t,
    p = m.attachments[m.attachments.length - 1],
    M = {
      url: p.url,
      content_type: D.ImageAssetPointer,
      asset_pointer: p.asset_pointer ?? Q(p.id),
      size_bytes: 0,
      width: p.width,
      height: p.height,
    },
    v = E(),
    g = Pe(),
    T = O(s),
    j = J(),
    y = r.useCallback(
      (u) => g.getState().files.find((l) => l.tempId === u),
      [g],
    ),
    w = p.url,
    C = r.useCallback(
      async (u) => {
        if (i.current) {
          const l = await i.current,
            f = l ? y(l?.tempId) : null;
          if (f) return f;
        }
        return (
          (i.current = fetch(u)
            .then((l) => l.blob())
            .then((l) => {
              const f = new File([l], "image.png", { type: "image/png" }),
                b = ke(f);
              return q
                .uploadFile(g, b, f, _e.Multimodal, [f.type], v, j)
                .then(() => {
                  const d = y(b);
                  return d && d.status === Ee.Ready && d.fileId ? d : null;
                });
            })),
          i.current
        );
      },
      [g, v, j, y],
    ),
    { onRequestCompletion: I } = ht(),
    { isUnauthenticated: P } = re(),
    S = r.useCallback(
      async (u) => {
        if (!(!u.promptMessage || P)) {
          x(!0);
          try {
            const l = await C(w);
            if (!l || !l.fileId || !l.fileSpec) return;
            const f = [
                {
                  content_type: D.ImageAssetPointer,
                  asset_pointer: Q(l.fileId),
                  size_bytes: l.fileSpec.size,
                  width: p.width,
                  height: p.height,
                },
                ...(u.promptMessage.content.content_type === A.MultimodalText ||
                u.promptMessage.content.content_type === A.Text
                  ? u.promptMessage.content.parts
                  : []),
              ],
              b = {
                ...u,
                promptMessage: {
                  ...u.promptMessage,
                  content: { content_type: A.MultimodalText, parts: f },
                },
                extraStreamParams: {
                  ...(u.extraStreamParams ?? {}),
                  continueFromSharedPostId: m.id,
                },
              };
            I(b), a(), q.reset(g);
          } catch {
            j.danger(
              v.formatMessage({
                id: "postReceiverModal.editImageError",
                defaultMessage: "Failed to edit the image",
              }),
            );
          } finally {
            x(!1);
          }
        }
      },
      [p.height, p.width, C, I, g, w, a, P, v, j, m.id],
    ),
    N = e.jsx(se, {
      post: m,
      setIsReportModalOpen: c,
      closeModal: a,
      additionalButtons: e.jsx(ft, { imageAsset: M, serverThreadId: T }),
    });
  return e.jsxs("div", {
    className:
      "bg-token-main-surface-primary absolute start-0 end-0 top-0 bottom-0 h-full w-full",
    children: [
      e.jsx(Me, {
        children: e.jsx(kt, {
          image: M,
          isLoadingNewImage: !1,
          clientThreadId: s,
          onClose: () => {
            a(), n("/", { replace: !0 });
          },
          onRequestCompletion: S,
          editorControls: N,
          messageId: m.id,
          footer: h ? e.jsx(Tt, {}) : null,
        }),
      }),
      o && e.jsx(ae, { post: m, onClose: () => c(!1) }),
    ],
  });
}
function Mt({ postWithProfile: t, closeModal: s }) {
  const [a, i] = r.useState(!1),
    { post: o } = t;
  return e.jsxs("div", {
    className:
      "bg-token-main-surface-primary absolute start-0 end-0 top-0 bottom-0 h-full w-full",
    children: [
      e.jsx(se, { post: o, setIsReportModalOpen: i, closeModal: s }),
      e.jsx(Te, { attachments: o.attachments, variant: "fullscreen" }),
      a && e.jsx(ae, { post: o, onClose: () => i(!1) }),
    ],
  });
}
function se({
  post: t,
  setIsReportModalOpen: s,
  closeModal: a,
  additionalButtons: i,
}) {
  const o = U(),
    c = E(),
    h = J(),
    x = r.useCallback(async () => {
      if (
        window.confirm(
          c.formatMessage({
            id: "postReceiverModal.deletePostConfirmation",
            defaultMessage: "Are you sure you want to delete this post?",
          }),
        )
      )
        try {
          await $.safeDelete("/share/post/{post_id}", {
            parameters: { path: { post_id: t.id } },
          }),
            o("/", { replace: !0 });
        } catch {
          h.danger(
            c.formatMessage({
              id: "postReceiverModal.deletePostError",
              defaultMessage: "Failed to delete the post",
            }),
          );
        }
    }, [t.id, c, h, o]);
  return e.jsx(e.Fragment, {
    children: e.jsxs(_.div, {
      className: "flex h-16 w-full px-2 sm:px-4",
      ...V,
      children: [
        e.jsx("div", {
          className: "flex items-center justify-self-start text-start",
          children: e.jsx(pt, {
            onClose: () => {
              a(), o("/", { replace: !0 });
            },
          }),
        }),
        e.jsx("div", {
          className:
            "flex w-full flex-1 flex-col items-center justify-center justify-self-stretch",
          children: e.jsx(Fe, {
            areButtonsFullWidth: !0,
            post: t,
            setIsReportModalOpen: s,
          }),
        }),
        e.jsxs("div", {
          className: "flex items-center justify-self-end text-end",
          children: [
            t.permissions.can_delete &&
              e.jsx(gt, {
                tooltip: c.formatMessage({
                  id: "postReceiverModal.deletePost",
                  defaultMessage: "Delete",
                }),
                onClick: x,
                children: e.jsx(Ae, {}),
              }),
            i,
          ],
        }),
      ],
    }),
  });
}
function Tt() {
  const t = E();
  return e.jsxs(_.div, {
    className:
      "shadow-token-border-default pointer-events-none inline-flex items-center justify-center gap-1.5 self-center rounded-[16px] px-3.5 py-2 text-sm shadow-lg",
    transition: { duration: 0.3, ease: "easeInOut" },
    initial: { opacity: 0 },
    animate: { opacity: 1 },
    exit: { opacity: 0 },
    children: [
      e.jsx(ne, {}),
      e.jsx("span", {
        children: t.formatMessage({
          id: "postReceiverModal.preparingImage",
          defaultMessage: "Preparing image...",
        }),
      }),
    ],
  });
}
function ae({ post: t, onClose: s }) {
  const { data: a } = Se(B.Post),
    i = E(),
    o = Ne(i, t.id, B.Post);
  if (a == null) return null;
  const c = `Report ${t.text ?? "Post"}`;
  return e.jsx(Re, {
    reasons: a.reasons,
    submitReport: o,
    title: c,
    onClose: s,
    header: a.header,
    subHeader: a.header_explanation,
  });
}
function St({ clientThreadId: t }) {
  const s = ut();
  return e.jsxs(e.Fragment, {
    children: [s && e.jsx(mt, {}), e.jsx(Nt, { clientThreadId: t })],
  });
}
function Nt({ clientThreadId: t }) {
  const s = r.useContext(jt),
    [a, i] = r.useState(!!s?.postWithProfile);
  return !s?.postWithProfile || !a
    ? null
    : e.jsx(Oe, {
        clientThreadId: t,
        children: e.jsx(_t, {
          clientThreadId: t,
          postWithProfile: s.postWithProfile,
          closeModal: () => i(!1),
        }),
      });
}
const Rt = 450;
function Ft({
  children: t,
  clientThreadId: s,
  isOpen: a,
  onClose: i,
  type: o,
}) {
  return e.jsx(Z, {
    children:
      a &&
      e.jsx(le, {
        children: e.jsx(Ve.Provider, {
          value: { isEmbeddedInFocusedView: !0, type: o },
          children: e.jsxs("div", {
            className: "absolute inset-0 flex flex-col",
            children: [
              e.jsx(_.div, {
                className: "bg-token-main-surface-secondary h-full w-full",
                ...V,
              }),
              e.jsxs("div", {
                className: "absolute inset-0 flex",
                children: [
                  e.jsx("div", {
                    className: "grow overflow-auto",
                    children: t,
                  }),
                  e.jsx(_.div, {
                    className:
                      "border-token-border-medium bg-token-main-surface-primary relative shrink-0 border-s",
                    style: { width: Rt },
                    ...V,
                    children: e.jsx("div", {
                      className: "h-[100vh] pb-4",
                      children: e.jsx(
                        yt,
                        {
                          clientThreadId: s,
                          hideHeader: !0,
                          hideDisclaimer: !0,
                          messagesVerticalAlign: "bottom",
                        },
                        s,
                      ),
                    }),
                  }),
                ],
              }),
            ],
          }),
        }),
      }),
  });
}
const At = R(() =>
    F(
      () => import("./fqs445c0g1b7r5ae.js"),
      __vite__mapDeps([29, 1, 2, 3, 5, 6, 30, 31]),
    ),
  ),
  Ot = R(() =>
    F(
      () => import("./kaaofcmgu5bddwgx.js"),
      __vite__mapDeps([
        32, 1, 2, 3, 5, 6, 21, 4, 7, 8, 33, 18, 14, 9, 15, 13, 34, 22, 23, 16,
        26, 27, 28, 35, 36, 37, 38, 39, 40, 41, 10, 11, 12, 17, 19, 20, 24, 25,
        42, 43, 44, 45,
      ]),
    ).then((t) => t.ImageEditor),
  );
function Vt({ clientThreadId: t }) {
  const s = ze();
  r.useEffect(() => {
    z.close();
  }, [t]);
  let a;
  return (
    s?.type === W.ADAVisualization
      ? (a = e.jsx(At, { clientThreadId: t, visualization: s.visualization }))
      : s?.type === W.Image &&
        (a = e.jsx(
          Ot,
          {
            clientThreadId: t,
            messageId: s.messageId,
            image: s.image,
            allImages: s.allImages,
          },
          s.image.asset_pointer,
        )),
    e.jsx(Ft, {
      clientThreadId: t,
      isOpen: s != null,
      onClose: z.close,
      type: s?.type,
      children: a,
    })
  );
}
var zt = {};
const Lt = R(() =>
  F(
    () => import("./gf4yyo64dwfii22a.js"),
    __vite__mapDeps([
      46, 2, 1, 3, 9, 5, 6, 4, 7, 8, 21, 41, 34, 22, 23, 16, 13, 14, 15, 10, 11,
      12, 17, 18, 19, 20, 24, 25, 42, 43, 44, 47,
    ]),
  ),
);
function Zt(t) {
  const { urlThreadId: s, clientThreadId: a, prefetchSearch: i } = t,
    o = de(),
    c = ce(),
    h = K(),
    [x] = be(),
    [n, m] = r.useState(() => {
      if (s !== void 0) {
        const d = s;
        return ue(d) ?? d;
      }
      return a !== void 0 ? a : G();
    });
  s !== void 0 && n !== s && (O(n) === s || m(s));
  const p = Le(K());
  r.useEffect(() => {
    s === void 0 && O(n) !== void 0 && m(G());
  }, [s, n, p]);
  const M = Ue(De.workspaceId),
    { eligible: v, isLoading: g, markAsViewed: T } = Be(),
    j = Ge(),
    { eligible: y, isLoading: w, markAsViewed: C } = He(),
    I = Ke(),
    { eligible: P, isLoading: S, markAsViewed: N } = Qe(),
    u = qe(),
    l = We();
  r.useEffect(() => {
    me(!0).then((d) => {
      d.force_login && l({ authType: "login" }),
        Ye.initializeAndGatherData(d),
        fe.initializeAndGatherData(d);
    });
  }, [l]),
    r.useEffect(() => {
      const d = x.get(Xe) === "true",
        k = x.get(Je) === "true";
      k !== c && H.setIsAnonModeEnabled(k),
        o !== d && H.setIsTemporaryChatEnabled(d);
    }, [o, c, x]),
    r.useEffect(() => {
      h.state?.focusObject && z.setFocusedObject(h.state.focusObject);
    }, [h.state?.focusObject]),
    r.useEffect(() => {
      !g && v && (T(), j());
    }, [v, g, T, j]),
    r.useEffect(() => {
      !w && y && (C(), I());
    }, [y, w, C, I]),
    r.useEffect(() => {
      !S && P && (N(), u());
    }, [P, S, N, u]),
    lt(n);
  const f = ee(),
    b = pe();
  return (
    r.useEffect(() => {
      ge(b) &&
        L.checkGate("1661641186") &&
        f.fetchQuery({
          queryKey: ["recent", "images", "bootstrap"],
          queryFn: () => $.safeGet("/images/bootstrap", {}),
        });
    }, [f, b]),
    r.useEffect(
      () =>
        he(je, {
          completionFinished: (d) => {
            if (d.serverThreadId != null && !o) {
              const k = xe(d.serverThreadId)?.mode;
              k?.kind === ve.GizmoInteraction &&
                $e.handleGizmoInteracted(f, k.gizmo_id);
            }
          },
        }),
      [o, f],
    ),
    e.jsx(Ze.Provider, {
      value: null,
      children: e.jsx(et, {
        children: e.jsxs(tt, {
          clientThreadId: n,
          children: [
            e.jsxs(xt, {
              clientThreadId: n,
              children: [
                e.jsx(ct, { clientThreadId: n }, M),
                e.jsx(Ut, { clientThreadId: n, setClientThreadId: m }),
                e.jsx(wt, {}),
                e.jsx(st, {}),
                e.jsx(at, {}),
                e.jsx(vt, {
                  clientThreadId: n,
                  setClientThreadId: m,
                  prefetchSearchPromises: i,
                  children: e.jsxs(Y, {
                    clientThreadId: n,
                    children: [
                      e.jsx(ot, {}),
                      e.jsx(bt, {
                        urlThreadId: s,
                        clientThreadId: n,
                        setClientThreadId: m,
                      }),
                      e.jsx(St, { clientThreadId: n }),
                    ],
                  }),
                }),
              ],
            }),
            e.jsx(Y, {
              clientThreadId: n,
              children: e.jsx(Vt, { clientThreadId: n }),
            }),
            e.jsx(it, { clientThreadId: n }),
            e.jsx(rt, {}),
            e.jsx(Ct, { clientThreadId: n }),
            e.jsx(nt, {}),
          ],
        }),
      }),
    })
  );
}
function Ut({ clientThreadId: t, setClientThreadId: s }) {
  const { isOpen: a, isLoading: i } = dt();
  return !i && a
    ? e.jsx(Lt, { clientThreadId: t, setClientThreadId: s })
    : null;
}
typeof window < "u" && (window._g = zt.GOKU_SERVICE);
export { Zt as C, Rt as F };
//# sourceMappingURL=h65roj7l7ph0bf74.js.map
