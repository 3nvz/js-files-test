import { r as d, f as b, j as e, M as u, g as A } from "./lip667d8t42poxum.js";
import {
  ge as I,
  gf as E,
  m as N,
  ey as j,
  B as F,
  ae as y,
  e as L,
  cc as T,
  cd as V,
  ed as p,
} from "./hgyrt6j47bbfyjrt.js";
import { S as k } from "./lt5u077njj9ud9u7.js";
import {
  bc as U,
  bf as R,
  f4 as z,
  f5 as M,
  f6 as B,
  f7 as x,
  f8 as G,
  f9 as H,
  fa as J,
  fb as W,
  ac as n,
  fc as Y,
  bg as _,
} from "./bek4a02po1hapmml.js";
import { S as O } from "./e59f7y6b0ew7ftb0.js";
import { S as q } from "./kweqtgafphozzl00.js";

function K({ voice: s }) {
  const [r, o] = d.useState(!1),
    a = b(),
    t = I(),
    g = s.voice,
    l = s.preview_url,
    i = d.useRef({
      playPromise: null,
    }).current,
    c = E((f) => f.isPlaying && f.sourceUrl === l),
    S = N(),
    m = d.useCallback(async () => {
      if (!t) return;
      const f = {
        voice: g,
        source: l,
      };
      j.previews.click(f);
      try {
        o(!0), t.changeSource(l), (i.playPromise = t.play()), o(!1);
      } catch (D) {
        j.previews.error(D, f),
          S.danger(
            a.formatMessage({
              id: "DeIYxH",
              defaultMessage: "Something went wrong playing preview",
            }),
          );
      }
    }, [a, t, l, g, i, S]),
    h = d.useCallback(() => {
      t &&
        (i.playPromise
          ? i.playPromise.then(() => {
              t.stop(), (i.playPromise = null);
            })
          : t.stop());
    }, [t, i]),
    C = d.useCallback(() => {
      c ? h() : r || m();
    }, [h, m, r, c]);
  return (
    d.useEffect(
      () => () => {
        c && h();
      },
      [s, c, h],
    ),
    e.jsx(F, {
      onClick: C,
      color: "secondary",
      className:
        "flex flex-row flex-nowrap items-center gap-1 border-none font-normal",
      loading: r,
      icon: c ? q : O,
      children: c
        ? e.jsx(u, {
            id: "yGpEMJ",
            defaultMessage: "Stop",
          })
        : e.jsx(u, {
            id: "JwYDVp",
            defaultMessage: "Play",
          }),
    })
  );
}
const oe = {
  Trigger: Q,
  Content: X,
};

function w() {
  return y("174366048")?.value;
}

function Q() {
  return w()
    ? e.jsx(z, {
        value: M.Speech,
        icon: e.jsx(k, {
          className: "icon-sm",
        }),
        label: e.jsx(u, {
          id: "speechSettings.trigger",
          defaultMessage: "Speech",
        }),
      })
    : null;
}

function X() {
  const s = w(),
    r = y("3940529303").value,
    o = L();
  if (!s) return null;
  const a = r && o?.length && !o?.includes(T.VideoScreenSharing);
  return e.jsxs(B, {
    value: M.Speech,
    children: [
      e.jsx(x, {
        children: e.jsx(Z, {}),
      }),
      G()
        ? e.jsx(x, {
            children: e.jsx($, {}),
          })
        : null,
      a
        ? e.jsx(x, {
            children: e.jsx(ee, {}),
          })
        : null,
    ],
  });
}

function P(s) {
  const { data: r, isLoading: o } = U(s) || {},
    a = R();
  return {
    isLoading: o,
    value: r,
    setValue: (t) => {
      a.mutate({
        setting: s,
        value: t,
      });
    },
  };
}

