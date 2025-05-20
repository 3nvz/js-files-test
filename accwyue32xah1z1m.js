import {
  fQ as v,
  aj as B,
  at as K,
  m as D,
  g as w,
  dJ as L,
  d1 as R,
  fR as T,
  fS as x,
  fT as z,
  ag as E,
  aX as F,
  aa as O,
  cj as G,
  b9 as I,
  o as P,
  fL as U,
  fU as Z,
} from "./hgyrt6j47bbfyjrt.js";
import {
  K as e,
  w as a,
  x as V,
  y as j,
  z as H,
  A as J,
  E as N,
  U as M,
  G as _,
  H as C,
  J as Q,
} from "./bek4a02po1hapmml.js";
import { c as W } from "./gzhfufyiohn83kuo.js";
import { r as X, g as $ } from "./lip667d8t42poxum.js";
const q = /```.*?\n([\s\S]+?)\n?```[^`]*$/gms;

function h() {
  return U() || Z();
}
const Y = {
  [e.Comma]: ",",
  [e.Enter]: "⏎",
  [e.Escape]: "Esc",
  [e.ArrowUp]: "↑",
  [e.ArrowDown]: "↓",
  [e.ArrowLeft]: "←",
  [e.ArrowRight]: "→",
  [e.Backspace]: "⌫",
  [e.Delete]: "⌦",
  [e.Tab]: "⇥",
  [e.Control]: "Ctrl",
  [e.Shift]: "Shift",
};

function ee(o) {
  switch (o) {
    case e.Mod:
      return h() ? "⌘" : "Ctrl";
    case e.Meta:
      return h() ? "⌘" : "Win";
    default:
      return Y[o];
  }
}
const ce = (o) => o.map((t) => ee(t) ?? t),
  n = $({
    newChat: {
      id: "keyboardActions.newChat",
      defaultMessage: "Open new chat",
    },
    focusPromptTextarea: {
      id: "keyboardActions.focusPromptTextarea",
      defaultMessage: "Focus chat input",
    },
    copyLastCodeBlock: {
      id: "keyboardActions.copyLastCodeBlock",
      defaultMessage: "Copy last code block",
    },
    copyLastResponse: {
      id: "keyboardActions.copyLastResponse",
      defaultMessage: "Copy last response",
    },
    toggleCustomInstructions: {
      id: "keyboardActions.toggleCustomInstructions",
      defaultMessage: "Set custom instructions",
    },
    navigationToggle: {
      id: "keyboardActions.navigationToggle",
      defaultMessage: "Toggle sidebar",
    },
    deleteChat: {
      id: "keyboardActions.deleteChat",
      defaultMessage: "Delete chat",
    },
    zoomIn: {
      id: "keyboardActions.zoomIn",
      defaultMessage: "Zoom in",
    },
    zoomOut: {
      id: "keyboardActions.zoomOut",
      defaultMessage: "Zoom out",
    },
    resetZoom: {
      id: "keyboardActions.resetZoom",
      defaultMessage: "Reset zoom",
    },
    cycleReasoningLevel: {
      id: "keyboardActions.cycleReasoningLevel",
      defaultMessage: "Cycle reasoning level",
    },
    toggleKeyboardActions: {
      id: "keyboardActions.toggleKeyboardActions",
      defaultMessage: "Show shortcuts",
    },
  }),
  de = new v(),
  oe = ({
    ctx: o,
    resetThreadAction: t,
    clientThreadId: s,
    focusPromptTextareaAction: i,
    toaster: r,
    isFannyPackEnabled: g,
    isZoomEnabled: c,
    isElectronClient: l,
  }) => {
    const y = l ? [[e.Mod, "n"]] : [];
    return [
      {
        key: "newChat",
        action: t || R,
        actionMessageDescriptor: n.newChat,
        group: a.Core,
        keyboardBinding: [e.Mod, e.Shift, "o"],
        altKeyboardBindings: g ? [...y] : [...y, [e.Mod, "k"]],
      },
      {
        key: "focusPromptTextarea",
        action: i ?? N,
        actionMessageDescriptor: n.focusPromptTextarea,
        group: a.Chat,
        keyboardBinding: [e.Shift, e.Escape],
      },
      {
        key: "copyLastCodeBlock",
        action: (d) => {
          if (s != null) {
            const f = E.getConversationTurns(F(s));
            for (let p = f.length - 1; p >= 0; p--) {
              const { messages: S } = f[p],
                b = [
                  ...S.reduce(
                    (k, u) =>
                      u.clientMetadata?.err == null &&
                      u.author.role === O.Assistant &&
                      u.recipient === "all"
                        ? k +
                          (k
                            ? `

`
                            : "") +
                          G(u)
                        : k,
                    "",
                  ).matchAll(q),
                ],
                m = b.length ? b[b.length - 1][1] : null;
              if (m != null) {
                _(m, r, d).then(() => {
                  r.success("Copied code block to clipboard");
                });
                break;
              }
            }
          }
        },
        actionMessageDescriptor: n.copyLastCodeBlock,
        group: a.Chat,
        keyboardBinding: [e.Mod, e.Shift, ";"],
        altKeyboardBindings: [[e.Mod, e.Shift, ":"]],
      },
      {
        key: "copyLastResponse",
        action: (d) => {
          s != null &&
            W(o, s, r, d, "keyboard").then(() => {
              r.success("Last response copied to clipboard");
            });
        },
        actionMessageDescriptor: n.copyLastResponse,
        group: a.Chat,
        keyboardBinding: [e.Mod, e.Shift, "c"],
      },
      {
        key: "toggleCustomInstructions",
        action: () => M.toggleModal(C.UserContext),
        actionMessageDescriptor: n.toggleCustomInstructions,
        group: a.Settings,
        keyboardBinding: [e.Mod, e.Shift, "i"],
      },
      {
        key: "navigationToggle",
        action: () => {
          M.setSidebarOpen(void 0);
        },
        actionMessageDescriptor: n.navigationToggle,
        group: a.Core,
        keyboardBinding: [e.Mod, e.Shift, "s"],
      },
      {
        key: "deleteChat",
        action: () => {
          if (s) {
            const d = I(s);
            d &&
              P(o, Q, {
                serverThreadId: d,
                isActiveConversation: !0,
              });
          }
        },
        actionMessageDescriptor: n.deleteChat,
        group: a.Chat,
        keyboardBinding: [e.Mod, e.Shift, e.Backspace],
        altKeyboardBindings: [[e.Mod, e.Shift, e.Delete]],
      },
      {
        key: "zoomIn",
        enabled: c,
        action: () => T(),
        actionMessageDescriptor: n.zoomIn,
        group: a.Chat,
        keyboardBinding: [e.Mod, "+"],
        altKeyboardBindings: [[e.Mod, "="]],
      },
      {
        key: "zoomOut",
        enabled: c,
        action: () => x(),
        actionMessageDescriptor: n.zoomOut,
        group: a.Chat,
        keyboardBinding: [e.Mod, "-"],
      },
      {
        key: "resetZoom",
        enabled: c,
        action: () => z(),
        actionMessageDescriptor: n.resetZoom,
        group: a.Chat,
        keyboardBinding: [e.Mod, "0"],
      },
      {
        key: "toggleKeyboardActions",
        action: () => M.toggleModal(C.KeyboardActions),
        actionMessageDescriptor: n.toggleKeyboardActions,
        group: a.Settings,
        keyboardBinding: [e.Mod, "/"],
      },
    ];
  },
  A = (o) =>
    V(
      o,
      (t) => {
        B.logEvent("Keyboard Shortcut", {
          keyboardActionKey: t.key,
        }),
          K.addAction("chatgpt_keyboard_shortcut", {
            keyboardActionKey: t.key,
          });
      },
      {
        enabled: !0,
      },
    ),
  te = ({
    resetThreadAction: o,
    clientThreadId: t,
    focusPromptTextareaAction: s,
  } = {}) => {
    const i = D(),
      { isFannyPackEnabled: r } = H(),
      g = J(),
      c = L,
      l = w();
    return X.useMemo(
      () =>
        oe({
          ctx: l,
          resetThreadAction: o,
          clientThreadId: t,
          focusPromptTextareaAction: s,
          toaster: i,
          isElectronClient: g,
          isFannyPackEnabled: r,
          isZoomEnabled: c,
        }).filter(({ enabled: d = !0 }) => d),
      [l, o, t, s, i, g, r, c],
    );
  },
  ge = ({
    resetThreadAction: o,
    clientThreadId: t,
    focusPromptTextareaAction: s,
  }) => {
    const i = te({
        resetThreadAction: o,
        clientThreadId: t,
        focusPromptTextareaAction: s,
      }),
      g = j((c) => c.isVoiceActive) ? [] : i;
    A(g);
  },
  le = ({ setSelectedVoiceIndex: o, prevVoiceIndex: t, nextVoiceIndex: s }) => {
    const i = [
      {
        key: "selectPrevVoice",
        action: () => {
          o(t);
        },
        actionMessageDescriptor: {
          defaultMessage: "Select previous voice",
        },
        group: a.Chat,
        keyboardBinding: [e.ArrowLeft],
      },
      {
        key: "selectNextVoice",
        action: () => {
          o(s);
        },
        actionMessageDescriptor: {
          defaultMessage: "Select next voice",
        },
        group: a.Chat,
        keyboardBinding: [e.ArrowRight],
      },
    ];
    A(i);
  };
export { de as G, ge as a, le as b, ce as g, h as i, te as u };
//# sourceMappingURL=accwyue32xah1z1m.js.map
