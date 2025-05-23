import {
  j as n,
  a5 as C,
  aa as $,
  f as k,
  r as u,
  a as q,
  a6 as H,
  g as V,
  d as z,
} from "./lip667d8t42poxum.js";
import {
  dm as X,
  dn as K,
  x as Q,
  c as m,
  ec as Y,
  dp as J,
  dr as Z,
  dv as ee,
  F as ae,
  dt as se,
  du as te,
  g as ne,
  af as re,
  s as P,
  v as oe,
  o as L,
  b9 as v,
  ag as I,
  b as N,
  m as ie,
  ao as U,
  aj as R,
  cU as le,
  aX as T,
  d$ as S,
  dH as ce,
  W as de,
  k as ue,
  B as fe,
} from "./hgyrt6j47bbfyjrt.js";
import {
  d6 as me,
  i as he,
  dK as A,
  dL as ge,
  dM as F,
  bY as xe,
  af as pe,
  bv as ke,
  dN as we,
  dO as ve,
  dP as be,
  bk as Me,
} from "./bek4a02po1hapmml.js";

function Se({
  className: a,
  children: e,
  position: t = "center",
  size: s,
  removePopoverStyling: r = !1,
  shadow: i = "normal",
}) {
  const o = $(),
    l = k(),
    d = Math.random() * 40 - 20;
  return (
    u.useEffect(() => {
      o.start({
        x: 0,
        y: 0,
        rotate: 0,
        opacity: 1,
        transition: {
          type: "spring",
          duration: 0.6,
          bounce: 0.15,
        },
      });
    }, [o]),
    n.jsx(C.div, {
      initial: {
        x: 0,
        y: "100%",
        rotate: 0,
        opacity: 1,
      },
      animate: o,
      exit: {
        x: 0,
        y: "100%",
        rotate: d,
        opacity: 1,
      },
      transition: {
        type: "spring",
        duration: 0.6,
        bounce: 0.15,
      },
      className: m(
        "z-50 h-full w-full overflow-y-auto",
        s !== "fullscreen" && "grid grid-cols-[10px_1fr_10px]",
        s !== "fullscreen" &&
          t === "center" &&
          "grid-rows-[minmax(10px,1fr)_auto_minmax(10px,1fr)] md:grid-rows-[minmax(20px,1fr)_auto_minmax(20px,1fr)]",
        s !== "fullscreen" &&
          t === "bottom" &&
          "grid-rows-[minmax(10px,1fr)_auto_10px] md:grid-rows-[minmax(20px,1fr)_auto_20px]",
      ),
      children: n.jsx(Z, {
        className: m(
          !r && "popover",
          "bg-token-sidebar-surface relative start-1/2 col-auto col-start-2 row-auto row-start-2 h-full w-full gap-4 p-4 text-start ltr:-translate-x-1/2 rtl:translate-x-1/2 dark:bg-[#171717]",
          s !== "fullscreen" && "rounded-[36px]",
          i === "normal" &&
            "shadow-[0_32px_48px_rgba(0,0,0,0.175),_0_0_1px_rgba(0,0,0,0.2)] dark:shadow-[0_32px_48px_rgba(0,0,0,0.175),_0_0_1px_rgba(255,255,255,0.4)]",
          a,
        ),
        "aria-description": l.formatMessage({
          id: "slide-up-modal.share-sheet.description",
          defaultMessage: "Share sheet",
        }),
        "aria-describedby": "",
        children: e,
      }),
    })
  );
}

function ye({
  isOpen: a,
  onClose: e,
  children: t,
  shouldIgnoreClickOutside: s = !1,
  className: r,
}) {
  return n.jsx(X, {
    open: a,
    onOpenChange: (i) => {
      s || (i === !1 && e(!1));
    },
    children: n.jsx(K, {
      container: Q()?.document.body,
      children: n.jsx("div", {
        className: m("absolute inset-0", r),
        children: t,
      }),
    }),
  });
}

