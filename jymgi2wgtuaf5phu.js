import { f as x, r as l, j as e, a5 as z, M as S } from "./lip667d8t42poxum.js";
import {
  ae as X,
  eq as I,
  d9 as V,
  c as A,
  F as H,
  aj as w,
  W as J,
} from "./hgyrt6j47bbfyjrt.js";
import {
  bh as E,
  bi as K,
  bj as D,
  bk as p,
  bl as M,
  bm as Q,
  bn as Y,
  bo as b,
  bp as Z,
  bq as ee,
  br as te,
  ax as ae,
  bs as se,
  aw as ne,
  bt as oe,
  bu as ie,
  an as re,
  bv as le,
  bw as de,
} from "./bek4a02po1hapmml.js";
import { u as ce } from "./bszrilswpsf8hziz.js";
import { I as ge } from "./eizg3cbui1uc8rqy.js";
const y = "ChatGPT Image";
function me({ imageAsset: t, serverThreadId: s }) {
  const { config: i } = I("2248456840"),
    n = i.get("enabled", !1),
    a = x(),
    d = E(),
    c = l.useCallback(() => {
      const g = new Date(),
        f = a.formatDate(g, {
          year: "numeric",
          month: "short",
          day: "numeric",
          hour: "2-digit",
          minute: "2-digit",
          second: "2-digit",
        });
      return `${y} ${f}.png`;
    }, [a]),
    r = D({ imageAssetPointer: t, serverThreadId: s }),
    h = l.useCallback(() => {
      n && r ? p({ url: r, fileName: c() }) : p({ url: t.url, fileName: c() }),
        M.download({ analyticsContext: d });
    }, [n, r, t, c, d]);
  return e.jsx(o, {
    tooltip: a.formatMessage({
      id: "imageEditorControls.downloadButtonTooltip",
      defaultMessage: "Save",
    }),
    onClick: h,
    children: e.jsx(le, {}),
  });
}
function ue({ onClose: t }) {
  const s = x();
  return e.jsx(o, {
    tooltip: s.formatMessage({
      id: "imageEditorControls.closeButtonTooltip",
      defaultMessage: "Close",
    }),
    onClick: t,
    children: e.jsx(V, { className: "icon-lg" }),
  });
}
function Ce({
  imageAsset: t,
  mode: s,
  setMode: i,
  inpaintingDrawingState: n,
  isLoadingNewImage: a,
  onClose: d,
  onInpaintClick: c,
  messageId: r,
  clientThreadId: h,
  serverThreadId: g,
}) {
  const { value: f } = X("706943082"),
    { config: v } = I("2248456840"),
    j = E(),
    F = v.get("enabled", !1),
    {
      canUndoDrawing: _,
      undoDrawing: N,
      canRedoDrawing: G,
      redoDrawing: B,
    } = n,
    m = x(),
    { rating: u, onLike: P, onDislike: T } = K(),
    [W, k] = l.useState(!1),
    C = l.useCallback(() => {
      const $ = new Date(),
        q = m.formatDate($, {
          year: "numeric",
          month: "short",
          day: "numeric",
          hour: "2-digit",
          minute: "2-digit",
          second: "2-digit",
        });
      return `${y} ${q}.png`;
    }, [m]),
    L = () => {
      T(), k(!0);
    },
    O = D({ imageAssetPointer: t, serverThreadId: g }),
    R = l.useCallback(() => {
      p({ url: t.url, fileName: C() }), M.download({ analyticsContext: j });
    }, [t, C, j]),
    U = Q();
  return e.jsxs(e.Fragment, {
    children: [
      e.jsxs(z.div, {
        className: "grid h-16 w-full grid-cols-3 px-4",
        ...Y,
        children: [
          e.jsx("div", {
            className: "flex items-center justify-self-start text-start",
            children: e.jsx(ue, { onClose: d }),
          }),
          e.jsx("div", {
            className:
              "flex flex-col items-center justify-center justify-self-center p-2",
            children:
              (!f || s === b.Selecting) &&
              e.jsx(e.Fragment, {
                children: e.jsx("div", {
                  className: "text-token-text-primary font-semibold",
                  children: e.jsx(S, {
                    id: "imageEditorControls.imageName",
                    defaultMessage: "Edit Selection",
                  }),
                }),
              }),
          }),
          e.jsx("div", {
            className: "flex items-center justify-self-end text-end",
            children:
              s === b.Selecting
                ? e.jsxs(e.Fragment, {
                    children: [
                      e.jsx(o, {
                        disabled: !_ || a,
                        onClick: N,
                        children: e.jsx(Z, {}),
                      }),
                      e.jsx(o, {
                        disabled: !G || a,
                        onClick: B,
                        children: e.jsx(ee, {}),
                      }),
                      e.jsx(fe, {}),
                      e.jsx(o, {
                        onClick: () => i(b.Default),
                        disabled: a,
                        children: e.jsx(S, {
                          id: "imageEditorControls.cancelButtonLabel",
                          defaultMessage: "Cancel",
                        }),
                      }),
                    ],
                  })
                : e.jsxs(e.Fragment, {
                    children: [
                      u !== !1 &&
                        e.jsx(o, {
                          tooltip: m.formatMessage({
                            id: "imageEditorControls.likeButtonTooltip",
                            defaultMessage: "Like",
                          }),
                          onClick: P,
                          children: u === !0 ? e.jsx(te, {}) : e.jsx(ae, {}),
                        }),
                      u !== !0 &&
                        e.jsx(o, {
                          tooltip: m.formatMessage({
                            id: "imageEditorControls.dislikeButtonTooltip",
                            defaultMessage: "Dislike",
                          }),
                          onClick: L,
                          children: u === !1 ? e.jsx(se, {}) : e.jsx(ne, {}),
                        }),
                      f &&
                        e.jsx(o, {
                          tooltip: m.formatMessage({
                            id: "imageEditorControls.inpaintButtonTooltip",
                            defaultMessage: "Select",
                          }),
                          onClick: c,
                          children: e.jsx(oe, {
                            className: "h-7 w-7 pe-1",
                            fill: "black",
                          }),
                        }),
                      e.jsx(me, { imageAsset: t, serverThreadId: g }),
                      r &&
                        U() &&
                        e.jsx(xe, { clientThreadId: h, messageId: r }),
                      F &&
                        O &&
                        e.jsx(ie, {
                          onDownload: R,
                          triggerClassName:
                            "rounded-sm h-10 w-10 p-0 font-semibold hover:bg-token-main-surface-tertiary group-radix-state-open:bg-token-main-surface-tertiary text-token-text-secondary",
                          iconClassName: "h-6 w-6",
                          dropdownClassName:
                            "z-50 min-w-fit origin-top-right text-token-text-primary",
                        }),
                    ],
                  }),
          }),
        ],
      }),
      W &&
        e.jsx(ge, {
          messageId: r ?? "",
          serverThreadId: g ?? "",
          rating: u,
          onClose: () => k(!1),
        }),
    ],
  });
}
function o({ children: t, tooltip: s, disabled: i, onClick: n }) {
  const a = e.jsx("button", {
    className: A(
      "hover:bg-token-main-surface-tertiary group-radix-state-open:bg-token-main-surface-tertiary rounded-sm p-2 font-semibold max-sm:p-1.5",
      i ? "text-token-text-quaternary" : "text-token-text-secondary",
    ),
    disabled: i,
    onClick: n,
    children: t,
  });
  return s != null ? e.jsx(re, { label: s, children: a }) : a;
}
const fe = H.div`mx-3 w-[1px] h-6 bg-token-border-default`;
function xe({ clientThreadId: t, messageId: s }) {
  const i = x(),
    [n, a] = l.useState(!1),
    d = ce({ clientThreadId: t, imageGenMessageId: s });
  return (
    l.useEffect(() => {
      w.logEventWithStatsig(
        "Share Post: Share Button Shown",
        "chatgpt_post_share_button_shown",
        { source: "image_gen_editor_controls" },
      );
    }, []),
    e.jsx(o, {
      tooltip: i.formatMessage({
        id: "imageEditorControls.share",
        defaultMessage: "Share image",
      }),
      onClick: async () => {
        a(!0);
        try {
          await d();
        } finally {
          a(!1);
        }
        w.logEventWithStatsig(
          "Share Post: Share Button Clicked",
          "chatgpt_post_share_button_clicked",
          { source: "image_gen_editor_controls" },
        );
      },
      disabled: n,
      children: n ? e.jsx(J, {}) : e.jsx(de, {}),
    })
  );
}
export { Ce as I, me as a, ue as b, o as c };
//# sourceMappingURL=jymgi2wgtuaf5phu.js.map
