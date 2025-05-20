import { f as r, j as a } from "./lip667d8t42poxum.js";
import {
  m as b,
  aj as i,
  aO as c,
  B as v,
  c as w,
} from "./hgyrt6j47bbfyjrt.js";
import {
  cZ as W,
  c_ as _,
  c$ as k,
  an as M,
  d0 as x,
} from "./bek4a02po1hapmml.js";
import { u as E } from "./g5tla08b0bj0zd2r.js";
import { u as C } from "./cjq9b4kksqti8ri9.js";
import "./baqe411ijw4zke1t.js";
const j = (e) => {
    const { requestMicrophonePermissions: t } = E(),
      o = r().formatMessage({
        id: "vONrv3",
        defaultMessage: "Enable mic access to dictate",
      }),
      s = b();
    return async () => {
      if (
        (i.logEvent("Whisper on Web/Windows: Clicked to start dictation"),
        c.logEvent("chatgpt_composer_whisper_button_clicked_start"),
        !(await t()))
      )
        return s.danger(o);
      e();
    };
  },
  O = ({
    size: e = "medium",
    disabled: t,
    onExit: n,
    buttonClassName: o,
    invertColor: s,
    disableTooltip: l = !1,
    visualTreatment: p,
    ...u
  }) => {
    const m = r(),
      g = C((f) => f.status),
      h = j(n);
    g === "error" &&
      (i.logEvent("Whisper on Web/Windows: Error"),
      c.logEvent("chatgpt_composer_whisper_button_error"));
    const d = a.jsx(x, {
      "aria-label": "",
      className: s ? "h-5 w-5" : "h-[18px] w-[18px]",
      fontSize: "inherit",
    });
    return a.jsx(y, {
      disabled: l,
      children:
        p === "composer-btn"
          ? a.jsx("button", {
              ...u,
              "aria-label": m.formatMessage({
                id: "QFVCwl",
                defaultMessage: "Dictate button",
              }),
              type: "button",
              onClick: h,
              disabled: t,
              className: "composer-btn",
              children: d,
            })
          : a.jsx(v, {
              ...u,
              "aria-label": m.formatMessage({
                id: "QFVCwl",
                defaultMessage: "Dictate button",
              }),
              size: e,
              type: "button",
              onClick: h,
              disabled: t,
              className: w(
                s ? W : _,
                "[view-transition-name:var(--vt-composer-whisper-button)]",
                t ? "opacity-30" : !s && k,
                "dark:hover:bg-transparent dark:hover:opacity-100",
                o,
              ),
              children: d,
            }),
    });
  };

function y({ children: e, disabled: t = !1 }) {
  const n = r();
  return a.jsx(M, {
    open: t ? !1 : void 0,
    label: n.formatMessage({
      id: "abw2XH",
      defaultMessage: "Dictate",
    }),
    side: "bottom",
    onOpenChange: (o) => {
      o &&
        (i.logEvent("Whisper on Web/Windows: Button hover to see tooltip"),
        c.logEvent("chatgpt_composer_whisper_button_hovered"));
    },
    children: e,
  });
}
export { O as WhisperIconButton, j as useWhisperHandleClick };
//# sourceMappingURL=8puur6wsys4opzwx.js.map