function je({ className: a, children: e, showBackground: t = !0 }) {
  const s = Y(),
    r = t
      ? s
        ? "rgba(0, 0, 0, 0.8)"
        : "rgba(249,249,249,0.8)"
      : "rgba(0, 0, 0, 0)";
  return n.jsx(J, {
    asChild: !0,
    children: n.jsx(C.div, {
      initial: {
        backdropFilter: "blur(0px)",
        backgroundColor: s ? "rgba(0, 0, 0, 0)" : "rgba(255, 255, 255, 0)",
      },
      animate: {
        backdropFilter: t ? "blur(4px)" : "blur(0px)",
        backgroundColor: r,
      },
      exit: {
        backdropFilter: "blur(0px)",
        backgroundColor: s ? "rgba(0, 0, 0, 0)" : "rgba(255, 255, 255, 0)",
      },
      className: m("fixed inset-0 z-50", a),
      children: e,
    }),
  });
}

function _e({ title: a, description: e, icon: t, type: s }) {
  return n.jsxs("div", {
    className: "flex max-w-full min-w-0 items-center",
    children: [
      n.jsx(Pe, {
        icon: t,
        type: s,
      }),
      n.jsxs("div", {
        className: "flex max-w-full min-w-0 grow flex-col gap-1",
        children: [
          a != null &&
            n.jsx(se, {
              className:
                "text-token-text-primary text-3xl leading-6 font-semibold tracking-tight max-sm:text-xl",
              children: a,
            }),
          e != null &&
            n.jsx(te, {
              className: "text-token-text-tertiary text-sm",
              children: e,
            }),
        ],
      }),
    ],
  });
}

function Ce({
  title: a,
  accessory: e,
  description: t,
  withSeparator: s = !0,
  icon: r,
  type: i,
  closeButton: o,
  textCenter: l,
}) {
  return !a && !t
    ? null
    : n.jsxs(Le, {
        $hasSeparator: s,
        children: [
          n.jsx("div", {
            className: m(
              "flex max-w-full",
              l && "flex-1 justify-center text-center",
            ),
            children: n.jsx(_e, {
              title: a,
              description: t,
              icon: r,
              type: i,
            }),
          }),
          n.jsxs("div", {
            className: "flex items-center gap-5",
            children: [
              e,
              o != null &&
                n.jsx(ee, {
                  asChild: !0,
                  className: "sm:mt-0",
                  children: o,
                }),
            ],
          }),
        ],
      });
}
const Pe = ({ type: a, icon: e }) =>
    e == null
      ? null
      : n.jsx("div", {
          className: m(
            "me-4 flex h-12 w-12 shrink-0 items-center justify-center rounded-full sm:h-10 sm:w-10",
            a === "danger" && "bg-red-100",
            a === "warning" && "bg-yellow-100",
            a === "success" && "bg-green-100",
          ),
          children: n.jsx(e, {
            className: m(
              "icon-lg",
              a === "danger" && "text-red-600",
              a === "warning" && "text-yellow-700",
              a === "success" && "text-green-700",
            ),
            "aria-hidden": "true",
          }),
        }),
  Le = ae.div`px-4 pb-2 sm:p-6 flex items-center justify-between ${({ $hasSeparator: a }) => a && "border-b border-black/10 dark:border-white/10"}`,
  w = {
    Root: ye,
    Overlay: je,
    Content: Se,
    Header: Ce,
  },
  f = V({
    copyLink: {
      id: "postSharingModal.copyLink",
      defaultMessage: "Copy link",
    },
    linkCopied: {
      id: "postSharingModal.linkCopied",
      defaultMessage: "Link copied!",
    },
    failedToGenerateShareLink: {
      id: "postSharingModal.failedToGenerateShareLink",
      defaultMessage: "Failed to generate share link",
    },
    fromChatGPT: {
      id: "postSharingModal.fromChatGPT",
      defaultMessage: "From ChatGPT",
    },
    contentUnavailable: {
      id: "postSharingModal.contentUnavailable",
      defaultMessage: "Content Unavailable",
    },
    unavailableReasonGeneral: {
      id: "postSharingModal.unavailableReasonGeneral",
      defaultMessage:
        "This share link is not available because it doesn’t exist or you don’t have access to it.",
    },
    unavailableReasonWorkspace: {
      id: "postSharingModal.unavailableReasonWorkspace",
      defaultMessage:
        "This content was shared from a workspace you don’t have access to. Ask the owner to invite you if you’d like to view it.",
    },
    ok: {
      id: "postSharingModal.ok",
      defaultMessage: "OK",
    },
    shareLinkVisibleToWorkspaceOnly: {
      id: "postSharingModal.shareLinkVisibleToWorkspaceOnly",
      defaultMessage: "The share links are visible to workspace members only.",
    },
  });