function Z() {
  const { isLoading: s, value: r, setValue: o } = P(V.VoiceName),
    a = H(),
    t = J(),
    g = s ? "" : W(r, t),
    l = a.find(({ voice: i }) => i === g);
  return e.jsx(e.Fragment, {
    children: e.jsx("div", {
      className: "flex flex-col flex-nowrap gap-2",
      children: e.jsxs("div", {
        className: "flex items-center justify-between",
        children: [
          e.jsx("div", {
            children: e.jsx(u, {
              id: "speechSettings.content.voice",
              defaultMessage: "Voice",
            }),
          }),
          e.jsxs("div", {
            className: "flex flex-row flex-nowrap items-center gap-1",
            children: [
              l
                ? e.jsxs(e.Fragment, {
                    children: [
                      e.jsx(K, {
                        voice: l,
                      }),
                      e.jsx("div", {
                        className: "h-4 border-s",
                      }),
                    ],
                  })
                : null,
              e.jsxs(n.Root, {
                value: g,
                onValueChange: (i) => o(i),
                disabled: s,
                children: [
                  e.jsxs(n.Trigger, {
                    children: [e.jsx(n.Value, {}), e.jsx(n.Icon, {})],
                  }),
                  e.jsx(n.Portal, {
                    children: e.jsx(n.Content, {
                      children: a.map(({ voice: i, name: c }) =>
                        e.jsx(
                          n.Item,
                          {
                            value: i,
                            children: c,
                          },
                          i,
                        ),
                      ),
                    }),
                  }),
                ],
              }),
            ],
          }),
        ],
      }),
    }),
  });
}

function $() {
  const { isLoading: s, value: r, setValue: o } = P(V.VoiceMainLanguage);
  return e.jsxs(e.Fragment, {
    children: [
      e.jsxs("div", {
        className: "flex items-center justify-between",
        children: [
          e.jsx("div", {
            children: e.jsx(u, {
              id: "speechSettings.content.language",
              defaultMessage: "Main Language",
            }),
          }),
          e.jsxs(n.Root, {
            value: s ? "" : (r ?? p.Auto),
            onValueChange: (a) => o(a),
            disabled: s,
            children: [
              e.jsxs(n.Trigger, {
                children: [e.jsx(n.Value, {}), e.jsx(n.Icon, {})],
              }),
              e.jsx(n.Portal, {
                children: e.jsxs(n.Content, {
                  position: "popper",
                  style: {
                    maxHeight:
                      "calc(var(--radix-select-content-available-height) - 5rem)",
                  },
                  children: [
                    e.jsx(n.Item, {
                      value: p.Auto,
                      children: e.jsx(u, {
                        id: "speechSettings.content.autoDetect",
                        defaultMessage: "Auto-Detect",
                      }),
                    }),
                    Object.entries(p)
                      .filter(([a, t]) => t !== p.Auto)
                      .map(([a, t]) =>
                        e.jsx(
                          n.Item,
                          {
                            value: t,
                            className: "capitalize",
                            children: a,
                          },
                          t,
                        ),
                      ),
                  ],
                }),
              }),
            ],
          }),
        ],
      }),
      e.jsx(Y, {
        children: e.jsx(u, {
          id: "speechSettings.content.autoDetectDescription",
          defaultMessage:
            "For best results, select the language you mainly speak. If it's not listed, it may still be supported via auto-detection.",
        }),
      }),
    ],
  });
}

function ee() {
  const s = b();
  return e.jsx(_, {
    label: s.formatMessage(v.voiceAndScreenSharing),
    enabled: !1,
    onChange: () => {},
    disabled: !0,
    description: s.formatMessage(v.voiceAndScreenSharingDescription),
  });
}
const v = A({
  voiceAndScreenSharing: {
    id: "9dnywk",
    defaultMessage: "Voice and screen sharing",
  },
  voiceAndScreenSharingDescription: {
    id: "wjwSas",
    defaultMessage:
      "Sharing your screen and video while in voice mode has been disabled by your workspace administrator.",
  },
});
export { oe as S, P as u };
//# sourceMappingURL=abdc4q71tykmepri.js.map