function Ie(a) {
  const e = ce(a, (t) => S.getImageAssetPointers(t).length > 0);
  return e ? S.getImageAssetPointers(e)[0] : null;
}

function Ne({
  showLinkCopied: a,
  isGeneratingShareLink: e,
  onClick: t,
  postText: s,
  showDownloadButton: r,
  disabled: i,
}) {
  const o = k(),
    l = U()?.isWorkspaceAccount();
  let d = [
    {
      id: "copy",
      icon: e ? n.jsx(de, {}) : n.jsx(pe, {}),
      label: a ? o.formatMessage(f.linkCopied) : o.formatMessage(f.copyLink),
      action: "copy",
    },
  ];
  return (
    l && r
      ? d.push({
          id: "download",
          icon: n.jsx(ke, {}),
          label: o.formatMessage({
            id: "postSharingModal.download",
            defaultMessage: "Download",
          }),
          action: "download",
        })
      : (d = d.concat(
          {
            id: "x",
            href: (c) =>
              `https://twitter.com/intent/tweet?url=${encodeURIComponent(c)}&text=${s ? encodeURIComponent(s) : ""}`,
            icon: n.jsx(we, {
              initialFillColor: "var(--text-primary)",
            }),
            label: o.formatMessage({
              id: "postSharingModal.x",
              defaultMessage: "X",
            }),
            action: "share",
          },
          {
            id: "linkedin",
            href: (c) =>
              `https://www.linkedin.com/shareArticle?url=${encodeURIComponent(c)}&text=${s ? encodeURIComponent(s) : ""}`,
            icon: n.jsx(ve, {
              initialFillColor: "var(--text-primary)",
            }),
            label: o.formatMessage({
              id: "postSharingModal.linkedin",
              defaultMessage: "LinkedIn",
            }),
            action: "share",
          },
          {
            id: "reddit",
            href: (c) =>
              `https://www.reddit.com/submit?url=${encodeURIComponent(c)}&title=${s ? encodeURIComponent(s) : ""}`,
            icon: n.jsx(be, {
              initialFillColor: "var(--text-primary)",
            }),
            label: o.formatMessage({
              id: "postSharingModal.reddit",
              defaultMessage: "Reddit",
            }),
            action: "share",
          },
        )),
    n.jsx(n.Fragment, {
      children: d.map((c) =>
        n.jsxs(
          "button",
          {
            onClick: () => {
              t(c),
                R.logEventWithStatsig(
                  "Share Post: Social Clicked",
                  "chatgpt_post_share_link_social_clicked",
                  {
                    platform: c.id,
                  },
                );
            },
            disabled: i,
            className:
              "relative flex flex-col gap-y-4 disabled:opacity-50 max-sm:gap-y-2",
            children: [
              n.jsx("div", {
                className:
                  "flex h-16 w-16 items-center justify-center rounded-full shadow-lg max-sm:h-12 max-sm:w-12 max-sm:shadow-md dark:shadow-md",
                children: n.jsx("div", {
                  className:
                    "pointer-events-none flex h-8 w-8 items-center justify-center max-sm:h-6 max-sm:w-6",
                  children: c.icon,
                }),
              }),
              n.jsx("div", {
                className: "w-full text-center text-xs",
                children: c.label,
              }),
            ],
          },
          c.id,
        ),
      ),
    })
  );
}
async function Ue(a, e, t) {
  return A(e.asset_pointer) ? (await ge(a, [e], null, void 0, t))[0] : null;
}
const Re = async (a, e, t) => {
  const s = () =>
    I.findNode(
      T(e),
      ({ message: o }) =>
        o.id === t ||
        !!S.getImageAssetPointers(o).find((l) => l.asset_pointer === a),
    );
  let r = s();
  if (!r?.message && (await he(e), (r = s()), !r?.message)) return null;
  const i = v(e);
  return {
    postText: r.message.metadata?.image_gen_title,
    imageAssetPointer: Ie([r.message]),
    serverThreadId: i,
  };
};
async function Te(a, e, t, s) {
  const r = A(e.asset_pointer);
  if (!r) return null;
  const i = await N.safePost("/share/post", {
    requestBody: {
      post_text: t,
      attachments_to_create: [
        {
          kind: "image_share",
          file_id: r,
          conversation_id: a,
          width: s?.width,
          height: s?.height,
        },
      ],
    },
  });
  return F(i.post.id);
}
async function Ae(a, e, t) {
  const s = await N.safePost("/share/post", {
    requestBody: {
      post_text: t,
      attachments_to_create: [
        {
          kind: "message_slice",
          conversation_id: a,
          message_ids: e,
        },
      ],
    },
  });
  return F(s.post.id);
}

function Fe(a, e) {
  const t = T(a);
  return t
    ? {
        kind: "message_slice",
        messages: e
          .map((r) => {
            const i = I.findNode(t, ({ message: o }) => o.id === r);
            return i ? i.message : null;
          })
          .filter(Boolean),
      }
    : null;
}

function W({ postSharingData: a, closeModal: e }) {
  const {
      clientThreadId: t,
      postText: s,
      generateShareLinkFn: r,
      coverImageUrl: i,
      messageSliceIds: o,
    } = a,
    l = u.useRef(void 0),
    [d, c] = u.useState(!1),
    [g, x] = u.useState(!1),
    h = k(),
    b = ie(),
    [G, y] = u.useState(!0),
    O = U()?.isWorkspaceAccount();
  u.useEffect(() => {
    R.logEventWithStatsig(
      "Share Post: Post Sharing Modal Shown",
      "chatgpt_post_share_modal_shown",
    );
  }, []),
    u.useEffect(() => {
      l.current = void 0;
    }, [t]);
  const j = u.useMemo(
      () => (i || !o || o.length === 0 ? null : Fe(t, o)),
      [i, t, o],
    ),
    _ = v(t),
    D = async (p) => {
      if (!(d || !_) && _) {
        if (!l.current) {
          c(!0);
          try {
            const M = await r();
            M && (l.current = M);
          } catch {
            b.danger(h.formatMessage(f.failedToGenerateShareLink));
          } finally {
            c(!1);
          }
        }
        if (l.current) {
          if (p.action === "copy")
            navigator.clipboard.writeText(l.current),
              x(!0),
              b.success(h.formatMessage(f.linkCopied)),
              setTimeout(() => {
                x(!1);
              }, 3e3);
          else if (p.action === "share" && p.href)
            window.open(p.href(l.current), "_blank", "noopener,noreferrer");
          else if (p.action === "download") {
            if (!i) return;
            Me({
              url: i,
              fileName: `${s}.png`,
            });
          }
        }
      }
    },
    E = n.jsx("div", {
      className: m(
        "max-xs:max-h-[260px] flex h-[30vh] max-h-[550px] max-w-full justify-center rounded-xl max-sm:max-h-[300px]",
        !i &&
          "outline-token-border-light overflow-hidden shadow-sm outline outline-1",
      ),
      children: i
        ? n.jsx("img", {
            src: i,
            alt: s,
          })
        : j &&
          n.jsx(xe, {
            attachments: [j],
            clientThreadId: t,
          }),
    });
  return n.jsx(H, {
    onExitComplete: e,
    children:
      G &&
      n.jsx(w.Root, {
        isOpen: !0,
        onClose: () => {
          y(!1);
        },
        className: "max-w-[664px] px-4",
        children: n.jsx(w.Overlay, {
          showBackground: !0,
          children: n.jsxs(w.Content, {
            size: "normal",
            position: "center",
            className: m("flex flex-col pb-4 focus:outline-hidden", {
              "max-w-[640px]": "normal" === "normal",
            }),
            removePopoverStyling: !1,
            shadow: "normal",
            children: [
              n.jsx(w.Header, {
                title: s,
                type: "success",
                closeButton: n.jsx(le, {
                  onClick: () => y(!1),
                }),
              }),
              n.jsxs("div", {
                children: [
                  n.jsx("div", {
                    className: "pointer-events-none flex justify-center",
                    children: E,
                  }),
                  n.jsx("div", {
                    className:
                      "mt-12 flex flex-wrap justify-center space-y-4 space-x-12 max-sm:mt-6 max-sm:space-x-6",
                    children: n.jsx(Ne, {
                      showLinkCopied: g,
                      isGeneratingShareLink: d,
                      disabled: d,
                      onClick: D,
                      postText: s,
                      showDownloadButton: !!i,
                    }),
                  }),
                  O &&
                    n.jsx("p", {
                      className:
                        "text-token-text-tertiary text-center text-sm sm:mt-4",
                      children: h.formatMessage(
                        f.shareLinkVisibleToWorkspaceOnly,
                      ),
                    }),
                ],
              }),
            ],
          }),
        }),
      }),
  });
}
const We = u.createContext({
  postWithProfile: null,
});

function He() {
  return !!u.useContext(We)?.postWithProfile;
}
async function B({
  postText: a,
  clientThreadId: e,
  generateShareLinkFn: t,
  usePostText: s,
  useShareLink: r,
}) {
  if (!v(e)) return !1;
  try {
    const o = await t();
    return o
      ? (await navigator.share({
          text: s ? a : void 0,
          url: r ? o : void 0,
        }),
        !0)
      : !1;
  } catch {
    return !1;
  }
}
async function Be(a, e, t, s, r, i) {
  const o = await Re(a, e, t);
  if (!o?.imageAssetPointer || !o?.serverThreadId) return;
  const { postText: l, imageAssetPointer: d, serverThreadId: c } = o,
    g = await Ue(s, d, c);
  if (!g) return;
  const x = () => Te(c, d, l, g);
  if (i && P(r, "1138231213")) {
    const h = oe(r, "2382399797");
    if (
      await B({
        clientThreadId: e,
        postText: l,
        generateShareLinkFn: x,
        usePostText: h.get("navigator_share_text", !1),
        useShareLink: h.get("navigator_share_link", !1),
      })
    )
      return;
  }
  L(r, W, {
    postSharingData: {
      clientThreadId: e,
      postText: l,
      generateShareLinkFn: x,
      coverImageUrl: g?.url,
    },
  });
}
async function Ge(a, e, t, s, r) {
  const i = v(a);
  if (!i) return;
  const o = () => Ae(i, e, r);
  (s &&
    P(t, "1138231213") &&
    (await B({
      clientThreadId: a,
      generateShareLinkFn: o,
      useShareLink: !0,
    }))) ||
    L(t, W, {
      postSharingData: {
        clientThreadId: a,
        generateShareLinkFn: o,
        postText: r,
        messageSliceIds: e,
      },
    });
}

function Ve({
  assetPointer: a = null,
  clientThreadId: e,
  imageGenMessageId: t,
  messageSliceIds: s,
}) {
  const r = q(),
    i = ne(),
    o = me(),
    l = re(e, (d) => d?.title);
  return u.useCallback(async () => {
    t ? await Be(a, e, t, r, i, o) : s && (await Ge(e, s, i, o, l ?? void 0));
  }, [a, e, t, s, l, r, o, i]);
}

function Oe(a) {
  const e = k();
  switch (a) {
    case "general":
      return e.formatMessage(f.unavailableReasonGeneral);
    case "workspace":
      return e.formatMessage(f.unavailableReasonWorkspace);
    default:
      return e.formatMessage(f.unavailableReasonGeneral);
  }
}

function ze({ closeModal: a, reason: e }) {
  const t = k(),
    s = z(),
    r = () => {
      a(), s("/");
    },
    i = Oe(e);
  return n.jsx(ue, {
    testId: "modal-post-sharing-error",
    isOpen: !0,
    type: "danger",
    textCenter: !0,
    title: t.formatMessage(f.contentUnavailable),
    description: i,
    onClose: r,
    footerContent: n.jsx(fe, {
      size: "large",
      color: "primary",
      className: "w-full",
      onClick: r,
      children: t.formatMessage(f.ok),
    }),
  });
}
export { ze as P, We as a, He as b, Ve as u };
//# sourceMappingURL=bszrilswpsf8hziz.js.map
